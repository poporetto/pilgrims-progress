import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { makeShiningLight, animateShiningLight, ShiningLight, setupSunShadow } from './light';
import { DialogueLine } from './npcs';

// Chapter IX — the Valley of Humiliation, and Apollyon.
// Christian walks down into a grim valley at sunset, remembering aloud all
// the ways the King has already carried him. Then Apollyon — scaled like a
// fish, winged like a dragon, footed like a bear, mouthed like a lion, fire
// and smoke in his belly — blocks the whole road. Words fail; the fight
// begins: a turn-based duel with health bars. When Apollyon is pressed, he
// hurls a fiery dart; Christian falls, his sword flies away — and reaching
// for it he cries "Rejoice not against me, O mine enemy: when I fall, I
// shall arise" (Micah 7:8). Revived, sword blazing blue, he drives the
// monster off — "In all these things we are more than conquerors" (Romans
// 8:37) — and a hand from heaven heals him with leaves of the Tree of Life.

interface ValleyCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
  rumbleSound: () => void;
  blipSound: () => void;
  setMusic?: (style: 'sinai' | 'cross') => void;
  battleUI: (show: boolean) => void;
  setHP: (christian: number, apollyon: number) => void;
}

type Phase =
  | 'descend'    // walking down, remembering
  | 'confront'   // parked: Apollyon's questions, offers, accusations
  | 'battle'     // turn-based combat — E to swing
  | 'anim'       // an attack animation is playing
  | 'fallen'     // sword lost, Apollyon gloats, the Scripture cry
  | 'defeated'   // Apollyon flees on his wings
  | 'healing'    // the hand from heaven
  | 'freeroam'   // on east to the light
  | 'done';

const WEST_EDGE = -32;
const LIGHT_X = 38;
const HILL_X0 = -28;  // the descent starts high in the west…
const HILL_X1 = -6;   // …and reaches the valley floor here
const HILL_H = 8;
const APOLLYON_X = 8;
const MUTTER_1 = -24;
const MUTTER_2 = -15;

