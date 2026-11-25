import * as THREE from 'three';
import { PALETTE } from '../palette';
import { makeBear, block } from '../bear';
import { buildWorld } from '../world';
import { createNPCs } from '../npcs';
import {
  Actor, Cam, Shot, Timeline, makeStudio, runFilm, around, clear, setCameraAvoid, ots, mid, lerpCam,
  V, ease, clamp01, lerp, W, H,
} from './engine';

// Episode 1 — The Heavy Burden (Chapter I: the City of Destruction)

const timeline: Timeline = await (await fetch('/film/out/ep1/timeline.json')).json();
await document.fonts.load('800 46px Nunito');
await document.fonts.load('italic 800 46px Nunito');
await document.fonts.load('900 34px Nunito');
await document.fonts.load('700 120px Fraunces');
await document.fonts.load('italic 600 54px Fraunces');

// ------------------------------------------------------------------ stage (same lighting as the game)
const scene = new THREE.Scene();
scene.background = new THREE.Color(PALETTE.sky);
scene.fog = new THREE.Fog(PALETTE.fog, 60, 150);
scene.add(new THREE.HemisphereLight(0xfff0dc, 0xd9d2b5, 1.28));
const sun = new THREE.DirectionalLight(0xffd6a3, 1.08);
sun.position.set(50, 136, 0);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -60;
sun.shadow.camera.right = 60;
sun.shadow.camera.top = 60;
sun.shadow.camera.bottom = -60;
sun.shadow.camera.far = 150;
sun.shadow.radius = 5;
scene.add(sun);

const world = buildWorld(scene);
const npcs = createNPCs(scene);
const npc = (id: string) => npcs.find((n) => n.id === id)!.parts;

const chrParts = makeBear({
  species: 'bear', fur: PALETTE.bearBrown, outfit: 'shirt', outfitColor: 0x8fb8d8,
  sling: true, burden: true, plump: true,
});
scene.add(chrParts.root);

const studio = makeStudio(scene, timeline);
const B = studio.beat;
const s = (id: string): number => B(id).start;
const e = (id: string): number => B(id).end;

// ------------------------------------------------------------------ cast & blocking
const E_ = Math.PI / 2;   // facing east
const W_ = -Math.PI / 2;  // facing west

const C = new Actor('Christian', chrParts, 'calm', -7, -5.6, W_ + 0.3);
const WF = new Actor('Christiana', npc('christiana'), 'gentle', -9.4, -6.9, 0);
const EL = new Actor('Elsie', npc('cub1'), 'bouncy', -9.3, -4.4, Math.PI * 0.75);
const AN = new Actor('Anna', npc('cub2'), 'shy', -7.5, -3.4, -Math.PI * 0.6);
const OB = new Actor('Obstinate', npc('obstinate'), 'grumpy', 5.3, 4.2, -2.6);
const PL = new Actor('Pliable', npc('pliable'), 'excited', 7.9, 4.7, -2.4);
const EV = new Actor('Evangelist', npc('evangelist'), 'wise', 42, 0, W_);
const FROG = new Actor('Puddle', npc('frogkid'), 'bouncy', 1.4, -4.6, Math.PI);
const actors = [C, WF, EL, AN, OB, PL, EV, FROG];
for (const x of [C, WF, EL, AN]) x.face(0, x === C ? WF : C);

// family scene: the cubs face Papa, Christiana and Christian face each other
WF.face(0, C);
EL.face(0, C);
AN.face(0, C);
C.face(s('cw1'), WF);
C.face(s('el1') - 0.4, EL);
C.face(s('an1'), AN);

// Anna's honey-flower
const flower = new THREE.Group();
flower.add(block(0.05, 0.3, 0.05, 0x6fa85a, 0, 0.1, 0));
flower.add(block(0.2, 0.08, 0.2, 0xffd36b, 0, 0.27, 0));
flower.add(block(0.09, 0.1, 0.09, 0xf08aa0, 0, 0.32, 0));
flower.position.set(0, -0.48, 0.12);
flower.rotation.x = -0.6;
npc('cub2').armR.add(flower);

