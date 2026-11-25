// Effects for the duel with Apollyon: the crescent blade beam, the fireball
// with its burning trail, and the bursts where they land.
import * as THREE from 'three';

/** A tapered crescent in the local YZ plane, its belly leading along +Z. */
function crescent(radius: number, thickness: number, spread = 1.32, segments = 18): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const at = (i: number): number => -spread + (2 * spread * i) / segments;
  for (let i = 0; i <= segments; i++) {
    const a = at(i);
    if (i === 0) shape.moveTo(Math.cos(a) * radius, Math.sin(a) * radius);
    else shape.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
  }
  for (let i = segments - 1; i > 0; i--) {
    const a = at(i);
    const r = radius - thickness * Math.pow(Math.cos((a / spread) * Math.PI * 0.5), 0.85);
    shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  const g = new THREE.ShapeGeometry(shape);
  g.translate(-radius * 0.6, 0, 0);
  g.rotateY(-Math.PI / 2);
  return g;
}

function glow(color: number, additive: boolean): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, toneMapped: false, fog: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}

export class BladeBeam {
  readonly root = new THREE.Group();
  private layers: Array<{ m: THREE.MeshBasicMaterial; peak: number }> = [];
  private ghosts: THREE.Mesh[] = [];
  private tint: THREE.MeshBasicMaterial[] = [];

  constructor() {
    const add = (g: THREE.BufferGeometry, color: number, additive: boolean, peak: number, z: number, order: number, scale = 1): THREE.Mesh => {
      const m = glow(color, additive);
      const mesh = new THREE.Mesh(g, m);
      mesh.position.z = z;
      mesh.scale.setScalar(scale);
      mesh.renderOrder = order;
      this.layers.push({ m, peak });
      this.root.add(mesh);
      return mesh;
    };
    const body = crescent(2, 0.85);
    // afterimages falling behind the cut
    for (let k = 3; k >= 1; k--) {
      const ghost = add(body, 0x6fc2ff, true, 0.42 - k * 0.1, -0.55 * k, 5, 1 - k * 0.11);
      this.ghosts.push(ghost);
      this.tint.push(ghost.material as THREE.MeshBasicMaterial);
    }
    const aura = add(crescent(2.22, 1.35), 0x58b4ff, true, 0.5, 0, 6);
    const edge = add(body, 0x8fd4ff, false, 0.85, 0, 7);
    add(crescent(1.96, 0.4), 0xffffff, false, 1, 0.02, 8); // the white-hot edge
    this.tint.push(aura.material as THREE.MeshBasicMaterial, edge.material as THREE.MeshBasicMaterial);
    this.root.visible = false;
  }

  /** spirit: the blazing blue of the Sword of the Spirit, else pale steel */
  start(spirit: boolean): void {
    this.tint.forEach((m, i) => m.color.set(spirit ? (i === 4 ? 0x6cc4ff : 0x2f8dff) : (i === 4 ? 0xcfe6f7 : 0x8fb4d4)));
    this.root.visible = true;
    this.update(0, spirit);
  }

  /** u runs 0..1 over the flight */
  update(u: number, spirit: boolean): void {
    const born = Math.min(1, u / 0.18);
    const s = (spirit ? 1.12 : 0.88) * (0.55 + 0.45 * born + u * 0.22);
    this.root.scale.setScalar(s);
    for (const l of this.layers) l.m.opacity = l.peak * born;
    this.ghosts.forEach((g, i) => { g.position.z = -0.6 * (3 - i) * Math.min(1, u * 2.5); });
  }

  stop(): void { this.root.visible = false; }
}

interface Bit { mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; speed: number; v: THREE.Vector3; size: number; grow: number; drag: number; lift: number; from: THREE.Color; to: THREE.Color; spin: number }

const bitGeo = new THREE.BoxGeometry(1, 1, 1);
const FIRE_HOT = new THREE.Color(0xffe08a);
const FIRE = new THREE.Color(0xff7a26);
const FIRE_DARK = new THREE.Color(0x7d1d12);
const SMOKE = new THREE.Color(0x3a2f33);

