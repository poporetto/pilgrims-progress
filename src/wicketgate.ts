import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter IV — The Wicket Gate.
// A long, straight road; Christian mutters his doubts as he walks it. At the
// Gate he knocks, and Goodwill — a great golden lion — opens to him, pulling
// him through before Beelzebub's archers (from the dark castle nearby) can
// find their mark. Goodwill hears his story, points him up the straight and
// narrow King's Highway, and promises the burden will fall at the place of
// deliverance ahead.

interface WicketCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  rumbleSound: () => void; // reused as the castle's menacing thrum
  blipSound: () => void;
}

type Phase = 'approach' | 'knock' | 'volley' | 'inside' | 'freeroam' | 'done';

const GATE_X = 10;       // the wall + wicket gate
const CASTLE = new THREE.Vector3(17, 0, -15); // Beelzebub's castle, NE of the gate
const HIGHWAY_END = 50;  // the glow at the end of the narrow way

export class WicketGateScene {
  scene = new THREE.Scene();
  phase: Phase = 'approach';
  private cb: WicketCallbacks;
  private christian: BearParts;
  private goodwill: BearParts;
  private revisit = false;
  private built = false;
  private mutterIndex = 0; // how many roadside doubts have been spoken
  private doorL: THREE.Group | null = null;
  private doorR: THREE.Group | null = null;
  private doorOpen = false;
  private castleGlows: THREE.Mesh[] = [];
  private arrows: Array<{
    g: THREE.Group; t: number; active: boolean;
    from: THREE.Vector3; to: THREE.Vector3;
  }> = [];
  private volleyT = 0;
  private arrowTimer = 0;
  private lightBeam: THREE.Group | null = null;

