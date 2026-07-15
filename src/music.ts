// Procedural pastel soundtrack — no audio files, just the Web Audio API.
// Three moods, all generated bar by bar:
//   village — soft lullaby (pad + music-box)
//   map     — adventurous but mellow travelling tune (arpeggios + shaker)
//   slough  — slow minor murk (low pad, sparse notes, water drips)

export type MusicStyle = 'village' | 'map' | 'slough' | 'sinai' | 'gate';

interface StyleDef {
  bpm: number;
  chords: number[][];
  scale: number[];
}

const STYLES: Record<MusicStyle, StyleDef> = {
  village: {
    bpm: 76,
    // Cmaj7 – Am7 – Fmaj7 – G6
    chords: [
      [130.81, 164.81, 196.0, 246.94],
      [110.0, 130.81, 164.81, 196.0],
      [87.31, 130.81, 174.61, 220.0],
      [98.0, 146.83, 196.0, 220.0],
    ],
    scale: [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5], // C maj pentatonic
  },
  map: {
    bpm: 92,
    // C – G – Am – F (open, forward-moving)
    chords: [
      [130.81, 164.81, 196.0, 261.63],
      [98.0, 123.47, 146.83, 196.0],
      [110.0, 130.81, 164.81, 220.0],
      [87.31, 110.0, 174.61, 220.0],
    ],
    scale: [392.0, 440.0, 523.25, 587.33, 659.25, 783.99],
  },
  slough: {
    bpm: 58,
    // Am(add9) – Fmaj7 – Am – E (uneasy, but gentle)
    chords: [
      [110.0, 123.47, 164.81, 220.0],
      [87.31, 130.81, 174.61, 220.0],
      [110.0, 130.81, 164.81, 220.0],
      [82.41, 123.47, 164.81, 207.65],
    ],
    scale: [220.0, 246.94, 261.63, 329.63, 392.0, 440.0], // A minor-ish, low
  },
  sinai: {
    bpm: 66,
    // Am – Em – F – E : pleasant on the surface, uneasy underneath
    chords: [
      [110.0, 164.81, 220.0, 261.63],
      [82.41, 123.47, 164.81, 196.0],
      [87.31, 130.81, 174.61, 220.0],
      [82.41, 123.47, 164.81, 207.65],
    ],
    scale: [329.63, 349.23, 392.0, 440.0, 493.88, 523.25],
  },
  gate: {
    bpm: 62,
    // C – F – Am – G : reverent, hopeful, a long road walked in faith
    // (shares the soft-pluck scheduling branch with 'sinai')
    chords: [
      [130.81, 196.0, 261.63, 329.63],
      [87.31, 174.61, 220.0, 261.63],
      [110.0, 164.81, 220.0, 261.63],
      [98.0, 146.83, 246.94, 293.66],
    ],
    scale: [392.0, 440.0, 523.25, 587.33, 659.25, 783.99],
  },
};

export class Music {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: number | null = null;
  private nextBarTime = 0;
  private bar = 0;
  private style: MusicStyle = 'village';
  private noiseBuf: AudioBuffer | null = null;
  private volume = 0.5;
  enabled = true;

  start(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? this.volume : 0;
    this.master.connect(this.ctx.destination);
    // soft white-noise buffer for the shaker
    const len = this.ctx.sampleRate * 0.25;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.nextBarTime = this.ctx.currentTime + 0.1;
    this.timer = window.setInterval(() => this.schedule(), 200);
  }

  toggle(): boolean {
    this.enabled = !this.enabled;
    if (this.ctx && this.master) {
      this.master.gain.linearRampToValueAtTime(
        this.enabled ? this.volume : 0,
        this.ctx.currentTime + 0.2,
      );
    }
    return this.enabled;
  }

