import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter III — The House of the Interpreter.
// Christian walks up through a quiet wood to a lamplit cottage. The
// Interpreter welcomes him in and shows him one thing: a dusty room, swept
// until it chokes with dust (the Law stirring up sin), then settled by a
// sprinkling of water (the Gospel). A single, faithful vignette rather than
// the book's full gallery of rooms — in keeping with how compact the earlier
// chapters are.

interface InterpreterCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void;
}

type Phase = 'approach' | 'interior' | 'dusty' | 'settling' | 'blessing' | 'done';

// interior room lives far east of the exterior clearing in the same scene —
// simplest way to "cut" between spaces without visibility toggling.
const IX = 90;
const DOOR = new THREE.Vector3(0, 0, -7.6);
const BROOM = new THREE.Vector3(IX + 8, 0, 3.4);
const ENTRY = new THREE.Vector3(IX - 6, 0, 0);

export class InterpreterScene {
  scene = new THREE.Scene();
  phase: Phase = 'approach';
  private cb: InterpreterCallbacks;
  private christian: BearParts;
  private interpreter: BearParts;
  private revisit = false;
  private built = false;
  private dust: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private drops: Array<{ mesh: THREE.Mesh; m: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private settleT = 0;
  private lampGlow: THREE.PointLight | null = null;

  constructor(cb: InterpreterCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true,
    });
    this.interpreter = makeBear({
      species: 'bear', fur: 0x8a7a68, outfit: 'robe', outfitColor: PALETTE.robeGold, scale: 1.12,
    });
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xcfe0d0);
    s.fog = new THREE.Fog(0xcfe0d0, 26, 70);

    s.add(new THREE.HemisphereLight(0xe4f0e0, 0xb0c8a8, 0.9));
    const sun = new THREE.DirectionalLight(0xfbe9c6, 1.2);
    sun.position.set(-20, 30, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -50;
    sun.shadow.camera.right = 110;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -30;
    s.add(sun);

    // ---------- exterior: a quiet wooded clearing ----------
    const ground = new THREE.Mesh(new THREE.BoxGeometry(60, 1, 40), mat(0x9fcf94));
    ground.position.set(0, -0.5, 0);
    ground.receiveShadow = true;
    s.add(ground);

    for (let i = 0; i < 40; i++) {
      const x = -28 + Math.random() * 56;
      const z = -18 + Math.random() * 36;
      if (Math.abs(x) < 6 && z < -3) continue; // keep the doorstep clear
      s.add(block(1 + Math.random() * 1.6, 0.1, 1 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x8fbf85 : 0xacd9a0, x, 0.05, z));
    }
    // tall pines framing the clearing
    for (const [tx, tz] of [
      [-22, -10], [-18, 6], [-10, 12], [10, 12], [18, 6], [22, -10],
      [-24, 2], [24, 2], [-6, -13], [6, -13],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(2.0, 1.4, 2.0, 0x6f9f68, 0, 2.3, 0));
      tree.add(block(1.4, 1.1, 1.4, 0x7cae74, 0, 3.4, 0));
      tree.add(block(0.8, 0.8, 0.8, 0x8fbf85, 0, 4.3, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // path from the entry to the door
    for (let i = 0; i < 14; i++) {
      const t = i / 13;
      const p = block(0.7, 0.1, 0.7, PALETTE.path, -14 + t * 14, 0.06, 6 - t * 13.4);
      p.castShadow = false;
      s.add(p);
    }

    // ---------- the cottage facade ----------
    const houseW = 10;
    const houseH = 4.2;
    s.add(block(houseW, houseH, 5, 0x8a6f52, 0, houseH / 2, -9.5));
    // gable roof
    for (let i = 0; i < 4; i++) {
      const rw = houseW + 1.2 - i * ((houseW + 1.2) / 4);
      s.add(block(rw, 0.5, 5.6, PALETTE.roofPeach, 0, houseH + 0.3 + i * 0.5, -9.5));
    }
    s.add(block(0.7, 2.4, 0.7, PALETTE.stone, houseW / 2 - 1, houseH + 1.6, -11)); // chimney
    // lit windows either side of the door
    for (const wx of [-2.6, 2.6]) {
      const win = block(0.9, 0.9, 0.14, 0xfff3b8, wx, 2.0, -7.05);
      win.material = new THREE.MeshLambertMaterial({ color: 0xfff3b8, emissive: 0xffdf8a, emissiveIntensity: 0.5 });
      s.add(win);
      s.add(block(1.05, 0.14, 0.14, PALETTE.woodDark, wx, 2.5, -7.0));
    }
    // door
    s.add(block(1.3, 2.3, 0.2, PALETTE.woodDark, 0, 1.15, -7.35));
    s.add(block(0.16, 0.16, 0.1, PALETTE.robeGold, 0.4, 1.15, -7.28));
    // signpost: "The Interpreter's House"
    const sign = new THREE.Group();
    sign.add(block(0.14, 1.6, 0.14, PALETTE.woodDark, 0, 0.8, 0));
    sign.add(block(2.0, 0.7, 0.1, PALETTE.wallCream, 0, 1.5, 0));
    sign.position.set(-4.5, 0, -3.5);
    sign.rotation.y = 0.3;
    s.add(sign);
    // lamp by the door
    const lamp = new THREE.Group();
    lamp.add(block(0.16, 2.0, 0.16, PALETTE.woodDark, 0, 1.0, 0));
    const bulb = block(0.36, 0.36, 0.36, PALETTE.light, 0, 2.1, 0);
    bulb.material = new THREE.MeshLambertMaterial({ color: PALETTE.light, emissive: 0xfff0b0, emissiveIntensity: 0.7 });
    lamp.add(bulb);
    lamp.position.set(3.6, 0, -5.4);
    s.add(lamp);
    this.lampGlow = new THREE.PointLight(0xffe6a0, 1.6, 14);
    this.lampGlow.position.set(3.6, 2.3, -5.4);
    s.add(this.lampGlow);

    // ---------- interior room (offset east) ----------
    const floor = block(16, 0.2, 14, 0xc9a27e, IX, -0.1, 0);
    s.add(floor);
    const rug = block(9, 0.05, 6, 0xe0a4a8, IX - 1, 0.03, 0.5);
    rug.castShadow = false;
    s.add(rug);
    // back + side walls (open on the west, where Christian enters)
    s.add(block(0.4, 3.4, 14, 0xdccbb0, IX + 8, 1.7, 0)); // east wall
    s.add(block(16, 3.4, 0.4, 0xdccbb0, IX, 1.7, -7)); // north wall
    s.add(block(16, 3.4, 0.4, 0xdccbb0, IX, 1.7, 7)); // south wall
    // fireplace on the east wall
    s.add(block(2.2, 1.6, 0.6, PALETTE.stone, IX + 6.8, 0.8, -4));
    const fire = block(0.9, 0.9, 0.3, 0xffb37a, IX + 6.8, 0.6, -3.75);
    fire.material = new THREE.MeshLambertMaterial({ color: 0xffb37a, emissive: 0xff8a3d, emissiveIntensity: 0.8 });
    s.add(fire);
    s.add(new THREE.PointLight(0xffb37a, 1.2, 8).translateX(IX + 6.8).translateY(1.2).translateZ(-3.75));
    // bookshelves
    for (let i = 0; i < 3; i++) {
      s.add(block(0.3, 0.5, 2.2, PALETTE.wood, IX + 7.6, 0.4 + i * 0.6, 4 - i * 0.3));
    }
    // a simple table + candle near the Interpreter
    s.add(block(1.2, 0.6, 0.8, PALETTE.wood, IX + 2, 0.3, -3));
    const candle = block(0.14, 0.4, 0.14, 0xfff3e0, IX + 2, 0.8, -3);
    candle.material = new THREE.MeshLambertMaterial({ color: 0xfff3e0, emissive: 0xffe6a0, emissiveIntensity: 0.6 });
    s.add(candle);

    // dusty corner + broom, south-east
    s.add(block(2.6, 0.06, 2.6, 0x9a8f7f, BROOM.x, 0.04, BROOM.z)); // dust-dulled floorboards
    const broom = new THREE.Group();
    broom.add(block(0.1, 1.4, 0.1, PALETTE.woodDark, 0, 0.9, 0));
    broom.add(block(0.4, 0.5, 0.16, 0xc9a865, 0, 0.28, 0));
    broom.position.set(BROOM.x + 0.6, 0, BROOM.z + 0.6);
    broom.rotation.z = 0.25;
    s.add(broom);

    // dust particle pool (brownish)
    for (let i = 0; i < 24; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0x9c8a6f, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m);
      mesh.visible = false;
      s.add(mesh);
      this.dust.push({ mesh, m, life: 1, vx: 0, vz: 0 });
    }
    // water droplet pool
    for (let i = 0; i < 14; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xaed8f0, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), m);
      mesh.visible = false;
      s.add(mesh);
      this.drops.push({ mesh, m, life: 1, vx: 0, vz: 0 });
    }

    // the Interpreter waits inside, near his table
    this.interpreter.root.position.set(IX + 2.6, 0, -1.6);
    this.interpreter.root.rotation.y = Math.PI;
    this.interpreter.root.visible = false;
    s.add(this.interpreter.root);
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.settleT = 0;
    if (revisit) {
      this.phase = 'interior';
      this.christian.root.position.copy(ENTRY);
      this.christian.root.rotation.y = Math.PI / 2;
      this.interpreter.root.visible = true;
      this.cb.setObjective('🏚 Visit with the Interpreter, or step back out west');
    } else {
      this.phase = 'approach';
      this.christian.root.position.set(-15, 0, 6);
      this.christian.root.rotation.y = -Math.PI / 4;
      this.interpreter.root.visible = false;
      this.cb.setObjective('🚪 Knock at the door of the Interpreter\'s House');
    }
    this.scene.add(this.christian.root);
    return { christian: this.christian };
  }

  moveFactor(): number {
    return (this.phase === 'approach' || this.phase === 'interior') ? 1 : 0;
  }

  afterMove(): void {
    const p = this.christian.root.position;
    if (this.phase === 'approach') {
      p.x = THREE.MathUtils.clamp(p.x, -19, 19);
      p.z = THREE.MathUtils.clamp(p.z, -9, 8);
      if (p.distanceTo(DOOR) < 2.6) {
        this.phase = 'blessing'; // parked during the greeting script
        this.cb.playScript([
          { speaker: 'Christian', text: 'The Interpreter\'s House… Evangelist did speak of this place. I wonder if anyone is home.' },
          { speaker: 'Interpreter', text: 'Come in, come in, Christian! I have been expecting a pilgrim such as you.' },
          { speaker: 'Christian', text: 'You know my name?' },
          { speaker: 'Interpreter', text: 'I know why you have come. Step inside — I have something to show you before you climb the harder road ahead.' },
        ], () => {
          this.christian.root.position.copy(ENTRY);
          this.christian.root.rotation.y = Math.PI / 2;
          this.interpreter.root.visible = true;
          this.phase = 'interior';
          this.cb.setObjective('🧹 Sweep the dusty corner');
        });
      }
      return;
    }
    if (this.phase === 'interior') {
      p.x = THREE.MathUtils.clamp(p.x, IX - 7, IX + 7.3);
      p.z = THREE.MathUtils.clamp(p.z, -6.6, 6.6);
      if (this.revisit) {
        if (p.x < IX - 6.6) this.cb.onExit();
        return;
      }
      if (p.distanceTo(BROOM) < 2.2) {
        this.phase = 'dusty';
        this.settleT = 0;
        for (let i = 0; i < 14; i++) {
          this.spawnDust(BROOM.x + (Math.random() - 0.5) * 2, BROOM.z + (Math.random() - 0.5) * 2);
        }
        this.cb.playScript([
          { speaker: 'Interpreter', text: 'This room has not been swept in a very long time. Sweep it, if you would — but stand well back once you begin.' },
        ], () => {
          for (let i = 0; i < 20; i++) {
            this.spawnDust(BROOM.x + (Math.random() - 0.5) * 3, BROOM.z + (Math.random() - 0.5) * 3);
          }
          this.cb.playScript([
            { speaker: 'Christian', text: '*cough* The dust — it chokes the air! I can hardly see, hardly breathe!' },
            { speaker: 'Interpreter', text: 'Just so. The Law, when it sweeps at sin, only stirs it up and makes it worse. Wait now.' },
          ], () => {
            this.phase = 'settling';
            this.settleT = 0;
            for (let i = 0; i < 16; i++) {
              this.spawnDrop(BROOM.x + (Math.random() - 0.5) * 3, BROOM.z + (Math.random() - 0.5) * 3);
            }
          });
        });
      }
      return;
    }
  }

  private spawnDust(x: number, z: number): void {
    const d = this.dust.find((p) => p.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 0.6;
    d.vz = (Math.random() - 0.5) * 0.6;
    d.mesh.position.set(x, 0.2, z);
    d.mesh.visible = true;
  }

  private spawnDrop(x: number, z: number): void {
    const d = this.drops.find((p) => p.life >= 1);
    if (!d) return;
    d.life = 0;
    d.vx = (Math.random() - 0.5) * 0.3;
    d.vz = (Math.random() - 0.5) * 0.3;
    d.mesh.position.set(x, 1.6, z);
    d.mesh.visible = true;
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);
    if (this.interpreter.root.visible) animateBear(this.interpreter, t + 0.6, false);
    if (this.lampGlow) this.lampGlow.intensity = 1.4 + Math.sin(t * 3) * 0.2;

    for (const d of this.dust) {
      if (d.life >= 1) continue;
      d.life = Math.min(1, d.life + dt * 0.35);
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.z += d.vz * dt;
      d.mesh.position.y = 0.2 + Math.sin(d.life * 6) * 0.15 + d.life * 0.6;
      const s = 0.6 + d.life * 1.3;
      d.mesh.scale.setScalar(s);
      d.m.opacity = 0.55 * (1 - d.life * 0.85);
      if (d.life >= 1) d.mesh.visible = false;
    }
    for (const d of this.drops) {
      if (d.life >= 1) continue;
      d.life = Math.min(1, d.life + dt * 0.9);
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.z += d.vz * dt;
      d.mesh.position.y -= dt * 2.2;
      d.m.opacity = 0.8 * (1 - d.life);
      if (d.mesh.position.y < 0.15 || d.life >= 1) {
        d.life = 1;
        d.mesh.visible = false;
      }
    }

    if (this.phase === 'settling') {
      this.settleT += dt;
      if (this.settleT > 2.2) {
        this.phase = 'blessing';
        this.cb.playScript([
          { speaker: 'Interpreter', text: 'Now — watch.' },
          { speaker: 'Christian', text: 'The dust… it lies still. The room is clean.' },
          { speaker: 'Interpreter', text: 'That is the Gospel, sprinkled like water upon the heart. The Law shows you your sin and stirs it up; only grace can lay it to rest and make you clean indeed.' },
          { speaker: 'Christian', text: 'I begin to understand, Interpreter. Thank you for showing me this.' },
          { speaker: 'Interpreter', text: 'There is more I could show you — a fire that will not go out, a man in an iron cage — but this lesson alone is worth carrying with you.' },
          { speaker: 'Interpreter', text: 'The Hill Difficulty waits beyond my door, and past it the House Beautiful. Go now, and go in the King\'s own strength, Christian.' },
        ], () => {
          this.phase = 'done';
          this.cb.onComplete();
        });
      }
    }
  }
}
