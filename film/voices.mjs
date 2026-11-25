// Voice every scripted line, then lay the beats out on a timeline.
//
//   node film/voices.mjs ep1                  Kokoro (local, free)
//   node film/voices.mjs ep1 --engine chatterbox
//                                             Chatterbox (local, free, expressive):
//                                             clones each character from their
//                                             Kokoro takes, with an emotion level
//                                             per character / per line. Needs
//                                             film/.venv (see README).
//   node film/voices.mjs ep1 --engine fish    Fish Audio S2 (needs FISH_API_KEY,
//                                             from the environment or film/.env)
//
// Writes film/out/<ep>/voice/<id>.wav and film/out/<ep>/timeline.json:
// absolute start/end of every beat plus a 30 fps loudness envelope per line
// (the renderer uses it to make the speaker move in time with their voice).
import { KokoroTTS } from 'kokoro-js';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ep = process.argv[2] ?? 'ep1';
const root = dirname(fileURLToPath(import.meta.url));
const script = JSON.parse(readFileSync(join(root, ep, 'script.json'), 'utf8'));
const out = join(root, 'out', ep);
const engine = (() => { const i = process.argv.indexOf('--engine'); return i > 0 ? process.argv[i + 1] : 'kokoro'; })();
const fishModel = (() => { const i = process.argv.indexOf('--model'); return i > 0 ? process.argv[i + 1] : 's2.1-pro-free'; })();
// each engine keeps its own takes, so switching back and forth is free
const voiceSub = engine === 'kokoro' ? 'voice' : `voice-${engine}`;
const voiceDir = join(out, voiceSub);
mkdirSync(voiceDir, { recursive: true });

const FPS = 30;
const SR = engine === 'fish' ? 44100 : 24000; // keep Fish takes at full quality
const force = process.argv.includes('--force');

let tts = null;
async function getTTS() {
  tts ??= await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', { dtype: 'fp32', device: 'cpu' });
  return tts;
}

function fishKey() {
  if (process.env.FISH_API_KEY) return process.env.FISH_API_KEY;
  const envFile = join(root, '.env');
  if (existsSync(envFile)) {
    const m = readFileSync(envFile, 'utf8').match(/^FISH_API_KEY\s*=\s*(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, '');
  }
  throw new Error('Set FISH_API_KEY (environment or film/.env) to use --engine fish');
}

async function fishTTS(beat, cast, file) {
  const f = cast.fish;
  if (!f?.reference_id) throw new Error(`no fish voice for ${beat.speaker}`);
  // S2 takes free-form [emotion] tags inline; a beat may give its own fully tagged line
  const text = beat.fish ?? `${f.tag ? `${f.tag} ` : ''}${beat.say ?? beat.text}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch('https://api.fish.audio/v1/tts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${fishKey()}`, 'Content-Type': 'application/json', model: fishModel },
      body: JSON.stringify({
        text, reference_id: f.reference_id, format: 'wav', sample_rate: 44100,
        prosody: { speed: f.speed ?? 1 }, temperature: f.temperature ?? 0.7, top_p: 0.7, latency: 'normal',
      }),
    });
    if (res.ok) { writeFileSync(file, Buffer.from(await res.arrayBuffer())); return; }
    const msg = await res.text();
    if (res.status === 503 || res.status === 429) { await new Promise((r) => setTimeout(r, 3000 * (attempt + 1))); continue; }
    throw new Error(`fish ${res.status} for ${beat.id}: ${msg.slice(0, 300)}`);
  }
  throw new Error(`fish kept failing for ${beat.id}`);
}

function readPcm(file) {
  const buf = execFileSync('ffmpeg', ['-v', 'error', '-i', file, '-f', 'f32le', '-ac', '1', '-ar', String(SR), '-'], { maxBuffer: 1 << 28 });
  return new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
}

function postProcess(raw, final, p = 1) {
  // pitch shift without changing length, trim edge silence, soft fade in
  const filters = [
    p !== 1 ? `asetrate=${Math.round(24000 * p)},aresample=${SR},atempo=${(1 / p).toFixed(4)}` : 'anull',
    'silenceremove=start_periods=1:start_threshold=-45dB',
    'areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse',
    'afade=t=in:d=0.02',
  ].join(',');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-af', filters, '-ar', String(SR), '-ac', '1', final]);
}

