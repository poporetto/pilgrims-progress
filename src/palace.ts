import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter VIII — Palace Beautiful.
// At dusk Christian reaches a shining white palace — but two enormous lions
// flank the road before its gate. Watchful the porter calls out that they
// are chained: keep to the MIDDLE of the path and they cannot reach you.
// Stray aside, and a lion's bite knocks Christian back. Inside, four godly
// women — Discretion, Prudence, Piety and Charity — hear his testimony,
// show him the King's records, the holy treasures, and (from the rooftop)
// his first far glimpse of the Celestial City. Before he leaves, they arm
// him piece by piece with the whole Armor of God, and see him off at the
// east gate.

interface PalaceCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  rumbleSound: () => void; // the lions' roar
  blipSound: () => void;
  setMusic?: (style: 'gate' | 'cross' | 'interpreter') => void;
  fade?: (mid: () => void) => void;
}

type Phase =
  | 'approach'   // dusk road toward the palace
  | 'terror'     // parked: the lions roar, Watchful calls out
  | 'gauntlet'   // walk the middle of the path between the lions
  | 'welcome'    // parked: Watchful at the gate
  | 'testimony'  // interior: the four women hear his story
  | 'records'    // walk to the reading desk
  | 'treasures'  // walk to the treasure table
  | 'stairs'     // walk to the roof stairs
  | 'roof'       // rooftop: the telescope and the far City
  | 'roofdown'   // walk back to the stairs
  | 'armor'      // the arming ceremony, piece by piece
  | 'farewell'   // parked: goodbyes at the east gate
  | 'walkout'    // free walk east to the light
  | 'done';

const WEST_EDGE = -30;
const LIGHT_X = 42;
const LION_X0 = -6;   // the lions' reach spans this stretch of road
const LION_X1 = 5;
const SAFE_Z = 1.25;  // keep |z| under this and the chains hold them back
const GATE_X = 7;     // the palace gate
const EAST_GATE_X = 26;

// interior areas live far away on the same scene, reached by a screen fade
const HALL = new THREE.Vector3(100, 0, 0);
const ROOF = new THREE.Vector3(170, 12, 0);

interface Lion {
  root: THREE.Group;
  head: THREE.Group;
  home: THREE.Vector3;
  lunge: number; // 0..1 toward the path
}

