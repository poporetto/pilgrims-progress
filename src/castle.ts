import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';
import { addHighwayPaving } from './road';

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
  | 'enter'       // rocky highway — slow movement east
  | 'choice'      // fork: paused, choice presented
  | 'meadow-walk' // scripted walk from the fork onto the meadow, control locked
  | 'meadow'      // easy bypath — walking east freely
  | 'storm'    // night falls, rain, thunder, tiring
  | 'sleep'    // fall asleep → captured → thrown in dungeon
  | 'dungeon'  // scripted daily imprisonment beats
  | 'key'      // Promise-key minigame: trace the cross to unlock the door
  | 'exit-door' // scripted: door swings open, then walk out through it
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
const LIGHT_X     =  72;   // highway: exit light / chapter end — well out past the
                            // sign, so the finale is a proper stretch of road, not a
                            // couple of steps

// how far off the road's centre line Christian & Hopeful can walk — kept
// safely inside the boundary rocks' nearest possible edge (see the boundary
// rock loop below) so they can never clip into/through them
const LANE_HALF_WIDTH = 1.4;

// interiors (placed far east on the same scene, like HALL / MINE patterns)
const DUNGEON = new THREE.Vector3(160, 0, 0);

// meadow z-centre
const MEADOW_Z = 6;
// highway z-centre
const HWY_Z = 0;
// how far outside the dungeon's bars (relative to DUNGEON.z) Giant Despair
// stands. Bars sit at DUNGEON.z + 5.7 — at his 2.4x scale his torso reaches
// roughly 0.7 units in front of his root, so this needs real clearance or
// the beating lunge visibly clips through the bars (see beatingT below).
const GIANT_Z = 8.5;

interface MinotaurBuildOpts {
  scale: number;
  fur: number;
  belly: number;
  horn: number;
  hornTip: number;
  eyeColor: number;
  wide?: boolean;       // broader shoulders (Despair)
  female?: boolean;     // Diffidence: robes, slimmer horns, braids
  cudgel?: boolean;
  emissive?: boolean;   // self-glow so they read in the dim dungeon
}

