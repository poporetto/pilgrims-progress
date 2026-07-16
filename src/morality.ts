import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter III — Mr. Worldly Wiseman and Mount Sinai.
// On the road, Christian is charmed off the true way by Mr. Worldly Wiseman,
// who points him to Mr. Legality (and his son Civility) in the village of
// Morality. The path there passes beneath Mount Sinai, which leans over the
// road and flashes with fire. Christian freezes in terror; Evangelist
// arrives, exposes the frauds, and sends him back to the true way — reaching
// the western edge completes the chapter.

interface MoralityCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  rumbleSound: () => void;
}

type Phase = 'walk' | 'diverted' | 'quaking' | 'evangelist' | 'rebuke' | 'return' | 'done';

const WW_X = -7;        // where Worldly Wiseman waits by the road
const SINAI_TRIGGER = 6.5; // walking past here brings the mountain's wrath

export class MoralityScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: MoralityCallbacks;
  private christian: BearParts;
  private wiseman: BearParts;
  private evangelist: BearParts;
  private revisit = false;
  private built = false;
  private mountain: THREE.Group | null = null;
  private fireSeams: THREE.Mesh[] = [];
  private fireLight: THREE.PointLight | null = null;
  private sparks: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private quake = 0;         // current shake amplitude
  private rumbleTimer = 0;
  private evangelistT = 0;
  private wwLeaving = false;

  constructor(cb: MoralityCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true,
    });
    // Mr. Worldly Wiseman: a stout, prosperous bear in a fine lilac waistcoat
    this.wiseman = makeBear({
      species: 'bear', fur: PALETTE.bearCocoa,
      outfit: 'shirt', outfitColor: 0xcbb8f0, scale: 1.1,
    });
    // ...and a tall top hat, because of course he wears one
    this.wiseman.head.add(block(0.8, 0.1, 0.8, 0x4a4440, 0, 0.88, 0));
    this.wiseman.head.add(block(0.55, 0.55, 0.55, 0x4a4440, 0, 1.2, 0));
    this.wiseman.head.add(block(0.58, 0.12, 0.58, 0x8a5a5a, 0, 1.0, 0)); // hat band
    // Evangelist, as he appears in the village
    this.evangelist = makeBear({
      species: 'bear', fur: 0xa89a8c, outfit: 'robe',
      outfitColor: PALETTE.robeWhite, scale: 1.15,
    });
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xd4dfe4);
    s.fog = new THREE.Fog(0xd4dfe4, 34, 90);

    s.add(new THREE.HemisphereLight(0xe0ecef, 0xafc4a4, 0.85));
    const sun = new THREE.DirectionalLight(0xf5ecd8, 1.15);
    sun.position.set(-24, 38, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -45;
    sun.shadow.camera.right = 45;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -40;
    s.add(sun);

    // rolling ground — greener west, drier toward the mountain
    const ground = new THREE.Mesh(new THREE.BoxGeometry(140, 1, 90), mat(0x9cc48e));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 60; i++) {
      const x = -45 + Math.random() * 90;
      const z = -35 + Math.random() * 70;
      const dry = x > 4;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        dry ? (Math.random() > 0.5 ? 0xb3b98a : 0xa6ad84) : (Math.random() > 0.5 ? 0x8cba80 : 0xaad49c),
        x, 0.05, z);
      p.castShadow = false;
      s.add(p);
    }

    // the smooth, pleasant path — wide and easy, running west → east
    for (let i = 0; i < 22; i++) {
      const px = -30 + i * 2.6;
      const path = block(2.8, 0.12, 3.4, 0xe8d9b8, px, 0.06, Math.sin(i * 0.4) * 0.8);
      path.castShadow = false;
      s.add(path);
    }

    // friendly trees on the west half only — the east grows bare
    for (const [tx, tz, blossom] of [
      [-24, -8, true], [-19, 9, false], [-13, -10, false], [-8, 8, true], [-2, -9, false],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }
    // gray boulders near the mountain
    for (const [bx, bz] of [[8, 6], [11, -7], [16, 8], [19, -6], [9, -10]] as const) {
      s.add(block(1.2 + Math.random(), 0.8, 1.1, 0x9a9aa4, bx, 0.4, bz));
      s.add(block(0.7, 0.5, 0.7, 0x8d8d96, bx + 0.8, 0.25, bz + 0.5));
    }

    // ---------- MOUNT SINAI: hangs over the road, flashing fire ----------
    const m = new THREE.Group();
    const rock = (w: number, h: number, d: number, c: number, x: number, y: number, z: number) =>
      m.add(block(w, h, d, c, x, y, z));
    // massive base on the north side of the road
    rock(16, 4.5, 10, 0x8d8d96, 0, 2.25, -6);
    rock(13, 3.5, 8, 0x7d7d88, 0.5, 6.2, -5.5);
    rock(10, 3.0, 7, 0x8d8d96, 0, 9.2, -5);
    rock(6.5, 2.6, 5, 0x6f6f7a, 0.5, 11.8, -4.5);
    rock(3.4, 2.0, 3, 0x7d7d88, 0, 13.6, -4);
    // the OVERHANG: a huge brow of rock leaning south over the road itself
    rock(11, 2.6, 6, 0x7d7d88, 0.5, 8.0, -0.5);
    rock(8, 2.2, 5.5, 0x6f6f7a, 1.0, 6.0, 1.6);
    rock(5.5, 1.8, 4, 0x62626e, 1.2, 4.6, 3.2);
    // crag details
    rock(2.2, 1.2, 1.8, 0x9a9aa4, -5.5, 4.9, -2);
    rock(1.8, 1.0, 1.4, 0x9a9aa4, 6, 5.2, -1.5);
    // fiery seams on the south face
    const seamMat = () => new THREE.MeshBasicMaterial({ color: 0xff8a3d, transparent: true, opacity: 0.9 });
    for (const [sx, sy, sz, sw, sh] of [
      [-2.5, 3.0, 4.9, 0.7, 1.6], [1.8, 2.2, 5.25, 0.5, 1.1],
      [3.4, 5.2, 3.7, 0.6, 1.4], [-1.0, 6.8, 2.6, 0.8, 1.2],
    ] as const) {
      const seam = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, 0.14), seamMat());
      seam.position.set(sx, sy, sz);
      m.add(seam);
      this.fireSeams.push(seam);
    }
    this.fireLight = new THREE.PointLight(0xff7a3d, 1.4, 26);
    this.fireLight.position.set(1, 5, 4.5);
    m.add(this.fireLight);
    m.position.set(14, 0, -2);
    s.add(m);
    this.mountain = m;

    // falling spark pool
    for (let i = 0; i < 12; i++) {
      const sm = new THREE.MeshBasicMaterial({ color: 0xffb35c, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), sm);
      mesh.visible = false;
      s.add(mesh);
      this.sparks.push({ mesh, m: sm, life: 1, vx: 0, vz: 0 });
    }

    // ---------- the village of Morality, on a rise beyond the mountain ----------
    const village = new THREE.Group();
    village.add(block(14, 1.2, 10, 0xaed9a0, 0, 0.6, 0)); // the rise
    const tidyHouse = (hx: number, hz: number, roof: number) => {
      village.add(block(2.2, 1.6, 1.9, 0xfaf6ec, hx, 2.0, hz));
      village.add(block(2.5, 0.7, 2.2, roof, hx, 3.15, hz));
      village.add(block(0.4, 1.0, 0.12, PALETTE.woodDark, hx, 1.7, hz + 1.0));
    };
    tidyHouse(-3.5, 0.5, 0x9db8d8);
    tidyHouse(0, 1.2, 0xb8c8b0);
    tidyHouse(3.5, 0.5, 0x9db8d8);
    for (let i = 0; i < 6; i++) {
      village.add(block(1.4, 0.5, 0.5, 0x86ad7d, -5 + i * 2.1, 1.45, 3.2)); // neat hedges
    }
    village.position.set(30, 0, -4);
    s.add(village);
    // Mr. Legality and Civility — two prim figures watching from the rise
    const legality = makeBear({ species: 'bear', fur: 0x8f8578, outfit: 'robe', outfitColor: 0x9db8d8, scale: 1.05 });
    legality.root.position.set(26.5, 1.2, -0.5);
    legality.root.rotation.y = -Math.PI / 2;
    s.add(legality.root);
    const civility = makeBear({ species: 'bear', fur: PALETTE.bearHoney, outfit: 'shirt', outfitColor: 0xfaf6ec, scale: 0.7 });
    civility.root.position.set(27.5, 1.2, 1.0);
    civility.root.rotation.y = -Math.PI / 2;
    s.add(civility.root);

    // Worldly Wiseman waits beside the path (north side, clear of the dialogue panel)
    this.wiseman.root.position.set(WW_X, 0, -2.4);
    this.wiseman.root.rotation.y = -Math.PI / 2;
    s.add(this.wiseman.root);

    // Evangelist starts hidden, off to the west
    this.evangelist.root.position.set(-20, 0, -3);
    this.evangelist.root.visible = false;
    s.add(this.evangelist.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.quake = 0;
    this.wwLeaving = false;
    // revisits spawn clear of the western exit threshold
    this.christian.root.position.set(revisit ? -24 : -27, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.scene.add(this.christian.root);
    if (revisit) {
      this.phase = 'done';
      this.wiseman.root.visible = false; // exposed and long gone
      this.evangelist.root.visible = false;
      this.cb.setObjective('⛰ Mount Sinai still smoulders — the west road leads back');
    } else {
      this.phase = 'walk';
      this.wiseman.root.visible = true;
      this.evangelist.root.visible = false;
      this.cb.setObjective('🎩 A well-dressed gentleman waits along the pleasant path…');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'quaking' || this.phase === 'evangelist' || this.phase === 'rebuke') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.z = THREE.MathUtils.clamp(p.z, -14, 14);
    // the mountain bars the way east in every phase — no one reaches Morality
    const eastLimit = this.phase === 'return' ? 8.5 : (this.revisit ? 9.5 : 20);
    p.x = THREE.MathUtils.clamp(p.x, -28, eastLimit);

    if (this.revisit) {
      if (p.x < -26.5) this.cb.onExit();
      return;
    }

    // he hails Christian from across the field — there is no slipping past
    if (this.phase === 'walk' && p.x > WW_X - 3) {
      this.phase = 'diverted'; // parked during the script
      this.cb.playScript([
        { speaker: 'Worldly Wiseman', text: 'Hello there! Good day, good day! Christian of the City of Destruction, unless I miss my guess — the bear with the famous burden!' },
        { speaker: 'Christian', text: 'Famous or not, sir, it is heavy. I\'m headed for the Wicket Gate — they say I can be rid of it there.' },
        { speaker: 'Worldly Wiseman', text: 'The Wicket Gate! Dear me. Mud, mountains, lions and worse lie on THAT road. You\'ve already had a taste of the Slough, haven\'t you?' },
        { speaker: 'Christian', text: '…I\'m still drying out, if I\'m honest.' },
        { speaker: 'Worldly Wiseman', text: 'Then listen to a practical bear! In the nearby village of MORALITY lives my good friend Mr. Legality — a master at easing burdens exactly like yours. And if he\'s busy, his fine son Civility will look after you.' },
        { speaker: 'Worldly Wiseman', text: 'A short, SAFE stroll — no mud, no nonsense. You could get a house there, send for your wife and cubs, and live respectably ever after!' },
        { speaker: 'Christian', text: 'No mud… a house for my family… Sir, that sounds very sensible indeed. Which way did you say?' },
        { speaker: 'Worldly Wiseman', text: 'Straight on, past that tall hill. First door on the left! Do give Mr. Legality my regards.' },
      ], () => {
        this.cb.setObjective('🏘 Follow the pleasant path east, toward the village of Morality');
      });
      return;
    }

    if (this.phase === 'diverted' && p.x > SINAI_TRIGGER) {
      this.phase = 'quaking';
      this.quake = 1;
      this.cb.rumbleSound();
      this.cb.playScript([
        { speaker: 'Christian', text: 'The hill… it hangs right OVER the road! And — fire! Fire is flashing from its sides!' },
        { speaker: 'Christian', text: 'It groans like thunder above me. One more step and it will surely fall… and this burden feels heavier than it has ever been. What have I done?' },
      ], () => {
        this.phase = 'evangelist';
        this.evangelistT = 0;
        this.evangelist.root.visible = true;
        this.evangelist.root.position.set(p.x - 14, 0, -2.5);
        this.cb.setObjective('👣 Someone hurries up the road behind you…');
      });
      return;
    }

    if (this.phase === 'return' && p.x < -26.5) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private spawnSpark(): void {
    if (!this.mountain) return;
    const d = this.sparks.find((s) => s.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 1.2;
    d.vz = (Math.random() - 0.5) * 1.2;
    d.mesh.position.set(
      this.mountain.position.x + (Math.random() - 0.5) * 8,
      5.5 + Math.random() * 3,
      this.mountain.position.z + 3 + Math.random() * 2.5,
    );
    d.mesh.visible = true;
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // Worldly Wiseman: waits smugly, then hurries off toward Morality once exposed
    if (this.wiseman.root.visible) {
      if (this.wwLeaving) {
        this.wiseman.root.position.x += dt * 6;
        this.wiseman.root.rotation.y = Math.PI / 2;
        animateBear(this.wiseman, t, true);
        if (this.wiseman.root.position.x > 24) this.wiseman.root.visible = false;
      } else {
        animateBear(this.wiseman, t + 1.3, false);
      }
    }

    // Evangelist hurries in from the west
    if (this.phase === 'evangelist') {
      this.evangelistT += dt;
      const ep = this.evangelist.root.position;
      const target = this.christian.root.position;
      const dx = (target.x - 2.6) - ep.x;
      const dz = (target.z - 0.6) - ep.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.3) {
        ep.x += (dx / d) * dt * 6.5;
        ep.z += (dz / d) * dt * 6.5;
        this.evangelist.root.rotation.y = Math.atan2(dx, dz);
        animateBear(this.evangelist, t, true);
      } else if (this.evangelistT > 0.6) {
        this.phase = 'rebuke';
        // Christian turns to face him
        this.christian.root.rotation.y = -Math.PI / 2;
        this.cb.playScript([
          { speaker: 'Evangelist', text: 'Christian. What are you doing HERE?' },
          { speaker: 'Christian', text: 'E-Evangelist! A… a gentleman told me about a quicker way. A Mr. Legality, in the village of Morality, who could lift my burden without the mud and the mountains…' },
          { speaker: 'Evangelist', text: 'Listen carefully, dear bear. That gentleman is Mr. WORLDLY WISEMAN, and he loves only the wisdom of this world. He turns every pilgrim he can away from the true road.' },
          { speaker: 'Evangelist', text: 'Mr. Legality cannot loosen a single strap of your burden — no creature has ever been set free at his door. And Civility, for all his polish, is a smiling fraud like his father.' },
          { speaker: 'Evangelist', text: 'And THIS mountain is the reason. It is Sinai — the Law itself. It thunders, it flashes, it shows your burden for what it is… but it cannot LIFT it. Trust in your own good deeds, and it will hang over you for the rest of your life.' },
          { speaker: 'Christian', text: 'Then I\'ve been a fool twice over — once into the mud, and once onto this path. Is there any hope left for me?' },
          { speaker: 'Evangelist', text: 'There is. The way you left is exactly where you left it. Go back to the true road, Christian — on to the Wicket Gate — and don\'t leave it again.' },
          { speaker: 'Christian', text: 'I\'ll go back at once. Thank you, Evangelist… again.' },
        ], () => {
          this.phase = 'return';
          this.wwLeaving = true; // exposed — he scurries home to Morality
          this.cb.setObjective('↩ Return west, back to the true way');
        });
      }
    } else if (this.evangelist.root.visible) {
      animateBear(this.evangelist, t + 0.8, false);
    }

    // ---------- Mount Sinai: fire, thunder, and trembling ----------
    const ph: Phase = this.phase;
    this.quake = Math.max(0, this.quake - dt * 0.25);
    const menace = ph === 'quaking' || ph === 'evangelist' ? 1 : 0.35;
    if (this.mountain) {
      const q = this.quake * 0.09;
      this.mountain.position.x = 14 + (Math.random() - 0.5) * q;
      this.mountain.position.z = -2 + (Math.random() - 0.5) * q;
    }
    for (let i = 0; i < this.fireSeams.length; i++) {
      const flick = 0.35 + 0.65 * Math.abs(Math.sin(t * (2.6 + i * 0.7) + i * 2));
      (this.fireSeams[i].material as THREE.MeshBasicMaterial).opacity = flick * menace + 0.15;
    }
    if (this.fireLight) {
      this.fireLight.intensity = (0.8 + Math.abs(Math.sin(t * 3.1)) * 1.6) * menace;
    }
    // rumbles + sparks, frequent while the mountain is angry
    this.rumbleTimer -= dt;
    if (this.rumbleTimer <= 0) {
      this.rumbleTimer = menace >= 1 ? 1.6 + Math.random() : 6 + Math.random() * 5;
      this.cb.rumbleSound();
      this.quake = Math.max(this.quake, menace >= 1 ? 1 : 0.4);
      for (let i = 0; i < (menace >= 1 ? 5 : 2); i++) this.spawnSpark();
    }
    for (const d of this.sparks) {
      if (d.life >= 1) continue;
      d.life = Math.min(1, d.life + dt * 0.9);
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.z += d.vz * dt;
      d.mesh.position.y -= dt * 3.2;
      d.m.opacity = 0.9 * (1 - d.life);
      if (d.mesh.position.y < 0.1 || d.life >= 1) {
        d.life = 1;
        d.mesh.visible = false;
      }
    }
  }
}
