import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { DialogueLine } from './npcs';

// Chapter IV — The Wicket Gate & the House of the Interpreter.
// A long, straight road; Christian mutters his doubts as he walks it. At the
// Gate he knocks, and Goodwill — a great golden lion — opens to him, pulling
// him through before Beelzebub's archers (from the dark castle nearby) can
// find their mark. Goodwill hears his story, points him up the straight and
// narrow King's Highway, and promises the burden will fall at the place of
// deliverance ahead. A little further on, a cottage by the road holds the
// House of the Interpreter — a wise old owl who shows Christian six living
// illustrations of the Christian life before he continues his journey.

interface WicketCallbacks {
  playScript: (lines: DialogueLine[], onDone?: () => void) => void;
  setObjective: (text: string) => void;
  onComplete: () => void;
  onExit: () => void; // leaving on a revisit
  rumbleSound: () => void; // reused as the castle's menacing thrum
  blipSound: () => void;
  setMusic?: (style: 'gate' | 'interpreter') => void;
  // a brief screen fade to mask the cut between outdoor road and indoor hall;
  // `mid` runs once the screen is fully covered, then the fade lifts again
  fade?: (mid: () => void) => void;
}

type Phase =
  | 'approach' | 'knock' | 'volley' | 'inside' | 'freeroam'
  | 'houseGreet' | 'house' | 'houseExit' | 'done';

const GATE_X = 10;       // the wall + wicket gate
const CASTLE = new THREE.Vector3(17, 0, -15); // Beelzebub's castle, NE of the gate
const HIGHWAY_END = 100; // the glow at the end of the narrow way — well over 2x the original walk

// ---------- the House of the Interpreter, just off the King's Highway ----------
// on the south (near/foreground) side of the road, so it's impossible to miss
const COTTAGE_X = 40;                       // further out — a longer stretch of highway first
const DOOR_POS = new THREE.Vector3(COTTAGE_X, 0, -4.3);
// the six vignette rooms are built far away on the same X axis — the simplest
// way to cut from outdoor road to indoor hall without swapping scenes
const IX = 150;
const STATIONS = [IX + 10, IX + 24, IX + 38, IX + 52, IX + 66, IX + 80];
const HOUSE_EXIT_X = IX + 92;
const HOUSE_HALF = 5.5;   // half-width of the hall — roomy enough to see everyone clearly
const HOUSE_WIDTH = HOUSE_HALF * 2;

const HOUSE_GREET_LINES: DialogueLine[] = [
  { speaker: '', text: 'A little way past the Gate, off the King\'s Highway, stands a cottage of warm timber with smoke curling from its chimney — the House of the Interpreter.' },
  { speaker: 'Interpreter', text: '(an owl in a scholar\'s robe, blinking down from the doorway) Christian! Goodwill sent word that you would be along this way. Come in, come in — I have things to show you that shall be of great profit upon your journey.' },
  { speaker: 'Christian', text: 'Gladly, sir. I have long wished for someone who could make plain the things I only half understand.' },
];

// the dusty room's script is split in two so the dust cloud and the water
// sprinkle can be timed to the dialogue itself, rather than just ambient haze
const DUST_LINES_A: DialogueLine[] = [
  { speaker: '', text: 'The first room is thick with dust — years of it, settled over every beam and floorboard.' },
  { speaker: 'Interpreter', text: 'Sweep it, if you please.' },
  { speaker: '', text: 'A servant sweeps hard. The dust billows up in choking clouds until neither pilgrim can draw breath.' },
  { speaker: 'Christian', text: '*coughing* Enough! Stop, I beg you!' },
];
const DUST_LINES_B: DialogueLine[] = [
  { speaker: 'Interpreter', text: 'Now — bring water, and sprinkle the floor before you sweep.' },
  { speaker: '', text: 'The second servant scatters water first. This time the broom leaves the room clean and sweet.' },
  { speaker: 'Interpreter', text: 'The dust is sin, hidden deep in the heart of a man. The broom is the Law — it stirs sin up and shows it plainly, but has no power to take it away.' },
  { speaker: 'Interpreter', text: 'The water is the Gospel. Grace alone settles the dust of sin and truly cleanses the heart.' },
  { speaker: 'Christian', text: 'Then the Law can only show me my filth — never wash me of it. I begin to see why I could not rest at Sinai.' },
];

const VIGNETTES: DialogueLine[][] = [
  [ // 2. the two children
    { speaker: '', text: 'In the next room sit two small boys, side by side, though nothing else about them is alike.' },
    { speaker: 'Interpreter', text: 'This one is named Passion. That one, Patience.' },
    { speaker: '', text: 'Passion scowls and demands his whole inheritance at once. It is heaped into his lap — and within minutes he has torn, spilled, and squandered every bit, and sits now in rags among the ruins, sulking.' },
    { speaker: '', text: 'Patience asks for nothing, and waits quietly, empty-handed.' },
    { speaker: 'Christian', text: 'Poor foolish thing. Will he never have any more?' },
    { speaker: 'Interpreter', text: 'Not until the appointed time — and by then, Patience will have come into lasting riches, while Passion has nothing left at all.' },
    { speaker: 'Interpreter', text: 'So it is with the children of this world, who must have their good things now, and the children of the world to come, who can wait for theirs — for theirs shall never rust nor waste away.' },
    { speaker: 'Christian', text: 'Better to wait for treasure that lasts, than seize a joy that crumbles in the hand.' },
  ],
  [ // 3. the fire against the wall
    { speaker: '', text: 'Against a wall a fire burns, and a man stands before it, endlessly emptying pails of water on the flames.' },
    { speaker: 'Christian', text: 'Strange — the more he pours, the higher it burns! Why does it not go out?' },
    { speaker: 'Interpreter', text: 'Come round to the other side, and see.' },
    { speaker: '', text: 'Behind the wall, unseen from the front, another hand pours oil into the fire — secretly, steadily, without ceasing.' },
    { speaker: 'Interpreter', text: 'The man with the water is the Devil, forever labouring to quench the work of grace in the heart. The one with the oil is Christ — He maintains what His own hand has begun, even when His people cannot see Him doing it.' },
    { speaker: 'Christian', text: 'Then when I feel my faith failing under some trial, it may be only that I cannot see the hand still feeding it, behind the wall.' },
    { speaker: 'Interpreter', text: 'Just so, Christian. Just so.' },
  ],
  [ // 4. the armed man
    { speaker: '', text: 'A crowd of fearful souls stands well back from a splendid palace, its gate thick with armed guards.' },
    { speaker: '', text: 'None of them dares approach — until one man of stout countenance strides up and gives his name to be written down.' },
    { speaker: '', text: 'He takes up helmet, shield, and sword, and falls upon the guards, cutting his way through many grievous wounds, until at last he forces the doorway and passes in.' },
    { speaker: '', text: 'A great shout of welcome rises from within.' },
    { speaker: 'Interpreter', text: 'Christian, thou must through difficulties enter the kingdom of heaven. Set down thy name, take up thy weapons, and press in — whatever wounds it may cost thee.' },
    { speaker: 'Christian', text: 'Then this road was never meant to be walked without a fight. I had hoped otherwise — but I would rather bleed at that gate than turn back from it.' },
  ],
  [ // 5. the man in the iron cage
    { speaker: '', text: 'In a dim corner, a man sits caged behind bars of black iron, his head bowed low.' },
    { speaker: 'Christian', text: 'Friend, what brought you here?' },
    { speaker: '', text: '(the caged man, hollow-voiced) I was once a flourishing professor, fair in my own eyes and the eyes of others. I left off watching, and hardening followed hardening, sin upon sin, until I could no longer repent, though I longed to.' },
    { speaker: '', text: 'Now I am shut up in this cage of my own forging, and cannot get out.' },
    { speaker: 'Interpreter', text: 'Let his misery be a warning to thee. Take sin lightly, and stray but a little at a time, and thou mayest wake one day to find the door already shut — from the inside.' },
    { speaker: 'Christian', text: '*shivering* A dreadful sight. God keep me watchful, and never so bold with sin as he was.' },
  ],
  [ // 6. the dream of judgment
    { speaker: '', text: 'A man sits bolt upright in his bed, trembling, sweat on his brow, staring as though he still saw the vision that woke him.' },
    { speaker: '', text: '(the man, shaking) I dreamed the heavens grew black as pitch, and the trumpet sounded, and the clouds parted, and I stood before the great white throne, unready, without a plea to offer.' },
    { speaker: 'Interpreter', text: 'Let it not remain a dream to thee, Christian. That day comes for every soul alike. Live each one as a man who must give account — and thou shalt not be taken unready when the trumpet truly sounds.' },
    { speaker: 'Christian', text: 'I will remember this room longest of all, sir. It has put a solemn weight on me — a good weight, I think, unlike the one on my back.' },
  ],
];