export class FireFx {
  readonly root = new THREE.Group();
  readonly ball = new THREE.Group();
  private shells: THREE.Mesh[] = [];
  private bits: Bit[] = [];
  private next = 0;
  private trail = 0;
  private rings: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; size: number }> = [];
  private flash: THREE.Mesh;
  private flashM: THREE.MeshBasicMaterial;
  private flashLife = 1;
  private flashSize = 1;
  private light = new THREE.PointLight(0xff8a3c, 0, 11);
  private lightKick = 0;

  constructor() {
    // the fireball: turning cubes of flame round a white-hot heart
    for (const [size, color, opacity] of [[1.0, 0xc92a14, 0.9], [0.84, 0xff6a1c, 1], [0.6, 0xffb638, 1], [0.36, 0xfff7d6, 1]] as const) {
      const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, toneMapped: false, depthWrite: false, fog: false });
      const mesh = new THREE.Mesh(bitGeo, m);
      mesh.scale.setScalar(size);
      mesh.rotation.set(size * 3, size * 5, 0);
      mesh.renderOrder = 10 + (1 - size) * 10; // the heart always shows through the flame
      this.shells.push(mesh);
      this.ball.add(mesh);
    }
    this.ball.visible = false;
    this.root.add(this.ball, this.light);
    for (let i = 0; i < 110; i++) {
      const m = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, toneMapped: false, fog: false });
      const mesh = new THREE.Mesh(bitGeo, m);
      mesh.renderOrder = 9;
      mesh.visible = false;
      this.root.add(mesh);
      this.bits.push({ mesh, m, life: 1, speed: 1, v: new THREE.Vector3(), size: 0.2, grow: 0, drag: 0, lift: 0, from: new THREE.Color(), to: new THREE.Color(), spin: 0 });
    }
    for (let i = 0; i < 4; i++) {
      const m = glow(0xffffff, false);
      const mesh = new THREE.Mesh(new THREE.TorusGeometry(1, 0.09, 4, 24), m);
      mesh.visible = false;
      this.root.add(mesh);
      this.rings.push({ mesh, m, life: 1, size: 1 });
    }
    this.flashM = glow(0xffffff, false);
    this.flash = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), this.flashM);
    this.flash.visible = false;
    this.root.add(this.flash);
  }

  private bit(p: THREE.Vector3, v: [number, number, number], size: number, seconds: number, from: THREE.Color, to: THREE.Color, o: { grow?: number; drag?: number; lift?: number } = {}): void {
    const b = this.bits[this.next++ % this.bits.length];
    b.life = 0;
    b.speed = 1 / seconds;
    b.v.set(...v);
    b.size = size;
    b.grow = o.grow ?? -1;
    b.drag = o.drag ?? 1.5;
    b.lift = o.lift ?? 0;
    b.from.copy(from);
    b.to.copy(to);
    b.spin = (Math.random() - 0.5) * 9;
    b.mesh.position.copy(p);
    b.mesh.rotation.set(Math.random() * 3, Math.random() * 3, 0);
    b.mesh.visible = true;
  }

  private ring(p: THREE.Vector3, color: number, size: number, yaw: number | null): void {
    const r = this.rings.find((q) => q.life >= 1) ?? this.rings[0];
    r.life = 0;
    r.size = size;
    r.m.color.set(color);
    r.mesh.position.copy(p);
    // flat on the ground, or standing across the line of flight
    if (yaw === null) r.mesh.rotation.set(-Math.PI / 2, 0, 0);
    else r.mesh.rotation.set(0, yaw, 0);
    r.mesh.visible = true;
  }

  private burst(p: THREE.Vector3, color: number, size: number, lightColor: number): void {
    this.flash.position.copy(p);
    this.flashM.color.set(color);
    this.flashLife = 0;
    this.flashSize = size;
    this.flash.visible = true;
    this.light.color.set(lightColor);
    this.light.position.copy(p);
    this.lightKick = 5;
  }

  /** a fireball strikes home */
  explode(p: THREE.Vector3, big = false): void {
    const k = big ? 1.5 : 1;
    this.burst(p, 0xff9a3c, 1.35 * k, 0xff8a3c);
    this.ring(p, 0xff6a24, 2.3 * k, Math.PI / 2);
    this.ring(new THREE.Vector3(p.x, 0.15, p.z), 0xff8a3c, 2.6 * k, null);
    for (let i = 0; i < (big ? 34 : 24); i++) {
      const a = Math.random() * Math.PI * 2;
      const e = Math.random() * 1.2 - 0.2;
      const sp = (2 + Math.random() * 4.5) * k;
      this.bit(p, [Math.cos(a) * Math.cos(e) * sp, Math.sin(e) * sp + 1.6, Math.sin(a) * Math.cos(e) * sp],
        0.18 + Math.random() * 0.28, 0.5 + Math.random() * 0.4, FIRE_HOT, i % 3 ? FIRE : FIRE_DARK, { drag: 2.6, lift: -4 });
    }
    for (let i = 0; i < 8; i++) {
      this.bit(p, [(Math.random() - 0.5) * 1.6, 0.8 + Math.random(), (Math.random() - 0.5) * 1.6],
        0.4 + Math.random() * 0.3, 0.9 + Math.random() * 0.4, FIRE_DARK, SMOKE, { grow: 1.1, lift: 0.8 });
    }
  }

  /** the fireball shatters against the raised shield and sprays back */
  deflect(p: THREE.Vector3): void {
    this.burst(p, 0xfff0b8, 1.5, 0xffdc8a);
    this.ring(p, 0xffe6a0, 2.3, Math.PI / 2);
    for (let i = 0; i < 24; i++) {
      const a = Math.random() * Math.PI * 2;
      const out = 1.5 + Math.random() * 3.5;
      this.bit(p, [1 + Math.random() * 4, Math.sin(a) * out + 1, Math.cos(a) * out],
        0.14 + Math.random() * 0.2, 0.45 + Math.random() * 0.35, FIRE_HOT, i % 2 ? FIRE : new THREE.Color(0xfff6d8), { drag: 2, lift: -5 });
    }
  }

  /** the blade beam cuts in */
  cut(p: THREE.Vector3, spirit: boolean): void {
    const hot = new THREE.Color(0xffffff);
    const cool = new THREE.Color(spirit ? 0x3b96ff : 0x9cc4e4);
    this.burst(p, spirit ? 0x8fd0ff : 0xe4f2ff, spirit ? 2.1 : 1.5, spirit ? 0x64bdff : 0xcfe6ff);
    this.ring(p, spirit ? 0x64bdff : 0xcfe6ff, spirit ? 3 : 2.1, Math.PI / 2);
    for (let i = 0; i < (spirit ? 26 : 16); i++) {
      // sparks fly out along the slash
      const along = (Math.random() - 0.5) * 2;
      this.bit(p, [-0.6 - Math.random() * 2.6, along * 4.5 + 0.6, along * 2.4 + (Math.random() - 0.5) * 2],
        0.12 + Math.random() * 0.18, 0.35 + Math.random() * 0.35, hot, cool, { drag: 2.2, lift: -2 });
    }
  }

  update(dt: number, t: number): void {
    if (this.ball.visible) {
      this.shells.forEach((s, i) => { s.rotation.x += dt * (5 + i * 2) * (i % 2 ? 1 : -1); s.rotation.y += dt * (4 + i); });
      this.ball.scale.setScalar(1 + Math.sin(t * 24) * 0.08);
      this.light.position.copy(this.ball.position);
      this.light.color.set(0xff8a3c);
      this.trail -= dt;
      while (this.trail <= 0) {
        this.trail += 0.016;
        this.bit(this.ball.position, [1.2 + Math.random() * 1.6, (Math.random() - 0.3) * 1.2, (Math.random() - 0.5) * 1.2],
          0.42 + Math.random() * 0.36, 0.38 + Math.random() * 0.28, Math.random() < 0.4 ? FIRE_HOT : FIRE, FIRE_DARK, { drag: 1, lift: 1.2 });
      }
    }
    this.lightKick *= Math.exp(-dt * 7);
    this.light.intensity = Math.max(this.ball.visible ? 2 : 0, this.lightKick > 0.02 ? this.lightKick : 0);
    for (const b of this.bits) {
      if (b.life >= 1) continue;
      b.life = Math.min(1, b.life + dt * b.speed);
      b.v.multiplyScalar(Math.exp(-b.drag * dt));
      b.v.y += b.lift * dt;
      b.mesh.position.addScaledVector(b.v, dt);
      b.mesh.rotation.x += b.spin * dt;
      b.mesh.scale.setScalar(Math.max(0.01, b.size * (1 + b.grow * b.life)));
      b.m.color.copy(b.from).lerp(b.to, Math.min(1, b.life * 1.5));
      b.m.opacity = b.life < 0.5 ? 0.95 : 0.95 * (1 - b.life) * 2;
      if (b.life >= 1) b.mesh.visible = false;
    }
    for (const r of this.rings) {
      if (r.life >= 1) continue;
      r.life = Math.min(1, r.life + dt * 2.6);
      const e = 1 - Math.pow(1 - r.life, 3);
      r.mesh.scale.setScalar(0.2 + r.size * e);
      r.m.opacity = 0.9 * (1 - r.life);
      if (r.life >= 1) r.mesh.visible = false;
    }
    if (this.flashLife < 1) {
      this.flashLife = Math.min(1, this.flashLife + dt * 5);
      this.flash.scale.setScalar(this.flashSize * (0.5 + this.flashLife * 0.7));
      this.flash.rotation.y += dt * 6;
      this.flashM.opacity = 0.6 * (1 - this.flashLife);
      if (this.flashLife >= 1) this.flash.visible = false;
    }
  }

  clear(): void {
    this.ball.visible = false;
    this.lightKick = 0;
    this.light.intensity = 0;
    for (const b of this.bits) { b.life = 1; b.mesh.visible = false; }
    for (const r of this.rings) { r.life = 1; r.mesh.visible = false; }
    this.flashLife = 1;
    this.flash.visible = false;
  }
}
