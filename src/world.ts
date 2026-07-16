import * as THREE from 'three';
import { PALETTE } from './palette';
import { block, mat } from './bear';

// Builds the City of Destruction: a cosy medieval bear village.
// Returns colliders (circles) and the scenery group.

export interface Collider {
  x: number;
  z: number;
  r: number;
}

export interface Interactable {
  id: string;
  name: string;
  x: number;
  z: number;
  r: number; // interact range
}

export interface World {
  group: THREE.Group;
  colliders: Collider[];
  interactables: Interactable[];
  lightBeam: THREE.Group; // shining light, hidden until Evangelist speaks
  gate: { open: boolean }; // wicket gate doors swing open once set
  update: (t: number) => void; // ambient life: smoke, butterflies, birds
}

// city wall footprint (used by main.ts for movement bounds)
export const WALL = {
  east: 60,
  west: -46,
  north: -34,
  south: 34,
  gateHalfWidth: 1.9, // the gate corridor on the east wall at z≈0
} as const;

function makeHouse(
  wall: number, roof: number, w = 5, d = 4.4, h = 2.6,
): THREE.Group {
  const g = new THREE.Group();
  // walls
  g.add(block(w, h, d, wall, 0, h / 2, 0));
  // timber frame accents (medieval half-timber look)
  const beam = PALETTE.woodDark;
  g.add(block(0.22, h, 0.22, beam, -w / 2 + 0.11, h / 2, d / 2 + 0.02));
  g.add(block(0.22, h, 0.22, beam, w / 2 - 0.11, h / 2, d / 2 + 0.02));
  g.add(block(w, 0.22, 0.22, beam, 0, h - 0.11, d / 2 + 0.02));
  // roof: stacked shrinking slabs = voxel gable
  const steps = 4;
  for (let i = 0; i < steps; i++) {
    const rw = w + 0.6 - (i * (w + 0.6)) / steps;
    g.add(block(rw, 0.5, d + 0.6, roof, 0, h + 0.25 + i * 0.5, 0));
  }
  g.add(block(0.55, 2.2, 0.55, PALETTE.stone, w / 2 - 0.8, h + 1.6, -0.8)); // chimney
  g.add(block(0.7, 0.25, 0.7, 0xc4beb5, w / 2 - 0.8, h + 2.75, -0.8)); // chimney cap
  // door
  g.add(block(0.9, 1.5, 0.16, PALETTE.woodDark, 0, 0.75, d / 2 + 0.06));
  g.add(block(0.12, 0.12, 0.1, PALETTE.roofPeach, 0.28, 0.75, d / 2 + 0.16));
  // windows
  for (const wx of [-w / 2 + 1.1, w / 2 - 1.1]) {
    g.add(block(0.8, 0.8, 0.12, PALETTE.roofBlue, wx, 1.5, d / 2 + 0.06));
    g.add(block(0.9, 0.14, 0.14, PALETTE.woodDark, wx, 1.06, d / 2 + 0.08));
  }
  return g;
}

function makeTree(blossom = false): THREE.Group {
  const g = new THREE.Group();
  const leaf = blossom ? PALETTE.leafPink : PALETTE.leaf;
  g.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
  g.add(block(1.9, 1.3, 1.9, leaf, 0, 2.2, 0));
  g.add(block(1.3, 0.9, 1.3, leaf, 0, 3.2, 0));
  g.add(block(0.7, 0.6, 0.7, leaf, 0, 3.9, 0));
  return g;
}

function makeLamp(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.18, 2.4, 0.18, PALETTE.woodDark, 0, 1.2, 0));
  const bulb = block(0.4, 0.4, 0.4, PALETTE.light, 0, 2.5, 0);
  bulb.material = new THREE.MeshLambertMaterial({
    color: PALETTE.light,
    emissive: 0xfff0b0,
    emissiveIntensity: 0.6,
  });
  g.add(bulb);
  g.add(block(0.5, 0.12, 0.5, PALETTE.woodDark, 0, 2.75, 0));
  return g;
}

