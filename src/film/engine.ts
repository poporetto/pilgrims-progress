import * as THREE from 'three';
import { animateBear, BearParts } from '../bear';
import { Atmosphere, configureRenderer } from '../render/atmosphere';
import { windUniforms } from '../world/voxels';
import { Music, FilmCue } from '../music';

// ---------------------------------------------------------------------------
// A tiny deterministic "film studio" for the game's voxel world.
//
// Every frame is a pure function of the frame number: actors follow keyed
// paths, the camera follows a shot list, captions come from the voiced
// timeline. The capture script calls window.__film.frame(i) for each frame.
// ---------------------------------------------------------------------------

export const W = 1920;
export const H = 1080;
export const FPS = 30;

export interface Beat {
  id: string;
  start: number;
  end: number;
  speaker?: string;
  text?: string;
  env?: number[];
  /** the speaker's expression for this line */
  face?: Expr;
  /** listeners' expressions during this line */
  react?: Record<string, Expr>;
}
export interface Timeline { fps: number; duration: number; beats: Beat[] }

// deterministic Math.random — dust puffs and scatter use it
let seed = 1234567;
Math.random = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};

export const ease = (u: number): number => u * u * (3 - 2 * u);
export const clamp01 = (u: number): number => Math.min(1, Math.max(0, u));
export const lerp = (a: number, b: number, u: number): number => a + (b - a) * u;
export const V = (x: number, y: number, z: number): THREE.Vector3 => new THREE.Vector3(x, y, z);

export function lerpAngle(a: number, b: number, k: number): number {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * Math.min(k, 1);
}

// ------------------------------------------------------------------ expressions
//
// Faces have no mouths, so feelings live in the brows and eyes: brows tilt
// and lift, eyes widen, squint or droop. Brows are added per actor (from
// episode 2 on) and every expression eases in rather than snapping.

export type Expr = 'neutral' | 'happy' | 'angry' | 'sad' | 'worried' | 'surprised' | 'scared' | 'smug' | 'determined';

interface ExprPose { browY: number; tilt: number; eyeY: number; eyeX: number; asym: number }
const EXPR: Record<Expr, ExprPose> = {
  // Brows must read as clearly ANGLED at a glance (user feedback): angry and
  // sad tilt hard, in opposite directions.
  //            lift  inner-up tilt  eye height  eye width  one brow up
  neutral:    { browY: 0, tilt: 0, eyeY: 1, eyeX: 1, asym: 0 },
  happy:      { browY: 0.07, tilt: 0.2, eyeY: 0.45, eyeX: 1.15, asym: 0 },
  angry:      { browY: -0.05, tilt: -0.95, eyeY: 0.7, eyeX: 1.1, asym: 0 },
  sad:        { browY: 0.02, tilt: 0.85, eyeY: 0.78, eyeX: 0.95, asym: 0 },
  worried:    { browY: 0.06, tilt: 0.65, eyeY: 1.12, eyeX: 1, asym: 0 },
  surprised:  { browY: 0.13, tilt: 0.08, eyeY: 1.4, eyeX: 1.2, asym: 0 },
  scared:     { browY: 0.1, tilt: 0.75, eyeY: 1.35, eyeX: 0.9, asym: 0 },
  smug:       { browY: 0.01, tilt: -0.35, eyeY: 0.62, eyeX: 1.05, asym: 0.08 },
  determined: { browY: -0.03, tilt: -0.55, eyeY: 0.9, eyeX: 1, asym: 0 },
};

interface Brows { l: THREE.Object3D; r: THREE.Object3D; pose: ExprPose }

/** give an actor eyebrows (skip frogs: their eyes sit on top of the head) */
export function addBrows(parts: BearParts, color?: number): Brows | null {
  const eyes = parts.eyes ?? [];
  if (eyes.length < 2) return null;
  const c = new THREE.Color(color ?? 0x3b2a20);
  const make = (eye: THREE.Mesh): THREE.Object3D => {
    const pivot = new THREE.Group();
    pivot.position.set(eye.position.x, eye.position.y + 0.135, eye.position.z + 0.012);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.055, 0.05), new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));
    m.castShadow = false;
    pivot.add(m);
    parts.head.add(pivot);
    return pivot;
  };
  const [a, b] = eyes[0].position.x < eyes[1].position.x ? [eyes[0], eyes[1]] : [eyes[1], eyes[0]];
  return { l: make(a), r: make(b), pose: { ...EXPR.neutral } };
}

