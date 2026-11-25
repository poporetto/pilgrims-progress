import * as THREE from 'three';
import { BearParts, animateBear, block, liveBears, makeBear } from '../bear';
import { WicketGateScene } from '../wicketgate';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, lerpCam, setCameraAvoid, clear, around, moodTrack,
  V, ease, clamp01, lerp, W, H, addClouds,
} from './engine';

// Episode 6 — The Knight, the Cage and the Dream (Interpreter's House rooms 4–6, farewell)

const timeline: Timeline = await (await fetch('/film/out/ep6/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ set: the far end of the Interpreter's hall
const noop = (): void => {};
const wicket = new WicketGateScene({
  playScript: noop, setObjective: noop, onComplete: noop, onExit: noop, rumbleSound: noop,
} as unknown as ConstructorParameters<typeof WicketGateScene>[0]);
const wg = wicket.enter(false);
const S = wicket.scene;
const wx = wicket as unknown as {
  interpreter: BearParts;
  goodwill: BearParts;
  cottageDoor: THREE.Group | null;
  exitDoor: THREE.Group | null;
  lightBeam: THREE.Group | null;
  knight: BearParts | null; knightArm: THREE.Group | null; knightShieldArm: THREE.Group | null;
  guards: BearParts[]; guardBaseX: number[];
  dreamer: BearParts | null;
  sweatDrops: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; baseY: number }>;
};
wx.goodwill.root.visible = false;
if (wx.lightBeam) wx.lightBeam.visible = true;

const studio = makeStudio(S, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

const IX = 150;
const K4 = IX + 52;        // the palace and the knight
const CAGE = V(IX + 62, 0, -4.35); // the iron cage (front bars at z ≈ -3.4)
const BED = V(IX + 80, 0, 3.0);    // the dreamer's bed
const EXIT_X = IX + 92;
const OUT = s('out') + 1.5;        // the cut back outdoors

// the caged man is one of the house's own residents — find his rig by where he sits
let cagedParts: BearParts | null = null;
for (const b of liveBears) {
  const p = b.root.position;
  if (Math.abs(p.x - CAGE.x) < 0.1 && Math.abs(p.z - CAGE.z) < 0.1) cagedParts = b;
}
// the pale throne of the dream, hanging above the bed's far end
let throne: THREE.Mesh | null = null;
S.traverse((o) => {
  const m = o as THREE.Mesh;
  if (m.isMesh && Math.abs(m.position.x - BED.x) < 0.01 && Math.abs(m.position.z - 4.9) < 0.01) throne = m;
});

// ------------------------------------------------------------------ extra props: the crowd, the writer's table
const desk = new THREE.Group();
desk.add(block(1.2, 0.08, 0.7, 0x8a6f52, 0, 0.62, 0));
for (const [dx, dz] of [[-0.5, -0.27], [0.5, -0.27], [-0.5, 0.27], [0.5, 0.27]]) desk.add(block(0.08, 0.6, 0.08, 0x6b5442, dx, 0.3, dz));
desk.add(block(0.5, 0.06, 0.36, 0xfff6e8, -0.1, 0.69, 0)); // the open book
desk.add(block(0.04, 0.04, 0.3, 0x3a3640, 0.3, 0.72, 0.02)); // pen
desk.position.set(K4 + 2.7, 0, 1.3);
S.add(desk);
const scribeParts = makeBear({ species: 'mouse', outfit: 'robe', outfitColor: 0x7a6a9a, scale: 0.8 });
S.add(scribeParts.root);
const crowdParts = [
  makeBear({ species: 'rabbit', outfit: 'dress', outfitColor: 0xf2a7b8, scale: 0.85 }),
  makeBear({ species: 'sheep', outfit: 'shirt', outfitColor: 0x9fc6e8, scale: 0.88 }),
  makeBear({ species: 'pig', outfit: 'apron', outfitColor: 0xc9e3a5, scale: 0.85 }),
  makeBear({ species: 'dog', outfit: 'shirt', outfitColor: 0xf3d27a, scale: 0.85 }),
];
for (const p of crowdParts) S.add(p.root);
// the doorway's welcome light, for when the palace sings
const doorGlow = new THREE.PointLight(0xffe2a0, 0, 7);
doorGlow.position.set(K4, 1.4, 3.4);
S.add(doorGlow);
const sparkles: Array<{ m: THREE.Mesh; mat: THREE.MeshBasicMaterial; ph: number; x: number; z: number }> = [];
for (let i = 0; i < 26; i++) {
  const mat = new THREE.MeshBasicMaterial({ color: i % 3 ? 0xffe48a : 0xffffff, transparent: true, opacity: 0 });
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.09, 0.09), mat);
  m.castShadow = false;
  S.add(m);
  sparkles.push({ m, mat, ph: i / 26, x: K4 + (((i * 37) % 23) / 23 - 0.5) * 2.2, z: 3.4 - ((i * 13) % 7) * 0.25 });
}
// the open exit door lets in the bright morning
const daylight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.5, 2.0), new THREE.MeshBasicMaterial({ color: 0xfff4d6, transparent: true, opacity: 0 }));
daylight.position.set(EXIT_X + 0.6, 1.25, 0);
S.add(daylight);
const dreamGlow = new THREE.PointLight(0xfff6dc, 0, 9);
dreamGlow.position.set(BED.x, 2.0, 4.4);
S.add(dreamGlow);

