import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';

// Chapter XI — Vanity Fair.
// On the highway Christian and Faithful fall in with Talkative — a monkey
// with tremendous ears and a tremendous vocabulary, whose religion lives
// entirely in his mouth. Exposed by Faithful's gentle questions, he throws
// a smoking-headed tantrum and dashes off. Then the road runs straight
// through VANITY FAIR: a riotously colourful city of stalls and hawkers
// selling everything the world has — and the two pilgrims, who will buy
// nothing but the truth, are mobbed, arrested and tried. Faithful will not
// deny his King: he is shoved by soldiers, burned at the stake — and
// carried straight up to the King in a chariot of light. Outside the walls
// a young onlooker named Hopeful, changed by what he saw, takes Faithful's
// place at Christian's side.

interface VanityCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  rumbleSound: () => void;
  blipSound: () => void;
  setMusic?: (style: 'cross' | 'fair' | 'sinai') => void;
  fade?: (mid: () => void) => void;
}

type Phase =
  | 'walk'       // the highway, Faithful alongside
  | 'talkative'  // parked: the smooth talker
  | 'tantrum'    // he jumps, smokes, and dashes off
  | 'toCity'     // on toward the gates
  | 'market'     // parked: "what will you buy?"
  | 'toEnd'      // through the rest of the fair
  | 'mob'        // parked: seized by the crowd
  | 'trial'      // the courtroom
  | 'shoving'    // the soldiers knock Faithful about
  | 'burning'    // the stake — and the chariot of light
  | 'back'       // outside the walls; Hopeful appears
  | 'joined'     // the two walk east to the light
  | 'done';

const WEST_EDGE = -34;
const LIGHT_X = 56;
const TALKATIVE_X = -18;
const CITY_X0 = -2;   // the west gate of the fair
const CITY_X1 = 32;   // the east gate
const MARKET_X = 8;   // "what will you buy?"
const MOB_X = 26;     // seized near the east end

// the courtroom, far off on the same scene
const COURT = new THREE.Vector3(120, 0, 0);

interface Wanderer {
  parts: BearParts;
  home: THREE.Vector3;
  target: THREE.Vector3;
  wait: number;
  moving: boolean;
}