// Christian walks out through the plaza and past Obstinate
const nearOb: [number, number] = [4.4, 1.2];
C.walkUntil(s('n3') + 0.4, s('ob1') + 0.1, [[-4.2, -5.6], [-3.0, -2.8], [0, -2.6], [2.8, -1.6], nearOb]);
C.face(s('ob1') + 0.2, OB);
OB.face(0, C);
PL.face(0, C);
// cut to the east road: walk up to Evangelist
const meet: [number, number] = [40.1, 0.15];
C.place(s('walk'), 23, 0.3);
C.walkUntil(s('walk') + 0.05, s('ev1') - 0.4, [meet]);
C.face(s('ev1') - 0.3, EV);
EV.face(0, W_);

// the reveal: both turn toward the light
const LIGHT = V(64.5, 3, 0);
EV.face(s('ev5') + 0.6, 0.25);           // half-turns, pointing east
C.face(s('ev5') + 1.1, LIGHT);
C.face(s('ev7'), EV);
EV.face(s('ev7') - 0.4, C);

// run!
const runTo: [number, number] = [53, 0];
C.walk(s('n5') + 0.3, 6.4, [[41.2, -1.9], [43.6, -1.9], runTo], 1.7);
C.face(s('c1') + 0.6, W_);
EV.show(s('c1'), false);

// the pursuers come pelting down the road
const obStop: [number, number] = [49.9, -1.5];
const plStop: [number, number] = [50.5, 1.8];
OB.place(s('c1') - 0.01, 27, -0.6);
PL.place(s('c1') - 0.01, 25.8, 0.9);
OB.walkUntil(s('c1'), e('arrive') - 0.35, [obStop], 1.5);
PL.walkUntil(s('c1'), e('arrive') - 0.15, [plStop], 1.5);
OB.face(e('arrive') - 0.3, C);
PL.face(e('arrive') - 0.1, C);
OB.face(s('c5') + 0.2, PL);   // "Pliable — take his other arm"
OB.face(s('c5') + 2.6, C);
OB.face(s('c8'), PL);          // "You TOO?!"
PL.face(s('c6') + 0.8, LIGHT); // dreaming of the golden city
PL.face(s('c7'), OB);
C.face(s('c6'), PL);
C.face(s('c8'), OB);

// Obstinate storms home
OB.walk(s('stomp') + 0.35, 3.0, [[46, -1.6], [20, -1.2]], 1.25);
C.face(s('stomp') + 0.4, OB);
PL.face(s('stomp') + 0.4, OB);
PL.walk(s('c9') + 0.1, 2.5, [[51.9, 1.6]]);
PL.face(s('c9') + 0.7, C);
C.face(s('c9'), PL);
OB.show(s('n6'), false);

// together through the gate to the light
C.walk(s('n6') + 0.6, 2.2, [[63.4, -0.2]]);
PL.walk(s('n6') + 0.8, 2.2, [[62.6, 1.25]]);
C.face(s('n7'), LIGHT);
PL.face(s('n7'), C);

