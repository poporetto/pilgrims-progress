import * as THREE from 'three';
import {
  rng, vary, voxelMesh, mergeVoxels, Voxel,
  voxelMaterial, foliageMaterial, grassMaterial,
} from './voxels';
import { makeContactShadow } from '../render/atmosphere';

// Procedural, seeded prop library. Every generator returns a small Group of
// merged, vertex-coloured meshes (1–3 draw calls) so worlds can be dense and
// varied while staying cheap to render.

export const WORLD = {
  grass: [0xa9d89a, 0x9fd08e, 0xb5e0a4, 0x98c889],
  leaf: [0x8cc47a, 0x7fba6e, 0x9fd18a, 0x76b06a, 0xa6d68f],
  leafDeep: [0x6fa564, 0x659a5c],
  blossom: [0xf6c2d1, 0xf3b3c6, 0xfad3de],
  autumn: [0xf2c27c, 0xeaa865, 0xf5d28e],
  pine: [0x5f9a72, 0x6aa77c, 0x558e69],
  trunk: [0xa47b58, 0x94704f, 0xb08662],
  stone: [0xcbc4ba, 0xbdb5ab, 0xd6cfc5, 0xb3aba1],
  moss: [0x9cc98a, 0x8fbd7e],
  wood: [0xc79c74, 0xb88d66, 0xd2a882],
  woodDark: [0x9c7454, 0x8d6749],
  flowers: [0xffd1dc, 0xfff0a8, 0xcfe3ff, 0xffffff, 0xf7b9c9, 0xe4d2ff, 0xffd5b0],
  earth: 0xe2c9a1,
} as const;

const pick = <T,>(arr: readonly T[], r: () => number): T => arr[Math.floor(r() * arr.length) % arr.length];

// ---------------------------------------------------------------- trees

export interface TreeOptions {
  seed?: number;
  height?: number;        // trunk height
  canopy?: number;        // canopy size
  kind?: 'leafy' | 'blossom' | 'autumn' | 'fruit';
  shadow?: boolean;       // add a soft contact blob
}

/** A cute round deciduous tree: tapered trunk + clustered chunky canopy. */
export function createTree(o: TreeOptions = {}): THREE.Group {
  const r = rng(o.seed ?? 1);
  const kind = o.kind ?? 'leafy';
  const trunkH = o.height ?? 1.3 + r() * 0.9;
  const canopy = o.canopy ?? 1.7 + r() * 0.8;
  const g = new THREE.Group();

  const trunkColor = vary(pick(WORLD.trunk, r), r, 0.04);
  const trunk: Voxel[] = [
    { w: 0.46, h: trunkH * 0.55, d: 0.46, x: 0, y: trunkH * 0.275, z: 0, color: trunkColor },
    { w: 0.36, h: trunkH * 0.55, d: 0.36, x: (r() - 0.5) * 0.08, y: trunkH * 0.72, z: (r() - 0.5) * 0.08, color: trunkColor },
    // root flares
    { w: 0.64, h: 0.16, d: 0.2, x: 0, y: 0.08, z: 0, color: trunkColor, ry: r() * 1.5 },
    { w: 0.2, h: 0.16, d: 0.64, x: 0, y: 0.08, z: 0, color: trunkColor, ry: r() * 1.5 },
  ];
  // a little side branch now and then
  if (r() > 0.45) {
    const side = r() > 0.5 ? 1 : -1;
    trunk.push({ w: 0.5, h: 0.14, d: 0.14, x: side * 0.28, y: trunkH * 0.72, z: 0, color: trunkColor, rz: side * 0.55 });
  }
  g.add(voxelMesh(trunk));

  const palette = kind === 'blossom' ? WORLD.blossom : kind === 'autumn' ? WORLD.autumn : WORLD.leaf;
  const cy = trunkH + canopy * 0.42;
  const leaves: Voxel[] = [];
  const base = pick(palette, r);
  // main mass
  leaves.push({ w: canopy, h: canopy * 0.82, d: canopy, x: 0, y: cy, z: 0, color: vary(base, r, 0.04), ry: r() * 0.6 });
  // clustered lobes around it for a rounded silhouette
  const lobes = 5 + Math.floor(r() * 3);
  for (let i = 0; i < lobes; i++) {
    const a = (i / lobes) * Math.PI * 2 + r() * 0.6;
    const up = (r() - 0.35) * 0.55;
    const s = canopy * (0.5 + r() * 0.22);
    const rad = canopy * 0.42;
    const light = up > 0.1;
    leaves.push({
      w: s, h: s * 0.8, d: s,
      x: Math.cos(a) * rad, y: cy + up * canopy * 0.6, z: Math.sin(a) * rad,
      color: vary(light ? pick(palette, r) : (kind === 'leafy' ? pick(WORLD.leafDeep, r) : base), r, 0.05),
      ry: r() * 1.2,
    });
  }
  // a sun-kissed crown
  leaves.push({ w: canopy * 0.62, h: canopy * 0.45, d: canopy * 0.62, x: (r() - 0.5) * 0.2, y: cy + canopy * 0.48, z: (r() - 0.5) * 0.2, color: vary(palette[palette.length - 1], r, 0.03), ry: r() });
  if (kind === 'fruit' || (kind === 'leafy' && r() > 0.7)) {
    const fruitColor = kind === 'fruit' ? 0xf29a8a : pick([0xffd1dc, 0xffffff, 0xfff0a8], r);
    for (let i = 0; i < 6; i++) {
      const a = r() * Math.PI * 2;
      const rr = canopy * 0.62;
      leaves.push({ w: 0.2, h: 0.2, d: 0.2, x: Math.cos(a) * rr, y: cy + (r() - 0.4) * canopy * 0.6, z: Math.sin(a) * rr, color: fruitColor });
    }
  }
  const crown = voxelMesh(leaves, foliageMaterial);
  g.add(crown);
  if (o.shadow !== false) g.add(makeContactShadow(canopy * 1.25, 0.22));
  g.userData.radius = 0.4;
  return g;
}

