// Apollyon, "scaled like a fish, winged like a dragon, footed like a bear,
// mouthed like a lion, and out of his belly came fire and smoke". Built to
// match his dialogue portrait: a great square charcoal head under banded red
// horns. He faces local +Z.
import * as THREE from 'three';
import { rng, voxelMesh, type Voxel } from './world/voxels';

export interface ApollyonRig {
  root: THREE.Group;
  wings: THREE.Group[];
  jaw: THREE.Group;
  /** poses breath, tail, head, arms and fire; `claw` 0..1 raises the striking arm */
  animate: (t: number, claw: number, fury: number) => void;
}

const COAL = 0x625f6a;
const COAL_LIGHT = 0x7b7784;
const COAL_DARK = 0x4a4752;
const RED = 0xb9544a;
const RED_DARK = 0x933f3b;
const BONE = 0xe6d6b8;

type Box = [w: number, h: number, d: number, color: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number];
function model(boxes: Box[]): THREE.Mesh {
  return voxelMesh(boxes.map(([w, h, d, color, x, y, z, rx, ry, rz]): Voxel => ({ w, h, d, color, x, y, z, rx, ry, rz })));
}
const both = (make: (side: -1 | 1) => Box[]): Box[] => [...make(-1), ...make(1)];

function ember(color: number, boxes: Box[]): { group: THREE.Group; material: THREE.MeshBasicMaterial } {
  const material = new THREE.MeshBasicMaterial({ color });
  const group = new THREE.Group();
  for (const [w, h, d, , x, y, z, rx = 0, ry = 0, rz = 0] of boxes) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    group.add(m);
  }
  return { group, material };
}