export class VanityScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: VanityCallbacks;
  private christian: BearParts;
  private faithful: BearParts;
  private hopeful: BearParts;
  private hopefulJoined = false;
  private talkative: BearParts;
  private tantrumT = 0;
  private judge: BearParts;
  private soldiers: BearParts[] = [];
  private shoveT = 0;
  private burnT = 0;
  private stake: THREE.Group | null = null;
  private flames: THREE.Mesh[] = [];
  private ascendBeam: THREE.Mesh | null = null;
  private wanderers: Wanderer[] = [];
  private smoke: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private smokeTimer = 0;
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];
  private banners: THREE.Mesh[] = [];
  private shining: ShiningLight | null = null;
  private revisit = false;
  private built = false;

  constructor(cb: VanityCallbacks) {
    this.cb = cb;
    // Christian, armored, scroll in paw
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

    // Faithful the white sheep
    this.faithful = makeBear({
      species: 'sheep', fur: 0xf3efe4, outfit: 'shirt', outfitColor: 0xa8c4a2,
    });

    // Hopeful: a bright-eyed young dog of the fair
    this.hopeful = makeBear({
      species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2,
    });

    // ---------- Talkative the monkey ----------
    this.talkative = makeBear({
      species: 'bear', fur: 0x9a7250, outfit: 'shirt', outfitColor: 0xc9b0e0,
    });
    // ENORMOUS round ears
    for (const side of [-1, 1]) {
      this.talkative.head.add(block(0.44, 0.44, 0.12, 0x9a7250, 0.58 * side, 0.7, 0));
      this.talkative.head.add(block(0.28, 0.28, 0.08, 0xd9b492, 0.58 * side, 0.7, 0.06));
    }
    // a tan monkey face
    this.talkative.head.add(block(0.6, 0.46, 0.06, 0xd9b492, 0, 0.36, 0.415));
    // the long curvy tail, curling up behind him in three bends
    this.talkative.body.add(block(0.14, 0.14, 0.6, 0x9a7250, 0.15, 0.3, -0.6));
    this.talkative.body.add(block(0.14, 0.7, 0.14, 0x9a7250, 0.15, 0.68, -0.95));
    this.talkative.body.add(block(0.5, 0.14, 0.14, 0x9a7250, -0.05, 1.05, -0.95));
    this.talkative.body.add(block(0.14, 0.3, 0.14, 0x9a7250, -0.32, 0.92, -0.95));

    // ---------- the judge: a vast boar in a black robe and white wig ----------
    this.judge = makeBear({
      species: 'pig', fur: 0xc98a94, outfit: 'robe', outfitColor: 0x2e2a30, scale: 1.3,
    });
    this.judge.head.add(block(1.04, 0.3, 0.9, 0xf5f2ea, 0, 0.92, 0));  // the wig
    this.judge.head.add(block(0.26, 0.55, 0.26, 0xf5f2ea, -0.5, 0.6, 0.1));
    this.judge.head.add(block(0.26, 0.55, 0.26, 0xf5f2ea, 0.5, 0.6, 0.1));

    // three soldier-hounds of the fair
    for (let i = 0; i < 3; i++) {
      const s = makeBear({
        species: 'dog', fur: 0x8a7a66, outfit: 'shirt', outfitColor: 0x5a4a52,
      });
      s.head.add(block(1.0, 0.26, 0.84, 0x4a4440, 0, 0.9, 0)); // iron cap
      s.armR.add(block(0.1, 1.8, 0.1, PALETTE.woodDark, 0.08, -0.3, 0.16)); // pike
      s.armR.add(block(0.16, 0.3, 0.1, 0x8a8f98, 0.08, 0.68, 0.16));
      this.soldiers.push(s);
    }
  }

  // a fair-dweller: pigs, foxes, cats, dogs, mice, frogs, rabbits — never bears or sheep
  private makeCitizen(kind: number): BearParts {
    const brights = [0xe06a7a, 0xf2a83a, 0x7fb8d9, 0xa06ac9, 0x6ac98a, 0xe0c93a];
    const oc = brights[Math.floor(Math.random() * brights.length)];
    if (kind === 0) return makeBear({ species: 'pig', outfit: 'shirt', outfitColor: oc, scale: 0.95 });
    if (kind === 1) {
      // a fox
      const f = makeBear({ species: 'cat', fur: 0xd97f4a, outfit: 'shirt', outfitColor: oc, scale: 0.95 });
      f.head.add(block(0.2, 0.16, 0.14, 0xd97f4a, 0, 0.22, 0.5));
      f.body.add(block(0.2, 0.2, 0.2, 0xfaf6ec, 0.2, 0.62, -0.74));
      return f;
    }
    if (kind === 2) return makeBear({ species: 'cat', fur: [0xc8bfb4, 0x3f3b3a, 0xe6cfc0][Math.floor(Math.random() * 3)], outfit: Math.random() > 0.5 ? 'dress' : 'shirt', outfitColor: oc, scale: 0.95 });
    if (kind === 3) {
      return makeBear({
        species: 'dog', fur: [0xb98f66, 0x8a7a66, 0xd9b088][Math.floor(Math.random() * 3)],
        outfit: 'shirt', outfitColor: oc, scale: 0.95,
      });
    }
    if (kind === 4) return makeBear({ species: 'mouse', outfit: 'shirt', outfitColor: oc, scale: 0.85 });
    if (kind === 5) return makeBear({ species: 'frog', outfit: 'shirt', outfitColor: oc, scale: 0.92 });
    if (kind === 6) return makeBear({ species: 'rabbit', fur: [0xf0e8dc, 0xcaa878, 0x8a7a66][Math.floor(Math.random() * 3)], outfit: 'dress', outfitColor: oc, scale: 0.95 });
    // an extra cat variant, for still more faces in the crowd
    return makeBear({ species: 'cat', fur: [0xd6cfc2, 0x4a4642, 0xe0b088][Math.floor(Math.random() * 3)], outfit: 'shirt', outfitColor: oc, scale: 0.95 });
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xcfe8f5);
    s.fog = new THREE.Fog(0xcfe8f5, 42, 110);

    s.add(new THREE.HemisphereLight(0xf0f8ff, 0xc9d8b8, 1.1));
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.4);
    sun.position.set(-24, 40, 22);
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -60;
    sun.shadow.camera.right = 70;
    sun.shadow.camera.top = 55;
    sun.shadow.camera.bottom = -50;
    s.add(sun);

    const ground = new THREE.Mesh(new THREE.BoxGeometry(200, 1, 90), mat(0x93bb85));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);

    // highway stones outside the city, both sides
    for (let i = 0; i <= 30; i++) {
      const px = -33 + i * 3.0;
      if (px > CITY_X0 - 1 && px < CITY_X1 + 1) continue;
      const stone = block(0.9 + Math.random() * 0.5, 0.14, 1.7 + Math.random() * 0.6,
        PALETTE.path, px, 0.07, (Math.random() - 0.5) * 0.7);
      stone.castShadow = false;
      s.add(stone);
    }
    for (const [tx, tz, blossom] of [
      [-30, 8, true], [-24, -8, false], [-10, 8, false], [40, 8, true], [48, -8, false],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // ---------- VANITY FAIR: gaudy gates, cobbles, stalls, banners ----------
    const cobble = block(CITY_X1 - CITY_X0 + 2, 0.12, 15, 0xd9c9a8, (CITY_X0 + CITY_X1) / 2, 0.06, 0);
    cobble.castShadow = false;
    s.add(cobble);
    // gate arches at both ends
    for (const gx of [CITY_X0, CITY_X1]) {
      const gate = new THREE.Group();
      gate.add(block(1.0, 5.2, 1.0, 0xe06a7a, 0, 2.6, -4.4));
      gate.add(block(1.0, 5.2, 1.0, 0xe06a7a, 0, 2.6, 4.4));
      gate.add(block(1.2, 1.0, 9.8, 0xf2a83a, 0, 5.6, 0));
      gate.add(block(0.9, 0.6, 8.6, 0xa06ac9, 0, 6.3, 0));
      // pennants on the towers
      gate.add(block(0.1, 1.2, 0.1, PALETTE.woodDark, 0, 6.9, -4.4));
      gate.add(block(0.7, 0.4, 0.06, 0x6ac98a, 0.35, 7.2, -4.4));
      gate.add(block(0.1, 1.2, 0.1, PALETTE.woodDark, 0, 6.9, 4.4));
      gate.add(block(0.7, 0.4, 0.06, 0x7fb8d9, 0.35, 7.2, 4.4));
      gate.position.x = gx;
      s.add(gate);
    }

    // market stalls down both sides — striped canopies, heaped goods
    const canopies = [0xe06a7a, 0xf2a83a, 0x7fb8d9, 0xa06ac9, 0x6ac98a];
    const goods = [0xffd94a, 0xe0533a, 0x7fd9c9, 0xf2c9e0, 0xc9e06a];
    let stallIdx = 0;
    for (let sx = CITY_X0 + 4; sx < CITY_X1 - 2; sx += 4.6) {
      for (const side of [-1, 1]) {
        if ((stallIdx + (side > 0 ? 1 : 0)) % 3 === 2) continue; // leave gaps
        const c = canopies[stallIdx % canopies.length];
        const stall = new THREE.Group();
        stall.add(block(2.8, 0.9, 1.3, PALETTE.wood, 0, 0.45, 0));           // counter
        stall.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, -1.3, 1.1, -0.55));
        stall.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, 1.3, 1.1, -0.55));
        stall.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, -1.3, 1.1, 0.55));
        stall.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, 1.3, 1.1, 0.55));
        stall.add(block(3.3, 0.16, 1.9, c, 0, 2.3, 0));                       // canopy
        stall.add(block(3.3, 0.16, 0.5, 0xfaf6ec, 0, 2.42, side * 0.9));      // stripe (raised above canopy — was coplanar, causing flicker)
        // heaped wares
        for (let gI = 0; gI < 3; gI++) {
          stall.add(block(0.4 + Math.random() * 0.3, 0.35, 0.4, goods[(stallIdx + gI) % goods.length],
            -0.8 + gI * 0.8, 1.1, (Math.random() - 0.5) * 0.4));
        }
        stall.position.set(sx + (side > 0 ? 1.8 : 0), 0, side * 6.2);
        s.add(stall);
        stallIdx++;
      }
    }
    // tall crooked townhouses behind the stalls, painted every colour
    let hIdx = 0;
    for (let hx = CITY_X0 + 3; hx < CITY_X1; hx += 5.2) {
      for (const side of [-1, 1]) {
        const wall = canopies[(hIdx + 2) % canopies.length];
        const roof = canopies[(hIdx + 4) % canopies.length];
        const h = 3.4 + (hIdx % 3) * 0.9;
        const house = new THREE.Group();
        house.add(block(3.6, h, 3, 0xfaf3e3, 0, h / 2, 0));
        house.add(block(3.6, h * 0.45, 3, wall, 0, h * 0.225, 0.02));
        house.add(block(4.0, 1.0, 3.4, roof, 0, h + 0.5, 0));
        house.add(block(0.9, 1.1, 0.14, PALETTE.woodDark, 0, 0.55, side * -1.52));
        const win = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.1), new THREE.MeshBasicMaterial({ color: 0xffe9a0 }));
        win.position.set(0.9, h - 1, side * -1.52);
        house.add(win);
        house.position.set(hx + (side > 0 ? 2.2 : 0), 0, side * 11);
        s.add(house);
        hIdx++;
      }
    }
    // bunting strung across the street
    for (let bx = CITY_X0 + 5; bx < CITY_X1 - 2; bx += 6.5) {
      const line = block(0.06, 0.06, 13, 0x8a6f52, bx, 4.6, 0);
      line.castShadow = false;
      s.add(line);
      for (let f = 0; f < 7; f++) {
        const flag = new THREE.Mesh(
          new THREE.BoxGeometry(0.36, 0.42, 0.05),
          mat(canopies[(f + bx) % canopies.length]),
        );
        flag.position.set(bx, 4.35, -5.4 + f * 1.8);
        flag.castShadow = false;
        s.add(flag);
        this.banners.push(flag);
      }
    }
    // the fair's fountain, spouting golden coins (of course)
    const fountain = new THREE.Group();
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.7, 14), mat(0xb8b4a8));
    basin.position.y = 0.35;
    fountain.add(basin);
    fountain.add(block(0.4, 1.6, 0.4, 0xb8b4a8, 0, 1.2, 0));
    fountain.add(block(0.5, 0.24, 0.5, 0xffd94a, 0, 2.1, 0));
    fountain.position.set(17, 0, 0.2);
    s.add(fountain);

    // ---------- the citizens of the fair ----------
    for (let i = 0; i < 14; i++) {
      const parts = this.makeCitizen(Math.floor(Math.random() * 8));
      const home = new THREE.Vector3(
        CITY_X0 + 3 + Math.random() * (CITY_X1 - CITY_X0 - 6),
        0, (Math.random() - 0.5) * 8,
      );
      parts.root.position.copy(home);
      parts.root.rotation.y = Math.random() * Math.PI * 2;
      s.add(parts.root);
      this.wanderers.push({
        parts, home, target: home.clone(), wait: Math.random() * 4, moving: false,
      });
    }

    // Talkative waits by the road, mid-monologue already
    this.talkative.root.position.set(TALKATIVE_X + 2, 0, -1.8);
    this.talkative.root.rotation.y = -Math.PI / 2;
    s.add(this.talkative.root);

    // Faithful & Hopeful
    this.faithful.root.position.set(-33, 0, 1.4);
    s.add(this.faithful.root);
    this.hopeful.root.visible = false;
    s.add(this.hopeful.root);

    // ---------- the courtroom ----------
    const court = new THREE.Group();
    court.add(block(24, 0.6, 18, 0x9a8f86, 0, -0.3, 0));           // floor
    // three walls only — the south side stays open so the camera can see in
    court.add(block(24, 6.5, 0.8, 0x8a7a72, 0, 3.25, -9));
    court.add(block(0.8, 6.5, 18, 0x8a7a72, -12, 3.25, 0));
    court.add(block(0.8, 6.5, 18, 0x8a7a72, 12, 3.25, 0));
    court.add(block(24, 0.5, 0.6, 0x8a7a72, 0, 0.25, 9)); // just a low kerb
    // the judge's towering bench
    court.add(block(6, 2.6, 2.2, PALETTE.woodDark, 0, 1.3, -6.4));
    court.add(block(6.6, 0.4, 2.6, 0x5e4a38, 0, 2.8, -6.4));
    // the dock where Faithful stands — on the LEFT of the room, beside the stake
    court.add(block(2.2, 1.0, 2.2, PALETTE.wood, -5, 0.5, -1));
    court.add(block(2.5, 0.2, 2.5, 0x8a6f52, -5, 1.05, -1));
    // gallery benches on the right, where the crowd sits
    for (let b = 0; b < 4; b++) {
      court.add(block(9, 0.5, 1.0, PALETTE.wood, 4, 0.25, 2.0 + b * 2.0));
    }
    // the stake and its woodpile, dreadfully ready in the corner
    const stake = new THREE.Group();
    stake.add(block(0.3, 3.4, 0.3, PALETTE.woodDark, 0, 1.7, 0));
    for (let w = 0; w < 6; w++) {
      const logB = block(1.2, 0.24, 0.24, 0x8a6f52, 0, 0.15, 0);
      logB.rotation.y = (w / 6) * Math.PI;
      stake.add(logB);
    }
    stake.position.set(-6.5, 0, -3.5);
    court.add(stake);
    this.stake = stake;
    court.position.copy(COURT);
    s.add(court);
    // green ground under and around the courtroom, so the blue sky no longer
    // shows below it (the main fair ground doesn't reach this far east)
    const courtGround = new THREE.Mesh(new THREE.BoxGeometry(80, 1, 80), mat(0x93bb85));
    courtGround.position.set(COURT.x, -0.65, COURT.z);
    courtGround.receiveShadow = true;
    s.add(courtGround);
    const courtLight = new THREE.PointLight(0xffe9c0, 1.6, 40);
    courtLight.position.set(COURT.x, 5.5, 0);
    s.add(courtLight);
    // flames, hidden until the sentence is carried out
    for (let i = 0; i < 8; i++) {
      const fm = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.7, 0.4),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xff8a3d : 0xffc23a, transparent: true, opacity: 0.9 }),
      );
      fm.position.set(
        COURT.x - 6.5 + (Math.random() - 0.5) * 1.1,
        0.4 + Math.random() * 0.4,
        -3.5 + COURT.z + (Math.random() - 0.5) * 1.1,
      );
      fm.visible = false;
      s.add(fm);
      this.flames.push(fm);
    }
    // the beam that carries Faithful home
    const ab = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.6, 26, 16, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0xfff6d0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, fog: false,
      }),
    );
    ab.position.set(COURT.x - 6.5, 13, COURT.z - 3.5);
    s.add(ab);
    this.ascendBeam = ab;
    // judge & soldiers take their places
    this.judge.root.position.set(COURT.x, 2.6, COURT.z - 6.2);
    this.judge.root.rotation.y = 0;
    s.add(this.judge.root);
    this.soldiers.forEach((so, i) => {
      so.root.position.set(COURT.x - 2 + i * 2, 0, COURT.z + 5.5);
      so.root.rotation.y = Math.PI;
      s.add(so.root);
    });
    // a larger angry gallery, seated in rows on the right side of the room
    for (let i = 0; i < 12; i++) {
      const cz = this.makeCitizen(Math.floor(Math.random() * 8));
      cz.root.position.set(
        COURT.x + 1.2 + (i % 4) * 2.3,
        0.75, // seated up on the benches
        COURT.z + 2.2 + Math.floor(i / 4) * 2.0,
      );
      cz.root.rotation.y = Math.PI;
      this.scene.add(cz.root);
      this.wanderers.push({ // parked wanderers: home === target keeps them still
        parts: cz, home: cz.root.position.clone(), target: cz.root.position.clone(),
        wait: 9999, moving: false,
      });
    }
    // a few more standing at the back and along the right wall
    for (let i = 0; i < 5; i++) {
      const cz = this.makeCitizen(Math.floor(Math.random() * 8));
      cz.root.position.set(COURT.x + 3 + (i % 2) * 3, 0, COURT.z - 1 + Math.floor(i / 2) * 1.6);
      cz.root.rotation.y = Math.PI + (Math.random() - 0.5) * 0.5;
      this.scene.add(cz.root);
      this.wanderers.push({
        parts: cz, home: cz.root.position.clone(), target: cz.root.position.clone(),
        wait: 9999, moving: false,
      });
    }

    // smoke pool (Talkative's head; the pyre)
    for (let i = 0; i < 12; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x8a8f98, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.smoke.push({ mesh, m, life: 1 });
    }
    // sparkle pool
    for (let i = 0; i < 20; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.sparkles.push({ mesh, m, life: 1, vx: 0, vy: 0, vz: 0 });
    }

    // the shining light past the fair — the beacon that ends every chapter
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

    s.add(this.christian.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.hopefulJoined = false;
    this.tantrumT = 0;
    this.shoveT = 0;
    this.burnT = 0;
    this.talkative.root.visible = !revisit;
    this.faithful.root.visible = !revisit;
    this.hopeful.root.visible = false;
    this.faithful.root.position.set(-33, 0, 1.4);
    this.christian.root.position.set(revisit ? -30 : -32, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('cross');
    if (revisit) {
      this.phase = 'done';
      this.cb.setObjective('🎪 Vanity Fair roars on, selling what it always sold — pass through and keep walking');
    } else {
      this.phase = 'walk';
      this.cb.setObjective('🛣 On along the highway with Faithful — someone chatty is waiting ahead…');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'talkative' || this.phase === 'market' || this.phase === 'mob' ||
      this.phase === 'trial' || this.phase === 'shoving' || this.phase === 'burning' ||
      this.phase === 'back') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    if (p.x > 80) {
      // the courtroom
      p.x = THREE.MathUtils.clamp(p.x, COURT.x - 11, COURT.x + 11);
      p.z = THREE.MathUtils.clamp(p.z, -8, 8);
      p.y = 0;
    } else {
      p.z = THREE.MathUtils.clamp(p.z, p.x > CITY_X0 && p.x < CITY_X1 ? -8.6 : -9, p.x > CITY_X0 && p.x < CITY_X1 ? 8.6 : 9);
      p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);
      p.y = 0;
      // fountain is solid
      if (p.x > CITY_X0 && p.x < CITY_X1) {
        const fd = Math.hypot(p.x - 17, p.z - 0.2);
        if (fd < 2.1 && fd > 0.01) {
          const a = Math.atan2(p.z - 0.2, p.x - 17);
          p.x = 17 + Math.cos(a) * 2.1;
          p.z = 0.2 + Math.sin(a) * 2.1;
        }
      }
      // wandering citizens are solid obstacles in the fair
      if (p.x > CITY_X0 && p.x < CITY_X1) {
        for (let wi = 0; wi < 14; wi++) {
          const wp = this.wanderers[wi].parts.root.position;
          const dx = p.x - wp.x;
          const dz = p.z - wp.z;
          const d = Math.hypot(dx, dz);
          if (d < 1.15 && d > 0.01) {
            p.x = wp.x + (dx / d) * 1.15;
            p.z = wp.z + (dz / d) * 1.15;
          }
        }
      }
    }

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'walk' && p.x > TALKATIVE_X - 3) {
      this.phase = 'talkative';
      this.cb.playScript([
        { speaker: '', text: 'A monkey with truly magnificent ears falls into step beside them, talking before anyone has said a word.' },
        { speaker: 'Talkative', text: 'Pilgrims! Marvellous! I LOVE to talk of pilgrimage. Grace! Redemption! The vanity of earthly things! Name any holy subject, friends, and I shall discourse upon it for HOURS.' },
        { speaker: 'Faithful', text: '*whispering* Christian — what a find! He knows Scripture better than half the preachers back home!' },
        { speaker: 'Christian', text: '*whispering back* I know this fellow, Faithful. He is Talkative, of Prating Row. He talks like an angel — and lives however he pleases. Ask him something his TONGUE cannot answer.' },
        { speaker: 'Faithful', text: 'Hm. Friend Talkative — a question, then. Not what grace IS. How has it changed YOUR life?' },
        { speaker: 'Talkative', text: 'Changed my—? Ha! Well — the doctrine of change is a NOBLE subject! Augustine says— that is, broadly speaking, the schools hold that—' },
        { speaker: 'Faithful', text: 'And how does your faith fight your own sin? Just yours. Not sin in general.' },
        { speaker: 'Talkative', text: '…You ask this to INSULT me. I came for stimulating conversation, not an INSPECTION! You are not fit company for a gentleman scholar. Good DAY, sirs!' },
        { speaker: 'Christian', text: 'And there it is — religion in the mouth, and none in the paws. Poor fellow. Better he had said three words from the heart.' },
      ], () => {
        this.phase = 'tantrum';
        this.tantrumT = 0;
        this.cb.setObjective('🐒 Talkative is having… a moment');
      });
      return;
    }

    if (this.phase === 'toCity' && p.x > MARKET_X) {
      this.phase = 'market';
      this.cb.setMusic?.('fair');
      this.cb.playScript([
        { speaker: '', text: 'The street swallows them whole. Stalls upon stalls, colour upon colour: wealth, pleasure, titles, kingdoms — everything under the sun for sale, and all of it shouting.' },
        { speaker: 'Merchant', text: 'Strangers! Odd clothes, odd speech — but coin is coin! Step up, step up! What will you BUY, pilgrims?' },
        { speaker: 'Christian', text: 'We buy the truth.' },
        { speaker: 'Merchant', text: '…The TRUTH? *the nearest stalls go quiet* We don\'t stock it. Nobody stocks it. What KIND of an answer—' },
        { speaker: 'Faithful', text: 'Then we\'ll be no trouble to your business, friends. We only pass through — our shopping is done at the end of the road.' },
        { speaker: '', text: 'The quiet spreads outward like a stain. Then the muttering begins: mockers. Madmen. TROUBLEMAKERS.' },
      ], () => {
        this.phase = 'toEnd';
        this.cb.setObjective('🎪 Walk on through the fair — and don\'t stop to shop');
      });
      return;
    }

    if (this.phase === 'toEnd' && p.x > MOB_X) {
      this.phase = 'mob';
      this.cb.rumbleSound();
      this.cb.playScript([
        { speaker: '', text: 'At the east end of the street the crowd closes in — jeering faces on every side, and the town watch shoving through with pikes.' },
        { speaker: 'Officer', text: 'These are the two! Mocking our merchandise! Disturbing our peace! Insulting the great fair and every honest soul in it!' },
        { speaker: 'Christian', text: 'We insulted no one. We only declined to buy—' },
        { speaker: 'Officer', text: 'REFUSING TO BUY IS THE INSULT! Seize them! The court sits at once — my lord Hate-Good is waiting.' },
        { speaker: '', text: 'Blows, fists, torn cloaks. The two pilgrims are beaten, bound, and dragged before the judgment seat of Vanity Fair.' },
      ], () => {
        this.cb.fade?.(() => {
          // Christian watches from the right of the room; Faithful stands in the
          // dock on the LEFT (world −x), where he is later burned at the stake
          this.christian.root.position.set(COURT.x + 4, 0, COURT.z + 4);
          this.christian.root.rotation.y = 0;
          this.faithful.root.position.set(COURT.x - 5, 1.15, COURT.z - 1);
          this.faithful.root.rotation.y = Math.PI;
          this.cb.setMusic?.('sinai');
        });
        this.phase = 'trial';
        window.setTimeout(() => this.runTrial(), 700);
      });
      return;
    }

    if (this.phase === 'joined' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private runTrial(): void {
    this.cb.playScript([
      { speaker: '', text: 'The court of Vanity Fair. On the bench: my lord HATE-GOOD, vast in his black robe, wig slightly crooked with eagerness. In the dock: one small white sheep, standing very straight.' },
      { speaker: 'Judge Hate-Good', text: 'The prisoner FAITHFUL stands charged: that he disturbed our trade, despised our religion of getting and spending, and spoke against the customs of this ancient fair. How does the wool-ball plead?' },
      { speaker: 'Faithful', text: 'I set myself only against what sets itself against the King of kings. If serving Him disturbs the fair, my lord, the quarrel is not mine to settle.' },
      { speaker: 'Judge Hate-Good', text: 'The KING, he says! Beelzebub is patron of this fair, little sheep, and has been these thousand years! Renounce this King of yours, buy something nice, and the court may yet be merciful.' },
      { speaker: 'Faithful', text: 'I will not. He bought me at a price I cannot repay; I will not sell Him for anything on your stalls. Do what you have leave to do.' },
      { speaker: 'Judge Hate-Good', text: 'Then hear the sentence this honest court was always going to pass: GUILTY. Death by fire — and let every stall stay open to watch!' },
      { speaker: 'Christian', text: 'FAITHFUL! No—! *the pikes cross in front of him* Let me stand with him! FAITHFUL!' },
      { speaker: 'Faithful', text: 'Peace, Christian. *smiling, actually smiling* Don\'t you remember? Whom the fair kills — the King carries HOME. I\'ll simply be there before you.' },
    ], () => {
      this.phase = 'shoving';
      this.shoveT = 0;
      this.cb.setObjective('💔 Faithful…');
    });
  }

  private runAscension(): void {
    this.cb.playScript([
      { speaker: '', text: 'And then — over the smoke, brighter than the flames — a light comes down like a hand opening.' },
      { speaker: '', text: 'The fire cannot hold him. Up through the light goes Faithful — past the rooftops, past the banners, up and up — carried by chariot straight to the gates of the Celestial City.' },
      { speaker: 'Christian', text: '*through tears* …He\'s not dead. He\'s AHEAD. Sing on the way up, Faithful — I\'ll hear it the whole rest of my road.' },
    ], () => {
      this.cb.fade?.(() => {
        this.christian.root.position.set(CITY_X1 + 4, 0, 0);
        this.christian.root.rotation.y = Math.PI / 2;
        this.hopeful.root.visible = true;
        this.hopeful.root.position.set(CITY_X1 + 7, 0, -1.8);
        this.hopeful.root.rotation.y = -Math.PI / 2;
        this.cb.setMusic?.('cross');
      });
      this.phase = 'back';
      window.setTimeout(() => {
        this.cb.playScript([
          { speaker: '', text: 'Outside the east gate, the fair\'s roar fading behind, a young dog of the city stands waiting in the road — twisting his cap in his paws.' },
          { speaker: 'Hopeful', text: 'S-sir! Pilgrim! Please — don\'t pass me by. I was IN that crowd. I\'ve lived in this fair my whole life… and I never once saw anybody die the way your friend just did.' },
          { speaker: 'Hopeful', text: 'No cursing, no begging. He looked HAPPY, sir. Whatever your friend had — whatever your King gives — I want it more than everything in every stall of this city.' },
          { speaker: 'Christian', text: '*a long breath — and then, at last, a smile* Then Faithful preached one more sermon than they meant to allow. What is your name, friend?' },
          { speaker: 'Hopeful', text: 'Hopeful, sir. On account of I always was, even here. May I… may I walk with you?' },
          { speaker: 'Christian', text: 'To the very gates, Hopeful. Come — two pilgrims left this city once before, and two pilgrims leave it still.' },
        ], () => {
          this.phase = 'joined';
          this.hopefulJoined = true;
          this.cb.setObjective('🐕 Walk on east with Hopeful, toward the light');
        });
      }, 700);
    });
  }

  private spawnSmoke(x: number, y: number, z: number): void {
    const sm = this.smoke.find((q) => q.life >= 1);
    if (!sm) return;
    sm.life = 0;
    sm.mesh.position.set(x + (Math.random() - 0.5) * 0.4, y, z + (Math.random() - 0.5) * 0.4);
    sm.mesh.visible = true;
  }

  private burst(x: number, y: number, z: number, count: number, color: number): void {
    let n = 0;
    for (const sp of this.sparkles) {
      if (n >= count) break;
      if (sp.life < 1) continue;
      n++;
      sp.life = 0;
      sp.m.color.set(color);
      sp.vx = (Math.random() - 0.5) * 2.6;
      sp.vy = 1.2 + Math.random() * 2;
      sp.vz = (Math.random() - 0.5) * 2.6;
      sp.mesh.position.set(x, y, z);
      sp.mesh.visible = true;
    }
  }

  // the follower walk shared by Faithful and Hopeful
  private follow(who: BearParts, ox: number, oz: number, t: number, dt: number): void {
    const p = this.christian.root.position;
    const wp = who.root.position;
    const dx = (p.x + ox) - wp.x;
    const dz = (p.z + oz) - wp.z;
    const d = Math.hypot(dx, dz);
    if (d > 0.25) {
      const sp = Math.min(6.6, d * 2.5) * dt;
      wp.x += (dx / d) * sp;
      wp.z += (dz / d) * sp;
      who.root.rotation.y = Math.atan2(dx, dz);
      animateBear(who, t + 0.6, true);
    } else {
      animateBear(who, t + 0.6, false);
    }
  }

  nearCitizen(): boolean {
    if (this.phase !== 'market' && this.phase !== 'toEnd' && this.phase !== 'done') return false;
    const p = this.christian.root.position;
    return this.wanderers.slice(0, 14).some((w) => p.distanceTo(w.parts.root.position) < 2.5);
  }
  talkCitizen(): void {
    const gossip = [
      'What\'ll it be, pilgrim? We\'ve got honour, ease, pleasure, and kingdoms! All very fairly priced.',
      'Strange clothes, strange speech — but coin is coin if you want to buy something.',
      'Never seen your kind here before. Are you one of those heavenly-road people?',
      'Don\'t mind the shouting — everyone who refuses to buy gets a bit of that. City tradition.',
    ];
    this.cb.playScript([{ speaker: 'Citizen', text: gossip[Math.floor(Math.random() * gossip.length)] }]);
  }
  nearFountain(): boolean {
    if (this.phase !== 'market' && this.phase !== 'toEnd' && this.phase !== 'done') return false;
    return Math.hypot(this.christian.root.position.x - 17, this.christian.root.position.z - 0.2) < 3.5;
  }
  talkFountain(): void {
    this.cb.playScript([
      { speaker: 'Christian', text: 'Gold coins for water — and they call it a fountain. Everything here is dressed up as something it isn\'t.' },
    ]);
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // ---------- Talkative ----------
    if (this.talkative.root.visible) {
      const tp = this.talkative.root.position;
      if (this.phase === 'tantrum') {
        this.tantrumT += dt;
        if (this.tantrumT < 2.4) {
          // jumping up and down in fury, smoke pouring off his head
          tp.y = Math.abs(Math.sin(this.tantrumT * 11)) * 0.55;
          this.talkative.root.rotation.y += dt * 6; // spinning with rage
          if (Math.random() < dt * 14) this.spawnSmoke(tp.x, tp.y + 2.1, tp.z);
          animateBear(this.talkative, t * 2.4, true);
        } else if (this.tantrumT < 4.2) {
          // and away he dashes, west, at tremendous speed
          tp.y = 0;
          tp.x -= dt * 14;
          this.talkative.root.rotation.y = -Math.PI / 2;
          animateBear(this.talkative, t * 2.2, true);
          if (Math.random() < dt * 8) this.spawnSmoke(tp.x + 0.6, 0.4, tp.z);
        } else {
          this.talkative.root.visible = false;
          this.phase = 'toCity';
          this.cb.setObjective('🎪 Gaudy banners rise ahead — the famous city of Vanity Fair');
        }
      } else if (this.phase === 'walk' || this.phase === 'talkative') {
        animateBear(this.talkative, t * 1.6, false); // fidgety even standing still
        this.talkative.head.rotation.z = Math.sin(t * 5) * 0.08;
      }
    }

    // ---------- Faithful ----------
    if (this.faithful.root.visible) {
      if (this.phase === 'walk' || this.phase === 'toCity' || this.phase === 'toEnd') {
        this.follow(this.faithful, -1.9, 1.4, t, dt);
      } else if (this.phase === 'shoving') {
        // the soldiers close in and knock him about, again and again
        this.shoveT += dt;
        const fp = this.faithful.root.position;
        this.soldiers.forEach((so, i) => {
          const angle = (i / 3) * Math.PI * 2 + Math.PI / 6;
          const ringX = fp.x + Math.cos(angle) * 1.7;
          const ringZ = fp.z + Math.sin(angle) * 1.7;
          const sp = so.root.position;
          sp.x += (ringX - sp.x) * Math.min(dt * 3, 1);
          sp.z += (ringZ - sp.z) * Math.min(dt * 3, 1);
          so.root.rotation.y = Math.atan2(fp.x - sp.x, fp.z - sp.z);
          // each hound lunges on his own beat
          const lunge = Math.max(0, Math.sin(this.shoveT * 4 + i * 2.1));
          sp.x += (fp.x - sp.x) * lunge * dt * 3.4;
          sp.z += (fp.z - sp.z) * lunge * dt * 3.4;
          animateBear(so, t * 1.5 + i, true);
        });
        // Faithful reels under the blows but keeps his feet
        this.faithful.root.position.x += Math.sin(this.shoveT * 7.3) * dt * 0.9;
        this.faithful.root.position.z += Math.cos(this.shoveT * 6.1) * dt * 0.9;
        this.faithful.root.rotation.z = Math.sin(this.shoveT * 9) * 0.14;
        animateBear(this.faithful, t, false);
        if (this.shoveT > 3.4) {
          this.phase = 'burning';
          this.burnT = 0;
          this.faithful.root.rotation.z = 0;
          // soldiers step aside — Faithful walks to the stake in burning phase
          this.soldiers.forEach((so, i) => {
            so.root.position.set(COURT.x - 6.5 - 2.4 + i * 2.4, 0, COURT.z - 0.6);
            so.root.rotation.y = Math.PI;
          });
          this.cb.rumbleSound();
        }
      } else if (this.phase === 'burning') {
        this.burnT += dt;
        const fp = this.faithful.root.position;
        const stakeX = COURT.x - 6.5;
        const stakeZ = COURT.z - 3.5;
        if (this.burnT < 1.0) {
          // Faithful walks calmly to the stake
          const dx = stakeX - fp.x;
          const dz = stakeZ - fp.z;
          const d = Math.hypot(dx, dz);
          if (d > 0.25) {
            fp.x += (dx / d) * dt * 3.0;
            fp.z += (dz / d) * dt * 3.0;
            this.faithful.root.rotation.y = Math.atan2(dx, dz);
            animateBear(this.faithful, t, true);
          } else {
            this.faithful.root.rotation.y = Math.PI;
            animateBear(this.faithful, t, false);
            for (const f of this.flames) f.visible = true;
          }
        } else if (this.burnT < 3.2) {
          // the fire leaps; smoke climbs
          if (Math.random() < dt * 16) this.spawnSmoke(fp.x, 1.6 + Math.random(), fp.z);
          animateBear(this.faithful, t, false);
        } else {
          // the light takes him — up, and up, and home
          if (this.ascendBeam) {
            const m = this.ascendBeam.material as THREE.MeshBasicMaterial;
            m.opacity = Math.min(0.55, m.opacity + dt * 0.8);
          }
          fp.y += dt * (1.5 + (this.burnT - 3.2) * 2.2);
          this.faithful.root.rotation.y += dt * 1.2;
          if (Math.random() < dt * 12) {
            this.burst(fp.x, fp.y - 0.4, fp.z, 2, 0xfff0b8);
          }
          for (const f of this.flames) f.visible = this.burnT < 4.0;
          animateBear(this.faithful, t * 0.3, false);
          if (this.burnT > 5.6 && fp.y > 12) {
            this.faithful.root.visible = false;
            if (this.ascendBeam) (this.ascendBeam.material as THREE.MeshBasicMaterial).opacity = 0;
            this.runAscension();
            this.phase = 'trial'; // parked while the ascension script plays
          }
        }
      } else {
        animateBear(this.faithful, t + 0.6, false);
      }
    }

    // ---------- Hopeful ----------
    if (this.hopeful.root.visible) {
      if (this.hopefulJoined) this.follow(this.hopeful, -2.0, 1.3, t, dt);
      else animateBear(this.hopeful, t + 1.2, false);
    }

    // ---------- the fair lives its noisy life ----------
    const cp = this.christian.root.position;
    for (let wi = 0; wi < this.wanderers.length; wi++) {
      const w = this.wanderers[wi];
      const pos = w.parts.root.position;
      // in the mob phase, fair citizens converge on Christian and Faithful
      if (this.phase === 'mob' && wi < 14) {
        const angle = (wi / 14) * Math.PI * 2;
        const tx = cp.x + Math.cos(angle) * 2.4;
        const tz = cp.z + Math.sin(angle) * 2.4;
        const dx = tx - pos.x;
        const dz = tz - pos.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.3) {
          pos.x += (dx / d) * 2.6 * dt;
          pos.z += (dz / d) * 2.6 * dt;
          w.parts.root.rotation.y = Math.atan2(cp.x - pos.x, cp.z - pos.z);
        }
        animateBear(w.parts, t + pos.x, d > 0.3);
        continue;
      }
      if (w.moving) {
        const dx = w.target.x - pos.x;
        const dz = w.target.z - pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.15) {
          w.moving = false;
          w.wait = 1.5 + Math.random() * 4;
        } else {
          pos.x += (dx / d) * 1.8 * dt;
          pos.z += (dz / d) * 1.8 * dt;
          w.parts.root.rotation.y = Math.atan2(dx, dz);
        }
      } else if (w.wait < 9000) {
        w.wait -= dt;
        if (w.wait <= 0) {
          const a = Math.random() * Math.PI * 2;
          const r = 1.5 + Math.random() * 3.5;
          w.target.set(
            THREE.MathUtils.clamp(w.home.x + Math.cos(a) * r, CITY_X0 + 2, CITY_X1 - 2),
            0, THREE.MathUtils.clamp(w.home.z + Math.sin(a) * r, -8, 8),
          );
          w.moving = true;
        }
      }
      animateBear(w.parts, t + pos.x, w.moving);
    }

    // bunting flutters
    for (let i = 0; i < this.banners.length; i++) {
      this.banners[i].rotation.x = Math.sin(t * 2.2 + i * 0.8) * 0.25;
    }

    // flames dance
    for (let i = 0; i < this.flames.length; i++) {
      const f = this.flames[i];
      if (!f.visible) continue;
      f.scale.y = 0.8 + Math.abs(Math.sin(t * 6 + i * 1.7)) * 0.9;
      f.scale.x = 0.8 + Math.abs(Math.sin(t * 5 + i)) * 0.4;
    }

    // smoke drifts up
    for (const sm of this.smoke) {
      if (sm.life >= 1) continue;
      sm.life = Math.min(1, sm.life + dt * 0.8);
      sm.mesh.position.y += dt * 1.4;
      sm.mesh.position.x += dt * 0.3;
      sm.mesh.scale.setScalar(0.7 + sm.life * 1.4);
      sm.m.opacity = 0.55 * (1 - sm.life);
      if (sm.life >= 1) sm.mesh.visible = false;
    }
    // sparkles
    for (const sp of this.sparkles) {
      if (sp.life >= 1) continue;
      sp.life = Math.min(1, sp.life + dt * 1.1);
      sp.mesh.position.x += sp.vx * dt;
      sp.mesh.position.y += sp.vy * dt;
      sp.mesh.position.z += sp.vz * dt;
      sp.vy -= dt * 1.2;
      sp.m.opacity = 0.9 * (1 - sp.life);
      if (sp.life >= 1) sp.mesh.visible = false;
    }

    if (this.shining) animateShiningLight(this.shining, t);
    animateBear(this.judge, t * 0.8, false);
    if (this.phase !== 'shoving' && this.phase !== 'burning') {
      for (let i = 0; i < this.soldiers.length; i++) {
        animateBear(this.soldiers[i], t + i * 1.3, false);
      }
    }
  }
}
