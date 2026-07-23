import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';
import { addHighwayPaving } from './road';

// Chapter XII — the Plain of Ease and the Hill Lucre.
// Christian and Hopeful, fresh out of Vanity Fair, overtake MR. BY-ENDS of
// Fair-speech — religion's fair-weather friend, who walks with it only when
// it wears silver slippers and the sun shines. Offered plain terms, he
// leaves in a huff to join his old school friends in their carriage:
// Hold-the-world, Money-love and Save-all. Then, beside the road, the
// glittering Hill Lucre and its silver mine — with smooth DEMAS at the
// mouth, calling pilgrims aside to easy wealth. Enter, and the mine is a
// poison-gassed trap to be escaped; pass by, and Demas laughs you down the
// road. Either way By-ends' party turns aside — and the pit takes them.
// Past the hill stands the pillar of salt that was Lot's wife: touch it,
// remember, be healed — and walk on to the light.

interface LucreCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  rumbleSound: () => void;
  blipSound: () => void;
  setMusic?: (style: 'village' | 'slough' | 'cross') => void;
  fade?: (mid: () => void) => void;
  // a two-option branching choice; cb receives 0 (option A) or 1 (option B)
  showChoice: (a: string, b: string, cb: (pick: 0 | 1) => void) => void;
  battleUI: (show: boolean) => void;   // solo bar: Christian's health
  setHP: (christian: number) => void;
}

type Phase =
  | 'walk'       // the Plain of Ease
  | 'byends'     // parked: Mr. By-ends and the choice
  | 'huff'       // he flounces off to the carriage
  | 'toHill'     // on toward Hill Lucre
  | 'demas'      // parked: the mine's mouth and the choice
  | 'mine'       // inside: gas rising, get OUT
  | 'doom'       // By-ends' party turns aside — and the pit takes them
  | 'toPillar'   // the road past the hill
  | 'pillar'     // the statue blocks the way until touched
  | 'final'      // healed — on to the light
  | 'done';

const WEST_EDGE = -32;
const LIGHT_X = 42;
const BYENDS_X = -16;
const DEMAS_X = 6;
const PILLAR_X = 24;

// the mine interior, far off on the same scene
const MINE = new THREE.Vector3(110, 0, 0);