// Chatterbox: voice all missing lines in one batch (the model loads once)
if (engine === 'chatterbox') {
  const kokoroDir = join(out, 'voice');
  const refDir = join(voiceDir, 'refs');
  mkdirSync(refDir, { recursive: true });
  const refs = {};
  const refFor = (speaker) => {
    if (refs[speaker]) return refs[speaker];
    // ~10 s of the character's Kokoro voice is the identity to clone
    const takes = script.beats.filter((b) => b.speaker === speaker && existsSync(join(kokoroDir, `${b.id}.wav`)));
    if (!takes.length) throw new Error(`voice ${speaker} with Kokoro first (node film/voices.mjs ${ep})`);
    const picked = [];
    let len = 0;
    for (const b of [...takes].sort((a, b) => (b.say ?? b.text).length - (a.say ?? a.text).length)) {
      if (len > 10) break;
      picked.push(join(kokoroDir, `${b.id}.wav`));
      len += (b.say ?? b.text).length / 15;
    }
    const ref = join(refDir, `${speaker}.wav`);
    execFileSync('ffmpeg', ['-v', 'error', '-y', ...picked.flatMap((f) => ['-i', f]), '-filter_complex',
      `${picked.map((_, i) => `[${i}]`).join('')}concat=n=${picked.length}:v=0:a=1`, '-ar', '24000', ref]);
    return (refs[speaker] = ref);
  };
  const jobs = [];
  for (const beat of script.beats) {
    if (beat.pause != null) continue;
    if (!force && existsSync(join(voiceDir, `${beat.id}.wav`))) continue;
    // a finished take from an interrupted batch: just post-process it
    if (!force && existsSync(join(voiceDir, `${beat.id}.raw.wav`))) {
      postProcess(join(voiceDir, `${beat.id}.raw.wav`), join(voiceDir, `${beat.id}.wav`));
      continue;
    }
    const c = script.cast[beat.speaker].chatterbox ?? {};
    const exaggeration = beat.emo ?? c.exaggeration ?? 0.6;
    jobs.push({
      id: beat.id,
      text: beat.say ?? beat.text,
      ref: refFor(beat.speaker),
      out: join(voiceDir, `${beat.id}.raw.wav`),
      exaggeration,
      // stronger emotion speeds speech up; a lower cfg slows it back to a natural pace
      cfg: c.cfg ?? (exaggeration > 0.8 ? 0.3 : 0.45),
      temperature: c.temperature ?? 0.8,
      seed: c.seed ?? 7,
    });
  }
  if (jobs.length) {
    console.log(`chatterbox: voicing ${jobs.length} lines…`);
    execFileSync(join(root, '.venv/bin/python'), [join(root, 'chatterbox_tts.py')],
      { input: JSON.stringify(jobs), stdio: ['pipe', 'inherit', 'inherit'], maxBuffer: 1 << 26 });
    for (const j of jobs) postProcess(j.out, join(voiceDir, `${j.id}.wav`));
  }
}

const timeline = { fps: FPS, engine, beats: [], duration: 0 };
let t = 0;
let prevSpeaker = null;
for (const beat of script.beats) {
  if (beat.pause != null) {
    timeline.beats.push({ id: beat.id, start: t, end: t + beat.pause });
    t += beat.pause;
    prevSpeaker = null;
    continue;
  }
  const cast = script.cast[beat.speaker];
  const final = join(voiceDir, `${beat.id}.wav`);
  if (engine !== 'chatterbox' && (force || !existsSync(final))) {
    const raw = join(voiceDir, `${beat.id}.raw.wav`);
    if (engine === 'fish') await fishTTS(beat, cast, raw);
    else await (await (await getTTS()).generate(beat.say ?? beat.text, { voice: cast.voice, speed: cast.speed ?? 1 })).save(raw);
    // the pitch trick is only for Kokoro's adult voices playing cubs
    postProcess(raw, final, engine === 'kokoro' ? cast.pitch ?? 1 : 1);
    console.log('voiced', beat.id, beat.speaker, `(${engine})`);
  }
  const pcm = readPcm(final);
  const dur = pcm.length / SR;
  // RMS per video frame, normalised to the line's own peak
  const per = SR / FPS;
  const env = [];
  for (let i = 0; i * per < pcm.length; i++) {
    let s = 0;
    const a = Math.floor(i * per);
    const b = Math.min(pcm.length, Math.floor((i + 1) * per));
    for (let j = a; j < b; j++) s += pcm[j] * pcm[j];
    env.push(Math.sqrt(s / Math.max(1, b - a)));
  }
  const peak = Math.max(...env, 1e-6);
  // a breath between lines; a touch longer when the speaker changes
  const lead = prevSpeaker && prevSpeaker !== beat.speaker ? 0.45 : 0.3;
  t += lead;
  timeline.beats.push({
    id: beat.id, speaker: beat.speaker, text: beat.text,
    start: +t.toFixed(3), end: +(t + dur).toFixed(3),
    wav: `${voiceSub}/${beat.id}.wav`,
    env: env.map((v) => +(v / peak).toFixed(3)),
  });
  t += dur;
  prevSpeaker = beat.speaker;
}
timeline.duration = +(t + 0.5).toFixed(3);
writeFileSync(join(out, 'timeline.json'), JSON.stringify(timeline));
console.log(`timeline: ${timeline.beats.length} beats, ${timeline.duration.toFixed(1)} s`);