/** A tiered storybook conifer. */
export function createPine(o: { seed?: number; height?: number } = {}): THREE.Group {
  const r = rng(o.seed ?? 7);
  const h = o.height ?? 2.6 + r() * 1.6;
  const g = new THREE.Group();
  const trunkColor = vary(pick(WORLD.trunk, r), r);
  g.add(voxelMesh([{ w: 0.34, h: 0.9, d: 0.34, x: 0, y: 0.45, z: 0, color: trunkColor }]));
  const tiers = 4;
  const vox: Voxel[] = [];
  for (let i = 0; i < tiers; i++) {
    const u = i / (tiers - 1);
    const s = (1 - u * 0.72) * (h * 0.55);
    vox.push({
      w: s, h: h * 0.22, d: s,
      x: 0, y: 0.7 + i * h * 0.19, z: 0,
      ry: Math.PI / 4 + (i % 2) * 0.35,
      color: vary(WORLD.pine[i % WORLD.pine.length], r, 0.04),
    });
  }
  vox.push({ w: 0.22, h: 0.3, d: 0.22, x: 0, y: 0.7 + tiers * h * 0.19, z: 0, color: vary(WORLD.pine[0], r) });
  g.add(voxelMesh(vox, foliageMaterial));
  g.add(makeContactShadow(h * 0.55, 0.2));
  return g;
}

/** A rounded shrub, optionally dotted with flowers. */
export function createBush(o: { seed?: number; size?: number; flowers?: boolean; color?: number } = {}): THREE.Group {
  const r = rng(o.seed ?? 3);
  const s = o.size ?? 0.9 + r() * 0.5;
  const base = o.color ?? pick(WORLD.leaf, r);
  const vox: Voxel[] = [{ w: s, h: s * 0.7, d: s, x: 0, y: s * 0.35, z: 0, color: vary(base, r), ry: r() }];
  const n = 3 + Math.floor(r() * 2);
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2;
    const k = s * (0.5 + r() * 0.2);
    vox.push({ w: k, h: k * 0.75, d: k, x: Math.cos(a) * s * 0.42, y: k * 0.36, z: Math.sin(a) * s * 0.42, color: vary(base, r, 0.07), ry: r() });
  }
  vox.push({ w: s * 0.55, h: s * 0.4, d: s * 0.55, x: 0, y: s * 0.72, z: 0, color: vary(base, r, 0.04).offsetHSL(0, 0, 0.04) });
  if (o.flowers ?? r() > 0.5) {
    const fc = pick(WORLD.flowers, r);
    for (let i = 0; i < 5; i++) {
      const a = r() * Math.PI * 2;
      vox.push({ w: 0.14, h: 0.14, d: 0.14, x: Math.cos(a) * s * 0.52, y: s * (0.35 + r() * 0.4), z: Math.sin(a) * s * 0.52, color: fc });
    }
  }
  const g = new THREE.Group();
  g.add(voxelMesh(vox, foliageMaterial));
  g.add(makeContactShadow(s * 1.4, 0.2));
  return g;
}

