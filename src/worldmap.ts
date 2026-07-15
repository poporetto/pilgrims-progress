import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';

// The overworld: a miniature diorama of floating islands over pastel sea.
// Christian's mini walks a winding plank road City of Destruction → Slough
// of Despond → (a mist-wrapped island yet to be named); party members trail
// behind him.

export type MapSpot = 'city' | 'road' | 'slough' | 'beyond';

const CITY_X = -13;
const SLOUGH_X = 0;
const BEYOND_X = 13;

export class WorldMap {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  progress = 0.02; // 0 = City of Destruction, 0.5 = Slough, 1 = beyond
  sloughDone = false;
  private curve: THREE.CatmullRomCurve3;
  private christian: BearParts;
  private followers: BearParts[] = [];
  private clouds: THREE.Group[] = [];
  private islands: THREE.Group[] = [];
  private sparkles: THREE.Mesh[] = [];
  private mist: THREE.Mesh[] = [];
  private moving = false;
  private facing = 1;
  private built = false;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 200);
    this.resize(aspect);

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(CITY_X + 2, 0.62, 0.7),
      new THREE.Vector3(-8, 0.62, -1.2),
      new THREE.Vector3(-4, 0.62, 1.2),
      new THREE.Vector3(SLOUGH_X, 0.62, 0),
      new THREE.Vector3(4, 0.62, -1.2),
      new THREE.Vector3(8, 0.62, 1.2),
      new THREE.Vector3(BEYOND_X - 2, 0.62, 0.3),
    ]);

    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true, scale: 0.5,
    });
  }

  // ------------------------------------------------------------ helpers

  private label(text: string, x: number, y: number, color = '#5b4a3f'): void {
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
    sprite.position.set(x, y, 0);
    this.scene.add(sprite);
  }

  private island(x: number, w: number, d: number, top: number): THREE.Group {
    const g = new THREE.Group();
    // grassy lip slightly wider than the cliff
    g.add(block(w + 0.5, 0.5, d + 0.5, top, 0, 0.3, 0));
    g.add(block(w, 0.9, d, 0xd8c49a, 0, -0.25, 0)); // sandy cliff band
    g.add(block(w - 1.2, 1.0, d - 1.2, 0xb9977a, 0, -1.1, 0));
    g.add(block(w - 2.8, 1.0, d - 2.8, 0xa5825f, 0, -2.0, 0));
    g.add(block(w - 4.4, 0.8, d - 4.4, 0x93714f, 0, -2.8, 0));
    // hanging grass tufts over the lip
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      g.add(block(0.5, 0.3, 0.5, PALETTE.grassDark,
        Math.cos(a) * (w / 2 + 0.1), 0.12, Math.sin(a) * (d / 2 + 0.1)));
    }
    g.position.set(x, 0, 0);
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
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 20;
    sun.shadow.camera.top = 14;
    sun.shadow.camera.bottom = -14;
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
    const cod = this.island(CITY_X, 9, 7.5, PALETTE.grass);
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
    town.position.set(CITY_X - 0.9, 0, -0.3);
    cod.add(town);
    town.position.sub(new THREE.Vector3(CITY_X, 0, 0)); // keep local to island
    cod.add(this.miniTree(-3.4, 2.3, true));
    cod.add(this.miniTree(3.4, -2.4));
    cod.add(this.miniTree(2.9, 2.5, true));
    // flowers
    for (let i = 0; i < 8; i++) {
      const f = block(0.14, 0.14, 0.14, [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        -3.5 + Math.random() * 7, 0.62, -2.8 + Math.random() * 5.6);
      f.castShadow = false;
      cod.add(f);
    }
    this.label('City of Destruction', CITY_X, 4.4);

    // ---------- Slough of Despond island ----------
    const slough = this.island(SLOUGH_X, 8.5, 7.5, 0x9ec78f);
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
    // dead mini tree
    const dead = new THREE.Group();
    dead.add(block(0.18, 1.0, 0.18, 0x9a8f86, 0, 0.5, 0));
    dead.add(block(0.7, 0.14, 0.14, 0x9a8f86, 0.2, 0.95, 0));
    dead.add(block(0.14, 0.5, 0.14, 0x9a8f86, 0.55, 1.2, 0));
    dead.position.set(-3.2, 0.55, -2.2);
    slough.add(dead);
    this.label('Slough of Despond', SLOUGH_X, 4.4);

    // ---------- the misty island beyond ----------
    const beyond = this.island(BEYOND_X, 8, 7, 0x9ec7a8);
    beyond.add(this.miniTree(-2.6, 1.8));
    beyond.add(this.miniTree(2.8, -1.6, true));
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
      m.position.set(BEYOND_X - 3 + Math.random() * 6, 1.0 + Math.random() * 1.4, -2 + Math.random() * 4);
      m.castShadow = false;
      s.add(m);
      this.mist.push(m);
    }
    this.label('? ? ?', BEYOND_X, 4.4, '#8b9aa8');

    // ---------- the road: stones on land, plank bridges over water ----------
    for (let i = 0; i <= 64; i++) {
      const t = i / 64;
      const p = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const nearIsland = Math.min(
        Math.abs(p.x - CITY_X), Math.abs(p.x - SLOUGH_X), Math.abs(p.x - BEYOND_X),
      ) < 4.0;
      if (nearIsland) {
        const stone = block(0.5, 0.1, 0.6, PALETTE.path, p.x, p.y - 0.02, p.z);
        stone.rotation.y = Math.atan2(tan.x, tan.z) + Math.PI / 2;
        stone.castShadow = false;
        this.scene.add(stone);
      } else {
        const plank = block(0.5, 0.14, 1.1, PALETTE.wood, p.x, 0.5, p.z);
        plank.rotation.y = Math.atan2(tan.x, tan.z) + Math.PI / 2;
        plank.castShadow = false;
        this.scene.add(plank);
        // railings + posts
        if (i % 4 === 0) {
          this.scene.add(block(0.14, 2.0, 0.14, PALETTE.woodDark, p.x, -0.4, p.z + 0.62));
          this.scene.add(block(0.14, 2.0, 0.14, PALETTE.woodDark, p.x, -0.4, p.z - 0.62));
          this.scene.add(block(0.1, 0.5, 0.1, PALETTE.woodDark, p.x, 0.85, p.z + 0.58));
          this.scene.add(block(0.1, 0.5, 0.1, PALETTE.woodDark, p.x, 0.85, p.z - 0.58));
        }
      }
    }
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
    this.placeAt(this.christian.root, this.progress);
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
    // pull back on narrow screens so all three islands stay in frame
    const z = THREE.MathUtils.clamp(34 / aspect - 1, 17, 40);
    this.camera.position.set(0, z * 0.78, z);
    this.camera.lookAt(0, 0.6, 0);
    this.camera.updateProjectionMatrix();
  }

  spot(): MapSpot {
    if (this.progress < 0.07) return 'city';
    if (Math.abs(this.progress - 0.5) < 0.05) return 'slough';
    if (this.progress > 0.93) return 'beyond';
    return 'road';
  }

  private placeAt(obj: THREE.Object3D, t: number): void {
    const p = this.curve.getPointAt(THREE.MathUtils.clamp(t, 0, 1));
    const nearIsland = Math.min(
      Math.abs(p.x - CITY_X), Math.abs(p.x - SLOUGH_X), Math.abs(p.x - BEYOND_X),
    ) < 4.0;
    obj.position.set(p.x, nearIsland ? p.y : 0.57, p.z);
  }

  update(dt: number, t: number, axisX: number): void {
    if (!this.built) return;
    this.moving = Math.abs(axisX) > 0.15;
    if (this.moving) {
      const maxP = this.sloughDone ? 0.955 : 0.5;
      this.progress = THREE.MathUtils.clamp(this.progress + axisX * dt * 0.075, 0.02, maxP);
      this.facing = axisX > 0 ? 1 : -1;
    }

    this.placeAt(this.christian.root, this.progress);
    const tan = this.curve.getTangentAt(THREE.MathUtils.clamp(this.progress, 0, 1));
    this.christian.root.rotation.y = Math.atan2(tan.x * this.facing, tan.z * this.facing);
    animateBear(this.christian, t, this.moving);

    this.followers.forEach((f, i) => {
      const ft = this.progress - 0.045 * (i + 1) * this.facing;
      this.placeAt(f.root, ft);
      const ftan = this.curve.getTangentAt(THREE.MathUtils.clamp(ft, 0, 1));
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
  }
}
