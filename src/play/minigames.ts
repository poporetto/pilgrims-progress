// Gentle chapter mini-games. Nothing here can be lost: mistakes simply let the
// player try again, and every panel has a Skip.
import * as THREE from 'three';
import './minigames.css';

export type MiniKind = 'telescope' | 'song' | 'footholds';

function el<T extends keyof HTMLElementTagNameMap>(tag: T, cls = '', text = ''): HTMLElementTagNameMap[T] {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
}

export interface FootholdControls { step: (lane: -1 | 0 | 1) => void; skip: () => void }

const BIRDS = [
  { name: 'Blue bird', color: '#8fc4e4', note: 523 },
  { name: 'Pink bird', color: '#f3afc0', note: 587 },
  { name: 'Yellow bird', color: '#f4d77e', note: 659 },
  { name: 'Green bird', color: '#a5d3a0', note: 784 },
];
const TUNE = [0, 2, 1, 3, 2, 0];
const ROUNDS = [3, 4, 6];
const birdSvg = (c: string): string => `<svg viewBox="0 0 60 52" aria-hidden="true"><rect x="10" y="16" width="32" height="26" rx="8" fill="${c}"/><rect x="28" y="6" width="22" height="22" rx="7" fill="${c}"/><rect x="48" y="15" width="9" height="7" rx="2" fill="#eb9f55"/><rect x="40" y="13" width="4" height="5" rx="1" fill="#43352d"/><rect x="12" y="23" width="19" height="12" rx="5" fill="#fff" opacity=".45"/><rect x="18" y="41" width="4" height="8" fill="#eb9f55"/><rect x="29" y="41" width="4" height="8" fill="#eb9f55"/></svg>`;

export class MiniGames {
  kind: MiniKind | null = null;
  mode = '';
  /** the view through the shepherds' glass */
  readonly scopeCam = new THREE.PerspectiveCamera(20, 1, 0.5, 400);

  private panel = el('div');
  private title = el('strong');
  private hint = el('span');
  private bar = el('div', 'mg-bar');
  private fill = el('i');
  private pads = el('div', 'mg-pads');
  private skipBtn = el('button', 'mg-skip', 'Skip');
  private scope = el('div');
  private done: (() => void) | null = null;
  private run = 0;

  // telescope
  private off = { x: 0, y: 0 };
  private drag: { id: number; x: number; y: number } | null = null;
  private focus = 0;
  private clock = 0;
  private won = 0;
  private from = new THREE.Vector3();
  private to = new THREE.Vector3();
  // song
  private round = 0;
  private heard = 0;
  private listening = false;
  private tries = 0;
  private onBird: (i: number) => void = () => {};
  // footholds
  private feet: FootholdControls | null = null;

