import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { voxelGeometry } from '../render/kit';

// Merged voxel models: many bevelled boxes with baked per-box colours become
// one geometry and one draw call. Used by every procedural prop in the kit.

// ---------------------------------------------------------------- seeded rng

/** Small, fast deterministic PRNG (mulberry32). */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Nudge a colour's lightness/hue slightly so repeated props never look cloned. */
export function vary(color: THREE.ColorRepresentation, r: () => number, amount = 0.05): THREE.Color {
  const c = new THREE.Color(color);
  const hsl = { h: 0, s: 0, l: 0 };
  c.getHSL(hsl);
  c.setHSL(
    (hsl.h + (r() - 0.5) * amount * 0.35 + 1) % 1,
    THREE.MathUtils.clamp(hsl.s + (r() - 0.5) * amount, 0, 1),
    THREE.MathUtils.clamp(hsl.l + (r() - 0.5) * amount * 1.4, 0, 1),
  );
  return c;
}

// ---------------------------------------------------------------- wind

/** Shared animation clock for wind-swayed foliage (set once per frame). */
export const windUniforms = { uWindTime: { value: 0 } };

function addWind(m: THREE.MeshStandardMaterial, strength: number, liftHeight: number): void {
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = windUniforms.uWindTime;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uWindTime;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            mat4 windModel = modelMatrix * instanceMatrix;
          #else
            mat4 windModel = modelMatrix;
          #endif
          vec4 wp = windModel * vec4(transformed, 1.0);
          float lift = smoothstep(0.02, ${liftHeight.toFixed(2)}, wp.y - windModel[3].y);
          float ph = wp.x * 0.35 + wp.z * 0.27;
          float sway = sin(uWindTime * 1.35 + ph) * 0.6 + sin(uWindTime * 2.3 + ph * 1.7) * 0.4;
          transformed.x += sway * ${strength.toFixed(3)} * lift;
          transformed.z += cos(uWindTime * 1.1 + ph) * ${(strength * 0.6).toFixed(3)} * lift;
        }`,
      );
  };
  m.customProgramCacheKey = () => `wind${strength}-${liftHeight}`;
}

// ---------------------------------------------------------------- materials

/** Solid voxel props (trunks, stone, wood, walls): colour lives in vertices. */
export const voxelMaterial = new THREE.MeshStandardMaterial({
  vertexColors: true, roughness: 0.86, metalness: 0,
});
/** Foliage/flowers: same look plus gentle GPU wind sway. */
export const foliageMaterial = new THREE.MeshStandardMaterial({
  vertexColors: true, roughness: 0.9, metalness: 0,
});
addWind(foliageMaterial, 0.07, 3.2);
/** Low grass and flowers sway a little more. */
export const grassMaterial = new THREE.MeshStandardMaterial({
  vertexColors: true, roughness: 0.95, metalness: 0,
});
addWind(grassMaterial, 0.09, 0.7);

// ---------------------------------------------------------------- builder

export interface Voxel {
  w: number; h: number; d: number;
  x: number; y: number; z: number;
  color: THREE.ColorRepresentation;
  rx?: number; ry?: number; rz?: number;
}

const tmpMatrix = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpEuler = new THREE.Euler();
const tmpPos = new THREE.Vector3();
const ONE = new THREE.Vector3(1, 1, 1);

/** Merge voxels into a single vertex-coloured geometry. */
export function mergeVoxels(voxels: Voxel[]): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const c = new THREE.Color();
  for (const v of voxels) {
    const g = voxelGeometry(v.w, v.h, v.d).clone();
    tmpEuler.set(v.rx ?? 0, v.ry ?? 0, v.rz ?? 0);
    tmpQuat.setFromEuler(tmpEuler);
    tmpPos.set(v.x, v.y, v.z);
    tmpMatrix.compose(tmpPos, tmpQuat, ONE);
    g.applyMatrix4(tmpMatrix);
    c.set(v.color);
    const n = g.getAttribute('position').count;
    const colors = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    // BoxGeometry fallbacks carry uv/index; drop them so everything merges
    if (g.index) parts.push(g.toNonIndexed());
    else parts.push(g);
    g.deleteAttribute('uv');
  }
  for (const p of parts) if (p.getAttribute('uv')) p.deleteAttribute('uv');
  const merged = mergeGeometries(parts, false)!;
  merged.computeBoundingSphere();
  return merged;
}

export function voxelMesh(voxels: Voxel[], material: THREE.Material = voxelMaterial): THREE.Mesh {
  const mesh = new THREE.Mesh(mergeVoxels(voxels), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * Bake a STATIC group: every descendant mesh with a plain, opaque colour
 * material (the block()/mat() kind) is merged — with its transform relative
 * to `group` — into one vertex-coloured mesh. Glows, transparent pieces,
 * textured or vertex-coloured meshes are left as they are. Only use on
 * groups whose children never move, hide or change colour afterwards.
 */
export function bakeStatic(group: THREE.Object3D, material: THREE.Material = voxelMaterial): THREE.Object3D {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const rel = new THREE.Matrix4();
  const parts: THREE.BufferGeometry[] = [];
  const victims: THREE.Mesh[] = [];
  const c = new THREE.Color();
  group.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || o === group || !m.visible) return;
    const mat = m.material as THREE.MeshStandardMaterial;
    if (Array.isArray(m.material) || !mat.isMeshStandardMaterial || mat.transparent || mat.map
      || mat.emissive.getHex() !== 0 || mat.vertexColors) return;
    let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal') g.deleteAttribute(name);
    }
    rel.multiplyMatrices(inv, m.matrixWorld);
    g.applyMatrix4(rel);
    c.copy(mat.color);
    const n = g.getAttribute('position').count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    parts.push(g);
    victims.push(m);
  });
  if (victims.length < 2) return group;
  const geo = mergeGeometries(parts, false);
  if (!geo) return group;
  for (const v of victims) v.parent?.remove(v);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = '__baked';
  group.add(mesh);
  return group;
}