// ---------------------------------------------------------------- rocks

const rockMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });

/** An irregular low-poly boulder (optionally mossy). */
export function createRock(o: { seed?: number; size?: number; moss?: boolean; color?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 11);
  const s = o.size ?? 0.6 + r() * 0.6;
  const geo = new THREE.IcosahedronGeometry(1, r() > 0.5 ? 1 : 0);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  // jitter shared vertices consistently (icosahedron positions are duplicated)
  const jit = new Map<string, number>();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i); const y = pos.getY(i); const z = pos.getZ(i);
    const key = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    let k = jit.get(key);
    if (k === undefined) { k = 0.78 + r() * 0.34; jit.set(key, k); }
    pos.setXYZ(i, x * k * s * (1.1 + r() * 0.0), Math.max(y, -0.35) * k * s * 0.72, z * k * s);
  }
  geo.computeVertexNormals();
  const base = new THREE.Color(o.color ?? pick(WORLD.stone, r));
  const moss = new THREE.Color(pick(WORLD.moss, r));
  const col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    // colour per face: lighter on top, mossy caps when asked
    const y = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    c.copy(base).offsetHSL(0, 0, (r() - 0.5) * 0.05 + (y > 0 ? 0.03 : -0.03));
    if (o.moss && y > s * 0.35) c.copy(moss).offsetHSL(0, 0, (r() - 0.5) * 0.04);
    for (let j = 0; j < 3; j++) { col[(i + j) * 3] = c.r; col[(i + j) * 3 + 1] = c.g; col[(i + j) * 3 + 2] = c.b; }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.Mesh(geo, rockMaterial);
  m.position.y = s * 0.2;
  m.rotation.y = r() * Math.PI * 2;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// ---------------------------------------------------------------- ground cover

export interface ScatterArea {
  /** return true where cover may grow (keeps it off paths, water, buildings) */
  allow?: (x: number, z: number) => boolean;
  minX: number; maxX: number; minZ: number; maxZ: number;
  y?: (x: number, z: number) => number;
}

/** A grass blade: a slim 4-sided pyramid (4 triangles), leaning a little. */
function bladeTris(out: number[], cols: number[], x: number, z: number, h: number, lean: number, rot: number, w: number): void {
  const c = Math.cos(rot); const s = Math.sin(rot);
  const base: Array<[number, number]> = [[-w, -w], [w, -w], [w, w], [-w, w]];
  const pts = base.map(([bx, bz]) => [x + bx * c - bz * s, 0, z + bx * s + bz * c]);
  const tip = [x + Math.cos(rot + 0.6) * lean, h, z + Math.sin(rot + 0.6) * lean];
  for (let i = 0; i < 4; i++) {
    const a = pts[i]; const b = pts[(i + 1) % 4];
    out.push(b[0], b[1], b[2], a[0], a[1], a[2], tip[0], tip[1], tip[2]);
    // darker at the root, pale at the tip (instance colour tints it green)
    cols.push(0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 1, 1, 1);
  }
}

function tuftGeometry(): THREE.BufferGeometry {
  const pos: number[] = [];
  const col: number[] = [];
  bladeTris(pos, col, 0, 0, 0.38, 0.05, 0, 0.045);
  bladeTris(pos, col, 0.09, 0.03, 0.28, 0.12, 0.9, 0.04);
  bladeTris(pos, col, -0.08, -0.04, 0.26, 0.12, 2.6, 0.04);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}