// ------------------------------------------------------------------ cast
const N_ = 0;
const S_ = Math.PI;
const E_ = Math.PI / 2;
const W_ = -Math.PI / 2;
const C = new Actor('Christian', wg.christian, 'calm', K4 - 9.5, 0.2, E_).withBrows(0x3b2416);
const OWL = new Actor('Interpreter', wx.interpreter, 'wise', K4 - 8.4, -0.6, E_).withBrows(0x4a3a28);
const KN = new Actor('Knight', wx.knight!, 'excited', K4 - 2.7, 0.7, N_).withBrows(0x3b2416);
const CM = new Actor('Caged Man', cagedParts!, 'gentle', CAGE.x, CAGE.z, N_).withBrows(0x4a443c);
const DR = new Actor('Dreamer', wx.dreamer!, 'excited', BED.x - 0.3, BED.z + 0.1, W_).withBrows(0x6a5a4a);
const SC = new Actor('Scribe', scribeParts, 'calm', K4 + 2.7, 1.95, S_).withBrows(0x4a3a28);
const CR = crowdParts.map((p, i) => new Actor(`Crowd${i}`, p, 'shy',
  [K4 - 3.6, K4 - 4.3, K4 - 3.3, K4 - 4.7][i], [1.1, 0.3, -0.3, 1.6][i], N_).withBrows(0x3b2416));
const G = wx.guards.map((g, i) => new Actor(`Guard${i}`, g, 'grumpy', wx.guardBaseX[i], 3.0, S_).withBrows(0x2c2a30));
const actors = [C, OWL, KN, CM, DR, SC, ...CR, ...G];
for (const g of G) g.expr(0, 'angry');
for (const c of CR) c.expr(0, 'worried');
CM.expr(0, 'sad');
DR.expr(0, 'scared');
for (const [x, y, z, sz] of [[0.3, 0.1, 0.44, 0.2], [-0.26, 0.28, 0.44, 0.16]] as const) {
  const m = block(sz * 1.7, sz * 1.2, sz * 0.5, 0x6a543c, x, y, z);
  m.castShadow = false;
  C.parts.body.add(m);
}
// the knight's helmet and sword wait until he arms himself
const helmet = wx.knight!.head.children.filter((o) => {
  const mat = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
  return mat?.color?.getHex() === 0xc7c9cf;
});
const sword = wx.knightArm!.children.find((o) => (o as THREE.Group).isGroup) ?? null;

