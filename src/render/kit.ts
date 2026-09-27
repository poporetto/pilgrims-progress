import * as THREE from 'three';

// Shared building blocks for every scene: a softly bevelled voxel box and a
// cached, palette-driven stylised material. Everything built with `block()`
// (the vast majority of the world) picks these up automatically.

// ---------------------------------------------------------------- geometry

/**
 * A box whose 12 edges are chamfered and 8 corners clipped. The bevels catch
 * the key light and read as soft, toy-like voxels instead of raw cubes, for
 * only 44 triangles. Outer extents are identical to a BoxGeometry of the same
 * size, so collisions and layouts tuned against plain boxes still line up.
 */
export function chamferBoxGeometry(w: number, h: number, d: number, r: number): THREE.BufferGeometry {
  const a = w / 2;
  const b = h / 2;
  const c = d / 2;
  r = Math.max(0, Math.min(r, a * 0.95, b * 0.95, c * 0.95));
  if (r < 0.004) return new THREE.BoxGeometry(w, h, d);

  // For each corner (sx, sy, sz) the three points where the chamfers meet.
  const P = (axis: 0 | 1 | 2, sx: number, sy: number, sz: number): THREE.Vector3 => new THREE.Vector3(
    axis === 0 ? sx * a : sx * (a - r),
    axis === 1 ? sy * b : sy * (b - r),
    axis === 2 ? sz * c : sz * (c - r),
  );

  const polys: THREE.Vector3[][] = [];
  const S = [-1, 1];
  // six main faces
  for (const s of S) {
    polys.push([P(0, s, -1, -1), P(0, s, 1, -1), P(0, s, 1, 1), P(0, s, -1, 1)]);
    polys.push([P(1, -1, s, -1), P(1, 1, s, -1), P(1, 1, s, 1), P(1, -1, s, 1)]);
    polys.push([P(2, -1, -1, s), P(2, 1, -1, s), P(2, 1, 1, s), P(2, -1, 1, s)]);
  }
  // twelve edge bevels
  for (const s1 of S) {
    for (const s2 of S) {
      // edges running along Z (between X and Y faces)
      polys.push([P(0, s1, s2, -1), P(0, s1, s2, 1), P(1, s1, s2, 1), P(1, s1, s2, -1)]);
      // edges running along Y (between X and Z faces)
      polys.push([P(0, s1, -1, s2), P(0, s1, 1, s2), P(2, s1, 1, s2), P(2, s1, -1, s2)]);
      // edges running along X (between Y and Z faces)
      polys.push([P(1, -1, s1, s2), P(1, 1, s1, s2), P(2, 1, s1, s2), P(2, -1, s1, s2)]);
    }
  }
  // eight corner caps
  for (const sx of S) for (const sy of S) for (const sz of S) {
    polys.push([P(0, sx, sy, sz), P(1, sx, sy, sz), P(2, sx, sy, sz)]);
  }

  const pos: number[] = [];
  const e1 = new THREE.Vector3();
  const e2 = new THREE.Vector3();
  const n = new THREE.Vector3();
  const centroid = new THREE.Vector3();
  const pushTri = (p0: THREE.Vector3, p1: THREE.Vector3, p2: THREE.Vector3): void => {
    pos.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
  };
  for (const poly of polys) {
    // wind every polygon so its normal points away from the box centre
    centroid.set(0, 0, 0);
    for (const p of poly) centroid.add(p);
    centroid.multiplyScalar(1 / poly.length);
    e1.subVectors(poly[1], poly[0]);
    e2.subVectors(poly[2], poly[0]);
    n.crossVectors(e1, e2);
    const ordered = n.dot(centroid) >= 0 ? poly : [...poly].reverse();
    for (let i = 1; i < ordered.length - 1; i++) pushTri(ordered[0], ordered[i], ordered[i + 1]);
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals(); // non-indexed → crisp flat facets
  g.computeBoundingBox();
  g.computeBoundingSphere();
  return g;
}

const geoCache = new Map<string, THREE.BufferGeometry>();

/** Bevel radius that keeps small parts crisp and large blocks soft. */
function bevelFor(w: number, h: number, d: number): number {
  const m = Math.min(w, h, d);
  return Math.min(0.085, m * 0.2);
}

/** Cached chamfered voxel geometry for a given size. */
export function voxelGeometry(w: number, h: number, d: number): THREE.BufferGeometry {
  const key = `${w},${h},${d}`;
  let g = geoCache.get(key);
  if (!g) {
    g = chamferBoxGeometry(w, h, d, bevelFor(w, h, d));
    geoCache.set(key, g);
  }
  return g;
}

// ---------------------------------------------------------------- materials

const matCache = new Map<number, THREE.MeshStandardMaterial>();

/**
 * Shared stylised material for a palette colour. Fully rough dielectric with
 * a hint of sheen: reads as painted wood / felt / clay under soft light.
 */
export function mat(color: number): THREE.MeshStandardMaterial {
  let m = matCache.get(color);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness: 0.86, metalness: 0 });
    matCache.set(color, m);
  }
  return m;
}

/** A bevelled voxel block in a palette colour, casting and receiving shadow. */
export function block(
  w: number, h: number, d: number, color: number,
  x = 0, y = 0, z = 0,
): THREE.Mesh {
  const mesh = new THREE.Mesh(voxelGeometry(w, h, d), mat(color));
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}
