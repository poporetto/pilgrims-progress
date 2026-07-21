import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter V — the Cross and the empty tomb.
// The narrow road climbs a green hill. At the top stands a Cross, and a
// little below it an open tomb. The moment Christian looks up at the Cross,
// his burden loosens of itself, rolls down the hill and into the tomb —
// never to be seen again. Three Shining Ones meet him: the first announces
// his sins forgiven, the second dresses him in new garments, the third sets
// a seal on his forehead and gives him a sealed scroll for the Celestial
// City. Christian walks on east, singing, toward the light at the road's end.

interface CrossCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  blipSound: () => void;
  setMusic?: (style: 'gate' | 'cross') => void;
}

type Phase =
  | 'approach'   // walking up the hill
  | 'wonder'     // parked, gazing at the Cross
  | 'rolling'    // the burden tumbles down into the tomb
  | 'rejoice'    // Christian's thanksgiving
  | 'descend'    // the Shining Ones float down
  | 'angels'     // the three gifts, one by one
  | 'joy'        // free walk east, singing, to the light
  | 'done';

const WEST_EDGE = -32;
const HILL_R = 16;      // hill radius — wide gentle mound
const HILL_PEAK = 6;    // hill height at the summit
const CROSS_TRIGGER = -1.2; // walking past here starts the scene
// the tomb sits just below the summit, clear of the hill
const TOMB = new THREE.Vector3(9.0, 0, -1.5);
const LIGHT_X = 36;

