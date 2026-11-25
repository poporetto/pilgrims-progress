// Turns pictures/out (from shoot.mjs) into public/chapters: the plain picture
// shown on each guide and the titled one for link previews.
//   node pictures/make.mjs
import { build } from '../node_modules/esbuild/lib/main.js';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { launch } from './lib.mjs';

const root = new URL('..', import.meta.url).pathname;
await build({ stdin: { contents: "export * from './src/guides/chapters'; export * from './src/guides/videos';", resolveDir: root, loader: 'ts' }, bundle: true, format: 'esm', outfile: `${root}pictures/out/data.mjs`, logLevel: 'error' });
const { CHAPTER_GUIDES, CHAPTER_SLUGS } = await import('./out/data.mjs');
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
mkdirSync(`${root}public/chapters`, { recursive: true });
const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent('<!doctype html><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Nunito:wght@800&display=swap"><style>body{margin:0;width:1200px;height:630px;background:center/cover;position:relative}div{position:absolute;left:36px;padding:20px 34px 24px;border-radius:28px;background:#fffaf1;color:#5d4533;font:700 54px/1.1 Fraunces;max-width:900px}small{display:block;font:800 24px/1.4 Nunito;color:#8a3450}</style><div><small>x</small><span>x</span></div>', { waitUntil: 'load', timeout: 30000 });
await page.evaluate(() => document.fonts.ready);
for (const [i, g] of CHAPTER_GUIDES.entries()) {
  const scene = readFileSync(`${root}pictures/out/${String(i + 1).padStart(2, '0')}-c.jpg`);
  writeFileSync(`${root}public/chapters/${CHAPTER_SLUGS[i]}.jpg`, scene);
  await page.evaluate(async ([src, kicker, title, low]) => {
    const im = new Image(); im.src = src; await im.decode();
    document.body.style.backgroundImage = `url(${src})`;
    const d = document.querySelector('div');
    d.style.top = low ? 'auto' : '36px'; d.style.bottom = low ? '36px' : 'auto'; // keep clear of the Cross
    d.children[0].textContent = kicker; d.children[1].textContent = title;
    await document.fonts.ready;
  }, [`data:image/jpeg;base64,${scene.toString('base64')}`, `Pilgrim’s Progress Family Guide · Chapter ${ROMAN[i]}`, g.title, i === 4]);
  writeFileSync(`${root}public/chapters/${CHAPTER_SLUGS[i]}-share.jpg`, await page.screenshot({ type: 'jpeg', quality: 84 }));
}
await browser.close();