// ------------------------------------------------------------------ blocking
// room 4: the palace
const r4C: [number, number] = [K4 + 0.4, -3.2];
const r4O: [number, number] = [K4 - 1.6, -3.4];
C.walkUntil(s('n1') - 0.4, e('n1') - 0.4, [[K4 - 6.5, 0.1], [K4 - 3, -1.8], r4C]);
OWL.walkUntil(s('n1') - 0.4, e('n1') - 0.8, [[K4 - 6.2, -0.4], [K4 - 3.5, -2.4], r4O]);
C.face(e('n1') - 0.3, OWL);
OWL.face(e('n1') - 0.6, C);
C.face(s('n2') + 0.3, N_);
OWL.face(s('n2') + 0.2, N_);
C.face(e('n5') + 0.05, OWL);
OWL.face(e('n5') + 0.05, C);
for (const c of CR) c.face(0, V(K4, 0, 3.2));
// the knight steps out of the crowd to the writer's table
KN.walkUntil(s('n3') + 0.6, e('n3') - 2.0, [[K4 - 1.0, 0.5], [K4 + 2.7, 0.65]]);
KN.face(e('n3') - 1.9, N_);
KN.face(e('n3') - 0.1, W_);          // turns to the crowd: "I am going in!"
KN.face(s('arm') + 1.2, N_);
KN.walkUntil(s('n4') + 0.6, s('n4') + 1.8, [[K4, 2.0]], 1.6);
KN.face(s('n4') + 1.9, N_);
KN.walkUntil(s('enter'), s('enter') + 1.1, [[K4, 3.8]], 1.4);
KN.show(s('enter') + 1.15, false);
SC.face(0, S_);
for (const c of CR) c.expr(s('n5'), 'happy');
// room 5: the iron cage
const r5C: [number, number] = [CAGE.x + 1.4, -1.8];
const r5O: [number, number] = [CAGE.x - 1.5, -1.3];
C.walkUntil(s('n6') + 0.2, s('n6') + 4.6, [[K4 + 4, -0.6], [CAGE.x - 2, 0.2], r5C]);
OWL.walkUntil(s('n6') + 0.4, s('n6') + 4.4, [[K4 + 4, 0.2], [CAGE.x - 3, 0.4], r5O]);
C.face(s('n6') + 4.8, V(CAGE.x, 0, CAGE.z));
OWL.face(s('n6') + 4.6, V(CAGE.x, 0, CAGE.z));
OWL.face(e('m2') + 0.05, C);
C.face(s('i3') + 0.4, OWL);
// room 6: the dream
const r6C: [number, number] = [BED.x - 2.5, 1.9];
const r6O: [number, number] = [BED.x + 1.4, 0.6];
C.walkUntil(s('n7'), s('n7') + 4.2, [[CAGE.x + 4, 0.2], [BED.x - 4, 0.6], r6C]);
OWL.walkUntil(s('n7') + 0.2, s('n7') + 4.6, [[CAGE.x + 4, -0.5], [BED.x - 2, -0.9], r6O]);
C.face(s('n7') + 4.4, DR);
OWL.face(s('n7') + 4.8, DR);
OWL.face(e('d2') + 0.05, C);
C.face(e('d2') + 0.05, OWL);
DR.face(0, W_);
// the door at the end of the house
const r7C: [number, number] = [EXIT_X - 2.6, 0.9];
const r7O: [number, number] = [EXIT_X - 1.6, -1.3];
C.walkUntil(s('n8') - 0.2, e('n8') + 0.3, [[BED.x + 2.5, 0.4], [EXIT_X - 6, 0.2], r7C]);
OWL.walkUntil(s('n8'), e('n8'), [[BED.x + 3.2, -0.4], [EXIT_X - 6, -0.6], r7O]);
C.face(e('n8') + 0.4, OWL);
OWL.face(e('n8') + 0.2, C);
C.walk(s('out') + 0.1, 1.9, [[EXIT_X - 0.6, 0.0], [EXIT_X + 1.6, 0.0]]);
OWL.face(s('out') + 0.3, E_);
// back outside on the King's Highway, the Interpreter waving from his door
C.place(OUT, 40, -2.4, N_);
OWL.place(OUT, 40.6, -3.5, N_);
C.walk(OUT + 0.6, 1.6, [[40.6, -0.3], [44, 0.1], [70, 0.2]]);

// ------------------------------------------------------------------ poses
const k = (t: number, a: number, b: number, rin = 0.3, rout = 0.4): number =>
  clamp01((t - a) / rin) * (1 - clamp01((t - b) / rout));
