import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';

// Chapter XV — Beulah Land (the finale).
// After the Delectable Mountains, Christian and Hopeful come to Beulah Land: a
// golden-hour country of flowers, fruit, and birdsong, in sight of the
// Celestial City. One barrier remains — a deep River (death), with no bridge,
// "deeper or shallower according as you believe in the King." Christian wades
// in, sinks, and is surrounded by gloomy doubts; Hopeful, feeling the bottom,
// calms him — and the player pops the balloons of doubt away. They cross, are
// met by two Shining Ones, and walk on into the light of the King's kingdom.

interface BeulahCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  blipSound: () => void;
  rumbleSound: () => void;
  setMusic?: (style: 'village' | 'cross') => void;
}

type Phase =
  | 'meadow'  // walk east through Beulah toward the river
  | 'brink'   // at the river's edge — the river of death is explained
  | 'wade'    // scripted: Christian steps in, the water deepens
  | 'sinking' // scripted: he sinks, fear takes him, the doubts rise
  | 'doubt'   // interactive: pop the balloons of doubt (after Hopeful calms him)
  | 'cross'   // scripted: confidence restored, they wade to the far shore
  | 'shore'   // the two Shining Ones greet them
  | 'depart'  // walk on into the light of the King's kingdom
  | 'done';

// ---- x-positions (path runs west → east along z = 0) ----
const WEST_EDGE   = -34;
const RIVER_X     =   4; // near shore — wading begins
const SINK_X      =  16; // deep centre — the sinking and the doubts
const FAR_SHORE_X =  32; // far shore — the Shining Ones
const LIGHT_X     =  50; // the Celestial City gate / chapter end

const PATH_Z = 0;
const LANE_HALF_WIDTH = 2.4;

interface Balloon {
  group: THREE.Group;
  body: THREE.Mesh;   // the single raycast target
  face: THREE.Group;
  angle: number;      // orbit angle around Christian
  radius: number;
  height: number;
  bob: number;        // per-balloon bob phase
  popped: boolean;
  popT: number;       // >0 while the burst animation plays
}

export class BeulahScene {
  scene = new THREE.Scene();
  phase: Phase = 'meadow';
  private cb: BeulahCallbacks;
  christian: BearParts;
  hopeful: BearParts;
  private angels: BearParts[] = [];

  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;

  // river + city
  private shimmer: THREE.Mesh | null = null;
  private cityGlow: THREE.Group | null = null;
  private shining: ShiningLight | null = null;
  private mist: THREE.Mesh[] = [];
  private ripples: THREE.Mesh[] = [];

  // doubt balloons
  private balloons: Balloon[] = [];
  private popParticles: Array<{ mesh: THREE.Mesh; vx: number; vy: number; vz: number; life: number }> = [];
  private canPopFlag = false;

  // scripted-walk state (wade / cross)
  private walkT = 0;
  private walkDur = 1;
  private walkFrom = new THREE.Vector3();
  private walkTo = new THREE.Vector3();
  private sinkT = 0;

  private brinkTriggered = false;
  private revisit = false;
  private built = false;

