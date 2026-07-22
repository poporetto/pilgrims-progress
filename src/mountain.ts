import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter XIV — The Delectable Mountains.
// After Doubting Castle, Christian and Hopeful reach the bright, safe mountains
// of the Lord of the Celestial City. Four shepherds — Knowledge, Experience,
// Watchful, and Sincere — welcome them, feed them, and lead them on a guided
// tour of four sights: the cliff of Hill Error, the tombs of Mount Caution, a
// door into Hell, and, from a high peak, a telescope glimpse of the Celestial
// City itself. Warned to keep to the King's Highway, the pilgrims walk on
// toward the light. This is the light, encouraging chapter — the deliberate
// opposite of the Shadow of Death and Doubting Castle.

interface MountainCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  blipSound: () => void;
  rumbleSound: () => void;
  setMusic?: (style: 'village' | 'cross') => void;
}

type Phase =
  | 'enter'    // walk east into the mountains toward the shepherds
  | 'welcome'  // scripted: the shepherds greet, feed, and fellowship (locked)
  | 'walk'     // free walk between the tour landmarks
  | 'landmark' // scripted: a shepherd teaches the lesson at a sight (locked)
  | 'depart'   // walk east to the exit light
  | 'done';

// ---- x-positions along the mountain path (z = 0 centre line) ----
const WEST_EDGE    = -36;
const WELCOME_X    = -20; // the shepherds' welcome plaza
const ERROR_X      =  -6; // Hill Error — a cliff to the south
const CAUTION_X    =   8; // Mount Caution — tombs to the north
const HELL_X       =  22; // a Door into Hell — an opening to the south
const TELESCOPE_X  =  36; // the telescope on a high peak
const WARNING_X    =  46; // the shepherds' final warning
const LIGHT_X      =  62; // exit light / chapter end

// how far off the path centre line the pilgrims can wander
const LANE_HALF_WIDTH = 2.2;

// z-centre of the walking path
const PATH_Z = 0;

interface Landmark {
  x: number;
  triggered: boolean;
  run: () => void;
}

export class MountainScene {
  scene = new THREE.Scene();
  phase: Phase = 'enter';
  private cb: MountainCallbacks;
  christian: BearParts;
  hopeful: BearParts;
  // the four shepherds, in fixed order: Knowledge, Experience, Watchful, Sincere
  private shepherds: BearParts[] = [];
  private shepherdNames = ['Knowledge', 'Experience', 'Watchful', 'Sincere'];

  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;

  // animated scenery
  private hellGlow: THREE.PointLight | null = null;
  private hellMouth: THREE.Mesh | null = null;
  private smoke: THREE.Mesh[] = [];
  private water: THREE.Mesh[] = [];
  private cityGlow: THREE.Group | null = null;
  private lightBeam: THREE.Mesh | null = null;
  private clouds: THREE.Group[] = [];
  private birds: Array<{
    g: THREE.Group; wingL: THREE.Mesh; wingR: THREE.Mesh;
    cx: number; cz: number; r: number; ph: number; sp: number;
  }> = [];
  private campFire: THREE.PointLight | null = null;
  private placementZones: Array<{ x: number; z: number; r: number }> = [];

  private welcomeTriggered = false;
  private landmarks: Landmark[] = [];

  private revisit = false;
  private built = false;

