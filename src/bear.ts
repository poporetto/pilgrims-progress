import * as THREE from 'three';
import { PALETTE } from './palette';

// Chibi voxel character factory. All villagers share the same block anatomy
// (stubby legs, round body, oversized head); species swap out ears, snouts
// and tails, and everyone wears clothes.

export type Species = 'bear' | 'pig' | 'frog' | 'rabbit' | 'cat' | 'lion' | 'owl' | 'mouse';
export type Outfit = 'shirt' | 'dress' | 'apron' | 'robe' | 'overalls' | 'none';

export interface CharacterOptions {
  species?: Species;
  fur?: number;
  scale?: number;
  outfit?: Outfit;
  outfitColor?: number;
  burden?: boolean;   // Christian's great burden on the back
  sling?: boolean;    // travel sling bag across the chest
  plump?: boolean;    // slightly wider body and bigger tummy (Christian only)
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

const DEFAULT_FUR: Record<Species, number> = {
  bear: PALETTE.bearBrown,
  pig: 0xf5b6c0,
  frog: 0xa4d97c,
  rabbit: 0xf3ead9,
  cat: 0xc8bfb4,
  lion: 0xd9a860,
  owl: 0x8a7864,
  mouse: 0xb8aa9c,
};

const BELLY: Record<Species, number> = {
  bear: PALETTE.bearCream,
  pig: 0xfad4da,
  frog: 0xd6eec0,
  rabbit: 0xfdf8ee,
  cat: 0xede7dd,
  lion: 0xf0dcbb,
  owl: 0xe8ddc9,
  mouse: 0xf3ece3,
};

const LION_MANE = 0xb0793a;

export function makeBear(opts: CharacterOptions = {}): BearParts {
  const species = opts.species ?? 'bear';
  const fur = opts.fur ?? DEFAULT_FUR[species];
  const belly = BELLY[species];
  const scale = opts.scale ?? 1;

  const root = new THREE.Group();

  // --- legs (pivots at hip so they can swing) ---
  const makeLeg = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.2 * side, 0.55, 0);
    pivot.add(block(0.3, 0.55, 0.34, fur, 0, -0.28, 0));
    pivot.add(block(0.32, 0.14, 0.38, belly, 0, -0.5, 0.02)); // paw pad
    root.add(pivot);
    return pivot;
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  // --- body group (bobs while walking) ---
  const body = new THREE.Group();
  body.position.y = 0.55;
  root.add(body);

  const bodyW = opts.plump ? 1.02 : 0.92;
  const bodyD = opts.plump ? 0.68 : 0.6;
  const tummyW = opts.plump ? 0.78 : 0.6;
  const tummyD = opts.plump ? 0.17 : 0.1;
  body.add(block(bodyW, 0.78, bodyD, fur, 0, 0.4, 0));
  body.add(block(tummyW, 0.5, tummyD, belly, 0, 0.38, 0.28)); // tummy

  // species tails
  if (species === 'bear') {
    body.add(block(0.2, 0.2, 0.2, fur, 0, 0.25, -0.34));
  } else if (species === 'pig') {
    body.add(block(0.12, 0.12, 0.16, 0xef9fac, 0.08, 0.3, -0.36));
    body.add(block(0.12, 0.12, 0.12, 0xef9fac, 0.16, 0.4, -0.4));
  } else if (species === 'rabbit') {
    body.add(block(0.24, 0.24, 0.2, 0xffffff, 0, 0.28, -0.36));
  } else if (species === 'cat') {
    body.add(block(0.14, 0.14, 0.5, fur, 0.2, 0.3, -0.5));
    body.add(block(0.14, 0.3, 0.14, fur, 0.2, 0.5, -0.72));
  } else if (species === 'lion') {
    // long tail with a dark tuft
    body.add(block(0.14, 0.14, 0.55, fur, 0.2, 0.28, -0.52));
    body.add(block(0.22, 0.22, 0.22, LION_MANE, 0.2, 0.28, -0.84));
  } else if (species === 'mouse') {
    // a thin, long tail
    body.add(block(0.08, 0.08, 0.6, 0xd9a3ac, 0.1, 0.22, -0.5));
  }
  // frogs and owls have no visible tail