// ------------------------------------------------------------------ actors

export type TalkStyle = 'calm' | 'gentle' | 'bouncy' | 'shy' | 'grumpy' | 'excited' | 'wise';

interface PosKey { t: number; x: number; z: number; run?: number }
type FaceTarget = number | Actor | THREE.Vector3;
interface FaceKey { t: number; to: FaceTarget }

/** terrain height under the actors (flat unless an episode sets it) */
let groundAt: (x: number, z: number) => number = () => 0;
let hilly = false;
export function setGround(fn: (x: number, z: number) => number): void { groundAt = fn; hilly = true; }

const registry: Actor[] = [];

export class Actor {
  pos: PosKey[] = [];
  faces: FaceKey[] = [];
  shows: Array<{ t: number; on: boolean }> = [];
  moving = false;
  runScale = 1;
  /** extra per-frame pose hook (applied after walk + talk) */
  pose: ((t: number) => void) | null = null;
  brows: Brows | null = null;
  exprs: Array<{ t: number; e: Expr }> = [];
  /** expression asked for by the current line (set by the engine each frame) */
  lineExpr: Expr | null = null;

  constructor(public name: string, public parts: BearParts, public style: TalkStyle, x: number, z: number, facing: number) {
    registry.push(this);
    this.pos.push({ t: -1, x, z });
    this.faces.push({ t: -1, to: facing });
    parts.root.position.set(x, 0, z);
    parts.root.rotation.y = facing;
  }

  get p(): THREE.Vector3 { return this.parts.root.position; }

  /** instant jump (hide it behind a cut) */
  place(t: number, x: number, z: number, face?: FaceTarget): this {
    this.pos.push({ t: t - 1e-4, x: this.lastPos().x, z: this.lastPos().z });
    this.pos.push({ t, x, z });
    if (face !== undefined) this.face(t, face, true);
    return this;
  }

  /** walk through points at `speed` units/s from time t0; returns the arrival time */
  walk(t0: number, speed: number, pts: Array<[number, number]>, run = 1): number {
    let last = this.lastPos();
    this.pos.push({ t: t0, x: last.x, z: last.z });
    let t = t0;
    for (const [x, z] of pts) {
      t += Math.hypot(x - last.x, z - last.z) / speed;
      this.pos.push({ t, x, z, run });
      last = { t, x, z };
    }
    return t;
  }

  /** walk so as to arrive exactly at t1 */
  walkUntil(t0: number, t1: number, pts: Array<[number, number]>, run = 1): void {
    let len = 0;
    let last = this.lastPos();
    for (const [x, z] of pts) { len += Math.hypot(x - last.x, z - last.z); last = { t: 0, x, z }; }
    this.walk(t0, len / Math.max(0.01, t1 - t0), pts, run);
  }

  face(t: number, to: FaceTarget, snap = false): this {
    this.faces.push({ t, to });
    this.faces.sort((x, y) => x.t - y.t);
    if (snap) this.snapAt = t;
    return this;
  }
  snapAt = -10;

  show(t: number, on: boolean): this { this.shows.push({ t, on }); return this; }

  /** resting expression from time t (lines can override it while they play) */
  expr(t: number, e: Expr): this { this.exprs.push({ t, e }); this.exprs.sort((a, b) => a.t - b.t); return this; }

  withBrows(color?: number): this { this.brows = addBrows(this.parts, color); return this; }

  /** ease brows and eyes toward the wanted expression; call after animateBear */
  applyExpr(t: number, dt: number): void {
    if (!this.brows) return;
    let base: Expr = 'neutral';
    for (const k of this.exprs) if (k.t <= t) base = k.e;
    const want = EXPR[this.lineExpr ?? base];
    const p = this.brows.pose;
    const k = Math.min(1, dt * 9);
    for (const key of Object.keys(p) as Array<keyof ExprPose>) p[key] += (want[key] - p[key]) * k;
    const { l, r } = this.brows;
    l.position.y = r.position.y = 0;
    const y0 = (this.parts.eyes![0].position.y) + 0.135;
    l.position.y = y0 + p.browY - p.asym;
    r.position.y = y0 + p.browY + p.asym;
    // positive tilt lifts the inner ends (sad/worried), negative drops them (angry)
    l.rotation.z = p.tilt;
    r.rotation.z = -p.tilt;
    for (const eye of this.parts.eyes ?? []) {
      eye.scale.y *= p.eyeY; // multiplies the blink animateBear just set
      eye.scale.x = p.eyeX;
    }
  }