let tuftGeo: THREE.BufferGeometry | null = null;

const CHUNK = 14;

/** Place instances into per-chunk InstancedMeshes so off-screen ground cover culls. */
function chunked(
  geos: THREE.BufferGeometry[], mats: THREE.Material[],
  items: Array<{ m: THREE.Matrix4; colors: THREE.Color[] }>,
): THREE.Group {
  const g = new THREE.Group();
  const buckets = new Map<string, typeof items>();
  const p = new THREE.Vector3();
  for (const it of items) {
    p.setFromMatrixPosition(it.m);
    const key = `${Math.floor(p.x / CHUNK)},${Math.floor(p.z / CHUNK)}`;
    let b = buckets.get(key);
    if (!b) { b = []; buckets.set(key, b); }
    b.push(it);
  }
  for (const list of buckets.values()) {
    geos.forEach((geo, gi) => {
      const im = new THREE.InstancedMesh(geo, mats[gi], list.length);
      list.forEach((it, i) => {
        im.setMatrixAt(i, it.m);
        im.setColorAt(i, it.colors[gi]);
      });
      im.castShadow = false;
      im.receiveShadow = true;
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
      im.computeBoundingSphere();
      g.add(im);
    });
  }
  return g;
}

/** Thousands of swaying grass tufts, chunked for culling. */
export function scatterGrass(area: ScatterArea, count: number, seed = 5, colors: readonly number[] = WORLD.grass): THREE.Group {
  tuftGeo ??= tuftGeometry();
  const r = rng(seed);
  const items: Array<{ m: THREE.Matrix4; colors: THREE.Color[] }> = [];
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  for (let tries = 0; items.length < count && tries < count * 6; tries++) {
    const x = area.minX + r() * (area.maxX - area.minX);
    const z = area.minZ + r() * (area.maxZ - area.minZ);
    if (area.allow && !area.allow(x, z)) continue;
    q.setFromAxisAngle(up, r() * Math.PI * 2);
    const k = 0.75 + r() * 0.7;
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, area.y ? area.y(x, z) : 0, z), q,
      new THREE.Vector3(k, k * (0.8 + r() * 0.5), k),
    );
    items.push({ m, colors: [new THREE.Color(pick(colors, r)).offsetHSL(0, 0, -0.04 + r() * 0.05)] });
  }
  return chunked([tuftGeo], [grassMaterial], items);
}

let stemGeo: THREE.BufferGeometry | null = null;
let bloomGeo: THREE.BufferGeometry | null = null;
const bloomMaterial = grassMaterial.clone();
bloomMaterial.onBeforeCompile = grassMaterial.onBeforeCompile;
bloomMaterial.customProgramCacheKey = grassMaterial.customProgramCacheKey;

/** Scattered little flowers in clumps (stems + blooms), chunked for culling. */
export function scatterFlowers(area: ScatterArea, count: number, seed = 9, colors: readonly number[] = WORLD.flowers): THREE.Group {
  stemGeo ??= mergeVoxels([{ w: 0.05, h: 0.32, d: 0.05, x: 0, y: 0.16, z: 0, color: 0x7fb86e }]);
  bloomGeo ??= mergeVoxels([
    { w: 0.2, h: 0.08, d: 0.2, x: 0, y: 0.36, z: 0, color: 0xffffff, ry: Math.PI / 4 },
    { w: 0.09, h: 0.08, d: 0.09, x: 0, y: 0.42, z: 0, color: 0xffe08a },
  ]);
  const r = rng(seed);
  const items: Array<{ m: THREE.Matrix4; colors: THREE.Color[] }> = [];
  const up = new THREE.Vector3(0, 1, 0);
  const white = new THREE.Color(0xffffff);
  for (let tries = 0; items.length < count && tries < count * 8; tries++) {
    const cx = area.minX + r() * (area.maxX - area.minX);
    const cz = area.minZ + r() * (area.maxZ - area.minZ);
    const clump = 3 + Math.floor(r() * 5);
    const fc = pick(colors, r);
    for (let i = 0; i < clump && items.length < count; i++) {
      const x = cx + (r() - 0.5) * 1.2;
      const z = cz + (r() - 0.5) * 1.2;
      if (area.allow && !area.allow(x, z)) continue;
      const k = 0.8 + r() * 0.5;
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(x, area.y ? area.y(x, z) : 0, z),
        new THREE.Quaternion().setFromAxisAngle(up, r() * Math.PI),
        new THREE.Vector3(k, k, k),
      );
      items.push({ m, colors: [white, new THREE.Color(fc).offsetHSL(0, 0, (r() - 0.5) * 0.04)] });
    }
  }
  return chunked([stemGeo, bloomGeo], [grassMaterial, bloomMaterial], items);
}

