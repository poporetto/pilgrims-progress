import * as THREE from 'three';
import { BearParts, block } from '../bear';
import { MoralityScene } from '../morality';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, clear, mid, lerpCam,
  V, ease, clamp01, lerp, W, H, addClouds, moodTrack,
} from './engine';

// Episode 3 — The Mountain of Fire (Worldly Wiseman, Mount Sinai, Evangelist)

const timeline: Timeline = await (await fetch('/film/out/ep3/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ set: the game's Morality chapter
const noop = (): void => {};
const morality = new MoralityScene({
  playScript: noop, setObjective: noop, onComplete: noop, onExit: noop, rumbleSound: noop, showChoice: noop,
} as unknown as ConstructorParameters<typeof MoralityScene>[0]);
const mo = morality.enter(false);
const M = morality.scene;
const mx = morality as unknown as {
  wiseman: BearParts;
  evangelist: BearParts;
  mountain: THREE.Group | null;
  fireSeams: THREE.Mesh[];
  fireLight: THREE.PointLight | null;
  sparks: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }>;
  spawnSpark: () => void;
  lawTable: THREE.Group;
};
mx.evangelist.root.visible = true;

const studio = makeStudio(M, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

// ------------------------------------------------------------------ cast
const E_ = Math.PI / 2;
const W_ = -Math.PI / 2;
const C = new Actor('Christian', mo.christian, 'calm', -24, 0.2, E_).withBrows(0x3b2416);
const WW = new Actor('Worldly Wiseman', mx.wiseman, 'gentle', -7, 2.85, W_).withBrows(0x2f2a28);
const EV = new Actor('Evangelist', mx.evangelist, 'wise', -30, -2.5, E_).withBrows(0x4e4438);
const actors = [C, WW, EV];

// still muddy from the Slough
for (const [x, y, z, sz] of [[0.3, 0.1, 0.44, 0.24], [-0.26, 0.28, 0.44, 0.22], [0.02, 0.05, 0.44, 0.2]] as const) {
  const m = block(sz * 1.7, sz * 1.2, sz * 0.5, 0x6a543c, x, y, z);
  m.castShadow = false;
  C.parts.body.add(m);
}

// ------------------------------------------------------------------ blocking
const meetC: [number, number] = [-9.7, 0.5];
C.walkUntil(s('establish') - 1.2, s('w1') - 0.4, [meetC]);
C.face(s('w1') - 0.3, WW);
WW.face(s('establish'), C);
// off down the pleasant path
const foot: [number, number] = [7.0, 0.2];
C.walk(s('n2') + 0.4, 2.2, [[-3, -0.1], foot]);
WW.face(s('n2') + 1.0, V(foot[0], 0, foot[1]));
WW.show(s('n3') + 0.2, false);
// under the mountain
const SINAI = V(14, 4, -2);
C.face(s('n3') + 0.2, SINAI);
// Evangelist comes hurrying up the road
const evStop: [number, number] = [4.2, -0.9];
EV.place(s('hurry') - 4.2, -6, -1.2, E_);
EV.walkUntil(s('hurry') - 4.1, e('hurry') + 0.1, [evStop], 1.3);
EV.face(e('hurry') + 0.2, C);
C.face(s('e1') + 0.4, EV);
// back the way he came
C.walk(s('n4') + 0.5, 3.4, [[-4, 0.4], [-26, 0.2]], 1.4);
EV.face(s('n4') + 0.9, V(-20, 0, 0));

// how angry the mountain is (0 calm … 1 raging)
function menace(t: number): number {
  const up = ease(clamp01((t - s('n3')) / 2.5));
  const down = ease(clamp01((t - s('e7')) / 4));
  return 0.25 + 0.75 * up * (1 - down * 0.85);
}
// thunder-claps: at the reveal, then every couple of seconds while it rages
const claps: number[] = [s('rumble') + 0.1, s('s4') + 0.1];
for (let t = s('rumble') + 2.2; t < s('e5'); t += 2.4) claps.push(t);
claps.sort((a, b) => a - b);
function quake(t: number): number {
  let q = 0;
  for (const c of claps) if (t >= c) q = Math.max(q, 1 - (t - c) * 0.7);
  return Math.max(0, q) * (t < s('e7') ? 1 : 0.3);
}

// ------------------------------------------------------------------ special moments
C.pose = (t) => {
  const P = C.parts;
  // the stone tablets of the Law, heavy on his back
  mx.lawTable.visible = t > s('s1') + 0.6 && t < s('e7') + 1;
  // bowed and trembling under the mountain
  const cower = clamp01((t - s('rumble')) / 0.6) * (1 - clamp01((t - s('e7')) / 1));
  if (cower > 0) {
    P.root.rotation.z = (-0.1 - Math.sin(t * 4) * 0.025) * cower;
    P.body.rotation.x += 0.15 * cower;
    P.body.position.x += Math.sin(t * 37) * 0.012 * cower;
  }
  // startled jump at the first thunder-clap
  const jolt = clamp01(1 - Math.abs(t - s('rumble') - 0.25) / 0.3);
  P.root.position.y += jolt * 0.3;
  // shields his head on "fire is flashing!"
  if (t > s('s4') && t < e('s4') + 0.4) {
    P.armL.rotation.x = -2.6;
    P.armR.rotation.x = -2.6;
    P.armL.rotation.z = -0.4;
    P.armR.rotation.z = 0.4;
  }
  // hopeful bounce at "There is!"
  const hope = clamp01((t - s('e8')) / 0.3) * (1 - clamp01((t - s('e8') - 1.2) / 0.4));
  P.root.position.y += Math.abs(Math.sin((t - s('e8')) * 9)) * 0.12 * hope;
};
WW.pose = (t) => {
  const P = WW.parts;
  const tip = clamp01(1 - Math.abs(t - s('w1') - 0.5) / 0.6);
  P.armR.rotation.x = lerp(P.armR.rotation.x, -2.7, tip);
  const point = ease(clamp01((t - s('w8') + 0.1) / 0.5)) * (1 - ease(clamp01((t - s('n2') - 1.2) / 0.5)));
  if (point > 0) {
    P.armL.rotation.z = lerp(P.armL.rotation.z, -1.5, point);
    P.armL.rotation.x = lerp(P.armL.rotation.x, -0.2, point);
  }
  // a smug little wave goodbye
  if (t > s('n2') + 1.2) {
    P.armR.rotation.x = -2.8;
    P.armR.rotation.z = 0.3 + Math.sin(t * 6) * 0.3;
  }
};
EV.pose = (t) => {
  // points back west: "the way you left is exactly where you left it"
  const P = EV.parts;
  const point = ease(clamp01((t - s('e7') - 1.0) / 0.5)) * (1 - ease(clamp01((t - e('e7')) / 0.6)));
  if (point > 0) {
    P.armL.rotation.z = lerp(P.armL.rotation.z, -1.45, point);
    P.armL.rotation.x = lerp(P.armL.rotation.x, -0.1, point);
  }
};

// ------------------------------------------------------------------ sky & mountain
const clouds = addClouds(M, { count: 18, gloom: 0.2, height: [26, 44], radius: [70, 130], drift: 1, seed: 33 });
const mood = moodTrack(M, [
  { t: 0, sky: 0xdbe7ed },
  { t: s('w5'), sky: 0xd3dde3 },
  { t: s('n3'), sky: 0xadb1ba, hemi: 0.9, sun: 0.85 },
  { t: s('rumble'), sky: 0x8a8b96, hemi: 0.75, sun: 0.55, fog: -10 },
  { t: s('e7'), sky: 0xbfcdd5, hemi: 0.95, sun: 0.95 },
  { t: s('n4'), sky: 0xdbe7ed, hemi: 1.02, sun: 1.1, fog: 2 },
]);
let emberT = 0;
function update(t: number, dt: number): void {
  mood(t);
  clouds(t);
  const men = menace(t);
  const q = quake(t);
  if (mx.mountain) {
    mx.mountain.position.x = 14 + (Math.random() - 0.5) * q * 0.12;
    mx.mountain.position.z = -2 + (Math.random() - 0.5) * q * 0.12;
    mx.mountain.scale.setScalar(1.0 + men * 0.04);
  }
  for (const seam of mx.fireSeams) {
    const ph = seam.userData.firePhase as number;
    const glow = 0.62 + Math.sin(t * 2.05 + ph) * 0.13 + Math.sin(t * 3.7 + ph * 1.7) * 0.07;
    (seam.material as THREE.MeshBasicMaterial).opacity = THREE.MathUtils.clamp(glow * (0.58 + men * 0.42), 0.28, 0.9);
    const st = 0.94 + Math.sin(t * 2.4 + ph) * 0.055;
    seam.scale.set(1 + (1 - st) * 0.35, st, 1);
  }
  if (mx.fireLight) mx.fireLight.intensity = (1.02 + Math.sin(t * 1.75) * 0.16 + Math.sin(t * 3.15 + 1.2) * 0.08) * (0.52 + men * 0.9);
  emberT -= dt;
  if (emberT <= 0) {
    emberT = men > 0.8 ? 0.12 : 0.4;
    mx.spawnSpark();
  }
  for (const c of claps) if (t >= c && t - dt < c) for (let k = 0; k < 6; k++) mx.spawnSpark();
  for (const d of mx.sparks) {
    if (d.life >= 1) continue;
    d.life = Math.min(1, d.life + dt * 0.9);
    d.mesh.position.x += d.vx * dt;
    d.mesh.position.z += d.vz * dt;
    d.mesh.position.y += d.vy * dt;
    d.vx *= Math.max(0, 1 - dt * 0.8);
    d.m.opacity = 0.85 * Math.sin(d.life * Math.PI);
    d.mesh.rotation.y += dt * 2.4;
    d.mesh.scale.multiplyScalar(1 - dt * 0.32);
    if (d.life >= 1) d.mesh.visible = false;
  }
}

// ------------------------------------------------------------------ shots
const shots: Shot[] = [];
const shot = (at: number, name: string, cam: Shot['cam']) => shots.push({ at, cam, name });
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
const fov = (c: Cam, f: number): Cam => ({ ...c, fov: f });
const quaky = (c: Cam, t: number): Cam => ({ ...c, shake: (c.shake ?? 0) + quake(t) * 0.12 });

// 1. title: the pleasant road, the mountain brooding far off
shot(0, 'title road', move(
  () => ({ eye: V(-34, 9, 16), look: V(4, 3, -2), fov: 40 }),
  () => ({ eye: V(-30, 7, 13), look: V(6, 4, -2), fov: 40 }),
));
shot(s('establish'), 'walking in', () => {
  const p = C.p;
  return { eye: V(p.x - 2, 1.5, p.z + 7), look: V(p.x + 2.5, 1.1, p.z), fov: 36 };
});
shot(s('n1') + 3.2, 'the gentleman', (t, u) => lerpCam(
  { eye: V(-11.6, 0.7, 6.6), look: V(-7, 1.8, 2.85), fov: 34 },
  { eye: V(-11.0, 0.8, 5.9), look: V(-7, 1.8, 2.85), fov: 32 },
  ease(u),
));
// 2. the pitch
shot(s('w1') - 0.1, 'ww hello', () => fov(clear(WW, -35, 5.6, 1.0, 1.75), 32));
shot(s('w2') - 0.1, 'christian replies', () => fov(clear(C, 40, 4.0, 1.6, 1.45), 32));
shot(s('w3') - 0.1, 'dear me', move(() => fov(clear(WW, -30, 5.4, 1.4, 1.75), 32), () => fov(clear(WW, -20, 4.8, 1.4, 1.75), 30)));
shot(s('w4') - 0.1, 'drying out', () => fov(clear(C, 30, 3.4, 1.5, 1.45), 30));
shot(s('w5') - 0.1, 'the pitch', (t, u) => fov(clear(WW, lerp(-55, -25, ease(u)), 5.6, 1.4, 1.75), 32));
shot(s('w6') - 0.1, 'two shot', (t, u) => {
  const c = mid(C, WW, 1.1);
  return { eye: V(c.x + 4.2 + u * 0.6, 1.7, c.z - 4.6), look: c, fov: 36 };
});
shot(s('w7') - 0.1, 'tempted', move(() => fov(clear(C, 35, 3.8, 1.5, 1.45), 30), () => fov(clear(C, 25, 3.0, 1.5, 1.5), 27)));
shot(s('w8') - 0.1, 'that way', (t, u) => lerpCam(
  { ...clear(WW, -40, 5.6, 1.2, 1.75), fov: 34 },
  { eye: V(-10, 2.2, -2.5), look: V(14, 6, -2), fov: 36 },
  ease(clamp01((u - 0.4) / 0.6)),
));
// 3. down the pleasant path, and the mountain looms
shot(s('n2') - 0.1, 'off he goes', (t) => {
  const p = C.p;
  return { eye: V(p.x - 4.5, 2.4, p.z - 5.2), look: V(p.x + 2, 1.2, p.z), fov: 36 };
});
shot(s('n3') - 0.2, 'the mountain', (t, u) => quaky(lerpCam(
  { eye: V(C.p.x - 3.5, 0.9, C.p.z + 2.6), look: V(12, 4, -2), fov: 40 },
  { eye: V(C.p.x - 4.5, 0.6, C.p.z + 3.2), look: V(12, 7, -2), fov: 44 },
  ease(u),
), t));
shot(s('rumble') + 0.4, 'tiny pilgrim', (t, u) => quaky({ eye: V(foot[0] - 1, lerp(9, 13, ease(u)), foot[1] + 11), look: V(foot[0] + 3, 1.5, foot[1] - 1), fov: 42 }, t));
// 4. the Law
shot(s('s1') - 0.1, 'stone sign', (t, u) => quaky({ eye: V(foot[0] - 3.2, 0.8, foot[1] + 3.6), look: V(foot[0] + 1.2, 1.9, foot[1] - 0.6), fov: 38 }, t));
shot(s('s2') - 0.1, 'perfectly?', (t) => quaky(fov(clear(C, 25, 3.6, 1.4, 1.35), 30), t));
shot(s('s3') - 0.1, 'i have failed', (t, u) => quaky(fov(clear(C, lerp(-30, -15, u), 3.4, 1.9, 1.2), 30), t));
shot(s('s4') - 0.1, 'fire!', (t, u) => quaky(lerpCam(
  { eye: V(foot[0] - 2.2, 0.5, foot[1] + 2.4), look: V(13, 6, -2), fov: 46 },
  { eye: V(foot[0] - 2.6, 0.45, foot[1] + 2.8), look: V(13, 8, -2), fov: 48 },
  ease(u),
), t));
shot(s('s5') - 0.1, 'what have i done', (t, u) => quaky(fov(clear(C, 15, lerp(3.4, 2.8, ease(u)), 1.6, 1.3), 28), t));
// 5. Evangelist
shot(s('hurry') - 0.3, 'someone coming', (t) => quaky({ eye: V(EV.p.x + 3.5, 0.8, EV.p.z + 3.4), look: V(EV.p.x - 1, 1.8, EV.p.z), fov: 36 }, t));
shot(s('e1') - 0.1, 'what are you doing here', (t) => quaky(fov(clear(EV, -40, 5.0, 0.9, 1.9), 32), t));
shot(s('e2') - 0.1, 'stammering', (t) => quaky(fov(clear(C, 35, 3.6, 1.6, 1.4), 30), t));
shot(s('e3') - 0.1, 'listen carefully', (t, u) => quaky(fov(clear(EV, lerp(-50, -30, u), 5.0, 1.3, 1.85), 32), t));
shot(s('e4') - 0.1, 'two shot', (t, u) => {
  const c = mid(C, EV, 1.2);
  return quaky({ eye: V(c.x - 0.6 + u, 1.6, c.z + 6.2), look: c, fov: 36 }, t);
});
shot(s('e5') - 0.1, 'this mountain', (t, u) => quaky(lerpCam(
  { ...clear(EV, -35, 5.2, 1.0, 1.9), fov: 32 },
  { eye: V(evStop[0] - 4, 0.8, evStop[1] + 3.6), look: V(13, 6, -2), fov: 42 },
  ease(clamp01((u - 0.35) / 0.65)),
), t));
shot(s('e6') - 0.1, 'any hope?', move(() => fov(clear(C, 30, 3.8, 1.3, 1.35), 30), () => fov(clear(C, 22, 3.1, 1.3, 1.4), 27)));
shot(s('e7') - 0.1, 'there is', (t, u) => fov(clear(EV, lerp(-30, -45, u), 5.0, 1.0, 1.9), 32));
shot(s('e8') - 0.1, 'thank you', () => {
  const c = mid(C, EV, 1.2);
  return { eye: V(c.x - 0.4, 1.5, c.z + 6.2), look: c, fov: 36 };
});
// 6. back to the true road
shot(s('n4') - 0.1, 'running back', (t, u) => {
  const p = C.p;
  return { eye: V(p.x - 5.5, 1.1, p.z + 2.4), look: V(p.x, 1.1, p.z), fov: 38, shake: 0.04 };
});
shot(s('n4') + 3.4, 'high and hopeful', (t, u) => ({ eye: V(-6, lerp(6, 12, ease(u)), 12), look: V(-18, 0, 0), fov: 40 }));

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
    ctx.fillStyle = '#ffe2c8';
    ctx.fillText('Episode 3 · The Mountain of Fire', W / 2, H / 2 + 120);
    ctx.restore();
  }
  // lightning flashes with each thunder-clap
  // only the two big claps flash brightly; the rumbles under dialogue just flicker
  claps.forEach((c, i) => {
    const big = i < 2;
    const f = clamp01(1 - Math.abs(t - c - 0.08) / 0.18) * (big ? 0.4 : 0.1);
    if (f > 0) {
      ctx.fillStyle = `rgba(255,236,210,${f})`;
      ctx.fillRect(0, 0, W, H);
    }
  });
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
    ctx.fillText('The Wicket Gate', W / 2, H / 2 + 80);
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
  speakerActor: (sp) => ({ Christian: C, 'Worldly Wiseman': WW, Evangelist: EV } as Record<string, Actor>)[sp] ?? null,
  energy: { Christian: 1.15, 'Worldly Wiseman': 1.2, Evangelist: 1.1 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    'Worldly Wiseman': { color: '#f3ecf3', chip: '#8a5a7a' },
    Evangelist: { color: '#fffbea', chip: '#c9a23a' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'map' },
    { t: s('w5') - 0.5, kind: 'style', style: 'sinai' },
    ...claps.map((c) => ({ t: c, kind: 'rumble' as const })),
    { t: s('e7') - 0.3, kind: 'style', style: 'gate' },
  ],
});
