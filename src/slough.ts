import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { setupSunShadow } from './light';
import { DialogueLine } from './npcs';
import { addHighwayPaving } from './road';
import { dressExterior, hideLegacyGround } from './world/dress';
import { band } from './world/terrain';
import { createTree, createBush, createSign, scatterFlowers } from './world/props';
import { voxelMesh, Voxel, rng as seeded, vary, foliageMaterial } from './world/voxels';
import { marshWaterMaterial } from './world/water';

// Chapter II — The Slough of Despond.
// Christian (and Pliable, if he came) fall into the mire. Pliable scrambles
// out on the side nearest home and deserts him. Christian, weighed down by
// his burden, must struggle across on the half-hidden Steps, gets stuck at
// the far bank, and is pulled out by Help — as in the book.

interface SloughCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving the marsh on a revisit
  splashSound: () => void;
}

type Phase = 'walk' | 'fallingIn' | 'crossing' | 'struggling' | 'stuck' | 'rescue' | 'epilogue' | 'freeroam' | 'done';

const LIGHT_X = 40; // the shining way out, past the east bank

const BOG_CX = 3.5; // bog ellipse centre/size — a wide, hungry mire
const BOG_RX = 12.5;
const BOG_RZ = 10;

export class SloughScene {
  scene = new THREE.Scene();
  phase: Phase = 'walk';
  private cb: SloughCallbacks;
  private christian: BearParts;
  private pliable: BearParts | null = null;
  private pliableStage: 'follow' | 'aghast' | 'clamber' | 'farewell' | 'flee' = 'follow';
  private revisit = false;
  private help: BearParts;
  private steps: Array<[number, number]> = [
    [-6.5, 1.0], [-3.4, -0.8], [-0.2, 1.1], [3.0, -0.9],
    [6.2, 0.9], [9.4, -1.0], [12.6, 0.6],
  ];
  private sink = 0;
  private stuckT = 0; // time spent thrashing at the far bank before Help comes
  private struggle = 0; // extra sinking that builds while standing still in the mire
  private wisps: THREE.Mesh[] = [];
  private bubbles: Array<{ mesh: THREE.Mesh; phase: number }> = [];
  private splashes: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private splashTimer = 0;
  private rescueT = 0;
  private footprints: THREE.Mesh[] = [];
  private footprintTimer = 0;
  private helpTalkCount = 0;
  private built = false;
  private lightBeam: THREE.Group | null = null;

