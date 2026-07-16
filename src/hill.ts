import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter VII — the Hill of Difficulty.
// At the foot of a steep hill the road splits in three: the King's marked
// way straight up, and two easy paths — Danger and Destruction — around the
// sides. Formalist and Hypocrisy take the easy ways and are never seen
// again. Christian climbs, dozes too long in the arbor halfway up, and wakes
// at sunset; at the top he finds his scroll gone and must retrace his steps
// to find it glowing where he slept. Climbing again he meets Timorous and
// Mistrust fleeing from lions ahead — but he presses on toward the light.

interface HillCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  blipSound: () => void;
  setMusic?: (style: 'gate' | 'cross') => void;
}

type Phase =
  | 'walk'      // approaching the fork with Formalist & Hypocrisy
  | 'fork'      // parked: the three-paths scene
  | 'climb'     // up the steep way
  | 'arbor'     // parked: sitting down in the arbor
  | 'sleeping'  // timed doze — the sun slides down
  | 'climb2'    // on up, scroll left behind
  | 'panic'     // parked: the scroll is gone
  | 'retrace'   // back down to find the glowing scroll (E to pick up)
  | 'climb3'    // climbing again, carefully
  | 'warning'   // parked: Timorous & Mistrust
  | 'fleeing'   // the pair bolt downhill in a cloud of dust
  | 'onward'    // pressing on to the light
  | 'done';

const WEST_EDGE = -30;
const LIGHT_X = 40;
const FORK_X = -14;   // where the road splits in three
const HILL_X0 = -8;   // foot of the slope
const HILL_X1 = 14;   // the summit
const HILL_H = 5;     // a gentler rise — steep to the eye, kind to the paws
const ARBOR = new THREE.Vector3(3, 0, -2.2);
const SUMMIT_TRIGGER = 14.5;