// ---------------------------------------------------------------- built props

/** A picket-and-rail fence along a list of points (y = 0). */
export function createFence(points: Array<[number, number]>, o: { seed?: number; color?: number; spacing?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 21);
  const base = o.color ?? pick(WORLD.wood, r);
  const spacing = o.spacing ?? 1.1;
  const vox: Voxel[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[i + 1];
    const len = Math.hypot(x1 - x0, z1 - z0);
    const ang = Math.atan2(z1 - z0, x1 - x0);
    const n = Math.max(1, Math.round(len / spacing));
    for (let k = 0; k <= n; k++) {
      if (i > 0 && k === 0) continue;
      const u = k / n;
      vox.push({ w: 0.16, h: 0.8, d: 0.16, x: x0 + (x1 - x0) * u, y: 0.4, z: z0 + (z1 - z0) * u, color: vary(base, r, 0.05) });
      vox.push({ w: 0.2, h: 0.08, d: 0.2, x: x0 + (x1 - x0) * u, y: 0.84, z: z0 + (z1 - z0) * u, color: vary(base, r, 0.03).offsetHSL(0, 0, 0.04) });
    }
    const mx = (x0 + x1) / 2;
    const mz = (z0 + z1) / 2;
    for (const y of [0.34, 0.62]) {
      vox.push({ w: len, h: 0.08, d: 0.07, x: mx, y, z: mz, ry: -ang, color: vary(base, r, 0.03) });
    }
  }
  return voxelMesh(vox);
}

export const lanternGlowMaterial = new THREE.MeshStandardMaterial({
  color: 0xfff1c4, emissive: 0xffd98a, emissiveIntensity: 1.1, roughness: 0.6,
});

/** A wooden lamp post with a warm lantern. */
export function createLamp(o: { seed?: number; height?: number; light?: boolean } = {}): THREE.Group {
  const r = rng(o.seed ?? 31);
  const h = o.height ?? 2.2;
  const wood = vary(pick(WORLD.woodDark, r), r);
  const g = new THREE.Group();
  g.add(voxelMesh([
    { w: 0.4, h: 0.18, d: 0.4, x: 0, y: 0.09, z: 0, color: vary(pick(WORLD.stone, r), r) },
    { w: 0.16, h: h, d: 0.16, x: 0, y: h / 2, z: 0, color: wood },
    { w: 0.5, h: 0.1, d: 0.12, x: 0.2, y: h - 0.05, z: 0, color: wood },
    { w: 0.44, h: 0.08, d: 0.44, x: 0.4, y: h - 0.2, z: 0, color: 0x6e5a48 },
    { w: 0.34, h: 0.08, d: 0.34, x: 0.4, y: h - 0.62, z: 0, color: 0x6e5a48 },
  ]));
  const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.34, 0.28), lanternGlowMaterial);
  lantern.position.set(0.4, h - 0.42, 0);
  g.add(lantern);
  if (o.light) {
    const pl = new THREE.PointLight(0xffd9a0, 1.2, 7, 1.6);
    pl.position.copy(lantern.position);
    g.add(pl);
  }
  g.add(makeContactShadow(0.8, 0.22));
  return g;
}