  private lastPos(): PosKey { return this.pos[this.pos.length - 1]; }

  update(t: number, dt: number): void {
    // visibility
    let vis = true;
    for (const s of this.shows) if (s.t <= t) vis = s.on;
    this.parts.root.visible = vis;

    // position along keys
    const keys = this.pos;
    let x = keys[0].x, z = keys[0].z, moving = false, run = 1;
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (k.t <= t) { x = k.x; z = k.z; continue; }
      const prev = keys[i - 1];
      if (prev && (prev.x !== k.x || prev.z !== k.z) && k.t - prev.t > 0.01) {
        const u = (t - prev.t) / (k.t - prev.t);
        x = lerp(prev.x, k.x, u);
        z = lerp(prev.z, k.z, u);
        moving = true;
        run = k.run ?? 1;
        const want = Math.atan2(k.x - prev.x, k.z - prev.z);
        this.parts.root.rotation.y = lerpAngle(this.parts.root.rotation.y, want, 14 * dt);
      }
      break;
    }
    const r = this.parts.root;
    r.position.x = x;
    r.position.z = z;
    r.position.y = groundAt(x, z);
    this.moving = moving;
    this.runScale = run;

    if (!moving) {
      let target: FaceTarget | null = null;
      for (const f of this.faces) if (f.t <= t) target = f.to;
      if (target !== null) {
        const ang = typeof target === 'number'
          ? target
          : (() => {
            const q = target instanceof Actor ? target.p : target;
            return Math.atan2(q.x - x, q.z - z);
          })();
        r.rotation.y = t - this.snapAt < 0.05 && t >= this.snapAt ? ang : lerpAngle(r.rotation.y, ang, 5 * dt);
      }
    }
    animateBear(this.parts, t * run, moving);
    // reset channels animateBear doesn't own, so poses never accumulate
    this.parts.head.rotation.x = 0;
    this.parts.head.rotation.y = 0;
    this.parts.armL.rotation.z = 0;
    this.parts.armR.rotation.z = 0;
    this.parts.root.rotation.x = 0;
    this.parts.root.rotation.z = 0;
  }
}

/** body language while speaking, scaled by the voice's loudness */
export function talk(a: Actor, t: number, amp: number, energy: number, excl: boolean): void {
  const P = a.parts;
  const k = amp * energy * (excl ? 1.35 : 1);
  const s = Math.sin(t * 6.3);
  const s2 = Math.sin(t * 4.1 + 1.3);
  P.head.rotation.x += -0.05 * energy + s * 0.12 * k;
  P.head.rotation.z += s2 * 0.06 * k;
  P.head.rotation.y += Math.sin(t * 1.7) * 0.12 * energy;
  P.body.position.y += k * 0.05;
  P.body.scale.y *= 1 + k * 0.025;
  if (a.moving) return;
  switch (a.style) {
    case 'grumpy': // jabbing finger, stomping weight
      P.armR.rotation.x = -1.2 - Math.abs(Math.sin(t * 7)) * 0.6 * k;
      P.armR.rotation.z = 0.2;
      P.armL.rotation.z = -0.5;
      P.armL.rotation.x = -0.3;
      P.body.rotation.x += 0.08 * energy;
      break;
    case 'excited': // both paws up and waving
      P.armL.rotation.z = -1.4 - s * 0.4 * k;
      P.armR.rotation.z = 1.4 + s * 0.4 * k;
      P.armL.rotation.x = -0.3;
      P.armR.rotation.x = -0.3;
      break;
    case 'bouncy': // little hops
      P.root.position.y += Math.abs(Math.sin(t * 7)) * 0.12 * k;
      P.armL.rotation.z = -0.6 - s * 0.3 * k;
      P.armR.rotation.z = 0.6 + s * 0.3 * k;
      break;
    case 'shy': // paws together in front, swaying
      P.armL.rotation.x = -0.8;
      P.armR.rotation.x = -0.8;
      P.armL.rotation.z = 0.35;
      P.armR.rotation.z = -0.35;
      P.body.rotation.z += Math.sin(t * 2.2) * 0.06;
      break;
    case 'wise': // one open palm, slow and steady
      P.armR.rotation.x = -0.75 - s2 * 0.25 * k;
      P.armR.rotation.z = 0.35;
      P.head.rotation.x += 0.03;
      break;
    case 'gentle':
      P.armR.rotation.x = -0.5 - s2 * 0.3 * k;
      P.armL.rotation.x = -0.4 - s * 0.2 * k;
      P.armL.rotation.z = -0.15;
      P.armR.rotation.z = 0.15;
      break;
    default: // calm: alternating hand gestures
      P.armR.rotation.x = -0.55 - Math.max(0, s) * 0.5 * k;
      P.armL.rotation.x = -0.25 - Math.max(0, -s) * 0.4 * k;
      P.armR.rotation.z = 0.2;
      P.armL.rotation.z = -0.15;
  }
}