function makeWell(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(1.6, 0.8, 1.6, PALETTE.stone, 0, 0.4, 0));
  g.add(block(1.2, 0.1, 1.2, PALETTE.water, 0, 0.82, 0));
  g.add(block(0.14, 1.5, 0.14, PALETTE.woodDark, -0.7, 1.2, 0));
  g.add(block(0.14, 1.5, 0.14, PALETTE.woodDark, 0.7, 1.2, 0));
  g.add(block(1.8, 0.35, 1.1, PALETTE.roofPink, 0, 2.05, 0));
  return g;
}

function makeStall(awning: number): THREE.Group {
  const g = new THREE.Group();
  // counter
  g.add(block(2.6, 0.9, 1.2, PALETTE.wood, 0, 0.45, 0));
  g.add(block(2.8, 0.14, 1.4, PALETTE.woodDark, 0, 0.95, 0));
  // goods on the counter
  g.add(block(0.4, 0.3, 0.4, PALETTE.flowerYellow, -0.8, 1.15, 0.1));
  g.add(block(0.35, 0.35, 0.35, 0xffb3c6, -0.1, 1.2, -0.2));
  g.add(block(0.45, 0.25, 0.3, 0xaecbff, 0.7, 1.14, 0.15));
  // posts + striped awning
  g.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, -1.25, 1.1, 0.62));
  g.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, 1.25, 1.1, 0.62));
  g.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, -1.25, 1.1, -0.62));
  g.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, 1.25, 1.1, -0.62));
  for (let i = 0; i < 5; i++) {
    const c = i % 2 === 0 ? awning : 0xfff8ef;
    g.add(block(0.58, 0.16, 1.7, c, -1.16 + i * 0.58, 2.28, 0));
  }
  return g;
}

function makeBarrel(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.7, 0.9, 0.7, PALETTE.wood, 0, 0.45, 0));
  g.add(block(0.76, 0.12, 0.76, PALETTE.woodDark, 0, 0.25, 0));
  g.add(block(0.76, 0.12, 0.76, PALETTE.woodDark, 0, 0.7, 0));
  g.add(block(0.6, 0.06, 0.6, PALETTE.water, 0, 0.93, 0));
  return g;
}

function makeCrates(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.8, 0.8, 0.8, PALETTE.wood, 0, 0.4, 0));
  g.add(block(0.7, 0.7, 0.7, PALETTE.woodDark, 0.75, 0.35, 0.15));
  g.add(block(0.6, 0.6, 0.6, PALETTE.wood, 0.3, 1.1, 0.05));
  return g;
}

function makeHay(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(1.4, 0.9, 1.0, 0xf0dd9e, 0, 0.45, 0));
  g.add(block(1.44, 0.14, 1.04, 0xd9c078, 0, 0.45, 0));
  return g;
}

function makeWashLine(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.14, 2.0, 0.14, PALETTE.woodDark, -2.2, 1.0, 0));
  g.add(block(0.14, 2.0, 0.14, PALETTE.woodDark, 2.2, 1.0, 0));
  g.add(block(4.4, 0.05, 0.05, 0xfff8ef, 0, 1.9, 0));
  // hanging laundry
  g.add(block(0.7, 0.8, 0.06, PALETTE.dressSky, -1.2, 1.5, 0));
  g.add(block(0.6, 0.7, 0.06, PALETTE.dressRose, 0.1, 1.55, 0));
  g.add(block(0.5, 0.6, 0.06, PALETTE.dressLeaf, 1.3, 1.6, 0));
  return g;
}

interface ChickenRig { root: THREE.Group; head: THREE.Group; phase: number; }

function makeChicken(color: number): { root: THREE.Group; head: THREE.Group } {
  const root = new THREE.Group();
  const head = new THREE.Group();
  head.position.set(0, 0.42, 0.16);
  root.add(block(0.32, 0.28, 0.42, color, 0, 0.32, -0.04)); // body
  root.add(block(0.16, 0.1, 0.16, color, 0, 0.2, -0.3)); // tail nub
  head.add(block(0.2, 0.2, 0.2, color, 0, 0, 0));
  head.add(block(0.1, 0.06, 0.12, 0xffb347, 0, -0.02, 0.14)); // beak
  head.add(block(0.12, 0.12, 0.04, 0xe0546a, 0, 0.12, 0.02)); // comb
  root.add(head);
  // thin legs
  root.add(block(0.05, 0.16, 0.05, 0xe8a94e, -0.08, 0.08, -0.02));
  root.add(block(0.05, 0.16, 0.05, 0xe8a94e, 0.08, 0.08, -0.02));
  return { root, head };
}

