// Procedural pastel lullaby — no audio files, just the Web Audio API.
// A soft pad plays a gentle chord progression while a music-box melody
// plucks pentatonic notes over the top.

export class Music {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: number | null = null;
  private nextBarTime = 0;
  private bar = 0;
  enabled = true;

  private static BPM = 76;
  private static BAR = (60 / Music.BPM) * 4; // 4/4

  // Cmaj7 – Am7 – Fmaj7 – G6, one chord per bar (frequencies in Hz)
  private static CHORDS: number[][] = [
    [130.81, 164.81, 196.0, 246.94],  // C  E  G  B
    [110.0, 130.81, 164.81, 196.0],   // A  C  E  G
    [87.31, 130.81, 174.61, 220.0],   // F  C  F  A
    [98.0, 146.83, 196.0, 220.0],     // G  D  G  A
  ];
  // C major pentatonic for the music-box melody
  private static SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

  start(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.5 : 0;
    this.master.connect(this.ctx.destination);
    this.nextBarTime = this.ctx.currentTime + 0.1;
    this.timer = window.setInterval(() => this.schedule(), 200);
  }

  toggle(): boolean {
    this.enabled = !this.enabled;
    if (this.ctx && this.master) {
      this.master.gain.linearRampToValueAtTime(
        this.enabled ? 0.5 : 0,
        this.ctx.currentTime + 0.2,
      );
    }
    return this.enabled;
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

  private schedule(): void {
    if (!this.ctx) return;
    // keep ~1.5 bars scheduled ahead
    while (this.nextBarTime < this.ctx.currentTime + Music.BAR * 1.5) {
      this.scheduleBar(this.nextBarTime, this.bar);
      this.nextBarTime += Music.BAR;
      this.bar++;
    }
  }

  private scheduleBar(t0: number, bar: number): void {
    const ctx = this.ctx!;
    const chord = Music.CHORDS[bar % Music.CHORDS.length];
    const barLen = Music.BAR;

    // --- soft triangle pad, one voice per chord tone ---
    for (const freq of chord) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      osc.detune.value = (Math.random() - 0.5) * 6;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.linearRampToValueAtTime(0.045, t0 + barLen * 0.3);
      g.gain.linearRampToValueAtTime(0.0001, t0 + barLen * 1.05);
      osc.connect(g).connect(this.master!);
      osc.start(t0);
      osc.stop(t0 + barLen * 1.1);
    }

    // --- music-box melody: sparse eighth notes ---
    const eighth = barLen / 8;
    for (let i = 0; i < 8; i++) {
      // sparse & gentle: play ~half the slots, always on beat 1
      if (i !== 0 && Math.random() > 0.45) continue;
      const note = Music.SCALE[Math.floor(Math.random() * Music.SCALE.length)];
      const t = t0 + i * eighth;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = note;
      g.gain.setValueAtTime(0.09, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
      osc.connect(g).connect(this.master!);
      osc.start(t);
      osc.stop(t + 1);
      // faint octave shimmer
      const osc2 = ctx.createOscillator();
      const g2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.value = note * 2;
      g2.gain.setValueAtTime(0.02, t);
      g2.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      osc2.connect(g2).connect(this.master!);
      osc2.start(t);
      osc2.stop(t + 0.6);
    }

    // --- soft heartbeat bass on beats 1 & 3 ---
    for (const beat of [0, 2]) {
      const t = t0 + (beat * barLen) / 4;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = Music.CHORDS[bar % Music.CHORDS.length][0] / 2;
      g.gain.setValueAtTime(0.11, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      osc.connect(g).connect(this.master!);
      osc.start(t);
      osc.stop(t + 0.55);
    }
  }
}