// ------------------------------------------------------------------ camera

export interface Cam { eye: THREE.Vector3; look: THREE.Vector3; fov?: number; roll?: number; shake?: number }
export interface Shot { at: number; cam: (t: number, u: number, local: number) => Cam; name?: string }

/** camera orbiting an actor: ang 0 = in front of them, 180 = behind */
export function around(a: Actor, angDeg: number, dist: number, h: number, lookH = 1.25): Cam {
  const f = a.parts.root.rotation.y + THREE.MathUtils.degToRad(angDeg);
  const p = a.p;
  const g = groundAt(p.x, p.z);
  return { eye: V(p.x + Math.sin(f) * dist, g + h, p.z + Math.cos(f) * dist), look: V(p.x, g + lookH, p.z) };
}

let currentShot = '';
let avoidEye: (eye: THREE.Vector3) => boolean = () => false;
/** episode hook: camera positions to never use (inside walls, houses…) */
export function setCameraAvoid(fn: (eye: THREE.Vector3) => boolean): void { avoidEye = fn; }
const clearCache = new Map<string, number>();

function segDist(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const vx = bx - ax, vz = bz - az;
  const L = vx * vx + vz * vz || 1;
  const u = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / L));
  return Math.hypot(px - (ax + vx * u), pz - (az + vz * u));
}

/** how badly other characters block the view from `eye` to `subject` */
function blockage(eye: THREE.Vector3, subject: Actor, keep: Actor[]): number {
  let pen = 0;
  for (const a of registry) {
    if (a === subject || keep.includes(a) || !a.parts.root.visible || a.parts.root.parent !== subject.parts.root.parent) continue;
    const r = 0.75 * (a.parts.root.scale.x || 1) + 0.35;
    const d = segDist(a.p.x, a.p.z, eye.x, eye.z, subject.p.x, subject.p.z);
    if (d < r) pen += r - d;
  }
  return pen;
}

/**
 * Like around(), but swings the angle (once per shot, then holds it) until no
 * other character stands between the lens and the subject.
 */
export function clear(subject: Actor, angDeg: number, dist: number, h: number, lookH = 1.25, keep: Actor[] = []): Cam {
  const key = `${currentShot}|${subject.name}`;
  let off = clearCache.get(key);
  if (off === undefined) {
    let best = 0, bestPen = Infinity;
    for (const o of [0, 15, -15, 30, -30, 45, -45, 60, -60, 80, -80, 100, -100]) {
      const eye = around(subject, angDeg + o, dist, h, lookH).eye;
      const pen = blockage(eye, subject, keep) + (avoidEye(eye) ? 10 : 0);
      if (pen < bestPen - 1e-6) { bestPen = pen; best = o; }
      if (pen === 0) break;
    }
    off = best;
    clearCache.set(key, off);
  }
  return around(subject, angDeg + off, dist, h, lookH);
}

/** over `from`'s shoulder looking at `to` */
export function ots(from: Actor, to: Actor, side = 1, back = 1.7, h = 1.85, lookH = 1.3): Cam {
  const a = from.p, b = to.p;
  const dx = a.x - b.x, dz = a.z - b.z;
  const d = Math.hypot(dx, dz) || 1;
  const nx = dx / d, nz = dz / d;
  return {
    eye: V(a.x + nx * back - nz * 0.75 * side, h, a.z + nz * back + nx * 0.75 * side),
    look: V(b.x, lookH, b.z),
  };
}

export function mid(a: Actor, b: Actor, y = 1.1): THREE.Vector3 {
  return V((a.p.x + b.p.x) / 2, y, (a.p.z + b.p.z) / 2);
}