export class LucreScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: LucreCallbacks;
  private christian: BearParts;
  private hopeful: BearParts;
  private byends: BearParts;
  private friends: BearParts[] = []; // Hold-the-world, Money-love, Save-all
  private carriage: THREE.Group | null = null;
  private demas: BearParts;
  private huffT = 0;
  private doomT = -1;
  private chp = 100;
  private poisoned = false;
  private pillarTouched = false;
  private pillar: THREE.Group | null = null;
  private pillarGlow: THREE.Mesh | null = null;
  private mineGlow: THREE.Mesh | null = null;
  private gas: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private gasTimer = 0;
  private mist: THREE.Mesh[] = [];
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];
  private smoke: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private shining: ShiningLight | null = null;
  private revisit = false;
  private built = false;

  constructor(cb: LucreCallbacks) {
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

    // ---------- Mr. By-ends: flamboyant, spotless — and SILVER SLIPPERS ----------
    this.byends = makeBear({
      species: 'cat', fur: 0xe6cfc0, outfit: 'shirt', outfitColor: 0xc23a8a,
    });
    // a plumed travelling hat
    this.byends.head.add(block(0.9, 0.14, 0.8, 0x8a3a6a, 0, 0.88, 0));
    this.byends.head.add(block(0.6, 0.3, 0.55, 0x8a3a6a, 0, 1.05, 0));
    const plume = block(0.1, 0.55, 0.1, 0xf2e2c9, 0.32, 1.3, 0);
    plume.rotation.z = -0.4;
    this.byends.head.add(plume);
    // gold trim and the famous silver slippers
    this.byends.body.add(block(0.5, 0.12, 0.06, 0xffd94a, 0, 0.66, 0.36));
    this.byends.legL.add(block(0.36, 0.2, 0.42, 0xdde4ea, 0, -0.5, 0.04));
    this.byends.legR.add(block(0.36, 0.2, 0.42, 0xdde4ea, 0, -0.5, 0.04));

    // his three old school friends — plump, prosperous pigs
    const friendCoats = [0x3a5f8a, 0x5a7a4a, 0x8a5a3a];
    for (let i = 0; i < 3; i++) {
      const f = makeBear({ species: 'pig', outfit: 'shirt', outfitColor: friendCoats[i], scale: 1.02 });
      f.head.add(block(0.7, 0.12, 0.65, 0x2e2a30, 0, 0.88, 0)); // little top hats
      f.head.add(block(0.45, 0.3, 0.42, 0x2e2a30, 0, 1.05, 0));
      this.friends.push(f);
    }

    // ---------- Demas, silver-tongued and silver-suited ----------
    this.demas = makeBear({
      species: 'cat', fur: 0xd97f4a, outfit: 'shirt', outfitColor: 0xb8c4d0,
    });
    this.demas.head.add(block(0.2, 0.16, 0.14, 0xd97f4a, 0, 0.22, 0.5)); // fox muzzle
    this.demas.body.add(block(0.2, 0.2, 0.2, 0xfaf6ec, 0.2, 0.62, -0.74)); // fox tail tip
    this.demas.body.add(block(0.4, 0.4, 0.06, 0xffd94a, 0, 0.5, 0.37)); // a gold medallion
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xd9f0fc);
    s.fog = new THREE.Fog(0xd9f0fc, 44, 110);

    s.add(new THREE.HemisphereLight(0xf4faff, 0xcfe8c0, 1.15));
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.5);
    // light from the EAST (+x) so shadows fall to the left across the plain
    sun.position.set(52, 40, 20);
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -55;
    sun.shadow.camera.right = 60;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -50;
    s.add(sun);

    // the Plain of Ease: broad, bright, easy underfoot
    const ground = new THREE.Mesh(new THREE.BoxGeometry(180, 1, 90), mat(0x9ecf8c));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 40; i++) {
      const x = -50 + Math.random() * 100;
      const z = -35 + Math.random() * 70;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x8fc47d : 0xaede9c, x, 0.04 + Math.random() * 0.03, z);
      p.castShadow = false;
      s.add(p);
    }
    for (let i = 0; i < 24; i++) {
      const fx = -30 + Math.random() * 70;
      const fz = (Math.random() > 0.5 ? 1 : -1) * (2.5 + Math.random() * 8);
      const f = block(0.16, 0.16, 0.16,
        [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        fx, 0.12, fz);
      f.castShadow = false;
      s.add(f);
    }

    // the King's Highway: proper PAVED stones, straight and sure
    addHighwayPaving(s, -32, 42, {
      width: 3.2,
      colors: [0xd9c9a8, 0xc8b892, 0xe7d8b7, 0xbbaa87],
    });

    // silver mist clinging to the off-path edges of the plain
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(5 + Math.random() * 4, 1.2, 3 + Math.random() * 2),
        new THREE.MeshLambertMaterial({ color: 0xdfe6ee, transparent: true, opacity: 0.4 }),
      );
      m.position.set(-28 + Math.random() * 62, 0.8 + Math.random() * 0.6,
        (Math.random() > 0.5 ? 1 : -1) * (7.5 + Math.random() * 4));
      m.castShadow = false;
      s.add(m);
      this.mist.push(m);
    }

    // ---------- the carriage of the three friends, off-path in the mist ----------
    const carriage = new THREE.Group();
    carriage.add(block(3.2, 1.2, 1.8, 0x8a3a6a, 0, 1.3, 0));
    carriage.add(block(3.4, 0.3, 2.0, 0xffd94a, 0, 2.0, 0));
    carriage.add(block(1.0, 0.9, 1.7, 0x6a2a52, -1.6, 0.9, 0));
    for (const [wx, wz] of [[-1.1, -1.0], [-1.1, 1.0], [1.1, -1.0], [1.1, 1.0]] as const) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.2, 10), mat(0x4a3428));
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(wx, 0.55, wz);
      carriage.add(wheel);
    }
    carriage.position.set(BYENDS_X + 5, 0, -9);
    s.add(carriage);
    this.carriage = carriage;
    this.friends.forEach((f, i) => {
      f.root.position.set(BYENDS_X + 3.2 + i * 1.4, 0, -8 + (i % 2) * 1.2);
      f.root.rotation.y = Math.PI * 0.75;
      s.add(f.root);
    });

    // ---------- HILL LUCRE: jagged, metallic, glittering ----------
    const hill = new THREE.Group();
    const silvers = [0x9aa4b2, 0x8a94a2, 0xaab4c2];
    for (const [hx, hy, hw, hh, hz] of [
      [0, 1.6, 7, 3.2, 0], [2.5, 3.2, 4.5, 3.4, -1], [-2.5, 2.8, 4, 2.6, -0.5],
      [0.5, 5.0, 2.6, 2.4, -1.2], [-1.5, 4.4, 2.0, 1.8, -1.5],
    ] as const) {
      hill.add(block(hw, hh, 4 + Math.random() * 2, silvers[Math.floor(Math.random() * 3)], hx, hy, hz));
    }
    // (the scattered white "silver vein" flecks on the hill face were removed —
    // they read as random floating boxes rather than veins in the rock)
    // the mine mouth, glowing an unwholesome silver-green
    hill.add(block(2.2, 2.4, 0.6, 0x2e2a30, 0, 1.1, 2.2));
    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 1.9, 0.3),
      new THREE.MeshBasicMaterial({ color: 0xb8e8c9, transparent: true, opacity: 0.8 }),
    );
    glow.position.set(0, 1.0, 2.45);
    hill.add(glow);
    this.mineGlow = glow;
    hill.position.set(DEMAS_X, 0, -7.5);
    s.add(hill);
    // Demas at his post beside the road
    this.demas.root.position.set(DEMAS_X - 1.2, 0, -3.4);
    this.demas.root.rotation.y = Math.PI;
    s.add(this.demas.root);
    // By-ends waits by the road
    this.byends.root.position.set(BYENDS_X + 1.5, 0, -1.6);
    this.byends.root.rotation.y = -Math.PI / 2;
    s.add(this.byends.root);

    // ---------- the mine interior ----------
    const mine = new THREE.Group();
    mine.add(block(18, 0.6, 14, 0x3a3640, 0, -0.3, 0));                 // floor
    mine.add(block(18, 5.5, 0.8, 0x2e2a30, 0, 2.75, -7));
    mine.add(block(0.8, 5.5, 14, 0x2e2a30, -9, 2.75, 0));
    mine.add(block(0.8, 5.5, 14, 0x2e2a30, 9, 2.75, 0));
    // (no ceiling — the camera looks in from above, dollhouse-style)
    // props: timber braces, ore carts, and of course the CHESTS
    for (const bx of [-6, 0, 6]) {
      mine.add(block(0.4, 5, 0.4, 0x5e4a38, bx, 2.5, -6.4));
      mine.add(block(4, 0.4, 0.4, 0x5e4a38, bx, 4.9, -6.2));
    }
    for (const [cx, cz] of [[-5, -4], [3, -5], [6.5, 1], [-6.5, 2.5]] as const) {
      mine.add(block(1.1, 0.7, 0.8, 0x8a6f52, cx, 0.35, cz));
      mine.add(block(1.2, 0.3, 0.9, 0xffd94a, cx, 0.78, cz));           // lid ajar, gold gleaming
      mine.add(block(0.5, 0.25, 0.4, 0xe8eef4, cx + 0.1, 0.95, cz));    // spilling silver
    }
    // glowing silver veins in the walls
    for (let i = 0; i < 7; i++) {
      const vein = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.2, 0.12),
        new THREE.MeshBasicMaterial({ color: 0xb8e8c9 }),
      );
      vein.position.set(-7 + Math.random() * 14, 1 + Math.random() * 3.5, -6.6);
      vein.rotation.z = Math.random();
      mine.add(vein);
    }
    mine.position.copy(MINE);
    s.add(mine);
    const mineLight = new THREE.PointLight(0xb8e8c9, 2.4, 26);
    mineLight.position.set(MINE.x, 3, 0);
    s.add(mineLight);
    // the poison gas pool
    for (let i = 0; i < 16; i++) {
      const m = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x9ad9a8 : 0xb8c4d0, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.gas.push({ mesh, m, life: 1 });
    }

    // ---------- the pillar of salt: a cat-woman, one arm raised, looking back ----------
    const pillar = new THREE.Group();
    pillar.add(block(1.6, 0.4, 1.6, 0xe8e4dc, 0, 0.2, 0)); // plinth
    const salt = 0xf4f0e8;
    // wide gown (feminine silhouette)
    pillar.add(block(1.3, 1.5, 0.9, salt, 0, 0.95, 0));
    pillar.add(block(0.6, 0.75, 0.62, salt, 0, 2.1, 0)); // bodice
    // cat head with pointed ears, turned back
    const catHead = new THREE.Group();
    catHead.add(block(0.5, 0.46, 0.42, salt, 0, 0, 0));
    catHead.add(block(0.2, 0.24, 0.14, salt, -0.2, 0.3, 0)); // left ear
    catHead.add(block(0.2, 0.24, 0.14, salt, 0.2, 0.3, 0));  // right ear
    catHead.rotation.y = -Math.PI * 0.45; // looking back westward
    catHead.position.set(0, 2.63, 0);
    pillar.add(catHead);
    // right arm down
    pillar.add(block(0.2, 0.55, 0.2, salt, 0.42, 2.0, 0));
    // left arm raised up in alarm
    pillar.add(block(0.2, 0.52, 0.2, salt, -0.42, 2.1, 0));    // upper arm
    pillar.add(block(0.18, 0.48, 0.18, salt, -0.54, 2.6, -0.1)); // forearm
    pillar.add(block(0.16, 0.22, 0.16, salt, -0.6, 2.95, -0.18)); // hand
    const pGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 14, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff9dd, transparent: true, opacity: 0.14, depthWrite: false }),
    );
    pGlow.position.y = 1.5;
    pillar.add(pGlow);
    this.pillarGlow = pGlow;
    pillar.position.set(PILLAR_X, 0, 0);
    s.add(pillar);
    this.pillar = pillar;

    // trees near the road's happy end
    for (const [tx, tz, blossom] of [
      [30, 7, true], [35, -7, false], [-26, 8, true], [-8, 9, false],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // sparkle + smoke pools
    for (let i = 0; i < 18; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.sparkles.push({ mesh, m, life: 1, vx: 0, vy: 0, vz: 0 });
    }
    for (let i = 0; i < 22; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x8a8f98, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.smoke.push({ mesh, m, life: 1 });
    }

    // the shining light at the road's end — the beacon that ends every chapter
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

    s.add(this.hopeful.root);
    s.add(this.christian.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.chp = 100;
    this.poisoned = false;
    this.pillarTouched = revisit;
    this.doomT = -1;
    this.huffT = 0;
    this.byends.root.visible = !revisit;
    this.byends.root.position.set(BYENDS_X + 1.5, 0, -1.6);
    this.demas.root.visible = true;
    for (const f of this.friends) f.root.visible = !revisit;
    if (this.carriage) this.carriage.visible = !revisit;
    this.cb.battleUI(false);
    this.hopeful.root.visible = true;
    this.hopeful.root.position.set(-33, 0, 1.4);
    this.christian.root.position.set(revisit ? -30 : -31, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('village');
    if (revisit) {
      this.phase = 'done';
      this.cb.setObjective('🌼 The Plain of Ease, and the quiet hill that swallowed the greedy');
    } else {
      this.phase = 'walk';
      this.cb.setObjective('🌼 The Plain of Ease — walk the paved highway with Hopeful');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    // ('pillar' stays walkable so the player can line up with the statue)
    return (this.phase === 'byends' || this.phase === 'demas' || this.phase === 'doom') ? 0 : 1;
  }

  nearPillar(): boolean {
    if (this.pillarTouched || !this.pillar) return false;
    return this.christian.root.position.distanceTo(this.pillar.position) < 3.6;
  }

  tryTouchPillar(): void {
    if (!this.nearPillar()) return;
    this.pillarTouched = true;
    this.cb.blipSound(); // the soft, divine chime
    const p = this.christian.root.position;
    this.burst(PILLAR_X, 1.6, 0, 12, 0xfff9dd);
    this.cb.playScript([
      { speaker: '', text: 'A woman of pale white salt, caught mid-stride — forever half-turned, looking back the way she came.' },
      { speaker: '', text: 'Beneath her, worn letters: REMEMBER LOT\'S WIFE. Do not look back at what you left behind.' },
      { speaker: 'Hopeful', text: '*quietly* She only looked, didn\'t she. That\'s all Demas asked of us too. Just a look.' },
      { speaker: 'Christian', text: 'And here she stands, between the silver hill and the road, so no pilgrim can pass without remembering. Come — eyes east, friend. Always east.' },
    ], () => {
      // the final checkpoint: fully healed, every trace of the gas gone
      this.chp = 100;
      this.poisoned = false;
      this.cb.battleUI(false);
      this.burst(p.x, 1.5, p.z, 10, 0xfff9dd);
      this.phase = 'final';
      this.cb.setMusic?.('cross');
      this.cb.setObjective('✨ Healed and warned — walk on east, into the light');
    });
  }

  // push Christian out of any solid obstacle (NPCs, carriage, the silver hill /
  // mine mound), so he can't walk through them
  private collideObstacles(p: THREE.Vector3): void {
    const obs: Array<[number, number, number]> = [];
    if (this.demas.root.visible) obs.push([this.demas.root.position.x, this.demas.root.position.z, 1.1]);
    if (this.byends.root.visible) obs.push([this.byends.root.position.x, this.byends.root.position.z, 1.1]);
    for (const f of this.friends) if (f.root.visible) obs.push([f.root.position.x, f.root.position.z, 1.1]);
    // the silver hill / mine mound is large — keeps the player on the road side
    obs.push([DEMAS_X, -7.5, 5.2]);
    for (const [ox, oz, r] of obs) {
      const dx = p.x - ox;
      const dz = p.z - oz;
      const d = Math.hypot(dx, dz);
      if (d < r && d > 1e-4) {
        p.x = ox + (dx / d) * r;
        p.z = oz + (dz / d) * r;
      }
    }
  }

  afterMove(dt: number): void {
    const p = this.christian.root.position;
    const inMine = p.x > 80;
    if (inMine) {
      p.x = THREE.MathUtils.clamp(p.x, MINE.x - 8.2, MINE.x + 8.2);
      p.z = THREE.MathUtils.clamp(p.z, -6.2, 6.6);
      p.y = 0;
      if (this.phase === 'mine') {
        // the gas drains the party's strength — grab nothing, get OUT
        this.chp = Math.max(6, this.chp - dt * 7);
        this.cb.setHP(this.chp);
        if (p.z > 5.8) {
          // out through the entrance
          this.leaveMine();
        }
      }
      return;
    }
    p.z = THREE.MathUtils.clamp(p.z, -11, 11);
    p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);
    p.y = 0;
    // solid obstacles: NPCs, and the glittering silver hill / mine — Christian
    // is pushed out of them so he can't walk through people or the mine
    this.collideObstacles(p);
    // the pillar blocks the middle of the narrowed road until it is touched
    if (!this.pillarTouched && p.x > PILLAR_X - 2.2) {
      p.x = PILLAR_X - 2.2;
      if (this.phase === 'toPillar') {
        this.phase = 'pillar';
        this.cb.setObjective('🧂 A pale statue blocks the road — press E to look closer');
      }
    }

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'walk' && p.x > BYENDS_X - 3) {
      this.phase = 'byends';
      this.cb.playScript([
        { speaker: '', text: 'They overtake a traveller in spotless, flamboyant gear — and, catching the sun at every step, a pair of gleaming SILVER SLIPPERS.' },
        { speaker: 'By-ends', text: 'Well met, gentlemen! By-ends of Fair-speech, at your service — a pilgrim, like yourselves! Though I confess I differ from the stricter sort in two small points.' },
        { speaker: 'By-ends', text: 'First: I never strive against wind and tide. Second: I am most zealous for religion when it walks in silver slippers — in the SUNSHINE, with applause. Surely we can travel together on those terms?' },
        { speaker: 'Hopeful', text: '*whispers* He wants the crown without the cross, doesn\'t he.' },
      ], () => {
        this.cb.showChoice(
          '"You may walk with us — but you must go against wind and tide, and own religion in rags and irons as well as in silver slippers."',
          '"A true pilgrim cannot trade the road\'s hardship for comfort. We walk whether the sun shines or not."',
          () => {
            // either way, plain terms — and either way, the huff
            this.cb.playScript([
              { speaker: 'By-ends', text: '*recoiling as though splashed* Rags? IRONS? Going against the TIDE? You speak like fanatics! I shall NOT abandon my old principles — they are harmless, and PROFITABLE.' },
              { speaker: 'By-ends', text: 'Good day to you both. I shall wait for more agreeable company — and look! Here comes some now, in a very comfortable carriage. Gentlemen of my own school days!' },
              { speaker: '', text: 'And off he flounces through the silver mist, where three prosperous gentlemen — Mr. Hold-the-world, Mr. Money-love and Mr. Save-all — welcome him like a lost brother.' },
            ], () => {
              this.phase = 'huff';
              this.huffT = 0;
              this.cb.setObjective('🥿 By-ends departs for better weather — walk on east');
            });
          },
        );
      });
      return;
    }

    if (this.phase === 'toHill' && p.x > DEMAS_X - 5) {
      this.phase = 'demas';
      this.cb.playScript([
        { speaker: '', text: 'Beside the road rises a jagged, glittering hill — LUCRE — and at a glowing mine-mouth stands a silver-suited fox, beckoning with both paws.' },
        { speaker: 'Demas', text: 'Ho, pilgrims! Turn aside, turn aside! A silver mine, not sixty paces off your road! Dig for a MOMENT and be rich for a LIFETIME — thousands have done it!' },
        { speaker: 'Hopeful', text: 'Christian, look at it GLOW! Just a few minutes of digging could pay for our entire journey! Provisions, lodging — think of it!' },
        { speaker: 'Christian', text: 'I\'ve heard of this place, Hopeful. The ground is false, the air is worse — and the treasure is a snare to them that seek it.' },
      ], () => {
        this.cb.showChoice(
          'Take Hopeful\'s arm and keep to the highway. ("The road is safe. The mine is not.")',
          'Step off the path and look inside the mine. ("…Just a quick look at those chests.")',
          (pick) => {
            if (pick === 0) {
              this.cb.playScript([
                { speaker: 'Christian', text: '*taking Hopeful firmly by the arm* We walk ON, friend. Treasure that asks you to leave the way is no treasure at all.' },
                { speaker: 'Demas', text: '*laughing after them* Suit yourselves, saints! More silver for the sensible! HA HA HA!' },
                { speaker: 'Hopeful', text: '*shaking himself* …Thank you. It really did glow, didn\'t it. Right up until you said "snare", it glowed.' },
              ], () => this.beginDoom());
            } else {
              this.cb.fade?.(() => {
                this.christian.root.position.set(MINE.x, 0, 4.4);
                this.christian.root.rotation.y = 0;
                this.hopeful.root.position.set(MINE.x - 1.6, 0, 5.2);
                this.hopeful.root.rotation.y = 0;
                this.cb.setMusic?.('slough');
              });
              this.phase = 'mine';
              this.chp = 100;
              this.cb.battleUI(true);
              this.cb.setHP(this.chp);
              window.setTimeout(() => {
                this.cb.playScript([
                  { speaker: '', text: 'Chests of gold and spilling silver, everywhere — and rising from the floor between them, a slow silver-green haze that stings the eyes and claws the throat.' },
                  { speaker: 'Hopeful', text: '*coughing* The air — Christian, the AIR is wrong! This is why nobody ever comes BACK rich!' },
                ], () => {
                  this.cb.setObjective('☠ POISON GAS! Get back out the way you came — south, to the entrance!');
                });
              }, 700);
            }
          },
        );
      });
      return;
    }

    if (this.phase === 'final' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private leaveMine(): void {
    this.cb.fade?.(() => {
      this.christian.root.position.set(DEMAS_X + 2, 0, 0);
      this.christian.root.rotation.y = Math.PI / 2;
      this.hopeful.root.position.set(DEMAS_X + 0.4, 0, 1.4);
      this.hopeful.root.rotation.y = Math.PI / 2;
      this.cb.setMusic?.('village');
    });
    this.poisoned = true;
    this.phase = 'doom';
    window.setTimeout(() => {
      this.cb.playScript([
        { speaker: 'Christian', text: '*coughing, leaning on his knees* Out. OUT. Every coin still in its chest, and my lungs full of that... Hopeful, look at us. One glance at easy silver, and we nearly stayed in that hill forever.' },
        { speaker: 'Demas', text: '*from his post, all sympathy* No luck, friends? Ah well. Some haven\'t the constitution for wealth.' },
      ], () => this.beginDoom());
    }, 700);
  }

  private beginDoom(): void {
    // By-ends and his friends walk FROM the carriage TO the mine — and the pit takes them
    this.phase = 'doom';
    this.doomT = 0;
    const party = [this.byends, ...this.friends];
    party.forEach((who, i) => {
      who.root.visible = true;
      // start at the carriage
      who.root.position.set(BYENDS_X + 3 + (i % 2) * 1.6, 0, -7.2 - Math.floor(i / 2) * 1.4);
      who.root.rotation.y = Math.PI / 2; // facing east, toward mine
    });
    if (this.carriage) this.carriage.position.set(BYENDS_X - 2, 0, -8.5);
    this.cb.setObjective('⛏ By-ends and his friends head straight for the mine…');
  }

  private runDoomScript(): void {
    this.cb.rumbleSound();
    this.cb.playScript([
      { speaker: '', text: 'By-ends and his three old school-friends hurry past the pilgrims and up to the mine mouth, already arguing over shares.' },
      { speaker: 'By-ends', text: 'NOW, gentlemen — here is religion AND profit walking arm in arm at last! After you, Mr. Money-love! No no, after YOU—' },
      { speaker: '', text: 'The ground gives one long groan. The mine mouth breathes out a cloud of silver-green — and the hill swallows the four of them, slippers and all. They are never seen again on the way.' },
      { speaker: 'Hopeful', text: '*very quietly* …That could have been us, Christian. That WAS nearly us.' },
      { speaker: 'Christian', text: 'Remember it, friend. And look — there ahead, the King has set us a reminder older than any of us. Come.' },
    ], () => {
      this.phase = 'toPillar';
      this.cb.setObjective('🧂 Walk on — something pale stands in the narrowing road ahead');
    });
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

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const p = this.christian.root.position;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // Hopeful follows through every phase where the party walks
    if (this.phase === 'walk' || this.phase === 'toHill' || this.phase === 'toPillar' ||
        this.phase === 'final' || this.phase === 'mine' || this.phase === 'done' || this.phase === 'huff') {
      const wp = this.hopeful.root.position;
      const dx = (p.x - 1.9) - wp.x;
      const dz = (p.z + 1.4) - wp.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.25) {
        const sp = Math.min(6.6, d * 2.5) * dt;
        wp.x += (dx / d) * sp;
        wp.z += (dz / d) * sp;
        this.hopeful.root.rotation.y = Math.atan2(dx, dz);
        animateBear(this.hopeful, t + 0.6, true);
      } else {
        animateBear(this.hopeful, t + 0.6, false);
      }
    } else {
      animateBear(this.hopeful, t + 0.6, false);
    }

    // ---------- By-ends: waiting, then flouncing off to the carriage ----------
    if (this.byends.root.visible) {
      if (this.phase === 'huff') {
        this.huffT += dt;
        const bp = this.byends.root.position;
        const tx = BYENDS_X + 4;
        const tz = -7.4;
        const dx = tx - bp.x;
        const dz = tz - bp.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.3) {
          bp.x += (dx / d) * dt * 3.4;
          bp.z += (dz / d) * dt * 3.4;
          // nose in the air the whole way
          this.byends.root.rotation.y = Math.atan2(dx, dz);
          this.byends.head.rotation.x = -0.25;
          animateBear(this.byends, t * 1.4, true);
        } else {
          this.byends.head.rotation.x = 0;
          this.byends.root.rotation.y = Math.PI * 0.75;
          animateBear(this.byends, t, false);
          if (this.huffT > 2 && this.phase === 'huff') {
            this.phase = 'toHill';
            this.cb.setObjective('⛰ On east — something glitters beside the road ahead');
          }
        }
      } else if (this.phase !== 'doom') {
        animateBear(this.byends, t * 1.2, false);
      }
    }
    for (let i = 0; i < this.friends.length; i++) {
      if (this.phase !== 'doom') animateBear(this.friends[i], t + i * 1.3, false);
    }

    // ---------- the doom of the greedy ----------
    if (this.phase === 'doom' && this.doomT >= 0) {
      this.doomT += dt;
      const party = [this.byends, ...this.friends];
      // the mine-mouth door, in world space (hill at (DEMAS_X,0,-7.5); mouth at
      // hill-local z +2.2, facing the road)
      const DOOR_X = DEMAS_X;
      const DOOR_FRONT_Z = -4.6; // just outside the door
      if (this.doomT < 4.0) {
        // they run eagerly across the plain and line up at the mine DOOR
        party.forEach((who, i) => {
          if (!who.root.visible) return;
          const tx = DOOR_X + (i - 1.5) * 0.5; // a little queue at the mouth
          const tz = DOOR_FRONT_Z;
          const dx = tx - who.root.position.x;
          const dz = tz - who.root.position.z;
          const d = Math.hypot(dx, dz);
          if (d > 0.35) {
            who.root.position.x += (dx / d) * dt * 4.5;
            who.root.position.z += (dz / d) * dt * 4.5;
            who.root.rotation.y = Math.atan2(dx, dz);
          } else {
            who.root.rotation.y = Math.PI; // turn to face into the doorway (−z)
          }
          animateBear(who, t * 1.4, d > 0.35);
        });
      } else if (this.doomT < 6.4) {
        // one by one they step THROUGH the door into the dark, and the hill
        // swallows them — walking in (−z, into the hill) as they sink
        party.forEach((who, i) => {
          if (!who.root.visible) return;
          if (this.doomT > 4.0 + i * 0.4) {
            who.root.position.z -= dt * 1.6;  // into the doorway
            who.root.position.y -= dt * 1.1;  // and down into the earth
            who.root.rotation.y = Math.PI;
            animateBear(who, t, true);
            if (who.root.position.z < -6.4) who.root.visible = false;
          }
        });
        // a cloud of silver-green smoke breathes OUT of the mine mouth
        for (const sm of this.smoke) {
          if (sm.life >= 1 && Math.random() < dt * 26) {
            sm.life = 0;
            sm.m.color.set(0x9ad9a8);
            sm.mesh.position.set(DOOR_X + (Math.random() - 0.5) * 2.6, 0.7 + Math.random() * 1.4, -5.0);
            sm.mesh.visible = true;
            break;
          }
        }
        // the door glow flares as it breathes the cloud out
        if (this.mineGlow) {
          const m = this.mineGlow.material as THREE.MeshBasicMaterial;
          m.opacity = 0.8 + Math.sin(t * 9) * 0.2;
        }
      } else {
        for (const who of party) who.root.visible = false;
        this.doomT = -1;
        this.runDoomScript();
      }
    }

    // ---------- the mine gas ----------
    if (this.phase === 'mine') {
      this.gasTimer -= dt;
      if (this.gasTimer <= 0) {
        this.gasTimer = 0.22;
        const g = this.gas.find((q) => q.life >= 1);
        if (g) {
          g.life = 0;
          g.mesh.position.set(
            MINE.x - 7 + Math.random() * 14, 0.2, -6 + Math.random() * 11,
          );
          g.mesh.visible = true;
        }
      }
    }
    for (const g of this.gas) {
      if (g.life >= 1) continue;
      g.life = Math.min(1, g.life + dt * 0.5);
      g.mesh.position.y += dt * 1.1;
      g.mesh.scale.setScalar(0.7 + g.life * 1.6);
      g.m.opacity = 0.45 * (1 - g.life);
      if (g.life >= 1) g.mesh.visible = false;
    }
    // smoke
    for (const sm of this.smoke) {
      if (sm.life >= 1) continue;
      sm.life = Math.min(1, sm.life + dt * 0.7);
      sm.mesh.position.y += dt * 1.3;
      sm.mesh.scale.setScalar(0.7 + sm.life * 1.6);
      sm.m.opacity = 0.5 * (1 - sm.life);
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

    // ambience: drifting silver mist, breathing mine-glow, patient Demas
    for (let i = 0; i < this.mist.length; i++) {
      const m = this.mist[i];
      m.position.x += Math.sin(t * 0.4 + i) * dt * 0.2;
      (m.material as THREE.MeshLambertMaterial).opacity = 0.3 + 0.15 * Math.sin(t * 0.5 + i * 1.3);
    }
    if (this.mineGlow) {
      (this.mineGlow.material as THREE.MeshBasicMaterial).opacity =
        0.6 + 0.3 * Math.abs(Math.sin(t * 1.6));
    }
    if (this.pillarGlow) {
      (this.pillarGlow.material as THREE.MeshBasicMaterial).opacity =
        this.pillarTouched ? 0.08 : 0.1 + 0.1 * Math.abs(Math.sin(t * 1.4));
    }
    if (this.demas.root.visible && this.phase !== 'doom') {
      animateBear(this.demas, t * 1.1, false);
      // forever beckoning
      this.demas.armR.rotation.x = -0.8 + Math.sin(t * 2.4) * 0.4;
    }
    if (this.shining) animateShiningLight(this.shining, t);
  }
}
