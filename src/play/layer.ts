// The play layer: keepsakes, living-world props and companion chatter, laid
// over any chapter without the chapter knowing. It never blocks movement or
// opens dialogue, and story actions always come first.
//
// Gesture movement (settling on a bench) is an offset
// that beginFrame() removes and endFrame() re-applies, so the chapter's own
// movement code always sees true positions and nothing can jump afterwards.
import * as THREE from 'three';
import type { BearParts } from '../bear';
import {
  PLAY, CHATTER, SPOTTED, PROP_LINES, ALL_KEEPSAKES, REPLAY_ONLY,
  type ChapterPlay, type CompanionName, type Keepsake, type PlayMode, type Prop, type PropKind,
} from './content';
import { keepsakeModel, propModel } from './models';
import { addKeepsake, hasKeepsake, keepsakeCount } from './book';

export interface PlayFrame {
  mode: PlayMode;
  scene: THREE.Scene;
  actor: BearParts;
  companion: { rig: BearParts; name: CompanionName } | null;
  camera: THREE.Camera;
  dt: number; t: number; moving: boolean;
  /** player has control: no dialogue, choice, ending or scripted phase */
  free: boolean;
  /** the story is offering its own action here */
  storyPrompt: boolean;
  reducedMotion: boolean;
  /** wandering a finished chapter rather than playing its story */
  wandering: boolean;
  groundY: (x: number, z: number) => number;
}
interface Sounds { pickup: () => void; soft: () => void; bell: () => void }
interface Treasure { k: Keepsake; root: THREE.Group; item: THREE.Group; taken: boolean; spotted: boolean; pop: number }
interface LiveProp { p: Prop; root: THREE.Group; act: number; used: number; flown: number }
interface Stage { root: THREE.Group; treasures: Treasure[]; props: LiveProp[] }
type Gesture = { kind: 'point' | 'sit'; t: number; env: number; leaving: boolean; target?: THREE.Vector3; yaw: number };

const GESTURE_TIME = { point: 2.4, sit: Infinity };
const smooth = (u: number): number => { const c = Math.min(1, Math.max(0, u)); return c * c * (3 - 2 * c); };
function turn(a: number, b: number, k: number): number {
  const d = Math.atan2(Math.sin(b - a), Math.cos(b - a));
  return a + d * k;
}

const ringGeo = new THREE.TorusGeometry(0.62, 0.06, 6, 24);
const ringMat = new THREE.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, opacity: 0.8 });
const heartGeo = new THREE.BoxGeometry(0.14, 0.14, 0.14);

/** Hide loose rocks and bushes (tagged `clutter`) that overlap a prop's
 *  footprint. Some chapters scatter their verge rocks at random, so one can
 *  land right on a bench that the play layer drops in later. */
function clearClutter(scene: THREE.Scene, prop: THREE.Object3D): void {
  prop.updateMatrixWorld(true);
  const zone = new THREE.Box3().setFromObject(prop).expandByScalar(0.35);
  const box = new THREE.Box3();
  scene.traverse((o) => {
    if (!o.userData.clutter || !o.visible) return;
    box.setFromObject(o);
    if (box.min.x < zone.max.x && box.max.x > zone.min.x && box.min.z < zone.max.z && box.max.z > zone.min.z) o.visible = false;
  });
}

export class PlayLayer {
  private stages = new Map<PlayMode, Stage>();
  private near: LiveProp | null = null;
  private gesture: Gesture | null = null;
  private applied: { root: THREE.Object3D; v: THREE.Vector3 }[] = [];
  private puffs: { m: THREE.Mesh; life: number; v: THREE.Vector3 }[] = [];
  private bubble = document.createElement('div');
  private bubbleAt: THREE.Object3D | null = null;
  private bubbleLeft = 0;
  private chatIn = 18;
  private chatN = 0;
  private last: PlayFrame | null = null;
  private toast = document.createElement('div');
  private toastTimer = 0;
  private lastMode: PlayMode | null = null;

  constructor(private sounds: Sounds, private onCount: () => void) {
    this.bubble.className = 'play-bubble';
    this.toast.id = 'keepsake-toast';
    this.toast.setAttribute('role', 'status');
    document.body.append(this.bubble, this.toast);
  }

  /** Remove last frame's gesture offsets before the chapter moves anyone. */
  beginFrame(): void {
    for (const a of this.applied) a.root.position.sub(a.v);
    this.applied.length = 0;
  }