  constructor(cb: SloughCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true,
    });
    this.help = makeBear({
      species: 'bear', fur: 0x8f9a8a,
      outfit: 'robe', outfitColor: 0xc7ecc2, scale: 1.2,
    });
  }

  private inBog(x: number, z: number): boolean {
    const dx = (x - BOG_CX) / BOG_RX;
    const dz = z / BOG_RZ;
    return dx * dx + dz * dz < 1;
  }

  private nearStep(x: number, z: number): boolean {
    for (const [sx, sz] of this.steps) {
      if (Math.hypot(x - sx, z - sz) < 1.35) return true;
    }
    return false;
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    // gloomier, but still pastel
    s.background = new THREE.Color(0xb9c9d4);
    s.fog = new THREE.Fog(0xb9c9d4, 30, 80);

    s.add(new THREE.HemisphereLight(0xd7e4ec, 0xa8b8a0, 0.85));
    const sun = new THREE.DirectionalLight(0xf2ead2, 1.1);
    sun.position.set(25, 40, 20);
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -45;
    sun.shadow.camera.right = 45;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -40;
    s.add(sun);

    // ---------- the marsh land: flat where the pilgrims walk, soft hills beyond
    hideLegacyGround(s);
    const MARSH_GRASS = [0x9fbc90, 0x97b488, 0xa8c49a, 0x90ad84];
    const bogBlocked = (x: number, z: number): boolean => {
      const dx = (x - BOG_CX) / (BOG_RX + 1.2);
      const dz = z / (BOG_RZ + 1.2);
      return dx * dx + dz * dz < 1;
    };
    const onHighway = (x: number, z: number): boolean =>
      Math.abs(z) < 2.3 && ((x > -31 && x < -13) || (x > 17 && x < 44));
    const east = (x: number) => THREE.MathUtils.smoothstep(x, 14, 26); // marsh → meadow
    dressExterior(s, {
      seed: 22,
      butterflies: 10,
      bounds: { minX: -70, maxX: 80, minZ: -60, maxZ: 60 },
      flat: (x, z) => band(Math.max(0, Math.abs(z) - 17), 0, 7) * band(Math.max(0, -30 - x, x - 46), 0, 7),
      hills: 3.4,
      blocked: (x, z) => bogBlocked(x, z) || onHighway(x, z) || this.nearStep(x, z),
      palette: {
        grass: MARSH_GRASS,
        highGrass: 0xb3c9a2,
        leaves: [0x86ab7a, 0x7ea272, 0x94b886],
        pine: [0x5f8f73, 0x6b9a7d, 0x587f69],
        flowers: [0xe8e4f4, 0xfff4c4, 0xd9e8ff, 0xf6dbe4],
      },
      grass: 2600,
      flowers: 260,
      trees: 55,
      shrubs: 40,
      treeZone: (x, z) => Math.abs(z) > 19 && Math.abs(z) < 42,
    });
    // brighter, flower-strewn meadow near the shining light
    s.add(scatterFlowers({
      minX: 18, maxX: 46, minZ: -15, maxZ: 15,
      allow: (x, z) => !onHighway(x, z) && Math.hypot(x - LIGHT_X, z) > 3 && east(x) > 0.5,
    }, 320, 25));

    // King's Highway entering from the west and continuing beyond the east
    // bank. A low foundation prevents grass showing through the tiled paving.
    for (const [px, pw] of [[-22, 16], [30.5, 25]] as const) {
      const path = block(pw, 0.12, 3.6, 0xd9c9a8, px, 0.06, 0);
      path.castShadow = false;
      s.add(path);
    }
    addHighwayPaving(s, -30, -14, { width: 3.4, height: 0.1, yAt: () => 0.12 });
    addHighwayPaving(s, 18, 43, { width: 3.4, height: 0.1, yAt: () => 0.12 });

    // ---------- the bog: layered organic mud, wet and glossy toward the middle
    const bogShape = (scale: number, seed: number): THREE.Shape => {
      const r = seeded(seed);
      const shape = new THREE.Shape();
      const n = 30;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const wob = 1 + Math.sin(a * 3 + seed) * 0.06 + (r() - 0.5) * 0.08;
        const x = BOG_CX + Math.cos(a) * BOG_RX * scale * wob;
        const y = Math.sin(a) * BOG_RZ * scale * wob;
        if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
      }
      shape.closePath();
      return shape;
    };
    const mudLayers: Array<[number, number, number, number]> = [
      // scale, colour, y, roughness
      [1.08, 0x9a8466, 0.03, 0.95],
      [0.96, 0x8a7355, 0.06, 0.7],
      [0.78, 0x7c674c, 0.09, 0.45],
      [0.55, 0x6f5a42, 0.12, 0.3],
    ];
    mudLayers.forEach(([scale, color, y, rough], i) => {
      const mud = new THREE.Mesh(
        new THREE.ShapeGeometry(bogShape(scale, 5 + i * 3), 2),
        new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0.02 }),
      );
      mud.rotation.x = -Math.PI / 2;
      mud.position.y = y;
      mud.receiveShadow = true;
      s.add(mud);
    });
    // murky, rippling puddles pooled in the deepest mud
    for (const [px, pz, pr] of [[-2, -3.5, 2.1], [8, 3.8, 2.4], [2.5, 5.5, 1.4], [11.5, -3.8, 1.6]] as const) {
      const pool = new THREE.Mesh(new THREE.CircleGeometry(pr, 12), marshWaterMaterial);
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(px, 0.135, pz);
      pool.receiveShadow = true;
      s.add(pool);
    }

    // mud bubbles that pop
    const bubbleGeo = new THREE.IcosahedronGeometry(0.14, 0);
    const bubbleMat = new THREE.MeshStandardMaterial({ color: 0xb09a78, roughness: 0.3, flatShading: true });
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(bubbleGeo, bubbleMat);
      m.position.set(BOG_CX - 9 + Math.random() * 18, 0.28, -6 + Math.random() * 12);
      m.castShadow = false;
      s.add(m);
      this.bubbles.push({ mesh: m, phase: Math.random() * 6.28 });
    }

    // ---------- the Steps: pale, solid stones through the midst ----------
    const stepVox: Voxel[] = [];
    const sr = seeded(77);
    for (const [sx, sz] of this.steps) {
      stepVox.push({ w: 1.7, h: 0.12, d: 1.7, x: sx, y: 0.06, z: sz, color: 0xbfb8ad, ry: sr() * 0.4 });
      stepVox.push({ w: 1.45, h: 0.24, d: 1.4, x: sx, y: 0.2, z: sz, color: vary(0xdcd6cc, sr, 0.03), ry: sr() * 0.5 });
      stepVox.push({ w: 0.5, h: 0.06, d: 0.35, x: sx + 0.35, y: 0.34, z: sz - 0.3, color: 0x9cc98a });
    }
    s.add(voxelMesh(stepVox));

    // ---------- reed clumps around the rim (clustered, never lone poles) ----------
    const reedVox: Voxel[] = [];
    const rr = seeded(31);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 + rr() * 0.25;
      const cx = BOG_CX + Math.cos(a) * (BOG_RX + 0.6 + rr() * 1.2);
      const cz = Math.sin(a) * (BOG_RZ + 0.5 + rr() * 1.0);
      if (onHighway(cx, cz)) continue;
      const stems = 5 + Math.floor(rr() * 4);
      for (let k = 0; k < stems; k++) {
        const x = cx + (rr() - 0.5) * 0.9;
        const z = cz + (rr() - 0.5) * 0.9;
        const h = 0.7 + rr() * 0.9;
        const lean = (rr() - 0.5) * 0.25;
        reedVox.push({ w: 0.06, h, d: 0.06, x, y: h / 2, z, rz: lean, color: vary(0x86ab6c, rr, 0.06) });
        if (k % 3 === 0) {
          reedVox.push({ w: 0.1, h: 0.26, d: 0.1, x: x - Math.sin(lean) * h * 0.5, y: h * 0.96, z, rz: lean, color: 0x7a5a42 });
        }
      }
      // broad leaves at the base of each clump
      reedVox.push({ w: 0.8, h: 0.2, d: 0.6, x: cx, y: 0.1, z: cz, ry: rr(), color: vary(0x8fb07a, rr, 0.05) });
    }
    s.add(voxelMesh(reedVox, foliageMaterial));

    // ---------- silvery dead trees brooding over the mire ----------
    for (const [tx, tz, ry] of [[-12, -10, 0.4], [16, 9, 1.2], [-8, 11, 2.2], [20, -9, 0.9], [-16, 13, 2.8], [13, -12, 0.2]] as const) {
      const bark = 0xa39a92;
      const dead = voxelMesh([
        { w: 0.5, h: 0.3, d: 0.5, x: 0, y: 0.15, z: 0, color: 0x8f867e },
        { w: 0.42, h: 2.4, d: 0.42, x: 0, y: 1.3, z: 0, color: bark },
        { w: 1.5, h: 0.24, d: 0.26, x: 0.55, y: 2.2, z: 0, color: bark, rz: 0.25 },
        { w: 0.26, h: 1.0, d: 0.26, x: 1.15, y: 2.75, z: 0, color: bark, rz: -0.15 },
        { w: 1.0, h: 0.22, d: 0.22, x: -0.55, y: 1.65, z: 0.1, color: 0x958c84, rz: -0.35 },
        { w: 0.2, h: 0.6, d: 0.2, x: -0.95, y: 1.95, z: 0.1, color: 0x958c84 },
        { w: 0.46, h: 0.12, d: 0.3, x: 0.05, y: 1.0, z: 0.22, color: 0x9cc98a },
      ]);
      dead.position.set(tx, 0, tz);
      dead.rotation.y = ry;
      s.add(dead);
    }

    // drifting marsh mist
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1, 1).scale(2.2 + Math.random() * 2, 0.45, 1.3 + Math.random()),
        new THREE.MeshStandardMaterial({ color: 0xf0f4f4, transparent: true, opacity: 0.28, depthWrite: false, flatShading: true }),
      );
      m.position.set(-20 + Math.random() * 45, 0.9 + Math.random() * 0.8, -12 + Math.random() * 24);
      m.castShadow = false;
      s.add(m);
      this.wisps.push(m);
    }

    // splash particle pool (muddy brown)
    for (let i = 0; i < 14; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x8a7355, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), m);
      mesh.visible = false;
      s.add(mesh);
      this.splashes.push({ mesh, m, life: 1, vx: 0, vz: 0 });
    }
    for (let i = 0; i < 22; i++) {
      const footprint = block(0.28, 0.025, 0.42, 0x6f5a42);
      footprint.visible = false;
      footprint.castShadow = false;
      s.add(footprint);
      this.footprints.push(footprint);
    }

    // a warning sign by the west path
    const sign = createSign({ seed: 12 });
    sign.position.set(-11, 0, 4);
    sign.rotation.y = -0.5;
    s.add(sign);

    // Help waits unseen beyond the east bank
    this.help.root.position.set(24, 0, 0);
    this.help.root.visible = false;
    // walking staff
    this.help.armR.add(block(0.14, 2.2, 0.14, PALETTE.woodDark, 0.1, -0.6, 0.2));
    s.add(this.help.root);

    // the marsh gives way to green, sunlit meadow near the light
    ([[26, -5, 'blossom'], [30, 5, 'leafy'], [34, -6, 'fruit'], [37, 6, 'blossom'], [24, 7, 'leafy'], [41, -5, 'leafy']] as const)
      .forEach(([tx, tz, kind], i) => {
        const tree = createTree({ seed: 220 + i * 7, kind });
        tree.position.set(tx, 0, tz);
        s.add(tree);
      });
    for (const [bx, bz] of [[22, -4.2], [28, 3.6], [32, -3.8], [36, 4.2]] as const) {
      const bush = createBush({ seed: Math.round(bx * 9), flowers: true });
      bush.position.set(bx, 0, bz);
      s.add(bush);
    }

    // the shining light at the far end — the way onward, as at the Wicket Gate
    const lightBeam = new THREE.Group();
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xffd94a, transparent: true, opacity: 0.8, fog: false });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(2.6, 40, 2.6), beamMat);
    beam.position.y = 20;
    lightBeam.add(beam);
    const beamInner = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 44, 1.3),
      new THREE.MeshBasicMaterial({ color: 0xfffbe0, transparent: true, opacity: 0.95, fog: false }),
    );
    beamInner.position.y = 22;
    lightBeam.add(beamInner);
    const starMat = new THREE.MeshBasicMaterial({ color: 0xffe87a, fog: false });
    const star = new THREE.Mesh(new THREE.BoxGeometry(3.4, 3.4, 3.4), starMat);
    star.position.y = 42;
    star.rotation.set(Math.PI / 4, 0, Math.PI / 4);
    lightBeam.add(star);
    const glow = new THREE.PointLight(0xffe87a, 3.5, 40);
    glow.position.y = 4;
    lightBeam.add(glow);
    lightBeam.position.set(LIGHT_X, 0, 0);
    lightBeam.visible = false;
    s.add(lightBeam);
    this.lightBeam = lightBeam;
  }

  // ------------------------------------------------------------ runtime

  enter(withPliable: boolean, revisit = false): { christian: BearParts; pliable: BearParts | null } {
    this.build();
    this.revisit = revisit;
    this.phase = 'walk';
    this.sink = 0;
    this.struggle = 0;
    this.footprintTimer = 0;
    for (const footprint of this.footprints) footprint.visible = false;
    if (this.pliable) {
      this.scene.remove(this.pliable.root);
      this.pliable = null;
    }
    this.pliableStage = 'follow';
    this.christian.root.position.set(-24, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.scene.add(this.christian.root);
    if (revisit) {
      // Help still keeps watch on the east bank; the way out still shines
      this.help.root.visible = true;
      this.help.root.position.set(18.4, 0, 2.2);
      this.help.root.rotation.y = -Math.PI / 2;
      this.help.armR.rotation.x = 0;
      if (this.lightBeam) this.lightBeam.visible = true;
      this.cb.setObjective('🌫 The old mire — cross east toward the light, or turn back west to the road');
      return { christian: this.christian, pliable: null };
    }
    if (this.lightBeam) this.lightBeam.visible = false;
    if (withPliable) {
      this.pliable = makeBear({ companion: true, species: 'rabbit', outfit: 'shirt', outfitColor: 0xffd6a5, scale: 0.95 });
      // keep him north of Christian so the dialogue panel never hides him
      this.pliable.root.position.set(-26, 0, -1.4);
      this.scene.add(this.pliable.root);
      this.cb.playScript([
        { speaker: 'Pliable', text: 'So tell me MORE about this Celestial City! Do the crowns come in rabbit sizes? Is there clover?' },
        { speaker: 'Christian', text: 'Ha! The book says there is no night there, and no tears… Careful, friend — the ground past those reeds looks soft.' },
        { speaker: 'Pliable', text: 'Soft, schmoft! With GLORY ahead, who has time to look down? Hop hop — race you to the far side!' },
      ]);
    }
    this.cb.setObjective('🌫 Cross the marsh to the east');
    return { christian: this.christian, pliable: this.pliable };
  }

  private spawnSplash(x: number, z: number): void {
    const d = this.splashes.find((p) => p.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 1.2;
    d.vz = (Math.random() - 0.5) * 1.2;
    d.mesh.position.set(x, 0.2, z);
    d.mesh.visible = true;
  }

  // Help can be spoken to again once the rescue is over
  nearHelp(): boolean {
    if (!this.help.root.visible) return false;
    if (!(this.revisit || this.phase === 'freeroam' || this.phase === 'done')) return false;
    return this.christian.root.position.distanceTo(this.help.root.position) < 3.2;
  }

  talkToHelp(): void {
    if (!this.nearHelp()) return;
    const p = this.christian.root.position;
    const hp = this.help.root.position;
    // the two turn to face each other, like every conversation in the village
    this.help.root.rotation.y = Math.atan2(p.x - hp.x, p.z - hp.z);
    this.christian.root.rotation.y = Math.atan2(hp.x - p.x, hp.z - p.z);
    const pool: DialogueLine[][] = [
      [
        { speaker: 'Christian', text: 'Help — thank you again. I do not think I could ever have climbed out alone.' },
        { speaker: 'Help', text: 'No pilgrim ever does, friend. That is rather the point of me.' },
        { speaker: 'Help', text: 'Now go on toward the light — and if the road ever sinks beneath you again, remember: look for the Steps before you look for the bottom.' },
      ],
      [
        { speaker: 'Christian', text: 'Do you truly stay out here, by this dreadful bog, all year round?' },
        { speaker: 'Help', text: 'Someone must. Every day another traveller comes running from the City with fear at his heels, and fear never watches its feet.' },
        { speaker: 'Christian', text: 'Then I am glad it is you who waits for them. Farewell, Help!' },
      ],
    ];
    this.cb.playScript(pool[this.helpTalkCount % pool.length]);
    this.helpTalkCount++;
  }

  // returns speed multiplier for player movement this frame
  moveFactor(): number {
    const p = this.christian.root.position;
    if (
      this.phase === 'fallingIn' || this.phase === 'struggling' || this.phase === 'stuck' ||
      this.phase === 'rescue' || this.phase === 'epilogue'
    ) return 0;
    if (!this.inBog(p.x, p.z)) return 1;
    return this.nearStep(p.x, p.z) ? 0.72 : 0.34;
  }

  // constrain movement + fire story triggers; called after player moves
  afterMove(moving: boolean): void {
    const p = this.christian.root.position;
    // world bounds — the east bank is unclimbable until Help pulls him out
    const freed = this.revisit ||
      this.phase === 'rescue' || this.phase === 'epilogue' ||
      this.phase === 'freeroam' || this.phase === 'done';
    p.x = THREE.MathUtils.clamp(p.x, -28, freed ? LIGHT_X + 4 : 14.6);
    p.z = THREE.MathUtils.clamp(p.z, -16, 16);

    // on a revisit, either the west bank or the light leads back to the world map
    if (this.revisit) {
      if (p.x > LIGHT_X - 2 || p.x < -27) this.cb.onExit();
      if (moving && this.inBog(p.x, p.z)) {
        this.splashTimer -= 0.016;
        if (this.splashTimer <= 0) {
          this.splashTimer = 0.18;
          this.spawnSplash(p.x, p.z);
        }
      }
      return;
    }

    // freeroam: walk out through the meadow toward the shining light
    if (this.phase === 'freeroam' && p.x > LIGHT_X - 3) {
      this.phase = 'done';
      this.cb.onComplete();
    }

    if (this.phase === 'walk' && this.inBog(p.x + 1.2, p.z)) {
      this.phase = 'fallingIn';
      this.cb.splashSound();
      for (let i = 0; i < 6; i++) this.spawnSplash(p.x + Math.random(), p.z + (Math.random() - 0.5));
      if (this.pliable) {
        // he was already racing just ahead — the ground gives way under
        // both of them right where he stands, no snapping into place
        const pp = this.pliable.root.position;
        pp.y = -0.35;
        this.pliable.root.rotation.y = Math.PI / 2;
        for (let i = 0; i < 4; i++) {
          this.spawnSplash(pp.x + Math.random(), pp.z + (Math.random() - 0.5));
        }
      }
      const lines: DialogueLine[] = this.pliable
        ? [
            { speaker: 'Christian', text: 'Wh—whoa! The ground — it is swallowing us! Hold fast, Pliable!' },
            { speaker: 'Pliable', text: 'GLUB—! Mud! In my EARS! In my WHISKERS! Christian, I am DISSOLVING!' },
            { speaker: 'Pliable', text: 'Is THIS the glorious happiness you spoke of?! Golden streets, you said! CROWNS, you said!' },
            { speaker: 'Christian', text: 'Courage, friend! If we press on together, the far bank cannot be—' },
            { speaker: 'Pliable', text: 'FORWARD?! Into MORE of it?! Not for every crown in every city! Out of my way!' },
          ]
        : [
            { speaker: 'Christian', text: 'Wh—whoa! The ground is swallowing me! This must be the deep mud the villagers warned me about…' },
          ];
      this.cb.playScript(lines, () => {
        if (this.pliable) {
          // stay frozen while Pliable flounders back to the west bank
          this.pliableStage = 'clamber';
          this.cb.setObjective('😨 Pliable flounders back toward the bank nearest home…');
        } else {
          this.phase = 'crossing';
          this.cb.setObjective('🪨 Keep moving or the mire pulls you under — rest on the solid Steps!');
        }
      });
    }

    if (this.phase === 'crossing' && p.x > 14.2) {
      // he thrashes at the foot of the bank for a while before anyone comes
      this.phase = 'struggling';
      this.stuckT = 0;
      this.cb.splashSound();
      this.cb.setObjective('😰 The bank is right there — but the mire holds him fast…');
    }

    if (moving && this.phase === 'crossing' && this.inBog(p.x, p.z)) {
      this.splashTimer -= 0.016;
      if (this.splashTimer <= 0) {
        this.splashTimer = 0.18;
        this.spawnSplash(p.x, p.z);
      }
    }
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    const p = this.christian.root.position;

    // sinking: knee-deep off the Steps, ankle-deep on them
    let sinkTarget = 0;
    const inMire = this.inBog(p.x, p.z);
    const onStep = this.nearStep(p.x, p.z);
    if (inMire && this.phase !== 'done') {
      sinkTarget = onStep ? 0.16 : 0.5;
      if (this.phase === 'stuck') sinkTarget = 0.62;
      // while thrashing, he bobs deeper and shallower with the effort
      if (this.phase === 'struggling') sinkTarget = 0.62 + Math.sin(t * 5) * 0.08;
    }
    // the mire pulls idle pilgrims under — keep moving, or rest on the Steps
    if (this.phase === 'crossing' && !this.revisit && inMire && !onStep) {
      this.struggle = moving
        ? Math.max(0, this.struggle - dt * 0.6)
        : Math.min(0.85, this.struggle + dt * 0.32);
    } else {
      this.struggle = Math.max(0, this.struggle - dt * 1.6);
    }
    sinkTarget += this.struggle;
    if (this.phase === 'rescue' || this.phase === 'epilogue') sinkTarget = this.rescueT > 1 ? 0 : 0.62;
    this.sink += (sinkTarget - this.sink) * Math.min(dt * 3, 1);
    this.christian.root.position.y = -this.sink;

    // pulled under! dragged back to the western bank, sputtering
    if (this.phase === 'crossing' && !this.revisit && this.sink > 1.05) {
      this.struggle = 0;
      this.sink = 0.2;
      this.christian.root.position.set(-8.5, 0, THREE.MathUtils.clamp(p.z, -6, 6) * 0.4);
      this.christian.root.rotation.y = Math.PI / 2;
      this.cb.splashSound();
      this.cb.playScript([
        { speaker: '', text: '*GLUB—!* The mud reaches his ears. Coughing and splashing, he scrambles back to the western bank.' },
        { speaker: 'Christian', text: 'It pulls hardest when I stand still… Keep moving, and catch your breath on the solid Steps!' },
      ]);
    }
    animateBear(this.christian, t, moving && this.phase !== 'stuck' && this.phase !== 'rescue' && this.phase !== 'epilogue');

    // ---------- thrashing at the far bank: arms flailing, mud flying ----------
    if (this.phase === 'struggling') {
      this.stuckT += dt;
      const th = Math.min(1, this.stuckT / 0.5);
      this.christian.armL.rotation.x = Math.sin(t * 11) * 1.3 * th;
      this.christian.armR.rotation.x = -Math.sin(t * 11 + 1.4) * 1.3 * th;
      this.christian.root.rotation.z = Math.sin(t * 7) * 0.1 * th;
      this.christian.root.rotation.y = Math.PI / 2 + Math.sin(t * 3.2) * 0.45 * th;
      if (Math.random() < dt * 10) {
        this.spawnSplash(p.x + (Math.random() - 0.5) * 1.2, p.z + (Math.random() - 0.5) * 1.2);
      }
      if (this.stuckT > 3.2) {
        this.phase = 'stuck';
        this.christian.root.rotation.z = 0;
        this.christian.root.rotation.y = Math.PI / 2;
        this.christian.armL.rotation.x = 0;
        this.christian.armR.rotation.x = 0;
        this.cb.playScript([
          { speaker: 'Christian', text: '*pant* … The bank is right there — but I cannot climb it. This burden on my back drags me down and down…' },
          { speaker: 'Christian', text: 'Is this how the journey ends? Stuck in deep mud when I can see the way out…?' },
        ], () => {
          this.phase = 'rescue';
          this.rescueT = 0;
          this.help.root.visible = true;
          this.cb.setObjective('🤝 Someone is coming…');
        });
      }
    }

    // Pliable: follows until the fall, clambers out on the side nearest home,
    // gives his farewell, then bolts
    if (this.pliable) {
      const pp = this.pliable.root.position;
      if (this.pliableStage === 'clamber') {
        // flounders west through the mud, half-sunk and splashing
        pp.x -= dt * 3.0;
        pp.y = this.inBog(pp.x, pp.z) ? -0.42 + Math.sin(t * 11) * 0.06 : 0;
        this.pliable.root.rotation.y = -Math.PI / 2;
        animateBear(this.pliable, t * 1.7, true);
        if (this.inBog(pp.x, pp.z) && Math.random() < dt * 7) this.spawnSplash(pp.x, pp.z);
        if (pp.x < -9.5) {
          this.pliableStage = 'farewell';
          pp.y = 0;
          this.cb.playScript([
            { speaker: 'Pliable', text: '*scrambles out, dripping* Blegh! Pfah! Mud in my ears, mud in my whiskers, mud in places a gentle-rabbit shan\'t MENTION!' },
            { speaker: 'Pliable', text: 'If this bog is the FIRST step of your glorious journey, Christian, you may keep all the rest of it!' },
            { speaker: 'Christian', text: 'Pliable, wait! The crowns and the city are still real! One muddy place does not change the truth!' },
            { speaker: 'Pliable', text: 'Then you may have my share of the crowns AND my share of the mud. I am going HOME. Farewell — and good luck to your poor back!' },
            { speaker: 'Christian', text: '…And there he goes, hopping home. *sigh* Then I will cross alone. There must be solid ground somewhere under this mud…' },
          ], () => {
            this.pliableStage = 'flee';
            this.phase = 'crossing';
            this.cb.setObjective('🪨 Keep moving or the mire pulls you under — rest on the solid Steps!');
          });
        }
      } else if (this.pliableStage === 'farewell') {
        // hops in place on the west bank, shaking the mud off
        pp.y = Math.abs(Math.sin(t * 6)) * 0.16;
        this.pliable.root.rotation.y = Math.PI / 2; // faces back toward Christian
        animateBear(this.pliable, t * 2, false);
      } else if (this.pliableStage === 'flee') {
        pp.x -= dt * 9;
        pp.y = 0;
        this.pliable.root.rotation.y = -Math.PI / 2;
        animateBear(this.pliable, t * 1.5, true);
        this.footprintTimer -= dt;
        if (this.footprintTimer <= 0) {
          this.footprintTimer = 0.13;
          const print = this.footprints.find((mesh) => !mesh.visible);
          if (print) {
            print.visible = true;
            print.position.set(pp.x + 0.35, 0.04, pp.z + (this.footprints.indexOf(print) % 2 ? 0.2 : -0.2));
            print.rotation.y = Math.PI / 2;
          }
        }
        if (pp.x < -30) {
          this.scene.remove(this.pliable.root);
          this.pliable = null;
        }
      } else if (this.phase === 'walk') {
        // he races just ahead and to the north of Christian (not trailing
        // behind), so that when the ground gives way he's already right
        // there — no need to snap him into place
        const tx = p.x + 1.9;
        const tz = p.z - 1.2;
        const dx = tx - pp.x;
        const dz = tz - pp.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.15) {
          const step = Math.min(dt * 6.4, d);
          pp.x += (dx / d) * step;
          pp.z += (dz / d) * step;
          this.pliable.root.rotation.y = Math.atan2(dx, dz);
          animateBear(this.pliable, t + 0.4, true);
        } else {
          animateBear(this.pliable, t + 0.4, false);
        }
      } else {
        // stands aghast in the mud during the dialogue
        this.pliable.root.position.y = -0.35;
        animateBear(this.pliable, t + 0.4, false);
      }
    }

    // Help's rescue sequence
    if (this.phase === 'rescue') {
      this.rescueT += dt;
      const hp = this.help.root.position;
      if (this.rescueT <= 1.6) {
        // Help walks to the bank edge
        hp.x = THREE.MathUtils.lerp(24, 17.6, Math.min(this.rescueT / 1.6, 1));
        this.help.root.rotation.y = -Math.PI / 2;
        animateBear(this.help, t, true);
      } else if (this.rescueT < 1.7) {
        animateBear(this.help, t, false);
        this.help.armR.rotation.x = -1.2; // reaches out
      } else {
        this.phase = 'epilogue';
        this.cb.playScript([
          { speaker: '???', text: 'Hello there! Friend in the mud, how did you get stuck?' },
          { speaker: 'Christian', text: 'I fell in as I fled the City of Destruction — and this burden sinks me. I cannot reach the bank!' },
          { speaker: 'Help', text: 'I am called Help. But tell me — why did you not look for the Steps? Good solid stones lie through the very midst of this slough.' },
          { speaker: 'Christian', text: 'Fear chased me in so fast, I never thought to look down…' },
          { speaker: 'Help', text: 'So it goes with every pilgrim. Here — give me your paw!' },
          { speaker: 'Help', text: '*HEAVE!*' },
        ], () => {
          // Hauled out onto the bank one clear walking step from Help, so the
          // two do not begin their conversation shoulder-to-shoulder.
          this.rescueT = 2;
          this.christian.root.position.set(15.5, 0, -0.5);
          this.christian.root.rotation.y = Math.PI / 2; // faces Help
          this.help.armR.rotation.x = 0;
          this.sink = 0;
          this.cb.splashSound();
          this.cb.playScript([
            { speaker: 'Christian', text: '*gasp* … Solid ground. Thank you, Help. I had nearly given up hope.' },
            { speaker: 'Help', text: 'This is the Slough of Despond, friend. When a pilgrim first wakes to how lost he is, all his fears and doubts and discouragements come running — and they settle here, in this low place.' },
            { speaker: 'Help', text: 'The King\'s workers have tried to repair this place for sixteen hundred years, but it swallows every load of good soil. It cannot be fixed — only crossed by using the Steps.' },
            { speaker: 'Christian', text: 'And Pliable… he struggled out on the side nearest home.' },
            { speaker: 'Help', text: 'Yes. Many travellers turn back at the first patch of mud. But you made it through, burden and all. Keep going, Christian — the true Gate is not far now.' },
          ], () => {
            this.phase = 'freeroam';
            if (this.lightBeam) this.lightBeam.visible = true;
            this.cb.setObjective('✨ Follow the light out of the Slough');
          });
        });
      }
    }

    // the shining way out, pulsing gently
    if (this.lightBeam && this.lightBeam.visible) {
      const s = 1 + Math.sin(t * 2.4) * 0.12;
      this.lightBeam.scale.set(s, 1, s);
    }

    // ambient
    for (let i = 0; i < this.wisps.length; i++) {
      const m = this.wisps[i];
      m.position.x += dt * 0.3;
      if (m.position.x > 30) m.position.x = -25;
      (m.material as THREE.MeshStandardMaterial).opacity = 0.25 + 0.12 * Math.sin(t * 0.6 + i);
    }
    for (const b of this.bubbles) {
      const c = (t * 0.5 + b.phase) % 2;
      b.mesh.visible = c < 1;
      b.mesh.position.y = 0.2 + c * 0.25;
      b.mesh.scale.setScalar(0.5 + c * 0.9);
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
  }
}
