import * as THREE from 'three';
import { BearParts, block } from '../bear';
import { CrossScene } from '../cross';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, lerpCam, around, setGround,
  V, ease, clamp01, lerp, W, H, addClouds,
} from './engine';

// Episode 7 — The Cross and the empty tomb. Bright, sunny and pastel throughout.

const timeline: Timeline = await (await fetch('/film/out/ep7/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ set
const noop = (): void => {};
const set = new CrossScene({
  playScript: noop, setObjective: noop, onComplete: noop, onExit: noop, blipSound: noop,
});
const { christian } = set.enter(false);
const S = set.scene;
const cx = set as unknown as {
  phase: string;
  angels: BearParts[];
  crossGlow: THREE.Mesh | null;
  burdenOnBack: THREE.Group;
  burdenProp: THREE.Group;
  oldClothes: THREE.Group;
  groundY: (x: number, z: number) => number;
  dressOld: () => void;
  dressNew: (gifts: boolean) => void;
  burstSparkles: (at: THREE.Vector3, n: number, spread?: number) => void;
};
if (cx.crossGlow) cx.crossGlow.visible = false; // its edge cuts across close-ups
cx.phase = 'joy'; // glows, sparkles and music notes run; the game's own cutscene doesn't
const gy = (x: number, z: number): number => cx.groundY(x, z);
setGround(gy);
/** a point `h` above the hill */
const at = (x: number, h: number, z: number): THREE.Vector3 => V(x, gy(x, z) + h, z);

const studio = makeStudio(S, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

const CROSS = V(0, gy(0, -2.2), -2.2);
const TOMB = V(9, gy(9, -4.6), -4.6);
const GAZE: [number, number] = [-1.2, 1.9];   // where the burden falls
const PEEP: [number, number] = [5.9, -4.4];   // at the mouth of the tomb
const MEET: [number, number] = [2.9, 2.7];    // where the Shining Ones find him
const DROP = s('roll') + 0.3;
const ROLL = 3.3;
const DRESS = s('dress') + 0.8;
const SEAL = s('seal') + 0.6;
const LEAVE = s('n6') + 0.4;

// ------------------------------------------------------------------ cast
const E_ = Math.PI / 2;
const C = new Actor('Christian', christian, 'calm', -25, 0, E_).withBrows(0x3b2416);
const A = cx.angels.map((p, i) => new Actor(
  ['First Shining One', 'Second Shining One', 'Third Shining One'][i], p, 'gentle',
  [-0.5, 0.7, 2.9][i], [2.6, 0.5, -0.5][i], 0,
).withBrows(0xb08a5a));
const actors = [C, ...A];
for (const a of A) { a.expr(0, 'happy'); a.face(0, C); a.show(0, false); a.show(s('descend') + 0.2, true); a.show(e('n6') + 0.3, false); }
for (const [x, y, z, sz] of [[0.3, 0.5, 0.41, 0.16], [-0.3, 0.64, 0.41, 0.13]] as const) {
  const m = block(sz * 1.6, sz * 1.2, 0.04, 0x8f7d6c, x, y, z);
  m.castShadow = false;
  cx.oldClothes.add(m);
}
// happy tears
const tears = [-1, 1].map((side) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 0.03), new THREE.MeshBasicMaterial({ color: 0x8fd3f5, transparent: true, opacity: 0 }));
  m.position.set(side * 0.24, 0.4, 0.44);
  C.parts.head.add(m);
  return m;
});

// ------------------------------------------------------------------ blocking
C.walkUntil(s('n1') - 0.3, e('climb') - 0.2, [[-12, 0], [-5.5, 0.9]]);
C.walkUntil(s('n2') + 0.2, e('n2') - 0.6, [GAZE]);
C.face(e('n2') - 0.5, CROSS);
C.face(DROP + 0.2, TOMB);
C.face(e('n3') + 0.05, CROSS);
C.face(s('c5') - 0.3, CROSS);
C.walkUntil(s('n4b') + 0.2, e('n4b') - 0.3, [[2.4, 1.4], [4.6, -2.4], PEEP]);
C.face(e('n4b') - 0.25, TOMB);
C.face(s('c5d') - 0.5, Math.PI * 1.25);
C.walkUntil(s('descend') - 0.2, s('descend') + 2.4, [MEET], 1.3);
C.face(s('descend') + 2.45, V(0.4, 0, 0.5));
C.face(DRESS - 0.5, 0.25);          // turns round to show them off
C.face(e('c6') + 0.1, V(0.4, 0, 0.5));
C.face(e('a3') - 0.3, 0.25);
C.face(e('seal') + 0.05, A[2]);
C.face(s('c7') - 0.5, 0.35);
C.walkUntil(e('n7') - 0.6, s('end') + 4, [[8, 0.9], [34, 0]], 1.25);
C.expr(0, 'worried');
C.expr(e('roll') - 0.6, 'happy');