  /** Leaving the chapters (map, ending): clear everything on screen. */
  hide(): void {
    this.beginFrame();
    this.gesture = null;
    this.near = null;
    this.last = null;
    this.lastMode = null;
    this.bubbleLeft = 0;
    this.bubble.classList.remove('show');
  }

  prompt(): { text: string; button: string } | null {
    if (!this.near || this.busy()) return null;
    const l = PROP_LINES[this.near.p.kind];
    return { text: l.prompt, button: l.button };
  }

  /** The action key: true if this layer used it. */
  act(): boolean {
    const f = this.last;
    const pr = this.near;
    if (!f || !f.free || f.storyPrompt || !pr || this.busy() || pr.act > 0) return false;
    this.gesture = null; // a companion's pointing never holds Christian up
    const { kind } = pr.p;
    if (kind === 'bush' && pr.used >= 5) { this.say(f.actor.root, 'All picked! More will grow.'); return true; }
    const lines = PROP_LINES[kind].lines;
    this.say(f.actor.root, lines[pr.used % lines.length]);
    pr.used++;
    if (kind === 'bell') this.sounds.bell(); else this.sounds.soft();
    if (kind === 'bench') {
      this.gesture = { kind: 'sit', t: 0, env: 0, leaving: false, yaw: pr.root.rotation.y, target: pr.root.position.clone() };
      return true;
    }
    pr.act = 1.4;
    const toProp = Math.atan2(pr.root.position.x - f.actor.root.position.x, pr.root.position.z - f.actor.root.position.z);
    f.actor.root.rotation.y = turn(f.actor.root.rotation.y, toProp, 1);
    if (kind === 'hedgehog' || kind === 'squirrel' || kind === 'duckling') {
      pr.root.rotation.y = toProp + Math.PI;
      this.burst(f.scene, pr.root.position, 0xf29bb0);
    } else if (kind === 'flowers') this.burst(f.scene, pr.root.position, 0xffe3a0);
    return true;
  }

  /** pointing is only the companion's, so Christian may still act */
  private busy(): boolean { return !!this.gesture && this.gesture.kind !== 'point'; }

  private inReach(f: PlayFrame, tr: Treasure): boolean { return !f.wandering || !REPLAY_ONLY.has(tr.k.id); }
  private pointAt(f: PlayFrame, tr: Treasure, line: string): void {
    this.gesture = { kind: 'point', t: 0, env: 0, leaving: false, yaw: 0, target: tr.root.position.clone() };
    this.say(f.companion!.rig.root, line);
  }

  private stage(f: PlayFrame): Stage {
    let s = this.stages.get(f.mode);
    if (s) return s;
    const def: ChapterPlay = PLAY[f.mode];
    const root = new THREE.Group();
    root.name = 'play-layer';
    const treasures = def.keepsakes.map((k): Treasure => {
      const g = new THREE.Group();
      g.position.set(k.x, f.groundY(k.x, k.z), k.z);
      const item = keepsakeModel(k.shape, k.color);
      item.scale.setScalar(0.85);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.34; // clears raised planks and paving
      g.add(item, ring);
      root.add(g);
      const taken = hasKeepsake(k.id);
      g.visible = !taken;
      return { k, root: g, item, taken, spotted: false, pop: 0 };
    });
    const props = def.props.map((p): LiveProp => {
      const g = propModel(p.kind);
      g.position.set(p.x, f.groundY(p.x, p.z), p.z);
      if (p.kind !== 'bench' && p.kind !== 'bell' && p.kind !== 'bush') g.rotation.y = p.x * 1.7;
      // solid: the shared rig keeps Christian out of anything with a radius
      const solid = { bench: 0.7, bell: 0.6, bush: 0.6, hedgehog: 0.35, squirrel: 0.3, duckling: 0.3 } as Partial<Record<PropKind, number>>;
      const radius = solid[p.kind];
      if (radius) { g.userData.characterRadius = radius; f.scene.add(g); } else root.add(g);
      if (p.kind === 'bench') clearClutter(f.scene, g);
      return { p, root: g, act: 0, used: 0, flown: 0 };
    });
    f.scene.add(root);
    s = { root, treasures, props };
    this.stages.set(f.mode, s);
    return s;
  }

  /** After the chapter has moved and animated everyone. */
  endFrame(f: PlayFrame): void {
    this.last = f;
    if (this.lastMode !== f.mode) {
      this.lastMode = f.mode;
      this.gesture = null;
      this.chatIn = 18;
      for (const tr of this.stages.get(f.mode)?.treasures ?? []) tr.spotted = false;
      for (const pr of this.stages.get(f.mode)?.props ?? []) pr.used = 0;
    }
    const s = this.stage(f);
    const p = f.actor.root.position;
    this.updateTreasures(s, f, p);
    this.updateProps(s, f, p);
    this.companionTalk(s, f, p);
    this.applyGesture(f);
    this.updatePuffs(f.dt);
    this.placeBubble(f);
  }

