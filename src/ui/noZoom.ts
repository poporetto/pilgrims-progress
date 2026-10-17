// iOS Safari ignores `user-scalable=no`, so tapping a button twice quickly
// (e.g. Talk, then Talk again) is read as a double-tap and zooms the page —
// and the game's own touch handling then makes it hard to zoom back out.
//
// A quick second tap is caught here: its default (the zoom) is cancelled and
// the tap is delivered as a normal click, so no taps are lost. Pinch-zoom
// gestures are blocked too.

const DOUBLE_TAP_MS = 350;

export function preventMobileZoom(): void {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = performance.now();
    const quick = now - lastTouchEnd < DOUBLE_TAP_MS;
    lastTouchEnd = now;
    if (!quick || e.touches.length > 0 || e.changedTouches.length !== 1) return;
    const target = e.target as HTMLElement | null;
    if (!target || target.closest('input, select, textarea, a, [contenteditable]')) return;
    e.preventDefault(); // no double-tap zoom…
    // …but the tap still counts: click whatever was tapped
    const clickable = target.closest<HTMLElement>('button, #dialogue, [role="button"], [role="switch"], [role="tab"]');
    (clickable ?? target).click();
  }, { passive: false });

  // iOS pinch-zoom (Safari's non-standard gesture events)
  for (const type of ['gesturestart', 'gesturechange', 'gestureend']) {
    document.addEventListener(type, (e) => e.preventDefault(), { passive: false });
  }
  // desktop-style double-click zoom fallback
  document.addEventListener('dblclick', (e) => e.preventDefault(), { passive: false });
}
