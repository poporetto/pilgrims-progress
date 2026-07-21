import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter XIII — Doubting Castle.
// The King's Highway turns rough and rocky. Beside it a smooth green meadow
// path (Bypath Meadow) tempts weary pilgrims — including Christian. They leave
// the road, a storm catches them in the dark, they fall asleep on Giant
// Despair's land, are beaten and locked in his dungeon for days. Only a key
// called Promise — which Christian had been carrying all along — opens the
// doors and sets them free. A warning sign is left for those who follow.

interface CastleCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  rumbleSound: () => void;
  blipSound: () => void;
  setMusic?: (style: 'village' | 'slough' | 'cross') => void;
  fade?: (mid: () => void) => void;
  showChoice: (a: string, b: string, cb: (pick: 0 | 1) => void) => void;
  battleUI: (show: boolean) => void;
  setHP: (christian: number, hopeful: number) => void;
}

type Phase =
  | 'enter'    // rocky highway — slow movement east
  | 'choice'   // fork: paused, choice presented
  | 'meadow'   // easy bypath — walking east freely
  | 'storm'    // night falls, rain, thunder, tiring
  | 'sleep'    // fall asleep → captured → thrown in dungeon
  | 'dungeon'  // scripted daily imprisonment beats
  | 'key'      // Promise-key minigame: press E × 3 near the door
  | 'escape'   // run east through the castle gates
  | 'highway'  // back on the King's Highway
  | 'sign'     // place warning sign; then complete
  | 'done';

// ---- x-positions along the road ----
const WEST_EDGE   = -34;
const FORK_X      =   0;   // where bypath branches off
const STORM_X     =  16;   // meadow: storm triggers here
const SLEEP_X     =  22;   // meadow: tiredness threshold → sleep
const SIGN_X      =  -2;   // highway: spot where Christian places the sign
const LIGHT_X     =  38;   // highway: exit light / chapter end

// interiors (placed far east on the same scene, like HALL / MINE patterns)
const DUNGEON = new THREE.Vector3(160, 0, 0);

// meadow z-centre
const MEADOW_Z = 6;
// highway z-centre
const HWY_Z = 0;
// how far outside the dungeon's bars (relative to DUNGEON.z) Giant Despair stands
const GIANT_Z = 6.6;

export class CastleScene {
  scene = new THREE.Scene();
  phase: Phase = 'enter';
  private cb: CastleCallbacks;
  christian: BearParts;
  hopeful: BearParts;
  private giant: BearParts;
  private diffidence: BearParts;

  // lighting
  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;
  private dungeonPt: THREE.PointLight | null = null;

  // storm
  private stormDark = 0;        // 0=day → 1=pitch dark
  private lightningFlash = 0;   // brief white add to hemi sky
  private lightningTimer = 2.5;
  private rainDrops: Array<{ mesh: THREE.Mesh; spd: number; x: number; z: number }> = [];

  // dungeon state
  christianHP = 100;
  hopefulHP   = 100;
  private dungeonStep  = 0; // which scripted beat is next
  private dungeonReady = true;

  // key minigame
  private keyPresses = 0;
  private doorGlow: THREE.Mesh | null = null;
  private doorBars: THREE.Group | null = null;

  // animation timers
  private sleepT   = 0;
  private captureT = -1;
  private escapeT  = -1;
  private beatingT = 0; // >0 while Giant Despair is mid-beating animation
  private tiringFactor = 1.0; // movement scalar during storm (drops to 0)

  // sign group
  private signMesh: THREE.Group | null = null;
  private signPlaced = false;

  private revisit = false;
  private built   = false;

