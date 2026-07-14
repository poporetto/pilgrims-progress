import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';

// The overworld: a miniature diorama of floating islands over pastel water.
// Christian's mini walks a winding plank path from the City of Destruction
// toward the Slough of Despond; party members trail behind him.

export type MapSpot = 'city' | 'road' | 'slough';

export class WorldMap {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  progress = 0; // 0 = City of Destruction, 1 = Slough of Despond
  private curve: THREE.CatmullRomCurve3;
  private christian: BearParts;
  private followers: BearParts[] = [];
  private clouds: THREE.Group[] = [];
  private moving = false;
  private facing = 1;
  private built = false;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.resize(aspect);

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6.4, 0.62, 0.8),
      new THREE.Vector3(-3, 0.62, -0.9),
      new THREE.Vector3(0, 0.62, 1.1),
      new THREE.Vector3(3, 0.62, -0.7),
      new THREE.Vector3(6.4, 0.62, 0.2),
    ]);

    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true, scale: 0.5,
    });
  }

  // build lazily so village load stays fast
  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xbfe0f5);

    s.add(new THREE.HemisphereLight(0xe8f4ff, 0xbcd9ea, 1.0));
    const sun = new THREE.DirectionalLight(PALETTE.sun, 1.4);
    sun.position.set(-8, 14, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -16;
    sun.shadow.camera.right = 16;
    sun.shadow.camera.top = 12;
    sun.shadow.camera.bottom = -12;
    s.add(sun);

    // pastel sea below everything
    const sea = new THREE.Mesh(new THREE.BoxGeometry(240, 1, 160), mat(PALETTE.water));
    sea.position.y = -1.6;
    sea.receiveShadow = true;
    s.add(sea);
    s.fog = new THREE.Fog(0xbfe0f5, 30, 90);
    // little wave sparkles
    for (let i = 0; i < 24; i++) {
      const w = block(0.6 + Math.random(), 0.06, 0.18, 0xd6ecfa,
        (Math.random() - 0.5) * 46, -1.04, (Math.random() - 0.5) * 26);
      w.castShadow = false;
      s.add(w);
    }

    // ---------- island helper ----------
    const island = (x: number, w: number, d: number, top: number) => {
      const g = new THREE.Group();
      g.add(block(w, 1.2, d, top, 0, 0, 0));
      g.add(block(w - 1, 1.0, d - 1, 0xb9977a, 0, -1.0, 0)); // earthy underside
      g.add(block(w - 2.4, 0.9, d - 2.4, 0xa5825f, 0, -1.8, 0));
      g.position.set(x, 0, 0);
      s.add(g);
      return g;
    };

    // ---------- City of Destruction island ----------
    const cod = island(-9, 8.5, 7, PALETTE.grass);
    // tiny walled town
    const town = new THREE.Group();
    const miniHouse = (hx: number, hz: number, roof: number) => {
      town.add(block(0.9, 0.7, 0.8, PALETTE.wallCream, hx, 0.95, hz));
      town.add(block(1.05, 0.35, 0.95, roof, hx, 1.45, hz));
    };
    miniHouse(-0.9, -0.5, PALETTE.roofPink);
    miniHouse(0.3, -1.1, PALETTE.roofMint);
    miniHouse(0.6, 0.4, PALETTE.roofLilac);
    miniHouse(-0.4, 0.9, PALETTE.roofPeach);
    // mini white wall ring
    const ring = [
      [-1.9, 0, 0.25, 2.6], [1.9, 0, 0.25, 2.6], [0, -1.75, 3.6, 0.25], [0, 1.75, 3.6, 0.25],
    ] as const;
    for (const [wx, wz, ww, wd] of ring) {
      town.add(block(ww, 0.55, wd, 0xf7f3ea, wx, 0.85, wz));
    }
    town.position.set(-9.6, 0, -0.4);
    s.add(town);
    // cracked ground details
    s.add(block(0.7, 0.15, 0.5, PALETTE.stone, -7, 0.65, 2.2));
    s.add(block(0.5, 0.12, 0.4, 0xc4beb5, -10.8, 0.65, 1.8));

    // ---------- Slough of Despond island ----------
    const slough = island(9, 8, 7, 0x9ec78f);
    void slough;
    // the murky bog
    const bog = new THREE.Group();
    bog.add(block(3.6, 0.16, 2.8, 0x8a7355, 0, 0.62, 0));
    bog.add(block(2.6, 0.18, 1.9, 0x6f5a42, 0, 0.68, 0.1));
    bog.add(block(0.5, 0.12, 0.5, 0x8a7355, -1.6, 0.66, 1.2));
    bog.add(block(0.4, 0.1, 0.4, 0x6f5a42, 1.8, 0.66, -1.1));
    // bubbles + reeds
    bog.add(block(0.16, 0.16, 0.16, 0xa79272, 0.4, 0.82, 0.3));
    bog.add(block(0.12, 0.12, 0.12, 0xa79272, -0.6, 0.8, -0.4));
    for (const [rx, rz] of [[-1.9, -0.9], [1.7, 1.1], [2.1, 0.2], [-1.4, 1.4]] as const) {
      bog.add(block(0.1, 0.9, 0.1, 0x7ba05f, rx, 1.0, rz));
      bog.add(block(0.16, 0.3, 0.16, 0xc9a865, rx, 1.5, rz));
    }
    bog.position.set(9.3, 0, 0.1);
    s.add(bog);
    // warning sign
    const sign = new THREE.Group();
    sign.add(block(0.12, 1.1, 0.12, PALETTE.woodDark, 0, 0.55, 0));
    sign.add(block(1.1, 0.55, 0.1, PALETTE.wood, 0, 1.1, 0));
    sign.position.set(6.7, 0.6, 1.6);
    sign.rotation.y = -0.4;
    s.add(sign);

    // ---------- plank path between the islands ----------
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const p = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      // over open water the planks become a little bridge
      const overWater = Math.abs(p.x) < 4.6;
      const plank = block(0.55, 0.14, 0.8, overWater ? PALETTE.wood : PALETTE.path, p.x, overWater ? 0.5 : p.y - 0.04, p.z);
      plank.rotation.y = Math.atan2(tan.x, tan.z) + Math.PI / 2;
      plank.castShadow = false;
      s.add(plank);
      if (overWater && i % 6 === 0) {
        s.add(block(0.18, 1.6, 0.18, PALETTE.woodDark, p.x, -0.3, p.z + 0.5));
        s.add(block(0.18, 1.6, 0.18, PALETTE.woodDark, p.x, -0.3, p.z - 0.5));
      }
    }

    // ---------- drifting clouds ----------
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Group();
      c.add(block(1.6, 0.5, 0.9, 0xffffff, 0, 0, 0));
      c.add(block(1.0, 0.45, 0.7, 0xffffff, 0.9, 0.2, 0.1));
      c.add(block(0.8, 0.4, 0.6, 0xffffff, -0.8, 0.15, -0.1));
      c.position.set((Math.random() - 0.5) * 30, 5.5 + i * 1.1, -4 - i * 1.5);
      c.traverse((o) => { if ((o as THREE.Mesh).isMesh) o.castShadow = false; });
      this.clouds.push(c);
      s.add(c);
    }

    // travellers
    this.scene.add(this.christian.root);
    this.placeAt(this.christian.root, 0);
  }

  start(party: Array<'pliable'>): void {
    this.build();
    this.progress = 0.02;
    // (re)create follower minis to match the party
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
    // pull the camera back on narrow screens so both islands stay in frame
    const z = THREE.MathUtils.clamp(28 / aspect - 1, 14.5, 32);
    this.camera.position.set(0, z * 0.82, z);
    this.camera.lookAt(0, 0.3, 0);
    this.camera.updateProjectionMatrix();
  }

  spot(): MapSpot {
    if (this.progress < 0.08) return 'city';
    if (this.progress > 0.92) return 'slough';
    return 'road';
  }

  private placeAt(obj: THREE.Object3D, t: number): void {
    const p = this.curve.getPointAt(THREE.MathUtils.clamp(t, 0, 1));
    const overWater = Math.abs(p.x) < 4.6;
    obj.position.set(p.x, overWater ? 0.57 : p.y, p.z);
  }

  update(dt: number, t: number, axisX: number): void {
    if (!this.built) return;
    this.moving = Math.abs(axisX) > 0.15;
    if (this.moving) {
      this.progress = THREE.MathUtils.clamp(this.progress + axisX * dt * 0.09, 0.02, 0.96);
      this.facing = axisX > 0 ? 1 : -1;
    }

    this.placeAt(this.christian.root, this.progress);
    const tan = this.curve.getTangentAt(THREE.MathUtils.clamp(this.progress, 0, 1));
    this.christian.root.rotation.y = Math.atan2(tan.x * this.facing, tan.z * this.facing);
    animateBear(this.christian, t, this.moving);

    this.followers.forEach((f, i) => {
      const ft = this.progress - 0.055 * (i + 1) * this.facing;
      this.placeAt(f.root, ft);
      const ftan = this.curve.getTangentAt(THREE.MathUtils.clamp(ft, 0, 1));
      f.root.rotation.y = Math.atan2(ftan.x * this.facing, ftan.z * this.facing);
      animateBear(f, t + 0.4 * (i + 1), this.moving);
    });

    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      c.position.x += dt * (0.25 + i * 0.08);
      if (c.position.x > 20) c.position.x = -20;
    }
  }
}
