import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, addShiningOneDetails, BearParts, Species, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';

// Chapter XVI — The Celestial City (the true finale).
// The angels lead Christian and Hopeful up a shining hill of golden stone and
// crystal steps. The higher they climb, the brighter everything becomes. At
// the Gates of Pearl they present the sealed scrolls they received at the
// Cross; the attendants know them as citizens of the King, and the gates
// swing wide. Inside: streets of gold, singing crowds of saints, trumpets,
// crowns, shining robes, and joy without end. Then — one last traveller.
// Ignorance reaches the gate with no scroll, and is led away through a small
// dark door. "There is a way to the dark, even from the gates of the City."

interface CelestialCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void; // fires after the Ignorance epilogue → Bunyan's scroll
  onExit: () => void;
  blipSound: () => void;
  rumbleSound: () => void;
  setMusic?: (style: 'celestial' | 'cross') => void;
  fade?: (mid: () => void) => void;
}

type Phase =
  | 'ascent'    // climbing the shining hill, angels leading
  | 'gates'     // parked: scrolls presented at the Gates of Pearl
  | 'through'   // scripted: the gates swing open, walk through
  | 'plaza'     // free walk into the singing plaza
  | 'crowning'  // parked: robes, crowns, everlasting joy
  | 'glory'     // free walk on east through the crowds
  | 'ignorance' // scripted epilogue: Ignorance at the river and the gate
  | 'done';

// ---- x-positions ----
const WEST_EDGE = -34;
const HILL_X0   = -28;  // foot of the shining hill
const HILL_X1   =   8;  // the summit threshold
const HILL_H    =  10;  // how high the City stands above Beulah
const GATE_X    =  15;  // the Gates of Pearl
const CROWN_X   =  30;  // the crowning ceremony
const END_X     =  46;  // walk past here → the epilogue begins

const PATH_Z = 0;
const LANE_HALF_WIDTH = 2.2;

// the Ignorance epilogue is staged far east on the same scene, at ground level
const IGN = new THREE.Vector3(180, 0, 0);

interface WalkJob {
  parts: BearParts;
  to: THREE.Vector3;
  speed: number;
  onArrive?: () => void;
}

export class CelestialScene {
  scene = new THREE.Scene();
  phase: Phase = 'ascent';
  private cb: CelestialCallbacks;
  christian: BearParts;
  hopeful: BearParts;
  private angels: BearParts[] = [];      // the two leading angels
  private attendants: BearParts[] = [];  // the King's attendants at the gate
  private saints: BearParts[] = [];      // the worshipping crowds
  private saintNames: string[] = [];
  private saintTalkCounts: number[] = [];
  private ignorance: BearParts;
  private ignAttendants: BearParts[] = []; // the two attendants of the epilogue

  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;

  // gates
  private gateDoorL: THREE.Group | null = null;
  private gateDoorR: THREE.Group | null = null;
  private gateOpenT = 0; // 0 closed → 1 open

  // crowns (hidden until the crowning)
  private crownChr: THREE.Group | null = null;
  private crownHop: THREE.Group | null = null;
  private helmetChr: THREE.Group | null = null;
  private robeChr: THREE.Group | null = null;
  private robeHop: THREE.Group | null = null;
  private rewardMaterials: THREE.MeshLambertMaterial[] = [];
  private rewardLights: THREE.PointLight[] = [];
  private rewardShineT = 0;
  private scrollChr: THREE.Group | null = null;
  private scrollHop: THREE.Group | null = null;

