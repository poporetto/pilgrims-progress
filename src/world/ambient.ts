import * as THREE from 'three';
import { rng, windUniforms } from './voxels';

// Ambient life that costs nothing on the CPU: every creature is one instance
// of a shared mesh, and its whole flight path is computed in the vertex
// shader from the global wind clock plus a per-instance home and phase.

export interface AmbientArea {
  minX: number; maxX: number; minZ: number; maxZ: number;
  allow?: (x: number, z: number) => boolean;
  y?: (x: number, z: number) => number;
}

function scatterHomes(area: AmbientArea, count: number, seed: number): { home: Float32Array; phase: Float32Array } {
  const r = rng(seed);
  const home = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  let k = 0;
  for (let tries = 0; k < count && tries < count * 40; tries++) {
    const x = area.minX + r() * (area.maxX - area.minX);
    const z = area.minZ + r() * (area.maxZ - area.minZ);
    if (area.allow && !area.allow(x, z)) continue;
    home[k * 3] = x; home[k * 3 + 1] = area.y ? area.y(x, z) : 0; home[k * 3 + 2] = z;
    phase[k] = r() * 100;
    k++;
  }
  return { home: home.subarray(0, k * 3), phase: phase.subarray(0, k) };
}

function instanced(geo: THREE.BufferGeometry, material: THREE.Material, homes: { home: Float32Array; phase: Float32Array }, colors: readonly number[], seed: number): THREE.InstancedMesh {
  const n = homes.phase.length;
  const g = geo.clone();
  g.setAttribute('aHome', new THREE.InstancedBufferAttribute(homes.home, 3));
  g.setAttribute('aPhase', new THREE.InstancedBufferAttribute(homes.phase, 1));
  const mesh = new THREE.InstancedMesh(g, material, Math.max(n, 1));
  mesh.count = n;
  const r = rng(seed + 9);
  const c = new THREE.Color();
  for (let i = 0; i < n; i++) mesh.setColorAt(i, c.set(colors[Math.floor(r() * colors.length)]));
  mesh.frustumCulled = false; // positions live in the shader
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

// Butterfly: two wing quads hinged on the body axis (x = 0).
function butterflyGeometry(): THREE.BufferGeometry {
  const w = 0.24; const d = 0.19;
  const pos = [
    0, 0, -d, -w, 0, -d * 0.6, -w, 0, d, 0, 0, -d, -w, 0, d, 0, 0, d * 0.7,
    0, 0, -d, w, 0, d, w, 0, -d * 0.6, 0, 0, -d, 0, 0, d * 0.7, w, 0, d,
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length / 3).fill([0, 1, 0]).flat(), 3));
  return g;
}

const butterflyMaterial = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, fog: true });
butterflyMaterial.onBeforeCompile = (shader) => {
  shader.uniforms.uWindTime = windUniforms.uWindTime;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nuniform float uWindTime;\nattribute vec3 aHome;\nattribute float aPhase;')
    .replace('#include <begin_vertex>', `
      vec3 transformed = position;
      float t = uWindTime * 0.55 + aPhase;
      // flap: rotate each wing about the body axis
      float flap = sin(uWindTime * 16.0 + aPhase * 7.0) * 0.9;
      transformed = vec3(position.x * cos(flap), abs(position.x) * sin(flap), position.z);
      // lazy looping wander around home
      vec3 p = aHome + vec3(sin(t) * 1.8 + sin(t * 2.3) * 0.6, 0.7 + sin(t * 1.7) * 0.35 + sin(t * 4.1) * 0.12, cos(t * 0.8) * 1.6);
      vec3 v = vec3(cos(t) * 1.8 + cos(t * 2.3) * 1.4, 0.0, -sin(t * 0.8) * 1.3);
      float yaw = atan(v.x, v.z);
      float cy = cos(yaw); float sy = sin(yaw);
      transformed = vec3(transformed.x * cy + transformed.z * sy, transformed.y, -transformed.x * sy + transformed.z * cy) + p;
    `)
    .replace('#include <project_vertex>', `
      vec4 mvPosition = viewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix * mvPosition;
    `);
};
butterflyMaterial.customProgramCacheKey = () => 'ambient-butterfly';

// Drifting petals / leaves: tiny squares that fall slowly, spin and recycle.
const petalMaterial = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, fog: true });
petalMaterial.onBeforeCompile = (shader) => {
  shader.uniforms.uWindTime = windUniforms.uWindTime;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nuniform float uWindTime;\nattribute vec3 aHome;\nattribute float aPhase;')
    .replace('#include <begin_vertex>', `
      float life = fract(uWindTime * 0.07 + aPhase * 0.137);
      float s = uWindTime * 2.0 + aPhase;
      vec3 q = position;
      q = vec3(q.x * cos(s) - q.y * sin(s), q.x * sin(s) + q.y * cos(s), q.z);
      q = vec3(q.x, q.y * cos(s * 0.7) - q.z * sin(s * 0.7), q.y * sin(s * 0.7) + q.z * cos(s * 0.7));
      float fade = smoothstep(0.0, 0.08, life) * (1.0 - smoothstep(0.9, 1.0, life));
      vec3 transformed = q * fade + aHome + vec3(life * 3.5 + sin(s * 0.6) * 0.5, 6.0 * (1.0 - life) + 0.15, sin(s * 0.45) * 0.8);
    `)
    .replace('#include <project_vertex>', `
      vec4 mvPosition = viewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix * mvPosition;
    `);
};
petalMaterial.customProgramCacheKey = () => 'ambient-petal';

export function createButterflies(area: AmbientArea, count: number, seed: number, colors: readonly number[] = [0xffd1e3, 0xfff1a8, 0xcfe8ff, 0xffffff, 0xffc9a3]): THREE.InstancedMesh {
  const m = instanced(butterflyGeometry(), butterflyMaterial, scatterHomes(area, count, seed), colors, seed);
  m.name = 'butterflies';
  return m;
}

export function createPetals(area: AmbientArea, count: number, seed: number, colors: readonly number[] = [0xffd6e6, 0xfff4d6, 0xf8c8d8]): THREE.InstancedMesh {
  const m = instanced(new THREE.PlaneGeometry(0.13, 0.13), petalMaterial, scatterHomes(area, count, seed), colors, seed);
  m.name = 'petals';
  return m;
}