export function lerpCam(a: Cam, b: Cam, u: number): Cam {
  return {
    eye: a.eye.clone().lerp(b.eye, u),
    look: a.look.clone().lerp(b.look, u),
    fov: lerp(a.fov ?? 38, b.fov ?? 38, u),
    roll: lerp(a.roll ?? 0, b.roll ?? 0, u),
    shake: lerp(a.shake ?? 0, b.shake ?? 0, u),
  };
}

// ------------------------------------------------------------------ studio

export interface Studio {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  timeline: Timeline;
  beat: (id: string) => Beat;
}

export interface CaptionStyle { color: string; chip: string; ink?: string }

export interface EpisodeHooks {
  /** per-frame scene logic (world.update, light beams, …) */
  update: (t: number, dt: number) => void;
  actors: Actor[];
  /** maps a speaker name to an actor (narrator → null) */
  speakerActor: (speaker: string) => Actor | null;
  energy: Record<string, number>;
  shots: Shot[];
  captions: Record<string, CaptionStyle>;
  /** 2D overlay (titles, fades, flashes), drawn after captions */
  overlay: (ctx: CanvasRenderingContext2D, t: number) => void;
  music: FilmCue[];
  /** which scene to film at time t (episodes may span several locations) */
  sceneAt?: (t: number) => THREE.Scene;
  /** the game's bright storybook grade, plus a soft fill light so faces never go dull */
  pastel?: boolean;
}

// Matches the game's own CSS grade on its canvas (theme.css), a touch brighter.
const PASTEL_FILTER = 'saturate(0.96) contrast(0.95) brightness(1.06)';

export function makeStudio(scene: THREE.Scene, timeline: Timeline): Studio {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);
  configureRenderer(renderer);
  const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 400);
  const map = new Map(timeline.beats.map((b) => [b.id, b]));
  return {
    scene, camera, renderer, timeline,
    beat: (id) => {
      const b = map.get(id);
      if (!b) throw new Error(`no beat ${id}`);
      return b;
    },
  };
}