  // --- arms ---
  const makeArm = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.55 * side, 0.68, 0);
    pivot.add(block(0.26, 0.55, 0.3, fur, 0, -0.22, 0));
    pivot.add(block(0.28, 0.14, 0.32, belly, 0, -0.46, 0));
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

  // species faces & ears
  if (species === 'bear') {
    head.add(block(0.24, 0.24, 0.16, fur, -0.36, 0.9, 0));
    head.add(block(0.24, 0.24, 0.16, fur, 0.36, 0.9, 0));
    head.add(block(0.14, 0.14, 0.1, belly, -0.36, 0.9, 0.05));
    head.add(block(0.14, 0.14, 0.1, belly, 0.36, 0.9, 0.05));
    head.add(block(0.4, 0.3, 0.18, PALETTE.snout, 0, 0.26, 0.46));
    head.add(block(0.16, 0.12, 0.08, PALETTE.nose, 0, 0.34, 0.56));
  } else if (species === 'pig') {
    // floppy triangle-ish ears
    const earL = block(0.26, 0.26, 0.14, 0xef9fac, -0.34, 0.9, 0);
    earL.rotation.z = 0.5;
    head.add(earL);
    const earR = block(0.26, 0.26, 0.14, 0xef9fac, 0.34, 0.9, 0);
    earR.rotation.z = -0.5;
    head.add(earR);
    // round snout with nostrils
    head.add(block(0.42, 0.3, 0.16, 0xef9fac, 0, 0.3, 0.46));
    head.add(block(0.07, 0.12, 0.04, 0xc76f7e, -0.1, 0.3, 0.55));
    head.add(block(0.07, 0.12, 0.04, 0xc76f7e, 0.1, 0.3, 0.55));
  } else if (species === 'frog') {
    // eye bumps on top of the head
    for (const side of [-1, 1]) {
      head.add(block(0.28, 0.26, 0.28, fur, 0.26 * side, 0.94, 0.16));
      head.add(block(0.18, 0.18, 0.08, 0xffffff, 0.26 * side, 0.96, 0.32));
      head.add(block(0.09, 0.12, 0.04, PALETTE.nose, 0.26 * side, 0.96, 0.37));
    }
    // wide happy mouth
    head.add(block(0.5, 0.06, 0.05, 0x5e7d4a, 0, 0.2, 0.41));
  } else if (species === 'rabbit') {
    for (const side of [-1, 1]) {
      head.add(block(0.2, 0.7, 0.14, fur, 0.24 * side, 1.1, 0));
      head.add(block(0.1, 0.5, 0.06, 0xf7c8d4, 0.24 * side, 1.1, 0.06));
    }
    head.add(block(0.3, 0.22, 0.14, 0xffffff, 0, 0.26, 0.44));
    head.add(block(0.12, 0.1, 0.06, 0xe58a9b, 0, 0.36, 0.52));
  } else if (species === 'cat') {
    for (const side of [-1, 1]) {
      const ear = block(0.24, 0.28, 0.14, fur, 0.32 * side, 0.92, 0);
      ear.rotation.z = -0.4 * side;
      head.add(ear);
      head.add(block(0.12, 0.14, 0.08, 0xf7c8d4, 0.32 * side, 0.9, 0.05));
    }
    head.add(block(0.3, 0.2, 0.14, 0xffffff, 0, 0.24, 0.44));
    head.add(block(0.1, 0.08, 0.06, 0xe58a9b, 0, 0.32, 0.52));
  } else if (species === 'lion') {
    // a thick mane framing the whole face (kept clear of the head's faces
    // — head spans x ±0.475, y -0.01..0.81, z ±0.4 — to avoid z-fighting)
    head.add(block(1.3, 1.2, 0.34, LION_MANE, 0, 0.4, -0.44));   // big ruff behind
    head.add(block(1.24, 0.3, 0.62, LION_MANE, 0, 0.97, -0.12)); // crown tuft
    head.add(block(0.3, 1.06, 0.62, LION_MANE, -0.62, 0.38, -0.12)); // side ruffs
    head.add(block(0.3, 1.06, 0.62, LION_MANE, 0.62, 0.38, -0.12));
    head.add(block(0.9, 0.26, 0.6, LION_MANE, 0, -0.15, -0.1));  // chin ruff
    // little round ears peeking from the mane
    head.add(block(0.24, 0.24, 0.18, fur, -0.42, 1.06, 0.02));
    head.add(block(0.24, 0.24, 0.18, fur, 0.42, 1.06, 0.02));
    // gentle golden muzzle
    head.add(block(0.44, 0.32, 0.2, PALETTE.snout, 0, 0.26, 0.47));
    head.add(block(0.16, 0.12, 0.08, PALETTE.nose, 0, 0.35, 0.58));
  } else if (species === 'owl') {
    // pointed ear tufts
    const tuftL = block(0.14, 0.3, 0.1, fur, -0.28, 1.02, -0.04);
    tuftL.rotation.z = 0.2;
    head.add(tuftL);
    const tuftR = block(0.14, 0.3, 0.1, fur, 0.28, 1.02, -0.04);
    tuftR.rotation.z = -0.2;
    head.add(tuftR);
    // big round facial disks framing the eyes
    head.add(block(0.36, 0.36, 0.08, belly, -0.24, 0.5, 0.42));
    head.add(block(0.36, 0.36, 0.08, belly, 0.24, 0.5, 0.42));
    // small hooked beak
    head.add(block(0.16, 0.16, 0.16, 0xe8a23a, 0, 0.32, 0.5));
  } else if (species === 'mouse') {
    // big round ears
    head.add(block(0.3, 0.3, 0.1, fur, -0.32, 0.98, 0.02));
    head.add(block(0.3, 0.3, 0.1, fur, 0.32, 0.98, 0.02));
    head.add(block(0.16, 0.16, 0.06, 0xd9a3ac, -0.32, 0.98, 0.07));
    head.add(block(0.16, 0.16, 0.06, 0xd9a3ac, 0.32, 0.98, 0.07));
    // small pointed pink snout
    head.add(block(0.26, 0.2, 0.16, 0xf3ece3, 0, 0.24, 0.44));
    head.add(block(0.1, 0.08, 0.06, 0xd9a3ac, 0, 0.3, 0.53));
    // whiskers
    head.add(block(0.28, 0.02, 0.02, 0xffffff, -0.05, 0.28, 0.55));
    head.add(block(0.28, 0.02, 0.02, 0xffffff, 0.05, 0.28, 0.55));
  }

  // eyes (frogs already have theirs on top)
  if (species !== 'frog') {
    head.add(block(0.1, 0.14, 0.05, PALETTE.nose, -0.24, 0.5, 0.41));
    head.add(block(0.1, 0.14, 0.05, PALETTE.nose, 0.24, 0.5, 0.41));
  }
  // rosy cheeks for everyone
  head.add(block(0.12, 0.08, 0.04, 0xf7b2bd, -0.36, 0.32, 0.41));
  head.add(block(0.12, 0.08, 0.04, 0xf7b2bd, 0.36, 0.32, 0.41));

  // --- clothes ---
  const outfit = opts.outfit ?? 'none';
  const oc = opts.outfitColor ?? PALETTE.dressRose;
  // NB: outfit shells must not share faces with the body/tummy blocks
  // (body top sits at y 0.79, tummy front at z 0.33) or they z-fight.
  if (outfit === 'shirt') {
    // the shell must clear the (possibly plump) body on every side, or the
    // fur pokes through and the coplanar faces flicker
    body.add(block(opts.plump ? 1.12 : 0.98, 0.52, opts.plump ? 0.8 : 0.7, oc, 0, 0.52, 0));
    // sleeves on the upper arms
    armL.add(block(0.32, 0.28, 0.36, oc, 0, -0.1, 0));
    armR.add(block(0.32, 0.28, 0.36, oc, 0, -0.1, 0));
  } else if (outfit === 'dress') {
    body.add(block(1.0, 0.5, 0.68, oc, 0, 0.12, 0));
    body.add(block(0.96, 0.4, 0.7, oc, 0, 0.52, 0));
    body.add(block(0.5, 0.16, 0.06, 0xffffff, 0, 0.68, 0.34)); // collar
    armL.add(block(0.32, 0.24, 0.36, oc, 0, -0.08, 0));
    armR.add(block(0.32, 0.24, 0.36, oc, 0, -0.08, 0));
  } else if (outfit === 'apron') {
    body.add(block(0.98, 0.5, 0.7, 0xfaf3e3, 0, 0.5, 0)); // shirt under the apron
    armL.add(block(0.32, 0.26, 0.36, 0xfaf3e3, 0, -0.1, 0));
    armR.add(block(0.32, 0.26, 0.36, 0xfaf3e3, 0, -0.1, 0));
    body.add(block(0.62, 0.6, 0.08, oc, 0, 0.32, 0.32));
    body.add(block(0.3, 0.14, 0.06, oc, 0, 0.68, 0.34)); // bib strap
  } else if (outfit === 'overalls') {
    body.add(block(0.96, 0.44, 0.64, oc, 0, 0.2, 0));
    body.add(block(0.44, 0.4, 0.08, oc, 0, 0.56, 0.3)); // bib
    body.add(block(0.12, 0.4, 0.06, oc, -0.22, 0.72, 0.3)); // straps
    body.add(block(0.12, 0.4, 0.06, oc, 0.22, 0.72, 0.3));
  } else if (outfit === 'robe') {
    body.add(block(1.02, 0.9, 0.7, oc, 0, 0.36, 0));
    body.add(block(0.3, 0.1, 0.06, PALETTE.robeGold, 0, 0.66, 0.34)); // clasp
    armL.add(block(0.34, 0.4, 0.38, oc, 0, -0.14, 0));
    armR.add(block(0.34, 0.4, 0.38, oc, 0, -0.14, 0));
    head.add(block(0.9, 0.5, 0.2, oc, 0, 0.5, -0.45)); // hood
  }

  // --- travel sling bag (diagonal strap over the chest, bag at the hip) ---
  if (opts.sling) {
    // straps sit just proud of the (possibly plump) tummy/back planes
    const strapZ = opts.plump ? 0.42 : 0.34;
    const strapF = block(0.14, 1.05, 0.05, 0x8a6f52, 0, 0.42, strapZ);
    strapF.rotation.z = 0.72;
    body.add(strapF);
    const strapB = block(0.14, 1.05, 0.05, 0x8a6f52, 0, 0.42, opts.plump ? -0.41 : -0.33);
    strapB.rotation.z = -0.72;
    body.add(strapB);
    // shoulder pad where the straps meet
    body.add(block(0.24, 0.12, 0.7, 0x8a6f52, -0.34, 0.82, 0));
    // the satchel at the right hip
    body.add(block(0.46, 0.36, 0.22, 0xa9825e, 0.5, 0.02, 0.1));
    body.add(block(0.46, 0.14, 0.24, 0x8a6f52, 0.5, 0.16, 0.1)); // flap
    body.add(block(0.1, 0.1, 0.06, PALETTE.robeGold, 0.5, 0.06, 0.23)); // buckle
  }

  // --- Christian's great burden ---
  if (opts.burden) {
    body.add(block(0.88, 0.62, 0.54, PALETTE.burden, 0, 0.45, -0.56));
    body.add(block(0.70, 0.50, 0.46, 0x87817a, 0, 0.96, -0.54));
    body.add(block(0.50, 0.36, 0.36, PALETTE.burdenStrap, 0, 1.28, -0.52));
    const bStrapZ = opts.plump ? 0.42 : 0.31;
    body.add(block(0.1, 0.6, 0.08, PALETTE.burdenStrap, -0.3, 0.45, bStrapZ));
    body.add(block(0.1, 0.6, 0.08, PALETTE.burdenStrap, 0.3, 0.45, bStrapZ));
  }

  root.scale.setScalar(scale);
  return { root, body, head, armL, armR, legL, legR };
}

// Animate limbs: call every frame with elapsed time and whether moving.
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