C.pose = (t) => {
  const P = C.parts;
  // flinches at the fight
  const flinch = k(t, s('n4') + 1.8, s('enter'), 0.3, 0.5);
  if (flinch > 0) {
    P.body.rotation.x -= 0.12 * flinch;
    P.armL.rotation.x = lerp(P.armL.rotation.x, -1.2, flinch);
    P.armR.rotation.x = lerp(P.armR.rotation.x, -1.2, flinch);
  }
  // a little hop of joy when he understands
  const glad = k(t, s('c2'), s('c2') + 1.3);
  P.root.position.y += Math.abs(Math.sin((t - s('c2')) * 8)) * 0.1 * glad;
  // hand on heart: "keep it soft"
  const heart = k(t, s('c5') + 0.3, e('c5') + 0.4);
  if (heart > 0) {
    P.armR.rotation.x = lerp(P.armR.rotation.x, -1.5, heart);
    P.armR.rotation.z = lerp(P.armR.rotation.z, 0.7, heart);
    P.head.rotation.x += 0.15 * heart;
  }
  // shivers at the dream
  const shiver = k(t, s('d1') + 0.5, e('d2') + 0.3, 0.4, 0.6);
  P.root.rotation.z = Math.sin(t * 21) * 0.025 * shiver;
};
OWL.pose = (t) => {
  const P = OWL.parts;
  for (const id of ['i1', 'i2', 'i3', 'i4']) {
    const q = k(t, s(id), e(id) + 0.6);
    if (q > 0) {
      P.armR.rotation.z = lerp(P.armR.rotation.z, 1.1, q);
      P.armR.rotation.x = lerp(P.armR.rotation.x, -0.5, q);
    }
  }
  // waves goodbye from the cottage door
  if (t > OUT + 0.3) {
    P.armR.rotation.x = -2.6;
    P.armR.rotation.z = 0.4 + Math.sin(t * 7) * 0.45;
  }
};
KN.pose = (t) => {
  const P = KN.parts;
  const armed = t > s('arm') + 0.5;
  const pop = clamp01((t - s('arm') - 0.5) / 0.25);
  for (const h of helmet) { h.visible = armed; h.scale.setScalar(armed ? 1 + Math.sin(pop * Math.PI) * 0.35 : 1); }
  if (sword) sword.visible = t > s('arm') + 1.0;
  // putting on the helmet: both paws up to his head
  const don = k(t, s('arm') + 0.1, s('arm') + 0.7, 0.2, 0.3);
  if (don > 0) {
    P.armL.rotation.x = lerp(P.armL.rotation.x, -2.6, don);
    P.armR.rotation.x = lerp(P.armR.rotation.x, -2.6, don);
  }
  // sword raised high, ready
  const ready = k(t, s('arm') + 1.0, s('n4') + 1.8, 0.3, 0.2);
  if (ready > 0) P.armR.rotation.x = lerp(P.armR.rotation.x, -2.8, ready);
  // signs his name: a busy little writing hand
  const sign = k(t, e('n3') - 1.8, e('n3') - 0.2, 0.2, 0.2);
  if (sign > 0) {
    P.armR.rotation.x = lerp(P.armR.rotation.x, -0.9 + Math.sin(t * 16) * 0.15, sign);
    P.head.rotation.x += 0.25 * sign;
  }
  // the fight: sword swinging, shield up, body rocking under blows
  const fighting = t > s('n4') + 1.8 && t < s('enter');
  if (fighting) {
    const ft = t - s('n4');
    P.armR.rotation.x = -0.3 + Math.sin(ft * 11) * 1.1;
    P.armL.rotation.z = 0.2 + Math.sin(ft * 7 + 1) * 0.15;
    P.armL.rotation.x = -1.2;
    P.root.rotation.z = Math.sin(ft * 8) * 0.06;
    P.root.position.x += Math.sin(ft * 3.1) * 0.12;
  } else {
    P.root.rotation.z = 0;
  }
};
const guardHit = [0, 0];
G.forEach((g, i) => {
  g.pose = (t) => {
    const P = g.parts;
    const fighting = t > s('n4') + 1.8 && t < s('enter') + 0.4;
    // stagger: a jolt every so often (deterministic, frame-independent)
    const ft = (t - s('n4')) * 1.7 + i * 0.5;
    const kick = fighting ? Math.max(0, 1 - (ft % 1) * 2.5) : 0;
    guardHit[i] = kick;
    P.root.position.x += Math.sin(t * 22 + i) * 0.1 * kick;
    P.root.rotation.z = Math.sin(t * 16 + i) * 0.35 * kick;
    // after the knight is through, they step aside, beaten
    const aside = clamp01((t - s('enter') - 0.2) / 0.8);
    P.root.position.x += (i === 0 ? -0.5 : 0.5) * aside;
    if (fighting) P.armR.rotation.x = -1.0 + Math.sin(t * 9 + i * 2) * 0.6;
  };
});
SC.pose = (t) => {
  // writes the name in his book
  const w = k(t, e('n3') - 1.8, s('k1') + 0.8);
  if (w > 0) SC.parts.armR.rotation.x = lerp(SC.parts.armR.rotation.x, -1.0 + Math.sin(t * 18) * 0.2, w);
};
CR.forEach((c, i) => {
  c.pose = (t) => {
    const P = c.parts;
    // cowering until the song; then hopping for joy
    const cower = 1 - clamp01((t - s('n5')) / 0.6);
    P.body.rotation.x -= 0.1 * cower;
    const cheer = clamp01((t - s('n5') - 0.4) / 0.4) * (1 - clamp01((t - s('n6')) / 0.6));
    if (cheer > 0) {
      P.root.position.y += Math.abs(Math.sin(t * 9 + i * 1.3)) * 0.14 * cheer;
      P.armL.rotation.x = lerp(P.armL.rotation.x, -2.7, cheer);
      P.armR.rotation.x = lerp(P.armR.rotation.x, -2.7, cheer);
    }
  };
});
CM.pose = (t) => {
  const P = CM.parts;
  // head bowed low, lifting a little when he speaks
  const talking = (t > s('m1') - 0.2 && t < e('m2') + 0.3) ? 1 : 0;
  P.root.rotation.x = 0.2;
  P.head.rotation.x += lerp(0.35, 0.08, talking);
  P.armL.rotation.x = -0.3;
  P.armR.rotation.x = -0.3;
};
DR.pose = (t) => {
  const P = DR.parts;
  // sitting up in bed, legs out under the covers, trembling all over
  P.root.position.y = 0.3;
  P.legL.rotation.x = -1.3;
  P.legR.rotation.x = -1.3;
  const fear = t < s('i4') + 1 ? 1 : 0.4;
  P.root.rotation.z = Math.sin(t * 19) * 0.05 * fear;
  P.root.rotation.x = Math.sin(t * 23) * 0.04 * fear;
  // turns to Christian when he asks, then back to the vision
  const turn = k(t, s('c6'), s('d1') + 2.0, 0.4, 0.6);
  P.head.rotation.y = -0.7 * turn + Math.sin(t * 14) * 0.06;
  // clutching the blanket
  P.armL.rotation.x = -0.8;
  P.armR.rotation.x = -0.8;
};

