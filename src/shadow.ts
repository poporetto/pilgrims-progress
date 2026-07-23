import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight } from './light';
import { DialogueLine } from './npcs';

// Chapter X — the Valley of the Shadow of Death.
// "Yea, though I walk through the valley of the shadow of death, I will
// fear no evil: for thou art with me." (Psalm 23:4)
// Near-total darkness. A path barely a stride wide, a bottomless ditch on
// one hand and a sucking quagmire on the other, and only a faint ring of
// light around Christian — which grows FAINTER at the valley's midst.
// Noises with no owners. A whisper that pretends to be his own thoughts.
// Then a voice ahead in the dark praying the 23rd Psalm; then dawn, which
// shows him every pit and snare he walked past blind; and at the valley's
// end — Faithful, the white sheep of his own home town, whose story fills
// four rooms of memory before the two walk on together.

interface ShadowCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  rumbleSound: () => void;
  blipSound: () => void;
  splashSound: () => void;
  setMusic?: (style: 'slough' | 'interpreter' | 'cross') => void;
  fade?: (mid: () => void) => void;
}

type Phase =
  | 'enter'      // the mouth of the valley
  | 'dark'       // the narrow path in the dark
  | 'whisper'    // parked: the voice at his ear
  | 'psalm'      // parked: the pilgrim heard ahead
  | 'dawnbreak'  // the light returns
  | 'lookback'   // parked: seeing what he passed
  | 'meet'       // parked: Faithful ahead
  | 'story1' | 'story2' | 'story3' | 'story4' // the four rooms of memory
  | 'return'     // back in the valley, morning
  | 'walkfinal'  // the two walk east to the light
  | 'done';

const WEST_EDGE = -30;
const LIGHT_X = 34;
const PATH_HALF = 1.1;   // the safe half-width of the path
const WHISPER_X = -10;
const PSALM_X = -1;
const DAWN_X = 10;
const FAITHFUL_X = 20;

// the house of memory, far off on the same scene
const HOUSE = new THREE.Vector3(200, 0, 0);

export class ShadowScene {
  scene = new THREE.Scene();
  phase: Phase = 'enter';
  private cb: ShadowCallbacks;
  private christian: BearParts;
  private faithful: BearParts;
  private faithfulJoined = false;
  private lamp: THREE.PointLight;
  private hemi: THREE.HemisphereLight | null = null;
  private groundMat: THREE.MeshLambertMaterial | null = null;
  private dawnP = 0;
  private sink = 0;
  private sinkWarned = false;
  private ditchWarned = false;
  private noiseTimer = 3;
  private storyFigures: BearParts[] = [];
  private splashes: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private shining: ShiningLight | null = null;
  private meetingDialogueStarted = false;
  private revisit = false;
  private built = false;

  constructor(cb: ShadowCallbacks) {
    this.cb = cb;
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

    // his little ring of light in the dark — kept in world space, offset
    // toward the camera so his face and the path ahead catch the glow
    this.lamp = new THREE.PointLight(0xffeec4, 22, 13);

    // Faithful — the white sheep from the City of Destruction
    this.faithful = makeBear({
      species: 'sheep', fur: 0xf3efe4, outfit: 'shirt', outfitColor: 0xa8c4a2,
    });
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0x0e1526); // deep night blue
    s.fog = new THREE.Fog(0x0e1526, 5, 20);

    this.hemi = new THREE.HemisphereLight(0x2a3450, 0x141a2c, 0.35);
    s.add(this.hemi);

