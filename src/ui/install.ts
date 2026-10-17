/// <reference types="vite/client" />
// "Add to Home Screen" row in Settings.
// - Chrome / Edge / Samsung Internet (Android + desktop): the browser's own
//   install prompt, captured from `beforeinstallprompt` and shown on tap.
// - iPhone / iPad (Safari has no install API): step-by-step instructions.
// - Already running from the home screen: the row says so and the button hides.

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const SHARE_GLYPH = '<svg class="share-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7.5 7.5 4.5-4.5 4.5 4.5"/><path d="M6 11H5v10h14V11h-1"/></svg>';

export function setupInstallButton(): void {
  const row = document.getElementById('a2hs-row');
  const btn = document.getElementById('a2hs-btn') as HTMLButtonElement | null;
  const sub = document.getElementById('a2hs-sub');
  const help = document.getElementById('a2hs-help');
  const helpTitle = document.getElementById('a2hs-help-title');
  const steps = document.getElementById('a2hs-steps');
  if (!row || !btn || !sub || !help || !helpTitle || !steps) return;

  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac — touch support gives it away
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  const standalone = window.matchMedia('(display-mode: standalone)').matches
    || (navigator as Navigator & { standalone?: boolean }).standalone === true;

  const installed = (): void => {
    sub.textContent = 'Already on your home screen — enjoy the journey!';
    btn.hidden = true;
    help.hidden = true;
  };
  if (standalone) { installed(); return; }

  let deferred: InstallPromptEvent | null = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // keep it for our own button
    deferred = e as InstallPromptEvent;
  });
  window.addEventListener('appinstalled', installed);

  const showHelp = (title: string, items: string[]): void => {
    helpTitle.textContent = title;
    steps.innerHTML = items.map((s) => `<li>${s}</li>`).join('');
    help.hidden = !help.hidden;
  };

  btn.addEventListener('click', async () => {
    if (deferred) {
      const ev = deferred;
      deferred = null;
      await ev.prompt();
      const choice = await ev.userChoice.catch(() => null);
      if (choice?.outcome === 'accepted') installed();
      return;
    }
    if (isIOS) {
      showHelp('On iPhone or iPad (Safari)', [
        `Tap the <b>Share</b> button ${SHARE_GLYPH} in Safari's toolbar.`,
        'Scroll down and choose <b>Add to Home Screen</b>.',
        'Tap <b>Add</b> — Pilgrim\'s Progress appears with its own icon.',
      ]);
    } else if (isAndroid) {
      showHelp('On Android', [
        'Open your browser menu <b>⋮</b> (top right).',
        'Choose <b>Add to Home screen</b> or <b>Install app</b>.',
        'Tap <b>Add</b> / <b>Install</b> to confirm.',
      ]);
    } else {
      showHelp('On a computer', [
        'In Chrome or Edge, click the <b>install</b> icon at the right of the address bar, or open the browser menu and choose <b>Install Pilgrim\'s Progress</b>.',
        'On a phone, open this page there and use Add to Home Screen.',
      ]);
    }
  });
}

/** A tiny service worker — some browsers only offer installation when one exists. */
export function registerServiceWorker(): void {
  if (!('serviceWorker' in navigator) || import.meta.env.DEV) return;
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* installation still works where supported */ });
  });
}
