import { bakeStatic } from './world/voxels';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createTerrain } from './world/terrain';
import { createTree, createPine, createBush, createRock } from './world/props';
import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { makeAlpineMountain } from './alpine';

// The overworld: one long voxel storybook continent surrounded by a pastel
// sea. Distinct coloured regions preserve each chapter's identity without
// breaking the pilgrimage into disconnected islands. The road runs City of
// Destruction → Slough of Despond → a CROSSROAD. From there it continues
// east toward the misty country — but until Chapter III is settled, that
// way is barred and a smooth, pleasant byway curves south to the village of
// Morality, where Mount Sinai broods. Party members trail behind Christian.

export type MapSpot =
  | 'city' | 'road' | 'slough' | 'fork' | 'morality' | 'beyond' | 'cross'
  | 'highway' | 'hill' | 'palace' | 'valley' | 'shadow' | 'vanity' | 'lucre'
  | 'castle' | 'mountain' | 'enchanted' | 'beulah' | 'celestial';

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
const ENCHANTED = new THREE.Vector3(105.5, 0, 1.0);
const BEULAH = new THREE.Vector3(113.5, 0, -0.5);
const CELESTIAL = new THREE.Vector3(121.5, 0, 1.0);

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
  { c: ENCHANTED, r: 4.2 },
  { c: BEULAH, r: 4.2 },
  { c: CELESTIAL, r: 4.4 },
];

const REGIONS: Array<{ c: THREE.Vector3; color: number; k: number }> = [
  { c: CITY, color: 0xcdc79c, k: 0.6 }, { c: SLOUGH, color: 0x8f9264, k: 0.9 }, { c: MORALITY, color: 0xc8dfae, k: 0.6 },
  { c: BEYOND, color: 0xa8dcbc, k: 0.6 }, { c: CROSS, color: 0xd2f0b0, k: 0.75 }, { c: HIGHWAY, color: 0xb4c496, k: 0.7 },
  { c: HILL, color: 0xb9e39a, k: 0.6 }, { c: PALACE, color: 0xdfe6b8, k: 0.65 }, { c: VALLEY, color: 0xa39a70, k: 0.9 },
  { c: SHADOW, color: 0x6a7089, k: 0.95 }, { c: VANITY, color: 0xdfc287, k: 0.9 }, { c: LUCRE, color: 0xbcd9b4, k: 0.6 },
  { c: CASTLE, color: 0x949880, k: 0.85 }, { c: MOUNTAIN, color: 0xb0e387, k: 0.75 }, { c: ENCHANTED, color: 0xe6c878, k: 0.95 },
  { c: BEULAH, color: 0xb6ea97, k: 0.8 }, { c: CELESTIAL, color: 0xf2d992, k: 0.95 },
];
const tmpTint = new THREE.Color();

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];

function mapRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** A soft storybook sky: deep powder blue melting to a warm cream horizon. */
function skyTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#bfe0fa');
  grad.addColorStop(0.3, '#d9eefc');
  grad.addColorStop(0.5, '#fdf1e4');
  grad.addColorStop(1, '#e4f3f8');
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

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
  enchantedDone = false;
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
  enchantedT = 0.992;
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
  private sun: THREE.DirectionalLight | null = null;
  private boats: THREE.Group[] = [];
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
      // …into the golden, dreaming Enchanted Ground
      new THREE.Vector3(101.4, 0.62, 0.2),
      new THREE.Vector3(ENCHANTED.x - 0.6, 0.62, ENCHANTED.z),
      // …and on at last to Beulah Land, in sight of the Celestial City
      new THREE.Vector3(109.4, 0.62, 0.2),
      new THREE.Vector3(BEULAH.x - 0.6, 0.62, BEULAH.z),
      // …and the last golden mile, up to the Celestial City itself
      new THREE.Vector3(117.6, 0.62, 0.2),
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
    this.enchantedT = this.tForPoint(ENCHANTED);
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

  private labelCount = 0;

  // A storybook signpost for each chapter: a cream card with a gold keyline,
  // a small rose chapter numeral, the place name in the title serif, and a
  // pointer down to the spot. Drawn at 2x and redrawn once the web fonts load.
  private label(text: string, x: number, z: number, y: number, color = '#5b4535'): void {
    const numeral = ROMAN[this.labelCount++] ?? '';
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 300;
    const c = canvas.getContext('2d')!;
    const draw = (): void => {
      c.clearRect(0, 0, canvas.width, canvas.height);
      const nameFont = '600 66px Fraunces, Georgia, serif';
      const capFont = '800 30px Nunito, "Trebuchet MS", sans-serif';
      c.font = nameFont;
      const nameW = c.measureText(text).width;
      const w = Math.min(1000, Math.max(nameW + 96, 300));
      const left = (canvas.width - w) / 2;
      const top = 18; const h = 196; const r = 40;
      const cx = canvas.width / 2;
      // card + pointer, one soft shadowed shape
      c.save();
      c.shadowColor = 'rgba(98, 68, 46, 0.28)';
      c.shadowBlur = 18;
      c.shadowOffsetY = 8;
      const grad = c.createLinearGradient(0, top, 0, top + h);
      grad.addColorStop(0, '#fffaf1');
      grad.addColorStop(1, '#f7ebdc');
      c.fillStyle = grad;
      // one continuous outline — the pointer is part of the bubble itself
      const right = left + w; const bottom = top + h;
      c.beginPath();
      c.moveTo(left + r, top);
      c.lineTo(right - r, top);
      c.arcTo(right, top, right, top + r, r);
      c.lineTo(right, bottom - r);
      c.arcTo(right, bottom, right - r, bottom, r);
      c.lineTo(cx + 28, bottom);
      c.quadraticCurveTo(cx + 8, bottom + 2, cx, bottom + 32);
      c.quadraticCurveTo(cx - 8, bottom + 2, cx - 28, bottom);
      c.lineTo(left + r, bottom);
      c.arcTo(left, bottom, left, bottom - r, r);
      c.lineTo(left, top + r);
      c.arcTo(left, top, left + r, top, r);
      c.closePath();
      c.fill();
      c.restore();
      // thin gold keyline inset in the card
      c.strokeStyle = 'rgba(201, 165, 122, 0.75)';
      c.lineWidth = 3;
      c.beginPath();
      c.roundRect(left + 11, top + 11, w - 22, h - 22, r - 10);
      c.stroke();
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      // chapter numeral in letter-spaced rose capitals
      if (numeral) {
        c.font = capFont;
        c.fillStyle = '#c0788c';
        const label = `CHAPTER ${numeral}`.split('').join(String.fromCharCode(8202));
        c.fillText(label, cx, top + 62);
      }
      c.font = nameFont;
      c.fillStyle = color;
      c.fillText(text, cx, numeral ? top + 128 : top + h / 2);
      tex.needsUpdate = true;
    };
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    draw();
    // the web fonts may still be loading on first build — redraw when ready
    if (document.fonts) {
      Promise.all([
        document.fonts.load('600 66px Fraunces'),
        document.fonts.load('800 30px Nunito'),
      ]).then(draw).catch(() => { /* keep the fallback drawing */ });
    }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, toneMapped: false, fog: false, depthWrite: false,
    }));
    sprite.center.set(0.5, 52 / 300); // the pointer tip (52px above the canvas bottom) sits on the anchor
    sprite.scale.set(9.6, 2.8, 1);
    sprite.position.set(x, y - 1.25, z);
    sprite.renderOrder = 10;
    this.scene.add(sprite);
  }

  // A shallow regional terrain patch embedded in the shared continent. The
  // chapter landmarks remain grouped locally, but there is no island cliff.
  private island(x: number, z: number, r: number, _top: number): THREE.Group {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.userData.r = r;
    this.scene.add(g);
    this.islands.push(g);
    return g;
  }

  private miniTree(px: number, pz: number, blossom = false): THREE.Group {
    const t = new THREE.Group();
    const leaf = blossom ? [0xf6bccb, 0xfacdd8, 0xfde0e6] : [0x9fd48a, 0xb2e09a, 0xc5eaac];
    t.add(block(0.18, 0.6, 0.18, 0xa07a58, 0, 0.28, 0));
    t.add(block(0.86, 0.5, 0.84, leaf[0], 0, 0.76, 0), block(0.66, 0.42, 0.64, leaf[1], 0.04, 1.14, 0.02), block(0.36, 0.28, 0.36, leaf[2], 0.02, 1.44, 0));
    t.position.set(px, 0.55, pz);
    return t;
  }

  private readonly moundMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });

  /** A faceted little hill; returns its surface height at an offset from its centre. */
  private mound(
    g: THREE.Group, x: number, z: number, rx: number, rz: number, h: number, top: number, foot: number, seed: number,
  ): (dx: number, dz: number) => number {
    const r = mapRng(seed * 97);
    const SEG = 15; const RINGS = 6;
    const spread = (u: number): number => Math.pow(Math.cos(u * Math.PI * 0.5), 0.85);
    const rings: THREE.Vector3[][] = [];
    const lobes = Array.from({ length: SEG }, () => 0.9 + r() * 0.2);
    for (let i = 0; i < RINGS; i++) {
      const u = i / RINGS; const s = spread(u);
      rings.push(lobes.map((l, k) => {
        const a = (k / SEG) * Math.PI * 2 + (i % 2) * 0.16;
        const wob = (1 + (l - 1) * (1 - u * 0.6)) * (0.97 + r() * 0.06);
        return new THREE.Vector3(Math.cos(a) * rx * s * wob, 0.5 + h * u + (i ? (r() - 0.5) * 0.09 : -0.05), Math.sin(a) * rz * s * wob);
      }));
    }
    const peak = new THREE.Vector3(0, 0.5 + h * 0.98, 0);
    const pos: number[] = []; const col: number[] = [];
    const cTop = new THREE.Color(top); const cFoot = new THREE.Color(foot); const c = new THREE.Color();
    const face = (...p: THREE.Vector3[]): void => {
      const y = (p[0].y + p[1].y + p[2].y) / 3;
      c.copy(cFoot).lerp(cTop, THREE.MathUtils.clamp((y - 0.5) / h * 1.25, 0, 1)).multiplyScalar(0.96 + r() * 0.08);
      for (const q of p) { pos.push(q.x, q.y, q.z); col.push(c.r, c.g, c.b); }
    };
    for (let i = 0; i < RINGS; i++) {
      for (let k = 0; k < SEG; k++) {
        const a = rings[i][k]; const b = rings[i][(k + 1) % SEG];
        if (i === RINGS - 1) { face(a, peak, b); continue; }
        const d = rings[i + 1][k]; const e = rings[i + 1][(k + 1) % SEG];
        face(a, d, b);
        face(b, d, e);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, this.moundMaterial);
    m.position.set(x, 0, z);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return (dx, dz) => {
      const s = Math.min(1, Math.hypot(dx / rx, dz / rz));
      return 0.5 + h * (Math.acos(Math.pow(s, 1 / 0.85)) / (Math.PI * 0.5));
    };
  }

  /** A flat strip of constant width along smoothed local points (rivers, roads). */
  private ribbon(g: THREE.Object3D, points: ReadonlyArray<readonly [number, number]>, width: number, color: number, y: number, wobble = 0.12): void {
    const curve = new THREE.CatmullRomCurve3(points.map(([x, z]) => new THREE.Vector3(x, y, z)));
    this.strip(g, curve, Math.max(24, points.length * 8), width, color, y, wobble);
  }
  private strip(g: THREE.Object3D, curve: THREE.CatmullRomCurve3, segs: number, width: number, color: number, y: number, wobble: number): void {
    const pos: number[] = [];
    let prev: [THREE.Vector3, THREE.Vector3] | null = null;
    for (let i = 0; i <= segs; i++) {
      const p = curve.getPointAt(i / segs); const t = curve.getTangentAt(i / segs);
      const n = new THREE.Vector3(-t.z, 0, t.x).normalize();
      const w = width / 2;
      const l = p.clone().addScaledVector(n, w + Math.sin(i * 1.7) * wobble).setY(y);
      const r = p.clone().addScaledVector(n, -w + Math.sin(i * 2.3 + 1) * wobble).setY(y);
      if (prev) for (const q of [prev[0], l, prev[1], prev[1], l, r]) pos.push(q.x, q.y, q.z);
      prev = [l, r];
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.95, side: THREE.DoubleSide }));
    m.receiveShadow = true;
    g.add(m);
  }

  private pool(g: THREE.Group, x: number, z: number, rx: number, rz: number, seed: number, colors: readonly number[] = [0xeadfba, 0x8dd0ea, 0x6bbce2]): void {
    const r = mapRng(seed);
    const lobes = Array.from({ length: 16 }, () => 0.88 + r() * 0.2);
    for (const [k, color, y] of [[1.18, colors[0], 0.59], [1, colors[1], 0.6], [0.6, colors[2], 0.61]] as const) {
      const shape = new THREE.Shape(lobes.map((l, i) => {
        const a = (i / 16) * Math.PI * 2;
        return new THREE.Vector2(Math.cos(a) * rx * l * k, Math.sin(a) * rz * l * k);
      }));
      const geo = new THREE.ShapeGeometry(shape, 1);
      geo.rotateX(-Math.PI / 2);
      const m = new THREE.Mesh(geo, mat(color));
      m.position.set(x, y, z);
      m.receiveShadow = true;
      g.add(m);
    }
  }

  private makeCloud(seed: number): THREE.Group {
    const r = mapRng(seed * 131);
    const parts: THREE.BufferGeometry[] = [];
    const n = 5 + Math.floor(r() * 3);
    for (let i = 0; i < n; i++) {
      const u = (i / (n - 1)) * 2 - 1;
      const size = 0.95 * (1 - Math.abs(u) * 0.5) + r() * 0.25;
      const p = new THREE.IcosahedronGeometry(size, 1);
      p.scale(1.25, 0.82, 1);
      p.translate(u * 1.9, (r() - 0.3) * 0.25 + size * 0.25, (r() - 0.5) * 0.7);
      parts.push(p);
    }
    const geo = mergeGeometries(parts, false)!;
    // a soft flat underside
    const pos = geo.getAttribute('position');
    for (let i = 0; i < pos.count; i++) if (pos.getY(i) < -0.28) pos.setY(i, -0.28);
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: 0xffffff, emissive: 0xfff3ee, emissiveIntensity: 0.32, roughness: 1, flatShading: true, fog: false,
    }));
    const g = new THREE.Group();
    g.add(m);
    return g;
  }

  private makeBoat(color: number): THREE.Group {
    const g = new THREE.Group();
    g.add(block(1.3, 0.26, 0.5, 0xb98657, 0, 0.1, 0), block(0.3, 0.22, 0.4, 0xcf9c69, 0.75, 0.18, 0), block(0.07, 1.5, 0.07, 0x8b6446, 0, 0.9, 0));
    for (let i = 0; i < 4; i++) g.add(block(0.82 - i * 0.2, 0.3, 0.05, i % 2 ? 0xfffaf0 : color, 0.42 - i * 0.1, 0.5 + i * 0.3, 0));
    return g;
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = skyTexture();
    // Portrait phones previously looked washed out because their extra-distant
    // map camera sat deep inside the desktop fog range. Keep the atmosphere in
    // the distance without laying a pale veil across the continent.
    const narrowMap = this.camera.aspect < 0.8;
    s.fog = new THREE.Fog(0xdff0fa, narrowMap ? 78 : 44, narrowMap ? 170 : 120);

    s.add(new THREE.HemisphereLight(0xf6fbff, 0xd9d4b8, 1.35));
    const sun = new THREE.DirectionalLight(0xffe9c8, 2.15);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -34;
    sun.shadow.camera.right = 34;
    sun.shadow.camera.top = 30;
    sun.shadow.camera.bottom = -30;
    sun.shadow.camera.far = 70;
    sun.shadow.radius = 4;
    sun.shadow.normalBias = 0.03;
    s.add(sun, sun.target);
    this.sun = sun;
    this.followSun();

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
    // Extend well beyond the final island in every direction. The earlier sea
    // ended almost exactly beneath the Celestial City, exposing an empty edge
    // as the camera panned through the final chapters.
    const SEA_LIGHT = new THREE.Color(0xb9ecec); const SEA_MID = new THREE.Color(0x8fd0e6); const SEA_DEEP = new THREE.Color(0x78bbdf);
    const seaGeo = new THREE.PlaneGeometry(380, 190, 190, 80).rotateX(-Math.PI / 2).toNonIndexed();
    const sp = seaGeo.getAttribute('position');
    const seaCol = new Float32Array(sp.count * 3);
    const sc = new THREE.Color();
    for (let i = 0; i < sp.count; i++) {
      const x = sp.getX(i) + 45; const z = sp.getZ(i);
      const out = Math.max(Math.abs(z + 3) - 11, -26 - x, x - 130, 0) + Math.sin(x * 0.21) * 1.6 + Math.sin(z * 0.3 + x * 0.1) * 1.4;
      sc.copy(SEA_LIGHT).lerp(SEA_MID, THREE.MathUtils.smoothstep(out, 0, 9)).lerp(SEA_DEEP, THREE.MathUtils.smoothstep(out, 8, 34));
      sc.toArray(seaCol, i * 3);
    }
    seaGeo.setAttribute('color', new THREE.BufferAttribute(seaCol, 3));
    const sea = new THREE.Mesh(seaGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }));
    sea.position.set(45, -1.13, 0);
    s.add(sea);
    for (let i = 0; i < 110; i++) {
      const w = new THREE.Mesh(
        new THREE.BoxGeometry(0.4 + Math.random() * 0.7, 0.04, 0.09),
        new THREE.MeshBasicMaterial({ color: 0xf7fdff, transparent: true, opacity: 0.8 }),
      );
      w.position.set(-65 + Math.random() * 235, -1.02, (Math.random() - 0.5) * 70);
      w.castShadow = false;
      s.add(w);
      this.sparkles.push(w);
    }

    // ---------- one continuous voxel continent ----------
    // Overlapping angular sections create bays and headlands while keeping
    // every chapter and both road branches on the same connected landmass.
    const coastSections = [
      [-17, 10.5, 0.0], [-7, 12.5, -0.3], [3, 14.5, 0.7],
      [13, 17.5, 1.2], [23, 13.8, 0.2], [33, 12.8, -0.2],
      [43, 14.2, 0.4], [53, 13.0, 0.0], [63, 14.5, -0.1],
      [73, 13.2, 0.4], [83, 14.4, 0.0], [93, 13.0, 0.1],
      [103, 14.8, 0.2], [113, 13.5, -0.1], [121, 10.5, -0.4],
    ] as const;
    const capes = [
      [8, 7.5, 12, 8], [48, 6.5, 12, 4.2], [108, 6.4, 12, 4.6],
    ] as const;
    this.buildContinent(coastSections, capes);

    // ---------- northern alpine backdrop ----------
    // (the continent itself now runs back beneath the range — no separate shelf)

    // A long range of faceted low-poly peaks frames the upper coastline. The
    // blue stone keeps it visually distant, while white angular caps make the
    // silhouette read immediately as friendly storybook Alps.
    const alpinePeak = (
      x: number, z: number, width: number, height: number,
      blue: number, snow: number,
    ) => {
      const peak = makeAlpineMountain({
        width, height, depth: width * 0.6, rock: blue, snow,
        rockLight: new THREE.Color(blue).lerp(new THREE.Color(0xd3e2c9), z > -12 ? 0.6 : 0.25).getHex(),
      });
      peak.rotation.y = Math.sin(x * 3.1) * 0.28;
      peak.position.set(x, 0, z);
      s.add(peak);
    };

    // Pale far peaks, followed by a slightly darker foreground ridge.
    for (let x = -24, i = 0; x <= 128; x += 8.2, i++) {
      alpinePeak(
        x, -14.5 - (i % 3) * 0.7,
        10.8 + (i % 4) * 0.75, 5.4 + (i % 5) * 0.55,
        i % 2 ? 0xc3d5ea : 0xcedff0, 0xffffff,
      );
    }
    for (let x = -20, i = 0; x <= 125; x += 9.0, i++) {
      alpinePeak(
        x, -10.2 - (i % 2) * 0.55,
        11.0 + (i % 3) * 0.8, 4.3 + (i % 4) * 0.55,
        i % 3 === 0 ? 0xb3c3e0 : i % 3 === 1 ? 0xa9c4dc : 0xbcc6e2, 0xfffcf6,
      );
    }

    // Compact voxel conifers tie the mountain range into the continent.
    for (let x = -21, i = 0; x <= 124; x += 2.1, i++) {
      if (i % 7 === 3) continue;
      const pine = new THREE.Group();
      pine.add(block(0.18, 0.8, 0.18, 0x765d45, 0, 0.4, 0));
      pine.add(block(1.0, 0.42, 0.9, 0x7fa88f, 0, 0.82, 0));
      pine.add(block(0.74, 0.42, 0.7, 0x8cb59b, 0, 1.15, 0));
      pine.add(block(0.46, 0.4, 0.44, 0x9dc3a7, 0, 1.47, 0));
      pine.position.set(x, 0.5, -6.6 - (i % 4) * 0.5 - Math.sin(i * 1.9) * 0.3);
      pine.scale.setScalar(0.62 + (i % 5) * 0.1);
      s.add(pine);
    }

    // ---------- City of Destruction region ----------
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
    this.pool(bog, 0, 0, 2.5, 1.9, 91, [0x9a8562, 0x7f6a4c, 0x6a563e]);
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
    this.mound(sinai, 0, -0.4, 2.3, 1.5, 3.9, 0xa9a6b4, 0x858390, 92);
    this.mound(sinai, 1.7, 0, 1.2, 1.0, 1.9, 0xa9a6b4, 0x7f7d8a, 93);
    const seam = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 1.1, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xff9a4d, transparent: true, opacity: 0.9 }),
    );
    seam.position.set(0.15, 2.3, 0.88);
    seam.rotation.set(-0.5, 0, 0.3);
    sinai.add(seam);
    this.sinaiGlow = seam;
    sinai.position.set(0.4, 0.05, -2.0);
    mor.add(sinai);
    this.label('Morality', MORALITY.x + 0.4, MORALITY.z - 2.2, 5.9);

    // ---------- the Wicket Gate ----------
    // Landmarks stand north of the road, so the party walks past them in view.
    const beyond = this.island(BEYOND.x, BEYOND.z, 4.2, 0x9ec7a8);
    beyond.add(this.miniTree(-2.6, 1.9), this.miniTree(2.9, -2.0, true), this.miniTree(-2.9, -2.3));
    // a white wall with the narrow gate in it, its door standing in light
    for (const [x, w] of [[-1.45, 1.6], [1.45, 1.6]] as const) {
      beyond.add(block(w, 1.2, 0.5, 0xfaf4e8, x, 1.15, -1.75), block(w + 0.12, 0.18, 0.64, 0xe3d6c2, x, 1.84, -1.75));
    }
    for (const side of [-1, 1]) beyond.add(block(0.5, 1.8, 0.66, 0xf2e8d8, side * 0.62, 1.45, -1.75), block(0.62, 0.22, 0.78, 0xd9b36a, side * 0.62, 2.44, -1.75));
    beyond.add(block(1.5, 0.28, 0.6, PALETTE.woodDark, 0, 2.28, -1.75), block(0.28, 0.28, 0.28, 0xffdf85, 0, 2.62, -1.6));
    const gateGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.76, 1.55, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xfff0b0 }),
    );
    gateGlow.position.set(0, 1.34, -1.6);
    beyond.add(gateGlow);
    for (let i = 0; i < 4; i++) beyond.add(block(0.5, 0.07, 0.4, i % 2 ? 0xf3e6cb : 0xe7d5b3, 0, 0.6, -1.25 + i * 0.32));
    this.label('Wicket Gate', BEYOND.x, BEYOND.z, 5.0);

    // ---------- the hill of the Cross ----------
    const crossIsle = this.island(CROSS.x, CROSS.z, 4.2, PALETTE.grassLight);
    const calvary = this.mound(crossIsle, -0.2, -2.3, 2.7, 1.9, 2.0, 0xb5e29c, 0x8fc98a, 11);
    crossIsle.add(block(0.26, 1.9, 0.26, 0x8b6446, -0.2, calvary(0, 0) + 0.85, -2.3));
    crossIsle.add(block(1.2, 0.26, 0.26, 0x8b6446, -0.2, calvary(0, 0) + 1.25, -2.3));
    const crossHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.35, depthWrite: false }),
    );
    crossHalo.position.set(-0.2, calvary(0, 0) + 1.15, -2.3);
    crossIsle.add(crossHalo);
    this.crossGlow = crossHalo;
    for (let i = 0; i < 5; i++) {
      const dz = 1.7 - i * 0.36;
      crossIsle.add(block(0.46, 0.08, 0.34, 0xeeddb9, -0.2 + Math.sin(i * 1.3) * 0.24, calvary(Math.sin(i * 1.3) * 0.24, dz) + 0.03, -2.3 + dz));
    }
    // the open tomb at the hill's foot
    this.mound(crossIsle, 2.75, -1.35, 0.95, 0.75, 1.0, 0xcfc8be, 0xaaa29a, 12);
    crossIsle.add(block(0.52, 0.6, 0.3, 0x4f4742, 2.75, 0.85, -0.72));
    const tombStone = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.16, 12), mat(0xbdb5ab));
    tombStone.rotation.x = Math.PI / 2;
    tombStone.position.set(3.3, 0.88, -0.55);
    crossIsle.add(tombStone);
    crossIsle.add(this.miniTree(-2.9, 1.8, true), this.miniTree(-3.2, -1.2));
    this.label('The Cross', CROSS.x, CROSS.z, 6.0);

    // ---------- the King's Highway at evening ----------
    const hwy = this.island(HIGHWAY.x, HIGHWAY.z, 4.0, 0x8fb583);
    // a low stone wall running along the road
    for (let i = 0; i < 7; i++) {
      hwy.add(block(0.82, 0.5 + (i % 2) * 0.06, 0.36, i % 2 ? 0xcabfae : 0xb9ad9b, -2.5 + i * 0.84, 0.8, -1.6 - Math.sin(i * 0.5) * 0.12));
    }
    // three tiny sleepers beside the way
    for (const [sx, sz, c] of [[-0.9, 1.5, 0xdfb56e], [0.3, 1.9, 0x9a8f7a], [1.5, 1.5, 0xe6cfc0]] as const) {
      hwy.add(block(0.62, 0.3, 0.36, c, sx, 0.72, sz), block(0.32, 0.32, 0.32, c, sx - 0.42, 0.74, sz), block(0.26, 0.1, 0.44, 0xf7f0e2, sx + 0.1, 0.9, sz));
    }
    for (const [lx, lz] of [[-2.8, 0.9], [2.8, -0.9]] as const) {
      hwy.add(block(0.14, 1.5, 0.14, 0x6f655d, lx, 1.3, lz), block(0.5, 0.12, 0.5, 0x6f655d, lx, 2.36, lz));
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.36, 0.34), new THREE.MeshBasicMaterial({ color: 0xffe9a0 }));
      lamp.position.set(lx, 2.14, lz);
      hwy.add(lamp);
    }
    hwy.add(this.miniTree(-2.6, -2.7), this.miniTree(0.6, -2.9, true), this.miniTree(2.4, -2.5));
    this.label("King's Highway", HIGHWAY.x, HIGHWAY.z, 4.6);

    // ---------- the Hill Difficulty ----------
    const hillIsle = this.island(HILL.x, HILL.z, 4.0, PALETTE.grass);
    const steep = this.mound(hillIsle, 0, -2.5, 2.7, 1.95, 4.0, 0xb2e09a, 0x93b585, 21);
    // the way winding up it, and the arbor halfway
    for (let i = 0; i < 11; i++) {
      const u = i / 10;
      const dx = Math.sin(u * 7.5) * 1.25 * (1 - u * 0.75);
      const dz = 1.6 * (1 - u * 0.96);
      hillIsle.add(block(0.4, 0.1, 0.32, i % 2 ? 0xf3e2bd : 0xe5cfa5, dx, steep(dx, dz) + 0.03, -2.5 + dz));
    }
    const ay = steep(1.15, 0.95);
    hillIsle.add(block(0.95, 0.3, 0.75, 0x86b56d, 1.15, ay + 0.75, -1.55), block(0.08, 0.7, 0.08, 0x8b6446, 0.8, ay + 0.35, -1.3), block(0.08, 0.7, 0.08, 0x8b6446, 1.5, ay + 0.35, -1.3));
    // the two easy ways skirting the foot
    for (const side of [-1, 1]) for (let i = 0; i < 4; i++) hillIsle.add(block(0.46, 0.07, 0.4, 0xd9c9a8, side * (1.9 + i * 0.36), 0.6, -0.6 - i * 0.42));
    hillIsle.add(this.miniTree(-3.1, 1.6, true), this.miniTree(3.0, 1.7));
    this.label('Hill Difficulty', HILL.x, HILL.z, 6.6);

    // ---------- Palace Beautiful ----------
    const palIsle = this.island(PALACE.x, PALACE.z, 4.0, PALETTE.grass);
    const PEARL = 0xfffaf2; const PINK = 0xf0aebb;
    palIsle.add(block(3.0, 1.5, 1.7, PEARL, 0, 1.3, -2.2), block(3.2, 0.22, 1.9, 0xeadfcd, 0, 2.1, -2.2));
    palIsle.add(block(1.5, 1.2, 1.3, PEARL, 0, 2.7, -2.35), block(1.75, 0.3, 1.5, PINK, 0, 3.42, -2.35), block(1.1, 0.3, 0.95, PINK, 0, 3.7, -2.35), block(0.45, 0.35, 0.4, PINK, 0, 3.98, -2.35));
    for (const tx of [-1.75, 1.75]) {
      palIsle.add(block(0.9, 2.5, 0.9, PEARL, tx, 1.8, -2.1), block(1.05, 0.2, 1.05, 0xeadfcd, tx, 3.1, -2.1));
      palIsle.add(block(0.9, 0.36, 0.9, PINK, tx, 3.36, -2.1), block(0.58, 0.36, 0.58, PINK, tx, 3.68, -2.1), block(0.26, 0.36, 0.26, PINK, tx, 4.0, -2.1));
    }
    for (const [wx, wy, wz] of [[-0.95, 1.5, -1.33], [0.95, 1.5, -1.33], [0, 2.75, -1.68], [-1.75, 2.2, -1.63], [1.75, 2.2, -1.63]] as const) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.46, 0.08), new THREE.MeshBasicMaterial({ color: 0xffe9a0 }));
      w.position.set(wx, wy, wz);
      palIsle.add(w);
    }
    palIsle.add(block(0.7, 0.95, 0.12, 0xa5774f, 0, 1.04, -1.32));
    // the two lions before the gate
    for (const side of [-1, 1]) {
      palIsle.add(block(0.4, 0.36, 0.62, 0xe0b068, side * 0.95, 0.76, -0.75), block(0.56, 0.52, 0.3, 0xbb8345, side * 0.95, 1.0, -0.45), block(0.36, 0.36, 0.3, 0xe8bd7a, side * 0.95, 1.0, -0.28));
    }
    this.label('Palace Beautiful', PALACE.x, PALACE.z, 5.8);

    // ---------- Valley of Humiliation ----------
    const valIsle = this.island(VALLEY.x, VALLEY.z, 4.0, 0x9aab7a);
    this.mound(valIsle, -1.9, -2.2, 2.0, 1.7, 2.6, 0xa3b584, 0x86906f, 31);
    this.mound(valIsle, 1.9, -2.4, 2.1, 1.6, 3.0, 0xa9ba88, 0x8a9472, 32);
    this.mound(valIsle, -2.2, 2.6, 1.5, 0.95, 0.9, 0xa3b584, 0x86906f, 33);
    this.mound(valIsle, 2.4, 2.6, 1.5, 0.95, 1.0, 0xa9ba88, 0x8a9472, 34);
    // scorched ground, and the fled monster's wings far up between the hills
    valIsle.add(block(1.1, 0.05, 0.8, 0x6a5a52, 0.4, 0.6, 1.2), block(0.6, 0.06, 0.5, 0x55473f, 0.5, 0.61, 1.2));
    const imp = new THREE.Group();
    imp.add(block(0.42, 0.36, 0.5, 0x5b5762, 0, 0, 0), block(0.3, 0.28, 0.28, 0x6d6874, 0, 0.18, 0.3));
    for (const side of [-1, 1]) {
      const wing = block(0.9, 0.07, 0.5, 0xa64a43, side * 0.6, 0.16, -0.05);
      wing.rotation.z = side * 0.45;
      imp.add(wing, block(0.08, 0.2, 0.08, 0xb9544a, side * 0.1, 0.42, 0.28));
    }
    imp.position.set(0.1, 3.5, -2.9);
    imp.rotation.y = 0.5;
    valIsle.add(imp);
    this.label('Valley of Humiliation', VALLEY.x, VALLEY.z, 5.8);

    // ---------- Valley of the Shadow of Death ----------
    const shIsle = this.island(SHADOW.x, SHADOW.z, 4.0, 0x6d7590);
    for (const [x, z, rx, rz, h, seed] of [[-2.0, -2.1, 1.8, 1.5, 2.6, 41], [0.4, -2.7, 1.7, 1.3, 3.3, 42], [2.4, -2.1, 1.5, 1.4, 2.3, 43], [-2.3, 2.5, 1.4, 0.8, 1.0, 44], [2.3, 2.5, 1.4, 0.8, 0.9, 45]] as const) {
      this.mound(shIsle, x, z, rx, rz, h, 0x5f6780, 0x444a60, seed);
    }
    for (const [tx, tz] of [[-3.1, 0.9], [3.2, -0.6]] as const) {
      shIsle.add(block(0.16, 1.2, 0.16, 0x3f3d4c, tx, 1.15, tz), block(0.6, 0.12, 0.12, 0x3f3d4c, tx + 0.2, 1.6, tz), block(0.12, 0.4, 0.12, 0x3f3d4c, tx + 0.46, 1.8, tz));
    }
    // the one narrow line of light through the dark
    const lane = new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.05, 0.34),
      new THREE.MeshBasicMaterial({ color: 0xffeec4 }),
    );
    lane.position.set(0, 0.66, 0.75);
    shIsle.add(lane);
    this.label('Shadow of Death', SHADOW.x, SHADOW.z, 5.6);

    // ---------- Vanity Fair ----------
    const vanIsle = this.island(VANITY.x, VANITY.z, 4.2, 0xd9c894);
    // a huddle of gaudy painted houses and striped stalls
    const gaudy = [0xe98390, 0xf4b65c, 0x8cc3e0, 0xb38ad6, 0x86d3a0];
    [[-2.4, -2.0], [-1.0, -2.7], [0.5, -2.2], [1.9, -2.7], [3.0, -1.8]].forEach(([hx, hz], i) => {
      const h = 0.9 + (i % 3) * 0.35;
      vanIsle.add(block(1.05, h, 0.95, 0xfff4e2, hx, 0.55 + h / 2, hz));
      vanIsle.add(block(1.25, 0.28, 1.15, gaudy[i], hx, 0.65 + h, hz), block(0.9, 0.28, 0.8, gaudy[i], hx, 0.9 + h, hz), block(0.45, 0.24, 0.4, gaudy[i], hx, 1.14 + h, hz));
      vanIsle.add(block(0.26, 0.44, 0.06, 0x8b6446, hx, 0.8, hz + 0.49), block(0.24, 0.24, 0.06, 0xffe9a0, hx + 0.3, 0.75 + h * 0.5, hz + 0.49));
    });
    for (const [sx, c] of [[-2.0, 0], [0.1, 2], [2.1, 3]] as const) {
      vanIsle.add(block(1.0, 0.36, 0.5, 0xc79a68, sx, 0.76, 1.9));
      for (let k = 0; k < 5; k++) vanIsle.add(block(0.26, 0.1, 0.8, k % 2 ? 0xfffaf0 : gaudy[c], sx - 0.52 + k * 0.26, 1.48, 1.85));
      for (const px of [-0.5, 0.5]) vanIsle.add(block(0.07, 0.9, 0.07, 0x8b6446, sx + px, 1.02, 2.1));
    }
    // bunting strung over the fair
    for (let i = 0; i < 9; i++) vanIsle.add(block(0.2, 0.22, 0.05, gaudy[i % 5], -2.4 + i * 0.6, 2.75 - Math.sin((i / 8) * Math.PI) * 0.35, -1.1));
    for (const px of [-2.6, 2.6]) vanIsle.add(block(0.09, 2.3, 0.09, 0x8b6446, px, 1.7, -1.1));
    this.label('Vanity Fair', VANITY.x, VANITY.z, 4.9);

    // ---------- the Hill Lucre ----------
    const lucIsle = this.island(LUCRE.x, LUCRE.z, 4.0, 0x9ecf8c);
    const silver = this.mound(lucIsle, -0.4, -2.4, 2.6, 1.9, 3.2, 0xc3ceda, 0x98a5b4, 51);
    for (let i = 0; i < 9; i++) {
      const dx = Math.sin(i * 2.3) * 1.6; const dz = 0.4 + (i % 3) * 0.42;
      lucIsle.add(block(0.18, 0.34, 0.18, i % 2 ? 0xf3fbff : 0xd8ecf6, -0.4 + dx, silver(dx, dz) + 0.1, -2.4 + dz));
    }
    const mineGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.8, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xc9eed6 }),
    );
    mineGlow.position.set(-0.5, 0.98, -0.62);
    lucIsle.add(block(1.1, 1.15, 0.3, 0x7f6a56, -0.5, 1.05, -0.82), mineGlow, block(1.3, 0.2, 0.4, 0x99805f, -0.5, 1.68, -0.8));
    // Lot's wife: the little pillar of salt at the roadside.
    lucIsle.add(block(0.4, 0.95, 0.36, 0xfdf9f2, 2.5, 1.05, -0.9), block(0.32, 0.32, 0.3, 0xfdf9f2, 2.5, 1.68, -0.9));
    this.pool(lucIsle, -0.4, 2.2, 1.9, 0.75, 52);
    lucIsle.add(this.miniTree(-3.1, 1.2, true), this.miniTree(3.0, 1.9));
    this.label('Hill Lucre', LUCRE.x, LUCRE.z, 5.8);

    // ---------- Doubting Castle ----------
    const castleIsle = this.island(CASTLE.x, CASTLE.z, 4.0, 0x9fc489);
    // The inviting green Bypath splits from the rough King's Highway.
    for (let i = 0; i < 9; i++) castleIsle.add(block(0.44, 0.07, 0.4, 0x86cc72, -2.9 + i * 0.42, 0.6, 0.75 + Math.sin(i * 0.45) * 1.1));
    this.mound(castleIsle, 0, -2.3, 3.0, 1.8, 0.8, 0x8f9a80, 0x77766e, 61);
    const WALL = 0x8d849b; const WALL_D = 0x716881; const ROOF_D = 0x5b5069;
    castleIsle.add(block(2.6, 1.7, 1.4, WALL, 0, 1.75, -2.3));
    for (const [tx, h, tz] of [[-1.55, 2.6, -2.0], [1.55, 3.1, -2.0], [0.2, 3.7, -2.8]] as const) {
      castleIsle.add(block(1.05, h, 1.05, WALL_D, tx, 0.7 + h / 2, tz), block(1.25, 0.26, 1.25, WALL, tx, 0.8 + h, tz));
      castleIsle.add(block(1.0, 0.34, 1.0, ROOF_D, tx, 1.08 + h, tz), block(0.64, 0.34, 0.64, ROOF_D, tx, 1.4 + h, tz), block(0.28, 0.36, 0.28, ROOF_D, tx, 1.72 + h, tz));
      castleIsle.add(block(0.22, 0.42, 0.08, 0xd9b8e8, tx, 0.3 + h, tz + 0.54));
    }
    for (const bx of [-0.9, -0.3, 0.3, 0.9]) castleIsle.add(block(0.34, 0.32, 0.4, WALL_D, bx, 2.72, -1.75));
    castleIsle.add(block(0.8, 1.05, 0.14, 0x3d3546, 0, 1.35, -1.6));
    for (const gx of [-0.2, 0, 0.2]) castleIsle.add(block(0.06, 0.95, 0.06, 0x9c92a8, gx, 1.35, -1.5));
    // small warning sign post
    castleIsle.add(block(0.1, 0.8, 0.1, 0x7a5c38, -2.9, 0.97, -0.5), block(0.85, 0.34, 0.1, 0xfff8ef, -2.9, 1.42, -0.48));
    this.label('Doubting Castle', CASTLE.x, CASTLE.z, 6.6);

    // ---------- Delectable Mountains ----------
    const mtnIsle = this.island(MOUNTAIN.x, MOUNTAIN.z, 4.2, 0x8fd06a);
    this.mound(mtnIsle, -1.9, -2.4, 1.9, 1.6, 2.7, 0xa9de88, 0x86bd78, 71);
    const peak = this.mound(mtnIsle, 0.4, -2.8, 2.0, 1.6, 4.0, 0xb9e79a, 0x8cc27c, 72);
    this.mound(mtnIsle, 2.3, -2.2, 1.6, 1.4, 2.3, 0xa9de88, 0x86bd78, 73);
    for (let i = 0; i < 7; i++) {
      const u = i / 6; const dx = Math.sin(u * 5) * 0.7 * (1 - u * 0.7); const dz = 1.4 * (1 - u * 0.95);
      mtnIsle.add(block(0.34, 0.09, 0.28, 0xf3e2bd, 0.4 + dx, peak(dx, dz) + 0.03, -2.8 + dz));
    }
    // the shepherds' glass on the summit
    const top = peak(0, 0);
    mtnIsle.add(block(0.1, 0.6, 0.1, 0x8d6848, 0.4, top + 0.25, -2.8));
    const glass = block(0.7, 0.2, 0.2, 0xd9ab50, 0.5, top + 0.62, -2.8);
    glass.rotation.z = 0.25;
    mtnIsle.add(glass);
    this.pool(mtnIsle, -2.0, 2.1, 1.3, 0.8, 74);
    for (const [sx, sz] of [[1.4, 1.5], [2.2, 2.1], [0.6, 2.2]] as const) {
      mtnIsle.add(block(0.5, 0.4, 0.4, 0xfffcf5, sx, 0.84, sz), block(0.24, 0.26, 0.24, 0x8f7560, sx + 0.32, 0.92, sz));
    }
    mtnIsle.add(this.miniTree(3.2, 0.9, true), this.miniTree(-3.4, 0.6));
    this.label('Delectable Mountains', MOUNTAIN.x, MOUNTAIN.z, 6.6);

    // ---------- Enchanted Ground ----------
    const enchIsle = this.island(ENCHANTED.x, ENCHANTED.z, 4.2, 0xe2cf8c);
    // drowsy golden meadow: swaying wheat with poppies through it
    const er = mapRng(77);
    for (let i = 0; i < 130; i++) {
      const a = er() * Math.PI * 2; const d = 0.8 + Math.sqrt(er()) * 3.0;
      const wx = Math.cos(a) * d; const wz = Math.sin(a) * d * 0.95;
      if (Math.abs(wz) < 0.75) continue;
      const h = 0.35 + er() * 0.4;
      const stalk = block(0.09, h, 0.09, er() < 0.5 ? 0xdcbc68 : 0xeacb7c, wx, 0.55 + h / 2, wz);
      stalk.rotation.z = (er() - 0.5) * 0.4;
      enchIsle.add(stalk);
      if (i % 5 === 0) enchIsle.add(block(0.22, 0.16, 0.22, [0xf09a94, 0xd9bdf0, 0xfff0bd][i % 3], wx, 0.62 + h, wz));
    }
    // two sleepers on a blanket, and a hammock tree
    enchIsle.add(block(1.5, 0.08, 1.0, 0xd8c8ea, 1.4, 0.62, -1.7), block(0.6, 0.26, 0.34, 0x9b8bb5, 1.2, 0.78, -1.85), block(0.28, 0.28, 0.28, 0xcfa27a, 0.8, 0.8, -1.85));
    enchIsle.add(block(0.6, 0.26, 0.34, 0xb58e74, 1.6, 0.78, -1.45), block(0.28, 0.28, 0.28, 0xe6cfb0, 2.0, 0.8, -1.45));
    enchIsle.add(this.miniTree(-2.4, -1.9, true), this.miniTree(2.9, 1.7), this.miniTree(-2.9, 1.5));
    this.label('Enchanted Ground', ENCHANTED.x, ENCHANTED.z, 4.6);

    // ---------- Beulah Land (in sight of the City) ----------
    const beuIsle = this.island(BEULAH.x, BEULAH.z, 4.2, 0xa5dc86);
    // the River winds across the land, with planks where the road meets it
    this.ribbon(beuIsle, [[0.7, -4.4], [1.3, -2.4], [0.3, -0.6], [0.9, 1.2], [0.0, 3.0], [0.6, 4.6]], 1.75, 0xd9f1f2, 0.6);
    this.ribbon(beuIsle, [[0.7, -4.4], [1.3, -2.4], [0.3, -0.6], [0.9, 1.2], [0.0, 3.0], [0.6, 4.6]], 1.4, 0x8dd0ea, 0.615);
    this.ribbon(beuIsle, [[0.7, -4.4], [1.3, -2.4], [0.3, -0.6], [0.9, 1.2], [0.0, 3.0], [0.6, 4.6]], 0.6, 0x62b2dd, 0.63);
    // Orchard and flower garden.
    for (const [tx, tz] of [[-2.6, -2.0], [-1.3, -2.7], [-3.1, 1.6], [2.9, -2.2], [3.0, 1.8]] as const) {
      beuIsle.add(this.miniTree(tx, tz, true));
    }
    for (let i = 0; i < 26; i++) {
      const fx = -3.2 + (i % 13) * 0.27; const fz = (i < 13 ? -1.15 : 1.25) + Math.sin(i * 2.1) * 0.22;
      beuIsle.add(block(0.07, 0.26, 0.07, 0x69a95b, fx, 0.68, fz), block(0.2, 0.15, 0.2, [0xffb3c6, 0xfff0a0, 0xcbdcff, 0xffffff][i % 4], fx, 0.86, fz));
    }
    // Two tiny white-robed angels wait on the far bank.
    for (const z of [-1.25, 1.1]) {
      beuIsle.add(block(0.44, 0.76, 0.36, 0xfffcf4, 2.5, 0.98, z), block(0.36, 0.36, 0.36, 0xf1d0b0, 2.5, 1.54, z), block(0.1, 0.1, 0.1, 0xffdf85, 2.5, 1.85, z));
      for (const side of [-1, 1]) beuIsle.add(block(0.34, 0.6, 0.08, 0xfff7df, 2.5 + side * 0.36, 1.15, z - 0.16));
    }
    this.label('Beulah Land', BEULAH.x, BEULAH.z, 4.6);

    // ---------- the Celestial City (journey's end) ----------
    const celIsle = this.island(CELESTIAL.x, CELESTIAL.z, 4.4, 0xf3e2b0);
    const shine = (w: number, h: number, d: number, color: number, x: number, y: number, z: number, lit = 0.35): void => {
      const b = block(w, h, d, color, x, y, z);
      b.material = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: lit, roughness: 0.7 });
      celIsle.add(b);
    };
    this.mound(celIsle, 0, -2.6, 3.6, 2.1, 1.2, 0xfbeec4, 0xe9d296, 81);
    ([[0, 5.2, -3.0], [-1.2, 3.9, -2.7], [1.2, 3.9, -2.7], [-2.3, 2.8, -2.4], [2.3, 2.8, -2.4]] as const).forEach(([x, h, z], i) => {
      shine(0.95, h, 0.95, i % 2 ? 0xffdf8c : 0xffe9a8, x, 0.9 + h / 2, z, 0.3);
      shine(1.15, 0.2, 1.15, 0xfff3cf, x, 0.95 + h, z, 0.4);
      shine(0.75, 0.32, 0.75, 0xf7bfae, x, 1.2 + h, z, 0.25);
      shine(0.42, 0.34, 0.42, 0xf7bfae, x, 1.5 + h, z, 0.25);
      shine(0.16, 0.4, 0.16, 0xfffbe6, x, 1.84 + h, z, 0.9);
      for (let k = 0; k < Math.floor(h) - 1; k++) shine(0.2, 0.34, 0.06, 0xfffef4, x, 1.6 + k * 0.85, z + 0.49, 0.9);
    });
    // the wall and the pearl gates, and shining steps down to the road
    for (const side of [-1, 1]) {
      shine(1.9, 1.3, 0.5, 0xffeec4, side * 1.95, 1.2, -1.25, 0.2);
      for (let k = 0; k < 3; k++) shine(0.36, 0.26, 0.54, 0xfff6dc, side * (1.3 + k * 0.62), 1.96, -1.25, 0.3);
      shine(0.6, 2.2, 0.6, 0xfff8ee, side * 0.85, 1.65, -1.2, 0.25);
      shine(0.78, 0.24, 0.78, 0xffe39a, side * 0.85, 2.86, -1.2, 0.4);
      shine(0.42, 1.5, 0.14, 0xfffdf8, side * 0.27, 1.35, -1.2, 0.5);
    }
    shine(1.4, 0.34, 0.56, 0xffe39a, 0, 2.66, -1.2, 0.4);
    shine(0.36, 0.36, 0.3, 0xfffbe6, 0, 3.0, -1.2, 0.9);
    for (let i = 0; i < 4; i++) celIsle.add(block(1.5 - i * 0.12, 0.1, 0.34, i % 2 ? 0xffefc6 : 0xffe4a6, 0, 0.6 + i * 0.06, -0.1 - i * 0.26));
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(3.4, 20, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff6cf, transparent: true, opacity: 0.2, depthWrite: false }),
    );
    halo.position.set(0, 3.2, -2.9);
    celIsle.add(halo);
    celIsle.add(this.miniTree(-3.4, 1.8, true), this.miniTree(3.3, 1.8, true));
    this.label('The Celestial City', CELESTIAL.x, CELESTIAL.z - 1.5, 7.9);

    // ---------- tiny chapter keepsakes ----------
    // These sit around the island edges so every stop has a readable story
    // clue without crowding Christian's road through the middle.
    const flowerPatch = (g: THREE.Group, color: number, x: number, z: number) => {
      for (let i = 0; i < 3; i++) {
        g.add(block(0.08, 0.28 + i * 0.04, 0.08, 0x72ad67, x + i * 0.24, 0.72, z + (i % 2) * 0.18));
        g.add(block(0.18, 0.14, 0.18, i === 1 ? 0xfff0a8 : color,
          x + i * 0.24, 0.91 + i * 0.02, z + (i % 2) * 0.18));
      }
    };
    const pebblePatch = (g: THREE.Group, color: number, x: number, z: number) => {
      g.add(block(0.42, 0.22, 0.34, color, x, 0.68, z));
      g.add(block(0.28, 0.17, 0.38, color, x + 0.5, 0.65, z + 0.18));
      g.add(block(0.2, 0.13, 0.22, color, x - 0.38, 0.64, z + 0.28));
    };
    flowerPatch(cod, PALETTE.flowerPink, -3.2, -1.0);
    pebblePatch(slough, 0x756551, 2.6, 1.9);
    flowerPatch(fork, PALETTE.flowerBlue, -1.1, 0.7);
    flowerPatch(mor, 0xb8dca8, 2.4, -0.2);
    flowerPatch(beyond, 0xd6e9ff, -2.5, -1.8);
    flowerPatch(crossIsle, 0xfff0a0, -2.5, -1.2);
    pebblePatch(hwy, 0xa89f92, -2.5, 1.8);
    flowerPatch(hillIsle, 0xf4c2d4, 2.3, -1.8);
    flowerPatch(palIsle, 0xe8d4f8, -2.7, 1.8);
    pebblePatch(valIsle, 0x696d62, 2.4, 1.8);
    pebblePatch(shIsle, 0x252a38, -2.5, 1.8);
    flowerPatch(vanIsle, 0xff9ec4, -2.5, 1.7);
    pebblePatch(lucIsle, 0xc2d6dd, 2.3, -1.8);
    pebblePatch(castleIsle, 0x5f5664, 2.4, -1.8);
    flowerPatch(mtnIsle, 0xfff0a0, 2.2, 1.8);
    flowerPatch(beuIsle, 0xffb3c6, -2.8, -1.6);
    flowerPatch(celIsle, 0xfff3b8, -2.7, 1.8);

    // A few unmistakable miniature story objects.
    // Slough bubbles and stepping stones.
    for (let i = 0; i < 3; i++) {
      slough.add(block(0.3, 0.07, 0.3, 0xb39a75, -0.65 + i * 0.65, 0.82, -0.15 + (i % 2) * 0.28));
    }
    // Two stone tablets beneath Mount Sinai.
    mor.add(block(0.42, 0.62, 0.12, 0xd8d4ce, -2.5, 0.95, -1.2));
    mor.add(block(0.42, 0.62, 0.12, 0xd8d4ce, -2.0, 0.95, -1.2));
    // Highway milestones.
    for (const mx of [-2.5, 2.5]) {
      hwy.add(block(0.3, 0.72, 0.3, 0xded7c9, mx, 0.96, 1.65));
      hwy.add(block(0.4, 0.16, 0.4, 0xc4baa8, mx, 1.34, 1.65));
    }
    // Palace banners, the Valley's dropped sword, and Shadow's safe lantern.
    for (const side of [-1, 1]) {
      palIsle.add(block(0.08, 1.1, 0.08, PALETTE.woodDark, side * 2.6, 1.1, -0.8));
      palIsle.add(block(0.42, 0.34, 0.06, side < 0 ? 0xf2b8cc : 0xb9d9f2, side * 2.4, 1.48, -0.8));
    }
    const sword = block(1.25, 0.1, 0.12, 0xd9e0e5, 1.45, 0.72, 1.55);
    sword.rotation.y = -0.55;
    valIsle.add(sword);
    shIsle.add(block(0.1, 0.9, 0.1, PALETTE.woodDark, 0, 1.05, 1.5));
    shIsle.add(block(0.3, 0.38, 0.3, 0xffe8a6, 0, 1.62, 1.5));
    // Colourful market wares and silver gems.
    for (let i = 0; i < 4; i++) {
      vanIsle.add(block(0.24, 0.2, 0.24, gaudy[(i + 1) % gaudy.length], 1.1 + i * 0.36, 0.72, 1.55));
      lucIsle.add(block(0.22, 0.22, 0.22, i % 2 ? 0xc9efff : 0xe7d7ff, -2.4 + i * 0.38, 0.75, 1.6));
    }
    // The Key of Promise outside Doubting Castle.
    castleIsle.add(block(0.72, 0.1, 0.12, 0xffd66b, 2.15, 0.75, 1.65));
    castleIsle.add(block(0.22, 0.28, 0.12, 0xffd66b, 2.52, 0.75, 1.65));
    // Pearl stepping stones and welcoming banners at journey's end.
    for (let i = 0; i < 4; i++) {
      beuIsle.add(block(0.4, 0.1, 0.9, i % 2 ? 0xd9b98b : 0xcda878, -0.15 + i * 0.44, 0.65, 0.45));
    }
    for (const side of [-1, 1]) {
      celIsle.add(block(0.1, 1.45, 0.1, 0xc69a52, side * 1.7, 1.28, -0.5));
      celIsle.add(block(0.55, 0.5, 0.08, side < 0 ? 0xf3c7dd : 0xc9dfff, side * 1.95, 1.82, -0.5));
    }

    // ---------- both roads: stones on land, plank bridges over water ----------
    this.buildRoad(this.mainCurve, 300);
    this.buildRoad(this.branchCurve, 26);

    // ---------- drifting clouds: layered pastel voxel clusters ----------
    for (let i = 0; i < 8; i++) {
      const c = this.makeCloud(i + 1);
      c.scale.setScalar(0.75 + (i % 3) * 0.22);
      c.position.set(-40 + i * 10.5, 7.2 + (i % 3) * 1.1, -11 - (i % 2) * 3.5);
      this.clouds.push(c);
      s.add(c);
    }
    [0xf2a7a0, 0x8fbfe0, 0xf5d27c].forEach((color, i) => {
      const b = this.makeBoat(color);
      b.position.set(-18 + i * 24, -1.05, 11 + i * 2);
      b.rotation.y = -0.2;
      this.boats.push(b);
      s.add(b);
    });

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
    this.dressContinent();

    // merge every static opaque mesh on the continent into one draw call;
    // animated pieces (party, clouds, birds, halos) stay separate
    const live = new Set<THREE.Object3D>([this.christian.root, ...this.followers.map((f) => f.root), ...this.clouds, ...this.boats, this.sun!, this.sun!.target, ...this.birds.map((b) => b.g), ...this.sunHalos]);
    const statics = new THREE.Group();
    for (const o of [...s.children]) if (!live.has(o) && (o as THREE.Mesh).isMesh || o.type === 'Group' && !live.has(o)) statics.add(o);
    s.add(statics);
    bakeStatic(statics);
  }

  // ---------- the continent: organic coastline with real island edges ----------
  private southCoast: (x: number) => number = () => 0;
  private coastEdges: (x: number) => [number, number] = () => [0, 0];
  private readonly WEST_TIP = -26.5;
  private readonly EAST_TIP = 130.5;

  private buildContinent(
    sections: ReadonlyArray<readonly [number, number, number]>,
    capes: ReadonlyArray<readonly [number, number, number, number]>,
  ): void {
    const s = this.scene;
    const raw = (x: number): number => {
      let z = -4;
      for (const [cx, depth, cz] of sections) if (Math.abs(x - cx) <= 5.9) z = Math.max(z, cz + depth / 2);
      for (const [cx, cz, w, d] of capes) if (Math.abs(x - cx) <= w / 2) z = Math.max(z, cz + d / 2);
      return z;
    };
    // smooth the stepped section outline, then add a gentle hand-made wobble
    const W = this.WEST_TIP; const E = this.EAST_TIP;
    this.southCoast = (x: number): number => {
      let sum = 0; let n = 0;
      for (let dx = -3; dx <= 3; dx += 0.75) { sum += raw(THREE.MathUtils.clamp(x + dx, W, E)); n++; }
      const wob = Math.sin(x * 0.53) * 0.35 + Math.sin(x * 1.37 + 1.2) * 0.18;
      return sum / n + wob;
    };
    const NORTH = -15.5;
    // 0..1 roundness near each tip (1 across the body of the island)
    const tipRound = (x: number): number => Math.sqrt(THREE.MathUtils.clamp(Math.min(x - W, E - x) / 7, 0, 1));
    const edges = (x: number, off: number): [number, number] => {
      const zS = this.southCoast(THREE.MathUtils.clamp(x, W, E));
      const mid = (NORTH + zS) / 2;
      const k = 0.18 + 0.82 * tipRound(THREE.MathUtils.clamp(x, W, E));
      return [mid - (mid - NORTH) * k - off, mid + (zS - mid) * k + off];
    };
    this.coastEdges = (x: number) => edges(x, 0);
    const outline = (off: number): THREE.Vector2[] => {
      const south: THREE.Vector2[] = []; const north: THREE.Vector2[] = [];
      const w = W - off; const e = E + off;
      for (let x = w; x <= e + 1e-6; x += 0.6) {
        const [zN, zS] = edges(x, off);
        south.push(new THREE.Vector2(x, -zS));
        north.push(new THREE.Vector2(x, -zN));
      }
      return [...south, ...north.reverse()];
    };
    const slab = (off: number, y0: number, y1: number, color: number, bevel = 0): THREE.Mesh => {
      const shape = new THREE.Shape(outline(off));
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: Math.max(0.01, y1 - y0 - bevel * 2), steps: 1, curveSegments: 1,
        bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2,
      });
      geo.rotateX(-Math.PI / 2);
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.95, flatShading: true }));
      m.position.y = y0 + bevel;
      m.receiveShadow = true;
      s.add(m);
      return m;
    };
    // shallows, beach and a foam line where the island meets the sea
    slab(2.4, -1.12, -1.09, 0xc9f2ee);
    slab(1.05, -1.11, -1.05, 0xf4e7c6);
    const foam = new THREE.Shape(outline(1.3));
    foam.holes.push(new THREE.Path(outline(1.05)));
    const foamGeo = new THREE.ShapeGeometry(foam, 1);
    foamGeo.rotateX(-Math.PI / 2);
    const foamMesh = new THREE.Mesh(foamGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, roughness: 0.5, depthWrite: false }));
    foamMesh.position.y = -1.04;
    s.add(foamMesh);
    // layered cliff: flared rock foot, soil, a pale sandy band, rounded grass lip
    slab(0.4, -1.1, -0.5, 0xc2a48c, 0.12);
    slab(0.12, -0.55, 0.08, 0xd6b996, 0.06);
    slab(0.0, 0.05, 0.34, 0xeedcb8, 0.05);
    slab(-0.08, 0.3, 0.5, 0xb9dea3, 0.1);
    // faceted pastel meadow on top, clipped inside the lip
    const terr = createTerrain({
      minX: W - 1, maxX: E + 1, minZ: NORTH, maxZ: 14, cell: 0.85, seed: 91,
      flat: () => 1, y: 0.535, // just proud of the grass lip beneath it
      grass: [0xabd98c, 0x9dcf80, 0xb8e29a, 0x92c676],
      // every chapter's country melts softly into its neighbours
      tint: (x, z, _y, c) => {
        for (const reg of REGIONS) {
          const dx = x - reg.c.x;
          if (Math.abs(dx) > 7) continue;
          const d = Math.hypot(dx, (z - reg.c.z) * 1.05) + Math.sin(x * 1.1 + z * 0.7) * 0.5 + Math.sin(z * 1.9 - x * 0.4) * 0.35;
          const k = 1 - THREE.MathUtils.smoothstep(d, 2.6, 5.4);
          if (k > 0) c.lerp(tmpTint.set(reg.color), k * reg.k);
        }
      },
    });
    const g = terr.mesh.geometry;
    const pos = g.getAttribute('position'); const col = g.getAttribute('color');
    const keepP: number[] = []; const keepC: number[] = [];
    const inside = (x: number, z: number) => {
      if (x < W + 0.5 || x > E - 0.5) return false;
      const [zN, zS] = edges(x, -0.45);
      return z > zN && z < zS;
    };
    for (let t = 0; t < pos.count; t += 3) {
      const cx = (pos.getX(t) + pos.getX(t + 1) + pos.getX(t + 2)) / 3;
      const cz = (pos.getZ(t) + pos.getZ(t + 1) + pos.getZ(t + 2)) / 3;
      if (!inside(cx, cz)) continue;
      for (let k = 0; k < 3; k++) {
        keepP.push(pos.getX(t + k), pos.getY(t + k), pos.getZ(t + k));
        keepC.push(col.getX(t + k), col.getY(t + k), col.getZ(t + k));
      }
    }
    const top = new THREE.BufferGeometry();
    top.setAttribute('position', new THREE.Float32BufferAttribute(keepP, 3));
    top.setAttribute('color', new THREE.Float32BufferAttribute(keepC, 3));
    top.computeVertexNormals();
    terr.mesh.geometry = top;
    s.add(terr.mesh);
    // shoreline boulders at the cliff foot
    const rocks = new THREE.Group();
    const rr = mapRng(7);
    for (let x = W + 1; x < E - 1; x += 2.2 + rr() * 2.5) {
      const rock = createRock({ seed: 40 + Math.round(x * 3), size: 0.25 + rr() * 0.35, color: rr() > 0.5 ? 0xc7c2bc : 0xb9b2a8 });
      rock.position.set(x, -1.05, this.coastEdges(x)[1] + 0.55 + rr() * 0.4);
      rocks.add(rock);
    }
    s.add(this.mergeByMaterial(rocks));
  }

  // chapter-style scenery shrunk to map scale, kept off the road and landmarks
  private dressContinent(): void {
    const r = mapRng(33);
    const road: THREE.Vector3[] = [
      ...this.mainCurve.getSpacedPoints(700), ...this.branchCurve.getSpacedPoints(80),
    ];
    const clear = (x: number, z: number): boolean => {
      if (z < -5 || x < this.WEST_TIP + 2 || x > this.EAST_TIP - 2) return false;
      const [zN, zS] = this.coastEdges(x);
      if (z > zS - 1.3 || z < zN + 1.3) return false;
      for (const p of road) if (Math.abs(p.x - x) < 1.3 && Math.hypot(p.x - x, p.z - z) < 1.25) return false;
      for (const isl of this.islands) {
        const d = Math.hypot(isl.position.x - x, isl.position.z - z);
        if (d < (isl.userData.r ?? 3) + 0.6) return false;
      }
      return true;
    };
    const group = new THREE.Group();
    const place = (obj: THREE.Object3D, scale: number, tries = 30): void => {
      for (let t = 0; t < tries; t++) {
        const x = this.WEST_TIP + r() * (this.EAST_TIP - this.WEST_TIP);
        const z = -5 + r() * 18;
        if (!clear(x, z)) continue;
        obj.scale.setScalar(scale);
        obj.position.set(x, 0.5, z);
        obj.rotation.y = r() * Math.PI * 2;
        group.add(obj);
        return;
      }
    };
    const LEAVES = [0x9fd48a, 0xb2e09a, 0x93c983];
    const BLOSSOM = [0xf6bccb, 0xfacdd8, 0xfde0e6];
    for (let k = 0; k < 120; k++) {
      const blossom = r() > 0.78;
      place(createTree({ seed: 900 + k, kind: blossom ? 'blossom' : 'leafy', leaves: blossom ? BLOSSOM : LEAVES, canopy: 1.5 + r() * 0.8 }), 0.26);
    }
    for (let k = 0; k < 46; k++) place(createPine({ seed: 1900 + k, colors: [0x8fb9a0, 0x9cc4ab, 0x86b198] }), 0.26);
    for (let k = 0; k < 70; k++) place(createBush({ seed: 2900 + k, flowers: r() > 0.5, colors: [0xa9d79a, 0xb7dfa6] }), 0.3);
    for (let k = 0; k < 24; k++) place(createRock({ seed: 3900 + k, size: 0.5 + r() * 0.5, moss: r() > 0.5 }), 0.35);
    // flower dots scattered through the meadows
    const petals = new THREE.Group();
    const FLOWERS = [0xfff1a8, 0xffd1e3, 0xd9e6ff, 0xffffff, 0xffd9b8];
    for (let k = 0; k < 620; k++) {
      const x = this.WEST_TIP + r() * (this.EAST_TIP - this.WEST_TIP);
      const z = -5 + r() * 18;
      if (!clear(x, z)) continue;
      const f = block(0.12, 0.1, 0.12, FLOWERS[k % FLOWERS.length], x, 0.56, z);
      f.castShadow = false;
      petals.add(f);
    }
    this.scene.add(this.mergeByMaterial(group));
    this.scene.add(petals); // plain blocks: folded into the static bake
  }

  /** Merge every mesh under `root` into one mesh per material (keeps vertex colours). */
  private mergeByMaterial(root: THREE.Object3D): THREE.Group {
    root.updateMatrixWorld(true);
    const buckets = new Map<THREE.Material, THREE.BufferGeometry[]>();
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh || Array.isArray(m.material)) return;
      let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      for (const name of Object.keys(g.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'color') g.deleteAttribute(name);
      }
      if (!g.getAttribute('normal')) g.computeVertexNormals();
      if (!g.getAttribute('color')) {
        const c = new THREE.Color((m.material as THREE.MeshStandardMaterial).color ?? 0xffffff);
        const n = g.getAttribute('position').count;
        const arr = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
        g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      }
      g = g.applyMatrix4(m.matrixWorld);
      const list = buckets.get(m.material) ?? [];
      list.push(g);
      buckets.set(m.material, list);
    });
    const out = new THREE.Group();
    for (const [material, geos] of buckets) {
      const merged = mergeGeometries(geos, false);
      if (!merged) continue;
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      out.add(mesh);
    }
    return out;
  }

  private nearLand(x: number, z: number): boolean {
    // The main continent follows the long east-west pilgrimage, with a wider
    // southern shoulder around Morality. Keep the individual chapter radii as
    // small coastal bulges so landmark edges always count as solid land.
    if (x >= -23 && x <= 126) {
      const centreZ = Math.sin((x + 12) * 0.055) * 0.45;
      const halfDepth = 6.0 + Math.sin((x + 5) * 0.11) * 0.8;
      if (Math.abs(z - centreZ) <= halfDepth) return true;
    }
    if (x >= 1 && x <= 16 && z >= 2.5 && z <= 11.5) return true;
    for (const region of ISLANDS) {
      if (Math.hypot(x - region.c.x, z - region.c.z) < region.r) return true;
    }
    return false;
  }

  // a worn sandy lane with a pale verge and scattered paving
  private buildRoad(curve: THREE.CatmullRomCurve3, segs: number): void {
    this.strip(this.scene, curve, segs, 1.2, 0xd6e0ab, 0.585, 0.1);
    this.strip(this.scene, curve, segs, 0.92, 0xf1dfb8, 0.6, 0.06);
    const r = mapRng(segs);
    const paving = [0xe3c99b, 0xf8ecd0, 0xdabd8d];
    for (let i = 1; i < segs; i++) {
      const p = curve.getPointAt(i / segs);
      const tan = curve.getTangentAt(i / segs);
      const side = (r() - 0.5) * 0.5;
      const stone = block(0.2 + r() * 0.14, 0.05, 0.18 + r() * 0.14, paving[i % 3], p.x - tan.z * side, 0.612, p.z + tan.x * side);
      stone.rotation.y = Math.atan2(tan.x, tan.z) + (r() - 0.5) * 0.6;
      stone.castShadow = false;
      this.scene.add(stone);
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

  /** The light and its shadows travel with the view. */
  private followSun(): void {
    if (!this.sun) return;
    const x = Math.round((5 + this.camPan) * 2) / 2; // whole steps keep shadow edges still
    this.sun.position.set(x - 14, 22, 14);
    this.sun.target.position.set(x, 0, 0);
  }

  private camPan = 0; // eastward pan as Christian travels past the classic islands

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    // On portrait screens follow a closer section of the journey rather than
    // shrinking the entire continent into the narrow width. Eastward progress
    // is already handled by camera panning.
    const z = THREE.MathUtils.clamp(38 / aspect - 1, 24, 42);
    this.camera.position.set(5.0 + this.camPan, z * 0.78, z + 2.2);
    this.camera.lookAt(5.0 + this.camPan, 0.4, 1.4);
    if (this.scene.fog instanceof THREE.Fog) {
      const narrowMap = aspect < 0.8;
      this.scene.fog.near = narrowMap ? 78 : 44;
      this.scene.fog.far = narrowMap ? 170 : 120;
    }
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
    if (Math.abs(this.progress - this.enchantedT) < 0.015) return 'enchanted';
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
          : this.enchantedDone
          ? this.beulahT + 0.01
          : this.mountainDone
          ? this.enchantedT + 0.01
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
    this.followSun();
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
      c.position.x += dt * 0.32; // one breeze, so they never bunch up
      // Recycle around the travelling camera so later chapter islands retain
      // the same cheerful cloud layer as the beginning of the map.
      if (c.position.x > this.camPan + 47) c.position.x -= 84;
      if (c.position.x < this.camPan - 37) c.position.x += 84;
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
    // Regional landmarks are rooted in one continent, so they no longer bob
    // independently like floating islands.
    for (let i = 0; i < this.sparkles.length; i++) {
      const sp = this.sparkles[i];
      (sp.material as THREE.MeshBasicMaterial).opacity =
        0.35 + 0.45 * Math.abs(Math.sin(t * 1.3 + i * 1.7));
    }
    for (let i = 0; i < this.boats.length; i++) {
      const b = this.boats[i];
      b.position.x += dt * (0.28 + i * 0.05);
      if (b.position.x > this.camPan + 42) b.position.x = this.camPan - 36;
      if (b.position.x < this.camPan - 44) b.position.x = this.camPan + 34;
      // keep clear of the headlands
      const shore = this.southCoast(THREE.MathUtils.clamp(b.position.x, this.WEST_TIP, this.EAST_TIP));
      b.position.z += (shore + 3.6 + i * 0.9 - b.position.z) * Math.min(1, dt * 0.5);
      b.position.y = -1.05 + Math.sin(t * 1.4 + i * 2) * 0.06;
      b.rotation.z = Math.sin(t * 1.1 + i) * 0.04;
    }
    if (this.sinaiGlow) {
      (this.sinaiGlow.material as THREE.MeshBasicMaterial).opacity =
        0.5 + 0.45 * Math.abs(Math.sin(t * 2.2));
    }
  }
}
