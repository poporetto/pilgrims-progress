import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';

// The overworld: a miniature diorama of floating rounded islands over a
// pastel sea. The plank road runs City of Destruction → Slough of Despond →
// a CROSSROAD islet. From there the long road continues east toward the
// misty island (future chapters) — but until Chapter III is settled, that
// way is barred and a smooth, pleasant byway curves south to the village of
// Morality, where Mount Sinai broods. Party members trail behind Christian.

export type MapSpot =
  | 'city' | 'road' | 'slough' | 'fork' | 'morality' | 'beyond' | 'cross'
  | 'highway' | 'hill' | 'palace' | 'valley' | 'shadow' | 'vanity' | 'lucre'
  | 'castle' | 'mountain' | 'beulah' | 'celestial';

const CITY = new THREE.Vector3(-14.5, 0, 0);
const SLOUGH = new THREE.Vector3(-3.5, 0, 0);
const FORK = new THREE.Vector3(3.5, 0, 0);
const MORALITY = new THREE.Vector3(11, 0, 7);
const BEYOND = new THREE.Vector3(17.5, 0, -1);
const CROSS = new THREE.Vector3(25.5, 0, 2.5);
const HIGHWAY = new THREE.Vector3(33.5, 0, -1);
const HILL = new THREE.Vector3(41.5, 0, 1.5);
const PALACE = new THREE.Vector3(49.5, 0, -1);
const VALLEY = new THREE.Vector3(57.5, 0, 1.5);
const SHADOW = new THREE.Vector3(65.5, 0, -0.5);
const VANITY = new THREE.Vector3(73.5, 0, 1);
const LUCRE   = new THREE.Vector3(81.5, 0, -0.5);
const CASTLE  = new THREE.Vector3(89.5, 0, 1.0);
const MOUNTAIN = new THREE.Vector3(97.5, 0, -0.5);
const BEULAH = new THREE.Vector3(105.5, 0, 1.0);
const CELESTIAL = new THREE.Vector3(113.5, 0, -0.5);

// island centres + how close the road must be to count as "on land"
const ISLANDS: Array<{ c: THREE.Vector3; r: number }> = [
  { c: CITY, r: 4.2 },
  { c: SLOUGH, r: 4.2 },
  { c: FORK, r: 1.9 },
  { c: MORALITY, r: 4.2 },
  { c: BEYOND, r: 4.0 },
  { c: CROSS, r: 4.0 },
  { c: HIGHWAY, r: 4.0 },
  { c: HILL, r: 4.0 },
  { c: PALACE, r: 4.0 },
  { c: VALLEY, r: 4.0 },
  { c: SHADOW, r: 4.0 },
  { c: VANITY, r: 4.2 },
  { c: LUCRE,   r: 4.0 },
  { c: CASTLE,  r: 4.0 },
  { c: MOUNTAIN, r: 4.2 },
  { c: BEULAH, r: 4.2 },
  { c: CELESTIAL, r: 4.4 },
];

