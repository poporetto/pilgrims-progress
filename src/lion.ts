// The two great lions before Palace Beautiful. They face local +Z.
import * as THREE from 'three';
import { voxelMesh, type Voxel } from './world/voxels';

export interface LionRig {
  root: THREE.Group;
  head: THREE.Group;
  jaw: THREE.Group;
  tail: THREE.Group[];
  trunk: THREE.Group;
  /** where the chain is fastened, in root space */
  collar: THREE.Vector3;
}

const FUR = 0xe2ae62;
const FUR_LIGHT = 0xf2d29a;
const FUR_DARK = 0xc98f48;
const MANE = 0xa9602c;
const MANE_LIGHT = 0xc67a38;
const MANE_DARK = 0x7f4420;
const CREAM = 0xfae8c8;
const NOSE = 0x4b2f27;

type Box = [w: number, h: number, d: number, color: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number];
const model = (boxes: Box[]): THREE.Mesh => voxelMesh(boxes.map(
  ([w, h, d, color, x, y, z, rx, ry, rz]): Voxel => ({ w, h, d, color, x, y, z, rx, ry, rz })));
const both = (make: (s: -1 | 1) => Box[]): Box[] => [...make(-1), ...make(1)];

export function makePalaceLion(): LionRig {
  const root = new THREE.Group();

  // ---- legs: straight in front, heavy haunches behind
  root.add(model(both((s) => [
    [0.44, 1.0, 0.46, FUR, s * 0.4, 0.62, 0.5],
    [0.54, 0.26, 0.68, FUR_LIGHT, s * 0.42, 0.14, 0.6],
    ...[-0.16, 0, 0.16].map((c): Box => [0.1, 0.1, 0.14, CREAM, s * 0.42 + c, 0.08, 0.96]),
    [0.46, 0.95, 0.86, FUR, s * 0.46, 0.95, -1.1, 0.12],
    [0.38, 0.6, 0.4, FUR_DARK, s * 0.48, 0.42, -1.26],
    [0.5, 0.24, 0.66, FUR_LIGHT, s * 0.48, 0.13, -1.12],
  ])));

  // ---- the trunk: deep chest tapering to lean loins
  const trunk = new THREE.Group();
  root.add(trunk);
  trunk.add(model([
    [1.22, 1.12, 1.15, FUR, 0, 1.32, 0.2],
    [1.06, 0.92, 1.1, FUR, 0, 1.36, -0.6],
    [0.96, 0.84, 0.6, FUR, 0, 1.3, -1.25],
    [0.8, 0.16, 1.5, FUR_LIGHT, 0, 0.82, -0.3],
    [0.5, 0.1, 1.7, FUR_DARK, 0, 1.86, -0.55],
    // the mane spilling over shoulders and chest
    [1.46, 0.5, 0.8, MANE, 0, 1.86, 0.36, -0.15],
    [1.16, 0.34, 0.6, MANE_DARK, 0, 1.94, -0.12, -0.2],
    [1.12, 0.85, 0.4, MANE, 0, 1.2, 0.78],
    [0.8, 0.5, 0.34, MANE_LIGHT, 0, 0.86, 0.86],
    ...both((s) => [
      [0.36, 0.95, 0.78, MANE, s * 0.66, 1.5, 0.42, 0, 0, s * 0.12],
      [0.28, 0.6, 0.5, MANE_DARK, s * 0.7, 1.35, 0.06, 0, 0, s * 0.16],
    ]),
  ]));

  // ---- the head, sunk in two rings of mane
  const head = new THREE.Group();
  head.position.set(0, 2.0, 0.95);
  trunk.add(head);
  const boxes: Box[] = [[1.5, 1.5, 0.5, MANE_DARK, 0, 0, -0.36]];
  const ring = (count: number, radius: number, len: number, wide: number, z: number, colors: number[], turn: number): void => {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + turn;
      boxes.push([wide, len, 0.36, colors[i % colors.length], Math.sin(a) * radius, Math.cos(a) * radius, z, 0, 0, -a]);
    }
  };
  ring(14, 0.86, 0.6, 0.48, -0.34, [MANE_DARK, MANE], 0.1);
  ring(12, 0.68, 0.5, 0.44, -0.06, [MANE, MANE_LIGHT], 0);
  boxes.push(
    // the face stands clear of the mane
    [1.06, 1.0, 0.7, FUR, 0, 0.02, 0.22],
    [0.8, 0.16, 0.16, FUR_LIGHT, 0, 0.5, 0.5],
    [0.28, 0.6, 0.2, FUR_LIGHT, 0, 0.2, 0.58],       // long nose bridge
    [0.36, 0.2, 0.16, NOSE, 0, -0.06, 0.82],
    [0.12, 0.14, 0.1, NOSE, 0, -0.2, 0.82],
    [0.5, 0.3, 0.16, MANE_LIGHT, 0, 0.66, 0.34, -0.3], // forelock
    ...both((s) => [
      [0.36, 0.34, 0.42, CREAM, s * 0.19, -0.18, 0.62], // whisker pads
      [0.05, 0.05, 0.04, FUR_DARK, s * 0.2, -0.14, 0.84],
      [0.05, 0.05, 0.04, FUR_DARK, s * 0.3, -0.22, 0.84],
      [0.28, 0.4, 0.3, FUR_LIGHT, s * 0.42, -0.12, 0.42],  // cheeks
      [0.4, 0.13, 0.16, FUR_DARK, s * 0.31, 0.4, 0.58, 0, 0, s * 0.28], // brows
      [0.22, 0.2, 0.06, 0xffcf52, s * 0.31, 0.22, 0.57],    // amber eyes
      [0.09, 0.18, 0.05, 0x2d1c14, s * 0.29, 0.22, 0.6],
      [0.06, 0.06, 0.04, 0xffffff, s * 0.31 + 0.04, 0.28, 0.62],
      // round ears pricked through the mane
      [0.38, 0.36, 0.2, FUR, s * 0.58, 0.82, 0.12, 0, 0, s * -0.3],
      [0.22, 0.2, 0.1, 0xd99a7c, s * 0.58, 0.82, 0.22, 0, 0, s * -0.3],
      [0.1, 0.24, 0.1, 0xfffaf0, s * 0.18, -0.4, 0.72],     // fangs
    ]),
  );
  head.add(model(boxes));
  const jaw = new THREE.Group();
  jaw.position.set(0, -0.32, 0.3);
  jaw.add(model([
    [0.54, 0.16, 0.46, FUR_LIGHT, 0, -0.06, 0.28],
    [0.4, 0.05, 0.36, 0xd9747c, 0, 0.04, 0.3],
    [0.34, 0.3, 0.26, MANE, 0, -0.24, 0.36],
    [0.08, 0.14, 0.08, 0xfffaf0, -0.17, 0.08, 0.44],
    [0.08, 0.14, 0.08, 0xfffaf0, 0.17, 0.08, 0.44],
  ]));
  head.add(jaw);

  // ---- an iron collar
  const collar = new THREE.Mesh(
    new THREE.TorusGeometry(0.72, 0.09, 6, 18),
    new THREE.MeshStandardMaterial({ color: 0x77727c, roughness: 0.5, metalness: 0.4 }),
  );
  collar.position.set(0, 1.5, -0.2);
  collar.castShadow = true;
  trunk.add(collar);

  // ---- tail, curling up to a dark tuft
  const tail: THREE.Group[] = [];
  let parent: THREE.Object3D = trunk;
  for (let i = 0; i < 5; i++) {
    const seg = new THREE.Group();
    seg.add(model(i < 4
      ? [[0.18 - i * 0.015, 0.18 - i * 0.015, 0.44, FUR, 0, 0, -0.18]]
      : [[0.36, 0.36, 0.36, MANE, 0, 0, -0.14], [0.24, 0.24, 0.3, MANE_DARK, 0, 0.02, -0.38]]));
    seg.position.set(0, i ? 0 : 1.55, i ? -0.36 : -1.5);
    seg.rotation.x = [-0.5, 0.35, 0.5, 0.45, 0.3][i];
    parent.add(seg);
    parent = seg;
    tail.push(seg);
  }
  return { root, head, jaw, tail, trunk, collar: new THREE.Vector3(0.5, 1.0, -0.2) };
}
