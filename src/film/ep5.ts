import * as THREE from 'three';
import { BearParts, animateBear, block, liveBears } from '../bear';
import { WicketGateScene } from '../wicketgate';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, mid, lerpCam, setCameraAvoid, clear,
  V, ease, clamp01, lerp, W, H, addClouds,
} from './engine';

// Episode 5 — The Interpreter's House (dust & water, Passion & Patience, fire & oil)

const timeline: Timeline = await (await fetch('/film/out/ep5/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ set: the cottage and the long hall inside it
const noop = (): void => {};
const wicket = new WicketGateScene({
  playScript: noop, setObjective: noop, onComplete: noop, onExit: noop, rumbleSound: noop,
} as unknown as ConstructorParameters<typeof WicketGateScene>[0]);
const wg = wicket.enter(false);
const S = wicket.scene;
type Pool = Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; active: boolean; vy?: number }>;
const wx = wicket as unknown as {
  interpreter: BearParts;
  goodwill: BearParts;
  cottageDoor: THREE.Group | null;
  dust: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; baseX: number; baseZ: number }>;
  sprinkle: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; active: boolean; vy: number }>;
  sweeper: BearParts | null; sweeperArm: THREE.Group | null;
  waterer: BearParts | null; watererArm: THREE.Group | null;
  toyBall: THREE.Mesh | null; passionArm: THREE.Group | null;
  fireMotes: THREE.Mesh[]; fireGlow: THREE.PointLight | null;
  embers: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; baseX: number; baseZ: number }>;
  devilArm: THREE.Group | null; christArm: THREE.Group | null;
  waterDrops: Pool; oilDrops: Pool;
};
wx.goodwill.root.visible = false;

