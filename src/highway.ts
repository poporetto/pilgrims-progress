import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter VI — the King's Highway at evening.
// Burden-free, Christian walks on east. Beside the road he finds three
// sleepers in chains — Simple, Sloth and Presumption — who wave away every
// warning and sleep on. Farther along, Formalist and Hypocrisy come
// scrambling over the wall instead of entering by the Gate, argue custom
// against command, and fall in alongside him anyway. The afternoon light
// slowly gives way to night as the three walk on toward the light.

interface HighwayCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  blipSound: () => void;
  setMusic?: (style: 'cross') => void;
}

type Phase =
  | 'walk'      // heading east from the hill of the Cross
  | 'sleepers'  // parked: warning the three chained sleepers
  | 'walk2'     // on along the wall
  | 'climb'     // the two scramble over the wall
  | 'debate'    // gate vs. wall
  | 'joined'    // the three walk east together
  | 'done';

const WEST_EDGE = -32;
const LIGHT_X = 44;
const SLEEPERS_X = -14;   // where the three lie beside the road
const WALL_X0 = 0;        // the wall runs along the north side of the road
const WALL_X1 = 26;
const CLIMB_X = 10;       // where Formalist & Hypocrisy come over

export class HighwayScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: HighwayCallbacks;
  private christian: BearParts;
  private sleepers: BearParts[] = [];
  private formalist: BearParts;
  private hypocrisy: BearParts;
  private climbT = -1;
  private nightP = 0; // 0 = late afternoon … 1 = night
  private hemi: THREE.HemisphereLight | null = null;
  private sunLight: THREE.DirectionalLight | null = null;
  private stars: THREE.Mesh[] = [];
  private starMat: THREE.MeshBasicMaterial | null = null;
  private moon: THREE.Mesh | null = null;
  private moonMat: THREE.MeshBasicMaterial | null = null;
  private fireflies: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; ph: number }> = [];
  private zzz: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private zzzTimer = 0;
  private lightBeam: THREE.Mesh | null = null;
  private lightHalo: THREE.Mesh | null = null;
  private revisit = false;
  private built = false;

  constructor(cb: HighwayCallbacks) {
    this.cb = cb;
    // Christian in the shining garments the angels gave him at the Cross
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      sling: true, plump: true,
    });
    // golden sash + the seal on his forehead
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const seal = block(0.10, 0.10, 0.04, PALETTE.robeGold, 0, 0.62, 0.42);
    seal.castShadow = false;
    this.christian.head.add(seal);

    // ---------- the three sleepers ----------
    // Simple: a trusting golden retriever
    const simple = makeBear({
      species: 'dog', fur: 0xdfb56e, outfit: 'shirt', outfitColor: 0xa8c4a2,
    });
    // Sloth: an actual sloth — grey-brown shag and dark eye-mask stripes
    const sloth = makeBear({
      species: 'bear', fur: 0x9a8f7a, outfit: 'shirt', outfitColor: 0xb8aa8e,
    });
    for (const side of [-1, 1]) {
      const stripe = block(0.16, 0.3, 0.05, 0x5e5648, 0.24 * side, 0.52, 0.42);
      stripe.rotation.z = -0.5 * side;
      sloth.head.add(stripe);
    }
    // Presumption: a very comfortable cat
    const presumption = makeBear({
      species: 'cat', fur: 0xe6cfc0, outfit: 'dress', outfitColor: 0xd8a8b8,
    });
    this.sleepers = [simple, sloth, presumption];

    // ---------- the two wall-climbers, dressed like respectable gentlemen ----------
    // a formal suit: dark coat over a white shirt front, with a little bow tie
    const dressFormal = (who: BearParts, coat: number, tie: number) => {
      who.body.add(block(0.4, 0.42, 0.06, 0xfaf6ec, 0, 0.5, 0.36)); // shirt front
      who.body.add(block(0.2, 0.1, 0.07, tie, 0, 0.7, 0.37));       // bow tie
      who.body.add(block(0.06, 0.1, 0.07, 0x2e2a28, 0, 0.7, 0.38)); // tie knot
      who.body.add(block(0.5, 0.34, 0.1, coat, 0, 0.12, -0.32));    // coat tails
    };
    // a long, expressive tail arcing up behind the coat
    // (sized a touch wider than the cat's built-in tail so no faces are coplanar)
    const longTail = (who: BearParts, fur: number, tip?: number) => {
      who.body.add(block(0.18, 0.18, 0.62, fur, 0.2, 0.28, -0.62));
      who.body.add(block(0.18, 0.6, 0.18, fur, 0.2, 0.62, -0.95));
      who.body.add(block(0.22, 0.24, 0.22, tip ?? fur, 0.2, 1.02, -0.95));
    };
    // Formalist: a black-and-white cat in a charcoal suit
    this.formalist = makeBear({
      species: 'cat', fur: 0x3f3b3a, outfit: 'shirt', outfitColor: 0x3a3f4a,
    });
    dressFormal(this.formalist, 0x3a3f4a, 0xc9535f);
    longTail(this.formalist, 0x3f3b3a, 0xfaf6ec);
    // Hypocrisy: a fox in a plum suit, with a white-tipped brush of a tail
    this.hypocrisy = makeBear({
      species: 'cat', fur: 0xd97f4a, outfit: 'shirt', outfitColor: 0x6a4a62,
    });
    dressFormal(this.hypocrisy, 0x6a4a62, 0x3a5f8a);
    longTail(this.hypocrisy, 0xd97f4a, 0xfaf6ec);
    this.hypocrisy.head.add(block(0.2, 0.16, 0.14, 0xd97f4a, 0, 0.22, 0.5)); // longer muzzle
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xffd9a8); // late-afternoon gold
    s.fog = new THREE.Fog(0xffd9a8, 40, 100);

    this.hemi = new THREE.HemisphereLight(0xfff0d8, 0xc4b898, 1.0);
    s.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xffc27a, 1.3);
    sun.position.set(-30, 22, 18); // low in the west
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -50;
    sun.shadow.camera.right = 50;
    sun.shadow.camera.top = 45;
    sun.shadow.camera.bottom = -45;
    s.add(sun);
    this.sunLight = sun;

    // rolling meadow
    const ground = new THREE.Mesh(new THREE.BoxGeometry(150, 1, 90), mat(0x93bb85));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 50; i++) {
      const x = -50 + Math.random() * 100;
      const z = -35 + Math.random() * 70;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x86ad7d : 0xa4c69a, x, 0.04 + Math.random() * 0.03, z);
      p.castShadow = false;
      s.add(p);
    }

    // the Highway itself: scattered stepping stones, west → east
    for (let i = 0; i <= 26; i++) {
      const px = -34 + i * 3.0;
      const pz = (Math.random() - 0.5) * 0.9;
      const stone = block(
        0.9 + Math.random() * 0.6, 0.14, 1.7 + Math.random() * 0.7,
        PALETTE.path, px, 0.07, pz,
      );
      stone.castShadow = false;
      s.add(stone);
    }

    // trees flanking the way
    for (const [tx, tz, blossom] of [
      [-28, 7, true], [-22, -8, false], [-6, 8, false],
      [18, 8, true], [30, -8, false], [36, 7, true],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // ---------- the three sleepers, just south of the road ----------
    const spots: Array<[number, number, number]> = [
      [SLEEPERS_X - 2.4, 4.2, 0.4], [SLEEPERS_X, 5.6, -0.3], [SLEEPERS_X + 2.4, 4.4, 0.2],
    ];
    this.sleepers.forEach((sl, i) => {
      const [sx, sz, ry] = spots[i];
      sl.root.position.set(sx, 0.42, sz);
      sl.root.rotation.z = Math.PI / 2; // flat on their side
      sl.root.rotation.y = ry;
      s.add(sl.root);
      // an iron stake and a short run of chain to each ankle
      const stake = block(0.16, 0.7, 0.16, 0x5e5a55, sx + 1.2, 0.3, sz + 0.8);
      s.add(stake);
      for (let c = 0; c < 3; c++) {
        const link = new THREE.Mesh(
          new THREE.TorusGeometry(0.13, 0.045, 6, 10), mat(0x6e6a64),
        );
        link.position.set(sx + 0.35 + c * 0.32, 0.12, sz + 0.55 + c * 0.1);
        link.rotation.set(Math.PI / 2, 0, c * 0.7);
        s.add(link);
      }
    });

    // ---------- the wall along the north side of the road ----------
    for (let wx = WALL_X0; wx <= WALL_X1; wx += 2) {
      s.add(block(2.1, 1.7, 0.8, 0xb9b0a2, wx, 0.85, -3.6));
      s.add(block(2.25, 0.25, 0.95, 0xa39a8c, wx, 1.8, -3.6));
    }

    // the climbers wait unseen behind the wall
    this.formalist.root.position.set(CLIMB_X - 1.2, 0, -6);
    this.formalist.root.visible = false;
    s.add(this.formalist.root);
    this.hypocrisy.root.position.set(CLIMB_X + 1.2, 0, -6);
    this.hypocrisy.root.visible = false;
    s.add(this.hypocrisy.root);

    // ---------- night sky: stars and a moon that fade in ----------
    this.starMat = new THREE.MeshBasicMaterial({
      color: 0xfff8e0, transparent: true, opacity: 0, fog: false,
    });
    for (let i = 0; i < 40; i++) {
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), this.starMat);
      st.position.set(-55 + Math.random() * 110, 16 + Math.random() * 18, -38 - Math.random() * 8);
      st.castShadow = false;
      s.add(st);
      this.stars.push(st);
    }
    this.moonMat = new THREE.MeshBasicMaterial({
      color: 0xf5f2e0, transparent: true, opacity: 0, fog: false,
    });
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(1.6, 20, 16), this.moonMat);
    this.moon.position.set(26, 26, -40);
    s.add(this.moon);

    // fireflies that wake with the dark
    for (let i = 0; i < 10; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xd8f2a0, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), m);
      mesh.position.set(-25 + Math.random() * 60, 0.8 + Math.random() * 1.4, -8 + Math.random() * 16);
      mesh.castShadow = false;
      s.add(mesh);
      this.fireflies.push({ mesh, m, ph: Math.random() * 6.28 });
    }

    // drifting Zzz above the sleepers
    for (let i = 0; i < 6; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.26, 0.06), m);
      mesh.visible = false;
      s.add(mesh);
      this.zzz.push({ mesh, m, life: 1 });
    }

    // ---------- the shining light at the road's end ----------
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 2.0, 14, 18, 1, true),
      new THREE.MeshBasicMaterial({
        color: PALETTE.light, transparent: true, opacity: 0.5,
        side: THREE.DoubleSide, depthWrite: false, fog: false,
      }),
    );
    beam.position.set(LIGHT_X + 1.5, 7, 0);
    s.add(beam);
    this.lightBeam = beam;
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff9dd, transparent: true, opacity: 0.4, depthWrite: false, fog: false }),
    );
    halo.position.set(LIGHT_X + 1.5, 1.6, 0);
    s.add(halo);
    this.lightHalo = halo;

    s.add(this.christian.root);
  }

  // dusk deepens as Christian walks east — and never lightens again
  private applyNight(): void {
    const p = this.nightP;
    const gold = new THREE.Color(0xffd9a8);
    const dusk = new THREE.Color(0x9a86a8);
    const night = new THREE.Color(0x2f3a5f);
    const sky = p < 0.5 ? gold.lerp(dusk, p * 2) : dusk.lerp(night, (p - 0.5) * 2);
    (this.scene.background as THREE.Color).copy(sky);
    (this.scene.fog as THREE.Fog).color.copy(sky);
    if (this.hemi) this.hemi.intensity = 1.0 - p * 0.62;
    if (this.sunLight) this.sunLight.intensity = 1.3 - p * 1.1;
    if (this.starMat) this.starMat.opacity = Math.max(0, p - 0.45) / 0.55;
    if (this.moonMat) this.moonMat.opacity = Math.max(0, p - 0.4) / 0.6;
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.nightP = 0;
    this.climbT = -1;
    this.formalist.root.visible = false;
    this.hypocrisy.root.visible = false;
    this.christian.root.position.set(revisit ? -28 : -30, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('cross');
    if (revisit) {
      this.phase = 'done';
      this.cb.setObjective('🛣 The King\'s Highway lies quiet — the light in the east leads on');
    } else {
      this.phase = 'walk';
      this.cb.setObjective('🛣 Follow the King\'s Highway east through the golden afternoon');
    }
    this.applyNight();
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'sleepers' || this.phase === 'climb' || this.phase === 'debate') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.z = THREE.MathUtils.clamp(p.z, -2.6, 10);
    p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);

    // evening falls with every step east
    this.nightP = Math.max(this.nightP, THREE.MathUtils.clamp((p.x + 30) / 66, 0, 1));

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'walk' && p.x > SLEEPERS_X - 4.5) {
      this.phase = 'sleepers';
      this.christian.root.rotation.y = Math.PI * 0.75; // turns toward them
      this.cb.playScript([
        { speaker: '', text: 'A little way off the road, three figures lie fast asleep in the grass — and about their ankles, iron chains.' },
        { speaker: 'Christian', text: 'Hey! Friends! Wake up! You are like sailors asleep at the top of a mast — the deep sea is right under you!' },
        { speaker: 'Christian', text: 'There are chains on your legs! If you sleep on here, the prowler of this road will take you. Get up — I\'ll help you out of your irons!' },
        { speaker: 'Simple', text: '*one eye opens* Mmh? …I see no danger. *tail thumps twice, then stops*' },
        { speaker: 'Sloth', text: 'Yes… danger… terrible… just a little more sleep first…' },
        { speaker: 'Presumption', text: 'Every tub must stand on its own bottom, dear. I shall be perfectly fine. Do mind your own knitting.' },
        { speaker: '', text: 'And with that, all three roll over and sleep on.' },
        { speaker: 'Christian', text: 'Asleep, in chains, and not one of them troubled by it… I cannot wake anyone who is determined to sleep. God keep them — I must go on.' },
      ], () => {
        this.phase = 'walk2';
        this.cb.setObjective('🌇 Walk on east — the sun is sinking behind you');
      });
      return;
    }

    if (this.phase === 'walk2' && p.x > CLIMB_X - 5) {
      this.phase = 'climb';
      this.climbT = 0;
      this.formalist.root.visible = true;
      this.hypocrisy.root.visible = true;
      this.cb.blipSound();
      this.cb.setObjective('👀 Someone is coming over the wall…');
      return;
    }

    if (this.phase === 'joined' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private runDebate(): void {
    this.phase = 'debate';
    this.christian.root.rotation.y = -Math.PI * 0.25; // faces the pair
    this.cb.playScript([
      { speaker: '', text: 'Two travellers come scrambling over the wall and drop onto the road, dusting themselves off as though nothing could be more ordinary.' },
      { speaker: 'Christian', text: 'Whoa—! Where did you two come from? And why over the WALL?' },
      { speaker: 'Formalist', text: 'From the land of Vain-Glory, just beyond. We\'re bound for Mount Zion — same road as you, by the look of that seal on your brow.' },
      { speaker: 'Christian', text: 'But why didn\'t you come in through the Gate, back at the head of the way? The King has commanded that everyone enter there.' },
      { speaker: 'Hypocrisy', text: 'The Gate! *laughs* All the world knows the Gate is MILES out of the way. Our people have taken this shortcut for a thousand years.' },
      { speaker: 'Formalist', text: 'More than a thousand! A custom that old is as good as law — any fair judge would tell you so.' },
      { speaker: 'Christian', text: 'The King will judge by His OWN law, not by your customs. Climbing the wall is rebellion against Him — however many years your people have practised it.' },
      { speaker: 'Hypocrisy', text: 'Tsk. Look at us — we\'re ON the road now, same as you. Wall or Gate, what difference does it make?' },
      { speaker: 'Christian', text: 'I walk by the rule of the Master; you walk by your own fancies. I came in by the Gate — I carry His scroll, and His seal. What will you two show at the end of the road?' },
      { speaker: 'Formalist', text: 'We\'ll take our chances, friend. Come — the light is going. Let\'s all walk together while it lasts.' },
      { speaker: '', text: 'Christian shakes his head — but the road is wide enough for three. They walk on together as the sun slips away.' },
    ], () => {
      this.phase = 'joined';
      this.cb.setObjective('🌙 Walk on east into the night — the light at the road\'s end still shines');
    });
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);
    this.applyNight();

    // sleepers breathe slowly, forever
    for (let i = 0; i < this.sleepers.length; i++) {
      const sl = this.sleepers[i];
      sl.body.position.y = 0.55 + Math.sin(t * 1.1 + i * 2.2) * 0.03;
    }
    // drifting Zzz
    this.zzzTimer -= dt;
    if (this.zzzTimer <= 0) {
      this.zzzTimer = 0.9;
      const z = this.zzz.find((x) => x.life >= 1);
      if (z) {
        const sl = this.sleepers[Math.floor(Math.random() * 3)];
        z.life = 0;
        z.mesh.position.copy(sl.root.position).add(new THREE.Vector3(0.3, 0.9, 0));
        z.mesh.visible = true;
      }
    }
    for (const z of this.zzz) {
      if (z.life >= 1) continue;
      z.life = Math.min(1, z.life + dt * 0.55);
      z.mesh.position.y += dt * 0.7;
      z.mesh.position.x += dt * 0.25;
      z.mesh.rotation.z = Math.sin(z.life * 6) * 0.3;
      z.m.opacity = 0.8 * (1 - z.life);
      if (z.life >= 1) z.mesh.visible = false;
    }

    // ---------- the two come over the wall in staggered arcs ----------
    if (this.phase === 'climb') {
      this.climbT += dt;
      const pair: Array<[BearParts, number, number]> = [
        [this.formalist, 0, CLIMB_X - 1.2], [this.hypocrisy, 0.7, CLIMB_X + 1.2],
      ];
      let allOver = true;
      for (const [who, delay, wx] of pair) {
        const u = THREE.MathUtils.clamp((this.climbT - delay) / 1.6, 0, 1);
        if (u < 1) allOver = false;
        // from behind the wall (z −6) up and over (peak above the wall) to the road (z −1.6)
        who.root.position.x = wx;
        who.root.position.z = THREE.MathUtils.lerp(-6, -1.6, u);
        who.root.position.y = Math.sin(u * Math.PI) * 2.3;
        who.root.rotation.y = 0; // facing south, toward the road
        animateBear(who, t * 1.6, u > 0 && u < 1);
      }
      if (allOver && this.climbT > 2.6) {
        this.runDebate();
      }
    }

    // ---------- once joined, the pair tag along behind Christian ----------
    if (this.phase === 'joined' || (this.phase === 'done' && !this.revisit)) {
      const p = this.christian.root.position;
      const offsets: Array<[BearParts, number, number]> = [
        [this.formalist, -1.9, -1.5], [this.hypocrisy, -3.2, 1.3],
      ];
      for (const [who, ox, oz] of offsets) {
        if (!who.root.visible) continue;
        const wp = who.root.position;
        const dx = (p.x + ox) - wp.x;
        const dz = (p.z + oz) - wp.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.2) {
          const sp = Math.min(6.6, d * 2.5) * dt;
          wp.x += (dx / d) * sp;
          wp.z += (dz / d) * sp;
          who.root.rotation.y = Math.atan2(dx, dz);
          animateBear(who, t + wp.x, true);
        } else {
          animateBear(who, t + wp.x, false);
        }
        wp.y = 0;
      }
    } else if (this.phase === 'debate') {
      animateBear(this.formalist, t, false);
      animateBear(this.hypocrisy, t + 1.1, false);
    }

    // fireflies wake as the dark comes down
    for (const f of this.fireflies) {
      const wake = Math.max(0, this.nightP - 0.55) / 0.45;
      f.m.opacity = wake * (0.4 + 0.6 * Math.abs(Math.sin(t * 1.7 + f.ph)));
      f.mesh.position.y += Math.sin(t * 0.9 + f.ph) * dt * 0.4;
      f.mesh.position.x += Math.cos(t * 0.6 + f.ph) * dt * 0.3;
    }

    // the light at the end burns brighter as the sky darkens
    if (this.lightBeam) {
      const sc = 1 + Math.sin(t * 2.2) * 0.1;
      this.lightBeam.scale.set(sc, 1, sc);
      (this.lightBeam.material as THREE.MeshBasicMaterial).opacity = 0.4 + this.nightP * 0.35;
    }
    if (this.lightHalo) {
      (this.lightHalo.material as THREE.MeshBasicMaterial).opacity =
        0.3 + 0.2 * Math.abs(Math.sin(t * 1.7)) + this.nightP * 0.2;
    }
  }
}