  constructor(cb: WicketCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true,
    });
    // Goodwill: a great golden lion in a white robe
    this.goodwill = makeBear({
      species: 'lion', outfit: 'robe',
      outfitColor: PALETTE.robeWhite, scale: 1.3,
    });
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xc8dce8);
    s.fog = new THREE.Fog(0xc8dce8, 36, 95);

    s.add(new THREE.HemisphereLight(0xe2eef2, 0xb2c8a6, 0.9));
    const sun = new THREE.DirectionalLight(0xf7eed8, 1.2);
    sun.position.set(-22, 38, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -70;
    sun.shadow.camera.right = 70;
    sun.shadow.camera.top = 45;
    sun.shadow.camera.bottom = -45;
    s.add(sun);

    // rolling ground
    const ground = new THREE.Mesh(new THREE.BoxGeometry(180, 1, 90), mat(0x9dc793));
    ground.position.set(-5, -0.5, 0);
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 70; i++) {
      const x = -70 + Math.random() * 130;
      const z = -35 + Math.random() * 70;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x8cba80 : 0xaad49c, x, 0.05, z);
      p.castShadow = false;
      s.add(p);
    }

    // ---------- the long straight road, west → the gate → the highway ----------
    for (let i = 0; i < 30; i++) {
      const px = -62 + i * 2.5;
      const path = block(2.5, 0.12, 3.2, PALETTE.path, px, 0.06, 0);
      path.castShadow = false;
      s.add(path);
    }
    // lamps pacing out the lonely miles
    for (const lx of [-52, -36, -20, -4] as const) {
      const lamp = new THREE.Group();
      lamp.add(block(0.16, 2.2, 0.16, PALETTE.woodDark, 0, 1.1, 0));
      const bulb = block(0.34, 0.34, 0.34, PALETTE.light, 0, 2.35, 0);
      bulb.material = new THREE.MeshLambertMaterial({
        color: PALETTE.light, emissive: 0xfff0b0, emissiveIntensity: 0.55,
      });
      lamp.add(bulb);
      lamp.position.set(lx, 0, 2.6);
      s.add(lamp);
    }
    // scattered trees along the approach
    for (const [tx, tz, blossom] of [
      [-56, -7, false], [-48, 8, true], [-38, -9, false], [-27, 7, false],
      [-16, -8, true], [-8, 9, false],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // ---------- the wall and the Wicket Gate ----------
    const BRICK = 0xf2ecdf;
    const MORTAR = 0xdcd4c2;
    for (const side of [-1, 1]) {
      // wall runs away from the gate on both sides
      for (let i = 0; i < 7; i++) {
        const wz = side * (3.4 + i * 4.4);
        s.add(block(1.3, 3.0, 4.4, i % 2 === 0 ? BRICK : 0xe9e2d2, GATE_X, 1.5, wz));
        s.add(block(1.4, 0.28, 4.6, MORTAR, GATE_X, 3.1, wz));
      }
      // gate pillars
      s.add(block(1.7, 4.2, 1.7, BRICK, GATE_X, 2.1, side * 2.2));
      s.add(block(2.0, 0.4, 2.0, MORTAR, GATE_X, 4.3, side * 2.2));
      s.add(block(1.2, 0.6, 1.2, PALETTE.roofPink, GATE_X, 4.7, side * 2.2));
    }
    // arch over the gate
    s.add(block(0.9, 0.9, 4.2, BRICK, GATE_X, 4.4, 0));
    s.add(block(1.0, 0.3, 4.6, MORTAR, GATE_X, 5.0, 0));
    // the little wooden doors (swing open for Goodwill)
    const makeDoor = (side: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(GATE_X, 0, 1.35 * side);
      const panel = block(0.3, 3.2, 1.35, PALETTE.woodDark, 0, 1.6, -0.675 * side);
      pivot.add(panel);
      pivot.add(block(0.34, 0.14, 1.35, 0x8a6f52, 0, 0.9, -0.675 * side));
      pivot.add(block(0.34, 0.14, 1.35, 0x8a6f52, 0, 2.3, -0.675 * side));
      this.scene.add(pivot);
      return pivot;
    };
    this.doorL = makeDoor(-1);
    this.doorR = makeDoor(1);
    // a humble sign: KNOCK
    const sign = new THREE.Group();
    sign.add(block(0.14, 1.5, 0.14, PALETTE.woodDark, 0, 0.75, 0));
    sign.add(block(1.5, 0.7, 0.1, PALETTE.wallCream, 0, 1.4, 0));
    sign.position.set(GATE_X - 1.6, 0, 3.6);
    sign.rotation.y = -0.4;
    s.add(sign);

    // ---------- Beelzebub's castle, dark on its crag ----------
    const castle = new THREE.Group();
    const DARK = 0x5a5464;
    const DARKER = 0x494452;
    castle.add(block(7, 3, 5.5, 0x6e6878, 0, 1.5, 0)); // crag base
    castle.add(block(5.5, 3.4, 4.2, DARK, 0, 4.4, 0));  // keep
    castle.add(block(1.6, 5.4, 1.6, DARKER, -2.6, 4.8, -1.4)); // towers
    castle.add(block(1.6, 6.2, 1.6, DARKER, 2.4, 5.2, 1.2));
    castle.add(block(1.3, 4.8, 1.3, DARK, 2.6, 4.5, -1.8));
    // jagged battlements
    for (let i = 0; i < 5; i++) {
      castle.add(block(0.7, 0.7, 0.7, DARKER, -2 + i * 1.05, 6.4, 0));
    }
    // banner
    castle.add(block(0.1, 2.4, 0.1, DARKER, 0, 8, 0));
    castle.add(block(0.9, 0.6, 0.06, 0x8a3a4a, 0.5, 8.6, 0));
    // baleful red windows
    for (const [wx, wy, wz] of [
      [-2.6, 5.6, -0.5], [2.4, 6.4, 1.2], [0, 5.0, 2.15], [-1.4, 4.2, 2.15],
    ] as const) {
      const w = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.7, 0.12),
        new THREE.MeshBasicMaterial({ color: 0xff5c4d, transparent: true, opacity: 0.85 }),
      );
      w.position.set(wx, wy, wz);
      castle.add(w);
      this.castleGlows.push(w);
    }
    castle.position.copy(CASTLE);
    s.add(castle);
    // dead brush around the crag
    for (const [bx, bz] of [[12, -9], [21, -10], [14, -20], [22, -18]] as const) {
      s.add(block(0.3, 1.3, 0.3, 0x8d8478, bx, 0.65, bz));
      s.add(block(0.9, 0.24, 0.24, 0x8d8478, bx + 0.3, 1.3, bz));
    }

    // arrow pool
    for (let i = 0; i < 10; i++) {
      const g = new THREE.Group();
      g.add(block(0.09, 0.09, 1.1, 0x4a4440, 0, 0, 0));            // shaft
      g.add(block(0.16, 0.16, 0.22, 0x8a3a4a, 0, 0, 0.6));         // head
      g.add(block(0.2, 0.05, 0.3, 0xd8d3cc, 0, 0, -0.55));         // fletching
      g.visible = false;
      s.add(g);
      this.arrows.push({
        g, t: 1, active: false,
        from: new THREE.Vector3(), to: new THREE.Vector3(),
      });
    }

    // ---------- the King's Highway: straight and narrow, hedged both sides ----------
    for (let i = 0; i < 16; i++) {
      const px = GATE_X + 2 + i * 2.5;
      const path = block(2.5, 0.12, 2.6, 0xeee3c4, px, 0.06, 0);
      path.castShadow = false;
      s.add(path);
      // trimmed hedges close on either hand — turn neither left nor right
      if (i % 1 === 0) {
        s.add(block(2.5, 0.9, 0.8, 0x7fae74, px, 0.45, 2.1));
        s.add(block(2.5, 0.9, 0.8, 0x7fae74, px, 0.45, -2.1));
      }
      if (i % 3 === 1) {
        s.add(block(0.5, 0.4, 0.5, PALETTE.grassDark, px, 1.05, 2.1));
        s.add(block(0.5, 0.4, 0.5, PALETTE.grassDark, px, 1.05, -2.1));
      }
    }
    // flowers dotting the highway's verge — a kinder country already
    for (let i = 0; i < 14; i++) {
      const f = block(0.18, 0.18, 0.18,
        [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        GATE_X + 3 + Math.random() * 34, 0.98, (Math.random() > 0.5 ? 2.1 : -2.1));
      f.castShadow = false;
      s.add(f);
    }

    // the soft glow at the end of the narrow way — the place of deliverance, far off
    const lightBeam = new THREE.Group();
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 40, 2.6),
      new THREE.MeshBasicMaterial({ color: 0xffd94a, transparent: true, opacity: 0.8, fog: false }),
    );
    beam.position.y = 20;
    lightBeam.add(beam);
    const beamInner = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 44, 1.3),
      new THREE.MeshBasicMaterial({ color: 0xfffbe0, transparent: true, opacity: 0.95, fog: false }),
    );
    beamInner.position.y = 22;
    lightBeam.add(beamInner);
    const star = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 3.4, 3.4),
      new THREE.MeshBasicMaterial({ color: 0xffe87a, fog: false }),
    );
    star.position.y = 42;
    star.rotation.set(Math.PI / 4, 0, Math.PI / 4);
    lightBeam.add(star);
    const glow = new THREE.PointLight(0xffe87a, 3.5, 40);
    glow.position.y = 4;
    lightBeam.add(glow);
    lightBeam.position.set(HIGHWAY_END + 2, 0, 0);
    lightBeam.visible = false;
    s.add(lightBeam);
    this.lightBeam = lightBeam;

    // Goodwill waits unseen behind the gate
    this.goodwill.root.position.set(GATE_X + 2.2, 0, -1.6);
    this.goodwill.root.rotation.y = -Math.PI / 2;
    this.goodwill.root.visible = false;
    s.add(this.goodwill.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.mutterIndex = 0;
    this.volleyT = 0;
    for (const a of this.arrows) { a.active = false; a.g.visible = false; }
    this.christian.root.position.set(-60, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.scene.add(this.christian.root);
    if (revisit) {
      this.phase = 'done';
      this.doorOpen = true;
      this.goodwill.root.visible = true;
      this.goodwill.root.position.set(GATE_X + 2.2, 0, -1.6);
      if (this.lightBeam) this.lightBeam.visible = true;
      this.cb.setObjective('⛩ The Gate stands open — the narrow way runs east');
    } else {
      this.phase = 'approach';
      this.doorOpen = false;
      this.goodwill.root.visible = false;
      if (this.lightBeam) this.lightBeam.visible = false;
      this.cb.setObjective('🚶 A long, straight road — the Wicket Gate lies far to the east');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'knock' || this.phase === 'volley') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.z = THREE.MathUtils.clamp(p.z, -14, 14);
    // the wall bars the way east until Goodwill draws him through;
    // past the gate, the hedges keep the way narrow
    if (p.x > GATE_X - 1.5 && (this.phase === 'approach' || this.phase === 'knock')) {
      p.x = Math.min(p.x, GATE_X - 1.5);
    }
    if (p.x > GATE_X + 1) {
      p.z = THREE.MathUtils.clamp(p.z, -1.6, 1.6); // straight and narrow
    }
    p.x = THREE.MathUtils.clamp(p.x, -62, HIGHWAY_END + 3);

    if (this.revisit) {
      if (p.x < -58 || p.x > HIGHWAY_END - 2) this.cb.onExit();
      return;
    }

    // ---------- roadside doubts on the long approach ----------
    if (this.phase === 'approach') {
      const mutters: Array<[number, DialogueLine[]]> = [
        [-45, [
          { speaker: 'Christian', text: '*mutter* …Left my home. Lost my friend in a bog. Nearly crushed beneath a burning mountain. And still this burden sits like a millstone…' },
          { speaker: 'Christian', text: 'Is this truly the way? There is no one even to ask.' },
        ]],
        [-30, [
          { speaker: 'Christian', text: '…What a fool I was, to listen to Worldly Wiseman. Smooth words, smooth road — and it led me straight under Sinai.' },
          { speaker: 'Christian', text: 'Evangelist forgave me. But will the Gate? What if they ask where I have been… and shut it in my face?' },
        ]],
        [-15, [
          { speaker: 'Christian', text: 'So far… and so straight. Not one turning. As if the road itself were telling me: no more byways, old bear.' },
          { speaker: 'Christian', text: '*sigh* Help said it. Evangelist said it. "Knock, and it shall be opened." Keep walking, Christian. Just keep walking.' },
        ]],
      ];
      if (this.mutterIndex < mutters.length && p.x > mutters[this.mutterIndex][0]) {
        const lines = mutters[this.mutterIndex][1];
        this.mutterIndex++;
        this.cb.playScript(lines);
        return;
      }
      // reaching the gate → the knock
      if (p.x > GATE_X - 3.2 && Math.abs(p.z) < 4) {
        this.phase = 'knock';
        this.christian.root.rotation.y = Math.PI / 2;
        this.cb.playScript([
          { speaker: '', text: 'The gate is shut. Above it, an old inscription reads: "Knock, and it shall be opened unto you."' },
          { speaker: 'Christian', text: '*knock… knock…* May I enter here? Will he within open to sorry me, though I have been an undeserving rebel?' },
          { speaker: '???', text: '(a deep, warm voice, like far-off thunder that means no harm) Who knocks?' },
          { speaker: 'Christian', text: 'A poor burdened sinner, come from the City of Destruction. I am bound for the Celestial City — they told me the way lies through this Gate.' },
          { speaker: 'Goodwill', text: 'Then willingly do I open. We turn none away who knock — none.' },
        ], () => {
          // the doors swing wide; a great lion stands within
          this.doorOpen = true;
          this.goodwill.root.visible = true;
          this.cb.blipSound();
          this.cb.playScript([
            { speaker: '', text: 'The doors swing open — and there stands a LION, golden-maned and robed in white, filling the gateway like sunrise.' },
            { speaker: 'Goodwill', text: 'I am Goodwill, keeper of this Gate. But stand not in the open, friend—' },
            { speaker: 'Goodwill', text: 'Yonder castle belongs to BEELZEBUB, and his archers shoot at every pilgrim who dares my doorstep. QUICKLY — give me your paw!' },
          ], () => {
            this.phase = 'volley';
            this.volleyT = 0;
            this.arrowTimer = 0;
            this.cb.rumbleSound();
            this.cb.setObjective('🏹 Arrows from the dark castle…!');
          });
        });
        return;
      }
    }
  }

  private fireArrow(): void {
    const a = this.arrows.find((x) => !x.active);
    if (!a) return;
    const p = this.christian.root.position;
    a.active = true;
    a.t = 0;
    a.from.set(CASTLE.x - 1, 7.5, CASTLE.z + 2);
    // aimed near Christian and the gate — always a near miss
    a.to.set(
      p.x - 2.5 + Math.random() * 5,
      0.1,
      p.z + 1.5 + Math.random() * 3.5,
    );
    a.g.visible = true;
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);
    if (this.goodwill.root.visible) animateBear(this.goodwill, t + 0.7, false);

    // the gate doors swing
    const doorTarget = this.doorOpen ? 1.7 : 0;
    if (this.doorL && this.doorR) {
      this.doorL.rotation.y += (-doorTarget - this.doorL.rotation.y) * 0.06;
      this.doorR.rotation.y += (doorTarget - this.doorR.rotation.y) * 0.06;
    }

    // castle windows pulse balefully
    for (let i = 0; i < this.castleGlows.length; i++) {
      (this.castleGlows[i].material as THREE.MeshBasicMaterial).opacity =
        0.5 + 0.4 * Math.abs(Math.sin(t * 1.7 + i * 1.9));
    }

    // ---------- the volley: arrows rain while Goodwill pulls him through ----------
    if (this.phase === 'volley') {
      this.volleyT += dt;
      this.arrowTimer -= dt;
      if (this.arrowTimer <= 0 && this.volleyT < 2.0) {
        this.arrowTimer = 0.22;
        this.fireArrow();
      }
      if (this.volleyT > 2.4) {
        // safely through — the two stand apart, face to face behind the wall
        this.phase = 'inside';
        this.christian.root.position.set(GATE_X + 2.4, 0, 1.3);
        this.christian.root.rotation.y = Math.PI; // faces north, toward the lion
        this.goodwill.root.position.set(GATE_X + 3.6, 0, -1.7);
        this.goodwill.root.rotation.y = 0; // faces south, toward Christian
        this.cb.setObjective('⛩ Safe behind the Gate');
        this.cb.blipSound();
        this.cb.playScript([
          { speaker: '', text: 'A great paw closes over Christian\'s, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side.' },
          { speaker: 'Goodwill', text: 'There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now.' },
          { speaker: 'Christian', text: '*catching his breath* You… you know my name?' },
          { speaker: 'Goodwill', text: 'I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?' },
          { speaker: 'Christian', text: 'I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir.' },
          { speaker: 'Goodwill', text: 'And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one.' },
          { speaker: 'Christian', text: 'Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?' },
          { speaker: 'Goodwill', text: 'Not here, dear pilgrim. Be content to bear it a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where none shall ever find it.' },
          { speaker: 'Goodwill', text: 'Look east. That is the King\'s Highway — straight and narrow, cast up by the King and His Son. Keep to it; turn neither left nor right, and you cannot lose your way.' },
          { speaker: 'Christian', text: 'Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not.' },
          { speaker: 'Goodwill', text: '*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you.' },
        ], () => {
          this.phase = 'freeroam';
          if (this.lightBeam) this.lightBeam.visible = true;
          this.cb.setObjective('✨ Walk the straight and narrow way, toward the light');
        });
      }
    }

    // arrows in flight
    for (const a of this.arrows) {
      if (!a.active) continue;
      a.t += dt * 1.4;
      if (a.t >= 1) {
        // stuck in the earth, then fades away
        if (a.t > 1.8) { a.active = false; a.g.visible = false; }
        else {
          a.g.position.set(a.to.x, 0.35, a.to.z);
          a.g.rotation.set(1.15, 0, 0);
        }
        continue;
      }
      const x = THREE.MathUtils.lerp(a.from.x, a.to.x, a.t);
      const z = THREE.MathUtils.lerp(a.from.z, a.to.z, a.t);
      const y = THREE.MathUtils.lerp(a.from.y, a.to.y, a.t) + Math.sin(a.t * Math.PI) * 4;
      // orient along the flight path
      const nt = Math.min(a.t + 0.05, 1);
      const nx = THREE.MathUtils.lerp(a.from.x, a.to.x, nt);
      const nz = THREE.MathUtils.lerp(a.from.z, a.to.z, nt);
      const ny = THREE.MathUtils.lerp(a.from.y, a.to.y, nt) + Math.sin(nt * Math.PI) * 4;
      a.g.position.set(x, y, z);
      a.g.lookAt(nx, ny, nz);
    }

    // the far light pulses
    if (this.lightBeam && this.lightBeam.visible) {
      const sc = 1 + Math.sin(t * 2.4) * 0.12;
      this.lightBeam.scale.set(sc, 1, sc);
    }

    // reaching the light completes the chapter
    if (this.phase === 'freeroam' && this.christian.root.position.x > HIGHWAY_END - 2) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }
}
