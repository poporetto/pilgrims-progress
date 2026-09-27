import * as THREE from 'three';
import { voxelMesh, Voxel, rng, vary } from './world/voxels';

export interface HighwayPavingOptions {
  z?: number;
  width?: number;
  step?: number;
  height?: number;
  yAt?: (x: number, z: number) => number;
  colors?: number[];
}

// A consistent King's Highway treatment: three staggered rows of individually
// raised, bevelled stones with small gaps and warm pastel colour variation.
// All stones are merged into a single mesh (one draw call per stretch).
export function addHighwayPaving(
  scene: THREE.Object3D,
  startX: number,
  endX: number,
  options: HighwayPavingOptions = {},
): THREE.Mesh {
  const centerZ = options.z ?? 0;
  const width = options.width ?? 3.15;
  const step = options.step ?? 1.42;
  const height = options.height ?? 0.11;
  const colors = options.colors ?? [0xd8c8a3, 0xc8b58f, 0xe5d5b1, 0xbba985];
  const rows = 3;
  const rowDepth = width / rows - 0.12;
  const rowStep = width / rows;
  const first = Math.min(startX, endX);
  const last = Math.max(startX, endX);
  const r = rng(Math.round(first * 13 + last * 7 + centerZ * 3));
  const stones: Voxel[] = [];

  for (let row = 0; row < rows; row++) {
    const z = centerZ + (row - 1) * rowStep;
    const stagger = row % 2 ? step * 0.5 : 0;
    let column = 0;
    for (let x = first + stagger; x <= last; x += step) {
      const baseY = options.yAt?.(x, z) ?? 0;
      const h = height + ((column + row) % 3) * 0.012;
      stones.push({
        w: step - 0.13 - r() * 0.08,
        h,
        d: rowDepth - r() * 0.06,
        x: x + (r() - 0.5) * 0.05,
        y: baseY + h / 2 + 0.018,
        z: z + (r() - 0.5) * 0.05,
        ry: ((column + row) % 5 - 2) * 0.012 + (r() - 0.5) * 0.03,
        color: vary(colors[(column + row * 2) % colors.length], r, 0.03),
      });
      column++;
    }
  }
  const mesh = voxelMesh(stones);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}
