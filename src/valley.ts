import * as THREE from 'three';
import { PALETTE } from './palette';
import { BladeBeam, FireFx } from './combatFx';
import { makeApollyon, type ApollyonRig } from './apollyon';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
import { dressExterior } from './world/dress';
import { band } from './world/terrain';
import { createRock } from './world/props';
import { voxelMesh, Voxel, rng as seeded, vary } from './world/voxels';
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
  setMusic?: (style: 'sinai' | 'cross' | 'battle') => void;
  blockSound?: () => void;
  shake?: (amount: number) => void;
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
const DART_FLIGHT = 1.25; // seconds for a blockable dart to arrive
const MUTTER_1 = -24;
const MUTTER_2 = -15;

function turnTo(a: number, b: number, k: number): number {
  return a + Math.atan2(Math.sin(b - a), Math.cos(b - a)) * k;
}

export class ValleyScene {
  scene = new THREE.Scene();
  phase: Phase = 'descend';
  private cb: ValleyCallbacks;
  private christian: BearParts;
  private sword: THREE.Group;          // in his paw
  private spiritSword = false;         // after the revival: bigger, blue
  private swordGlow: THREE.Mesh;
  private swordLight: THREE.PointLight;
  private groundSword: THREE.Group;    // where it lands when he drops it
  private apollyon: THREE.Group;
  private apRig: ApollyonRig;
  private apWings: THREE.Group[] = [];
  private apJaw: THREE.Group | null = null;
  private apHome = new THREE.Vector3(APOLLYON_X, 0, 0);
  private chp = 100;
  private ahp = 100;
  private turn: 'player' | 'busy' = 'busy';
  private animT = 0;
  private animKind: 'swing' | 'claw' | 'volley' | 'dart' | null = null;
  private counters = 0;      // Apollyon's counterattacks so far
  private volleyLeft = 0;    // blockable darts still to come this turn
  private guardT = 0;        // >0 while the shield is up
  private guardRest = 0;     // a short breath before it can be raised again
  private missed = 0;        // misses in a row: the guard grows more forgiving
  private learnedBlock = false;
  private guardGlow: THREE.Mesh;
  private dartThrown = false;
  private knockT = 0; // Christian knocked down, getting back up
  private dart: THREE.Group;
  private swingArc: THREE.Mesh;
  // a blade ray hurled from the sword on each swing, flying out to strike Apollyon
  private beam = new BladeBeam();
  private fx = new FireFx();
  private recoilT = 0;       // Apollyon staggering from a hit
  private rayActive = false;
  private rayDamages = false;
  private rayT = 0;
  private rayFrom = new THREE.Vector3();
  private rayTo = new THREE.Vector3();
  private flourishT = -1;
  private flourishLaunched = false;
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
    addPilgrimArmorDetails(this.christian);
    const shield = new THREE.Group();
    shield.add(block(0.12, 0.8, 0.62, STEEL, 0, 0, 0));
    shield.add(block(0.14, 0.42, 0.12, PALETTE.robeGold, 0, 0, 0));
    shield.add(block(0.14, 0.12, 0.4, PALETTE.robeGold, 0, 0.1, 0));
    shield.position.set(-0.24, -0.3, 0);
    this.christian.armL.add(shield);
    this.guardGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 1.7, 1.5),
      new THREE.MeshBasicMaterial({ color: 0xffe3a0, transparent: true, opacity: 0, depthWrite: false }),
    );
    this.guardGlow.visible = false;
    this.scene.add(this.guardGlow);

    this.sword = new THREE.Group();
    this.sword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0.55, 0));
    this.sword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, 0.04, 0));
    this.sword.add(block(0.1, 0.24, 0.12, 0x8a6f52, 0, -0.12, 0));
    const swordAuraGeometry = new THREE.ConeGeometry(0.22, 1.28, 4);
    this.swordGlow = new THREE.Mesh(
      swordAuraGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x62b8ff, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    this.swordGlow.position.y = 0.62;
    this.sword.add(this.swordGlow);
    this.swordLight = new THREE.PointLight(0x64bdff, 0, 5);
    this.swordLight.position.y = 0.62;
    this.sword.add(this.swordLight);
    this.sword.position.set(0.16, -0.5, 0.14);
    this.christian.armR.add(this.sword);

    // the dropped sword prop (shown when it flies from his paw)
    this.groundSword = new THREE.Group();
    this.groundSword.add(block(0.09, 0.95, 0.16, 0xe8edf2, 0, 0, 0));
    this.groundSword.add(block(0.3, 0.1, 0.2, PALETTE.robeGold, 0, -0.5, 0));
    this.groundSword.rotation.z = Math.PI / 2.3;
    this.groundSword.visible = false;

    // the fiery dart, as a fireball
    this.dart = this.fx.ball;

    // the grey sword-swing arc
    this.swingArc = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.14, 6, 14, Math.PI * 0.9),
      new THREE.MeshBasicMaterial({ color: 0xd8dee4, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }),
    );
    this.swingArc.visible = false;

    // ---------- APOLLYON ----------
    this.apRig = makeApollyon();
    this.apollyon = this.apRig.root;
    this.apWings = this.apRig.wings;
    this.apJaw = this.apRig.jaw;
    this.apollyon.visible = false;
  }

  // the western descent into the valley
  groundY(x: number): number {
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

    // the valley: the road descends the exact walking height from the high
    // western plateau to the floor, while scarred valley walls rise either side
    const vr = seeded(91);
    dressExterior(s, {
      seed: 99,
      butterflies: 0,
      bounds: { minX: -95, maxX: 72, minZ: -55, maxZ: 55 },
      cell: 1.5,
      flat: (x, z) => band(Math.max(0, Math.abs(z) - 9), 0, 5) * band(Math.max(0, -96 - x, x - 42), 0, 8),
      shape: (x, z) => this.groundY(x) + (1 - band(Math.abs(z), 11, 24)) * 4.5,
      hills: 3,
      blocked: (x, z) => Math.abs(z) < 1.4 && x > -34 && x < 40,
      palette: {
        grass: [0x8f9c74, 0x87946c, 0x97a47b, 0x808d67],
        highGrass: 0xa39b7c,
        earth: 0xb8a888,
        leaves: [0x869467, 0x7c8a5e, 0x909e6f],
        pine: [0x5f6f58, 0x677760, 0x586851],
        flowers: [0xe8d6c2, 0xf2d5b8, 0xd8cfe0],
      },
      tint: (_x, _z, y, c) => { if (y > 3.5) c.lerp(new THREE.Color(0xa4917c), THREE.MathUtils.clamp((y - 3.5) / 5, 0, 0.6)); },
      grass: 2200,
      flowers: 120,
      trees: 35,
      shrubs: 70,
      treeZone: (_x, z) => Math.abs(z) > 10 && Math.abs(z) < 38,
    });

    // gnarled valley scenery: dark scree boulders and dead trees
    ([[-2, -8], [4, 8], [12, -8], [18, 7], [26, -7], [-10, 8], [-18, -8.5], [33, 8]] as const).forEach(([rx, rz], i) => {
      for (let k = 0; k < 2; k++) {
        const rock = createRock({ seed: 990 + i * 3 + k, size: 1.0 - k * 0.4, color: 0x7d7b72 });
        const x = rx + k * 1.1;
        const z = rz + k * 0.6;
        rock.position.set(x, rock.position.y + this.groundY(x), z);
        s.add(rock);
      }
    });
    for (const [tx, tz] of [[-6, -9], [9, 9], [22, -9], [30, 8], [-22, 9], [-14, -9.5]] as const) {
      const dead = voxelMesh([
        { w: 0.5, h: 0.3, d: 0.5, x: 0, y: 0.15, z: 0, color: 0x5f554c },
        { w: 0.42, h: 2.6, d: 0.42, x: 0, y: 1.3, z: 0, color: 0x6a5f56 },
        { w: 1.5, h: 0.28, d: 0.28, x: 0.45, y: 2.2, z: 0, color: 0x6a5f56, rz: 0.2 },
        { w: 0.28, h: 1.0, d: 0.28, x: 1.1, y: 2.8, z: 0, color: 0x5a5048, rz: -0.15 },
        { w: 0.9, h: 0.22, d: 0.22, x: -0.5, y: 1.6, z: 0.1, color: 0x5a5048, rz: -0.4 },
      ]);
      dead.position.set(tx, this.groundY(tx), tz);
      dead.rotation.y = tx * 0.37;
      s.add(dead);
    }

    // the road down and along the valley floor — worn flagstones
    const roadVox: Voxel[] = [];
    for (let i = 0; i <= 22; i++) {
      const px = -30 + i * 3.1;
      for (let k = 0; k < 2; k++) {
        const x = px + k * 1.5;
        roadVox.push({
          w: 1.0 + vr() * 0.5, h: 0.14, d: 1.5 + vr() * 0.6,
          x, y: this.groundY(x) + 0.07, z: (vr() - 0.5) * 0.7,
          ry: (vr() - 0.5) * 0.3, color: vary(0xc4b394, vr, 0.04),
        });
      }
    }
    const road = voxelMesh(roadVox);
    road.castShadow = false;
    s.add(road);
    this.apollyon.position.copy(this.apHome);
    s.add(this.apollyon);
    s.add(this.groundSword);
    s.add(this.fx.root);
    s.add(this.swingArc);
    s.add(this.beam.root);

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

    // Keep the beacon inside the reachable end of the road. Previously it sat
    // beyond the completion boundary, so Chapter IX could end before its light
    // was ever clearly in view.
    this.shining = makeShiningLight();
    this.shining.group.position.set(LIGHT_X - 1.2, 0, 0);
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
    this.counters = 0;
    this.volleyLeft = 0;
    this.guardT = 0;
    this.guardRest = 0;
    this.missed = 0;
    this.learnedBlock = false;
    this.guardGlow.visible = false;
    this.dart.visible = false;
    this.rayActive = false;
    this.rayDamages = false;
    this.flourishT = -1;
    this.flourishLaunched = false;
    this.beam.stop();
    this.fx.clear();
    this.recoilT = 0;
    this.apollyon.rotation.order = 'YXZ';
    this.dartThrown = false;
    this.spiritSword = false;
    this.mutters = 0;
    this.fleeT = 0;
    this.smokeTimer = 0;
    this.knockT = 0;
    this.christian.root.rotation.order = 'YXZ';
    this.christian.root.rotation.x = 0;
    this.christian.root.rotation.z = 0;
    this.sword.visible = true;
    this.sword.scale.setScalar(1);
    (this.swordGlow.material as THREE.MeshBasicMaterial).opacity = 0;
    this.swordLight.intensity = 0;
    this.groundSword.visible = false;
    this.apollyon.visible = !revisit;
    this.apollyon.traverse((object) => {
      if (object instanceof THREE.Mesh) object.castShadow = true;
    });
    this.apollyon.position.copy(this.apHome);
    this.apollyon.rotation.set(0, -Math.PI / 2, 0); // west, toward Christian
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

  battleCameraFocus(target: THREE.Vector3): boolean {
    const active = this.phase === 'confront'
      || this.phase === 'battle'
      || this.phase === 'anim'
      || this.phase === 'fallen';
    if (!active || !this.apollyon.visible) return false;

    // Frame the duel around its midpoint instead of following Christian alone.
    // This is especially important on portrait phones, whose horizontal field
    // of view is too narrow to include Apollyon from the normal follow camera.
    target.copy(this.christian.root.position).lerp(this.apollyon.position, 0.5);
    target.y += 1.5; // keeps his horns below the health bars
    return true;
  }

  // true while fiery darts are flying that the shield can turn aside
  canBlock(): boolean {
    return this.phase === 'anim' && this.animKind === 'volley';
  }

  /** the dart is close: now is the moment */
  blockNow(): boolean {
    return this.canBlock() && this.dart.visible && this.animT > DART_FLIGHT * 0.5;
  }

  tryBlock(): void {
    if (!this.canBlock() || this.guardT > 0 || this.guardRest > 0) return;
    this.guardT = this.missed >= 2 ? 1.05 : 0.8; // outlasts a dart from the moment the button pulses
    this.cb.blipSound();
  }

  private dartLands(): void {
    const p = this.christian.root.position;
    this.dart.visible = false;
    if (this.guardT > 0) {
      this.missed = 0;
      this.learnedBlock = true;
      this.guardT = Math.max(this.guardT, 0.25);
      this.cb.blockSound?.();
      this.fx.deflect(new THREE.Vector3(p.x + 1.05, p.y + 1.4, p.z));
      this.cb.shake?.(0.16);
    } else {
      this.missed++;
      this.chp = Math.max(this.dartThrown ? 12 : 20, this.chp - 6);
      this.cb.setHP(this.chp, this.ahp);
      this.cb.rumbleSound();
      this.fx.explode(new THREE.Vector3(p.x + 0.5, p.y + 1.2, p.z));
      this.cb.shake?.(0.4);
    }
    this.volleyLeft--;
    this.animT = -0.45;
    if (this.volleyLeft > 0) return;
    this.animKind = null;
    this.phase = 'battle';
    this.turn = 'player';
    this.cb.setObjective(this.learnedBlock
      ? '⚔ Well blocked! Swing your sword!'
      : '⚔ Swing your sword!');
  }

  tryAttack(): void {
    if (!this.canAttack()) return;
    this.turn = 'busy';
    this.phase = 'anim';
    this.animKind = 'swing';
    this.animT = 0;
    this.cb.blipSound();
  }

  trySwordButton(): void {
    if (this.canAttack()) {
      this.tryAttack();
      return;
    }
    const canFlourish = this.phase === 'descend' || this.phase === 'freeroam' || this.phase === 'done';
    if (!canFlourish || !this.sword.visible || this.flourishT >= 0 || this.rayActive) return;
    this.flourishT = 0;
    this.flourishLaunched = false;
    this.cb.blipSound();
  }

  private poseSwordSwing(u: number): void {
    // A three-part cut: draw the sword back across the shoulder, turn through
    // the strike, then let its weight carry the paw low before recovering.
    // smoothstep removes the robotic stop/start of the old sine-only motion.
    const ease = (v: number) => v * v * (3 - 2 * v);
    let armX: number;
    let armZ: number;
    let bodyPitch: number;
    if (u < 0.3) {
      const v = ease(u / 0.3);
      armX = THREE.MathUtils.lerp(0, -0.72, v);
      armZ = THREE.MathUtils.lerp(0, 0.52, v);
      bodyPitch = THREE.MathUtils.lerp(0, -0.07, v);
    } else if (u < 0.68) {
      const v = ease((u - 0.3) / 0.38);
      armX = THREE.MathUtils.lerp(-0.72, -2.65, v);
      armZ = THREE.MathUtils.lerp(0.52, -0.28, v);
      bodyPitch = THREE.MathUtils.lerp(-0.07, 0.13, v);
    } else {
      const v = ease((u - 0.68) / 0.32);
      armX = THREE.MathUtils.lerp(-2.65, 0, v);
      armZ = THREE.MathUtils.lerp(-0.28, 0, v);
      bodyPitch = THREE.MathUtils.lerp(0.13, 0, v);
    }
    this.christian.armR.rotation.x = armX;
    this.christian.armR.rotation.z = armZ;
    this.christian.root.rotation.x = bodyPitch;
  }

  private resetSwordPose(): void {
    this.christian.armR.rotation.x = 0;
    this.christian.armR.rotation.z = 0;
    this.christian.root.rotation.x = 0;
  }

  // launch the blade ray from the sword toward Apollyon; playerHit() lands when
  // it arrives (see the ray-flight update in update())
  private launchBladeRay(damaging = true): void {
    const p = this.christian.root.position;
    const facing = this.christian.root.rotation.y;
    const fx = Math.sin(facing);
    const fz = Math.cos(facing);
    this.rayFrom.set(p.x + fx * 0.9, 1.6, p.z + fz * 0.9);
    if (damaging) {
      this.rayTo.set(this.apollyon.position.x - 1.2, 2.6, this.apollyon.position.z);
    } else {
      this.rayTo.set(p.x + fx * 7.5, 1.8, p.z + fz * 7.5);
    }
    this.beam.root.position.copy(this.rayFrom);
    const dx = this.rayTo.x - this.rayFrom.x;
    const dz = this.rayTo.z - this.rayFrom.z;
    this.beam.root.rotation.set(0, Math.atan2(dx, dz), 0);
    this.beam.root.rotation.z = -0.62; // tilted so the cut shows its face to the camera
    this.beam.start(this.spiritSword);
    this.rayActive = true;
    this.rayDamages = damaging;
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
      { speaker: 'Apollyon', text: 'Where did you come from, little pilgrim? And where do you think you are going?' },
      { speaker: 'Christian', text: 'I come from the City of Destruction, which is the place of all evil — and I am going to the City of Zion.' },
      { speaker: 'Apollyon', text: 'Then you are MINE. I rule that city, and everyone born there belongs to me. But I am not angry. Turn back and serve me again. I will give you riches, praise, and an EASY life.' },
      { speaker: 'Christian', text: 'I serve another King now. I belong with Him, His people, and His country. I will not go back.' },
      { speaker: 'Apollyon', text: '*a smile full of teeth* Serve HIM? YOU? You nearly drowned in the Slough. You followed Worldly Wiseman\'s wrong road. You fell ASLEEP on the hill and lost His scroll. You shook with fear at two chained lions. Want me to keep going?' },
      { speaker: 'Christian', text: '…All this is true, and there are more failures you do not know about. But the Prince I serve is kind and ready to forgive.' },
      { speaker: 'Christian', text: 'I learned these wrong ways in YOUR country, Apollyon. That is why I left. My Prince has forgiven every one.' },
      { speaker: 'Apollyon', text: 'Then hear me plainly, worm: I am an ENEMY to this Prince. I hate His person, His laws, and His people. Here I SWEAR IT — you go no further. HERE YOU DIE.' },
    ], () => {
      this.phase = 'battle';
      this.turn = 'player';
      this.cb.battleUI(true);
      this.cb.setMusic?.('battle'); // driving battle music for the duel
      this.cb.setHP(this.chp, this.ahp);
      this.cb.setObjective('⚔ BATTLE! Press E to swing your sword!');
    });
  }

  private playerHit(): void {
    const dmg = this.spiritSword ? 20 + Math.floor(Math.random() * 9) : 8 + Math.floor(Math.random() * 6);
    this.ahp = Math.max(0, this.ahp - dmg);
    this.cb.setHP(this.chp, this.ahp);
    this.fx.cut(new THREE.Vector3(this.apollyon.position.x - 1.4, 2.9, this.apollyon.position.z), this.spiritSword);
    this.recoilT = 1;
    this.cb.shake?.(this.spiritSword ? 0.4 : 0.22);
    if (this.ahp <= 0) {
      this.beginDefeat();
      return;
    }
    // Apollyon's counter follows
    this.phase = 'anim';
    this.animT = -0.5; // a beat before the counterattack
    if (!this.dartThrown && this.ahp < 50) {
      this.animKind = 'dart';
      return;
    }
    // mostly darts to block, with a claw now and then
    this.counters++;
    if (this.counters % 3 === 0 && !this.spiritSword) {
      this.animKind = 'claw';
      this.cb.setObjective('⚔ His claw! Stand firm, then swing your sword');
      return;
    }
    this.animKind = 'volley';
    this.volleyLeft = this.counters === 1 ? 1 : this.spiritSword ? 3 : 2;
    this.animT = -0.9;
    this.cb.setObjective('🛡 Fiery darts! Raise your shield');
  }

  private enemyHit(): void {
    const dmg = 10 + Math.floor(Math.random() * 6);
    // before the dart he can be battered but not slain
    this.chp = Math.max(this.dartThrown ? 12 : 20, this.chp - dmg);
    this.cb.setHP(this.chp, this.ahp);
    this.cb.rumbleSound();
    this.burst(this.christian.root.position.x, 1.2, this.christian.root.position.z, 5, 0xff8a3d);
    this.cb.shake?.(0.4);
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
    this.fx.explode(new THREE.Vector3(p.x + 0.4, p.y + 1.2, p.z), true);
    this.cb.shake?.(0.75);
    this.sword.visible = false;
    this.groundSword.position.set(p.x - 2.2, this.groundY(p.x - 2.2) + 0.5, p.z + 1.4);
    this.groundSword.visible = true;
    this.knockT = 99; // stays down for the scene
    this.phase = 'fallen';
    this.cb.playScript([
      { speaker: 'Apollyon', text: '*towering over him* NOW I have you. Prepare yourself to die — for all your fine Prince, HERE will I spill your soul!' },
      { speaker: '', text: 'Christian\'s paw, groping in the dust… closes on the hilt of his sword.' },
      { speaker: 'Christian', text: '"DO NOT CELEBRATE OVER ME, MY ENEMY. THOUGH I FALL… I WILL RISE AGAIN!"' },
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
      this.swordLight.intensity = 1.8;
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
    this.cb.setMusic?.('sinai'); // the battle is won — the driving music ends
    // He may remain visible briefly for the flight animation, but his grounded
    // shadow must vanish the instant he is beaten.
    this.apollyon.traverse((object) => {
      if (object instanceof THREE.Mesh) object.castShadow = false;
    });
    // Retire every existing belly-smoke particle so it cannot drift into the
    // heavenly light during the healing scene.
    for (const sm of this.smoke) {
      sm.life = 1;
      sm.mesh.visible = false;
      sm.m.opacity = 0;
    }
    this.smokeTimer = Number.POSITIVE_INFINITY;
    this.cb.battleUI(false);
    this.cb.playScript([
      { speaker: '', text: 'The blue blade bites deep. Apollyon staggers back — and for the first time, something like FEAR crosses the monster\'s face.' },
      { speaker: 'Apollyon', text: 'This… is not… FINISHED, pilgrim…!' },
      { speaker: '', text: 'He spreads his dragon wings with a crack like thunder, and flees away over the black ridges — and Christian sees him no more.' },
      { speaker: 'Christian', text: '*leaning on the sword, gasping* "In all these things… we are more than conquerors… through Him that loved us."' },
    ], () => {
      this.apollyon.visible = false;
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

    // Apply pitch after Christian's east-facing yaw. A negative local pitch
    // sends his head west (backward); world-Z rotation tipped him sideways.
    if (this.knockT > 0 && this.knockT < 90) {
      this.knockT = Math.max(0, this.knockT - dt);
      this.christian.root.rotation.z = 0;
      this.christian.root.rotation.x =
        -(Math.PI / 2) * THREE.MathUtils.clamp(this.knockT / 0.5, 0, 1);
    } else if (this.knockT >= 90) {
      this.christian.root.rotation.z = 0;
      this.christian.root.rotation.x = -Math.PI / 2; // stays on his back during the fallen scene
    } else {
      this.christian.root.rotation.x = 0;
      this.christian.root.rotation.z = 0;
    }

    // A free sword flourish is available anywhere outside the locked duel
    // sequences. Its wave is visual only and cannot damage an unseen Apollyon.
    if (this.flourishT >= 0) {
      this.flourishT += dt;
      const u = THREE.MathUtils.clamp(this.flourishT / 0.72, 0, 1);
      this.poseSwordSwing(u);
      if (!this.flourishLaunched && u >= 0.66) {
        this.flourishLaunched = true;
        this.launchBladeRay(false);
      }
      if (u >= 1) {
        this.resetSwordPose();
        this.flourishT = -1;
      }
    }

    // ---------- battle animations ----------
    if (this.phase === 'anim' && this.animKind) {
      this.animT += dt;
      if (this.animKind === 'swing') {
        const u = THREE.MathUtils.clamp(this.animT / 0.72, 0, 1);
        this.poseSwordSwing(u);
        this.swingArc.visible = u > 0.28 && u < 0.82;
        this.swingArc.position.set(p.x + 1.4, 1.4, p.z);
        const cut = THREE.MathUtils.clamp((u - 0.28) / 0.54, 0, 1);
        this.swingArc.rotation.set(Math.PI / 2 - 0.4, 0, 0.45 - cut * 2.7);
        (this.swingArc.material as THREE.MeshBasicMaterial).opacity =
          0.75 * Math.sin(cut * Math.PI);
        (this.swingArc.material as THREE.MeshBasicMaterial).color.set(this.spiritSword ? 0x7ab8ff : 0xd8dee4);
        // (player-controlled position; no forced movement during swing)
        if (u >= 1) {
          this.swingArc.visible = false;
          this.resetSwordPose();
          this.animKind = null;
          this.launchBladeRay(); // fling a blade ray; the hit lands when it reaches Apollyon
        }
      } else if (this.animKind === 'claw') {
        if (this.animT >= 0) {
          const u = THREE.MathUtils.clamp(this.animT / 0.5, 0, 1);
          this.apollyon.position.x = this.apHome.x - Math.sin(u * Math.PI) * 2.6;
          if (this.apJaw) this.apJaw.position.y = -0.74 - Math.sin(u * Math.PI) * 0.22;
          if (this.animT >= 0.55) {
            this.apollyon.position.x = this.apHome.x;
            this.animKind = null;
            this.enemyHit();
          }
        }
      } else if (this.animKind === 'volley') {
        if (this.apJaw) this.apJaw.position.y = -0.74 - (this.animT < 0 ? 0.22 : 0.06);
        if (this.animT >= 0) {
          this.dart.visible = true;
          const u = THREE.MathUtils.clamp(this.animT / DART_FLIGHT, 0, 1);
          this.dart.position.set(
            THREE.MathUtils.lerp(this.apollyon.position.x - 2.6, p.x + 0.8, u),
            4.4 - u * 3 + Math.sin(u * Math.PI) * 0.5, this.apollyon.position.z + (p.z - this.apollyon.position.z) * u,
          );
          if (u >= 1) this.dartLands();
        }
      } else if (this.animKind === 'dart') {
        if (this.animT < 0) {
          // wind-up: the belly flares
        } else if (this.animT === 0 || !this.dart.visible) {
          if (!this.dartThrown) {
            this.dartThrown = true;
            this.dart.visible = true;
            this.dart.position.set(this.apollyon.position.x - 2.6, 4.4, this.apollyon.position.z);
          }
        }
        if (this.dart.visible) {
          const u = THREE.MathUtils.clamp(this.animT / 0.6, 0, 1);
          this.dart.position.x = THREE.MathUtils.lerp(this.apollyon.position.x - 2.6, p.x + 0.4, u);
          this.dart.position.y = 4.4 - u * 3.2;
          if (u >= 1) {
            this.dart.visible = false;
            this.animKind = null;
            this.dartHit();
          }
        }
      }
    }

    // ---------- the raised shield ----------
    if (this.guardT > 0) {
      this.guardT = Math.max(0, this.guardT - dt);
      if (this.guardT === 0) this.guardRest = 0.25;
    } else this.guardRest = Math.max(0, this.guardRest - dt);
    const guard = this.guardT > 0 ? Math.min(1, this.guardT / 0.15) : 0;
    this.guardGlow.visible = guard > 0;
    if (guard > 0) {
      this.christian.armL.rotation.x = -1.35 * guard;
      this.guardGlow.position.set(p.x + 0.95, p.y + 1.1, p.z);
      (this.guardGlow.material as THREE.MeshBasicMaterial).opacity = 0.5 * guard;
    }

    // ---------- the flung blade ray in flight ----------
    if (this.rayActive) {
      this.rayT += dt;
      const u = THREE.MathUtils.clamp(this.rayT / 0.36, 0, 1);
      this.beam.root.position.lerpVectors(this.rayFrom, this.rayTo, u);
      this.beam.update(u, this.spiritSword);
      if (u >= 1) {
        this.rayActive = false;
        this.beam.stop();
        if (this.rayDamages) this.playerHit();
        this.rayDamages = false;
      }
    }

    // ---------- Apollyon presence ----------
    this.fx.update(dt, t);
    this.recoilT = Math.max(0, this.recoilT - dt * 2.4);
    if (this.apollyon.visible) {
      // the two stand squarely face to face
      if (this.phase !== 'defeated') {
        const ap = this.apollyon.position;
        const toChristian = Math.atan2(p.x - ap.x, p.z - ap.z);
        const ease = 1 - Math.exp(-dt * 6);
        this.apollyon.rotation.y = turnTo(this.apollyon.rotation.y, toChristian, ease);
        if (this.phase === 'confront' || this.phase === 'battle' || this.phase === 'anim') {
          this.christian.root.rotation.y = turnTo(this.christian.root.rotation.y, toChristian + Math.PI, ease);
        }
        this.apollyon.rotation.x = -Math.sin(this.recoilT * Math.PI) * 0.14;
      }
      const clawU = this.animKind === 'claw' && this.animT > -0.4 ? Math.sin(THREE.MathUtils.clamp((this.animT + 0.4) / 0.95, 0, 1) * Math.PI) : 0;
      const breathing = this.animKind === 'volley' || this.animKind === 'dart';
      this.apRig.animate(t, this.phase === 'anim' ? clawU : 0, this.phase === 'anim' && breathing ? 1 : 0);
      // wings beat slowly; furious flapping as he flees
      const flap = this.phase === 'defeated' ? Math.sin(t * 14) * 0.5 : Math.sin(t * 2.2) * 0.16;
      for (let i = 0; i < this.apWings.length; i++) {
        const side = i === 0 ? -1 : 1;
        this.apWings[i].rotation.z = (0.18 + flap) * side;
      }
      if (this.apJaw && this.phase !== 'anim') {
        this.apJaw.position.y = -0.74 - Math.abs(Math.sin(t * 1.8)) * 0.08;
      }
      // belly smoke
      this.smokeTimer -= dt;
      const apollyonCanSmoke = this.phase === 'confront' || this.phase === 'battle'
        || this.phase === 'anim' || this.phase === 'fallen';
      if (this.smokeTimer <= 0 && apollyonCanSmoke) {
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
      this.swordLight.intensity = 1.5 + pulse * 1.2;
    }
  }
}