export class HillScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: HillCallbacks;
  private christian: BearParts;
  private pawScroll: THREE.Group;
  private formalist: BearParts;
  private hypocrisy: BearParts;
  private deserters = false; // true while F & H walk off to their doom
  private timorous: BearParts;
  private mistrust: BearParts;
  private fleeT = 0;
  private sleepT = 0;
  private duskP = 0;      // 0 = bright day … 1 = sunset
  private duskTarget = 0;
  private hemi: THREE.HemisphereLight | null = null;
  private sunLight: THREE.DirectionalLight | null = null;
  private scrollProp: THREE.Group | null = null;
  private scrollGlow: THREE.Mesh | null = null;
  private zzz: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private zzzTimer = 0;
  private dust: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private lightBeam: THREE.Mesh | null = null;
  private lightHalo: THREE.Mesh | null = null;
  private revisit = false;
  private built = false;

  constructor(cb: HillCallbacks) {
    this.cb = cb;
    // Christian in the garments from the Cross, scroll in paw
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      sling: true, plump: true,
    });
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const seal = block(0.10, 0.10, 0.04, PALETTE.robeGold, 0, 0.62, 0.42);
    seal.castShadow = false;
    this.christian.head.add(seal);
    this.pawScroll = new THREE.Group();
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.5, 8), mat(0xfdf6e3));
    roll.rotation.z = Math.PI / 2;
    this.pawScroll.add(roll);
    this.pawScroll.add(block(0.1, 0.2, 0.2, 0xc9535f, 0, 0, 0));
    this.pawScroll.position.set(0, -0.5, 0.2);
    this.christian.armR.add(this.pawScroll);

    // the two gentlemen, dressed exactly as on the Highway
    const dressFormal = (who: BearParts, coat: number, tie: number) => {
      who.body.add(block(0.4, 0.42, 0.06, 0xfaf6ec, 0, 0.5, 0.36));
      who.body.add(block(0.2, 0.1, 0.07, tie, 0, 0.7, 0.37));
      who.body.add(block(0.06, 0.1, 0.07, 0x2e2a28, 0, 0.7, 0.38));
      who.body.add(block(0.5, 0.34, 0.1, coat, 0, 0.12, -0.32));
    };
    const longTail = (who: BearParts, fur: number, tip?: number) => {
      who.body.add(block(0.18, 0.18, 0.62, fur, 0.2, 0.28, -0.62));
      who.body.add(block(0.18, 0.6, 0.18, fur, 0.2, 0.62, -0.95));
      who.body.add(block(0.22, 0.24, 0.22, tip ?? fur, 0.2, 1.02, -0.95));
    };
    this.formalist = makeBear({
      species: 'cat', fur: 0x3f3b3a, outfit: 'shirt', outfitColor: 0x3a3f4a,
    });
    dressFormal(this.formalist, 0x3a3f4a, 0xc9535f);
    longTail(this.formalist, 0x3f3b3a, 0xfaf6ec);
    this.hypocrisy = makeBear({
      species: 'cat', fur: 0xd97f4a, outfit: 'shirt', outfitColor: 0x6a4a62,
    });
    dressFormal(this.hypocrisy, 0x6a4a62, 0x3a5f8a);
    longTail(this.hypocrisy, 0xd97f4a, 0xfaf6ec);
    this.hypocrisy.head.add(block(0.2, 0.16, 0.14, 0xd97f4a, 0, 0.22, 0.5));

    // Timorous: a jumpy brown rabbit
    this.timorous = makeBear({
      species: 'rabbit', fur: 0x9a744e, outfit: 'shirt', outfitColor: 0xc4b89a,
    });
    // Mistrust: a wide-eyed deer — tan fur, little antlers, white chin
    this.mistrust = makeBear({
      species: 'bear', fur: 0xc49a6a, outfit: 'shirt', outfitColor: 0x8aa4b8,
    });
    for (const side of [-1, 1]) {
      this.mistrust.head.add(block(0.1, 0.5, 0.1, 0x8a6f52, 0.3 * side, 1.15, -0.05));
      this.mistrust.head.add(block(0.28, 0.09, 0.09, 0x8a6f52, 0.3 * side, 1.3, -0.05));
    }
    this.mistrust.head.add(block(0.3, 0.16, 0.1, 0xf3ead9, 0, 0.12, 0.42));
  }

  // the slope: flat, then a smooth climb, then the summit plateau
  private groundY(x: number): number {
    const u = THREE.MathUtils.clamp((x - HILL_X0) / (HILL_X1 - HILL_X0), 0, 1);
    return HILL_H * u * u * (3 - 2 * u);
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xd6efff);
    s.fog = new THREE.Fog(0xd6efff, 40, 110);

    this.hemi = new THREE.HemisphereLight(0xf0f8ff, 0xc4e2b8, 1.05);
    s.add(this.hemi);
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.5);
    sun.position.set(-24, 40, 22);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -50;
    sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -45;
    s.add(sun);
    this.sunLight = sun;

    const ground = new THREE.Mesh(new THREE.BoxGeometry(160, 1, 90), mat(PALETTE.grass));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 45; i++) {
      const x = -50 + Math.random() * 100;
      const z = -35 + Math.random() * 70;
      if (x > HILL_X0 - 1 && x < HILL_X1 + 34) continue; // keep the hillside clean
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? PALETTE.grassLight : PALETTE.grassDark, x, 0.04 + Math.random() * 0.03, z);
      p.castShadow = false;
      s.add(p);
    }

    // ---------- the hill: broad grassy steps up to a long summit ridge ----------
    const stepColors = [0x9ede97, PALETTE.grass, 0xa8e6a3];
    // many shallow steps, each topped at the height of its WESTERN edge, so
    // every slab sits at or below where Christian walks — no clipping into it
    const STEPS = 16;
    for (let i = 0; i < STEPS; i++) {
      const x0 = HILL_X0 + (i * (HILL_X1 - HILL_X0)) / STEPS;
      const x1 = HILL_X0 + ((i + 1) * (HILL_X1 - HILL_X0)) / STEPS;
      const h = Math.max(this.groundY(x0 + 0.01), 0.3);
      const slab = block(x1 - x0 + 0.4, h, 26, stepColors[i % 3], (x0 + x1) / 2, h / 2, 0);
      slab.receiveShadow = true;
      s.add(slab);
    }
    // the summit ridge, running east to the light
    const ridge = block(34, HILL_H, 26, PALETTE.grass, HILL_X1 + 17, HILL_H / 2, 0);
    ridge.receiveShadow = true;
    s.add(ridge);
    const ridgeTrim = block(34.4, 0.14, 26.4, 0x9ede97, HILL_X1 + 17, HILL_H + 0.02, 0);
    ridgeTrim.castShadow = false;
    s.add(ridgeTrim);

    // the King's way: stones straight up the slope and along the ridge
    for (let i = 0; i <= 24; i++) {
      const px = -28 + i * 2.9;
      const pz = (Math.random() - 0.5) * 0.8;
      const stone = block(0.9 + Math.random() * 0.5, 0.14, 1.7 + Math.random() * 0.6,
        PALETTE.path, px, this.groundY(px) + 0.07, pz);
      stone.castShadow = false;
      s.add(stone);
    }
    // the King's mark at the foot of the steep way: a little gold post
    s.add(block(0.18, 1.5, 0.18, PALETTE.woodDark, FORK_X + 2.5, 0.75, -1.6));
    const mark = block(0.4, 0.4, 0.1, PALETTE.robeGold, FORK_X + 2.5, 1.6, -1.6);
    mark.castShadow = false;
    s.add(mark);

    // ---------- the two easy ways: Danger (left) and Destruction (right) ----------
    for (const dir of [-1, 1]) {
      for (let i = 0; i < 9; i++) {
        const px = FORK_X + 1 + i * 2.2;
        const pz = dir * (1.5 + i * 1.35);
        const stone = block(1.6, 0.12, 1.6, 0xd9c9a8, px, 0.06, pz);
        stone.castShadow = false;
        s.add(stone);
      }
      // each ends among dark rocks and dead trees
      const ex = FORK_X + 1 + 9 * 2.2;
      const ez = dir * (1.5 + 9 * 1.35);
      s.add(block(2.2, 1.6, 1.8, 0x6f6f7a, ex + 0.5, 0.8, ez));
      s.add(block(1.4, 1.0, 1.2, 0x62626e, ex - 1.2, 0.5, ez + dir * 1.2));
      const dead = new THREE.Group();
      dead.add(block(0.4, 2.4, 0.4, 0x9a8f86, 0, 1.2, 0));
      dead.add(block(1.4, 0.26, 0.26, 0x9a8f86, 0.4, 2.1, 0));
      dead.position.set(ex - 0.5, 0, ez - dir * 1.5);
      s.add(dead);
    }
    // a three-armed signpost at the fork
    const post = new THREE.Group();
    post.add(block(0.16, 2.0, 0.16, PALETTE.woodDark, 0, 1.0, 0));
    post.add(block(1.3, 0.34, 0.1, PALETTE.wood, 0.55, 1.8, 0));       // up the hill
    const armL = block(0.1, 0.34, 1.3, PALETTE.wood, 0, 1.45, -0.55);  // Danger
    post.add(armL);
    const armR = block(0.1, 0.34, 1.3, PALETTE.wood, 0, 1.1, 0.55);    // Destruction
    post.add(armR);
    post.position.set(FORK_X, 0, -0.2);
    s.add(post);

    // ---------- the arbor, halfway up — a shaded shelter with a bench ----------
    const arbor = new THREE.Group();
    for (const [ax, az] of [[-1.1, -0.9], [1.1, -0.9], [-1.1, 0.9], [1.1, 0.9]] as const) {
      arbor.add(block(0.22, 2.0, 0.22, PALETTE.woodDark, ax, 1.0, az));
    }
    arbor.add(block(3.0, 0.3, 2.6, 0x7ba05f, 0, 2.15, 0));   // leafy roof
    arbor.add(block(2.4, 0.24, 2.0, 0x8fbf6f, 0, 2.4, 0));
    arbor.add(block(1.8, 0.18, 0.8, PALETTE.wood, 0, 0.62, -0.3)); // bench
    arbor.add(block(0.2, 0.55, 0.2, PALETTE.woodDark, -0.7, 0.28, -0.3));
    arbor.add(block(0.2, 0.55, 0.2, PALETTE.woodDark, 0.7, 0.28, -0.3));
    for (let i = 0; i < 5; i++) {
      const f = block(0.14, 0.14, 0.14,
        [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        -1.4 + i * 0.7, 0.08, 1.3);
      f.castShadow = false;
      arbor.add(f);
    }
    arbor.position.set(ARBOR.x, this.groundY(ARBOR.x), ARBOR.z);
    s.add(arbor);

    // the dropped scroll — glowing so it can be found in the dusk
    const sp = new THREE.Group();
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.6, 8), mat(0xfdf6e3));
    roll.rotation.z = Math.PI / 2;
    sp.add(roll);
    sp.add(block(0.12, 0.24, 0.24, 0xc9535f, 0, 0, 0));
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 14, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.4, depthWrite: false }),
    );
    sp.add(glow);
    this.scrollGlow = glow;
    const glowLight = new THREE.PointLight(0xffe87a, 1.4, 8);
    glowLight.position.y = 0.5;
    sp.add(glowLight);
    sp.position.set(ARBOR.x + 0.2, this.groundY(ARBOR.x) + 0.35, ARBOR.z + 0.9);
    sp.visible = false;
    s.add(sp);
    this.scrollProp = sp;

    // trees flanking the lower road and dotted along the ridge
    for (const [tx, tz, blossom] of [
      [-26, 7, true], [-20, -8, false], [-11, 8, false],
      [20, 8, true], [27, -8, false], [33, 7, true],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, this.groundY(tx), tz);
      s.add(tree);
    }

    // the pair wait invisible until the warning scene
    this.timorous.root.visible = false;
    this.mistrust.root.visible = false;
    s.add(this.timorous.root);
    s.add(this.mistrust.root);
    s.add(this.formalist.root);
    s.add(this.hypocrisy.root);

    // Zzz pool for the arbor nap
    for (let i = 0; i < 5; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.26, 0.06), m);
      mesh.visible = false;
      s.add(mesh);
      this.zzz.push({ mesh, m, life: 1 });
    }
    // dust pool for the fleeing pair
    for (let i = 0; i < 14; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xd9c9a8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 0.26), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.dust.push({ mesh, m, life: 1, vx: 0, vz: 0 });
    }

    // ---------- the shining light at the ridge's end ----------
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 2.0, 14, 18, 1, true),
      new THREE.MeshBasicMaterial({
        color: PALETTE.light, transparent: true, opacity: 0.5,
        side: THREE.DoubleSide, depthWrite: false, fog: false,
      }),
    );
    beam.position.set(LIGHT_X + 1.5, HILL_H + 7, 0);
    s.add(beam);
    this.lightBeam = beam;
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff9dd, transparent: true, opacity: 0.4, depthWrite: false, fog: false }),
    );
    halo.position.set(LIGHT_X + 1.5, HILL_H + 1.6, 0);
    s.add(halo);
    this.lightHalo = halo;

    s.add(this.christian.root);
  }

  private applyDusk(dt: number): void {
    this.duskP += (this.duskTarget - this.duskP) * Math.min(dt * 0.5, 1);
    const day = new THREE.Color(0xd6efff);
    const sunset = new THREE.Color(0xf5b98a);
    const sky = day.clone().lerp(sunset, this.duskP);
    (this.scene.background as THREE.Color).copy(sky);
    (this.scene.fog as THREE.Fog).color.copy(sky);
    if (this.hemi) this.hemi.intensity = 1.05 - this.duskP * 0.35;
    if (this.sunLight) {
      this.sunLight.intensity = 1.5 - this.duskP * 0.75;
      this.sunLight.color.set(this.duskP > 0.5 ? 0xffb070 : 0xfff2cc);
    }
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.duskP = 0;
    this.duskTarget = 0;
    this.fleeT = 0;
    this.timorous.root.visible = false;
    this.mistrust.root.visible = false;
    if (this.scrollProp) this.scrollProp.visible = false;
    this.pawScroll.visible = true;
    this.christian.root.position.set(revisit ? -27 : -29, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('gate');
    if (revisit) {
      this.phase = 'done';
      this.deserters = false;
      this.formalist.root.visible = false;
      this.hypocrisy.root.visible = false;
      this.cb.setObjective('⛰ The Hill Difficulty stands quiet — the light beyond the summit leads on');
    } else {
      this.phase = 'walk';
      this.deserters = false;
      this.formalist.root.visible = true;
      this.formalist.root.position.set(-31, 0, -1.5);
      this.hypocrisy.root.visible = true;
      this.hypocrisy.root.position.set(-32, 0, 1.3);
      this.cb.setObjective('⛰ A steep hill rises ahead — walk on with your two companions');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    if (this.phase === 'fork' || this.phase === 'arbor' || this.phase === 'sleeping' ||
        this.phase === 'panic' || this.phase === 'warning') return 0;
    // the steep way is slow going — unless he's coming back down
    const p = this.christian.root.position;
    if (p.x > HILL_X0 && p.x < HILL_X1 && this.phase !== 'retrace') return 0.62;
    return 1;
  }

  nearScroll(): boolean {
    if (this.phase !== 'retrace' || !this.scrollProp) return false;
    return this.christian.root.position.distanceTo(this.scrollProp.position) < 2.4;
  }

  tryPickScroll(): void {
    if (!this.nearScroll()) return;
    this.scrollProp!.visible = false;
    this.pawScroll.visible = true;
    this.cb.blipSound();
    this.cb.playScript([
      { speaker: 'Christian', text: 'There — half under the bench, exactly where I slept. My scroll!' },
      { speaker: 'Christian', text: 'Thank God, who turned my eyes back to the place I lost it. I\'ll carry it in my paw from here on — and do my sleeping at night.' },
    ], () => {
      this.phase = 'climb3';
      this.cb.setObjective('⛰ Climb the hill again — carefully, this time');
    });
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.z = THREE.MathUtils.clamp(p.z, -7, 7);
    const eastCap = this.phase === 'retrace' ? SUMMIT_TRIGGER + 1.5 : LIGHT_X + 2;
    p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, eastCap);
    p.y = this.groundY(p.x);

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'walk' && p.x > FORK_X - 3.5) {
      this.phase = 'fork';
      // the two step up level with him to survey the hill
      this.formalist.root.position.set(p.x - 1.2, 0, p.z - 2.0);
      this.formalist.root.rotation.y = Math.PI / 2;
      this.hypocrisy.root.position.set(p.x - 1.4, 0, p.z + 2.0);
      this.hypocrisy.root.rotation.y = Math.PI / 2;
      this.cb.playScript([
        { speaker: '', text: 'At the foot of the hill the road divides in three: a steep path straight up, marked with the King\'s golden sign — and two easy paths curving round the bottom, one to the left, one to the right.' },
        { speaker: 'Formalist', text: 'Straight UP? In this coat? Gentlemen take the level road. The left way — "Danger", is it? — merely a name. It must wind round and meet you on the far side.' },
        { speaker: 'Hypocrisy', text: 'And I shall take the right. "Destruction" — such an unfair reputation for so smooth a path. See you at the top, friend. The sensible way is always around.' },
        { speaker: 'Christian', text: 'Friends, wait! The King marked the STEEP way. The easy paths go exactly where their names say — nowhere else!' },
        { speaker: '', text: 'But they are already walking. Formalist turns into the way called Danger, and Hypocrisy into the way called Destruction — and neither of them is ever seen again.' },
        { speaker: 'Christian', text: '…So I climb alone. "The hill, though high, I covet to ascend; the difficulty will not me offend."' },
      ], () => {
        this.phase = 'climb';
        this.deserters = true;
        this.fleeT = 0;
        this.cb.setObjective('⛰ Take the steep path — straight up the Hill Difficulty');
      });
      return;
    }

    if (this.phase === 'climb' && Math.abs(p.x - ARBOR.x) < 2) {
      this.phase = 'arbor';
      this.christian.root.rotation.y = 0; // faces the arbor
      this.cb.playScript([
        { speaker: '', text: 'Halfway up the slope stands a pleasant arbor, built by the Lord of the hill for weary pilgrims to catch their breath.' },
        { speaker: 'Christian', text: '*puff* … A bench, in the shade, with flowers… Surely the Lord of the hill won\'t mind if I sit for just a moment.' },
        { speaker: 'Christian', text: 'Just… one… moment…' },
      ], () => {
        this.phase = 'sleeping';
        this.sleepT = 0;
        this.duskTarget = 1; // the afternoon slips away while he sleeps
        this.pawScroll.visible = false; // it slides from his paw, unnoticed
        this.cb.setObjective('💤 …');
      });
      return;
    }

    if (this.phase === 'climb2' && p.x > SUMMIT_TRIGGER) {
      this.phase = 'panic';
      this.cb.playScript([
        { speaker: 'Christian', text: 'The top! Made it at last — and before full dark, too. Now, a look at my scroll to put some heart in me for the road ahead…' },
        { speaker: 'Christian', text: '…It\'s not here. Not in my paw — not in the sling — *pats himself all over* — it\'s GONE.' },
        { speaker: 'Christian', text: '*to himself* Fool. FOOL, Christian. You slept when you should only have rested — and the King\'s own scroll slid from your paw while you snored in His arbor.' },
        { speaker: 'Christian', text: 'That scroll is my assurance — my welcome at the Celestial City\'s gate. I cannot go one step forward without it. Back down, then… every hard-won step of it.' },
      ], () => {
        this.phase = 'retrace';
        this.scrollProp!.visible = true;
        this.cb.setObjective('⬇ Retrace the path down — something glows near the arbor…');
      });
      return;
    }

    if (this.phase === 'climb3' && p.x > 8.5) {
      this.phase = 'warning';
      this.timorous.root.visible = true;
      this.timorous.root.position.set(p.x + 5, this.groundY(p.x + 5), p.z - 1.2);
      this.timorous.root.rotation.y = -Math.PI / 2;
      this.mistrust.root.visible = true;
      this.mistrust.root.position.set(p.x + 6.2, this.groundY(p.x + 6.2), p.z + 1.0);
      this.mistrust.root.rotation.y = -Math.PI / 2;
      this.cb.playScript([
        { speaker: '', text: 'Two travellers come pelting down the hill as though wolves were at their heels.' },
        { speaker: 'Christian', text: 'Whoa — friends! You\'re running the wrong way! What happened?' },
        { speaker: 'Timorous', text: 'T-t-turn back! We were bound for Zion, same as you — but the farther we went, the MORE danger we saw!' },
        { speaker: 'Mistrust', text: 'Just ahead, in the very path, lie two LIONS! Asleep or awake we did not stay to find out — but whoever goes on will be torn to pieces!' },
        { speaker: 'Timorous', text: 'Turn back, turn back while you still have legs to carry you!' },
      ], () => {
        this.phase = 'fleeing';
        this.fleeT = 0;
      });
      return;
    }

    if (this.phase === 'onward' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private spawnDust(x: number, y: number, z: number): void {
    const d = this.dust.find((p) => p.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 1.4;
    d.vz = (Math.random() - 0.5) * 1.4;
    d.mesh.position.set(x, y + 0.2, z);
    d.mesh.visible = true;
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const p = this.christian.root.position;
    this.applyDusk(dt);
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // ---------- Formalist & Hypocrisy walk their chosen ways ----------
    if (this.phase === 'walk') {
      const offsets: Array<[BearParts, number, number]> = [
        [this.formalist, -1.9, -1.6], [this.hypocrisy, -3.2, 1.4],
      ];
      for (const [who, ox, oz] of offsets) {
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
      }
    } else if (this.deserters) {
      // off along Danger (north) and Destruction (south), never to return
      this.fleeT += dt;
      const pair: Array<[BearParts, number]> = [[this.formalist, -1], [this.hypocrisy, 1]];
      for (const [who, dir] of pair) {
        const wp = who.root.position;
        wp.x += dt * 3.4;
        wp.z += dir * dt * 2.2;
        who.root.rotation.y = Math.atan2(3.4, dir * 2.2);
        animateBear(who, t * 1.3 + dir, true);
        if (Math.abs(wp.z) > 13) who.root.visible = false;
      }
      if (!this.formalist.root.visible && !this.hypocrisy.root.visible) this.deserters = false;
    }

    // ---------- the arbor nap ----------
    if (this.phase === 'sleeping') {
      this.sleepT += dt;
      // he lies down on the bench
      this.christian.root.rotation.z = -Math.PI / 2 * Math.min(1, this.sleepT / 0.6);
      this.christian.root.position.y = this.groundY(p.x) + 0.35 * Math.min(1, this.sleepT / 0.6);
      this.zzzTimer -= dt;
      if (this.zzzTimer <= 0) {
        this.zzzTimer = 0.8;
        const z = this.zzz.find((x) => x.life >= 1);
        if (z) {
          z.life = 0;
          z.mesh.position.set(p.x + 0.3, p.y + 1.0, p.z);
          z.mesh.visible = true;
        }
      }
      if (this.sleepT > 4.2) {
        this.christian.root.rotation.z = 0;
        this.christian.root.position.y = this.groundY(p.x);
        this.phase = 'climb2';
        this.cb.playScript([
          { speaker: 'Christian', text: '*snrk—* Wha—? The light… why is the light all orange?' },
          { speaker: '', text: 'The sun is already sliding toward the hills. What was meant to be a moment\'s rest has swallowed the whole afternoon.' },
          { speaker: 'Christian', text: 'The SUNSET?! I slept the day away on the King\'s own bench! Up, up — I must reach the top before dark!' },
        ], () => {
          this.cb.setObjective('🌇 Hurry — climb to the summit before night falls');
        });
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

    // ---------- Timorous & Mistrust bolt downhill ----------
    if (this.phase === 'fleeing') {
      this.fleeT += dt;
      for (const who of [this.timorous, this.mistrust]) {
        if (!who.root.visible) continue;
        const wp = who.root.position;
        wp.x -= dt * 10;
        wp.y = this.groundY(wp.x);
        who.root.rotation.y = -Math.PI / 2;
        animateBear(who, t * 1.9, true);
        if (Math.random() < dt * 14) this.spawnDust(wp.x + 0.5, wp.y, wp.z);
        if (wp.x < -24) who.root.visible = false;
      }
      if (this.fleeT > 1.4 && !this.timorous.root.visible && !this.mistrust.root.visible) {
        this.phase = 'onward';
        this.cb.playScript([
          { speaker: 'Christian', text: 'Lions… *swallows* Two of them. Right in the path. Perhaps I too should turn ba—' },
          { speaker: 'Christian', text: 'No. NO. Behind me lies the City of Destruction — to go back is certain death. Ahead there may be lions… but beyond the lions is LIFE.' },
          { speaker: 'Christian', text: 'If I return, I perish. If I press on, I may yet reach the Celestial City. Then forward — fear or no fear!' },
        ], () => {
          this.cb.setObjective('✨ Press on along the ridge, to the light at the road\'s end');
        });
      }
    }
    for (const d of this.dust) {
      if (d.life >= 1) continue;
      d.life = Math.min(1, d.life + dt * 1.6);
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.z += d.vz * dt;
      d.mesh.position.y += dt * 0.8;
      d.mesh.scale.setScalar(0.6 + d.life * 1.5);
      d.m.opacity = 0.6 * (1 - d.life);
      if (d.life >= 1) d.mesh.visible = false;
    }

    // the dropped scroll glows and turns slowly
    if (this.scrollProp && this.scrollProp.visible) {
      this.scrollProp.rotation.y += dt * 1.2;
      if (this.scrollGlow) {
        (this.scrollGlow.material as THREE.MeshBasicMaterial).opacity =
          0.25 + 0.25 * Math.abs(Math.sin(t * 2.4));
      }
    }

    if (this.lightBeam) {
      const sc = 1 + Math.sin(t * 2.2) * 0.1;
      this.lightBeam.scale.set(sc, 1, sc);
    }
    if (this.lightHalo) {
      (this.lightHalo.material as THREE.MeshBasicMaterial).opacity =
        0.3 + 0.2 * Math.abs(Math.sin(t * 1.7));
    }
  }
}