/** A small park bench. */
export function createBench(o: { seed?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 41);
  const wood = vary(pick(WORLD.wood, r), r);
  const iron = 0x6e6358;
  return voxelMesh([
    { w: 1.6, h: 0.1, d: 0.5, x: 0, y: 0.46, z: 0, color: wood },
    { w: 1.6, h: 0.34, d: 0.08, x: 0, y: 0.78, z: -0.24, color: wood, rx: -0.12 },
    { w: 0.1, h: 0.46, d: 0.45, x: -0.68, y: 0.23, z: 0, color: iron },
    { w: 0.1, h: 0.46, d: 0.45, x: 0.68, y: 0.23, z: 0, color: iron },
  ]);
}

/** A wooden signpost with a board (text is implied, not rendered). */
export function createSign(o: { seed?: number; boards?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 51);
  const wood = vary(pick(WORLD.wood, r), r);
  const vox: Voxel[] = [{ w: 0.16, h: 1.5, d: 0.16, x: 0, y: 0.75, z: 0, color: vary(pick(WORLD.woodDark, r), r) }];
  const boards = o.boards ?? 1;
  for (let i = 0; i < boards; i++) {
    const dir = i % 2 ? -1 : 1;
    vox.push({ w: 1.1, h: 0.3, d: 0.08, x: dir * 0.3, y: 1.28 - i * 0.38, z: 0.1, color: vary(wood, r, 0.04) });
    vox.push({ w: 0.24, h: 0.24, d: 0.08, x: dir * 0.86, y: 1.28 - i * 0.38, z: 0.1, color: vary(wood, r, 0.04), rz: Math.PI / 4 });
    vox.push({ w: 0.7, h: 0.04, d: 0.02, x: dir * 0.26, y: 1.3 - i * 0.38, z: 0.15, color: 0x8a6a4f });
  }
  return voxelMesh(vox);
}

export function createCrate(o: { seed?: number; size?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 61);
  const s = o.size ?? 0.7;
  const wood = vary(pick(WORLD.wood, r), r);
  const dark = vary(pick(WORLD.woodDark, r), r);
  return voxelMesh([
    { w: s, h: s, d: s, x: 0, y: s / 2, z: 0, color: wood },
    { w: s * 1.02, h: s * 0.12, d: s * 1.02, x: 0, y: s * 0.94, z: 0, color: dark },
    { w: s * 1.02, h: s * 0.12, d: s * 1.02, x: 0, y: s * 0.06, z: 0, color: dark },
  ]);
}

export function createBarrel(o: { seed?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 71);
  const wood = vary(pick(WORLD.wood, r), r);
  return voxelMesh([
    { w: 0.62, h: 0.9, d: 0.62, x: 0, y: 0.45, z: 0, color: wood },
    { w: 0.7, h: 0.6, d: 0.7, x: 0, y: 0.45, z: 0, color: wood },
    { w: 0.72, h: 0.08, d: 0.72, x: 0, y: 0.2, z: 0, color: 0x7a6a5a },
    { w: 0.72, h: 0.08, d: 0.72, x: 0, y: 0.7, z: 0, color: 0x7a6a5a },
  ]);
}

export function createStump(o: { seed?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 81);
  const bark = vary(pick(WORLD.trunk, r), r);
  return voxelMesh([
    { w: 0.6, h: 0.36, d: 0.6, x: 0, y: 0.18, z: 0, color: bark },
    { w: 0.5, h: 0.04, d: 0.5, x: 0, y: 0.37, z: 0, color: 0xe8cfa6 },
    { w: 0.22, h: 0.12, d: 0.36, x: 0.36, y: 0.06, z: 0, color: bark, ry: 0.4 },
  ]);
}

export function createMushrooms(o: { seed?: number } = {}): THREE.Mesh {
  const r = rng(o.seed ?? 91);
  const vox: Voxel[] = [];
  const n = 2 + Math.floor(r() * 3);
  for (let i = 0; i < n; i++) {
    const x = (r() - 0.5) * 0.6;
    const z = (r() - 0.5) * 0.6;
    const h = 0.14 + r() * 0.14;
    vox.push({ w: 0.08, h, d: 0.08, x, y: h / 2, z, color: 0xf6ecd8 });
    vox.push({ w: 0.24, h: 0.1, d: 0.24, x, y: h + 0.04, z, color: r() > 0.5 ? 0xf2a3a0 : 0xe9c38e });
  }
  const m = voxelMesh(vox);
  m.castShadow = false;
  return m;
}

