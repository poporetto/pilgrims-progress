import * as THREE from 'three';
import { PALETTE } from './palette';
import { block, mat } from './bear';
import { voxelMesh, Voxel, rng as seeded, vary } from './world/voxels';
import {
  createTree, createPine, createBush, createRock, createFence, createLamp,
  createBench, createSign, createCrate, createBarrel, createStump, createMushrooms,
  createHouse, createPavedArea, scatterGrass, scatterFlowers, WORLD,
} from './world/props';
import { createTerrain, band } from './world/terrain';
import { createPond } from './world/water';
import { makeContactShadow } from './render/atmosphere';

// Chapter I — the City of Destruction, rebuilt as a handcrafted pastel voxel
// village. Every gameplay coordinate (colliders, interactables, the wall
// bounds, the gate and the light) is unchanged from the original layout; only
// the presentation is new.

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
  gate: { open: boolean; snap?: boolean }; // doors swing open once set (snap: jump straight there)
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

// ------------------------------------------------------------------ roads
// The original path rectangles, kept as the single source of truth for both
// the paving and for keeping grass/flowers off the roads.
const ROADS: Array<[number, number, number, number]> = [
  // minX, maxX, minZ, maxZ
  [-8, 8, -8, 8],          // plaza
  [8, 59, -2.5, 2.5],      // east road to the wicket gate
  [59, 67, -2, 2],         // stub beyond the gate
  [-24, -8, -2.25, 2.25],  // west road
  [-2.25, 2.25, -21, -8],  // north road
  [-2.25, 2.25, 8, 19],    // south road
];

function onRoad(x: number, z: number, pad = 0): boolean {
  for (const [x0, x1, z0, z1] of ROADS) {
    if (x > x0 - pad && x < x1 + pad && z > z0 - pad && z < z1 + pad) return true;
  }
  return false;
}

// ------------------------------------------------------------------ props

function makeWell(): THREE.Group {
  const g = new THREE.Group();
  const r = seeded(404);
  const stones: Voxel[] = [];
  // a round wall of chunky stones
  const n = 14;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    for (let layer = 0; layer < 2; layer++) {
      const aa = a + (layer ? Math.PI / n : 0);
      stones.push({
        w: 0.46, h: 0.36, d: 0.34,
        x: Math.cos(aa) * 0.82, y: 0.2 + layer * 0.36, z: Math.sin(aa) * 0.82,
        ry: -aa, color: vary(WORLD.stone[(i + layer) % WORLD.stone.length], r, 0.04),
      });
    }
  }
  stones.push({ w: 1.9, h: 0.14, d: 1.9, x: 0, y: 0.07, z: 0, color: 0xc9c1b4 });
  // posts, crossbeam, bucket and a little shingled roof
  const wood = 0xa47b58;
  stones.push({ w: 0.16, h: 1.6, d: 0.16, x: -0.86, y: 1.1, z: 0, color: wood });
  stones.push({ w: 0.16, h: 1.6, d: 0.16, x: 0.86, y: 1.1, z: 0, color: wood });
  stones.push({ w: 1.9, h: 0.12, d: 0.12, x: 0, y: 1.72, z: 0, color: wood });
  stones.push({ w: 0.3, h: 0.3, d: 0.3, x: 0.1, y: 1.18, z: 0, color: 0xb88d66 });
  stones.push({ w: 0.36, h: 0.06, d: 0.36, x: 0.1, y: 1.34, z: 0, color: 0x7a6a5a });
  for (let i = 0; i < 3; i++) {
    stones.push({ w: 2.3 - i * 0.55, h: 0.2, d: 1.5 - i * 0.2, x: 0, y: 1.92 + i * 0.18, z: 0, color: vary(0xe99a8e, r, 0.03) });
  }
  g.add(voxelMesh(stones));
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.62, 0.05, 14),
    new THREE.MeshStandardMaterial({ color: 0x8fd3d6, roughness: 0.2 }),
  );
  water.position.y = 0.6;
  g.add(water);
  g.add(makeContactShadow(2.6, 0.25));
  return g;
}

function makeStall(awning: number, seed: number): THREE.Group {
  const r = seeded(seed);
  const wood = vary(WORLD.wood[0], r);
  const dark = vary(WORLD.woodDark[0], r);
  const v: Voxel[] = [
    { w: 2.6, h: 0.9, d: 1.2, x: 0, y: 0.45, z: 0, color: wood },
    { w: 2.8, h: 0.12, d: 1.4, x: 0, y: 0.96, z: 0, color: dark },
    // goods: fruit crates, jars, a loaf or two
    { w: 0.55, h: 0.22, d: 0.45, x: -0.8, y: 1.13, z: 0.12, color: 0xc79c74 },
    { w: 0.16, h: 0.16, d: 0.16, x: -0.92, y: 1.3, z: 0.06, color: 0xf29a8a },
    { w: 0.16, h: 0.16, d: 0.16, x: -0.7, y: 1.3, z: 0.2, color: 0xf6c177 },
    { w: 0.16, h: 0.16, d: 0.16, x: -0.72, y: 1.3, z: -0.02, color: 0xa6d68f },
    { w: 0.26, h: 0.34, d: 0.26, x: -0.08, y: 1.18, z: -0.18, color: 0xcfe3ff },
    { w: 0.22, h: 0.28, d: 0.22, x: 0.2, y: 1.15, z: -0.1, color: 0xffd1dc },
    { w: 0.5, h: 0.2, d: 0.28, x: 0.72, y: 1.12, z: 0.14, color: 0xe9c38e },
    { w: 0.4, h: 0.16, d: 0.24, x: 0.74, y: 1.28, z: 0.12, color: 0xf1d3a0 },
  ];
  for (const [px, pz] of [[-1.25, 0.62], [1.25, 0.62], [-1.25, -0.62], [1.25, -0.62]] as const) {
    v.push({ w: 0.14, h: 2.2, d: 0.14, x: px, y: 1.1, z: pz, color: dark });
  }
  // striped awning with a scalloped front edge
  for (let i = 0; i < 5; i++) {
    const c = i % 2 === 0 ? awning : 0xfffaf0;
    v.push({ w: 0.6, h: 0.14, d: 1.8, x: -1.2 + i * 0.6, y: 2.28, z: 0, color: c, rx: 0.12 });
    v.push({ w: 0.46, h: 0.22, d: 0.08, x: -1.2 + i * 0.6, y: 2.12, z: 0.92, color: c });
  }
  const g = new THREE.Group();
  g.add(voxelMesh(v));
  g.add(makeContactShadow(3.2, 0.22));
  return g;
}

