// Health as a row of little voxel hearts, drawn from shaded blocks.
const ROWS = ['.##.##.', '#######', '#######', '.#####.', '..###..', '...#...'];
const COUNT = 5;

function heart(full: boolean): string {
  const [top, face, alt, side] = full ? ['#f9aab6', '#e4607a', '#df5570', '#a93850'] : ['#f3e6d6', '#e3d2be', '#dfcdb8', '#c9b49d'];
  let front = '';
  let under = '';
  let light = '';
  ROWS.forEach((row, y) => [...row].forEach((c, x) => {
    if (c !== '#') return;
    under += `<rect x="${x * 4 + 2}" y="${y * 4 + 3}" width="4" height="4" fill="${side}"/>`;
    front += `<rect x="${x * 4}" y="${y * 4}" width="4.05" height="4.05" fill="${(x + y) % 2 ? face : alt}"/>`;
    if (y === 0 || ROWS[y - 1][x] !== '#') light += `<rect x="${x * 4}" y="${y * 4}" width="4.05" height="1.4" fill="${top}"/>`;
  }));
  const shine = full ? '<rect x="4.4" y="4.4" width="3.2" height="3.2" rx=".6" fill="#ffd9df"/>' : '';
  return `<svg viewBox="0 0 30 27" aria-hidden="true">${under}${front}${light}${shine}</svg>`;
}

/** value is 0..100; hearts empty a quarter at a time */
export function setHearts(row: HTMLElement, value: number): void {
  const quarters = Math.ceil((Math.min(100, Math.max(0, value)) / 100) * COUNT * 4 - 1e-6);
  if (row.dataset.quarters === String(quarters)) return;
  if (!row.children.length) {
    for (let i = 0; i < COUNT; i++) {
      const h = document.createElement('span');
      h.className = 'heart';
      h.innerHTML = `${heart(false)}<i>${heart(true)}</i>`;
      row.append(h);
    }
    row.setAttribute('role', 'img');
  }
  const before = Number(row.dataset.quarters ?? COUNT * 4);
  row.dataset.quarters = String(quarters);
  [...row.children].forEach((h, i) => {
    const q = Math.min(4, Math.max(0, quarters - i * 4));
    const was = Math.min(4, Math.max(0, before - i * 4));
    (h.querySelector('i') as HTMLElement).style.width = `${q * 25}%`;
    if (q < was) {
      h.classList.remove('hit');
      void (h as HTMLElement).offsetWidth;
      h.classList.add('hit');
    }
  });
  row.setAttribute('aria-label', `${quarters / 4} of ${COUNT} hearts`);
}
