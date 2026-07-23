import * as THREE from 'three';
import { PALETTE } from './palette';
import {
  makeBear, animateBear, addPilgrimArmorDetails, addShiningOneDetails,
  BearParts, block, mat,
} from './bear';
import { setupSunShadow, makeShiningLight, animateShiningLight, ShiningLight } from './light';
import { DialogueLine } from './npcs';
import { addHighwayPaving } from './road';

interface EnchantedCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  showChoice: (a: string, b: string, cb: (pick: 0 | 1) => void) => void;
  setObjective: (text: string) => void;
  setSleep: (value: number, show: boolean) => void;
  setDream: (amount: number) => void;
  onComplete: () => void;
  onExit: () => void;
  blipSound: () => void;
  setMusic?: (style: 'village' | 'cross') => void;
}

type Phase =
  | 'enter' | 'ignorance' | 'fork' | 'trap' | 'atheist'
  | 'enchanted' | 'ignoranceApproach' | 'ignoranceReturn' | 'depart' | 'done';

const WEST = -40;
const IGNORANCE_X = -28;
const FORK_X = -13;
const MERGE_X = 7;
const ATHEIST_X = 16;
const DREAM_X = 25;
const DREAM_END = 68;
const IGNORANCE_RETURN_X = 73;
const LIGHT_X = 88;

export class EnchantedScene {
  scene = new THREE.Scene();
  phase: Phase = 'enter';
  private cb: EnchantedCallbacks;
  private christian: BearParts;
  private hopeful: BearParts;
  private ignorance: BearParts;
  private flatterer: BearParts;
  private atheist: BearParts;
  private angel: BearParts;
  private net = new THREE.Group();
  private shining: ShiningLight | null = null;
  private pollen: Array<{ mesh: THREE.Mesh; phase: number; baseY: number }> = [];
  private fogBanks: THREE.Mesh[] = [];
  private sleepers: BearParts[] = [];
  private sleepBubbles: Array<{ mesh: THREE.Mesh; sleeper: BearParts; phase: number }> = [];
  private sleep = 0;
  private wakeCooldown = 0;
  private sleepWarning = false;
  private chosenTrap = true;
  private ignoranceTriggered = false;
  private forkTriggered = false;
  private trapTriggered = false;
  private atheistTriggered = false;
  private dreamTriggered = false;
  private ignoranceReturnTriggered = false;
  private ignoranceRunning = false;
  private ignoranceExitX = -6;
  private flattererLeaving = false;
  private angelLeaving = false;
  private atheistLeaving = false;
  private atheistNoteTimer = 0;
  private musicNotes: Array<{ group: THREE.Group; life: number }> = [];
  private revisit = false;
  private built = false;