  constructor(
    private canvas: HTMLCanvasElement,
    private sfx: { note: (f: number) => void; win: () => void; soft: () => void },
  ) {
    this.panel.id = 'mini-game';
    this.panel.setAttribute('role', 'group');
    this.scope.id = 'mini-scope';
    this.bar.append(this.fill);
    this.hint.setAttribute('aria-live', 'polite');
    this.skipBtn.type = 'button';
    this.skipBtn.addEventListener('click', () => { this.skipBtn.blur(); this.skip(); });
    this.panel.append(this.title, this.hint, this.bar, this.pads, this.skipBtn);
    document.body.append(this.scope, this.panel);
    this.scope.addEventListener('pointerdown', (e) => {
      this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY };
      try { this.scope.setPointerCapture(e.pointerId); } catch { /* not an active pointer */ }
    });
    this.scope.addEventListener('pointermove', (e) => {
      if (!this.drag || e.pointerId !== this.drag.id) return;
      const k = 2.4 / Math.min(window.innerWidth, window.innerHeight);
      this.nudge((this.drag.x - e.clientX) * k, (e.clientY - this.drag.y) * k);
      this.drag.x = e.clientX;
      this.drag.y = e.clientY;
    });
    for (const type of ['pointerup', 'pointercancel'] as const) {
      this.scope.addEventListener(type, (e) => { if (this.drag?.id === e.pointerId) this.drag = null; });
    }
  }

  get active(): boolean { return this.kind !== null; }

  private open(kind: MiniKind, mode: string, title: string, hint: string, done: (() => void) | null): void {
    this.run++;
    this.kind = kind;
    this.mode = mode;
    this.done = done;
    this.title.textContent = title;
    this.hint.textContent = hint;
    this.pads.replaceChildren();
    this.setBar(0);
    this.bar.classList.remove('tired');
    this.panel.className = `show ${kind}`;
    this.panel.setAttribute('aria-label', title);
    document.body.classList.add('mini-open');
  }

  /** Put everything away without finishing (the player left the chapter). */
  cancel(): void {
    this.run++;
    this.kind = null;
    this.done = null;
    this.feet = null;
    this.drag = null;
    this.panel.className = '';
    this.scope.classList.remove('show');
    this.canvas.style.filter = '';
    document.body.classList.remove('mini-open');
  }
  private finish(): void {
    const d = this.done;
    this.cancel();
    d?.();
  }
  private skip(): void {
    if (this.kind === 'footholds') this.feet?.skip();
    else this.finish();
  }
  private setBar(u: number): void { this.fill.style.width = `${Math.round(Math.min(1, Math.max(0, u)) * 100)}%`; }
  private pad(label: string, html: string, fn: () => void): HTMLButtonElement {
    const b = el('button');
    b.type = 'button';
    b.innerHTML = html;
    b.setAttribute('aria-label', label);
    b.addEventListener('click', () => { b.blur(); fn(); });
    this.pads.append(b);
    return b;
  }

  /** Keys the open game wants; true if it used this one. */
  key(code: string): boolean {
    if (this.kind === 'song') {
      const i = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(code);
      if (i >= 0) { this.sing(i); return true; }
    }
    if (this.kind === 'footholds') {
      const lane = code === 'KeyW' || code === 'ArrowUp' ? -1
        : code === 'KeyS' || code === 'ArrowDown' ? 1
        : code === 'KeyD' || code === 'ArrowRight' || code === 'KeyE' || code === 'Space' ? 0 : null;
      if (lane !== null) { this.feet?.step(lane); return true; }
    }
    return false;
  }

  // ------------------------------------------------------------ telescope

  telescope(mode: string, from: THREE.Vector3, to: THREE.Vector3, done: () => void): void {
    this.open('telescope', mode, 'Steady the glass', 'Drag, or use the arrow keys, to keep the City in the middle', done);
    this.from.copy(from);
    this.to.copy(to);
    this.off = { x: 0.75, y: 0.4 };
    this.focus = 0;
    this.clock = 0;
    this.won = 0;
    this.scope.classList.add('show');
    this.aim();
  }
  private nudge(x: number, y: number): void {
    if (this.won) return;
    this.off.x = Math.min(1.1, Math.max(-1.1, this.off.x + x));
    this.off.y = Math.min(0.8, Math.max(-0.8, this.off.y + y));
  }
  private aim(): void {
    const aspect = window.innerWidth / window.innerHeight;
    const half = Math.tan(THREE.MathUtils.degToRad(17)); // fits the lens on the short side
    this.scopeCam.aspect = aspect;
    this.scopeCam.fov = THREE.MathUtils.radToDeg(2 * Math.atan(aspect < 1 ? half / aspect : half));
    // the lens sits a little above the middle of the screen, clear of the panel
    this.scopeCam.setViewOffset(window.innerWidth, window.innerHeight, 0, window.innerHeight * 0.11, window.innerWidth, window.innerHeight);
    this.scopeCam.position.copy(this.from);
    // off is measured in lens half-widths
    this.scopeCam.lookAt(this.to.x, this.to.y + this.off.y * 14, this.to.z + this.off.x * 14);
  }
  /** input is the shared movement vector; only the telescope needs frames */
  update(dt: number, input: { x: number; z: number }, reducedMotion: boolean): void {
    if (this.kind !== 'telescope') return;
    this.clock += dt;
    if (this.won > 0) {
      this.won += dt;
      this.off.x *= Math.exp(-dt * 4);
      this.off.y *= Math.exp(-dt * 4);
      this.canvas.style.filter = '';
      this.aim();
      if (this.won > 2.6) this.finish();
      return;
    }
    // trembling paws calm down as the view settles
    const shake = (reducedMotion ? 0.12 : 0.3) * (1 - this.focus * 0.6);
    const c = this.clock;
    this.nudge(
      (Math.sin(c * 1.3) + Math.sin(c * 2.9 + 1) * 0.6) * shake * dt + input.x * dt * 1.1,
      (Math.cos(c * 1.7) + Math.sin(c * 3.3) * 0.5) * shake * 0.6 * dt - input.z * dt * 0.9,
    );
    const d = Math.hypot(this.off.x, this.off.y);
    if (d < 0.34) this.focus = Math.min(1, this.focus + dt / 4);
    this.setBar(this.focus);
    const blur = Math.min(9, d * 7) * (1 - this.focus * 0.75) + (1 - this.focus) * 2;
    this.canvas.style.filter = `blur(${blur.toFixed(1)}px)`;
    this.aim();
    if (this.focus >= 1) {
      this.won = 0.01;
      this.hint.textContent = 'There! The Celestial City!';
      this.sfx.win();
    }
  }

  // ------------------------------------------------------------ bird song

  song(mode: string, onBird: (i: number) => void, done: () => void): void {
    this.open('song', mode, 'Sing with the birds', 'Listen…', done);
    this.onBird = onBird;
    this.round = 0;
    BIRDS.forEach((b, i) => {
      this.pad(`${b.name}, key ${i + 1}`, `${birdSvg(b.color)}<kbd>${i + 1}</kbd>`, () => this.sing(i));
    });
    this.playRound();
  }
  private flash(i: number): void {
    const b = this.pads.children[i] as HTMLElement | undefined;
    if (!b) return;
    b.classList.remove('lit');
    void b.offsetWidth;
    b.classList.add('lit');
    this.sfx.note(BIRDS[i].note);
    this.onBird(i);
  }
  private playRound(lead = 700): void {
    const run = this.run;
    const n = ROUNDS[this.round];
    this.listening = false;
    this.heard = 0;
    this.hint.textContent = this.tries > 0 ? 'Listen once more…' : 'Listen…';
    this.setBar(this.round / ROUNDS.length);
    const gap = this.tries > 1 ? 780 : 560;
    for (let k = 0; k < n; k++) {
      window.setTimeout(() => { if (run === this.run) this.flash(TUNE[k]); }, lead + k * gap);
    }
    window.setTimeout(() => {
      if (run !== this.run) return;
      this.listening = true;
      this.hint.textContent = 'Your turn! Tap the birds in the same order';
    }, lead + n * gap);
  }
  private sing(i: number): void {
    if (this.kind !== 'song' || !this.listening) return;
    this.flash(i);
    if (TUNE[this.heard] !== i) {
      this.tries++;
      this.listening = false;
      this.hint.textContent = 'Nearly! Let’s hear it again';
      this.playRound(1300);
      return;
    }
    this.heard++;
    if (this.heard < ROUNDS[this.round]) return;
    this.listening = false;
    this.tries = 0;
    this.round++;
    this.setBar(this.round / ROUNDS.length);
    const run = this.run;
    if (this.round < ROUNDS.length) {
      this.hint.textContent = 'Lovely!';
      window.setTimeout(() => { if (run === this.run) this.playRound(500); }, 900);
      return;
    }
    this.hint.textContent = 'What a song!';
    window.setTimeout(() => { if (run === this.run) this.sfx.win(); }, 400);
    window.setTimeout(() => { if (run === this.run) this.finish(); }, 1900);
  }

  // ------------------------------------------------------------ footholds

  footholds(mode: string, controls: FootholdControls): void {
    this.open('footholds', mode, 'Find a firm foothold', 'Choose the pale, flat stone. Rest when you are out of breath', null);
    this.feet = controls;
    this.pad('Upper stone', '<span>Upper</span><kbd>W</kbd>', () => controls.step(-1));
    this.pad('Middle stone', '<span>Middle</span><kbd>D</kbd>', () => controls.step(0));
    this.pad('Lower stone', '<span>Lower</span><kbd>S</kbd>', () => controls.step(1));
  }
  footholdState(breath: number, note: string | null): void {
    if (this.kind !== 'footholds') return;
    this.setBar(breath);
    this.bar.classList.toggle('tired', breath < 0.5);
    if (note && this.hint.textContent !== note) this.hint.textContent = note;
  }
}
