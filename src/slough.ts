import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter II — The Slough of Despond.
// Christian (and Pliable, if he came) fall into the mire. Pliable scrambles
// out on the side nearest home and deserts him. Christian, weighed down by
// his burden, must struggle across on the half-hidden Steps, gets stuck at
// the far bank, and is pulled out by Help — as in the book.

interface SloughCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving the marsh on a revisit
  splashSound: () => void;
}

type Phase = 'walk' | 'fallingIn' | 'crossing' | 'stuck' | 'rescue' | 'epilogue' | 'done';

const BOG_CX = 5;   // bog ellipse centre/size
const BOG_RX = 11.5;
const BOG_RZ = 8;

export class SloughScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: SloughCallbacks;
  private christian: BearParts;
  private pliable: BearParts | null = null;
  private pliableStage: 'follow' | 'aghast' | 'clamber' | 'farewell' | 'flee' = 'follow';
  private revisit = false;
  private help: BearParts;
  private steps: Array<[number, number]> = [
    [-3.5, 1.0], [-1, -0.6], [1.5, 1.1], [4, -0.9],
    [6.5, 0.9], [9, -1.0], [11.5, 0.7], [13.5, -0.5],
  ];
  private sink = 0;
  private wisps: THREE.Mesh[] = [];
  private bubbles: Array<{ mesh: THREE.Mesh; phase: number }> = [];
  private splashes: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private splashTimer = 0;
  private rescueT = 0;
  private built = false;

  constructor(cb: SloughCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true,
    });
    this.help = makeBear({
      species: 'bear', fur: 0x8f9a8a,
      outfit: 'robe', outfitColor: 0xc7ecc2, scale: 1.2,
    });
  }

  private inBog(x: number, z: number): boolean {
    const dx = (x - BOG_CX) / BOG_RX;
    const dz = z / BOG_RZ;
    return dx * dx + dz * dz < 1;
  }

  private nearStep(x: number, z: number): boolean {
    for (const [sx, sz] of this.steps) {
      if (Math.hypot(x - sx, z - sz) < 1.35) return true;
    }
    return false;
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    // gloomier, but still pastel
    s.background = new THREE.Color(0xb9c9d4);
    s.fog = new THREE.Fog(0xb9c9d4, 30, 80);

    s.add(new THREE.HemisphereLight(0xd7e4ec, 0xa8b8a0, 0.85));
    const sun = new THREE.DirectionalLight(0xf2ead2, 1.1);
    sun.position.set(-25, 40, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -45;
    sun.shadow.camera.right = 45;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -40;
    s.add(sun);

    // marshy ground
    const ground = new THREE.Mesh(new THREE.BoxGeometry(140, 1, 90), mat(0x93b98a));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);

    // scraggly grass patches
    for (let i = 0; i < 70; i++) {
      const x = -45 + Math.random() * 90;
      const z = -35 + Math.random() * 70;
      if (this.inBog(x, z)) continue;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x86ad7d : 0xa4c69a, x, 0.05, z);
      p.castShadow = false;
      s.add(p);
    }

    // path in from the west, out to the east
    for (const [px, pw] of [[-22, 16], [22, 10]] as const) {
      const path = block(pw, 0.12, 3.6, 0xd9c9a8, px, 0.06, 0);
      path.castShadow = false;
      s.add(path);
    }

    // ---------- the bog itself: layered mud blobs ----------
    const mudColors = [0x8a7355, 0x7c674c, 0x6f5a42];
    for (let ring = 0; ring < 3; ring++) {
      const rx = BOG_RX - ring * 1.6;
      const rz = BOG_RZ - ring * 1.3;
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * Math.PI * 2;
        const bx = BOG_CX + Math.cos(a) * rx * (0.55 + 0.35 * Math.random());
        const bz = Math.sin(a) * rz * (0.55 + 0.35 * Math.random());
        const b = block(3 + Math.random() * 3, 0.1 + ring * 0.03, 2.5 + Math.random() * 2.5,
          mudColors[ring], bx, 0.1 + ring * 0.03, bz);
        b.castShadow = false;
        s.add(b);
      }
    }
    const mudCore = block(BOG_RX * 1.7, 0.14, BOG_RZ * 1.7, 0x7c674c, BOG_CX, 0.1, 0);
    mudCore.castShadow = false;
    s.add(mudCore);

    // mud bubbles that pop
    for (let i = 0; i < 10; i++) {
      const m = block(0.22, 0.22, 0.22, 0xa79272,
        BOG_CX - 9 + Math.random() * 18, 0.28, -6 + Math.random() * 12);
      m.castShadow = false;
      s.add(m);
      this.bubbles.push({ mesh: m, phase: Math.random() * 6.28 });
    }

    // ---------- the Steps: pale solid stones through the midst ----------
    for (const [sx, sz] of this.steps) {
      s.add(block(1.5, 0.28, 1.5, 0xd8d3cc, sx, 0.16, sz));
      s.add(block(1.7, 0.1, 1.7, 0xc4beb5, sx, 0.04, sz));
    }

    // reeds and cattails around the rim
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2;
      const rx = BOG_CX + Math.cos(a) * (BOG_RX + 1.5 + Math.random() * 2);
      const rz = Math.sin(a) * (BOG_RZ + 1.2 + Math.random() * 2);
      s.add(block(0.14, 1.3 + Math.random() * 0.7, 0.14, 0x7ba05f, rx, 0.8, rz));
      if (i % 2 === 0) s.add(block(0.22, 0.45, 0.22, 0xc9a865, rx, 1.75, rz));
    }

    // dead trees
    for (const [tx, tz, ry] of [[-12, -10, 0.4], [16, 9, 1.2], [-8, 11, 2.2], [20, -9, 0.9]] as const) {
      const dead = new THREE.Group();
      dead.add(block(0.45, 2.6, 0.45, 0x9a8f86, 0, 1.3, 0));
      dead.add(block(1.6, 0.3, 0.3, 0x9a8f86, 0.5, 2.3, 0));
      dead.add(block(0.3, 1.1, 0.3, 0x9a8f86, 1.2, 2.9, 0));
      dead.add(block(1.1, 0.25, 0.25, 0x8a7f76, -0.6, 1.7, 0.1));
      dead.position.set(tx, 0, tz);
      dead.rotation.y = ry;
      s.add(dead);
    }

    // drifting marsh mist
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(4 + Math.random() * 4, 0.8, 2.5 + Math.random() * 2),
        new THREE.MeshLambertMaterial({ color: 0xe8eef0, transparent: true, opacity: 0.35 }),
      );
      m.position.set(-20 + Math.random() * 45, 0.9 + Math.random() * 0.8, -12 + Math.random() * 24);
      m.castShadow = false;
      s.add(m);
      this.wisps.push(m);
    }

    // splash particle pool (muddy brown)
    for (let i = 0; i < 14; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x8a7355, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), m);
      mesh.visible = false;
      s.add(mesh);
      this.splashes.push({ mesh, m, life: 1, vx: 0, vz: 0 });
    }

    // a warning sign by the west path
    const sign = new THREE.Group();
    sign.add(block(0.16, 1.6, 0.16, PALETTE.woodDark, 0, 0.8, 0));
    sign.add(block(1.6, 0.8, 0.12, PALETTE.wood, 0, 1.5, 0));
    sign.add(block(1.2, 0.1, 0.14, 0x8a6f52, 0, 1.62, 0));
    sign.add(block(1.2, 0.1, 0.14, 0x8a6f52, 0, 1.38, 0));
    sign.position.set(-11, 0, 4);
    sign.rotation.y = -0.5;
    s.add(sign);

    // Help waits unseen beyond the east bank
    this.help.root.position.set(24, 0, 0);
    this.help.root.visible = false;
    // walking staff
    this.help.armR.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, 0.1, -0.6, 0.2));
    s.add(this.help.root);
  }

  // ------------------------------------------------------------ runtime

  enter(withPliable: boolean, revisit = false): { christian: BearParts; pliable: BearParts | null } {
    this.build();
    this.revisit = revisit;
    this.phase = 'walk';
    this.sink = 0;
    if (this.pliable) {
      this.scene.remove(this.pliable.root);
      this.pliable = null;
    }
    this.pliableStage = 'follow';
    this.christian.root.position.set(-24, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.scene.add(this.christian.root);
    if (revisit) {
      // Help still keeps watch on the east bank
      this.help.root.visible = true;
      this.help.root.position.set(18.4, 0, 2.2);
      this.help.root.rotation.y = -Math.PI / 2;
      this.help.armR.rotation.x = 0;
      this.cb.setObjective('🌫 The old mire — cross east, or turn back west to the road');
      return { christian: this.christian, pliable: null };
    }
    if (withPliable) {
      this.pliable = makeBear({ species: 'rabbit', outfit: 'shirt', outfitColor: 0xffd6a5, scale: 0.95 });
      this.pliable.root.position.set(-26, 0, 1.5);
      this.scene.add(this.pliable.root);
      this.cb.playScript([
        { speaker: 'Pliable', text: 'So tell me MORE about this Celestial City! Do the crowns come in rabbit sizes? Is there clover?' },
        { speaker: 'Christian', text: 'Ha! The book says there is no night there, and no tears… Careful, friend — the ground past those reeds looks soft.' },
        { speaker: 'Pliable', text: 'Soft, schmoft! With GLORY ahead, who has time to look down? Hop hop — race you to the far side!' },
      ]);
    }
    this.cb.setObjective('🌫 Cross the marsh to the east');
    return { christian: this.christian, pliable: this.pliable };
  }

  private spawnSplash(x: number, z: number): void {
    const d = this.splashes.find((p) => p.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 1.2;
    d.vz = (Math.random() - 0.5) * 1.2;
    d.mesh.position.set(x, 0.2, z);
    d.mesh.visible = true;
  }

  // returns speed multiplier for player movement this frame
  moveFactor(): number {
    const p = this.christian.root.position;
    if (
      this.phase === 'fallingIn' || this.phase === 'stuck' ||
      this.phase === 'rescue' || this.phase === 'epilogue'
    ) return 0;
    if (!this.inBog(p.x, p.z)) return 1;
    return this.nearStep(p.x, p.z) ? 0.72 : 0.34;
  }

  // constrain movement + fire story triggers; called after player moves
  afterMove(moving: boolean): void {
    const p = this.christian.root.position;
    // world bounds — the east bank is unclimbable until Help pulls him out
    const freed = this.revisit ||
      this.phase === 'rescue' || this.phase === 'epilogue' || this.phase === 'done';
    p.x = THREE.MathUtils.clamp(p.x, -28, freed ? 34 : 15.6);
    p.z = THREE.MathUtils.clamp(p.z, -16, 16);

    // on a revisit, either bank leads back to the world map
    if (this.revisit) {
      if (p.x > 31 || p.x < -27) this.cb.onExit();
      if (moving && this.inBog(p.x, p.z)) {
        this.splashTimer -= 0.016;
        if (this.splashTimer <= 0) {
          this.splashTimer = 0.18;
          this.spawnSplash(p.x, p.z);
        }
      }
      return;
    }

    if (this.phase === 'walk' && this.inBog(p.x + 1.2, p.z)) {
      this.phase = 'fallingIn';
      this.cb.splashSound();
      for (let i = 0; i < 6; i++) this.spawnSplash(p.x + Math.random(), p.z + (Math.random() - 0.5));
      if (this.pliable) {
        // he raced ahead — the ground gives way under both of them
        this.pliable.root.position.set(p.x + 1.9, -0.35, p.z + 0.9);
        this.pliable.root.rotation.y = Math.PI / 2;
        for (let i = 0; i < 4; i++) {
          this.spawnSplash(p.x + 1.9 + Math.random(), p.z + 0.9 + (Math.random() - 0.5));
        }
      }
      const lines: DialogueLine[] = this.pliable
        ? [
            { speaker: 'Christian', text: 'Wh—whoa! The ground — it is swallowing us! Hold fast, Pliable!' },
            { speaker: 'Pliable', text: 'GLUB—! Mud! In my EARS! In my WHISKERS! Christian, I am DISSOLVING!' },
            { speaker: 'Pliable', text: 'Is THIS the glorious happiness you spoke of?! Golden streets, you said! CROWNS, you said!' },
            { speaker: 'Christian', text: 'Courage, friend! If we press on together, the far bank cannot be—' },
            { speaker: 'Pliable', text: 'FORWARD?! Into MORE of it?! Not for every crown in every city! Out of my way!' },
          ]
        : [
            { speaker: 'Christian', text: 'Wh—whoa! The ground… it is swallowing me! This must be the mire the villagers whispered of…' },
          ];
      this.cb.playScript(lines, () => {
        if (this.pliable) {
          // stay frozen while Pliable flounders back to the west bank
          this.pliableStage = 'clamber';
          this.cb.setObjective('😨 Pliable flounders back toward the bank nearest home…');
        } else {
          this.phase = 'crossing';
          this.cb.setObjective('🪨 Struggle across — feel for the solid Steps beneath the mire!');
        }
      });
    }

    if (this.phase === 'crossing' && p.x > 15.2) {
      this.phase = 'stuck';
      this.cb.playScript([
        { speaker: 'Christian', text: '*pant* … The bank is right there — but I cannot climb it. This burden on my back drags me down and down…' },
        { speaker: 'Christian', text: 'Is this how the journey ends? Stuck in the mire, within sight of the way out…?' },
      ], () => {
        this.phase = 'rescue';
        this.rescueT = 0;
        this.help.root.visible = true;
        this.cb.setObjective('🤝 Someone is coming…');
      });
    }

    if (moving && this.phase === 'crossing' && this.inBog(p.x, p.z)) {
      this.splashTimer -= 0.016;
      if (this.splashTimer <= 0) {
        this.splashTimer = 0.18;
        this.spawnSplash(p.x, p.z);
      }
    }
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const p = this.christian.root.position;

    // sinking: knee-deep off the Steps, ankle-deep on them
    let sinkTarget = 0;
    if (this.inBog(p.x, p.z) && this.phase !== 'done') {
      sinkTarget = this.nearStep(p.x, p.z) ? 0.16 : 0.5;
      if (this.phase === 'stuck') sinkTarget = 0.62;
    }
    if (this.phase === 'rescue' || this.phase === 'epilogue') sinkTarget = this.rescueT > 1 ? 0 : 0.62;
    this.sink += (sinkTarget - this.sink) * Math.min(dt * 3, 1);
    this.christian.root.position.y = -this.sink;
    animateBear(this.christian, t, moving && this.phase !== 'stuck' && this.phase !== 'rescue' && this.phase !== 'epilogue');

    // Pliable: follows until the fall, clambers out on the side nearest home,
    // gives his farewell, then bolts
    if (this.pliable) {
      const pp = this.pliable.root.position;
      if (this.pliableStage === 'clamber') {
        // flounders west through the mud, half-sunk and splashing
        pp.x -= dt * 3.0;
        pp.y = this.inBog(pp.x, pp.z) ? -0.42 + Math.sin(t * 11) * 0.06 : 0;
        this.pliable.root.rotation.y = -Math.PI / 2;
        animateBear(this.pliable, t * 1.7, true);
        if (this.inBog(pp.x, pp.z) && Math.random() < dt * 7) this.spawnSplash(pp.x, pp.z);
        if (pp.x < -9.5) {
          this.pliableStage = 'farewell';
          pp.y = 0;
          this.cb.playScript([
            { speaker: 'Pliable', text: '*scrambles out, dripping* Blegh! Pfah! Mud in my ears, mud in my whiskers, mud in places a gentle-rabbit shan\'t MENTION!' },
            { speaker: 'Pliable', text: 'If this bog is the FIRST step of your glorious journey, Christian, you may keep all the rest of it!' },
            { speaker: 'Christian', text: 'Pliable, wait! The crowns, the city — it is all still true! One mire does not un-make it!' },
            { speaker: 'Pliable', text: 'Then you may have my share of the crowns AND my share of the mud. I am going HOME. Farewell — and good luck to your poor back!' },
            { speaker: 'Christian', text: '…And there he goes, hopping for home. *sigh* Then I cross alone. There must be solid footing somewhere beneath this mire…' },
          ], () => {
            this.pliableStage = 'flee';
            this.phase = 'crossing';
            this.cb.setObjective('🪨 Struggle across — feel for the solid Steps beneath the mire!');
          });
        }
      } else if (this.pliableStage === 'farewell') {
        // hops in place on the west bank, shaking the mud off
        pp.y = Math.abs(Math.sin(t * 6)) * 0.16;
        this.pliable.root.rotation.y = Math.PI / 2; // faces back toward Christian
        animateBear(this.pliable, t * 2, false);
      } else if (this.pliableStage === 'flee') {
        pp.x -= dt * 9;
        pp.y = 0;
        this.pliable.root.rotation.y = -Math.PI / 2;
        animateBear(this.pliable, t * 1.5, true);
        if (pp.x < -30) {
          this.scene.remove(this.pliable.root);
          this.pliable = null;
        }
      } else if (this.phase === 'walk') {
        const dx = p.x - pp.x;
        const dz = p.z - pp.z;
        const d = Math.hypot(dx, dz);
        if (d > 2.1) {
          pp.x += (dx / d) * dt * 6.4;
          pp.z += (dz / d) * dt * 6.4;
          this.pliable.root.rotation.y = Math.atan2(dx, dz);
          animateBear(this.pliable, t + 0.4, true);
        } else {
          animateBear(this.pliable, t + 0.4, false);
        }
      } else {
        // stands aghast in the mud during the dialogue
        this.pliable.root.position.y = -0.35;
        animateBear(this.pliable, t + 0.4, false);
      }
    }

    // Help's rescue sequence
    if (this.phase === 'rescue') {
      this.rescueT += dt;
      const hp = this.help.root.position;
      if (this.rescueT <= 1.6) {
        // Help walks to the bank edge
        hp.x = THREE.MathUtils.lerp(24, 17.6, Math.min(this.rescueT / 1.6, 1));
        this.help.root.rotation.y = -Math.PI / 2;
        animateBear(this.help, t, true);
      } else if (this.rescueT < 1.7) {
        animateBear(this.help, t, false);
        this.help.armR.rotation.x = -1.2; // reaches out
      } else {
        this.phase = 'epilogue';
        this.cb.playScript([
          { speaker: '???', text: 'Ho there, friend in the mire! What do you there?' },
          { speaker: 'Christian', text: 'I fell in as I fled the City of Destruction — and this burden sinks me. I cannot reach the bank!' },
          { speaker: 'Help', text: 'I am called Help. But tell me — why did you not look for the Steps? Good solid stones lie through the very midst of this slough.' },
          { speaker: 'Christian', text: 'Fear chased me in so fast, I never thought to look down…' },
          { speaker: 'Help', text: 'So it goes with every pilgrim. Here — give me your paw!' },
          { speaker: 'Help', text: '*HEAVE!*' },
        ], () => {
          // hauled out onto the bank
          this.rescueT = 2;
          this.christian.root.position.set(18.4, 0, 0);
          this.sink = 0;
          this.cb.splashSound();
          this.cb.playScript([
            { speaker: 'Christian', text: '*gasp* … Solid ground. Thank you, Help. I had nearly given up hope.' },
            { speaker: 'Help', text: 'This is the Slough of Despond, friend. When a pilgrim first wakes to how lost he is, all his fears and doubts and discouragements come running — and they settle here, in this low place.' },
            { speaker: 'Help', text: 'The King\'s labourers have worked this patch these sixteen hundred years, yet it swallows every cartload of good ground. It cannot be mended — only crossed, by the Steps.' },
            { speaker: 'Christian', text: 'And Pliable… he struggled out on the side nearest home.' },
            { speaker: 'Help', text: 'Aye. Many turn back at the first mire. But you came through, burden and all. Go on, Christian — the true Gate is not far now.' },
          ], () => {
            this.phase = 'done';
            this.cb.onComplete();
          });
        });
      }
    }

    // ambient
    for (let i = 0; i < this.wisps.length; i++) {
      const m = this.wisps[i];
      m.position.x += dt * 0.3;
      if (m.position.x > 30) m.position.x = -25;
      (m.material as THREE.MeshLambertMaterial).opacity = 0.25 + 0.12 * Math.sin(t * 0.6 + i);
    }
    for (const b of this.bubbles) {
      const c = (t * 0.5 + b.phase) % 2;
      b.mesh.visible = c < 1;
      b.mesh.position.y = 0.2 + c * 0.25;
      b.mesh.scale.setScalar(0.5 + c * 0.9);
    }
    for (const d of this.splashes) {
      if (d.life >= 1) continue;
      d.life = Math.min(1, d.life + dt * 2.4);
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.z += d.vz * dt;
      d.mesh.position.y += dt * (0.8 - d.life);
      d.m.opacity = 0.75 * (1 - d.life);
      if (d.life >= 1) d.mesh.visible = false;
    }
  }
}