  // scenery animation
  private rays: THREE.Mesh[] = [];
  private banners: THREE.Mesh[] = [];
  private shining: ShiningLight | null = null;
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];

  // the epilogue's dark door
  private darkDoor: THREE.Group | null = null;
  private darkGlow: THREE.Mesh | null = null;
  private gatewayEmbers: THREE.Mesh[] = [];
  private ignoranceSweat: THREE.Mesh[] = [];
  private ignoranceAfraid = false;

  // scripted walking jobs (epilogue + gate walk-through)
  private walkJobs: WalkJob[] = [];

  private gatesTriggered = false;
  private gatePassageStarted = false;
  private crownTriggered = false;
  private endTriggered = false;
  private revisit = false;
  private built = false;

  constructor(cb: CelestialCallbacks) {
    this.cb = cb;

    // Christian — armored and shining, exactly as through the late chapters
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      sling: true, plump: true,
    });
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const STEEL = 0xcfd6dd;
    const helmet = new THREE.Group();
    // The same compact, bear-eared helmet Christian wears in Chapter XIV.
    helmet.add(block(1.02, 0.28, 0.86, STEEL, 0, 0.84, 0));
    helmet.add(block(0.18, 0.16, 0.9, PALETTE.robeGold, 0, 1.05, 0));
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, -0.38, 1.08, 0));
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, 0.38, 1.08, 0));
    this.christian.head.add(helmet);
    this.helmetChr = helmet;
    this.christian.body.add(block(1.16, 0.62, 0.88, STEEL, 0, 0.42, 0));
    addPilgrimArmorDetails(this.christian);
    // Keep the tail just beyond the breastplate while still visibly attached
    // to the body (the shared armour helper's farther offset looked detached).
    if (this.christian.tail) this.christian.tail.position.z = -0.54;

    // Hopeful the young dog
    this.hopeful = makeBear({
      species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2,
    });

    // The sealed promises are physically shown at the gate. Their warm point
    // lights make the seals readable even against the radiant City.
    this.scrollChr = this.makeSealedScroll();
    this.scrollChr.position.set(0, -0.42, 0.32);
    this.scrollChr.rotation.z = -0.18;
    this.scrollChr.visible = false;
    this.christian.armR.add(this.scrollChr);
    this.scrollHop = this.makeSealedScroll();
    this.scrollHop.position.set(0, -0.42, 0.32);
    this.scrollHop.rotation.z = -0.18;
    this.scrollHop.visible = false;
    this.hopeful.armR.add(this.scrollHop);

    // crowns for the crowning ceremony, built now but hidden
    const makeCrown = (): THREE.Group => {
      const c = new THREE.Group();
      c.add(block(0.72, 0.16, 0.66, PALETTE.robeGold, 0, 0, 0));
      for (const [px, pz] of [[-0.26, 0], [0.26, 0], [0, -0.24], [0, 0.24]] as const) {
        c.add(block(0.12, 0.22, 0.12, PALETTE.robeGold, px, 0.16, pz));
      }
      c.add(block(0.1, 0.1, 0.1, 0xc9535f, 0, 0.1, 0.3)); // a little ruby
      c.visible = false;
      return c;
    };
    this.crownChr = makeCrown();
    this.crownChr.position.set(0, 1.3, 0);
    this.christian.head.add(this.crownChr);
    this.crownHop = makeCrown();
    this.crownHop.position.set(0, 1.1, 0);
    this.crownHop.scale.setScalar(0.85);
    this.hopeful.head.add(this.crownHop);
    this.robeChr = this.makeRewardRobe(this.christian, 1.04);
    this.robeHop = this.makeRewardRobe(this.hopeful, 0.94);

    // the two leading angels — the same Shining Ones who met them at the river
    for (let i = 0; i < 2; i++) this.angels.push(this.makeShiningOne());
    // the King's attendants at the gate — taller, gold-sashed
    for (let i = 0; i < 2; i++) {
      const a = this.makeShiningOne(1.15);
      a.body.add(block(0.9, 0.14, 0.06, PALETTE.robeGold, 0, 0.45, 0.4));
      this.attendants.push(a);
    }
    // the epilogue attendants (the same look; separate actors, staged far away)
    for (let i = 0; i < 2; i++) this.ignAttendants.push(this.makeShiningOne(1.1));

    // Ignorance — a rosy-pink pig in a smart red coat, visually distinct from
    // every earlier traveller.
    this.ignorance = makeBear({
      species: 'pig', fur: 0xf29aaa, outfit: 'shirt', outfitColor: 0xd9657f, scale: 1.0,
    });
    this.ignorance.head.add(block(0.9, 0.16, 0.8, 0xa9415f, 0, 0.9, 0));   // smart hat brim
    this.ignorance.head.add(block(0.55, 0.3, 0.5, 0xa9415f, 0, 1.06, 0));  // hat crown
    this.ignorance.body.add(block(0.5, 0.12, 0.07, PALETTE.robeGold, 0, 0.62, 0.36)); // gold chain
    // Hidden voxel sweat beads become visible only when he is led away.
    for (const side of [-1, 1]) {
      const sweat = block(0.11, 0.2, 0.08, 0x9ee8ff, side * 0.54, 0.58, 0.35);
      sweat.visible = false;
      sweat.userData.side = side;
      this.ignorance.head.add(sweat);
      this.ignoranceSweat.push(sweat);
    }

    // radiant lighting — brightens further as the pilgrims ascend
    this.hemi = new THREE.HemisphereLight(0xfff2d8, 0xe8d8b0, 1.25);
    this.sun = new THREE.DirectionalLight(0xffeab0, 1.72);
    this.sun.position.set(55, 42, 20); // from the east, like the late chapters
    setupSunShadow(this.sun);
  }

  private makeShiningOne(scale = 1.0): BearParts {
    const ang = makeBear({
      species: 'bear', fur: 0xf6f2e6, outfit: 'robe', outfitColor: 0xfff0c0, scale,
    });
    // These guides stage scripted welcome scenes around a very narrow path.
    // They remain visible, but should never become a physical wall in front
    // of the pilgrim.
    delete ang.root.userData.characterRadius;
    addShiningOneDetails(ang);
    return ang;
  }

  private makeSealedScroll(): THREE.Group {
    const g = new THREE.Group();
    const paperMat = new THREE.MeshLambertMaterial({
      color: 0xfff4ce, emissive: 0xffd66b, emissiveIntensity: 0.65,
    });
    const paper = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.42, 0.12), paperMat);
    paper.castShadow = true;
    g.add(paper);
    g.add(block(0.12, 0.24, 0.17, 0xb94355, 0, -0.04, 0.1));
    g.add(block(0.74, 0.09, 0.16, 0xe4c07a, 0, 0.2, 0));
    g.add(block(0.74, 0.09, 0.16, 0xe4c07a, 0, -0.2, 0));
    const glow = new THREE.PointLight(0xffdf83, 1.15, 5);
    glow.position.set(0, 0.15, 0.45);
    g.add(glow);
    return g;
  }

  private makeRewardRobe(parts: BearParts, scale: number): THREE.Group {
    const robe = new THREE.Group();
    const white = new THREE.MeshLambertMaterial({
      color: 0xfffdf5, emissive: 0xffe3a0, emissiveIntensity: 0.12,
    });
    this.rewardMaterials.push(white);
    const mantle = new THREE.Mesh(new THREE.BoxGeometry(1.28 * scale, 0.82, 1.0 * scale), white);
    mantle.position.y = 0.42;
    mantle.castShadow = true;
    robe.add(mantle);
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(1.12 * scale, 0.36, 0.9 * scale), white);
    skirt.position.y = 0.0;
    skirt.castShadow = true;
    robe.add(skirt);
    robe.add(block(1.32 * scale, 0.12, 1.04 * scale, PALETTE.robeGold, 0, 0.58, 0));
    robe.add(block(0.16, 0.68, 1.06 * scale, 0xffe9a0, 0, 0.28, 0));
    const light = new THREE.PointLight(0xffe7a0, 0, 7);
    light.position.set(0, 1.1, 0.8);
    robe.add(light);
    this.rewardLights.push(light);
    robe.visible = false;
    parts.body.add(robe);
    return robe;
  }

  // a saint of the City: any friendly species, robed in white
  private makeSaint(species: Species): BearParts {
    const robeTints = [0xfdfdf6, 0xfff8ea, 0xf6f8ff, 0xfdf4f8];
    const s = makeBear({
      species,
      outfit: 'robe',
      outfitColor: robeTints[Math.floor(Math.random() * robeTints.length)],
      // One consistent scale lets each species' own ears, mane, wool, or
      // muzzle provide the natural size difference.
      scale: 1,
    });
    delete s.root.userData.characterRadius;
    // a thin gold circlet so they read as glorified
    s.head.add(block(0.6, 0.08, 0.55, PALETTE.robeGold, 0, 0.95, 0));
    return s;
  }

  // ground height: Beulah level, then the great shining climb, then the City plateau.
  // The far-east epilogue area sits back down at ground level.
  private groundY(x: number): number {
    if (x > 120) return 0;
    const u = THREE.MathUtils.clamp((x - HILL_X0) / (HILL_X1 - HILL_X0), 0, 1);
    return HILL_H * u * u * (3 - 2 * u);
  }

  // ---------------------------------------------------------------- enter
  enter(revisit: boolean): { christian: BearParts; hopeful: BearParts } {
    this.revisit = revisit;
    this.gatesTriggered = false;
    this.gatePassageStarted = false;
    this.crownTriggered = false;
    this.endTriggered = false;
    this.saintTalkCounts.fill(0);
    this.walkJobs = [];
    if (!this.built) this.build();

    this.gateOpenT = revisit ? 1 : 0;
    if (this.gateDoorL) this.gateDoorL.rotation.y = revisit ? 1.4 : 0;
    if (this.gateDoorR) this.gateDoorR.rotation.y = revisit ? -1.4 : 0;
    if (this.crownChr) this.crownChr.visible = revisit;
    if (this.crownHop) this.crownHop.visible = revisit;
    if (this.helmetChr) this.helmetChr.visible = !revisit;
    if (this.robeChr) this.robeChr.visible = revisit;
    if (this.robeHop) this.robeHop.visible = revisit;
    this.rewardShineT = 0;
    for (const material of this.rewardMaterials) material.emissiveIntensity = 0.12;
    for (const light of this.rewardLights) light.intensity = 0;
    this.robeChr?.scale.setScalar(1);
    this.robeHop?.scale.setScalar(1);
    if (this.scrollChr) this.scrollChr.visible = false;
    if (this.scrollHop) this.scrollHop.visible = false;
    this.ignorance.root.visible = false;
    for (const a of this.ignAttendants) a.root.visible = false;

    if (revisit) {
      this.phase = 'glory';
      this.gatesTriggered = true;
      this.crownTriggered = true;
      this.christian.root.position.set(GATE_X + 6, HILL_H, PATH_Z);
      this.hopeful.root.position.set(GATE_X + 4, HILL_H, PATH_Z + 0.9);
      this.cb.setObjective('👑 Home in the Celestial City — walk among the singing saints');
    } else {
      this.phase = 'ascent';
      this.christian.root.position.set(WEST_EDGE + 2, 0, PATH_Z);
      this.hopeful.root.position.set(WEST_EDGE, 0, PATH_Z + 0.9);
      this.cb.setObjective('✨ The angels lead the way — climb the shining hill!');
      this.cb.playScript([
        { speaker: 'Shining One', text: 'Come, pilgrims! The King is waiting, and the whole City knows your names. It\'s not far now — up, up, up!' },
        { speaker: 'Hopeful', text: 'Look at the steps, Christian — gold and crystal! And the light… the light is getting brighter with every one!' },
      ]);
    }
    this.christian.root.rotation.set(0, Math.PI / 2, 0);
    this.hopeful.root.rotation.set(0, Math.PI / 2, 0);
    // the two angels take the lead just ahead
    this.angels.forEach((a, i) => {
      a.root.visible = true;
      // The two guides walk abreast, like a welcoming pair rather than a
      // staggered line.
      const ax = this.christian.root.position.x + 3.4;
      a.root.position.set(ax, this.groundY(ax), i === 0 ? -1.15 : 1.15);
      a.root.rotation.y = Math.PI / 2;
    });

    if (this.cb.setMusic) this.cb.setMusic('celestial');
    return { christian: this.christian, hopeful: this.hopeful };
  }

  // the camera follows this object — Ignorance during the epilogue
  focus(): THREE.Object3D {
    if (this.phase === 'ignorance' || this.phase === 'done') return this.ignorance.root;
    return this.christian.root;
  }

  // ---------------------------------------------------------------- build
  private build(): void {
    this.built = true;
    const s = this.scene;

    s.background = new THREE.Color(0xffedc4);
    s.fog = new THREE.Fog(0xffedc4, 60, 160);
    s.add(this.hemi);
    s.add(this.sun);

    const rng = (a: number, b: number) => a + Math.random() * (b - a);

    // ---- base ground (warm gold-green Beulah edge) ----
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(340, 200), mat(0xd9c98e));
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(60, 0, 0);
    s.add(ground);

    // ---- Zone 1: the Shining Hill — broad golden slabs + crystal steps ----
    const SLABS = 16;
    for (let i = 0; i < SLABS; i++) {
      const x0 = HILL_X0 + (i * (HILL_X1 - HILL_X0)) / SLABS;
      const x1 = HILL_X0 + ((i + 1) * (HILL_X1 - HILL_X0)) / SLABS;
      const h = Math.max(this.groundY((x0 + x1) / 2 - 0.6), 0.35);
      const gold = i % 2 === 0 ? 0xe9cf7e : 0xf2dc95;
      const slab = block(x1 - x0 + 0.5, h, 9, gold, (x0 + x1) / 2, h / 2, 0);
      slab.receiveShadow = true;
      s.add(slab);
      // a crystal step edge on every slab lip
      const crystal = block(0.5, 0.3, 8.4, 0xcfeef8, x1 - 0.2, h + 0.12, 0);
      (crystal.material as THREE.MeshLambertMaterial).transparent = true;
      (crystal.material as THREE.MeshLambertMaterial).opacity = 0.85;
      (crystal.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xaadfef);
      (crystal.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.25;
      s.add(crystal);
    }
    // Pearl-and-gold ceremonial pillars climb beside the stairs. Their caps
    // catch the City light and make the final ascent visibly more radiant.
    for (const side of [-1, 1]) {
      for (let i = 0; i <= 8; i++) {
        const px = HILL_X0 + (i * (HILL_X1 - HILL_X0)) / 8;
        const py = this.groundY(px);
        const pillar = new THREE.Group();
        pillar.add(block(0.86, 0.24, 0.86, PALETTE.robeGold, 0, 0.12, 0));
        pillar.add(block(0.56, 2.1, 0.56, 0xfff8e8, 0, 1.25, 0));
        pillar.add(block(0.92, 0.26, 0.92, PALETTE.robeGold, 0, 2.42, 0));
        const capMat = new THREE.MeshLambertMaterial({
          color: 0xfff0b0, emissive: 0xffd86a, emissiveIntensity: 0.75,
        });
        const cap = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.52, 0.52), capMat);
        cap.position.y = 2.78;
        pillar.add(cap);
        pillar.position.set(px, py, side * 4.8);
        s.add(pillar);
        if (i % 2 === 0) {
          const lamp = new THREE.PointLight(0xffe2a0, 0.7, 8);
          lamp.position.set(px, py + 2.8, side * 4.8);
          s.add(lamp);
        }
      }
    }
    // shafts of light leaning over the upper hill (additive planes)
    for (let i = 0; i < 9; i++) {
      const ray = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 22),
        new THREE.MeshBasicMaterial({
          color: 0xfff2c0, transparent: true, opacity: 0.2,
          depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        }),
      );
      ray.position.set(rng(-6, GATE_X + 20), HILL_H + 9, rng(-7, 7));
      ray.rotation.z = 0.35;
      s.add(ray);
      this.rays.push(ray);
    }

    // ---- the City plateau: golden streets with crystal inlays ----
    const plateau = block(70, 1.2, 26, 0xf0d894, GATE_X + 28, HILL_H - 0.6, 0);
    plateau.receiveShadow = true;
    s.add(plateau);
    const street = new THREE.Mesh(new THREE.PlaneGeometry(60, 4.6), mat(0xf7e6ae));
    street.rotation.x = -Math.PI / 2;
    street.position.set(GATE_X + 30, HILL_H + 0.02, 0);
    s.add(street);
    for (let i = 0; i < 12; i++) {
      const tile = block(1.2, 0.06, 1.2, 0xcfeef8, GATE_X + 6 + i * 3.2, HILL_H + 0.05, (i % 2 === 0 ? -1 : 1) * 1.6);
      (tile.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0x9fd8ec);
      (tile.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.3;
      s.add(tile);
    }

    // ---- Zone 2: the Gates of Pearl ----
    this.buildGates();

    // ---- Zone 3: the plaza of eternal joy ----
    this.buildPlaza();

    // ---- the throne-light at the far end of the street ----
    this.shining = makeShiningLight();
    this.shining.group.position.set(END_X + 8, HILL_H, 0);
    this.shining.group.scale.setScalar(1.4);
    s.add(this.shining.group);

    // ---- the Ignorance epilogue set, far east at ground level ----
    this.buildIgnoranceSet();

    // ---- sparkle pool ----
    for (let i = 0; i < 24; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.sparkles.push({ mesh, m, life: 1, vx: 0, vy: 0, vz: 0 });
    }

    // ---- characters ----
    s.add(this.christian.root);
    s.add(this.hopeful.root);
    for (const a of this.angels) s.add(a.root);
    for (const a of this.attendants) s.add(a.root);
    s.add(this.ignorance.root);
    for (const a of this.ignAttendants) s.add(a.root);
    this.ignorance.root.visible = false;
    for (const a of this.ignAttendants) a.root.visible = false;
  }

  private buildGates(): void {
    const s = this.scene;
    const PEARL = 0xfdf8f0;
    const PEARL_SHADE = 0xf0e6da;
    const y = HILL_H;

    // towering flanking archways
    for (const side of [-1, 1]) {
      s.add(block(3.6, 0.65, 3.6, PALETTE.robeGold, GATE_X, y + 0.32, side * 5.2));
      s.add(block(3.15, 0.45, 3.15, PEARL_SHADE, GATE_X, y + 0.86, side * 5.2));
      s.add(block(2.6, 14, 2.6, PEARL, GATE_X, y + 7, side * 5.2));
      s.add(block(3.2, 1.0, 3.2, PALETTE.robeGold, GATE_X, y + 14.2, side * 5.2));
      s.add(block(1.6, 2.2, 1.6, PEARL_SHADE, GATE_X, y + 15.6, side * 5.2)); // finial
      // pearl studs up the towers
      for (let py = 2; py <= 12; py += 2.5) {
        const pearl = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), mat(0xfffdf8));
        pearl.position.set(GATE_X - 1.5, y + py, side * 5.2);
        s.add(pearl);
      }
      const gateLamp = new THREE.PointLight(0xffefb5, 1.25, 12);
      gateLamp.position.set(GATE_X - 1.8, y + 8, side * 5.2);
      s.add(gateLamp);
    }
    // the great arch over the gap
    s.add(block(1.8, 2.2, 12.4, PEARL, GATE_X, y + 12.6, 0));
    s.add(block(1.9, 0.6, 12.8, PALETTE.robeGold, y > 0 ? GATE_X : GATE_X, y + 11.4, 0));
    // a shining name-band across the arch
    const band = block(0.5, 1.0, 9.0, 0xfff3c4, GATE_X - 0.8, y + 12.6, 0);
    (band.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffe9a0);
    (band.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6;
    s.add(band);
    // Pearl garland and a luminous threshold mosaic.
    for (let i = 0; i < 9; i++) {
      const pearl = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), mat(0xfffdf8));
      pearl.position.set(GATE_X - 1.15, y + 13.65 + Math.sin((i / 8) * Math.PI) * 0.7, -4 + i);
      s.add(pearl);
    }
    s.add(block(3.8, 0.2, 10.2, 0xfff1bd, GATE_X - 1.8, y + 0.11, 0));
    for (let i = 0; i < 7; i++) {
      const inset = block(0.62, 0.08, 0.62, i % 2 ? 0xf7cf70 : 0xd8f2f7,
        GATE_X - 2.1 + (i % 2) * 0.55, y + 0.24, -3.6 + i * 1.2);
      inset.rotation.y = Math.PI / 4;
      s.add(inset);
    }

    // the two pearl doors, hinged at the towers, swinging open toward the city
    const makeDoor = (side: number): THREE.Group => {
      const hinge = new THREE.Group();
      hinge.position.set(GATE_X, y, side * 3.9);
      const panel = block(0.5, 9.5, 3.9, PEARL, 0, 4.75, -1.95 * side);
      hinge.add(panel);
      hinge.add(block(0.56, 0.5, 3.9, PALETTE.robeGold, 0, 8.9, -1.95 * side));
      hinge.add(block(0.56, 0.5, 3.9, PALETTE.robeGold, 0, 2.2, -1.95 * side));
      hinge.add(block(0.08, 6.1, 0.14, PALETTE.robeGold, -0.3, 5.25, -1.95 * side));
      for (let py = 3.0; py <= 7.9; py += 1.25) {
        const stud = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0xffe9a0));
        stud.position.set(-0.36, py, -1.95 * side);
        hinge.add(stud);
      }
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), mat(0xfffdf8));
      knob.position.set(-0.5, 4.8, -3.3 * side);
      hinge.add(knob);
      s.add(hinge);
      return hinge;
    };
    this.gateDoorL = makeDoor(-1);
    this.gateDoorR = makeDoor(1);

    // the attendants stand before the gates
    this.attendants[0].root.position.set(GATE_X - 1.0, y, -7.3);
    this.attendants[1].root.position.set(GATE_X - 1.0, y, 7.3);
    this.attendants[0].root.rotation.y = 0.85;
    this.attendants[1].root.rotation.y = Math.PI - 0.85;
  }

  private buildPlaza(): void {
    const s = this.scene;
    const y = HILL_H;
    const rng = (a: number, b: number) => a + Math.random() * (b - a);

    // tiered amphitheater steps rising on both sides of the street
    for (const side of [-1, 1]) {
      for (let t = 0; t < 3; t++) {
        const step = block(34, 0.9, 2.4, t % 2 === 0 ? 0xf2dc95 : 0xe9cf7e,
          GATE_X + 20, y + 0.45 + t * 0.9, side * (4.6 + t * 2.4));
        step.receiveShadow = true;
        s.add(step);
      }
    }

    // A visible presentation dais makes the crowning a clear destination
    // rather than an invisible x-coordinate along the street.
    const dais = new THREE.Group();
    dais.add(block(5.4, 0.18, 4.6, 0xffefbd, 0, 0.09, 0));
    dais.add(block(4.7, 0.16, 3.9, 0xf4cd70, 0.2, 0.24, 0));
    for (const z of [-1.65, 1.65]) {
      dais.add(block(0.38, 2.0, 0.38, 0xfff8e8, 1.7, 1.25, z));
      dais.add(block(0.68, 0.24, 0.68, PALETTE.robeGold, 1.7, 2.34, z));
    }
    dais.position.set(CROWN_X, y, 0);
    s.add(dais);
    const daisLight = new THREE.PointLight(0xffe6a0, 1.7, 14);
    daisLight.position.set(CROWN_X, y + 4.5, 0);
    s.add(daisLight);

    // crystal spires and endless golden towers rising behind the tiers
    for (let i = 0; i < 12; i++) {
      const tx = GATE_X + 4 + i * 4 + rng(-1, 1);
      // Keep camera-side architecture well beyond the follow camera so a
      // crystal spire cannot become a blue pane across the crowning scene.
      const side = i % 2 === 0 ? -1 : 1;
      const tz = side < 0 ? -rng(14, 20) : rng(21, 27);
      const h = rng(8, 22);
      const crystal = side < 0 && i % 3 === 0;
      const tower = block(rng(2, 3.4), h, rng(2, 3.4), crystal ? 0xcfeef8 : 0xf5e2a8, tx, y + h / 2, tz);
      const tm = tower.material as THREE.MeshLambertMaterial;
      tm.emissive = new THREE.Color(crystal ? 0x9fd8ec : 0xffdc80);
      tm.emissiveIntensity = 0.35;
      s.add(tower);
      const cap = block(1.0, 1.4, 1.0, 0xfff4c8, tx, y + h + 0.7, tz);
      (cap.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xfff0c0);
      (cap.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6;
      s.add(cap);
    }

    // glowing banners on golden poles lining the street
    const bannerColors = [0xf4b8c4, 0xa9d8f0, 0xcbb8f0, 0x9fdcc8, 0xffd6a5];
    for (let i = 0; i < 10; i++) {
      const bx = GATE_X + 5 + i * 4.2;
      // Banners live behind the worshipping tiers rather than sharing the
      // same space as the saints.
      const bz = (i % 2 === 0 ? -1 : 1) * 12.5;
      s.add(block(0.14, 3.6, 0.14, PALETTE.robeGold, bx, y + 1.8, bz));
      const banner = block(0.08, 1.6, 1.2, bannerColors[i % 5], bx, y + 2.9, bz + (bz < 0 ? 0.65 : -0.65));
      s.add(banner);
      this.banners.push(banner);
    }

    // Faithful is the City's one sheep. He stands nearest the road so
    // Christian can recognize and speak with his old friend.
    const faithful = this.makeSaint('sheep');
    faithful.root.position.set(CROWN_X + 5, y, -3.5);
    faithful.root.rotation.y = 0.3;
    faithful.root.userData.bobPhase = 0;
    s.add(faithful.root);
    this.saints.push(faithful);
    this.saintNames.push('Faithful');
    this.saintTalkCounts.push(0);

    // The remaining saints use a measured amphitheatre grid. There is no
    // second sheep, no lion, and enough spacing for every species silhouette.
    const species: Species[] = ['pig', 'frog', 'rabbit', 'cat', 'dog', 'mouse', 'owl'];
    for (let i = 0; i < 24; i++) {
      const saint = this.makeSaint(species[i % species.length]);
      const side = Math.floor(i / 12) === 0 ? -1 : 1;
      const local = i % 12;
      const tier = Math.floor(local / 4);
      const column = local % 4;
      const sx = GATE_X + 7 + column * 9.2 + tier * 1.2;
      const sz = side * (5.4 + tier * 2.45);
      const sy = y + 0.9 + tier * 0.9;
      saint.root.position.set(sx, sy, sz);
      saint.root.rotation.y = side < 0 ? 0.2 : Math.PI - 0.2;
      saint.root.userData.bobPhase = Math.random() * Math.PI * 2;
      s.add(saint.root);
      this.saints.push(saint);
      this.saintNames.push(`${species[i % species.length][0].toUpperCase()}${species[i % species.length].slice(1)} Saint`);
      this.saintTalkCounts.push(0);
    }

    // Jesus alone uses the lion model: seated at the radiant throne, facing
    // the pilgrims as they complete their journey.
    const throne = new THREE.Group();
    throne.add(block(2.8, 0.7, 3.0, 0xf6d36e, 0, 0.35, 0));
    throne.add(block(1.9, 4.2, 3.0, 0xffefb0, 1.0, 2.1, 0));
    throne.add(block(0.45, 1.5, 3.6, PALETTE.robeGold, 0.55, 1.25, 0));
    throne.add(block(0.7, 0.7, 0.7, 0xfdf8e8, 1.35, 4.55, -1.15));
    throne.add(block(0.7, 0.7, 0.7, 0xfdf8e8, 1.35, 4.55, 1.15));
    throne.position.set(END_X + 7.5, y, 0);
    s.add(throne);

    const jesus = makeBear({
      species: 'lion', outfit: 'robe', outfitColor: 0xfffdf2, scale: 1.28,
    });
    delete jesus.root.userData.characterRadius;
    jesus.body.add(block(1.02, 0.12, 0.08, PALETTE.robeGold, 0, 0.46, 0.5));
    jesus.root.position.set(END_X + 6.6, y + 1.0, 0);
    jesus.root.rotation.y = -Math.PI / 2;
    jesus.legL.rotation.x = -1.15;
    jesus.legR.rotation.x = -1.15;
    jesus.armL.rotation.x = -0.5;
    jesus.armR.rotation.x = -0.5;
    s.add(jesus.root);

    const throneGlow = new THREE.PointLight(0xffdfa0, 4.2, 38);
    throneGlow.position.set(END_X + 5.5, y + 7, 0);
    s.add(throneGlow);
    const throneFill = new THREE.PointLight(0xfff4c8, 2.8, 24);
    throneFill.position.set(END_X + 3.5, y + 3.5, 0);
    s.add(throneFill);
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.7 + i * 1.15, 0.09 + i * 0.025, 8, 32),
        new THREE.MeshBasicMaterial({
          color: i === 0 ? 0xfff5c7 : 0xffdda0,
          transparent: true, opacity: 0.72 - i * 0.16,
          blending: THREE.AdditiveBlending, depthWrite: false,
        }),
      );
      ring.rotation.y = Math.PI / 2;
      ring.position.set(END_X + 8.9, y + 3.2, 0);
      s.add(ring);
    }
    for (let i = 0; i < 6; i++) {
      const ray = new THREE.Mesh(
        new THREE.PlaneGeometry(0.55, 11),
        new THREE.MeshBasicMaterial({
          color: 0xffefb0, transparent: true, opacity: 0.16,
          blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
        }),
      );
      ray.position.set(END_X + 7.8, y + 6, -4.5 + i * 1.8);
      ray.rotation.z = -0.16 + i * 0.055;
      s.add(ray);
    }
  }

  private buildIgnoranceSet(): void {
    const s = this.scene;
    const d = IGN;
    const rng = (a: number, b: number) => a + Math.random() * (b - a);

    // A compact continuation of Chapter XV's Beulah Land: the same green
    // meadow, flower colours, layered river, pale road, and golden far shore.
    const meadow = new THREE.Mesh(new THREE.PlaneGeometry(42, 44), mat(0x9ed67e));
    meadow.rotation.x = -Math.PI / 2;
    // Keep the Beulah turf above Chapter XVI's large base plane. At the same
    // height the depth buffer alternates between both surfaces and flickers.
    meadow.position.set(d.x - 14, 0.035, d.z);
    meadow.receiveShadow = true;
    s.add(meadow);
    const farShore = new THREE.Mesh(new THREE.PlaneGeometry(46, 44), mat(0xe8d69a));
    farShore.rotation.x = -Math.PI / 2;
    farShore.position.set(d.x + 19, 0.04, d.z);
    farShore.receiveShadow = true;
    s.add(farShore);

    const addPlankWalk = (fromX: number, toX: number, colors: number[]): void => {
      const count = Math.ceil((toX - fromX) / 1.55);
      for (let i = 0; i < count; i++) {
        const x = fromX + 0.75 + i * 1.55;
        const plank = block(1.42, 0.18, 4.05, colors[i % colors.length], x, 0.09, d.z);
        plank.rotation.y = ((i % 3) - 1) * 0.012;
        plank.receiveShadow = true;
        s.add(plank);
        s.add(block(0.1, 0.06, 0.1, 0x8f6847, x, 0.21, d.z - 1.55));
        s.add(block(0.1, 0.06, 0.1, 0x8f6847, x, 0.21, d.z + 1.55));
      }
    };
    addPlankWalk(d.x - 31, d.x - 5, [0xcda878, 0xd9b98b, 0xb99669]);
    addPlankWalk(d.x + 3, d.x + 28, [0xe8cf94, 0xf0dca9, 0xdcbf83]);

    for (const bx of [d.x - 5, d.x + 3]) {
      const bank = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 44), mat(0xcfeaf2));
      bank.rotation.x = -Math.PI / 2;
      bank.position.set(bx, 0.1, d.z);
      s.add(bank);
    }
    const shallows = new THREE.Mesh(new THREE.PlaneGeometry(8, 44), mat(0x7cc3e6));
    shallows.rotation.x = -Math.PI / 2;
    shallows.position.set(d.x - 1, 0.12, d.z);
    s.add(shallows);
    const mid = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 44), mat(0x3f6bb8));
    mid.rotation.x = -Math.PI / 2;
    mid.position.set(d.x - 1, 0.14, d.z);
    s.add(mid);
    const deep = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 44), mat(0x243a86));
    deep.rotation.x = -Math.PI / 2;
    deep.position.set(d.x - 1, 0.16, d.z);
    s.add(deep);
    const shimmer = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 2.8),
      new THREE.MeshBasicMaterial({
        color: 0xfff2c0, transparent: true, opacity: 0.5,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    shimmer.rotation.x = -Math.PI / 2;
    shimmer.position.set(d.x - 1, 0.2, d.z);
    s.add(shimmer);
    for (let i = 0; i < 24; i++) {
      const glint = new THREE.Mesh(
        new THREE.BoxGeometry(0.6 + (i % 4) * 0.25, 0.035, 0.12),
        new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xffedbd : 0xc9efff,
          transparent: true, opacity: 0.4, depthWrite: false,
        }),
      );
      glint.position.set(rng(d.x - 4.4, d.x + 2.4), 0.23, rng(-20, 20));
      s.add(glint);
    }

    const flowerColors = [0xf4c2d4, 0xfff0a0, 0xe8d4f8, 0xffb3c6, 0xaecbff, 0xff9ec4];
    for (let i = 0; i < 46; i++) {
      const fx = rng(d.x - 31, d.x - 6.5);
      const fz = (Math.random() < 0.5 ? -1 : 1) * rng(3.4, 18);
      s.add(block(0.16, 0.32, 0.16, flowerColors[i % flowerColors.length], fx, 0.16, fz));
    }
    for (let i = 0; i < 7; i++) {
      const rz = (Math.random() < 0.5 ? -1 : 1) * rng(4, 15);
      s.add(block(0.12, rng(0.8, 1.4), 0.12, 0x6fae5a, d.x - 5.7, 0.5, rz));
      s.add(block(rng(0.5, 0.9), rng(0.3, 0.5), rng(0.5, 0.9), 0xb9b0a2, d.x - 6.2, 0.2, rz + 0.8));
    }
    for (let i = 0; i < 5; i++) {
      const tree = new THREE.Group();
      tree.add(block(0.48, 1.7, 0.48, PALETTE.trunk, 0, 0.85, 0));
      tree.add(block(2.0, 1.35, 2.0, 0x86cc6c, 0, 2.15, 0));
      tree.add(block(1.25, 0.9, 1.25, 0x93d477, 0, 3.0, 0));
      for (let f = 0; f < 5; f++) {
        const a = (f / 5) * Math.PI * 2;
        tree.add(block(0.2, 0.2, 0.2, f % 2 ? 0xff8a4a : 0xf25b6a,
          Math.cos(a) * 0.8, 2.2, Math.sin(a) * 0.8));
      }
      tree.position.set(rng(d.x - 30, d.x - 8), 0, (i % 2 ? -1 : 1) * rng(8, 18));
      s.add(tree);
    }

    // a smaller echo of the pearl gate on the far shore
    const PEARL = 0xfdf8f0;
    for (const side of [-1, 1]) {
      s.add(block(1.8, 9, 1.8, PEARL, d.x + 14, 4.5, d.z + side * 3.6));
      s.add(block(2.2, 0.7, 2.2, PALETTE.robeGold, d.x + 14, 9.2, d.z + side * 3.6));
    }
    s.add(block(1.2, 1.6, 9.0, PEARL, d.x + 14, 9.0, d.z));
    s.add(block(0.5, 6.6, 5.4, 0xf0e6da, d.x + 14.2, 3.3, d.z)); // shut pearl doors

    // A stark cleft of layered basalt replaces the old rounded hill. It reads
    // as an unnatural break in Beulah without relying on graphic imagery.
    const cliff = new THREE.Group();
    const basalt = [0x3b3539, 0x4a4142, 0x594b48];
    for (let i = 0; i < 13; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const height = 2.4 + (i % 4) * 0.75;
      const rock = block(
        1.3 + (i % 3) * 0.35, height, 1.8 + (i % 2) * 0.5,
        basalt[i % basalt.length],
        side * (1.8 + (i % 3) * 0.85), height / 2 - 0.1,
        0.3 + Math.floor(i / 4) * 1.3,
      );
      rock.rotation.y = side * (0.08 + (i % 3) * 0.06);
      cliff.add(rock);
    }
    cliff.position.set(d.x + 13.8, 0, d.z + 8.8);
    cliff.rotation.y = -0.28;
    s.add(cliff);

    const dd = new THREE.Group();
    // Build a complete cave around the portal so the entrance is grounded in
    // rock rather than appearing to hover over an empty lower edge.
    dd.add(block(6.8, 0.75, 6.2, 0x3b3539, 0, 0.18, 1.15)); // cave floor
    dd.add(block(6.2, 1.15, 2.2, 0x4a4142, 0, 0.3, -2.45)); // outer stone shelf
    dd.add(block(2.15, 0.28, 4.8, 0x282328, 0, 0.58, -0.55)); // descending threshold
    dd.add(block(2.2, 4.8, 2.4, 0x332e32, -2.45, 2.4, 0.75));
    dd.add(block(2.2, 4.8, 2.4, 0x332e32, 2.45, 2.4, 0.75));
    dd.add(block(6.5, 1.9, 3.2, 0x3b3539, 0, 4.25, 0.9)); // heavy cave roof
    dd.add(block(5.8, 4.5, 1.4, 0x242124, 0, 2.25, 2.75)); // darkness behind
    for (let i = 0; i < 8; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const stone = block(
        1.25 + (i % 3) * 0.32, 0.8 + (i % 4) * 0.34, 1.35,
        basalt[i % basalt.length],
        side * (1.55 + (i % 3) * 0.72), 0.55 + (i % 2) * 0.34,
        -1.65 + Math.floor(i / 4) * 1.15,
      );
      stone.rotation.y = side * 0.12;
      dd.add(stone);
    }
    dd.add(block(0.5, 3.7, 0.9, 0x282328, -1.18, 1.85, 0));
    dd.add(block(0.5, 3.7, 0.9, 0x282328, 1.18, 1.85, 0));
    dd.add(block(2.86, 0.56, 0.96, 0x282328, 0, 3.46, 0));
    dd.add(block(2.25, 0.22, 1.02, 0x75605a, 0, 2.92, 0));
    const glow = block(1.82, 2.92, 0.5, 0x0d090a, 0, 1.58, 0.18);
    (glow.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xb03018);
    (glow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.0; // dark until it opens
    dd.add(glow);
    // Receding inner frames give the doorway depth instead of reading as a
    // flat red rectangle.
    for (let i = 0; i < 3; i++) {
      const tunnel = block(1.56 - i * 0.2, 2.55 - i * 0.22, 0.12,
        [0x341313, 0x541b16, 0x7a271b][i], 0, 1.48, 0.48 + i * 0.26);
      const tunnelMat = tunnel.material as THREE.MeshLambertMaterial;
      tunnelMat.emissive = new THREE.Color([0x4b1110, 0x7d2117, 0xa6381f][i]);
      tunnelMat.emissiveIntensity = 0.32 + i * 0.18;
      dd.add(tunnel);
    }
    for (let i = 0; i < 4; i++) {
      dd.add(block(2.25 + i * 0.22, 0.22, 0.72, i % 2 ? 0x4c4140 : 0x382f31,
        0, 0.11 - i * 0.035, -0.75 - i * 0.55));
    }
    const emberLight = new THREE.PointLight(0xc13c22, 0, 8);
    emberLight.position.set(0, 1.4, 1.1);
    emberLight.userData.gatewayEmber = true;
    dd.add(emberLight);
    for (let i = 0; i < 12; i++) {
      const ember = new THREE.Mesh(
        new THREE.BoxGeometry(0.09 + (i % 3) * 0.035, 0.09, 0.09),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff7b35 : 0xffc05b, transparent: true, opacity: 0 }),
      );
      ember.position.set(-0.72 + (i % 4) * 0.48, 0.35 + Math.floor(i / 4) * 0.55, 0.95);
      ember.userData.baseY = ember.position.y;
      ember.userData.phase = i * 0.73;
      dd.add(ember);
      this.gatewayEmbers.push(ember);
    }
    this.darkGlow = glow;
    dd.position.set(d.x + 13.4, 0, d.z + 8.2);
    dd.rotation.y = -0.28;
    s.add(dd);
    this.darkDoor = dd;
  }

  // ---------------------------------------------------------------- API
  moveFactor(): number {
    switch (this.phase) {
      case 'ascent': return 0.9;  // a climb, but a joyful one
      // The guided entrance remains in place, but allow a player who reaches
      // the clear doorway to keep walking instead of feeling locked outside.
      case 'through': return this.gateOpenT >= 0.62 ? 0.7 : 0;
      case 'plaza':  return 1.0;
      case 'glory':  return 1.0;
      default:       return 0;    // gates / through / crowning / ignorance are scripted
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;

    if (this.phase === 'ascent') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, GATE_X - 3));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      p.y = this.groundY(p.x);
      if (p.x >= GATE_X - 3.4) this.triggerGates();
    } else if (this.phase === 'through') {
      p.x = Math.max(GATE_X - 3, Math.min(p.x, GATE_X + 5.5));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      p.y = p.x > GATE_X ? HILL_H : this.groundY(p.x);
    } else if (this.phase === 'plaza' || this.phase === 'glory') {
      p.x = Math.max(GATE_X + 1.5, Math.min(p.x, END_X));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      p.y = HILL_H;
      if (this.phase === 'plaza' && p.x >= CROWN_X) this.triggerCrowning();
      if (this.phase === 'glory' && p.x >= END_X - 0.4) {
        if (this.revisit) this.cb.onExit();
        else this.triggerEnd();
      }
    }

    // Hopeful follows close behind
    if (this.phase !== 'ignorance' && this.phase !== 'done') {
      const hp = this.hopeful.root.position;
      const target = p.clone().add(new THREE.Vector3(-1.7, 0, 0.9));
      target.y = this.groundY(target.x);
      if (this.phase === 'plaza' || this.phase === 'glory') target.y = HILL_H;
      hp.lerp(target, 0.09);
      this.hopeful.root.rotation.y = this.christian.root.rotation.y;
    }

    // the leading angels stay a few steps ahead on the climb
    if (this.phase === 'ascent') {
      this.angels.forEach((a, i) => {
        const ax = Math.min(p.x + 3.4, GATE_X - 4.5);
        // Smoothly fan outward over the last stretch of hill. Both angels
        // keep the same x-position, and no teleport occurs when dialogue opens.
        const u = THREE.MathUtils.smoothstep(p.x, HILL_X1 - 9, GATE_X - 3.4);
        const spread = THREE.MathUtils.lerp(1.15, 7.35, u);
        const target = new THREE.Vector3(ax, this.groundY(ax), i === 0 ? -spread : spread);
        a.root.position.lerp(target, 0.07);
        a.root.rotation.y = Math.PI / 2;
      });
    }
  }

  private nearbySaintIndex(): number {
    if (this.phase !== 'plaza' && this.phase !== 'glory') return -1;
    const p = this.christian.root.position;
    let best = -1;
    let bestDistance = 4.15;
    for (let i = 0; i < this.saints.length; i++) {
      const s = this.saints[i].root.position;
      const distance = Math.hypot(p.x - s.x, p.z - s.z);
      if (distance < bestDistance) {
        best = i;
        bestDistance = distance;
      }
    }
    return best;
  }

  nearSaint(): boolean {
    return this.nearbySaintIndex() >= 0;
  }

  nearbySaintName(): string {
    const i = this.nearbySaintIndex();
    return i >= 0 ? this.saintNames[i] : 'a saint';
  }

  talkSaint(): void {
    const i = this.nearbySaintIndex();
    if (i < 0) return;
    const saint = this.saints[i];
    const p = this.christian.root.position;
    const s = saint.root.position;
    saint.root.rotation.y = Math.atan2(p.x - s.x, p.z - s.z);
    this.christian.root.rotation.y = Math.atan2(s.x - p.x, s.z - p.z);

    const faithfulLines: DialogueLine[] = [
      { speaker: 'Faithful', text: 'Christian, my brother! Vanity Fair was not the end for me. The King brought me safely home before you.' },
      { speaker: 'Christian', text: 'Faithful! I grieved when we were separated. Seeing you here turns that sorrow into joy.' },
      { speaker: 'Faithful', text: 'Nothing we suffered was wasted. Keep walking—the King’s throne is just ahead, and we will never be parted again.' },
    ];
    const commonLines: DialogueLine[] = [
      { speaker: this.saintNames[i], text: 'Welcome home, pilgrim. We heard the trumpets announce your names at the gate.' },
      { speaker: this.saintNames[i], text: 'Every road here ends in praise. Go gladly—the King has been waiting for you.' },
      { speaker: this.saintNames[i], text: 'There is no night in this City. The King’s light reaches every street and every heart.' },
    ];
    const lines = i === 0 ? faithfulLines : commonLines;
    const line = lines[this.saintTalkCounts[i] % lines.length];
    this.saintTalkCounts[i]++;
    this.cb.playScript([line]);
  }

  // ---------------------------------------------------------------- triggers
  private triggerGates(): void {
    if (this.gatesTriggered) return;
    this.gatesTriggered = true;
    this.phase = 'gates';
    if (this.scrollChr) this.scrollChr.visible = true;
    if (this.scrollHop) this.scrollHop.visible = true;
    this.cb.setObjective('🚪 The Gates of Pearl — present your scrolls');
    this.christian.root.rotation.y = Math.PI / 2;
    // Turn both attendants toward Christian for the certificate inspection.
    // Their gate positions stay fixed; only their facing changes.
    const christianAtGate = this.christian.root.position;
    for (const attendant of this.attendants) {
      const at = attendant.root.position;
      attendant.root.rotation.y = Math.atan2(
        christianAtGate.x - at.x,
        christianAtGate.z - at.z,
      );
    }
    this.cb.playScript([
      { speaker: '', text: 'At the top of the hill stand gates made bright as pearl. Above them are the King’s words: “Blessed are those who enter by the gates into the City.”' },
      { speaker: 'King’s Attendant', text: 'Pilgrims, where have you come from, and what do you carry for the King?' },
      { speaker: 'Christian', text: 'We came from the City of Destruction. The King called us onto His road, and His mercy carried us all the way here.' },
      { speaker: 'Hopeful', text: 'We crossed the River trusting His promise. We have not come because we were strong, but because the King was faithful.' },
      { speaker: 'King’s Attendant', text: 'Then show us the certificates you received after your burdens fell away at the Cross.' },
      { speaker: '', text: 'Christian and Hopeful lift their sealed scrolls. Golden light pours from the King’s seals as the attendants read their names.' },
      { speaker: 'King’s Attendant', text: 'These promises are true. Your names are written here, and the King has been waiting for you.' },
      { speaker: 'Voices beyond the gate', text: 'Welcome them! Let the trumpets sound! Open the gates, so the righteous nation that keeps faith may enter!' },
    ], () => {
      if (this.scrollChr) this.scrollChr.visible = false;
      if (this.scrollHop) this.scrollHop.visible = false;
      this.cb.rumbleSound();
      this.phase = 'through';
      this.cb.setObjective('🎺 The gates are opening!');
      // the pilgrims walk through once the doors have swung wide (see update)
    });
  }

  private triggerCrowning(): void {
    if (this.crownTriggered) return;
    this.crownTriggered = true;
    this.phase = 'crowning';
    this.christian.root.position.set(CROWN_X, HILL_H + 0.4, -0.55);
    this.hopeful.root.position.set(CROWN_X - 1.4, HILL_H + 0.4, 0.95);
    this.christian.root.rotation.y = Math.PI / 2;
    this.hopeful.root.rotation.y = Math.PI / 2;

    // Apply the gifts at the beginning of the locked ceremony, ensuring the
    // transformation is visible for the entire dialogue and cannot be skipped
    // by walking over an invisible trigger.
    if (this.crownChr) this.crownChr.visible = true;
    if (this.crownHop) this.crownHop.visible = true;
    if (this.helmetChr) this.helmetChr.visible = false;
    if (this.robeChr) this.robeChr.visible = true;
    if (this.robeHop) this.robeHop.visible = true;
    this.rewardShineT = 5.5;
    this.cb.blipSound();
    this.burst(this.christian.root.position, 14);
    this.burst(this.hopeful.root.position, 10);

    this.cb.setObjective('👑 The crowning ceremony');
    this.cb.playScript([
      { speaker: '', text: 'At the centre of the plaza, Christian and Hopeful step onto a pearl-and-gold dais. The singing crowd becomes still.' },
      { speaker: '', text: 'Trumpeters in shining clothes sound a welcome from the walls. Bells answer from the towers, and the whole City sings.' },
      { speaker: 'King’s Attendant', text: 'You followed the King through sorrow and danger. Now He receives you into a home that will never fade.' },
      { speaker: '', text: 'The attendants clothe them in bright robes and place crowns upon their heads. Harps are given for praise, and every old wound is healed.' },
      { speaker: 'Saints', text: 'Blessing, honour, glory, and power belong to the King forever!' },
      { speaker: 'Christian', text: 'Hopeful… we\'re home. After everything — we\'re really, truly home.' },
      { speaker: 'Hopeful', text: 'No more fear, no more sorrow, and no more night. We can see the King at last!' },
    ], () => {
      this.phase = 'glory';
      this.cb.setObjective('🌟 Crowned! Walk on through the singing crowds…');
    });
  }

  private triggerEnd(): void {
    if (this.endTriggered) return;
    this.endTriggered = true;
    this.cb.playScript([
      { speaker: '', text: 'Christian and Hopeful approach the shining throne. The King welcomes them with a joy warmer than sunlight.' },
      { speaker: 'Christian', text: 'Everything good on the road came from You. You kept us when we could not keep ourselves.' },
      { speaker: 'Hopeful', text: 'The City is even better than the promise—and the promise was what brought us here.' },
      { speaker: '', text: 'They join the countless saints before the throne. Every tear is wiped away, every burden is gone, and the song of the City never ends.' },
    ], () => {
      this.cb.fade?.(() => this.beginIgnorance());
      if (!this.cb.fade) this.beginIgnorance();
    });
  }

  // ---------------------------------------------------------------- the epilogue
  private beginIgnorance(): void {
    this.phase = 'ignorance';
    this.ignoranceAfraid = false;
    for (const sweat of this.ignoranceSweat) sweat.visible = false;
    if (this.cb.setMusic) this.cb.setMusic('cross');
    this.cb.setObjective('📖 …but the story has one more traveller');

    const d = IGN;
    this.ignorance.root.visible = true;
    this.ignorance.root.position.set(d.x - 14, 0, d.z);
    this.ignorance.root.rotation.y = Math.PI / 2;
    this.ignAttendants[0].root.visible = true;
    this.ignAttendants[0].root.position.set(d.x + 12, 0, d.z - 2);
    this.ignAttendants[0].root.rotation.y = -Math.PI / 2;
    this.ignAttendants[1].root.visible = true;
    this.ignAttendants[1].root.position.set(d.x + 12, 0, d.z + 2);
    this.ignAttendants[1].root.rotation.y = -Math.PI / 2;

    this.cb.playScript([
      { speaker: '', text: 'The story returns to Beulah Land one last time. Ignorance reaches the same flowers, the same River, and the same golden shore.' },
      { speaker: 'Ignorance', text: 'I have come a very long way. Surely that proves I deserve a place in the City.' },
      { speaker: '', text: 'Christian and Hopeful crossed in fear and learned to trust the King. Ignorance still trusts only himself. A ferryman named Vain-hope carries him across without asking for the King’s promise.' },
    ], () => {
      // he crosses the river far too easily, never once looking down
      this.walkJobs.push({
        parts: this.ignorance,
        to: new THREE.Vector3(d.x + 10.5, 0, d.z),
        speed: 3.2,
        onArrive: () => this.ignoranceAtGate(),
      });
    });
  }

  private ignoranceAtGate(): void {
    this.ignorance.root.rotation.y = Math.PI / 2;
    this.cb.playScript([
      { speaker: '', text: 'Ignorance steps onto the golden shore and confidently knocks at the gate.' },
      { speaker: 'King’s Attendant', text: 'Where did you begin your pilgrimage, and what certificate do you carry for the King?' },
      { speaker: 'Ignorance', text: 'I walked beside pilgrims and spoke about good things. I have always believed I was good enough.' },
      { speaker: 'King’s Attendant', text: 'But did you enter through the Wicket Gate? Did you receive the King’s promise at the Cross?' },
      { speaker: 'Ignorance', text: 'No. I chose my own way. Surely my good opinion of myself is enough.' },
      { speaker: '', text: 'The attendants search the King’s book, but Ignorance’s name is not there. He came close to the City, yet never trusted the King who alone could bring him in.' },
      { speaker: '', text: 'With great sorrow, they bind him and lead him away from the pearl gate toward the dark doorway in the hillside.' },
    ], () => {
      this.ignoranceAfraid = true;
      for (const sweat of this.ignoranceSweat) sweat.visible = true;
      this.cb.rumbleSound();
      if (this.darkGlow) (this.darkGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 1.1;
      this.darkDoor?.traverse((o) => {
        if (o instanceof THREE.PointLight && o.userData.gatewayEmber) o.intensity = 2.2;
      });
      for (const ember of this.gatewayEmbers) {
        (ember.material as THREE.MeshBasicMaterial).opacity = 0.85;
      }
      const d = IGN;
      // the attendants flank him and all three walk to the dark door
      this.walkJobs.push({
        parts: this.ignAttendants[0],
        to: new THREE.Vector3(d.x + 12.2, 0, d.z + 6.4),
        speed: 2.2,
      });
      this.walkJobs.push({
        parts: this.ignAttendants[1],
        to: new THREE.Vector3(d.x + 14.6, 0, d.z + 7.4),
        speed: 2.2,
      });
      this.walkJobs.push({
        parts: this.ignorance,
        to: new THREE.Vector3(d.x + 13.4, 0, d.z + 7.6),
        speed: 2.0,
        onArrive: () => this.ignoranceTheDoor(),
      });
    });
  }

  private ignoranceTheDoor(): void {
    this.cb.playScript([
      { speaker: '', text: 'The black doorway opens. Ember light climbs the stone arch while the music of the City grows distant.' },
      { speaker: '', text: 'Ignorance came close enough to see the gates of heaven, but he would not enter by the King’s way or trust the King’s mercy.' },
      { speaker: '', text: 'The dark door closes behind him, and Beulah Land becomes quiet once more.' },
    ], () => {
      this.ignoranceAfraid = false;
      for (const sweat of this.ignoranceSweat) sweat.visible = false;
      this.ignorance.root.visible = false;
      for (const a of this.ignAttendants) a.root.visible = false;
      if (this.darkGlow) (this.darkGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0;
      this.darkDoor?.traverse((o) => {
        if (o instanceof THREE.PointLight && o.userData.gatewayEmber) o.intensity = 0;
      });
      for (const ember of this.gatewayEmbers) {
        (ember.material as THREE.MeshBasicMaterial).opacity = 0;
      }
      this.cb.rumbleSound();
      this.phase = 'done';
      window.setTimeout(() => this.cb.onComplete(), 900);
    });
  }

  private burst(at: THREE.Vector3, count: number): void {
    let n = 0;
    for (const sp of this.sparkles) {
      if (n >= count) break;
      if (sp.life < 1) continue;
      n++;
      sp.life = 0;
      sp.vx = (Math.random() - 0.5) * 2.6;
      sp.vy = 1.6 + Math.random() * 2.2;
      sp.vz = (Math.random() - 0.5) * 2.6;
      sp.mesh.position.set(at.x, at.y + 1.4, at.z);
      sp.mesh.visible = true;
    }
  }

  // ---------------------------------------------------------------- update
  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const chr = this.christian;
    const hop = this.hopeful;

    // ---- radiance grows with the climb: shadows and haze burn away ----
    const climb = THREE.MathUtils.clamp(
      (chr.root.position.x - HILL_X0) / (HILL_X1 - HILL_X0), 0, 1,
    );
    const inBeulahEpilogue = this.phase === 'ignorance' || this.phase === 'done';
    const bright = inBeulahEpilogue ? 0.35 : climb;
    this.hemi.intensity = 1.1 + bright * 0.55;
    const skyFrom = new THREE.Color(0xffedc4);
    const skyTo = new THREE.Color(0xfff8e2);
    const sky = inBeulahEpilogue
      ? new THREE.Color(0xffe3b0)
      : skyFrom.clone().lerp(skyTo, bright);
    (this.scene.background as THREE.Color).copy(sky);
    (this.scene.fog as THREE.Fog).color.copy(sky);
    (this.scene.fog as THREE.Fog).near = inBeulahEpilogue ? 70 : 60 + bright * 30;

    // ---- the gates swing open, then the pilgrims walk through ----
    if (this.phase === 'through') {
      this.gateOpenT = Math.min(1, this.gateOpenT + dt * 0.5);
      const e = this.gateOpenT * this.gateOpenT * (3 - 2 * this.gateOpenT);
      // Open both leaves into the City. Previously they swung back across the
      // approach path, making the open gate look (and feel) impassable.
      if (this.gateDoorL) this.gateDoorL.rotation.y = 1.4 * e;
      if (this.gateDoorR) this.gateDoorR.rotation.y = -1.4 * e;
      // Start the guided crossing as soon as there is a clear doorway. This
      // prevents a stalled gate state if the player releases movement at the
      // threshold or the final part of the animation is off-screen.
      if (this.gateOpenT >= 0.78 && !this.gatePassageStarted) {
        this.gatePassageStarted = true;
        // walk both pilgrims through into the plaza
        this.walkJobs.push({
          parts: hop, to: new THREE.Vector3(GATE_X + 3.6, HILL_H, 1.0), speed: 2.6,
        });
        this.walkJobs.push({
          parts: chr, to: new THREE.Vector3(GATE_X + 5.2, HILL_H, 0), speed: 2.6,
          onArrive: () => {
            this.phase = 'plaza';
            this.cb.setObjective('🎺 Walk into the City — the whole plaza is singing!');
            // the leading angels step aside by the gate
            this.angels.forEach((a, i) => {
              a.root.position.set(GATE_X + 1.8, HILL_H, (i === 0 ? -1 : 1) * 7.35);
              a.root.rotation.y = i === 0 ? 0.6 : Math.PI - 0.6;
            });
          },
        });
      }
    }

    // ---- scripted walk jobs (gate walk-through + the whole epilogue) ----
    for (let i = this.walkJobs.length - 1; i >= 0; i--) {
      const job = this.walkJobs[i];
      const wp = job.parts.root.position;
      const dx = job.to.x - wp.x;
      const dz = job.to.z - wp.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.18) {
        this.walkJobs.splice(i, 1);
        animateBear(job.parts, t, false);
        job.onArrive?.();
        continue;
      }
      wp.x += (dx / dist) * job.speed * dt;
      wp.z += (dz / dist) * job.speed * dt;
      // follow the terrain on the city side; the epilogue is flat ground
      wp.y = wp.x > 120 ? 0 : this.groundY(wp.x);
      if (this.phase === 'plaza' || this.phase === 'through') wp.y = wp.x > GATE_X ? HILL_H : this.groundY(wp.x);
      job.parts.root.rotation.y = Math.atan2(dx, dz);
      animateBear(job.parts, t, true);
    }

    // ---- ambient animation: rays, banners, saints, sparkles ----
    for (let i = 0; i < this.rays.length; i++) {
      const r = this.rays[i];
      (r.material as THREE.MeshBasicMaterial).opacity = 0.1 + Math.abs(Math.sin(t * 0.6 + i)) * 0.12;
    }
    for (let i = 0; i < this.banners.length; i++) {
      this.banners[i].rotation.x = Math.sin(t * 1.6 + i) * 0.16;
    }
    for (const saint of this.saints) {
      // little joyful hops and swaying — a crowd mid-song
      const ph = saint.root.userData.bobPhase as number;
      saint.root.position.y += 0; // base kept where placed
      saint.body.position.y = 0.55 + Math.abs(Math.sin(t * 2.4 + ph)) * 0.08;
      saint.armL.rotation.x = -0.9 + Math.sin(t * 2.4 + ph) * 0.25;
      saint.armR.rotation.x = -0.9 + Math.cos(t * 2.2 + ph) * 0.25;
      saint.head.rotation.z = Math.sin(t * 1.4 + ph) * 0.07;
    }
    for (const sp of this.sparkles) {
      if (sp.life >= 1) continue;
      sp.life = Math.min(1, sp.life + dt * 0.9);
      sp.mesh.position.x += sp.vx * dt;
      sp.mesh.position.y += sp.vy * dt;
      sp.mesh.position.z += sp.vz * dt;
      sp.vy -= dt * 1.2;
      sp.m.opacity = 0.9 * (1 - sp.life);
      if (sp.life >= 1) sp.mesh.visible = false;
    }
    if (this.shining) animateShiningLight(this.shining, t);
    for (const scroll of [this.scrollChr, this.scrollHop]) {
      if (!scroll?.visible) continue;
      const pulse = 1 + Math.sin(t * 3.2) * 0.06;
      scroll.scale.setScalar(pulse);
      scroll.rotation.y = Math.sin(t * 1.4) * 0.08;
    }
    if (this.phase === 'ignorance' && this.darkGlow) {
      const darkMat = this.darkGlow.material as THREE.MeshLambertMaterial;
      if (darkMat.emissiveIntensity > 0) {
        darkMat.emissiveIntensity = 0.9 + Math.abs(Math.sin(t * 2.8)) * 0.45;
        this.darkDoor?.traverse((o) => {
          if (o instanceof THREE.PointLight && o.userData.gatewayEmber) {
            o.intensity = 1.75 + Math.abs(Math.sin(t * 3.4)) * 1.1;
          }
        });
        for (const ember of this.gatewayEmbers) {
          const phase = ember.userData.phase as number;
          ember.position.y = (ember.userData.baseY as number) + ((t * 0.55 + phase) % 1.5);
          (ember.material as THREE.MeshBasicMaterial).opacity =
            0.35 + Math.abs(Math.sin(t * 3 + phase)) * 0.55;
        }
      }
    }
    if (this.rewardShineT > 0) {
      this.rewardShineT = Math.max(0, this.rewardShineT - dt);
      const fade = THREE.MathUtils.clamp(this.rewardShineT / 1.4, 0, 1);
      const pulse = 0.65 + Math.sin(t * 8) * 0.35;
      for (const material of this.rewardMaterials) {
        material.emissiveIntensity = 0.18 + fade * (0.75 + pulse * 0.45);
      }
      for (const light of this.rewardLights) light.intensity = fade * (1.4 + pulse * 1.2);
      const robeScale = 1 + fade * Math.sin(t * 7) * 0.025;
      this.robeChr?.scale.setScalar(robeScale);
      this.robeHop?.scale.setScalar(robeScale);
      if (this.rewardShineT === 0) {
        for (const material of this.rewardMaterials) material.emissiveIntensity = 0.12;
        for (const light of this.rewardLights) light.intensity = 0;
        this.robeChr?.scale.setScalar(1);
        this.robeHop?.scale.setScalar(1);
      }
    }

    // the angels' gentle hover-bob while standing
    if (this.phase !== 'ascent') {
      this.angels.forEach((a, i) => {
        animateBear(a, t + i * 1.2, false);
      });
    } else {
      this.angels.forEach((a, i) => animateBear(a, t + i * 1.2, moving));
    }
    for (const a of this.attendants) animateBear(a, t + 0.7, false);
    if (this.phase === 'ignorance') {
      for (const a of this.ignAttendants) {
        if (a.root.visible && !this.walkJobs.some((j) => j.parts === a)) animateBear(a, t, false);
      }
      if (this.ignorance.root.visible && !this.walkJobs.some((j) => j.parts === this.ignorance)) {
        animateBear(this.ignorance, t, false);
      }
      if (this.ignoranceAfraid && this.ignorance.root.visible) {
        // A restrained frightened tremble, with alternating blocky sweat drops.
        this.ignorance.head.rotation.z = Math.sin(t * 14) * 0.035;
        this.ignorance.armL.rotation.z = -0.22 + Math.sin(t * 11) * 0.08;
        this.ignorance.armR.rotation.z = 0.22 - Math.sin(t * 11) * 0.08;
        this.ignoranceSweat.forEach((drop, i) => {
          const cycle = (t * 1.8 + i * 0.55) % 1;
          drop.position.y = 0.68 - cycle * 0.58;
          drop.visible = cycle < 0.82;
          drop.scale.setScalar(1 - cycle * 0.35);
        });
      }
    }

    // ---- pilgrims' own walk cycle ----
    const freeWalk = (this.phase === 'ascent' || this.phase === 'plaza' || this.phase === 'glory') && moving;
    const scripted = this.walkJobs.some((j) => j.parts === chr);
    if (!scripted) animateBear(chr, t, freeWalk);
    if (!this.walkJobs.some((j) => j.parts === hop)) animateBear(hop, t, freeWalk);
  }
}