const studio = makeStudio(S, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

const IX = 150;
const ST = [IX + 10, IX + 24, IX + 38];     // the three rooms in this episode
const FIRE = V(ST[2], 0, -1.8);
const INSIDE = s('n2');                      // the cut indoors

// rigs the set built for its own use: map the residents' roots back to their parts
const partsByRoot = new Map<THREE.Object3D, BearParts>();
for (const b of liveBears) partsByRoot.set(b.root, b);
const rootOf = (arm: THREE.Object3D | null): BearParts => partsByRoot.get(arm!.parent!.parent!)!;
const passionParts = rootOf(wx.passionArm);
const devilParts = rootOf(wx.devilArm);
const christParts = rootOf(wx.christArm);
let patienceParts: BearParts | null = null;
for (const b of liveBears) {
  const p = b.root.position;
  if (Math.abs(p.x - (ST[1] + 1.6)) < 0.1 && Math.abs(p.z - 1.8) < 0.1) patienceParts = b;
}

// ------------------------------------------------------------------ cast
const E_ = Math.PI / 2;
const W_ = -Math.PI / 2;
const C = new Actor('Christian', wg.christian, 'calm', 20, 0.2, E_).withBrows(0x3b2416);
const OWL = new Actor('Interpreter', wx.interpreter, 'wise', 40, -3.3, 0).withBrows(0x4a3a28);
const PA = new Actor('Passion', passionParts, 'grumpy', ST[1] - 1.3, 1.6, Math.PI).withBrows(0x3b2416);
const PT = new Actor('Patience', patienceParts!, 'shy', ST[1] + 1.6, 1.8, Math.PI).withBrows(0x3b2416);
const DV = new Actor('Devil', devilParts, 'calm', FIRE.x - 1.8, FIRE.z + 0.3, E_).withBrows(0x1e1b22);
const CH = new Actor('Christ', christParts, 'calm', FIRE.x + 1.8, FIRE.z + 0.3, W_).withBrows(0x8a5a2a);
const actors = [C, OWL, PA, PT, DV, CH];
DV.expr(0, 'angry');
CH.expr(0, 'happy');
for (const [x, y, z, sz] of [[0.3, 0.1, 0.44, 0.2], [-0.26, 0.28, 0.44, 0.16]] as const) {
  const m = block(sz * 1.7, sz * 1.2, sz * 0.5, 0x6a543c, x, y, z);
  m.castShadow = false;
  C.parts.body.add(m);
}

// ------------------------------------------------------------------ blocking
// outside the cottage
C.walkUntil(s('establish') - 1.0, e('n1') - 0.3, [[39.0, -1.2]]);
C.face(e('n1') - 0.2, OWL);
OWL.face(0, C);
// room 1: the dusty room
const r1C: [number, number] = [ST[0] - 2.6, 1.0];
const r1O: [number, number] = [ST[0] - 0.4, 1.1];
C.place(INSIDE, ST[0] - 6.5, 0.2, E_);
OWL.place(INSIDE, ST[0] - 4.8, -0.4, E_);
C.walkUntil(INSIDE + 0.05, e('n2') - 0.2, [r1C]);
OWL.walkUntil(INSIDE + 0.05, e('n2') - 0.6, [r1O]);
const DUST = V(ST[0], 0.4, -3.2);
C.face(e('n2'), DUST);
OWL.face(e('n2') - 0.5, DUST);
OWL.face(s('i4'), C);
C.face(s('i4') + 0.2, OWL);
// room 2: Passion and Patience
const r2C: [number, number] = [ST[1] - 0.6, -1.4];
const r2O: [number, number] = [ST[1] + 1.6, -1.6];
C.place(s('n3') - 0.05, ST[1] - 5.5, -0.4, E_);
OWL.place(s('n3') - 0.05, ST[1] - 4.0, -1.2, E_);
C.walkUntil(s('n3'), e('n3') - 0.3, [r2C]);
OWL.walkUntil(s('n3'), e('n3') - 0.5, [r2O]);
C.face(e('n3'), PA);
OWL.face(e('n3'), PA);
PA.face(0, C);
PT.face(0, C);
C.face(s('pt1'), PT);
OWL.face(s('i7'), C);
C.face(s('i7') + 0.2, OWL);
PA.expr(s('n4') + 0.3, 'happy');
PA.expr(s('n4') + 3.4, 'surprised');
PA.expr(s('ruin') - 0.3, 'sad');
PT.expr(s('n3'), 'happy');
// room 3: the fire against the wall
const r3C: [number, number] = [FIRE.x - 3.4, 0.9];
const r3O: [number, number] = [FIRE.x - 2.0, 0.6];
C.place(s('n5') - 0.05, FIRE.x - 6.0, 0.1, E_);
OWL.place(s('n5') - 0.05, FIRE.x - 4.6, -0.4, E_);
C.walkUntil(s('n5'), e('n5') - 0.6, [r3C]);
OWL.walkUntil(s('n5'), e('n5') - 0.8, [r3O]);
C.face(e('n5') - 0.5, FIRE);
OWL.face(e('n5') - 0.6, C);
// "come round to the other side"
const r3Cb: [number, number] = [FIRE.x + 2.0, 1.5];
const r3Ob: [number, number] = [FIRE.x + 3.3, 0.6];
OWL.walk(s('round') - 0.3, 2.4, [[FIRE.x, 1.2], r3Ob]);
C.walk(s('round'), 2.4, [[FIRE.x - 0.4, 1.6], r3Cb]);
C.face(s('n6') + 0.2, CH);
OWL.face(s('i9'), C);
C.face(s('c7'), OWL);
OWL.face(s('n7'), E_);
C.face(s('n7') + 0.3, E_);
// Christ stays hidden behind the wall until they come round
CH.show(0, false);
CH.show(s('round') + 0.9, true);

// ------------------------------------------------------------------ poses
C.pose = (t) => {
  const P = C.parts;
  // coughing in the dust cloud, paw over his snout
  const cough = clamp01((t - s('sweep') - 0.8) / 0.4) * (1 - clamp01((t - s('i3') - 0.4) / 0.5));
  if (cough > 0) {
    P.armL.rotation.x = lerp(P.armL.rotation.x, -2.3, cough);
    P.armL.rotation.z = lerp(P.armL.rotation.z, 0.5, cough);
    P.body.rotation.x += 0.18 * cough * (0.6 + 0.4 * Math.abs(Math.sin(t * 9)));
  }
  // dawning understanding: a little lift
  const glad = clamp01((t - s('c7')) / 0.4) * (1 - clamp01((t - s('c7') - 1.4) / 0.4));
  P.root.position.y += Math.abs(Math.sin((t - s('c7')) * 8)) * 0.1 * glad;
};
OWL.pose = (t) => {
  const P = OWL.parts;
  // presenting each room with an open wing
  for (const id of ['i2', 'i6', 'i8']) {
    const k = clamp01((t - s(id)) / 0.3) * (1 - clamp01((t - e(id) - 0.6) / 0.4));
    if (k > 0) {
      P.armR.rotation.z = lerp(P.armR.rotation.z, 1.2, k);
      P.armR.rotation.x = lerp(P.armR.rotation.x, -0.5, k);
    }
  }
  // "Come!": beckons onward
  const go = clamp01((t - s('i10') - 1.4) / 0.3);
  if (go > 0) P.armR.rotation.x = -1.6 + Math.sin(t * 8) * 0.4 * go;
};
PA.pose = (t) => {
  const P = PA.parts;
  // grabby hands while he demands it all
  if (t > s('pa1') && t < e('pa1') + 0.3) {
    P.armL.rotation.x = -1.6 + Math.sin(t * 10) * 0.5;
    P.armR.rotation.x = -1.6 - Math.sin(t * 10) * 0.5;
    P.root.position.y += Math.abs(Math.sin(t * 9)) * 0.08;
  } else if (wx.passionArm) {
    wx.passionArm.rotation.x = -0.3 + Math.sin(t * 2.4) * 0.3;
  }
  // a hop of glee as the treasure arrives
  const glee = clamp01((t - s('n4') - 0.5) / 0.3) * (1 - clamp01((t - s('n4') - 2.6) / 0.4));
  P.root.position.y += Math.abs(Math.sin(t * 10)) * 0.14 * glee;
  // sulking among the ruins
  const sulk = clamp01((t - s('ruin') + 0.2) / 0.6);
  if (sulk > 0) {
    P.head.rotation.x += 0.4 * sulk;
    P.body.rotation.x += 0.15 * sulk;
    P.armL.rotation.z = -0.15 * sulk;
    P.armR.rotation.z = 0.15 * sulk;
  }
};
DV.pose = (t) => {
  if (wx.devilArm) wx.devilArm.rotation.x = -0.9 + Math.sin(t * 2.2) * 0.5;
};
CH.pose = (t) => {
  if (wx.christArm) wx.christArm.rotation.x = -0.9 + Math.sin(t * 1.8 + 1) * 0.5;
};

// Passion's heap of treasure: arrives all at once, then is squandered
const treasure: Array<{ m: THREE.Mesh; home: THREE.Vector3; fling: THREE.Vector3; spin: number }> = [];
{
  const colors = [0xffd34d, 0xffe48a, 0xf6b93b, 0x7fd1ff, 0xff8fb1, 0xb18cff, 0xffd34d, 0x8ee59b, 0xffd34d, 0xffc04d];
  for (let i = 0; i < 14; i++) {
    const sz = i < 4 ? 0.26 : 0.16;
    const m = block(sz, i < 4 ? 0.1 : sz, sz, colors[i % colors.length], 0, 0, 0);
    m.castShadow = true;
    const a = (i / 14) * Math.PI * 2;
    const home = V(ST[1] - 1.3 + Math.cos(a) * (0.25 + (i % 3) * 0.18), 0.08 + Math.floor(i / 5) * 0.14, 0.95 + Math.sin(a) * 0.3);
    const fling = V(home.x + Math.cos(a) * (0.9 + (i % 4) * 0.35), 0.06, home.z + Math.sin(a) * (0.7 + (i % 3) * 0.3));
    m.visible = false;
    S.add(m);
    treasure.push({ m, home, fling, spin: (i % 2 ? 1 : -1) * (2 + i * 0.3) });
  }
}

// ------------------------------------------------------------------ world logic
const clouds = addClouds(S, { count: 16, gloom: 0.05, height: [24, 40], radius: [60, 120], drift: 1, center: [100, 0], seed: 55 });
let dustLevel = 0;
let sprinkleT = 0;
let sprinkleTick = 0;
let dropTick = 0;
function update(t: number, dt: number): void {
  clouds(t);
  // the cottage door swings open in welcome
  if (wx.cottageDoor) wx.cottageDoor.rotation.y = -2.1 * ease(clamp01((t - e('c1') + 1.2) / 1.0));

  // --- room 1: dust billows while swept, settles once watered
  const dustTarget = t > s('sweep') && t < s('sprinkle') + 0.3 ? 1 : 0;
  dustLevel += (dustTarget - dustLevel) * Math.min(dt * 1.6, 1);
  for (const d of wx.dust) {
    if (dustLevel > 0.02) {
      d.life += dt * (0.4 + dustLevel * 1.6);
      if (d.life >= 1) { d.life -= 1; d.mesh.position.set(d.baseX, 0.3, d.baseZ); }
      d.mesh.position.y += dt * (0.4 + dustLevel * 0.6);
    }
    d.mat.opacity = dustLevel * 0.55 * Math.sin(d.life * Math.PI);
  }
  if (t >= s('sprinkle') + 0.2 && t - dt < s('sprinkle') + 0.2) sprinkleT = 1.8;
  if (sprinkleT > 0) {
    sprinkleT -= dt;
    sprinkleTick -= dt;
    if (sprinkleTick <= 0) {
      sprinkleTick = 0.03;
      const drop = wx.sprinkle.find((sp) => !sp.active);
      if (drop) {
        drop.active = true;
        drop.vy = 3.5 + Math.random();
        drop.mesh.position.set(ST[0] + (Math.random() - 0.5) * 2.8, 1.8 + Math.random() * 0.4, -3.2 + (Math.random() - 0.5) * 2.4);
        drop.mesh.visible = true;
        drop.mat.opacity = 0.85;
      }
    }
  }
  for (const drop of wx.sprinkle) {
    if (!drop.active) continue;
    drop.mesh.position.y -= drop.vy * dt;
    if (drop.mesh.position.y <= 0.05) { drop.active = false; drop.mesh.visible = false; }
  }
  if (wx.sweeper && wx.sweeperArm) {
    const sweeping = dustLevel > 0.1 && dustTarget > 0;
    animateBear(wx.sweeper, t * 4, sweeping);
    wx.sweeperArm.rotation.z = sweeping ? Math.sin(t * 11) * 0.9 : 0;
    wx.sweeper.root.position.x = ST[0] - 0.9 + (sweeping ? Math.sin(t * 3) * 0.3 : 0);
  }
  if (wx.waterer && wx.watererArm) {
    animateBear(wx.waterer, t * 3, false);
    wx.watererArm.rotation.x = sprinkleT > 0 ? -1.1 + Math.sin(t * 5) * 0.4 : -0.1;
  }

  // --- room 2: the ball bounces; the treasure comes and goes
  if (wx.toyBall) wx.toyBall.position.y = 0.16 + Math.abs(Math.sin(t * 2.6)) * 0.18;
  const arrive = s('n4') + 0.4;
  const waste = s('n4') + Math.max(2.6, (e('n4') - s('n4')) * 0.55);
  for (let i = 0; i < treasure.length; i++) {
    const tr = treasure[i];
    tr.m.visible = t > arrive + i * 0.05;
    if (!tr.m.visible) continue;
    const fall = clamp01((t - arrive - i * 0.05) / 0.45);
    const scatter = ease(clamp01((t - waste - i * 0.04) / 0.7));
    const p = tr.home.clone();
    p.y += (1 - fall) * (1 - fall) * 2.2;
    p.lerp(tr.fling, scatter);
    p.y += Math.sin(scatter * Math.PI) * 0.6;
    tr.m.position.copy(p);
    tr.m.rotation.set(scatter * tr.spin, scatter * tr.spin * 0.7, 0);
    // spoiled: the bright colours drain to dull grey-brown
    const mat = tr.m.material as THREE.MeshStandardMaterial;
    if (!tr.m.userData.base) tr.m.userData.base = mat.color.clone();
    mat.color.copy(tr.m.userData.base as THREE.Color).lerp(new THREE.Color(0x7d7468), clamp01((t - waste - 0.4) / 1.2));
  }

  // --- room 3: the fire that never goes out
  for (let i = 0; i < wx.fireMotes.length; i++) wx.fireMotes[i].scale.set(1, 0.8 + 0.35 * Math.abs(Math.sin(t * 6.5 + i * 1.9)), 1);
  if (wx.fireGlow) wx.fireGlow.intensity = 1.5 + Math.abs(Math.sin(t * 5)) * 0.8;
  for (const em of wx.embers) {
    em.life += dt * 0.6;
    if (em.life >= 1) { em.life -= 1; em.mesh.position.set(em.baseX, 0.3, em.baseZ); }
    em.mesh.position.y += dt * 0.7;
    em.mesh.position.x += Math.sin(t * 3 + em.baseZ) * dt * 0.15;
    em.mat.opacity = 0.8 * (1 - em.life);
  }
  const oilOn = CH.parts.root.visible;
  dropTick -= dt;
  if (dropTick <= 0) {
    dropTick = 0.12;
    const wd = wx.waterDrops.find((d) => !d.active);
    if (wd) { wd.active = true; wd.mesh.position.set(FIRE.x - 1.2 + (Math.random() - 0.5) * 0.3, 0.85, -1.7); wd.mesh.visible = true; wd.mat.opacity = 0.85; }
    const od = wx.oilDrops.find((d) => !d.active);
    if (od && oilOn) { od.active = true; od.mesh.position.set(FIRE.x + 1.2 + (Math.random() - 0.5) * 0.3, 0.85, -1.7); od.mesh.visible = true; od.mat.opacity = 0.9; }
  }
  for (const pool of [wx.waterDrops, wx.oilDrops]) {
    for (const d of pool) {
      if (!d.active) continue;
      d.mesh.position.y -= dt * 2.2;
      if (d.mesh.position.y <= 0.08) { d.active = false; d.mesh.visible = false; }
    }
  }
}

// ------------------------------------------------------------------ shots
// Indoors, never put the lens inside a wall or a partition (unless it's up above them).
let shotT = 0;
setCameraAvoid((eye) => {
  if (shotT < INSIDE || eye.y > 3.6) return false;
  if (Math.abs(eye.z) > 5.1) return true;
  for (const px of [IX + 3, ST[0] + 7, ST[1] + 7, ST[2] + 7]) if (Math.abs(eye.x - px) < 0.4 && Math.abs(eye.z) > 2.0) return true;
  return false;
});
const shots: Shot[] = [];
const shot = (at: number, name: string, cam: Shot['cam']) => shots.push({ at, name, cam: (t, u, l) => { shotT = t; return cam(t, u, l); } });
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
const head = (a: Actor, y = 1.45): THREE.Vector3 => V(a.p.x, y, a.p.z);

// outside
shot(0, 'title cottage', move(
  () => ({ eye: V(22, 13, 15), look: V(40, 1, -4), fov: 40 }),
  () => ({ eye: V(26, 10, 13), look: V(40, 1.5, -4), fov: 40 }),
));
shot(s('establish'), 'highway walk', () => ({ eye: V(C.p.x - 3, 1.5, C.p.z + 6.5), look: V(C.p.x + 2, 1.2, C.p.z), fov: 36 }));
shot(s('n1') + 3.4, 'the cottage', (t, u) => ({ eye: V(lerp(34.5, 35.5, u), 0.9, 4.0), look: V(40, 2.2, -5), fov: 36 }));
shot(s('i1') - 0.1, 'owl welcome', move(
  () => ({ eye: V(41.6, 1.3, 0.4), look: head(OWL, 1.7), fov: 32 }),
  () => ({ eye: V(41.3, 1.3, -0.2), look: head(OWL, 1.75), fov: 30 }),
));
shot(s('c1') - 0.1, 'gladly', () => ({ ...clear(C, 40, 3.8, 1.6, 1.45), fov: 32 }));
// room 1
shot(INSIDE - 0.05, 'dusty room high', (t, u) => ({ eye: V(ST[0] - 6 + u * 2, 7.6, 7.0), look: V(ST[0], 0.4, -1.8), fov: 38 }));
shot(s('i2') - 0.1, 'sweep it', () => ({ ...clear(OWL, 35, 3.6, 1.4, 1.7), fov: 32 }));
shot(s('sweep') - 0.1, 'dust cloud', (t, u) => ({ eye: V(ST[0] + 3.6, 1.7, 0.4), look: V(ST[0] - 0.2, lerp(0.6, 1.2, u), -3.0), fov: 38, shake: 0.02 }));
shot(s('c2') - 0.1, 'coughing', () => ({ eye: V(r1C[0] + 0.6, 1.3, -1.9), look: head(C, 1.4), fov: 32 }));
shot(s('i3') - 0.1, 'bring water', () => ({ eye: V(ST[0] + 1.2, 1.5, -1.8), look: head(OWL, 1.7), fov: 32 }));
shot(s('sprinkle') - 0.1, 'sprinkle', (t, u) => ({ eye: V(ST[0] - 2.4, 0.9, -0.6), look: V(ST[0] + 0.2, 0.5, -3.3), fov: 38 }));
shot(s('i4') - 0.1, 'the broom is the law', move(
  () => ({ ...clear(OWL, 35, 3.8, 1.5, 1.7), fov: 32 }),
  () => ({ ...clear(OWL, 35, 3.1, 1.5, 1.75), fov: 29 }),
));
shot(s('i5') - 0.1, 'grace settles it', () => ({ eye: V(ST[0] - 1.6, 1.6, -3.4), look: mid(C, OWL, 1.3), fov: 36 }));
shot(s('c3') - 0.1, 'i see', () => ({ ...clear(C, -40, 3.6, 1.5, 1.45), fov: 32 }));
// room 2
shot(s('n3') - 0.05, 'two children high', (t, u) => ({ eye: V(ST[1] - 4 + u * 1.5, 6.8, -7.2), look: V(ST[1], 0.4, 1.0), fov: 38 }));
shot(s('i6') - 0.1, 'passion and patience', () => ({ eye: V(ST[1] + 0.2, 1.2, -4.0), look: V(ST[1], 0.8, 1.7), fov: 36 }));
shot(s('pa1') - 0.1, 'mine!', move(
  () => ({ eye: V(PA.p.x + 0.4, 0.9, -0.5), look: head(PA, 1.0), fov: 32 }),
  () => ({ eye: V(PA.p.x + 0.3, 0.85, -0.1), look: head(PA, 1.0), fov: 28 }),
));
shot(s('n4') - 0.1, 'treasure', (t, u) => ({ eye: V(PA.p.x + 1.4, 2.4, -1.4), look: V(PA.p.x, 0.5, 1.1), fov: 38 }));
shot(s('ruin') - 0.1, 'sulking', () => ({ eye: V(PA.p.x - 0.3, 0.7, 0.0), look: head(PA, 0.95), fov: 32 }));
shot(s('pt1') - 0.1, 'patience', move(
  () => ({ eye: V(PT.p.x - 0.4, 0.9, -0.3), look: head(PT, 1.0), fov: 32 }),
  () => ({ eye: V(PT.p.x - 0.3, 0.85, 0.1), look: head(PT, 1.0), fov: 28 }),
));
shot(s('c4') - 0.1, 'poor foolish thing', () => ({ ...clear(C, 35, 3.6, 1.5, 1.45), fov: 32 }));
shot(s('i7') - 0.1, 'riches that last', () => ({ ...clear(OWL, 35, 3.8, 1.5, 1.7), fov: 32 }));
shot(s('c5') - 0.1, 'treasure that lasts', () => ({ ...clear(C, -55, 4.8, 1.6, 1.4, [OWL]), fov: 36 }));
// room 3
shot(s('n5') - 0.05, 'the fire', (t, u) => ({ eye: V(FIRE.x - 4.4, lerp(3.4, 2.6, u), 4.2), look: V(FIRE.x - 0.6, 0.8, -1.6), fov: 38 }));
shot(s('c6') - 0.1, 'why does it not go out', () => ({ ...clear(C, 35, 3.6, 1.5, 1.45), fov: 32 }));
shot(s('i8') - 0.1, 'other side', () => ({ ...clear(OWL, 35, 3.6, 1.5, 1.7), fov: 32 }));
shot(s('round') - 0.1, 'round the wall', (t, u) => ({ eye: V(FIRE.x - 1 + u * 2, 6.6, 6.4), look: V(FIRE.x + 0.5, 0.5, -0.2), fov: 38 }));
shot(s('n6') - 0.1, 'the oil', move(
  () => ({ eye: V(FIRE.x + 1.0, 1.4, -4.9), look: V(FIRE.x + 0.6, 1.0, -1.5), fov: 40 }),
  () => ({ eye: V(FIRE.x + 1.3, 1.2, -4.6), look: V(FIRE.x + 1.0, 1.1, -1.5), fov: 34 }),
));
shot(s('i9') - 0.1, 'christ keeps it alive', (t, u) => lerpCam(
  { ...clear(OWL, 35, 3.8, 1.4, 1.7), fov: 32 },
  { eye: V(FIRE.x - 1.6, 1.3, 1.6), look: V(FIRE.x, 1.0, -1.6), fov: 40 },
  ease(clamp01((u - 0.45) / 0.55)),
));
shot(s('c7') - 0.1, 'faith', () => ({ ...clear(C, -35, 3.6, 1.5, 1.45), fov: 32 }));
shot(s('i10') - 0.1, 'just so', (t, u) => {
  const c = mid(C, OWL, 1.3);
  return { eye: V(c.x - 0.4 + u * 0.8, 1.6, c.z + 4.0), look: c, fov: 36 };
});
shot(s('n7') - 0.1, 'more rooms', (t, u) => lerpCam(
  { eye: V(FIRE.x + 4, 2.4, 0), look: V(FIRE.x + 16, 1.2, 0), fov: 36 },
  { eye: V(FIRE.x + 10, 3.4, 0.3), look: V(FIRE.x + 42, 1.0, 0), fov: 34 },
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
    ctx.fillText("Episode 5 · The Interpreter's House", W / 2, H / 2 + 120);
    ctx.restore();
  }
  // a soft dip to warm white as we step indoors
  const dip = clamp01(1 - Math.abs(t - INSIDE) / 0.45);
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
    ctx.fillText('The Knight, the Cage and the Dream', W / 2, H / 2 + 80);
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
  speakerActor: (sp) => ({ Christian: C, Interpreter: OWL, Passion: PA, Patience: PT } as Record<string, Actor>)[sp] ?? null,
  energy: { Christian: 1.15, Interpreter: 1.1, Passion: 1.4, Patience: 0.9 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    Interpreter: { color: '#eef3f7', chip: '#5e7f96' },
    Passion: { color: '#fff0e6', chip: '#d9733a' },
    Patience: { color: '#eef7ea', chip: '#6fa85a' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'map' },
    { t: INSIDE - 0.8, kind: 'style', style: 'interpreter' },
  ],
});