// ------------------------------------------------------------------ special moments
// the sigh: shoulders sag, head drops
C.pose = (t) => {
  const P = C.parts;
  const sag = ease(clamp01((t - s('n2') - 2.2) / 1.0)) * (1 - ease(clamp01((t - e('sigh') - 0.3) / 0.8)));
  P.body.rotation.x += sag * 0.18;
  P.head.rotation.x += sag * 0.35;
  P.armL.rotation.z -= sag * 0.12;
  P.armR.rotation.z += sag * 0.12;
  P.body.position.y -= sag * 0.05;
  // sniffing Anna's flower: bend down
  const sniff = ease(clamp01((t - s('an2') + 0.2) / 0.5)) * (1 - ease(clamp01((t - e('an2') - 0.2) / 0.5)));
  P.body.rotation.x += sniff * 0.3;
  P.head.rotation.x += sniff * 0.35;
  // "I look and look": searching left and right
  if (t > s('ev4') && t < e('ev4') + 0.3) P.head.rotation.y += Math.sin((t - s('ev4')) * 3.6) * 0.55;
  // the light dawns: head lifts, a little bounce of joy
  const joy = clamp01((t - s('ev6')) / 0.3) * (1 - clamp01((t - e('ev6') - 0.4) / 0.4));
  P.root.position.y += Math.abs(Math.sin((t - s('ev6')) * 9)) * 0.12 * joy;
  P.head.rotation.x -= 0.15 * clamp01((t - s('reveal') - 0.5) / 0.8) * (t < s('ev7') ? 1 : 0);
  // startled at the shout
  const jolt = clamp01(1 - Math.abs(t - s('c1') - 0.35) / 0.25);
  P.root.position.y += jolt * 0.25;
};

// Elsie topples over: "Plop!"
EL.pose = (t) => {
  const t0 = e('el2') - 0.55;
  if (t < t0 || t > e('plop') + 1.2) return;
  const fall = ease(clamp01((t - t0) / 0.35));
  const up = ease(clamp01((t - e('plop') - 0.2) / 0.6));
  const k = fall * (1 - up);
  EL.parts.root.rotation.z = k * 1.45;
  EL.parts.root.position.y = k * 0.14 + Math.abs(Math.sin((t - t0) * 12)) * 0.05 * k * (1 - clamp01((t - t0 - 0.35) / 0.4));
  EL.parts.armL.rotation.z = -k * 1.2;
  EL.parts.armR.rotation.z = k * 1.2;
  EL.parts.legL.rotation.x = -k * 0.6;
};

// Anna holds the flower up for Papa
AN.pose = (t) => {
  const hold = ease(clamp01((t - s('an1') - 1.6) / 0.5)) * (1 - ease(clamp01((t - e('an2')) / 0.6)));
  AN.parts.armR.rotation.x = lerp(AN.parts.armR.rotation.x, -1.5, hold);
  AN.parts.armR.rotation.z = lerp(AN.parts.armR.rotation.z, -0.2, hold);
};

// Evangelist points the way
EV.pose = (t) => {
  const pt = ease(clamp01((t - s('ev5') - 0.6) / 0.6)) * (1 - ease(clamp01((t - e('reveal') - 0.3) / 0.6)));
  const P = EV.parts;
  P.armR.rotation.z = lerp(P.armR.rotation.z, 1.45, pt);
  P.armR.rotation.x = lerp(P.armR.rotation.x, -0.15, pt);
  P.head.rotation.y += pt * 0.9;
};

// Pliable hops for joy
PL.pose = (t) => {
  const hopping = (t > s('c7') && t < e('c7') + 0.2) || (t > s('c9') && t < s('n7'));
  if (hopping) {
    PL.parts.root.position.y += Math.abs(Math.sin(t * 8)) * 0.32;
    PL.parts.legL.rotation.x = 0.4;
    PL.parts.legR.rotation.x = 0.4;
  }
  // tingling paws: a little shiver during "my paws are tingling"
  if (t > e('c6') - 1.6 && t < e('c6')) PL.parts.body.rotation.z += Math.sin(t * 40) * 0.05;
};

// Obstinate: arms pumping, comically stiff stomp; pursuers lean into the sprint
OB.pose = (t) => {
  const P = OB.parts;
  if (OB.moving && t > s('stomp')) {
    P.armL.rotation.x = -0.2 + Math.sin(t * 11) * 1.0;
    P.armR.rotation.x = -0.2 - Math.sin(t * 11) * 1.0;
    P.body.rotation.x += 0.18;
    P.root.position.y += Math.abs(Math.sin(t * 11)) * 0.1;
  }
  if (OB.moving && t < s('stomp')) P.body.rotation.x += 0.2;
  // fuming before he storms off
  if (t > s('c8') && t < e('c8') + 0.3) P.body.position.x = Math.sin(t * 50) * 0.02;
};