// ------------------------------------------------------------------ poses
const k = (t: number, a: number, b: number, rin = 0.3, rout = 0.4): number =>
  clamp01((t - a) / rin) * (1 - clamp01((t - b) / rout));
C.pose = (t) => {
  const P = C.parts;
  // bent under the weight until it falls
  const heavy = 1 - clamp01((t - DROP) / 0.6);
  P.body.rotation.x += 0.2 * heavy;
  P.head.rotation.x += 0.1 * heavy;
  // looks up at the Cross
  const up = k(t, s('gaze') - 0.4, DROP - 0.3, 0.6) + k(t, s('c5') - 0.2, s('n4b'), 0.5);
  P.head.rotation.x -= 0.32 * Math.min(1, up);
  // the straps wriggle
  const wriggle = k(t, s('c3') + 0.2, DROP, 0.3, 0.1);
  P.body.rotation.z += Math.sin(t * 26) * 0.05 * wriggle;
  P.armL.rotation.z -= 0.6 * wriggle;
  P.armR.rotation.z += 0.6 * wriggle;
  // light as a feather: jumping for joy
  const leap = k(t, s('leap') + 0.1, e('leap') - 0.2, 0.2, 0.2);
  P.root.position.y += Math.abs(Math.sin((t - s('leap') - 0.1) * 5.4)) * 0.55 * leap;
  const n7 = t - s('n7') - 0.2;
  const three = n7 > 0 && n7 < 2.4 ? Math.abs(Math.sin((n7 / 0.8) * Math.PI)) : 0;
  P.root.position.y += three * 0.75;
  const armsUp = Math.max(leap, n7 > 0 && n7 < 2.4 ? 1 : 0);
  if (armsUp > 0) {
    P.armL.rotation.z = lerp(P.armL.rotation.z, -2.4, armsUp);
    P.armR.rotation.z = lerp(P.armR.rotation.z, 2.4, armsUp);
  }
  // paw on heart
  const heart = k(t, s('c5b') + 0.3, e('c5b') + 0.2);
  if (heart > 0) { P.armL.rotation.x = lerp(P.armL.rotation.x, -1.4, heart); P.armL.rotation.z = lerp(P.armL.rotation.z, 0.6, heart); }
  // peeping into the tomb
  const peep = k(t, s('peep'), e('peep') - 0.1, 0.5, 0.4);
  P.body.rotation.x += 0.42 * peep;
  P.head.rotation.y += Math.sin(t * 2.4) * 0.3 * peep;
  // admires the new clothes
  const admire = k(t, DRESS + 0.4, s('c6') + 0.2);
  P.head.rotation.x += 0.35 * admire;
  P.armL.rotation.z -= 1.0 * admire;
  P.armR.rotation.z += 1.0 * admire;
  // swinging, singing walk
  if (t > e('n7')) P.body.rotation.z += Math.sin(t * 5) * 0.06;
};
A.forEach((a, i) => {
  a.pose = (t) => {
    const P = a.parts;
    const u = clamp01((t - s('descend') - 0.2 - i * 0.35) / 2.2);
    const gone = ease(clamp01((t - LEAVE - i * 0.2) / 2.2));
    P.root.position.y += 9 * (1 - u) ** 3 + 0.14 + Math.sin(t * 1.8 + i * 2.1) * 0.08 + gone * 10;
    // reaching out with each gift
    const give = i === 1 ? k(t, s('dress') + 0.1, DRESS + 0.8) : i === 2 ? k(t, s('seal') + 0.1, SEAL + 0.8) : k(t, s('a1'), e('a1'));
    if (give > 0) P.armR.rotation.x = lerp(P.armR.rotation.x, -1.5, give);
  };
});

