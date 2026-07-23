import * as THREE from 'three';
import { block } from './bear';

export interface HighwayPavingOptions {
  z?: number;
  width?: number;
  step?: number;
  height?: number;
  yAt?: (x: number, z: number) => number;
  colors?: number[];
}

// A consistent King's Highway treatment: three staggered rows of individually
// raised voxel stones, with small gaps and warm pastel color variation.
export function addHighwayPaving(
  scene: THREE.Scene,
  startX: number,
  endX: number,
  options: HighwayPavingOptions = {},
): void {
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

  for (let row = 0; row < rows; row++) {
    const z = centerZ + (row - 1) * rowStep;
    const stagger = row % 2 ? step * 0.5 : 0;
    let column = 0;
    for (let x = first + stagger; x <= last; x += step) {
      const baseY = options.yAt?.(x, z) ?? 0;
      const tile = block(
        step - 0.13,
        height + ((column + row) % 3) * 0.012,
        rowDepth,
        colors[(column + row * 2) % colors.length],
        x,
        baseY + height / 2 + 0.018,
        z,
      );
      tile.rotation.y = ((column + row) % 5 - 2) * 0.012;
      tile.castShadow = false;
      tile.receiveShadow = true;
      scene.add(tile);
      column++;
    }
  }
}