export class ValleyScene {
  scene = new THREE.Scene();
  phase: Phase = 'descend';
  private cb: ValleyCallbacks;
  private christian: BearParts;
  private sword: THREE.Group;          // in his paw
  private spiritSword = false;         // after the revival: bigger, blue
  private swordGlow: THREE.Mesh;
  private groundSword: THREE.Group;    // where it lands when he drops it
  private apollyon: THREE.Group;
  private apWings: THREE.Mesh[] = [];
  private apJaw: THREE.Mesh | null = null;
  private apHome = new THREE.Vector3(APOLLYON_X, 0, 0);
  private chp = 100;
  private ahp = 100;
  private turn: 'player' | 'busy' = 'busy';
  private animT = 0;
  private animKind: 'swing' | 'claw' | 'dart' | null = null;
  private dartThrown = false;
  private knockT = 0; // Christian knocked down, getting back up
  private dart: THREE.Mesh;
  private swingArc: THREE.Mesh;
  // a blade ray hurled from the sword on each swing, flying out to strike Apollyon
  private bladeRay: THREE.Mesh;
  private rayActive = false;
  private rayT = 0;
  private rayFrom = new THREE.Vector3();
  private rayTo = new THREE.Vector3();
  private mutters = 0;
  private smoke: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number }> = [];
  private smokeTimer = 0;
  private sparkles: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vy: number; vz: number }> = [];
  private healBeam: THREE.Mesh | null = null;
  private healProps: THREE.Group | null = null;
  private shining: ShiningLight | null = null;
  private fleeT = 0;
  private revisit = false;
  private built = false;

  constructor(cb: ValleyCallbacks) {
    this.cb = cb;
    // Christian in the whole armor of God from Palace Beautiful
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: PALETTE.robeWhite,
      // The travel sling was removed when he received his armour at Palace
      // Beautiful; its rear strap otherwise intersects the backplate and flickers.
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
    const shield = new THREE.Group();
    shield.add(block(0.12, 0.8, 0.62, STEEL, 0, 0, 0));
    shield.add(block(0.14, 0.42, 0.12, PALETTE.robeGold, 0, 0, 0));
    shield.add(block(0.14, 0.12, 0.4, PALETTE.robeGold, 0, 0.1, 0));
    shield.position.set(-0.24, -0.3, 0);
    this.christian.armL.add(shield);

    this.sword = new THREE.Group();
    this.sword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0.55, 0));
    this.sword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, 0.04, 0));
    this.sword.add(block(0.1, 0.24, 0.12, 0x8a6f52, 0, -0.12, 0));
    this.swordGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 1.2, 0.4),
      new THREE.MeshBasicMaterial({ color: 0x7ab8ff, transparent: true, opacity: 0, depthWrite: false }),
    );
    this.swordGlow.position.y = 0.55;
    this.sword.add(this.swordGlow);
    this.sword.position.set(0.16, -0.5, 0.14);
    this.christian.armR.add(this.sword);

    // the dropped sword prop (shown when it flies from his paw)
    this.groundSword = new THREE.Group();
    this.groundSword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0, 0));
    this.groundSword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, -0.5, 0));
    this.groundSword.rotation.z = Math.PI / 2.3;
    this.groundSword.visible = false;

    // the fiery dart
    this.dart = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.22, 0.22),
      new THREE.MeshBasicMaterial({ color: 0xff8a3d }),
    );
    this.dart.visible = false;

    // the grey sword-swing arc
    this.swingArc = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.14, 6, 14, Math.PI * 0.9),
      new THREE.MeshBasicMaterial({ color: 0xd8dee4, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }),
    );
    this.swingArc.visible = false;

    // the flung blade ray — an elongated crescent that shoots out to Apollyon
    const rayGroup = new THREE.Mesh(
      new THREE.ConeGeometry(0.42, 3.2, 8),
      new THREE.MeshBasicMaterial({
        color: 0xe8f0ff, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    // the cone points along local +z after this tilt, so it flies point-first
    rayGroup.geometry.rotateX(Math.PI / 2);
    rayGroup.visible = false;
    rayGroup.renderOrder = 5;
    this.bladeRay = rayGroup;

    // ---------- APOLLYON ----------
    const a = new THREE.Group();
    const SCALE_A = 0x5a7a5a;
    const SCALE_B = 0x476347;
    const BELLY = 0x3a3230;
    // bear feet
    for (const [fx, fz] of [[-0.9, -0.8], [-0.9, 0.8], [0.9, -0.8], [0.9, 0.8]] as const) {
      a.add(block(0.9, 1.0, 0.9, 0x6b5a48, fx, 0.5, fz));
      a.add(block(1.0, 0.3, 1.05, 0x59493a, fx, 0.15, fz));
    }
    // scaled body, banded like fish scales
    for (let i = 0; i < 5; i++) {
      a.add(block(2.8 - i * 0.18, 0.62, 2.2 - i * 0.14, i % 2 === 0 ? SCALE_A : SCALE_B, 0, 1.3 + i * 0.6, 0));
    }
    // the burning belly
    const belly = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 1.1, 0.3),
      new THREE.MeshBasicMaterial({ color: 0xff7a3d }),
    );
    belly.position.set(0, 1.9, 1.05);
    a.add(belly);
    a.add(block(1.7, 1.3, 0.2, BELLY, 0, 1.9, 0.98));
    // lion mouth on a hunched head
    const head = new THREE.Group();
    head.add(block(1.5, 1.1, 1.3, SCALE_B, 0, 0, 0));
    head.add(block(1.0, 0.5, 0.7, 0x8a6b4a, 0, -0.25, 0.85)); // muzzle
    const jaw = block(0.95, 0.28, 0.65, 0x6b4a32, 0, -0.62, 0.85);
    head.add(jaw);
    this.apJaw = jaw;
    for (const tx of [-0.3, -0.1, 0.1, 0.3]) {
      head.add(block(0.1, 0.22, 0.08, 0xffffff, tx, -0.42, 1.16));
    }
    head.add(block(0.16, 0.2, 0.08, 0xff4a3d, -0.4, 0.25, 0.68)); // burning eyes
    head.add(block(0.16, 0.2, 0.08, 0xff4a3d, 0.4, 0.25, 0.68));
    head.add(block(0.24, 0.5, 0.24, SCALE_A, -0.55, 0.75, -0.2)); // horns
    head.add(block(0.24, 0.5, 0.24, SCALE_A, 0.55, 0.75, -0.2));
    head.position.set(0, 4.4, 0.4);
    a.add(head);
    // dragon wings
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.8, 3.2), mat(0x3f3b3a));
      wing.geometry.translate(0, 0.9, -1.2);
      wing.position.set(1.5 * side, 3.2, -0.6);
      wing.rotation.z = 0.5 * side;
      a.add(wing);
      const wtip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.0, 1.6), mat(0x2e2a28));
      wtip.geometry.translate(0, 0.5, -0.7);
      wtip.position.set(2.2 * side, 4.3, -2.2);
      wtip.rotation.z = 0.8 * side;
      a.add(wtip);
      this.apWings.push(wing, wtip);
    }
    // a heavy tail
    a.add(block(0.9, 0.7, 2.2, SCALE_A, 0, 1.2, -2.2));
    a.add(block(0.6, 0.5, 1.4, SCALE_B, 0, 1.1, -3.6));
    a.visible = false;
    this.apollyon = a;
  }

  // the western descent into the valley
  private groundY(x: number): number {
    const u = THREE.MathUtils.clamp((x - HILL_X0) / (HILL_X1 - HILL_X0), 0, 1);
    return HILL_H * (1 - u * u * (3 - 2 * u));
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xc4917a); // grim, low sunset
    s.fog = new THREE.Fog(0xc4917a, 34, 95);

    s.add(new THREE.HemisphereLight(0xe4c4aa, 0x7a6a5e, 1.05));
    const sun = new THREE.DirectionalLight(0xffb070, 1.35);
    // light from the EAST (+x) so shadows fall to the left; brighter so Christian
    // reads clearly against the grim valley
    sun.position.set(50, 34, 18);
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -55;
    sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -50;
    s.add(sun);

    const ground = new THREE.Mesh(new THREE.BoxGeometry(160, 1, 90), mat(0x7a8a6a));
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    s.add(ground);

    // the descent: broad slabs stepping down from the west
    const STEPS = 14;
    for (let i = 0; i < STEPS; i++) {
      const x0 = HILL_X0 + (i * (HILL_X1 - HILL_X0)) / STEPS;
      const x1 = HILL_X0 + ((i + 1) * (HILL_X1 - HILL_X0)) / STEPS;
      const h = Math.max(this.groundY((x0 + x1) / 2 - 1), 0.4);
      const slab = block(x1 - x0 + 0.6, h, 26, i % 2 === 0 ? 0x74855f : 0x687a55, (x0 + x1) / 2, h / 2, 0);
      slab.receiveShadow = true;
      s.add(slab);
    }
    // the high west rim behind
    const rim = block(8, HILL_H, 26, 0x74855f, HILL_X0 - 4, HILL_H / 2, 0);
    rim.receiveShadow = true;
    s.add(rim);

    // gnarled valley scenery: dark rocks and dead trees
    for (const [rx, rz] of [[-2, -8], [4, 8], [12, -8], [18, 7], [26, -7], [-10, 8]] as const) {
      s.add(block(1.6 + Math.random(), 1.1, 1.4, 0x5e6258, rx, 0.55, rz));
      s.add(block(0.9, 0.6, 0.8, 0x525648, rx + 1, 0.3, rz + 0.6));
    }
    for (const [tx, tz] of [[-6, -9], [9, 9], [22, -9], [30, 8]] as const) {
      const dead = new THREE.Group();
      dead.add(block(0.42, 2.6, 0.42, 0x6a5f56, 0, 1.3, 0));
      dead.add(block(1.5, 0.28, 0.28, 0x6a5f56, 0.45, 2.2, 0));
      dead.add(block(0.28, 1.0, 0.28, 0x5a5048, 1.1, 2.8, 0));
      dead.position.set(tx, this.groundY(tx), tz);
      s.add(dead);
    }

    // the road down and along the valley floor
    for (let i = 0; i <= 22; i++) {
      const px = -30 + i * 3.1;
      const stone = block(0.9 + Math.random() * 0.5, 0.14, 1.7 + Math.random() * 0.6,
        0xb8a888, px, this.groundY(px) + 0.07, (Math.random() - 0.5) * 0.7);
      stone.castShadow = false;
      s.add(stone);
    }

    this.apollyon.position.copy(this.apHome);
    s.add(this.apollyon);
    s.add(this.groundSword);
    s.add(this.dart);
    s.add(this.swingArc);
    s.add(this.bladeRay);

    // belly smoke pool
    for (let i = 0; i < 12; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x4a4440, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.smoke.push({ mesh, m, life: 1 });
    }
    // sparkle pool
    for (let i = 0; i < 22; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xfff0b8, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.sparkles.push({ mesh, m, life: 1, vx: 0, vy: 0, vz: 0 });
    }

    // the healing beam from heaven (hidden until the battle is won)
    const heal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.7, 22, 16, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0xfff6d0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, fog: false,
      }),
    );
    heal.position.set(APOLLYON_X - 4, 11, 0);
    s.add(heal);
    this.healBeam = heal;
    const props = new THREE.Group();
    // white cloth beneath everything
    props.add(block(1.4, 0.08, 1.0, 0xf5f0e8, 0, 0.04, 0));
    // leaves of the Tree of Life — a layered cluster
    props.add(block(0.6, 0.12, 0.5, 0x6fc46f, -0.55, 0.22, 0.05));
    props.add(block(0.42, 0.10, 0.36, 0x8fcf70, -0.55, 0.32, 0.0));
    props.add(block(0.28, 0.09, 0.24, 0xa8e070, -0.55, 0.40, -0.05));
    // loaf of bread — rounded shape
    props.add(block(0.48, 0.28, 0.36, 0xd9b36a, 0.08, 0.28, 0.28));
    props.add(block(0.36, 0.14, 0.28, 0xf0cb88, 0.08, 0.38, 0.28));  // crust highlight
    // wine cup — wider chalice shape
    const cupBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.1, 10), mat(0x7a2a3a));
    cupBase.position.set(0.52, 0.12, -0.28);
    props.add(cupBase);
    const cupStem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.18, 8), mat(0x8a3a4a));
    cupStem.position.set(0.52, 0.25, -0.28);
    props.add(cupStem);
    const cupBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.08, 0.28, 10), mat(0x8a3a4a));
    cupBowl.position.set(0.52, 0.42, -0.28);
    props.add(cupBowl);
    const wine = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.08, 10), mat(0x6a1a2a));
    wine.position.set(0.52, 0.52, -0.28);
    props.add(wine);
    props.position.set(APOLLYON_X - 4, 0, 0);
    props.visible = false;
    s.add(props);
    this.healProps = props;

    // the shining light at the valley's end (the standard beacon)
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X + 1.5, 0, 0);
    s.add(this.shining.group);

    s.add(this.christian.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.chp = 100;
    this.ahp = 100;
    this.turn = 'busy';
    this.animKind = null;
    this.rayActive = false;
    this.bladeRay.visible = false;
    this.dartThrown = false;
    this.spiritSword = false;
    this.mutters = 0;
    this.fleeT = 0;
    this.knockT = 0;
    this.sword.visible = true;
    this.sword.scale.setScalar(1);
    (this.swordGlow.material as THREE.MeshBasicMaterial).opacity = 0;
    this.groundSword.visible = false;
    this.apollyon.visible = !revisit;
    this.apollyon.position.copy(this.apHome);
    this.apollyon.rotation.set(0, -Math.PI / 2, 0); // face west toward Christian
    if (this.healBeam) (this.healBeam.material as THREE.MeshBasicMaterial).opacity = 0;
    if (this.healProps) this.healProps.visible = false;
    this.cb.battleUI(false);
    this.christian.root.position.set(revisit ? -28 : -30, 0, 0);
    this.christian.root.position.y = this.groundY(this.christian.root.position.x);
    this.christian.root.rotation.y = Math.PI / 2;
    this.cb.setMusic?.('sinai');
    if (revisit) {
      this.phase = 'done';
      this.cb.setObjective('🌄 The Valley of Humiliation lies quiet — the scorch-marks remain');
    } else {
      this.phase = 'descend';
      this.cb.setObjective('🌄 Walk down into the Valley of Humiliation');
    }
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'confront' || this.phase === 'battle' || this.phase === 'anim' ||
      this.phase === 'fallen' || this.phase === 'defeated' || this.phase === 'healing') ? 0 : 1;
  }

  // true while it is the player's turn to strike
  canAttack(): boolean {
    return this.phase === 'battle' && this.turn === 'player';
  }

  tryAttack(): void {
    if (!this.canAttack()) return;
    this.turn = 'busy';
    this.phase = 'anim';
    this.animKind = 'swing';
    this.animT = 0;
    this.cb.blipSound();
  }

  // launch the blade ray from the sword toward Apollyon; playerHit() lands when
  // it arrives (see the ray-flight update in update())
  private launchBladeRay(): void {
    const p = this.christian.root.position;
    this.rayFrom.set(p.x + 0.9, 1.6, p.z);
    this.rayTo.set(this.apollyon.position.x - 1.2, 2.6, this.apollyon.position.z);
    this.bladeRay.position.copy(this.rayFrom);
    const dx = this.rayTo.x - this.rayFrom.x;
    const dz = this.rayTo.z - this.rayFrom.z;
    this.bladeRay.rotation.set(0, Math.atan2(dx, dz), 0);
    (this.bladeRay.material as THREE.MeshBasicMaterial).color.set(this.spiritSword ? 0x7ab8ff : 0xe8f0ff);
    this.bladeRay.visible = true;
    this.rayActive = true;
    this.rayT = 0;
    this.cb.blipSound();
  }

  afterMove(): void {
    const p = this.christian.root.position;
    p.z = THREE.MathUtils.clamp(p.z, -7, 7);
    p.x = THREE.MathUtils.clamp(p.x, WEST_EDGE - 1, LIGHT_X + 2);
    p.y = this.groundY(p.x);

    // Apollyon blocks the road during combat
    if (this.apollyon.visible && (this.phase === 'confront' || this.phase === 'battle' ||
        this.phase === 'anim' || this.phase === 'fallen')) {
      if (p.x > APOLLYON_X - 2.5) p.x = APOLLYON_X - 2.5;
    }

    if (this.revisit || this.phase === 'done') {
      if (p.x < WEST_EDGE || p.x > LIGHT_X) this.cb.onExit();
      return;
    }

    if (this.phase === 'descend') {
      if (this.mutters === 0 && p.x > MUTTER_1) {
        this.mutters = 1;
        this.cb.playScript([
          { speaker: 'Christian', text: '*to himself* Down, and down, and down… They named this the Valley of Humiliation. Well — I have been made low before.' },
          { speaker: 'Christian', text: 'Low in the Slough, until Help took my paw. Low at the Gate, until Goodwill drew me through. He has never once left me at the bottom.' },
        ]);
        return;
      }
      if (this.mutters === 1 && p.x > MUTTER_2) {
        this.mutters = 2;
        this.cb.playScript([
          { speaker: 'Christian', text: '*to himself* Low under Sinai, until Evangelist found me. Low on my knees at the Cross — and THAT was the lightest I have ever been.' },
          { speaker: 'Christian', text: 'And fed and armored at the Palace, only yesterday. Walking humbly is no misery at all, when you remember Who walks with you… It is almost peaceful down h—' },
        ]);
        return;
      }
      if (p.x > APOLLYON_X - 7) {
        this.phase = 'confront';
        this.cb.rumbleSound();
        this.runConfrontation();
      }
      return;
    }

    if (this.phase === 'freeroam' && p.x > LIGHT_X) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }

  private runConfrontation(): void {
    this.cb.playScript([
      { speaker: '', text: 'The peace shatters. Over the valley floor comes a monster the height of three houses — scaled like a fish, winged like a dragon, footed like a bear, and out of his lion\'s mouth roll fire and smoke.' },
      { speaker: 'Apollyon', text: 'WHENCE come you, little pilgrim? And WHITHER are you bound?' },
      { speaker: 'Christian', text: 'I come from the City of Destruction, which is the place of all evil — and I am going to the City of Zion.' },
      { speaker: 'Apollyon', text: 'Then you are MINE. I am the prince of that city — all who are born there are my subjects. Yet I am not angry. Turn back, serve me again, and what my country yields I will give you: riches. Honour. EASE.' },
      { speaker: 'Christian', text: 'I have entered the service of another King. His wages, His servants, His country — I cannot go back on it.' },
      { speaker: 'Apollyon', text: '*a smile full of teeth* Serve HIM? YOU? You nearly drowned in the Slough. You took Worldly Wiseman\'s byway. You SLEPT on the hill and lost His scroll. You trembled at two chained lions. Shall I go on?' },
      { speaker: 'Christian', text: '…All this is true. And you have left out more that you do not know. But the Prince I serve is merciful, and ready to forgive.' },
      { speaker: 'Christian', text: 'I got these failings in YOUR country, Apollyon — they are the reason I left it. My Prince has pardoned every one.' },
      { speaker: 'Apollyon', text: 'Then hear me plainly, worm: I am an ENEMY to this Prince. I hate His person, His laws, and His people. Here I SWEAR IT — you go no further. HERE YOU DIE.' },
    ], () => {
      this.phase = 'battle';
      this.turn = 'player';
      this.cb.battleUI(true);
      this.cb.setHP(this.chp, this.ahp);
      this.cb.setObjective('⚔ BATTLE! Press E to swing your sword!');
    });
  }

  private playerHit(): void {
    const dmg = this.spiritSword ? 20 + Math.floor(Math.random() * 9) : 8 + Math.floor(Math.random() * 6);
    this.ahp = Math.max(0, this.ahp - dmg);
    this.cb.setHP(this.chp, this.ahp);
    this.burst(this.apollyon.position.x - 1, 3, this.apollyon.position.z, this.spiritSword ? 10 : 5,
      this.spiritSword ? 0x7ab8ff : 0xd8dee4);
    if (this.ahp <= 0) {
      this.beginDefeat();
      return;
    }
    // Apollyon's counter follows
    this.phase = 'anim';
    this.animKind = (!this.dartThrown && this.ahp < 50) ? 'dart' : 'claw';
    this.animT = -0.5; // a beat before the counterattack
  }

  private enemyHit(): void {
    const dmg = 10 + Math.floor(Math.random() * 6);
    // before the dart he can be battered but not slain
    this.chp = Math.max(this.dartThrown ? 12 : 20, this.chp - dmg);
    this.cb.setHP(this.chp, this.ahp);
    this.cb.rumbleSound();
    this.burst(this.christian.root.position.x, 1.2, this.christian.root.position.z, 5, 0xff8a3d);
    if (Math.random() < 0.5) this.knockT = 1.0; // knocked off his feet, gets back up
    this.phase = 'battle';
    this.turn = 'player';
  }

  private dartHit(): void {
    // the fiery dart: Christian is wounded, falls, and the sword flies away
    this.chp = 8;
    this.cb.setHP(this.chp, this.ahp);
    this.cb.rumbleSound();
    const p = this.christian.root.position;
    this.burst(p.x, 1.4, p.z, 12, 0xff8a3d);
    this.sword.visible = false;
    this.groundSword.position.set(p.x - 2.2, this.groundY(p.x - 2.2) + 0.5, p.z + 1.4);
    this.groundSword.visible = true;
    this.knockT = 99; // stays down for the scene
    this.phase = 'fallen';
    this.cb.playScript([
      { speaker: 'Apollyon', text: '*towering over him* NOW I have you. Prepare yourself to die — for all your fine Prince, HERE will I spill your soul!' },
      { speaker: '', text: 'Christian\'s paw, groping in the dust… closes on the hilt of his sword.' },
      { speaker: 'Christian', text: '"REJOICE NOT AGAINST ME, O MINE ENEMY — WHEN I FALL… I SHALL ARISE!"' },
    ], () => {
      // revived — and the sword is the Sword of the Spirit now
      this.knockT = 0;
      this.christian.root.rotation.x = 0;
      this.christian.root.rotation.z = 0;
      this.chp = 50;
      this.spiritSword = true;
      this.sword.visible = true;
      this.sword.scale.setScalar(1.45);
      (this.swordGlow.material as THREE.MeshBasicMaterial).opacity = 0.55;
      this.groundSword.visible = false;
      this.cb.setHP(this.chp, this.ahp);
      this.cb.blipSound();
      const cp = this.christian.root.position;
      this.burst(cp.x, 1.5, cp.z, 14, 0x7ab8ff);
      this.phase = 'battle';
      this.turn = 'player';
      this.cb.setObjective('⚔ The Sword of the Spirit blazes — press E and drive him back!');
    });
  }

  private beginDefeat(): void {
    this.phase = 'defeated';
    this.fleeT = 0;
    this.cb.battleUI(false);
    this.cb.playScript([
      { speaker: '', text: 'The blue blade bites deep. Apollyon staggers back — and for the first time, something like FEAR crosses the monster\'s face.' },
      { speaker: 'Apollyon', text: 'This… is not… FINISHED, pilgrim…!' },
      { speaker: '', text: 'He spreads his dragon wings with a crack like thunder, and flees away over the black ridges — and Christian sees him no more.' },
      { speaker: 'Christian', text: '*leaning on the sword, gasping* "In all these things… we are more than conquerors… through Him that loved us."' },
    ], () => {
      this.phase = 'healing';
      this.cb.setObjective('🍃 Light falls from heaven onto the road…');
      window.setTimeout(() => this.runHealing(), 1400);
    });
  }

  private runHealing(): void {
    if (this.healProps) this.healProps.visible = true;
    this.cb.playScript([
      { speaker: '', text: 'Then a hand appears, with leaves from the Tree of Life — and bread, and wine, set out on a white cloth in the light.' },
      { speaker: 'Christian', text: '*pressing the leaves to his wounds* …The stinging is gone. All of it, gone. Thank You — for the sword, and the fall, and the getting up again.' },
      { speaker: '', text: 'He eats, and is refreshed, and his hurts close over. Of all his scars, only the story remains.' },
    ], () => {
      this.chp = 100;
      this.phase = 'freeroam';
      this.cb.setMusic?.('cross');
      this.cb.setObjective('✨ On east, out of the valley, toward the light');
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
      sp.vx = (Math.random() - 0.5) * 3;
      sp.vy = 1.2 + Math.random() * 2;
      sp.vz = (Math.random() - 0.5) * 3;
      sp.mesh.position.set(x, y, z);
      sp.mesh.visible = true;
    }
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const p = this.christian.root.position;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);

    // knocked down / getting back up (backward fall, not sideways)
    if (this.knockT > 0 && this.knockT < 90) {
      this.knockT = Math.max(0, this.knockT - dt);
      this.christian.root.rotation.x =
        (Math.PI / 2) * THREE.MathUtils.clamp(this.knockT / 0.5, 0, 1);
    } else if (this.knockT >= 90) {
      this.christian.root.rotation.x = Math.PI / 2; // stays on back during fallen scene
    } else {
      this.christian.root.rotation.x = 0;
    }

    // ---------- battle animations ----------
    if (this.phase === 'anim' && this.animKind) {
      this.animT += dt;
      if (this.animKind === 'swing') {
        const u = THREE.MathUtils.clamp(this.animT / 0.45, 0, 1);
        this.christian.armR.rotation.x = -2.2 * Math.sin(u * Math.PI);
        this.swingArc.visible = u > 0.1 && u < 0.9;
        this.swingArc.position.set(p.x + 1.4, 1.4, p.z);
        this.swingArc.rotation.set(Math.PI / 2 - 0.4, 0, -u * 2.4);
        (this.swingArc.material as THREE.MeshBasicMaterial).opacity = 0.7 * Math.sin(u * Math.PI);
        (this.swingArc.material as THREE.MeshBasicMaterial).color.set(this.spiritSword ? 0x7ab8ff : 0xd8dee4);
        // (player-controlled position; no forced movement during swing)
        if (this.animT >= 0.5) {
          this.swingArc.visible = false;
          this.christian.armR.rotation.x = 0;
          this.animKind = null;
          this.launchBladeRay(); // fling a blade ray; the hit lands when it reaches Apollyon
        }
      } else if (this.animKind === 'claw') {
        if (this.animT >= 0) {
          const u = THREE.MathUtils.clamp(this.animT / 0.5, 0, 1);
          this.apollyon.position.x = this.apHome.x - Math.sin(u * Math.PI) * 2.6;
          if (this.apJaw) this.apJaw.position.y = -0.62 - Math.sin(u * Math.PI) * 0.2;
          if (this.animT >= 0.55) {
            this.apollyon.position.x = this.apHome.x;
            this.animKind = null;
            this.enemyHit();
          }
        }
      } else if (this.animKind === 'dart') {
        if (this.animT < 0) {
          // wind-up: the belly flares
        } else if (this.animT === 0 || !this.dart.visible) {
          if (!this.dartThrown) {
            this.dartThrown = true;
            this.dart.visible = true;
            this.dart.position.set(this.apollyon.position.x - 1, 2.2, this.apollyon.position.z);
          }
        }
        if (this.dart.visible) {
          const u = THREE.MathUtils.clamp(this.animT / 0.6, 0, 1);
          this.dart.position.x = THREE.MathUtils.lerp(this.apollyon.position.x - 1, p.x, u);
          this.dart.position.y = 2.2 - u * 1.2;
          this.dart.rotation.z = -0.4;
          if (u >= 1) {
            this.dart.visible = false;
            this.animKind = null;
            this.dartHit();
          }
        }
      }
    }

    // ---------- the flung blade ray in flight ----------
    if (this.rayActive) {
      this.rayT += dt;
      const u = THREE.MathUtils.clamp(this.rayT / 0.22, 0, 1);
      this.bladeRay.position.lerpVectors(this.rayFrom, this.rayTo, u);
      const rm = this.bladeRay.material as THREE.MeshBasicMaterial;
      rm.opacity = 0.85 * Math.sin(u * Math.PI) + 0.15;
      // stretch as it flies, then snap short on impact
      this.bladeRay.scale.set(1, 1, 1 + u * 0.6);
      if (u >= 1) {
        this.rayActive = false;
        this.bladeRay.visible = false;
        this.bladeRay.scale.set(1, 1, 1);
        this.playerHit();
      }
    }

    // ---------- Apollyon presence ----------
    if (this.apollyon.visible) {
      // wings beat slowly; furious flapping as he flees
      const flap = this.phase === 'defeated' ? Math.sin(t * 14) * 0.5 : Math.sin(t * 2.2) * 0.16;
      for (let i = 0; i < this.apWings.length; i++) {
        const side = i < 2 ? -1 : 1;
        this.apWings[i].rotation.z = (i % 2 === 0 ? 0.5 : 0.8) * side + flap * side;
      }
      if (this.apJaw && this.phase !== 'anim') {
        this.apJaw.position.y = -0.62 - Math.abs(Math.sin(t * 1.8)) * 0.08;
      }
      // belly smoke
      this.smokeTimer -= dt;
      if (this.smokeTimer <= 0 && this.phase !== 'descend') {
        this.smokeTimer = 0.35;
        const sm = this.smoke.find((x) => x.life >= 1);
        if (sm) {
          sm.life = 0;
          sm.mesh.position.set(
            this.apollyon.position.x + (Math.random() - 0.5) * 1.2,
            2.4, this.apollyon.position.z + 1.1,
          );
          sm.mesh.visible = true;
        }
      }
      // fleeing: up and away over the eastern ridge
      if (this.phase === 'defeated') {
        this.fleeT += dt;
        this.apollyon.position.y += dt * (2 + this.fleeT * 2);
        this.apollyon.position.x += dt * (3 + this.fleeT * 3);
        this.apollyon.rotation.z = Math.min(0.4, this.fleeT * 0.2);
        if (this.apollyon.position.y > 30) this.apollyon.visible = false;
      }
    }
    for (const sm of this.smoke) {
      if (sm.life >= 1) continue;
      sm.life = Math.min(1, sm.life + dt * 0.6);
      sm.mesh.position.y += dt * 1.6;
      sm.mesh.position.x += dt * 0.4;
      sm.mesh.scale.setScalar(0.7 + sm.life * 1.8);
      sm.m.opacity = 0.5 * (1 - sm.life);
      if (sm.life >= 1) sm.mesh.visible = false;
    }

    // ---------- sparkles ----------
    for (const sp of this.sparkles) {
      if (sp.life >= 1) continue;
      sp.life = Math.min(1, sp.life + dt * 1.2);
      sp.mesh.position.x += sp.vx * dt;
      sp.mesh.position.y += sp.vy * dt;
      sp.mesh.position.z += sp.vz * dt;
      sp.vy -= dt * 1.6;
      sp.m.opacity = 0.9 * (1 - sp.life);
      if (sp.life >= 1) sp.mesh.visible = false;
    }

    // the healing beam swells while the scene plays
    if (this.healBeam) {
      const m = this.healBeam.material as THREE.MeshBasicMaterial;
      const target = this.phase === 'healing' ? 0.5 : 0;
      m.opacity += (target - m.opacity) * Math.min(dt * 2, 1);
    }
    if (this.shining) animateShiningLight(this.shining, t);
    // the spirit sword blazes with a living pulse
    if (this.spiritSword) {
      const pulse = Math.abs(Math.sin(t * 4));
      const m = this.swordGlow.material as THREE.MeshBasicMaterial;
      m.opacity = 0.45 + 0.45 * pulse;
      m.color.setHSL(0.6 - pulse * 0.08, 1.0, 0.6 + pulse * 0.2);
      this.swordGlow.scale.set(1 + pulse * 0.3, 1, 1 + pulse * 0.3);
    }
  }
}