    // a dedicated (uncached) material so the valley floor can lighten at dawn
    this.groundMat = new THREE.MeshLambertMaterial({ color: 0x2c3242 });
    const ground = new THREE.Mesh(new THREE.BoxGeometry(140, 1, 90), this.groundMat);
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);

    // the path: a single narrow line of pale stones
    for (let i = 0; i <= 62; i++) {
      const px = -30 + i * 1.05;
      const stone = block(0.9, 0.14, 1.6, 0x8a90a2, px, 0.07, 0);
      stone.castShadow = false;
      s.add(stone);
      // Pale centre chips keep the safe way legible even before dawn.
      if (i % 3 === 0) {
        const chip = block(0.34, 0.035, 0.42, i % 2 ? 0xaeb5c6 : 0x9fa8bb, px, 0.155, 0);
        chip.castShadow = false;
        s.add(chip);
      }
    }

    // the DITCH, north: a black gash beside the path
    for (let i = 0; i < 20; i++) {
      const px = -29 + i * 3.1;
      s.add(block(3.4, 0.06, 3.6, 0x05070f, px, 0.03, -3.4));
      s.add(block(3.6, 0.4, 0.5, 0x1a2032, px, 0.2, -1.7)); // crumbling lip
    }
    // the QUAGMIRE, south: pale sick mud
    for (let i = 0; i < 20; i++) {
      const px = -29 + i * 3.1;
      const mud = block(3.4, 0.12, 4.0, 0x3a3a30, px, 0.06, 3.6);
      mud.castShadow = false;
      s.add(mud);
      if (i % 3 === 0) s.add(block(0.3, 0.2, 0.3, 0x4a4a3c, px, 0.2, 3 + Math.random() * 1.5));
    }

    // Layered cliff walls frame the valley and give the darkness real depth.
    const cliffColors = [0x242b3d, 0x2d3448, 0x353d50];
    for (const side of [-1, 1]) {
      for (let i = 0; i < 13; i++) {
        const x = -28 + i * 5.1;
        const h = 2.8 + (i % 4) * 0.75;
        const crag = block(
          4.8, h, 2.6 + (i % 2) * 0.7, cliffColors[(i + (side > 0 ? 1 : 0)) % cliffColors.length],
          x, h / 2 - 0.1, side * (7.1 + (i % 3) * 0.45),
        );
        crag.rotation.y = side * ((i % 3) - 1) * 0.04;
        s.add(crag);
        if (i % 2 === 0) {
          s.add(block(1.2, 0.65, 1.1, 0x41495a, x + 1.1, 0.32, side * 5.65));
        }
      }
    }
    // Dead voxel trees, mire reeds, and dim mushrooms make the route feel
    // inhabited without obscuring the one-stride-wide path.
    for (const [x, z, h] of [
      [-25, -5.2, 2.7], [-16, 5.8, 2.2], [-7, -5.5, 3.1],
      [3, 5.6, 2.5], [12, -5.4, 2.8], [24, 5.5, 2.3],
    ] as const) {
      s.add(block(0.22, h, 0.22, 0x494757, x, h / 2, z));
      const branch = block(1.15, 0.16, 0.16, 0x494757, x + 0.28, h * 0.72, z);
      branch.rotation.z = z > 0 ? 0.42 : -0.42;
      s.add(branch);
    }
    for (let i = 0; i < 18; i++) {
      const x = -27 + i * 3.25;
      const side = i % 2 ? 1 : -1;
      s.add(block(0.08, 0.65 + (i % 3) * 0.18, 0.08, 0x596052, x, 0.34, side * 4.2));
      if (i % 3 === 0) {
        const cap = block(0.3, 0.16, 0.3, i % 2 ? 0xa9b6d2 : 0xc1b4d3, x + 0.45, 0.25, side * 2.85);
        const capMat = cap.material as THREE.MeshLambertMaterial;
        capMat.emissive = new THREE.Color(0x4d5268);
        capMat.emissiveIntensity = 0.45;
        s.add(cap);
      }
    }

    // the dangers he passes in the dark — invisible until dawn lights them
    for (const [dx, dz] of [[-22, -2.4], [-14, 2.3], [-8, -2.5], [-2, 2.5], [4, -2.3]] as const) {
      // snares and claw-traps
      s.add(block(0.7, 0.35, 0.7, 0x3f3b3a, dx, 0.18, dz));
      s.add(block(0.12, 0.6, 0.12, 0x4a4440, dx - 0.25, 0.5, dz));
      s.add(block(0.12, 0.6, 0.12, 0x4a4440, dx + 0.25, 0.5, dz));
    }
    for (const [bx, bz] of [[-18, 2.6], [-5, -2.6], [7, 2.4]] as const) {
      // old bones
      s.add(block(0.8, 0.18, 0.24, 0xb8b4a8, bx, 0.1, bz));
      s.add(block(0.42, 0.32, 0.36, 0xb8b4a8, bx + 0.6, 0.16, bz + 0.1));
    }
    // a hulking THING crouched by the ditch, mercifully asleep
    const lurker = new THREE.Group();
    lurker.add(block(2.2, 1.3, 1.6, 0x232838, 0, 0.65, 0));
    lurker.add(block(1.1, 0.9, 1.0, 0x1c2130, 1.2, 0.7, 0));
    lurker.add(block(0.2, 0.3, 0.1, 0x3a4258, 1.6, 0.9, -0.3));
    lurker.add(block(0.2, 0.3, 0.1, 0x3a4258, 1.6, 0.9, 0.3));
    lurker.position.set(-1, 0, -3.4);
    s.add(lurker);

    // Faithful waits near the valley's end, a pale shape in the young light
    this.faithful.root.position.set(FAITHFUL_X, 0, -0.4);
    this.faithful.root.rotation.y = Math.PI / 2;
    s.add(this.faithful.root);

    // ---------- the house of memory (Faithful's story) ----------
    const hall = new THREE.Group();
    hall.add(block(30, 0.6, 16, 0xeadfc9, 10, -0.3, 0));   // warm floor
    hall.add(block(30, 6, 0.8, 0xf3ead8, 10, 3, -8));
    hall.add(block(30, 6, 0.8, 0xf3ead8, 10, 3, 8));
    hall.add(block(0.8, 6, 16, 0xf3ead8, -5, 3, 0));
    hall.add(block(0.8, 6, 16, 0xf3ead8, 25, 3, 0));
    // A powder-blue runner joins the four memories as one journey.
    hall.add(block(28, 0.07, 2.2, 0xbfd7df, 10, 0.07, 1.65));
    hall.add(block(28, 0.035, 0.18, 0xf8e5a8, 10, 0.12, 0.65));
    hall.add(block(28, 0.035, 0.18, 0xf8e5a8, 10, 0.12, 2.65));
    // four alcoves along the north wall
    const alcoveColors = [0xded4ea, 0xd9e6c8, 0xc9dceb, 0xead9c8];
    for (let i = 0; i < 4; i++) {
      const ax = i * 7;
      hall.add(block(5.4, 0.1, 4.2, alcoveColors[i], ax, 0.06, -5.4));
      hall.add(block(0.5, 4.4, 0.5, 0xd8c8a8, ax - 2.6, 2.2, -6.8));
      hall.add(block(0.5, 4.4, 0.5, 0xd8c8a8, ax + 2.6, 2.2, -6.8));
      hall.add(block(5.6, 0.38, 0.55, 0xe6d6b4, ax, 4.25, -6.85));
      // Pastel wall panel and a small golden memory lamp.
      hall.add(block(3.4, 1.65, 0.12, alcoveColors[i], ax, 2.6, -7.52));
      const lamp = block(0.28, 0.38, 0.22, 0xffe9a3, ax, 4.0, -7.15);
      const lampMat = lamp.material as THREE.MeshLambertMaterial;
      lampMat.emissive = new THREE.Color(0xffd77a);
      lampMat.emissiveIntensity = 0.7;
      hall.add(lamp);
    }
    // Benches, book stacks, and potted greenery make the hall feel cared for.
    for (const x of [-2.3, 4.7, 11.7, 18.7, 23.4]) {
      hall.add(block(2.0, 0.28, 0.65, 0xb89470, x, 0.56, 5.1));
      hall.add(block(0.18, 0.75, 0.18, 0x8b684d, x - 0.72, 0.38, 5.1));
      hall.add(block(0.18, 0.75, 0.18, 0x8b684d, x + 0.72, 0.38, 5.1));
    }
    for (const x of [-3.5, 23.5]) {
      hall.add(block(0.72, 0.62, 0.72, 0xb9d8c0, x, 0.31, 5.8));
      hall.add(block(0.18, 1.0, 0.18, 0x789f68, x, 1.05, 5.8));
      hall.add(block(0.7, 0.48, 0.7, 0x91c27c, x, 1.55, 5.8));
    }
    hall.position.copy(HOUSE);
    s.add(hall);
    const hallLight = new THREE.PointLight(0xfff0cf, 2.8, 48);
    hallLight.position.set(HOUSE.x + 10, 5, 0);
    s.add(hallLight);
    for (let i = 0; i < 4; i++) {
      const alcoveLight = new THREE.PointLight(
        [0xe2d7f2, 0xe2efcf, 0xd6eaf5, 0xf2dfcc][i], 1.15, 10,
      );
      alcoveLight.position.set(HOUSE.x + i * 7, 3.4, -4.8);
      s.add(alcoveLight);
    }

    // the figures of Faithful's memory
    // 1 — Wanton, all charm
    const wanton = makeBear({ species: 'cat', fur: 0xe6cfc0, outfit: 'dress', outfitColor: 0xd97f8a });
    wanton.root.position.set(HOUSE.x + 0, 0.1, -5.2);
    // 2 — Adam the First, the old man… and Moses with his rod
    const adam = makeBear({ species: 'bear', fur: 0x9a8f7a, outfit: 'shirt', outfitColor: 0x8a7a5a, scale: 1.05 });
    adam.root.position.set(HOUSE.x + 6.2, 0.1, -5.4);
    const moses = makeBear({ species: 'bear', fur: 0xa89a8c, outfit: 'robe', outfitColor: 0x6a6a7a, scale: 1.1 });
    moses.root.position.set(HOUSE.x + 8.2, 0.1, -5.0);
    moses.armR.add(block(0.14, 1.6, 0.14, PALETTE.woodDark, 0.1, -0.4, 0.2)); // the rod
    moses.armR.rotation.x = -2.2; // raised to strike
    // 3 — Discontent, sour-faced
    const discontent = makeBear({ species: 'mouse', fur: 0xb8aa9c, outfit: 'shirt', outfitColor: 0x5a5a6a });
    discontent.root.position.set(HOUSE.x + 14, 0.1, -5.2);
    // 4 — Shame, big and sneering
    const shame = makeBear({ species: 'pig', fur: 0xf5b6c0, outfit: 'shirt', outfitColor: 0x6a4a62, scale: 1.15 });
    shame.root.position.set(HOUSE.x + 21, 0.1, -5.2);
    this.storyFigures = [wanton, adam, moses, discontent, shame];
    for (const f of this.storyFigures) {
      f.root.rotation.y = 0; // face south toward Christian
      this.scene.add(f.root);
    }

    // splash pool for the quagmire
    for (let i = 0; i < 10; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x4a4a3c, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), m);
      mesh.visible = false;
      s.add(mesh);
      this.splashes.push({ mesh, m, life: 1, vx: 0, vz: 0 });
    }

    // the shining light at the valley's end (the standard beacon)
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

    s.add(this.lamp);
    s.add(this.christian.root);
  }

  private applyDawn(dt: number): void {
    // everything after the psalm — dawn, the meeting, the house of memory,
    // and the morning walk out — plays in the light
    const stillDark = this.phase === 'enter' || this.phase === 'dark' ||
      this.phase === 'whisper' || this.phase === 'psalm';
    const target = stillDark ? 0 : 1;
    this.dawnP += (target - this.dawnP) * Math.min(dt * 0.6, 1);
    const night = new THREE.Color(0x0e1526);
    const morning = new THREE.Color(0xcfe4f2);
    const sky = night.clone().lerp(morning, this.dawnP);
    (this.scene.background as THREE.Color).copy(sky);
    const fog = this.scene.fog as THREE.Fog;
    fog.color.copy(sky);
    fog.near = 5 + this.dawnP * 30;
    fog.far = 20 + this.dawnP * 70;
    if (this.hemi) {
      this.hemi.intensity = 0.35 + this.dawnP * 0.75;
      this.hemi.color.set(this.dawnP > 0.5 ? 0xdfe9f2 : 0x2a3450);
    }
    if (this.groundMat) {
      this.groundMat.color.set(0x2c3242).lerp(new THREE.Color(0x7f9472), this.dawnP);
    }
    // his lamp: dimmest at the valley's midst, needless by day
    const p = this.christian.root.position;
    const midFade = p.x < 60
      ? THREE.MathUtils.clamp(1 - (p.x - WHISPER_X) / (PSALM_X - WHISPER_X), 0.45, 1)
      : 1;
    this.lamp.intensity = (22 * midFade) * (1 - this.dawnP);
    this.lamp.position.set(p.x, 2.4, p.z + 2.6);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.sink = 0;
    this.sinkWarned = false;
    this.ditchWarned = false;
    this.faithfulJoined = false;
    this.meetingDialogueStarted = false;
    this.dawnP = revisit ? 1 : 0;
    this.faithful.root.visible = !revisit;
    // Faithful may have followed Christian to the exit on an earlier run.
    // Always return him to his intended meeting point on a fresh entry.
    this.faithful.root.position.set(FAITHFUL_X, 0, -0.4);
    this.faithful.root.rotation.y = Math.PI / 2;
    this.christian.root.position.set(revisit ? -27 : -29, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('slough');
    if (revisit) {
      this.phase = 'done';
      this.cb.setObjective('🌫 The Valley of the Shadow, by daylight — every pit plainly seen');
    } else {
      this.phase = 'enter';
      this.cb.setObjective('🌑 The valley mouth swallows the road — keep to the path, whatever comes');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    if (this.phase === 'whisper' || this.phase === 'psalm' || this.phase === 'lookback' || this.phase === 'meet') return 0;
    return this.sink > 0.2 ? 0.4 : 1;
  }

  afterMove(dt: number): void {
    const p = this.christian.root.position;
    const inHouse = p.x > 100;
    if (inHouse) {
      p.x = THREE.MathUtils.clamp(p.x, HOUSE.x - 4, HOUSE.x + 24);
      p.z = THREE.MathUtils.clamp(p.z, -6.6, 6.6);
      p.y = 0.1;
      this.storyTriggers(p);
      return;
    }
    p.z = THREE.MathUtils.clamp(p.z, -4.4, 4.4);
    p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);

    // ---------- the ditch and the quagmire ----------
    const offPath = Math.abs(p.z) > PATH_HALF;
    const day = this.dawnP > 0.6;
    if (offPath && p.z < 0 && p.x < 12) {
      // the ditch: one step too far and the edge gives way
      if (p.z < -1.8) {
        this.cb.rumbleSound();
        p.z = 0;
        p.x = Math.max(WEST_EDGE + 1, p.x - 1.5);
        if (!this.ditchWarned) {
          this.ditchWarned = true;
          this.cb.playScript([
            { speaker: 'Christian', text: '*scrabbling back from the crumbling edge* The ground ENDS there — that\'s not shadow, that\'s a PIT with no bottom to it! Path. Stay on the path.' },
          ]);
        }
      }
    } else if (offPath && p.z > 0 && p.x < 12) {
      // the quagmire: it pulls slowly, then all at once
      this.sink = Math.min(1.3, this.sink + dt * 0.7);
      if (Math.random() < dt * 6) this.spawnSplash(p.x, p.z);
      if (this.sink >= 1.25) {
        this.cb.splashSound();
        this.sink = 0;
        p.z = 0;
        if (!this.sinkWarned) {
          this.sinkWarned = true;
          this.cb.playScript([
            { speaker: 'Christian', text: '*pulling himself out, dripping* That mud reached my knees, then my belt, all at once! There is only one narrow path, Christian. Stay on it.' },
          ]);
        }
      }
    } else {
      this.sink = Math.max(0, this.sink - dt * 2);
    }
    p.y = -this.sink * 0.55;

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    // ---------- story beats down the valley ----------
    if (this.phase === 'enter' && p.x > -26) {
      this.phase = 'dark';
      this.cb.playScript([
        { speaker: '', text: 'The darkness closes around him like deep water. The path is only one step wide, with a bottomless ditch on the left and deep mud on the right. His little light barely reaches beyond his paws.' },
        { speaker: 'Christian', text: '"Yea, though I walk through the valley of the shadow of death…" Keep saying it, Christian. Keep walking.' },
      ], () => {
        this.cb.setObjective('🌑 One stride wide — ditch on the left, mire on the right. Walk the line.');
      });
      return;
    }

    if (this.phase === 'dark' && p.x > WHISPER_X) {
      this.phase = 'whisper';
      this.cb.playScript([
        { speaker: '', text: 'The dark is full of sounds now — roars with no beast, chains with no prisoner, feet with no walker. And then, close against his ear, a whisper: soft, familiar, and utterly vile.' },
        { speaker: 'Christian', text: '…What… WHAT did I just—? That thought was never mine! I would never— *shudders* …would I?' },
        { speaker: '', text: 'So the enemy works in the dark: he whispers his own filth, and lets the pilgrim believe it came from his own heart.' },
        { speaker: 'Christian', text: 'I cannot fight what I cannot see. But I can still do the one thing the dark cannot stop — Lord, HELP me. Hold me on this path.' },
      ], () => {
        this.phase = 'psalm';
        window.setTimeout(() => this.runPsalm(), 400);
      });
      return;
    }

    if (this.phase === 'dawnbreak' && p.x > DAWN_X) {
      this.phase = 'lookback';
      this.christian.root.rotation.y = -Math.PI / 2; // turns to look back west
      this.cb.playScript([
        { speaker: '', text: 'And then — morning. Grey, then silver, then gold. For the first time, Christian sees the valley he has walked through.' },
        { speaker: 'Christian', text: '…Snares. Pits. A trap not two paces from where I stumbled. And — is that thing SLEEPING?! I walked past THAT?' },
        { speaker: 'Christian', text: 'I never saw any of it. Not one danger of the hundred… and not one of them touched me. You had me by the paw the whole night long, didn\'t You.' },
      ], () => {
        this.phase = 'meet';
        window.setTimeout(() => this.runMeeting(), 400);
      });
      return;
    }

    if (this.phase === 'walkfinal' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private runPsalm(): void {
    this.cb.playScript([
      { speaker: '', text: 'Then — a voice. Not behind, not beside: AHEAD, somewhere on the same path, steady as a heartbeat in the dark.' },
      { speaker: '???', text: '"…even though I walk through the darkest valley, I will not be afraid, because YOU are with me…"' },
      { speaker: 'Christian', text: 'Another pilgrim! Here, in this same night, on this same path — and unafraid enough to pray out loud!' },
      { speaker: 'Christian', text: 'Then God is here too — and I am not alone in the dark after all. Walk on, friend ahead. I\'m coming.' },
    ], () => {
      this.phase = 'dawnbreak';
      this.cb.setObjective('🌒 Follow the voice east — the dark cannot last forever');
    });
  }

  private runMeeting(): void {
    // Faithful runs to Christian first; dialogue fires once they meet
    this.meetingDialogueStarted = false;
  }

  private facePilgrimsTowardEachOther(): void {
    const c = this.christian.root.position;
    const f = this.faithful.root.position;
    this.christian.root.rotation.y = Math.atan2(f.x - c.x, f.z - c.z);
    this.faithful.root.rotation.y = Math.atan2(c.x - f.x, c.z - f.z);
  }

  private startMeetingDialogue(): void {
    this.meetingDialogueStarted = true;
    this.facePilgrimsTowardEachOther();
    this.cb.playScript([
      { speaker: '', text: 'And there, at the valley\'s end, stands the owner of the voice: a white sheep with a traveller\'s pack, squinting back up the path.' },
      { speaker: 'Faithful', text: 'Baa—! CHRISTIAN?! Of the City of Destruction? Neighbour, it\'s ME — Faithful! I told you our roads would meet past the dark places!' },
      { speaker: 'Christian', text: 'FAITHFUL! *nearly knocks him over* Yours was the voice in the valley! Your psalm walked me through that whole terrible night!' },
      { speaker: 'Faithful', text: 'And someone\'s footsteps behind me kept MY wool from turning grey, so we\'re even. Come, walk with me — and I\'ll tell you everything that\'s happened since you left home.' },
    ], () => {
      this.cb.fade?.(() => {
        this.christian.root.position.set(HOUSE.x - 2.5, 0.1, -1);
        this.christian.root.rotation.y = Math.PI / 2;
        this.faithful.root.position.set(HOUSE.x - 2.5, 0.1, 1.5);
        this.faithful.root.rotation.y = Math.PI / 2;
        this.cb.setMusic?.('interpreter');
      });
      this.phase = 'story1';
      window.setTimeout(() => {
        this.cb.playScript([
          { speaker: '', text: 'As Faithful talks, the road seems to fall away, and his story rises around them like rooms of a house — four memories, four doors.' },
        ], () => {
          this.cb.setObjective('🚪 Walk to the first alcove — the lady called Wanton');
        });
      }, 700);
    });
  }

  private storyTriggers(p: THREE.Vector3): void {
    const near = (ax: number) => Math.hypot(p.x - (HOUSE.x + ax), p.z - (-4.2)) < 2.6;
    if (this.phase === 'story1' && near(0)) {
      this.phase = 'story2';
      this.facePilgrimsTowardEachOther();
      this.cb.playScript([
        { speaker: 'Faithful', text: 'First, near the very start, a lady called WANTON. All smiles and soft words — promising every pleasure a young sheep could dream of, if only I\'d step off the road a while.' },
        { speaker: 'Christian', text: 'And you—?' },
        { speaker: 'Faithful', text: 'Shut my eyes, remembered whose I am, and WALKED. Some arguments, Christian, you don\'t win by debating. You win them with your legs.' },
      ], () => this.cb.setObjective('🚪 The second alcove — the old man and the rod'));
      return;
    }
    if (this.phase === 'story2' && near(7)) {
      this.phase = 'story3';
      this.facePilgrimsTowardEachOther();
      this.cb.playScript([
        { speaker: 'Faithful', text: 'Then at the foot of the hill, an old man: ADAM THE FIRST, of the town of Deceit. Offered me his whole estate and his three daughters for wages — the Lust of the Flesh, the Lust of the Eyes, and the Pride of Life.' },
        { speaker: 'Faithful', text: 'I\'ll be honest — part of me wanted to follow her. The moment I began to turn, Moses rushed up behind me like the wind. He knocked me down and showed me how badly I had broken the law.' },
        { speaker: 'Christian', text: 'Moses?! But why?' },
        { speaker: 'Faithful', text: 'Because that is all the Law can do, friend — it shows no mercy, because it HAS none to show. I\'d be lying there still, if One had not come by with holes in His paws and bidden him stop.' },
      ], () => this.cb.setObjective('🚪 The third alcove — sour Discontent'));
      return;
    }
    if (this.phase === 'story3' && near(14)) {
      this.phase = 'story4';
      this.facePilgrimsTowardEachOther();
      this.cb.playScript([
        { speaker: 'Faithful', text: 'In the Valley of Humiliation I met DISCONTENT. "Why suffer?" says he. "The valley is beneath you. Your friends back home would blush to see you in it."' },
        { speaker: 'Faithful', text: 'I told him: before honour is humility. The friends he spoke of never loved me — and the ones ahead never leave. He had no answer to that.' },
      ], () => this.cb.setObjective('🚪 The last alcove — the one called Shame'));
      return;
    }
    if (this.phase === 'story4' && near(21)) {
      this.phase = 'return';
      this.facePilgrimsTowardEachOther();
      this.cb.playScript([
        { speaker: 'Faithful', text: 'And last — the worst of the lot, though he has the friendliest face. SHAME. He never threatens, Christian. He only… smirks.' },
        { speaker: 'Faithful', text: '"Religion is unmanly," says he. "The clever people laugh at it. A tender conscience will embarrass you at every party in town."' },
        { speaker: 'Christian', text: 'That one has whispered at my ear too. He\'s harder to outrun than any lion.' },
        { speaker: 'Faithful', text: 'Yes — because Shame attacks us from INSIDE. I believed him many times before I understood: the world\'s laughter ends quickly, but the King\'s "well done" lasts forever. Decide whose approval matters most, and Shame loses his power.' },
        { speaker: '', text: 'The rooms of memory fade like morning mist — and the two pilgrims stand again on the valley road, in the broad light of day.' },
      ], () => {
        this.cb.fade?.(() => {
          this.dawnP = 1;
          this.christian.root.position.set(FAITHFUL_X + 1, 0, 0);
          this.christian.root.rotation.y = Math.PI / 2;
          this.faithful.root.position.set(FAITHFUL_X - 1.5, 0, 1.2);
          this.faithful.root.rotation.y = Math.PI / 2;
          this.faithfulJoined = true;
          this.cb.setMusic?.('cross');
        });
        this.phase = 'walkfinal';
        window.setTimeout(() => {
          this.cb.setObjective('🐑 Walk on east together, into the light');
        }, 700);
      });
      return;
    }
  }

  private spawnSplash(x: number, z: number): void {
    const d = this.splashes.find((sp) => sp.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 1.2;
    d.vz = (Math.random() - 0.5) * 1.2;
    d.mesh.position.set(x, 0.2, z);
    d.mesh.visible = true;
  }

  nearFaithful(): boolean {
    if (!this.faithful.root.visible) return false;
    if (!this.faithfulJoined && this.phase !== 'walkfinal' && this.phase !== 'done') return false;
    return this.christian.root.position.distanceTo(this.faithful.root.position) < 2.5;
  }
  talkFaithful(): void {
    this.facePilgrimsTowardEachOther();
    this.cb.playScript([
      { speaker: 'Faithful', text: 'Keep walking, friend — the Celestial City won\'t come looking for us.' },
    ]);
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    this.applyDawn(dt);
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // the unseen valley: noises in the dark
    if (this.dawnP < 0.4 && this.christian.root.position.x < 60 &&
        (this.phase === 'dark' || this.phase === 'dawnbreak' || this.phase === 'enter')) {
      this.noiseTimer -= dt;
      if (this.noiseTimer <= 0) {
        this.noiseTimer = 2.5 + Math.random() * 4;
        if (Math.random() < 0.6) this.cb.rumbleSound();
        else this.cb.blipSound();
      }
    }

    // Faithful: runs to Christian at 'meet', follows during story and walkfinal
    if (this.faithful.root.visible) {
      const inStory = this.phase === 'story1' || this.phase === 'story2' ||
        this.phase === 'story3' || this.phase === 'story4' || this.phase === 'return';
      if (this.faithfulJoined || inStory) {
        const p = this.christian.root.position;
        const wp = this.faithful.root.position;
        const dx = (p.x - 2.0) - wp.x;
        const dz = (p.z + 1.2) - wp.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.25) {
          const sp = Math.min(6.6, d * 2.5) * dt;
          wp.x += (dx / d) * sp;
          wp.z += (dz / d) * sp;
          this.faithful.root.rotation.y = Math.atan2(dx, dz);
          animateBear(this.faithful, t + 0.6, true);
        } else {
          animateBear(this.faithful, t + 0.6, false);
        }
      } else if (this.phase === 'meet' && !this.meetingDialogueStarted) {
        // Faithful runs toward Christian before dialogue fires
        const p = this.christian.root.position;
        const wp = this.faithful.root.position;
        const dx = p.x - wp.x;
        const dz = p.z - wp.z;
        const d = Math.hypot(dx, dz);
        // Stop outside the shared character-collision radius (≈1.44). The old
        // 1.4 trigger was unreachable: collision pushed Christian away before
        // this branch could ever start their meeting dialogue.
        if (d > 2.2) {
          const sp = Math.min(5.0, d * 2.0) * dt;
          wp.x += (dx / d) * sp;
          wp.z += (dz / d) * sp;
          this.faithful.root.rotation.y = Math.atan2(dx, dz);
          animateBear(this.faithful, t + 0.6, true);
        } else {
          animateBear(this.faithful, t + 0.6, false);
          this.startMeetingDialogue();
        }
      } else {
        animateBear(this.faithful, t + 0.6, false);
      }
    }

    // the figures of memory sway faintly, like pictures almost alive
    for (let i = 0; i < this.storyFigures.length; i++) {
      animateBear(this.storyFigures[i], t * 0.5 + i * 1.7, false);
    }

    for (const d of this.splashes) {
      if (d.life >= 1) continue;
      d.life = Math.min(1, d.life + dt * 2.4);
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.z += d.vz * dt;
      d.mesh.position.y += dt * (0.8 - d.life);
      d.m.opacity = 0.75 * (1 - d.life);
      if (d.life >= 1) d.mesh.visible = false;
    }

    // the shining light appears at the valley's end as dawn comes
    if (this.shining) {
      this.shining.group.visible = this.dawnP > 0.05;
      animateShiningLight(this.shining, t);
    }
  }
}