// Puddle the frog bounces about in the plaza
FROG.pose = (t) => {
  const ph = (t * 0.9) % 1;
  FROG.parts.root.position.y = ph < 0.35 ? Math.sin((ph / 0.35) * Math.PI) * 0.8 : 0;
};

// ------------------------------------------------------------------ world logic
function update(t: number): void {
  world.update(t);
  // the gate swings open and the light appears when Evangelist points
  const reveal = s('reveal');
  world.gate.open = t > reveal + 0.4;
  world.lightBeam.visible = t > reveal - 0.1;
  const grow = ease(clamp01((t - reveal + 0.1) / 1.6));
  const pulse = 1 + Math.sin(t * 2.4) * 0.12;
  world.lightBeam.scale.set(pulse * grow, Math.max(0.001, grow), pulse * grow);
}

// ------------------------------------------------------------------ shot list
setCameraAvoid((eye) => eye.x > 58.6 && eye.x < 61.4); // never inside the city wall
const shots: Shot[] = [];
const shot = (at: number, name: string, cam: Shot['cam']) => shots.push({ at, cam, name });
// glide between two framings, both evaluated live (actors move)
const move = (a: () => Cam, b: () => Cam) => (_t: number, u: number) => lerpCam(a(), b(), ease(u));
const roll = (c: Cam, r: number): Cam => ({ ...c, roll: r });
const fov = (c: Cam, f: number): Cam => ({ ...c, fov: f });
const side = (a: Actor, b: Actor, dist: number, h: number, flip = 1, lookY = 1.3): Cam => {
  // profile two-shot: camera off to one side of the line between them
  const c = mid(a, b, lookY);
  const dx = b.p.x - a.p.x, dz = b.p.z - a.p.z;
  const d = Math.hypot(dx, dz) || 1;
  return { eye: V(c.x - (dz / d) * dist * flip, h, c.z + (dx / d) * dist * flip), look: c };
};

