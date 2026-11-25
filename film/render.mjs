// Capture an episode frame-by-frame from film.html and mux it with the voices + music.
//
//   node film/render.mjs ep1 --url http://localhost:5173          full render → film/out/ep1/ep1.mp4
//   node film/render.mjs ep1 --url … --sheet                      one still per second-ish → contact sheets
//   node film/render.mjs ep1 --url … --from 100 --to 120          render a slice (seconds)
import { chromium } from 'playwright-core';
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const ep = args[0] ?? 'ep1';
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const flag = (k) => args.includes(`--${k}`);
const base = opt('url', 'http://localhost:5173');
const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'out', ep);
mkdirSync(out, { recursive: true });

// any recent Chromium works; defaults to Playwright's cached Chrome for Testing
const chrome = opt('chrome', join(process.env.HOME, 'Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'));
const browser = await chromium.launch({
  executablePath: existsSync(chrome) ? chrome : undefined,
  headless: !flag('headed'),
  args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('console', (m) => { if (m.type() === 'error') console.error('[page]', m.text()); });
await page.goto(`${base}/film.html?capture&ep=${ep}`);
await page.waitForFunction(() => window.__film?.ready, null, { timeout: 120000 });
const info = await page.evaluate(() => ({ frames: window.__film.frames, fps: window.__film.fps, duration: window.__film.duration }));

async function grab(i, q = 0.92, stamp = false) {
  const b64 = await page.evaluate(([i, q, stamp]) => {
    window.__film.frame(i);
    if (stamp) {
      const c = document.getElementById('frame').getContext('2d');
      c.fillStyle = 'rgba(0,0,0,.6)'; c.fillRect(0, 0, 330, 76);
      c.fillStyle = '#fff'; c.font = 'bold 56px monospace'; c.textAlign = 'left'; c.textBaseline = 'top';
      c.fillText((i / window.__film.fps).toFixed(1) + 's', 14, 10);
    }
    return document.getElementById('frame').toDataURL('image/jpeg', q).split(',')[1];
  }, [i, q, stamp]);
  return Buffer.from(b64, 'base64');
}

if (flag('sheet')) {
  const every = Number(opt('every', '3'));
  const dir = join(out, 'sheet');
  mkdirSync(dir, { recursive: true });
  let n = 0;
  for (let t = 0.5; t < info.duration; t += every) {
    writeFileSync(join(dir, `s${String(n++).padStart(3, '0')}.jpg`), await grab(Math.floor(t * info.fps), 0.8, true));
  }
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-framerate', '1', '-i', join(dir, 's%03d.jpg'),
    '-vf', 'scale=480:-1,tile=4x4', join(dir, 'sheet%02d.jpg')]);
  console.log(`sheets in ${dir} (${n} stills, every ${every}s)`);
  await browser.close();
  process.exit(0);
}

const from = Math.floor(Number(opt('from', '0')) * info.fps);
const to = Math.min(info.frames, Math.ceil(Number(opt('to', String(info.duration))) * info.fps));
const slice = from > 0 || to < info.frames;
const videoOnly = join(out, slice ? 'slice-video.mp4' : 'video.mp4');
const t0 = Date.now();
// --mux: reuse the captured video and only redo the audio mix
if (!(flag('mux') && existsSync(videoOnly))) {
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(info.fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', videoOnly], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = from; i < to; i++) {
    const jpg = await grab(i, 0.95);
    if (!ff.stdin.write(jpg)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 300 === 0) console.log(`frame ${i}/${to}  ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
}

// music bed straight from the game's synth, rendered offline on the same timeline
const musicWav = join(out, 'music.wav');
if (!existsSync(musicWav) || flag('remusic')) {
  const b64 = await page.evaluate(() => window.__film.renderMusic());
  writeFileSync(musicWav, Buffer.from(b64, 'base64'));
}
await browser.close();

// ---- mix: voices at their cue times over the music, music ducks under speech
const timeline = JSON.parse(readFileSync(join(out, 'timeline.json'), 'utf8'));
const lines = timeline.beats.filter((b) => b.wav);
const inputs = ['-i', musicWav];
const parts = [];
lines.forEach((b, k) => {
  inputs.push('-i', join(out, b.wav));
  const ms = Math.round(b.start * 1000);
  parts.push(`[${k + 1}:a]aresample=48000,aformat=channel_layouts=stereo,adelay=${ms}|${ms},volume=1.6[v${k}]`);
});
const vmix = `${lines.map((_, k) => `[v${k}]`).join('')}amix=inputs=${lines.length}:normalize=0:dropout_transition=0,apad=whole_dur=${timeline.duration},asplit=2[voice][key]`;
const graph = [
  ...parts,
  vmix,
  `[0:a]aresample=48000,volume=${opt('music', '2.6')}[mus]`,
  `[mus][key]sidechaincompress=threshold=0.05:ratio=2.5:attack=60:release=600[ducked]`,
  `[ducked][voice]amix=inputs=2:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=11[aout]`,
].join(';');
const mixWav = join(out, 'mix.wav');
execFileSync('ffmpeg', ['-v', 'error', '-y', ...inputs, '-filter_complex', graph, '-map', '[aout]', '-ar', '48000', mixWav]);
const final = join(out, slice ? 'slice.mp4' : `${ep}.mp4`);
execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', videoOnly, ...(slice ? ['-ss', String(from / info.fps)] : []), '-i', mixWav,
  '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', final]);
console.log(`done → ${final}  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