const FAREWELL_LINES: DialogueLine[] = [
  { speaker: 'Christian', text: 'Sir, I thank you with all my heart. I came in confused, and I go out instructed — the dust and the Law, the fire and the oil, the cage, the dream — I shall carry every one of them with me.' },
  { speaker: 'Interpreter', text: 'Go then, Christian, and the Lord be with thee upon the King\'s Highway. Remember what thou hast seen here always, and let it quicken and comfort thee in the rest of thy journey.' },
  { speaker: '', text: 'The Interpreter walks him to the door, and the bright road outside — and the far light — waits beyond it.' },
];

export class WicketGateScene {
  scene = new THREE.Scene();
  phase: Phase = 'approach';
  private cb: WicketCallbacks;
  private christian: BearParts;
  private goodwill: BearParts;
  private revisit = false;
  private built = false;
  private mutterIndex = 0; // how many roadside doubts have been spoken
  private doorL: THREE.Group | null = null;
  private doorR: THREE.Group | null = null;
  private doorOpen = false;
  private castleGlows: THREE.Mesh[] = [];
  private arrows: Array<{
    g: THREE.Group; t: number; active: boolean;
    from: THREE.Vector3; to: THREE.Vector3;
  }> = [];
  private volleyT = 0;
  private arrowTimer = 0;
  private lightBeam: THREE.Group | null = null;