// ---------------------------------------------------------------- paving

export interface PaveOptions {
  seed?: number;
  stone?: number;                 // nominal stone size
  colors?: readonly number[];
  /** earthy bed under the stones (set false for none) */
  bed?: number | false;
  height?: number;
  /** skip stones where this returns false (e.g. under a well) */
  allow?: (x: number, z: number) => boolean;
  /** probability a stone is missing, letting the bed peek through */
  gaps?: number;
}

/** Hand-laid cobbles over an earthy bed, filling a rectangle; one draw call. */
export function createPavedArea(
  minX: number, maxX: number, minZ: number, maxZ: number, o: PaveOptions = {},
): THREE.Mesh {
  const r = rng(o.seed ?? Math.round(minX * 3 + maxZ * 5 + 17));
  const s = o.stone ?? 0.85;
  const colors = o.colors ?? [0xe6d6b6, 0xd9c7a3, 0xeee1c4, 0xcdbb97, 0xe1cfae];
  const h = o.height ?? 0.1;
  const vox: Voxel[] = [];
  if (o.bed !== false) {
    vox.push({
      w: maxX - minX + 0.3, h: 0.05, d: maxZ - minZ + 0.3,
      x: (minX + maxX) / 2, y: 0.025, z: (minZ + maxZ) / 2,
      color: o.bed ?? 0xd9c29a,
    });
  }
  let row = 0;
  for (let z = minZ + s / 2; z < maxZ; z += s, row++) {
    const off = row % 2 ? s * 0.5 : 0;
    for (let x = minX + s / 2 - off; x < maxX + s / 2; x += s) {
      const cx = THREE.MathUtils.clamp(x, minX + s * 0.25, maxX - s * 0.25);
      if (o.allow && !o.allow(cx, z)) continue;
      if (r() < (o.gaps ?? 0.03)) continue;
      const w = s * (0.82 + r() * 0.12);
      const d = s * (0.8 + r() * 0.12);
      const sh = h * (0.8 + r() * 0.5);
      vox.push({
        w: Math.min(w, (maxX - minX)), h: sh, d: Math.min(d, maxZ - minZ),
        x: cx + (r() - 0.5) * 0.06, y: 0.05 + sh / 2, z: z + (r() - 0.5) * 0.06,
        ry: (r() - 0.5) * 0.12,
        color: vary(pick(colors, r), r, 0.035),
      });
    }
  }
  const m = voxelMesh(vox);
  m.castShadow = false;
  m.receiveShadow = true;
  return m;
}

// ---------------------------------------------------------------- houses

export interface HouseOptions {
  seed?: number;
  w?: number; d?: number; h?: number;
  wall?: number; roof?: number; trim?: number; door?: number;
  chimney?: boolean;
}

/**
 * A storybook cottage: plinth, walls with corner trims, framed glowing
 * windows, a door with a step and a stepped pitched roof with eaves.
 * Returns a Group whose `userData.chimneyTop` (if any) marks where smoke rises.
 */