function makeHay(seed: number): THREE.Mesh {
  const r = seeded(seed);
  return voxelMesh([
    { w: 1.4, h: 0.9, d: 1.0, x: 0, y: 0.45, z: 0, color: vary(0xf0dd9e, r) },
    { w: 1.44, h: 0.12, d: 1.04, x: 0, y: 0.3, z: 0, color: 0xd9c078 },
    { w: 1.44, h: 0.12, d: 1.04, x: 0, y: 0.62, z: 0, color: 0xd9c078 },
    { w: 0.3, h: 0.1, d: 0.12, x: 0.5, y: 0.92, z: 0.3, color: 0xf5e6b0, rz: 0.5 },
  ]);
}

function makeWashLine(): THREE.Mesh {
  const wood = 0x9c7454;
  return voxelMesh([
    { w: 0.14, h: 2.0, d: 0.14, x: -2.2, y: 1.0, z: 0, color: wood },
    { w: 0.14, h: 2.0, d: 0.14, x: 2.2, y: 1.0, z: 0, color: wood },
    { w: 4.4, h: 0.04, d: 0.04, x: 0, y: 1.92, z: 0, color: 0xfffaf0 },
    { w: 0.7, h: 0.8, d: 0.06, x: -1.2, y: 1.5, z: 0, color: PALETTE.dressSky },
    { w: 0.6, h: 0.7, d: 0.06, x: 0.1, y: 1.55, z: 0, color: PALETTE.dressRose },
    { w: 0.5, h: 0.6, d: 0.06, x: 1.3, y: 1.6, z: 0, color: PALETTE.dressLeaf },
    { w: 0.08, h: 0.12, d: 0.08, x: -1.4, y: 1.92, z: 0, color: 0xe9c38e },
    { w: 0.08, h: 0.12, d: 0.08, x: -1.0, y: 1.92, z: 0, color: 0xe9c38e },
    { w: 0.08, h: 0.12, d: 0.08, x: 0.1, y: 1.92, z: 0, color: 0xe9c38e },
    { w: 0.08, h: 0.12, d: 0.08, x: 1.3, y: 1.92, z: 0, color: 0xe9c38e },
  ]);
}

interface ChickenRig { root: THREE.Group; head: THREE.Group; phase: number; }

function makeChicken(color: number): { root: THREE.Group; head: THREE.Group } {
  const root = new THREE.Group();
  const head = new THREE.Group();
  head.position.set(0, 0.42, 0.16);
  root.add(block(0.32, 0.28, 0.42, color, 0, 0.32, -0.04)); // body
  root.add(block(0.16, 0.12, 0.16, color, 0, 0.26, -0.3)); // tail nub
  root.add(block(0.08, 0.18, 0.28, color, -0.17, 0.33, -0.02)); // wings
  root.add(block(0.08, 0.18, 0.28, color, 0.17, 0.33, -0.02));
  head.add(block(0.2, 0.2, 0.2, color, 0, 0, 0));
  head.add(block(0.1, 0.06, 0.12, 0xffb347, 0, -0.02, 0.14)); // beak
  head.add(block(0.12, 0.12, 0.04, 0xe0546a, 0, 0.12, 0.02)); // comb
  head.add(block(0.04, 0.05, 0.02, 0x3a2e28, -0.07, 0.03, 0.1)); // eyes
  head.add(block(0.04, 0.05, 0.02, 0x3a2e28, 0.07, 0.03, 0.1));
  root.add(head);
  root.add(block(0.05, 0.16, 0.05, 0xe8a94e, -0.08, 0.08, -0.02));
  root.add(block(0.05, 0.16, 0.05, 0xe8a94e, 0.08, 0.08, -0.02));
  root.add(makeContactShadow(0.6, 0.25));
  return { root, head };
}

function makeCow(): { root: THREE.Group; tail: THREE.Mesh } {
  const g = new THREE.Group();
  g.add(block(1.15, 0.75, 0.65, 0xfaf3e8, 0, 0.68, 0)); // body
  g.add(block(0.36, 0.1, 0.4, 0x6a5a4c, -0.2, 1.04, 0.05)); // patches
  g.add(block(0.3, 0.1, 0.3, 0x6a5a4c, 0.3, 0.68, -0.34));
  const head = new THREE.Group();
  head.position.set(0.68, 0.78, 0);
  head.add(block(0.38, 0.36, 0.34, 0xfaf3e8, 0, 0, 0));
  head.add(block(0.16, 0.14, 0.26, 0xf7c8d4, 0.2, -0.08, 0)); // snout
  head.add(block(0.06, 0.14, 0.05, 0xe8dfce, 0.05, 0.2, -0.14)); // horns
  head.add(block(0.06, 0.14, 0.05, 0xe8dfce, 0.05, 0.2, 0.14));
  head.add(block(0.04, 0.06, 0.04, 0x3a2e28, 0.19, 0.06, -0.1)); // eyes
  head.add(block(0.04, 0.06, 0.04, 0x3a2e28, 0.19, 0.06, 0.1));
  head.add(block(0.14, 0.06, 0.2, 0xfaf3e8, -0.02, 0.1, -0.24)); // ears
  head.add(block(0.14, 0.06, 0.2, 0xfaf3e8, -0.02, 0.1, 0.24));
  g.add(head);
  for (const [lx, lz] of [[-0.4, -0.22], [-0.4, 0.22], [0.32, -0.22], [0.32, 0.22]] as const) {
    g.add(block(0.18, 0.55, 0.18, 0xe8dfce, lx, 0.28, lz));
  }
  g.add(block(0.2, 0.08, 0.3, 0xf7c8d4, 0, 0.3, 0)); // udder
  const tail = block(0.06, 0.4, 0.06, 0xfaf3e8, -0.62, 0.75, 0);
  tail.rotation.x = 0.3;
  g.add(tail);
  g.add(makeContactShadow(1.8, 0.25));
  return { root: g, tail };
}