function makeCow(): { root: THREE.Group; tail: THREE.Mesh } {
  const g = new THREE.Group();
  g.add(block(1.15, 0.75, 0.65, 0xfaf3e8, 0, 0.68, 0)); // body
  // patches
  g.add(block(0.36, 0.1, 0.4, 0x4a3d33, -0.2, 1.04, 0.05));
  g.add(block(0.3, 0.1, 0.3, 0x4a3d33, 0.3, 0.68, -0.15));
  const head = new THREE.Group();
  head.position.set(0.68, 0.78, 0);
  head.add(block(0.36, 0.34, 0.32, 0xfaf3e8, 0, 0, 0));
  head.add(block(0.14, 0.1, 0.1, 0xf7c8d4, 0.2, -0.08, 0)); // snout
  head.add(block(0.06, 0.14, 0.05, 0xe8dfce, 0.05, 0.18, -0.14)); // horn
  head.add(block(0.06, 0.14, 0.05, 0xe8dfce, 0.05, 0.18, 0.14));
  g.add(head);
  // legs
  for (const [lx, lz] of [[-0.4, -0.22], [-0.4, 0.22], [0.32, -0.22], [0.32, 0.22]] as const) {
    g.add(block(0.18, 0.55, 0.18, 0xe8dfce, lx, 0.28, lz));
  }
  const tail = block(0.06, 0.4, 0.06, 0xfaf3e8, -0.62, 0.75, 0);
  tail.rotation.x = 0.3;
  g.add(tail);
  return { root: g, tail };
}

function makePump(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.5, 0.9, 0.5, 0x8a97a0, 0, 0.45, 0)); // pump body
  g.add(block(0.6, 0.14, 0.6, 0x6f7a82, 0, 0.94, 0)); // cap
  const handle = new THREE.Group();
  handle.position.set(0, 0.85, -0.2);
  handle.add(block(0.5, 0.1, 0.1, 0x6f7a82, 0, 0, -0.2));
  g.add(handle);
  g.add(block(0.14, 0.4, 0.14, 0x8a97a0, 0.32, 0.5, 0.2)); // spout
  // stone trough
  g.add(block(1.3, 0.35, 0.7, PALETTE.stone, 0.55, 0.18, 0.55));
  g.add(block(1.1, 0.1, 0.5, PALETTE.water, 0.55, 0.35, 0.55));
  return g;
}

function makeNest(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.6, 0.24, 0.6, 0xc9a865, 0, 0.12, 0)); // straw base
  g.add(block(0.46, 0.12, 0.46, 0xdcbb7e, 0, 0.24, 0));
  return g;
}

function makeEgg(color: number, x: number, z: number): THREE.Mesh {
  const e = block(0.16, 0.2, 0.16, color, x, 0.34, z);
  return e;
}

function makeFence(len: number): THREE.Group {
  const g = new THREE.Group();
  const posts = Math.max(2, Math.round(len / 1.2));
  for (let i = 0; i < posts; i++) {
    g.add(block(0.14, 0.8, 0.14, PALETTE.wood, -len / 2 + (i * len) / (posts - 1), 0.4, 0));
  }
  g.add(block(len, 0.12, 0.1, PALETTE.wood, 0, 0.62, 0));
  g.add(block(len, 0.12, 0.1, PALETTE.wood, 0, 0.32, 0));
  return g;
}