export class WorldMap {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  progress = 0.02;   // t along the main road
  branchP = 0;       // t along the Morality byway
  road: 'main' | 'branch' = 'main';
  sloughDone = false;
  moralityDone = false;
  wicketDone = false;
  crossDone = false;
  highwayDone = false;
  hillDone = false;
  palaceDone = false;
  valleyDone = false;
  shadowDone = false;
  vanityDone = false;
  lucreDone   = false;
  castleDone  = false;
  mountainDone = false;
  beulahDone = false;
  celestialDone = false;
  justDiverted = false; // set when the barred way shunts Christian onto the byway
  // t-parameters along the main curve nearest each stop, resolved in ctor
  cityT = 0.02;
  sloughT = 0.3;
  forkT = 0.52;
  beyondT = 0.64;
  crossT = 0.7;
  highwayT = 0.75;
  hillT = 0.8;
  palaceT = 0.84;
  valleyT = 0.88;
  shadowT = 0.92;
  vanityT = 0.96;
  lucreT  = 0.99;
  castleT = 0.99;
  mountainT = 0.99;
  beulahT = 0.995;
  celestialT = 1.00;
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
  private sunHalos: THREE.Mesh[] = [];
  private crossGlow: THREE.Mesh | null = null;
  private birds: Array<{ g: THREE.Group; wingL: THREE.Mesh; wingR: THREE.Mesh; speed: number; active: boolean }> = [];
  private birdTimer = 4;
  private christianHasBurden = true;
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
      // …and on past the Gate, to the green hill of the Cross
      new THREE.Vector3(20.5, 0.62, 0.4),
      new THREE.Vector3(23, 0.62, 1.6),
      new THREE.Vector3(CROSS.x - 1.0, 0.62, CROSS.z - 0.3),
      // …and down the far side onto the King's Highway
      new THREE.Vector3(28.6, 0.62, 1.6),
      new THREE.Vector3(31, 0.62, 0.1),
      new THREE.Vector3(HIGHWAY.x - 0.6, 0.62, HIGHWAY.z),
      // …and up to the foot of the Hill Difficulty
      new THREE.Vector3(36.8, 0.62, 0),
      new THREE.Vector3(HILL.x - 0.8, 0.62, HILL.z - 0.2),
      // …then the Palace, and down through the two valleys
      new THREE.Vector3(45.4, 0.62, 0.4),
      new THREE.Vector3(PALACE.x - 0.6, 0.62, PALACE.z),
      new THREE.Vector3(53.4, 0.62, 0.2),
      new THREE.Vector3(VALLEY.x - 0.6, 0.62, VALLEY.z - 0.2),
      new THREE.Vector3(61.4, 0.62, 0.6),
      new THREE.Vector3(SHADOW.x - 0.6, 0.62, SHADOW.z),
      // …and into the glittering gates of Vanity Fair
      new THREE.Vector3(69.4, 0.62, 0.2),
      new THREE.Vector3(VANITY.x - 0.6, 0.62, VANITY.z - 0.2),
      // …then out across the Plain of Ease to the Hill Lucre
      new THREE.Vector3(77.4, 0.62, 0.4),
      new THREE.Vector3(LUCRE.x - 0.6, 0.62, LUCRE.z),
      // …and on to the rocky stretch past Doubting Castle
      new THREE.Vector3(85.4, 0.62, 0.2),
      new THREE.Vector3(CASTLE.x - 0.6, 0.62, CASTLE.z),
      // …and up into the bright Delectable Mountains
      new THREE.Vector3(93.4, 0.62, 0.4),
      new THREE.Vector3(MOUNTAIN.x - 0.6, 0.62, MOUNTAIN.z),
      // …and on at last to Beulah Land, in sight of the Celestial City
      new THREE.Vector3(101.4, 0.62, 0.2),
      new THREE.Vector3(BEULAH.x - 0.6, 0.62, BEULAH.z),
      // …and the last golden mile, up to the Celestial City itself
      new THREE.Vector3(109.6, 0.62, 0.2),
      new THREE.Vector3(CELESTIAL.x - 0.6, 0.62, CELESTIAL.z),
    ]);
    this.cityT = this.tForPoint(CITY);
    this.sloughT = this.tForPoint(SLOUGH);
    this.forkT = this.tForPoint(FORK);
    this.beyondT = this.tForPoint(BEYOND);
    this.crossT = this.tForPoint(CROSS);
    this.highwayT = this.tForPoint(HIGHWAY);
    this.hillT = this.tForPoint(HILL);
    this.palaceT = this.tForPoint(PALACE);
    this.valleyT = this.tForPoint(VALLEY);
    this.shadowT = this.tForPoint(SHADOW);
    this.vanityT = this.tForPoint(VANITY);
    this.lucreT  = this.tForPoint(LUCRE);
    this.castleT = this.tForPoint(CASTLE);
    this.mountainT = this.tForPoint(MOUNTAIN);
    this.beulahT = this.tForPoint(BEULAH);
    this.celestialT = this.tForPoint(CELESTIAL);
    // the byway begins exactly where the main road passes the crossroad,
    // so switching roads never makes Christian jump
    const forkPoint = this.mainCurve.getPointAt(this.forkT);
    this.branchCurve = new THREE.CatmullRomCurve3([
      forkPoint.clone(),
      new THREE.Vector3(5.8, 0.62, 3.0),
      new THREE.Vector3(8, 0.62, 5.0),
      new THREE.Vector3(MORALITY.x - 2.0, 0.62, MORALITY.z - 0.6),
    ]);
    this.branchSpeed = this.mainCurve.getLength() / Math.max(this.branchCurve.getLength(), 1);

    this.christian = this.makeMapChristian();
  }

  // Christian on the map: burdened in his old blue shirt until the Cross,
  // then unburdened, in the shining garments the angels gave him
  private makeMapChristian(): BearParts {
    this.christianHasBurden = !this.crossDone;
    return makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: this.crossDone ? PALETTE.robeWhite : 0x8fb8d8,
      sling: true, burden: !this.crossDone, scale: 0.5,
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
    // Wide labels (especially “Delectable Mountains”) need a larger texture;
    // the previous 512px canvas clipped the rounded title plaque at its sides.
    canvas.width = 1024;
    canvas.height = 160;
    const c = canvas.getContext('2d')!;
    c.font = 'bold 54px "Trebuchet MS", sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    // A soft pastel signboard gives each scene title a friendly, map-book feel.
    const w = Math.min(960, c.measureText(text).width + 104);
    const left = (canvas.width - w) / 2;
    const gradient = c.createLinearGradient(0, 22, 0, 138);
    gradient.addColorStop(0, 'rgba(255, 252, 244, 0.97)');
    gradient.addColorStop(1, 'rgba(232, 240, 255, 0.97)');
    c.shadowColor = 'rgba(113, 91, 116, 0.22)';
    c.shadowBlur = 10;
    c.shadowOffsetY = 4;
    c.fillStyle = gradient;
    c.strokeStyle = 'rgba(227, 174, 202, 1)';
    c.lineWidth = 7;
    c.beginPath();
    c.roundRect(left, 22, w, 112, 52);
    c.fill();
    c.stroke();
    c.shadowColor = 'transparent';
    c.fillStyle = color;
    c.fillText(text, canvas.width / 2, 78);
    const tex = new THREE.CanvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sprite.scale.set(12.8, 2.0, 1);
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
    s.background = new THREE.Color(0xd3ecff);
    s.fog = new THREE.Fog(0xd3ecff, 36, 100);

    s.add(new THREE.HemisphereLight(0xf2f9ff, 0xcde4f2, 1.3));
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.7);
    sun.position.set(-8, 14, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -30;
    sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 18;
    sun.shadow.camera.bottom = -18;
    s.add(sun);

    // a proper round, bright sun with soft halos
    const sunCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 24, 18),
      new THREE.MeshBasicMaterial({ color: 0xffe14d }),
    );
    sunCore.position.set(14, 11, -14);
    s.add(sunCore);
    for (const [r, op] of [[1.55, 0.4], [2.1, 0.18]] as const) {
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(r, 24, 18),
        new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: op, depthWrite: false }),
      );
      halo.position.copy(sunCore.position);
      s.add(halo);
      this.sunHalos.push(halo);
    }

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

    // ---------- the hill of the Cross ----------
    const crossIsle = this.island(CROSS.x, CROSS.z, 4.2, PALETTE.grassLight);
    // a soft green hill rising from the island
    crossIsle.add(block(4.6, 0.7, 4.0, PALETTE.grass, 0, 0.85, -0.4));
    crossIsle.add(block(3.2, 0.7, 2.8, 0x9ede97, 0, 1.5, -0.4));
    crossIsle.add(block(2.0, 0.6, 1.8, PALETTE.grassLight, 0, 2.1, -0.4));
    // the Cross on the summit
    crossIsle.add(block(0.22, 1.5, 0.22, PALETTE.woodDark, 0, 3.1, -0.4));
    crossIsle.add(block(0.95, 0.22, 0.22, PALETTE.woodDark, 0, 3.45, -0.4));
    const crossHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.35, depthWrite: false }),
    );
    crossHalo.position.set(0, 3.3, -0.4);
    crossIsle.add(crossHalo);
    this.crossGlow = crossHalo;
    // the open tomb at the hill's foot
    crossIsle.add(block(1.1, 0.8, 0.9, 0xb9b4ac, 1.9, 0.9, 0.9));
    crossIsle.add(block(0.5, 0.5, 0.1, 0x4a4440, 1.9, 0.85, 1.36));
    const tombStone = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.16, 12), mat(0xa8a29a));
    tombStone.rotation.x = Math.PI / 2;
    tombStone.rotation.z = Math.PI / 2;
    tombStone.position.set(2.7, 0.9, 1.3);
    crossIsle.add(tombStone);
    crossIsle.add(this.miniTree(-2.6, 1.8, true));
    this.label('The Cross', CROSS.x, CROSS.z, 5.4);

    // ---------- the King's Highway at evening ----------
    const hwy = this.island(HIGHWAY.x, HIGHWAY.z, 4.0, 0x8fb583);
    // a low stone wall running along the road
    for (let i = 0; i < 4; i++) {
      hwy.add(block(0.9, 0.4, 0.25, 0xb9b0a2, -1.6 + i * 1.1, 0.78, -1.3));
    }
    // three tiny sleepers beside the way
    for (const [sx, sz, c] of [[-0.8, 1.2, 0xdfb56e], [0.2, 1.5, 0x9a8f7a], [1.2, 1.2, 0xe6cfc0]] as const) {
      hwy.add(block(0.55, 0.28, 0.32, c, sx, 0.72, sz));
    }
    // a lamp post glowing against the dusk
    hwy.add(block(0.12, 1.5, 0.12, 0x5e5a55, 2.4, 1.3, -0.4));
    const lamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 12, 10),
      new THREE.MeshBasicMaterial({ color: 0xffe9a0 }),
    );
    lamp.position.set(2.4, 2.1, -0.4);
    hwy.add(lamp);
    hwy.add(this.miniTree(-2.6, -1.6));
    this.label("King's Highway", HIGHWAY.x, HIGHWAY.z, 4.4);

    // ---------- the Hill Difficulty ----------
    const hillIsle = this.island(HILL.x, HILL.z, 4.0, PALETTE.grass);
    // a steep little mountain with a path zig-zagging up it
    hillIsle.add(block(4.4, 1.2, 3.6, 0x9ede97, 0, 1.1, -0.5));
    hillIsle.add(block(3.0, 1.2, 2.6, PALETTE.grass, 0, 2.2, -0.5));
    hillIsle.add(block(1.8, 1.1, 1.6, 0x9ede97, 0, 3.3, -0.5));
    for (let i = 0; i < 4; i++) {
      hillIsle.add(block(0.4, 0.08, 0.5, PALETTE.path, -0.6 + (i % 2) * 1.2, 0.6 + i * 0.9, 1.35 - i * 0.55));
    }
    // the arbor halfway up
    hillIsle.add(block(0.7, 0.3, 0.5, 0x7ba05f, 1.0, 2.1, 0.4));
    hillIsle.add(block(0.08, 0.5, 0.08, PALETTE.woodDark, 0.8, 1.75, 0.5));
    hillIsle.add(block(0.08, 0.5, 0.08, PALETTE.woodDark, 1.25, 1.75, 0.5));
    // the two easy ways skirting the foot
    hillIsle.add(block(0.5, 0.08, 1.6, 0xd9c9a8, -2.4, 0.62, 0.8));
    hillIsle.add(block(0.5, 0.08, 1.6, 0xd9c9a8, 2.4, 0.62, 0.8));
    hillIsle.add(this.miniTree(-2.8, -1.8, true));
    this.label('Hill Difficulty', HILL.x, HILL.z, 5.4);

    // ---------- Palace Beautiful ----------
    const palIsle = this.island(PALACE.x, PALACE.z, 4.0, PALETTE.grass);
    palIsle.add(block(2.6, 1.4, 1.8, 0xfaf8f2, 0, 1.25, -0.6));
    palIsle.add(block(2.9, 0.3, 2.0, 0xe8e2d2, 0, 2.1, -0.6));
    for (const tx of [-1.5, 1.5]) {
      palIsle.add(block(0.7, 2.0, 0.7, 0xfaf8f2, tx, 1.55, -0.6));
      palIsle.add(block(0.6, 0.5, 0.6, PALETTE.roofPink, tx, 2.8, -0.6));
    }
    const palWin = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.5, 0.08),
      new THREE.MeshBasicMaterial({ color: 0xffe9a0 }),
    );
    palWin.position.set(0, 1.4, 0.35);
    palIsle.add(palWin);
    // the two lions before the gate
    palIsle.add(block(0.5, 0.35, 0.3, 0xd9a860, -0.6, 0.72, 1.4));
    palIsle.add(block(0.5, 0.35, 0.3, 0xd9a860, 0.6, 0.72, 1.4));
    this.label('Palace Beautiful', PALACE.x, PALACE.z, 4.6);

    // ---------- Valley of Humiliation ----------
    const valIsle = this.island(VALLEY.x, VALLEY.z, 4.0, 0x8aa87a);
    valIsle.add(block(1.6, 1.6, 2.4, 0x74855f, -1.9, 1.1, -0.4));
    valIsle.add(block(1.6, 1.6, 2.4, 0x74855f, 1.9, 1.1, -0.4));
    valIsle.add(block(2.2, 0.1, 1.4, 0xb8a888, 0, 0.62, 0));
    // a scorch mark and one red eye of the fled monster
    valIsle.add(block(1.0, 0.06, 1.0, 0x4a4440, 0.3, 0.6, 0.9));
    const eye = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.18, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xff4a3d }),
    );
    eye.position.set(-1.9, 2.1, 0.85);
    valIsle.add(eye);
    this.label('Valley of Humiliation', VALLEY.x, VALLEY.z, 4.4);

    // ---------- Valley of the Shadow of Death ----------
    const shIsle = this.island(SHADOW.x, SHADOW.z, 4.0, 0x3a4258);
    shIsle.add(block(2.0, 1.2, 1.6, 0x232838, -1.6, 1.15, -0.8));
    shIsle.add(block(2.0, 1.2, 1.6, 0x232838, 1.6, 1.15, -0.8));
    // the one narrow line of light through the dark
    const lane = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 0.08, 0.5),
      new THREE.MeshBasicMaterial({ color: 0xffeec4 }),
    );
    lane.position.set(0, 0.62, 0.4);
    shIsle.add(lane);
    this.label('Shadow of Death', SHADOW.x, SHADOW.z, 4.4);

    // ---------- Vanity Fair ----------
    const vanIsle = this.island(VANITY.x, VANITY.z, 4.2, 0xa8d99a);
    // a huddle of gaudy painted houses and striped stalls
    const gaudy = [0xe06a7a, 0xf2a83a, 0x7fb8d9, 0xa06ac9, 0x6ac98a];
    for (let i = 0; i < 4; i++) {
      const hx = -1.6 + (i % 2) * 2.0;
      const hz = -1.4 + Math.floor(i / 2) * 1.6;
      vanIsle.add(block(0.95, 0.8, 0.8, 0xfaf3e3, hx, 1.0, hz));
      vanIsle.add(block(1.1, 0.4, 0.95, gaudy[i % gaudy.length], hx, 1.6, hz));
    }
    // a mini stall with a striped canopy
    vanIsle.add(block(0.8, 0.3, 0.4, PALETTE.wood, 1.6, 0.75, 0.6));
    vanIsle.add(block(1.0, 0.08, 0.6, gaudy[0], 1.6, 1.15, 0.6));
    vanIsle.add(block(1.0, 0.08, 0.2, 0xfaf6ec, 1.6, 1.15, 0.85));
    // pennant pole
    vanIsle.add(block(0.08, 1.6, 0.08, PALETTE.woodDark, 0.2, 1.4, 1.6));
    vanIsle.add(block(0.5, 0.28, 0.05, gaudy[3], 0.5, 2.05, 1.6));
    this.label('Vanity Fair', VANITY.x, VANITY.z, 4.6);

    // ---------- the Hill Lucre ----------
    const lucIsle = this.island(LUCRE.x, LUCRE.z, 4.0, 0x9ecf8c);
    // the jagged silver hill with its glowing mine mouth
    lucIsle.add(block(2.6, 1.4, 2.0, 0x9aa4b2, -0.6, 1.2, -0.8));
    lucIsle.add(block(1.6, 1.4, 1.4, 0x8a94a2, 0.4, 2.2, -1.0));
    lucIsle.add(block(0.9, 1.0, 0.9, 0xaab4c2, -0.2, 3.0, -0.9));
    const mineGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.8, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xb8e8c9 }),
    );
    mineGlow.position.set(-0.6, 0.95, 0.25);
    lucIsle.add(mineGlow);
    // the paved way passing safely by, and the little pillar of salt
    lucIsle.add(block(3.4, 0.1, 0.9, 0xd9c9a8, 0.4, 0.62, 1.3));
    lucIsle.add(block(0.3, 0.8, 0.3, 0xf4f0e8, 2.2, 1.0, 0.7));
    lucIsle.add(block(0.24, 0.24, 0.2, 0xf4f0e8, 2.24, 1.5, 0.7));
    lucIsle.add(this.miniTree(-2.6, 1.8, true));
    this.label('Hill Lucre', LUCRE.x, LUCRE.z, 5.0);

    // ---------- Doubting Castle island ----------
    const castleIsle = this.island(CASTLE.x, CASTLE.z, 4.0, 0x9ecf8c);
    // dark stone towers — the castle looming on the island
    const castleC = 0x4a4250;
    castleIsle.add(block(1.4, 3.2, 1.4, castleC,  0.8, 2.2, -0.6));  // main tower
    castleIsle.add(block(1.4, 2.6, 1.4, castleC, -0.8, 2.0, -0.5));  // second tower
    castleIsle.add(block(2.4, 0.6, 1.2, 0x3a3248, 0.0, 3.6, -0.6));  // battlements
    castleIsle.add(block(0.5, 0.5, 0.5, castleC,  0.8, 4.0, -0.6));  // crenellation
    castleIsle.add(block(0.5, 0.5, 0.5, castleC, -0.8, 3.6, -0.5));
    // rocky highway path through
    castleIsle.add(block(4.0, 0.1, 0.8, 0x9e8e76, 0.0, 0.62, 1.2));  // road stripe
    // small warning sign post
    castleIsle.add(block(0.1, 0.7, 0.1, 0x7a5c38, -1.4, 0.97, 1.2));
    castleIsle.add(block(0.8, 0.2, 0.08, 0xfff8ef, -1.4, 1.4, 1.2));
    this.label('Doubting Castle', CASTLE.x, CASTLE.z, 5.2);

    // ---------- Delectable Mountains island ----------
    const mtnIsle = this.island(MOUNTAIN.x, MOUNTAIN.z, 4.2, 0x8fd06a);
    // bright green peaks
    mtnIsle.add(block(1.4, 3.0, 1.4, 0x7bc258, -0.9, 2.0, -0.6));
    mtnIsle.add(block(1.2, 2.4, 1.2, 0x86c862,  0.9, 1.7, -0.4));
    mtnIsle.add(block(1.0, 3.6, 1.0, 0x74b850,  0.1, 2.4, -1.1));
    // snowy/bright caps
    mtnIsle.add(block(0.7, 0.5, 0.7, 0xffffff,  0.1, 4.3, -1.1));
    mtnIsle.add(block(0.6, 0.4, 0.6, 0xfff4d0, -0.9, 3.6, -0.6));
    // a tiny fruit tree and a blue lake
    mtnIsle.add(this.miniTree(1.9, 0.6, false));
    mtnIsle.add(block(1.6, 0.08, 1.0, 0x8fd0ea, -1.6, 0.6, 1.2)); // lake
    // road stripe through
    mtnIsle.add(block(4.0, 0.1, 0.8, 0xeed9b4, 0.0, 0.62, 1.4));
    this.label('Delectable Mountains', MOUNTAIN.x, MOUNTAIN.z, 5.4);

    // ---------- Beulah Land island (the finale, in sight of the City) ----------
    const beuIsle = this.island(BEULAH.x, BEULAH.z, 4.2, 0x9ed67e);
    // a golden river and the shining Celestial City beyond it
    beuIsle.add(block(4.2, 0.08, 1.6, 0x86c6e6, 0.4, 0.6, 0.3));       // river
    beuIsle.add(block(1.6, 0.09, 1.6, 0x2a3f8a, 0.4, 0.62, 0.3));      // deep centre
    const cityC = 0xffe08a;
    for (const [cx, ch, cz] of [[-0.4, 2.4, -1.4], [0.4, 3.0, -1.5], [1.2, 2.0, -1.3]] as const) {
      const tw = block(0.7, ch, 0.7, cityC, cx, 0.6 + ch / 2, cz);
      const m = tw.material as THREE.MeshLambertMaterial;
      m.emissive = new THREE.Color(0xffd76a); m.emissiveIntensity = 0.7;
      beuIsle.add(tw);
    }
    // little blossoms in the meadow
    beuIsle.add(block(0.18, 0.3, 0.18, 0xffb3c6, -1.8, 0.75, 1.2));
    beuIsle.add(block(0.18, 0.3, 0.18, 0xfff0a0, -1.2, 0.75, 1.6));
    this.label('Beulah Land', BEULAH.x, BEULAH.z, 5.4);

    // ---------- the Celestial City island (journey's end) ----------
    const celIsle = this.island(CELESTIAL.x, CELESTIAL.z, 4.4, 0xf0d894);
    // shining golden towers with pearl-white caps, glowing
    const gold = 0xffe08a;
    for (const [cx, ch, cz] of [
      [-1.1, 3.2, -0.9], [0.0, 4.4, -1.2], [1.1, 3.0, -0.8], [0.2, 2.4, 0.4],
    ] as const) {
      const tw = block(0.85, ch, 0.85, gold, cx, 0.6 + ch / 2, cz);
      const m = tw.material as THREE.MeshLambertMaterial;
      m.emissive = new THREE.Color(0xffd76a); m.emissiveIntensity = 0.75;
      celIsle.add(tw);
      const cap = block(0.5, 0.5, 0.5, 0xfffdf4, cx, 0.6 + ch + 0.2, cz);
      (cap.material as THREE.MeshLambertMaterial).emissive = new THREE.Color(0xfff0c0);
      (cap.material as THREE.MeshLambertMaterial).emissiveIntensity = 0.6;
      celIsle.add(cap);
    }
    // the pearl gates at the front
    for (const side of [-1, 1]) {
      celIsle.add(block(0.4, 2.4, 0.4, 0xfdf8f0, side * 0.9, 1.8, 1.3));
    }
    celIsle.add(block(2.4, 0.4, 0.4, 0xffe08a, 0, 3.0, 1.3));
    this.label('The Celestial City', CELESTIAL.x, CELESTIAL.z, 5.6);

    // ---------- both roads: stones on land, plank bridges over water ----------
    this.buildRoad(this.mainCurve, 86);
    this.buildRoad(this.branchCurve, 26);

    // ---------- drifting clouds: soft, round and white ----------
    const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x777777 });
    for (let i = 0; i < 6; i++) {
      const c = new THREE.Group();
      const puff = (r: number, px: number, py: number, pz: number) => {
        const p = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), cloudMat);
        p.position.set(px, py, pz);
        p.castShadow = false;
        c.add(p);
      };
      puff(0.85, 0, 0, 0);
      puff(0.65, 0.95, 0.12, 0.1);
      puff(0.6, -0.9, 0.08, -0.1);
      puff(0.5, 0.35, 0.45, 0.12);
      puff(0.45, -0.4, 0.4, -0.05);
      c.position.set((Math.random() - 0.5) * 42, 5.5 + Math.random() * 3, -6 - Math.random() * 5);
      this.clouds.push(c);
      s.add(c);
    }

    // ---------- birds that fly across the sky now and then ----------
    for (let i = 0; i < 3; i++) {
      const g = new THREE.Group();
      const body = block(0.22, 0.12, 0.3, 0x4a4440, 0, 0, 0);
      body.castShadow = false;
      g.add(body);
      const wing = (side: number) => {
        const w = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.22), mat(0x5b544e));
        w.geometry.translate(0.3, 0, 0); // pivot at the wing root
        w.position.set(0.08 * side, 0.04, 0);
        w.scale.x = side;
        w.castShadow = false;
        g.add(w);
        return w;
      };
      const wingL = wing(-1);
      const wingR = wing(1);
      g.visible = false;
      s.add(g);
      this.birds.push({ g, wingL, wingR, speed: 0, active: false });
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

  start(party: Array<'pliable' | 'hopeful'>): void {
    this.build();
    // after the Cross, the burden is gone and the garments are new
    if (this.christianHasBurden !== !this.crossDone) {
      this.scene.remove(this.christian.root);
      this.christian = this.makeMapChristian();
      this.scene.add(this.christian.root);
      this.placeOn(this.mainCurve, this.christian.root, this.progress);
    }
    for (const f of this.followers) this.scene.remove(f.root);
    this.followers = party.map((id) => {
      const parts = id === 'pliable'
        ? makeBear({ species: 'rabbit', outfit: 'shirt', outfitColor: 0xffd6a5, scale: 0.44 })
        : makeBear({ species: 'dog', fur: 0xd9b088, outfit: 'shirt', outfitColor: 0x7fb8a2, scale: 0.44 });
      this.scene.add(parts.root);
      return parts;
    });
  }

  private camPan = 0; // eastward pan as Christian travels past the classic islands

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    // pull back on narrow screens so the classic islands stay in frame — the
    // newer islands to the east are reached by PANNING, not by zooming out
    const z = THREE.MathUtils.clamp(48 / aspect - 1, 24, 58);
    this.camera.position.set(5.0 + this.camPan, z * 0.78, z + 2.2);
    this.camera.lookAt(5.0 + this.camPan, 0.4, 1.4);
    this.camera.updateProjectionMatrix();
  }

  spot(): MapSpot {
    if (this.road === 'branch') {
      return this.branchP > 0.86 ? 'morality' : 'road';
    }
    if (this.progress < this.cityT + 0.03) return 'city';
    if (Math.abs(this.progress - this.sloughT) < 0.03) return 'slough';
    if (Math.abs(this.progress - this.forkT) < 0.025) return 'fork';
    if (this.progress > this.celestialT - 0.015) return 'celestial';
    if (Math.abs(this.progress - this.beulahT) < 0.015) return 'beulah';
    if (Math.abs(this.progress - this.mountainT) < 0.015) return 'mountain';
    if (Math.abs(this.progress - this.castleT) < 0.015) return 'castle';
    if (Math.abs(this.progress - this.lucreT) < 0.015) return 'lucre';
    if (Math.abs(this.progress - this.vanityT) < 0.015) return 'vanity';
    if (Math.abs(this.progress - this.shadowT) < 0.015) return 'shadow';
    if (Math.abs(this.progress - this.valleyT) < 0.015) return 'valley';
    if (Math.abs(this.progress - this.palaceT) < 0.015) return 'palace';
    if (Math.abs(this.progress - this.hillT) < 0.015) return 'hill';
    if (Math.abs(this.progress - this.highwayT) < 0.02) return 'highway';
    if (Math.abs(this.progress - this.crossT) < 0.02) return 'cross';
    if (Math.abs(this.progress - this.beyondT) < 0.02) return 'beyond';
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
        // the long road east stays barred until Morality is settled;
        // the road past the Gate opens only once the Gate chapter is done
        const maxP = this.beulahDone
          ? this.celestialT + 0.01
          : this.mountainDone
          ? this.beulahT + 0.01
          : this.castleDone
          ? this.mountainT + 0.01
          : this.lucreDone
          ? this.castleT + 0.01
          : this.vanityDone
          ? this.lucreT + 0.01
          : this.shadowDone
          ? this.vanityT + 0.01
          : this.valleyDone
          ? this.shadowT + 0.01
          : this.palaceDone
          ? this.valleyT + 0.01
          : this.hillDone
          ? this.palaceT + 0.01
          : this.highwayDone
          ? this.hillT + 0.01
          : this.crossDone
          ? this.highwayT + 0.01
          : this.wicketDone
            ? this.crossT + 0.02
            : this.moralityDone
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
          this.branchP = 0;
          this.justDiverted = true;
        }
      }
      // after the chapter, the byway can still be taken on purpose (press south)
      if (
        this.moralityDone && axisZ > 0.35 &&
        Math.abs(this.progress - this.forkT) < 0.05
      ) {
        this.road = 'branch';
        this.branchP = 0.02;
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
    // keep the camera centred on Christian's actual position, not a fixed
    // "reveal the next island" pan target
    const panTarget = this.christian.root.position.x - 5.0;
    this.camPan += (panTarget - this.camPan) * Math.min(dt * 2.5, 1);
    this.camera.position.x = 5.0 + this.camPan;
    this.camera.lookAt(5.0 + this.camPan, 0.4, 1.4);
    const tan = curve.getTangentAt(THREE.MathUtils.clamp(param, 0, 1));
    this.christian.root.rotation.y = Math.atan2(tan.x * this.facing, tan.z * this.facing);
    animateBear(this.christian, t, this.moving);

    this.followers.forEach((f, i) => {
      // trail close behind Christian (tighter spacing than before, which strung
      // the companions out too far down the road)
      const ft = param - 0.022 * (i + 1) * this.facing;
      this.placeOn(curve, f.root, ft);
      const ftan = curve.getTangentAt(THREE.MathUtils.clamp(ft, 0, 1));
      f.root.rotation.y = Math.atan2(ftan.x * this.facing, ftan.z * this.facing);
      animateBear(f, t + 0.4 * (i + 1), this.moving);
    });

    // ambient life
    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      c.position.x += dt * (0.2 + i * 0.06);
      if (c.position.x > 30) c.position.x = -30;
    }
    // birds: launch one across the sky every so often
    this.birdTimer -= dt;
    if (this.birdTimer <= 0) {
      this.birdTimer = 6 + Math.random() * 8;
      const bird = this.birds.find((b) => !b.active);
      if (bird) {
        bird.active = true;
        bird.speed = 2.6 + Math.random() * 1.8;
        bird.g.position.set(-30, 6.5 + Math.random() * 3.5, -9 + Math.random() * 9);
        bird.g.rotation.y = Math.PI / 2;
        bird.g.visible = true;
      }
    }
    for (const b of this.birds) {
      if (!b.active) continue;
      b.g.position.x += b.speed * dt;
      b.g.position.y += Math.sin(t * 2 + b.g.position.x) * dt * 0.3;
      const flap = Math.sin(t * 13 + b.g.position.z) * 0.65;
      b.wingL.rotation.z = -flap;
      b.wingR.rotation.z = flap;
      if (b.g.position.x > 30) {
        b.active = false;
        b.g.visible = false;
      }
    }
    // the sun breathes gently
    for (let i = 0; i < this.sunHalos.length; i++) {
      const sc = 1 + Math.sin(t * 1.4 + i) * 0.06;
      this.sunHalos[i].scale.setScalar(sc);
    }
    if (this.crossGlow) {
      (this.crossGlow.material as THREE.MeshBasicMaterial).opacity =
        0.22 + 0.18 * Math.abs(Math.sin(t * 1.1));
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