// ------------------------------------------------------------------ world logic
const clouds = addClouds(S, { count: 16, gloom: 0.05, height: [24, 40], radius: [60, 120], drift: 1, center: [100, 0], seed: 66 });
// the cage room is dim; the dream darkens the room until the Interpreter speaks
const mood = moodTrack(S, [
  { t: 0, sky: 0xbfe0f0, hemi: 1, sun: 1 },
  { t: s('n6') + 1.0, sky: 0xbfe0f0, hemi: 0.4, sun: 0.3 },
  { t: s('n7'), sky: 0xbfe0f0, hemi: 1, sun: 1 },
  { t: s('d1') + 0.2, sky: 0xbfe0f0, hemi: 0.4, sun: 0.35 },
  { t: s('i4') + 0.3, sky: 0xbfe0f0, hemi: 1, sun: 1 },
], 1.6);
const throneMat = throne ? (throne as THREE.Mesh).material as THREE.MeshBasicMaterial : null;
function update(t: number, dt: number): void {
  clouds(t);
  mood(t);
  // the palace doorway's welcome
  const welcome = clamp01((t - s('enter') - 0.8) / 0.8) * (1 - clamp01((t - s('n6')) / 1.0));
  doorGlow.intensity = welcome * 3.2;
  for (const sp of sparkles) {
    const cyc = (t * 0.45 + sp.ph) % 1;
    sp.m.position.set(sp.x + Math.sin(t * 2 + sp.ph * 9) * 0.2, 0.4 + cyc * 2.6, sp.z);
    sp.mat.opacity = welcome * Math.sin(cyc * Math.PI);
    sp.m.visible = welcome > 0.01;
  }
  // sweat on the dreamer's brow
  wx.sweatDrops.forEach((d, i) => {
    const cyc = (t * 0.9 + i * 0.5) % 1;
    d.mesh.position.y = d.baseY - cyc * 0.45;
    d.mat.opacity = 0.85 * (1 - cyc);
  });
  // the vision: the pale throne shines out while he tells his dream
  const vision = clamp01((t - s('d1') - 0.4) / 1.2) * (1 - clamp01((t - s('i4')) / 1.2));
  if (throneMat) throneMat.opacity = 0.5 + 0.5 * vision;
  dreamGlow.intensity = vision * 4.0;
  // the exit door swings open to the morning
  const open = ease(clamp01((t - s('out') + 0.4) / 1.2));
  if (wx.exitDoor) wx.exitDoor.rotation.y = -2.1 * open;
  (daylight.material as THREE.MeshBasicMaterial).opacity = open;
  // outside: the cottage door stands open behind him
  if (wx.cottageDoor) wx.cottageDoor.rotation.y = t > OUT ? -2.1 : 0;
}