export function makeApollyon(): ApollyonRig {
  const root = new THREE.Group();
  const r = rng(90);

  // ---- bear's feet: wide, heavy and clawed
  root.add(model(both((s) => [
    [1.15, 1.3, 1.2, COAL, s * 0.95, 0.95, -0.05],
    [1.0, 0.34, 0.3, COAL_LIGHT, s * 0.95, 1.2, 0.6],
    [1.4, 0.5, 1.75, COAL_DARK, s * 1.02, 0.25, 0.28],
    ...[-0.42, 0, 0.42].map((c): Box => [0.24, 0.22, 0.46, BONE, s * 1.02 + c, 0.14, 1.26]),
  ])));

  // ---- the trunk, breathing as one piece
  const trunk = new THREE.Group();
  root.add(trunk);
  const trunkBoxes: Box[] = [
    [2.7, 1.1, 1.9, COAL, 0, 1.85, 0],
    [3.05, 1.5, 2.1, COAL, 0, 3.0, 0],
    [3.5, 0.62, 1.8, COAL_LIGHT, 0, 3.75, -0.05],
    [1.5, 0.5, 1.4, COAL_DARK, 0, 4.1, 0.1],
  ];
  // fish scales: staggered rows over the flanks and back
  for (let row = 0; row < 5; row++) {
    const y = 1.6 + row * 0.46;
    const wide = y > 2.3 ? 1.55 : 1.38;
    for (let k = 0; k < 4; k++) {
      const z = -0.72 + k * 0.46 + (row % 2) * 0.2;
      const c = r() < 0.5 ? COAL_LIGHT : COAL_DARK;
      trunkBoxes.push([0.14, 0.42, 0.4, c, wide, y, z, 0, 0, 0.16], [0.14, 0.42, 0.4, c, -wide, y, z, 0, 0, -0.16]);
    }
    for (let k = 0; k < 5; k++) {
      trunkBoxes.push([0.46, 0.42, 0.14, r() < 0.5 ? COAL_LIGHT : COAL_DARK, -1.0 + k * 0.5 + (row % 2) * 0.12, y, -1.04, -0.16]);
    }
  }
  // red belly plates, stepped like an armoured worm's
  for (let i = 0; i < 5; i++) {
    trunkBoxes.push([1.5 + Math.sin(i * 0.8) * 0.3, 0.36, 0.24, i % 2 ? RED_DARK : RED, 0, 1.52 + i * 0.5, 1.06]);
  }
  // spines down the back
  for (let i = 0; i < 4; i++) trunkBoxes.push([0.3, 0.62 - i * 0.06, 0.5, RED, 0, 3.95 - i * 0.66, -1.16, -0.6]);
  // spiked shoulders
  trunkBoxes.push(...both((s) => [
    [1.0, 0.75, 1.35, COAL_LIGHT, s * 1.85, 3.72, 0, 0, 0, s * -0.12],
    [0.4, 0.62, 0.4, RED, s * 1.9, 4.28, 0.28, 0, 0, s * -0.3],
    [0.34, 0.5, 0.34, RED_DARK, s * 2.2, 4.12, -0.3, 0, 0, s * -0.5],
  ]));
  trunk.add(model(trunkBoxes));
  // the furnace showing between the plates
  const furnace = ember(0xff8a3c, [0, 1, 2, 3].map((i): Box => [1.2, 0.1, 0.1, 0, 0, 1.77 + i * 0.5, 1.12]));
  trunk.add(furnace.group);

  // ---- arms, ready to strike
  const arms = ([-1, 1] as const).map((s) => {
    const arm = new THREE.Group();
    arm.add(model([
      [0.78, 1.25, 0.85, COAL, 0, -0.5, 0],
      [0.86, 0.3, 0.94, COAL_LIGHT, 0, -0.98, 0.04],
      [0.72, 0.8, 0.8, COAL_DARK, 0, -1.4, 0.2],
      [0.96, 0.6, 0.95, COAL, 0, -1.9, 0.36],
      ...[-0.3, 0, 0.3].map((c): Box => [0.2, 0.48, 0.22, BONE, c, -2.3, 0.62, -0.35]),
    ]));
    arm.position.set(s * 2.1, 3.6, 0.1);
    trunk.add(arm);
    return arm;
  });

  // ---- the head
  const head = new THREE.Group();
  head.position.set(0, 5.05, 0.5);
  trunk.add(head);
  const headBoxes: Box[] = [
    [2.35, 1.75, 1.95, COAL, 0, 0.1, 0],
    [2.1, 0.22, 1.7, COAL_LIGHT, 0, 1.02, -0.05],
    // lion's muzzle: broad and square, with a heavy nose
    [1.5, 0.78, 1.05, COAL_LIGHT, 0, -0.26, 1.36],
    [1.2, 0.3, 0.3, COAL_DARK, 0, 0.04, 1.82],
    [0.22, 0.14, 0.08, 0x18151a, -0.34, -0.02, 1.98],
    [0.22, 0.14, 0.08, 0x18151a, 0.34, -0.02, 1.98],
    [0.9, 0.16, 0.6, RED_DARK, 0, 0.17, 1.2],
  ];
  headBoxes.push(...both((s) => [
    [0.2, 0.24, 0.62, RED, s * 1.2, 0.56, 0.62, 0.2],
    // brows pulled down into a scowl
    [0.86, 0.3, 0.42, RED, s * 0.66, 0.56, 1.0, 0, 0, s * 0.3],
    [0.4, 0.5, 0.2, RED_DARK, s * 0.98, -0.28, 0.98],
    // banded horns sweeping up and out
    [0.56, 0.46, 0.56, RED_DARK, s * 0.78, 1.28, -0.1, 0, 0, s * -0.16],
    [0.5, 0.42, 0.5, RED, s * 0.88, 1.68, -0.16, 0, 0, s * -0.22],
    [0.42, 0.4, 0.42, RED_DARK, s * 1.02, 2.04, -0.24, 0, 0, s * -0.3],
    [0.32, 0.38, 0.32, RED, s * 1.16, 2.38, -0.32, 0, 0, s * -0.3],
    [0.2, 0.34, 0.2, BONE, s * 1.28, 2.68, -0.4, 0, 0, s * -0.34],
    // a mane of spikes where a lion's would be
    [0.85, 0.3, 0.34, COAL_DARK, s * 1.42, 0.72, -0.3, 0, s * 0.5, s * 0.42],
    [0.95, 0.32, 0.34, RED_DARK, s * 1.48, 0.22, -0.34, 0, s * 0.5, s * 0.1],
    [0.85, 0.3, 0.34, COAL_DARK, s * 1.42, -0.3, -0.36, 0, s * 0.5, s * -0.24],
    // upper fangs
    [0.2, 0.46, 0.2, BONE, s * 0.6, -0.72, 1.74],
    [0.15, 0.28, 0.15, BONE, s * 0.26, -0.68, 1.8],
    [0.15, 0.28, 0.15, BONE, s * 0.64, -0.68, 1.3],
  ]));
  for (let i = 0; i < 3; i++) headBoxes.push([0.28, 0.5 - i * 0.08, 0.4, RED, 0, 1.2 - i * 0.28, -0.3 - i * 0.4, -0.5 - i * 0.2]);
  head.add(model(headBoxes));
  const eyes = ember(0xff3b2a, [-1, 1].flatMap((s): Box[] => [
    [0.5, 0.36, 0.1, 0, s * 0.62, 0.22, 1.0, 0, 0, s * 0.12],
    [0.1, 0.3, 0.42, 0, s * 1.17, 0.26, 0.6], // glaring from the side as well
  ]));
  const pupils = model(both((s) => [[0.12, 0.3, 0.06, 0x2b0d0c, s * 0.6, 0.2, 1.06]]));
  head.add(eyes.group, pupils);
  const maw = ember(0xff7a35, [[1.1, 0.2, 0.9, 0, 0, -0.68, 1.22]]);
  head.add(maw.group);
  const jaw = new THREE.Group();
  jaw.add(model([
    [1.36, 0.3, 1.1, COAL_DARK, 0, -0.2, 1.24],
    [1.0, 0.1, 0.8, RED, 0, -0.04, 1.2],
    [0.16, 0.3, 0.16, BONE, -0.42, 0.04, 1.7], [0.16, 0.3, 0.16, BONE, 0.42, 0.04, 1.7],
    [0.5, 0.26, 0.24, RED_DARK, 0, -0.36, 1.7],
  ]));
  jaw.position.y = -0.74;
  head.add(jaw);

  // ---- dragon wings: scalloped membranes hung from long finger bones
  const tips: Array<[number, number]> = [[5.3, 0.2], [4.1, -1.9], [2.5, -2.3], [0.5, -1.7]];
  const wrist: [number, number] = [3.1, 2.4];
  const wings = ([-1, 1] as const).map((s) => {
    const wing = new THREE.Group();
    const sweep = new THREE.Group();
    sweep.rotation.y = s * 0.8; // swept back, so they read from the side too
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.3);
    shape.lineTo(...wrist);
    shape.lineTo(...tips[0]);
    for (let i = 0; i < tips.length - 1; i++) {
      const [ax, ay] = tips[i];
      const [bx, by] = tips[i + 1];
      shape.quadraticCurveTo((ax + bx) / 2 - 0.15, (ay + by) / 2 + 0.95, bx, by);
    }
    shape.lineTo(0, -0.6);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: false, curveSegments: 5 });
    if (s < 0) geo.rotateY(Math.PI);
    const skin = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: RED_DARK, roughness: 0.85, side: THREE.DoubleSide }));
    skin.position.z = s < 0 ? 0.05 : -0.05;
    skin.castShadow = true;
    sweep.add(skin);
    const bones: Box[] = [];
    const bone = (ax: number, ay: number, bx: number, by: number, w: number): void => {
      bones.push([Math.hypot(bx - ax, by - ay) + w * 0.4, w, w, COAL, s * (ax + bx) / 2, (ay + by) / 2, 0, 0, 0, s * Math.atan2(by - ay, bx - ax)]);
    };
    bone(0, 0.3, wrist[0], wrist[1], 0.44);
    for (const [x, y] of tips.slice(0, 3)) bone(wrist[0], wrist[1], x, y, 0.24);
    bones.push([0.5, 0.5, 0.5, COAL_LIGHT, s * wrist[0], wrist[1], 0], [0.22, 0.7, 0.22, BONE, s * (wrist[0] - 0.05), wrist[1] + 0.5, 0, 0, 0, s * 0.2]);
    sweep.add(model(bones));
    wing.add(sweep);
    wing.position.set(s * 1.05, 3.5, -0.95);
    trunk.add(wing);
    return wing;
  });

  // ---- a scaly tail with a fish's fin
  const tail: THREE.Group[] = [];
  let parent: THREE.Object3D = root;
  for (let i = 0; i < 6; i++) {
    const seg = new THREE.Group();
    const w = 1.25 - i * 0.17;
    const boxes: Box[] = [
      [w, w * 0.8, 1.15, i % 2 ? COAL_LIGHT : COAL, 0, 0, -0.5],
      [0.24, 0.42, 0.44, RED, 0, w * 0.5, -0.55, -0.5],
    ];
    if (i === 5) boxes.push([0.2, 1.1, 0.9, RED, 0, 0.52, -1.15, 0.6], [0.2, 1.0, 0.8, RED_DARK, 0, -0.34, -1.1, -0.6], [0.5, 0.16, 0.5, COAL, 0, 0.05, -1.0]);
    seg.add(model(boxes));
    if (i === 0) seg.position.set(0, 1.35, -0.85);
    else seg.position.z = -0.95;
    seg.rotation.x = i === 0 ? -0.2 : i < 3 ? 0.02 : 0.16; // droops, then lifts its fin
    parent.add(seg);
    parent = seg;
    tail.push(seg);
  }

  const emberBase = new THREE.Color(0xff8a3c);
  const emberHot = new THREE.Color(0xffd27a);
  const animate = (t: number, claw: number, fury: number): void => {
    const breath = Math.sin(t * 1.7);
    trunk.scale.set(1 + breath * 0.012, 1 + breath * 0.016, 1 + breath * 0.02);
    head.rotation.y = Math.sin(t * 0.6) * 0.09;
    head.rotation.x = Math.sin(t * 1.7 + 0.6) * 0.025 - fury * 0.12;
    tail.forEach((seg, i) => { seg.rotation.y = Math.sin(t * 1.3 - i * 0.55) * (0.08 + i * 0.03); });
    arms[0].rotation.x = -0.25 + breath * 0.03;
    arms[1].rotation.x = -0.25 - breath * 0.03 - claw * 2.0;
    arms[0].rotation.z = -0.16;
    arms[1].rotation.z = 0.16;
    const heat = Math.min(1, 0.35 + Math.sin(t * 5.3) * 0.15 + Math.sin(t * 8.1) * 0.1 + fury * 0.55);
    furnace.material.color.copy(emberBase).lerp(emberHot, heat);
    maw.material.color.copy(emberBase).lerp(emberHot, heat);
  };
  animate(0, 0, 0);
  return { root, wings, jaw, animate };
}
