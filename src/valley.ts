import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, addPilgrimArmorDetails, BearParts, block, mat } from './bear';
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
  private swordLight: THREE.PointLight;
  private groundSword: THREE.Group;    // where it lands when he drops it
  private apollyon: THREE.Group;
  private apWings: THREE.Group[] = [];
  private apJaw: THREE.Group | null = null;
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
  private bladeRay: THREE.Group;
  private bladeRayCore: THREE.Mesh;
  private bladeRayHalo: THREE.Mesh;
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

    // A layered, tapered blade beam: a white-blue cutting edge wrapped in a
    // broader translucent aura, with a curved wake left by Christian's swing.
    const rayGroup = new THREE.Group();
    const haloGeometry = new THREE.TorusGeometry(1.45, 0.34, 4, 20, Math.PI * 1.18);
    this.bladeRayHalo = new THREE.Mesh(
      haloGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x4f9fff, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    const coreGeometry = new THREE.TorusGeometry(1.45, 0.12, 4, 20, Math.PI * 1.18);
    this.bladeRayCore = new THREE.Mesh(
      coreGeometry,
      new THREE.MeshBasicMaterial({
        color: 0xf4fbff, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }),
    );
    this.bladeRayHalo.rotation.z = -Math.PI * 0.59;
    this.bladeRayCore.rotation.z = -Math.PI * 0.59;
    rayGroup.add(this.bladeRayHalo, this.bladeRayCore);
    for (const [y, scale] of [[-0.58, 0.72], [0.58, 0.72]] as const) {
      const wake = new THREE.Mesh(
        new THREE.TorusGeometry(1.45, 0.14, 4, 16, Math.PI * 1.08),
        new THREE.MeshBasicMaterial({
          color: 0x77c7ff, transparent: true, opacity: 0.34,
          depthWrite: false, blending: THREE.AdditiveBlending,
        }),
      );
      wake.rotation.z = -Math.PI * 0.56;
      wake.position.set(0, y * 0.25, -0.55 - Math.abs(y) * 0.35);
      wake.scale.setScalar(scale);
      rayGroup.add(wake);
    }
    rayGroup.visible = false;
    rayGroup.renderOrder = 5;
    this.bladeRay = rayGroup;

    // ---------- APOLLYON ----------
    const a = new THREE.Group();
    const CHARCOAL = 0x29252e;
    const SCALE_DARK = 0x3d2732;
    const SCALE_MID = 0x67404a;
    const OXBLOOD = 0x6f2028;
    const MEMBRANE = 0xb84c42;
    const COLD_SCALE = 0x455765;
    const EMBER = 0xff6038;
    const BONE = 0xd9c5a6;

    // Low, muscular bear-lion legs: broad shoulders, heavy paws and bright claws.
    for (const [fx, fz, front] of [
      [-1.02, 0.82, true], [1.02, 0.82, true],
      [-0.92, -0.82, false], [0.92, -0.82, false],
    ] as const) {
      a.add(block(front ? 0.82 : 0.72, front ? 1.42 : 1.18, 0.78,
        front ? SCALE_DARK : CHARCOAL, fx, front ? 0.9 : 0.72, fz));
      a.add(block(1.02, 0.34, 1.04, 0x241d24, fx, 0.18, fz + 0.14));
      for (const clawX of [-0.27, 0, 0.27]) {
        a.add(block(0.12, 0.12, 0.3, BONE, fx + clawX, 0.13, fz + 0.7));
      }
    }

    // Predatory chest and ancient overlapping dragon scales.
    a.add(block(2.75, 1.45, 2.25, CHARCOAL, 0, 1.85, 0));
    a.add(block(3.05, 0.72, 2.0, SCALE_DARK, 0, 2.65, 0));
    for (let row = 0; row < 3; row++) {
      for (const sx of [-0.78, 0, 0.78]) {
        const scale = block(0.68, 0.42, 0.2, row % 2 ? SCALE_MID : OXBLOOD,
          sx + (row % 2 ? 0.18 : 0), 1.45 + row * 0.48, 1.15);
        scale.rotation.z = Math.PI / 4;
        a.add(scale);
      }
    }
    // Ember-lit belly plates.
    for (let i = 0; i < 4; i++) {
      const plate = block(1.25 - i * 0.08, 0.3, 0.18, i % 2 ? 0xd74531 : EMBER,
        0, 1.25 + i * 0.38, 1.27);
      const pm = plate.material as THREE.MeshLambertMaterial;
      pm.emissive = new THREE.Color(0x8f160c);
      pm.emissiveIntensity = 0.45;
      a.add(plate);
    }

    // A tall segmented dragon neck gives him a majestic, watchful profile.
    for (let i = 0; i < 4; i++) {
      a.add(block(1.55 - i * 0.1, 0.72, 1.35 - i * 0.08,
        i % 2 ? SCALE_DARK : SCALE_MID, 0, 3.3 + i * 0.58, 0.2 + i * 0.12));
      const spine = block(0.42, 0.58, 0.32, OXBLOOD, 0, 3.55 + i * 0.58, -0.58);
      spine.rotation.z = Math.PI / 4;
      a.add(spine);
    }

    // Long horned dragon head with a hinged, lion-like toothy jaw.
    const head = new THREE.Group();
    head.add(block(1.65, 1.08, 1.65, SCALE_DARK, 0, 0, 0));
    head.add(block(1.48, 0.7, 1.35, SCALE_MID, 0, -0.18, 1.16));
    // A tapered crocodilian dragon muzzle: wide at the skull, narrow and low
    // at the tip, with angular brow plates rather than a mammal's nose.
    head.add(block(1.4, 0.46, 0.85, SCALE_MID, 0, -0.12, 1.55));
    head.add(block(1.22, 0.38, 0.82, CHARCOAL, 0, -0.18, 2.25));
    head.add(block(0.98, 0.3, 0.72, SCALE_DARK, 0, -0.24, 2.92));
    head.add(block(0.42, 0.12, 0.5, OXBLOOD, -0.42, 0.08, 1.78));
    head.add(block(0.42, 0.12, 0.5, OXBLOOD, 0.42, 0.08, 1.78));
    // Narrow nostril slits sit flush in the upper scales.
    head.add(block(0.2, 0.055, 0.3, 0x120e13, -0.3, -0.07, 3.18));
    head.add(block(0.2, 0.055, 0.3, 0x120e13, 0.3, -0.07, 3.18));
    // The dark mouth channel visually separates the two long jaws.
    head.add(block(1.06, 0.1, 1.75, 0x160e12, 0, -0.47, 2.38));
    const jaw = new THREE.Group();
    jaw.add(block(1.18, 0.28, 1.82, OXBLOOD, 0, 0, 2.34));
    jaw.add(block(0.88, 0.12, 1.48, 0x9f3840, 0, 0.17, 2.4));
    jaw.position.y = -0.74;
    head.add(jaw);
    this.apJaw = jaw;
    // Fangs line both sides of the jaw, as on a dragon rather than across a
    // flat smiling muzzle. Lower teeth travel with the animated jaw.
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const toothZ = 1.72 + i * 0.48;
        head.add(block(0.14, 0.3 - i * 0.025, 0.14, BONE,
          side * (0.57 - i * 0.035), -0.48, toothZ));
        jaw.add(block(0.13, 0.26 - i * 0.02, 0.13, BONE,
          side * (0.49 - i * 0.025), 0.22, toothZ + 0.2));
      }
    }
    for (const ex of [-0.52, 0.52]) {
      head.add(block(0.3, 0.3, 0.15, 0x100d12, ex, 0.22, 0.78));
      const eyeGlow = block(0.14, 0.14, 0.08, EMBER, ex, 0.22, 0.87);
      (eyeGlow.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xff2418);
      (eyeGlow.material as THREE.MeshLambertMaterial).emissiveIntensity = 1.4;
      head.add(eyeGlow);
      for (let h = 0; h < 3; h++) {
        const horn = block(0.25 - h * 0.035, 0.55, 0.28, h === 2 ? BONE : OXBLOOD,
          ex + ex * h * 0.25, 0.68 + h * 0.38, -0.3 - h * 0.16);
        horn.rotation.z = -Math.sign(ex) * 0.28;
        head.add(horn);
      }
    }
    head.position.set(0, 5.55, 0.65);
    a.add(head);

    // Wide articulated voxel wings: dark finger bones frame ember membranes.
    for (const side of [-1, 1]) {
      const wing = new THREE.Group();
      wing.add(block(3.1, 0.28, 0.32, CHARCOAL, side * 1.52, 0.8, 0));
      wing.add(block(2.35, 0.25, 0.3, CHARCOAL, side * 3.55, 1.22, 0));
      wing.add(block(1.8, 0.22, 0.28, CHARCOAL, side * 4.78, 0.55, 0));
      wing.add(block(2.5, 1.18, 0.16, MEMBRANE, side * 2.5, 0.15, 0.02));
      wing.add(block(2.1, 1.4, 0.16, 0x8e3438, side * 4.1, 0.18, 0.02));
      for (let i = 0; i < 3; i++) {
        const finger = block(0.22, 1.65 - i * 0.25, 0.25, CHARCOAL,
          side * (2.65 + i * 1.15), -0.42 - i * 0.1, 0);
        finger.rotation.z = side * (0.15 + i * 0.08);
        wing.add(finger);
      }
      wing.position.set(side * 0.65, 3.35, -0.55);
      wing.rotation.z = side * 0.18;
      a.add(wing);
      this.apWings.push(wing);
    }

    // Cold fish-dragon tail, tapering into a sharp forked caudal fin.
    for (let i = 0; i < 4; i++) {
      const tail = block(1.05 - i * 0.18, 0.72 - i * 0.08, 1.45,
        i % 2 ? COLD_SCALE : 0x34434d, 0, 1.18 + i * 0.14, -1.75 - i * 1.15);
      tail.rotation.x = i * 0.08;
      a.add(tail);
      a.add(block(0.22, 0.55, 0.42, 0x71818a, 0, 1.65 + i * 0.14, -1.9 - i * 1.15));
    }
    const tailFinTop = block(0.22, 1.35, 1.25, COLD_SCALE, 0, 1.95, -5.7);
    tailFinTop.rotation.x = -0.48;
    a.add(tailFinTop);
    const tailFinBottom = block(0.22, 1.15, 1.1, 0x34434d, 0, 0.65, -5.65);
    tailFinBottom.rotation.x = 0.48;
    a.add(tailFinBottom);
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
    // The high west plateau continues well beyond the opening camera view, so
    // Christian begins on a real peak instead of beside an empty backdrop.
    const rim = block(50, HILL_H, 32, 0x74855f, HILL_X0 - 25, HILL_H / 2, 0);
    rim.receiveShadow = true;
    s.add(rim);
    s.add(block(48, 0.45, 30, 0x829367, HILL_X0 - 25, HILL_H + 0.22, 0));
    for (const [x, z, w] of [
      [-68, -10, 3.2], [-60, 9, 2.4], [-51, -8, 2.8], [-42, 10, 3.4], [-35, -10, 2.2],
    ] as const) {
      s.add(block(w, 0.8, w * 0.8, 0x62675b, x, HILL_H + 0.4, z));
      s.add(block(w * 0.55, 0.45, w * 0.5, 0x74786a, x + 0.7, HILL_H + 0.9, z - 0.4));
    }

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
    this.rayActive = false;
    this.rayDamages = false;
    this.flourishT = -1;
    this.flourishLaunched = false;
    this.bladeRay.visible = false;
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
    this.bladeRay.position.copy(this.rayFrom);
    const dx = this.rayTo.x - this.rayFrom.x;
    const dz = this.rayTo.z - this.rayFrom.z;
    this.bladeRay.rotation.set(0, Math.atan2(dx, dz), 0);
    const haloMat = this.bladeRayHalo.material as THREE.MeshBasicMaterial;
    const coreMat = this.bladeRayCore.material as THREE.MeshBasicMaterial;
    haloMat.color.set(this.spiritSword ? 0x3296ff : 0xb9d9f5);
    coreMat.color.set(this.spiritSword ? 0xf4fbff : 0xffffff);
    haloMat.opacity = this.spiritSword ? 0.72 : 0.38;
    coreMat.opacity = this.spiritSword ? 1 : 0.7;
    this.bladeRay.visible = true;
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
      const u = THREE.MathUtils.clamp(this.flourishT / 0.58, 0, 1);
      this.christian.armR.rotation.x = -2.25 * Math.sin(u * Math.PI);
      if (!this.flourishLaunched && u >= 0.42) {
        this.flourishLaunched = true;
        this.launchBladeRay(false);
      }
      if (u >= 1) {
        this.christian.armR.rotation.x = 0;
        this.flourishT = -1;
      }
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
          if (this.apJaw) this.apJaw.position.y = -0.74 - Math.sin(u * Math.PI) * 0.22;
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
      const flare = Math.sin(u * Math.PI);
      const haloMat = this.bladeRayHalo.material as THREE.MeshBasicMaterial;
      const coreMat = this.bladeRayCore.material as THREE.MeshBasicMaterial;
      haloMat.opacity = (this.spiritSword ? 0.72 : 0.4) * (0.3 + flare * 0.7);
      coreMat.opacity = (this.spiritSword ? 1 : 0.72) * (0.45 + flare * 0.55);
      // The wave widens through the middle of its flight like a released slash.
      this.bladeRay.scale.set(1 + flare * 0.7, 1 + flare * 0.28, 1 + u * 0.75);
      this.bladeRay.rotation.z = (u - 0.5) * 0.32;
      if (u >= 1) {
        this.rayActive = false;
        this.bladeRay.visible = false;
        this.bladeRay.scale.set(1, 1, 1);
        this.bladeRay.rotation.z = 0;
        if (this.rayDamages) this.playerHit();
        this.rayDamages = false;
      }
    }

    // ---------- Apollyon presence ----------
    if (this.apollyon.visible) {
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