// Custom minotaur rig — same BearParts pivots as makeBear so animateBear still
// works, but without the bear ears / snout / cheeks fighting the bull sculpt.
function buildMinotaur(opts: MinotaurBuildOpts): BearParts {
  const root = new THREE.Group();
  const bodyW = opts.wide ? 1.08 : 0.96;
  const bodyD = opts.wide ? 0.74 : 0.64;

  const makeLeg = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.22 * side, 0.55, 0);
    pivot.add(block(0.32, 0.58, 0.36, opts.fur, 0, -0.29, 0));
    pivot.add(block(0.36, 0.15, 0.4, 0x2a2218, 0, -0.56, 0.02));
    root.add(pivot);
    return pivot;
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  const body = new THREE.Group();
  body.position.y = 0.55;
  root.add(body);

  body.add(block(bodyW, 0.82, bodyD, opts.fur, 0, 0.42, 0));
  body.add(block(bodyW * 0.72, 0.52, 0.14, opts.belly, 0, 0.4, bodyD * 0.42));
  body.add(block(0.56, 0.24, 0.5, opts.fur, 0, 0.9, 0));

  if (opts.female) {
    // layered burgundy robes instead of a bear dress shell
    const robe = 0x3d2430;
    body.add(block(0.98, 0.48, 0.7, robe, 0, 0.14, 0));
    body.add(block(1.02, 0.42, 0.72, robe, 0, 0.5, 0));
    body.add(block(0.54, 0.14, 0.08, 0x5a3545, 0, 0.7, 0.34));
  } else {
    // iron-studded leather harness across Despair's chest
    body.add(block(0.16, 0.92, 0.06, 0x3a2a18, 0, 0.52, 0.4));
    body.add(block(0.16, 0.92, 0.06, 0x3a2a18, 0.22, 0.52, 0.36));
    body.add(block(0.1, 0.1, 0.1, 0x6a5a3a, 0, 0.52, 0.44));
  }

  const makeArm = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.56 * side, 0.7, 0);
    pivot.add(block(0.3, 0.58, 0.32, opts.fur, 0, -0.24, 0));
    pivot.add(block(0.32, 0.14, 0.34, opts.belly, 0, -0.5, 0));
    if (!opts.female) {
      for (const cw of [-0.08, 0.08]) {
        const claw = block(0.05, 0.14, 0.05, 0xe0d8c8, cw, -0.58, 0.1);
        claw.rotation.x = 0.35;
        pivot.add(claw);
      }
    }
    body.add(pivot);
    return pivot;
  };
  const armL = makeArm(-1);
  const armR = makeArm(1);

  const head = new THREE.Group();
  head.position.set(0, opts.wide ? 0.92 : 0.98, opts.wide ? 0.08 : 0);
  body.add(head);

  // wide bull skull — no bear ears
  head.add(block(0.98, 0.78, 0.82, opts.fur, 0, 0.42, 0));
  // heavy brow ridge
  head.add(block(0.82, 0.12, 0.2, 0x2a1e14, 0, 0.72, 0.38));
  // broad muzzle
  const muzzle = opts.female ? 0x9a6c5a : 0x8b6848;
  head.add(block(0.58, 0.32, 0.22, muzzle, 0, 0.22, 0.5));
  for (const side of [-1, 1]) {
    head.add(block(0.1, 0.09, 0.05, 0x1a120c, 0.18 * side, 0.24, 0.64));
  }
  if (!opts.female) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.022, 8, 14), mat(0x8a8a92));
    ring.position.set(0, 0.24, 0.58);
    head.add(ring);
  }

  // horns — Despair's sweep wide; Diffidence's curl inward more delicately
  const hornSpread = opts.female ? 0.44 : 0.52;
  const hornH = opts.female ? 0.38 : 0.48;
  for (const side of [-1, 1]) {
    const horn = new THREE.Group();
    horn.add(block(0.28, hornH, 0.26, opts.horn, 0, 0.26, 0));
    const mid = block(0.2, hornH + 0.12, 0.2, opts.horn, 0, 0.68, 0.02);
    mid.rotation.z = (opts.female ? -0.42 : -0.3) * side;
    horn.add(mid);
    const tip = block(0.14, hornH, 0.14, opts.hornTip, 0, 1.02, 0.03);
    tip.rotation.z = (opts.female ? -0.72 : -0.55) * side;
    horn.add(tip);
    horn.position.set(hornSpread * side, 0.68, opts.female ? 0.02 : -0.02);
    horn.rotation.z = (opts.female ? 0.32 : 0.38) * side;
    head.add(horn);
  }

  // eyes — recessed under the brow
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(opts.female ? 0.036 : 0.042, 8, 8),
      new THREE.MeshBasicMaterial({ color: opts.eyeColor }),
    );
    eye.position.set(0.23 * side, 0.5, 0.42);
    head.add(eye);
  }

  if (opts.female) {
    // long braids and a copper torc
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const braid = block(0.1, 0.26, 0.11, 0x241713, side * 0.4, 0.66 - i * 0.22, -0.32);
        braid.rotation.z = 0.1 * side;
        head.add(braid);
      }
    }
    const torc = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 6, 12), mat(0xb66d3d));
    torc.rotation.x = Math.PI / 2;
    torc.position.set(0, 0.02, 0.24);
    head.add(torc);
  } else {
    // dark shaggy neck ruff (one clean ring, not scattered tufts)
    head.add(block(1.06, 0.22, 0.34, 0x1e150c, 0, 0.08, -0.38));
    head.add(block(0.28, 0.18, 0.2, 0x1e150c, -0.52, 0.12, -0.34));
    head.add(block(0.28, 0.18, 0.2, 0x1e150c, 0.52, 0.12, -0.34));
    // scar across one brow
    const scar = block(0.05, 0.3, 0.05, 0x7a3838, -0.28, 0.68, 0.44);
    scar.rotation.z = 0.55;
    head.add(scar);
    // iron pauldrons
    for (const side of [-1, 1]) {
      body.add(block(0.48, 0.34, 0.48, 0x2f2620, 0.64 * side, 1.02, 0));
      body.add(block(0.1, 0.1, 0.1, 0x6a5a3a, 0.64 * side, 1.16, 0.18));
    }
  }

  if (opts.cudgel) {
    const cg = new THREE.Group();
    cg.add(block(0.28, 1.9, 0.28, 0x3a2a18, 0, 0.1, 0));
    cg.add(block(0.55, 0.55, 0.55, 0x4a3222, 0, 1.05, 0));
    cg.add(block(0.62, 0.12, 0.62, 0x5a4a38, 0, 1.05, 0));
    cg.position.set(0.12, -0.68, 0.22);
    cg.rotation.z = 0.22;
    armR.add(cg);
  }

  root.scale.setScalar(opts.scale);

  if (opts.emissive) {
    root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      if ((mesh.material as THREE.Material).type !== 'MeshLambertMaterial') return;
      const src = mesh.material as THREE.MeshLambertMaterial;
      const own = src.clone();
      own.emissive = new THREE.Color(src.color).multiplyScalar(0.75);
      mesh.material = own;
    });
  }

  return { root, body, head, armL, armR, legL, legR };
}

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
  private doorHinge: THREE.Group | null = null;
  private doorWorldX = 0; // world x of the door gap's centre, set in buildDungeon()

  // door-exit animation (swing open, then walk through into the antechamber)
  private doorSwingT = 0;
  private exitWalkT = -1;
  private exitWalkFrom = new THREE.Vector3();
  private exitWalkTo = new THREE.Vector3();

  // exit beacon (a plain beam, matching the recent chapters' end light)
  private shining: ShiningLight | null = null;

  // animation timers
  private sleepT   = 0;
  private captureT = -1;
  private captureDialogueStarted = false;
  private captureGrabT = -1;
  private escapeT  = -1;
  private beatingT = 0; // >0 while Giant Despair is mid-beating animation
  private tiringFactor = 1.0; // movement scalar during storm (drops to 0)

  // sign group
  private signMesh: THREE.Group | null = null;
  private warnMark: THREE.Group | null = null;
  private scribbleT = 0;
  private signPlaced = false;

  // scripted walk from the fork onto the meadow (locked control)
  private meadowWalkT = 0;
  private meadowWalkFrom = new THREE.Vector3();
  private meadowWalkTo = new THREE.Vector3();

  // seconds remaining while Giant Despair & Diffidence walk off before the key attempt
  private giantLeaveT = -1;

  private revisit = false;
  private built   = false;

  constructor(cb: CastleCallbacks) {
    this.cb = cb;

    // Christian, armored as ever
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
    addPilgrimArmorDetails(this.christian);
    const sword = new THREE.Group();
    sword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0.55, 0));
    sword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, 0.04, 0));
    sword.position.set(0.16, -0.5, 0.14);
    this.christian.armR.add(sword);

    // Hopeful the young dog
    this.hopeful = makeBear({
      species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2,
    });

    // Giant Despair — a hulking bull-headed jailer, built as a custom minotaur
    // rig so the silhouette reads clearly through the dungeon bars.
    this.giant = buildMinotaur({
      scale: 2.4,
      fur: 0x3d2e1c,
      belly: 0x5a4530,
      horn: 0x4c3b27,
      hornTip: 0xd6c9a7,
      eyeColor: 0xff3020,
      wide: true,
      cudgel: true,
      emissive: true,
    });

    // Diffidence — his wife: leaner, robed, with paler horns and braids.
    this.diffidence = buildMinotaur({
      scale: 1.6,
      fur: 0x5c3a32,
      belly: 0x7a5548,
      horn: 0xb7a78f,
      hornTip: 0xe4d7bb,
      eyeColor: 0xffa040,
      female: true,
      emissive: true,
    });

    // lighting placeholders (populated in build())
    this.hemi = new THREE.HemisphereLight(0xdff0ff, 0xc9e8c0, 1.0);
    this.sun  = new THREE.DirectionalLight(0xfff0d8, 1.6);
    this.sun.position.set(-30, 45, 25);
    setupSunShadow(this.sun);
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
    this.captureDialogueStarted = false;
    this.captureGrabT = -1;
    this.escapeT = -1;
    this.tiringFactor = 1.0;
    this.signPlaced = false;
    this.meadowWalkT = 0;
    this.giantLeaveT = -1;
    this.choiceTriggered = false;
    this.stormTriggered = false;
    this.captureTriggered = false;

    if (!this.built) this.build();

    // HP bars are only ever shown while locked in the dungeon
    this.cb.battleUI(false);

    // reset rain visibility
    for (const r of this.rainDrops) r.mesh.visible = false;
    if (this.doorGlow)  this.doorGlow.visible = false;
    if (this.doorHinge) this.doorHinge.rotation.y = 0; // door starts closed
    this.doorSwingT = 0;
    this.exitWalkT = -1;
    this.scribbleT = 0;
    // the fork signpost stays; only its scribbled warning resets to hidden
    if (this.warnMark) this.warnMark.visible = false;
    this.giant.root.visible = false;
    this.diffidence.root.visible = false;

    // restore lighting
    this.hemi.intensity = 1.0;
    this.hemi.color.set(0xdff0ff);
    this.sun.intensity = 1.6;
    this.applySkyDarkness(0);

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
    // face east — the direction they'll be walking (rotation.y = π/2 ↔ world +x,
    // matching the atan2(mx, mz) convention used for movement facing below)
    this.christian.root.rotation.y = Math.PI / 2;
    this.hopeful.root.rotation.y   = Math.PI / 2;

    return { christian: this.christian, hopeful: this.hopeful };
  }

  // ---------------------------------------------------------------- build
  private build(): void {
    this.built = true;
    const s = this.scene;

    // pale-green sky + fog that matches the field, so the ground blends into the
    // horizon and no blue background shows behind the mountains of rock
    s.background = new THREE.Color(0xc4d9a4);
    s.fog = new THREE.Fog(0xc4d9a4, 60, 160);

    s.add(this.hemi);
    s.add(this.sun);

    // ---- ambient ground ----
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(260, 180),
      mat(0xb5c98a),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(LIGHT_X / 2, 0, 0);
    ground.receiveShadow = true;
    s.add(ground);

    // ---- rocky King's Highway (x: WEST_EDGE to FORK_X) ----
    // road surface — matches the path colour used everywhere else
    const hwyRoad = new THREE.Mesh(new THREE.PlaneGeometry(Math.abs(FORK_X - WEST_EDGE) + 4, 4), mat(PALETTE.path));
    hwyRoad.rotation.x = -Math.PI / 2;
    hwyRoad.position.set((FORK_X + WEST_EDGE) / 2, 0.01, HWY_Z);
    hwyRoad.receiveShadow = true;
    s.add(hwyRoad);

    // ---- continued highway east of fork (sign → exit) ----
    const hwyEast = new THREE.Mesh(new THREE.PlaneGeometry(LIGHT_X - FORK_X + 4, 4), mat(PALETTE.path));
    hwyEast.rotation.x = -Math.PI / 2;
    hwyEast.position.set((FORK_X + LIGHT_X) / 2, 0.01, HWY_Z);
    hwyEast.receiveShadow = true;
    s.add(hwyEast);

    // Small, irregular clusters along the shoulder. They deliberately leave
    // breaths of grass between them: a natural, Animal-Crossing-like rocky
    // verge rather than a continuous wall of identical blocks.
    const rockColors = [0x7a6e62, 0x6e6258, 0x8a7e72];
    const rng = (a: number, b: number) => a + Math.random() * (b - a);
    for (let i = 0; i < 26; i++) {
      const rx = rng(WEST_EDGE + 1, LIGHT_X - 1);
      const rz = (Math.random() < 0.5 ? -1 : 1) * rng(2.7, 5.2);
      const count = Math.random() < 0.45 ? 2 : 1;
      for (let r = 0; r < count; r++) {
        s.add(this.makeRock(rng(0.65, 1.35), rng(0.35, 0.85), rng(0.55, 1.15),
          rockColors[Math.floor(rng(0, rockColors.length))], rx + rng(-0.8, 0.8), rz + rng(-0.65, 0.65)));
      }
    }
    // A few landmark boulders set farther back frame the road without making
    // the walking lane feel fenced in.
    const BOUNDARY_Z = LANE_HALF_WIDTH + 0.55;
    const pathRockXs = [-27, -16, -4, 12, 29, 47, 63];
    for (const px of pathRockXs) {
      const pz = (Math.random() < 0.5 ? -1 : 1) * rng(BOUNDARY_Z + 0.6, BOUNDARY_Z + 1.8);
      s.add(this.makeRock(rng(0.7, 1.2), rng(0.4, 0.8), rng(0.6, 1.0), 0x7a6e62, px, pz));
    }

    // The highway is long, so a single flat plane reads as unfinished. Layer
    // irregular worn stones and little gravel seams over it; all are shallow
    // visual details and do not change Christian's walkable collision lane.
    const roadTones = [0xc9b993, 0xb9aa89, 0xd8c8a3, 0xa99d84];
    addHighwayPaving(s, WEST_EDGE - 1, LIGHT_X + 1, {
      width: 3.2,
      height: 0.075,
      yAt: () => 0.01,
      colors: roadTones,
    });
    // Broken cobbles gently define the shoulders without fencing the road in.
    for (const side of [-1, 1]) {
      for (let x = WEST_EDGE; x <= LIGHT_X; x += 2.6) {
        if (Math.random() < 0.22) continue;
        const cobble = this.makeRock(
          rng(0.34, 0.58), rng(0.12, 0.25), rng(0.3, 0.52),
          roadTones[Math.floor(rng(0, roadTones.length))],
          x + rng(-0.35, 0.35), side * rng(2.0, 2.28),
        );
        cobble.castShadow = false;
        s.add(cobble);
      }
    }

    // Dress the pale-green world beyond Bypath Meadow too. Patchwork turf,
    // voxel grasses, and small flower groups give the open land a cute,
    // lived-in storybook quality while keeping the centre highway clear.
    const fieldGreens = [0xa9c681, 0x9fbe78, 0xbdd399, 0x95b875];
    for (let i = 0; i < 52; i++) {
      const x = rng(WEST_EDGE - 5, LIGHT_X + 7);
      const z = (Math.random() < 0.5 ? -1 : 1) * rng(3.1, 17);
      // Leave the authored meadow and Doubting Castle silhouette untouched.
      if (x > FORK_X - 2 && x < SLEEP_X + 11 && z > 2.3 && z < 11) continue;
      if (x > 5 && x < 20 && z < -3 && z > -13) continue;
      const turf = block(rng(1.2, 3.4), 0.025, rng(0.8, 2.2),
        fieldGreens[i % fieldGreens.length], x, 0.018, z);
      turf.rotation.y = rng(-0.3, 0.3);
      turf.castShadow = false;
      s.add(turf);
      const blades = 2 + (i % 3);
      for (let b = 0; b < blades; b++) {
        s.add(block(
          0.08, rng(0.26, 0.52), 0.08,
          b % 2 ? 0x789f59 : 0x88ad63,
          x + rng(-0.8, 0.8), rng(0.14, 0.24), z + rng(-0.5, 0.5),
        ));
      }
    }
    const fieldFlowers = [0xf4c2d4, 0xffefa8, 0xc9dfff, 0xe6cff5];
    for (let i = 0; i < 16; i++) {
      const x = rng(WEST_EDGE - 2, LIGHT_X + 4);
      const z = (Math.random() < 0.5 ? -1 : 1) * rng(3.4, 12);
      if (x > FORK_X - 2 && x < SLEEP_X + 11 && z > 2.3) continue;
      for (let f = 0; f < 3; f++) {
        const fx = x + f * 0.28 + rng(-0.12, 0.12);
        const fz = z + (f % 2) * 0.25;
        s.add(block(0.06, 0.3, 0.06, 0x6d9f54, fx, 0.15, fz));
        s.add(block(0.18, 0.14, 0.18, fieldFlowers[(i + f) % fieldFlowers.length], fx, 0.35, fz));
      }
    }
    // A few low shrubs, chopped logs, and stumps break up the largest empty
    // stretches but stay well beyond the player's narrow movement bands.
    for (const [x, z] of [[-28, -7], [-19, 8], [-8, -9], [34, 8], [48, -8], [62, 7]] as const) {
      s.add(block(1.25, 0.58, 1.0, 0x89ae68, x, 0.29, z));
      s.add(block(0.75, 0.42, 0.72, 0x9bc078, x + 0.42, 0.62, z - 0.12));
    }
    for (const [x, z, rot] of [[-23, 6.8, 0.25], [39, -6.7, -0.3], [58, 8.4, 0.18]] as const) {
      const log = block(1.8, 0.42, 0.48, 0x9a7653, x, 0.28, z);
      log.rotation.y = rot;
      s.add(log);
      s.add(block(0.12, 0.5, 0.55, 0xc7a477, x - 0.86, 0.28, z));
    }

    // ---- Bypath Meadow (z ≈ MEADOW_Z, x: FORK_X to SLEEP_X+8) ----
    const meadow = new THREE.Mesh(
      new THREE.PlaneGeometry(SLEEP_X - FORK_X + 12, 7),
      mat(0x80c46a),
    );
    meadow.rotation.x = -Math.PI / 2;
    meadow.position.set((FORK_X + SLEEP_X) / 2 + 2, 0.005, MEADOW_Z);
    s.add(meadow);

    // a second, lusher grass patch layered over the base so the meadow reads
    // richer and greener than the plain plane
    const meadow2 = new THREE.Mesh(new THREE.PlaneGeometry(SLEEP_X - FORK_X + 8, 5.4), mat(0x74bd5e));
    meadow2.rotation.x = -Math.PI / 2;
    meadow2.position.set((FORK_X + SLEEP_X) / 2 + 2, 0.012, MEADOW_Z);
    s.add(meadow2);

    // ---- meadow dressing: flowers, tall grass, bushes, blossom trees ----
    const flowerColors = [0xf4c2d4, 0xfff0a0, 0xe8d4f8, 0xff9ec4, 0xaecbff, 0xffb865, 0xffffff];
    // clustered flowers, some tall (stem + bloom)
    for (let i = 0; i < 80; i++) {
      const fx = rng(FORK_X - 1, SLEEP_X + 9);
      const fz = rng(MEADOW_Z - 3.4, MEADOW_Z + 3.4);
      const col = flowerColors[Math.floor(Math.random() * flowerColors.length)];
      if (Math.random() < 0.4) {
        s.add(block(0.05, 0.34, 0.05, 0x5aa04a, fx, 0.17, fz));   // stem
        s.add(block(0.24, 0.2, 0.24, col, fx, 0.42, fz));          // bloom
      } else {
        s.add(block(0.2, 0.26, 0.2, col, fx, 0.13, fz));
      }
    }
    // tufts of tall grass
    for (let i = 0; i < 60; i++) {
      const gx = rng(FORK_X - 1, SLEEP_X + 9);
      const gz = rng(MEADOW_Z - 3.6, MEADOW_Z + 3.6);
      s.add(block(0.1, rng(0.3, 0.6), 0.1, Math.random() < 0.5 ? 0x67b552 : 0x7cc766, gx, 0.25, gz));
    }
    // little round bushes
    for (let i = 0; i < 10; i++) {
      const bx = rng(FORK_X, SLEEP_X + 8);
      const bz = MEADOW_Z + (Math.random() < 0.5 ? -1 : 1) * rng(2.6, 3.6);
      s.add(block(rng(1.0, 1.7), rng(0.7, 1.1), rng(1.0, 1.7), 0x66ab52, bx, 0.45, bz));
      s.add(block(rng(0.6, 1.0), rng(0.4, 0.7), rng(0.6, 1.0), 0x74bd5e, bx + rng(-0.4, 0.4), 0.9, bz + rng(-0.4, 0.4)));
    }
    // blossom trees along the meadow's far edge
    for (const tx of [FORK_X + 4, FORK_X + 12, SLEEP_X, SLEEP_X + 7]) {
      const tz = MEADOW_Z + rng(2.8, 4.2);
      const tree = new THREE.Group();
      tree.add(block(0.5, 2.0, 0.5, 0xb08a68, 0, 1.0, 0));
      tree.add(block(2.2, 1.5, 2.2, 0x74c060, 0, 2.5, 0));
      tree.add(block(1.4, 1.1, 1.4, 0x86cc6c, 0, 3.4, 0));
      // pink blossoms
      for (let b = 0; b < 6; b++) {
        const a = (b / 6) * Math.PI * 2;
        tree.add(block(0.24, 0.24, 0.24, 0xf9cdd8, Math.cos(a) * 0.95, 2.6 + Math.sin(a * 2) * 0.4, Math.sin(a) * 0.95));
      }
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }
    // a little pond at the meadow's edge, catching the eye
    const pond = new THREE.Mesh(new THREE.CircleGeometry(1, 18), mat(0x8fd0ea));
    pond.rotation.x = -Math.PI / 2;
    pond.scale.set(2.6, 1.8, 1);
    pond.position.set(SLEEP_X - 4, 0.02, MEADOW_Z + 3.0);
    s.add(pond);

    // ---- Fork sign (at x = FORK_X - 2) — a single weathered board. This is the
    // very post Christian later scribbles his warning onto (see triggerSign);
    // no second board is ever spawned. ----
    const forkSign = new THREE.Group();
    forkSign.add(block(0.12, 1.4, 0.12, 0x7a5c38, 0, 0.7, 0)); // post
    forkSign.add(block(1.8, 0.45, 0.14, 0xfff8ef, 0, 1.55, 0)); // board
    // the scribbled warning marks, hidden until Christian carves them
    const warn = new THREE.Group();
    warn.add(block(0.9, 0.08, 0.04, 0xb23a2a, 0, 1.62, 0.09));
    warn.add(block(0.7, 0.08, 0.04, 0xb23a2a, 0, 1.5, 0.09));
    const x1 = block(0.5, 0.08, 0.04, 0xb23a2a, 0.55, 1.55, 0.1); x1.rotation.z = 0.7;
    const x2 = block(0.5, 0.08, 0.04, 0xb23a2a, 0.55, 1.55, 0.1); x2.rotation.z = -0.7;
    warn.add(x1); warn.add(x2);
    warn.visible = false;
    forkSign.add(warn);
    forkSign.position.set(FORK_X - 2, 0, 1.4);
    s.add(forkSign);
    this.signMesh = forkSign;
    this.warnMark = warn;

    // ---- Doubting Castle exterior ----
    // NOTE: the game's camera looks down at a steep, fixed angle (offset
    // (0,13,13) — confirmed by projecting world points to NDC and by direct
    // screenshot testing), so its visible "sky"/background band is narrow.
    // A full-size castle placed at a truly distant depth (z ≳ 18-20 from the
    // road) falls entirely outside the frustum; this is the calibrated,
    // screenshot-verified spot and scale that stays on-screen.
    const CASTLE_X = FORK_X + 12;
    const CASTLE_Z = -7;
    this.buildDoubtingLandscape(CASTLE_X, CASTLE_Z);
    this.buildDoubtingCastleExterior(CASTLE_X, CASTLE_Z, 0.42);

    // ---- Exit light: the shining beacon that ends every chapter ----
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

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

  // Built at local-origin scale, then positioned+scaled as one group — the
  // camera's frustum here is unusually tight (steep fixed downward pitch,
  // confirmed by NDC projection testing), so a full-size castle placed at a
  // truly "distant" depth simply isn't visible; scaling the whole model down
  // lets it sit close enough to render while still reading as a real castle.
  private buildDoubtingCastleExterior(castleX: number, castleZ: number, scale: number): void {
    const g = new THREE.Group();
    // dark pastel palette — muted, dusky lavender-grey stone and a soft plum
    // roof, so Doubting Castle reads as gloomy-yet-storybook rather than harsh
    const STONE    = 0x6f6a80;
    const STONE_DK = 0x565270;
    const ROOF     = 0x7a5a70;

    // corner towers — cylindrical, with conical roofs and a crenellated ring
    for (const side of [-1, 1]) {
      const tx = 6 + side * 9;
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.7, 13, 12), mat(STONE));
      tower.position.set(tx, 6.5, 0);
      g.add(tower);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(3.1, 4.2, 12), mat(ROOF));
      roof.position.set(tx, 15.1, 0);
      g.add(roof);
      for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2;
        g.add(block(0.6, 0.9, 0.6, STONE_DK, tx + Math.cos(ang) * 2.5, 13.2, Math.sin(ang) * 2.5));
      }
    }

    // central keep, taller than the flanking towers, with a pyramid roof and flag
    g.add(block(7, 17, 7, STONE, 6, 8.5, 1));
    const keepRoof = new THREE.Mesh(new THREE.ConeGeometry(5.6, 5, 4), mat(ROOF));
    keepRoof.rotation.y = Math.PI / 4;
    keepRoof.position.set(6, 19.5, 1);
    g.add(keepRoof);
    g.add(block(0.15, 3, 0.15, 0x2a2015, 6, 23.5, 1));
    g.add(block(1.2, 0.7, 0.06, 0xc9535f, 6.65, 24.2, 1));

    // curtain wall linking the towers, crenellated along the top edge
    g.add(block(20, 7, 3, STONE, 6, 5.5, 0));
    for (let mx = -3; mx <= 15; mx += 1.6) {
      g.add(block(0.7, 1.0, 1.3, STONE_DK, mx, 9.5, 0));
    }

    // gatehouse facing south, toward the road, with a dark archway and portcullis
    g.add(block(4.4, 9, 4.4, STONE_DK, 6, 4.5, -2));
    g.add(block(3, 5.4, 3.2, 0x1c1610, 6, 2.7, -1.8));
    for (let i = -1; i <= 1; i++) {
      g.add(block(0.1, 4.8, 0.1, 0x161616, 6 + i, 2.5, -1.6));
    }
    g.add(block(3, 0.1, 0.1, 0x161616, 6, 4.7, -1.6)); // crossbar

    g.position.set(castleX, 0, castleZ);
    g.scale.setScalar(scale);
    this.scene.add(g);
  }

  // A moorland backdrop that makes the castle feel like it owns this stretch
  // of road: crags give it a horizon, dead trees suggest cursed ground, and
  // ruined walls guide the eye toward the keep without entering the play lane.
  private buildDoubtingLandscape(castleX: number, castleZ: number): void {
    const g = new THREE.Group();
    const CRAG = 0x5a5a58;
    const CRAG_DK = 0x403f42;
    const DEAD_WOOD = 0x382b27;

    // Layered rocky ridge behind the castle. Low-poly cones preserve the
    // chapter's friendly voxel language while bringing real depth to the sky.
    const ridge = [
      [-5, 3.5, 4.5], [2, 4.6, 5.2], [8, 3.2, 4.3], [14, 4.2, 5.3],
      [20, 3.4, 4.5], [27, 5.0, 5.6], [34, 3.0, 4.2],
    ] as const;
    for (const [x, h, r] of ridge) {
      const crag = new THREE.Mesh(new THREE.ConeGeometry(r, h, 6), mat(x % 2 === 0 ? CRAG : CRAG_DK));
      crag.position.set(castleX + x, h / 2 - 0.2, castleZ - 8.5 - Math.abs(x) * 0.035);
      crag.rotation.y = (x * 0.17) % Math.PI;
      g.add(crag);
      // A smaller broken peak stops the ridge reading as one regular row.
      if (x % 2 === 0) {
        const spur = new THREE.Mesh(new THREE.ConeGeometry(r * 0.42, h * 0.58, 5), mat(CRAG_DK));
        spur.position.set(castleX + x + r * 0.55, h * 0.29, castleZ - 7.7);
        g.add(spur);
      }
    }

    // Ruined boundary walls frame the keep. They are deliberately beyond the
    // road's z clamp, so they enrich the view without becoming collision props.
    for (const [x, z, len] of [[-13, -3.2, 5], [-7, -4.2, 3.5], [14, -3.4, 4], [20, -4.5, 3]] as const) {
      g.add(block(len, 0.9, 0.45, CRAG_DK, castleX + x, 0.45, castleZ + z));
      for (let c = 0; c < Math.floor(len); c += 1) {
        if (c % 2 === 0) g.add(block(0.35, 0.48, 0.45, CRAG, castleX + x - len / 2 + 0.35 + c, 1.12, castleZ + z));
      }
    }

    // Twisted leafless trees make the approach read as a bleak, neglected
    // estate. Their asymmetric branches look intentionally gnarled in voxel form.
    const trees = [[-9, -1.5, 2.7], [3, -2.1, 3.4], [18, -1.8, 2.4], [27, -2.7, 3.1]] as const;
    for (const [x, z, h] of trees) {
      const trunk = block(0.24, h, 0.24, DEAD_WOOD, castleX + x, h / 2, castleZ + z);
      trunk.rotation.z = x % 2 === 0 ? 0.14 : -0.14;
      g.add(trunk);
      for (const side of [-1, 1]) {
        const branch = block(0.16, h * 0.5, 0.16, DEAD_WOOD, castleX + x + side * 0.25, h * 0.76, castleZ + z);
        branch.rotation.z = -side * 0.75;
        branch.rotation.x = side * 0.22;
        g.add(branch);
      }
    }

    this.scene.add(g);
  }

  private buildDungeon(): void {
    const d = DUNGEON;
    const STONE = 0x4a4a52;
    const DAMP  = 0x3a3a42;
    const s = this.scene;

    // The exterior ground plane also crosses this far-away interior. Keep the
    // cell floor 0.03 units above it so the two coplanar surfaces cannot fight
    // for the same pixels when the camera looks down into the jail.
    const FLOOR_Y = -0.22; // 0.5-high block → surface at y = 0.03
    // floor + ceiling + walls
    s.add(block(18, 0.5, 12, DAMP,  d.x, FLOOR_Y, d.z)); // floor
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
    s.add(block(18, 0.5, 4, ANTE_FLOOR, d.x, FLOOR_Y, d.z + 8)); // floor
    s.add(block(18, 0.5, 4, ANTE_WALL,  d.x, 6.25,  d.z + 8));  // ceiling
    s.add(block(0.5, 7,   4, ANTE_WALL, d.x - 9, 3, d.z + 8));  // west wall
    s.add(block(0.5, 7,   4, ANTE_WALL, d.x + 9, 3, d.z + 8));  // east wall
    s.add(block(18,  7,   0.5, ANTE_WALL, d.x, 3, d.z + 10));   // back wall

    // iron bars on the south face (door side) — run the full width of the
    // cell (matching the side walls at d.x ± 9) so Christian and Hopeful are
    // fully enclosed, with a gap left for an actual door (below)
    const IRON = 0x2a2a32;
    const GAP_LO = 1.15, GAP_HI = 5.15; // clear span reserved for the door
    const bars = new THREE.Group();
    bars.position.set(d.x, 0, d.z + 5.7);
    for (let i = -8; i <= 8; i++) {
      const x = i * 1.05;
      if (x > GAP_LO - 0.2 && x < GAP_HI + 0.2) continue; // leave the door gap clear
      bars.add(block(0.18, 6.5, 0.18, IRON, x, 3.25, 0));
    }
    // horizontal cross-bars, split around the door gap
    for (const y of [1.6, 3.4, 5.2]) {
      const westLen = GAP_LO - (-8.75);
      bars.add(block(westLen, 0.22, 0.22, IRON, -8.75 + westLen / 2, y, 0));
      const eastLen = 8.75 - GAP_HI;
      bars.add(block(eastLen, 0.22, 0.22, IRON, GAP_HI + eastLen / 2, y, 0));
    }
    this.scene.add(bars);

    // the jail door itself — a studded wooden panel hinged at the gap's west
    // edge, swinging open into the antechamber when the Promise key succeeds
    const DOOR_W = GAP_HI - GAP_LO;
    const doorHinge = new THREE.Group();
    doorHinge.position.set(d.x + GAP_LO, 0, d.z + 5.7);
    const doorPanel = block(DOOR_W, 6.3, 0.16, 0x3a2a1a, DOOR_W / 2, 3.15, 0);
    doorHinge.add(doorPanel);
    for (const ry of [1.2, 3.15, 5.0]) {
      for (const rx of [0.5, DOOR_W / 2, DOOR_W - 0.5]) {
        doorHinge.add(block(0.14, 0.14, 0.06, IRON, rx, ry, 0.1));
      }
    }
    this.doorHinge = doorHinge;
    this.doorWorldX = d.x + GAP_LO + DOOR_W / 2;
    this.scene.add(doorHinge);

    // a glowing keyhole / door glow, on the door panel itself
    const glow = block(0.55, 0.55, 0.55, 0xffe89a, d.x + GAP_LO + 0.7, 2.2, d.z + 5.6);
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
    const pt3 = new THREE.PointLight(0xffcf8a, 12, 26);
    pt3.position.set(d.x + 0.5, 5.5, d.z + 7.8);
    this.scene.add(pt3);
    const pt4 = new THREE.PointLight(0xffd9a0, 7, 20);
    pt4.position.set(d.x + 0.5, 3, d.z + 7.8);
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

  // (No separate warning board is built any more — Christian carves his warning
  // onto the existing fork signpost; see the fork sign + triggerSign.)
  private buildWarningSign(): void { /* intentionally empty */ }

  // Low-poly, rounded boulder with a small moss cap. The faceting keeps the
  // storybook style while avoiding the old stacked-cube appearance.
  private makeRock(w: number, h: number, d: number, color: number, x: number, z: number): THREE.Object3D {
    const g = new THREE.Group();
    const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.62, 0), mat(color));
    stone.scale.set(w, h * 1.15, d);
    stone.position.y = h * 0.48;
    stone.rotation.set(Math.random() * 0.35, Math.random() * Math.PI, Math.random() * 0.25);
    g.add(stone);
    if (Math.random() < 0.38) {
      const moss = new THREE.Mesh(new THREE.DodecahedronGeometry(0.34, 0), mat(0x6f9d5a));
      moss.scale.set(w * 0.55, h * 0.25, d * 0.52);
      moss.position.set(-w * 0.12, h * 0.88, d * 0.02);
      moss.rotation.y = stone.rotation.y;
      g.add(moss);
    }
    g.position.set(x, 0, z);
    g.rotation.y = Math.random() * Math.PI * 0.5; // quarter-turn variety, staying axis-aligned-ish
    return g;
  }

  // ---------------------------------------------------------------- public API
  moveFactor(): number {
    switch (this.phase) {
      case 'enter':   return 0.45;   // rocky, hard going
      case 'meadow-walk': return 0;  // scripted — control is locked until they arrive
      case 'meadow':  return 1.0;
      // storm: a steady, slightly-heavy walking pace. Previously this scaled
      // by tiringFactor as it drained to 0, which made them appear to walk on
      // the spot; now they keep moving through the dark at a constant speed
      // until sleep is triggered by time/distance (see update()).
      case 'storm':   return 0.8;
      case 'escape':  return 1.6;    // sprinting!
      case 'highway': return 1.0;
      case 'sign':    return 0.8;
      case 'key':     return 0.7;    // shuffle to the glowing door and try the key
      case 'exit-door': return 0;    // scripted — door swing + walk-through
      default:        return 0;      // scripted / sleeping / dungeon
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;

    if (this.phase === 'enter') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, FORK_X - 0.5));
      p.z = Math.max(HWY_Z - LANE_HALF_WIDTH, Math.min(p.z, HWY_Z + LANE_HALF_WIDTH));
      // trigger choice when they reach the fork
      if (p.x >= FORK_X - 1.5) this.triggerChoice();
    }

    if (this.phase === 'meadow') {
      p.x = Math.max(FORK_X - 0.5, Math.min(p.x, SLEEP_X + 6));
      // keep them on the green: the scripted meadow-walk already placed them on
      // the meadow band (z ≈ MEADOW_Z), so clamp to the meadow's own width
      // rather than letting them wander back onto the highway
      p.z = Math.max(MEADOW_Z - 2.5, Math.min(p.z, MEADOW_Z + 2.5));
      if (p.x >= STORM_X && this.phase === 'meadow') this.triggerStorm();
    }

    if (this.phase === 'storm') {
      // wide open dark field — they keep walking, lost, until they tire out and
      // fall asleep (see tiringFactor in update()); the x bound is generous so
      // they never feel stopped by a wall while still wide awake
      p.x = Math.max(FORK_X, Math.min(p.x, SLEEP_X + 90));
      p.z = Math.max(MEADOW_Z - 3.5, Math.min(p.z, MEADOW_Z + 3.5));
    }

    if (this.phase === 'key') {
      p.x = Math.max(DUNGEON.x - 8, Math.min(p.x, DUNGEON.x + 8));
      p.z = Math.max(DUNGEON.z - 5, Math.min(p.z, DUNGEON.z + 5));
    }

    if (this.phase === 'escape') {
      p.x = Math.max(FORK_X - 2, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(HWY_Z - LANE_HALF_WIDTH, Math.min(p.z, HWY_Z + LANE_HALF_WIDTH));
      if (p.x >= LIGHT_X - 2) this.completeEscape();
    }

    if (this.phase === 'highway') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(HWY_Z - LANE_HALF_WIDTH, Math.min(p.z, HWY_Z + LANE_HALF_WIDTH));
      if (p.x >= SIGN_X - 0.5 && p.x <= SIGN_X + 2.5 && !this.signPlaced) {
        this.triggerSign();
      }
    }

    if (this.phase === 'sign') {
      p.x = Math.max(WEST_EDGE, Math.min(p.x, LIGHT_X - 0.5));
      p.z = Math.max(HWY_Z - LANE_HALF_WIDTH, Math.min(p.z, HWY_Z + LANE_HALF_WIDTH));
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
    return Math.hypot(p.x - this.doorWorldX, p.z - (DUNGEON.z + 4.5)) < 3.5;
  }

  // called by the drag-the-cross minigame in main.ts each time the player's
  // orb reaches a new arm of the cross — 4 arms, 4 stages
  advanceKeyStage(): void {
    if (this.phase !== 'key') return;
    this.keyPresses++;
    this.cb.blipSound();
    if (this.keyPresses === 1) {
      this.cb.playScript([
        { speaker: 'Christian', text: 'I have a key called Promise! I\'m tracing it along the sign...' },
      ]);
    } else if (this.keyPresses === 2) {
      this.cb.playScript([
        { speaker: 'Christian', text: 'It\'s working — I can feel something turning!' },
        { speaker: 'Hopeful',   text: 'Keep going! Don\'t stop!' },
      ]);
    } else if (this.keyPresses === 3) {
      this.cb.playScript([
        { speaker: 'Hopeful', text: 'Almost there — just a little further!' },
      ]);
    } else {
      this.cb.playScript([
        { speaker: 'Christian', text: 'The door swings open! Quick — follow me!' },
      ], () => this.beginDoorExit());
    }
    if (this.doorGlow) {
      (this.doorGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6 + this.keyPresses * 0.45;
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
    // a scripted walk onto the green — control is locked until they arrive
    this.phase = 'meadow-walk';
    this.meadowWalkT = 0;
    this.meadowWalkFrom.copy(this.christian.root.position);
    this.meadowWalkTo.set(FORK_X + 4, 0, MEADOW_Z);
    this.cb.setObjective('🌿 Stepping onto the smooth meadow path...');
    if (reason === 'taken') {
      this.cb.playScript([
        { speaker: 'Christian', text: 'Wonderful! The ground is soft as velvet. We made a good choice.' },
        { speaker: 'Hopeful',   text: 'The path goes on for miles! This is so much nicer.' },
      ]);
    }
  }

  private finishMeadowWalk(): void {
    this.phase = 'meadow';
    this.cb.setObjective('🌿 Walking the smooth meadow path — how easy it feels!');
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
      { speaker: '',  text: 'Night falls suddenly. Thunder crashes above. Rain pours down in sheets.' },
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

  private static readonly SKY_DAY = new THREE.Color(0xc4d9a4);
  private static readonly SKY_NIGHT = new THREE.Color(0x141c30);

  // darkens the sky background and fog to match the storm's lighting —
  // previously only hemi/sun dimmed, leaving the sky plane bright blue
  // even at full storm darkness
  private applySkyDarkness(dark: number): void {
    const sky = new THREE.Color().lerpColors(CastleScene.SKY_DAY, CastleScene.SKY_NIGHT, dark);
    (this.scene.background as THREE.Color).copy(sky);
    (this.scene.fog as THREE.Fog).color.copy(sky);
  }

  private triggerSleep(): void {
    if (this.phase !== 'storm') return;
    this.phase = 'sleep';
    this.sleepT = 0;

    this.cb.playScript([
      { speaker: '',  text: 'Utterly exhausted, the two pilgrims lie down in the field and fall fast asleep.' },
      { speaker: '',  text: 'Early the next morning, a voice like rolling thunder shakes the ground.' },
    ], () => this.triggerCapture());
  }

  private captureTriggered = false;
  private captureGiantStartX = 0;
  private triggerCapture(): void {
    if (this.captureTriggered) return;
    this.captureTriggered = true;
    this.captureT = 0;
    this.captureDialogueStarted = false;

    // it's a bright morning now — any rain still mid-fall from the night
    // before would otherwise hang frozen in the sunny sky once it stops animating
    for (const r of this.rainDrops) r.mesh.visible = false;

    // Giant Despair appears at a distance and strides in — a visible
    // abduction rather than a jump-cut straight to dialogue
    this.captureGiantStartX = this.christian.root.position.x + 14;
    this.giant.root.visible = true;
    this.giant.root.position.set(this.captureGiantStartX, 0, this.christian.root.position.z - 2);
    // rotation.y = -π/2 ↔ world -x: he's east of the sleeping pair and walks
    // toward -x to reach them, so this also faces him toward Christian
    this.giant.root.rotation.y = -Math.PI / 2;
    this.cb.rumbleSound();
  }

  private startCaptureDialogue(): void {
    this.cb.playScript([
      { speaker: 'Giant Despair', text: 'What are YOU doing on MY land?! Trespassers! OFF my property!' },
      { speaker: 'Christian',     text: 'We wandered from the King\'s Highway in the storm... I\'m sorry.' },
      { speaker: 'Giant Despair', text: 'Sorry? SORRY?! Come with me. You\'re mine now.' },
    ], () => {
      this.captureGrabT = 1.1;
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
    // rotation.y = π ↔ world -z: they stand at the higher-z antechamber side
    // and must face back toward the lower-z cell to look in at the prisoners
    // (and so their faces read on camera instead of the backs of their heads)
    this.giant.root.rotation.y = Math.PI;
    this.giant.armL.rotation.x = 0;       // reset from the grab animation
    this.diffidence.root.rotation.y = Math.PI;

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
      { speaker: '',      text: 'They are thrown into a dark, cold dungeon. No food. No water. No light — except a faint glow near the door.' },
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
        { speaker: '',      text: 'The giant beats them mercilessly. Christian\'s paws ache. Hopeful can barely stand.' },
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
        { speaker: '',      text: 'Another day. Another beating. Their strength is nearly gone.' },
        { speaker: 'Giant Despair', text: 'Still here? Then you must want more suffering. I can arrange that.' },
        { speaker: 'Diffidence',    text: 'Make them wish they had taken your advice while they still had the chance.' },
        { speaker: 'Hopeful',       text: 'Christian — do you remember what we\'ve seen? The Cross. The Palace. The scroll.' },
        { speaker: 'Hopeful',       text: 'The King did not bring us this far to leave us here. Hold on.' },
      ], () => { this.dungeonReady = true; });

    } else if (this.dungeonStep === 4) {
      // Giant Despair and Diffidence leave first — Christian only dares try
      // the key once they're gone
      this.cb.playScript([
        { speaker: 'Giant Despair', text: 'Enough for today. I\'m off to see to the other cells.' },
        { speaker: 'Diffidence',    text: 'Don\'t dawdle, dear — supper\'s waiting.' },
      ], () => {
        this.giantLeaveT = 1.3;
        this.cb.playScript([
          { speaker: 'Christian', text: 'Wait. WAIT. What a fool I have been!' },
          { speaker: 'Hopeful',   text: 'What? What is it?' },
          { speaker: 'Christian', text: 'I have a key — I\'ve had it all along! A key the King gave me, called Promise.' },
          { speaker: 'Christian', text: 'It is written: every Promise of the King will unlock any door in his kingdom!' },
          { speaker: 'Hopeful',   text: 'Try it on that lock over there — quickly, before he comes back!' },
        ], () => {
          this.cb.setObjective('🔑 Christian remembers! Go to the door and trace the Promise key along the cross');
          this.doorGlow && (this.doorGlow.visible = true);
          this.phase = 'key';
          this.keyPresses = 0;
        });
      });
    }
  }

  private beginDoorExit(): void {
    this.phase = 'exit-door';
    this.doorSwingT = 0;
    this.exitWalkT = -1;
    // the door is open now — hide the glowing keyhole marker so it doesn't hang
    // in mid-air once the panel swings away
    if (this.doorGlow) this.doorGlow.visible = false;
    this.cb.rumbleSound(); // the heavy door creaking open
  }

  private beginEscape(): void {
    this.phase = 'escape';
    this.escapeT = 0;

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
    this.applySkyDarkness(0);
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
      { speaker: '',  text: 'The same key opens the castle doors and the outer gate. They flee into the morning light.' },
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
    this.cb.setObjective('✍ Christian scratches a warning onto the old signpost');
    // he scribbles on the EXISTING fork signpost — no new board appears
    this.scribbleT = 2.4;
    this.christian.root.rotation.y = 0; // turn to face the post, just north of the road
    this.cb.playScript([
      { speaker: '',  text: 'Christian takes his knife to the old signpost at the meadow\'s mouth and scratches a warning deep into the weathered board.' },
      { speaker: 'Christian', text: 'BEWARE: Bypath Meadow leads to Doubting Castle. Keep to the King\'s Highway.' },
      { speaker: 'Hopeful',   text: 'Whoever reads this — may they be wiser than we were.' },
    ], () => {
      if (this.warnMark) this.warnMark.visible = true;
      this.scribbleT = 0;
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
      this.stormDark = Math.min(1, this.stormDark + dt * 0.28);
      const dark = this.stormDark;
      this.hemi.intensity = THREE.MathUtils.lerp(1.0, 0.08, dark);
      this.hemi.color.set(new THREE.Color().lerpColors(new THREE.Color(0xdff0ff), new THREE.Color(0x202535), dark));
      this.sun.intensity = THREE.MathUtils.lerp(1.6, 0, dark);
      this.applySkyDarkness(dark);

      // tiredness now only counts DOWN a sleep timer — it no longer slows their
      // pace (see moveFactor). It only advances while they are actually walking,
      // so the player walks a real stretch through the dark before sleep takes
      // them; if they stop pressing, they simply wait, wide awake, in the storm.
      if (moving) this.tiringFactor = Math.max(0, this.tiringFactor - dt * 0.13);

      // lightning
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        this.lightningTimer = 1.5 + Math.random() * 4;
        this.lightningFlash = 0.35;
        this.cb.rumbleSound();
      }

      // auto-sleep once they've walked long enough into the dark
      if (this.tiringFactor <= 0 && this.phase === 'storm') {
        this.triggerSleep();
      }
    }

    // ---- dawn: the storm's darkness lifts as morning comes and the giant arrives ----
    if (this.phase === 'sleep' && this.captureTriggered) {
      this.stormDark = Math.max(0, this.stormDark - dt * 1.2);
      const dark = this.stormDark;
      this.hemi.intensity = THREE.MathUtils.lerp(1.0, 0.08, dark);
      this.hemi.color.set(new THREE.Color().lerpColors(new THREE.Color(0xdff0ff), new THREE.Color(0x202535), dark));
      this.sun.intensity = THREE.MathUtils.lerp(1.6, 0, dark);
      this.applySkyDarkness(dark);
    }

    // lightning flash decay
    if (this.lightningFlash > 0) {
      this.lightningFlash = Math.max(0, this.lightningFlash - dt * 1.8);
      this.hemi.intensity += this.lightningFlash * 2.2;
    }

    // ---- rain ----
    if (this.phase === 'storm' || (this.phase === 'sleep' && this.sleepT < 1)) {
      // during the storm the rain recenters on Christian each drop, so the
      // downpour keeps following them across the widened dark field instead
      // of being left behind at its original fixed patch
      const cx = chr.root.position.x;
      const cz = chr.root.position.z;
      for (const r of this.rainDrops) {
        r.mesh.position.y -= r.spd * dt;
        if (r.mesh.position.y < 0) {
          r.mesh.position.y = 11 + Math.random() * 3;
          r.mesh.position.x = cx + (Math.random() - 0.5) * 16;
          r.mesh.position.z = cz + (Math.random() - 0.5) * 12;
        }
      }
    }

    // ---- scripted walk from the fork onto the meadow (control locked) ----
    if (this.phase === 'meadow-walk') {
      const DUR = 1.8;
      this.meadowWalkT = Math.min(DUR, this.meadowWalkT + dt);
      const p = this.meadowWalkT / DUR;
      const eased = p * p * (3 - 2 * p); // smoothstep
      chr.root.position.lerpVectors(this.meadowWalkFrom, this.meadowWalkTo, eased);
      chr.root.rotation.y = Math.atan2(
        this.meadowWalkTo.x - this.meadowWalkFrom.x,
        this.meadowWalkTo.z - this.meadowWalkFrom.z,
      );
      if (this.meadowWalkT >= DUR) this.finishMeadowWalk();
    }

    // ---- the jail door swings open, then they walk out through it ----
    if (this.phase === 'exit-door') {
      const SWING_DUR = 0.6;
      if (this.doorSwingT < SWING_DUR) {
        this.doorSwingT = Math.min(SWING_DUR, this.doorSwingT + dt);
        const p = this.doorSwingT / SWING_DUR;
        const eased = p * p * (3 - 2 * p);
        if (this.doorHinge) this.doorHinge.rotation.y = -Math.PI * 0.55 * eased;
        if (this.doorSwingT >= SWING_DUR) {
          this.exitWalkT = 0;
          this.exitWalkFrom.copy(chr.root.position);
          this.exitWalkTo.set(this.doorWorldX, 0, DUNGEON.z + 9);
        }
      } else if (this.exitWalkT >= 0) {
        const WALK_DUR = 1.3;
        this.exitWalkT = Math.min(WALK_DUR, this.exitWalkT + dt);
        const p = this.exitWalkT / WALK_DUR;
        const eased = p * p * (3 - 2 * p);
        chr.root.position.lerpVectors(this.exitWalkFrom, this.exitWalkTo, eased);
        chr.root.rotation.y = Math.atan2(
          this.exitWalkTo.x - this.exitWalkFrom.x,
          this.exitWalkTo.z - this.exitWalkFrom.z,
        );
        if (this.exitWalkT >= WALK_DUR) this.beginEscape();
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

    // ---- Giant Despair strides in before the capture dialogue starts ----
    if (this.captureTriggered && !this.captureDialogueStarted) {
      this.captureT += dt;
      const APPROACH = 1.8;
      const p2 = Math.min(1, this.captureT / APPROACH);
      const targetX = chr.root.position.x + 3;
      this.giant.root.position.x = THREE.MathUtils.lerp(this.captureGiantStartX, targetX, p2);
      animateBear(this.giant, t, true);
      if (p2 >= 1) {
        this.captureDialogueStarted = true;
        this.startCaptureDialogue();
      }
    }

    // ---- the grab: Giant Despair scoops up the sleeping pair before the fade ----
    if (this.captureGrabT > 0) {
      this.captureGrabT = Math.max(0, this.captureGrabT - dt);
      const p3 = 1 - this.captureGrabT / 1.1;
      this.giant.armL.rotation.x = -Math.min(1, p3 * 1.6) * 1.6;
      const lift = Math.min(1, p3 * 1.6);
      chr.root.position.y = lift * 1.1;
      hop.root.position.y = lift * 0.9;
      chr.root.rotation.x = (1 - lift) * (Math.PI / 2);
      hop.root.rotation.x = (1 - lift) * (Math.PI / 2) * 0.9;
      if (this.captureGrabT === 0) {
        if (this.cb.fade) {
          this.cb.fade(() => this.enterDungeon());
        } else {
          this.enterDungeon();
        }
      }
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

    // ---- exit beacon twinkle ----
    if (this.shining) animateShiningLight(this.shining, t);

    // ---- character animations ----
    const walkPhases: Phase[] = ['enter', 'meadow', 'storm', 'escape', 'highway', 'sign', 'key'];
    // the meadow walk-in is scripted (moveFactor is 0, so `moving` never goes
    // true) but should still show a walk cycle, not an idle pose
    const isWalking = (walkPhases.includes(this.phase) && moving) || this.phase === 'meadow-walk' ||
      (this.phase === 'exit-door' && this.exitWalkT >= 0);
    animateBear(chr, t, isWalking);
    if (this.phase !== 'sleep') {
      animateBear(hop, t, isWalking);
    }

    // ---- scribbling the warning onto the signpost (overrides the arm pose) ----
    if (this.scribbleT > 0) {
      this.scribbleT = Math.max(0, this.scribbleT - dt);
      // quick back-and-forth scratching motion of the right arm
      chr.armR.rotation.x = -1.4 + Math.sin(t * 22) * 0.5;
      chr.armR.rotation.z = Math.sin(t * 18) * 0.25;
      if (this.scribbleT === 0) { chr.armR.rotation.set(0, 0, 0); }
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

    // Giant Despair beating Christian and Hopeful through the bars — a
    // slower, weighted downward strike (rather than a frantic windmill), and
    // a shallow lunge that keeps his torso well clear of the bars at all
    // times (GIANT_Z gives him real standoff distance; only the swinging
    // arm/cudgel reaches toward the bar line)
    if (this.beatingT > 0) {
      this.beatingT = Math.max(0, this.beatingT - dt);
      const swing = Math.sin(t * 4.5) * 0.7 + 0.7; // 0..1.4, weighted overhead swings
      this.giant.armR.rotation.x = -swing;
      this.giant.armL.rotation.x = -swing * 0.5;
      // lean toward the bars on each downswing, then back — well short of
      // the bars themselves, which sit 2.8 units in front of his root
      const lunge = Math.max(0, Math.sin(t * 4.5));
      this.giant.root.position.z = DUNGEON.z + GIANT_Z - lunge * 0.4;
      this.giant.root.rotation.x = lunge * 0.1;
      if (this.beatingT === 0) {
        this.giant.armR.rotation.x = 0;
        this.giant.armL.rotation.x = 0;
        this.giant.root.rotation.x = 0;
        this.giant.root.position.z = DUNGEON.z + GIANT_Z;
      }
    }

    // Giant Despair & Diffidence turn and walk off into the antechamber
    // before Christian dares try the key
    if (this.giantLeaveT > 0) {
      this.giantLeaveT = Math.max(0, this.giantLeaveT - dt);
      const walk = 1 - this.giantLeaveT / 1.3; // 0 → 1
      // rotation.y = 0 ↔ world +z, matching the direction they actually walk
      // (deeper into the antechamber, away north from the cell) — previously
      // the facing (east) didn't match the motion (+z), so they crab-walked
      this.giant.root.rotation.y = 0;
      this.giant.root.position.z = DUNGEON.z + GIANT_Z + walk * 2.6;
      this.diffidence.root.rotation.y = 0;
      this.diffidence.root.position.z = DUNGEON.z + GIANT_Z - 0.5 + walk * 2.6;
      animateBear(this.giant, t, true);
      animateBear(this.diffidence, t, true);
      if (this.giantLeaveT === 0) {
        this.giant.root.visible = false;
        this.diffidence.root.visible = false;
      }
    }
  }
}