// ------------------------------------------------------------------ world logic
const clouds = addClouds(S, { count: 18, gloom: 0, height: [20, 38], radius: [60, 115], drift: 1, seed: 77 });
const rollFrom = at(GAZE[0] + 0.1, 0.9, GAZE[1] + 0.5);
const bursts: Array<[number, () => THREE.Vector3, number, number]> = [
  [DROP + ROLL, () => V(TOMB.x - 1.4, TOMB.y + 1, TOMB.z), 16, 1.4],
  [s('leap') + 0.3, () => V(C.p.x, C.p.y + 1.5, C.p.z), 12, 1.6],
  [s('descend') + 1.0, () => V(0.8, CROSS.y + 3, 0.6), 10, 2],
  [DRESS, () => V(C.p.x, C.p.y + 1.2, C.p.z), 16, 1.3],
  [SEAL, () => V(C.p.x, C.p.y + 1.8, C.p.z), 8, 0.6],
  [LEAVE, () => V(0.9, CROSS.y + 2, 0.8), 12, 2],
  [s('n7') + 0.3, () => V(C.p.x, C.p.y + 2, C.p.z), 14, 2],
];
function update(t: number, dt: number): void {
  clouds(t);
  set.update(dt, t, t > e('n7'));
  if (t < DRESS) cx.dressOld(); else cx.dressNew(t > SEAL);
  cx.burdenOnBack.visible = t < DROP;
  // the burden tumbles down the hill and into the tomb
  const u = clamp01((t - DROP) / ROLL);
  cx.burdenProp.visible = u > 0 && u < 1;
  if (cx.burdenProp.visible) {
    const r = u * u * (1.6 - 0.6 * u);
    const x = lerp(rollFrom.x, TOMB.x - 1.1, r);
    const z = lerp(rollFrom.z, TOMB.z, r);
    const drop = Math.max(0, 0.9 - u * 6) ; // slips off his back, then bounces
    cx.burdenProp.position.set(x, gy(x, z) + 0.45 + drop + Math.abs(Math.sin(u * 15)) * 0.35 * (1 - u), z);
    cx.burdenProp.rotation.set(0, 0.55, -r * 13);
    cx.burdenProp.scale.setScalar(1 - clamp01((u - 0.94) / 0.06) * 0.6);
  }
  for (const [bt, p, n, sp] of bursts) if (t >= bt && t - dt < bt) cx.burstSparkles(p(), n, sp);
  const cry = k(t, s('n4') + 0.5, e('n4') + 0.4, 0.4, 0.6);
  tears.forEach((m, i) => {
    const c = (t * 0.7 + i * 0.4) % 1;
    m.position.y = 0.42 - c * 0.3;
    (m.material as THREE.MeshBasicMaterial).opacity = cry * (1 - c);
  });
}

// ------------------------------------------------------------------ shots
const shots: Shot[] = [];
const shot = (t0: number, name: string, cam: Shot['cam']) => shots.push({ at: t0, name, cam });
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
/** a chest-up close shot with headroom above the ears */
const close = (a: Actor, ang: number, dist = 5.0, fov = 32): Cam => ({ ...around(a, ang, a === C ? dist : dist + 1.0, 1.6, a === C ? 1.2 : 1.42), fov });