export function runFilm(studio: Studio, ep: EpisodeHooks): void {
  const { scene, camera, renderer, timeline } = studio;
  const out = document.getElementById('frame') as HTMLCanvasElement;
  const ctx = out.getContext('2d')!;
  const atmosphere = new Atmosphere({ fogShift: 4, shadowHalf: 30 });
  const shots = [...ep.shots].sort((a, b) => a.at - b.at);
  const lines = timeline.beats.filter((b) => b.speaker);
  const frames = Math.ceil(timeline.duration * FPS);
  let lastFrame = -1;
  const faceFill = ep.pastel ? new THREE.DirectionalLight(0xfff1f3, 0.95) : null;
  const ambient = ep.pastel ? new THREE.AmbientLight(0xfff4f8, 0.32) : null;

  function simulate(i: number): void {
    // actors are stateful (smoothing, dust): always step forward one frame at a time
    if (i < lastFrame) {
      lastFrame = -1;
      seed = 1234567;
    }
    const dt = 1 / FPS;
    for (let f = lastFrame + 1; f <= i; f++) {
      const t = f / FPS;
      windUniforms.uWindTime.value = t;
      ep.update(t, dt);
      for (const a of ep.actors) a.update(t, dt);
      // speakers move with their voice; listeners just breathe
      for (const b of lines) {
        if (t < b.start - 0.15 || t > b.end + 0.25) continue;
        const a = ep.speakerActor(b.speaker!);
        if (!a) continue;
        const fi = Math.floor((t - b.start) * FPS);
        const env = b.env ?? [];
        const amp = fi < 0 || fi >= env.length ? 0 : (env[fi] + (env[fi + 1] ?? env[fi]) + (env[fi - 1] ?? env[fi])) / 3;
        const ramp = clamp01(Math.min((t - b.start + 0.15) / 0.3, (b.end + 0.25 - t) / 0.3));
        talk(a, t, amp, (ep.energy[b.speaker!] ?? 1) * ramp, /!/.test(b.text ?? ''));
      }
      for (const a of ep.actors) a.pose?.(t);
      // faces: the speaker's line expression, listeners' reactions, else their resting face
      for (const a of ep.actors) a.lineExpr = null;
      for (const b of lines) {
        if (t < b.start - 0.25 || t > b.end + 0.5) continue;
        const sp = ep.speakerActor(b.speaker!);
        if (sp && b.face) sp.lineExpr = b.face;
        if (b.react) for (const a of ep.actors) if (b.react[a.name]) a.lineExpr = b.react[a.name];
      }
      for (const a of ep.actors) a.applyExpr(t, dt);
    }
    lastFrame = i;
  }

  function frame(i: number): void {
    simulate(i);
    const t = i / FPS;
    // shot list
    let si = 0;
    for (let k = 0; k < shots.length; k++) if (shots[k].at <= t) si = k;
    const shot = shots[si];
    currentShot = shot.name ?? String(si);
    const next = shots[si + 1]?.at ?? timeline.duration;
    const u = clamp01((t - shot.at) / Math.max(0.001, next - shot.at));
    const c = shot.cam(t, u, t - shot.at);
    const sh = (c.shake ?? 0) + 0.025; // a whisper of handheld life on every shot
    const eye = c.eye.clone().add(V(
      (Math.sin(t * 1.31) + Math.sin(t * 7.7) * 0.35 * (c.shake ?? 0) * 4) * sh,
      (Math.sin(t * 1.73 + 1) + Math.sin(t * 9.1) * 0.35 * (c.shake ?? 0) * 4) * sh * 0.7,
      Math.sin(t * 1.17 + 2) * sh,
    ));
    if (hilly) eye.y = Math.max(eye.y, groundAt(eye.x, eye.z) + 0.75); // never inside a hillside
    camera.position.copy(eye);
    camera.fov = c.fov ?? 38;
    camera.updateProjectionMatrix();
    camera.up.set(0, 1, 0);
    camera.lookAt(c.look);
    if (c.roll) camera.rotateZ(c.roll);
    const sc = ep.sceneAt?.(t) ?? scene;
    if (faceFill && ambient) {
      // from over the camera's shoulder, so whoever it looks at is softly lit
      sc.add(faceFill, faceFill.target, ambient);
      faceFill.position.copy(camera.position).add(V(0, 2.5, 0));
      faceFill.target.position.copy(c.look);
    }
    atmosphere.update(sc, camera, c.look);
    renderer.render(sc, camera);

    if (ep.pastel) ctx.filter = PASTEL_FILTER;
    ctx.drawImage(renderer.domElement, 0, 0, W, H);
    ctx.filter = 'none';
    drawCaption(ctx, t, lines, ep.captions);
    ep.overlay(ctx, t);
    const hud = document.getElementById('hud');
    if (hud) hud.textContent = `${t.toFixed(2)}s  frame ${i}/${frames}  shot ${shot.name ?? si}`;
  }

  async function renderMusic(): Promise<string> {
    const buf = await Music.renderFilm(ep.music, timeline.duration, 44100);
    return wavBase64(buf);
  }

  (window as any).__film = {
    frame, frames, fps: FPS, duration: timeline.duration, renderMusic, ready: true,
    where: () => ep.actors.map((a) => `${a.name} ${a.p.x.toFixed(1)},${a.p.z.toFixed(1)} face ${Math.round(THREE.MathUtils.radToDeg(a.parts.root.rotation.y))} ${a.parts.root.visible ? '' : '(hidden)'}`),
  };

  // interactive preview: play in real time unless driven by the capture script
  if (!new URLSearchParams(location.search).has('capture')) {
    const start = Number(new URLSearchParams(location.search).get('t') ?? 0);
    const t0 = performance.now() - start * 1000;
    let paused = false;
    window.addEventListener('keydown', (e) => { if (e.code === 'Space') paused = !paused; });
    const loop = (): void => {
      if (!paused) frame(Math.min(frames - 1, Math.floor(((performance.now() - t0) / 1000) * FPS)));
      requestAnimationFrame(loop);
    };
    loop();
  }
}

// ------------------------------------------------------------------ captions

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/);
  const out: string[] = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) { out.push(line); line = w; } else line = test;
  }
  if (line) out.push(line);
  return out;
}