// 1. title over the sleeping city, then a long crane down to Christian's door
shot(0, 'title aerial', move(
  () => ({ eye: V(-50, 36, 50), look: V(-4, 0, -2), fov: 40 }),
  () => ({ eye: V(-36, 30, 40), look: V(-4, 0, -4), fov: 40 }),
));
shot(s('aerial'), 'crane down', (t) => {
  const k = ease(clamp01((t - s('aerial')) / (e('n1') - s('aerial') + 0.4)));
  return lerpCam(
    { eye: V(26, 30, 34), look: V(2, 0, 0), fov: 42 },
    { eye: V(-1.5, 3.0, 2.8), look: V(-7.4, 1.3, -6.0), fov: 36 },
    k,
  );
});
// 2. the burden: slow orbit around his back, then a sad close-up
shot(s('n2'), 'burden orbit', (t, u) => fov(around(C, lerp(115, 75, ease(u)), lerp(5.6, 4.6, ease(u)), 2.0, 1.35), 34));
shot(e('n2') - 0.7, 'sigh close', move(
  () => fov(around(C, -30, 4.4, 1.6, 1.4), 30),
  () => fov(around(C, -22, 3.8, 1.5, 1.4), 28),
));
// 3. Christiana
shot(s('cw1') - 0.2, 'wife med', (t, u) => ({ eye: V(lerp(-7.6, -7.9, u), 2.5, lerp(-2.0, -2.3, u)), look: V(-9.2, 1.35, -6.7), fov: 34 }));
shot(s('cw2') - 0.1, 'wife close', move(
  () => fov(clear(WF, 35, 4.2, 1.6, 1.45), 30),
  () => fov(clear(WF, 22, 3.6, 1.55, 1.45), 28),
));
shot(s('ch1') - 0.1, 'christian med', (t, u) => fov(clear(C, lerp(40, 30, u), 4.4, 1.7, 1.45), 32));
shot(s('cw3') - 0.1, 'family wide', (t, u) => {
  const c = mid(C, WF, 1.0);
  const a = THREE.MathUtils.degToRad(lerp(55, 85, ease(u)));
  return { eye: V(c.x + Math.sin(a) * 8, 1.6, c.z + Math.cos(a) * 8), look: V(c.x, 1.0, c.z), fov: 38 };
});
// 4. the cubs — cub-height camera, Papa looks huge
shot(s('el1') - 0.4, 'cub pov', () => fov(ots(EL, C, 1, 1.5, 0.95, 1.75), 40));
shot(s('el2') - 0.1, 'elsie close', move(
  () => fov(around(EL, 20, 2.8, 0.9, 0.8), 32),
  () => fov(around(EL, 35, 3.2, 1.0, 0.75), 34),
));
shot(e('el2') + 0.35, 'plop wide', () => ({ ...clear(EL, 70, 4.6, 1.7, 0.5), fov: 36, shake: 0.05 }));
shot(s('an1') - 0.2, 'anna close', move(
  () => fov(clear(AN, 50, 2.9, 0.9, 0.8), 32),
  () => fov(clear(AN, 40, 2.5, 0.85, 0.85), 30),
));
shot(s('an2') - 0.1, 'sniff high', () => ({ eye: V(-10.8, 2.8, -1.8), look: V(-7.2, 0.9, -4.4), fov: 34 }));
// 5. out into the town
shot(s('n3') - 0.1, 'drone follow', (t, u) => {
  const p = C.p;
  return { eye: V(p.x - 9 + u * 3, lerp(10, 7, ease(u)), p.z + 10), look: V(p.x + 1.5, 0.8, p.z), fov: 38 };
});
shot(s('ob1') - 0.15, 'obstinate low', (t, u) => roll(fov(around(OB, lerp(-15, -35, u), 4.2, 0.75, 1.7), 32), 0.08));
shot(s('ob2') - 0.1, 'ob two', () => fov(clear(OB, 50, 5.4, 1.6, 1.4), 36));
// 6. east road
shot(s('walk'), 'side track', () => {
  const p = C.p;
  return { eye: V(p.x - 1.5, 1.4, p.z + 7.5), look: V(p.x + 1, 1.0, p.z), fov: 34 };
});
shot(s('n4') + 2.6, 'evangelist reveal', (t, u) => lerpCam(
  { eye: V(38.6, 0.55, 4.4), look: V(42, 1.8, 0), fov: 36 },
  { eye: V(38.0, 1.9, 5.6), look: V(41, 1.4, 0), fov: 40 },
  ease(u),
));
// 7. Evangelist and Christian
shot(s('ev1') - 0.15, 'ev low', move(
  () => fov(clear(EV, -55, 4.6, 0.8, 1.85), 32),
  () => fov(clear(EV, -45, 4.2, 0.8, 1.85), 30),
));
shot(s('ev2') - 0.1, 'christian high', move(
  () => fov(clear(C, 50, 4.2, 2.4, 1.35), 32),
  () => fov(clear(C, 40, 3.7, 2.2, 1.4), 30),
));
shot(s('ev3') - 0.1, 'ev med', (t, u) => fov(clear(EV, lerp(35, 25, u), 4.8, 1.3, 1.8), 34));
shot(s('ev4') - 0.1, 'searching wide', (t, u) => {
  const c = mid(C, EV, 1.2);
  return { eye: V(c.x + lerp(-1, 1, u), 1.6, c.z + 6.5), look: c, fov: 36 };
});
shot(s('ev5') - 0.1, 'point profile', (t, u) => {
  const c = mid(C, EV, 1.5);
  return { eye: V(c.x - 0.6, 1.6, c.z + 6.4), look: V(c.x + 0.8, 1.7, c.z), fov: lerp(38, 34, ease(u)) };
});
shot(s('reveal') - 0.2, 'the light', (t, u) => lerpCam(
  { eye: V(35.4, 3.0, 3.4), look: V(48, 2.4, -0.2), fov: 38 },
  { eye: V(36.0, 3.4, 3.0), look: V(62, 6, 0), fov: 32 },
  ease(clamp01(u * 1.2)),
));
shot(s('ev6') - 0.15, 'christian lit', () => fov(clear(C, -55, 3.8, 1.5, 1.45), 30));
shot(s('ev7') - 0.15, 'ev hero', (t, u) => fov(clear(EV, lerp(-40, -30, u), lerp(5.2, 4.4, ease(u)), 0.8, 1.95), 32));
// 8. the run
shot(s('n5') - 0.1, 'run side', () => {
  const p = C.p;
  return { eye: V(p.x - 2.2, 0.9, p.z + 6.2), look: V(p.x + 1.4, 1.0, p.z), fov: 36, shake: 0.04 };
});
shot(s('run') + 0.4, 'run front', () => {
  const p = C.p;
  return { eye: V(p.x + 4.2, 1.1, p.z + 1.2), look: V(p.x - 1, 1.2, p.z), fov: 40, shake: 0.06 };
});
shot(s('c1') - 0.05, 'pursuers', () => {
  const p = OB.p;
  return { eye: V(Math.min(p.x + 4.6, 49.5), 0.75, 0.4), look: V(p.x - 1, 1.3, 0.1), fov: 40, shake: 0.08 };
});
shot(s('arrive') + 0.2, 'standoff wide', (t, u) => lerpCam(
  { eye: V(51.8, 2.6, 8.6), look: V(51.8, 1.0, 0), fov: 38 },
  { eye: V(51.8, 2.2, 7.6), look: V(51.8, 1.0, 0), fov: 38 },
  ease(u),
));
// 9. the argument — Christian with the light behind him
shot(s('c2') - 0.1, 'christian glow', move(
  () => fov(clear(C, -10, 5.2, 1.5, 1.5), 32),
  () => fov(clear(C, -10, 4.4, 1.5, 1.5), 29),
));
shot(s('c3') - 0.1, 'obstinate dutch', () => roll(fov(clear(OB, 25, 4.2, 1.0, 1.65), 30), -0.1));
shot(s('c4') - 0.1, 'christian orbit', (t, u) => ({ eye: V(lerp(48.6, 49.2, ease(u)), 1.6, lerp(-0.4, 0.5, ease(u))), look: V(53, 1.45, 0), fov: 30 }));
shot(s('c5') - 0.1, 'ob and pl', () => {
  const c = mid(OB, PL, 1.1);
  return { eye: V(c.x - 5.2, 1.6, c.z + 1.8), look: c, fov: 36 };
});
shot(s('c6') - 0.1, 'pliable dream', (t, u) => lerpCam(
  { eye: V(54.6, 1.4, 4.0), look: V(50.5, 1.45, 1.8), fov: 32 },
  { eye: V(53.6, 1.4, 3.4), look: V(50.5, 1.5, 1.8), fov: 28 },
  ease(u),
));
shot(s('c7') - 0.1, 'pliable joy', () => ({ eye: V(51.8, 1.35, -3.3), look: V(50.5, 1.2, 1.8), fov: 38, shake: 0.03 }));
shot(s('c8') - 0.1, 'ob rant', (t, u) => {
  const k = ease(clamp01(u * 1.4));
  return { eye: V(lerp(46.2, 47.5, k), 1.25, lerp(2.0, 0.9, k)), look: V(49.9, 1.65, -1.5), fov: lerp(34, 28, u), roll: 0.06 * Math.sin(t * 3) };
});
shot(s('stomp') + 0.2, 'stomp away', (t, u) => ({ eye: V(56, 2.7, 3.6), look: V(lerp(49, 40, ease(u)), 1.0, -0.8), fov: 36 }));
shot(s('c9') - 0.1, 'pals', (t, u) => fov(side(C, PL, 5.0 - u * 0.6, 1.5, 1, 1.15), 34));
// 10. through the gate, toward the light
shot(s('n6') - 0.1, 'into the light', (t, u) => lerpCam(
  { eye: V(47.5, 1.6, 3.6), look: V(56, 1.6, 0.3), fov: 36 },
  { eye: V(51.2, 1.9, 2.3), look: V(62, 2.4, 0), fov: 34 },
  ease(u),
));
shot(s('n7') - 0.1, 'final aerial', (t, u) => lerpCam(
  { eye: V(50, 14, 22), look: V(64, 2, 0), fov: 40 },
  { eye: V(42, 30, 34), look: V(70, 0, -4), fov: 42 },
  ease(u),
));

