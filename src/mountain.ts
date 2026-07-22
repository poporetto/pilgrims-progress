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
      sling: true, plump: true,
    });
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const STEEL = 0xcfd6dd;
    const helmet = new THREE.Group();
    helmet.add(block(1.02, 0.4, 0.86, STEEL, 0, 0.92, 0));
    helmet.add(block(0.2, 0.24, 0.9, PALETTE.robeGold, 0, 1.16, 0));
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
  private build(): void {
    this.built = true;
    const s = this.scene;

    s.background = new THREE.Color(0xbfe8ff);
    s.fog = new THREE.Fog(0xbfe8ff, 60, 150);

    s.add(this.hemi);
    s.add(this.sun);

    const rng = (a: number, b: number) => a + Math.random() * (b - a);

    // ---- rolling green ground ----
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(240, 60), mat(0x8fd06a));
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(LIGHT_X / 2, 0, 0);
    s.add(ground);

    // rolling hills off to either side — flattened green domes
    const hillColors = [0x86c862, 0x93d072, 0x7bbe58];
    for (let i = 0; i < 26; i++) {
      const hx = rng(WEST_EDGE - 6, LIGHT_X + 6);
      const near = Math.abs(hx - ERROR_X) < 6 || Math.abs(hx - HELL_X) < 6;
      const hz = (Math.random() < 0.5 ? -1 : 1) * rng(7, 20);
      const hr = rng(3, 7);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(hr, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        mat(hillColors[i % 3]));
      dome.position.set(hx, -0.2, hz);
      dome.scale.y = rng(0.35, 0.6);
      if (!near) s.add(dome);
    }

    // ---- the King's Highway path down the middle ----
    const path = new THREE.Mesh(new THREE.PlaneGeometry(LIGHT_X - WEST_EDGE + 12, 4.2), mat(PALETTE.path));
    path.rotation.x = -Math.PI / 2;
    path.position.set((WEST_EDGE + LIGHT_X) / 2, 0.02, PATH_Z);
    s.add(path);

    // ---- scattered flowers ----
    const flowerColors = [0xf4c2d4, 0xfff0a0, 0xe8d4f8, 0xffb3c6, 0xaecbff];
    for (let i = 0; i < 90; i++) {
      const fx = rng(WEST_EDGE - 4, LIGHT_X + 4);
      const fz = (Math.random() < 0.5 ? -1 : 1) * rng(3.2, 16);
      s.add(block(0.16, 0.3, 0.16, flowerColors[i % 5], fx, 0.15, fz));
    }

    // ---- fruit trees ----
    for (let i = 0; i < 16; i++) {
      const tx = rng(WEST_EDGE, LIGHT_X);
      const tz = (Math.random() < 0.5 ? -1 : 1) * rng(5, 15);
      this.buildFruitTree(tx, tz);
    }

    // ---- small lakes + a flowing river ----
    this.buildLake(-24, 10, 5, 3);
    this.buildLake(14, -12, 4, 2.6);
    this.buildLake(44, 12, 6, 3.4);
    this.buildRiver();

    // ---- the four tour landmarks ----
    this.buildHillError(ERROR_X);
    this.buildMountCaution(CAUTION_X);
    this.buildDoorIntoHell(HELL_X);
    this.buildTelescopePeak(TELESCOPE_X);

    // a welcome arch of stones at the plaza
    for (const side of [-1, 1]) {
      s.add(block(0.8, 2.6, 0.8, 0xcfc3a8, WELCOME_X - 1, 1.3, side * 3.0));
    }
    s.add(block(4.2, 0.7, 0.8, 0xdccfb0, WELCOME_X - 1, 2.9, 0));

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
    // ripe fruit dots
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      t.add(block(0.22, 0.22, 0.22, i % 2 ? 0xff8a4a : 0xf25b6a,
        Math.cos(a) * 0.9, 2.2 + Math.sin(a * 2) * 0.4, Math.sin(a) * 0.9));
    }
    t.position.set(x, 0, z);
    this.scene.add(t);
  }

  private buildLake(x: number, z: number, w: number, d: number): void {
    const lake = new THREE.Mesh(new THREE.CircleGeometry(1, 20), mat(0x8fd0ea));
    lake.rotation.x = -Math.PI / 2;
    lake.scale.set(w, d, 1);
    lake.position.set(x, 0.03, z);
    (lake.material as THREE.MeshLambertMaterial).transparent = true;
    (lake.material as THREE.MeshLambertMaterial).opacity = 0.9;
    this.scene.add(lake);
    this.water.push(lake);
    // a lighter rim of shallows
    const rim = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 20), mat(0xbfe6f2));
    rim.rotation.x = -Math.PI / 2;
    rim.scale.set(w, d, 1);
    rim.position.set(x, 0.025, z);
    this.scene.add(rim);
  }

  // a river of blue tiles winding across the north side; the tiles bob gently
  // to suggest flowing water
  private buildRiver(): void {
    for (let i = 0; i < 40; i++) {
      const rx = WEST_EDGE + i * ((LIGHT_X - WEST_EDGE) / 40);
      const rz = 9 + Math.sin(rx * 0.15) * 3.5;
      const tile = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.2), mat(0x7ec8ea));
      tile.rotation.x = -Math.PI / 2;
      tile.position.set(rx, 0.04, rz);
      (tile.material as THREE.MeshLambertMaterial).transparent = true;
      (tile.material as THREE.MeshLambertMaterial).opacity = 0.85;
      this.scene.add(tile);
      this.water.push(tile);
    }
  }

  // 1. Hill Error — a steep cliff to the south, broken bones at the bottom
  private buildHillError(x: number): void {
    const g = new THREE.Group();
    const rock = 0x9a8e7a;
    // the cliff edge — a raised lip along the path
    g.add(block(6, 1.2, 1.2, rock, 0, 0.6, -3.2));
    // the sheer drop: a dark recessed face below the lip
    g.add(block(7, 4, 3, 0x4a4038, 0, -1.8, -6.5));
    // pale broken bones scattered at the bottom
    for (let i = 0; i < 12; i++) {
      const bx = x + (Math.random() - 0.5) * 5;
      const bz = -6.5 + (Math.random() - 0.5) * 2.4;
      this.scene.add(block(
        0.5 + Math.random() * 0.5, 0.12, 0.14, 0xe9e2d0,
        bx, -3.7, bz,
      ));
    }
    // a warning cairn on the path side
    g.add(block(0.5, 0.5, 0.5, rock, 2.6, 0.25, -1.6));
    g.add(block(0.4, 0.4, 0.4, rock, 2.6, 0.6, -1.6));
    g.position.set(x, 0, 0);
    this.scene.add(g);
  }

  // 2. Mount Caution — a mound of tombs to the north, blind men wandering
  private buildMountCaution(x: number): void {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(
      new THREE.SphereGeometry(5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      mat(0x8ab866),
    ));
    (g.children[0] as THREE.Mesh).scale.y = 0.5;
    (g.children[0] as THREE.Mesh).position.set(0, -0.2, 6);
    // grey tombs on the mound
    const tomb = 0x9c968c;
    for (let i = 0; i < 6; i++) {
      const tx = (Math.random() - 0.5) * 7;
      const tz = 5 + (Math.random() - 0.5) * 3;
      g.add(block(0.9, 1.2, 0.5, tomb, tx, 0.6, tz));
      g.add(block(1.1, 0.3, 0.7, 0x877f74, tx, 1.25, tz)); // slab top
    }
    g.position.set(x, 0, 0);
    this.scene.add(g);

    // two blind men — grey, hunched bears with pale blank eyes, wandering
    for (let i = 0; i < 2; i++) {
      const m = makeBear({ species: 'bear', fur: 0x8a857c, outfit: 'shirt', outfitColor: 0x6f6a62 });
      // pale, sightless eyes overlaid on the face
      for (const side of [-1, 1]) {
        m.head.add(block(0.12, 0.12, 0.06, 0xe8e4da, 0.2 * side, 0.5, 0.42));
      }
      m.root.position.set(x - 2 + i * 3.5, 0, 6 + (i - 0.5) * 1.5);
      m.root.userData.wander = Math.random() * Math.PI * 2;
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

  // 4. The Telescope on a high peak — the glimpse of the Celestial City
  private buildTelescopePeak(x: number): void {
    const g = new THREE.Group();
    // a raised rocky peak beside the path
    g.add(new THREE.Mesh(
      new THREE.ConeGeometry(4, 5, 10), mat(0x9ec488),
    ));
    (g.children[0] as THREE.Mesh).position.set(0, 2.4, -4);
    // the telescope: a tripod + an angled brass tube, pointed east toward the city
    const scope = new THREE.Group();
    for (const a of [0, 2.1, 4.2]) {
      const leg = block(0.1, 1.6, 0.1, 0x6a5038, Math.cos(a) * 0.4, 0.8, Math.sin(a) * 0.4);
      leg.rotation.z = Math.cos(a) * 0.25;
      leg.rotation.x = Math.sin(a) * 0.25;
      scope.add(leg);
    }
    const tube = block(0.28, 1.5, 0.28, 0xcaa24a, 0, 1.9, 0);
    tube.rotation.z = -Math.PI / 2.6;
    scope.add(tube);
    scope.position.set(1.5, 0, -1.4);
    g.add(scope);
    g.position.set(x, 0, 0);
    this.scene.add(g);
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

    // blind men wander in slow aimless circles among the tombs
    for (const m of this.blindMen) {
      m.root.userData.wander = (m.root.userData.wander as number) + dt * 0.5;
      const w = m.root.userData.wander as number;
      m.root.position.x += Math.cos(w) * dt * 0.6;
      m.root.position.z += Math.sin(w) * dt * 0.6;
      m.root.rotation.y = -w;
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

    // character walk cycles
    const walking = (this.phase === 'enter' || this.phase === 'walk' || this.phase === 'depart') && moving;
    animateBear(this.christian, t, walking);
    animateBear(this.hopeful, t, walking);
    for (const sp of this.shepherds) {
      animateBear(sp, t, walking && (this.phase === 'walk' || this.phase === 'depart'));
    }
  }
}