  // fade out, switch mood, fade back in
  setStyle(style: MusicStyle): void {
    if (style === this.style) return;
    if (!this.ctx || !this.master) {
      this.style = style;
      return;
    }
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0.0001, t + 1.4);
    window.setTimeout(() => {
      this.style = style;
      this.bar = 0;
      if (this.ctx && this.master) {
        // drop anything still queued far ahead, restart clean
        this.nextBarTime = this.ctx.currentTime + 0.15;
        const t2 = this.ctx.currentTime;
        this.master.gain.cancelScheduledValues(t2);
        this.master.gain.setValueAtTime(0.0001, t2);
        this.master.gain.linearRampToValueAtTime(
          this.enabled ? this.volume : 0, t2 + 2.0,
        );
      }
    }, 1500);
  }

  // one-shot cute blip for UI (dialogue advance)
  blip(): void {
    if (!this.ctx || !this.master || !this.enabled) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.07);
    g.gain.setValueAtTime(0.12, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  // muddy splash for the slough
  splash(): void {
    if (!this.ctx || !this.master || !this.enabled || !this.noiseBuf) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(700, t);
    f.frequency.exponentialRampToValueAtTime(150, t + 0.25);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.25, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
  }

  // deep mountain rumble for Mount Sinai's fire and thunder
  rumble(): void {
    if (!this.ctx || !this.master || !this.enabled || !this.noiseBuf) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(140, t);
    f.frequency.exponentialRampToValueAtTime(60, t + 0.8);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.4, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    // a low ominous tone underneath
    const osc = this.ctx.createOscillator();
    const og = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(55, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.9);
    og.gain.setValueAtTime(0.12, t);
    og.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
    osc.connect(og).connect(this.master);
    osc.start(t);
    osc.stop(t + 1.1);
  }

  private barLen(): number {
    return (60 / STYLES[this.style].bpm) * 4;
  }

  private schedule(): void {
    if (!this.ctx) return;
    while (this.nextBarTime < this.ctx.currentTime + this.barLen() * 1.2) {
      this.scheduleBar(this.nextBarTime, this.bar);
      this.nextBarTime += this.barLen();
      this.bar++;
    }
  }

  private pluck(t: number, freq: number, vol: number, dur = 0.9): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g).connect(this.master!);
    osc.start(t);
    osc.stop(t + dur + 0.1);
    // faint octave shimmer
    const o2 = ctx.createOscillator();
    const g2 = ctx.createGain();
    o2.type = 'sine';
    o2.frequency.value = freq * 2;
    g2.gain.setValueAtTime(vol * 0.22, t);
    g2.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.55);
    o2.connect(g2).connect(this.master!);
    o2.start(t);
    o2.stop(t + dur);
  }

  private pad(t: number, freqs: number[], barLen: number, vol: number, type: OscillatorType = 'triangle'): void {
    const ctx = this.ctx!;
    for (const freq of freqs) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = (Math.random() - 0.5) * 6;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vol, t + barLen * 0.3);
      g.gain.linearRampToValueAtTime(0.0001, t + barLen * 1.05);
      osc.connect(g).connect(this.master!);
      osc.start(t);
      osc.stop(t + barLen * 1.1);
    }
  }

  private bass(t: number, freq: number, vol = 0.11, dur = 0.5): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g).connect(this.master!);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  private shaker(t: number, vol: number): void {
    if (!this.noiseBuf) return;
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 5000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    src.connect(f).connect(g).connect(this.master!);
    src.start(t);
    src.stop(t + 0.1);
  }

  private scheduleBar(t0: number, bar: number): void {
    const def = STYLES[this.style];
    const chord = def.chords[bar % def.chords.length];
    const barLen = this.barLen();
    const eighth = barLen / 8;

    if (this.style === 'village') {
      this.pad(t0, chord, barLen, 0.045);
      for (let i = 0; i < 8; i++) {
        if (i !== 0 && Math.random() > 0.45) continue;
        this.pluck(t0 + i * eighth, def.scale[Math.floor(Math.random() * def.scale.length)], 0.09);
      }
      this.bass(t0, chord[0] / 2);
      this.bass(t0 + barLen / 2, chord[0] / 2);
    } else if (this.style === 'map') {
      this.pad(t0, chord, barLen, 0.035);
      // determined little arpeggio — the travelling motif
      const pattern = [0, 1, 2, 3, 2, 3, 1, 2];
      for (let i = 0; i < 8; i++) {
        if (i === 5 && bar % 2 === 0) continue; // small breath
        const tone = chord[pattern[i]] * 2;
        this.pluck(t0 + i * eighth, tone, 0.075, 0.5);
      }
      // sparkle on top every other bar
      if (bar % 2 === 1) {
        this.pluck(t0 + eighth * 6, def.scale[(bar / 2) % def.scale.length | 0] * 2, 0.05, 0.8);
      }
      // gentle shaker on the offbeats
      for (const beat of [1, 3, 5, 7]) this.shaker(t0 + beat * eighth, 0.02);
      this.bass(t0, chord[0] / 2, 0.12, 0.4);
      this.bass(t0 + barLen * 0.5, chord[1] / 2, 0.09, 0.4);
      this.bass(t0 + barLen * 0.75, chord[0] / 2, 0.07, 0.3);
    } else if (this.style === 'slough') {
      // slough: low murky pad, rare hesitant notes, water drips
      this.pad(t0, chord, barLen, 0.05, 'sine');
      for (let i = 0; i < 8; i++) {
        if (Math.random() > 0.22) continue;
        this.pluck(t0 + i * eighth, def.scale[Math.floor(Math.random() * def.scale.length)], 0.06, 1.4);
      }
      this.bass(t0, chord[0] / 2, 0.12, 0.9);
      // a falling water-drip blip now and then
      if (Math.random() < 0.5) {
        const ctx = this.ctx!;
        const td = t0 + Math.random() * barLen;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900 + Math.random() * 300, td);
        osc.frequency.exponentialRampToValueAtTime(240, td + 0.18);
        g.gain.setValueAtTime(0.05, td);
        g.gain.exponentialRampToValueAtTime(0.001, td + 0.22);
        osc.connect(g).connect(this.master!);
        osc.start(td);
        osc.stop(td + 0.25);
      }
    } else {
      // sinai: gentle plucks over minor chords — a pretty road with a shadow on it
      this.pad(t0, chord, barLen, 0.05, 'sine');
      for (let i = 0; i < 8; i++) {
        if (i % 2 !== 0 || Math.random() > 0.6) continue;
        this.pluck(t0 + i * eighth, def.scale[Math.floor(Math.random() * def.scale.length)], 0.07, 1.1);
      }
      this.bass(t0, chord[0] / 2, 0.1, 0.7);
    }
  }
}