// ------------------------------------------------------------------ overlays: titles, fades, the flash of light
function overlay(ctx: CanvasRenderingContext2D, t: number): void {
  // fade in from black
  const fadeIn = 1 - clamp01(t / 1.4);
  // title card
  const tA = clamp01((t - 0.6) / 0.8) * (1 - clamp01((t - 4.6) / 0.8));
  if (tA > 0) {
    ctx.save();
    ctx.globalAlpha = tA;
    ctx.fillStyle = 'rgba(255,244,226,0.35)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(80,50,20,0.45)';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#fffaf0';
    ctx.font = '700 132px Fraunces, Georgia, serif';
    ctx.fillText("Pilgrim's Progress", W / 2, H / 2 - 10);
    ctx.font = 'italic 600 56px Fraunces, Georgia, serif';
    ctx.fillStyle = '#ffe9b8';
    ctx.fillText('Episode 1 · The Heavy Burden', W / 2, H / 2 + 120);
    ctx.restore();
  }
  // white flash as the light appears
  const r = s('reveal');
  const flash = clamp01(1 - Math.abs(t - r - 0.35) / 0.6) * 0.55;
  if (flash > 0) {
    ctx.fillStyle = `rgba(255,248,220,${flash})`;
    ctx.fillRect(0, 0, W, H);
  }
  // end: fade to warm white, then the "next time" card
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
    ctx.fillText('The Slough of Despond', W / 2, H / 2 + 80);
    ctx.restore();
  }
  if (fadeIn > 0) {
    ctx.fillStyle = `rgba(0,0,0,${fadeIn})`;
    ctx.fillRect(0, 0, W, H);
  }
}

