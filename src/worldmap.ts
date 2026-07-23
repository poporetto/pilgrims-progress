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

  // A shallow regional terrain patch embedded in the shared continent. The
  // chapter landmarks remain grouped locally, but there is no island cliff.
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
    disc(r + 0.34, 0.12, PALETTE.grassDark, 0.48);
    disc(r + 0.18, 0.12, top, 0.54);
    // A few edge tufts soften the regional colour change without tracing a
    // complete circular rim that would make it read as another island.
    for (let i = 0; i < 4; i++) {
      const a = i * 1.67 + 0.45;
      g.add(block(0.38, 0.16, 0.38, PALETTE.grassDark,
        Math.cos(a) * (r - 0.15), 0.7, Math.sin(a) * (r - 0.15)));
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
    // Extend well beyond the final island in every direction. The earlier sea
    // ended almost exactly beneath the Celestial City, exposing an empty edge
    // as the camera panned through the final chapters.
    const sea = new THREE.Mesh(new THREE.BoxGeometry(380, 1, 190), mat(PALETTE.water));
    sea.position.set(45, -1.6, 0);
    sea.receiveShadow = true;
    s.add(sea);
    // Broad pastel bands give the enlarged ocean gentle voxel depth.
    for (const [z, color] of [[-28, 0x9dd6ed], [25, 0xb1e0f1]] as const) {
      const band = block(380, 0.04, 24, color, 45, -1.07, z);
      band.castShadow = false;
      s.add(band);
    }
    for (let i = 0; i < 110; i++) {
      const w = new THREE.Mesh(
        new THREE.BoxGeometry(0.5 + Math.random() * 0.9, 0.06, 0.16),
        new THREE.MeshBasicMaterial({ color: 0xe4f3fc, transparent: true, opacity: 0.8 }),
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
    for (let i = 0; i < coastSections.length; i++) {
      const [x, depth, z] = coastSections[i];
      const lower = block(11.2, 1.0, depth + 1.6, 0xb6926f, x, -0.35, z);
      lower.receiveShadow = true;
      s.add(lower);
      const soil = block(11.5, 0.38, depth + 0.8, 0xd3bd91, x, 0.28, z);
      soil.receiveShadow = true;
      s.add(soil);
      const grassColor = i < 5 ? 0x9fc98c : i < 10 ? 0x93c081 : 0x9bcd82;
      const top = block(11.7, 0.16, depth, grassColor, x, 0.43, z);
      top.receiveShadow = true;
      s.add(top);
    }
    // South-eastern bulge carries the Morality branch without making a
    // separate island, and a few voxel capes break up the long coastline.
    for (const [x, z, w, d, color] of [
      [8, 7.5, 12, 8, 0xa7d49a],
      [18, -6.4, 10, 4.5, 0x96c387],
      [48, 6.5, 12, 4.2, 0x9ac889],
      [88, -6.4, 11, 4.4, 0x91bf80],
      [108, 6.4, 12, 4.6, 0xa2d189],
    ] as const) {
      const cape = block(w, 0.4, d, color, x, 0.3, z);
      cape.receiveShadow = true;
      s.add(cape);
    }

    // ---------- northern alpine backdrop ----------
    // A continuous foothill shelf joins the range to the continent and removes
    // the strip of sea that previously showed between grass and mountain.
    for (let x = -19, i = 0; x <= 123; x += 10.8, i++) {
      const shelfDepth = 10.5 + (i % 3) * 0.8;
      const shelf = block(
        11.4, 0.62, shelfDepth,
        i % 2 ? 0x8fbb83 : 0x98c58a,
        x, 0.2, -9.1 - (i % 2) * 0.25,
      );
      shelf.receiveShadow = true;
      s.add(shelf);
      const shelfSoil = block(11.2, 0.72, shelfDepth + 0.5, 0xb6926f,
        x, -0.44, -9.1 - (i % 2) * 0.25);
      shelfSoil.receiveShadow = true;
      s.add(shelfSoil);
    }

    // A long range of faceted low-poly peaks frames the upper coastline. The
    // blue stone keeps it visually distant, while white angular caps make the
    // silhouette read immediately as friendly storybook Alps.
    const alpinePeak = (
      x: number, z: number, width: number, height: number,
      blue: number, snow: number,
    ) => {
      const peak = makeAlpineMountain({
        width, height, depth: width * 0.6, rock: blue, snow,
      });
      peak.position.set(x, 0, z);
      s.add(peak);
    };

    // Pale far peaks, followed by a slightly darker foreground ridge.
    for (let x = -24, i = 0; x <= 128; x += 8.2, i++) {
      alpinePeak(
        x, -14.5 - (i % 3) * 0.7,
        10.8 + (i % 4) * 0.75, 5.4 + (i % 5) * 0.55,
        i % 2 ? 0x9ebbd0 : 0xaac6d9, 0xf8fbf7,
      );
    }
    for (let x = -20, i = 0; x <= 125; x += 9.0, i++) {
      alpinePeak(
        x, -10.2 - (i % 2) * 0.55,
        11.0 + (i % 3) * 0.8, 4.3 + (i % 4) * 0.55,
        i % 2 ? 0x789db8 : 0x86abc4, 0xfffdf5,
      );
    }

    // Compact voxel conifers tie the mountain range into the continent.
    for (let x = -19, i = 0; x <= 123; x += 6.4, i++) {
      const pine = new THREE.Group();
      pine.add(block(0.18, 0.8, 0.18, 0x765d45, 0, 0.4, 0));
      pine.add(block(1.0, 0.42, 0.9, 0x527b69, 0, 0.82, 0));
      pine.add(block(0.74, 0.42, 0.7, 0x608b75, 0, 1.15, 0));
      pine.add(block(0.46, 0.4, 0.44, 0x719a80, 0, 1.47, 0));
      pine.position.set(x, 0.5, -6.1 - (i % 3) * 0.45);
      pine.scale.setScalar(0.72 + (i % 2) * 0.12);
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
    // Plain of Ease in front, with a stepped silver hill rising sharply behind.
    lucIsle.add(block(3.8, 0.12, 1.5, 0x86c6e6, -0.4, 0.64, 1.8));
    lucIsle.add(block(2.8, 0.08, 0.8, 0xb9e2f0, -0.4, 0.72, 1.8));
    lucIsle.add(block(3.4, 0.7, 2.7, 0x9aa4b2, -0.55, 0.95, -0.9));
    lucIsle.add(block(2.5, 0.75, 2.1, 0x8995a5, -0.25, 1.67, -1.0));
    lucIsle.add(block(1.65, 0.78, 1.5, 0xaab7c7, 0.05, 2.42, -1.05));
    lucIsle.add(block(0.85, 0.7, 0.85, 0xc3ced8, -0.1, 3.12, -1.0));
    // Blocky silver seams make the temptation visible from map scale.
    lucIsle.add(block(0.18, 1.2, 0.12, 0xe8f3f6, -1.05, 1.75, 0.48));
    lucIsle.add(block(0.16, 0.85, 0.12, 0xd7edf2, 0.62, 2.4, -0.25));
    const mineGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.8, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xb8e8c9 }),
    );
    mineGlow.position.set(-0.6, 0.95, 0.25);
    lucIsle.add(mineGlow);
    // the King's road passes safely between the water and the mine.
    for (let i = 0; i < 7; i++) {
      lucIsle.add(block(0.48, 0.1, 0.72, i % 2 ? 0xd9c9a8 : 0xe5d6b7,
        -1.45 + i * 0.5, 0.66, 0.85 + Math.sin(i) * 0.12));
    }
    // Lot's wife: the little pillar of salt at the roadside.
    lucIsle.add(block(0.3, 0.8, 0.3, 0xf4f0e8, 2.2, 1.0, 0.7));
    lucIsle.add(block(0.24, 0.24, 0.2, 0xf4f0e8, 2.24, 1.5, 0.7));
    lucIsle.add(this.miniTree(-2.6, 1.8, true));
    this.label('Hill Lucre', LUCRE.x, LUCRE.z, 5.0);

    // ---------- Doubting Castle island ----------
    const castleIsle = this.island(CASTLE.x, CASTLE.z, 4.0, 0x9ecf8c);
    // The rough King's Highway and the inviting green Bypath split visibly.
    for (let i = 0; i < 7; i++) {
      castleIsle.add(block(0.48, 0.1, 0.64, i % 2 ? 0xb0a18a : 0xc3b395,
        -1.6 + i * 0.52, 0.65, 1.45));
      castleIsle.add(block(0.5, 0.08, 0.5, 0x79c266,
        -1.45 + i * 0.48, 0.65, 0.78 - i * 0.2));
    }
    // dark stone towers — the castle looming beyond the pleasant meadow
    const castleC = 0x4a4250;
    castleIsle.add(block(2.7, 1.7, 1.55, 0x595166, 0, 1.45, -1.05));
    castleIsle.add(block(1.15, 2.9, 1.15, castleC,  1.0, 2.0, -1.05));
    castleIsle.add(block(1.15, 2.6, 1.15, castleC, -1.0, 1.85, -1.05));
    for (const tx of [-1.15, -0.38, 0.38, 1.15]) {
      castleIsle.add(block(0.36, 0.45, 0.42, 0x3a3248, tx, 2.55, -0.98));
    }
    // Tiny barred gate and violet windows.
    castleIsle.add(block(0.58, 0.9, 0.12, 0x201b25, 0, 1.05, -0.22));
    for (const side of [-1, 1]) {
      castleIsle.add(block(0.18, 0.42, 0.08, 0xa58bb5, side * 0.82, 1.9, -0.45));
    }
    // small warning sign post
    castleIsle.add(block(0.1, 0.7, 0.1, 0x7a5c38, -1.4, 0.97, 1.2));
    castleIsle.add(block(0.8, 0.2, 0.08, 0xfff8ef, -1.4, 1.4, 1.2));
    this.label('Doubting Castle', CASTLE.x, CASTLE.z, 5.2);

    // ---------- Delectable Mountains island ----------
    const mtnIsle = this.island(MOUNTAIN.x, MOUNTAIN.z, 4.2, 0x8fd06a);
    // Animal-Crossing-like grassy terraces with warm rock faces, matching the
    // chapter's climb rather than generic needle-shaped mountains.
    mtnIsle.add(block(4.4, 0.65, 3.2, 0xb7a287, 0, 0.88, -0.55));
    mtnIsle.add(block(4.0, 0.32, 2.9, 0x83c665, 0, 1.34, -0.55));
    mtnIsle.add(block(3.0, 0.65, 2.1, 0xa9957d, 0.25, 1.72, -0.8));
    mtnIsle.add(block(2.7, 0.3, 1.9, 0x91d172, 0.25, 2.18, -0.8));
    mtnIsle.add(block(1.6, 0.62, 1.2, 0x9b8974, 0.2, 2.55, -0.95));
    mtnIsle.add(block(1.4, 0.28, 1.05, 0xa0db83, 0.2, 2.98, -0.95));
    // Tiny lookout path climbing across the terraces.
    for (let i = 0; i < 5; i++) {
      mtnIsle.add(block(0.45, 0.09, 0.38, 0xeed9b4,
        -1.1 + i * 0.5, 1.42 + i * 0.38, 0.55 - i * 0.35));
    }
    // a tiny fruit tree, blue lake, and shepherd's crook
    mtnIsle.add(this.miniTree(1.9, 0.6, false));
    mtnIsle.add(block(1.6, 0.08, 1.0, 0x8fd0ea, -1.6, 0.6, 1.2)); // lake
    mtnIsle.add(block(0.1, 1.1, 0.1, 0x8d6848, 2.65, 1.15, 0.55));
    mtnIsle.add(block(0.5, 0.1, 0.1, 0x8d6848, 2.43, 1.67, 0.55));
    this.label('Delectable Mountains', MOUNTAIN.x, MOUNTAIN.z, 5.4);

    // ---------- Beulah Land island (the finale, in sight of the City) ----------
    const beuIsle = this.island(BEULAH.x, BEULAH.z, 4.2, 0x9ed67e);
    // Lush gardens and a layered River match Chapter XV itself; the City is
    // reserved for the next island so Beulah has its own visual identity.
    beuIsle.add(block(4.8, 0.08, 1.8, 0x9ddcf0, 0.2, 0.63, 0.15));
    beuIsle.add(block(3.2, 0.09, 1.45, 0x69b8df, 0.2, 0.67, 0.15));
    beuIsle.add(block(1.45, 0.1, 1.25, 0x355da4, 0.2, 0.71, 0.15));
    // Divided wooden planks lead toward the crossing.
    for (let i = 0; i < 6; i++) {
      beuIsle.add(block(0.48, 0.13, 0.72, i % 2 ? 0xd9b98b : 0xcda878,
        -2.3 + i * 0.48, 0.72, 1.15 + Math.sin(i * 0.8) * 0.12));
    }
    // Orchard and flower garden.
    beuIsle.add(this.miniTree(-2.45, -1.25, true));
    beuIsle.add(this.miniTree(2.35, -1.45, true));
    for (let i = 0; i < 9; i++) {
      const fx = -2.2 + (i % 5) * 1.05;
      const fz = -0.95 + Math.floor(i / 5) * 0.45;
      beuIsle.add(block(0.08, 0.28, 0.08, 0x69a95b, fx, 0.76, fz));
      beuIsle.add(block(0.2, 0.16, 0.2, [0xffb3c6, 0xfff0a0, 0xcbdcff][i % 3], fx, 0.96, fz));
    }
    // Two tiny white-robed angels wait in one row on the far bank.
    for (const z of [-0.62, 0.72]) {
      beuIsle.add(block(0.42, 0.72, 0.35, 0xfffcf4, 2.65, 1.02, z));
      beuIsle.add(block(0.35, 0.35, 0.35, 0xf1d0b0, 2.65, 1.55, z));
      beuIsle.add(block(0.12, 0.58, 0.38, 0xfff7df, 2.45, 1.2, z));
    }
    this.label('Beulah Land', BEULAH.x, BEULAH.z, 5.4);

    // ---------- the Celestial City island (journey's end) ----------
    const celIsle = this.island(CELESTIAL.x, CELESTIAL.z, 4.4, 0xf0d894);
    // A stepped shining hill leads clearly upward into the Pearl Gates.
    for (let i = 0; i < 6; i++) {
      celIsle.add(block(0.72, 0.18 + i * 0.04, 1.25,
        i % 2 ? 0xffe5a3 : 0xffefbf, -2.45 + i * 0.65, 0.69 + i * 0.13, 1.35 - i * 0.18));
    }
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
    // the pearl gates at the front, with pillars, pearls, and an arch.
    for (const side of [-1, 1]) {
      celIsle.add(block(0.52, 2.55, 0.52, 0xfdf8f0, side * 0.9, 1.87, 1.3));
      celIsle.add(block(0.68, 0.28, 0.68, 0xffe7a0, side * 0.9, 3.25, 1.3));
      for (let p = 0; p < 3; p++) {
        celIsle.add(block(0.18, 0.18, 0.18, 0xffffff, side * 0.9, 1.05 + p * 0.62, 1.61));
      }
    }
    celIsle.add(block(2.45, 0.42, 0.52, 0xffe08a, 0, 3.12, 1.3));
    celIsle.add(block(1.15, 1.8, 0.18, 0xfff4d0, 0, 1.62, 1.52));
    // A tiny radiant throne silhouette at the heart of the City.
    const throne = block(0.72, 1.15, 0.62, 0xffcf62, 0.1, 1.35, -0.05);
    const throneMat = throne.material as THREE.MeshLambertMaterial;
    throneMat.emissive = new THREE.Color(0xffd76a);
    throneMat.emissiveIntensity = 0.75;
    celIsle.add(throne);
    celIsle.add(block(1.1, 0.2, 0.82, 0xfff0a8, 0.1, 0.78, -0.05));
    this.label('The Celestial City', CELESTIAL.x, CELESTIAL.z, 5.6);

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
    // A rolled promise beside the Cross.
    crossIsle.add(block(0.62, 0.12, 0.28, 0xfff5dc, 2.2, 0.72, -1.5));
    crossIsle.add(block(0.12, 0.18, 0.34, PALETTE.robeGold, 2.5, 0.76, -1.5));
    // Highway milestones.
    for (const mx of [-2.5, 2.5]) {
      hwy.add(block(0.3, 0.72, 0.3, 0xded7c9, mx, 0.96, 1.65));
      hwy.add(block(0.4, 0.16, 0.4, 0xc4baa8, mx, 1.34, 1.65));
    }
    // Palace banners, the Valley's dropped sword, and Shadow's safe lantern.
    for (const side of [-1, 1]) {
      palIsle.add(block(0.08, 1.1, 0.08, PALETTE.woodDark, side * 2.35, 1.2, -1.3));
      palIsle.add(block(0.42, 0.34, 0.06, side < 0 ? 0xf2b8cc : 0xb9d9f2, side * 2.15, 1.62, -1.3));
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
    // One little sheep on the Delectable Mountains.
    mtnIsle.add(block(0.62, 0.42, 0.42, 0xfffcf5, 2.45, 0.86, -1.25));
    mtnIsle.add(block(0.32, 0.34, 0.3, 0xd2b08a, 2.78, 0.94, -1.25));
    // Pearl stepping stones and welcoming banners at journey's end.
    for (let i = 0; i < 4; i++) {
      beuIsle.add(block(0.34, 0.08, 0.42, 0xf7e9ca, -0.6 + i * 0.42, 0.72, 0.3));
    }
    for (const side of [-1, 1]) {
      celIsle.add(block(0.1, 1.45, 0.1, 0xc69a52, side * 2.35, 1.28, 0.65));
      celIsle.add(block(0.55, 0.5, 0.08, side < 0 ? 0xf3c7dd : 0xc9dfff, side * 2.08, 1.82, 0.65));
    }

    // ---------- both roads: stones on land, plank bridges over water ----------
    this.buildRoad(this.mainCurve, 86);
    this.buildRoad(this.branchCurve, 26);

    // ---------- drifting clouds: layered pastel voxel clusters ----------
    const cloudColors = [0xffffff, 0xf7fbff, 0xe9f3ff];
    for (let i = 0; i < 10; i++) {
      const c = new THREE.Group();
      const puff = (w: number, h: number, d: number, px: number, py: number, pz: number, shade: number) => {
        const p = block(w, h, d, cloudColors[shade], px, py, pz);
        p.castShadow = false;
        c.add(p);
      };
      puff(2.1, 0.65, 1.0, 0, 0, 0, 1);
      puff(1.25, 0.75, 1.05, -1.25, 0.08, 0.04, 0);
      puff(1.35, 0.9, 1.1, 1.15, 0.14, 0.02, 0);
      puff(0.95, 0.75, 0.9, -0.38, 0.62, 0.02, 0);
      puff(0.82, 0.58, 0.82, 0.55, 0.56, 0.08, 0);
      puff(2.6, 0.22, 0.86, 0, -0.42, 0.05, 2);
      c.scale.setScalar(0.8 + Math.random() * 0.55);
      c.position.set(-28 + i * 17 + Math.random() * 5, 6.2 + Math.random() * 2.8, -7 - Math.random() * 5);
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
      // Recycle around the travelling camera so later chapter islands retain
      // the same cheerful cloud layer as the beginning of the map.
      if (c.position.x > this.camPan + 42) c.position.x = this.camPan - 42;
      if (c.position.x < this.camPan - 46) c.position.x = this.camPan + 38;
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