  private updateTreasures(s: Stage, f: PlayFrame, p: THREE.Vector3): void {
    for (const tr of s.treasures) {
      if (tr.taken) {
        if (tr.pop > 0) {
          tr.pop = Math.max(0, tr.pop - f.dt * 1.3);
          tr.item.position.y += f.dt * 2.2;
          tr.item.rotation.y += f.dt * 12;
          tr.item.scale.setScalar(0.85 * tr.pop);
          if (tr.pop === 0) tr.root.visible = false;
        }
        continue;
      }
      tr.item.position.y = 0.95 + (f.reducedMotion ? 0 : Math.sin(f.t * 2.2 + tr.k.x) * 0.12);
      if (!f.reducedMotion) tr.item.rotation.y = f.t * 1.1;
      if (f.free && Math.hypot(tr.k.x - p.x, tr.k.z - p.z) < 1.5) {
        tr.taken = true;
        tr.pop = 1;
        addKeepsake(tr.k.id);
        this.sounds.pickup();
        this.burst(f.scene, tr.root.position, 0xffe08a);
        this.showToast(tr.k, s);
        this.onCount();
      }
    }
  }

  private showToast(k: Keepsake, s: Stage): void {
    const n = s.treasures.filter((x) => x.taken).length;
    const name = document.createElement('strong');
    name.textContent = k.name;
    const verse = document.createElement('span');
    verse.textContent = `“${k.verse}”`;
    const foot = document.createElement('em');
    foot.textContent = `${k.ref} (ESV) · ${n} of ${s.treasures.length} here`
      + (keepsakeCount() === ALL_KEEPSAKES.length ? ' · Every keepsake found!' : '');
    this.toast.replaceChildren(name, verse, foot);
    this.toast.classList.add('show');
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => this.toast.classList.remove('show'), 8000);
  }

  private updateProps(s: Stage, f: PlayFrame, p: THREE.Vector3): void {
    this.near = null;
    let best = 2.6;
    const move = f.reducedMotion ? 0.3 : 1;
    for (const pr of s.props) {
      const d = Math.hypot(pr.p.x - p.x, pr.p.z - p.z);
      pr.act = Math.max(0, pr.act - f.dt);
      const wave = pr.act > 0 ? Math.sin((1.4 - pr.act) * 11) * (pr.act / 1.4) : 0;
      if (pr.p.kind === 'birds') {
        const away = d < 3.6;
        pr.flown += ((away ? 1 : 0) - pr.flown) * Math.min(1, f.dt * (away ? 2.6 : 0.5));
        let i = 0;
        for (const b of pr.root.children) {
          const u = pr.flown;
          const a = i * 1.9;
          const r = 0.5 + i * 0.22 + u * 2.6;
          b.position.set(Math.cos(a) * r, u * (3.4 + i * 0.5) + Math.abs(Math.sin(f.t * 3 + i * 2)) * 0.06 * (1 - u), Math.sin(a) * r);
          const flap = u > 0.04 && !f.reducedMotion ? Math.sin(f.t * 22 + i) * 0.9 : 0;
          let side = -1;
          for (const c of b.children) if (c.name === 'wing') { c.rotation.z = flap * side; side = 1; }
          i++;
        }
        continue;
      }
      if (pr.p.kind === 'fireflies') {
        const follow = d < 5 ? 0.55 : 0;
        pr.flown += (follow - pr.flown) * Math.min(1, f.dt * 1.5);
        pr.root.position.x = pr.p.x + (p.x - pr.p.x) * pr.flown;
        pr.root.position.z = pr.p.z + (p.z - pr.p.z) * pr.flown;
        pr.root.children.forEach((m, i) => {
          const q = f.t * move * (0.5 + i * 0.05) + i * 2.1;
          m.position.set(Math.sin(q) * 1.4, 1 + Math.sin(q * 1.6) * 0.5, Math.cos(q * 0.9) * 1.4);
        });
        continue;
      }
      if (f.free && !f.storyPrompt && d < best) { best = d; this.near = pr; }
      for (const c of pr.root.children) {
        if (c.name === 'pet') {
          c.position.y = Math.abs(wave) * 0.45 * move;
          c.scale.y = 1 + (f.reducedMotion ? 0 : Math.sin(f.t * 2.4 + pr.p.x) * 0.025);
        } else if (c.name === 'bell') c.rotation.z = wave * 0.7;
        else if (c.name === 'flower') c.rotation.z = wave * 0.35;
      }
      if (pr.p.kind === 'bush') {
        let i = 0;
        for (const c of pr.root.children) if (c.name === 'fruit') c.visible = i++ >= pr.used;
      }
    }
  }

  private companionTalk(s: Stage, f: PlayFrame, p: THREE.Vector3): void {
    if (!f.free || !f.companion || this.gesture) return;
    for (const tr of s.treasures) {
      if (tr.taken || tr.spotted || !this.inReach(f, tr) || tr.root.position.distanceTo(p) > 11) continue;
      tr.spotted = true;
      this.pointAt(f, tr, SPOTTED[this.chatN++ % SPOTTED.length]);
      return;
    }
    if (f.moving) this.chatIn -= f.dt;
    if (this.chatIn <= 0 && this.bubbleLeft <= 0) {
      this.chatIn = 32;
      const lines = CHATTER[f.companion.name];
      this.say(f.companion.rig.root, lines[this.chatN++ % lines.length]);
    }
  }

  private offset(root: THREE.Object3D, v: THREE.Vector3): void {
    root.position.add(v);
    this.applied.push({ root, v });
  }

  private applyGesture(f: PlayFrame): void {
    const g = this.gesture;
    if (!g) return;
    // walking, a conversation or losing the companion eases the pose away
    if (f.moving || !f.free || (g.kind !== 'sit' && !f.companion)) g.leaving = true;
    g.t += f.dt;
    if (g.t > GESTURE_TIME[g.kind] - 0.35) g.leaving = true;
    g.env = Math.min(1, Math.max(0, g.env + (g.leaving ? -1 : 1) * f.dt / 0.35));
    const e = smooth(g.env);
    const c = f.actor;
    const cp = c.root.position;
    if (g.kind === 'sit' && g.target) {
      this.offset(c.root, new THREE.Vector3(g.target.x - cp.x, 0.2, g.target.z + 0.1 - cp.z).multiplyScalar(e));
      c.root.rotation.y = turn(c.root.rotation.y, g.yaw, e);
      c.legL.rotation.x = -1.35 * e;
      c.legR.rotation.x = -1.35 * e;
    } else if (f.companion) {
      const o = f.companion.rig;
      const op = o.root.position;
      if (g.kind === 'point' && g.target) {
        o.root.rotation.y = turn(o.root.rotation.y, Math.atan2(g.target.x - op.x, g.target.z - op.z), e);
        o.armR.rotation.x = -1.5 * e;
      }
    }
    if (g.leaving && g.env === 0) this.gesture = null;
  }

  private burst(scene: THREE.Scene, at: THREE.Vector3, color: number): void {
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(heartGeo, new THREE.MeshBasicMaterial({ color, transparent: true }));
      m.position.set(at.x, at.y + 1.3, at.z);
      m.rotation.z = Math.PI / 4;
      scene.add(m);
      const a = (i / 8) * Math.PI * 2;
      this.puffs.push({ m, life: 1, v: new THREE.Vector3(Math.cos(a) * 1.1, 1.3 + (i % 3) * 0.3, Math.sin(a) * 1.1) });
    }
  }
  private updatePuffs(dt: number): void {
    this.puffs = this.puffs.filter((q) => {
      q.life -= dt * 1.1;
      q.m.position.addScaledVector(q.v, dt);
      const mat = q.m.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, q.life);
      if (q.life > 0) return true;
      q.m.removeFromParent();
      mat.dispose();
      return false;
    });
  }

  private say(at: THREE.Object3D, text: string): void {
    this.bubble.textContent = text;
    this.bubbleAt = at;
    this.bubbleLeft = 2.2 + text.length * 0.045;
  }
  private placeBubble(f: PlayFrame): void {
    this.bubbleLeft -= f.dt;
    const on = this.bubbleLeft > 0 && f.free && !!this.bubbleAt?.parent;
    this.bubble.classList.toggle('show', on);
    if (!on || !this.bubbleAt) return;
    const v = this.bubbleAt.position.clone();
    v.y += 3;
    v.project(f.camera);
    const w = this.bubble.offsetWidth / 2 + 8;
    const x = Math.min(window.innerWidth - w, Math.max(w, (v.x + 1) / 2 * window.innerWidth));
    const y = Math.max(70, (1 - v.y) / 2 * window.innerHeight);
    this.bubble.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
  }
}
