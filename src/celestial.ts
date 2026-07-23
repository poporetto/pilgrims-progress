import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
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

  // scenery animation
  private rays: THREE.Mesh[] = [];
  private banners: THREE.Mesh[] = [];
  private shining: ShiningLight | null = null;
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];

  // the epilogue's dark door
  private darkDoor: THREE.Group | null = null;
  private darkGlow: THREE.Mesh | null = null;

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
    helmet.add(block(1.02, 0.4, 0.86, STEEL, 0, 0.92, 0));
    helmet.add(block(0.2, 0.24, 0.9, PALETTE.robeGold, 0, 1.16, 0));
    this.christian.head.add(helmet);
    this.christian.body.add(block(1.16, 0.62, 0.88, STEEL, 0, 0.42, 0));
    addPilgrimArmorDetails(this.christian);

    // Hopeful the young dog
    this.hopeful = makeBear({
      species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2,
    });

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

    // Ignorance — a very self-satisfied pig in a smart mulberry coat
    this.ignorance = makeBear({
      species: 'pig', outfit: 'shirt', outfitColor: 0x8a3a6a, scale: 1.0,
    });
    this.ignorance.head.add(block(0.9, 0.16, 0.8, 0x5a2a46, 0, 0.9, 0));   // smart hat brim
    this.ignorance.head.add(block(0.55, 0.3, 0.5, 0x5a2a46, 0, 1.06, 0));  // hat crown
    this.ignorance.body.add(block(0.5, 0.12, 0.07, PALETTE.robeGold, 0, 0.62, 0.36)); // gold chain

    // radiant lighting — brightens further as the pilgrims ascend
    this.hemi = new THREE.HemisphereLight(0xfff2d8, 0xe8d8b0, 1.1);
    this.sun = new THREE.DirectionalLight(0xffeab0, 1.5);
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
    for (const side of [-1, 1]) {
      const wing = block(0.2, 1.5, 0.9, 0xfffdf4, 0.5 * side, 0.7, -0.4);
      wing.rotation.z = 0.3 * side;
      wing.rotation.y = 0.4 * side;
      ang.body.add(wing);
    }
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.06, 8, 20),
      new THREE.MeshBasicMaterial({ color: 0xfff2b0 }),
    );
    halo.rotation.x = Math.PI / 2;
    halo.position.set(0, 1.7, 0);
    ang.head.add(halo);
    return ang;
  }

  // a saint of the City: any friendly species, robed in white
  private makeSaint(): BearParts {
    const species = (['pig', 'frog', 'rabbit', 'cat', 'dog', 'mouse', 'sheep', 'owl', 'lion'] as const)[
      Math.floor(Math.random() * 9)
    ];
    const robeTints = [0xfdfdf6, 0xfff8ea, 0xf6f8ff, 0xfdf4f8];
    const s = makeBear({
      species,
      outfit: 'robe',
      outfitColor: robeTints[Math.floor(Math.random() * robeTints.length)],
      scale: 0.9 + Math.random() * 0.2,
    });
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
    this.walkJobs = [];
    if (!this.built) this.build();

    this.gateOpenT = revisit ? 1 : 0;
    if (this.gateDoorL) this.gateDoorL.rotation.y = revisit ? 1.4 : 0;
    if (this.gateDoorR) this.gateDoorR.rotation.y = revisit ? -1.4 : 0;
    if (this.crownChr) this.crownChr.visible = revisit;
    if (this.crownHop) this.crownHop.visible = revisit;
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
      a.root.position.set(this.christian.root.position.x + 3 + i * 1.6, this.groundY(this.christian.root.position.x + 3), PATH_Z + (i === 0 ? -1 : 1));
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
    // golden rails climbing beside the way
    for (const side of [-1, 1]) {
      for (let i = 0; i <= 8; i++) {
        const px = HILL_X0 + (i * (HILL_X1 - HILL_X0)) / 8;
        const py = this.groundY(px);
        s.add(block(0.16, 1.0, 0.16, PALETTE.robeGold, px, py + 0.5, side * 4.2));
      }
    }
    // shafts of light leaning over the upper hill (additive planes)
    for (let i = 0; i < 6; i++) {
      const ray = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 22),
        new THREE.MeshBasicMaterial({
          color: 0xfff2c0, transparent: true, opacity: 0.16,
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
      s.add(block(2.6, 14, 2.6, PEARL, GATE_X, y + 7, side * 5.2));
      s.add(block(3.2, 1.0, 3.2, PALETTE.robeGold, GATE_X, y + 14.2, side * 5.2));
      s.add(block(1.6, 2.2, 1.6, PEARL_SHADE, GATE_X, y + 15.6, side * 5.2)); // finial
      // pearl studs up the towers
      for (let py = 2; py <= 12; py += 2.5) {
        const pearl = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), mat(0xfffdf8));
        pearl.position.set(GATE_X - 1.5, y + py, side * 5.2);
        s.add(pearl);
      }
    }
    // the great arch over the gap
    s.add(block(1.8, 2.2, 12.4, PEARL, GATE_X, y + 12.6, 0));
    s.add(block(1.9, 0.6, 12.8, PALETTE.robeGold, y > 0 ? GATE_X : GATE_X, y + 11.4, 0));
    // a shining name-band across the arch
    const band = block(0.5, 1.0, 9.0, 0xfff3c4, GATE_X - 0.8, y + 12.6, 0);
    (band.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffe9a0);
    (band.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6;
    s.add(band);

    // the two pearl doors, hinged at the towers, swinging open toward the city
    const makeDoor = (side: number): THREE.Group => {
      const hinge = new THREE.Group();
      hinge.position.set(GATE_X, y, side * 3.9);
      const panel = block(0.5, 9.5, 3.9, PEARL, 0, 4.75, -1.95 * side);
      hinge.add(panel);
      hinge.add(block(0.56, 0.5, 3.9, PALETTE.robeGold, 0, 8.9, -1.95 * side));
      hinge.add(block(0.56, 0.5, 3.9, PALETTE.robeGold, 0, 2.2, -1.95 * side));
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), mat(0xfffdf8));
      knob.position.set(-0.5, 4.8, -3.3 * side);
      hinge.add(knob);
      s.add(hinge);
      return hinge;
    };
    this.gateDoorL = makeDoor(-1);
    this.gateDoorR = makeDoor(1);

    // the attendants stand before the gates
    this.attendants[0].root.position.set(GATE_X - 2.4, y, -2.4);
    this.attendants[1].root.position.set(GATE_X - 2.4, y, 2.4);
    for (const a of this.attendants) a.root.rotation.y = -Math.PI / 2;
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

    // crystal spires and endless golden towers rising behind the tiers
    for (let i = 0; i < 12; i++) {
      const tx = GATE_X + 4 + i * 4 + rng(-1, 1);
      const tz = (i % 2 === 0 ? -1 : 1) * rng(12, 20);
      const h = rng(8, 22);
      const tower = block(rng(2, 3.4), h, rng(2, 3.4), i % 3 === 0 ? 0xcfeef8 : 0xf5e2a8, tx, y + h / 2, tz);
      const tm = tower.material as THREE.MeshLambertMaterial;
      tm.emissive = new THREE.Color(i % 3 === 0 ? 0x9fd8ec : 0xffdc80);
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
      const bz = (i % 2 === 0 ? -1 : 1) * 3.4;
      s.add(block(0.14, 3.6, 0.14, PALETTE.robeGold, bx, y + 1.8, bz));
      const banner = block(0.08, 1.6, 1.0, bannerColors[i % 5], bx, y + 2.9, bz + 0.55);
      s.add(banner);
      this.banners.push(banner);
    }

    // the saints — a joyful crowd of robed animals along the tiers and street
    for (let i = 0; i < 26; i++) {
      const saint = this.makeSaint();
      const side = i % 2 === 0 ? -1 : 1;
      const onTier = i % 3 !== 0;
      const sx = GATE_X + 4 + rng(0, 34);
      const sz = onTier ? side * rng(4.6, 9.4) : side * rng(2.6, 3.4);
      const sy = onTier ? y + 0.9 + Math.floor(rng(0, 2)) * 0.9 : y;
      saint.root.position.set(sx, sy, sz);
      saint.root.rotation.y = side < 0 ? Math.PI * 0.9 : Math.PI * 0.1 - Math.PI;
      // face roughly toward the street
      saint.root.rotation.y = side < 0 ? 0.2 : Math.PI - 0.2;
      saint.root.userData.bobPhase = Math.random() * Math.PI * 2;
      this.scene.add(saint.root);
      this.saints.push(saint);
    }
  }

  private buildIgnoranceSet(): void {
    const s = this.scene;
    const d = IGN;

    // a strip of Beulah-green bank, the river, and the far golden shore
    s.add(block(26, 0.5, 22, 0x9ed67e, d.x - 12, -0.25, d.z));
    const river = new THREE.Mesh(new THREE.PlaneGeometry(8, 22), mat(0x7cc3e6));
    river.rotation.x = -Math.PI / 2;
    river.position.set(d.x - 1, 0.08, d.z);
    (river.material as THREE.MeshLambertMaterial).transparent = true;
    (river.material as THREE.MeshLambertMaterial).opacity = 0.9;
    s.add(river);
    s.add(block(30, 0.5, 22, 0xe8d69a, d.x + 18, -0.25, d.z));

    // a smaller echo of the pearl gate on the far shore
    const PEARL = 0xfdf8f0;
    for (const side of [-1, 1]) {
      s.add(block(1.8, 9, 1.8, PEARL, d.x + 14, 4.5, d.z + side * 3.6));
      s.add(block(2.2, 0.7, 2.2, PALETTE.robeGold, d.x + 14, 9.2, d.z + side * 3.6));
    }
    s.add(block(1.2, 1.6, 9.0, PEARL, d.x + 14, 9.0, d.z));
    s.add(block(0.5, 6.6, 5.4, 0xf0e6da, d.x + 14.2, 3.3, d.z)); // shut pearl doors

    // the small dark door in the hillside, south of the gate
    const hillock = new THREE.Mesh(
      new THREE.SphereGeometry(5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xc9b988),
    );
    hillock.scale.y = 0.55;
    hillock.position.set(d.x + 16, -0.2, d.z + 10);
    s.add(hillock);
    const dd = new THREE.Group();
    dd.add(block(1.8, 2.6, 0.4, 0x4a3f38, 0, 1.3, 0));  // frame
    const glow = block(1.3, 2.1, 0.3, 0x1c0f0a, 0, 1.15, 0.12);
    (glow.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xb03018);
    (glow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.0; // dark until it opens
    dd.add(glow);
    this.darkGlow = glow;
    dd.position.set(d.x + 13.4, 0, d.z + 8.2);
    dd.rotation.y = -0.7;
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
        const ax = Math.min(p.x + 3.4 + i * 1.4, GATE_X - 4.5);
        // Move them to the outer lanes well before the final approach; the
        // centre is reserved for Christian and Hopeful at the Pearl Gates.
        const nearGate = p.x > HILL_X1 - 7;
        const target = new THREE.Vector3(ax, this.groundY(ax), i === 0 ? (nearGate ? -5.2 : -1.2) : (nearGate ? 5.2 : 1.2));
        a.root.position.lerp(target, 0.07);
        a.root.rotation.y = Math.PI / 2;
      });
    }
  }

  // ---------------------------------------------------------------- triggers
  private triggerGates(): void {
    if (this.gatesTriggered) return;
    this.gatesTriggered = true;
    this.phase = 'gates';
    // The shared character-collision system keeps Christian from walking
    // through NPCs. Move the welcoming party well outside the centre lane
    // before the conversation so neither an angel nor an attendant can seal
    // off the only route through the Pearl Gates.
    this.angels.forEach((angel, i) => {
      angel.root.position.set(GATE_X - 1.8, HILL_H, i === 0 ? -5.6 : 5.6);
      angel.root.rotation.y = i === 0 ? 0.75 : Math.PI - 0.75;
    });
    this.attendants.forEach((attendant, i) => {
      attendant.root.position.set(GATE_X - 1.0, HILL_H, i === 0 ? -4.2 : 4.2);
      attendant.root.rotation.y = i === 0 ? 0.85 : Math.PI - 0.85;
    });
    this.cb.setObjective('🚪 The Gates of Pearl — present your scrolls');
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.playScript([
      { speaker: '', text: 'Above the last shining step rise the Gates of Pearl, taller than any tower — and before them stand two of the King\'s own attendants.' },
      { speaker: 'Attendant', text: 'Welcome, travellers! Who comes to the City of the King?' },
      { speaker: 'Christian', text: 'Two pilgrims from the City of Destruction. We have followed the King\'s road the whole long way — through the Slough, past the giants, and over the River itself.' },
      { speaker: 'Attendant', text: 'Then show us the scrolls you were given at the Cross, where your burdens rolled away.' },
      { speaker: '', text: 'Christian and Hopeful hold out their sealed scrolls. The attendants open them, read — and their faces shine like sunrise.' },
      { speaker: 'Attendant', text: 'These are the King\'s own promises, and your names are written inside! You are citizens of this City. OPEN THE GATES!' },
    ], () => {
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
    this.cb.setObjective('👑 The gifts of the King');
    this.cb.playScript([
      { speaker: '', text: 'Trumpets ring out from every tower. The streets shine like glass and gold, and everywhere — everywhere — the saints of the King are singing.' },
      { speaker: 'Attendant', text: 'Every pilgrim who finishes the road receives three gifts from the King.' },
      { speaker: '', text: 'Shining robes are laid upon their shoulders. Golden crowns are set upon their heads. And deep inside them settles a joy that will never, ever run out.' },
      { speaker: 'Christian', text: 'Hopeful… we\'re home. After everything — we\'re really, truly home.' },
      { speaker: 'Hopeful', text: 'No more rivers. No more giants. No more dark valleys. Only this — forever and ever!' },
    ], () => {
      if (this.crownChr) this.crownChr.visible = true;
      if (this.crownHop) this.crownHop.visible = true;
      this.cb.blipSound();
      this.burst(this.christian.root.position, 14);
      this.burst(this.hopeful.root.position, 10);
      this.phase = 'glory';
      this.cb.setObjective('🌟 Crowned! Walk on through the singing crowds…');
    });
  }

  private triggerEnd(): void {
    if (this.endTriggered) return;
    this.endTriggered = true;
    this.cb.playScript([
      { speaker: '', text: 'And so Christian and Hopeful came home to the Celestial City, where every tear is wiped away — and the song never, ever ends.' },
    ], () => {
      this.cb.fade?.(() => this.beginIgnorance());
      if (!this.cb.fade) this.beginIgnorance();
    });
  }

  // ---------------------------------------------------------------- the epilogue
  private beginIgnorance(): void {
    this.phase = 'ignorance';
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
      { speaker: '', text: 'But wait. Do you remember Ignorance — the traveller who always said he would be just fine on his own?' },
      { speaker: 'Ignorance', text: 'Ah, the famous River! No trouble at all for a clever fellow like me. I\'ve always been good — ask anyone.' },
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
      { speaker: '', text: 'He crosses easily — far too easily — and marches straight up to the gate, brushing the water from his fine coat.' },
      { speaker: 'Attendant', text: 'Who knocks at the King\'s gate?' },
      { speaker: 'Ignorance', text: 'A very good person! Open up, open up — I\'ve walked a long way, same as anybody.' },
      { speaker: 'Attendant', text: 'Then show us your scroll — the King\'s promise, given to every pilgrim who enters by the little Gate at the very start of the Way.' },
      { speaker: 'Ignorance', text: '…Scroll? I— I never had one. I never bothered with that little Gate. But look at all my good deeds! Surely they will do?' },
      { speaker: '', text: 'The attendants look at one another with great sorrow. Word is sent to the King — and the answer comes back: there is no name for Ignorance in the Book.' },
      { speaker: '', text: 'So they bind his hands, gently but surely, and lead him away — not through the shining gates, but toward a small dark door in the side of the hill.' },
    ], () => {
      this.cb.rumbleSound();
      if (this.darkGlow) (this.darkGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 1.1;
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
      { speaker: '', text: 'The little door opens. A hot red light glows inside. Ignorance came so close — he could hear the singing — but he never entered by the Gate, and he never trusted the King.' },
      { speaker: '', text: 'The door shuts behind him, and the hillside is quiet.' },
    ], () => {
      this.ignorance.root.visible = false;
      for (const a of this.ignAttendants) a.root.visible = false;
      if (this.darkGlow) (this.darkGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0;
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
    const bright = this.phase === 'ignorance' || this.phase === 'done' ? 0.35 : climb;
    this.hemi.intensity = 1.1 + bright * 0.55;
    const skyFrom = new THREE.Color(0xffedc4);
    const skyTo = new THREE.Color(0xfff8e2);
    const sky = skyFrom.clone().lerp(skyTo, bright);
    (this.scene.background as THREE.Color).copy(sky);
    (this.scene.fog as THREE.Fog).color.copy(sky);
    (this.scene.fog as THREE.Fog).near = 60 + bright * 30;

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
              a.root.position.set(GATE_X + 1.5, HILL_H, (i === 0 ? -1 : 1) * 3.0);
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
    }

    // ---- pilgrims' own walk cycle ----
    const freeWalk = (this.phase === 'ascent' || this.phase === 'plaza' || this.phase === 'glory') && moving;
    const scripted = this.walkJobs.some((j) => j.parts === chr);
    if (!scripted) animateBear(chr, t, freeWalk);
    if (!this.walkJobs.some((j) => j.parts === hop)) animateBear(hop, t, freeWalk);
  }
}
