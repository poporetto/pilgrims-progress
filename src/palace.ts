import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';
import { addHighwayPaving } from './road';

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
  // Solid furniture/columns in the hall (world coords, axis-aligned boxes).
  private hallColliders: Array<{ x: number; z: number; hx: number; hz: number; kind?: 'welcome-table' }> = [];
  private armorStep = -1;
  private armorWalkT = 0;
  private welcomeTable: THREE.Group | null = null;
  private exteriorSun: THREE.DirectionalLight | null = null;
  private exteriorHemi: THREE.HemisphereLight | null = null;
  private dawnProgress = 0;
  private guideHeadStart = 0;
  private roofSky: THREE.Mesh | null = null;
  private roofStars: Array<{ mesh: THREE.Mesh; material: THREE.MeshBasicMaterial; phase: number; speed: number }> = [];
  private lions: Lion[] = [];
  private biteCooldown = 0;
  private bitten = false; // first-bite hint shown
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];
  private cityGlow: THREE.Mesh | null = null;
  private shining: ShiningLight | null = null;
  private revisit = false;
  private built = false;
  private pilgrimDetailsAdded = false; // finishing plates added exactly once

  constructor(cb: PalaceCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      // Palace Beautiful is where the sling is exchanged for his armour;
      // keeping its back strap beneath the breastplate causes z-fighting.
      sling: false, plump: true,
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
    // A low helmet leaves Christian recognisably bear-shaped instead of turning
    // his head into a tall metal block. The small fur-lined ear caps sit clear
    // of the crown and remain visible from behind.
    helmet.add(block(1.02, 0.28, 0.86, STEEL, 0, 0.84, 0));
    helmet.add(block(0.18, 0.16, 0.9, PALETTE.robeGold, 0, 1.05, 0)); // crest
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, -0.38, 1.08, 0)); // left ear
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, 0.38, 1.08, 0));  // right ear
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

    // Watchful the porter: match his portrait's brown owl and moss-green robe.
    this.watchful = makeBear({
      species: 'owl', fur: 0x806b50, outfit: 'robe', outfitColor: 0x71854d, scale: 1.1,
    });

    // Match the portrait roster exactly, including species and clothing:
    // Discretion the cream rabbit in green, Prudence the honey bear in blue,
    // Piety the cream sheep in green, and Charity the honey bear in cream/pink.
    const womenDefs = [
      { species: 'rabbit' as const, fur: 0xf1dfc7, dress: 0x71865c },
      { species: 'bear' as const, fur: 0xb88b5f, dress: 0x7195b3 },
      { species: 'sheep' as const, fur: 0xead3b5, dress: 0x5f815f },
      { species: 'bear' as const, fur: 0xb88b5f, dress: 0xf3e9d8 },
    ];
    for (const def of womenDefs) {
      const w = makeBear({
        species: def.species, fur: def.fur,
        outfit: 'dress', outfitColor: def.dress, scale: 1.02,
      });
      this.women.push(w);
    }
    // Portrait-specific clothing details.
    this.women[1].body.add(block(0.62, 0.58, 0.08, 0xf1eadc, 0, 0.38, 0.36)); // Prudence's pale apron
    this.women[1].head.add(block(0.2, 0.2, 0.12, 0xf5efdc, 0.37, 0.88, 0.08)); // hair flower
    this.women[2].body.add(block(0.16, 0.2, 0.08, 0xd8b553, 0, 0.68, 0.37));   // Piety's gold clasp
    this.women[3].body.add(block(0.58, 0.54, 0.08, 0xd99aa5, 0, 0.38, 0.36)); // Charity's pink apron
    for (const side of [-1, 1]) {
      this.women[3].head.add(block(0.2, 0.2, 0.13, 0xe9a5b1, 0.3 + side * 0.1, 0.9 + side * 0.08, 0.08));
    }
  }

  // The shared finishing plates (breastplate face, belt, pauldrons, greaves)
  // belong with the breastplate — added once so they never double up.
  private ensurePilgrimDetails(): void {
    if (this.pilgrimDetailsAdded) return;
    this.pilgrimDetailsAdded = true;
    addPilgrimArmorDetails(this.christian);
  }

  // Push Christian out of any solid hall furniture/column (inflated AABB,
  // resolved along the axis of least penetration).
  private resolveHallColliders(p: THREE.Vector3): void {
    const PR = 0.55; // Christian's body radius
    for (const c of this.hallColliders) {
      if (c.kind === 'welcome-table' && !this.welcomeTable?.visible) continue;
      const minX = c.x - c.hx - PR, maxX = c.x + c.hx + PR;
      const minZ = c.z - c.hz - PR, maxZ = c.z + c.hz + PR;
      if (p.x <= minX || p.x >= maxX || p.z <= minZ || p.z >= maxZ) continue;
      const overL = p.x - minX, overR = maxX - p.x;
      const overD = p.z - minZ, overU = maxZ - p.z;
      const m = Math.min(overL, overR, overD, overU);
      if (m === overL) p.x = minX;
      else if (m === overR) p.x = maxX;
      else if (m === overD) p.z = minZ;
      else p.z = maxZ;
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

    this.exteriorHemi = new THREE.HemisphereLight(0xb8b4d8, 0x8a8a9a, 0.75);
    s.add(this.exteriorHemi);
    const sun = new THREE.DirectionalLight(0xd8c4f0, 0.9);
    sun.position.set(-30, 30, 20);
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -55;
    sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -50;
    s.add(sun);
    this.exteriorSun = sun;

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
    addHighwayPaving(s, -29, LION_X0 - 1, { width: 3.1 });
    addHighwayPaving(s, LION_X1 + 2, 43, { width: 3.1 });
    const causeway = block(LION_X1 - LION_X0 + 3, 0.16, 2.2, 0xe4d6b4, (LION_X0 + LION_X1) / 2 + 0.5, 0.08, 0);
    causeway.castShadow = false;
    s.add(causeway);
    addHighwayPaving(s, LION_X0 - 1, LION_X1 + 2, {
      width: 2.0,
      height: 0.08,
      yAt: () => 0.16,
    });

    // ---------- the lions ----------
    this.lions.push(this.makeLion(-1));
    this.lions.push(this.makeLion(1));

    // ---------- Palace Beautiful: a white palace glowing in the dusk ----------
    const palace = new THREE.Group();
    // Warm white (a hint of cream/peach) rather than a cold paper white, while
    // staying firmly in the pastel range.
    const WHITE = 0xfffcf4;
    const TRIM = 0xf6f0e4;
    const GOLD = PALETTE.robeGold;
    const STONE = 0xd8d0c4;

    // terraced front steps rising from the road toward the east gate
    for (let i = 0; i < 4; i++) {
      palace.add(block(5.6 - i * 0.3, 0.18, 4.8 - i * 0.4, STONE, 14.8, 0.09 + i * 0.18, 0));
    }

    // main hall — wider, with a raised clerestory band
    palace.add(block(16, 8, 11, WHITE, 8, 4, 0));
    palace.add(block(16.8, 0.7, 11.8, TRIM, 8, 8.35, 0));          // roof coping
    palace.add(block(13, 2.8, 9, WHITE, 8, 9.8, 0));               // upper storey
    palace.add(block(13.6, 0.55, 9.6, PALETTE.roofPink, 8, 11.5, 0));
    // crenellations along the roofline
    for (let c = 0; c < 9; c++) {
      palace.add(block(0.7, 0.65, 0.7, TRIM, 1.5 + c * 1.6, 12.1, 4.9));
      palace.add(block(0.7, 0.65, 0.7, TRIM, 1.5 + c * 1.6, 12.1, -4.9));
    }

    // corner towers with rosy caps and narrow windows. The two SOUTH towers are
    // pulled back to local z 4 (was 6) so they sit flush with the south wall
    // instead of jutting out onto the road between the lions.
    for (const [tx, tz] of [[1.5, -6], [1.5, 4], [14.5, -6], [14.5, 4]] as const) {
      palace.add(block(3.0, 11, 3.0, WHITE, tx, 5.5, tz));
      palace.add(block(3.4, 0.55, 3.4, TRIM, tx, 11.2, tz));
      palace.add(block(2.4, 2.0, 2.4, PALETTE.roofPink, tx, 12.4, tz));
      palace.add(block(0.14, 0.14, 0.5, GOLD, tx, 8.2, tz + (tz < 0 ? -1.55 : 1.55))); // banner pole
      palace.add(block(0.9, 0.6, 0.06, 0xc9535f, tx, 9.0, tz + (tz < 0 ? -1.58 : 1.58)));
      // warm slit windows up the tower
      for (let wy = 3; wy <= 9; wy += 2.5) {
        const win = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.9, 0.5),
          new THREE.MeshBasicMaterial({ color: 0xffe9a0 }),
        );
        win.position.set(tx + (tz < 0 ? 1.55 : -1.55) * (tz < 0 ? 1 : 1), wy, tz);
        palace.add(win);
      }
    }

    // side wings flanking the central block to the EAST and WEST (not north/
    // south — the old south wing sat squarely on the road and Christian walked
    // straight through it). They sit north of the road, clear of the path.
    for (const side of [-1, 1]) {
      const wx = 8 + side * 10;
      palace.add(block(4, 5.5, 7, WHITE, wx, 2.75, -1));
      palace.add(block(4.4, 0.45, 7.4, TRIM, wx, 5.7, -1));
      palace.add(block(3.2, 1.4, 5.5, PALETTE.roofMint, wx, 6.6, -1));
    }

    // grand arched gate on the EAST face
    palace.add(block(1.0, 6.0, 4.6, TRIM, 16.0, 3.0, 0));           // arch surround
    palace.add(block(1.1, 4.6, 3.2, 0x3a3632, 16.2, 2.3, 0));     // dark doorway
    palace.add(block(0.7, 6.6, 0.7, TRIM, 15.6, 3.3, 2.5));       // pilaster south
    palace.add(block(0.7, 6.6, 0.7, TRIM, 15.6, 3.3, -2.5));      // pilaster north
    palace.add(block(4.8, 0.35, 0.35, GOLD, 16.0, 5.8, 0));       // arch keystone band
    // glowing windows — south and north façades
    for (const [wx, wy, wz] of [
      [4, 4.2, 5.6], [8, 5.0, 5.6], [12, 4.2, 5.6],
      [4, 4.2, -5.6], [8, 5.0, -5.6], [12, 4.2, -5.6],
      [4, 7.2, 5.2], [12, 7.2, 5.2], [4, 7.2, -5.2], [12, 7.2, -5.2],
    ] as const) {
      const win = new THREE.Mesh(
        new THREE.BoxGeometry(1.1, 1.5, 0.14),
        new THREE.MeshBasicMaterial({ color: 0xffe9a0 }),
      );
      win.position.set(wx, wy, wz);
      palace.add(win);
      palace.add(block(1.2, 0.14, 0.18, TRIM, wx, wy + 0.85, wz)); // window sill
    }
    // porch columns and a small portico roof over the gate
    for (const z of [-3.2, 3.2]) {
      palace.add(block(0.55, 6.8, 0.55, WHITE, 15.2, 3.4, z));
      palace.add(block(0.6, 0.6, 0.6, GOLD, 15.2, 6.9, z));        // capital
    }
    palace.add(block(3.8, 0.3, 7.2, TRIM, 15.0, 7.1, 0));

    // courtyard garden north of the road — hedges, lamps, a little fountain
    for (const hx of [4, 10, 16]) {
      palace.add(block(3.5, 0.7, 0.5, 0x5a8a4a, hx, 0.35, -3.2));
      palace.add(block(3.5, 0.7, 0.5, 0x5a8a4a, hx, 0.35, 3.2));
    }
    for (const [lx, lz] of [[6, -2], [12, 2]] as const) {
      const lamp = new THREE.Group();
      lamp.add(block(0.16, 2.6, 0.16, PALETTE.woodDark, 0, 1.3, 0));
      const bulb = block(0.38, 0.38, 0.38, PALETTE.light, 0, 2.7, 0);
      (bulb.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xfff0b0);
      (bulb.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.5;
      lamp.add(bulb);
      lamp.position.set(lx, 0, lz);
      palace.add(lamp);
    }
    // fountain basin in the forecourt
    palace.add(block(2.4, 0.5, 2.4, STONE, 10, 0.25, -2.8));
    palace.add(block(1.6, 0.35, 1.6, PALETTE.water, 10, 0.55, -2.8));
    palace.add(block(0.5, 1.2, 0.5, STONE, 10, 0.9, -2.8));
    for (const side of [-1, 1]) {
      palace.add(block(0.14, 0.5, 0.14, STONE, 10 + side * 0.9, 1.1, -2.8 + side * 0.5));
    }

    // ---------- the GREAT SOUTH DOOR, facing the road (this is the way in) ----------
    // The palace's south wall (local z ≈ +5.5) is the face the pilgrim walks up
    // to. Give it a real, obvious arched doorway with steps, so Christian has a
    // door to enter by — rather than a blank wall he has to walk through.
    // broad steps rising from the road up to the threshold
    for (let i = 0; i < 4; i++) {
      palace.add(block(6.0 - i * 0.5, 0.22, 0.9, STONE, 8, 0.11 + i * 0.22, 7.6 - i * 0.5));
    }
    // the deep, dark doorway opening (recessed into the wall)
    palace.add(block(3.2, 4.9, 1.4, 0x241f1b, 8, 2.45, 5.2));
    // a bright arch surround + pilasters framing it, standing proud of the wall
    palace.add(block(4.6, 0.55, 0.7, GOLD, 8, 5.15, 5.75));          // lintel / keystone band
    palace.add(block(0.7, 5.6, 0.7, TRIM, 8 - 2.15, 2.9, 5.7));      // pilaster (west of door)
    palace.add(block(0.7, 5.6, 0.7, TRIM, 8 + 2.15, 2.9, 5.7));      // pilaster (east of door)
    palace.add(block(4.8, 0.4, 0.4, GOLD, 8, 5.7, 5.75));            // gold band over the arch
    // a lantern each side of the door
    for (const dz of [-1, 1]) {
      const lamp = block(0.34, 0.34, 0.34, PALETTE.light, 8 + dz * 2.6, 3.4, 5.9);
      (lamp.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffe0a0);
      (lamp.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.7;
      palace.add(lamp);
    }

    palace.position.set(0, 0, -7.5);
    s.add(palace);
    const palaceLight = new THREE.PointLight(0xffe9c0, 2.0, 34);
    palaceLight.position.set(8, 7, -2);
    s.add(palaceLight);
    // warm light spilling out of the open south door onto the steps
    const gateGlow = new THREE.PointLight(0xfff0c8, 2.2, 16);
    gateGlow.position.set(8, 2.6, -2.4); // world coords (palace door is at world x 8, z ≈ -2)
    s.add(gateGlow);

    // Watchful stands on the open roadside beside the gate. His old position
    // coincided with the east pilaster at world (10.15, -1.8).
    this.watchful.root.position.set(11.8, 0, 1.75);
    this.watchful.root.rotation.y = -Math.PI / 2;
    s.add(this.watchful.root);

    // road east of the palace, to the light
    addHighwayPaving(s, EAST_GATE_X + 1, EAST_GATE_X + 17, { width: 3.1 });

    // ---------- the great hall (interior, reached by fade) ----------
    const hall = new THREE.Group();
    const WALL = 0xfffbf2;  // clean warm white interior walls
    const WOOD = PALETTE.woodDark;
    const CREAM = 0xeee4d3; // warm white floor

    // floor + walls — NO closed ceiling (the camera looks down into the hall
    // dollhouse-style; a ceiling/roof beams would hide the whole interior)
    const hallFloor = block(26, 0.6, 20, CREAM, 8, -0.3, 0);
    hallFloor.receiveShadow = true;
    hall.add(hallFloor);
    hall.add(block(26, 7, 0.8, WALL, 8, 3.5, -10));
    hall.add(block(26, 7, 0.8, WALL, 8, 3.5, 10));
    hall.add(block(0.8, 7, 20, WALL, -5, 3.5, 0));
    hall.add(block(0.8, 7, 20, WALL, 21, 3.5, 0));

    // paired columns down the nave
    for (let i = 0; i < 5; i++) {
      const cx = -1 + i * 5;
      for (const z of [-6.5, 6.5]) {
        hall.add(block(0.75, 6.2, 0.75, 0xf3ecde, cx, 3.1, z));
        hall.add(block(0.85, 0.35, 0.85, GOLD, cx, 6.35, z));       // capital
      }
    }

    // wall tapestries between the columns
    for (const [tx, tz, col] of [
      [1, -9.5, 0xc9808a], [6, -9.5, 0xa8c4d9], [11, -9.5, 0xc9e2b8], [16, -9.5, 0xf2e2c9],
    ] as const) {
      hall.add(block(3.2, 3.6, 0.12, col, tx, 3.2, tz));
      hall.add(block(3.4, 0.18, 0.16, WOOD, tx, 5.1, tz));         // rod
    }

    // hanging chandeliers
    for (const cx of [5, 11]) {
      const ch = new THREE.Group();
      ch.add(block(0.14, 1.8, 0.14, WOOD, 0, 5.8, 0));
      ch.add(block(0.9, 0.14, 0.9, GOLD, 0, 4.9, 0));
      for (const a of [0, 1.57, 3.14, 4.71]) {
        const arm = block(0.5, 0.08, 0.08, GOLD, Math.cos(a) * 0.35, 4.75, Math.sin(a) * 0.35);
        ch.add(arm);
        const flame = block(0.14, 0.2, 0.14, 0xffe08a, Math.cos(a) * 0.55, 4.65, Math.sin(a) * 0.55);
        (flame.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffd070);
        (flame.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6;
        ch.add(flame);
      }
      ch.position.set(cx, 0, 0);
      hall.add(ch);
    }

    // long rug with border stripes down the middle
    const hallRug = block(20, 0.06, 3.6, 0xc9808a, 8, 0.04, 0);
    hallRug.castShadow = false;
    hall.add(hallRug);
    for (const z of [-1.7, 1.7]) {
      // Sit clearly above the rug's 0.07 top surface. The previous stripes
      // ended at that exact same height and flickered from z-fighting.
      const border = block(20, 0.04, 0.22, 0xa85a68, 8, 0.09, z);
      border.castShadow = false;
      hall.add(border);
    }

    // Welcome table with bread, fruit and goblets. It is grouped so it can be
    // cleared away before the armor procession rather than being walked through.
    const welcomeTable = new THREE.Group();
    welcomeTable.add(block(5.5, 0.8, 2.4, WOOD, 8, 0.4, 1.5));
    for (const [fx, fc] of [[-1.4, 0xf25b6a], [-0.4, 0xffe08a], [0.6, 0xff8a4a], [1.4, 0xe8d4f8]] as const) {
      welcomeTable.add(block(0.28, 0.28, 0.28, fc, 8 + fx, 0.88, 1.5));
    }
    for (const gx of [-0.8, 0.8]) {
      welcomeTable.add(block(0.18, 0.45, 0.18, 0xcfd6dd, 8 + gx, 1.0, 1.8));
    }
    // Keep the dining furniture left of the household line-up so the ladies
    // have a clear aisle during the welcome and armor scenes.
    welcomeTable.position.x = -5.55;
    hall.add(welcomeTable);
    this.welcomeTable = welcomeTable;

    // The King's records sit neatly in the first bay between the columns.
    // Keeping the desk compact leaves a clear aisle around both pillars.
    const recordsX = 1.4;
    const recordsZ = -8.05;
    hall.add(block(3.35, 0.18, 1.55, WOOD, recordsX, 1.38, recordsZ));
    hall.add(block(3.5, 0.12, 1.7, GOLD, recordsX, 1.5, recordsZ)); // warm brass rim
    hall.add(block(3.18, 0.1, 1.38, 0xf6edda, recordsX, 1.57, recordsZ));
    for (const lx of [-1.25, 1.25]) {
      for (const lz of [-0.48, 0.48]) {
        hall.add(block(0.22, 1.35, 0.22, WOOD, recordsX + lx, 0.68, recordsZ + lz));
        hall.add(block(0.32, 0.12, 0.32, GOLD, recordsX + lx, 0.08, recordsZ + lz));
      }
    }
    // An open illuminated ledger, with separate cream pages and a central spine.
    hall.add(block(1.35, 0.08, 0.72, 0xfff9e9, recordsX - 0.7, 1.68, recordsZ));
    hall.add(block(1.35, 0.08, 0.72, 0xfff9e9, recordsX + 0.7, 1.68, recordsZ));
    hall.add(block(0.1, 0.12, 0.76, 0x9b704e, recordsX, 1.7, recordsZ));
    for (const lineX of [-1.02, -0.68, 0.68, 1.02]) {
      hall.add(block(0.06, 0.025, 0.5, 0xc6ad83, recordsX + lineX, 1.73, recordsZ));
    }
    // Scrolls and ledgers stacked beside the desk.
    for (let i = 0; i < 3; i++) {
      hall.add(block(0.55 + i * 0.08, 0.16, 0.72, i % 2 ? 0xa8c4d9 : 0xc9808a,
        recordsX - 1.05, 1.66 + i * 0.17, recordsZ + 0.25));
    }
    hall.add(block(0.14, 1.55, 0.14, WOOD, recordsX - 1.55, 0.78, recordsZ));
    hall.add(block(0.48, 0.12, 0.48, GOLD, recordsX - 1.55, 1.48, recordsZ));
    const deskLamp = block(0.3, 0.3, 0.3, 0xffe08a, recordsX - 1.55, 1.68, recordsZ);
    (deskLamp.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xffd070);
    (deskLamp.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.7;
    hall.add(deskLamp);
    const recordsGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 14, 12),
      new THREE.MeshBasicMaterial({
        color: 0xfff0b0, transparent: true, opacity: 0.16, depthWrite: false,
      }),
    );
    recordsGlow.position.set(recordsX, 1.75, recordsZ);
    hall.add(recordsGlow);
    const recordsLight = new THREE.PointLight(0xffdfa0, 1.25, 8);
    recordsLight.position.set(recordsX, 2.7, recordsZ);
    hall.add(recordsLight);

    // A raised, museum-like treasure display with a gold-edged cream top,
    // labelled plinths and separated relic silhouettes.
    hall.add(block(5.2, 1.15, 2.5, WOOD, 12, 0.58, -7.5));
    hall.add(block(5.35, 0.18, 2.65, GOLD, 12, 1.2, -7.5));
    hall.add(block(5.05, 0.12, 2.35, 0xfff7e8, 12, 1.34, -7.5));
    for (const px of [10.75, 12, 13.25]) {
      hall.add(block(1.05, 0.18, 1.25, 0xe9dfca, px, 1.47, -7.5));
      hall.add(block(0.7, 0.08, 0.18, 0xcaa24a, px, 1.61, -6.95));
    }
    // Budding rod with tiny green shoots.
    hall.add(block(0.14, 1.15, 0.14, 0x8a6f52, 10.75, 2.12, -7.5));
    hall.add(block(0.24, 0.15, 0.14, 0x76a65c, 10.6, 2.42, -7.5));
    hall.add(block(0.24, 0.15, 0.14, 0x76a65c, 10.9, 2.15, -7.5));
    // Shepherd's sling laid in a clear V on its own plinth.
    const slingL = block(0.1, 0.72, 0.1, 0x8a6f52, 11.82, 1.94, -7.5);
    slingL.rotation.z = -0.48;
    hall.add(slingL);
    const slingR = block(0.1, 0.72, 0.1, 0x8a6f52, 12.18, 1.94, -7.5);
    slingR.rotation.z = 0.48;
    hall.add(slingR);
    hall.add(block(0.32, 0.2, 0.16, 0xa77952, 12, 1.72, -7.5));
    // Pale stepped jawbone and tooth shapes.
    hall.add(block(0.8, 0.18, 0.24, 0xe8e0d0, 13.25, 1.74, -7.5));
    hall.add(block(0.18, 0.4, 0.2, 0xf3ecdf, 13.0, 1.92, -7.5));
    hall.add(block(0.18, 0.4, 0.2, 0xf3ecdf, 13.5, 1.92, -7.5));
    const relicGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 14, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.18, depthWrite: false }),
    );
    relicGlow.position.set(12, 1.7, -7.5);
    hall.add(relicGlow);

    // side benches along the walls
    for (const z of [-8.2, 8.2]) {
      hall.add(block(8, 0.5, 1.2, WOOD, 8, 0.25, z));
      hall.add(block(8, 0.12, 1.3, WOOD, 8, 0.55, z));             // backrest
    }

    // hearth on the west wall
    hall.add(block(2.8, 2.2, 0.6, 0xd8d0c4, -3.5, 1.1, -9.3));
    hall.add(block(1.6, 1.0, 0.4, 0x2a2018, -3.5, 0.7, -9.0));
    const ember = block(0.8, 0.2, 0.3, 0xff6a20, -3.5, 0.45, -9.0);
    (ember.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xff5010);
    (ember.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.7;
    hall.add(ember);

    // empty armor stands (filled during the arming ceremony)
    for (const ax of [6, 10]) {
      hall.add(block(0.14, 1.7, 0.14, WOOD, ax, 0.85, -9.0));
      hall.add(block(0.5, 0.5, 0.4, 0xcfd6dd, ax, 1.5, -9.0));     // helmet form
      hall.add(block(0.55, 0.7, 0.35, 0xcfd6dd, ax, 0.75, -9.0)); // breastplate form
    }

    // Ascending stair flush to the east wall, with broad stone steps, a landing,
    // handrails and an open dark roof doorway.
    const STAIR_X = 19.4;
    for (let i = 0; i < 7; i++) {
      const h = 0.3 * (i + 1);
      hall.add(block(2.45, h, 0.82, i % 2 ? 0xe8e0d1 : 0xf0e8da, STAIR_X, h / 2, 1.1 + i * 0.82));
      for (const side of [-1, 1]) {
        hall.add(block(0.14, 0.72, 0.14, GOLD, STAIR_X + side * 1.18, h + 0.35, 1.1 + i * 0.82));
      }
    }
    hall.add(block(2.65, 0.24, 1.35, 0xeee6d7, STAIR_X, 2.14, 7.1)); // top landing
    hall.add(block(2.9, 2.8, 0.5, WOOD, STAIR_X, 3.25, 7.8));       // doorway frame
    hall.add(block(2.15, 2.15, 0.18, 0x211e1b, STAIR_X, 3.15, 7.48)); // open doorway

    hall.position.copy(HALL);
    s.add(hall);
    // Solid obstacles so Christian can't walk through the columns or tables.
    // Positions mirror the local layout above, offset into world coords.
    this.hallColliders = [];
    for (let i = 0; i < 5; i++) {
      const cx = -1 + i * 5;
      for (const z of [-6.5, 6.5]) {
        this.hallColliders.push({ x: HALL.x + cx, z, hx: 0.45, hz: 0.45 }); // columns
      }
    }
    this.hallColliders.push({ x: HALL.x + 2.45, z: 1.5, hx: 2.75, hz: 1.1, kind: 'welcome-table' });
    this.hallColliders.push({ x: HALL.x + 1.4, z: -8.05, hx: 1.7, hz: 0.85 }); // records desk
    this.hallColliders.push({ x: HALL.x + 12, z: -7.5, hx: 2.5, hz: 1.2 });  // treasure table
  const hallLight = new THREE.PointLight(0xffd99e, 3.6, 58);
  hallLight.position.set(HALL.x + 8, 5, 0);
  s.add(hallLight);
  const hallFill = new THREE.PointLight(0xffedc7, 2.1, 36);
  hallFill.position.set(HALL.x + 3, 4, -7);
  s.add(hallFill);
  const hallFillFar = new THREE.PointLight(0xffe2ad, 1.7, 34);
  hallFillFar.position.set(HALL.x + 15, 4.5, 6);
  s.add(hallFillFar);

  // The exterior sun's shadow camera is centred on the palace grounds, far
  // from this offset interior. A local, feathered spotlight keeps Christian's
  // shadow visible in the hall without changing the outdoor dusk lighting.
  const hallShadowLight = new THREE.SpotLight(
    0xffd39b,
    3.1,
    44,
    Math.PI / 3,
    0.72,
    1.2,
  );
  hallShadowLight.position.set(HALL.x + 1, 14, 10);
  hallShadowLight.target.position.set(HALL.x + 8, 0, 0);
  hallShadowLight.castShadow = true;
  hallShadowLight.shadow.mapSize.set(2048, 2048);
  hallShadowLight.shadow.camera.near = 1;
  hallShadowLight.shadow.camera.far = 48;
  hallShadowLight.shadow.bias = -0.00025;
  hallShadowLight.shadow.normalBias = 0.025;
  hallShadowLight.shadow.radius = 4;
  s.add(hallShadowLight, hallShadowLight.target);

    // ---------- the rooftop (interior area two) ----------
    // A broad sky plane beneath the elevated roof replaces the flat scene
    // background with a soft midnight gradient wherever the roof has no floor.
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 256;
    skyCanvas.height = 256;
    const skyCtx = skyCanvas.getContext('2d');
    if (skyCtx) {
      const gradient = skyCtx.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0, '#182749');
      gradient.addColorStop(0.48, '#33466f');
      gradient.addColorStop(1, '#756f9b');
      skyCtx.fillStyle = gradient;
      skyCtx.fillRect(0, 0, 256, 256);
    }
    const skyTexture = new THREE.CanvasTexture(skyCanvas);
    skyTexture.colorSpace = THREE.SRGBColorSpace;
    const roofSky = new THREE.Mesh(
      new THREE.PlaneGeometry(150, 100),
      new THREE.MeshBasicMaterial({ map: skyTexture, fog: false }),
    );
    roofSky.rotation.x = -Math.PI / 2;
    roofSky.position.set(ROOF.x, ROOF.y - 3, 0);
    roofSky.visible = false;
    s.add(roofSky);
    this.roofSky = roofSky;

    // Separate luminous voxel stars pulse independently over the gradient.
    for (let i = 0; i < 88; i++) {
      const size = 0.11 + (i % 4) * 0.045;
      const material = new THREE.MeshBasicMaterial({
        color: i % 5 === 0 ? 0xffe8a8 : 0xf8f3dc,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        fog: false,
      });
      const star = new THREE.Mesh(new THREE.PlaneGeometry(size, size), material);
      star.rotation.x = -Math.PI / 2;
      // Deterministic scatter keeps the composition stable between visits.
      star.position.set(
        ROOF.x - 65 + ((i * 29) % 130),
        ROOF.y - 2.88,
        -43 + ((i * 47) % 86),
      );
      star.visible = false;
      s.add(star);
      this.roofStars.push({ mesh: star, material, phase: i * 0.83, speed: 1.1 + (i % 5) * 0.22 });
    }

    const roof = new THREE.Group();
    roof.add(block(18, 0.8, 14, 0xf2ead8, 0, -0.4, 0));
    // low parapet walls around the edge
    for (let i = 0; i < 8; i++) {
      roof.add(block(0.65, 0.95, 0.65, 0xe8e2d2, -8 + i * 2.3, 0.48, -6.6));
      roof.add(block(0.65, 0.95, 0.65, 0xe8e2d2, -8 + i * 2.3, 0.48, 6.6));
    }
    roof.add(block(18, 0.35, 0.7, 0xe8e2d2, 0, 0.98, -6.6));
    roof.add(block(18, 0.35, 0.7, 0xe8e2d2, 0, 0.98, 6.6));
    roof.add(block(0.7, 0.35, 14, 0xe8e2d2, -8.8, 0.98, 0));       // west parapet
    roof.add(block(0.7, 0.35, 14, 0xe8e2d2, 8.8, 0.98, 0));        // east parapet
    for (let i = 0; i < 7; i++) {
      roof.add(block(0.65, 0.95, 0.65, 0xe8e2d2, 8.8, 0.48, -5.8 + i * 1.9));
    }

    // a small rooftop garden bed
    roof.add(block(2.4, 0.35, 1.2, 0x5a8a4a, 4, 0.18, -4.5));
    for (let i = 0; i < 5; i++) {
      roof.add(block(0.14, 0.28, 0.14, PALETTE.flowerPink, 3.4 + i * 0.35, 0.42, -4.5 + (i % 2) * 0.3));
    }

    // The telescope: the same well-made Perspective Glass used on the
    // Delectable Mountains — a stone plinth, a splayed tripod, and a banded
    // brass barrel with rings, eyepiece and a glowing lens, angled up east
    // toward the far Celestial City.
    const scope = new THREE.Group();
    const BRASS = 0xcaa24a, BRASS_DK = 0x9a7a34, SWOOD = 0x5a4636;
    scope.add(block(1.5, 0.3, 1.5, 0x9aa886, 0, 0.15, 0));   // stone plinth
    scope.add(block(1.15, 0.16, 1.15, 0x8a9876, 0, 0.36, 0));
    for (const a of [0, 2.1, 4.2]) {
      const lx = Math.cos(a) * 0.45, lz = Math.sin(a) * 0.45;
      const leg = block(0.12, 1.7, 0.12, SWOOD, lx, 1.05, lz);
      leg.rotation.z = Math.cos(a) * 0.24;
      leg.rotation.x = Math.sin(a) * 0.24;
      scope.add(leg);
      scope.add(block(0.18, 0.11, 0.18, 0x40342a, lx * 1.7, 0.11, lz * 1.7)); // foot
    }
    scope.add(block(0.38, 0.38, 0.38, BRASS_DK, 0, 1.85, 0)); // yoke/mount
    const barrel = new THREE.Group();
    barrel.add(block(0.34, 1.8, 0.34, BRASS, 0, 0, 0));          // main tube
    barrel.add(block(0.42, 0.13, 0.42, BRASS_DK, 0, 0.5, 0));    // ring
    barrel.add(block(0.42, 0.13, 0.42, BRASS_DK, 0, -0.05, 0));  // ring
    barrel.add(block(0.28, 0.46, 0.28, BRASS_DK, 0, -1.08, 0));  // eyepiece
    barrel.add(block(0.44, 0.18, 0.44, BRASS, 0, 0.95, 0));      // objective housing
    const lens = block(0.4, 0.11, 0.4, 0x9fe0f0, 0, 1.08, 0);   // glass
    (lens.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0x9fe0f0);
    (lens.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.35;
    barrel.add(lens);
    barrel.position.set(0.1, 2.2, 0);
    barrel.rotation.z = -Math.PI / 3.2; // tilt up toward the east
    scope.add(barrel);
    scope.position.set(2, 0, 0);
    roof.add(scope);

    // bench for stargazing beside the telescope
    roof.add(block(2.2, 0.45, 0.8, PALETTE.woodDark, -1, 0.23, 2.5));

    // A true stairwell cut into the roof: the dark opening sits within the
    // floor and the visible treads descend below roof level toward the west.
    roof.add(block(4.8, 0.06, 2.55, 0x26231f, -5.7, 0.05, 0));
    for (let i = 0; i < 5; i++) {
      const y = -0.02 - i * 0.12;
      roof.add(block(0.78, 0.16, 2.15, i % 2 ? 0xd8ceba : 0xe5dbc7, -3.95 - i * 0.75, y, 0));
    }
    // Stone curb around the opening. There is deliberately no hatch panel:
    // the former brown slab looked like a stray door lying across the stairs.
    roof.add(block(4.9, 0.18, 0.18, 0xe8e2d2, -5.65, 0.12, -1.28));
    roof.add(block(4.9, 0.18, 0.18, 0xe8e2d2, -5.65, 0.12, 1.28));
    for (const z of [-1.12, 1.12]) {
      roof.add(block(0.14, 1.05, 0.14, GOLD, -3.55, 0.55, z));
      roof.add(block(0.14, 1.05, 0.14, GOLD, -7.75, 0.55, z));
      roof.add(block(4.2, 0.12, 0.12, GOLD, -5.65, 1.03, z));
    }

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

    // ---------- the shining light past the east gate (the standard beacon) ----------
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

    s.add(this.christian.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.biteCooldown = 0;
    this.bitten = false;
    this.armorStep = -1;
    this.dawnProgress = 0;
    this.guideHeadStart = 0;
    if (this.welcomeTable) this.welcomeTable.visible = true;
    this.scene.background = new THREE.Color(0x8a86b8);
    if (this.scene.fog instanceof THREE.Fog) this.scene.fog.color.setHex(0x8a86b8);
    // Reset after farewells/debug re-entry, when Watchful may have been moved
    // to the household line-up at the east gate.
    this.watchful.root.position.set(11.8, 0, 1.75);
    this.watchful.root.rotation.y = -Math.PI / 2;
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('gate');
    if (revisit) {
      this.phase = 'done';
      this.setArmorVisible(true);
      this.ensurePilgrimDetails();
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
    if (this.guideHeadStart > 0) return 0;
    return (this.phase === 'terror' || this.phase === 'welcome' || this.phase === 'testimony' ||
      this.phase === 'roof' || this.phase === 'armor' || this.phase === 'farewell') ? 0 : 1;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    const interior = p.x > 60;
    if (interior) {
      if (p.x < 140) {
        // the hall
        p.x = THREE.MathUtils.clamp(p.x, HALL.x - 4, HALL.x + 18.5);
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
        // ...and so are the columns, welcome table, records desk and treasures
        this.resolveHallColliders(p);
      } else {
        // the rooftop
        p.x = THREE.MathUtils.clamp(p.x, ROOF.x - 7, ROOF.x + 7);
        p.z = THREE.MathUtils.clamp(p.z, -5, 5);
        p.y = ROOF.y;
        // The looking glass has a wide plinth and splayed tripod. Treat them
        // as one round obstacle so Christian moves naturally around the model.
        const scopeX = ROOF.x + 2;
        const dx = p.x - scopeX;
        const dz = p.z;
        const d = Math.hypot(dx, dz);
        const minD = 1.55;
        if (d < minD) {
          if (d > 0.01) {
            p.x = scopeX + dx / d * minD;
            p.z = dz / d * minD;
          } else {
            p.x = scopeX - minD;
          }
        }
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
        { speaker: 'Watchful', text: 'They are there to test whether travellers truly trust the King. Stay in the MIDDLE of the path, and they cannot harm you!' },
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

    if (this.phase === 'records' && p.distanceTo(new THREE.Vector3(HALL.x + 1.4, 0.1, -6.35)) < 2.2) {
      this.phase = 'treasures';
      this.cb.playScript([
        { speaker: 'Prudence', text: 'These are the records of the King\'s house — stories of His faithful servants from long ago.' },
        { speaker: 'Prudence', text: 'Look here: pilgrims who overcame kingdoms, survived lions, and found strength when they felt weak. They were not braver than you, Christian. They simply trusted the same King.' },
        { speaker: 'Christian', text: 'Survived lions… *smiles* I think I understand why my road passed those two.' },
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

    if (this.phase === 'stairs' && p.distanceTo(new THREE.Vector3(HALL.x + 19.4, 0.1, 3.9)) < 3.0) {
      this.phase = 'roof';
      this.cb.fade?.(() => {
        this.christian.root.position.set(ROOF.x - 2, ROOF.y, 0);
        this.christian.root.rotation.y = Math.PI / 2;
        const charity = this.women[3];
        charity.root.position.set(ROOF.x + 0.2, ROOF.y, -2.3);
        charity.root.rotation.y = -Math.PI / 2;
      });
      window.setTimeout(() => {
        this.cb.playScript([
          { speaker: 'Charity', text: 'One more thing before you sleep, Christian. Come — look through the glass, away east, past the valleys and the river.' },
          { speaker: '', text: 'Far, far off — beyond more country than the eye should be able to cross — something shines: gates like pearl, and streets that glimmer like gold seen through morning mist.' },
          { speaker: 'Christian', text: '…Is that…?' },
          { speaker: 'Charity', text: 'The Celestial City — the end of your journey. Every step through deep mud, over mountains, and past lions has carried you closer to THAT.' },
          { speaker: 'Christian', text: 'Then it\'s real. It\'s REAL, and I have seen it with my own eyes… Oh, let morning come quickly — I have such a long way still to walk!' },
        ], () => {
          this.phase = 'roofdown';
          this.cb.setObjective('⬇ Take the stair back down to the hall');
        });
      }, 700);
      return;
    }

    if (this.phase === 'roofdown' && p.x < ROOF.x - 6.2) {
      this.phase = 'armor';
      this.cb.fade?.(() => {
        if (this.welcomeTable) this.welcomeTable.visible = false;
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
      { speaker: 'Discretion', text: 'Welcome, traveller of the King. Rest your paws and tell us your story. How did a bear from the City of Destruction travel so far?' },
      { speaker: 'Christian', text: 'It began with a book, and a burden I could not put down. I fled my city when Evangelist showed me the far light — and fell straight into the Slough of Despond, where Help pulled me out.' },
      { speaker: 'Christian', text: 'A smooth-talking gentleman nearly turned me aside to Morality — Evangelist set me right. Goodwill drew me through the Wicket Gate, and the Interpreter showed me his six sights.' },
      { speaker: 'Christian', text: 'And then… the Cross. My burden loosed itself from my shoulders there and rolled into the empty tomb, and I never saw it again. Not for anything I did — it simply… fell away.' },
      { speaker: 'Piety', text: '*eyes shining* Grace, freely given. There is no sweeter story in all the King\'s country, and we never tire of it.' },
      { speaker: 'Christian', text: 'Since then: three sleepers who would not wake, two travellers over the wall, the Hill Difficulty — where I slept when I should have watched, and nearly lost my scroll for good.' },
      { speaker: 'Charity', text: 'And you are still here. That tells us more about your faithful King than about your tired legs. Stay with us for a few days, then continue with new strength.' },
      { speaker: '', text: 'And so he does. For several days Christian rests at Palace Beautiful, and is comforted, and eats at their table, and sleeps in a chamber called Peace whose window opens toward the sunrise.' },
    ], () => {
      this.phase = 'records';
      this.guideHeadStart = 1.25;
      this.cb.setObjective('📖 Prudence is leading the way — follow her to the King\'s records');
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
        line: [{ speaker: 'Discretion', text: 'The helmet of salvation. It will remind you that the King has rescued you, even when frightening thoughts attack.' }],
        give: () => { this.armorPieces.helmet.visible = true; },
      },
      {
        line: [{ speaker: 'Prudence', text: 'The breastplate of righteousness. Its goodness comes from the King, not from you. Wear it over your heart.' }],
        give: () => {
          this.armorPieces.breastplate.visible = true;
          // The finishing plates belong to the breastplate, so they appear now
          // rather than only once the final sword is handed over.
          this.ensurePilgrimDetails();
        },
      },
      {
        line: [{ speaker: 'Piety', text: 'The shield of faith. Hold it up when the enemy sends burning lies at you, and trust the King\'s promises.' }],
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
    // Safety net: if the breastplate step somehow did not add them, ensure the
    // finishing plates are present before Christian leaves fully armed.
    this.ensurePilgrimDetails();
    this.cb.playScript([
      { speaker: '', text: 'Christian stands arrayed head to paw in the whole armor of God, the morning light bright on the steel.' },
      { speaker: 'Christian', text: 'I hardly know myself. …Thank you. All of you. For the table, and the tales, and the glimpse from the roof — and for this.' },
      { speaker: 'Discretion', text: 'Then come with us. We will walk you to the east gate. The road leads downhill into the Valley of Humiliation, and we want to bless you before you begin.' },
    ], () => {
      this.cb.fade?.(() => {
        this.dawnProgress = 0.01;
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
    if (!['approach', 'gauntlet', 'walkout', 'done'].includes(this.phase)) return false;
    return this.christian.root.position.distanceTo(this.watchful.root.position) < 3.5;
  }
  talkWatchful(): void {
    this.cb.playScript([
      { speaker: 'Watchful', text: 'The road runs down into the Valley of Humiliation from here. Keep your sword close and your armor on — you will need them both.' },
    ]);
  }
  nearWoman(index: number): boolean {
    const hallConversation = ['records', 'treasures', 'stairs'].includes(this.phase);
    const roofConversation = this.phase === 'roofdown' && index === 3;
    const outsideConversation = this.phase === 'walkout' || this.phase === 'done';
    if (!hallConversation && !roofConversation && !outsideConversation) return false;
    return this.christian.root.position.distanceTo(this.women[index].root.position) < 3.0;
  }
  womanName(index: number): string {
    return ['Discretion', 'Prudence', 'Piety', 'Charity'][index] ?? 'Keeper';
  }
  talkWoman(index: number): void {
    const names = ['Discretion', 'Prudence', 'Piety', 'Charity'];
    const lines = [
      'Be wise in all your dealings on the road, Christian — and remember that foolishness often wears the face of reason.',
      'Meditate on what you saw from the rooftop. Let the vision of the City carry you through the dark valleys.',
      'We pray for every pilgrim who has left through that gate. The King hears every prayer lifted for His own.',
      'Give freely as you go — there are others further back on the road who need exactly what you have been given.',
    ];
    const woman = this.women[index];
    const dx = this.christian.root.position.x - woman.root.position.x;
    const dz = this.christian.root.position.z - woman.root.position.z;
    woman.root.rotation.y = Math.atan2(dx, dz);
    this.christian.root.rotation.y = Math.atan2(-dx, -dz);
    this.cb.playScript([{ speaker: names[index], text: lines[index] }]);
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    this.guideHeadStart = Math.max(0, this.guideHeadStart - dt);
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

    // ---------- guided palace walk + women idle ----------
    for (let i = 0; i < this.women.length; i++) {
      if (this.phase === 'armor' && i === this.armorStep) continue; // handled below
      let target: THREE.Vector3 | null = null;
      if (this.phase === 'records' && i === 1) {
        // Stop at the open left side of the records, while remaining clear of
        // the column at local (-1, -6.5).
        target = new THREE.Vector3(HALL.x - 0.85, 0.1, -8.0);
      } else if (this.phase === 'treasures' && i === 2) {
        // Approach the treasure display from its open south-west corner,
        // avoiding the column at local (9, -6.5).
        target = new THREE.Vector3(HALL.x + 10.25, 0.1, -4.7);
      }
      const woman = this.women[i];
      let walking = false;
      if (target) {
        const dx = target.x - woman.root.position.x;
        const dz = target.z - woman.root.position.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.12) {
          const step = Math.min(d, dt * 4.2);
          woman.root.position.x += dx / d * step;
          woman.root.position.z += dz / d * step;
          woman.root.rotation.y = Math.atan2(dx, dz);
          walking = true;
        }
      }
      animateBear(woman, t + i * 1.4, walking);
    }
    animateBear(this.watchful, t + 2.2, false);

    if (this.phase === 'armor') this.armorSequence(dt, t);

    // The farewell begins at dawn. Let the violet night lift gradually into a
    // warm pastel morning while the household says goodbye outside.
    if (this.dawnProgress > 0 && this.dawnProgress < 1) {
      this.dawnProgress = Math.min(1, this.dawnProgress + dt * 0.12);
      const d = this.dawnProgress;
      const sky = new THREE.Color(0x8a86b8).lerp(new THREE.Color(0xbfdced), d);
      this.scene.background = sky;
      if (this.scene.fog instanceof THREE.Fog) this.scene.fog.color.copy(sky);
      if (this.exteriorSun) {
        this.exteriorSun.color.copy(new THREE.Color(0xd8c4f0).lerp(new THREE.Color(0xffe1a8), d));
        this.exteriorSun.intensity = THREE.MathUtils.lerp(0.9, 1.55, d);
        this.exteriorSun.position.set(
          THREE.MathUtils.lerp(-30, -38, d),
          THREE.MathUtils.lerp(20, 36, d),
          THREE.MathUtils.lerp(20, 12, d),
        );
      }
      if (this.exteriorHemi) {
        this.exteriorHemi.color.copy(new THREE.Color(0xb8b4d8).lerp(new THREE.Color(0xffedcf), d));
        this.exteriorHemi.intensity = THREE.MathUtils.lerp(0.75, 1.05, d);
      }
    }

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
    const roofSkyVisible = this.phase === 'roof' || this.phase === 'roofdown';
    if (this.roofSky) this.roofSky.visible = roofSkyVisible;
    for (const star of this.roofStars) {
      star.mesh.visible = roofSkyVisible;
      star.material.opacity = 0.32 + 0.66 * Math.pow(0.5 + 0.5 * Math.sin(t * star.speed + star.phase), 2);
    }
    if (this.shining) animateShiningLight(this.shining, t);
  }
}