// ------------------------------------------------------------------ shots
let shotT = 0;
setCameraAvoid((eye) => {
  if (shotT > OUT || eye.y > 3.6) return false;
  if (Math.abs(eye.z) > 5.1) return true;
  for (const px of [IX + 45, IX + 59, IX + 73, EXIT_X - 6]) if (Math.abs(eye.x - px) < 0.4 && Math.abs(eye.z) > 2.0) return true;
  if (Math.abs(eye.x - CAGE.x) < 1.3 && eye.z < -3.2) return true; // never inside the cage
  if (Math.abs(eye.x - BED.x) < 0.7 && eye.z > 1.8 && eye.z < 4.2 && eye.y < 1.2) return true;
  return false;
});
const shots: Shot[] = [];
const shot = (at: number, name: string, cam: Shot['cam']) => shots.push({ at, name, cam: (t, u, l) => { shotT = t; return cam(t, u, l); } });
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
const head = (a: Actor, y = 1.45): THREE.Vector3 => V(a.p.x, y, a.p.z);

// room 4
shot(0, 'title hall', move(
  () => ({ eye: V(K4 - 12, 9.5, -9), look: V(K4, 0.6, 1.5), fov: 40 }),
  () => ({ eye: V(K4 - 9, 8.0, -8.5), look: V(K4, 0.8, 1.5), fov: 40 }),
));
shot(s('n1') - 0.1, 'walking on', () => ({ eye: V(C.p.x + 1.5, 6.2, C.p.z - 6.2), look: V(C.p.x + 0.8, 0.8, C.p.z + 0.4), fov: 40 }));
shot(s('i1') - 0.1, 'a picture of courage', () => ({ ...around(OWL, 35, 3.4, 1.5, 1.7), fov: 32 }));
shot(s('n2') - 0.1, 'the palace', (t, u) => ({ eye: V(lerp(K4 + 4.4, K4 + 3.6, u), 2.3, -2.0), look: V(K4 - 1.0, 1.1, 2.4), fov: 44 }));
shot(s('c1') - 0.1, 'why only stand there', () => ({ ...around(C, 35, 3.0, 1.5, 1.45), fov: 32 }));
shot(s('n3') - 0.1, 'to the table', (t, u) => ({ eye: V(K4 + 5.6, 1.5, -1.2 + u * 0.4), look: V(K4 + 1.6, 0.9, 1.0), fov: 40 }));
shot(s('k1') - 0.1, 'write my name', move(
  () => ({ eye: V(K4 - 0.3, 1.4, 1.1), look: V(KN.p.x, 1.3, KN.p.z), fov: 38 }),
  () => ({ eye: V(K4 + 0.1, 1.4, 1.0), look: V(KN.p.x, 1.35, KN.p.z), fov: 34 }),
));
shot(s('arm') - 0.1, 'helmet on', () => ({ eye: V(K4 + 0.4, 1.0, -0.4), look: V(KN.p.x, 1.3, KN.p.z), fov: 40 }));
shot(s('n4') - 0.1, 'charge', (t, u) => ({ eye: V(K4 + 3.4 - u * 0.4, 1.6, -1.6), look: V(K4 + 0.4, 1.1, 2.6), fov: 40, shake: u > 0.3 ? 0.025 : 0 }));
shot(s('n4') + Math.max(3.2, (e('n4') - s('n4')) * 0.55), 'hard blows', () => ({ eye: V(K4 - 2.4, 0.8, 0.5), look: V(K4 + 0.2, 1.3, 2.7), fov: 40, shake: 0.03 }));
shot(s('fight') - 0.1, 'christian flinches', () => ({ ...around(C, 30, 2.8, 1.45, 1.45), fov: 32 }));
shot(s('enter') - 0.1, 'through the door', (t, u) => ({ eye: V(K4 + 0.3, 1.4, -0.6 + u * 0.8), look: V(K4, 1.2, 4.0), fov: 38 }));
shot(s('n5') - 0.1, 'come in, come in', (t, u) => ({ eye: V(lerp(K4 + 4.8, K4 + 4.0, u), lerp(2.0, 2.6, u), -2.4), look: V(K4 - 1.4, 1.2, 2.0), fov: 44 }));
shot(s('c2') - 0.1, 'i know what it means', () => ({ ...around(C, 40, 3.0, 1.5, 1.45), fov: 32 }));
shot(s('i2') - 0.1, 'never turn back', move(
  () => ({ ...around(OWL, 35, 3.6, 1.5, 1.7), fov: 32 }),
  () => ({ ...around(OWL, 35, 3.0, 1.5, 1.75), fov: 29 }),
));
shot(s('c3') - 0.1, 'like that knight', () => ({ ...around(C, 60, 3.4, 1.5, 1.45), fov: 30 }));
// room 5
shot(s('n6') - 0.1, 'the dark room', (t, u) => ({ eye: V(lerp(CAGE.x + 5.5, CAGE.x + 0.4, ease(u)), lerp(3.0, 2.3, u), lerp(1.8, 0.9, u)), look: V(CAGE.x, 0.8, CAGE.z + 0.3), fov: 40 }));
shot(s('c4') - 0.1, 'who are you', () => ({ eye: V(CAGE.x + 2.4, 1.5, -4.5), look: head(C, 1.35), fov: 42 }));
shot(s('m1') - 0.1, 'through the bars', (t, u) => ({ eye: V(CAGE.x + 0.27, 1.2, lerp(-1.1, -1.7, ease(u))), look: V(CAGE.x, 0.9, CAGE.z), fov: 30 }));
shot(s('m2') - 0.1, 'a cage i built', (t, u) => ({ eye: V(CAGE.x - 1.6, 1.15, -2.6 + u * 0.15), look: V(CAGE.x, 0.85, CAGE.z), fov: 38 }));
shot(s('i3') - 0.1, 'keep your heart soft', () => ({ ...around(OWL, -25, 2.8, 1.55, 1.7), fov: 32 }));
shot(s('c5') - 0.1, 'watch over my heart', () => ({ eye: V(CAGE.x - 0.4, 1.5, -0.6), look: head(C, 1.4), fov: 34 }));
// room 6
shot(s('n7') - 0.1, 'the last room', (t, u) => ({ eye: V(lerp(BED.x - 4.6, BED.x - 4.0, u), 2.3, -0.8), look: V(BED.x - 0.4, 1.0, BED.z), fov: 40 }));
shot(s('c6') - 0.1, 'why trembling', () => ({ eye: V(BED.x - 1.2, 1.5, 3.8), look: head(C), fov: 34 }));
shot(s('d1') - 0.1, 'i had a dream', (t, u) => ({ eye: V(BED.x - 2.8, 1.6, 4.0), look: V(DR.p.x, 1.6, DR.p.z), fov: lerp(42, 38, u), shake: 0.006 }));
shot(s('d1') + Math.max(2.6, (e('d1') - s('d1')) * 0.5), 'the throne', (t, u) => ({ eye: V(BED.x - 1.6, 0.95, 0.6), look: V(BED.x, lerp(1.4, 1.8, u), 4.9), fov: 42 }));
shot(s('d2') - 0.1, 'not ready', (t, u) => ({ eye: V(BED.x - 3.1, 1.6, lerp(4.0, 3.8, u)), look: V(DR.p.x, 1.6, DR.p.z), fov: 34, shake: 0.008 }));
shot(s('i4') - 0.1, 'a day of joy', move(
  () => ({ ...around(OWL, -25, 3.2, 1.55, 1.7), fov: 34 }),
  () => ({ ...around(OWL, -25, 2.7, 1.55, 1.75), fov: 30 }),
));
shot(s('c7') - 0.1, 'longest of all', () => ({ eye: V(BED.x - 0.3, 1.5, 0.0), look: head(C), fov: 32 }));
// farewell
shot(s('n8') - 0.1, 'to the door', () => ({ eye: V(C.p.x - 4.6, 1.8, C.p.z + 0.6), look: V(EXIT_X, 1.3, 0), fov: 38 }));
shot(s('c8') - 0.1, 'thank you', () => ({ ...clear(C, 35, 3.4, 1.5, 1.45), fov: 32 }));
shot(s('i5') - 0.1, 'go then', (t, u) => lerpCam(
  { ...clear(OWL, 35, 3.6, 1.5, 1.7), fov: 32 },
  { eye: V(EXIT_X - 6.5, 1.6, -0.2), look: V(EXIT_X - 1.2, 1.2, 0), fov: 38 },
  ease(clamp01((u - 0.6) / 0.4)),
));
shot(s('out') - 0.1, 'into the light', () => ({ eye: V(EXIT_X - 6.5, 1.6, -0.2), look: V(EXIT_X - 1.2, 1.2, 0), fov: 38 }));
shot(OUT, 'outside the cottage', () => ({ eye: V(44.5, 1.7, 3.6), look: V(40.8, 1.3, -1.8), fov: 38 }));
shot(s('n9') + 1.4, 'the road ahead', (t, u) => lerpCam(
  { eye: V(C.p.x - 4.5, 1.8, C.p.z + 2.6), look: V(C.p.x + 6, 1.4, 0), fov: 40 },
  { eye: V(C.p.x - 6.5, 4.4, C.p.z + 4.5), look: V(C.p.x + 14, 2.2, 0), fov: 42 },
  ease(u),
));