// ------------------------------------------------------------------ go
runFilm(studio, {
  update,
  actors,
  speakerActor: (sp) => ({ Christian: C, Christiana: WF, Elsie: EL, Anna: AN, Obstinate: OB, Pliable: PL, Evangelist: EV } as Record<string, Actor>)[sp] ?? null,
  energy: { Christian: 1.15, Christiana: 1.0, Elsie: 1.4, Anna: 1.0, Obstinate: 1.5, Pliable: 1.4, Evangelist: 1.1 },
  shots,
  overlay,
  captions: {
    Christian: { color: '#f7ecdf', chip: '#8b5e3c' },
    Christiana: { color: '#fdebee', chip: '#d27c8c' },
    Elsie: { color: '#f1eafc', chip: '#9a7fd1' },
    Anna: { color: '#ecf7e6', chip: '#6fa85a' },
    Obstinate: { color: '#edf4ee', chip: '#6f9178' },
    Pliable: { color: '#fff3e3', chip: '#e09a4f' },
    Evangelist: { color: '#fffbea', chip: '#c9a23a' },
  },
  music: [
    { t: 0.2, kind: 'start' },
    { t: 0.2, kind: 'style', style: 'village' },
    { t: s('n4') - 1.5, kind: 'style', style: 'gate' },
    { t: s('n5') - 0.6, kind: 'style', style: 'map' },
    { t: s('n6') - 1.0, kind: 'style', style: 'gate' },
  ],
});