export class CrossScene {
  scene = new THREE.Scene();
  phase: Phase = 'approach';
  private cb: CrossCallbacks;
  private christian: BearParts;
  private oldClothes: THREE.Group;
  private newClothes: THREE.Group;
  private burdenOnBack: THREE.Group;
  private seal: THREE.Mesh;
  private scroll: THREE.Group;
  private angels: BearParts[] = [];
  private angelTargets: THREE.Vector3[] = [];
  private burdenProp: THREE.Group;
  private rollT = 0;
  private rollFrom = new THREE.Vector3();
  private descendT = 0;
  private angelBob = [0, 0, 0];
  private lightBeam: THREE.Mesh | null = null;
  private lightHalo: THREE.Mesh | null = null;
  private crossGlow: THREE.Mesh | null = null;
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];
  private notes: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private noteTimer = 0;
  private footDust: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private footDustTimer = 0;
  private revisit = false;
  private built = false;

  constructor(cb: CrossCallbacks) {
    this.cb = cb;
    // Christian's rig carries BOTH sets of clothes and a detachable burden —
    // the scene swaps them mid-cutscene without swapping the whole model
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'none', sling: true, plump: true,
    });
    const body = this.christian.body;

    // the old, travel-stained blue shirt (mirrors the plump 'shirt' outfit —
    // the shell must clear the plump body, or the coplanar faces flicker)
    this.oldClothes = new THREE.Group();
    this.oldClothes.add(block(1.12, 0.54, 0.8, 0x8fb8d8, 0, 0.53, 0));
    body.add(this.oldClothes);
    const oldSleeveL = block(0.32, 0.28, 0.36, 0x8fb8d8, 0, -0.1, 0);
    const oldSleeveR = block(0.32, 0.28, 0.36, 0x8fb8d8, 0, -0.1, 0);
    this.christian.armL.add(oldSleeveL);
    this.christian.armR.add(oldSleeveR);
    this.oldClothes.userData.sleeves = [oldSleeveL, oldSleeveR];

    // the shining new garments: white with a golden sash
    this.newClothes = new THREE.Group();
    this.newClothes.add(block(1.14, 0.56, 0.82, PALETTE.robeWhite, 0, 0.53, 0));
    this.newClothes.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    this.newClothes.add(block(0.34, 0.12, 0.06, PALETTE.robeGold, 0, 0.68, 0.44)); // clasp
    body.add(this.newClothes);
    const newSleeveL = block(0.34, 0.3, 0.38, PALETTE.robeWhite, 0, -0.1, 0);
    const newSleeveR = block(0.34, 0.3, 0.38, PALETTE.robeWhite, 0, -0.1, 0);
    this.christian.armL.add(newSleeveL);
    this.christian.armR.add(newSleeveR);
    this.newClothes.userData.sleeves = [newSleeveL, newSleeveR];

    // the burden he arrives with (mirrors the baked-in burden blocks)
    this.burdenOnBack = new THREE.Group();
    this.burdenOnBack.add(block(0.88, 0.62, 0.54, PALETTE.burden, 0, 0.45, -0.56));
    this.burdenOnBack.add(block(0.70, 0.50, 0.46, 0x87817a, 0, 0.96, -0.54));
    this.burdenOnBack.add(block(0.50, 0.36, 0.36, PALETTE.burdenStrap, 0, 1.28, -0.52));
    this.burdenOnBack.add(block(0.1, 0.6, 0.08, PALETTE.burdenStrap, -0.3, 0.45, 0.31));
    this.burdenOnBack.add(block(0.1, 0.6, 0.08, PALETTE.burdenStrap, 0.3, 0.45, 0.31));
    body.add(this.burdenOnBack);

    // the seal on his forehead — a small golden mark
    this.seal = block(0.10, 0.10, 0.04, PALETTE.robeGold, 0, 0.62, 0.42);
    this.seal.castShadow = false;
    this.christian.head.add(this.seal);

    // the sealed scroll, carried in his right paw
    this.scroll = new THREE.Group();
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.5, 8), mat(0xfdf6e3));
    roll.rotation.z = Math.PI / 2;
    this.scroll.add(roll);
    this.scroll.add(block(0.1, 0.2, 0.2, 0xc9535f, 0, 0, 0)); // wax seal band
    this.scroll.position.set(0, -0.5, 0.2);
    this.christian.armR.add(this.scroll);

    // the free-rolling burden prop (same silhouette, its own object)
    this.burdenProp = new THREE.Group();
    this.burdenProp.add(block(0.88, 0.62, 0.54, PALETTE.burden, 0, 0, 0));
    this.burdenProp.add(block(0.70, 0.50, 0.46, 0x87817a, 0, 0.5, 0.02));
    this.burdenProp.add(block(0.50, 0.36, 0.36, PALETTE.burdenStrap, 0, 0.84, 0.04));
    this.burdenProp.visible = false;
  }

  // hill height: a smooth green mound the road climbs over
  private groundY(x: number, z: number): number {
    const d = Math.hypot(x, z);
    if (d >= HILL_R) return 0;
    const u = 1 - (d / HILL_R) ** 2;
    return HILL_PEAK * u * u * (3 - 2 * u) as number;
  }

  private dressOld(): void {
    this.oldClothes.visible = true;
    for (const s of this.oldClothes.userData.sleeves as THREE.Mesh[]) s.visible = true;
    this.newClothes.visible = false;
    for (const s of this.newClothes.userData.sleeves as THREE.Mesh[]) s.visible = false;
    this.seal.visible = false;
    this.scroll.visible = false;
  }

  private dressNew(withGifts: boolean): void {
    this.oldClothes.visible = false;
    for (const s of this.oldClothes.userData.sleeves as THREE.Mesh[]) s.visible = false;
    this.newClothes.visible = true;
    for (const s of this.newClothes.userData.sleeves as THREE.Mesh[]) s.visible = true;
    this.seal.visible = withGifts;
    this.scroll.visible = withGifts;
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xd6efff);
    s.fog = new THREE.Fog(0xd6efff, 40, 100);

    s.add(new THREE.HemisphereLight(0xf0f8ff, 0xc4e2b8, 1.05));
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.5);
    sun.position.set(-24, 40, 22);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -50;
    sun.shadow.camera.right = 50;
    sun.shadow.camera.top = 45;
    sun.shadow.camera.bottom = -45;
    s.add(sun);

    // green ground
    const ground = new THREE.Mesh(new THREE.BoxGeometry(150, 1, 90), mat(PALETTE.grass));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 55; i++) {
      const x = -50 + Math.random() * 100;
      const z = -35 + Math.random() * 70;
      if (Math.hypot(x, z) < HILL_R + 1) continue; // keep the hill clean
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? PALETTE.grassLight : PALETTE.grassDark, x, 0.05, z);
      p.castShadow = false;
      s.add(p);
    }

    // ---------- the green hill: tall nested terraces up to the summit ----------
    const terraceColors = [0x9ede97, PALETTE.grass, 0xa8e6a3];
    const STEPS = 14;
    for (let i = 0; i < STEPS; i++) {
      const rOuter = HILL_R * (1 - i / STEPS) + 0.5;
      const topY = Math.max(this.groundY(HILL_R * (1 - (i + 0.7) / STEPS), 0), 0.5);
      const disc = new THREE.Mesh(
        new THREE.CylinderGeometry(rOuter, rOuter + 0.7, topY, 24),
        mat(terraceColors[i % 3]),
      );
      disc.position.set(0, topY / 2, 0);
      disc.receiveShadow = true;
      disc.castShadow = true;
      s.add(disc);
    }
    // flowers dotted up the slope
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2;
      const rr = 3 + Math.random() * 7;
      const fx = Math.cos(a) * rr;
      const fz = Math.sin(a) * rr;
      const f = block(0.16, 0.16, 0.16,
        [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        fx, this.groundY(fx, fz) + 0.1, fz);
      f.castShadow = false;
      s.add(f);
    }

    // the narrow road: scattered stepping-stones with gaps, wandering slightly
    for (let i = 0; i <= 24; i++) {
      const px = -34 + i * 2.9;
      const pz = (Math.random() - 0.5) * 0.9;
      const stone = block(
        0.85 + Math.random() * 0.55, 0.14, 1.6 + Math.random() * 0.7,
        PALETTE.path, px, this.groundY(px, pz) + 0.06, pz,
      );
      stone.castShadow = false;
      s.add(stone);
    }

    // ---------- the Cross on the summit ----------
    const crossG = new THREE.Group();
    crossG.add(block(0.55, 4.6, 0.55, PALETTE.woodDark, 0, 2.3, 0));
    crossG.add(block(2.7, 0.55, 0.55, PALETTE.woodDark, 0, 3.5, 0));
    // a warm radiance around it
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(2.6, 20, 16),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.22, depthWrite: false }),
    );
    glow.position.y = 3.2;
    crossG.add(glow);
    this.crossGlow = glow;
    const crossLight = new THREE.PointLight(0xfff0c0, 1.2, 20);
    crossLight.position.y = 3.5;
    crossG.add(crossLight);
    crossG.position.set(0, this.groundY(0, -2.2), -2.2);
    s.add(crossG);

    // ---------- the open tomb, a little below on the east slope ----------
    const tomb = new THREE.Group();
    tomb.add(block(2.6, 2.0, 2.2, 0xb9b4ac, 0, 1.0, 0));
    tomb.add(block(2.9, 0.5, 2.5, 0xa8a29a, 0, 2.2, 0));
    // dark doorway facing up the hill (west)
    tomb.add(block(0.2, 1.2, 1.0, 0x2e2823, -1.25, 0.7, 0));
    // the stone, already rolled away
    const stone = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.4, 14), mat(0xa8a29a));
    stone.rotation.x = Math.PI / 2;
    stone.rotation.z = Math.PI / 2;
    stone.position.set(-1.2, 0.9, 1.7);
    tomb.add(stone);
    tomb.position.set(TOMB.x, this.groundY(TOMB.x, TOMB.z), TOMB.z);
    s.add(tomb);

    // friendly trees flanking the road, clear of the hill
    for (const [tx, tz, blossom] of [
      [-26, -7, true], [-20, 8, false], [-14, -9, true],
      [16, 7, false], [22, -8, true], [28, 6, false],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // ---------- the shining light at the road's end ----------
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 2.0, 14, 18, 1, true),
      new THREE.MeshBasicMaterial({
        color: PALETTE.light, transparent: true, opacity: 0.5,
        side: THREE.DoubleSide, depthWrite: false,
      }),
    );
    beam.position.set(LIGHT_X + 1.5, 7, 0);
    s.add(beam);
    this.lightBeam = beam;
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff9dd, transparent: true, opacity: 0.4, depthWrite: false }),
    );
    halo.position.set(LIGHT_X + 1.5, 1.6, 0);
    s.add(halo);
    this.lightHalo = halo;

    // ---------- the three Shining Ones ----------
    for (let i = 0; i < 3; i++) {
      const angel = makeBear({
        species: 'bear', fur: 0xf2e2c9, outfit: 'robe',
        outfitColor: PALETTE.robeWhite, scale: 1.05,
      });
      // a golden halo hovering over each head
      const haloRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.06, 8, 18),
        new THREE.MeshBasicMaterial({ color: PALETTE.robeGold }),
      );
      haloRing.rotation.x = Math.PI / 2;
      haloRing.position.y = 1.15;
      angel.head.add(haloRing);
      angel.root.visible = false;
      s.add(angel.root);
      this.angels.push(angel);
    }

    // sparkle pool (burden-vanish burst, garment swap, angel shimmer)
    for (let i = 0; i < 26; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.sparkles.push({ mesh, m, life: 1, vx: 0, vy: 0, vz: 0 });
    }
    // floating music notes for the singing walk
    for (let i = 0; i < 8; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.06), m);
      mesh.visible = false;
      s.add(mesh);
      this.notes.push({ mesh, m, life: 1 });
    }
    // foot dust pool, same as the other chapters
    for (let i = 0; i < 16; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.footDust.push({ mesh, mat: m, life: 1, vx: 0, vz: 0 });
    }

    s.add(this.burdenProp);
    s.add(this.christian.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.rollT = 0;
    this.descendT = 0;
    this.burdenProp.visible = false;
    for (const a of this.angels) a.root.visible = false;
    this.christian.root.position.set(revisit ? -28 : -30, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    if (revisit) {
      this.phase = 'done';
      this.dressNew(true);
      this.cb.setMusic?.('cross');
      this.cb.setObjective('✝ The Cross stands quiet on the hill — the light in the east leads on');
    } else {
      this.phase = 'approach';
      this.dressOld();
      this.burdenOnBack.visible = true;
      this.cb.setMusic?.('gate');
      this.cb.setObjective('⛰ A green hill rises ahead — something stands at the top…');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'wonder' || this.phase === 'rolling' ||
      this.phase === 'rejoice' || this.phase === 'descend' || this.phase === 'angels') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.z = THREE.MathUtils.clamp(p.z, -10, 10);
    p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);
    p.y = this.groundY(p.x, p.z);

    // cross collision: the cross is at (0, gy, -2.2), base about 1.5 wide
    if (Math.abs(p.x) < 1.5 && p.z < -1.3 && p.z > -3.5) {
      p.z = -1.3;
    }

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'approach' && p.x > CROSS_TRIGGER) {
      this.phase = 'wonder';
      this.christian.root.rotation.y = Math.PI; // looks up at the Cross
      this.cb.playScript([
        { speaker: '', text: 'At the top of the hill stands a Cross — and a little below, on the slope, an open tomb.' },
        { speaker: 'Christian', text: 'The Cross… so this is the place Evangelist spoke of.' },
        { speaker: 'Christian', text: 'Wait — something is moving. The straps… they\'re loosening on their own—!' },
      ], () => {
        // the burden slips off and begins to roll
        this.phase = 'rolling';
        this.rollT = 0;
        this.burdenOnBack.visible = false;
        this.rollFrom.set(p.x - 0.4, p.y + 0.9, p.z);
        this.burdenProp.position.copy(this.rollFrom);
        this.burdenProp.rotation.set(0, 0, 0);
        this.burdenProp.visible = true;
      });
      return;
    }

    if (this.phase === 'joy' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private burstSparkles(at: THREE.Vector3, count: number, spread = 1): void {
    let n = 0;
    for (const sp of this.sparkles) {
      if (n >= count) break;
      if (sp.life < 1) continue;
      n++;
      sp.life = 0;
      sp.vx = (Math.random() - 0.5) * 2.4 * spread;
      sp.vy = 1.2 + Math.random() * 2.0;
      sp.vz = (Math.random() - 0.5) * 2.4 * spread;
      sp.mesh.position.copy(at);
      sp.mesh.visible = true;
    }
  }

  private runAngelSequence(): void {
    this.phase = 'angels';
    const p = this.christian.root.position;
    this.cb.playScript([
      { speaker: '', text: 'Three Shining Ones stand before him, bright as morning.' },
      { speaker: 'First Shining One', text: 'Peace be with you, Christian. Your sins are forgiven.' },
    ], () => {
      // the second exchanges his clothes in a burst of light
      this.burstSparkles(new THREE.Vector3(p.x, p.y + 1.2, p.z), 14, 1.2);
      this.cb.blipSound();
      this.dressNew(false);
      this.cb.playScript([
        { speaker: 'Second Shining One', text: 'I take from you these worn, travel-stained clothes… and dress you in garments new and shining.' },
        { speaker: '', text: 'His old rags are gone. Christian stands in spotless white, a golden sash about his waist.' },
      ], () => {
        // the third sets the seal and gives the scroll
        this.burstSparkles(new THREE.Vector3(p.x, p.y + 1.8, p.z), 8, 0.6);
        this.cb.blipSound();
        this.seal.visible = true;
        this.scroll.visible = true;
        this.cb.playScript([
          { speaker: 'Third Shining One', text: 'And I set this mark upon your forehead, and place in your paw a sealed scroll.' },
          { speaker: 'Third Shining One', text: 'Read it as you travel, to comfort you on the way — and hand it in at the gate of the Celestial City. It is the King\'s own promise that you belong to Him.' },
          { speaker: 'Christian', text: 'Forgiven… clothed… and sealed. I came up this hill bent double, and I will go down it singing!' },
        ], () => {
          this.phase = 'joy';
          for (const a of this.angels) a.root.visible = false;
          this.burstSparkles(new THREE.Vector3(p.x, p.y + 2.5, p.z), 10, 2);
          this.cb.setMusic?.('cross');
          this.cb.setObjective('🎵 Walk on east, down the hill and into the light, singing!');
        });
      });
    });
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // ---------- the burden rolls down into the tomb ----------
    if (this.phase === 'rolling') {
      this.rollT += dt;
      const T = 2.6; // seconds to reach the tomb
      const u = Math.min(1, this.rollT / T);
      const e = u * u * (3 - 2 * u) as number;
      const bx = THREE.MathUtils.lerp(this.rollFrom.x, TOMB.x - 1.2, e);
      const bz = THREE.MathUtils.lerp(this.rollFrom.z, TOMB.z, e);
      this.burdenProp.position.set(bx, this.groundY(bx, bz) + 0.45, bz);
      this.burdenProp.rotation.z -= dt * (2 + u * 8); // tumbling faster and faster
      // dust trails behind the rolling burden
      if (Math.random() < dt * 10) {
        const fd = this.footDust.find((d) => d.life >= 1);
        if (fd) {
          fd.life = 0;
          fd.vx = (Math.random() - 0.5) * 0.6;
          fd.vz = (Math.random() - 0.5) * 0.6;
          fd.mesh.position.set(bx + (Math.random() - 0.5) * 0.4, this.groundY(bx, bz) + 0.1, bz + (Math.random() - 0.5) * 0.4);
          fd.mesh.visible = true;
        }
      }
      if (u >= 1) {
        this.burdenProp.visible = false;
        this.burstSparkles(this.burdenProp.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 12, 1.4);
        this.cb.blipSound();
        this.phase = 'rejoice';
        this.cb.playScript([
          { speaker: '', text: 'The burden tumbles down the hill, rolls in at the mouth of the tomb — and is never seen again.' },
          { speaker: 'Christian', text: 'It\'s gone… it\'s truly gone! All this way I carried it, and here it fell off by itself!' },
          { speaker: 'Christian', text: 'Not by anything I have done — He has borne my guilt for me. He has given me rest by His sorrow, and life by His death.' },
        ], () => {
          this.phase = 'descend';
          this.descendT = 0;
          const p = this.christian.root.position;
          // angels land NORTH of Christian (negative z = away from camera),
          // so they appear in front of him as he faces north toward the cross
          this.angelTargets = [
            new THREE.Vector3(p.x - 2.2, 0, p.z - 2.0),
            new THREE.Vector3(p.x, 0, p.z - 3.2),
            new THREE.Vector3(p.x + 2.2, 0, p.z - 2.0),
          ];
          this.angels.forEach((a, i) => {
            const tg = this.angelTargets[i];
            a.root.position.set(tg.x, this.groundY(tg.x, tg.z) + 9, tg.z);
            a.root.rotation.y = 0; // facing south (+z), toward Christian
            a.root.visible = true;
          });
          this.cb.setObjective('✨ Light gathers on the hilltop…');
        });
      }
    }

    // ---------- the Shining Ones float down ----------
    if (this.phase === 'descend') {
      this.descendT += dt;
      let allDown = true;
      this.angels.forEach((a, i) => {
        const tg = this.angelTargets[i];
        const gy = this.groundY(tg.x, tg.z);
        const delay = i * 0.35;
        const u = Math.min(1, Math.max(0, (this.descendT - delay) / 2.0));
        const e = 1 - (1 - u) ** 3;
        a.root.position.y = gy + 9 * (1 - e);
        if (u < 1) allDown = false;
        if (Math.random() < 0.06) {
          this.burstSparkles(a.root.position.clone().add(new THREE.Vector3(0, 1.5, 0)), 1, 0.5);
        }
      });
      if (allDown && this.descendT > 2.9) {
        this.runAngelSequence();
      }
    }

    // angels bob gently while present
    for (let i = 0; i < this.angels.length; i++) {
      const a = this.angels[i];
      if (!a.root.visible) continue;
      if (this.phase === 'angels') {
        const tg = this.angelTargets[i];
        a.root.position.y = this.groundY(tg.x, tg.z) + 0.15 + Math.sin(t * 1.8 + i * 2.1) * 0.08;
      }
      animateBear(a, t + i * 1.3, false);
    }

    // ---------- glows & lights ----------
    if (this.crossGlow) {
      (this.crossGlow.material as THREE.MeshBasicMaterial).opacity =
        0.16 + 0.12 * Math.abs(Math.sin(t * 1.2));
    }
    if (this.lightBeam) {
      const sc = 1 + Math.sin(t * 2.2) * 0.1;
      this.lightBeam.scale.set(sc, 1, sc);
    }
    if (this.lightHalo) {
      (this.lightHalo.material as THREE.MeshBasicMaterial).opacity =
        0.3 + 0.2 * Math.abs(Math.sin(t * 1.7));
    }

    // ---------- sparkles ----------
    for (const sp of this.sparkles) {
      if (sp.life >= 1) continue;
      sp.life = Math.min(1, sp.life + dt * 1.1);
      sp.mesh.position.x += sp.vx * dt;
      sp.mesh.position.y += sp.vy * dt;
      sp.mesh.position.z += sp.vz * dt;
      sp.vy -= dt * 1.4;
      sp.m.opacity = 0.9 * (1 - sp.life);
      if (sp.life >= 1) sp.mesh.visible = false;
    }

    // ---------- music notes while he walks singing ----------
    if ((this.phase === 'joy' || (this.revisit && this.phase === 'done')) && moving) {
      this.noteTimer -= dt;
      if (this.noteTimer <= 0) {
        this.noteTimer = 0.55;
        const n = this.notes.find((x) => x.life >= 1);
        if (n) {
          const p = this.christian.root.position;
          n.life = 0;
          n.mesh.position.set(p.x + (Math.random() - 0.5) * 0.8, p.y + 2.2, p.z + (Math.random() - 0.5) * 0.8);
          n.mesh.visible = true;
        }
      }
    }
    for (const n of this.notes) {
      if (n.life >= 1) continue;
      n.life = Math.min(1, n.life + dt * 0.8);
      n.mesh.position.y += dt * 1.1;
      n.mesh.rotation.y += dt * 3;
      n.m.opacity = 0.85 * (1 - n.life);
      if (n.life >= 1) n.mesh.visible = false;
    }

    // ---------- foot dust while walking ----------
    if (moving && this.moveFactor() > 0) {
      this.footDustTimer -= dt;
      if (this.footDustTimer <= 0) {
        this.footDustTimer = 0.13;
        const cp = this.christian.root.position;
        const fd = this.footDust.find((d) => d.life >= 1);
        if (fd) {
          fd.life = 0;
          fd.vx = (Math.random() - 0.5) * 0.8;
          fd.vz = (Math.random() - 0.5) * 0.8;
          fd.mesh.position.set(cp.x + (Math.random() - 0.5) * 0.5, cp.y + 0.12, cp.z + (Math.random() - 0.5) * 0.5);
          fd.mesh.visible = true;
        }
      }
    }
    for (const fd of this.footDust) {
      if (fd.life >= 1) continue;
      fd.life = Math.min(1, fd.life + dt * 2.2);
      fd.mesh.position.x += fd.vx * dt;
      fd.mesh.position.z += fd.vz * dt;
      fd.mesh.position.y += dt * 0.9;
      const ss = 0.6 + fd.life * 1.6;
      fd.mesh.scale.setScalar(ss);
      fd.mat.opacity = 0.55 * (1 - fd.life);
      if (fd.life >= 1) fd.mesh.visible = false;
    }
  }

  nearCross(): boolean {
    if (this.phase !== 'joy' && this.phase !== 'done') return false;
    const p = this.christian.root.position;
    const crossPos = new THREE.Vector3(0, 0, -2.2);
    return Math.hypot(p.x - crossPos.x, p.z - crossPos.z) < 4.0;
  }

  talkCross(): void {
    if (!this.nearCross()) return;
    this.cb.playScript([
      { speaker: '', text: 'The Cross stands quiet on the hilltop — dark wood against the bright sky.' },
      { speaker: 'Christian', text: 'Here it was. Just here. My burden fell away the moment I looked up at it.' },
      { speaker: 'Christian', text: 'He hung here in my place — bearing everything I had carried all my life. Not for His own sake, but for mine.' },
      { speaker: 'Christian', text: 'I cannot repay this. I can only walk on, and never forget.' },
    ]);
  }

  nearTomb(): boolean {
    if (this.phase !== 'joy' && this.phase !== 'done') return false;
    const p = this.christian.root.position;
    return Math.hypot(p.x - TOMB.x, p.z - TOMB.z) < 3.5;
  }

  talkTomb(): void {
    if (!this.nearTomb()) return;
    this.cb.playScript([
      { speaker: '', text: 'The open tomb — its stone rolled aside, its darkness quiet.' },
      { speaker: 'Christian', text: 'My burden tumbled in here and I never saw it again. He took it all into His grave with Him.' },
      { speaker: 'Christian', text: 'And then He came out again — but the burden stayed behind. Buried. Done.' },
      { speaker: 'Christian', text: 'The empty tomb is the proof that His sacrifice was enough. He rose — and my guilt did not.' },
    ]);
  }
}