function makePump(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.5, 0.9, 0.5, 0x8fa3ad, 0, 0.45, 0));
  g.add(block(0.6, 0.14, 0.6, 0x74868f, 0, 0.94, 0));
  const handle = new THREE.Group();
  handle.position.set(0, 0.85, -0.2);
  handle.add(block(0.5, 0.1, 0.1, 0x74868f, 0, 0, -0.2));
  g.add(handle);
  g.add(block(0.14, 0.4, 0.14, 0x8fa3ad, 0.32, 0.5, 0.2)); // spout
  g.add(block(1.3, 0.35, 0.7, 0xcbc4ba, 0.55, 0.18, 0.55)); // trough
  const water = block(1.1, 0.1, 0.5, 0x8fd3d6, 0.55, 0.33, 0.55);
  water.castShadow = false;
  g.add(water);
  g.add(makeContactShadow(1.8, 0.22));
  return g;
}

function makeNest(): THREE.Group {
  const g = new THREE.Group();
  g.add(block(0.6, 0.24, 0.6, 0xc9a865, 0, 0.12, 0));
  g.add(block(0.46, 0.12, 0.46, 0xdcbb7e, 0, 0.24, 0));
  g.add(block(0.14, 0.06, 0.4, 0xe8cf8e, 0.3, 0.2, 0.05, ));
  return g;
}

function makeEgg(color: number, x: number, z: number): THREE.Mesh {
  return block(0.16, 0.2, 0.16, color, x, 0.34, z);
}

// ------------------------------------------------------------------ build

