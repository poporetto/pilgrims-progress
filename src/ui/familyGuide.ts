// The Family Guide: a storybook sheet with a discussion guide for every game
// chapter and every animated episode. Opened from the title screen, Settings,
// the chapter-complete card and the finale. Its text loads on first use.
import type { Guide } from '../guides/chapters';
import './familyGuide.css';

type Kind = 'chapters' | 'episodes';
interface Library { chapters: Guide[]; episodes: Guide[]; notice: string }

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
const KIND_NAMES: Record<Kind, string> = { chapters: 'Game chapters', episodes: 'Video episodes' };

let library: Promise<Library> | null = null;
function loadLibrary(): Promise<Library> {
  library ??= Promise.all([import('../guides/chapters'), import('../guides/episodes.json')])
    .then(([c, e]) => ({ chapters: c.CHAPTER_GUIDES, episodes: e.default as unknown as Guide[], notice: c.ESV_NOTICE }))
    .catch((err) => { library = null; throw err; });
  return library;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text = ''): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
}

let dialog: HTMLDialogElement | null = null;
let body: HTMLDivElement;
let returnFocus: HTMLElement | null = null;

function build(): HTMLDialogElement {
  const d = el('dialog');
  d.id = 'family-guide';
  d.setAttribute('aria-label', 'Family Guide');
  const close = el('button', 'fg-close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', 'Close Family Guide');
  close.addEventListener('click', () => d.close());
  body = el('div', 'fg-body');
  d.append(close, body);
  // reading must never drive the game underneath
  for (const type of ['keydown', 'keyup'] as const) {
    d.addEventListener(type, (e) => e.stopPropagation());
  }
  d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  d.addEventListener('close', () => returnFocus?.focus());
  document.body.append(d);
  return d;
}

function tabs(active: Kind): HTMLElement {
  const bar = el('div', 'fg-tabs');
  for (const kind of ['chapters', 'episodes'] as const) {
    const b = el('button', '', KIND_NAMES[kind]);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(kind === active));
    b.addEventListener('click', () => { void showList(kind); });
    bar.append(b);
  }
  return bar;
}

const label = (kind: Kind, i: number): string => (kind === 'chapters' ? `Chapter ${ROMAN[i]}` : `Episode ${i + 1}`);

async function showList(kind: Kind): Promise<void> {
  const lib = await loadLibrary();
  const list = el('ol', 'fg-list');
  lib[kind].forEach((g, i) => {
    const li = el('li');
    const b = el('button');
    b.type = 'button';
    b.append(el('span', 'fg-num', kind === 'chapters' ? ROMAN[i] : String(i + 1)), el('span', '', g.title));
    b.addEventListener('click', () => { void showGuide(kind, i); });
    li.append(b);
    list.append(li);
  });
  body.replaceChildren(
    el('h2', '', 'Family Guide'),
    el('p', 'fg-lead', 'Talk about the story together: what it means, questions for two age groups, something to do and a short prayer.'),
    tabs(kind), list,
  );
  dialog!.scrollTop = 0;
}

function section(title: string, ...children: HTMLElement[]): HTMLElement {
  const s = el('section');
  s.append(el('h3', '', title), ...children);
  return s;
}

function questions(title: string, qs: string[]): HTMLElement {
  const ul = el('ul');
  for (const q of qs) ul.append(el('li', '', q));
  return section(title, ul);
}

async function showGuide(kind: Kind, i: number): Promise<void> {
  const lib = await loadLibrary();
  const g = lib[kind][i];
  const back = el('button', 'fg-back', `‹ All ${kind === 'chapters' ? 'chapters' : 'episodes'}`);
  back.type = 'button';
  back.addEventListener('click', () => { void showList(kind); });
  const idea = el('p', 'fg-idea', g.bigIdea);
  const verses = g.verses.map(([ref, text]) => {
    const q = el('blockquote', '', `“${text}”`);
    q.append(el('cite', '', `${ref} (ESV)`));
    return q;
  });
  const dl = el('dl');
  for (const [name, text] of g.meaning) dl.append(el('dt', '', name), el('dd', '', text));
  const nav = el('div', 'fg-nav');
  const step = (to: number, text: string): void => {
    if (!lib[kind][to]) return;
    const b = el('button', '', text);
    b.type = 'button';
    b.addEventListener('click', () => { void showGuide(kind, to); });
    nav.append(b);
  };
  step(i - 1, `‹ ${label(kind, i - 1)}`);
  step(i + 1, `${label(kind, i + 1)} ›`);
  body.replaceChildren(
    back,
    el('p', 'fg-kicker', label(kind, i)),
    el('h2', '', g.title),
    el('p', 'fg-story', g.story),
    section('The big idea', idea),
    section('From the Bible', ...verses),
    section('What it means', dl),
    questions('Ask ages 4–7', g.young),
    questions('Ask ages 8–12', g.older),
    section('Do it together', el('p', '', g.activity)),
    section('Pray', el('p', 'fg-prayer', g.prayer)),
    nav,
    el('p', 'fg-notice', lib.notice),
  );
  dialog!.scrollTop = 0;
}

/** open the guide list, or straight at a game chapter (1–17) */
export async function openFamilyGuide(chapter?: number): Promise<void> {
  dialog ??= build();
  returnFocus = document.activeElement as HTMLElement | null;
  body.replaceChildren(el('p', 'fg-lead', 'Opening the guide…'));
  if (!dialog.open) dialog.showModal();
  try {
    if (chapter && ROMAN[chapter - 1]) await showGuide('chapters', chapter - 1);
    else await showList('chapters');
  } catch {
    const retry = el('button', 'fg-back', 'Try again');
    retry.type = 'button';
    retry.addEventListener('click', () => { void openFamilyGuide(chapter); });
    body.replaceChildren(el('p', 'fg-lead', 'The guide couldn’t load. Check your connection.'), retry);
  }
}

/** reads the chapter number out of "Chapter IV Complete" / "Chapter XVI — …" */
export function chapterFromTitle(text: string): number | undefined {
  const m = /Chapter ([IVX]+)\b/.exec(text);
  const n = m ? ROMAN.indexOf(m[1]) + 1 : 0;
  return n || undefined;
}