  constructor(cb: MountainCallbacks) {
    this.cb = cb;

    // Christian — armored, in his shining garments, as he has been since the Cross
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      sling: false, plump: true,
    });
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const STEEL = 0xcfd6dd;
    const helmet = new THREE.Group();
    helmet.add(block(1.02, 0.28, 0.86, STEEL, 0, 0.84, 0));
    helmet.add(block(0.18, 0.16, 0.9, PALETTE.robeGold, 0, 1.05, 0));
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, -0.38, 1.08, 0));
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, 0.38, 1.08, 0));
    this.christian.head.add(helmet);
    this.christian.body.add(block(1.16, 0.62, 0.88, STEEL, 0, 0.42, 0));
    const sword = new THREE.Group();
    sword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0.55, 0));
    sword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, 0.04, 0));
    sword.position.set(0.16, -0.5, 0.14);
    this.christian.armR.add(sword);

    // Hopeful the young dog
    this.hopeful = makeBear({
      species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2,
    });

    // The four shepherds — calm bears in earthy pastoral robes, each with a crook
    const robeColors = [0xa8c4d8, 0xc4b088, 0xb0c49a, 0xd0b4c0];
    const furColors  = [0xbf9a6e, 0xa8815c, 0xcaa878, 0x9c7852];
    for (let i = 0; i < 4; i++) {
      const s = makeBear({
        species: 'bear', fur: furColors[i],
        outfit: 'robe', outfitColor: robeColors[i],
      });
      // a shepherd's crook in the right hand
      const crook = new THREE.Group();
      crook.add(block(0.08, 1.7, 0.08, 0x8a6a44, 0, 0.2, 0));       // staff
      crook.add(block(0.08, 0.32, 0.08, 0x8a6a44, 0.14, 1.02, 0));  // hook top
      crook.add(block(0.24, 0.08, 0.08, 0x8a6a44, 0.1, 1.18, 0));   // hook curl
      crook.position.set(0.12, -0.5, 0.16);
      s.armR.add(crook);
      // a soft cloth headwrap so they read as shepherds, not just bears
      s.head.add(block(1.0, 0.24, 0.84, robeColors[i], 0, 0.74, 0));
      this.shepherds.push(s);
    }

    // bright, open-sky lighting — this is the light, safe chapter
    this.hemi = new THREE.HemisphereLight(0xeaf6ff, 0xbfe6a8, 1.15);
    this.sun = new THREE.DirectionalLight(0xfff6e0, 1.7);
    this.sun.position.set(-24, 48, 26);
    this.sun.castShadow = true;
  }

  // ---------------------------------------------------------------- enter
  enter(revisit: boolean): { christian: BearParts; hopeful: BearParts } {
    this.revisit = revisit;
    this.welcomeTriggered = false;
    if (!this.built) this.build();
    for (const lm of this.landmarks) lm.triggered = false;

    if (revisit) {
      this.phase = 'depart';
      this.christian.root.position.set(WARNING_X, 0, PATH_Z);
      this.hopeful.root.position.set(WARNING_X - 2, 0, PATH_Z + 0.8);
      this.cb.setObjective('⛰ The Delectable Mountains — walk east to the light');
    } else {
      this.phase = 'enter';
      this.christian.root.position.set(WEST_EDGE + 2, 0, PATH_Z);
      this.hopeful.root.position.set(WEST_EDGE, 0, PATH_Z + 0.8);
      this.cb.setObjective('⛰ Rest at last — enter the Delectable Mountains');
    }
    this.christian.root.rotation.set(0, Math.PI / 2, 0);
    this.hopeful.root.rotation.set(0, Math.PI / 2, 0);

    // shepherds stationed at the welcome plaza until they take up the tour
    for (let i = 0; i < 4; i++) {
      const s = this.shepherds[i];
      s.root.position.set(WELCOME_X + 2 + (i % 2) * 1.6, 0, -1.4 + Math.floor(i / 2) * 2.8);
      s.root.rotation.set(0, -Math.PI / 2, 0); // face west, toward the arriving pilgrims
      s.root.visible = true;
    }

    if (this.cb.setMusic) this.cb.setMusic('village');
    return { christian: this.christian, hopeful: this.hopeful };
  }

  // ---------------------------------------------------------------- build
  private reserveZone(x: number, z: number, r: number): void {
    this.placementZones.push({ x, z, r });
  }

  private canPlace(x: number, z: number, r: number, margin = 0.6): boolean {
    if (Math.abs(z) < LANE_HALF_WIDTH + r + 0.5) return false;
    for (const zone of this.placementZones) {
      if (Math.hypot(x - zone.x, z - zone.z) < zone.r + r + margin) return false;
    }
    return true;
  }

  private tryPlace(
    rng: () => number,
    xMin: number, xMax: number,
    zMin: number, zMax: number,
    r: number,
    maxAttempts = 48,
  ): { x: number; z: number } | null {
    for (let i = 0; i < maxAttempts; i++) {
      const x = xMin + rng() * (xMax - xMin);
      const z = zMin + rng() * (zMax - zMin);
      if (this.canPlace(x, z, r)) return { x, z };
    }
    return null;
  }

  private reserveFixedLayout(): void {
    // welcome plaza + shepherd camp (huts north, fire south of the path)
    this.reserveZone(WELCOME_X - 3, -8, 5);
    this.reserveZone(WELCOME_X + 3, -8, 5);
    this.reserveZone(WELCOME_X, 5.5, 4);
    this.reserveZone(WELCOME_X, 0, 4.5);
    // tour landmarks (world-space footprints)
    this.reserveZone(ERROR_X, -6, 7);
    this.reserveZone(CAUTION_X, -9, 7);
    this.reserveZone(HELL_X, -5, 7);
    this.reserveZone(TELESCOPE_X, -5, 8);
    // lakes
    this.reserveZone(-24, 10, 6);
    this.reserveZone(14, -12, 5);
    this.reserveZone(44, 12, 7);
    // river corridor along the north meadow
    for (let rx = WEST_EDGE; rx <= LIGHT_X; rx += 4) {
      const rz = 9 + Math.sin(rx * 0.15) * 3.5;
      this.reserveZone(rx, rz, 2.2);
    }
    // distant backdrop peaks — keep meadow props out of the ridge line
    const northRidge = [
      [-34, -22, 5.2], [-22, -24, 6.0], [-8, -23, 4.8], [6, -25, 6.8],
      [20, -23, 5.4], [34, -24, 5.0], [48, -22, 6.2], [62, -23, 5.1], [76, -24, 5.8],
    ] as const;
    for (const [x, z, r] of northRidge) this.reserveZone(x, z, r + 1.5);
    const southRidge = [
      [-30, 20, 4.2], [-14, 22, 4.8], [2, 21, 4.4], [18, 23, 5.0],
      [32, 21, 4.3], [50, 22, 4.9], [68, 21, 4.5],
    ] as const;
    for (const [x, z, r] of southRidge) this.reserveZone(x, z, r + 1.5);
    // hand-placed pastoral props (walls + pens) — reserved before scatter
    for (const [wx, wz, len] of [
      [-32, -14, 7], [-8, 14, 6], [30, -14, 8], [40, 14, 7], [58, -14, 6],
    ] as const) {
      this.reserveZone(wx, wz, len / 2 + 1.2);
    }
    for (const [fx, fz] of [[-32, -12], [30, 13], [58, -12]] as const) {
      this.reserveZone(fx, fz, 2.8);
    }
  }

  private build(): void {
    this.built = true;
    const s = this.scene;

    s.background = new THREE.Color(0xbfe8ff);
    s.fog = new THREE.Fog(0xbfe8ff, 60, 150);

    s.add(this.hemi);
    s.add(this.sun);

    const rng = mulberry(14);
    const rand = (a: number, b: number) => a + rng() * (b - a);
    this.placementZones = [];
    this.reserveFixedLayout();

    // ---- rolling green ground with texture patches ----
    const ground = new THREE.Mesh(new THREE.BoxGeometry(240, 1, 60), mat(0x8fd06a));
    ground.position.set(LIGHT_X / 2, -0.5, 0);
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 72; i++) {
      const spot = this.tryPlace(rng, WEST_EDGE - 4, LIGHT_X + 8, -16, -4, 0.8)
        ?? this.tryPlace(rng, WEST_EDGE - 4, LIGHT_X + 8, 4, 16, 0.8);
      if (!spot) continue;
      const patch = block(
        0.9 + rng() * 1.8, 0.1, 0.9 + rng() * 1.8,
        rng() > 0.5 ? 0x86c862 : 0x9ad878,
        spot.x, 0.04 + rng() * 0.03, spot.z,
      );
      patch.castShadow = false;
      s.add(patch);
      this.reserveZone(spot.x, spot.z, 1.0);
    }

    // distant ridges and sky — layered depth behind the play lane
    this.buildMountainBackdrop();

    // rolling hills in the far meadow band — never overlapping path props
    const hillColors = [0x86c862, 0x93d072, 0x7bbe58];
    let domesPlaced = 0;
    for (let attempt = 0; attempt < 80 && domesPlaced < 24; attempt++) {
      const northSide = rng() < 0.5;
      const hx = rand(WEST_EDGE - 4, LIGHT_X + 4);
      const hz = northSide ? -rand(19, 24) : rand(19, 24);
      const hr = rand(3, 6);
      if (!this.canPlace(hx, hz, hr + 0.5)) continue;
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(hr, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        mat(hillColors[domesPlaced % 3]),
      );
      dome.position.set(hx, -0.2, hz);
      dome.scale.y = rand(0.35, 0.6);
      s.add(dome);
      this.reserveZone(hx, hz, hr + 0.8);
      domesPlaced++;
    }

    // ---- the King's Highway path down the middle ----
    const path = new THREE.Mesh(new THREE.PlaneGeometry(LIGHT_X - WEST_EDGE + 12, 4.2), mat(PALETTE.path));
    path.rotation.x = -Math.PI / 2;
    path.position.set((WEST_EDGE + LIGHT_X) / 2, 0.02, PATH_Z);
    s.add(path);
    // worn stone edging and stepping blocks along the road
    for (let px = WEST_EDGE; px <= LIGHT_X + 4; px += 2.4) {
      for (const side of [-1, 1]) {
        const edge = block(1.6, 0.08, 0.22, PALETTE.pathEdge, px, 0.08, side * 2.35);
        edge.castShadow = false;
        s.add(edge);
      }
      if (Math.floor(px) % 5 === 0) {
        const stone = block(1.7, 0.12, 1.9, 0xd9c9a8, px, 0.07, 0);
        stone.castShadow = false;
        s.add(stone);
      }
    }

    // dry-stone walls and rocky outcrops framing the meadows
    this.buildPastoralDetails();

    // ---- scattered flowers and low bushes (meadow band only) ----
    const flowerColors = [0xf4c2d4, 0xfff0a0, 0xe8d4f8, 0xffb3c6, 0xaecbff];
    for (let i = 0; i < 110; i++) {
      const north = i % 2 === 0;
      const spot = this.tryPlace(
        rng, WEST_EDGE - 4, LIGHT_X + 4,
        north ? -16 : 4, north ? -4 : 16,
        0.35,
      );
      if (!spot) continue;
      s.add(block(0.16, 0.3, 0.16, flowerColors[i % 5], spot.x, 0.15, spot.z));
      if (i % 4 === 0) {
        s.add(block(0.08, 0.2, 0.08, PALETTE.leaf, spot.x, 0.06, spot.z));
      }
    }

    // ---- fruit trees (meadow band, clear of hills and landmarks) ----
    for (let i = 0; i < 20; i++) {
      const north = i % 2 === 0;
      const spot = this.tryPlace(
        rng, WEST_EDGE, LIGHT_X,
        north ? -15 : 5, north ? -5 : 15,
        1.4,
      );
      if (!spot) continue;
      this.buildFruitTree(spot.x, spot.z);
      this.reserveZone(spot.x, spot.z, 1.6);
    }

    // ---- small lakes + a flowing river (before camp so zones are reserved) ----
    this.buildLake(-24, 10, 5, 3);
    this.buildLake(14, -12, 4, 2.6);
    this.buildLake(44, 12, 6, 3.4);
    this.buildRiver();

    // ---- shepherd's rest camp at the welcome plaza ----
    this.buildShepherdCamp();

    // ---- the four tour landmarks ----
    this.buildHillError(ERROR_X);
    this.buildMountCaution(CAUTION_X);
    this.buildDoorIntoHell(HELL_X);
    this.buildTelescopePeak(TELESCOPE_X);

    // ---- drifting clouds and circling birds ----
    this.buildSkyLife();

    // two low welcome stones flanking the plaza (no overhead lintel — an arched
    // bar across the path read as a stray "floating grey bar" on camera)
    for (const side of [-1, 1]) {
      s.add(block(1.0, 1.1, 1.0, 0xcfc3a8, WELCOME_X - 1, 0.55, side * 3.4));
      s.add(block(0.8, 0.3, 0.8, 0xbfb49a, WELCOME_X - 1, 1.2, side * 3.4));
    }

    // ---- distant Celestial City on the eastern horizon ----
    this.buildCelestialCity();

    // ---- exit light (plain beam, matching the recent chapters) ----
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 2.0, 14, 18, 1, true),
      new THREE.MeshBasicMaterial({
        color: PALETTE.light, transparent: true, opacity: 0.55,
        side: THREE.DoubleSide, depthWrite: false, fog: false,
      }),
    );
    beam.position.set(LIGHT_X + 1.5, 7, 0);
    s.add(beam);
    this.lightBeam = beam;

    // ---- characters ----
    s.add(this.christian.root);
    s.add(this.hopeful.root);
    for (const sh of this.shepherds) s.add(sh.root);

    // ---- landmark trigger table (west → east) ----
    this.landmarks = [
      { x: ERROR_X,     triggered: false, run: () => this.lessonHillError() },
      { x: CAUTION_X,   triggered: false, run: () => this.lessonMountCaution() },
      { x: HELL_X,      triggered: false, run: () => this.lessonDoorIntoHell() },
      { x: TELESCOPE_X, triggered: false, run: () => this.lessonTelescope() },
      { x: WARNING_X,   triggered: false, run: () => this.lessonFinalWarning() },
    ];
  }

  private buildFruitTree(x: number, z: number): void {
    const t = new THREE.Group();
    t.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
    t.add(block(2.0, 1.4, 2.0, 0x74c060, 0, 2.2, 0));
    t.add(block(1.3, 1.0, 1.3, 0x82cc6c, 0, 3.05, 0));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      t.add(block(0.22, 0.22, 0.22, i % 2 ? 0xff8a4a : 0xf25b6a,
        Math.cos(a) * 0.9, 2.2 + Math.sin(a * 2) * 0.4, Math.sin(a) * 0.9));
    }
    t.position.set(x, 0, z);
    this.scene.add(t);
  }

  // Layered snow-capped ridges north and south — the "delectable" horizon
  // that frames the whole chapter without entering the walking lane.
  private buildMountainBackdrop(): void {
    const g = new THREE.Group();
    const GREEN = 0x7ec46a;
    const GREEN_DK = 0x6aad58;
    const ROCK = 0x8a9e88;
    const SNOW = 0xf4fbff;

    const addPeak = (x: number, z: number, h: number, r: number, rot = 0): void => {
      const slope = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), mat(x % 3 === 0 ? GREEN : GREEN_DK));
      slope.position.set(x, h / 2 - 0.3, z);
      slope.rotation.y = rot;
      g.add(slope);
      const snowH = h * 0.32;
      const snow = new THREE.Mesh(new THREE.ConeGeometry(r * 0.55, snowH, 7), mat(SNOW));
      snow.position.set(x, h - snowH / 2 + 0.1, z);
      snow.rotation.y = rot;
      g.add(snow);
      if (r > 3.8) {
        const spur = new THREE.Mesh(new THREE.ConeGeometry(r * 0.38, h * 0.55, 6), mat(ROCK));
        spur.position.set(x + r * 0.62, h * 0.28, z + 0.8);
        g.add(spur);
      }
    };

    const northRidge = [
      [-34, -22, 7.5, 5.2], [-22, -24, 9.2, 6.0], [-8, -23, 6.8, 4.8],
      [6, -25, 10.5, 6.8], [20, -23, 8.0, 5.4], [34, -24, 7.2, 5.0],
      [48, -22, 9.8, 6.2], [62, -23, 7.6, 5.1], [76, -24, 8.8, 5.8],
    ] as const;
    for (const [x, z, h, r] of northRidge) addPeak(x, z, h, r, x * 0.04);

    const southRidge = [
      [-30, 20, 5.2, 4.2], [-14, 22, 6.4, 4.8], [2, 21, 5.8, 4.4],
      [18, 23, 7.0, 5.0], [32, 21, 5.5, 4.3], [50, 22, 6.8, 4.9], [68, 21, 5.9, 4.5],
    ] as const;
    for (const [x, z, h, r] of southRidge) addPeak(x, z, h * 0.85, r, -x * 0.03);

    const haze = new THREE.Mesh(
      new THREE.BoxGeometry(LIGHT_X - WEST_EDGE + 40, 4, 2),
      new THREE.MeshLambertMaterial({ color: 0xd8f0ff, transparent: true, opacity: 0.35 }),
    );
    haze.position.set((WEST_EDGE + LIGHT_X) / 2, 3.5, -27);
    haze.castShadow = false;
    g.add(haze);
    const hazeS = haze.clone();
    hazeS.position.z = 26;
    g.add(hazeS);

    this.scene.add(g);
  }

  // Stone walls, grazing sheep, and meadow rocks along the meadow edges.
  private buildPastoralDetails(): void {
    const s = this.scene;
    const STONE = 0xb8b0a4;
    const WOOD = PALETTE.wood;

    for (const [wx, wz, len, rot] of [
      [-32, -14, 7, 0], [-8, 14, 6, 0.2], [30, -14, 8, -0.15],
      [40, 14, 7, 0.1], [58, -14, 6, -0.1],
    ] as const) {
      const wall = new THREE.Group();
      for (let i = 0; i < Math.floor(len); i++) {
        wall.add(block(0.9, 0.55, 0.45, STONE, -len / 2 + 0.5 + i, 0.28, 0));
        if (i % 2 === 0) wall.add(block(0.35, 0.35, 0.45, 0xa39a8e, -len / 2 + 0.5 + i, 0.62, 0));
      }
      wall.position.set(wx, 0, wz);
      wall.rotation.y = rot;
      s.add(wall);
    }

    for (const [fx, fz] of [[-32, -12], [30, 13], [58, -12]] as const) {
      const pen = new THREE.Group();
      for (const [px, pz] of [[-1.8, -1.2], [1.8, -1.2], [-1.8, 1.2], [1.8, 1.2]] as const) {
        pen.add(block(0.12, 0.9, 0.12, WOOD, px, 0.45, pz));
      }
      pen.add(block(3.6, 0.1, 0.1, WOOD, 0, 0.55, -1.2));
      pen.add(block(3.6, 0.1, 0.1, WOOD, 0, 0.35, -1.2));
      pen.add(block(3.6, 0.1, 0.1, WOOD, 0, 0.55, 1.2));
      pen.add(block(3.6, 0.1, 0.1, WOOD, 0, 0.35, 1.2));
      pen.add(block(0.1, 0.1, 2.4, WOOD, -1.8, 0.55, 0));
      pen.add(block(0.1, 0.1, 2.4, WOOD, 1.8, 0.55, 0));
      for (let i = 0; i < 2; i++) {
        const sheep = this.makeSheep();
        sheep.position.set((i - 0.5) * 1.2, 0, (i % 2) * 0.6 - 0.3);
        sheep.rotation.y = i * 1.1;
        pen.add(sheep);
      }
      pen.position.set(fx, 0, fz);
      s.add(pen);
    }

    const rng = mulberry(41);
    for (let i = 0; i < 18; i++) {
      const north = i % 2 === 0;
      const spot = this.tryPlace(
        rng, WEST_EDGE, LIGHT_X + 8,
        north ? -15 : 5, north ? -6 : 15,
        0.7,
      );
      if (!spot) continue;
      const rock = block(
        0.6 + rng() * 0.8, 0.4 + rng() * 0.5, 0.5 + rng() * 0.7,
        0x9a9488, spot.x, 0.25, spot.z,
      );
      rock.rotation.y = rng() * Math.PI;
      s.add(rock);
      this.reserveZone(spot.x, spot.z, 0.9);
    }
  }

  private makeSheep(): THREE.Group {
    const g = new THREE.Group();
    g.add(block(0.55, 0.42, 0.7, 0xf5f0e8, 0, 0.35, 0));
    g.add(block(0.32, 0.32, 0.32, 0xf5f0e8, 0.32, 0.42, 0.1));
    g.add(block(0.1, 0.1, 0.08, 0x2a2520, 0.42, 0.38, 0.22));
    g.add(block(0.06, 0.14, 0.06, 0x2a2520, 0.14, 0.08, 0.28));
    g.add(block(0.06, 0.14, 0.06, 0x2a2520, -0.14, 0.08, 0.28));
    return g;
  }

  // The shepherds' welcome camp: huts, a table of fruit, and a warm fire.
  private buildShepherdCamp(): void {
    const g = new THREE.Group();
    const WALL = 0xe8dcc8;
    const ROOF = 0xc4a878;

    const addHut = (hx: number, hz: number, ry: number): void => {
      const hut = new THREE.Group();
      hut.add(block(3.2, 2.0, 2.8, WALL, 0, 1.0, 0));
      for (let i = 0; i < 3; i++) {
        const rw = 3.6 - i * 0.9;
        hut.add(block(rw, 0.4, 3.2, ROOF, 0, 2.2 + i * 0.4, 0));
      }
      hut.add(block(0.7, 1.3, 0.14, 0x6a5038, 0, 0.65, 1.42));
      hut.add(block(0.5, 0.5, 0.5, PALETTE.roofBlue, -0.9, 1.4, 1.44));
      hut.position.set(hx, 0, hz);
      hut.rotation.y = ry;
      g.add(hut);
    };
    addHut(-3.2, -7.5, 0.35);
    addHut(2.8, -8.2, -0.25);

    g.add(block(2.8, 0.7, 1.2, PALETTE.wood, 0.5, 0.35, 5.8));
    for (const [fx, fc] of [[-0.6, 0xf25b6a], [0.2, 0xff8a4a], [0.9, 0xffe08a]] as const) {
      g.add(block(0.28, 0.28, 0.28, fc, 0.5 + fx, 0.78, 5.8));
    }
    g.add(block(0.9, 0.22, 0.5, 0xe8c890, 0.5, 0.82, 5.5));

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      g.add(block(0.35, 0.28, 0.35, 0x8a7a6a, Math.cos(a) * 0.9, 0.14, 5.2 + Math.sin(a) * 0.7));
    }
    const ember = block(0.5, 0.3, 0.5, 0xff6a20, 0, 0.35, 5.2);
    (ember.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xff5a10);
    (ember.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.8;
    g.add(ember);

    const fire = new THREE.PointLight(0xffa040, 1.6, 10);
    fire.position.set(0, 1.2, 5.2);
    this.campFire = fire;
    g.add(fire);

    g.add(block(0.14, 1.6, 0.14, PALETTE.woodDark, -2.2, 0.8, 3.6));
    g.add(block(1.4, 0.9, 0.12, 0xf5edd8, -2.2, 1.5, 3.6));
    g.add(block(0.9, 0.14, 0.14, 0x6a9a5a, -2.2, 1.85, 3.6));

    g.position.set(WELCOME_X, 0, 0);
    this.scene.add(g);
    // camp footprint — huts to the north, fire/table to the south of the path
    this.reserveZone(WELCOME_X - 3, -8, 4.5);
    this.reserveZone(WELCOME_X + 3, -8, 4.5);
    this.reserveZone(WELCOME_X, 5.5, 3.5);
  }

  // Soft drifting clouds and gentle birds — life in the bright sky.
  private buildSkyLife(): void {
    const s = this.scene;
    const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x888888 });
    const rng = mulberry(88);
    for (let i = 0; i < 9; i++) {
      const c = new THREE.Group();
      const puff = (r: number, px: number, py: number, pz: number) => {
        const p = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 9), cloudMat);
        p.position.set(px, py, pz);
        p.castShadow = false;
        c.add(p);
      };
      puff(1.1, 0, 0, 0);
      puff(0.85, 1.2, 0.15, 0.1);
      puff(0.75, -1.1, 0.1, -0.08);
      puff(0.6, 0.4, 0.55, 0.12);
      puff(0.5, -0.5, 0.45, -0.06);
      c.position.set(
        WEST_EDGE + rng() * (LIGHT_X - WEST_EDGE + 20),
        14 + rng() * 8,
        -18 + rng() * 36,
      );
      c.userData.drift = 0.8 + rng() * 1.2;
      c.userData.baseX = c.position.x;
      this.clouds.push(c);
      s.add(c);
    }

    for (let i = 0; i < 4; i++) {
      const g = new THREE.Group();
      const body = block(0.28, 0.18, 0.42, 0xfff8ef, 0, 0, 0);
      body.castShadow = false;
      g.add(body);
      const wing = (side: number) => {
        const w = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.28), mat(0xd8d3cc));
        w.geometry.translate(0.28, 0, 0);
        w.position.set(0.1 * side, 0.05, 0);
        w.scale.x = side;
        w.castShadow = false;
        g.add(w);
        return w;
      };
      const wingL = wing(-1);
      const wingR = wing(1);
      const cx = WEST_EDGE + rng() * (LIGHT_X - WEST_EDGE);
      const cz = -12 + rng() * 24;
      this.birds.push({
        g, wingL, wingR, cx, cz,
        r: 10 + i * 4,
        ph: rng() * Math.PI * 2,
        sp: 0.14 + i * 0.04,
      });
      s.add(g);
    }
  }

  private buildLake(x: number, z: number, w: number, d: number): void {
    this.reserveZone(x, z, Math.max(w, d) + 0.8);
    const lake = new THREE.Mesh(new THREE.CircleGeometry(1, 20), mat(0x8fd0ea));
    lake.rotation.x = -Math.PI / 2;
    lake.scale.set(w, d, 1);
    lake.position.set(x, 0.03, z);
    (lake.material as THREE.MeshLambertMaterial).transparent = true;
    (lake.material as THREE.MeshLambertMaterial).opacity = 0.9;
    this.scene.add(lake);
    this.water.push(lake);
    const rim = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 20), mat(0xbfe6f2));
    rim.rotation.x = -Math.PI / 2;
    rim.scale.set(w, d, 1);
    rim.position.set(x, 0.025, z);
    this.scene.add(rim);
    // reeds and lily pads along the shore
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const rx = x + Math.cos(a) * w * 0.92;
      const rz = z + Math.sin(a) * d * 0.88;
      if (!this.canPlace(rx, rz, 0.25)) continue;
      this.scene.add(block(0.08, 0.5 + (i % 3) * 0.15, 0.08, 0x6a9a4a, rx, 0.25, rz));
      if (i % 2 === 0 && this.canPlace(rx + 0.3, rz + 0.2, 0.2)) {
        this.scene.add(block(0.28, 0.06, 0.28, 0x7ec86a, rx + 0.3, 0.08, rz + 0.2));
      }
    }
  }

  // a river of blue tiles winding across the north side; the tiles bob gently
  // to suggest flowing water
  private buildRiver(): void {
    for (let i = 0; i < 40; i++) {
      const rx = WEST_EDGE + i * ((LIGHT_X - WEST_EDGE) / 40);
      const rz = 9 + Math.sin(rx * 0.15) * 3.5;
      this.reserveZone(rx, rz, 2.0);
      const tile = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.2), mat(0x7ec8ea));
      tile.rotation.x = -Math.PI / 2;
      tile.position.set(rx, 0.04, rz);
      (tile.material as THREE.MeshLambertMaterial).transparent = true;
      (tile.material as THREE.MeshLambertMaterial).opacity = 0.85;
      this.scene.add(tile);
      this.water.push(tile);
    }
  }

  // 1. Hill Error — a cliff edge to the north (top of screen), a dark chasm
  // beyond it, and broken bones lying visibly in the chasm. Everything sits at
  // or above ground level, so it actually reads on the top-down camera (the
  // first pass buried the drop and the bones below the ground plane).
  private buildHillError(x: number): void {
    const g = new THREE.Group();
    const rock = 0x9a8e7a;
    // the rocky cliff lip you look over, along the path's north edge
    g.add(block(7, 0.9, 1.0, rock, 0, 0.45, -2.8));
    g.add(block(0.5, 0.5, 0.5, rock, 2.9, 0.7, -2.6)); // warning cairn
    g.add(block(0.4, 0.4, 0.4, rock, 2.9, 1.1, -2.6));
    // the chasm floor — a dark recessed strip beyond the lip
    g.add(block(8.5, 0.2, 5.4, 0x342c26, 0, 0.11, -6.6));
    // jagged rock walls framing the chasm on three sides
    g.add(block(8.5, 1.8, 0.8, 0x7a6e60, 0, 0.9, -9.4));
    for (const sx of [-4.2, 4.2]) g.add(block(0.8, 1.5, 5.4, 0x7a6e60, sx, 0.75, -6.6));
    // broken bones and bodies lying in the chasm — pale, clearly visible
    for (let i = 0; i < 16; i++) {
      const bx = (Math.random() - 0.5) * 7;
      const bz = -6.6 + (Math.random() - 0.5) * 3.8;
      const long = 0.4 + Math.random() * 0.6;
      const bone = block(long, 0.14, 0.16, 0xe9e2d0, bx, 0.24, bz);
      bone.rotation.y = Math.random() * Math.PI;
      g.add(bone);
    }
    // a couple of pale skulls
    for (const [sx, sz] of [[-1.5, -6], [2, -7.4]] as const) {
      g.add(block(0.42, 0.42, 0.42, 0xf2ecdc, sx, 0.32, sz));
    }
    g.position.set(x, 0, 0);
    this.scene.add(g);
    this.reserveZone(x, -6, 7);
  }

  // 2. Mount Caution — a mound of tombs away to the north (top of screen); the
  // blind men wander in front of the mound, on the near side toward the path,
  // so they never clip into the round hill
  private buildMountCaution(x: number): void {
    const g = new THREE.Group();
    // the round hill, set well back to the north (negative z = away from camera)
    const MOUND_Z = -9;
    const mound = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      mat(0x8ab866),
    );
    mound.scale.y = 0.5;
    mound.position.set(0, -0.2, MOUND_Z);
    g.add(mound);
    // grey tombs on and around the mound
    const tomb = 0x9c968c;
    for (let i = 0; i < 6; i++) {
      const tx = (Math.random() - 0.5) * 7;
      const tz = MOUND_Z + (Math.random() - 0.5) * 3;
      g.add(block(0.9, 1.2, 0.5, tomb, tx, 0.6, tz));
      g.add(block(1.1, 0.3, 0.7, 0x877f74, tx, 1.25, tz)); // slab top
    }
    g.position.set(x, 0, 0);
    this.scene.add(g);
    this.reserveZone(x, -9, 7);

    // two blind men — grey, hunched bears with pale blank eyes. Their base sits
    // in front of the mound (near edge ≈ z −4.5) with clear standoff, and they
    // only orbit a small fixed circle (see update) so they can't drift into it.
    for (let i = 0; i < 2; i++) {
      const m = makeBear({ species: 'bear', fur: 0x8a857c, outfit: 'shirt', outfitColor: 0x6f6a62 });
      for (const side of [-1, 1]) {
        m.head.add(block(0.12, 0.12, 0.06, 0xe8e4da, 0.2 * side, 0.5, 0.42));
      }
      m.root.userData.baseX = x - 2 + i * 4;
      m.root.userData.baseZ = -2.6;
      m.root.userData.wander = Math.random() * Math.PI * 2;
      m.root.position.set(m.root.userData.baseX, 0, m.root.userData.baseZ);
      this.scene.add(m.root);
      this.blindMen.push(m);
    }
  }
  private blindMen: BearParts[] = [];

  // 3. A Door into Hell — a dark opening in a hillside to the south, fire + smoke
  private buildDoorIntoHell(x: number): void {
    const g = new THREE.Group();
    const rock = 0x6a5a4c;
    // a craggy hillside
    g.add(block(8, 5, 4, rock, 0, 2.5, -6));
    g.add(block(6, 3, 3, 0x5a4c40, 0, 4.2, -5.2));
    // the mouth: a black opening with a fiery interior
    const mouth = block(2.6, 3.0, 1.0, 0x140805, 0, 1.5, -4.0);
    (mouth.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xff4a10);
    (mouth.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.9;
    g.add(mouth);
    this.hellMouth = mouth;
    g.position.set(x, 0, 0);
    this.scene.add(g);
    this.reserveZone(x, -5, 7);

    // a red glow spilling from the opening
    const glow = new THREE.PointLight(0xff5a20, 0, 12);
    glow.position.set(x, 2.0, -3.2);
    this.hellGlow = glow;
    this.scene.add(glow);

    // rising smoke puffs
    for (let i = 0; i < 8; i++) {
      const puff = block(0.7, 0.7, 0.7, 0x4a4038, x + (Math.random() - 0.5) * 2, 3 + i * 0.6, -4);
      (puff.material as THREE.MeshLambertMaterial).transparent = true;
      (puff.material as THREE.MeshLambertMaterial).opacity = 0.5;
      puff.userData.baseX = x + (Math.random() - 0.5) * 2;
      puff.userData.speed = 0.6 + Math.random() * 0.6;
      this.scene.add(puff);
      this.smoke.push(puff);
    }
  }

  // 4. The Telescope — the glimpse of the Celestial City. The high peak is set
  // well back to the north; the telescope stands clear of it, just off the north
  // edge of the path, so the two no longer overlap.
  private buildTelescopePeak(x: number): void {
    const g = new THREE.Group();
    // the high peak, pushed back so its base never reaches the telescope
    const peak = new THREE.Mesh(new THREE.ConeGeometry(4.2, 7, 10), mat(0x9ec488));
    peak.position.set(0.5, 3.4, -9.5);
    g.add(peak);
    const snow = new THREE.Mesh(new THREE.ConeGeometry(1.5, 2.2, 10), mat(0xffffff));
    snow.position.set(0.5, 7.4, -9.5);
    g.add(snow);

    // the telescope: a tripod + an angled brass tube on a small rise, standing
    // clear of the peak and pointing up toward the eastern horizon
    const scope = new THREE.Group();
    scope.add(block(1.6, 0.4, 1.6, 0x8a9e76, 0, 0.2, 0)); // little rise it stands on
    for (const a of [0, 2.1, 4.2]) {
      const leg = block(0.12, 1.7, 0.12, 0x5a4636, Math.cos(a) * 0.45, 1.0, Math.sin(a) * 0.45);
      leg.rotation.z = Math.cos(a) * 0.22;
      leg.rotation.x = Math.sin(a) * 0.22;
      scope.add(leg);
    }
    const tube = block(0.34, 1.9, 0.34, 0xcaa24a, 0, 2.1, 0);
    tube.rotation.z = -Math.PI / 2.4; // tilt up toward the east
    scope.add(tube);
    const lens = block(0.4, 0.24, 0.4, 0x9fe0f0, 0.85, 2.7, 0);
    lens.rotation.z = -Math.PI / 2.4;
    scope.add(lens);
    // just off the north edge of the path, well in front of the peak's base
    scope.position.set(-1.5, 0, -1.6);
    g.add(scope);

    g.position.set(x, 0, 0);
    this.scene.add(g);
    this.reserveZone(x, -5, 8);
  }

  // the distant Celestial City — a cluster of glowing golden towers on a far
  // rise to the east, raised and bright enough to glimpse on the horizon from
  // the telescope peak, yet clearly far off (the trembling-hands "glimpse")
  private buildCelestialCity(): void {
    const g = new THREE.Group();
    const gold = 0xffe8a0;
    // a pale rise the city sits upon, so it reads as sitting on the horizon
    const rise = new THREE.Mesh(
      new THREE.SphereGeometry(12, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      mat(0xbfe0a0),
    );
    rise.scale.y = 0.4;
    rise.position.set(0, -1, 0);
    g.add(rise);
    for (let i = 0; i < 9; i++) {
      const h = 6 + Math.random() * 8;
      const tower = block(1.8, h, 1.8, gold, (i - 4) * 2.6, h / 2 + 1, (Math.random() - 0.5) * 4);
      const m = tower.material as THREE.MeshLambertMaterial;
      m.emissive = new THREE.Color(0xffd76a);
      m.emissiveIntensity = 0.75;
      g.add(tower);
      // a bright cap
      const cap = block(0.7, 0.9, 0.7, 0xfff4c8, (i - 4) * 2.6, h + 1.5, 0);
      (cap.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xfff0c0);
      (cap.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.7;
      g.add(cap);
    }
    // sits east of the exit light, raised on its rise, drawn without fog so it
    // stays a clear golden glimmer rather than washing out into the sky haze
    g.position.set(LIGHT_X + 26, 5, 9);
    g.scale.setScalar(1.05);
    g.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) (mesh.material as THREE.MeshLambertMaterial).fog = false;
    });
    this.cityGlow = g;
    this.scene.add(g);
  }

  // ---------------------------------------------------------------- API
  moveFactor(): number {
    switch (this.phase) {
      case 'enter':  return 1.0;
      case 'walk':   return 1.0;
      case 'depart': return 1.0;
      default:       return 0; // welcome / landmark / done are scripted
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;

    if (this.phase === 'enter') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, WELCOME_X));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      if (p.x >= WELCOME_X - 0.4) this.triggerWelcome();
    } else if (this.phase === 'walk') {
      p.x = Math.max(WELCOME_X - 2, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      // trigger the next untriggered landmark once its x is reached
      for (const lm of this.landmarks) {
        if (!lm.triggered && p.x >= lm.x - 0.4) {
          lm.triggered = true;
          this.phase = 'landmark';
          lm.run();
          break;
        }
      }
    } else if (this.phase === 'depart') {
      p.x = Math.max(WARNING_X - 2, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      if (p.x >= LIGHT_X - 2) this.triggerExit();
    }

    // Hopeful and the shepherds follow along as a walking group
    this.followParty();
  }

  // Hopeful trails just behind Christian; the four shepherds walk as a loose
  // cluster around and behind the pilgrims, guiding them
  private followParty(): void {
    if (this.phase === 'done') return;
    const c = this.christian.root.position;
    const hp = this.hopeful.root.position;
    hp.lerp(c.clone().add(new THREE.Vector3(-1.6, 0, 0.9)), 0.08);
    this.hopeful.root.rotation.y = this.christian.root.rotation.y;

    // the shepherds accompany the party through the tour, but stop at their
    // parting warning and wave the pilgrims on — so they do NOT follow into the
    // final 'depart' walk toward the light
    if (this.phase === 'walk' || this.phase === 'landmark') {
      const offs = [
        new THREE.Vector3(1.8, 0, 1.6),
        new THREE.Vector3(2.6, 0, -1.4),
        new THREE.Vector3(-2.8, 0, -1.6),
        new THREE.Vector3(-3.4, 0, 1.4),
      ];
      for (let i = 0; i < 4; i++) {
        const sp = this.shepherds[i].root;
        sp.position.lerp(c.clone().add(offs[i]), 0.06);
        sp.rotation.y = this.christian.root.rotation.y;
      }
    }
  }

  // ---------------------------------------------------------------- triggers
  private triggerWelcome(): void {
    if (this.welcomeTriggered) return;
    this.welcomeTriggered = true;
    this.phase = 'welcome';
    this.cb.setObjective('🐑 The shepherds of the Delectable Mountains welcome you');
    // shepherds turn to face the pilgrims
    for (const sp of this.shepherds) sp.root.rotation.set(0, -Math.PI / 2, 0);
    this.cb.blipSound();
    this.cb.playScript([
      { speaker: 'Knowledge',  text: 'Welcome, pilgrims! These are the Delectable Mountains, and they belong to the Lord of the Celestial City.' },
      { speaker: 'Experience', text: 'Come in, come in — rest here. There are green pastures, sweet water, and fruit for the weary.' },
      { speaker: 'Christian',  text: 'After Doubting Castle, this is like heaven itself. Who are you, friends?' },
      { speaker: 'Watchful',   text: 'We are shepherds here: Knowledge, Experience, Watchful, and Sincere. We keep the Lord\'s sheep, and we care for His pilgrims.' },
      { speaker: 'Sincere',    text: 'Eat and be refreshed. Then, if you will, we have some things to show you — sights that will strengthen your faith for the road ahead.' },
      { speaker: 'Hopeful',    text: 'Gladly. Here, unlike that dark castle, the truth itself feeds us. Lead on, and we will follow.' },
    ], () => {
      this.phase = 'walk';
      this.cb.setObjective('⛰ Follow the shepherds east — they have four sights to show you');
    });
  }

  // -- Landmark 1: Hill Error --
  private lessonHillError(): void {
    this.cb.setObjective('⚠️ Hill Error — look over the cliff edge');
    this.cb.playScript([
      { speaker: 'Knowledge',  text: 'This is the Hill Error. Come, look carefully over the edge — but do not go too near.' },
      { speaker: 'Christian',  text: 'There are... broken bones down there. Bodies, dashed at the bottom of the cliff.' },
      { speaker: 'Experience', text: 'These were pilgrims once. They listened to false teachers, who told them the King\'s way was too hard.' },
      { speaker: 'Watchful',   text: 'They wandered from the truth, followed error over this very cliff, and were destroyed. False teaching has deadly ends.' },
      { speaker: 'Christian',  text: 'Then I will hold all the more tightly to the King\'s own words, and to nothing else.' },
    ], () => this.resumeTour());
  }

  // -- Landmark 2: Mount Caution --
  private lessonMountCaution(): void {
    this.cb.setObjective('🪦 Mount Caution — the blind men among the tombs');
    this.cb.playScript([
      { speaker: 'Experience', text: 'Now look north, to Mount Caution. Do you see those men, wandering blind among the tombs?' },
      { speaker: 'Hopeful',    text: 'Poor souls — they stumble as if they cannot find the way at all.' },
      { speaker: 'Watchful',   text: 'They would not enter by the Wicket Gate. Like Formalist and Hypocrisy, they climbed over the wall to take a shortcut.' },
      { speaker: 'Sincere',    text: 'So the King let them be taken, and blinded, and here they wander among the graves to this day.' },
      { speaker: 'Christian',  text: 'There truly are no shortcuts into the Kingdom. I thank the King I came in by the Gate.' },
    ], () => this.resumeTour());
  }

  // -- Landmark 3: A Door into Hell --
  private lessonDoorIntoHell(): void {
    this.cb.setObjective('🔥 A door in the hillside — smoke and fire rise from it');
    if (this.hellGlow) this.hellGlow.intensity = 3.2;
    if (this.hellMouth) (this.hellMouth.material as THREE.MeshLambertMaterial).emissiveIntensity = 1.6;
    this.cb.rumbleSound();
    this.cb.playScript([
      { speaker: 'Watchful',   text: 'There is one more hard sight. Come to this hillside — but be ready. Do you hear it?' },
      { speaker: 'Christian',  text: 'Cries... groaning... shouting. And smoke and fire from that opening in the ground. What is this place?' },
      { speaker: 'Sincere',    text: 'It is a byway to Hell — a door through which hypocrites go: those who sold their birthright, or turned back from the Way.' },
      { speaker: 'Hopeful',    text: 'It makes me tremble. To think what we have been saved from...' },
      { speaker: 'Knowledge',  text: 'Let it warn you — never become careless. Keep watch over your own heart to the very end.' },
    ], () => {
      if (this.hellGlow) this.hellGlow.intensity = 1.4;
      if (this.hellMouth) (this.hellMouth.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.9;
      this.resumeTour();
    });
  }

  // -- Landmark 4: The Telescope --
  private lessonTelescope(): void {
    this.cb.setObjective('🔭 The high peak — look through the shepherds\' glass');
    if (this.cb.setMusic) this.cb.setMusic('cross');
    this.cb.blipSound();
    this.cb.playScript([
      { speaker: 'Sincere',    text: 'Now, one sight of pure joy. Climb to the top, and look east through our perspective glass.' },
      { speaker: 'Experience', text: 'Steady your hands, and look — there, on the far horizon.' },
      { speaker: 'Christian',  text: 'I see it! Golden gates... shining towers... is that — the Celestial City itself?' },
      { speaker: 'Hopeful',    text: 'My hands are shaking too hard to hold it still — but I saw it! I truly saw it! Our journey has an end, Christian, and it is glorious.' },
      { speaker: 'Watchful',   text: 'You could not see it perfectly — few can, this side of the river. But it is real, and it is waiting. Let that carry you on.' },
    ], () => this.resumeTour());
  }

  // -- Landmark 5: the final warning --
  private lessonFinalWarning(): void {
    this.cb.setObjective('🐑 The shepherds give their parting warning');
    this.cb.playScript([
      { speaker: 'Knowledge',  text: 'Before you go, hear our parting counsel, pilgrims.' },
      { speaker: 'Experience', text: 'Keep to the King\'s Highway. Do not turn aside for it, whatever it costs you.' },
      { speaker: 'Watchful',   text: 'Beware false teachers. Beware shortcuts. Beware the pleasant things of the world that would draw you off the road.' },
      { speaker: 'Sincere',    text: 'Stay alert, right to the end. The Celestial City is near now — do not stumble so close to home.' },
      { speaker: 'Christian',  text: 'We will remember it all. Thank you, friends — for the rest, the food, and the truth.' },
    ], () => {
      // the shepherds stop here and wave the pilgrims on
      this.phase = 'depart';
      this.cb.setObjective('🌟 Walk east to the light — the road goes on!');
    });
  }

  // return to free walking after a landmark lesson (unless it was the last)
  private resumeTour(): void {
    this.phase = 'walk';
    this.cb.setObjective('⛰ Follow the shepherds on to the next sight');
  }

  private triggerExit(): void {
    if (this.phase !== 'depart') return;
    this.phase = 'done';
    this.cb.onComplete();
  }

  // ---------------------------------------------------------------- update
  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;

    // water shimmer
    for (const w of this.water) {
      w.position.y = 0.03 + Math.sin(t * 2 + w.position.x * 0.3) * 0.02;
    }

    // hell glow flicker + rising smoke
    if (this.hellGlow) {
      const flick = this.hellGlow.intensity;
      this.hellGlow.intensity = Math.max(0, flick * (0.94 + Math.sin(t * 18) * 0.06));
      // keep a gentle idle glow even before the lesson so the mouth reads warm
      if (this.hellGlow.intensity < 1.2) this.hellGlow.intensity = 1.2 + Math.sin(t * 6) * 0.3;
    }
    for (const puff of this.smoke) {
      puff.position.y += dt * (puff.userData.speed as number);
      if (puff.position.y > 9) puff.position.y = 3;
      puff.position.x = (puff.userData.baseX as number) + Math.sin(t + puff.position.y) * 0.4;
    }

    // blind men shuffle in a small fixed circle in front of the tombs — a tight
    // orbit around their base point, so they read as aimless yet never wander
    // into the round hill behind them
    for (const m of this.blindMen) {
      const w = (m.root.userData.wander = (m.root.userData.wander as number) + dt * 0.6);
      const bx = m.root.userData.baseX as number;
      const bz = m.root.userData.baseZ as number;
      m.root.position.x = bx + Math.cos(w) * 1.1;
      m.root.position.z = bz + Math.sin(w) * 0.7;
      m.root.rotation.y = -w + Math.PI / 2;
      animateBear(m, t, true);
    }

    // exit beacon pulse
    if (this.lightBeam) {
      const sc = 1 + Math.sin(t * 2.2) * 0.1;
      this.lightBeam.scale.set(sc, 1, sc);
    }

    // gentle glow pulse on the distant Celestial City
    if (this.cityGlow) {
      const pulse = 0.55 + Math.abs(Math.sin(t * 0.8)) * 0.3;
      this.cityGlow.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh) {
          const mm = mesh.material as THREE.MeshLambertMaterial;
          if (mm.emissive) mm.emissiveIntensity = pulse;
        }
      });
    }

    // drifting clouds across the bright sky
    for (const c of this.clouds) {
      const drift = c.userData.drift as number;
      const baseX = c.userData.baseX as number;
      c.position.x = baseX + Math.sin(t * drift * 0.12) * 6;
      c.position.y += Math.sin(t * 0.4 + baseX) * dt * 0.08;
    }

    // birds circling high above the meadows
    for (const b of this.birds) {
      const a = t * b.sp + b.ph;
      b.g.position.set(
        b.cx + Math.cos(a) * b.r,
        11 + Math.sin(t * 0.7 + b.ph) * 1.2,
        b.cz + Math.sin(a) * b.r * 0.55,
      );
      b.g.rotation.y = -a - Math.PI / 2;
      const flap = Math.sin(t * 7 + b.ph) * 0.55;
      b.wingL.rotation.z = flap;
      b.wingR.rotation.z = -flap;
    }

    // welcome-camp fire flicker
    if (this.campFire) {
      this.campFire.intensity = 1.4 + Math.sin(t * 9) * 0.25 + Math.sin(t * 14) * 0.15;
    }

    // character walk cycles
    const walking = (this.phase === 'enter' || this.phase === 'walk' || this.phase === 'depart') && moving;
    animateBear(this.christian, t, walking);
    animateBear(this.hopeful, t, walking);
    for (const sp of this.shepherds) {
      animateBear(sp, t, walking && (this.phase === 'walk' || this.phase === 'depart'));
    }
  }
}

function mulberry(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