shot(0, 'title hill', move(
  () => ({ eye: V(-34, 13, 24), look: V(-2, 5.5, -2), fov: 40 }),
  () => ({ eye: V(-29, 10, 22), look: V(-2, 6, -2), fov: 40 }),
));
shot(s('n1') - 0.1, 'sunny road', (_t, u) => ({ eye: at(C.p.x + 5.5, 1.6 + u * 0.4, 6.4), look: V(C.p.x + 1.4, C.p.y + 1.1, 0), fov: 38 }));
shot(s('c0') - 0.1, 'still weighs me down', () => ({ ...around(C, 66, 5.4, 2.2, 1.1), fov: 34 }));
shot(s('c1') - 0.1, 'a little further', () => close(C, -48, 5.2));
shot(s('climb') - 0.1, 'climbing', (_t, u) => ({ eye: V(C.p.x - 6, C.p.y + 1.2, C.p.z + 2.6), look: V(lerp(C.p.x + 4, 0, u), CROSS.y + 1.2, -1.2), fov: 42 }));
shot(s('n2') - 0.1, 'the cross', (_t, u) => ({ eye: V(lerp(-7.5, -6, u), CROSS.y + lerp(0.6, 1.4, u), 9.5), look: V(2.6, CROSS.y + lerp(2.6, 1.3, u), -2.6), fov: 46 }));
shot(s('c2') - 0.1, 'so this is the place', () => close(C, 30, 4.6));
shot(s('gaze') - 0.1, 'looking up', (_t, u) => ({ eye: V(-5.6, CROSS.y + 0.9, 6.0), look: V(-0.2, CROSS.y + lerp(1.4, 2.4, ease(u)), -1.4), fov: 44 }));
shot(s('c3') - 0.1, 'straps', () => close(C, 34, 4.6));
shot(s('roll') - 0.1, 'it falls', () => ({ eye: V(-4.6, CROSS.y + 1.7, 5.6), look: V(GAZE[0] + 0.6, CROSS.y + 0.8, GAZE[1] - 0.4), fov: 42 }));
shot(DROP + 1.0, 'rolling', (_t, u) => {
  const b = cx.burdenProp.visible ? cx.burdenProp.position : V(TOMB.x - 1.2, TOMB.y + 0.6, TOMB.z);
  return { eye: V(lerp(4, 6.2, u), CROSS.y + 1.6, lerp(6.5, 2.8, u)), look: b.clone().add(V(0.4, 0.3, 0)), fov: 42 };
});
shot(s('n3') - 0.1, 'into the tomb', move(
  () => ({ eye: V(2.6, CROSS.y + 2.2, 1.4), look: V(TOMB.x - 1, TOMB.y + 1.0, TOMB.z), fov: 40 }),
  () => ({ eye: V(3.4, CROSS.y + 1.9, 0.2), look: V(TOMB.x - 1, TOMB.y + 1.0, TOMB.z), fov: 36 }),
));
shot(s('c4') - 0.1, 'it is gone', () => close(C, 30, 4.8));
shot(s('leap') - 0.1, 'leap', () => ({ eye: V(-4.5, CROSS.y + 0.8, 8.6), look: V(-0.8, CROSS.y + 1.8, 0), fov: 42 }));
shot(s('c5') - 0.1, 'rest by his sorrow', move(
  () => ({ eye: V(-5.6, CROSS.y + 1.1, 6.6), look: V(-0.2, CROSS.y + 1.9, -1), fov: 44 }),
  () => ({ eye: V(-5.0, CROSS.y + 1.0, 5.6), look: V(0, CROSS.y + 2.3, -1.6), fov: 42 }),
));
shot(s('c5b') - 0.1, 'never forget', () => close(C, 30, 4.6));
shot(s('n4') - 0.1, 'happy tears', () => close(C, 22, 4.6, 30));
shot(s('n4b') - 0.1, 'to the tomb', (_t, u) => ({ eye: V(8.6, TOMB.y + 3.0, 5.6), look: V(lerp(1.5, 6.4, u), lerp(CROSS.y, TOMB.y, u) + 1.0, lerp(0, -4, u)), fov: 42 }));
shot(s('peep') - 0.1, 'peep', () => ({ eye: V(8.6, C.p.y + 1.5, 2.2), look: V(6.9, C.p.y + 0.6, -4.4), fov: 40 }));
shot(s('c5c') - 0.1, 'it is gone for good', () => ({ eye: V(10.4, C.p.y + 1.6, 0.4), look: V(6.1, C.p.y + 1.1, -4.4), fov: 34 }));
shot(s('c5d') - 0.1, 'he rose', () => close(C, 8, 5.6));
shot(s('descend') - 0.1, 'light comes down', (_t, u) => ({ eye: V(1.1, CROSS.y + 1.2, 10.4), look: V(1.2, CROSS.y + lerp(4.6, 1.6, ease(u)), 0.4), fov: 46 }));
shot(s('n5') - 0.1, 'three shining ones', move(
  () => ({ eye: V(1.1, CROSS.y + 2.0, 10.6), look: V(1.2, CROSS.y + 1.3, 0.8), fov: 42 }),
  () => ({ eye: V(1.1, CROSS.y + 1.8, 9.4), look: V(1.2, CROSS.y + 1.2, 0.8), fov: 42 }),
));
shot(s('a1') - 0.1, 'first', () => close(A[0], -24, 4.4));
shot(s('a2') - 0.1, 'second', () => close(A[1], 24, 4.4));
shot(s('dress') - 0.1, 'new clothes', () => ({ eye: V(3.4, CROSS.y + 1.5, 9.2), look: V(2.3, CROSS.y + 0.9, 1.6), fov: 36 }));
shot(s('c6') - 0.1, 'really for me', () => close(C, 10, 5.0));
shot(s('a3') - 0.1, 'third', () => close(A[2], 26, 4.4));
shot(s('seal') - 0.1, 'sealed', () => close(C, 10, 4.5, 30));
shot(s('a4') - 0.1, 'the promise', move(() => close(A[2], 24, 4.8), () => close(A[2], 24, 4.2)));
shot(s('n6') - 0.1, 'gone', (_t, u) => ({ eye: V(1.1, CROSS.y + 1.3, 10.2), look: V(1.2, CROSS.y + lerp(1.4, 4.6, ease(u)), 0.4), fov: 46 }));
shot(s('c7') - 0.1, 'forgiven clothed sealed', () => close(C, 14, 4.8));
shot(s('n7') - 0.1, 'three leaps', () => ({ eye: V(4.8, CROSS.y + 0.9, 9.0), look: V(2.4, CROSS.y + 1.5, 1.4), fov: 44 }));
shot(s('c8') - 0.1, 'singing', () => ({ eye: V(C.p.x + 5.2, C.p.y + 1.2, C.p.z + 3.0), look: V(C.p.x, C.p.y + 1.15, C.p.z), fov: 36 }));
shot(s('n8') - 0.1, 'down the hill', (_t, u) => lerpCam(
  { eye: V(C.p.x - 5, C.p.y + 3.4, C.p.z + 5.5), look: V(C.p.x + 3, C.p.y + 0.6, 0), fov: 40 },
  { eye: V(C.p.x - 8, C.p.y + 5.2, C.p.z + 7), look: V(C.p.x + 5, C.p.y + 0.2, 0), fov: 42 },
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
    ctx.shadowColor = 'rgba(255,252,240,0.95)';
    ctx.shadowBlur = 40;
    ctx.fillStyle = '#6b4a35';
    ctx.font = '700 132px Fraunces, Georgia, serif';
    ctx.fillText("Pilgrim's Progress", W / 2, H / 2 - 10);
    ctx.font = 'italic 600 56px Fraunces, Georgia, serif';
    ctx.fillStyle = '#8a3450';
    ctx.fillText('Episode 7 · The Cross', W / 2, H / 2 + 120);
    ctx.restore();
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
    ctx.fillText("The King's Highway", W / 2, H / 2 + 80);
    ctx.restore();
  }
  const fadeIn = 1 - clamp01(t / 1.4);
  if (fadeIn > 0) {
    ctx.fillStyle = `rgba(255,250,240,${fadeIn})`;
    ctx.fillRect(0, 0, W, H);
  }
}

// ------------------------------------------------------------------ go
runFilm(studio, {
  update,
  actors,
  pastel: true,
  speakerActor: (sp) => actors.find((a) => a.name === sp) ?? null,
  energy: { Christian: 1.2, 'First Shining One': 0.8, 'Second Shining One': 0.8, 'Third Shining One': 0.8 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    'First Shining One': { color: '#fffaf0', chip: '#a97f2c' },
    'Second Shining One': { color: '#fffaf0', chip: '#a97f2c' },
    'Third Shining One': { color: '#fffaf0', chip: '#a97f2c' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'gate' },
    { t: DROP + ROLL, kind: 'blip' },
    { t: e('n3') - 0.3, kind: 'style', style: 'cross' },
    { t: DRESS, kind: 'blip' },
    { t: SEAL, kind: 'blip' },
  ],
});
