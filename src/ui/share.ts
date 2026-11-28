// Share the game: a small sheet with Facebook, Instagram and Copy link.
// Facebook has a web share URL. Instagram has none, so on phones we hand the
// link to the system share sheet (which lists Instagram); elsewhere we copy
// the link and say where to paste it.
import './share.css';

const SHARE_URL = 'https://pilgrimsprogress.com.au/';
const SHARE_TEXT = 'Walk with Christian from the City of Destruction to the Celestial City in this free storybook game.';

const ICONS = {
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3.5"/><path d="M7.5 8 12 3.5 16.5 8"/><path d="M6 11.5H5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 5 20.5h14a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 19 11.5h-1"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.4 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.7v3h2.6V21z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/></svg>',
};

export const SHARE_ICON = ICONS.share;

let sheet: HTMLElement | null = null;
let note: HTMLElement;
let returnFocus: HTMLElement | null = null;

async function copyLink(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(SHARE_URL);
    return true;
  } catch {
    // older browsers / blocked clipboard: fall back to a hidden textarea
    const ta = document.createElement('textarea');
    ta.value = SHARE_URL;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.append(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}

function say(text: string): void {
  note.textContent = text;
  note.classList.add('show');
}

function build(): HTMLElement {
  const el = document.createElement('div');
  el.id = 'share-overlay';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <section id="share-sheet" role="dialog" aria-modal="true" aria-labelledby="share-title">
      <button class="share-close" type="button" aria-label="Close">×</button>
      <h2 id="share-title">Share the journey</h2>
      <p class="share-lead">Know a family who'd enjoy it?</p>
      <div class="share-options">
        <button type="button" class="share-opt fb" data-share="facebook"><span class="share-ico">${ICONS.facebook}</span>Facebook</button>
        <button type="button" class="share-opt ig" data-share="instagram"><span class="share-ico">${ICONS.instagram}</span>Instagram</button>
        <button type="button" class="share-opt link" data-share="copy"><span class="share-ico">${ICONS.link}</span>Copy link</button>
      </div>
      <p class="share-note" role="status" aria-live="polite"></p>
    </section>`;
  note = el.querySelector('.share-note')!;
  el.addEventListener('click', (e) => { if (e.target === el) closeShare(); });
  el.querySelector('.share-close')!.addEventListener('click', closeShare);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); closeShare(); }
  });
  el.querySelectorAll<HTMLButtonElement>('[data-share]').forEach((b) => b.addEventListener('click', async () => {
    const kind = b.dataset.share;
    if (kind === 'facebook') {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`;
      window.open(url, 'share-facebook', 'noopener,width=620,height=560');
    } else if (kind === 'instagram') {
      const touch = matchMedia('(pointer: coarse)').matches;
      if (touch && navigator.share) {
        try { await navigator.share({ title: "Pilgrim's Progress", text: SHARE_TEXT, url: SHARE_URL }); } catch { /* closed the sheet */ }
      } else {
        say(await copyLink()
          ? 'Link copied. Paste it into your Instagram story or bio.'
          : `Copy this link for Instagram: ${SHARE_URL}`);
      }
    } else {
      say(await copyLink() ? 'Link copied!' : `Copy this link: ${SHARE_URL}`);
    }
  }));
  document.body.append(el);
  return el;
}

export function openShare(): void {
  sheet ??= build();
  returnFocus = document.activeElement as HTMLElement | null;
  note.textContent = '';
  note.classList.remove('show');
  sheet.classList.add('open');
  sheet.setAttribute('aria-hidden', 'false');
  sheet.querySelector<HTMLButtonElement>('.share-opt')!.focus();
}

export function closeShare(): void {
  if (!sheet) return;
  sheet.classList.remove('open');
  sheet.setAttribute('aria-hidden', 'true');
  returnFocus?.focus();
}

export function isShareOpen(): boolean {
  return !!sheet?.classList.contains('open');
}
