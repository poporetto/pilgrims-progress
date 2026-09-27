import * as THREE from 'three';
import { rng } from './voxels';
import { createTerrain, Terrain } from './terrain';
import {
  createTree, createPine, createBush, createRock, createStump, createMushrooms,
  scatterGrass, scatterFlowers, WORLD,
} from './props';

// Shared exterior dressing for chapter scenes. Each chapter supplies a spec
// read from its own gameplay code (walkable clamps, road corridor, interior
// footprints to avoid) and gets: low-poly terrain that is flat exactly where
// actors walk, ground cover kept off roads/water, and a band of trees and
// shrubs that frames the play corridor like a diorama.

export interface Rect { minX: number; maxX: number; minZ: number; maxZ: number }

export interface DressSpec {
  seed: number;
  /** terrain extent (keep clear of interior footprints built far away) */
  bounds: Rect;
  /** 1 = gameplay ground, must stay at y = baseY; 0 = free for hills */
  flat: (x: number, z: number) => number;
  /** optional base height for sloped chapters (hills, valleys) */
  baseY?: (x: number, z: number) => number;
  hills?: number;
  cell?: number;
  path?: (x: number, z: number) => number;
  /** where nothing may grow (roads, water, bog, buildings…) */
  blocked?: (x: number, z: number) => boolean;
  palette?: {
    grass?: readonly number[];
    highGrass?: number;
    earth?: number;
    leaves?: readonly number[];
    pine?: readonly number[];
    flowers?: readonly number[];
    blossom?: boolean;
  };
  grass?: number;
  flowers?: number;
  /** framing trees placed on the non-walkable land */
  trees?: number;
  /** only place framing trees where this returns true (visible band) */
  treeZone?: (x: number, z: number) => boolean;
  shrubs?: number;
  /** extra height shaping (mounds, basins, cliffs) */
  shape?: (x: number, z: number) => number;
  tint?: (x: number, z: number, y: number, c: THREE.Color) => void;
}

export interface Dressing {
  group: THREE.Group;
  terrain: Terrain;
  heightAt: (x: number, z: number) => number;
}

/**
 * Hide a chapter's legacy flat ground slab(s) so the new terrain can replace
 * them without z-fighting. A slab is any mesh whose top sits within `topEps`
 * of y≈0 and whose footprint exceeds `minArea`.
 */
export function hideLegacyGround(scene: THREE.Object3D, minArea = 1500, topEps = 0.08): number {
  let n = 0;
  const box = new THREE.Box3();
  scene.updateMatrixWorld(true);
  for (const o of scene.children) {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.geometry) continue;
    box.setFromObject(m);
    const area = (box.max.x - box.min.x) * (box.max.z - box.min.z);
    if (area >= minArea && Math.abs(box.max.y) < topEps && box.min.y < -0.2) {
      m.visible = false;
      n++;
    }
  }
  return n;
}

export function dressExterior(scene: THREE.Object3D, spec: DressSpec): Dressing {
  const group = new THREE.Group();
  group.name = 'dressing';
  const p = spec.palette ?? {};
  const terrain = createTerrain({
    ...spec.bounds,
    cell: spec.cell ?? 2,
    seed: spec.seed,
    hills: spec.hills ?? 3,
    flat: spec.flat,
    path: spec.path,
    shape: (x, z) => (spec.baseY ? spec.baseY(x, z) * spec.flat(x, z) : 0) + (spec.shape ? spec.shape(x, z) : 0),
    grass: p.grass,
    highGrass: p.highGrass,
    earth: p.earth,
    tint: spec.tint,
  });
  // when a chapter walks on slopes, blend the hills on top of its ground line
  group.add(terrain.mesh);
  const heightAt = terrain.heightAt;

  const open = (x: number, z: number): boolean => !(spec.blocked && spec.blocked(x, z));
  const area = { ...spec.bounds, allow: open, y: heightAt };
  if (spec.grass !== 0) group.add(scatterGrass(area, spec.grass ?? 2200, spec.seed + 1, p.grass ?? WORLD.grass));
  if (spec.flowers !== 0) group.add(scatterFlowers(area, spec.flowers ?? 380, spec.seed + 2, p.flowers ?? WORLD.flowers));

  const r = rng(spec.seed + 3);
  const zone = spec.treeZone ?? (() => true);
  const offGround = (x: number, z: number) => spec.flat(x, z) < 0.02 && open(x, z) && zone(x, z);
  const place = (obj: THREE.Object3D, x: number, z: number) => {
    obj.position.set(x, heightAt(x, z) + (obj.position.y || 0), z);
    obj.rotation.y = r() * Math.PI * 2;
    group.add(obj);
  };
  const b = spec.bounds;
  for (let k = 0, tries = 0; k < (spec.trees ?? 60) && tries < 4000; tries++) {
    const x = b.minX + r() * (b.maxX - b.minX);
    const z = b.minZ + r() * (b.maxZ - b.minZ);
    if (!offGround(x, z)) continue;
    const pine = r() > 0.55;
    const tree = pine
      ? createPine({ seed: spec.seed * 100 + k, colors: p.pine })
      : createTree({
        seed: spec.seed * 100 + k,
        kind: p.blossom && r() > 0.8 ? 'blossom' : 'leafy',
        leaves: p.leaves,
        canopy: 1.7 + r() * 1.1,
      });
    place(tree, x, z);
    k++;
  }
  for (let k = 0, tries = 0; k < (spec.shrubs ?? 40) && tries < 3000; tries++) {
    const x = b.minX + r() * (b.maxX - b.minX);
    const z = b.minZ + r() * (b.maxZ - b.minZ);
    if (!offGround(x, z)) continue;
    const pick = r();
    const obj = pick < 0.55
      ? createBush({ seed: spec.seed * 200 + k, colors: p.leaves })
      : pick < 0.8 ? createRock({ seed: spec.seed * 300 + k, moss: r() > 0.5 })
        : pick < 0.92 ? createStump({ seed: k }) : createMushrooms({ seed: k });
    place(obj, x, z);
    k++;
  }

  scene.add(group);
  return { group, terrain, heightAt };
}

/** Corridor helper: 1 on a straight east-west road band, easing to 0 outside. */
export function corridor(halfWidth: number, margin: number, zCenter = 0): (x: number, z: number) => number {
  return (_x, z) => {
    const d = Math.abs(z - zCenter);
    if (d <= halfWidth) return 1;
    if (d >= halfWidth + margin) return 0;
    const t = (d - halfWidth) / margin;
    return 1 - t * t * (3 - 2 * t);
  };
}