export class PalaceScene {
  scene = new THREE.Scene();
  phase: Phase = 'approach';
  private cb: PalaceCallbacks;
  private christian: BearParts;
  private armorPieces: { helmet: THREE.Group; breastplate: THREE.Mesh; shield: THREE.Group; sword: THREE.Group };
  private watchful: BearParts;
  private women: BearParts[] = []; // Discretion, Prudence, Piety, Charity
  private womenHome: THREE.Vector3[] = [];
  private armorStep = -1;
  private armorWalkT = 0;
  private lions: Lion[] = [];
  private biteCooldown = 0;
  private bitten = false; // first-bite hint shown
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];
  private cityGlow: THREE.Mesh | null = null;
  private lightBeam: THREE.Mesh | null = null;
  private lightHalo: THREE.Mesh | null = null;
  private revisit = false;
  private built = false;

  constructor(cb: PalaceCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      sling: true, plump: true,
    });
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const seal = block(0.10, 0.10, 0.04, PALETTE.robeGold, 0, 0.62, 0.42);
    seal.castShadow = false;
    this.christian.head.add(seal);
    const scroll = new THREE.Group();
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.5, 8), mat(0xfdf6e3));
    roll.rotation.z = Math.PI / 2;
    scroll.add(roll);
    scroll.add(block(0.1, 0.2, 0.2, 0xc9535f, 0, 0, 0));
    scroll.position.set(0, -0.5, 0.2);
    this.christian.armL.add(scroll);

    // ---------- the Armor of God, hidden until each piece is given ----------
    const STEEL = 0xcfd6dd;
    const helmet = new THREE.Group();
    helmet.add(block(1.02, 0.4, 0.86, STEEL, 0, 0.92, 0));
    helmet.add(block(0.2, 0.24, 0.9, PALETTE.robeGold, 0, 1.16, 0)); // crest
    helmet.add(block(0.28, 0.28, 0.22, STEEL, -0.38, 1.12, 0)); // left bear ear
    helmet.add(block(0.28, 0.28, 0.22, STEEL, 0.38, 1.12, 0));  // right bear ear
    this.christian.head.add(helmet);
    const breastplate = block(1.16, 0.62, 0.88, STEEL, 0, 0.42, 0);
    this.christian.body.add(breastplate);
    const shield = new THREE.Group();
    shield.add(block(0.12, 0.8, 0.62, STEEL, 0, 0, 0));
    shield.add(block(0.14, 0.42, 0.12, PALETTE.robeGold, 0, 0, 0));
    shield.add(block(0.14, 0.12, 0.4, PALETTE.robeGold, 0, 0.1, 0));
    shield.position.set(-0.24, -0.3, 0);
    this.christian.armL.add(shield);
    const sword = new THREE.Group();
    sword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0.55, 0));
    sword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, 0.04, 0));
    sword.add(block(0.1, 0.24, 0.12, 0x8a6f52, 0, -0.12, 0));
    sword.position.set(0.16, -0.5, 0.14);
    this.christian.armR.add(sword);
    this.armorPieces = { helmet, breastplate, shield, sword };
    this.setArmorVisible(false);

    // Watchful the porter: a keen-eyed owl in a deep-blue robe
    this.watchful = makeBear({
      species: 'owl', fur: 0x8a7864, outfit: 'robe', outfitColor: 0x3a4a6a, scale: 1.1,
    });

    // the four godly women
    const womenDefs: Array<[number, number]> = [
      [0xd9a8b8, 0x8a5a6a], // Discretion — rose
      [0xa8c4d9, 0x3a5f8a], // Prudence — blue
      [0xf2e2c9, 0xb08a3a], // Piety — cream & gold
      [0xc9e2b8, 0x5a7a4a], // Charity — green
    ];
    for (const [dressC] of womenDefs) {
      const w = makeBear({
        species: 'bear', fur: PALETTE.bearHoney,
        outfit: 'dress', outfitColor: dressC, scale: 1.02,
      });
      this.women.push(w);
    }
  }

  private setArmorVisible(v: boolean): void {
    this.armorPieces.helmet.visible = v;
    this.armorPieces.breastplate.visible = v;
    this.armorPieces.shield.visible = v;
    this.armorPieces.sword.visible = v;
  }

  // a proper four-footed lion, nothing like gentle Goodwill
  private makeLion(side: number): Lion {
    const root = new THREE.Group();
    const FUR = 0xd9a860;
    const MANE = 0xb0793a;
    root.add(block(2.0, 1.05, 1.05, FUR, 0, 1.0, 0)); // body, horizontal
    for (const [lx, lz] of [[-0.7, -0.32], [-0.7, 0.32], [0.7, -0.32], [0.7, 0.32]] as const) {
      root.add(block(0.34, 0.72, 0.34, FUR, lx, 0.36, lz));
      root.add(block(0.38, 0.16, 0.4, 0xc49450, lx, 0.08, lz));
    }
    // tail with a dark tuft
    root.add(block(0.16, 0.16, 0.9, FUR, -1.15, 1.2, 0));
    root.add(block(0.26, 0.26, 0.26, MANE, -1.15, 1.28, -0.55));
    // head at the front, wrapped in a great mane
    const head = new THREE.Group();
    head.add(block(0.95, 0.85, 0.85, FUR, 0, 0, 0));
    head.add(block(1.35, 1.25, 0.5, MANE, 0, 0, -0.4));
    head.add(block(1.15, 0.35, 0.8, MANE, 0, 0.62, -0.1));
    head.add(block(1.15, 0.35, 0.8, MANE, 0, -0.62, -0.1));
    head.add(block(0.35, 1.0, 0.8, MANE, -0.68, 0, -0.1));
    head.add(block(0.35, 1.0, 0.8, MANE, 0.68, 0, -0.1));
    // muzzle, bared teeth, fierce eyes
    head.add(block(0.5, 0.36, 0.24, 0xe8c898, 0, -0.16, 0.5));
    head.add(block(0.18, 0.12, 0.08, 0x4a3428, 0, 0.0, 0.6));
    for (const tx of [-0.14, 0.02, 0.16]) {
      head.add(block(0.09, 0.16, 0.06, 0xffffff, tx, -0.32, 0.56));
    }
    head.add(block(0.12, 0.14, 0.06, 0xc9353f, -0.22, 0.14, 0.46));
    head.add(block(0.12, 0.14, 0.06, 0xc9353f, 0.22, 0.14, 0.46));
    head.position.set(1.25, 1.15, 0);
    head.rotation.y = 0;
    root.add(head);
    // the chain post is anchored to the world — it must not move when the lion lunges
    const postWX = side < 0 ? -5.5 : 4.5;
    const postWZ = 3.4 * side;
    const post = block(0.24, 1.4, 0.24, 0x5e5a55, postWX, 0.7, postWZ);
    this.scene.add(post);
    for (let c = 0; c < 4; c++) {
      const link = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.05, 6, 10), mat(0x6e6a64));
      link.position.set(-2.2 + c * 0.42, 0.32, 0.06 * (c % 2));
      link.rotation.set(Math.PI / 2, 0, c * 0.6);
      root.add(link);
    }
    const home = new THREE.Vector3((LION_X0 + LION_X1) / 2 + (side < 0 ? -2.4 : 2.4), 0, 3.4 * side);
    root.position.copy(home);
    // face the road (north lion faces south +z, south lion faces north -z)
    root.rotation.y = side < 0 ? 0 : Math.PI;
    this.scene.add(root);
    return { root, head, home, lunge: 0 };
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0x8a86b8); // deep dusk
    s.fog = new THREE.Fog(0x8a86b8, 40, 110);

    s.add(new THREE.HemisphereLight(0xb8b4d8, 0x8a8a9a, 0.75));
    const sun = new THREE.DirectionalLight(0xd8c4f0, 0.9);
    sun.position.set(-30, 30, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -55;
    sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -50;
    s.add(sun);

    const ground = new THREE.Mesh(new THREE.BoxGeometry(160, 1, 90), mat(0x7fa274));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 40; i++) {
      const x = -45 + Math.random() * 85;
      const z = -35 + Math.random() * 70;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x74996a : 0x8cb281, x, 0.04 + Math.random() * 0.03, z);
      p.castShadow = false;
      s.add(p);
    }

    // the road — and through the lions' stretch, a clearly narrow causeway
    for (let i = 0; i <= 24; i++) {
      const px = -29 + i * 3.0;
      if (px > LION_X0 - 1 && px < LION_X1 + 2) continue;
      const stone = block(0.9 + Math.random() * 0.5, 0.14, 1.7 + Math.random() * 0.6,
        PALETTE.path, px, 0.07, (Math.random() - 0.5) * 0.7);
      stone.castShadow = false;
      s.add(stone);
    }
    const causeway = block(LION_X1 - LION_X0 + 3, 0.16, 2.2, 0xe4d6b4, (LION_X0 + LION_X1) / 2 + 0.5, 0.08, 0);
    causeway.castShadow = false;
    s.add(causeway);

    // ---------- the lions ----------
    this.lions.push(this.makeLion(-1));
    this.lions.push(this.makeLion(1));

    // ---------- Palace Beautiful: a white palace glowing in the dusk ----------
    const palace = new THREE.Group();
    const WHITE = 0xfaf8f2;
    const TRIM = 0xe8e2d2;
    // main hall
    palace.add(block(14, 7, 10, WHITE, 8, 3.5, 0));
    palace.add(block(14.6, 0.6, 10.6, TRIM, 8, 7.3, 0));
    palace.add(block(12, 2.4, 8, WHITE, 8, 8.8, 0));
    palace.add(block(12.6, 0.5, 8.6, PALETTE.roofPink, 8, 10.2, 0));
    // corner towers with rosy caps
    for (const [tx, tz] of [[2, -5.5], [2, 5.5], [14, -5.5], [14, 5.5]] as const) {
      palace.add(block(2.6, 9.5, 2.6, WHITE, tx, 4.75, tz));
      palace.add(block(3.0, 0.5, 3.0, TRIM, tx, 9.7, tz));
      palace.add(block(2.2, 1.6, 2.2, PALETTE.roofPink, tx, 10.7, tz));
    }
    // grand arched gate on the EAST face — where pilgrims enter from the road
    palace.add(block(0.8, 5.2, 4.0, TRIM, 15.3, 2.6, 0));        // arch surround
    palace.add(block(0.9, 4.0, 2.8, 0x4a4440, 15.5, 2.0, 0));    // dark doorway
    palace.add(block(0.6, 5.8, 0.6, TRIM, 15.0, 2.9, 2.2));      // pilaster south
    palace.add(block(0.6, 5.8, 0.6, TRIM, 15.0, 2.9, -2.2));     // pilaster north
    // glowing windows
    for (const [wx, wy, wz] of [
      [5, 4, 5.1], [8, 4.6, 5.1], [11, 4, 5.1],
      [5, 4, -5.1], [8, 4.6, -5.1], [11, 4, -5.1],
    ] as const) {
      const win = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 1.4, 0.12),
        new THREE.MeshBasicMaterial({ color: 0xffe9a0 }),
      );
      win.position.set(wx, wy, wz);
      palace.add(win);
    }
    // decorative porch columns flanking the east gate
    palace.add(block(0.5, 6.2, 0.5, WHITE, 14.6, 3.1, 2.8));
    palace.add(block(0.5, 6.2, 0.5, WHITE, 14.6, 3.1, -2.8));
    // the whole palace stands NORTH of the road, so the camera (which looks
    // from the south) never ends up buried inside its walls
    palace.position.set(0, 0, -7.5);
    s.add(palace);
    const palaceLight = new THREE.PointLight(0xffe9c0, 1.6, 30);
    palaceLight.position.set(8, 6, -2);
    s.add(palaceLight);

    // Watchful stands by the east gate, visible to approaching Christian
    this.watchful.root.position.set(13.5, 0, -4.5);
    this.watchful.root.rotation.y = -Math.PI / 2;
    s.add(this.watchful.root);

    // road east of the palace, to the light
    for (let i = 0; i <= 6; i++) {
      const px = EAST_GATE_X + 1 + i * 2.6;
      const stone = block(0.9 + Math.random() * 0.5, 0.14, 1.7 + Math.random() * 0.6,
        PALETTE.path, px, 0.07, (Math.random() - 0.5) * 0.7);
      stone.castShadow = false;
      s.add(stone);
    }

    // ---------- the great hall (interior, reached by fade) ----------
    const hall = new THREE.Group();
    hall.add(block(26, 0.6, 20, 0xe8ddc9, 8, -0.3, 0));             // floor
    hall.add(block(26, 7, 0.8, 0xf2ead8, 8, 3.5, -10));             // walls
    hall.add(block(26, 7, 0.8, 0xf2ead8, 8, 3.5, 10));
    hall.add(block(0.8, 7, 20, 0xf2ead8, -5, 3.5, 0));
    hall.add(block(0.8, 7, 20, 0xf2ead8, 21, 3.5, 0));
    for (let i = 0; i < 4; i++) {
      hall.add(block(0.7, 6, 0.7, 0xdfd4bc, -1 + i * 6, 3, -6));
      hall.add(block(0.7, 6, 0.7, 0xdfd4bc, -1 + i * 6, 3, 6));
    }
    // a long rug down the middle
    hall.add(block(20, 0.06, 3.4, 0xc9808a, 8, 0.04, 0));
    // the reading desk with the King's records (bigger, more imposing)
    hall.add(block(3.8, 1.4, 1.8, PALETTE.woodDark, 3, 0.7, -7.6));
    hall.add(block(3.6, 0.16, 1.4, 0xfdf6e3, 3, 1.48, -7.6));   // open book surface
    hall.add(block(1.6, 0.5, 0.14, 0xfdf6e3, 3.5, 1.7, -8.1));  // open pages
    hall.add(block(1.6, 0.5, 0.14, 0xfdf6e3, 2.5, 1.7, -8.1));
    hall.add(block(3.8, 0.5, 0.18, PALETTE.woodDark, 3, 0.7, -8.55)); // desk back panel
    // the treasure table: relics under a soft glow (larger)
    hall.add(block(4.5, 1.3, 2.0, PALETTE.woodDark, 12, 0.65, -7.5));
    hall.add(block(0.6, 0.6, 0.6, PALETTE.robeGold, 11.0, 1.6, -7.5)); // ark-like chest
    hall.add(block(0.16, 0.9, 0.16, 0x8a6f52, 12.2, 1.7, -7.5));       // a rod
    hall.add(block(0.65, 0.14, 0.65, 0xcfd6dd, 13.2, 1.35, -7.5));     // a silver dish
    const relicGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 14, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.18, depthWrite: false }),
    );
    relicGlow.position.set(12, 1.6, -7.5);
    hall.add(relicGlow);
    // the stair to the roof, at the far end
    for (let i = 0; i < 5; i++) {
      hall.add(block(2.0, 0.3 + i * 0.3, 1.0, 0xdfd4bc, 17.5, (0.3 + i * 0.3) / 2, 4.2 - i * 1.0));
    }
    hall.position.copy(HALL);
    s.add(hall);
    const hallLight = new THREE.PointLight(0xffeecd, 2.8, 55);
    hallLight.position.set(HALL.x + 8, 5, 0);
    s.add(hallLight);
    const hallFill = new THREE.PointLight(0xfff5dc, 1.4, 30);
    hallFill.position.set(HALL.x + 3, 4, -7);
    s.add(hallFill);

    // ---------- the rooftop (interior area two) ----------
    const roof = new THREE.Group();
    roof.add(block(16, 0.8, 12, 0xf2ead8, 0, -0.4, 0));
    for (let i = 0; i < 7; i++) {
      roof.add(block(0.6, 0.9, 0.6, 0xe8e2d2, -7 + i * 2.4, 0.45, -5.6));
      roof.add(block(0.6, 0.9, 0.6, 0xe8e2d2, -7 + i * 2.4, 0.45, 5.6));
    }
    roof.add(block(16, 0.3, 0.6, 0xe8e2d2, 0, 0.95, -5.6));
    roof.add(block(16, 0.3, 0.6, 0xe8e2d2, 0, 0.95, 5.6));
    // the telescope on a tripod, angled east toward the Celestial City
    const scope = new THREE.Group();
    // tripod legs
    scope.add(block(0.1, 1.3, 0.1, PALETTE.woodDark, -0.28, 0.65, -0.28));
    scope.add(block(0.1, 1.3, 0.1, PALETTE.woodDark, 0.28, 0.65, -0.28));
    scope.add(block(0.1, 1.3, 0.1, PALETTE.woodDark, 0, 0.65, 0.4));
    // horizontal mount
    scope.add(block(0.36, 0.12, 0.36, PALETTE.woodDark, 0, 1.32, 0));
    // main tube (angled east and up)
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 2.0, 12), mat(0xb08a3a));
    tube.rotation.z = -Math.PI / 3;
    tube.position.set(0.5, 1.9, 0);
    scope.add(tube);
    // eyepiece end (smaller, inner-facing)
    const eye = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 0.28, 10), mat(0x8a6f52));
    eye.rotation.z = -Math.PI / 3;
    eye.position.set(-0.14, 1.24, 0);
    scope.add(eye);
    // objective lens end (larger, east-facing)
    const obj = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.2, 0.18, 12), mat(0xcfd6dd));
    obj.rotation.z = -Math.PI / 3;
    obj.position.set(1.14, 2.55, 0);
    scope.add(obj);
    scope.position.set(1, 0, 0); // closer to where Christian enters
    roof.add(scope);
    // stairway down at west end of roof
    for (let i = 0; i < 5; i++) {
      roof.add(block(1.8, 0.22 + i * 0.25, 1.0, 0xdfd4bc, -6.4 + i * 0.9, (0.22 + i * 0.25) / 2, 0));
    }
    // trapdoor opening surround
    roof.add(block(2.4, 0.2, 1.6, 0xe8e2d2, -7.0, 0.1, 0));
    roof.add(block(0.2, 0.8, 1.6, 0xdfd4bc, -5.9, 0.4, 0)); // hatch
    roof.position.copy(ROOF);
    s.add(roof);
    // the Celestial City, impossibly far to the east — a shining hint
    const city = new THREE.Group();
    const cityMat = new THREE.MeshBasicMaterial({ color: 0xfff3c4, transparent: true, opacity: 0.85, fog: false });
    for (const [cx, cy, cw, ch] of [
      [0, 2.2, 1.6, 4.4], [2, 1.6, 1.2, 3.2], [-2, 1.4, 1.3, 2.8], [3.6, 1.0, 0.9, 2.0], [-3.6, 0.9, 1.0, 1.8],
    ] as const) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(cw, ch, 1), cityMat);
      t.position.set(cx, cy, 0);
      city.add(t);
    }
    const cityHalo = new THREE.Mesh(
      new THREE.SphereGeometry(6, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff9dd, transparent: true, opacity: 0.3, depthWrite: false, fog: false }),
    );
    cityHalo.position.y = 2;
    city.add(cityHalo);
    this.cityGlow = cityHalo;
    city.position.set(ROOF.x + 46, ROOF.y + 6, -4);
    s.add(city);

    // the women live in the hall
    this.womenHome = [
      new THREE.Vector3(HALL.x + 5, 0.1, 2.6),
      new THREE.Vector3(HALL.x + 7.5, 0.1, 3.4),
      new THREE.Vector3(HALL.x + 10, 0.1, 3.4),
      new THREE.Vector3(HALL.x + 12.5, 0.1, 2.6),
    ];
    this.women.forEach((w, i) => {
      w.root.position.copy(this.womenHome[i]);
      w.root.rotation.y = Math.PI; // facing north across the rug
      s.add(w.root);
    });

    // sparkles for the arming ceremony
    for (let i = 0; i < 20; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.sparkles.push({ mesh, m, life: 1, vx: 0, vy: 0, vz: 0 });
    }

    // ---------- the shining light past the east gate ----------
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 2.0, 14, 18, 1, true),
      new THREE.MeshBasicMaterial({
        color: PALETTE.light, transparent: true, opacity: 0.6,
        side: THREE.DoubleSide, depthWrite: false, fog: false,
      }),
    );
    beam.position.set(LIGHT_X + 1.5, 7, 0);
    s.add(beam);
    this.lightBeam = beam;
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff9dd, transparent: true, opacity: 0.45, depthWrite: false, fog: false }),
    );
    halo.position.set(LIGHT_X + 1.5, 1.6, 0);
    s.add(halo);
    this.lightHalo = halo;

    s.add(this.christian.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.biteCooldown = 0;
    this.bitten = false;
    this.armorStep = -1;
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('gate');
    if (revisit) {
      this.phase = 'done';
      this.setArmorVisible(true);
      this.christian.root.position.set(-27, 0, 0);
      this.cb.setObjective('🏰 Palace Beautiful glows in the dusk — the lions still guard the way');
    } else {
      this.phase = 'approach';
      this.setArmorVisible(false);
      this.christian.root.position.set(-28, 0, 0);
      this.cb.setObjective('🏰 A white palace glows ahead in the failing light…');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'terror' || this.phase === 'welcome' || this.phase === 'testimony' ||
      this.phase === 'roof' || this.phase === 'armor' || this.phase === 'farewell') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    const interior = p.x > 60;
    if (interior) {
      if (p.x < 140) {
        // the hall
        p.x = THREE.MathUtils.clamp(p.x, HALL.x - 4, HALL.x + 16.5);
        p.z = THREE.MathUtils.clamp(p.z, -8.6, 8.6);
        p.y = 0.1;
        // women are solid obstacles
        for (const w of this.women) {
          const wp = w.root.position;
          const dx = p.x - wp.x;
          const dz = p.z - wp.z;
          const d = Math.hypot(dx, dz);
          if (d < 1.4 && d > 0.01) {
            p.x = wp.x + (dx / d) * 1.4;
            p.z = wp.z + (dz / d) * 1.4;
          }
        }
      } else {
        // the rooftop
        p.x = THREE.MathUtils.clamp(p.x, ROOF.x - 7, ROOF.x + 7);
        p.z = THREE.MathUtils.clamp(p.z, -5, 5);
        p.y = ROOF.y;
      }
    } else {
      p.z = THREE.MathUtils.clamp(p.z, -9, 9);
      p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);
      p.y = 0;
      // the palace grounds (north of the road) are solid
      if (p.x > -1 && p.x < 22) p.z = Math.max(p.z, -1.9);
    }

    if (this.revisit || this.phase === 'done') {
      // revisits keep the lions honest too
      this.lionLogic(p);
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'approach' && p.x > LION_X0 - 4) {
      this.phase = 'terror';
      this.cb.rumbleSound();
      this.cb.playScript([
        { speaker: '', text: 'Two enormous lions rise from the shadows beside the road, and their roar rolls down the valley like thunder.' },
        { speaker: 'Christian', text: 'L-LIONS! Loose on the road! It\'s the end of me — I should never have— perhaps I can still run back—' },
        { speaker: 'Watchful', text: '*calling from the gate* HOLD, pilgrim! Do not fear the lions — they are CHAINED!' },
        { speaker: 'Watchful', text: 'They are set there to test faith where it is, and to find out those that have none. Keep to the MIDDLE of the path, and no harm shall come to you!' },
        { speaker: 'Christian', text: 'The middle of the path… right between them?! …Very well. The porter has no reason to lie. Middle of the path, Christian. MIDDLE of the path.' },
      ], () => {
        this.phase = 'gauntlet';
        this.cb.setObjective('🦁 Walk the MIDDLE of the narrow path — stray aside and the lions can reach you!');
      });
      return;
    }

    if (this.phase === 'gauntlet') {
      this.lionLogic(p);
      if (p.x > GATE_X - 1) {
        this.phase = 'welcome';
        this.christian.root.rotation.y = Math.PI / 2;
        this.cb.playScript([
          { speaker: 'Watchful', text: 'Well walked, pilgrim! Many turn back at the first roar — you kept the path. I am Watchful, porter of Palace Beautiful.' },
          { speaker: 'Christian', text: '*knees still knocking* They were… very loud. And very near. My name is Christian, bound from the City of Destruction to Mount Zion.' },
          { speaker: 'Watchful', text: 'Then this house was built by the Lord of the hill for just such as you. Come in — the ladies of the house will want to hear your tale. The night is falling, and the table is set.' },
        ], () => {
          this.cb.fade?.(() => {
            this.christian.root.position.set(HALL.x - 2, 0.1, 0);
            this.christian.root.rotation.y = Math.PI / 2;
            this.cb.setMusic?.('interpreter');
          });
          this.phase = 'testimony';
          // let the fade land before the welcome begins
          window.setTimeout(() => this.runTestimony(), 700);
        });
      }
      return;
    }

    if (this.phase === 'records' && p.distanceTo(new THREE.Vector3(HALL.x + 3, 0.1, -6.4)) < 2.2) {
      this.phase = 'treasures';
      this.cb.playScript([
        { speaker: 'Prudence', text: 'These are the records of the King\'s house — the deeds of His servants of old.' },
        { speaker: 'Prudence', text: 'Here: pilgrims who subdued kingdoms, stopped the mouths of lions, and out of weakness were made strong. Not one of them was braver than you, Christian — they only trusted the same King.' },
        { speaker: 'Christian', text: 'Stopped the mouths of lions… *smiles* I begin to see why the road came past those two.' },
      ], () => {
        this.cb.setObjective('✨ Now to the treasure table, where the relics are kept');
      });
      return;
    }

    if (this.phase === 'treasures' && p.distanceTo(new THREE.Vector3(HALL.x + 12, 0.1, -6.4)) < 2.4) {
      this.phase = 'stairs';
      this.cb.playScript([
        { speaker: 'Piety', text: 'And these are treasures of the household: the rod that budded, the sling of the shepherd boy, the jaw-tooth of the lion Samson slew.' },
        { speaker: 'Piety', text: 'Every one a reminder that the King has been faithful in every age — and He does not change.' },
        { speaker: 'Christian', text: 'So many hands held these before mine ever gripped a walking stick… I am in a very long line of pilgrims, aren\'t I?' },
      ], () => {
        this.cb.setObjective('🔭 Climb the stair at the end of the hall, up to the roof');
      });
      return;
    }

    if (this.phase === 'stairs' && p.distanceTo(new THREE.Vector3(HALL.x + 17.5, 0.1, 2)) < 2.4) {
      this.phase = 'roof';
      this.cb.fade?.(() => {
        this.christian.root.position.set(ROOF.x - 2, ROOF.y, 0);
        this.christian.root.rotation.y = Math.PI / 2;
      });
      window.setTimeout(() => {
        this.cb.playScript([
          { speaker: 'Charity', text: 'One more thing before you sleep, Christian. Come — look through the glass, away east, past the valleys and the river.' },
          { speaker: '', text: 'Far, far off — beyond more country than the eye should be able to cross — something shines: gates like pearl, and streets that glimmer like gold seen through morning mist.' },
          { speaker: 'Christian', text: '…Is that…?' },
          { speaker: 'Charity', text: 'The Celestial City. The end of your road, pilgrim. Every step you have taken — mire, mountain and lion — has been one step nearer THAT.' },
          { speaker: 'Christian', text: 'Then it\'s real. It\'s REAL, and I have seen it with my own eyes… Oh, let morning come quickly — I have such a long way still to walk!' },
        ], () => {
          this.phase = 'roofdown';
          this.cb.setObjective('⬇ Take the stair back down to the hall');
        });
      }, 700);
      return;
    }

    if (this.phase === 'roofdown' && p.x < ROOF.x - 5.5) {
      this.phase = 'armor';
      this.cb.fade?.(() => {
        this.christian.root.position.set(HALL.x + 8, 0.1, -1);
        this.christian.root.rotation.y = 0; // faces south so camera sees his face
        this.women.forEach((w, i) => {
          w.root.position.copy(this.womenHome[i]);
          w.root.rotation.y = Math.PI;
        });
      });
      window.setTimeout(() => {
        this.cb.playScript([
          { speaker: 'Discretion', text: 'It is morning, Christian — and before you go, the house has one gift more. No pilgrim leaves Palace Beautiful unarmed.' },
        ], () => {
          this.armorStep = 0;
          this.armorWalkT = 0;
          this.cb.setObjective('🛡 The armory of the Lord of the hill…');
        });
      }, 700);
      return;
    }

    if (this.phase === 'walkout' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  // lions lunge and bite when Christian strays from the middle of the path
  private lionLogic(p: THREE.Vector3): void {
    if (p.x < LION_X0 || p.x > LION_X1) return;
    if (this.biteCooldown > 0) return;
    if (Math.abs(p.z) <= SAFE_Z) return;
    // BITE — knocked back down the road
    this.biteCooldown = 1.2;
    this.cb.rumbleSound();
    this.cb.blipSound();
    const lion = p.z < 0 ? this.lions[0] : this.lions[1];
    lion.lunge = 1;
    this.burst(p.x, 1.2, p.z, 8);
    p.x = Math.max(WEST_EDGE + 2, p.x - 3.5);
    p.z = 0;
    if (!this.bitten && !this.revisit && this.phase === 'gauntlet') {
      this.bitten = true;
      this.cb.playScript([
        { speaker: 'Christian', text: 'YOW! Teeth! Very large teeth! …The chain stopped it a whisker short. The MIDDLE, Christian — Watchful said the MIDDLE!' },
      ]);
    }
  }

  private burst(x: number, y: number, z: number, count: number): void {
    let n = 0;
    for (const sp of this.sparkles) {
      if (n >= count) break;
      if (sp.life < 1) continue;
      n++;
      sp.life = 0;
      sp.vx = (Math.random() - 0.5) * 2.4;
      sp.vy = 1.2 + Math.random() * 1.6;
      sp.vz = (Math.random() - 0.5) * 2.4;
      sp.mesh.position.set(x, y, z);
      sp.mesh.visible = true;
    }
  }

  private runTestimony(): void {
    this.cb.playScript([
      { speaker: '', text: 'Within, the hall is warm with lamplight. Four women of the house — Discretion, Prudence, Piety and Charity — welcome Christian to the table.' },
      { speaker: 'Discretion', text: 'Welcome, pilgrim of the King. Rest your paws and tell us everything — how does a bear of the City of Destruction come to be so far along the way?' },
      { speaker: 'Christian', text: 'It began with a book, and a burden I could not put down. I fled my city when Evangelist showed me the far light — and fell straight into the Slough of Despond, where Help pulled me out.' },
      { speaker: 'Christian', text: 'A smooth-talking gentleman nearly turned me aside to Morality — Evangelist set me right. Goodwill drew me through the Wicket Gate, and the Interpreter showed me his six sights.' },
      { speaker: 'Christian', text: 'And then… the Cross. My burden loosed itself from my shoulders there and rolled into the empty tomb, and I never saw it again. Not for anything I did — it simply… fell away.' },
      { speaker: 'Piety', text: '*eyes shining* Grace, freely given. There is no sweeter story in all the King\'s country, and we never tire of it.' },
      { speaker: 'Christian', text: 'Since then: three sleepers who would not wake, two travellers over the wall, the Hill Difficulty — where I slept when I should have watched, and nearly lost my scroll for good.' },
      { speaker: 'Charity', text: 'And still you are here — which tells us more about your King than about your legs, dear pilgrim. You shall stay some days with us, and go on strengthened.' },
      { speaker: '', text: 'And so he does. For several days Christian rests at Palace Beautiful, and is comforted, and eats at their table, and sleeps in a chamber called Peace whose window opens toward the sunrise.' },
    ], () => {
      this.phase = 'records';
      this.cb.setObjective('📖 Walk with Prudence to the reading desk, where the King\'s records are kept');
    });
  }

  // the arming ceremony: each woman steps forward and presents a piece
  private armorSequence(dt: number, t: number): void {
    if (this.armorStep < 0 || this.armorStep > 3) return;
    const woman = this.women[this.armorStep];
    const target = this.christian.root.position.clone().add(new THREE.Vector3(0, 0, 2.4));
    const wp = woman.root.position;
    const dx = target.x - wp.x;
    const dz = target.z - wp.z;
    const d = Math.hypot(dx, dz);
    if (d > 0.25) {
      const sp = Math.min(3.4, d * 2.5) * dt;
      wp.x += (dx / d) * sp;
      wp.z += (dz / d) * sp;
      woman.root.rotation.y = Math.atan2(dx, dz);
      animateBear(woman, t, true);
      return;
    }
    woman.root.rotation.y = Math.PI; // faces north toward Christian
    animateBear(woman, t, false);
    this.armorWalkT += dt;
    if (this.armorWalkT < 0.4) return;
    this.armorWalkT = -999; // wait for the script to advance the step
    const step = this.armorStep;
    const pieces: Array<{ line: DialogueLine[]; give: () => void }> = [
      {
        line: [{ speaker: 'Discretion', text: 'The helmet of salvation — let no blow to the mind unseat what the King has settled.' }],
        give: () => { this.armorPieces.helmet.visible = true; },
      },
      {
        line: [{ speaker: 'Prudence', text: 'The breastplate of righteousness — not your own, pilgrim; His. Wear it over your heart.' }],
        give: () => { this.armorPieces.breastplate.visible = true; },
      },
      {
        line: [{ speaker: 'Piety', text: 'The shield of faith — above all, take this. It quenches every fiery dart of the wicked one.' }],
        give: () => { this.armorPieces.shield.visible = true; },
      },
      {
        line: [{ speaker: 'Charity', text: 'And the sword of the Spirit, which is the Word of God. It has never lost a battle, and it never will.' }],
        give: () => { this.armorPieces.sword.visible = true; },
      },
    ];
    this.cb.playScript(pieces[step].line, () => {
      pieces[step].give();
      this.cb.blipSound();
      const cp = this.christian.root.position;
      this.burst(cp.x, cp.y + 1.4, cp.z, 8);
      // the woman returns to her place
      const home = this.womenHome[step];
      woman.root.position.copy(home);
      woman.root.rotation.y = Math.PI;
      this.armorStep = step + 1;
      this.armorWalkT = 0;
      if (this.armorStep > 3) this.runFarewell();
    });
  }

  private runFarewell(): void {
    this.cb.playScript([
      { speaker: '', text: 'Christian stands arrayed head to paw in the whole armor of God, the morning light bright on the steel.' },
      { speaker: 'Christian', text: 'I hardly know myself. …Thank you. All of you. For the table, and the tales, and the glimpse from the roof — and for this.' },
      { speaker: 'Discretion', text: 'Then come — we will walk you to the east gate ourselves. The road runs downhill from here, into the Valley of Humiliation, and you shall not begin it unblessed.' },
    ], () => {
      this.cb.fade?.(() => {
        this.christian.root.position.set(EAST_GATE_X + 1.5, 0, 0);
        this.christian.root.rotation.y = Math.PI / 2;
        // the household lines up by the east gate to see him off
        this.watchful.root.position.set(EAST_GATE_X - 0.5, 0, -2.6);
        this.watchful.root.rotation.y = Math.PI / 2;
        this.women.forEach((w, i) => {
          w.root.position.set(EAST_GATE_X - 1.2 + (i % 2) * 1.6, 0, 2.2 + Math.floor(i / 2) * 1.6);
          w.root.rotation.y = Math.PI / 2;
        });
        this.cb.setMusic?.('cross');
      });
      this.phase = 'farewell';
      window.setTimeout(() => {
        this.cb.playScript([
          { speaker: '', text: 'The whole household walks him out to the east gate, where the morning lies gold on the road.' },
          { speaker: 'Charity', text: 'Go in the strength of the King, Christian. May the road rise gently, and the armor sit light.' },
          { speaker: 'Piety', text: 'We will pray for you every day you are on it. Watch, and keep your sword close.' },
          { speaker: 'Christian', text: 'Farewell, Palace Beautiful! If ever I reach the City… it will be partly because a light was left on in your windows.' },
        ], () => {
          this.phase = 'walkout';
          this.cb.setObjective('✨ Walk on east, down toward the light');
        });
      }, 700);
    });
  }

  nearWatchful(): boolean {
    if (this.phase !== 'walkout' && this.phase !== 'done') return false;
    return this.christian.root.position.distanceTo(this.watchful.root.position) < 3.5;
  }
  talkWatchful(): void {
    this.cb.playScript([
      { speaker: 'Watchful', text: 'The road runs down into the Valley of Humiliation from here. Keep your sword close and your armor on — you will need them both.' },
    ]);
  }
  nearWoman(index: number): boolean {
    if (this.phase !== 'walkout' && this.phase !== 'done') return false;
    return this.christian.root.position.distanceTo(this.women[index].root.position) < 3.0;
  }
  talkWoman(index: number): void {
    const names = ['Discretion', 'Prudence', 'Piety', 'Charity'];
    const lines = [
      'Be wise in all your dealings on the road, Christian — and remember that foolishness often wears the face of reason.',
      'Meditate on what you saw from the rooftop. Let the vision of the City carry you through the dark valleys.',
      'We pray for every pilgrim who has left through that gate. The King hears every prayer lifted for His own.',
      'Give freely as you go — there are others further back on the road who need exactly what you have been given.',
    ];
    this.cb.playScript([{ speaker: names[index], text: lines[index] }]);
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);
    this.biteCooldown = Math.max(0, this.biteCooldown - dt);

    // ---------- the lions: pacing, roaring, lunging ----------
    const p = this.christian.root.position;
    for (let i = 0; i < this.lions.length; i++) {
      const lion = this.lions[i];
      const near = p.x > LION_X0 - 3 && p.x < LION_X1 + 3 && p.x < 60;
      // heads track Christian while he is near
      if (near) {
        lion.head.rotation.x = Math.sin(t * (6 + i)) * 0.12; // roaring toss
        lion.root.position.y = Math.abs(Math.sin(t * (5 + i))) * 0.1;
      } else {
        lion.head.rotation.x = Math.sin(t * 1.2 + i) * 0.05;
        lion.root.position.y = 0;
      }
      // lunge springs toward the path, then eases home
      lion.lunge = Math.max(0, lion.lunge - dt * 2.2);
      const side = i === 0 ? -1 : 1;
      lion.root.position.z = lion.home.z - side * lion.lunge * 1.6;
    }

    // ---------- women idle ----------
    for (let i = 0; i < this.women.length; i++) {
      if (this.phase === 'armor' && i === this.armorStep) continue; // handled below
      animateBear(this.women[i], t + i * 1.4, false);
    }
    animateBear(this.watchful, t + 2.2, false);

    if (this.phase === 'armor') this.armorSequence(dt, t);

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

    if (this.cityGlow) {
      (this.cityGlow.material as THREE.MeshBasicMaterial).opacity =
        0.22 + 0.14 * Math.abs(Math.sin(t * 1.3));
    }
    if (this.lightBeam) {
      const sc = 1 + Math.sin(t * 2.2) * 0.1;
      this.lightBeam.scale.set(sc, 1, sc);
    }
    if (this.lightHalo) {
      (this.lightHalo.material as THREE.MeshBasicMaterial).opacity =
        0.35 + 0.2 * Math.abs(Math.sin(t * 1.7));
    }
  }
}
