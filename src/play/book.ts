// The Keepsake Book: every treasure found so far, chapter by chapter.
import * as THREE from 'three';
import { PLAY, ALL_KEEPSAKES, REPLAY_ONLY, type ChapterPlay, type Keepsake } from './content';
import { keepsakeModel } from './models';
import './play.css';

const KEY = 'pilgrims-progress-keepsakes';
const found = new Set<string>();
try {
  const raw = JSON.parse(window.localStorage.getItem(KEY) ?? '[]') as unknown;
  if (Array.isArray(raw)) for (const id of raw) if (ALL_KEEPSAKES.some((k) => k.id === id)) found.add(id as string);
} catch { /* a blocked or damaged store just starts an empty book */ }

export const hasKeepsake = (id: string): boolean => found.has(id);
export const keepsakeCount = (): number => found.size;
export function addKeepsake(id: string): void {
  found.add(id);
  try { window.localStorage.setItem(KEY, JSON.stringify([...found])); } catch { /* kept in memory only */ }
}
export function clearKeepsakes(): void {
  found.clear();
  try { window.localStorage.removeItem(KEY); } catch { /* nothing stored */ }
}

const pictures = new Map<string, string>();
/** Photograph any keepsakes not yet pictured, with one short-lived renderer. */
function takePictures(items: Keepsake[]): void {
  const todo = items.filter((k) => !pictures.has(k.id));
  if (!todo.length) return;
  let r: THREE.WebGLRenderer;
  try {
    r = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
  } catch { return; } // names and thoughts still show
  r.setSize(144, 144, false);
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8c4b0, 2.2));
  const sun = new THREE.DirectionalLight(0xfff0d8, 1.8);
  sun.position.set(2, 4, 5);
  scene.add(sun);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 20);
  cam.position.set(0.9, 0.7, 2.6);
  cam.lookAt(0, 0, 0);
  for (const k of todo) {
    const m = keepsakeModel(k.shape, k.color);
    m.scale.setScalar(0.95);
    scene.add(m);
    r.render(scene, cam);
    pictures.set(k.id, r.domElement.toDataURL('image/png'));
    scene.remove(m);
  }
  r.dispose();
  r.forceContextLoss();
}

function el<T extends keyof HTMLElementTagNameMap>(tag: T, cls = '', text = ''): HTMLElementTagNameMap[T] {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
}

let dialog: HTMLDialogElement | null = null;
export const bookOpen = (): boolean => dialog?.open ?? false;

/** chapterNames is 1-based, matching the save's chapter list */
export function openBook(chapterNames: readonly string[], here?: string): void {
  if (!dialog) {
    const d = el('dialog');
    d.id = 'keepsake-book';
    d.setAttribute('aria-label', 'Keepsake Book');
    for (const type of ['keydown', 'keyup'] as const) d.addEventListener(type, (e) => e.stopPropagation());
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
    document.body.append(d);
    dialog = d;
  }
  takePictures(ALL_KEEPSAKES.filter((k) => found.has(k.id)));
  const close = el('button', 'kb-close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', 'Close Keepsake Book');
  close.addEventListener('click', () => dialog!.close());
  const body = el('div', 'kb-body');
  body.append(
    el('h2', '', 'Keepsake Book'),
    el('p', 'kb-lead', found.size === ALL_KEEPSAKES.length
      ? 'You found every keepsake! What a journey.'
      : `${found.size} of ${ALL_KEEPSAKES.length} found. Walk over anything that glows to keep it. Replay a chapter to look for ones you missed.`),
  );
  // the notice lives with the Family Guide's text, which loads on first use
  const notice = el('p', 'kb-notice', 'Scripture quotations are from the ESV® Bible.');
  void import('../guides/chapters').then((c) => { notice.textContent = c.ESV_NOTICE; }).catch(() => {});
  let target: HTMLElement | null = null;
  Object.entries(PLAY as Record<string, ChapterPlay>).forEach(([key, ch], i) => {
    const s = el('section');
    const got = ch.keepsakes.filter((k) => found.has(k.id)).length;
    const head = el('div', 'kb-head');
    head.append(el('h3', '', chapterNames[i + 1]), el('span', got === ch.keepsakes.length ? 'kb-tally all' : 'kb-tally', `${got} of ${ch.keepsakes.length}`));
    s.append(head);
    const ul = el('ul');
    for (const k of ch.keepsakes) {
      const have = found.has(k.id);
      const li = el('li', have ? 'have' : '');
      const pic = el('span', 'kb-pic');
      const src = pictures.get(k.id);
      if (have && src) {
        const img = el('img');
        img.src = src;
        img.alt = '';
        pic.append(img);
      } else if (!have) pic.textContent = '?';
      const copy = el('span', 'kb-copy');
      copy.append(el('strong', '', have ? k.name : 'Not found yet'), el('span', '', have ? k.thought : k.hint + (REPLAY_ONLY.has(k.id) ? ', when you play the story' : '')));
      if (have) copy.append(el('q', '', k.verse), el('em', '', `${k.ref} (ESV)`));
      li.append(pic, copy);
      ul.append(li);
    }
    s.append(ul);
    body.append(s);
    if (key === here) target = s;
  });
  body.append(notice);
  dialog.replaceChildren(close, body);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  (target as HTMLElement | null)?.scrollIntoView({ block: 'start' });
}