export function buildWorld(scene: THREE.Scene): World {
  const group = new THREE.Group();
  const colliders: Collider[] = [];
  const rng = mulberry(7); // deterministic scatter

  // ---------- ground ----------
  const ground = new THREE.Mesh(
    new THREE.BoxGeometry(220, 1, 220),
    mat(PALETTE.grass),
  );
  ground.position.y = -0.5;
  ground.receiveShadow = true;
  group.add(ground);

  // grass tufts / patches for texture
  for (let i = 0; i < 160; i++) {
    const x = (rng() - 0.5) * 180;
    const z = (rng() - 0.5) * 160;
    if (Math.abs(x) < 30 && Math.abs(z) < 26) continue; // keep plaza-ish area cleaner
    const c = rng() > 0.5 ? PALETTE.grassLight : PALETTE.grassDark;
    const patch = block(1 + rng() * 2, 0.12, 1 + rng() * 2, c, x, 0.06, z);
    patch.castShadow = false;
    group.add(patch);
  }

  // ---------- main path: village centre → east toward the fields ----------
  const addPath = (x: number, z: number, w: number, d: number) => {
    const p = block(w, 0.14, d, PALETTE.path, x, 0.07, z);
    p.castShadow = false;
    group.add(p);
  };
  addPath(0, 0, 16, 16);          // plaza
  addPath(33.5, 0, 51, 5);        // east road to the wicket gate
  addPath(63, 0, 8, 4);           // path stub beyond the gate
  addPath(-16, 0, 16, 4.5);       // west road
  addPath(0, -14, 4.5, 14);       // north road
  addPath(0, 13, 4.5, 12);        // south road

  // ---------- houses ----------
  const houses: Array<[number, number, number, number, number]> = [
    // x, z, rotY, wall, roof
    [-10, -12, 0.35, PALETTE.wallCream, PALETTE.roofPink],   // Christian's home
    [10, -13, -0.3, PALETTE.wallPink, PALETTE.roofMint],
    [-14, 10, 0.5, PALETTE.wallMint, PALETTE.roofLilac],
    [12, 11, -0.6, PALETTE.wallLilac, PALETTE.roofPeach],
    [-26, -2, 1.35, PALETTE.wallCream, PALETTE.roofBlue],
    [22, -8, -1.1, PALETTE.wallPink, PALETTE.roofPink],
  ];
  const chimneyTops: THREE.Vector3[] = [];
  for (const [x, z, ry, wall, roof] of houses) {
    const h = makeHouse(wall, roof);
    h.position.set(x, 0, z);
    h.rotation.y = ry;
    group.add(h);
    colliders.push({ x, z, r: 3.6 });
    // world-space chimney top (local offset rotated by ry) for smoke puffs
    const lx = 5 / 2 - 0.8;
    const lz = -0.8;
    chimneyTops.push(new THREE.Vector3(
      x + lx * Math.cos(ry) + lz * Math.sin(ry),
      2.6 + 3.1,
      z - lx * Math.sin(ry) + lz * Math.cos(ry),
    ));
  }

  // ---------- plaza well ----------
  const well = makeWell();
  well.position.set(0, 0, 0);
  group.add(well);
  colliders.push({ x: 0, z: 0, r: 1.6 });

  const interactables: Interactable[] = [
    { id: 'well', name: 'the Well', x: 0, z: 0, r: 2.4 },
  ];

  // ---------- water pump ----------
  const pump = makePump();
  pump.position.set(-5, 0, -3.5);
  group.add(pump);
  colliders.push({ x: -5, z: -3.5, r: 0.9 });
  interactables.push({ id: 'pump', name: 'the Water Pump', x: -5, z: -3.5, r: 2.2 });

  // ---------- farmyard: chickens, nest, cow ----------
  const chickenRigs: ChickenRig[] = [];
  const chickenSpots: Array<[number, number, number]> = [[21.2, 19.4, 0xf3ead9], [22.4, 18.6, 0xb98a5f]];
  chickenSpots.forEach(([x, z, color], i) => {
    const { root, head } = makeChicken(color);
    root.position.set(x, 0, z);
    root.rotation.y = i * 1.4;
    group.add(root);
    colliders.push({ x, z, r: 0.35 });
    chickenRigs.push({ root, head, phase: i * 2.4 });
  });
  const nest = makeNest();
  nest.position.set(23.4, 0, 19.8);
  group.add(nest);
  nest.add(makeEgg(0xfff8ef, -0.12, 0.05));
  nest.add(makeEgg(0xf3ead9, 0.1, -0.05));
  nest.add(makeEgg(0xfff3e0, 0.02, 0.15));
  colliders.push({ x: 23.4, z: 19.8, r: 0.5 });
  interactables.push({ id: 'chickens', name: 'the Chickens', x: 21.8, z: 19, r: 2.4 });
  interactables.push({ id: 'nest', name: 'the Nest', x: 23.4, z: 19.8, r: 1.8 });

  const cowPasture = makeFence(4.4);
  cowPasture.position.set(28, 0, 20.5);
  group.add(cowPasture);
  const cowPasture2 = makeFence(4.4);
  cowPasture2.position.set(28, 0, 24.5);
  group.add(cowPasture2);
  const cowPasture3 = makeFence(4.4);
  cowPasture3.position.set(25.8, 0, 22.5);
  cowPasture3.rotation.y = Math.PI / 2;
  group.add(cowPasture3);
  const cowPasture4 = makeFence(4.4);
  cowPasture4.position.set(30.2, 0, 22.5);
  cowPasture4.rotation.y = Math.PI / 2;
  group.add(cowPasture4);
  const cowRig = makeCow();
  cowRig.root.position.set(28, 0, 22.5);
  cowRig.root.rotation.y = -0.6;
  group.add(cowRig.root);
  colliders.push({ x: 28, z: 22.5, r: 1.3 });
  interactables.push({ id: 'cow', name: 'the Cow', x: 28, z: 22.5, r: 2.6 });

  // ---------- trees ----------
  const treeSpots: Array<[number, number, boolean]> = [
    [-18, -18, true], [18, -19, false], [-20, 17, false], [20, 18, true],
    [-32, -12, false], [-34, 8, true], [30, 14, false], [8, -22, true],
    [-8, 22, false], [36, -14, true], [44, 10, false], [52, -8, true],
  ];
  for (const [x, z, blossom] of treeSpots) {
    const t = makeTree(blossom);
    t.position.set(x, 0, z);
    t.rotation.y = rng() * Math.PI;
    group.add(t);
    colliders.push({ x, z, r: 0.9 });
  }

  // ---------- lamps along the east road ----------
  for (const [x, z] of [[14, 3.4], [26, -3.4], [38, 3.4], [-14, 3.4]] as const) {
    const lamp = makeLamp();
    lamp.position.set(x, 0, z);
    group.add(lamp);
    colliders.push({ x, z, r: 0.4 });
  }

  // ---------- village life props ----------
  const stall = makeStall(PALETTE.roofPink);
  stall.position.set(-4, 0, 8.5);
  stall.rotation.y = Math.PI;
  group.add(stall);
  colliders.push({ x: -4, z: 8.5, r: 1.8 });

  const stall2 = makeStall(PALETTE.roofBlue);
  stall2.position.set(6, 0, -8);
  stall2.rotation.y = 0.2;
  group.add(stall2);
  colliders.push({ x: 6, z: -8, r: 1.8 });

  const barrel1 = makeBarrel();
  barrel1.position.set(8.2, 0, 9);
  group.add(barrel1);
  colliders.push({ x: 8.2, z: 9, r: 0.6 });

  const crates = makeCrates();
  crates.position.set(-13, 0, 13);
  crates.rotation.y = 0.4;
  group.add(crates);
  colliders.push({ x: -13, z: 13, r: 1.1 });

  for (const [hx, hz] of [[16, 18.5], [19.5, 17]] as const) {
    const hay = makeHay();
    hay.position.set(hx, 0, hz);
    hay.rotation.y = rng() * Math.PI;
    group.add(hay);
    colliders.push({ x: hx, z: hz, r: 0.9 });
  }

  const wash = makeWashLine();
  wash.position.set(-6, 0, -10.5);
  wash.rotation.y = 0.35;
  group.add(wash);

  // ---------- fences near Christian's house ----------
  const fence1 = makeFence(7);
  fence1.position.set(-10, 0, -8.2);
  group.add(fence1);
  const fence2 = makeFence(6);
  fence2.position.set(-15.4, 0, -12);
  fence2.rotation.y = Math.PI / 2;
  group.add(fence2);

  // ---------- flowers ----------
  const flowerColors = [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue];
  for (let i = 0; i < 70; i++) {
    const x = (rng() - 0.5) * 120;
    const z = (rng() - 0.5) * 90;
    const f = block(0.22, 0.22, 0.22, flowerColors[i % 3], x, 0.2, z);
    f.castShadow = false;
    group.add(f);
    group.add(block(0.08, 0.2, 0.08, PALETTE.leaf, x, 0.06, z));
  }

  // ---------- white brick city wall around the whole town ----------
  const BRICK = 0xf7f3ea;
  const BRICK_ALT = 0xefe9dc;
  const MORTAR = 0xdfd8c8;
  const wallH = 2.8;
  const wallT = 1.2;

  const addWallRun = (
    x0: number, z0: number, x1: number, z1: number, skip?: (px: number, pz: number) => boolean,
  ) => {
    const dx = x1 - x0;
    const dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    const segs = Math.round(len / 6);
    const horizontal = Math.abs(dx) > Math.abs(dz);
    for (let i = 0; i < segs; i++) {
      const fx = x0 + (dx * (i + 0.5)) / segs;
      const fz = z0 + (dz * (i + 0.5)) / segs;
      if (skip && skip(fx, fz)) continue;
      const segLen = len / segs;
      const w = horizontal ? segLen : wallT;
      const d = horizontal ? wallT : segLen;
      const wall = block(w, wallH, d, i % 2 === 0 ? BRICK : BRICK_ALT, fx, wallH / 2, fz);
      group.add(wall);
      // mortar lines so it reads as brickwork
      group.add(block(horizontal ? w : wallT + 0.06, 0.09, horizontal ? wallT + 0.06 : d, MORTAR, fx, 1.0, fz));
      group.add(block(horizontal ? w : wallT + 0.06, 0.09, horizontal ? wallT + 0.06 : d, MORTAR, fx, 1.9, fz));
      // cap + crenellations
      group.add(block(w + 0.2, 0.28, d + 0.2, MORTAR, fx, wallH + 0.14, fz));
      const crens = Math.floor(segLen / 1.9);
      for (let c = 0; c < crens; c++) {
        const off = -segLen / 2 + (c + 0.5) * (segLen / crens);
        group.add(block(
          horizontal ? 0.85 : wallT + 0.1, 0.55, horizontal ? wallT + 0.1 : 0.85,
          BRICK, fx + (horizontal ? off : 0), wallH + 0.55, fz + (horizontal ? 0 : off),
        ));
      }
    }
  };

  const addTower = (x: number, z: number, big = false) => {
    const s = big ? 2.4 : 2.0;
    const h = big ? 5.2 : 4.2;
    group.add(block(s, h, s, BRICK, x, h / 2, z));
    group.add(block(s + 0.5, 0.35, s + 0.5, MORTAR, x, h + 0.18, z));
    for (const [ox, oz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]] as const) {
      group.add(block(0.55, 0.55, 0.55, BRICK, x + (ox * s) / 2.6, h + 0.6, z + (oz * s) / 2.6));
    }
    // cute pastel roof cap
    group.add(block(s - 0.4, 0.6, s - 0.4, PALETTE.roofPink, x, h + 0.75, z));
    colliders.push({ x, z, r: s * 0.75 });
  };

  const E = WALL.east;
  const W = WALL.west;
  const N = WALL.north;
  const S = WALL.south;
  addWallRun(W, N, E, N); // north
  addWallRun(W, S, E, S); // south
  addWallRun(W, N, W, S); // west
  // east wall in two runs that stop flush at the gate towers' outer edges
  // (a single skip-by-centre run left segments poking through the towers)
  addWallRun(E, N, E, -4.8);
  addWallRun(E, 4.8, E, S);
  // corner + gate towers
  addTower(W, N);
  addTower(E, N);
  addTower(W, S);
  addTower(E, S);
  addTower(E, -3.6, true);
  addTower(E, 3.6, true);
  // arch over the gate
  group.add(block(0.9, 1.1, 5.4, BRICK, E, 4.3, 0));
  group.add(block(1.1, 0.3, 5.8, MORTAR, E, 4.95, 0));
  group.add(block(0.7, 0.5, 4.6, PALETTE.roofPink, E, 5.3, 0));

  // wicket gate doors (swing open once Evangelist reveals the way)
  const gate = { open: false };
  const makeDoor = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(E, 0, 2.35 * side);
    const panel = block(0.35, 3.4, 2.3, PALETTE.woodDark, 0, 1.7, -1.15 * side);
    pivot.add(panel);
    // plank lines + hinges
    pivot.add(block(0.4, 0.16, 2.3, 0x8a6f52, 0, 0.9, -1.15 * side));
    pivot.add(block(0.4, 0.16, 2.3, 0x8a6f52, 0, 2.4, -1.15 * side));
    pivot.add(block(0.12, 0.3, 0.3, PALETTE.robeGold, 0.2, 1.7, -2.0 * side));
    group.add(pivot);
    return pivot;
  };
  const doorL = makeDoor(-1);
  const doorR = makeDoor(1);

  // a couple of mossy rubble piles inside — it IS the City of Destruction
  for (const [x, z] of [[-30, -20], [18, 24], [-24, 18]] as const) {
    group.add(block(1.4, 0.8, 1.2, PALETTE.stone, x, 0.4, z));
    group.add(block(0.8, 0.5, 0.8, 0xc4beb5, x + 1.1, 0.25, z + 0.4));
    group.add(block(0.5, 0.3, 0.5, PALETTE.grassDark, x + 0.4, 0.85, z - 0.3));
  }

  // ---------- the shining light, far to the east (hidden at first) ----------
  const lightBeam = new THREE.Group();
  // fog: false so the light shines through the distance haze — Christian
  // must be able to see it from the village.
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xffd94a,
    transparent: true,
    opacity: 0.8,
    fog: false,
  });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(2.6, 40, 2.6), beamMat);
  beam.position.y = 20;
  lightBeam.add(beam);
  const beamInner = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 44, 1.3),
    new THREE.MeshBasicMaterial({ color: 0xfffbe0, transparent: true, opacity: 0.95, fog: false }),
  );
  beamInner.position.y = 22;
  lightBeam.add(beamInner);
  // floating star blocks at the top so it reads as "a shining light" from afar
  const starMat = new THREE.MeshBasicMaterial({ color: 0xffe87a, fog: false });
  const star = new THREE.Mesh(new THREE.BoxGeometry(3.4, 3.4, 3.4), starMat);
  star.position.y = 42;
  star.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  lightBeam.add(star);
  const star2 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({
    color: 0xfff3b8, transparent: true, opacity: 0.5, fog: false,
  }));
  star2.position.y = 42;
  star2.rotation.set(0, Math.PI / 4, Math.PI / 4);
  lightBeam.add(star2);
  const glow = new THREE.PointLight(0xffe87a, 3.5, 40);
  glow.position.y = 4;
  lightBeam.add(glow);
  // the light shines down just beyond the wicket gate in the city wall
  lightBeam.position.set(64.5, 0, 0);
  lightBeam.visible = false;
  group.add(lightBeam);

  // ---------- ambient life: chimney smoke ----------
  interface Puff { mesh: THREE.Mesh; base: THREE.Vector3; phase: number; speed: number; }
  const puffs: Puff[] = [];
  for (const top of chimneyTops) {
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.MeshLambertMaterial({ color: 0xf5f2ec, transparent: true, opacity: 0.7 }),
      );
      m.castShadow = false;
      group.add(m);
      puffs.push({ mesh: m, base: top, phase: i / 3, speed: 0.14 + rng() * 0.05 });
    }
  }

  // ---------- ambient life: butterflies ----------
  interface Butterfly { g: THREE.Group; wingL: THREE.Mesh; wingR: THREE.Mesh; cx: number; cz: number; r: number; ph: number; sp: number; }
  const butterflies: Butterfly[] = [];
  const bflyColors = [0xffd6a5, 0xf4b8c4, 0xaecbff, 0xcbb8f0, 0xfff3b8, 0xbdeeb6];
  const bflySpots: Array<[number, number]> = [[-18, 4], [5, 12], [-10, -4], [16, 8], [-24, 10], [30, -6]];
  bflySpots.forEach(([cx, cz], i) => {
    const g = new THREE.Group();
    const c = bflyColors[i % bflyColors.length];
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.24), new THREE.MeshLambertMaterial({ color: c }));
    wingL.position.x = -0.16;
    const wingR = wingL.clone();
    wingR.position.x = 0.16;
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.26), mat(PALETTE.nose));
    g.add(wingL, wingR, bodyM);
    group.add(g);
    butterflies.push({ g, wingL, wingR, cx, cz, r: 1.5 + rng() * 2, ph: rng() * 6.28, sp: 0.5 + rng() * 0.5 });
  });

  // ---------- ambient life: little birds circling above ----------
  interface Bird { g: THREE.Group; wingL: THREE.Mesh; wingR: THREE.Mesh; r: number; h: number; ph: number; sp: number; }
  const birds: Bird[] = [];
  for (let i = 0; i < 3; i++) {
    const g = new THREE.Group();
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.5), mat(0xfff8ef));
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.3), mat(0xd8d3cc));
    wingL.position.x = -0.35;
    const wingR = wingL.clone();
    wingR.position.x = 0.35;
    g.add(bodyM, wingL, wingR);
    group.add(g);
    birds.push({ g, wingL, wingR, r: 12 + i * 7, h: 9 + i * 2.5, ph: i * 2.1, sp: 0.12 + i * 0.03 });
  }

  const update = (t: number) => {
    // swing the wicket gate doors open/closed
    const doorTarget = gate.open ? 1.85 : 0;
    doorL.rotation.y += (-doorTarget - doorL.rotation.y) * 0.04;
    doorR.rotation.y += (doorTarget - doorR.rotation.y) * 0.04;

    for (const p of puffs) {
      const cycle = (t * p.speed + p.phase) % 1;
      p.mesh.position.set(
        p.base.x + Math.sin((cycle + p.phase) * 9) * 0.3,
        p.base.y + cycle * 3.2,
        p.base.z + Math.cos((cycle + p.phase) * 7) * 0.2,
      );
      const s = 0.5 + cycle * 0.9;
      p.mesh.scale.setScalar(s);
      (p.mesh.material as THREE.MeshLambertMaterial).opacity = 0.65 * (1 - cycle);
    }
    for (const b of butterflies) {
      const a = t * b.sp + b.ph;
      b.g.position.set(
        b.cx + Math.cos(a) * b.r,
        1.2 + Math.sin(t * 1.7 + b.ph) * 0.5,
        b.cz + Math.sin(a * 1.3) * b.r,
      );
      b.g.rotation.y = -a * 1.15 + Math.PI / 2;
      const flap = Math.sin(t * 16 + b.ph) * 0.9;
      b.wingL.rotation.z = flap;
      b.wingR.rotation.z = -flap;
    }
    for (const b of birds) {
      const a = t * b.sp + b.ph;
      b.g.position.set(Math.cos(a) * b.r, b.h + Math.sin(t * 0.9 + b.ph), Math.sin(a) * b.r);
      b.g.rotation.y = -a - Math.PI / 2;
      const flap = Math.sin(t * 7 + b.ph) * 0.6;
      b.wingL.rotation.z = flap;
      b.wingR.rotation.z = -flap;
    }
    // chickens peck at the ground now and then
    for (const c of chickenRigs) {
      const cycle = (t * 0.6 + c.phase) % 4;
      c.head.rotation.x = cycle < 0.5 ? Math.sin(cycle * Math.PI / 0.5) * 0.7 : 0;
    }
    // the cow's tail swishes lazily
    cowRig.tail.rotation.z = Math.sin(t * 1.1) * 0.25;
  };

  scene.add(group);
  return { group, colliders, interactables, lightBeam, gate, update };
}

// tiny deterministic PRNG so the village looks the same every run
function mulberry(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
