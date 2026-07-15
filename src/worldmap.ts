import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';

// The overworld: a miniature diorama of floating rounded islands over a
// pastel sea. The plank road runs City of Destruction → Slough of Despond →
// a CROSSROAD islet. From there the long road continues east toward the
// misty island (future chapters) — but until Chapter III is settled, that
// way is barred and a smooth, pleasant byway curves south to the village of
// Morality, where Mount Sinai broods. Party members trail behind Christian.

export type MapSpot = 'city' | 'road' | 'slough' | 'fork' | 'morality' | 'beyond';

const CITY = new THREE.Vector3(-14.5, 0, 0);
const SLOUGH = new THREE.Vector3(-3.5, 0, 0);
const FORK = new THREE.Vector3(3.5, 0, 0);
const MORALITY = new THREE.Vector3(11, 0, 7);
const BEYOND = new THREE.Vector3(17.5, 0, -1);

// island centres + how close the road must be to count as "on land"
const ISLANDS: Array<{ c: THREE.Vector3; r: number }> = [
  { c: CITY, r: 4.2 },
  { c: SLOUGH, r: 4.2 },
  { c: FORK, r: 1.9 },
  { c: MORALITY, r: 4.2 },
  { c: BEYOND, r: 4.0 },
];

export class WorldMap {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  progress = 0.02;   // t along the main road
  branchP = 0;       // t along the Morality byway
  road: 'main' | 'branch' = 'main';
  sloughDone = false;
  moralityDone = false;
  justDiverted = false; // set when the barred way shunts Christian onto the byway
  // t-parameters along the main curve nearest each stop, resolved in ctor
  cityT = 0.02;
  sloughT = 0.35;
  forkT = 0.6;
  beyondT = 0.97;
  private mainCurve: THREE.CatmullRomCurve3;
  private branchCurve: THREE.CatmullRomCurve3;
  private branchSpeed = 1; // t-speed scale so ground speed matches the main road
  private christian: BearParts;
  private followers: BearParts[] = [];
  private clouds: THREE.Group[] = [];
  private islands: THREE.Group[] = [];
  private sparkles: THREE.Mesh[] = [];
  private mist: THREE.Mesh[] = [];
  private sinaiGlow: THREE.Mesh | null = null;
  private moving = false;
  private facing = 1;
  private built = false;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 200);
    this.resize(aspect);

    this.mainCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(CITY.x + 2, 0.62, 0.7),
      new THREE.Vector3(-10, 0.62, -1.2),
      new THREE.Vector3(-6.5, 0.62, 1.0),
      new THREE.Vector3(SLOUGH.x, 0.62, 0),
      new THREE.Vector3(0, 0.62, -1.0),
      new THREE.Vector3(FORK.x, 0.62, 0),
      // the long road: meanders north before bending back — visibly longer
      new THREE.Vector3(7, 0.62, -2.6),
      new THREE.Vector3(11, 0.62, -4.2),
      new THREE.Vector3(14.5, 0.62, -3.2),
      new THREE.Vector3(BEYOND.x - 1.5, 0.62, -1.3),
    ]);
    this.branchCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(FORK.x + 0.6, 0.62, 0.8),
      new THREE.Vector3(5.8, 0.62, 3.0),
      new THREE.Vector3(8, 0.62, 5.0),
      new THREE.Vector3(MORALITY.x - 2.0, 0.62, MORALITY.z - 0.6),
    ]);
    this.cityT = this.tForPoint(CITY);
    this.sloughT = this.tForPoint(SLOUGH);
    this.forkT = this.tForPoint(FORK);
    this.beyondT = this.tForPoint(BEYOND);
    this.branchSpeed = this.mainCurve.getLength() / Math.max(this.branchCurve.getLength(), 1);

    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true, scale: 0.5,
    });
  }

  // ------------------------------------------------------------ helpers

  private tForPoint(target: THREE.Vector3): number {
    let bestT = 0;
    let bestD = Infinity;
    for (let i = 0; i <= 300; i++) {
      const tt = i / 300;
      const p = this.mainCurve.getPointAt(tt);
      const d = Math.hypot(p.x - target.x, p.z - target.z);
      if (d < bestD) { bestD = d; bestT = tt; }
    }
    return bestT;
  }

  private label(text: string, x: number, z: number, y: number, color = '#5b4a3f'): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const c = canvas.getContext('2d')!;
    c.font = 'bold 52px "Trebuchet MS", sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    // soft rounded plate behind the text
    const w = c.measureText(text).width + 70;
    c.fillStyle = 'rgba(255, 248, 239, 0.92)';
    c.strokeStyle = 'rgba(244, 184, 196, 1)';
    c.lineWidth = 8;
    c.beginPath();
    c.roundRect((512 - w) / 2, 18, w, 92, 46);
    c.fill();
    c.stroke();
    c.fillStyle = color;
    c.fillText(text, 256, 66);
    const tex = new THREE.CanvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sprite.scale.set(6.4, 1.6, 1);
    sprite.position.set(x, y, z);
    this.scene.add(sprite);
  }

  // a rounded island: stacked low-poly discs tapering down to a point
  private island(x: number, z: number, r: number, top: number): THREE.Group {
    const g = new THREE.Group();
    const seg = 14;
    const disc = (radius: number, h: number, color: number, y: number) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, h, seg), mat(color));
      m.position.y = y;
      m.castShadow = true;
      m.receiveShadow = true;
      g.add(m);
    };
    disc(r + 0.3, 0.5, top, 0.3);                       // grassy lip
    disc(r, 0.9, 0xd8c49a, -0.25);                      // sandy cliff band
    disc(Math.max(r - 0.8, 0.8), 1.0, 0xb9977a, -1.1);
    disc(Math.max(r - 1.7, 0.6), 1.0, 0xa5825f, -2.0);
    disc(Math.max(r - 2.6, 0.4), 0.8, 0x93714f, -2.8);
    // hanging grass tufts over the lip
    const tufts = Math.max(5, Math.round(r * 1.6));
    for (let i = 0; i < tufts; i++) {
      const a = (i / tufts) * Math.PI * 2 + 0.4;
      g.add(block(0.45, 0.3, 0.45, PALETTE.grassDark,
        Math.cos(a) * (r + 0.2), 0.14, Math.sin(a) * (r + 0.2)));
    }
    g.position.set(x, 0, z);
    this.scene.add(g);
    this.islands.push(g);
    return g;
  }

  private miniTree(px: number, pz: number, blossom = false): THREE.Group {
    const t = new THREE.Group();
    t.add(block(0.16, 0.5, 0.16, PALETTE.trunk, 0, 0.25, 0));
    t.add(block(0.6, 0.45, 0.6, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 0.7, 0));
    t.add(block(0.35, 0.3, 0.35, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 1.0, 0));
    t.position.set(px, 0.55, pz);
    return t;
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xbfe0f5);
    s.fog = new THREE.Fog(0xbfe0f5, 34, 95);

    s.add(new THREE.HemisphereLight(0xe8f4ff, 0xbcd9ea, 1.0));
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.4);
    sun.position.set(-8, 14, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -24;
    sun.shadow.camera.right = 24;
    sun.shadow.camera.top = 16;
    sun.shadow.camera.bottom = -16;
    s.add(sun);

    // a chunky voxel sun in the sky
    const sunBlock = block(1.6, 1.6, 0.3, 0xffe87a, 14, 10.5, -14);
    sunBlock.castShadow = false;
    s.add(sunBlock);
    const sunHalo = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 2.4, 0.2),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.5 }),
    );
    sunHalo.position.set(14, 10.5, -14.2);
    s.add(sunHalo);

    // pastel sea with animated sparkles
    const sea = new THREE.Mesh(new THREE.BoxGeometry(240, 1, 160), mat(PALETTE.water));
    sea.position.y = -1.6;
    sea.receiveShadow = true;
    s.add(sea);
    for (let i = 0; i < 40; i++) {
      const w = new THREE.Mesh(
        new THREE.BoxGeometry(0.5 + Math.random() * 0.9, 0.06, 0.16),
        new THREE.MeshBasicMaterial({ color: 0xe4f3fc, transparent: true, opacity: 0.8 }),
      );
      w.position.set((Math.random() - 0.5) * 60, -1.02, (Math.random() - 0.5) * 34);
      w.castShadow = false;
      s.add(w);
      this.sparkles.push(w);
    }

    // ---------- City of Destruction island ----------
    const cod = this.island(CITY.x, CITY.z, 4.6, PALETTE.grass);
    const town = new THREE.Group();
    const miniHouse = (hx: number, hz: number, roof: number) => {
      town.add(block(0.85, 0.65, 0.75, PALETTE.wallCream, hx, 0.9, hz));
      town.add(block(1.0, 0.35, 0.9, roof, hx, 1.4, hz));
      town.add(block(0.18, 0.5, 0.06, PALETTE.woodDark, hx, 0.8, hz + 0.4));
    };
    miniHouse(-1.0, -0.5, PALETTE.roofPink);
    miniHouse(0.25, -1.15, PALETTE.roofMint);
    miniHouse(0.65, 0.45, PALETTE.roofLilac);
    miniHouse(-0.45, 0.95, PALETTE.roofPeach);
    // mini white wall ring with gate opening on the east
    const ring = [
      [-2.0, 0, 0.28, 3.7], [2.0, -1.1, 0.28, 1.6], [2.0, 1.1, 0.28, 1.6],
      [0, -1.9, 4.2, 0.28], [0, 1.9, 4.2, 0.28],
    ] as const;
    for (const [wx, wz, ww, wd] of ring) {
      town.add(block(ww, 0.6, wd, 0xf7f3ea, wx, 0.85, wz));
      town.add(block(ww + 0.08, 0.12, wd + 0.08, 0xdfd8c8, wx, 1.16, wz));
    }
    town.position.set(-0.9, 0, -0.3);
    cod.add(town);
    cod.add(this.miniTree(-3.0, 2.1, true));
    cod.add(this.miniTree(3.0, -2.2));
    cod.add(this.miniTree(2.6, 2.3, true));
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2;
      const rr = 1.5 + Math.random() * 2.4;
      const f = block(0.14, 0.14, 0.14, [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        Math.cos(a) * rr, 0.62, Math.sin(a) * rr);
      f.castShadow = false;
      cod.add(f);
    }
    this.label('City of Destruction', CITY.x, CITY.z, 4.4);

    // ---------- Slough of Despond island ----------
    const slough = this.island(SLOUGH.x, SLOUGH.z, 4.4, 0x9ec78f);
    const bog = new THREE.Group();
    bog.add(block(4.0, 0.18, 3.0, 0x8a7355, 0, 0.62, 0));
    bog.add(block(3.0, 0.2, 2.1, 0x6f5a42, 0, 0.68, 0.1));
    bog.add(block(0.55, 0.14, 0.55, 0x8a7355, -1.8, 0.66, 1.3));
    bog.add(block(0.45, 0.12, 0.45, 0x6f5a42, 2.0, 0.66, -1.2));
    bog.add(block(0.16, 0.16, 0.16, 0xa79272, 0.4, 0.84, 0.3));
    bog.add(block(0.12, 0.12, 0.12, 0xa79272, -0.6, 0.82, -0.4));
    for (const [rx, rz] of [[-2.1, -1.0], [1.8, 1.2], [2.3, 0.2], [-1.5, 1.5], [0.2, -1.5]] as const) {
      bog.add(block(0.1, 0.85, 0.1, 0x7ba05f, rx, 1.0, rz));
      bog.add(block(0.16, 0.28, 0.16, 0xc9a865, rx, 1.48, rz));
    }
    bog.position.set(0.2, 0, 0.1);
    slough.add(bog);
    const dead = new THREE.Group();
    dead.add(block(0.18, 1.0, 0.18, 0x9a8f86, 0, 0.5, 0));
    dead.add(block(0.7, 0.14, 0.14, 0x9a8f86, 0.2, 0.95, 0));
    dead.add(block(0.14, 0.5, 0.14, 0x9a8f86, 0.55, 1.2, 0));
    dead.position.set(-2.9, 0.55, -2.0);
    slough.add(dead);
    this.label('Slough of Despond', SLOUGH.x, SLOUGH.z, 4.4);

    // ---------- the crossroad islet ----------
    const fork = this.island(FORK.x, FORK.z, 1.9, PALETTE.grass);
    // a two-armed signpost: one arm east (the true way), one south (Morality)
    const post = new THREE.Group();
    post.add(block(0.14, 1.7, 0.14, PALETTE.woodDark, 0, 0.85, 0));
    const armE = block(1.2, 0.32, 0.1, PALETTE.wood, 0.5, 1.45, 0);
    post.add(armE);
    const armS = block(0.1, 0.32, 1.2, PALETTE.wood, 0, 1.05, 0.5);
    post.add(armS);
    post.position.set(-0.3, 0.55, -0.5);
    fork.add(post);
    fork.add(this.miniTree(0.9, 0.8, true));

    // ---------- Morality island (the pleasant trap) ----------
    const mor = this.island(MORALITY.x, MORALITY.z, 4.4, 0xaed9a0);
    // tidy, respectable houses in a neat little row
    const tidyHouse = (hx: number, hz: number, roof: number) => {
      mor.add(block(0.9, 0.7, 0.8, 0xfaf6ec, hx, 0.95, hz));
      mor.add(block(1.05, 0.35, 0.95, roof, hx, 1.5, hz));
      mor.add(block(0.16, 0.45, 0.06, PALETTE.woodDark, hx, 0.82, hz + 0.42));
    };
    tidyHouse(-1.6, 1.2, 0x9db8d8);
    tidyHouse(-0.2, 1.5, 0xb8c8b0);
    tidyHouse(1.2, 1.2, 0x9db8d8);
    // trimmed hedges
    for (const [hx, hz] of [[-2.4, 0.2], [-0.9, 0.35], [0.6, 0.35], [2.0, 0.2]] as const) {
      mor.add(block(0.9, 0.3, 0.3, 0x86ad7d, hx, 0.72, hz));
    }
    // Mount Sinai looming behind the village — gray, with a fiery seam
    const sinai = new THREE.Group();
    sinai.add(block(2.6, 1.4, 1.8, 0x8d8d96, 0, 0.7, 0));
    sinai.add(block(1.9, 1.2, 1.4, 0x7d7d88, 0.1, 1.7, -0.1));
    sinai.add(block(1.2, 1.0, 1.0, 0x8d8d96, -0.1, 2.6, 0));
    sinai.add(block(0.7, 0.7, 0.7, 0x6f6f7a, 0.05, 3.3, 0));
    const seam = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.9, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xff9a4d, transparent: true, opacity: 0.9 }),
    );
    seam.position.set(0.2, 1.6, 0.66);
    sinai.add(seam);
    this.sinaiGlow = seam;
    sinai.position.set(0.3, 0.55, -1.8);
    mor.add(sinai);
    this.label('Morality', MORALITY.x, MORALITY.z, 4.6);

    // ---------- the misty island beyond ----------
    const beyond = this.island(BEYOND.x, BEYOND.z, 4.2, 0x9ec7a8);
    beyond.add(this.miniTree(-2.4, 1.6));
    beyond.add(this.miniTree(2.5, -1.4, true));
    // a tiny glowing gate silhouette, barely visible in the mist
    beyond.add(block(0.2, 1.3, 0.2, PALETTE.woodDark, 1.0, 1.2, 0.2));
    beyond.add(block(0.2, 1.3, 0.2, PALETTE.woodDark, 2.0, 1.2, 0.2));
    beyond.add(block(1.3, 0.2, 0.2, PALETTE.woodDark, 1.5, 1.9, 0.2));
    const gateGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 1.1, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.7 }),
    );
    gateGlow.position.set(1.5, 1.15, 0.15);
    beyond.add(gateGlow);
    // mist blocks shrouding it
    for (let i = 0; i < 7; i++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(2.2 + Math.random() * 1.6, 1.0 + Math.random() * 0.8, 1.6),
        new THREE.MeshLambertMaterial({ color: 0xf2f6f8, transparent: true, opacity: 0.55 }),
      );
      m.position.set(BEYOND.x - 3 + Math.random() * 6, 1.0 + Math.random() * 1.4, BEYOND.z - 2 + Math.random() * 4);
      m.castShadow = false;
      s.add(m);
      this.mist.push(m);
    }
    this.label('Wicket Gate', BEYOND.x, BEYOND.z, 4.4);

    // ---------- both roads: stones on land, plank bridges over water ----------
    this.buildRoad(this.mainCurve, 72);
    this.buildRoad(this.branchCurve, 26);

    // ---------- drifting clouds ----------
    for (let i = 0; i < 6; i++) {
      const c = new THREE.Group();
      c.add(block(1.8, 0.55, 1.0, 0xffffff, 0, 0, 0));
      c.add(block(1.1, 0.5, 0.8, 0xffffff, 1.0, 0.25, 0.1));
      c.add(block(0.9, 0.45, 0.7, 0xffffff, -0.9, 0.18, -0.1));
      c.add(block(0.6, 0.35, 0.5, 0xffffff, 0.2, 0.42, 0.15));
      c.position.set((Math.random() - 0.5) * 36, 5.5 + Math.random() * 3, -6 - Math.random() * 5);
      c.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = false; });
      this.clouds.push(c);
      s.add(c);
    }

    // travellers
    this.scene.add(this.christian.root);
    this.placeOn(this.mainCurve, this.christian.root, this.progress);
  }

  private nearLand(x: number, z: number): boolean {
    for (const isl of ISLANDS) {
      if (Math.hypot(x - isl.c.x, z - isl.c.z) < isl.r) return true;
    }
    return false;
  }

  private buildRoad(curve: THREE.CatmullRomCurve3, segs: number): void {
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t);
      if (this.nearLand(p.x, p.z)) {
        const stone = block(0.5, 0.1, 0.6, PALETTE.path, p.x, p.y - 0.02, p.z);
        stone.rotation.y = Math.atan2(tan.x, tan.z) + Math.PI / 2;
        stone.castShadow = false;
        this.scene.add(stone);
      } else {
        const plank = block(0.5, 0.14, 1.1, PALETTE.wood, p.x, 0.5, p.z);
        plank.rotation.y = Math.atan2(tan.x, tan.z) + Math.PI / 2;
        plank.castShadow = false;
        this.scene.add(plank);
        // railings + posts, offset perpendicular to the road
        if (i % 4 === 0) {
          const nx = -tan.z;
          const nz = tan.x;
          for (const side of [-1, 1]) {
            this.scene.add(block(0.14, 2.0, 0.14, PALETTE.woodDark,
              p.x + nx * 0.62 * side, -0.4, p.z + nz * 0.62 * side));
            this.scene.add(block(0.1, 0.5, 0.1, PALETTE.woodDark,
              p.x + nx * 0.58 * side, 0.85, p.z + nz * 0.58 * side));
          }
        }
      }
    }
  }

  // ------------------------------------------------------------ runtime

  start(party: Array<'pliable'>): void {
    this.build();
    for (const f of this.followers) this.scene.remove(f.root);
    this.followers = party.map((id) => {
      const parts = id === 'pliable'
        ? makeBear({ species: 'rabbit', outfit: 'shirt', outfitColor: 0xffd6a5, scale: 0.44 })
        : makeBear({ scale: 0.44 });
      this.scene.add(parts.root);
      return parts;
    });
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    // pull back on narrow screens so all the islands stay in frame
    const z = THREE.MathUtils.clamp(40 / aspect - 1, 20, 46);
    this.camera.position.set(1.2, z * 0.78, z + 2.2);
    this.camera.lookAt(1.2, 0.4, 1.4);
    this.camera.updateProjectionMatrix();
  }

  spot(): MapSpot {
    if (this.road === 'branch') {
      return this.branchP > 0.86 ? 'morality' : 'road';
    }
    if (this.progress < this.cityT + 0.05) return 'city';
    if (Math.abs(this.progress - this.sloughT) < 0.05) return 'slough';
    if (Math.abs(this.progress - this.forkT) < 0.04) return 'fork';
    if (this.progress > this.beyondT - 0.04) return 'beyond';
    return 'road';
  }

  private placeOn(curve: THREE.CatmullRomCurve3, obj: THREE.Object3D, t: number): void {
    const p = curve.getPointAt(THREE.MathUtils.clamp(t, 0, 1));
    obj.position.set(p.x, this.nearLand(p.x, p.z) ? p.y : 0.57, p.z);
  }

  update(dt: number, t: number, axisX: number, axisZ: number): void {
    if (!this.built) return;
    const step = dt * 0.075;
    this.moving = false;

    if (this.road === 'main') {
      if (Math.abs(axisX) > 0.15) {
        this.moving = true;
        // the long road east stays barred until Morality is settled
        const maxP = this.moralityDone
          ? this.beyondT + 0.02
          : (this.sloughDone ? this.forkT : this.sloughT + 0.05);
        this.progress = THREE.MathUtils.clamp(this.progress + axisX * step, 0.02, maxP);
        this.facing = axisX > 0 ? 1 : -1;
        // pressing east against the barred way → shunted onto the smooth byway
        if (
          !this.moralityDone && this.sloughDone && axisX > 0 &&
          this.progress >= this.forkT - 1e-5
        ) {
          this.road = 'branch';
          this.branchP = 0.02;
          this.justDiverted = true;
        }
      }
      // after the chapter, the byway can still be taken on purpose (press south)
      if (
        this.moralityDone && axisZ > 0.35 &&
        Math.abs(this.progress - this.forkT) < 0.05
      ) {
        this.road = 'branch';
        this.branchP = 0.03;
        this.moving = true;
        this.facing = 1;
      }
    } else {
      if (Math.abs(axisX) > 0.15) {
        this.moving = true;
        this.branchP = THREE.MathUtils.clamp(
          this.branchP + axisX * step * this.branchSpeed, 0, 0.96,
        );
        this.facing = axisX > 0 ? 1 : -1;
        if (this.branchP <= 0 && axisX < 0) {
          // back at the crossroad
          this.road = 'main';
          this.progress = this.forkT;
        }
      }
    }

    const curve = this.road === 'main' ? this.mainCurve : this.branchCurve;
    const param = this.road === 'main' ? this.progress : this.branchP;
    this.placeOn(curve, this.christian.root, param);
    const tan = curve.getTangentAt(THREE.MathUtils.clamp(param, 0, 1));
    this.christian.root.rotation.y = Math.atan2(tan.x * this.facing, tan.z * this.facing);
    animateBear(this.christian, t, this.moving);

    this.followers.forEach((f, i) => {
      const ft = param - 0.045 * (i + 1) * this.facing;
      this.placeOn(curve, f.root, ft);
      const ftan = curve.getTangentAt(THREE.MathUtils.clamp(ft, 0, 1));
      f.root.rotation.y = Math.atan2(ftan.x * this.facing, ftan.z * this.facing);
      animateBear(f, t + 0.4 * (i + 1), this.moving);
    });

    // ambient life
    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      c.position.x += dt * (0.2 + i * 0.06);
      if (c.position.x > 24) c.position.x = -24;
    }
    for (let i = 0; i < this.islands.length; i++) {
      this.islands[i].position.y = Math.sin(t * 0.6 + i * 2.1) * 0.04;
    }
    for (let i = 0; i < this.sparkles.length; i++) {
      const sp = this.sparkles[i];
      (sp.material as THREE.MeshBasicMaterial).opacity =
        0.35 + 0.45 * Math.abs(Math.sin(t * 1.3 + i * 1.7));
    }
    for (let i = 0; i < this.mist.length; i++) {
      const m = this.mist[i];
      m.position.x += Math.sin(t * 0.4 + i) * dt * 0.15;
      (m.material as THREE.MeshLambertMaterial).opacity =
        0.45 + 0.15 * Math.sin(t * 0.5 + i * 1.3);
    }
    if (this.sinaiGlow) {
      (this.sinaiGlow.material as THREE.MeshBasicMaterial).opacity =
        0.5 + 0.45 * Math.abs(Math.sin(t * 2.2));
    }
  }
}