  // ---------- the House of the Interpreter ----------
  private interpreter: BearParts;
  private houseGreeted = false;
  private houseCalledOut = false; // he's called out once if Christian walks straight past
  private stationIndex = 0;
  private dust: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; baseX: number; baseZ: number }> = [];
  private dustBurst = 0;       // current dust-cloud intensity (0..1)
  private dustBurstTarget = 0; // where it's lerping toward
  private sprinkle: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; active: boolean; vy: number }> = [];
  private sprinkleT = 0; // seconds remaining of the water-sprinkle effect
  private sprinkleTimer = 0;
  private fireMotes: THREE.Mesh[] = [];
  private devilArm: THREE.Group | null = null; // pours water, endlessly
  private christArm: THREE.Group | null = null; // pours oil, unseen, behind the wall
  private cottageDoor: THREE.Group | null = null;
  private houseDoorOpen = false;
  private exitDoor: THREE.Group | null = null;
  private exitDoorOpen = false;
  private exitDoorMat: THREE.MeshLambertMaterial | null = null;
  // the Interpreter walks (rather than teleports) between vignettes
  private interpreterTarget: THREE.Vector3 | null = null;
  private interpreterFaceOnArrive = 0;

  constructor(cb: WicketCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true,
    });
    // Goodwill: a great golden lion in a white robe
    this.goodwill = makeBear({
      species: 'lion', outfit: 'robe',
      outfitColor: PALETTE.robeWhite, scale: 1.3,
    });
    // the Interpreter: a wise old owl in a scholar's gold robe
    this.interpreter = makeBear({
      species: 'owl', outfit: 'robe',
      outfitColor: PALETTE.robeGold, scale: 1.05,
    });
  }

  // ------------------------------------------------------------ build

  private build(): void {
    if (this.built) return;
    this.built = true;
    const s = this.scene;
    s.background = new THREE.Color(0xc8dce8);
    s.fog = new THREE.Fog(0xc8dce8, 36, 95);

    s.add(new THREE.HemisphereLight(0xe2eef2, 0xb2c8a6, 0.9));
    const sun = new THREE.DirectionalLight(0xf7eed8, 1.2);
    sun.position.set(-22, 38, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -70;
    sun.shadow.camera.right = 70;
    sun.shadow.camera.top = 45;
    sun.shadow.camera.bottom = -45;
    s.add(sun);

    // rolling ground
    const ground = new THREE.Mesh(new THREE.BoxGeometry(180, 1, 90), mat(0x9dc793));
    ground.position.set(-5, -0.5, 0);
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 70; i++) {
      const x = -70 + Math.random() * 130;
      const z = -35 + Math.random() * 70;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x8cba80 : 0xaad49c, x, 0.05, z);
      p.castShadow = false;
      s.add(p);
    }

    // ---------- the long straight road, west → the gate → the highway ----------
    for (let i = 0; i < 30; i++) {
      const px = -62 + i * 2.5;
      const path = block(2.5, 0.12, 3.2, PALETTE.path, px, 0.06, 0);
      path.castShadow = false;
      s.add(path);
    }
    // lamps pacing out the lonely miles
    for (const lx of [-52, -36, -20, -4] as const) {
      const lamp = new THREE.Group();
      lamp.add(block(0.16, 2.2, 0.16, PALETTE.woodDark, 0, 1.1, 0));
      const bulb = block(0.34, 0.34, 0.34, PALETTE.light, 0, 2.35, 0);
      bulb.material = new THREE.MeshLambertMaterial({
        color: PALETTE.light, emissive: 0xfff0b0, emissiveIntensity: 0.55,
      });
      lamp.add(bulb);
      lamp.position.set(lx, 0, 2.6);
      s.add(lamp);
    }
    // scattered trees along the approach
    for (const [tx, tz, blossom] of [
      [-56, -7, false], [-48, 8, true], [-38, -9, false], [-27, 7, false],
      [-16, -8, true], [-8, 9, false],
    ] as const) {
      const tree = new THREE.Group();
      tree.add(block(0.5, 1.6, 0.5, PALETTE.trunk, 0, 0.8, 0));
      tree.add(block(1.9, 1.3, 1.9, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 2.2, 0));
      tree.add(block(1.2, 0.9, 1.2, blossom ? PALETTE.leafPink : PALETTE.leaf, 0, 3.1, 0));
      tree.position.set(tx, 0, tz);
      s.add(tree);
    }

    // ---------- the wall and the Wicket Gate ----------
    const BRICK = 0xf2ecdf;
    const MORTAR = 0xdcd4c2;
    for (const side of [-1, 1]) {
      // wall runs away from the gate on both sides
      for (let i = 0; i < 7; i++) {
        const wz = side * (3.4 + i * 4.4);
        s.add(block(1.3, 3.0, 4.4, i % 2 === 0 ? BRICK : 0xe9e2d2, GATE_X, 1.5, wz));
        s.add(block(1.4, 0.28, 4.6, MORTAR, GATE_X, 3.1, wz));
      }
      // gate pillars
      s.add(block(1.7, 4.2, 1.7, BRICK, GATE_X, 2.1, side * 2.2));
      s.add(block(2.0, 0.4, 2.0, MORTAR, GATE_X, 4.3, side * 2.2));
      s.add(block(1.2, 0.6, 1.2, PALETTE.roofPink, GATE_X, 4.7, side * 2.2));
    }
    // arch over the gate
    s.add(block(0.9, 0.9, 4.2, BRICK, GATE_X, 4.4, 0));
    s.add(block(1.0, 0.3, 4.6, MORTAR, GATE_X, 5.0, 0));
    // the little wooden doors (swing open for Goodwill)
    const makeDoor = (side: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(GATE_X, 0, 1.35 * side);
      const panel = block(0.3, 3.2, 1.35, PALETTE.woodDark, 0, 1.6, -0.675 * side);
      pivot.add(panel);
      pivot.add(block(0.34, 0.14, 1.35, 0x8a6f52, 0, 0.9, -0.675 * side));
      pivot.add(block(0.34, 0.14, 1.35, 0x8a6f52, 0, 2.3, -0.675 * side));
      this.scene.add(pivot);
      return pivot;
    };
    this.doorL = makeDoor(-1);
    this.doorR = makeDoor(1);
    // a humble sign: KNOCK
    const sign = new THREE.Group();
    sign.add(block(0.14, 1.5, 0.14, PALETTE.woodDark, 0, 0.75, 0));
    sign.add(block(1.5, 0.7, 0.1, PALETTE.wallCream, 0, 1.4, 0));
    sign.position.set(GATE_X - 1.6, 0, 3.6);
    sign.rotation.y = -0.4;
    s.add(sign);

    // ---------- Beelzebub's castle, dark on its crag ----------
    const castle = new THREE.Group();
    const DARK = 0x5a5464;
    const DARKER = 0x494452;
    castle.add(block(7, 3, 5.5, 0x6e6878, 0, 1.5, 0)); // crag base
    castle.add(block(5.5, 3.4, 4.2, DARK, 0, 4.4, 0));  // keep
    castle.add(block(1.6, 5.4, 1.6, DARKER, -2.6, 4.8, -1.4)); // towers
    castle.add(block(1.6, 6.2, 1.6, DARKER, 2.4, 5.2, 1.2));
    castle.add(block(1.3, 4.8, 1.3, DARK, 2.6, 4.5, -1.8));
    // jagged battlements
    for (let i = 0; i < 5; i++) {
      castle.add(block(0.7, 0.7, 0.7, DARKER, -2 + i * 1.05, 6.4, 0));
    }
    // banner
    castle.add(block(0.1, 2.4, 0.1, DARKER, 0, 8, 0));
    castle.add(block(0.9, 0.6, 0.06, 0x8a3a4a, 0.5, 8.6, 0));
    // baleful red windows
    for (const [wx, wy, wz] of [
      [-2.6, 5.6, -0.5], [2.4, 6.4, 1.2], [0, 5.0, 2.15], [-1.4, 4.2, 2.15],
    ] as const) {
      const w = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.7, 0.12),
        new THREE.MeshBasicMaterial({ color: 0xff5c4d, transparent: true, opacity: 0.85 }),
      );
      w.position.set(wx, wy, wz);
      castle.add(w);
      this.castleGlows.push(w);
    }
    castle.position.copy(CASTLE);
    s.add(castle);
    // dead brush around the crag
    for (const [bx, bz] of [[12, -9], [21, -10], [14, -20], [22, -18]] as const) {
      s.add(block(0.3, 1.3, 0.3, 0x8d8478, bx, 0.65, bz));
      s.add(block(0.9, 0.24, 0.24, 0x8d8478, bx + 0.3, 1.3, bz));
    }

    // arrow pool
    for (let i = 0; i < 10; i++) {
      const g = new THREE.Group();
      g.add(block(0.09, 0.09, 1.1, 0x4a4440, 0, 0, 0));            // shaft
      g.add(block(0.16, 0.16, 0.22, 0x8a3a4a, 0, 0, 0.6));         // head
      g.add(block(0.2, 0.05, 0.3, 0xd8d3cc, 0, 0, -0.55));         // fletching
      g.visible = false;
      s.add(g);
      this.arrows.push({
        g, t: 1, active: false,
        from: new THREE.Vector3(), to: new THREE.Vector3(),
      });
    }

    // ---------- the King's Highway: straight and narrow, hedged both sides ----------
    for (let i = 0; i < 38; i++) {
      const px = GATE_X + 2 + i * 2.5;
      const path = block(2.5, 0.12, 2.6, 0xeee3c4, px, 0.06, 0);
      path.castShadow = false;
      s.add(path);
      // a gap in the south hedge lets Christian step aside to the cottage door
      const nearCottageGap = Math.abs(px - COTTAGE_X) < 3.5;
      // trimmed hedges close on either hand — turn neither left nor right
      if (i % 1 === 0) {
        s.add(block(2.5, 0.9, 0.8, 0x7fae74, px, 0.45, 2.1));
        if (!nearCottageGap) s.add(block(2.5, 0.9, 0.8, 0x7fae74, px, 0.45, -2.1));
      }
      if (i % 3 === 1 && !nearCottageGap) {
        s.add(block(0.5, 0.4, 0.5, PALETTE.grassDark, px, 1.05, 2.1));
        s.add(block(0.5, 0.4, 0.5, PALETTE.grassDark, px, 1.05, -2.1));
      }
    }
    // flowers dotting the highway's verge — a kinder country already
    for (let i = 0; i < 34; i++) {
      const f = block(0.18, 0.18, 0.18,
        [PALETTE.flowerYellow, PALETTE.flowerPink, PALETTE.flowerBlue][i % 3],
        GATE_X + 3 + Math.random() * 84, 0.98, (Math.random() > 0.5 ? 2.1 : -2.1));
      f.castShadow = false;
      s.add(f);
    }

    // the soft glow at the end of the narrow way — the place of deliverance, far off
    const lightBeam = new THREE.Group();
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 40, 2.6),
      new THREE.MeshBasicMaterial({ color: 0xffd94a, transparent: true, opacity: 0.8, fog: false }),
    );
    beam.position.y = 20;
    lightBeam.add(beam);
    const beamInner = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 44, 1.3),
      new THREE.MeshBasicMaterial({ color: 0xfffbe0, transparent: true, opacity: 0.95, fog: false }),
    );
    beamInner.position.y = 22;
    lightBeam.add(beamInner);
    const star = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 3.4, 3.4),
      new THREE.MeshBasicMaterial({ color: 0xffe87a, fog: false }),
    );
    star.position.y = 42;
    star.rotation.set(Math.PI / 4, 0, Math.PI / 4);
    lightBeam.add(star);
    const glow = new THREE.PointLight(0xffe87a, 3.5, 40);
    glow.position.y = 4;
    lightBeam.add(glow);
    lightBeam.position.set(HIGHWAY_END + 2, 0, 0);
    lightBeam.visible = false;
    s.add(lightBeam);
    this.lightBeam = lightBeam;

    // Goodwill waits unseen behind the gate
    this.goodwill.root.position.set(GATE_X + 2.2, 0, -1.6);
    this.goodwill.root.rotation.y = -Math.PI / 2;
    this.goodwill.root.visible = false;
    s.add(this.goodwill.root);

    // the Interpreter stands outside his door — buildCottage() below places
    // and reveals him
    s.add(this.interpreter.root);

    this.buildCottage();
    this.buildHouseInterior();
  }

  // ---------- the cottage on the highway, and its six-room interior ----------

  private buildCottage(): void {
    const s = this.scene;
    const cx = COTTAGE_X;
    const cz = -6.5; // the near (foreground/"top of screen") side of the highway
    const cottage = new THREE.Group();
    cottage.add(block(4.2, 2.6, 3.6, PALETTE.wallCream, 0, 1.3, 0));
    cottage.add(block(4.6, 1.5, 4.0, PALETTE.roofPeach, 0, 3.35, 0));
    cottage.add(block(0.5, 0.9, 0.5, PALETTE.woodDark, 1.5, 3.6, 0.2)); // chimney
    cottage.add(block(0.9, 0.16, 0.3, 0x8a6f52, 0, 1.66, 1.9)); // lintel
    cottage.add(block(0.7, 0.7, 0.1, PALETTE.wallMint, -1.4, 1.6, 1.81)); // window
    cottage.add(block(0.7, 0.7, 0.1, PALETTE.wallMint, 1.4, 1.6, 1.81));
    cottage.position.set(cx, 0, cz);
    s.add(cottage);
    // the door swings open on a hinge as Christian is welcomed in
    const doorPivot = new THREE.Group();
    doorPivot.position.set(cx - 0.45, 0, cz + 1.81);
    doorPivot.add(block(0.9, 1.7, 0.14, PALETTE.woodDark, 0.45, 0.85, 0));
    s.add(doorPivot);
    this.cottageDoor = doorPivot;
    // a short path from the highway gap up to the door
    for (let i = 0; i < 4; i++) {
      s.add(block(1.4, 0.1, 1.2, PALETTE.path, cx, 0.05, -2.6 - i * 1.1));
    }
    // a little sign: THE HOUSE OF THE INTERPRETER
    const sign = new THREE.Group();
    sign.add(block(0.12, 1.2, 0.12, PALETTE.woodDark, 0, 0.6, 0));
    sign.add(block(1.6, 0.6, 0.1, PALETTE.wallCream, 0, 1.1, 0));
    sign.position.set(cx - 2.3, 0, -3.2);
    sign.rotation.y = -0.5;
    s.add(sign);
    // the Interpreter waits outside his door, visible from the road —
    // walk up and greet him to be shown inside
    this.interpreter.root.position.set(cx, 0, cz + 3.2);
    this.interpreter.root.rotation.y = 0; // facing the highway
    this.interpreter.root.visible = true;
  }

  private buildHouseInterior(): void {
    const s = this.scene;
    const midX = IX + 46;
    // a roomy hall, offset far from the outdoor scene on the same axis —
    // cheapest way to cut indoors without swapping THREE.Scenes
    s.add(block(96, 0.2, HOUSE_WIDTH, PALETTE.wood, midX, -0.1, 0));
    s.add(block(96, 3.1, 0.3, PALETTE.wallCream, midX, 1.55, -HOUSE_HALF));
    s.add(block(96, 3.1, 0.3, PALETTE.wallCream, midX, 1.55, HOUSE_HALF));
    for (let i = 0; i < 10; i++) {
      const lx = IX + 4 + i * 9.5;
      const lamp = new THREE.Group();
      lamp.add(block(0.14, 2.1, 0.14, PALETTE.woodDark, 0, 1.05, 0));
      const bulb = block(0.32, 0.32, 0.32, PALETTE.light, 0, 2.15, 0);
      bulb.material = new THREE.MeshLambertMaterial({
        color: PALETTE.light, emissive: 0xfff0b0, emissiveIntensity: 0.5,
      });
      lamp.add(bulb);
      lamp.position.set(lx, 0, i % 2 === 0 ? -HOUSE_HALF + 0.4 : HOUSE_HALF - 0.4);
      s.add(lamp);
    }

    // small partition walls between rooms — just enough to read as separate
    // spaces, with a gap down the centre of the hall to walk through
    const PARTITION_COLORS = [PALETTE.wallPink, PALETTE.wallMint, PALETTE.wallLilac];
    const GAP = 1.5;
    const span = HOUSE_HALF - GAP;
    const partitionXs = [
      IX + 3,
      ...STATIONS.slice(1).map((sx, i) => (STATIONS[i] + sx) / 2),
      HOUSE_EXIT_X - 6,
    ];
    partitionXs.forEach((wx, i) => {
      const color = PARTITION_COLORS[i % PARTITION_COLORS.length];
      s.add(block(0.22, 2.2, span, color, wx, 1.1, -(GAP + HOUSE_HALF) / 2));
      s.add(block(0.22, 2.2, span, color, wx, 1.1, (GAP + HOUSE_HALF) / 2));
    });

    // 1. the dusty room (south alcove)
    {
      const x = STATIONS[0];
      s.add(block(3.2, 0.05, 3.0, 0xcbb98a, x, 0.03, -3.2));
      const broom = block(0.12, 1.5, 0.12, PALETTE.woodDark, x - 0.8, 0.75, -2.8);
      broom.rotation.z = 0.35;
      s.add(broom);
      s.add(block(0.4, 0.3, 0.4, PALETTE.stone, x + 0.9, 0.15, -3.4)); // water bucket
      for (let i = 0; i < 22; i++) {
        const m = new THREE.MeshBasicMaterial({ color: 0xd9caa3, transparent: true, opacity: 0 });
        const mote = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), m);
        const baseX = x + (Math.random() - 0.5) * 2.8;
        const baseZ = -3.2 + (Math.random() - 0.5) * 2.4;
        mote.position.set(baseX, 0.3, baseZ);
        s.add(mote);
        this.dust.push({ mesh: mote, mat: m, life: Math.random(), baseX, baseZ });
      }
      // water droplets, held in reserve for the sprinkle that settles the dust
      for (let i = 0; i < 16; i++) {
        const m = new THREE.MeshBasicMaterial({ color: 0xaed8f0, transparent: true, opacity: 0 });
        const drop = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.16, 0.07), m);
        drop.visible = false;
        s.add(drop);
        this.sprinkle.push({ mesh: drop, mat: m, active: false, vy: 0 });
      }
    }

    // 2. the two children (north alcove)
    {
      const x = STATIONS[1];
      const passion = makeBear({ species: 'bear', outfit: 'shirt', outfitColor: 0xe8834a, scale: 0.68 });
      passion.root.position.set(x - 0.7, 0, 1.7);
      passion.root.rotation.y = 0.3;
      s.add(passion.root);
      const patience = makeBear({ species: 'bear', outfit: 'dress', outfitColor: PALETTE.dressLeaf, scale: 0.68 });
      patience.root.position.set(x + 0.9, 0, 2.2);
      patience.root.rotation.y = -0.4;
      s.add(patience.root);
      // Passion's scattered, wasted toys
      for (const [tx, tz, c] of [[-1.4, 1.2, 0xffe08a], [-0.2, 1.1, 0xffb3c6], [-1.0, 2.1, 0xaecbff]] as const) {
        s.add(block(0.24, 0.24, 0.24, c, x + tx, 0.12, tz));
      }
      // Patience's unopened, waiting chest
      s.add(block(0.5, 0.36, 0.36, PALETTE.woodDark, x + 0.9, 0.18, 2.8));
    }

    // 3. the fire against the wall (south alcove)
    {
      const x = STATIONS[2];
      s.add(block(0.3, 2.0, 2.8, PALETTE.stone, x, 1.0, -3.4)); // the dividing wall
      for (let i = 0; i < 6; i++) {
        const m = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xff8a3d : 0xffc35c });
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5 + Math.random() * 0.4, 0.3), m);
        mesh.position.set(x + (Math.random() - 0.5) * 0.7, 0.3, -2.4 + (Math.random() - 0.5) * 0.4);
        s.add(mesh);
        this.fireMotes.push(mesh);
      }
      const devil = makeBear({ species: 'cat', outfit: 'none', fur: 0x5a5464, scale: 0.9 });
      devil.root.position.set(x, 0, -1.4);
      devil.root.rotation.y = Math.PI;
      devil.armR.add(block(0.26, 0.34, 0.22, 0x4a4440, 0, -0.5, 0.16)); // pail, carried in hand
      s.add(devil.root);
      this.devilArm = devil.armR;
      const christ = makeBear({ species: 'lion', outfit: 'robe', outfitColor: PALETTE.robeWhite, scale: 0.85 });
      christ.root.position.set(x, 0, -4.4);
      christ.armR.add(block(0.22, 0.3, 0.2, PALETTE.robeGold, 0, -0.5, 0.16)); // oil jug, carried in hand
      s.add(christ.root);
      this.christArm = christ.armR;
    }

    // 4. the armed man and the palace (north alcove)
    {
      const x = STATIONS[3];
      s.add(block(2.6, 2.8, 0.3, PALETTE.roofLilac, x, 1.4, 4.2)); // palace facade
      s.add(block(2.8, 0.3, 0.4, PALETTE.robeGold, x, 2.85, 4.2)); // cornice
      s.add(block(0.9, 1.7, 0.3, 0xfff6c9, x, 0.85, 4.05)); // glowing doorway
      for (const gx of [-1.1, 1.1]) {
        const guard = makeBear({ species: 'pig', outfit: 'overalls', outfitColor: 0x5a5464, scale: 0.9 });
        guard.root.position.set(x + gx, 0, 3.0);
        guard.root.rotation.y = Math.PI;
        s.add(guard.root);
      }
      const knight = makeBear({ species: 'bear', outfit: 'shirt', outfitColor: 0x8a8f9a, scale: 0.95 });
      knight.root.position.set(x, 0, 1.2);
      s.add(knight.root);
      const sword = block(0.1, 0.1, 0.9, 0xd8d3cc, x + 0.4, 0.7, 1.2);
      sword.rotation.x = 0.3;
      s.add(sword);
    }

    // 5. the man in the iron cage (south alcove) — bars on all four sides,
    // tucked into a real corner where the back wall meets the room's edge
    {
      const cx = STATIONS[4] - 4;
      const cz = -(HOUSE_HALF - 0.9);
      const HW = 0.8;
      const HD = 0.7;
      const BARH = 1.6;
      s.add(block(HW * 2, 0.05, HD * 2, 0x3a3640, cx, 0.03, cz)); // cage floor
      const barMat = 0x2c2a30;
      for (const bx of [-0.8, -0.4, 0, 0.4, 0.8]) {
        s.add(block(0.06, BARH, 0.06, barMat, cx + bx, BARH / 2, cz - HD)); // back bars
        s.add(block(0.06, BARH, 0.06, barMat, cx + bx, BARH / 2, cz + HD)); // front bars
      }
      for (const bz of [-0.45, 0, 0.45]) {
        s.add(block(0.06, BARH, 0.06, barMat, cx - HW, BARH / 2, cz + bz)); // left side
        s.add(block(0.06, BARH, 0.06, barMat, cx + HW, BARH / 2, cz + bz)); // right side
      }
      // top rails tying the bars together
      s.add(block(HW * 2 + 0.1, 0.06, 0.06, barMat, cx, BARH, cz - HD));
      s.add(block(HW * 2 + 0.1, 0.06, 0.06, barMat, cx, BARH, cz + HD));
      s.add(block(0.06, 0.06, HD * 2 + 0.1, barMat, cx - HW, BARH, cz));
      s.add(block(0.06, 0.06, HD * 2 + 0.1, barMat, cx + HW, BARH, cz));
      const caged = makeBear({ species: 'bear', outfit: 'none', fur: 0x8f887e, scale: 0.9 });
      caged.root.position.set(cx, 0, cz);
      caged.root.rotation.x = 0.2; // bowed head
      // small round glasses, worn low on the snout
      caged.head.add(block(0.16, 0.14, 0.05, 0x2c2a30, -0.24, 0.5, 0.44));
      caged.head.add(block(0.16, 0.14, 0.05, 0x2c2a30, 0.24, 0.5, 0.44));
      caged.head.add(block(0.2, 0.04, 0.04, 0x2c2a30, 0, 0.5, 0.44)); // bridge
      s.add(caged.root);
    }

    // 6. the dream of judgment (north alcove) — a longer bed, sitting bolt upright
    {
      const x = STATIONS[5];
      const bz = 3.0;
      s.add(block(1.1, 0.3, 2.2, PALETTE.woodDark, x, 0.3, bz)); // longer bed frame
      s.add(block(1.0, 0.2, 2.0, 0xeef2ff, x, 0.5, bz)); // blanket
      s.add(block(0.5, 0.18, 0.4, 0xfff6e8, x, 0.6, bz - 0.95)); // pillow
      const dreamer = makeBear({ species: 'rabbit', outfit: 'none', scale: 0.85 });
      dreamer.root.position.set(x, 0.55, bz);
      s.add(dreamer.root);
      // a pale, distant throne-shape hinting at the vision
      const throneMat = new THREE.MeshBasicMaterial({ color: 0xfdfdf6, transparent: true, opacity: 0.5 });
      const throne = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.8, 0.5), throneMat);
      throne.position.set(x, 1.2, HOUSE_HALF - 0.6);
      s.add(throne);
    }

    // an end wall closes off the hall, with a doorway gap in the middle —
    // the wall panels run flush out to the side walls, so the door is
    // properly set into an opening rather than floating in space
    const DOOR_GAP = 1.0;
    s.add(block(0.3, 3.0, HOUSE_HALF - DOOR_GAP, PALETTE.wallCream,
      HOUSE_EXIT_X, 1.5, (HOUSE_HALF + DOOR_GAP) / 2));
    s.add(block(0.3, 3.0, HOUSE_HALF - DOOR_GAP, PALETTE.wallCream,
      HOUSE_EXIT_X, 1.5, -(HOUSE_HALF + DOOR_GAP) / 2));
    s.add(block(0.3, 0.4, DOOR_GAP * 2 + 0.3, PALETTE.wallCream, HOUSE_EXIT_X, 3.2, 0)); // lintel
    // a real door on a hinge, filling the doorway, swinging open once the
    // farewell is said, and fading in behind Christian once he's stepped out
    const doorMat = new THREE.MeshLambertMaterial({ color: PALETTE.woodDark, transparent: true, opacity: 1 });
    const exitDoorPivot = new THREE.Group();
    exitDoorPivot.position.set(HOUSE_EXIT_X, 0, -DOOR_GAP);
    const exitPanel = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.9, DOOR_GAP * 1.85), doorMat);
    exitPanel.position.set(0, 0.95, DOOR_GAP * 0.925);
    exitPanel.castShadow = true;
    exitDoorPivot.add(exitPanel);
    s.add(exitDoorPivot);
    this.exitDoor = exitDoorPivot;
    this.exitDoorMat = doorMat;
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.mutterIndex = 0;
    this.volleyT = 0;
    this.houseGreeted = revisit; // revisiting skips the Interpreter's House
    this.houseCalledOut = false;
    this.dustBurst = 0;
    this.dustBurstTarget = 0;
    this.sprinkleT = 0;
    this.stationIndex = STATIONS.length;
    this.houseDoorOpen = false;
    this.exitDoorOpen = false;
    this.interpreterTarget = null;
    for (const a of this.arrows) { a.active = false; a.g.visible = false; }
    this.christian.root.position.set(-60, 0, 0);
    this.christian.root.rotation.y = Math.PI / 2;
    this.scene.add(this.christian.root);
    // back to his post outside the cottage door
    this.interpreter.root.position.set(COTTAGE_X, 0, -6.5 + 3.2);
    this.interpreter.root.rotation.y = 0;
    if (revisit) {
      this.phase = 'done';
      this.doorOpen = true;
      this.goodwill.root.visible = true;
      this.goodwill.root.position.set(GATE_X + 2.2, 0, -1.6);
      if (this.lightBeam) this.lightBeam.visible = true;
      this.cb.setObjective('⛩ The Gate stands open — the narrow way runs east');
    } else {
      this.phase = 'approach';
      this.doorOpen = false;
      this.goodwill.root.visible = false;
      if (this.lightBeam) this.lightBeam.visible = false;
      this.cb.setObjective('🚶 A long, straight road — the Wicket Gate lies far to the east');
    }
    return { christian: this.christian };
  }

  // debug helper: jump straight past the approach/knock/volley, either onto
  // the free-walking highway or right into the Interpreter's House
  debugSkip(target: 'highway' | 'house'): void {
    this.build();
    this.revisit = false;
    this.doorOpen = true;
    this.goodwill.root.visible = true;
    this.goodwill.root.position.set(GATE_X + 3.6, 0, -1.7);
    if (this.lightBeam) this.lightBeam.visible = true;
    this.phase = 'freeroam';
    this.houseGreeted = target === 'house';
    this.stationIndex = target === 'house' ? 0 : STATIONS.length;
    this.interpreterTarget = null;
    if (target === 'house') {
      this.christian.root.position.set(IX, 0, 0);
      this.christian.root.rotation.y = Math.PI / 2;
      this.interpreter.root.position.set(IX + 3, 0, 1.2);
      this.phase = 'house';
      this.cb.setMusic?.('interpreter');
      this.cb.setObjective('🏚 The House of the Interpreter — walk on to see what he shows you');
    } else {
      this.christian.root.position.set(GATE_X + 4, 0, 0);
      this.christian.root.rotation.y = Math.PI / 2;
      this.interpreter.root.position.set(COTTAGE_X, 0, -6.5 + 3.2);
      this.interpreter.root.rotation.y = 0;
      this.cb.setMusic?.('gate');
      this.cb.setObjective('✨ Walk the straight and narrow way, toward the light');
    }
  }

  moveFactor(): number {
    // houseExit stays free-moving — Christian walks himself out through the door
    return (this.phase === 'knock' || this.phase === 'volley' || this.phase === 'houseGreet') ? 0 : 1;
  }

  // Christian can't walk through the Interpreter (or Goodwill) — a soft push-out
  private resolvePeopleCollision(p: THREE.Vector3): void {
    const R = 0.8;
    for (const other of [this.interpreter, this.goodwill]) {
      if (!other.root.visible) continue;
      const dx = p.x - other.root.position.x;
      const dz = p.z - other.root.position.z;
      const d = Math.hypot(dx, dz);
      if (d < R && d > 0.0001) {
        p.x = other.root.position.x + (dx / d) * R;
        p.z = other.root.position.z + (dz / d) * R;
      }
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;
    this.resolvePeopleCollision(p);

    // ---------- inside the House of the Interpreter ----------
    if (this.phase === 'house' || this.phase === 'houseExit') {
      p.z = THREE.MathUtils.clamp(p.z, -HOUSE_HALF + 0.8, HOUSE_HALF - 0.8);
      p.x = THREE.MathUtils.clamp(p.x, IX - 2, HOUSE_EXIT_X + 3);

      if (this.phase === 'house') {
        if (this.stationIndex < STATIONS.length && p.x > STATIONS[this.stationIndex] - 2) {
          const idx = this.stationIndex;
          this.stationIndex++;
          // he walks to stand opposite Christian, facing him — never teleporting
          const side = p.z >= 0 ? -1.6 : 1.6;
          this.interpreterTarget = new THREE.Vector3(STATIONS[idx] - 1, 0, side);
          this.interpreterFaceOnArrive = p.z >= 0 ? 0 : Math.PI;
          if (idx === 0) {
            // the dusty room: fill it with a choking cloud, then settle it
            // with a sprinkle of water, timed to the dialogue
            this.dustBurstTarget = 1;
            this.cb.playScript(DUST_LINES_A, () => {
              this.dustBurstTarget = 0;
              this.sprinkleT = 1.6;
              this.cb.playScript(DUST_LINES_B);
            });
          } else {
            this.cb.playScript(VIGNETTES[idx - 1]);
          }
          return;
        }
        if (this.stationIndex >= STATIONS.length && p.x > HOUSE_EXIT_X - 4) {
          this.phase = 'houseExit';
          const side = p.z >= 0 ? -1.6 : 1.6;
          this.interpreterTarget = new THREE.Vector3(HOUSE_EXIT_X - 2, 0, side);
          this.interpreterFaceOnArrive = p.z >= 0 ? 0 : Math.PI;
          this.exitDoorOpen = true; // the exit door swings open
          this.cb.playScript(FAREWELL_LINES, () => {
            this.cb.setObjective('🚪 Walk out through the door, back to the King\'s Highway');
          });
        }
        return;
      }

      // houseExit: the farewell is said (or being said) — once Christian
      // actually walks through the open door, cut back outside
      if (p.x > HOUSE_EXIT_X + 1.5) {
        const leave = () => {
          this.christian.root.position.set(COTTAGE_X, 0, -6.5 + 4.3);
          this.christian.root.rotation.y = 0; // turns back toward the highway
          this.exitDoorOpen = false;
          this.houseDoorOpen = false; // the cottage door swings shut behind him
          this.phase = 'freeroam';
          this.cb.setMusic?.('gate');
          this.cb.setObjective('✨ Walk the straight and narrow way, toward the light');
        };
        if (this.cb.fade) this.cb.fade(leave);
        else leave();
      }
      return;
    }

    p.z = THREE.MathUtils.clamp(p.z, -14, 14);
    // the wall bars the way east until Goodwill draws him through;
    // past the gate, the hedges keep the way narrow — save for a gap by the cottage
    if (p.x > GATE_X - 1.5 && (this.phase === 'approach' || this.phase === 'knock')) {
      p.x = Math.min(p.x, GATE_X - 1.5);
    }
    if (p.x > GATE_X + 1) {
      const nearCottage = Math.abs(p.x - COTTAGE_X) < 4;
      p.z = THREE.MathUtils.clamp(p.z, nearCottage ? -6.5 : -1.6, 1.6);
    }
    p.x = THREE.MathUtils.clamp(p.x, -62, HIGHWAY_END + 3);

    if (this.revisit) {
      if (p.x < -58 || p.x > HIGHWAY_END - 2) this.cb.onExit();
      return;
    }

    // ---------- the cottage door: Christian is welcomed into the House ----------
    if (this.phase === 'freeroam' && !this.houseGreeted && p.distanceTo(DOOR_POS) < 2.4) {
      this.houseGreeted = true;
      this.phase = 'houseGreet';
      this.houseDoorOpen = true; // the door swings open as the greeting plays out
      this.christian.root.rotation.y = Math.PI; // faces the cottage/Interpreter
      this.interpreter.root.rotation.y = 0; // faces Christian
      this.cb.playScript(HOUSE_GREET_LINES, () => {
        const enterHouse = () => {
          this.phase = 'house';
          this.stationIndex = 0;
          this.christian.root.position.set(IX, 0, 0);
          this.christian.root.rotation.y = Math.PI / 2;
          this.interpreter.root.position.set(IX + 3, 0, 1.2);
          this.interpreter.root.rotation.y = -Math.PI / 2;
          this.cb.setMusic?.('interpreter');
          this.cb.setObjective('🏚 The House of the Interpreter — walk on to see what he shows you');
        };
        if (this.cb.fade) this.cb.fade(enterHouse);
        else enterHouse();
      });
      return;
    }

    // the Interpreter calls out if Christian walks straight past his door
    if (
      this.phase === 'freeroam' && !this.houseGreeted && !this.houseCalledOut &&
      p.x > COTTAGE_X + 5
    ) {
      this.houseCalledOut = true;
      this.cb.playScript([
        { speaker: 'Interpreter', text: 'Christian! Christian — over here! Will you not stop a moment at an old owl\'s door?' },
      ]);
    }

    // ---------- roadside doubts on the long approach ----------
    if (this.phase === 'approach') {
      const mutters: Array<[number, DialogueLine[]]> = [
        [-45, [
          { speaker: 'Christian', text: '*mutter* …Left my home. Lost my friend in a bog. Nearly crushed beneath a burning mountain. And still this burden sits like a millstone…' },
          { speaker: 'Christian', text: 'Is this truly the way? There is no one even to ask.' },
        ]],
        [-30, [
          { speaker: 'Christian', text: '…What a fool I was, to listen to Worldly Wiseman. Smooth words, smooth road — and it led me straight under Sinai.' },
          { speaker: 'Christian', text: 'Evangelist forgave me. But will the Gate? What if they ask where I have been… and shut it in my face?' },
        ]],
        [-15, [
          { speaker: 'Christian', text: 'So far… and so straight. Not one turning. As if the road itself were telling me: no more byways, old bear.' },
          { speaker: 'Christian', text: '*sigh* Help said it. Evangelist said it. "Knock, and it shall be opened." Keep walking, Christian. Just keep walking.' },
        ]],
      ];
      if (this.mutterIndex < mutters.length && p.x > mutters[this.mutterIndex][0]) {
        const lines = mutters[this.mutterIndex][1];
        this.mutterIndex++;
        this.cb.playScript(lines);
        return;
      }
      // reaching the gate → the knock
      if (p.x > GATE_X - 3.2 && Math.abs(p.z) < 4) {
        this.phase = 'knock';
        this.christian.root.rotation.y = Math.PI / 2;
        this.cb.playScript([
          { speaker: '', text: 'The gate is shut. Above it, an old inscription reads: "Knock, and it shall be opened unto you."' },
          { speaker: 'Christian', text: '*knock… knock…* May I enter here? Will he within open to sorry me, though I have been an undeserving rebel?' },
          { speaker: '???', text: '(a deep, warm voice, like far-off thunder that means no harm) Who knocks?' },
          { speaker: 'Christian', text: 'A poor burdened sinner, come from the City of Destruction. I am bound for the Celestial City — they told me the way lies through this Gate.' },
          { speaker: 'Goodwill', text: 'Then willingly do I open. We turn none away who knock — none.' },
        ], () => {
          // the doors swing wide; a great lion stands within
          this.doorOpen = true;
          this.goodwill.root.visible = true;
          this.cb.blipSound();
          this.cb.playScript([
            { speaker: '', text: 'The doors swing open — and there stands a LION, golden-maned and robed in white, filling the gateway like sunrise.' },
            { speaker: 'Goodwill', text: 'I am Goodwill, keeper of this Gate. But stand not in the open, friend—' },
            { speaker: 'Goodwill', text: 'Yonder castle belongs to BEELZEBUB, and his archers shoot at every pilgrim who dares my doorstep. QUICKLY — give me your paw!' },
          ], () => {
            this.phase = 'volley';
            this.volleyT = 0;
            this.arrowTimer = 0;
            this.cb.rumbleSound();
            this.cb.setObjective('🏹 Arrows from the dark castle…!');
          });
        });
        return;
      }
    }
  }

  private fireArrow(): void {
    const a = this.arrows.find((x) => !x.active);
    if (!a) return;
    const p = this.christian.root.position;
    a.active = true;
    a.t = 0;
    a.from.set(CASTLE.x - 1, 7.5, CASTLE.z + 2);
    // aimed near Christian and the gate — always a near miss
    a.to.set(
      p.x - 2.5 + Math.random() * 5,
      0.1,
      p.z + 1.5 + Math.random() * 3.5,
    );
    a.g.visible = true;
  }

  update(dt: number, t: number, moving: boolean): void {
    if (!this.built) return;
    animateBear(this.christian, t, moving && this.moveFactor() > 0);
    if (this.goodwill.root.visible) animateBear(this.goodwill, t + 0.7, false);

    // the Interpreter walks (never teleports) between vignettes, and always
    // turns to face Christian once he arrives. While the House's rooms are in
    // play, he routes through the centre gap first rather than cutting
    // diagonally through a partition wall, then steps aside at the very end.
    if (this.interpreterTarget) {
      const ip = this.interpreter.root.position;
      const dx = this.interpreterTarget.x - ip.x;
      const xClose = Math.abs(dx) < 0.3;
      const inHouse = this.phase === 'house' || this.phase === 'houseExit';
      const stepZTarget = (!inHouse || xClose) ? this.interpreterTarget.z : 0;
      const dz = stepZTarget - ip.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.12) {
        const step = Math.min(9 * dt, d);
        ip.x += (dx / d) * step;
        ip.z += (dz / d) * step;
        this.interpreter.root.rotation.y = Math.atan2(dx, dz);
        animateBear(this.interpreter, t + 1.1, true);
      } else if (xClose) {
        ip.set(this.interpreterTarget.x, 0, this.interpreterTarget.z);
        this.interpreter.root.rotation.y = this.interpreterFaceOnArrive;
        this.interpreterTarget = null;
        animateBear(this.interpreter, t + 1.1, false);
      } else {
        animateBear(this.interpreter, t + 1.1, false);
      }
    } else {
      animateBear(this.interpreter, t + 1.1, false);
    }

    // the dust cloud billows up while it's being swept, and clears away once
    // the water is sprinkled — timed to the dialogue, not just ambient haze
    this.dustBurst += (this.dustBurstTarget - this.dustBurst) * Math.min(dt * 1.6, 1);
    for (const d of this.dust) {
      if (this.dustBurst > 0.02) {
        d.life += dt * (0.4 + this.dustBurst * 1.6);
        if (d.life >= 1) {
          d.life -= 1;
          d.mesh.position.set(d.baseX, 0.3, d.baseZ);
        }
        d.mesh.position.y += dt * (0.4 + this.dustBurst * 0.6);
      }
      d.mat.opacity = this.dustBurst * 0.55 * Math.sin(d.life * Math.PI);
    }
    // the water sprinkle: droplets rain down briefly, settling the dust
    if (this.sprinkleT > 0) {
      this.sprinkleT -= dt;
      this.sprinkleTimer -= dt;
      if (this.sprinkleTimer <= 0) {
        this.sprinkleTimer = 0.03;
        const drop = this.sprinkle.find((sp) => !sp.active);
        if (drop) {
          const stX = STATIONS[0] + (Math.random() - 0.5) * 2.8;
          const stZ = -3.2 + (Math.random() - 0.5) * 2.4;
          drop.active = true;
          drop.vy = 3.5 + Math.random();
          drop.mesh.position.set(stX, 1.8 + Math.random() * 0.4, stZ);
          drop.mesh.visible = true;
          drop.mat.opacity = 0.85;
        }
      }
    }
    for (const drop of this.sprinkle) {
      if (!drop.active) continue;
      drop.mesh.position.y -= drop.vy * dt;
      if (drop.mesh.position.y <= 0.05) {
        drop.active = false;
        drop.mesh.visible = false;
      }
    }
    // the fire that never goes out
    for (let i = 0; i < this.fireMotes.length; i++) {
      const mesh = this.fireMotes[i];
      const s = 0.85 + 0.3 * Math.abs(Math.sin(t * 6 + i * 1.7));
      mesh.scale.set(1, s, 1);
    }
    // the devil endlessly tips his pail; Christ, unseen, endlessly tips his oil
    if (this.devilArm) this.devilArm.rotation.x = -0.9 + Math.sin(t * 2.2) * 0.5;
    if (this.christArm) this.christArm.rotation.x = -0.9 + Math.sin(t * 1.8 + 1) * 0.5;

    // the gate doors swing
    const doorTarget = this.doorOpen ? 1.7 : 0;
    if (this.doorL && this.doorR) {
      this.doorL.rotation.y += (-doorTarget - this.doorL.rotation.y) * 0.06;
      this.doorR.rotation.y += (doorTarget - this.doorR.rotation.y) * 0.06;
    }
    // the cottage door swings open to welcome Christian in, and shut behind him
    if (this.cottageDoor) {
      const cDoorTarget = this.houseDoorOpen ? -2.1 : 0;
      this.cottageDoor.rotation.y += (cDoorTarget - this.cottageDoor.rotation.y) * 0.08;
    }
    // the far door out of the hall swings open once the farewell is said,
    // and fades gently between solid and translucent as it opens/shuts
    if (this.exitDoor) {
      const eDoorTarget = this.exitDoorOpen ? -2.1 : 0;
      this.exitDoor.rotation.y += (eDoorTarget - this.exitDoor.rotation.y) * 0.08;
      if (this.exitDoorMat) {
        const opTarget = this.exitDoorOpen ? 0.75 : 1;
        this.exitDoorMat.opacity += (opTarget - this.exitDoorMat.opacity) * 0.05;
      }
    }

    // castle windows pulse balefully
    for (let i = 0; i < this.castleGlows.length; i++) {
      (this.castleGlows[i].material as THREE.MeshBasicMaterial).opacity =
        0.5 + 0.4 * Math.abs(Math.sin(t * 1.7 + i * 1.9));
    }

    // ---------- the volley: arrows rain while Goodwill pulls him through ----------
    if (this.phase === 'volley') {
      this.volleyT += dt;
      this.arrowTimer -= dt;
      if (this.arrowTimer <= 0 && this.volleyT < 2.0) {
        this.arrowTimer = 0.22;
        this.fireArrow();
      }
      if (this.volleyT > 2.4) {
        // safely through — the two stand apart, face to face behind the wall
        this.phase = 'inside';
        this.christian.root.position.set(GATE_X + 2.4, 0, 1.3);
        this.christian.root.rotation.y = Math.PI; // faces north, toward the lion
        this.goodwill.root.position.set(GATE_X + 3.6, 0, -1.7);
        this.goodwill.root.rotation.y = 0; // faces south, toward Christian
        this.cb.setObjective('⛩ Safe behind the Gate');
        this.cb.blipSound();
        this.cb.playScript([
          { speaker: '', text: 'A great paw closes over Christian\'s, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side.' },
          { speaker: 'Goodwill', text: 'There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now.' },
          { speaker: 'Christian', text: '*catching his breath* You… you know my name?' },
          { speaker: 'Goodwill', text: 'I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?' },
          { speaker: 'Christian', text: 'I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir.' },
          { speaker: 'Goodwill', text: 'And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one.' },
          { speaker: 'Christian', text: 'Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?' },
          { speaker: 'Goodwill', text: 'Not here, dear pilgrim. Be content to bear it a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where none shall ever find it.' },
          { speaker: 'Goodwill', text: 'Look east. That is the King\'s Highway — straight and narrow, cast up by the King and His Son. Keep to it; turn neither left nor right, and you cannot lose your way.' },
          { speaker: 'Christian', text: 'Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not.' },
          { speaker: 'Goodwill', text: '*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you.' },
        ], () => {
          this.phase = 'freeroam';
          if (this.lightBeam) this.lightBeam.visible = true;
          this.cb.setObjective('✨ Walk the straight and narrow way, toward the light');
        });
      }
    }

    // arrows in flight
    for (const a of this.arrows) {
      if (!a.active) continue;
      a.t += dt * 1.4;
      if (a.t >= 1) {
        // stuck in the earth, then fades away
        if (a.t > 1.8) { a.active = false; a.g.visible = false; }
        else {
          a.g.position.set(a.to.x, 0.35, a.to.z);
          a.g.rotation.set(1.15, 0, 0);
        }
        continue;
      }
      const x = THREE.MathUtils.lerp(a.from.x, a.to.x, a.t);
      const z = THREE.MathUtils.lerp(a.from.z, a.to.z, a.t);
      const y = THREE.MathUtils.lerp(a.from.y, a.to.y, a.t) + Math.sin(a.t * Math.PI) * 4;
      // orient along the flight path
      const nt = Math.min(a.t + 0.05, 1);
      const nx = THREE.MathUtils.lerp(a.from.x, a.to.x, nt);
      const nz = THREE.MathUtils.lerp(a.from.z, a.to.z, nt);
      const ny = THREE.MathUtils.lerp(a.from.y, a.to.y, nt) + Math.sin(nt * Math.PI) * 4;
      a.g.position.set(x, y, z);
      a.g.lookAt(nx, ny, nz);
    }

    // the far light pulses
    if (this.lightBeam && this.lightBeam.visible) {
      const sc = 1 + Math.sin(t * 2.4) * 0.12;
      this.lightBeam.scale.set(sc, 1, sc);
    }

    // reaching the light completes the chapter
    if (this.phase === 'freeroam' && this.christian.root.position.x > HIGHWAY_END - 2) {
      this.phase = 'done';
      this.cb.onComplete();
    }
  }
}
