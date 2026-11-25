import * as THREE from 'three';
import { BearParts, block } from '../bear';
import { SloughScene } from '../slough';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, around, clear, mid, lerpCam,
  V, ease, clamp01, lerp, W, H, addClouds, moodTrack,
} from './engine';

// Episode 2 — The Slough of Despond

const timeline: Timeline = await (await fetch('/film/out/ep2/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ sets: the game's own chapter scenes
const noop = (): void => {};
const slough = new SloughScene({ playScript: noop, setObjective: noop, onComplete: noop, onExit: noop, splashSound: noop });
const sl = slough.enter(true, false);
const S = slough.scene;
const slx = slough as unknown as {
  help: BearParts;
  lightBeam: THREE.Group | null;
  wisps: THREE.Mesh[];
  bubbles: Array<{ mesh: THREE.Mesh; phase: number }>;
  splashes: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }>;
  spawnSplash: (x: number, z: number) => void;
};
slx.help.root.visible = true;
if (slx.lightBeam) slx.lightBeam.visible = false;

const studio = makeStudio(S, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

// ------------------------------------------------------------------ cast
const E_ = Math.PI / 2;
const W_ = -Math.PI / 2;
const C = new Actor('Christian', sl.christian, 'calm', -30, 0.4, E_).withBrows(0x3b2416);
const PL = new Actor('Pliable', sl.pliable!, 'excited', -29.6, 2.3, E_).withBrows(0x7a5a3e);
const HP = new Actor('Help', slx.help, 'wise', 26, 0.8, W_).withBrows(0x4a4a3a);
const actors = [C, PL, HP];

// muddy splotches that appear once they've been in the bog
function mudSplotches(parts: BearParts, spots: Array<[number, number, number, number, 'body' | 'head']>): THREE.Group[] {
  const groups = [new THREE.Group(), new THREE.Group()];
  groups.forEach((g) => { g.name = '__mud'; });
  for (const [x, y, z, sz, where] of spots) {
    const m = block(sz * 1.7, sz * 1.2, sz * 0.5, 0x6a543c, x, y, z);
    m.castShadow = false;
    groups[where === 'body' ? 0 : 1].add(m);
  }
  parts.body.add(groups[0]);
  parts.head.add(groups[1]);
  groups.forEach((g) => { g.visible = false; });
  return groups;
}
const plMud = mudSplotches(PL.parts, [
  [0.22, 0.12, 0.4, 0.22, 'body'], [-0.28, 0.32, 0.4, 0.2, 'body'], [0.08, 0.6, 0.4, 0.16, 'body'],
  [0.0, 0.08, 0.4, 0.2, 'body'], [-0.3, 0.12, -0.37, 0.24, 'body'],
  [-0.36, 0.2, 0.42, 0.12, 'head'], [0.3, 0.16, 0.42, 0.13, 'head'], [0.0, 0.86, -0.1, 0.2, 'head'],
]);
const C_SPOTS: Array<[number, number, number, number, 'body' | 'head']> = [
  [0.3, 0.1, 0.44, 0.24, 'body'], [-0.26, 0.28, 0.44, 0.22, 'body'], [0.02, 0.05, 0.44, 0.2, 'body'],
  [0.4, 0.45, 0.44, 0.14, 'body'], [-0.3, 0.12, 0.44, 0.13, 'head'],
];
const cMud = mudSplotches(C.parts, C_SPOTS);

// ------------------------------------------------------------------ blocking: the slough
const inMudC: [number, number] = [-5.4, -1.7];
const inMudP: [number, number] = [-4.1, 1.7];
// strolling and chatting
C.walk(s('establish') - 1.2, 1.5, [[-25, -0.3]]);
PL.walk(s('establish') - 1.2, 1.5, [[-24.4, 2.4]]);
C.face(s('p1') - 0.3, PL);
PL.face(s('p1') - 0.3, C);
// "race you to the far side!" — they dash into the reeds
PL.walk(s('n2') - 0.6, 4.6, [[-14, -0.6], inMudP], 1.6);
C.walk(s('n2') + 0.2, 4.2, [[-14, 0.3], inMudC], 1.6);
C.face(s('f1'), PL);
PL.face(s('f1'), C);
// Pliable claws his way out on the side nearest home
const plBank: [number, number] = [-11.2, 1.5];
PL.walk(s('climb') - 0.2, 2.2, [[-8.8, 1.8], plBank], 1.3);
PL.face(s('p3') - 0.3, C);
C.face(s('climb') + 0.4, PL);
// …and hops off home
PL.walk(s('flee') + 0.1, 5.5, [[-20, 0.6], [-40, 0.4]], 1.4);
PL.show(s('c6') + 2, false);
C.face(s('c6') + 2.4, E_);
// wading on alone (cut), then stuck by the far bank
C.walk(s('n3') + 0.2, 1.1, [[2.5, -1.1]], 0.8);
const stuck: [number, number] = [13.6, -0.4];
C.place(s('c7') - 0.05, stuck[0], stuck[1], E_);
// Help strides down to the bank
HP.walk(s('n4') + 0.3, 2.6, [[18.2, 0.9]]);
HP.face(s('h1'), C);
C.face(s('h1') - 0.2, HP);
// pulled out onto the bank
const saved: [number, number] = [16.6, -0.9];
C.walk(s('pull') + 0.05, 2.4, [saved], 0.7);
C.face(s('c11'), HP);
HP.face(s('c11'), C);

// how deep each of them is in the mire
function sinkC(t: number): number {
  if (t < s('splash')) return 0;
  if (t < s('n3')) return lerp(0, 0.5, ease(clamp01((t - s('splash')) / 0.5)));
  if (t < s('c7')) return lerp(0.5, 0.7, clamp01((t - s('n3')) / 6));
  if (t < s('pull')) return lerp(0.82, 0.95, clamp01((t - s('c7')) / 20));
  return lerp(0.95, 0, ease(clamp01((t - s('pull')) / 0.8)));
}
function sinkP(t: number): number {
  if (t < s('splash') + 0.1) return 0;
  const climb = s('climb') - 0.2;
  if (t < climb) return lerp(0, 0.62, ease(clamp01((t - s('splash') - 0.1) / 0.5)));
  // rises as he scrambles toward the bank
  const x = PL.p.x;
  return 0.62 * clamp01((x + 9) / 4.9);
}

// on toward the light, Help waving him off
C.walk(s('n5') + 0.8, 2.0, [[24, -0.4], [37.5, 0]]);
HP.face(s('n5') + 1.2, V(36, 0, 0));

// ------------------------------------------------------------------ special moments
C.pose = (t) => {
  const P = C.parts;
  const d = sinkC(t);
  P.root.position.y -= d;
  // flailing in the mud
  const flail = (t > s('splash') && t < s('climb') + 0.5) || (t > s('c7') && t < s('h4'));
  if (flail) {
    const k = t > s('c7') ? 0.55 : 1;
    P.armL.rotation.x = -1.6 + Math.sin(t * 9) * 0.6 * k;
    P.armR.rotation.x = -1.6 - Math.sin(t * 9 + 1) * 0.6 * k;
    P.armL.rotation.z = -0.5;
    P.armR.rotation.z = 0.5;
    P.body.rotation.z += Math.sin(t * 4.5) * 0.08 * k;
  }
  // despair: head hangs
  const low = clamp01((t - s('c8')) / 1) * (1 - clamp01((t - s('h1')) / 0.6));
  P.head.rotation.x += low * 0.35;
  P.body.rotation.x += low * 0.12;
  // reaching up for Help's paw
  if (t > s('h3') + 1.2 && t < s('pull') + 0.6) {
    P.armR.rotation.x = -2.6;
    P.armR.rotation.z = 0.2;
  }
  // relief: a little hop
  const joy = clamp01((t - s('c11')) / 0.3) * (1 - clamp01((t - s('c11') - 1.2) / 0.4));
  P.root.position.y += Math.abs(Math.sin((t - s('c11')) * 9)) * 0.14 * joy;
  cMud.forEach((g) => { g.visible = t > s('pull'); });
};
PL.pose = (t) => {
  const P = PL.parts;
  P.root.position.y -= sinkP(t);
  // the race: bouncing hops
  if (t > s('p2') && t < s('splash')) P.root.position.y += Math.abs(Math.sin(t * 8)) * 0.3;
  if (t > s('splash') && t < s('climb')) {
    P.armL.rotation.x = -2.2 + Math.sin(t * 11) * 0.7;
    P.armR.rotation.x = -2.2 - Math.sin(t * 11) * 0.7;
    P.armL.rotation.z = -0.6;
    P.armR.rotation.z = 0.6;
  }
  // shaking off the mud like a wet dog
  if (t > s('p3') - 0.2 && t < s('p3') + 1.6) P.body.rotation.y = Math.sin(t * 38) * 0.18;
  else P.body.rotation.y = 0;
  // the flight home: hop hop
  if (t > s('flee')) P.root.position.y += Math.abs(Math.sin(t * 9)) * 0.35;
  plMud.forEach((g) => { g.visible = t > s('splash') + 0.4; });
};
HP.pose = (t) => {
  // stretching out a paw to the pilgrim, then the big heave
  const reach = ease(clamp01((t - s('h3') - 1.0) / 0.6)) * (1 - ease(clamp01((t - s('pull') - 0.6) / 0.6)));
  const P = HP.parts;
  P.armL.rotation.x = lerp(P.armL.rotation.x, -1.5, reach);
  const heave = clamp01(1 - Math.abs(t - s('h4') - 0.3) / 0.5);
  P.body.rotation.x += -0.25 * heave;
  // a big wave goodbye
  const wave = clamp01((t - s('n5') - 1.4) / 0.4);
  if (wave > 0) {
    P.armR.rotation.x = -2.9;
    P.armR.rotation.z = 0.25 + Math.sin(t * 7) * 0.35;
  }
};
// ------------------------------------------------------------------ skies
const sloughClouds = addClouds(S, { count: 24, gloom: 0.65, height: [20, 36], radius: [60, 120], drift: 0.8, center: [5, 0], seed: 21 });
const sloughMood = moodTrack(S, [
  { t: 0, sky: 0xc3d1da },
  { t: s('splash'), sky: 0xadbac4, hemi: 0.92 },
  { t: s('flee'), sky: 0x9aa8b3, hemi: 0.85, sun: 0.75, fog: -6 },
  { t: s('c7'), sky: 0x86939e, hemi: 0.75, sun: 0.5, fog: -12 },
  { t: s('n4'), sky: 0x9aa9b4, hemi: 0.85, sun: 0.7, fog: -8 },
  { t: s('pull'), sky: 0xd6e3e6, hemi: 1.08, sun: 1.25, fog: 4 },
]);
function update(t: number, dt: number): void {
  sloughMood(t);
  sloughClouds(t);
  // the shining way out appears once he's on solid ground
  if (slx.lightBeam) {
    slx.lightBeam.visible = t > s('pull') + 0.4;
    const g = ease(clamp01((t - s('pull') - 0.4) / 1.4));
    const p = 1 + Math.sin(t * 2.4) * 0.12;
    slx.lightBeam.scale.set(p * g, Math.max(0.001, g), p * g);
  }
  // marsh life: drifting mist, popping mud bubbles, splashes
  for (let i = 0; i < slx.wisps.length; i++) {
    const m = slx.wisps[i];
    m.position.x += dt * 0.3;
    if (m.position.x > 30) m.position.x = -25;
    (m.material as THREE.MeshStandardMaterial).opacity = 0.25 + 0.12 * Math.sin(t * 0.6 + i);
  }
  for (const b of slx.bubbles) {
    const c = (t * 0.5 + b.phase) % 2;
    b.mesh.visible = c < 1;
    b.mesh.position.y = 0.2 + c * 0.25;
    b.mesh.scale.setScalar(0.5 + c * 0.9);
  }
  const splashAt = (t0: number, x: number, z: number, n: number): void => {
    if (t >= t0 && t - dt < t0) for (let k = 0; k < n; k++) slx.spawnSplash(x, z);
  };
  splashAt(s('splash') + 0.05, inMudP[0], inMudP[1], 6);
  splashAt(s('splash') + 0.35, inMudC[0], inMudC[1], 7);
  splashAt(s('pull') + 0.1, stuck[0] + 1, stuck[1], 6);
  // churned mud while they thrash
  if ((t > s('splash') && t < s('climb')) && Math.floor(t * 5) !== Math.floor((t - dt) * 5)) {
    slx.spawnSplash(C.p.x, C.p.z);
    slx.spawnSplash(PL.p.x, PL.p.z);
  }
  if ((t > s('c7') && t < s('h3')) && Math.floor(t * 3) !== Math.floor((t - dt) * 3)) slx.spawnSplash(C.p.x, C.p.z);
  for (const d of slx.splashes) {
    if (d.life >= 1) continue;
    d.life = Math.min(1, d.life + dt * 2.4);
    d.mesh.position.x += d.vx * dt;
    d.mesh.position.z += d.vz * dt;
    d.mesh.position.y += dt * (0.8 - d.life);
    d.m.opacity = 0.75 * (1 - d.life);
    if (d.life >= 1) d.mesh.visible = false;
  }
}

// ------------------------------------------------------------------ shots
const shots: Shot[] = [];
const shot = (at: number, name: string, cam: Shot['cam']) => shots.push({ at, cam, name });
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
const fov = (c: Cam, f: number): Cam => ({ ...c, fov: f });

// 1. title over the misty marsh
shot(0, 'title marsh', move(
  () => ({ eye: V(-40, 22, 34), look: V(2, 0, 0), fov: 40 }),
  () => ({ eye: V(-34, 17, 30), look: V(0, 0, 0), fov: 40 }),
));
// 2. strolling out of the city lands
shot(s('establish'), 'stroll wide', (t) => {
  const c = mid(C, PL, 1.0);
  return { eye: V(c.x + 5, 1.7, c.z + 8), look: V(c.x, 1.1, c.z), fov: 36 };
});
shot(s('p1') - 0.1, 'pliable asks', move(() => fov(clear(PL, 35, 4.2, 1.2, 1.35), 32), () => fov(clear(PL, 25, 3.6, 1.2, 1.4), 30)));
shot(s('ch1') - 0.1, 'christian smiles', move(() => fov(clear(C, -40, 4.4, 1.6, 1.45), 32), () => fov(clear(C, -30, 3.9, 1.6, 1.45), 30)));
shot(s('p2') - 0.1, 'race!', () => ({ ...clear(PL, -50, 4.6, 1.0, 1.1), fov: 36, shake: 0.03 }));
// 3. the dash into the reeds — ground-level, then the plunge
shot(s('n2') - 0.2, 'dash track', () => {
  const p = PL.p;
  return { eye: V(p.x + 5.5, 0.6, p.z + 4.5), look: V(p.x - 1, 0.8, p.z), fov: 38, shake: 0.05 };
});
shot(s('splash') - 0.4, 'splash wide', () => ({ eye: V(-2.2, 2.6, 7.6), look: V(-4.8, 0.3, 0), fov: 40, shake: 0.08 }));
shot(s('f1') - 0.1, 'christian sinking', move(() => fov(clear(C, 30, 3.8, 0.9, 0.9), 32), () => fov(clear(C, 20, 3.2, 0.8, 0.9), 30)));
shot(s('f2') - 0.1, 'pliable glub', () => ({ ...fov(clear(PL, -25, 3.2, 0.6, 0.85), 30), shake: 0.04 }));
shot(s('f3') - 0.1, 'pliable cross', (t, u) => fov(clear(PL, lerp(-40, -20, u), 3.8, 0.9, 0.85), 30));
shot(s('f4') - 0.1, 'courage', () => fov(clear(C, -35, 3.6, 1.0, 0.95), 30));
shot(s('f5') - 0.1, 'out of my way', () => ({ eye: V(-4.8, 1.5, 7.2), look: mid(C, PL, 0.5), fov: 36, shake: 0.05 }));
// 4. Pliable deserts
shot(s('climb') + 0.3, 'scramble', () => {
  const p = PL.p;
  return { eye: V(p.x - 3.8, 1.3, p.z - 5.6), look: V(p.x + 0.5, 0.6, p.z), fov: 36 };
});
shot(s('p3') - 0.1, 'shake off', move(() => fov(clear(PL, 20, 3.8, 1.1, 1.3), 32), () => fov(clear(PL, 10, 3.2, 1.1, 1.35), 30)));
shot(s('p4') - 0.1, 'over the bog', () => ({ eye: V(-2.4, 1.2, 3.4), look: V(plBank[0], 1.2, plBank[1]), fov: 34 }));
shot(s('c5') - 0.1, 'christian pleads', move(() => fov(clear(C, -25, 3.6, 0.9, 0.95), 30), () => fov(clear(C, -15, 3.0, 0.85, 1.0), 28)));
shot(s('p5') - 0.1, 'farewell', () => fov(clear(PL, -30, 4.0, 1.2, 1.3), 32));
shot(s('flee') - 0.1, 'hop hop home', (t, u) => ({ eye: V(-6.6, 1.5, 4.6), look: V(lerp(-12, -24, ease(u)), 0.8, 0.8), fov: 36 }));
shot(s('c6') - 0.1, 'alone', move(
  () => ({ eye: V(-5.4, 1.4, 3.2), look: V(-5.4, 0.7, -1.7), fov: 34 }),
  () => ({ eye: V(-5.4, 6.5, 6.8), look: V(-5.4, 0.3, -1.7), fov: 40 }),
));
// 5. struggling on alone — high and lonely, then deep in it
shot(s('n3') - 0.1, 'lonely crane', (t, u) => {
  const p = C.p;
  return { eye: V(p.x - 6, lerp(9, 12, u), p.z + 10), look: V(p.x + 3, 0, p.z), fov: 38 };
});
shot(s('c7') - 0.05, 'so close', move(
  () => ({ eye: V(stuck[0] + 0.4, 1.1, stuck[1] + 5.6), look: V(stuck[0] + 1.6, 0.5, stuck[1]), fov: 36 }),
  () => ({ eye: V(stuck[0] + 0.8, 0.9, stuck[1] + 4.4), look: V(stuck[0] + 1.4, 0.5, stuck[1]), fov: 32 }),
));
shot(s('c8') - 0.1, 'despair', move(() => fov(clear(C, 15, 3.2, 1.1, 0.7), 30), () => fov(clear(C, 10, 2.6, 1.3, 0.65), 28)));
shot(s('despair'), 'despair high', (t, u) => ({ eye: V(stuck[0] - 1, lerp(5, 9, ease(u)), stuck[1] + 4), look: V(stuck[0], 0.2, stuck[1]), fov: 40 }));
// 6. Help
shot(s('n4') - 0.1, 'help arrives', (t, u) => lerpCam(
  { eye: V(14.0, 0.5, 4.2), look: V(22, 1.7, 0.6), fov: 36 },
  { eye: V(13.6, 0.7, 4.6), look: V(19, 1.8, 0.8), fov: 36 },
  ease(u),
));
shot(s('h1') - 0.1, 'help low', () => fov(clear(HP, -40, 4.6, 0.8, 1.9), 32));
shot(s('c9') - 0.1, 'christian looks up', () => fov(clear(C, 40, 3.2, 0.9, 0.85), 30));
shot(s('h2') - 0.1, 'two shot bank', (t, u) => {
  const c = mid(C, HP, 1.0);
  return { eye: V(c.x - 0.5 + u, 1.6, c.z - 6.4), look: c, fov: 36 };
});
shot(s('c10') - 0.1, 'christian ashamed', () => fov(clear(C, 30, 3.0, 0.9, 0.85), 30));
shot(s('h3') - 0.1, 'give me your paw', () => fov(clear(HP, -55, 4.2, 1.2, 1.7), 32));
shot(s('h4') - 0.1, 'heave', () => {
  const c = mid(C, HP, 1.0);
  return { eye: V(c.x, 1.3, c.z - 5.4), look: c, fov: 36, shake: 0.06 };
});
shot(s('c11') - 0.1, 'saved', move(() => fov(clear(C, 30, 3.8, 1.5, 1.4), 32), () => fov(clear(C, 20, 3.2, 1.5, 1.45), 30)));
shot(s('h5') - 0.1, 'help explains', (t, u) => lerpCam(
  { ...clear(HP, -45, 4.6, 1.5, 1.7), fov: 34 },
  { eye: V(10, 4.5, 8), look: V(4, 0, 0), fov: 40 },
  ease(clamp01((u - 0.45) / 0.55)),
));
shot(s('c12') - 0.1, 'thinks of pliable', () => fov(clear(C, 35, 3.6, 1.5, 1.45), 30));
shot(s('h6') - 0.1, 'keep going', () => {
  const c = mid(C, HP, 1.2);
  return { eye: V(c.x + 0.4, 1.6, c.z - 6.2), look: V(c.x, 1.3, c.z), fov: 36 };
});
shot(s('n5') - 0.1, 'help waves', (t, u) => {
  const c = mid(C, HP, 1.2);
  return { eye: V(c.x - 4 + u * 2, 1.6, c.z - 7), look: V(c.x + 1 + u * 3, 1.4, c.z), fov: 36 };
});
shot(s('n6') - 0.1, 'into the light', (t, u) => lerpCam(
  { eye: V(C.p.x - 5, 2.4, C.p.z - 2.8), look: V(40, 3, 0), fov: 36 },
  { eye: V(C.p.x - 9, 7, C.p.z - 5), look: V(42, 4, 0), fov: 40 },
  ease(u),
));

// ------------------------------------------------------------------ titles & cards
function overlay(ctx: CanvasRenderingContext2D, t: number): void {
  const tA = clamp01((t - 0.6) / 0.8) * (1 - clamp01((t - 4.6) / 0.8));
  if (tA > 0) {
    ctx.save();
    ctx.globalAlpha = tA;
    ctx.fillStyle = 'rgba(240,244,240,0.3)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(40,50,40,0.5)';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#fffaf0';
    ctx.font = '700 132px Fraunces, Georgia, serif';
    ctx.fillText("Pilgrim's Progress", W / 2, H / 2 - 10);
    ctx.font = 'italic 600 56px Fraunces, Georgia, serif';
    ctx.fillStyle = '#eef2d8';
    ctx.fillText('Episode 2 · The Slough of Despond', W / 2, H / 2 + 120);
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
    ctx.font = '700 110px Fraunces, Georgia, serif';
    ctx.fillText('Mr. Worldly Wiseman', W / 2, H / 2 + 80);
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
  speakerActor: (sp) => {
    return ({ Christian: C, Pliable: PL, Help: HP } as Record<string, Actor>)[sp] ?? null;
  },
  energy: { Christian: 1.15, Pliable: 1.4, Help: 1.0 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    Pliable: { color: '#fff3e3', chip: '#e09a4f' },
    Help: { color: '#eef5ea', chip: '#7d9a72' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'map' },
    { t: s('n2') + 1.0, kind: 'style', style: 'slough' },
    { t: s('splash') + 0.1, kind: 'splash' },
    { t: s('splash') + 0.4, kind: 'splash' },
    { t: s('pull') + 0.1, kind: 'splash' },
    { t: s('c11') - 0.5, kind: 'style', style: 'gate' },
  ],
});