  constructor(cb: EnchantedCallbacks) {
    this.cb = cb;

    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      sling: false, plump: true,
    });
    const steel = 0xcfd6dd;
    this.christian.body.add(block(1.18, 0.14, 0.86, PALETTE.robeGold, 0, 0.3, 0));
    const helmet = new THREE.Group();
    helmet.add(block(1.02, 0.28, 0.86, steel, 0, 0.84, 0));
    helmet.add(block(0.18, 0.16, 0.9, PALETTE.robeGold, 0, 1.05, 0));
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, -0.38, 1.08, 0));
    helmet.add(block(0.26, 0.24, 0.22, PALETTE.bearBrown, 0.38, 1.08, 0));
    this.christian.head.add(helmet);
    this.christian.body.add(block(1.16, 0.62, 0.88, steel, 0, 0.42, 0));
    addPilgrimArmorDetails(this.christian);
    const sword = new THREE.Group();
    sword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0.55, 0));
    sword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, 0.04, 0));
    sword.position.set(0.16, -0.5, 0.14);
    this.christian.armR.add(sword);

    this.hopeful = makeBear({
      species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2,
    });

    // Same rosy-pink Ignorance who later appears at the Celestial gate.
    this.ignorance = makeBear({
      species: 'pig', fur: 0xf29aaa, outfit: 'shirt', outfitColor: 0xd9657f,
    });
    this.ignorance.head.add(block(0.9, 0.16, 0.8, 0xa9415f, 0, 0.9, 0));
    this.ignorance.head.add(block(0.55, 0.3, 0.5, 0xa9415f, 0, 1.06, 0));
    this.ignorance.body.add(block(0.5, 0.12, 0.07, PALETTE.robeGold, 0, 0.62, 0.36));
    // A private dust pool lets his hurried exit leave the same soft trail as
    // Christian's movement without turning every NPC into a dusty walker.
    this.ignorance.dustPuffs = [];
    for (let i = 0; i < 9; i++) {
      const puff = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.16, 0.22),
        new THREE.MeshBasicMaterial({ color: 0xd8c58e, transparent: true, opacity: 0 }),
      );
      puff.visible = false;
      puff.userData.life = 1;
      puff.userData.vx = 0;
      puff.userData.vz = 0;
      this.ignorance.dustPuffs.push(puff);
    }

    // The Flatterer looks almost like a Shining One, but his fox face and
    // slightly green-white robe reveal that something is wrong.
    this.flatterer = makeBear({
      species: 'cat', fur: 0xd98a52, outfit: 'robe', outfitColor: 0xeaf2d2,
    });
    addShiningOneDetails(this.flatterer);
    this.flatterer.head.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.geometry instanceof THREE.TorusGeometry) {
        (obj.material as THREE.MeshBasicMaterial).color.setHex(0xd94b4b);
      }
    });
    this.flatterer.body.add(block(0.7, 0.12, 0.08, 0xb9cf87, 0, 0.5, 0.47));

    this.atheist = makeBear({
      species: 'dog', fur: 0x8794a0, outfit: 'shirt', outfitColor: 0x53667a,
    });
    this.atheist.body.add(block(0.78, 0.1, 0.08, 0xf5f1e8, 0, 0.6, 0.47));
    this.atheist.body.add(block(0.12, 0.5, 0.08, 0x8d5d68, 0, 0.48, 0.52));

    this.angel = makeBear({
      species: 'bear', fur: 0xfffdf7, outfit: 'robe', outfitColor: 0xfffcf3,
    });
    addShiningOneDetails(this.angel);
  }

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xe8d8ad);
    s.fog = new THREE.Fog(0xe8d8ad, 32, 108);
    s.add(new THREE.HemisphereLight(0xfff1cb, 0xb9a874, 1.2));
    const sun = new THREE.DirectionalLight(0xffd69a, 1.25);
    sun.position.set(34, 42, 18);
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -60;
    sun.shadow.camera.right = 105;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -40;
    s.add(sun);

    const ground = new THREE.Mesh(new THREE.BoxGeometry(200, 1, 70), mat(0xc9b86f));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);

    // Main highway before and after the fork.
    addHighwayPaving(s, WEST, FORK_X, { width: 3.2 });
    addHighwayPaving(s, MERGE_X, LIGHT_X + 2, { width: 3.2 });
    // Two readable branches, one north and one south, merging back together.
    for (let i = 0; i <= 16; i++) {
      const u = i / 16;
      const x = THREE.MathUtils.lerp(FORK_X, MERGE_X, u);
      const bend = Math.sin(u * Math.PI) * 3.2;
      for (const side of [-1, 1]) {
        const z = bend * side;
        const tile = block(1.08, 0.11, 1.0, side < 0 ? 0xd7c69d : 0xe0d0aa, x, 0.07, z);
        tile.castShadow = false;
        s.add(tile);
      }
    }

    // Ancient trees form a dreamlike tunnel.
    for (let x = -36, i = 0; x < 87; x += 6.5, i++) {
      for (const side of [-1, 1]) {
        if (x > -16 && x < 9) continue;
        const tree = new THREE.Group();
        tree.add(block(0.75, 4.6 + (i % 3), 0.75, 0x8d704a, 0, 2.3, 0));
        tree.add(block(3.1, 1.45, 2.8, i % 2 ? 0xc6a968 : 0xb99d62, 0, 5.0, 0));
        tree.add(block(2.2, 1.1, 2.0, 0xd4bc78, side * 0.4, 6.0, 0));
        tree.position.set(x + side * (i % 2) * 0.7, 0, side * (7.0 + (i % 3)));
        s.add(tree);
      }
    }

    // Abandoned camps and sleeping pilgrims warn what happens here.
    for (const [x, z, species, color] of [
      [29, -5.5, 'rabbit', 0xcaa6d8], [37, 5.7, 'bear', 0xb9c99a],
      [45, -5.3, 'pig', 0xd9a08f], [55, 5.5, 'sheep', 0xb4c9d9],
      [64, -5.6, 'cat', 0xd5b48e],
    ] as const) {
      s.add(block(2.4, 0.08, 1.6, 0x9f7a50, x, 0.05, z));
      s.add(block(0.8, 0.22, 0.6, 0xd9c7a0, x - 0.5, 0.18, z));
      const sleeper = makeBear({ species, outfit: 'shirt', outfitColor: color, scale: 0.8 });
      sleeper.root.position.set(x + 0.3, 0.42, z);
      sleeper.root.rotation.x = -Math.PI / 2;
      s.add(sleeper.root);
      this.sleepers.push(sleeper);
      for (let b = 0; b < 3; b++) {
        const bubble = new THREE.Mesh(
          new THREE.BoxGeometry(0.12 + b * 0.05, 0.12 + b * 0.05, 0.12 + b * 0.05),
          new THREE.MeshBasicMaterial({ color: 0xeef5ff, transparent: true, opacity: 0.72 }),
        );
        bubble.castShadow = false;
        s.add(bubble);
        this.sleepBubbles.push({ mesh: bubble, sleeper, phase: b * 1.25 + this.sleepers.length });
      }
    }

    // Pollen and low fog drift through the enchanted zone.
    for (let i = 0; i < 78; i++) {
      const pm = new THREE.MeshBasicMaterial({
        color: i % 3 ? 0xffe69a : 0xfff4c5,
        transparent: true, opacity: 0.55, depthWrite: false,
      });
      const pollen = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.08), pm);
      pollen.position.set(21 + Math.random() * 53, 0.7 + Math.random() * 5, -10 + Math.random() * 20);
      pollen.castShadow = false;
      s.add(pollen);
      this.pollen.push({ mesh: pollen, phase: Math.random() * 10, baseY: pollen.position.y });
    }
    for (let i = 0; i < 15; i++) {
      const fog = new THREE.Mesh(
        new THREE.BoxGeometry(5 + Math.random() * 5, 0.35, 1.8),
        new THREE.MeshLambertMaterial({ color: 0xf3e8c8, transparent: true, opacity: 0.24 }),
      );
      fog.position.set(22 + i * 4.2, 0.45 + (i % 3) * 0.22, (i % 2 ? -1 : 1) * (2.5 + i % 3));
      fog.castShadow = false;
      s.add(fog);
      this.fogBanks.push(fog);
    }

    // Reusable voxel music notes for Atheist's carefree humming exit.
    for (let i = 0; i < 10; i++) {
      const note = new THREE.Group();
      note.add(block(0.09, 0.38, 0.09, 0x66738d, 0, 0.18, 0));
      note.add(block(0.22, 0.16, 0.12, 0x66738d, -0.08, 0, 0));
      note.add(block(0.22, 0.09, 0.1, 0x66738d, 0.08, 0.38, 0));
      note.visible = false;
      s.add(note);
      this.musicNotes.push({ group: note, life: 1 });
    }

    // A square, three-dimensional lattice cage encloses both pilgrims. Its
    // open spacing keeps their faces readable while clearly surrounding them.
    const cageColor = 0x716348;
    const cageW = 4.2;
    const cageD = 3.5;
    const cageH = 3.15;
    for (const z of [-cageD / 2, cageD / 2]) {
      for (let x = -cageW / 2; x <= cageW / 2 + 0.01; x += 0.7) {
        this.net.add(block(0.1, cageH, 0.1, cageColor, x, cageH / 2, z));
      }
      for (let y = 0.45; y <= cageH; y += 0.52) {
        this.net.add(block(cageW, 0.1, 0.1, cageColor, 0, y, z));
      }
    }
    for (const x of [-cageW / 2, cageW / 2]) {
      for (let z = -cageD / 2; z <= cageD / 2 + 0.01; z += 0.7) {
        this.net.add(block(0.1, cageH, 0.1, cageColor, x, cageH / 2, z));
      }
      for (let y = 0.45; y <= cageH; y += 0.52) {
        this.net.add(block(0.1, 0.1, cageD, cageColor, x, y, 0));
      }
    }
    // Crossed roof bars stop the cage reading as a simple fence.
    for (let x = -cageW / 2; x <= cageW / 2 + 0.01; x += 0.7) {
      this.net.add(block(0.1, 0.1, cageD, cageColor, x, cageH, 0));
    }
    for (let z = -cageD / 2; z <= cageD / 2 + 0.01; z += 0.7) {
      this.net.add(block(cageW, 0.1, 0.1, cageColor, 0, cageH, z));
    }
    this.net.position.set(-3.2, 0, -2.8);
    this.net.visible = false;
    s.add(this.net);

    this.ignorance.root.position.set(IGNORANCE_X, 0, -1.2);
    this.flatterer.root.position.set(FORK_X + 1.5, 0, 0);
    this.atheist.root.position.set(ATHEIST_X, 0, -1.4);
    this.angel.root.position.set(0, 0, -5.8);
    this.angel.root.visible = false;
    s.add(this.ignorance.root, this.flatterer.root, this.atheist.root, this.angel.root);

    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X, 0, 0);
    s.add(this.shining.group);
    s.add(this.christian.root, this.hopeful.root);
  }

  enter(revisit: boolean): { christian: BearParts; hopeful: BearParts } {
    this.build();
    this.revisit = revisit;
    this.sleep = 0;
    this.sleepWarning = false;
    this.wakeCooldown = 0;
    this.ignoranceTriggered = revisit;
    this.forkTriggered = revisit;
    this.trapTriggered = revisit;
    this.atheistTriggered = revisit;
    this.dreamTriggered = revisit;
    this.ignoranceReturnTriggered = revisit;
    this.ignoranceRunning = false;
    this.flattererLeaving = false;
    this.angelLeaving = false;
    this.atheistLeaving = false;
    this.atheistNoteTimer = 0;
    this.chosenTrap = true;
    this.net.visible = false;
    this.angel.root.visible = false;
    this.ignorance.root.position.set(IGNORANCE_X, 0, -1.2);
    this.flatterer.root.position.set(FORK_X + 1.5, 0, 0);
    this.atheist.root.position.set(ATHEIST_X, 0, -1.4);
    this.ignorance.root.visible = !revisit;
    this.flatterer.root.visible = !revisit;
    this.atheist.root.visible = !revisit;
    this.christian.root.position.set(revisit ? 52 : WEST, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.hopeful.root.position.set(this.christian.root.position.x - 1.5, 0, 0.8);
    this.hopeful.root.rotation.y = Math.PI / 2;
    this.phase = revisit ? 'depart' : 'enter';
    this.cb.setSleep(0, false);
    this.cb.setDream(0);
    this.cb.setMusic?.('cross');
    this.cb.setObjective(revisit
      ? '✨ The Enchanted Ground is quiet — walk east toward Beulah Land'
      : '🌾 Leave the mountains and follow the King’s Highway');
    return { christian: this.christian, hopeful: this.hopeful };
  }

  moveFactor(): number {
    if (this.phase === 'ignorance' || this.phase === 'fork' || this.phase === 'trap'
      || this.phase === 'atheist' || this.phase === 'ignoranceApproach'
      || this.phase === 'ignoranceReturn') return 0;
    return this.phase === 'enchanted' ? Math.max(0.35, 1 - this.sleep * 0.0065) : 1;
  }

  canWake(): boolean {
    return this.phase === 'enchanted' && this.wakeCooldown <= 0;
  }

  tryWakeAction(): void {
    if (!this.canWake()) return;
    this.wakeCooldown = 2.2;
    this.cb.showChoice(
      '💬 Ask Hopeful what the King has done',
      '🎵 Sing a hopeful travelling hymn',
      (pick) => {
        this.sleep = Math.max(0, this.sleep - 10);
        this.cb.setSleep(100 - this.sleep, true);
        this.cb.blipSound();
        this.cb.playScript(pick === 0 ? [
          { speaker: 'Christian', text: 'Hopeful, remind me: how did the King help you begin this journey?' },
          { speaker: 'Hopeful', text: 'He used Faithful’s courage to wake my heart in Vanity Fair. He has guided us together ever since.' },
          { speaker: 'Christian', text: 'Then let us remember His help and keep walking.' },
        ] : [
          { speaker: 'Hopeful', text: 'Let’s sing, Christian. Sleep is quieter than two pilgrims praising the King together!' },
          { speaker: '', text: 'Their small travelling song rises above the distant lullaby, and their steps become steadier.' },
        ]);
      },
    );
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.x = THREE.MathUtils.clamp(p.x, WEST, LIGHT_X + 2);
    p.z = THREE.MathUtils.clamp(p.z, -4.2, 4.2);
    // During the fork, keep Christian on the selected branch.
    if (p.x > FORK_X && p.x < MERGE_X && this.forkTriggered) {
      const u = (p.x - FORK_X) / (MERGE_X - FORK_X);
      p.z = Math.sin(u * Math.PI) * (this.chosenTrap ? -3.2 : 3.2);
    }

    if (!this.ignoranceTriggered && p.x > IGNORANCE_X - 2) this.firstIgnorance();
    else if (!this.forkTriggered && p.x > FORK_X - 2) this.meetFlatterer();
    else if (!this.trapTriggered && p.x > -2.5) this.resolveFork();
    else if (!this.atheistTriggered && p.x > ATHEIST_X - 2) this.meetAtheist();
    else if (!this.dreamTriggered && p.x > DREAM_X) this.beginDream();
    else if (!this.ignoranceReturnTriggered && p.x > IGNORANCE_RETURN_X) this.returnIgnorance();
    else if ((this.phase === 'depart' || this.phase === 'done') && p.x > LIGHT_X) {
      if (this.revisit) this.cb.onExit();
      else {
        this.phase = 'done';
        this.cb.setSleep(0, false);
        this.cb.setDream(0);
        this.cb.onComplete();
      }
    }
  }

  private faceEachOther(actor: BearParts): void {
    actor.root.rotation.y = Math.atan2(
      this.christian.root.position.x - actor.root.position.x,
      this.christian.root.position.z - actor.root.position.z,
    );
    this.christian.root.rotation.y = Math.atan2(
      actor.root.position.x - this.christian.root.position.x,
      actor.root.position.z - this.christian.root.position.z,
    );
  }

  private firstIgnorance(): void {
    this.ignoranceTriggered = true;
    this.phase = 'ignorance';
    this.faceEachOther(this.ignorance);
    this.cb.playScript([
      { speaker: 'Christian', text: 'Hello, friend. What is your name, and where did you enter the King’s Highway?' },
      { speaker: 'Ignorance', text: 'I am Ignorance, from the Country of Conceit. I climbed over the wall. My own way seemed just as good as the little Gate.' },
      { speaker: 'Christian', text: 'But what will you show the King when you reach His City?' },
      { speaker: 'Ignorance', text: 'I live a good life, obey the law as well as I can, and my heart tells me I am safe. What more could anyone need?' },
      { speaker: 'Christian', text: 'Our own goodness cannot rescue us. We need the King’s mercy, given through His Son. A confident feeling cannot replace His promise.' },
      { speaker: 'Ignorance', text: 'That sounds much too gloomy. I trust my heart. I will catch up with you later.' },
      { speaker: '', text: 'Ignorance hurries east, still certain that his own goodness is enough.' },
    ], () => {
      this.ignoranceRunning = true;
      this.ignoranceExitX = -6;
      this.ignorance.root.rotation.y = Math.PI / 2;
      this.phase = 'enter';
      this.cb.setObjective('🛤 Continue east — remember the shepherds’ directions');
    });
  }

  private meetFlatterer(): void {
    this.forkTriggered = true;
    this.phase = 'fork';
    this.faceEachOther(this.flatterer);
    this.cb.playScript([
      { speaker: '', text: 'The road divides. A shining figure in a pale robe smiles and points toward one branch.' },
      { speaker: 'Flatterer', text: 'Brave, wise pilgrims! You have come so far. Follow my beautiful path, and I will lead you quickly toward the City.' },
      { speaker: 'Hopeful', text: '*quietly* He looks like a Shining One… but the shepherds told us to check every direction.' },
    ], () => {
      this.cb.showChoice(
        '✨ Follow his shining appearance',
        '📜 Check the King’s directions',
        (pick) => {
          this.chosenTrap = pick === 0;
          // Clear the centre of the fork. The chosen branch remains readable,
          // while the Flatterer waits off its outer edge instead of acting as
          // an accidental physical barricade.
          this.flatterer.root.position.z = this.chosenTrap ? -4.8 : 4.8;
          this.phase = 'enter';
          this.cb.setObjective(this.chosenTrap
            ? '🦊 Follow the Flatterer along the northern branch'
            : '📜 Take the branch confirmed by the King’s directions');
        },
      );
    });
  }

  private resolveFork(): void {
    this.trapTriggered = true;
    this.phase = 'trap';
    if (this.chosenTrap) {
      const cp = this.christian.root.position;
      const hp = this.hopeful.root.position;
      this.net.position.set((cp.x + hp.x) / 2, 0, (cp.z + hp.z) / 2);
      this.net.visible = true;
      this.angel.root.visible = true;
      this.angel.root.position.set(-1, 5.5, -5.0);
      this.cb.playScript([
        { speaker: '', text: 'A hidden net springs up! Christian and Hopeful are tangled before they can take another step.' },
        { speaker: 'Christian', text: 'We trusted his bright clothes instead of the King’s directions.' },
        { speaker: '', text: 'A true angel flies down, cuts the net, and helps both pilgrims stand.' },
        { speaker: 'Angel', text: 'The shepherds warned you about Flatterers. Test every teacher by the King’s Word, not by a shining appearance.' },
        { speaker: 'Hopeful', text: 'We will remember. Thank you for setting us free.' },
      ], () => {
        this.net.visible = false;
        this.angelLeaving = true;
        this.flattererLeaving = true;
        this.phase = 'enter';
        this.cb.setObjective('🛤 The branches merge — return to the King’s Highway');
      });
    } else {
      this.cb.playScript([
        { speaker: 'Hopeful', text: 'The King’s directions point to this path. We should trust His Word, not the fox’s bright robe.' },
        { speaker: '', text: 'Behind them, the false path snaps shut beneath an empty net. The Flatterer slips away.' },
      ], () => {
        this.flattererLeaving = true;
        this.phase = 'enter';
        this.cb.setObjective('🛤 The branches merge — continue east');
      });
    }
  }

  private meetAtheist(): void {
    this.atheistTriggered = true;
    this.phase = 'atheist';
    this.faceEachOther(this.atheist);
    this.cb.playScript([
      { speaker: 'Atheist', text: '*laughing* You are still searching for the Celestial City? There is no such place. I looked for it and found nothing.' },
      { speaker: 'Christian', text: 'The shepherds showed us its shining towers. More importantly, the King promised that the City is real.' },
      { speaker: 'Atheist', text: 'Turn around. You are wasting your journey.' },
      { speaker: 'Hopeful', text: 'Your doubt does not cancel the King’s promise. We will keep going.' },
      { speaker: '', text: 'Atheist strolls west, humming happily to himself. Christian and Hopeful continue east together.' },
    ], () => {
      this.atheistLeaving = true;
      this.atheist.root.rotation.y = -Math.PI / 2;
      this.phase = 'enter';
      this.cb.setObjective('🌾 Enter the golden grass of the Enchanted Ground');
    });
  }

  private beginDream(): void {
    this.dreamTriggered = true;
    this.phase = 'enchanted';
    this.cb.setSleep(100 - this.sleep, true);
    this.cb.playScript([
      { speaker: '', text: 'Golden grass whispers beneath giant trees. Warm fog drifts over abandoned camps, and a distant lullaby makes every step feel heavy.' },
      { speaker: 'Christian', text: '*yawning* The shepherds warned us about this place. Pilgrims who sleep here may never wake.' },
      { speaker: 'Hopeful', text: 'Then we will keep each other awake. Ask me questions, tell me what the King has done, and sing with me.' },
    ], () => {
      this.cb.setObjective('😴 Cross the Enchanted Ground — talk or sing with Hopeful to stay awake');
    });
  }

  private returnIgnorance(): void {
    this.ignoranceReturnTriggered = true;
    this.phase = 'ignoranceApproach';
    this.cb.setSleep(0, false);
    this.cb.setDream(0);
    this.ignorance.root.visible = true;
    this.ignorance.root.position.set(IGNORANCE_RETURN_X + 10, 0, -1.3);
    this.ignorance.root.rotation.y = -Math.PI / 2;
    this.cb.setObjective('🐷 Someone is hurrying toward you from the east…');
  }

  private speakWithReturningIgnorance(): void {
    this.phase = 'ignoranceReturn';
    this.faceEachOther(this.ignorance);
    this.cb.playScript([
      { speaker: 'Ignorance', text: 'There you are! I still say a good heart and a decent life are enough. My conscience feels peaceful.' },
      { speaker: 'Christian', text: 'A heart can comfort itself and still be mistaken. True faith trusts the King’s promise, turns away from sin, and depends on His mercy.' },
      { speaker: 'Hopeful', text: 'We are not saved because we think highly of ourselves. We are saved because the King is kind and faithful.' },
      { speaker: 'Ignorance', text: 'You make everything too serious. Go ahead. I will follow in my own time and my own way.' },
      { speaker: '', text: 'Christian and Hopeful leave Ignorance behind and walk on together.' },
    ], () => {
      this.ignoranceRunning = true;
      this.ignoranceExitX = LIGHT_X + 14;
      this.ignorance.root.rotation.y = Math.PI / 2;
      this.phase = 'depart';
      this.cb.setObjective('✨ Follow the shining light east to finish the chapter');
    });
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    this.wakeCooldown = Math.max(0, this.wakeCooldown - dt);

    animateBear(this.christian, t, moving && this.moveFactor() > 0);
    const cp = this.christian.root.position;
    const desiredX = cp.x - 1.45;
    const desiredZ = cp.z + 0.85;
    const dx = desiredX - this.hopeful.root.position.x;
    const dz = desiredZ - this.hopeful.root.position.z;
    const hd = Math.hypot(dx, dz);
    if (hd > 0.08) {
      this.hopeful.root.position.x += dx * Math.min(1, dt * 5);
      this.hopeful.root.position.z += dz * Math.min(1, dt * 5);
      this.hopeful.root.rotation.y = this.christian.root.rotation.y;
      animateBear(this.hopeful, t + 0.7, moving);
    } else animateBear(this.hopeful, t + 0.7, false);

    if (this.ignoranceRunning && this.ignorance.root.visible) {
      this.ignorance.root.position.x += dt * 8.6;
      animateBear(this.ignorance, t + 1.1, true);
      if (this.ignorance.root.position.x > this.ignoranceExitX) {
        this.ignoranceRunning = false;
        this.ignorance.root.visible = false;
      }
    } else if (this.phase === 'ignoranceApproach') {
      const targetX = this.christian.root.position.x + 2.1;
      this.ignorance.root.position.x = Math.max(targetX, this.ignorance.root.position.x - dt * 5.2);
      animateBear(this.ignorance, t + 1.1, true);
      if (this.ignorance.root.position.x <= targetX + 0.05) this.speakWithReturningIgnorance();
    } else if (this.ignorance.root.visible) {
      animateBear(this.ignorance, t + 1.1, false);
    }
    for (const actor of [this.flatterer, this.atheist]) {
      if (actor.root.visible) animateBear(actor, t + 1.1, false);
    }
    if (this.angelLeaving && this.angel.root.visible) {
      this.angel.root.position.y += dt * 5.2;
      animateBear(this.angel, t, true);
      if (this.angel.root.position.y > 13) {
        this.angel.root.visible = false;
        this.angelLeaving = false;
      }
    } else if (this.angel.root.visible) {
      this.angel.root.position.y += (0.15 - this.angel.root.position.y) * Math.min(1, dt * 2.4);
      animateBear(this.angel, t, false);
    }

    if (this.flattererLeaving && this.flatterer.root.visible) {
      this.flatterer.root.position.x -= dt * 4.8;
      this.flatterer.root.rotation.y = -Math.PI / 2;
      animateBear(this.flatterer, t + 0.4, true);
      if (this.flatterer.root.position.x < this.christian.root.position.x - 15) {
        this.flatterer.root.visible = false;
        this.flattererLeaving = false;
      }
    }

    if (this.atheistLeaving && this.atheist.root.visible) {
      this.atheist.root.position.x -= dt * 4.2;
      animateBear(this.atheist, t + 0.8, true);
      this.atheistNoteTimer -= dt;
      if (this.atheistNoteTimer <= 0) {
        this.atheistNoteTimer = 0.32;
        const note = this.musicNotes.find((n) => n.life >= 1);
        if (note) {
          note.life = 0;
          note.group.visible = true;
          note.group.position.set(
            this.atheist.root.position.x + 0.8,
            1.45,
            this.atheist.root.position.z + (Math.random() - 0.5) * 0.5,
          );
        }
      }
      if (this.atheist.root.position.x < this.christian.root.position.x - 16) {
        this.atheist.root.visible = false;
        this.atheistLeaving = false;
      }
    }
    for (const note of this.musicNotes) {
      if (note.life >= 1) continue;
      note.life = Math.min(1, note.life + dt * 0.75);
      note.group.position.y += dt * 0.7;
      note.group.position.x += dt * 0.25;
      note.group.scale.setScalar(0.8 + note.life * 0.5);
      note.group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          const material = obj.material as THREE.MeshLambertMaterial;
          material.transparent = true;
          material.opacity = 1 - note.life;
        }
      });
      if (note.life >= 1) note.group.visible = false;
    }

    if (this.phase === 'enchanted') {
      this.sleep = Math.min(100, this.sleep + dt * (moving ? 3.2 : 5.2));
      this.cb.setSleep(100 - this.sleep, true);
      this.cb.setDream(this.sleep / 100);
      if (this.sleep >= 100 && !this.sleepWarning) {
        this.sleepWarning = true;
        this.christian.root.rotation.x = -0.18;
        this.hopeful.root.rotation.y = Math.atan2(
          this.christian.root.position.x - this.hopeful.root.position.x,
          this.christian.root.position.z - this.hopeful.root.position.z,
        );
        this.cb.playScript([
          { speaker: '', text: 'Christian’s eyes close. The golden grass fades into darkness, and his steps stop.' },
          { speaker: 'Hopeful', text: 'Christian! Wake up, my friend. You must not sleep here!' },
          { speaker: '', text: 'Hopeful takes Christian by the shoulder and gently shakes him awake.' },
          { speaker: 'Christian', text: '*opening his eyes* Hopeful… thank you. The darkness felt so deep.' },
          { speaker: 'Hopeful', text: 'Stay close. Keep talking with me, and we will cross this place together.' },
        ], () => {
          this.sleep = 70;
          this.sleepWarning = false;
          this.christian.root.rotation.x = 0;
          this.cb.setSleep(30, true);
          this.cb.setDream(0.7);
          this.cb.setObjective('😴 Stay close to Hopeful — keep talking or singing together');
        });
      }
      if (cp.x >= DREAM_END) {
        this.phase = 'depart';
        this.sleep = 0;
        this.cb.setSleep(0, false);
        this.cb.setDream(0);
        this.cb.setObjective('🌤 The fog is thinning — keep walking east');
      }
    }

    for (let i = 0; i < this.pollen.length; i++) {
      const p = this.pollen[i];
      p.mesh.position.y = p.baseY + Math.sin(t * 0.6 + p.phase) * 0.45;
      p.mesh.position.x += Math.sin(t * 0.25 + p.phase) * dt * 0.08;
    }
    for (let i = 0; i < this.fogBanks.length; i++) {
      this.fogBanks[i].position.x += Math.sin(t * 0.18 + i) * dt * 0.08;
    }
    for (const bubble of this.sleepBubbles) {
      const nose = bubble.sleeper.head.getWorldPosition(new THREE.Vector3());
      const cycle = (t * 0.34 + bubble.phase) % 2.4;
      bubble.mesh.position.set(
        nose.x + Math.sin(bubble.phase) * 0.18,
        nose.y + 0.45 + cycle * 0.36,
        nose.z + 0.3,
      );
      const fade = Math.sin((cycle / 2.4) * Math.PI);
      (bubble.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, fade) * 0.72;
      bubble.mesh.scale.setScalar(0.65 + cycle * 0.2);
    }
    if (this.shining) animateShiningLight(this.shining, t);
  }
}
