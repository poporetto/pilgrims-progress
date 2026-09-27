import * as THREE from 'three';
import { rng } from './voxels';

// Low-poly, flat-shaded terrain for chapter scenes. Gameplay areas stay
// exactly flat at y = 0 (chapter logic pins actors to the ground plane), while
// the land beyond them rolls into soft hills that frame the view like the
// raised edges of a diorama.

/** Seeded 2D value noise with smooth interpolation. */
export function valueNoise(seed: number): (x: number, z: number) => number {
  const r = rng(seed);
  const size = 256;
  const perm = new Uint8Array(size * 2);
  const vals = new Float32Array(size);
  for (let i = 0; i < size; i++) { perm[i] = i; vals[i] = r(); }
  for (let i = size - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    const t = perm[i]; perm[i] = perm[j]; perm[j] = t;
  }
  for (let i = 0; i < size; i++) perm[i + size] = perm[i];
  const at = (ix: number, iz: number): number => vals[perm[(perm[ix & 255] + iz) & 255]];
  const s = (t: number): number => t * t * (3 - 2 * t);
  return (x: number, z: number) => {
    const ix = Math.floor(x); const iz = Math.floor(z);
    const fx = s(x - ix); const fz = s(z - iz);
    const a = at(ix, iz); const b = at(ix + 1, iz);
    const c = at(ix, iz + 1); const d = at(ix + 1, iz + 1);
    return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
  };
}

export function fbm(noise: (x: number, z: number) => number, x: number, z: number, octaves = 3): number {
  let amp = 0.5; let freq = 1; let sum = 0; let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += noise(x * freq, z * freq) * amp;
    norm += amp; amp *= 0.5; freq *= 2.03;
  }
  return sum / norm;
}

export interface TerrainOptions {
  minX: number; maxX: number; minZ: number; maxZ: number;
  /** quad size in world units (smaller = more facets) */
  cell?: number;
  seed?: number;
  /** 1 = must be flat at y=0 (walkable/gameplay), 0 = free to become hills */
  flat: (x: number, z: number) => number;
  /** peak hill height outside flat areas */
  hills?: number;
  /** 0..1 mask painting a worn earth path */
  path?: (x: number, z: number) => number;
  /** optional extra height function added on top (cliffs, mounds, basins) */
  shape?: (x: number, z: number) => number;
  grass?: readonly number[];
  highGrass?: number;
  earth?: number;
  /** sink terrain at the far edges so it melts into fog */
  y?: number;
  /** final per-face colour adjustment (dry ground near a mountain, snow…) */
  tint?: (x: number, z: number, y: number, c: THREE.Color) => void;
}

export interface Terrain {
  mesh: THREE.Mesh;
  heightAt: (x: number, z: number) => number;
}

const terrainMaterial = new THREE.MeshStandardMaterial({
  vertexColors: true, roughness: 0.97, metalness: 0, flatShading: true,
});

export function createTerrain(o: TerrainOptions): Terrain {
  const cell = o.cell ?? 1.6;
  const nx = Math.max(2, Math.round((o.maxX - o.minX) / cell));
  const nz = Math.max(2, Math.round((o.maxZ - o.minZ) / cell));
  const noise = valueNoise(o.seed ?? 3);
  const detail = valueNoise((o.seed ?? 3) + 101);
  const hills = o.hills ?? 2.2;

  const heightAt = (x: number, z: number): number => {
    const f = THREE.MathUtils.clamp(o.flat(x, z), 0, 1);
    const free = 1 - f;
    let y = fbm(noise, x * 0.045, z * 0.045, 3) * hills * 1.6 - hills * 0.35;
    y = Math.max(y, 0) + fbm(detail, x * 0.3, z * 0.3, 2) * 0.18;
    y *= free * free * (3 - 2 * free); // smooth transition out of the flat zone
    if (o.shape) y += o.shape(x, z);
    return y + (o.y ?? 0);
  };

  // jitter the grid slightly for an organic, hand-made faceting
  const r = rng((o.seed ?? 3) + 7);
  const px: number[] = [];
  const pz: number[] = [];
  for (let j = 0; j <= nz; j++) {
    for (let i = 0; i <= nx; i++) {
      const edge = i === 0 || j === 0 || i === nx || j === nz;
      px.push(o.minX + (i / nx) * (o.maxX - o.minX) + (edge ? 0 : (r() - 0.5) * cell * 0.35));
      pz.push(o.minZ + (j / nz) * (o.maxZ - o.minZ) + (edge ? 0 : (r() - 0.5) * cell * 0.35));
    }
  }
  const idx = (i: number, j: number) => j * (nx + 1) + i;
  const py = px.map((x, k) => heightAt(x, pz[k]));

  const grass = o.grass ?? [0xa9d89a, 0x9fd08e, 0xb2dea2, 0x97c887];
  const highGrass = new THREE.Color(o.highGrass ?? 0xbfe3a6);
  const earth = new THREE.Color(o.earth ?? 0xe2c9a1);
  const grassCols = grass.map((c) => new THREE.Color(c));
  const pos: number[] = [];
  const col: number[] = [];
  const c = new THREE.Color();
  const tri = (a: number, b: number, d: number) => {
    const cx = (px[a] + px[b] + px[d]) / 3;
    const cz = (pz[a] + pz[b] + pz[d]) / 3;
    const cy = (py[a] + py[b] + py[d]) / 3;
    const n = fbm(detail, cx * 0.12, cz * 0.12, 2);
    c.copy(grassCols[Math.min(grassCols.length - 1, Math.floor(n * grassCols.length * 1.3) % grassCols.length)]);
    c.lerp(highGrass, THREE.MathUtils.clamp(cy / (hills * 1.6), 0, 0.55));
    c.offsetHSL(0, 0, (r() - 0.5) * 0.025);
    if (o.path) {
      const p = THREE.MathUtils.clamp(o.path(cx, cz), 0, 1);
      if (p > 0) c.lerp(earth, p);
    }
    if (o.tint) o.tint(cx, cz, cy, c);
    for (const v of [a, b, d]) {
      pos.push(px[v], py[v], pz[v]);
      col.push(c.r, c.g, c.b);
    }
  };
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      const a = idx(i, j); const b = idx(i + 1, j);
      const d = idx(i, j + 1); const e = idx(i + 1, j + 1);
      // alternate the split diagonal for a less regular facet pattern
      if ((i + j) % 2 === 0) { tri(a, d, b); tri(b, d, e); } else { tri(a, d, e); tri(a, e, b); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  g.computeBoundingSphere();
  const mesh = new THREE.Mesh(g, terrainMaterial);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.name = 'terrain';
  return { mesh, heightAt };
}

/** Smooth 0..1 falloff: 1 inside `inner`, 0 beyond `outer`. */
export function band(d: number, inner: number, outer: number): number {
  if (d <= inner) return 1;
  if (d >= outer) return 0;
  const t = (d - inner) / (outer - inner);
  return 1 - t * t * (3 - 2 * t);
}