export function buildWorld(scene: THREE.Scene): World {
  const group = new THREE.Group();
  const colliders: Collider[] = [];
  const rng = seeded(7); // deterministic scatter

  const E = WALL.east;
  const W = WALL.west;
  const N = WALL.north;
  const S = WALL.south;

  // ---------- rolling land: flat inside the walls, hills beyond ----------
  const insideFlat = (x: number, z: number): number => {
    // inside the walls (plus a margin) and along the road out of the gate
    const dx = Math.max(W - 3 - x, x - (E + 3), 0);
    const dz = Math.max(N - 3 - z, z - (S + 3), 0);
    const walls = band(Math.hypot(dx, dz), 0, 9);
    const road = x > E - 2 ? band(Math.abs(z), 5, 11) : 0;
    return Math.max(walls, road);
  };
  const terrain = createTerrain({
    minX: -140, maxX: 160, minZ: -120, maxZ: 110,
    cell: 2.2, seed: 12, hills: 4.2,
    flat: insideFlat,
    path: (x, z) => (x > E + 6 ? band(Math.abs(z), 1.6, 2.8) : 0),
    grass: [0xa9d89a, 0x9fd08e, 0xb2dea2, 0x97c887, 0xa4d496],
  });
  terrain.mesh.position.y = -0.001;
  group.add(terrain.mesh);

  // ---------- paving ----------
  group.add(createPavedArea(-8, 8, -8, 8, {
    seed: 1, stone: 0.78,
    colors: [0xeadcc0, 0xe0cfae, 0xf1e5cb, 0xd6c3a0],
    allow: (x, z) => { const d = Math.hypot(x, z); return d > 1.25 && (d < 2.75 || d > 3.7); },
  }));
  // a ring of warmer stones framing the plaza centre
  const ring: Voxel[] = [];
  for (let i = 0; i < 22; i++) {
    const a = (i / 22) * Math.PI * 2;
    ring.push({ w: 0.95, h: 0.13, d: 0.7, x: Math.cos(a) * 3.2, y: 0.11, z: Math.sin(a) * 3.2, ry: -a, color: vary(0xd8bd96, rng, 0.04) });
  }
  const ringMesh = voxelMesh(ring);
  ringMesh.castShadow = false;
  group.add(ringMesh);
  for (const [x0, x1, z0, z1] of ROADS.slice(1)) {
    group.add(createPavedArea(x0, x1, z0, z1, {
      seed: Math.round(x0 * 7 + z0 * 3), stone: 0.9, gaps: 0.07,
      colors: [0xe6d6b6, 0xd9c7a3, 0xeee1c4, 0xcdbb97],
    }));
  }

  // ---------- houses ----------
  const houses: Array<[number, number, number, number, number]> = [
    // x, z, rotY, wall, roof
    [-10, -12, 0.35, 0xfbeedb, 0xef9f9c],   // Christian's home
    [10, -13, -0.3, 0xfde2e4, 0x93cbb3],
    [-14, 10, 0.5, 0xe2f2e2, 0xb9a6de],
    [12, 11, -0.6, 0xf1e6f7, 0xf5b98c],
    [-26, -2, 1.35, 0xfff3d6, 0x8fbfdc],
    [22, -8, -1.1, 0xfde2e4, 0xe99a8e],
  ];
  const chimneyTops: THREE.Vector3[] = [];
  houses.forEach(([x, z, ry, wall, roof], i) => {
    const h = createHouse({
      seed: 100 + i * 17, w: 4.6, d: 3.9, h: 2.3,
      wall, roof, trim: [0xb88d66, 0xa47b58, 0xc79c74][i % 3],
      door: [0x8fb8d0, 0xe99a8e, 0x9cc98a, 0xb9a6de, 0xf0b27a, 0x8fb8d0][i],
      chimney: true,
    });
    h.position.set(x, 0, z);
    h.rotation.y = ry;
    group.add(h);
    colliders.push({ x, z, r: 3.6 });
    const top = h.userData.chimneyTop as THREE.Vector3 | null;
    if (top) chimneyTops.push(top.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), ry).add(new THREE.Vector3(x, 0, z)));
    // tidy little gardens hug each cottage
    for (let k = 0; k < 3; k++) {
      const side = k === 0 ? -1 : 1;
      const lx = side * (2.9 + rng() * 0.3);
      const lz = -1 + k * 1.1;
      const b = createBush({ seed: i * 31 + k, size: 0.7 + rng() * 0.3, flowers: rng() > 0.4 });
      b.position.set(x + lx * Math.cos(ry) + lz * Math.sin(ry), 0, z - lx * Math.sin(ry) + lz * Math.cos(ry));
      group.add(b);
    }
  });

  // ---------- plaza well ----------
  const well = makeWell();
  group.add(well);
  colliders.push({ x: 0, z: 0, r: 1.6 });
  const interactables: Interactable[] = [
    { id: 'well', name: 'the Well', x: 0, z: 0, r: 2.4 },
  ];
  // plaza benches and planters facing the well
  for (const [bx, bz, ry] of [[-5.6, 5.6, Math.PI * 0.75], [5.6, 5.6, -Math.PI * 0.75]] as const) {
    const b = createBench({ seed: Math.round(bx * 10) });
    b.position.set(bx, 0, bz);
    b.rotation.y = ry;
    group.add(b);
    colliders.push({ x: bx, z: bz, r: 0.8 });
  }
  for (const [px, pz] of [[-6.8, -6.8], [6.8, -6.8], [-6.8, 6.8], [6.8, 6.8]] as const) {
    const planter: Voxel[] = [{ w: 1.1, h: 0.5, d: 1.1, x: 0, y: 0.25, z: 0, color: 0xcbc4ba }];
    const fc = WORLD.flowers[Math.floor(rng() * WORLD.flowers.length)];
    for (let k = 0; k < 5; k++) planter.push({ w: 0.2, h: 0.2, d: 0.2, x: (rng() - 0.5) * 0.7, y: 0.6 + rng() * 0.1, z: (rng() - 0.5) * 0.7, color: fc });
    planter.push({ w: 0.9, h: 0.16, d: 0.9, x: 0, y: 0.52, z: 0, color: 0x8fc47d });
    const pm = voxelMesh(planter);
    pm.position.set(px, 0, pz);
    group.add(pm);
    colliders.push({ x: px, z: pz, r: 0.75 });
  }
  // a signpost where the east road leaves the plaza
  const sign = createSign({ seed: 5, boards: 2 });
  sign.position.set(9, 0, -3.4);
  sign.rotation.y = -0.2;
  group.add(sign);
  colliders.push({ x: 9, z: -3.4, r: 0.35 });

  // ---------- water pump ----------
  const pump = makePump();
  pump.position.set(-5, 0, -3.5);
  group.add(pump);
  colliders.push({ x: -5, z: -3.5, r: 0.9 });
  interactables.push({ id: 'pump', name: 'the Water Pump', x: -5, z: -3.5, r: 2.2 });

  // ---------- farmyard: chickens, nest, cow ----------
  const chickenRigs: ChickenRig[] = [];
  const chickenSpots: Array<[number, number, number]> = [[21.2, 19.4, 0xf8f1e4], [22.4, 18.6, 0xd4a57a]];
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

  group.add(createFence([[25.8, 20.3], [30.2, 20.3], [30.2, 24.7], [25.8, 24.7], [25.8, 20.3]], { seed: 8, spacing: 1.1 }));
  // a trodden patch of earth inside the pasture
  const pasture = new THREE.Mesh(new THREE.CircleGeometry(1.9, 10), mat(0xd8c59b));
  pasture.rotation.x = -Math.PI / 2;
  pasture.position.set(28, 0.02, 22.5);
  pasture.receiveShadow = true;
  group.add(pasture);
  const cowRig = makeCow();
  cowRig.root.position.set(28, 0, 22.5);
  cowRig.root.rotation.y = -0.6;
  group.add(cowRig.root);
  colliders.push({ x: 28, z: 22.5, r: 1.3 });
  interactables.push({ id: 'cow', name: 'the Cow', x: 28, z: 22.5, r: 2.6 });

  // ---------- trees (gameplay-relevant ones keep their colliders) ----------
  const treeSpots: Array<[number, number, boolean]> = [
    [-18, -18, true], [18, -19, false], [-20, 17, false], [20, 18, true],
    [-32, -12, false], [-34, 8, true], [30, 14, false], [8, -22, true],
    [-8, 22, false], [36, -14, true], [44, 10, false], [52, -8, true],
  ];
  treeSpots.forEach(([x, z, blossom], i) => {
    const t = createTree({ seed: 300 + i * 13, kind: blossom ? 'blossom' : (i % 4 === 1 ? 'fruit' : 'leafy') });
    t.position.set(x, 0, z);
    t.rotation.y = rng() * Math.PI;
    group.add(t);
    colliders.push({ x, z, r: 0.9 });
    // a few treasures in the shade
    if (i % 3 === 0) {
      const m = createMushrooms({ seed: i });
      m.position.set(x + 0.9, 0, z + 0.6);
      group.add(m);
    }
  });

  // ---------- lamps along the roads ----------
  for (const [x, z] of [[14, 3.4], [26, -3.4], [38, 3.4], [-14, 3.4]] as const) {
    const lamp = createLamp({ seed: Math.round(x * 3 + z) });
    lamp.position.set(x, 0, z);
    lamp.rotation.y = z > 0 ? Math.PI / 2 : -Math.PI / 2;
    group.add(lamp);
    colliders.push({ x, z, r: 0.4 });
  }

  // ---------- market & village life ----------
  const stall = makeStall(0xf3aebe, 11);
  stall.position.set(-4, 0, 8.5);
  stall.rotation.y = Math.PI;
  group.add(stall);
  colliders.push({ x: -4, z: 8.5, r: 1.8 });

  const stall2 = makeStall(0xa7d4ec, 12);
  stall2.position.set(6, 0, -8);
  stall2.rotation.y = 0.2;
  group.add(stall2);
  colliders.push({ x: 6, z: -8, r: 1.8 });

  const barrel1 = createBarrel({ seed: 3 });
  barrel1.position.set(8.2, 0, 9);
  group.add(barrel1);
  colliders.push({ x: 8.2, z: 9, r: 0.6 });

  const crateGroup = new THREE.Group();
  const c1 = createCrate({ seed: 1, size: 0.8 });
  const c2 = createCrate({ seed: 2, size: 0.7 }); c2.position.set(0.75, 0, 0.15); c2.rotation.y = 0.3;
  const c3 = createCrate({ seed: 3, size: 0.6 }); c3.position.set(0.3, 0.8, 0.05); c3.rotation.y = -0.2;
  crateGroup.add(c1, c2, c3);
  crateGroup.position.set(-13, 0, 13);
  crateGroup.rotation.y = 0.4;
  group.add(crateGroup);
  colliders.push({ x: -13, z: 13, r: 1.1 });

  for (const [hx, hz] of [[16, 18.5], [19.5, 17]] as const) {
    const hay = makeHay(Math.round(hx * 10));
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
  group.add(createFence([[-13.5, -8.2], [-6.5, -8.2]], { seed: 21 }));
  group.add(createFence([[-15.4, -15], [-15.4, -9]], { seed: 22 }));
  // his little vegetable patch
  const veg: Voxel[] = [{ w: 3.2, h: 0.12, d: 1.8, x: 0, y: 0.06, z: 0, color: 0xb58f68 }];
  for (let row = 0; row < 3; row++) {
    for (let k = 0; k < 5; k++) {
      const leafy = row % 2 === 0;
      veg.push({ w: 0.3, h: leafy ? 0.26 : 0.18, d: 0.3, x: -1.2 + k * 0.6, y: 0.24, z: -0.55 + row * 0.55, color: vary(leafy ? 0x8fc47d : 0xf2a36b, rng, 0.05) });
    }
  }
  const vegMesh = voxelMesh(veg);
  vegMesh.position.set(-13.2, 0, -5.9);
  group.add(vegMesh);
  colliders.push({ x: -13.2, z: -5.9, r: 1.2 });

  // ---------- a little duck pond in the quiet north-west corner ----------
  const pond = createPond({ seed: 3, radius: 2.8 });
  pond.position.set(-33, 0, 22);
  group.add(pond);
  colliders.push({ x: -33, z: 22, r: 3.3 });
  for (let k = 0; k < 7; k++) {
    const a = 0.4 + k * 0.28;
    const reed = voxelMesh([
      { w: 0.07, h: 0.8 + rng() * 0.5, d: 0.07, x: 0, y: 0.45, z: 0, color: 0x7fb86e },
      { w: 0.1, h: 0.22, d: 0.1, x: 0, y: 0.95, z: 0, color: 0xa47b58 },
    ]);
    reed.position.set(-33 + Math.cos(a) * 3.1, 0, 22 + Math.sin(a) * 3.1);
    group.add(reed);
  }

  // ---------- the white stone city wall ----------
  const wallVox: Voxel[] = [];
  const wr = seeded(99);
  const BRICK = [0xf7f1e6, 0xf1e9db, 0xece2d1];
  const MORTAR = 0xdcd2c0;
  const wallH = 2.8;
  const wallT = 1.2;
  const addWallRun = (x0: number, z0: number, x1: number, z1: number) => {
    const dx = x1 - x0;
    const dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    const segs = Math.round(len / 6);
    const horizontal = Math.abs(dx) > Math.abs(dz);
    for (let i = 0; i < segs; i++) {
      const fx = x0 + (dx * (i + 0.5)) / segs;
      const fz = z0 + (dz * (i + 0.5)) / segs;
      const segLen = len / segs;
      const w = horizontal ? segLen : wallT;
      const d = horizontal ? wallT : segLen;
      wallVox.push({ w, h: wallH, d, x: fx, y: wallH / 2, z: fz, color: vary(BRICK[i % 3], wr, 0.02) });
      // coursing bands and a sturdy plinth
      wallVox.push({ w: horizontal ? w : wallT + 0.12, h: 0.3, d: horizontal ? wallT + 0.12 : d, x: fx, y: 0.15, z: fz, color: 0xd6ccba });
      wallVox.push({ w: horizontal ? w : wallT + 0.06, h: 0.08, d: horizontal ? wallT + 0.06 : d, x: fx, y: 1.3, z: fz, color: MORTAR });
      // a few proud stones so the wall reads as masonry, not a slab
      for (let k = 0; k < 5; k++) {
        const along = (wr() - 0.5) * (segLen - 0.8);
        const side = wr() > 0.5 ? 1 : -1;
        const sy = 0.5 + wr() * 1.9;
        wallVox.push({
          w: horizontal ? 0.7 + wr() * 0.4 : 0.1, h: 0.36, d: horizontal ? 0.1 : 0.7 + wr() * 0.4,
          x: fx + (horizontal ? along : side * (wallT / 2 + 0.02)),
          y: sy, z: fz + (horizontal ? side * (wallT / 2 + 0.02) : along),
          color: vary(BRICK[(k + i) % 3], wr, 0.03),
        });
      }
      // cap + crenellations
      wallVox.push({ w: w + 0.2, h: 0.28, d: d + 0.2, x: fx, y: wallH + 0.14, z: fz, color: MORTAR });
      const crens = Math.floor(segLen / 1.9);
      for (let c = 0; c < crens; c++) {
        const off = -segLen / 2 + (c + 0.5) * (segLen / crens);
        wallVox.push({
          w: horizontal ? 0.85 : wallT + 0.1, h: 0.55, d: horizontal ? wallT + 0.1 : 0.85,
          x: fx + (horizontal ? off : 0), y: wallH + 0.55, z: fz + (horizontal ? 0 : off),
          color: vary(BRICK[c % 3], wr, 0.02),
        });
      }
    }
  };
  const addTower = (x: number, z: number, big = false) => {
    const s = big ? 2.4 : 2.0;
    const h = big ? 5.2 : 4.2;
    wallVox.push({ w: s + 0.3, h: 0.4, d: s + 0.3, x, y: 0.2, z, color: 0xd6ccba });
    wallVox.push({ w: s, h, d: s, x, y: h / 2, z, color: BRICK[0] });
    wallVox.push({ w: s + 0.1, h: 0.08, d: s + 0.1, x, y: h * 0.45, z, color: MORTAR });
    // arrow-slit windows glowing softly
    wallVox.push({ w: 0.18, h: 0.6, d: s + 0.04, x, y: h * 0.68, z, color: 0x8a7a6a });
    wallVox.push({ w: s + 0.5, h: 0.35, d: s + 0.5, x, y: h + 0.18, z, color: MORTAR });
    for (const [ox, oz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]] as const) {
      wallVox.push({ w: 0.55, h: 0.55, d: 0.55, x: x + (ox * s) / 2.6, y: h + 0.6, z: z + (oz * s) / 2.6, color: BRICK[1] });
    }
    // a cute stepped pastel roof with a finial
    for (let k = 0; k < 3; k++) {
      wallVox.push({ w: s - 0.1 - k * 0.55, h: 0.42, d: s - 0.1 - k * 0.55, x, y: h + 0.62 + k * 0.4, z, color: vary(0xef9f9c, wr, 0.03) });
    }
    wallVox.push({ w: 0.16, h: 0.5, d: 0.16, x, y: h + 1.9, z, color: 0xf0cf6a });
    colliders.push({ x, z, r: s * 0.75 });
  };
  addWallRun(W, N, E, N);
  addWallRun(W, S, E, S);
  addWallRun(W, N, W, S);
  addWallRun(E, N, E, -4.8);
  addWallRun(E, 4.8, E, S);
  addTower(W, N);
  addTower(E, N);
  addTower(W, S);
  addTower(E, S);
  addTower(E, -3.6, true);
  addTower(E, 3.6, true);
  // arch over the gate
  wallVox.push({ w: 0.9, h: 1.1, d: 5.4, x: E, y: 4.3, z: 0, color: BRICK[0] });
  wallVox.push({ w: 1.1, h: 0.3, d: 5.8, x: E, y: 4.95, z: 0, color: MORTAR });
  wallVox.push({ w: 0.7, h: 0.5, d: 4.6, x: E, y: 5.3, z: 0, color: 0xef9f9c });
  // soft moss where the wall meets the grass (inside faces)
  for (let k = 0; k < 60; k++) {
    const u = wr();
    const onNorth = k % 3 === 0;
    const onSouth = k % 3 === 1;
    const x = onNorth || onSouth ? W + u * (E - W) : W + 0.75;
    const z = onNorth ? N + 0.72 : onSouth ? S - 0.72 : N + u * (S - N);
    wallVox.push({ w: 0.7 + wr() * 0.8, h: 0.22, d: 0.3, x, y: 0.11, z, ry: onNorth || onSouth ? 0 : Math.PI / 2, color: vary(0x9cc98a, wr, 0.05) });
  }
  group.add(voxelMesh(wallVox));

  // wicket gate doors (swing open once Evangelist reveals the way)
  const gate: { open: boolean; snap?: boolean } = { open: false };
  const makeDoor = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(E, 0, 2.35 * side);
    const planks: Voxel[] = [];
    for (let k = 0; k < 4; k++) {
      planks.push({ w: 0.35, h: 3.4, d: 0.55, x: 0, y: 1.7, z: (-0.28 - k * 0.575) * side, color: vary(0x9c7454, wr, 0.03) });
    }
    planks.push({ w: 0.42, h: 0.18, d: 2.3, x: 0, y: 0.9, z: -1.15 * side, color: 0x7a5a42 });
    planks.push({ w: 0.42, h: 0.18, d: 2.3, x: 0, y: 2.5, z: -1.15 * side, color: 0x7a5a42 });
    planks.push({ w: 0.14, h: 0.32, d: 0.32, x: 0.22, y: 1.7, z: -2.0 * side, color: 0xf0cf6a });
    pivot.add(voxelMesh(planks));
    group.add(pivot);
    return pivot;
  };
  const doorL = makeDoor(-1);
  const doorR = makeDoor(1);

  // tumbled rubble inside — it IS the City of Destruction
  for (const [x, z] of [[-30, -20], [18, 24], [-24, 18]] as const) {
    for (let k = 0; k < 3; k++) {
      const rock = createRock({ seed: Math.round(x * 17 + z * 3 + k), size: 0.5 + k * 0.2, moss: k === 0 });
      rock.position.x = x + (k - 1) * 0.9;
      rock.position.z = z + (k % 2) * 0.5;
      group.add(rock);
    }
  }

  // ---------- ground cover (kept clear of roads, buildings and props) ----------
  const clear = (x: number, z: number): boolean => {
    if (onRoad(x, z, 0.35)) return false;
    for (const c of colliders) if (Math.hypot(x - c.x, z - c.z) < c.r + 0.25) return false;
    return true;
  };
  const inside = { minX: W + 1.2, maxX: E - 1.2, minZ: N + 1.2, maxZ: S - 1.2, allow: clear };
  group.add(scatterGrass(inside, 1800, 31));
  group.add(scatterFlowers(inside, 360, 32));
  // beyond the walls: meadows climbing the hills
  const outside = {
    minX: -110, maxX: 130, minZ: -95, maxZ: 90,
    allow: (x: number, z: number) => (x < W - 2 || x > E + 2 || z < N - 2 || z > S + 2) && !(x > E && Math.abs(z) < 3),
    y: terrain.heightAt,
  };
  group.add(scatterGrass(outside, 2600, 33));
  group.add(scatterFlowers(outside, 500, 34));

  // ---------- a forest ring on the hills framing the town ----------
  const fr = seeded(55);
  for (let k = 0; k < 90; k++) {
    const a = fr() * Math.PI * 2;
    const rad = 62 + fr() * 42;
    const x = 7 + Math.cos(a) * rad * 1.2;
    const z = Math.sin(a) * rad;
    if (x > E - 4 && Math.abs(z) < 9) continue; // keep the road out of the gate open
    if (x > W - 4 && x < E + 4 && z > N - 4 && z < S + 4) continue;
    const y = terrain.heightAt(x, z);
    const tree = fr() > 0.45
      ? createPine({ seed: 900 + k, height: 2.8 + fr() * 2.2 })
      : createTree({ seed: 1200 + k, kind: fr() > 0.85 ? 'blossom' : 'leafy', canopy: 1.9 + fr() * 1.1 });
    tree.position.set(x, y, z);
    tree.rotation.y = fr() * Math.PI * 2;
    group.add(tree);
  }
  // a dense tree line hugging the outside of the walls frames the town
  for (let k = 0; k < 70; k++) {
    const side = k % 4;
    const u = fr();
    const off = 4 + fr() * 9;
    const x = side < 2 ? W - 4 + u * (E - W + 8) : side === 2 ? W - off : E + off;
    const z = side === 0 ? N - off : side === 1 ? S + off : N - 4 + u * (S - N + 8);
    if (x > E - 2 && Math.abs(z) < 9) continue;
    const tree = fr() > 0.5
      ? createPine({ seed: 5000 + k, height: 2.6 + fr() * 1.8 })
      : createTree({ seed: 6000 + k, kind: fr() > 0.82 ? 'blossom' : 'leafy' });
    tree.position.set(x, terrain.heightAt(x, z), z);
    tree.rotation.y = fr() * Math.PI * 2;
    group.add(tree);
  }
  // quiet interior groves (colliders keep them solid; all clear of roads)
  const groves: Array<[number, number]> = [
    [-38, -26], [-30, -28], [-40, -18], [28, -28], [36, -26], [46, -26], [52, -18],
    [-40, 28], [-24, 28], [6, 28], [40, 28], [52, 22], [-4, -28], [48, -2 + 12],
  ];
  groves.forEach(([x, z], k) => {
    if (onRoad(x, z, 2)) return;
    const tree = k % 3 === 0
      ? createPine({ seed: 7000 + k })
      : createTree({ seed: 7100 + k, kind: k % 4 === 1 ? 'blossom' : k % 5 === 2 ? 'fruit' : 'leafy' });
    tree.position.set(x, 0, z);
    tree.rotation.y = fr() * Math.PI * 2;
    group.add(tree);
    colliders.push({ x, z, r: 0.9 });
    const bush = createBush({ seed: 7200 + k });
    bush.position.set(x + 1.6, 0, z + 0.8);
    group.add(bush);
    colliders.push({ x: x + 1.6, z: z + 0.8, r: 0.7 });
  });
  // pastel banners hung along the inside of the north and south walls
  const banners: Voxel[] = [];
  const bannerColors = [0xf3aebe, 0xa7d4ec, 0xffe3a1, 0xb3e0c4];
  for (let x = W + 9, k = 0; x < E - 6; x += 12, k++) {
    for (const z of [N + 0.66, S - 0.66]) {
      const c = bannerColors[k % bannerColors.length];
      banners.push({ w: 0.9, h: 1.3, d: 0.05, x, y: 2.0, z, color: c });
      banners.push({ w: 0.36, h: 0.36, d: 0.05, x: x - 0.25, y: 1.3, z, color: c, rz: Math.PI / 4 });
      banners.push({ w: 0.36, h: 0.36, d: 0.05, x: x + 0.25, y: 1.3, z, color: c, rz: Math.PI / 4 });
      banners.push({ w: 1.1, h: 0.08, d: 0.1, x, y: 2.68, z, color: 0x9c7454 });
      banners.push({ w: 0.3, h: 0.3, d: 0.06, x, y: 2.1, z: z + (z < 0 ? 0.03 : -0.03), color: 0xfffaf0, rz: Math.PI / 4 });
    }
  }
  group.add(voxelMesh(banners));
  // bushes, stumps and rocks just outside the walls
  for (let k = 0; k < 40; k++) {
    const side = k % 4;
    const u = fr();
    const x = side < 2 ? W + u * (E - W) : side === 2 ? W - 3 - fr() * 5 : E + 3 + fr() * 6;
    const z = side === 0 ? N - 2.5 - fr() * 5 : side === 1 ? S + 2.5 + fr() * 5 : N + u * (S - N);
    if (x > E && Math.abs(z) < 5) continue;
    const y = terrain.heightAt(x, z);
    const pick = fr();
    const prop = pick < 0.5 ? createBush({ seed: 2000 + k }) : pick < 0.75 ? createRock({ seed: 3000 + k, moss: true }) : createStump({ seed: k });
    prop.position.set(x, y + (prop instanceof THREE.Mesh && pick >= 0.5 && pick < 0.75 ? prop.position.y : 0), z);
    group.add(prop);
  }

  // ---------- the shining light, far to the east (hidden at first) ----------
  const lightBeam = new THREE.Group();
  // fog: false so the light shines through the distance haze; not tone
  // mapped so it stays a warm, luminous gold.
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xffd94a, transparent: true, opacity: 0.8, fog: false, toneMapped: false });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(2.6, 40, 2.6), beamMat);
  beam.position.y = 20;
  lightBeam.add(beam);
  const beamInner = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 44, 1.3),
    new THREE.MeshBasicMaterial({ color: 0xfffbe0, transparent: true, opacity: 0.95, fog: false, toneMapped: false }),
  );
  beamInner.position.y = 22;
  lightBeam.add(beamInner);
  const starMat = new THREE.MeshBasicMaterial({ color: 0xffe87a, fog: false, toneMapped: false });
  const star = new THREE.Mesh(new THREE.BoxGeometry(3.4, 3.4, 3.4), starMat);
  star.position.y = 42;
  star.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  lightBeam.add(star);
  const star2 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({
    color: 0xfff3b8, transparent: true, opacity: 0.5, fog: false, toneMapped: false,
  }));
  star2.position.y = 42;
  star2.rotation.set(0, Math.PI / 4, Math.PI / 4);
  lightBeam.add(star2);
  const glow = new THREE.PointLight(0xffe87a, 3.5, 40);
  glow.position.y = 4;
  lightBeam.add(glow);
  lightBeam.position.set(64.5, 0, 0);
  lightBeam.visible = false;
  group.add(lightBeam);

  // ---------- ambient life: soft chimney smoke ----------
  interface Puff { mesh: THREE.Mesh; base: THREE.Vector3; phase: number; speed: number; }
  const puffs: Puff[] = [];
  const puffGeo = new THREE.IcosahedronGeometry(0.34, 0);
  for (const top of chimneyTops) {
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(
        puffGeo,
        new THREE.MeshStandardMaterial({ color: 0xfaf7f2, transparent: true, opacity: 0.7, roughness: 1, flatShading: true, depthWrite: false }),
      );
      m.castShadow = false;
      group.add(m);
      puffs.push({ mesh: m, base: top, phase: i / 4, speed: 0.13 + rng() * 0.05 });
    }
  }

  // ---------- ambient life: butterflies ----------
  interface Butterfly { g: THREE.Group; wingL: THREE.Mesh; wingR: THREE.Mesh; cx: number; cz: number; r: number; ph: number; sp: number; }
  const butterflies: Butterfly[] = [];
  const bflyColors = [0xffd6a5, 0xf4b8c4, 0xaecbff, 0xcbb8f0, 0xfff3b8, 0xbdeeb6];
  const bflySpots: Array<[number, number]> = [[-18, 4], [5, 12], [-10, -4], [16, 8], [-24, 10], [30, -6], [-30, 20], [26, 22]];
  bflySpots.forEach(([cx, cz], i) => {
    const g = new THREE.Group();
    const c = bflyColors[i % bflyColors.length];
    const wingMat = new THREE.MeshStandardMaterial({ color: c, roughness: 0.7, side: THREE.DoubleSide });
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.28), wingMat);
    wingL.geometry.translate(-0.16, 0, 0);
    const wingR = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.28), wingMat);
    wingR.geometry.translate(0.16, 0, 0);
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.24), mat(0x5b4a3f));
    g.add(wingL, wingR, bodyM);
    group.add(g);
    butterflies.push({ g, wingL, wingR, cx, cz, r: 1.5 + rng() * 2, ph: rng() * 6.28, sp: 0.5 + rng() * 0.5 });
  });

  // ---------- ambient life: little birds wheeling above ----------
  interface Bird { g: THREE.Group; wingL: THREE.Mesh; wingR: THREE.Mesh; r: number; h: number; ph: number; sp: number; }
  const birds: Bird[] = [];
  for (let i = 0; i < 4; i++) {
    const g = new THREE.Group();
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.5), mat(0xfffaf0));
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.3), mat(0xe2ddd4));
    wingL.geometry.translate(-0.25, 0, 0);
    wingL.position.x = -0.12;
    const wingR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.3), mat(0xe2ddd4));
    wingR.geometry.translate(0.25, 0, 0);
    wingR.position.x = 0.12;
    g.add(bodyM, wingL, wingR);
    group.add(g);
    birds.push({ g, wingL, wingR, r: 12 + i * 6, h: 9 + i * 2.2, ph: i * 1.7, sp: 0.12 + i * 0.025 });
  }

  const update = (t: number) => {
    // swing the wicket gate doors open/closed, stopping just short of 90°
    const doorTarget = gate.open ? 1.5 : 0;
    if (gate.snap) {
      doorL.rotation.y = -doorTarget;
      doorR.rotation.y = doorTarget;
      gate.snap = false;
    }
    doorL.rotation.y += (-doorTarget - doorL.rotation.y) * 0.04;
    doorR.rotation.y += (doorTarget - doorR.rotation.y) * 0.04;

    for (const p of puffs) {
      const cycle = (t * p.speed + p.phase) % 1;
      p.mesh.position.set(
        p.base.x + Math.sin((cycle + p.phase) * 9) * 0.3 + cycle * 0.8,
        p.base.y + cycle * 3.4,
        p.base.z + Math.cos((cycle + p.phase) * 7) * 0.2,
      );
      const s = 0.5 + Math.sin(cycle * Math.PI * 0.8) * 1.2;
      p.mesh.scale.setScalar(s);
      p.mesh.rotation.set(cycle * 2, cycle * 3, 0);
      (p.mesh.material as THREE.MeshStandardMaterial).opacity = 0.7 * (1 - cycle) * Math.min(1, cycle * 6);
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
    cowRig.tail.rotation.z = Math.sin(t * 1.1) * 0.25;
  };

  scene.add(group);
  return { group, colliders, interactables, lightBeam, gate, update };
}