function drawCaption(ctx: CanvasRenderingContext2D, t: number, lines: Beat[], styles: Record<string, CaptionStyle>): void {
  const b = lines.find((l) => t >= l.start - 0.12 && t <= l.end + 0.35);
  if (!b) return;
  const a = clamp01(Math.min((t - b.start + 0.12) / 0.18, (b.end + 0.35 - t) / 0.18));
  const narr = b.speaker === 'Narrator';
  const st = styles[b.speaker!] ?? { color: '#fff8ec', chip: '#8b6b4a' };
  ctx.save();
  ctx.globalAlpha = a;
  ctx.font = `${narr ? 'italic ' : ''}800 46px Nunito, "Trebuchet MS", sans-serif`;
  const maxW = 1380;
  const rows = wrap(ctx, b.text!.replace(/\*[^*]+\*\s*/g, ''), maxW);
  const lh = 60;
  let w = 0;
  for (const r of rows) w = Math.max(w, ctx.measureText(r).width);
  const padX = 46, padY = 30;
  const bw = w + padX * 2;
  const bh = rows.length * lh + padY * 2 - 10;
  const x = (W - bw) / 2;
  const y = H - 70 - bh + (1 - a) * 14;
  ctx.shadowColor = 'rgba(40,24,10,0.35)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 6;
  roundRect(ctx, x, y, bw, bh, 30);
  ctx.fillStyle = narr ? 'rgba(255,246,228,0.93)' : st.color;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.lineWidth = 5;
  ctx.strokeStyle = narr ? '#d8bf98' : st.chip;
  ctx.stroke();
  ctx.fillStyle = narr ? '#6b5236' : st.ink ?? '#3a2a1c';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  rows.forEach((r, i) => ctx.fillText(r, W / 2, y + padY + i * lh));
  if (!narr) {
    ctx.font = '900 34px Nunito, "Trebuchet MS", sans-serif';
    const name = b.speaker!;
    const nw = ctx.measureText(name).width + 44;
    roundRect(ctx, x + 34, y - 30, nw, 54, 27);
    ctx.fillStyle = st.chip;
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'left';
    // centre the name's actual ink in the chip (font 'top' metrics sit it too high)
    ctx.textBaseline = 'alphabetic';
    const m = ctx.measureText(name);
    const cy = y - 30 + 27;
    ctx.fillText(name, x + 56, cy + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2);
  }
  ctx.restore();
}

// ------------------------------------------------------------------ audio export