  constructor(cb: CastleCallbacks) {
    this.cb = cb;

    // Christian, armored as ever
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

    // Giant Despair — enormous dark buffalo-bear (kept dark but not black, so he
    // still reads clearly under the dungeon's dim torch-light)
    this.giant = makeBear({
      species: 'bear', fur: 0x4a3a26, outfit: 'shirt', outfitColor: 0x4a3826,
      scale: 2.4,
    });
    // buffalo horns on Despair's head
    const hornC = 0x2e2414;
    this.giant.head.add(block(0.22, 0.72, 0.2, hornC,  0.36, 0.62,  0.04));
    this.giant.head.add(block(0.22, 0.72, 0.2, hornC, -0.36, 0.62,  0.04));
    this.giant.head.add(block(0.18, 0.22, 0.18, hornC,  0.48, 1.12, 0.1));
    this.giant.head.add(block(0.18, 0.22, 0.18, hornC, -0.48, 1.12, 0.1));
    // cudgel in right arm
    const cg = new THREE.Group();
    cg.add(block(0.3, 2.0, 0.3, 0x3a2a18, 0, 0.1, 0));
    cg.add(block(0.6, 0.6, 0.6, 0x4a3222, 0, 1.0, 0));
    cg.position.set(0.12, -0.7, 0.25);
    cg.rotation.z = 0.25;
    this.giant.armR.add(cg);
    // give Despair his own (non-shared) materials with a faint warm self-glow,
    // so he never disappears into a black silhouette in the dim dungeon light —
    // cloning avoids tinting every other model that happens to share these colours
    this.giant.root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      const src = mesh.material as THREE.MeshLambertMaterial;
      const own = src.clone();
      own.emissive = new THREE.Color(src.color).multiplyScalar(0.85);
      mesh.material = own;
    });

    // Diffidence — his wife, large dark bear
    this.diffidence = makeBear({
      species: 'bear', fur: 0x2e1a0a, outfit: 'shirt', outfitColor: 0x3c2216,
      scale: 1.6,
    });

    // lighting placeholders (populated in build())
    this.hemi = new THREE.HemisphereLight(0xdff0ff, 0xc9e8c0, 1.0);
    this.sun  = new THREE.DirectionalLight(0xfff0d8, 1.6);
    this.sun.position.set(-30, 45, 25);
    this.sun.castShadow = true;
  }

  // ---------------------------------------------------------------- enter
  enter(revisit: boolean): { christian: BearParts; hopeful: BearParts } {
    this.revisit = revisit;
    this.christianHP = 100;
    this.hopefulHP   = 100;
    this.keyPresses  = 0;
    this.dungeonStep = 0;
    this.dungeonReady = true;
    this.stormDark = 0;
    this.lightningFlash = 0;
    this.lightningTimer = 2.5;
    this.sleepT = 0;
    this.captureT = -1;
    this.escapeT = -1;
    this.tiringFactor = 1.0;
    this.signPlaced = false;
    this.choiceTriggered = false;
    this.stormTriggered = false;
    this.captureTriggered = false;

    if (!this.built) this.build();

    // HP bars are only ever shown while locked in the dungeon
    this.cb.battleUI(false);

    // reset rain visibility
    for (const r of this.rainDrops) r.mesh.visible = false;
    if (this.doorGlow)  this.doorGlow.visible = false;
    if (this.doorBars && !this.scene.children.includes(this.doorBars)) {
      this.scene.add(this.doorBars);
    }
    if (this.signMesh) this.signMesh.visible = false;
    this.giant.root.visible = false;
    this.diffidence.root.visible = false;

    // restore lighting
    this.hemi.intensity = 1.0;
    this.hemi.color.set(0xdff0ff);
    this.sun.intensity = 1.6;

    if (revisit) {
      this.phase = 'highway';
      this.christian.root.position.set(-15, 0, 0);
      this.hopeful.root.position.set(-17, 0, 0.8);
      this.cb.setObjective('🛤 Back on the King\'s Highway');
    } else {
      this.phase = 'enter';
      this.christian.root.position.set(-30, 0, 0);
      this.hopeful.root.position.set(-32, 0, 0.8);
      this.cb.setObjective('🪨 The King\'s Highway grows rocky — press east to push through');
    }
    this.christian.root.rotation.x = 0;
    this.hopeful.root.rotation.x   = 0;
    this.christian.root.rotation.y = -Math.PI / 2;
    this.hopeful.root.rotation.y   = -Math.PI / 2;

    return { christian: this.christian, hopeful: this.hopeful };
  }

  // ---------------------------------------------------------------- build
  private build(): void {
    this.built = true;
    const s = this.scene;

    s.background = new THREE.Color(0xacd6f5);
    s.fog = new THREE.Fog(0xacd6f5, 50, 130);

    s.add(this.hemi);
    s.add(this.sun);

    // ---- ambient ground ----
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(220, 32),
      mat(0xb5c98a),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(LIGHT_X / 2, 0, 0);
    s.add(ground);

    // ---- rocky King's Highway (x: WEST_EDGE to FORK_X) ----
    // road surface — matches the path colour used everywhere else
    const hwyRoad = new THREE.Mesh(new THREE.PlaneGeometry(Math.abs(FORK_X - WEST_EDGE) + 4, 4), mat(PALETTE.path));
    hwyRoad.rotation.x = -Math.PI / 2;
    hwyRoad.position.set((FORK_X + WEST_EDGE) / 2, 0.01, HWY_Z);
    s.add(hwyRoad);

    // ---- continued highway east of fork (sign → exit) ----
    const hwyEast = new THREE.Mesh(new THREE.PlaneGeometry(LIGHT_X - FORK_X + 4, 4), mat(PALETTE.path));
    hwyEast.rotation.x = -Math.PI / 2;
    hwyEast.position.set((FORK_X + LIGHT_X) / 2, 0.01, HWY_Z);
    s.add(hwyEast);

    // rocks along the whole highway — rough going from end to end
    const rockColors = [0x7a6e62, 0x6e6258, 0x8a7e72];
    const rng = (a: number, b: number) => a + Math.random() * (b - a);
    for (let i = 0; i < 60; i++) {
      const rx = rng(WEST_EDGE + 1, LIGHT_X - 1);
      const rz = (Math.random() < 0.5 ? -1 : 1) * rng(0.3, 1.8);
      const rw = rng(0.4, 1.2);
      const rh = rng(0.25, 0.8);
      const rd = rng(0.3, 1.0);
      const rock = block(rw, rh, rd, rockColors[i % 3], rx, rh / 2, rz);
      s.add(rock);
    }
    // a few rocks actually on the path (the difficult parts), scattered the full length
    const pathRockXs = [-28, -24, -19, -14, -9, -5, 4, 9, 15, 21, 27, 33];
    for (const px of pathRockXs) {
      const pz = (Math.random() < 0.5 ? -0.6 : 0.6);
      s.add(block(rng(0.5, 0.9), rng(0.3, 0.55), rng(0.4, 0.7), 0x7a6e62, px, 0.25, pz));
    }

    // ---- Bypath Meadow (z ≈ MEADOW_Z, x: FORK_X to SLEEP_X+8) ----
    const meadow = new THREE.Mesh(
      new THREE.PlaneGeometry(SLEEP_X - FORK_X + 12, 7),
      mat(0x80c46a),
    );
    meadow.rotation.x = -Math.PI / 2;
    meadow.position.set((FORK_X + SLEEP_X) / 2 + 2, 0.005, MEADOW_Z);
    s.add(meadow);

    // decorative flowers on meadow
    const flowerColors = [0xf4c2d4, 0xfff0a0, 0xe8d4f8];
    for (let i = 0; i < 30; i++) {
      const fx = rng(FORK_X + 1, SLEEP_X + 7);
      const fz = rng(MEADOW_Z - 2.8, MEADOW_Z + 2.8);
      s.add(block(0.18, 0.28, 0.18, flowerColors[i % 3], fx, 0.14, fz));
    }

    // ---- Fork sign (at x = FORK_X - 2) ----
    const forkSign = new THREE.Group();
    forkSign.add(block(0.12, 1.4, 0.12, 0x7a5c38, 0, 0.7, 0)); // post
    forkSign.add(block(1.8, 0.45, 0.14, 0xfff8ef, 0, 1.55, 0)); // board: highway
    forkSign.add(block(1.8, 0.45, 0.14, 0xd4e8b8, 0, 1.55, 0.28)); // board: meadow (green)
    forkSign.position.set(FORK_X - 2, 0, 1.4);
    s.add(forkSign);

    // ---- Doubting Castle exterior (a distant silhouette, well clear of the meadow/rain) ----
    const castleSt = 0x4a4440;
    const castleX  = SLEEP_X + 22; // far past the meadow, out of the storm's airspace
    const castleZ  = 26;           // set well back from the path so nothing looms over it

    // distant towers (large, placed far behind the meadow)
    s.add(block(5, 14, 5, castleSt, castleX,      7,  castleZ));
    s.add(block(5, 14, 5, castleSt, castleX + 12, 7,  castleZ));
    s.add(block(12, 4,  5, castleSt, castleX + 6,  13.5, castleZ)); // battlements connector
    s.add(block(14, 1,  5, 0x3a3430, castleX + 6,  16,   castleZ)); // parapet
    // castle gate facing south (toward road)
    s.add(block(3.5, 8, 5, 0x302c28, castleX + 6,  4, castleZ - 2));
    s.add(block(5.5, 1.6, 5, 0x3a3430, castleX + 6, 8.2, castleZ - 2));

    // ---- Exit light (chapter end beacon) ----
    const exitGlow = block(1.2, 3.5, 1.2, 0xfffcaa, LIGHT_X, 1.75, 0);
    (exitGlow.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xfffca0);
    (exitGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.9;
    s.add(exitGlow);
    s.add(new THREE.PointLight(0xfffce8, 2.4, 18), );
    const exitLight = s.children[s.children.length - 1] as THREE.PointLight;
    exitLight.position.set(LIGHT_X, 4, 0);

    // ---- Dungeon interior (at DUNGEON, far east) ----
    this.buildDungeon();

    // ---- Rain drops (pre-built, hidden until storm) ----
    this.buildRain();

    // ---- Characters ----
    s.add(this.christian.root);
    s.add(this.hopeful.root);
    s.add(this.giant.root);
    s.add(this.diffidence.root);
    this.giant.root.visible = false;
    this.diffidence.root.visible = false;

    // ---- Warning sign (built hidden) ----
    this.buildWarningSign();
  }

  private buildDungeon(): void {
    const d = DUNGEON;
    const STONE = 0x4a4a52;
    const DAMP  = 0x3a3a42;
    const s = this.scene;

    // floor + ceiling + walls
    s.add(block(18, 0.5, 12, DAMP,  d.x, -0.25, d.z));   // floor
    s.add(block(18, 0.5, 12, STONE, d.x, 6.25,  d.z));   // ceiling
    // back wall omitted so camera can look in from the north
    // NOTE: the south side is bars only (no solid wall) — Giant Despair stands
    // just beyond them, and a solid wall here would hide him completely
    s.add(block(0.5, 7,  12, STONE, d.x - 9, 3, d.z));   // west wall
    s.add(block(0.5, 7,  12, STONE, d.x + 9, 3, d.z));   // east wall

    // a small torch-lit antechamber beyond the bars, where Giant Despair and
    // Diffidence stand — enclosed so it doesn't just open onto bright sky
    // (which would backlight them into a silhouette). Walls here are a warm,
    // lighter stone than the cell itself, so Despair's dark fur reads as a
    // clear shape in contrast, instead of blending into equally-dark walls.
    const ANTE_WALL = 0x8a6a4a;
    const ANTE_FLOOR = 0x5c4632;
    s.add(block(18, 0.5, 4, ANTE_FLOOR, d.x, -0.25, d.z + 8));  // floor
    s.add(block(18, 0.5, 4, ANTE_WALL,  d.x, 6.25,  d.z + 8));  // ceiling
    s.add(block(0.5, 7,   4, ANTE_WALL, d.x - 9, 3, d.z + 8));  // west wall
    s.add(block(0.5, 7,   4, ANTE_WALL, d.x + 9, 3, d.z + 8));  // east wall
    s.add(block(18,  7,   0.5, ANTE_WALL, d.x, 3, d.z + 10));   // back wall

    // iron bars on the south face (door side)
    const IRON = 0x2a2a32;
    const bars = new THREE.Group();
    bars.position.set(d.x, 0, d.z + 5.7);
    for (let i = -3; i <= 3; i++) {
      bars.add(block(0.18, 6.5, 0.18, IRON, i * 1.05, 3.25, 0));
    }
    // horizontal cross-bars
    bars.add(block(7.5, 0.22, 0.22, IRON, 0, 2, 0));
    bars.add(block(7.5, 0.22, 0.22, IRON, 0, 4, 0));
    this.doorBars = bars;
    this.scene.add(bars);

    // a glowing keyhole / door glow
    const glow = block(0.55, 0.55, 0.55, 0xffe89a, d.x + 3.0, 2.2, d.z + 5.5);
    (glow.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffdc70);
    (glow.material as THREE.MeshLambertMaterial).emissiveIntensity = 1.4;
    glow.visible = false;
    this.doorGlow = glow;
    this.scene.add(glow);

    // dungeon point light (moody but readable blue)
    const pt = new THREE.PointLight(0x9db4e0, 3.4, 34);
    pt.position.set(d.x, 4.5, d.z);
    this.dungeonPt = pt;
    this.scene.add(pt);
    // second fill light near the door so faces read clearly on camera
    const pt2 = new THREE.PointLight(0xc9d8f0, 2.0, 20);
    pt2.position.set(d.x + 2, 4, d.z + 4);
    this.scene.add(pt2);
    // a warm torch-light positioned between the bars and Giant Despair, so it
    // lights his camera-facing side rather than leaving him a black silhouette
    // (raised to head height, since his scale is 2.4x — a low light would only
    // catch his legs and leave his head/shoulders dark)
    const pt3 = new THREE.PointLight(0xffcf8a, 10, 24);
    pt3.position.set(d.x + 0.5, 5.5, d.z + 6.0);
    this.scene.add(pt3);
    const pt4 = new THREE.PointLight(0xffd9a0, 6, 18);
    pt4.position.set(d.x + 0.5, 3, d.z + 6.0);
    this.scene.add(pt4);

    // some damp stones / puddles on dungeon floor
    this.scene.add(block(2.2, 0.08, 1.4, 0x52525a, d.x - 2, 0.01, d.z + 2));
    this.scene.add(block(1.4, 0.08, 1.0, 0x52525a, d.x + 2, 0.01, d.z - 1));
  }

  private buildRain(): void {
    const mat = new THREE.MeshBasicMaterial({ color: 0xaaccee, transparent: true, opacity: 0 });
    const geo = new THREE.BoxGeometry(0.06, 0.8, 0.06);
    for (let i = 0; i < 80; i++) {
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.position.set(
        FORK_X + Math.random() * (SLEEP_X - FORK_X + 6),
        Math.random() * 12 + 2,
        MEADOW_Z + (Math.random() - 0.5) * 14,
      );
      mesh.visible = false;
      this.scene.add(mesh);
      this.rainDrops.push({ mesh, spd: 8 + Math.random() * 4, x: mesh.position.x, z: mesh.position.z });
    }
  }

  private buildWarningSign(): void {
    const g = new THREE.Group();
    g.add(block(0.14, 1.6, 0.14, 0x7a5c38, 0, 0.8, 0));       // post
    g.add(block(2.4,  0.5, 0.16, 0xfff8ef, 0, 1.75, 0));        // board
    g.add(block(0.5,  0.5, 0.16, 0xe87070, -0.75, 1.75, 0.02)); // red X symbol
    g.position.set(SIGN_X, 0, 2.0);
    g.visible = false;
    this.signMesh = g;
    this.scene.add(g);
  }

  // ---------------------------------------------------------------- public API
  moveFactor(): number {
    switch (this.phase) {
      case 'enter':   return 0.45;   // rocky, hard going
      case 'meadow':  return 1.0;
      case 'storm': {
        const t = Math.max(0, this.tiringFactor);
        return t * 0.9;              // gradually slower
      }
      case 'escape':  return 1.6;    // sprinting!
      case 'highway': return 1.0;
      case 'sign':    return 0.8;
      case 'key':     return 0.7;    // shuffle to the glowing door and try the key
      default:        return 0;      // scripted / sleeping / dungeon
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;

    if (this.phase === 'enter') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, FORK_X - 0.5));
      p.z = Math.max(HWY_Z - 1.6, Math.min(p.z, HWY_Z + 1.6));
      // trigger choice when they reach the fork
      if (p.x >= FORK_X - 1.5) this.triggerChoice();
    }

    if (this.phase === 'meadow') {
      p.x = Math.max(FORK_X - 0.5, Math.min(p.x, SLEEP_X + 6));
      // lower bound reaches back to the highway's own range so there's no snap
      // the moment the choice is made — they simply keep walking where they are
      p.z = Math.max(HWY_Z - 1.6, Math.min(p.z, MEADOW_Z + 2.5));
      if (p.x >= STORM_X && this.phase === 'meadow') this.triggerStorm();
    }

    if (this.phase === 'storm') {
      p.x = Math.max(FORK_X, Math.min(p.x, SLEEP_X + 4));
      p.z = Math.max(MEADOW_Z - 3.5, Math.min(p.z, MEADOW_Z + 3.5));
    }

    if (this.phase === 'key') {
      p.x = Math.max(DUNGEON.x - 8, Math.min(p.x, DUNGEON.x + 8));
      p.z = Math.max(DUNGEON.z - 5, Math.min(p.z, DUNGEON.z + 5));
    }

    if (this.phase === 'escape') {
      p.x = Math.max(FORK_X - 2, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(HWY_Z - 2, Math.min(p.z, HWY_Z + 2));
      if (p.x >= LIGHT_X - 2) this.completeEscape();
    }

    if (this.phase === 'highway') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(HWY_Z - 1.8, Math.min(p.z, HWY_Z + 1.8));
      if (p.x >= SIGN_X - 0.5 && p.x <= SIGN_X + 2.5 && !this.signPlaced) {
        this.triggerSign();
      }
    }

    if (this.phase === 'sign') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(HWY_Z - 1.8, Math.min(p.z, HWY_Z + 1.8));
      if (p.x >= LIGHT_X - 2) this.triggerExit();
    }

    // Hopeful follows Christian with a slight lag
    const hpPos = this.hopeful.root.position;
    const hpTarget = p.clone().add(new THREE.Vector3(-1.6, 0, 0.8));
    if (this.phase === 'dungeon' || this.phase === 'sleep' || this.phase === 'key') {
      // Hopeful is in the dungeon cell with Christian — keep close
      hpPos.lerp(p.clone().add(new THREE.Vector3(-1.8, 0, 1.0)), 0.08);
    } else if (this.phase !== 'done') {
      hpPos.lerp(hpTarget, 0.08);
      this.hopeful.root.rotation.y = this.christian.root.rotation.y;
    }
  }

  nearDoor(): boolean {
    if (this.phase !== 'key') return false;
    const p = this.christian.root.position;
    return Math.hypot(p.x - (DUNGEON.x + 3), p.z - (DUNGEON.z + 4.5)) < 3.5;
  }

  pressKey(): void {
    if (!this.nearDoor()) return;
    this.keyPresses++;
    this.cb.blipSound();
    if (this.keyPresses === 1) {
      this.cb.playScript([
        { speaker: 'Christian', text: 'I have a key called Promise! I\'m trying it on the lock...' },
      ]);
    } else if (this.keyPresses === 2) {
      this.cb.playScript([
        { speaker: 'Christian', text: 'It\'s working — I can feel something turning!' },
        { speaker: 'Hopeful',   text: 'Keep going! Don\'t stop!' },
      ]);
    } else {
      this.cb.playScript([
        { speaker: 'Christian', text: 'The door swings open! Quick — follow me!' },
      ], () => this.beginEscape());
    }
    if (this.doorGlow) {
      (this.doorGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6 + this.keyPresses * 0.6;
    }
  }

  // ---------------------------------------------------------------- triggers
  private choiceTriggered = false;
  private triggerChoice(): void {
    if (this.choiceTriggered) return;
    this.choiceTriggered = true;
    this.phase = 'choice';

    this.cb.playScript([
      { speaker: 'Christian', text: 'This road is so rocky... my paws are aching.' },
      { speaker: 'Hopeful',   text: 'Look over there — a smooth green meadow path, running right alongside!' },
      { speaker: 'Christian', text: 'I think it leads the same way. Perhaps it\'s a perfectly good road too.' },
    ], () => {
      this.cb.showChoice(
        'Take the smooth Bypath Meadow',
        'Stay on the King\'s Highway',
        (pick) => {
          if (pick === 0) {
            this.goToMeadow('taken');
          } else {
            // Christian still talks himself into the meadow (it's the story)
            this.cb.playScript([
              { speaker: 'Hopeful', text: 'You\'re right, we should stay. But... it really does look much easier.' },
              { speaker: 'Christian', text: 'Actually — you know what, just a little way. We\'ll come back to the highway.' },
            ], () => this.goToMeadow('persuaded'));
          }
        },
      );
    });
  }

  private goToMeadow(reason: 'taken' | 'persuaded'): void {
    this.phase = 'meadow';
    this.cb.setObjective('🌿 Walking the smooth meadow path — how easy it feels!');
    if (reason === 'taken') {
      this.cb.playScript([
        { speaker: 'Christian', text: 'Wonderful! The ground is soft as velvet. We made a good choice.' },
        { speaker: 'Hopeful',   text: 'The path goes on for miles! This is so much nicer.' },
      ]);
    }
    // Christian and Hopeful stay exactly where they are and simply keep walking east —
    // no teleport onto the meadow.
  }

  private stormTriggered = false;
  private triggerStorm(): void {
    if (this.stormTriggered) return;
    this.stormTriggered = true;
    this.phase = 'storm';
    this.cb.setObjective('⛈ A violent storm — stay calm and keep moving east!');
    if (this.cb.setMusic) this.cb.setMusic('slough');
    this.cb.rumbleSound();

    this.cb.playScript([
      { speaker: 'Narrator',  text: 'Night falls suddenly. Thunder crashes above. Rain pours down in sheets.' },
      { speaker: 'Christian', text: 'Where is the path? I can\'t see anything!' },
      { speaker: 'Hopeful',   text: 'I can\'t find the way back to the highway... we\'re lost.' },
    ], () => {
      this.cb.setObjective('😴 So tired... keep walking, but the storm is overwhelming...');
    });

    // show rain
    for (const r of this.rainDrops) {
      r.mesh.visible = true;
      (r.mesh.material as THREE.MeshBasicMaterial).opacity = 0.7;
    }
  }

  private triggerSleep(): void {
    if (this.phase !== 'storm') return;
    this.phase = 'sleep';
    this.sleepT = 0;

    this.cb.playScript([
      { speaker: 'Narrator',  text: 'Utterly exhausted, the two pilgrims lie down in the field and fall fast asleep.' },
      { speaker: 'Narrator',  text: 'Early the next morning, a voice like rolling thunder shakes the ground.' },
    ], () => this.triggerCapture());
  }

  private captureTriggered = false;
  private triggerCapture(): void {
    if (this.captureTriggered) return;
    this.captureTriggered = true;
    this.captureT = 0;

    // show Giant Despair
    this.giant.root.visible = true;
    this.giant.root.position.set(
      this.christian.root.position.x + 4,
      0,
      this.christian.root.position.z - 2,
    );
    this.giant.root.rotation.y = Math.PI; // faces west toward pilgrims

    this.cb.playScript([
      { speaker: 'Giant Despair', text: 'What are YOU doing on MY land?! Trespassers! OFF my property!' },
      { speaker: 'Christian',     text: 'We wandered from the King\'s Highway in the storm... I\'m sorry.' },
      { speaker: 'Giant Despair', text: 'Sorry? SORRY?! Come with me. You\'re mine now.' },
    ], () => {
      if (this.cb.fade) {
        this.cb.fade(() => this.enterDungeon());
      } else {
        this.enterDungeon();
      }
    });
  }

  private enterDungeon(): void {
    this.phase = 'dungeon';
    this.dungeonStep = 0;
    this.dungeonReady = true;

    // move everyone to dungeon interior — Christian & Hopeful locked inside the cell,
    // Giant Despair and Diffidence stand just outside the bars, reaching in to beat them
    this.christian.root.position.copy(DUNGEON).add(new THREE.Vector3(-2, 0, 2));
    this.hopeful.root.position.copy(DUNGEON).add(new THREE.Vector3(-3.5, 0, 2.8));
    this.giant.root.position.copy(DUNGEON).add(new THREE.Vector3(0.5, 0, GIANT_Z));
    this.diffidence.root.visible = true;
    this.diffidence.root.position.copy(DUNGEON).add(new THREE.Vector3(-3.5, 0, GIANT_Z - 0.5));
    this.christian.root.rotation.y = 0;
    this.hopeful.root.rotation.y = 0.3;
    this.christian.root.rotation.x = 0;  // stand up straight — no longer lying asleep
    this.hopeful.root.rotation.x = 0;
    this.giant.root.rotation.y = 0;       // faces north, into the cell
    this.diffidence.root.rotation.y = 0;

    // dim the scene: dungeon is underground, but still clearly visible
    this.hemi.intensity = 0.6;
    this.hemi.color.set(0x8ea8d8);
    this.sun.intensity = 0;
    if (this.doorGlow) this.doorGlow.visible = true;

    // show HP bars
    this.cb.battleUI(true);
    this.cb.setHP(this.christianHP, this.hopefulHP);

    this.cb.setObjective('🏰 Locked in Doubting Castle — endure the darkness');
    this.cb.playScript([
      { speaker: 'Narrator',      text: 'They are thrown into a dark, cold dungeon. No food. No water. No light — except a faint glow near the door.' },
      { speaker: 'Diffidence',    text: '(whispering to her husband) Beat them every morning. And every night.' },
    ], () => { this.dungeonReady = true; });
  }

  private runDungeonStep(): void {
    if (!this.dungeonReady) return;
    this.dungeonReady = false;
    this.dungeonStep++;

    if (this.dungeonStep === 1) {
      // Day 1 beating
      this.christianHP = 68;
      this.hopefulHP   = 74;
      this.cb.setHP(this.christianHP, this.hopefulHP);
      this.cb.rumbleSound();
      this.beatingT = 2.4;
      this.cb.playScript([
        { speaker: 'Narrator',      text: 'The giant beats them mercilessly. Christian\'s paws ache. Hopeful can barely stand.' },
        { speaker: 'Christian',     text: 'This is my fault. I was the one who said to leave the highway. I\'m so sorry, Hopeful.' },
        { speaker: 'Hopeful',       text: 'Don\'t blame yourself. We both chose to go. And we\'re going to get out of here.' },
      ], () => { this.dungeonReady = true; });

    } else if (this.dungeonStep === 2) {
      // Despair's day 2 discouragement
      this.cb.playScript([
        { speaker: 'Giant Despair', text: 'No one has EVER escaped my castle. Do you understand that? No one. Ever.' },
        { speaker: 'Giant Despair', text: 'Your suffering will only get worse. Why not just... give up? Stop the pain?' },
        { speaker: 'Christian',     text: 'He\'s right. We\'ll never get out. Maybe it would be better to—' },
        { speaker: 'Hopeful',       text: 'Stop! The King brought us through the Valley of Shadow. He can bring us out of here too.' },
        { speaker: 'Hopeful',       text: 'We must keep trusting him. Don\'t give in to despair, Christian. Please.' },
      ], () => { this.dungeonReady = true; });

    } else if (this.dungeonStep === 3) {
      // Day 2 beating
      this.christianHP = 40;
      this.hopefulHP   = 52;
      this.cb.setHP(this.christianHP, this.hopefulHP);
      this.cb.rumbleSound();
      this.beatingT = 2.4;
      this.cb.playScript([
        { speaker: 'Narrator',      text: 'Another day. Another beating. Their strength is nearly gone.' },
        { speaker: 'Giant Despair', text: 'Still here? Then you must want more suffering. I can arrange that.' },
        { speaker: 'Diffidence',    text: 'Make them wish they had taken your advice while they still had the chance.' },
        { speaker: 'Hopeful',       text: 'Christian — do you remember what we\'ve seen? The Cross. The Palace. The scroll.' },
        { speaker: 'Hopeful',       text: 'The King did not bring us this far to leave us here. Hold on.' },
      ], () => { this.dungeonReady = true; });

    } else if (this.dungeonStep === 4) {
      // Christian remembers the key — transition to minigame
      this.cb.setObjective('🔑 Christian remembers! Try the Promise key on the door (press E near it)');
      this.doorGlow && (this.doorGlow.visible = true);
      this.cb.playScript([
        { speaker: 'Christian', text: 'Wait. WAIT. What a fool I have been!' },
        { speaker: 'Hopeful',   text: 'What? What is it?' },
        { speaker: 'Christian', text: 'I have a key — I\'ve had it all along! A key the King gave me, called Promise.' },
        { speaker: 'Christian', text: 'It is written: every Promise of the King will unlock any door in his kingdom!' },
        { speaker: 'Hopeful',   text: 'Try it on that lock over there — quickly, before the giant comes back!' },
      ], () => {
        this.phase = 'key';
        this.keyPresses = 0;
      });
    }
  }

  private beginEscape(): void {
    this.phase = 'escape';
    this.escapeT = 0;
    if (this.doorBars) this.scene.remove(this.doorBars);

    if (this.cb.fade) {
      this.cb.fade(() => this.placeOnHighway());
    } else {
      this.placeOnHighway();
    }
  }

  private placeOnHighway(): void {
    // restore full lighting
    this.hemi.intensity = 1.0;
    this.hemi.color.set(0xdff0ff);
    this.sun.intensity = 1.6;
    this.stormDark = 0;
    for (const r of this.rainDrops) r.mesh.visible = false;

    // back on the highway — stand up straight again
    this.christian.root.position.set(FORK_X - 3, 0, HWY_Z);
    this.hopeful.root.position.set(FORK_X - 5, 0, HWY_Z + 0.8);
    this.christian.root.rotation.x = 0;
    this.hopeful.root.rotation.x = 0;
    this.giant.root.visible = false;
    this.diffidence.root.visible = false;
    this.cb.battleUI(false);

    this.cb.setObjective('🏃 Run east along the King\'s Highway — get away from the castle!');
    this.cb.playScript([
      { speaker: 'Narrator',  text: 'The same key opens the castle doors and the outer gate. They flee into the morning light.' },
      { speaker: 'Hopeful',   text: 'We\'re out! Don\'t stop running — get back to the King\'s Highway!' },
    ], () => {
      this.christianHP = Math.min(100, this.christianHP + 25);
      this.hopefulHP   = Math.min(100, this.hopefulHP   + 25);
    });
  }

  private completeEscape(): void {
    if (this.phase !== 'escape') return;
    this.phase = 'highway';
    this.cb.setObjective('🛤 You made it back to the King\'s Highway — now leave a warning for others');
    if (this.cb.setMusic) this.cb.setMusic('cross');
    this.cb.playScript([
      { speaker: 'Christian', text: 'We\'re back on the King\'s Highway. Oh — I will never leave it again for an easier path.' },
      { speaker: 'Hopeful',   text: 'We should put a sign at the entrance to that meadow. So no one else makes our mistake.' },
    ]);
  }

  private triggerSign(): void {
    if (this.signPlaced) return;
    this.signPlaced = true;
    this.phase = 'sign';
    this.cb.setObjective('⚠️ Warning sign placed! Now continue east along the highway');
    if (this.signMesh) this.signMesh.visible = true;
    this.cb.playScript([
      { speaker: 'Narrator',  text: 'Christian carves a warning into a wooden board and plants it firmly at the meadow entrance.' },
      { speaker: 'Christian', text: 'BEWARE: Bypath Meadow leads to Doubting Castle. Keep to the King\'s Highway.' },
      { speaker: 'Hopeful',   text: 'Whoever reads this — may they be wiser than we were.' },
    ], () => {
      this.cb.setObjective('🌟 Walk east to the light — the road goes on!');
    });
  }

  private triggerExit(): void {
    if (this.phase !== 'sign') return;
    this.phase = 'done';
    this.cb.onComplete();
  }

  // ---------------------------------------------------------------- update
  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;

    const chr = this.christian;
    const hop = this.hopeful;

    // ---- storm darkness ----
    if (this.phase === 'storm') {
      this.stormDark = Math.min(1, this.stormDark + dt * 0.18);
      const dark = this.stormDark;
      this.hemi.intensity = THREE.MathUtils.lerp(1.0, 0.08, dark);
      this.hemi.color.set(new THREE.Color().lerpColors(new THREE.Color(0xdff0ff), new THREE.Color(0x202535), dark));
      this.sun.intensity = THREE.MathUtils.lerp(1.6, 0, dark);

      // tiring effect
      this.tiringFactor = Math.max(0, this.tiringFactor - dt * 0.04);

      // lightning
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        this.lightningTimer = 1.5 + Math.random() * 4;
        this.lightningFlash = 0.35;
        this.cb.rumbleSound();
      }

      // auto-sleep when too tired
      if (this.tiringFactor <= 0 && this.phase === 'storm') {
        this.triggerSleep();
      }
    }

    // lightning flash decay
    if (this.lightningFlash > 0) {
      this.lightningFlash = Math.max(0, this.lightningFlash - dt * 1.8);
      this.hemi.intensity += this.lightningFlash * 2.2;
    }

    // ---- rain ----
    if (this.phase === 'storm' || (this.phase === 'sleep' && this.sleepT < 1)) {
      for (const r of this.rainDrops) {
        r.mesh.position.y -= r.spd * dt;
        if (r.mesh.position.y < 0) {
          r.mesh.position.y = 11 + Math.random() * 3;
          r.mesh.position.x = r.x + (Math.random() - 0.5) * 6;
          r.mesh.position.z = r.z + (Math.random() - 0.5) * 6;
        }
      }
    }

    // ---- sleep / capture sequence ----
    if (this.phase === 'sleep') {
      this.sleepT += dt;
      // lie down
      const lieDown = Math.min(1, this.sleepT * 1.2);
      chr.root.rotation.x = lieDown * (Math.PI / 2);
      hop.root.rotation.x = lieDown * (Math.PI / 2) * 0.9;
    }

    // ---- dungeon phase steps ----
    if (this.phase === 'dungeon' && this.dungeonReady && this.dungeonStep < 4) {
      this.runDungeonStep();
    }

    // ---- key glow pulse ----
    if ((this.phase === 'key' || this.phase === 'dungeon') && this.doorGlow) {
      const glow = 1.2 + Math.sin(t * 3) * 0.5;
      (this.doorGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = glow;
    }

    // ---- escape animation ----
    if (this.phase === 'escape') {
      this.escapeT += dt;
    }

    // ---- character animations ----
    const walkPhases: Phase[] = ['enter', 'meadow', 'storm', 'escape', 'highway', 'sign', 'key'];
    const isWalking = walkPhases.includes(this.phase) && moving;
    animateBear(chr, t, isWalking);
    if (this.phase !== 'sleep') {
      animateBear(hop, t, isWalking);
    }

    // ---- rocky highway bump: a bumpy jolt underfoot as they cross the rough ground ----
    if (this.phase === 'enter') {
      const bump = Math.sin(chr.root.position.x * 1.7) * 0.05 + Math.sin(chr.root.position.x * 4.3) * 0.03;
      chr.root.position.y = Math.max(0, bump);
      hop.root.position.y = Math.max(0, Math.sin(hop.root.position.x * 1.7) * 0.05 + Math.sin(hop.root.position.x * 4.3) * 0.03);
    } else {
      chr.root.position.y = 0;
      hop.root.position.y = 0;
    }

    // Giant Despair idle sway (when visible, and only pre-dungeon — in the dungeon he faces in at 0)
    if (this.giant.root.visible && this.phase !== 'escape' && this.phase !== 'dungeon' && this.phase !== 'key') {
      this.giant.root.rotation.y = Math.PI + Math.sin(t * 0.6) * 0.15;
    }

    // Giant Despair beating Christian and Hopeful through the bars
    if (this.beatingT > 0) {
      this.beatingT = Math.max(0, this.beatingT - dt);
      const swing = Math.sin(t * 9) * 0.9 + 0.9; // 0..1.8, fast overhead swings
      this.giant.armR.rotation.x = -swing;
      this.giant.armL.rotation.x = -swing * 0.5;
      // lunge toward the bars on each downswing, then back
      const lunge = Math.max(0, Math.sin(t * 9));
      this.giant.root.position.z = DUNGEON.z + GIANT_Z - lunge * 0.8;
      this.giant.root.rotation.x = lunge * 0.12;
      if (this.beatingT === 0) {
        this.giant.armR.rotation.x = 0;
        this.giant.armL.rotation.x = 0;
        this.giant.root.rotation.x = 0;
        this.giant.root.position.z = DUNGEON.z + GIANT_Z;
      }
    }
  }
}
