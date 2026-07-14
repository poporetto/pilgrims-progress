import * as THREE from 'three';
import { PALETTE } from './palette';

// Chibi voxel bear factory. All bears share the same block anatomy:
// stubby legs, round body, oversized head, tiny ears. Accessories mark roles.

export type BearAccessory = 'burden' | 'dress' | 'apron' | 'robe' | 'none';

export interface BearOptions {
  fur?: number;
  scale?: number;
  accessory?: BearAccessory;
  accessoryColor?: number;
}

export interface BearParts {
  root: THREE.Group;
  body: THREE.Group;
  head: THREE.Group;
  armL: THREE.Group;
  armR: THREE.Group;
  legL: THREE.Group;
  legR: THREE.Group;
}

const geoCache = new Map<string, THREE.BoxGeometry>();
function box(w: number, h: number, d: number): THREE.BoxGeometry {
  const key = `${w},${h},${d}`;
  let g = geoCache.get(key);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    geoCache.set(key, g);
  }
  return g;
}

const matCache = new Map<number, THREE.MeshLambertMaterial>();
export function mat(color: number): THREE.MeshLambertMaterial {
  let m = matCache.get(color);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color });
    matCache.set(color, m);
  }
  return m;
}

export function block(
  w: number, h: number, d: number, color: number,
  x = 0, y = 0, z = 0,
): THREE.Mesh {
  const mesh = new THREE.Mesh(box(w, h, d), mat(color));
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function makeBear(opts: BearOptions = {}): BearParts {
  const fur = opts.fur ?? PALETTE.bearBrown;
  const scale = opts.scale ?? 1;
  const accessory = opts.accessory ?? 'none';

  const root = new THREE.Group();

  // --- legs (pivots at hip so they can swing) ---
  const makeLeg = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.2 * side, 0.55, 0);
    pivot.add(block(0.3, 0.55, 0.34, fur, 0, -0.28, 0));
    // paw pad
    pivot.add(block(0.32, 0.14, 0.38, PALETTE.bearCream, 0, -0.5, 0.02));
    root.add(pivot);
    return pivot;
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  // --- body group (bobs while walking) ---
  const body = new THREE.Group();
  body.position.y = 0.55;
  root.add(body);

  body.add(block(0.92, 0.78, 0.6, fur, 0, 0.4, 0));
  body.add(block(0.6, 0.5, 0.1, PALETTE.bearCream, 0, 0.38, 0.28)); // tummy
  body.add(block(0.2, 0.2, 0.2, fur, 0, 0.25, -0.34)); // tail

  // --- arms ---
  const makeArm = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.55 * side, 0.68, 0);
    pivot.add(block(0.26, 0.55, 0.3, fur, 0, -0.22, 0));
    pivot.add(block(0.28, 0.14, 0.32, PALETTE.bearCream, 0, -0.46, 0));
    body.add(pivot);
    return pivot;
  };
  const armL = makeArm(-1);
  const armR = makeArm(1);

  // --- head group ---
  const head = new THREE.Group();
  head.position.y = 1.16;
  body.add(head);

  head.add(block(0.95, 0.82, 0.8, fur, 0, 0.4, 0));
  // ears
  head.add(block(0.24, 0.24, 0.16, fur, -0.36, 0.9, 0));
  head.add(block(0.24, 0.24, 0.16, fur, 0.36, 0.9, 0));
  head.add(block(0.14, 0.14, 0.1, PALETTE.bearCream, -0.36, 0.9, 0.05));
  head.add(block(0.14, 0.14, 0.1, PALETTE.bearCream, 0.36, 0.9, 0.05));
  // snout + nose
  head.add(block(0.4, 0.3, 0.18, PALETTE.snout, 0, 0.26, 0.46));
  head.add(block(0.16, 0.12, 0.08, PALETTE.nose, 0, 0.34, 0.56));
  // eyes
  head.add(block(0.1, 0.14, 0.05, PALETTE.nose, -0.24, 0.5, 0.41));
  head.add(block(0.1, 0.14, 0.05, PALETTE.nose, 0.24, 0.5, 0.41));
  // rosy cheeks
  head.add(block(0.12, 0.08, 0.04, 0xf7b2bd, -0.36, 0.32, 0.41));
  head.add(block(0.12, 0.08, 0.04, 0xf7b2bd, 0.36, 0.32, 0.41));

  // --- accessories ---
  const accColor = opts.accessoryColor ?? PALETTE.dressRose;
  if (accessory === 'burden') {
    // Christian's great burden: a stack of heavy grey bundles on his back
    body.add(block(0.7, 0.5, 0.42, PALETTE.burden, 0, 0.45, -0.52));
    body.add(block(0.56, 0.4, 0.36, 0x87817a, 0, 0.9, -0.5));
    body.add(block(0.4, 0.3, 0.3, PALETTE.burdenStrap, 0, 1.22, -0.48));
    body.add(block(0.1, 0.6, 0.08, PALETTE.burdenStrap, -0.3, 0.45, 0.31));
    body.add(block(0.1, 0.6, 0.08, PALETTE.burdenStrap, 0.3, 0.45, 0.31));
  } else if (accessory === 'dress') {
    body.add(block(1.0, 0.5, 0.68, accColor, 0, 0.12, 0));
    body.add(block(0.5, 0.16, 0.06, 0xffffff, 0, 0.62, 0.32)); // collar
  } else if (accessory === 'apron') {
    body.add(block(0.6, 0.55, 0.06, accColor, 0, 0.3, 0.32));
  } else if (accessory === 'robe') {
    body.add(block(1.02, 0.86, 0.66, accColor, 0, 0.36, 0));
    body.add(block(0.3, 0.1, 0.06, PALETTE.robeGold, 0, 0.66, 0.34)); // clasp
    // hood behind head
    head.add(block(0.9, 0.5, 0.2, accColor, 0, 0.5, -0.45));
  }

  root.scale.setScalar(scale);
  return { root, body, head, armL, armR, legL, legR };
}

// Animate limbs: call every frame with elapsed time and whether bear is moving.
export function animateBear(parts: BearParts, t: number, moving: boolean): void {
  const swing = moving ? Math.sin(t * 9) * 0.7 : 0;
  const idle = Math.sin(t * 2) * 0.02;
  parts.legL.rotation.x = swing;
  parts.legR.rotation.x = -swing;
  parts.armL.rotation.x = -swing * 0.8;
  parts.armR.rotation.x = swing * 0.8;
  parts.body.position.y = 0.55 + (moving ? Math.abs(Math.sin(t * 9)) * 0.06 : idle);
  parts.head.rotation.z = moving ? Math.sin(t * 4.5) * 0.04 : Math.sin(t * 1.5) * 0.03;
}