export function createHouse(o: HouseOptions = {}): THREE.Group {
  const r = rng(o.seed ?? 101);
  const w = o.w ?? 3.2;
  const d = o.d ?? 2.6;
  const h = o.h ?? 2.0;
  const wall = new THREE.Color(o.wall ?? 0xfbeedb);
  const roof = new THREE.Color(o.roof ?? 0xe99a8e);
  const trim = new THREE.Color(o.trim ?? 0xb88d66);
  const doorC = new THREE.Color(o.door ?? 0x8fb8d0);
  const stone = vary(pick(WORLD.stone, r), r);
  const vox: Voxel[] = [
    { w: w + 0.3, h: 0.24, d: d + 0.3, x: 0, y: 0.12, z: 0, color: stone },
    { w, h, d, x: 0, y: 0.24 + h / 2, z: 0, color: wall },
  ];
  // corner posts
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    vox.push({ w: 0.18, h, d: 0.18, x: sx * (w / 2 - 0.02), y: 0.24 + h / 2, z: sz * (d / 2 - 0.02), color: trim });
  }
  vox.push({ w: w + 0.06, h: 0.14, d: d + 0.06, x: 0, y: 0.24 + h - 0.05, z: 0, color: trim });
  // door (front = +z) with frame and step
  const dx = (r() - 0.5) * (w * 0.25);
  vox.push({ w: 0.78, h: 1.3, d: 0.1, x: dx, y: 0.24 + 0.65, z: d / 2 + 0.03, color: doorC });
  vox.push({ w: 0.96, h: 0.12, d: 0.14, x: dx, y: 0.24 + 1.36, z: d / 2 + 0.04, color: trim });
  vox.push({ w: 1.0, h: 0.12, d: 0.4, x: dx, y: 0.06, z: d / 2 + 0.3, color: stone });
  vox.push({ w: 0.08, h: 0.08, d: 0.08, x: dx + 0.26, y: 0.24 + 0.65, z: d / 2 + 0.1, color: 0xf0cf6a });
  // windows on the front and sides
  const windowGlow = new THREE.Color(0xfff0c2);
  const win = (x: number, y: number, z: number, ry: number) => {
    vox.push({ w: 0.66, h: 0.62, d: 0.08, x, y, z, ry, color: trim });
    vox.push({ w: 0.5, h: 0.46, d: 0.1, x, y, z, ry, color: windowGlow });
    vox.push({ w: 0.72, h: 0.1, d: 0.16, x, y: y - 0.34, z, ry, color: trim });
  };
  const wy = 0.24 + h * 0.58;
  const wx = dx > 0 ? -w * 0.28 : w * 0.28;
  win(wx, wy, d / 2 + 0.04, 0);
  win(-w / 2 - 0.04, wy, 0, Math.PI / 2);
  win(w / 2 + 0.04, wy, 0, Math.PI / 2);
  // flower box under the front window
  vox.push({ w: 0.7, h: 0.16, d: 0.2, x: wx, y: wy - 0.44, z: d / 2 + 0.14, color: 0xa47b58 });
  const fc = pick(WORLD.flowers, r);
  for (let i = -1; i <= 1; i++) vox.push({ w: 0.13, h: 0.13, d: 0.13, x: wx + i * 0.2, y: wy - 0.3, z: d / 2 + 0.14, color: fc });

  // stepped pitched roof, ridge along x, with overhanging eaves
  const steps = 4;
  const roofBase = 0.24 + h;
  const eave = 0.32;
  for (let i = 0; i < steps; i++) {
    const u = i / steps;
    const depth = (d + eave * 2) * (1 - u * 0.86);
    const col = roof.clone().offsetHSL(0, 0, (i % 2 ? 0.02 : -0.01) - u * 0.02);
    vox.push({ w: w + eave * 2, h: 0.36, d: depth, x: 0, y: roofBase + 0.18 + i * 0.32, z: 0, color: col });
  }
  vox.push({ w: w + eave * 2 + 0.1, h: 0.14, d: 0.3, x: 0, y: roofBase + 0.18 + steps * 0.32, z: 0, color: roof.clone().offsetHSL(0, -0.05, -0.08) });
  let chimneyTop: THREE.Vector3 | null = null;
  if (o.chimney ?? r() > 0.3) {
    const cx = w * 0.28 * (r() > 0.5 ? 1 : -1);
    const cz = -d * 0.18;
    const ch = 1.1;
    vox.push({ w: 0.46, h: ch, d: 0.46, x: cx, y: roofBase + 0.9, z: cz, color: stone });
    vox.push({ w: 0.56, h: 0.14, d: 0.56, x: cx, y: roofBase + 0.9 + ch / 2, z: cz, color: stone.clone().offsetHSL(0, 0, -0.06) });
    chimneyTop = new THREE.Vector3(cx, roofBase + 0.9 + ch / 2 + 0.1, cz);
  }
  const g = new THREE.Group();
  g.add(voxelMesh(vox));
  g.userData.chimneyTop = chimneyTop;
  g.userData.footprint = { w: w + 0.3, d: d + 0.3 };
  return g;
}

export { voxelMaterial };
