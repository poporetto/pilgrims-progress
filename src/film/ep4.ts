import * as THREE from 'three';
import { BearParts, block } from '../bear';
import { WicketGateScene } from '../wicketgate';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, clear, mid, lerpCam, setCameraAvoid,
  V, ease, clamp01, lerp, W, H, addClouds, moodTrack,
} from './engine';

// Episode 4 — The Wicket Gate (Goodwill the lion, Beelzebub's arrows)

const timeline: Timeline = await (await fetch('/film/out/ep4/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ set: the game's Wicket Gate chapter
const noop = (): void => {};
const wicket = new WicketGateScene({
  playScript: noop, setObjective: noop, onComplete: noop, onExit: noop, rumbleSound: noop,
} as unknown as ConstructorParameters<typeof WicketGateScene>[0]);
const wg = wicket.enter(false);
const S = wicket.scene;
const wx = wicket as unknown as {
  goodwill: BearParts;
  interpreter: BearParts;
  doorL: THREE.Group | null;
  doorR: THREE.Group | null;
  lightBeam: THREE.Group | null;
  castleGlows: THREE.Mesh[];
  arrows: Array<{ g: THREE.Group; t: number; active: boolean; from: THREE.Vector3; to: THREE.Vector3 }>;
  fireArrow: () => void;
};
wx.goodwill.root.visible = true;

const studio = makeStudio(S, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

const GATE_X = 10;
const CASTLE = V(4, 6, -15);
const LIGHT_X = 102;
const COTTAGE = V(40, 0, -4.3);

// ------------------------------------------------------------------ cast
const E_ = Math.PI / 2;
const C = new Actor('Christian', wg.christian, 'calm', -46, 0.2, E_).withBrows(0x3b2416);
const G = new Actor('Goodwill', wx.goodwill, 'wise', 13.4, -0.6, -E_).withBrows(0x8a5a2a);
const OWL = new Actor('Interpreter', wx.interpreter, 'gentle', COTTAGE.x, COTTAGE.z + 1.0, 0);
const actors = [C, G, OWL];

// still a little muddy and singed
for (const [x, y, z, sz] of [[0.3, 0.1, 0.44, 0.22], [-0.26, 0.28, 0.44, 0.18]] as const) {
  const m = block(sz * 1.7, sz * 1.2, sz * 0.5, 0x6a543c, x, y, z);
  m.castShadow = false;
  C.parts.body.add(m);
}

// ------------------------------------------------------------------ blocking
const atGate: [number, number] = [6.6, 0.3];
C.walkUntil(s('establish') - 1.2, e('arrive') - 0.2, [atGate]);
C.face(e('arrive'), E_);
// Goodwill waits unseen behind the doors, then steps out to the threshold
G.show(0, false);
G.show(s('open') + 0.3, true);
const gOut: [number, number] = [9.1, -0.9];
G.walkUntil(s('open') + 0.3, e('open') + 0.2, [gOut]);
G.face(e('open') + 0.3, C);
C.face(s('g3'), G);
G.face(s('g4') + 0.4, CASTLE);      // "that castle over there"
C.face(s('g4') + 0.9, CASTLE);
// through the gate, at a run, paw in paw
const inC: [number, number] = [15.2, 0.4];
const inG: [number, number] = [17.0, -0.9];
const pull = s('volley') + 0.5;
G.walk(pull, 5.2, [[10, -0.1], inG], 1.7);
C.walk(pull + 0.15, 5.2, [[10, 0.1], inC], 1.7);
G.face(s('n5') + 0.8, C);
C.face(s('n5') + 0.8, G);
// "Look east"
G.face(s('g9') + 0.2, 0.3);
C.face(s('g9') + 0.8, E_);
G.face(s('k6'), C);
C.face(s('k6'), G);
// off down the King's Highway
C.walk(s('n4') + 0.4, 2.3, [[24, 0.1], [36, 0.2]]);
G.face(s('n4') + 0.8, V(30, 0, 0));
OWL.face(0, 0);

// ------------------------------------------------------------------ special moments
C.pose = (t) => {
  const P = C.parts;
  // heavy-footed and slumped while he worries
  const slump = clamp01((t - s('m1')) / 0.8) * (1 - clamp01((t - s('m3')) / 0.8));
  P.body.rotation.x += 0.12 * slump;
  P.head.rotation.x += 0.22 * slump;
  // knock, knock, knock
  const k0 = s('knock') + 0.2;
  if (t > k0 && t < k0 + 1.5) {
    const ph = (t - k0) / 0.45;
    P.armR.rotation.x = -1.5 - Math.max(0, Math.sin(ph * Math.PI * 2)) * 0.45;
    P.armR.rotation.z = 0.15;
  }
  // a paw held out to Goodwill, then hauled along
  if (t > s('g4') + 1.8 && t < s('n5') + 0.5) {
    P.armL.rotation.x = -1.4;
    P.armL.rotation.z = -0.25;
  }
  // relief: a little bounce at "my heart feels lighter"
  const joy = clamp01((t - s('k6')) / 0.3) * (1 - clamp01((t - s('k6') - 1.3) / 0.4));
  P.root.position.y += Math.abs(Math.sin((t - s('k6')) * 9)) * 0.13 * joy;
};
G.pose = (t) => {
  const P = G.parts;
  // pointing out the castle, then reaching for Christian's paw
  const castle = ease(clamp01((t - s('g4') - 0.3) / 0.4)) * (1 - ease(clamp01((t - s('g4') - 1.8) / 0.4)));
  if (castle > 0) {
    P.armL.rotation.x = lerp(P.armL.rotation.x, -1.8, castle);
    P.armL.rotation.z = lerp(P.armL.rotation.z, -0.3, castle);
  }
  if (t > s('g4') + 1.8 && t < s('n5') + 0.5) {
    P.armR.rotation.x = -1.4;
    P.armR.rotation.z = 0.25;
  }
  // "Look east": a broad sweep of the paw down the Highway
  const east = ease(clamp01((t - s('g9') - 0.4) / 0.5)) * (1 - ease(clamp01((t - e('highway') - 0.2) / 0.5)));
  if (east > 0) {
    P.armR.rotation.z = lerp(P.armR.rotation.z, 1.45, east);
    P.armR.rotation.x = lerp(P.armR.rotation.x, -0.1, east);
  }
  // a big laugh
  const laugh = clamp01(1 - Math.abs(t - s('g10') - 0.6) / 0.7);
  P.body.rotation.x += -0.12 * laugh * (0.5 + 0.5 * Math.sin(t * 22));
  // waves Christian off
  if (t > s('n4') + 1.2) {
    P.armR.rotation.x = -2.9;
    P.armR.rotation.z = 0.25 + Math.sin(t * 7) * 0.35;
  }
};
OWL.pose = (t) => {
  // the Interpreter waves from his doorway at the very end
  if (t > s('n4') + 4.5) {
    OWL.parts.armR.rotation.x = -2.8;
    OWL.parts.armR.rotation.z = 0.3 + Math.sin(t * 6) * 0.3;
  }
};

// ------------------------------------------------------------------ sky & world
const clouds = addClouds(S, { count: 18, gloom: 0.1, height: [26, 44], radius: [70, 140], drift: 1, center: [10, 0], seed: 44 });
const mood = moodTrack(S, [
  { t: 0, sky: 0xc5d6df, hemi: 0.95 },
  { t: s('n2'), sky: 0xcfdde4 },
  { t: s('g4'), sky: 0xa9adb8, hemi: 0.88, sun: 0.75 },
  { t: s('g5'), sky: 0xd6e5ec, hemi: 1.05, sun: 1.15 },
  { t: s('highway'), sky: 0xdfeaf0, hemi: 1.08, sun: 1.2, fog: 6 },
]);
let arrowT = 0;
function update(t: number, dt: number): void {
  mood(t);
  clouds(t);
  // the little doors swing open for Goodwill and bang shut behind them
  const open = ease(clamp01((t - s('open')) / 1.0)) * (1 - ease(clamp01((t - s('volley') - 1.8) / 0.5)));
  if (wx.doorL && wx.doorR) {
    wx.doorL.rotation.y = -1.5 * open;
    wx.doorR.rotation.y = 1.5 * open;
  }
  // Beelzebub's archers
  const firing = t > s('g4') + 2.2 && t < s('volley') + 2.2;
  arrowT -= dt;
  if (firing && arrowT <= 0) {
    arrowT = 0.22;
    wx.fireArrow();
  }
  for (const a of wx.arrows) {
    if (!a.active) continue;
    a.t += dt * 1.4;
    if (a.t >= 1) {
      if (a.t > 1.8) { a.active = false; a.g.visible = false; } else {
        a.g.position.set(a.to.x, 0.35, a.to.z);
        a.g.rotation.set(1.15, 0, 0);
      }
      continue;
    }
    const arc = (u: number): THREE.Vector3 => V(
      lerp(a.from.x, a.to.x, u), lerp(a.from.y, a.to.y, u) + Math.sin(u * Math.PI) * 4, lerp(a.from.z, a.to.z, u),
    );
    const p = arc(a.t);
    a.g.position.copy(p);
    a.g.lookAt(arc(Math.min(a.t + 0.05, 1)));
  }
  for (let i = 0; i < wx.castleGlows.length; i++) {
    (wx.castleGlows[i].material as THREE.MeshBasicMaterial).opacity = 0.5 + 0.4 * Math.abs(Math.sin(t * 1.7 + i * 1.9));
  }
  // the shining light far down the Highway
  if (wx.lightBeam) {
    wx.lightBeam.visible = t > s('g9');
    const g = ease(clamp01((t - s('g9') - 0.3) / 1.6));
    const pulse = 1 + Math.sin(t * 2.4) * 0.12;
    wx.lightBeam.scale.set(pulse * g, Math.max(0.001, g), pulse * g);
  }
}

// ------------------------------------------------------------------ shots
// Outside shots stay west of the wall, inside shots east of it.
let nowShotT = 0;
setCameraAvoid((eye) => (nowShotT < s('volley') + 0.4 ? eye.x > 8.9 : eye.x < 11.2));
const shots: Shot[] = [];
const shot = (at: number, name: string, cam: Shot['cam']) => shots.push({
  at, name, cam: (t, u, l) => { nowShotT = t; return cam(t, u, l); },
});
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
const fov = (c: Cam, f: number): Cam => ({ ...c, fov: f });

// 1. the long straight road, the wall far ahead, the dark castle on its crag
shot(0, 'title road', move(
  () => ({ eye: V(-34, 14, 16), look: V(6, 2, -5), fov: 40 }),
  () => ({ eye: V(-28, 11, 13), look: V(8, 3, -5), fov: 40 }),
));
shot(s('establish'), 'long road', () => ({ eye: V(C.p.x - 6, 2.4, C.p.z + 1.8), look: V(C.p.x + 12, 1.6, 0), fov: 34 }));
shot(s('m1') - 0.1, 'worried walk', () => ({ eye: V(C.p.x + 4.2, 1.5, C.p.z + 1.8), look: V(C.p.x, 1.4, C.p.z), fov: 34 }));
shot(s('m2') - 0.1, 'side track', () => ({ eye: V(C.p.x - 1, 1.4, C.p.z + 5.8), look: V(C.p.x + 1.2, 1.2, C.p.z), fov: 34 }));
shot(s('m3') - 0.1, 'keep walking', move(
  () => ({ eye: V(C.p.x + 3.8, 0.9, C.p.z - 1.4), look: V(C.p.x, 1.5, C.p.z), fov: 34 }),
  () => ({ eye: V(C.p.x + 3.2, 0.8, C.p.z - 1.2), look: V(C.p.x, 1.6, C.p.z), fov: 30 }),
));
shot(s('arrive') - 0.2, 'the gate', (t, u) => ({ eye: V(lerp(-1, 1.5, ease(u)), 2.6, 7.4), look: V(9, 2.6, -2.5), fov: 38 }));
// 2. knock, knock
shot(s('n2') - 0.1, 'inscription', (t, u) => lerpCam(
  { eye: V(3.4, 1.2, 3.6), look: V(10, 4.4, 0), fov: 36 },
  { eye: V(4.0, 1.3, 3.2), look: V(10, 4.2, 0), fov: 32 },
  ease(u),
));
shot(s('knock') - 0.1, 'knocking', () => ({ eye: V(atGate[0] + 0.3, 1.4, atGate[1] + 4.6), look: V(atGate[0] + 1.2, 1.5, atGate[1]), fov: 34 }));
shot(s('k1') - 0.1, 'may i come in', move(
  () => ({ eye: V(8.6, 1.5, -3.2), look: V(atGate[0], 1.5, atGate[1]), fov: 30 }),
  () => ({ eye: V(8.4, 1.5, -2.7), look: V(atGate[0], 1.5, atGate[1]), fov: 28 }),
));
shot(s('n3') - 0.1, 'a voice', () => ({ eye: V(2.2, 2.4, 3.0), look: V(10, 1.7, 0), fov: 34 }));
shot(s('k2') - 0.1, 'who knocks', () => ({ eye: V(8.7, 1.7, -4.6), look: V(atGate[0] + 0.8, 1.6, atGate[1]), fov: 34 }));
shot(s('g2') - 0.1, 'closed door', () => ({ eye: V(5.2, 1.5, -4.6), look: V(10, 2.6, 0.2), fov: 38 }));
// 3. the lion
shot(s('open') - 0.1, 'doors open', (t, u) => lerpCam(
  { eye: V(5.0, 1.0, -3.4), look: V(10.2, 1.9, 0), fov: 38 },
  { eye: V(5.4, 0.8, -3.2), look: V(9.6, 2.0, -0.6), fov: 34 },
  ease(u),
));
shot(s('g3') - 0.1, 'goodwill hero', () => ({ eye: V(4.6, 0.8, -1.7), look: V(G.p.x, 2.0, G.p.z), fov: 32 }));
shot(s('g4') - 0.1, 'the castle', (t, u) => lerpCam(
  { eye: V(3.2, 1.4, 3.2), look: V(G.p.x, 1.8, G.p.z), fov: 34 },
  { eye: V(3.0, 1.4, 3.2), look: V(CASTLE.x, 5, CASTLE.z), fov: 40 },
  ease(clamp01((u - 0.25) / 0.5)),
));
shot(s('volley') - 0.2, 'arrows!', () => ({ eye: V(1.6, 3.2, 7.6), look: V(8.6, 1.4, -0.8), fov: 40, shake: 0.08 }));
shot(s('n5') - 0.1, 'safe inside', (t, u) => ({ eye: V(20.4, 1.5, 3.4), look: V(lerp(10.5, 15.6, ease(u)), 1.4, 0), fov: 36, shake: 0.03 * (1 - u) }));
// 4. welcome
shot(s('g5') - 0.1, 'welcome', () => fov(clear(G, -35, 4.6, 1.0, 1.95), 32));
shot(s('k3') - 0.1, 'you know my name', () => fov(clear(C, -40, 3.6, 1.5, 1.45), 30));
shot(s('g6') - 0.1, 'expected', (t, u) => {
  const c = mid(C, G, 1.2);
  return { eye: V(c.x + lerp(-0.5, 0.5, u), 1.6, c.z + 6.4), look: c, fov: 36 };
});
shot(s('k4') - 0.1, 'ashamed', move(() => fov(clear(C, -35, 3.8, 1.4, 1.4), 30), () => fov(clear(C, -25, 3.2, 1.4, 1.4), 28)));
shot(s('g7') - 0.1, 'bruised and muddy', move(() => fov(clear(G, -40, 5.0, 1.1, 1.95), 32), () => fov(clear(G, -30, 4.2, 1.1, 1.95), 29)));
shot(s('k5') - 0.1, 'one thing more', () => fov(clear(C, -30, 3.4, 1.5, 1.45), 30));
shot(s('g8') - 0.1, 'not here', (t, u) => {
  const c = mid(C, G, 1.25);
  return { eye: V(c.x + 0.4, 1.7, c.z + 6.2), look: c, fov: 34 };
});
shot(s('g9') - 0.1, 'look east', (t, u) => {
  const c = mid(C, G, 1.4);
  return { eye: V(c.x - 0.6, 1.6, c.z + 6.6), look: V(c.x + 1.5 * u, 1.6, c.z), fov: 36 };
});
shot(s('highway') - 0.1, 'the narrow way', (t, u) => lerpCam(
  { eye: V(C.p.x - 2.2, 2.0, C.p.z + 1.3), look: V(40, 2.2, 0), fov: 34 },
  { eye: V(C.p.x - 2.6, 2.8, C.p.z + 1.0), look: V(LIGHT_X, 6, 0), fov: 24 },
  ease(u),
));
shot(s('k6') - 0.1, 'lighter', () => fov(clear(C, -35, 3.6, 1.5, 1.45), 30));
shot(s('g10') - 0.1, 'grace go with you', (t, u) => {
  const c = mid(C, G, 1.25);
  return { eye: V(c.x - 0.5 + u, 1.5, c.z + 6.0), look: c, fov: 36 };
});
// 5. down the Highway to the Interpreter's door
shot(s('n4') - 0.1, 'goodwill waves', () => ({ eye: V(C.p.x - 3, 1.8, C.p.z + 6.5), look: V(C.p.x + 1, 1.4, C.p.z - 0.5), fov: 38 }));
shot(s('n4') + 4.2, 'the cottage', (t, u) => lerpCam(
  { eye: V(30, 2.4, 6.5), look: V(COTTAGE.x, 1.8, COTTAGE.z), fov: 36 },
  { eye: V(33, 3.4, 7.0), look: V(COTTAGE.x, 2.2, COTTAGE.z), fov: 32 },
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
    ctx.fillText('Episode 4 · The Wicket Gate', W / 2, H / 2 + 120);
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
    ctx.fillText("The Interpreter's House", W / 2, H / 2 + 80);
    ctx.restore();
  }
  const fadeIn = 1 - clamp01(t / 1.4);
  if (fadeIn > 0) {
    ctx.fillStyle = `rgba(0,0,0,${fadeIn})`;
    ctx.fillRect(0, 0, W, H);
  }
}

// ------------------------------------------------------------------ go
const k0 = s('knock') + 0.2;
runFilm(studio, {
  update,
  actors,
  speakerActor: (sp) => ({ Christian: C, Goodwill: G } as Record<string, Actor>)[sp] ?? null,
  energy: { Christian: 1.15, Goodwill: 1.15 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    Goodwill: { color: '#fff6e0', chip: '#c08a2e' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'map' },
    { t: s('n2') - 0.5, kind: 'style', style: 'gate' },
    { t: k0 + 0.25, kind: 'blip' },
    { t: k0 + 0.7, kind: 'blip' },
    { t: k0 + 1.15, kind: 'blip' },
    { t: s('g4') + 0.3, kind: 'rumble' },
    { t: s('volley') + 1.9, kind: 'rumble' },
  ],
});