function wavBase64(buf: AudioBuffer): string {
  const ch = buf.numberOfChannels;
  const n = buf.length;
  const bytes = new Uint8Array(44 + n * ch * 2);
  const dv = new DataView(bytes.buffer);
  const str = (o: number, s: string): void => { for (let i = 0; i < s.length; i++) bytes[o + i] = s.charCodeAt(i); };
  str(0, 'RIFF'); dv.setUint32(4, 36 + n * ch * 2, true); str(8, 'WAVE');
  str(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, ch, true);
  dv.setUint32(24, buf.sampleRate, true); dv.setUint32(28, buf.sampleRate * ch * 2, true);
  dv.setUint16(32, ch * 2, true); dv.setUint16(34, 16, true);
  str(36, 'data'); dv.setUint32(40, n * ch * 2, true);
  const data = Array.from({ length: ch }, (_, c) => buf.getChannelData(c));
  let o = 44;
  for (let i = 0; i < n; i++) {
    for (let c = 0; c < ch; c++) {
      const v = Math.max(-1, Math.min(1, data[c][i]));
      dv.setInt16(o, v < 0 ? v * 0x8000 : v * 0x7fff, true);
      o += 2;
    }
  }
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

// ------------------------------------------------------------------ sky: clouds & mood

export interface CloudOptions {
  count?: number;
  seed?: number;
  /** 0 = bright white puffs, 1 = heavy clouds the colour of the sky's gloom */
  gloom?: number;
  height?: [number, number];
  radius?: [number, number];
  /** world-units per second the cloud field drifts */
  drift?: number;
  center?: [number, number];
}

/**
 * A ring of chunky voxel clouds around the set. They ignore fog (so they read
 * against the sky dome) and take their tint from the scene's background every
 * frame, so a gloomy sky gets grey clouds and a sunny one gets white.
 */
export function addClouds(scene: THREE.Scene, o: CloudOptions = {}): (t: number) => void {
  let sd = o.seed ?? 11;
  const rnd = (): number => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  const [h0, h1] = o.height ?? [26, 46];
  const [r0, r1] = o.radius ?? [70, 140];
  const [cx, cz] = o.center ?? [0, 0];
  const lit = new THREE.MeshLambertMaterial({ color: 0xffffff, fog: false, transparent: true, opacity: 0.95, emissive: 0xffffff, emissiveIntensity: 0.55 });
  const shade = lit.clone();
  const group = new THREE.Group();
  group.name = '__clouds';
  const box = new THREE.BoxGeometry(1, 1, 1);
  const clouds: Array<{ g: THREE.Group; a: number; r: number; y: number; sp: number }> = [];
  for (let i = 0; i < (o.count ?? 16); i++) {
    const g = new THREE.Group();
    const w = 10 + rnd() * 14;
    const n = 4 + Math.floor(rnd() * 4);
    for (let k = 0; k < n; k++) {
      const bw = w * (0.35 + rnd() * 0.4);
      const bh = 2.2 + rnd() * 3.2;
      const m = new THREE.Mesh(box, k === 0 ? shade : lit);
      m.scale.set(bw, k === 0 ? bh * 0.7 : bh, 5 + rnd() * 6);
      m.position.set((rnd() - 0.5) * w * 0.8, k === 0 ? -bh * 0.35 : rnd() * 2.4, (rnd() - 0.5) * 4);
      m.castShadow = false;
      m.receiveShadow = false;
      g.add(m);
    }
    const a = (i / (o.count ?? 16)) * Math.PI * 2 + rnd() * 0.5;
    const r = r0 + rnd() * (r1 - r0);
    const y = h0 + rnd() * (h1 - h0);
    g.position.set(cx + Math.cos(a) * r, y, cz + Math.sin(a) * r);
    g.lookAt(cx, y, cz);
    group.add(g);
    clouds.push({ g, a, r, y, sp: (0.6 + rnd() * 0.8) * (o.drift ?? 1) });
  }
  scene.add(group);
  const white = new THREE.Color(0xffffff);
  const tmp = new THREE.Color();
  return (t: number) => {
    const bg = scene.background instanceof THREE.Color ? scene.background : white;
    const gloom = o.gloom ?? 0;
    tmp.copy(white).lerp(bg, 0.12 + gloom * 0.55);
    if (gloom > 0) tmp.multiplyScalar(1 - gloom * 0.12);
    lit.color.copy(tmp);
    lit.emissive.copy(tmp);
    shade.color.copy(tmp).multiplyScalar(0.86);
    shade.emissive.copy(tmp).multiplyScalar(0.8);
    for (const c of clouds) {
      const a = c.a + (t * c.sp) / c.r;
      c.g.position.set(cx + Math.cos(a) * c.r, c.y, cz + Math.sin(a) * c.r);
    }
  };
}

export interface MoodKey {
  t: number;
  sky: number;
  hemi?: number;
  sun?: number;
  /** extra fog pull-in (negative = thicker) */
  fog?: number;
}

/**
 * Story-driven sky: eases the background (and so the sky dome and fog colour),
 * the hemisphere fill and the sun between keyed moods.
 */
export function moodTrack(scene: THREE.Scene, keys: MoodKey[], fade = 2.5): (t: number) => void {
  let hemi: THREE.HemisphereLight | null = null;
  let sun: THREE.DirectionalLight | null = null;
  scene.traverse((o) => {
    if (!hemi && (o as THREE.HemisphereLight).isHemisphereLight) hemi = o as THREE.HemisphereLight;
    if (!sun && (o as THREE.DirectionalLight).isDirectionalLight) sun = o as THREE.DirectionalLight;
  });
  const h0 = (hemi as THREE.HemisphereLight | null)?.intensity ?? 1;
  const s0 = (sun as THREE.DirectionalLight | null)?.intensity ?? 1;
  const fog = scene.fog as THREE.Fog | null;
  const fogNear0 = fog?.near ?? 0;
  const fogFar0 = fog?.far ?? 0;
  const a = new THREE.Color();
  const b = new THREE.Color();
  return (t: number) => {
    let i = 0;
    for (let k = 0; k < keys.length; k++) if (keys[k].t <= t) i = k;
    const cur = keys[i];
    const prev = keys[Math.max(0, i - 1)];
    const u = ease(clamp01((t - cur.t) / fade));
    a.set(prev.sky);
    b.set(cur.sky);
    const bg = (scene.background as THREE.Color) ?? new THREE.Color();
    bg.copy(a.lerp(b, u));
    scene.background = bg;
    if (fog) {
      fog.color.copy(bg);
      const f = lerp(prev.fog ?? 0, cur.fog ?? 0, u);
      fog.near = fogNear0 + f * 0.5;
      fog.far = fogFar0 + f;
    }
    if (hemi) (hemi as THREE.HemisphereLight).intensity = h0 * lerp(prev.hemi ?? 1, cur.hemi ?? 1, u);
    if (sun) (sun as THREE.DirectionalLight).intensity = s0 * lerp(prev.sun ?? 1, cur.sun ?? 1, u);
  };
}