  constructor(cb: BeulahCallbacks) {
    this.cb = cb;

    // Christian — in his shining garments, armored as ever
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

    // two Shining Ones — radiant white-gold figures with wings and haloes
    for (let i = 0; i < 2; i++) {
      const ang = makeBear({
        species: 'bear', fur: 0xf6f2e6, outfit: 'robe', outfitColor: 0xfff0c0,
      });
      // wings
      for (const side of [-1, 1]) {
        const wing = block(0.2, 1.5, 0.9, 0xfffdf4, 0.5 * side, 0.7, -0.4);
        wing.rotation.z = 0.3 * side;
        wing.rotation.y = 0.4 * side;
        ang.body.add(wing);
      }
      // halo
      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.42, 0.06, 8, 20),
        new THREE.MeshBasicMaterial({ color: 0xfff2b0 }),
      );
      halo.rotation.x = Math.PI / 2;
      halo.position.set(0, 1.7, 0);
      ang.head.add(halo);
      this.angels.push(ang);
    }

    // golden-hour lighting
    this.hemi = new THREE.HemisphereLight(0xffe6c0, 0xd8c090, 1.15);
    this.sun = new THREE.DirectionalLight(0xffd489, 1.5);
    this.sun.position.set(60, 26, 18); // low, from the city in the east
    setupSunShadow(this.sun);
  }

  // ---------------------------------------------------------------- enter
  enter(revisit: boolean): { christian: BearParts; hopeful: BearParts } {
    this.revisit = revisit;
    this.canPopFlag = false;
    this.brinkTriggered = false;
    this.sinkT = 0;
    this.walkT = 0;
    if (!this.built) this.build();

    // reset balloons + particles
    for (const b of this.balloons) {
      b.popped = false;
      b.popT = 0;
      b.group.visible = false;
      b.group.scale.setScalar(1);
      (b.body.material as THREE.MeshLambertMaterial).opacity = 1;
    }
    for (const p of this.popParticles) p.mesh.visible = false;
    this.popParticles.length = 0;

    if (revisit) {
      this.phase = 'depart';
      this.christian.root.position.set(FAR_SHORE_X, 0, PATH_Z);
      this.hopeful.root.position.set(FAR_SHORE_X - 2, 0, PATH_Z + 0.8);
      this.setAngelsVisible(true);
      this.cb.setObjective('✨ Beulah Land — walk on into the light of the City');
    } else {
      this.phase = 'meadow';
      this.christian.root.position.set(WEST_EDGE + 2, 0, PATH_Z);
      this.hopeful.root.position.set(WEST_EDGE, 0, PATH_Z + 0.8);
      this.setAngelsVisible(false);
      this.cb.setObjective('🌅 Beulah Land at last — walk with Hopeful toward the river');
    }
    this.christian.root.rotation.set(0, Math.PI / 2, 0);
    this.hopeful.root.rotation.set(0, Math.PI / 2, 0);

    if (this.cb.setMusic) this.cb.setMusic('cross');
    return { christian: this.christian, hopeful: this.hopeful };
  }

  private setAngelsVisible(v: boolean): void {
    for (let i = 0; i < 2; i++) {
      this.angels[i].root.visible = v;
      this.angels[i].root.position.set(FAR_SHORE_X + 3 + i * 3, 0, -1.4 + i * 2.8);
      this.angels[i].root.rotation.set(0, -Math.PI / 2, 0);
    }
  }

  // ---------------------------------------------------------------- build
  private build(): void {
    this.built = true;
    const s = this.scene;

    s.background = new THREE.Color(0xffe3b0);
    s.fog = new THREE.Fog(0xffe3b0, 70, 170);

    s.add(this.hemi);
    s.add(this.sun);

    const rng = (a: number, b: number) => a + Math.random() * (b - a);

    // ---- ground: one continuous green base, with a golden shore laid ON TOP
    // to the east. Distinct heights everywhere (no two planes share a y over
    // the same ground) so nothing z-fights / flickers. ----
    const base = new THREE.Mesh(new THREE.PlaneGeometry(320, 180), mat(0x9ed67e));
    base.rotation.x = -Math.PI / 2;
    base.position.set(LIGHT_X - 10, 0, 0);
    base.receiveShadow = true;
    s.add(base);

    // the far golden shore (east of the river), raised just above the green base
    const farShore = new THREE.Mesh(new THREE.PlaneGeometry(140, 180), mat(0xe8d69a));
    farShore.rotation.x = -Math.PI / 2;
    farShore.position.set(FAR_SHORE_X + 60, 0.02, 0);
    farShore.receiveShadow = true;
    s.add(farShore);

    // ---- the paths (above the ground tints) ----
    const path = new THREE.Mesh(new THREE.PlaneGeometry(RIVER_X - WEST_EDGE + 8, 4.2), mat(PALETTE.path));
    path.rotation.x = -Math.PI / 2;
    path.position.set((WEST_EDGE + RIVER_X) / 2, 0.05, PATH_Z);
    path.receiveShadow = true;
    s.add(path);
    const path2 = new THREE.Mesh(new THREE.PlaneGeometry(LIGHT_X - FAR_SHORE_X + 8, 4.2), mat(0xf2e2b0));
    path2.rotation.x = -Math.PI / 2;
    path2.position.set((FAR_SHORE_X + LIGHT_X) / 2, 0.05, PATH_Z);
    path2.receiveShadow = true;
    s.add(path2);

    // ---- the River — banks, shallows, deep channel, drifting ripples ----
    const RW = FAR_SHORE_X - RIVER_X;
    const RCX = (RIVER_X + FAR_SHORE_X) / 2;
    // wet, foamy shore bands where the water meets each bank
    for (const bx of [RIVER_X, FAR_SHORE_X]) {
      const bank = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 62), mat(0xcfeaf2));
      bank.rotation.x = -Math.PI / 2;
      bank.position.set(bx, 0.1, 0);
      s.add(bank);
    }
    // the clear shallows
    const clear = new THREE.Mesh(new THREE.PlaneGeometry(RW, 62), mat(0x7cc3e6));
    clear.rotation.x = -Math.PI / 2;
    clear.position.set(RCX, 0.12, 0);
    (clear.material as THREE.MeshLambertMaterial).transparent = true;
    (clear.material as THREE.MeshLambertMaterial).opacity = 0.92;
    s.add(clear);
    // a mid indigo band, then the deepest channel down the centre line
    const mid = new THREE.Mesh(new THREE.PlaneGeometry(RW - 4, 62), mat(0x3f6bb8));
    mid.rotation.x = -Math.PI / 2;
    mid.position.set(RCX, 0.14, 0);
    (mid.material as THREE.MeshLambertMaterial).transparent = true;
    (mid.material as THREE.MeshLambertMaterial).opacity = 0.85;
    s.add(mid);
    const deep = new THREE.Mesh(new THREE.PlaneGeometry(9, 62), mat(0x243a86));
    deep.rotation.x = -Math.PI / 2;
    deep.position.set(RCX, 0.16, 0);
    (deep.material as THREE.MeshLambertMaterial).transparent = true;
    (deep.material as THREE.MeshLambertMaterial).opacity = 0.85;
    s.add(deep);

    // drifting ripple lines, to read as flowing water (animated in update)
    for (let i = 0; i < 14; i++) {
      const rip = new THREE.Mesh(
        new THREE.PlaneGeometry(RW - 1, 0.28),
        new THREE.MeshBasicMaterial({ color: 0xd8f0fb, transparent: true, opacity: 0.35, depthWrite: false }),
      );
      rip.rotation.x = -Math.PI / 2;
      rip.position.set(RCX, 0.18, -26 + i * 4 + rng(-1, 1));
      rip.userData.speed = 0.5 + Math.random() * 0.6;
      s.add(rip);
      this.ripples.push(rip);
    }
    // a few reeds and bank rocks at the near shore
    for (let i = 0; i < 8; i++) {
      const rz = (Math.random() < 0.5 ? -1 : 1) * rng(3, 12);
      s.add(block(0.12, rng(0.8, 1.5), 0.12, 0x6fae5a, RIVER_X - rng(0.3, 1.2), 0.5, rz)); // reed
      s.add(block(rng(0.5, 1.0), rng(0.3, 0.6), rng(0.5, 0.9), 0xb9b0a2, RIVER_X - rng(0.5, 1.6), 0.2, rz + 1)); // rock
    }

    // shimmering path of light cast across the water from the City
    const shimmer = new THREE.Mesh(
      new THREE.PlaneGeometry(RW, 3.2),
      new THREE.MeshBasicMaterial({
        color: 0xfff2c0, transparent: true, opacity: 0.5,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    shimmer.rotation.x = -Math.PI / 2;
    shimmer.position.set(RCX, 0.2, 0);
    s.add(shimmer);
    this.shimmer = shimmer;

    // soft mist rising off the water
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(3.5, 2),
        new THREE.MeshBasicMaterial({ color: 0xfff4e0, transparent: true, opacity: 0.28, depthWrite: false }),
      );
      m.position.set(rng(RIVER_X, FAR_SHORE_X), rng(0.6, 2.2), rng(-8, 8));
      m.userData.baseY = m.position.y;
      s.add(m);
      this.mist.push(m);
    }

    // ---- flowers, fruit trees, bird nests (atmosphere only) ----
    const flowerColors = [0xf4c2d4, 0xfff0a0, 0xe8d4f8, 0xffb3c6, 0xaecbff, 0xff9ec4];
    for (let i = 0; i < 120; i++) {
      const fx = rng(WEST_EDGE - 6, RIVER_X - 1);
      const fz = (Math.random() < 0.5 ? -1 : 1) * rng(3.2, 20);
      s.add(block(0.16, 0.32, 0.16, flowerColors[i % 6], fx, 0.16, fz));
    }
    for (let i = 0; i < 12; i++) {
      this.buildFruitTree(rng(WEST_EDGE, RIVER_X - 2), (Math.random() < 0.5 ? -1 : 1) * rng(5, 16), i < 3);
    }

    // ---- the Celestial City on the far golden cliffs ----
    this.buildCelestialCity();

    // ---- exit light: the shining beacon that ends every chapter ----
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

    // ---- doubt balloons (built hidden; shown when Christian sinks) ----
    this.buildBalloons();

    // ---- characters ----
    s.add(this.christian.root);
    s.add(this.hopeful.root);
    for (const a of this.angels) { a.root.visible = false; s.add(a.root); }
  }

  private buildFruitTree(x: number, z: number, withNest: boolean): void {
    const t = new THREE.Group();
    t.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
    t.add(block(2.0, 1.4, 2.0, 0x86cc6c, 0, 2.2, 0));
    t.add(block(1.3, 1.0, 1.3, 0x93d477, 0, 3.05, 0));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      t.add(block(0.22, 0.22, 0.22, i % 2 ? 0xff8a4a : 0xf25b6a,
        Math.cos(a) * 0.9, 2.2 + Math.sin(a * 2) * 0.4, Math.sin(a) * 0.9));
    }
    if (withNest) {
      t.add(block(0.5, 0.28, 0.5, 0x9a7b52, 0.5, 2.7, 0.5)); // nest
      t.add(block(0.16, 0.16, 0.16, 0xfff4e0, 0.42, 2.9, 0.5)); // egg
      t.add(block(0.16, 0.16, 0.16, 0xfff4e0, 0.58, 2.9, 0.5));
    }
    t.position.set(x, 0, z);
    this.scene.add(t);
  }

  // the Celestial City — radiant golden towers on cliffs beyond the far shore
  private buildCelestialCity(): void {
    const g = new THREE.Group();
    const gold = 0xffe08a;
    // the golden cliffs it stands on
    const cliff = block(30, 8, 20, 0xe6c878, 0, 4, -2);
    (cliff.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffd060);
    (cliff.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.25;
    g.add(cliff);
    for (let i = 0; i < 11; i++) {
      const h = 6 + Math.random() * 10;
      const tower = block(2.0, h, 2.0, gold, (i - 5) * 2.8, 8 + h / 2, (Math.random() - 0.5) * 6);
      const m = tower.material as THREE.MeshLambertMaterial;
      m.emissive = new THREE.Color(0xffdc70);
      m.emissiveIntensity = 0.8;
      g.add(tower);
      const cap = block(0.8, 1.0, 0.8, 0xfff4c8, (i - 5) * 2.8, 8 + h + 0.6, 0);
      (cap.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xfff0c0);
      (cap.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.7;
      g.add(cap);
    }
    g.position.set(LIGHT_X + 18, 0, 4);
    g.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) (mesh.material as THREE.MeshLambertMaterial).fog = false;
    });
    this.cityGlow = g;
    this.scene.add(g);

    // a bright glow over the city
    const glow = new THREE.PointLight(0xfff0c0, 2.4, 60);
    glow.position.set(LIGHT_X + 18, 16, 4);
    this.scene.add(glow);
  }

  // build the pool of doubt balloons (hidden until Christian sinks). Blocky
  // voxel balloons in soft, muted pastels — gloomy in mood but matching the
  // game's cube style, with a downcast frown on each.
  private buildBalloons(): void {
    const pastel = [0xb8a8cc, 0xa6b6cc, 0xc9b2bc, 0xb2c2b0, 0xc6bda6];
    const labels = 5;
    for (let i = 0; i < labels; i++) {
      const group = new THREE.Group();
      const col = pastel[i % pastel.length];
      // the single raycast body — a rounded-off cube (a chamfered voxel balloon)
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(1.15, 1.3, 1.15),
        new THREE.MeshLambertMaterial({ color: col, transparent: true, opacity: 1 }),
      );
      group.add(body);
      // blocky bands so it reads as a plump balloon, not a plain box. They
      // share the body's material, so they fade in/out with it.
      const shade = new THREE.Group();
      shade.add(new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 1.3), body.material));
      shade.add(new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.5, 0.8), body.material));
      group.add(shade);
      // a knot + string hanging down (non-raycast children)
      const face = new THREE.Group();
      face.add(block(0.16, 0.16, 0.16, col, 0, -0.78, 0)); // knot
      face.add(block(0.05, 1.3, 0.05, 0x8a8496, 0, -1.5, 0)); // string
      // a downcast frown face on the front (+z)
      face.add(block(0.12, 0.16, 0.05, 0x5a5266, -0.24, 0.14, 0.6)); // eye
      face.add(block(0.12, 0.16, 0.05, 0x5a5266, 0.24, 0.14, 0.6));  // eye
      face.add(block(0.12, 0.1, 0.05, 0x5a5266, -0.18, -0.24, 0.6)); // frown, stepped
      face.add(block(0.16, 0.1, 0.05, 0x5a5266, 0, -0.3, 0.6));
      face.add(block(0.12, 0.1, 0.05, 0x5a5266, 0.18, -0.24, 0.6));
      group.add(face);
      group.visible = false;
      this.scene.add(group);
      this.balloons.push({
        group, body, face,
        angle: (i / labels) * Math.PI * 2,
        radius: 1.9 + (i % 2) * 0.6,
        height: 2.4 + (i % 3) * 0.55,
        bob: Math.random() * Math.PI * 2,
        popped: false, popT: 0,
      });
    }
  }

  // ---------------------------------------------------------------- API
  moveFactor(): number {
    switch (this.phase) {
      case 'meadow': return 1.0;
      case 'cross':  return 0.8; // player wades across the river themselves
      case 'depart': return 1.0;
      default:       return 0; // brink / wade / sinking / doubt / shore are scripted
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;
    if (this.phase === 'meadow') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, RIVER_X));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      if (p.x >= RIVER_X - 0.4) this.triggerBrink();
    } else if (this.phase === 'cross') {
      // the player wades the rest of the way across; Christian rises out of the
      // deep water as he nears the far shore, and the Shining Ones appear only
      // once he has actually reached it
      p.x = Math.max(SINK_X - 2, Math.min(p.x, FAR_SHORE_X));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      const u = THREE.MathUtils.clamp((p.x - SINK_X) / (FAR_SHORE_X - SINK_X), 0, 1);
      p.y = THREE.MathUtils.lerp(-0.9, 0, u);
      if (p.x >= FAR_SHORE_X - 0.4) this.triggerShore();
    } else if (this.phase === 'depart') {
      p.x = Math.max(FAR_SHORE_X - 2, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(PATH_Z - LANE_HALF_WIDTH, Math.min(p.z, PATH_Z + LANE_HALF_WIDTH));
      if (p.x >= LIGHT_X - 2) this.triggerExit();
    }
    this.followHopeful();
  }

  // Hopeful walks just behind Christian; in the river he keeps a shallower
  // footing (he "feels the bottom"), staying higher than the sinking Christian
  private followHopeful(): void {
    if (this.phase === 'done') return;
    const c = this.christian.root.position;
    const hp = this.hopeful.root.position;
    const inRiver = this.phase === 'wade' || this.phase === 'sinking' ||
                    this.phase === 'doubt' || this.phase === 'cross';
    const target = c.clone().add(new THREE.Vector3(-1.9, inRiver ? -0.3 : 0, 1.1));
    if (inRiver) target.y = Math.max(-0.35, target.y); // never as deep as Christian
    hp.lerp(target, 0.09);
    if (this.phase !== 'brink' && this.phase !== 'shore') {
      this.hopeful.root.rotation.y = Math.PI / 2;
    }
  }

  canPop(): boolean {
    return this.phase === 'doubt' && this.canPopFlag;
  }

  // ---- talking with the Shining Ones on the far shore ----
  nearAngel(): boolean {
    if ((this.phase !== 'depart' && this.phase !== 'shore') || !this.angels[0].root.visible) return false;
    const p = this.christian.root.position;
    return this.angels.some((a) => Math.hypot(p.x - a.root.position.x, p.z - a.root.position.z) < 3.6);
  }

  private angelLine = 0;
  talkAngel(): void {
    if (!this.nearAngel()) return;
    const lines: DialogueLine[] = [
      { speaker: 'Shining One', text: 'Fear nothing now, pilgrim. The King Himself has sent for you.' },
      { speaker: 'Shining One', text: 'The way was hard, but every step of it is remembered — and every step is rewarded.' },
      { speaker: 'Shining One', text: 'Only a little further, and you shall see Him face to face. Go up, with joy.' },
    ];
    this.cb.playScript([lines[this.angelLine % lines.length]]);
    this.angelLine++;
  }

  // main.ts calls this from a pointerdown with a camera-configured raycaster.
  // Returns true if a balloon was popped.
  tryPop(raycaster: THREE.Raycaster): boolean {
    if (!this.canPop()) return false;
    const bodies = this.balloons.filter((b) => !b.popped).map((b) => b.body);
    const hits = raycaster.intersectObjects(bodies, false);
    if (hits.length === 0) return false;
    const hit = hits[0].object as THREE.Mesh;
    const b = this.balloons.find((x) => x.body === hit);
    if (!b || b.popped) return false;
    this.popBalloon(b);
    return true;
  }

  private popBalloon(b: Balloon): void {
    b.popped = true;
    b.popT = 0.001;
    this.cb.blipSound();
    // burst particles
    const col = (b.body.material as THREE.MeshLambertMaterial).color.getHex();
    for (let i = 0; i < 8; i++) {
      const bit = block(0.14, 0.14, 0.14, col,
        b.group.position.x, b.group.position.y, b.group.position.z);
      this.scene.add(bit);
      const a = Math.random() * Math.PI * 2;
      const up = Math.random() * 2;
      this.popParticles.push({
        mesh: bit,
        vx: Math.cos(a) * 2.4, vy: up + 1.5, vz: Math.sin(a) * 2.4, life: 0.6,
      });
    }
    // encourage him a little more each time a doubt is gone
    const remaining = this.balloons.filter((x) => !x.popped).length;
    if (remaining === 0) {
      this.cb.setObjective('💙 The doubts are gone — cross the river with Hopeful');
      setTimeout(() => this.beginCross(), 350);
    }
  }

  // ---------------------------------------------------------------- triggers
  private triggerBrink(): void {
    if (this.brinkTriggered) return;
    this.brinkTriggered = true;
    this.phase = 'brink';
    this.cb.setObjective('🌊 The River — every pilgrim must cross');
    this.cb.playScript([
      { speaker: '',           text: 'Here Beulah Land ends. Before them lies a deep River, and beyond it the golden cliffs of the Celestial City — but there is no bridge.' },
      { speaker: 'Christian',  text: 'Is there no other way to the Gate?' },
      { speaker: '',           text: 'There is no way but through the River. It is the river of death; every pilgrim must pass it.' },
      { speaker: 'Hopeful',    text: 'They told us its depth is not the same for all: "You shall find it deeper or shallower, according as you believe in the King."' },
      { speaker: 'Christian',  text: 'Then — together. Come, Hopeful. Into the water.' },
    ], () => this.beginWade());
  }

  private beginWade(): void {
    this.phase = 'wade';
    this.cb.setObjective('🌊 Wade into the river...');
    this.walkT = 0;
    this.walkDur = 2.4;
    this.walkFrom.copy(this.christian.root.position);
    this.walkTo.set(SINK_X, -0.9, 0); // deepening as he reaches the middle
  }

  private triggerSinking(): void {
    this.phase = 'sinking';
    this.sinkT = 0;
    // the doubts rise around him
    for (const b of this.balloons) {
      b.group.visible = true;
      b.popped = false;
      (b.body.material as THREE.MeshLambertMaterial).opacity = 0;
    }
    this.cb.rumbleSound();
    this.cb.setObjective('😰 Christian is sinking — fear closes over him');
    this.cb.playScript([
      { speaker: '',          text: 'The water rises to his chest, and higher. Suddenly Christian begins to sink, and a great fear takes hold of him.' },
      { speaker: 'Christian', text: '*gasping* The sorrows of death have compassed me about! I shall not reach the other side...' },
      { speaker: 'Christian', text: 'I cannot feel Him. All I can see are my sins — the Slough, the byway, the scroll I lost, the giant\'s dungeon...' },
    ], () => this.hopefulEncourages());
  }

  private hopefulEncourages(): void {
    this.cb.playScript([
      { speaker: 'Hopeful',   text: 'Be of good cheer, my brother — I feel the bottom, and it is good!' },
      { speaker: 'Hopeful',   text: 'These troubles are not a sign the King has left you. They are sent to try you — to make you remember Him.' },
      { speaker: 'Hopeful',   text: 'His promises have not changed. The river is only for a moment. Look up, Christian — reach out and put these doubts away!' },
    ], () => {
      this.phase = 'doubt';
      this.canPopFlag = true;
      this.cb.setObjective('👆 Pop the balloons of doubt — click or tap each one');
    });
  }

  private beginCross(): void {
    this.canPopFlag = false;
    this.phase = 'cross';
    this.cb.setObjective('🙏 The doubts are gone — take heart');
    this.cb.playScript([
      { speaker: 'Christian', text: 'The bottom... yes. I feel it now. He is with me — He was with me all along.' },
      { speaker: 'Hopeful',   text: 'There, brother. Now — to the far shore, on your own feet. The Gate is waiting.' },
    ], () => {
      // hand control back: the player wades the pilgrims across themselves
      this.cb.setObjective('➡ Wade east across the river to the far shore');
    });
  }

  private triggerShore(): void {
    this.phase = 'shore';
    this.setAngelsVisible(true);
    this.cb.setObjective('✨ Two Shining Ones come to meet them');
    this.cb.playScript([
      { speaker: '',            text: 'As they set foot on the far shore, two Shining Ones come down to meet them, their faces bright as the sun.' },
      { speaker: 'Shining One', text: 'Welcome, faithful pilgrims. You are now entering the King\'s kingdom.' },
      { speaker: 'Shining One', text: 'You leave behind you now all pain, all sorrow, all temptation — and death itself. It has no more power over you.' },
      { speaker: 'Christian',   text: 'We have come through the River... and lived. Oh, Hopeful — we are almost home.' },
      { speaker: 'Hopeful',     text: 'Almost home. Come — into the light.' },
    ], () => {
      this.phase = 'depart';
      this.cb.setObjective('🌟 Walk on into the light — the King\'s kingdom is before you');
    });
  }

  private triggerExit(): void {
    if (this.phase !== 'depart') return;
    this.phase = 'done';
    this.cb.onComplete();
  }

  // ---------------------------------------------------------------- update
  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const chr = this.christian;
    const hop = this.hopeful;

    // shimmer + mist + city glow
    if (this.shimmer) {
      (this.shimmer.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.abs(Math.sin(t * 1.3)) * 0.3;
    }
    // ripples drift slowly along the river and wrap around
    for (const r of this.ripples) {
      r.position.z += dt * (r.userData.speed as number);
      if (r.position.z > 28) r.position.z = -28;
      (r.material as THREE.MeshBasicMaterial).opacity = 0.25 + Math.abs(Math.sin(t * 1.6 + r.position.z)) * 0.2;
    }
    for (const m of this.mist) {
      m.position.y = (m.userData.baseY as number) + Math.sin(t * 0.8 + m.position.x) * 0.3;
      m.position.x += dt * 0.3;
      if (m.position.x > FAR_SHORE_X) m.position.x = RIVER_X;
    }
    if (this.cityGlow) {
      const pulse = 0.6 + Math.abs(Math.sin(t * 0.7)) * 0.3;
      this.cityGlow.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh) {
          const mm = mesh.material as THREE.MeshLambertMaterial;
          if (mm.emissive && mm.emissiveIntensity > 0.3) mm.emissiveIntensity = pulse;
        }
      });
    }

    // ---- scripted wade (Christian walks himself into the deep) ----
    if (this.phase === 'wade') {
      this.walkT = Math.min(this.walkDur, this.walkT + dt);
      const u = this.walkT / this.walkDur;
      const eased = u * u * (3 - 2 * u);
      chr.root.position.lerpVectors(this.walkFrom, this.walkTo, eased);
      chr.root.rotation.y = Math.PI / 2;
      if (this.walkT >= this.walkDur) this.triggerSinking();
    }

    // ---- sinking: he drops lower and the doubts fade in ----
    if (this.phase === 'sinking') {
      this.sinkT = Math.min(1, this.sinkT + dt * 0.5);
      chr.root.position.y = THREE.MathUtils.lerp(-0.9, -1.6, this.sinkT);
      for (const b of this.balloons) {
        const mm = b.body.material as THREE.MeshLambertMaterial;
        mm.opacity = Math.min(1, mm.opacity + dt * 0.8);
      }
    }

    // ---- as doubts are popped, Christian steadies and rises a little ----
    if (this.phase === 'doubt') {
      const popped = this.balloons.filter((b) => b.popped).length;
      const targetY = THREE.MathUtils.lerp(-1.6, -0.9, popped / this.balloons.length);
      chr.root.position.y += (targetY - chr.root.position.y) * Math.min(dt * 3, 1);
    }

    // ---- balloons: orbit + bob around Christian; run pop animations ----
    if (this.phase === 'sinking' || this.phase === 'doubt') {
      const c = chr.root.position;
      for (const b of this.balloons) {
        if (!b.group.visible) continue;
        if (!b.popped) {
          b.angle += dt * 0.25;
          b.bob += dt * 2;
          b.group.position.set(
            c.x + Math.cos(b.angle) * b.radius,
            c.y + b.height + Math.sin(b.bob) * 0.18,
            c.z + Math.sin(b.angle) * b.radius * 0.7,
          );
          // face the camera-ish (front toward +z/south)
          b.group.rotation.y = -b.angle;
        } else if (b.popT > 0) {
          b.popT += dt;
          const k = b.popT / 0.28;
          b.group.scale.setScalar(1 + k * 1.4);
          (b.body.material as THREE.MeshLambertMaterial).opacity = Math.max(0, 1 - k);
          if (k >= 1) { b.group.visible = false; b.popT = 0; }
        }
      }
    }

    // ---- pop particles ----
    if (this.popParticles.length) {
      for (const p of this.popParticles) {
        p.life -= dt;
        p.vy -= dt * 6;
        p.mesh.position.x += p.vx * dt;
        p.mesh.position.y += p.vy * dt;
        p.mesh.position.z += p.vz * dt;
        p.mesh.scale.setScalar(Math.max(0.01, p.life / 0.6));
        if (p.life <= 0) { this.scene.remove(p.mesh); p.mesh.visible = false; }
      }
      this.popParticles = this.popParticles.filter((p) => p.life > 0);
    }

    // ---- keep both out of the water at rest on land ----
    if (this.phase === 'meadow' || this.phase === 'depart') {
      chr.root.position.y = 0;
    }

    // ---- character animation ----
    const walking = (this.phase === 'meadow' || this.phase === 'depart' || this.phase === 'cross') && moving;
    const wadeWalk = this.phase === 'wade';
    animateBear(chr, t, walking || wadeWalk);
    animateBear(hop, t, walking || wadeWalk);
    for (const a of this.angels) {
      if (a.root.visible) animateBear(a, t, false);
    }

    // exit beacon twinkle
    if (this.shining) animateShiningLight(this.shining, t);
  }
}