// ------------------------------------------------------------------ titles & cards
function overlay(ctx: CanvasRenderingContext2D, t: number): void {
  const tA = clamp01((t - 0.6) / 0.8) * (1 - clamp01((t - 4.6) / 0.8));
  if (tA > 0) {
    ctx.save();
    ctx.globalAlpha = tA;
    ctx.fillStyle = 'rgba(244,246,248,0.3)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(40,40,60,0.5)';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#fffaf0';
    ctx.font = '700 132px Fraunces, Georgia, serif';
    ctx.fillText("Pilgrim's Progress", W / 2, H / 2 - 10);
    ctx.font = 'italic 600 56px Fraunces, Georgia, serif';
    ctx.fillStyle = '#ffeec2';
    ctx.fillText('Episode 6 · The Knight, the Cage and the Dream', W / 2, H / 2 + 120);
    ctx.restore();
  }
  // the bright morning floods in as he steps out
  const dip = clamp01(1 - Math.abs(t - OUT) / 0.5);
  if (dip > 0) {
    ctx.fillStyle = `rgba(255,248,236,${dip})`;
    ctx.fillRect(0, 0, W, H);
  }
  const end = s('end');
  const out = clamp01((t - end + 0.6) / 1.4);
  if (out > 0) {
    ctx.fillStyle = `rgba(255,246,228,${out})`;
    ctx.fillRect(0, 0, W, H);
    ctx.save();
    ctx.globalAlpha = clamp01((t - end - 0.4) / 0.8);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#8b6b4a';
    ctx.font = 'italic 600 54px Fraunces, Georgia, serif';
    ctx.fillText('Next time…', W / 2, H / 2 - 40);
    ctx.fillStyle = '#5b4330';
    ctx.font = '700 104px Fraunces, Georgia, serif';
    ctx.fillText('The Cross', W / 2, H / 2 + 80);
    ctx.restore();
  }
  const fadeIn = 1 - clamp01(t / 1.4);
  if (fadeIn > 0) {
    ctx.fillStyle = `rgba(0,0,0,${fadeIn})`;
    ctx.fillRect(0, 0, W, H);
  }
}

// ------------------------------------------------------------------ go
runFilm(studio, {
  update,
  actors,
  speakerActor: (sp) => ({ Christian: C, Interpreter: OWL, Knight: KN, 'Caged Man': CM, Dreamer: DR } as Record<string, Actor>)[sp] ?? null,
  energy: { Christian: 1.15, Interpreter: 1.1, Knight: 1.4, 'Caged Man': 0.6, Dreamer: 1.5 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    Interpreter: { color: '#eef3f7', chip: '#5e7f96' },
    Knight: { color: '#eef0f4', chip: '#6f7787' },
    'Caged Man': { color: '#efedea', chip: '#5a5464' },
    Dreamer: { color: '#eef4fb', chip: '#6a86b0' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'interpreter' },
    { t: s('n4') - 0.2, kind: 'style', style: 'battle' },
    { t: s('n5') - 0.4, kind: 'style', style: 'interpreter' },
    { t: s('d1') + 0.3, kind: 'rumble' },
    { t: OUT - 0.4, kind: 'style', style: 'gate' },
  ],
});
