import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, BearParts, block, mat } from './bear';
import { setupSunShadow } from './light';
import { DialogueLine } from './npcs';
import { addHighwayPaving } from './road';

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
const CASTLE = new THREE.Vector3(4, 0, -15); // Beelzebub's castle, outside (west of) the gate
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
const PARTITION_GAP = 2.2; // the walkway gap left open through each partition wall — wide enough to pass through smoothly
const CAGE_X = STATIONS[4] - 4; // the caged man's station — kept clear of hall lamps

const HOUSE_GREET_LINES: DialogueLine[] = [
  { speaker: '', text: 'A little way past the Gate, off the King\'s Highway, stands a cottage of warm timber with smoke curling from its chimney — the House of the Interpreter.' },
  { speaker: 'Interpreter', text: '(an owl in a scholar\'s robe, blinking down from the doorway) Christian! Goodwill sent word you\'d be coming. Come in, come in — I have things to show you that will help you greatly on your journey.' },
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
    { speaker: 'Interpreter', text: 'So it is with the children of this world, who must have their good things now, and the children of the world to come, who can wait for theirs — for theirs will never rust or fade away.' },
    { speaker: 'Christian', text: 'Better to wait for treasure that lasts, than seize a joy that crumbles in the hand.' },
  ],
  [ // 3. the fire against the wall
    { speaker: '', text: 'Against a wall a fire burns, and a man stands before it, endlessly emptying pails of water on the flames.' },
    { speaker: 'Christian', text: 'Strange — the more he pours, the higher it burns! Why does it not go out?' },
    { speaker: 'Interpreter', text: 'Come round to the other side, and see.' },
    { speaker: '', text: 'Behind the wall, unseen from the front, another hand pours oil into the fire — secretly, steadily, without ceasing.' },
    { speaker: 'Interpreter', text: 'The man with the water is the Devil, forever working to put out the work of grace in the heart. The one with the oil is Christ — He keeps alive what His own hand has begun, even when His people cannot see Him doing it.' },
    { speaker: 'Christian', text: 'Then when I feel my faith failing under some trial, it may be only that I cannot see the hand still feeding it, behind the wall.' },
    { speaker: 'Interpreter', text: 'Just so, Christian. Just so.' },
  ],
  [ // 4. the armed man
    { speaker: '', text: 'A crowd of fearful people stands well back from a splendid palace, its gate thick with armed guards.' },
    { speaker: '', text: 'None of them dares approach — until one man of bold courage walks up and puts his name down to enter.' },
    { speaker: '', text: 'He takes up his helmet, shield, and sword, and fights through the guards, taking many hard blows, until at last he pushes through the doorway and enters.' },
    { speaker: '', text: 'A great shout of welcome rises from within.' },
    { speaker: 'Interpreter', text: 'Christian, you must push through difficulties to enter the kingdom of heaven. Write down your name, take up your weapons, and push in — whatever it costs you.' },
    { speaker: 'Christian', text: 'Then this road was never meant to be walked without a fight. I had hoped otherwise — but I would rather be wounded at that gate than turn away from it.' },
  ],
  [ // 5. the man in the iron cage
    { speaker: '', text: 'In a dim corner, a man sits caged behind bars of black iron, his head bowed low.' },
    { speaker: 'Christian', text: 'Friend, what brought you here?' },
    { speaker: '', text: '(the caged man, hollow-voiced) I was once a strong believer, respected in my own eyes and the eyes of others. I stopped watching myself, and hardness followed hardness, sin upon sin, until I could no longer repent, though I wanted to.' },
    { speaker: '', text: 'Now I am locked in this cage I made for myself, and I cannot get out.' },
    { speaker: 'Interpreter', text: 'Let his suffering be a warning to you. Treat sin as harmless, drift away little by little, and you may wake one day to find the door already shut — from the inside.' },
    { speaker: 'Christian', text: '*shivering* A dreadful sight. God keep me watchful, and never so careless with sin as he was.' },
  ],
  [ // 6. the dream of judgment
    { speaker: '', text: 'A man sits bolt upright in his bed, trembling, sweat on his brow, staring as though he still saw the vision that woke him.' },
    { speaker: '', text: '(the man, shaking) I dreamed the heavens grew black as pitch, and the trumpet sounded, and the clouds parted, and I stood before the great white throne, unready, without a plea to offer.' },
    { speaker: 'Interpreter', text: 'Don\'t let it remain just a dream, Christian. That day comes for every soul alike. Live each one as a man who must give account — and you won\'t be caught unready when the trumpet truly sounds.' },
    { speaker: 'Christian', text: 'I will remember this room longest of all, sir. It has put a solemn weight on me — a good weight, I think, unlike the one on my back.' },
  ],
];

const FAREWELL_LINES: DialogueLine[] = [
  { speaker: 'Christian', text: 'Sir, I thank you with all my heart. I came in confused, and I go out instructed — the dust and the Law, the fire and the oil, the cage, the dream — I will carry every one of them with me.' },
  { speaker: 'Interpreter', text: 'Go then, Christian, and the Lord be with you upon the King\'s Highway. Always remember what you\'ve seen here, and let it strengthen and comfort you for the rest of your journey.' },
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
  private hasPassedGate = false; // true once he's safely through — archers still watch the open ground
  private peekBlocked = false;   // hysteresis so the "get back!" line doesn't repeat every frame
  private peekVolley = 0;        // arrows left to fire in the current peek volley
  private peekArrowTimer = 0;
  private goodwillNear = false;  // hysteresis for re-approaching Goodwill after the gate scene
  private goodwillEntering = false;
  private goodwillEntranceDone: (() => void) | null = null;

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
  private waterDrops: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; active: boolean }> = [];
  private oilDrops: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; active: boolean }> = [];
  private dropTimer = 0;
  private cottageDoor: THREE.Group | null = null;
  private houseDoorOpen = false;
  private exitDoor: THREE.Group | null = null;
  private exitDoorOpen = false;
  // the Interpreter walks (rather than teleports) between vignettes
  private interpreterTarget: THREE.Vector3 | null = null;
  private interpreterFaceOnArrive = 0;
  private interpreterIdleTalked = false; // greeted once if Christian walks up before moving on
  private interpreterExitTalked = false; // re-talk near exit door after farewell
  private footDust: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; vx: number; vz: number }> = [];
  private footDustTimer = 0;
  // the dusty room's two servants
  private sweeper: BearParts | null = null;
  private sweeperArm: THREE.Group | null = null;
  private waterer: BearParts | null = null;
  private watererArm: THREE.Group | null = null;
  // the children's room
  private toyBall: THREE.Mesh | null = null;
  private passionArm: THREE.Group | null = null;
  // the dream of judgment — the dreamer trembles, sweat beading on his brow
  private dreamer: BearParts | null = null;
  private sweatDrops: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; baseY: number }> = [];
  // partition walls Christian can't walk through
  private partitionXs: number[] = [];
  // solid characters/props Christian can't walk through, inside the House
  private houseColliders: Array<{ x: number; z: number; r: number }> = [];
  // a short flavour line the first time Christian walks up to each NPC
  private npcTalks: Array<{ parts: BearParts; lines: DialogueLine[]; talked: boolean; radius: number }> = [];
  // the armed man: fights his way past the guards, then enters the gate
  private knight: BearParts | null = null;
  private knightArm: THREE.Group | null = null;
  private knightShieldArm: THREE.Group | null = null;
  private knightState: 'idle' | 'fighting' | 'entering' | 'done' = 'idle';
  private knightT = 0;
  private guards: BearParts[] = [];
  private guardBaseX: number[] = [];
  private guardStagger: number[] = [];
  private knightDoorPos = new THREE.Vector3();
  // the fire against the wall — glow + rising embers
  private fireGlow: THREE.PointLight | null = null;
  private embers: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; baseX: number; baseZ: number }> = [];

  constructor(cb: WicketCallbacks) {
    this.cb = cb;
    this.christian = makeBear({
      species: 'bear', fur: PALETTE.bearBrown,
      outfit: 'shirt', outfitColor: 0x8fb8d8,
      sling: true, burden: true, plump: true,
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
    setupSunShadow(sun);
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -70;
    sun.shadow.camera.right = 70;
    sun.shadow.camera.top = 45;
    sun.shadow.camera.bottom = -45;
    s.add(sun);

    // rolling ground — runs the full length of the road, past the gate and
    // all the way out to the light at the end of the King's Highway
    const ground = new THREE.Mesh(new THREE.BoxGeometry(210, 1, 90), mat(0x9dc793));
    ground.position.set(10, -0.5, 0);
    ground.receiveShadow = true;
    s.add(ground);
    for (let i = 0; i < 90; i++) {
      const x = -70 + Math.random() * 185;
      const z = -35 + Math.random() * 70;
      const p = block(0.9 + Math.random() * 1.6, 0.1, 0.9 + Math.random() * 1.6,
        Math.random() > 0.5 ? 0x8cba80 : 0xaad49c, x, 0.05, z);
      p.castShadow = false;
      s.add(p);
    }

    // ---------- the long straight road, west → the gate → the highway ----------
    addHighwayPaving(s, -62, 11, { width: 3.2 });
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
    // Layered, uneven crag rooted into the hillside.
    castle.add(block(9.2, 1.2, 7.4, 0x76717d, 0, 0.6, 0));
    castle.add(block(8.0, 1.2, 6.5, 0x686370, -0.35, 1.55, -0.15));
    castle.add(block(7, 1.2, 5.5, 0x5e5967, 0.2, 2.45, 0));
    castle.add(block(5.5, 3.4, 4.2, DARK, 0, 4.4, 0));  // keep
    castle.add(block(1.6, 5.4, 1.6, DARKER, -2.6, 4.8, -1.4)); // towers
    castle.add(block(1.6, 6.2, 1.6, DARKER, 2.4, 5.2, 1.2));
    castle.add(block(1.3, 4.8, 1.3, DARK, 2.6, 4.5, -1.8));
    castle.add(block(1.45, 4.9, 1.45, DARKER, -2.45, 4.55, 1.5));
    // Curtain-wall shoulders connect every tower into one fortress silhouette.
    castle.add(block(5.5, 2.1, 0.7, 0x514b5b, 0, 4.0, 2.05));
    castle.add(block(5.5, 2.0, 0.7, 0x514b5b, 0, 4.0, -2.05));
    castle.add(block(0.7, 2.0, 3.5, 0x514b5b, -2.55, 4.0, 0));
    castle.add(block(0.7, 2.0, 3.5, 0x514b5b, 2.55, 4.0, 0));
    // jagged battlements
    for (let i = 0; i < 5; i++) {
      castle.add(block(0.7, 0.7, 0.7, DARKER, -2 + i * 1.05, 6.4, 0));
    }
    // Crenellations around the front wall and tower tops.
    for (const z of [-2.22, 2.22]) {
      for (let i = 0; i < 6; i++) {
        castle.add(block(0.5, 0.55, 0.5, 0x403b49, -2.45 + i * 0.98, 5.35, z));
      }
    }
    for (const [tx, ty, tz, tw] of [
      [-2.6, 7.75, -1.4, 1.9], [2.4, 8.55, 1.2, 1.9],
      [2.6, 7.05, -1.8, 1.55], [-2.45, 7.05, 1.5, 1.7],
    ] as const) {
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(tw * 0.72, 1.45, 4),
        mat(0x342f3c),
      );
      roof.position.set(tx, ty, tz);
      roof.rotation.y = Math.PI / 4;
      roof.castShadow = true;
      castle.add(roof);
    }
    // A recessed gate and iron teeth face the Wicket Gate across the road.
    castle.add(block(1.55, 1.9, 0.16, 0x211d27, 0, 3.75, 2.43));
    castle.add(block(2.15, 0.42, 0.32, 0x403b49, 0, 4.82, 2.38));
    for (const gx of [-0.58, -0.2, 0.2, 0.58]) {
      castle.add(block(0.1, 1.7, 0.12, 0x18151c, gx, 3.78, 2.54));
    }
    // Narrow arrow slits make the threat of the archers visible.
    for (const [wx, wy, wz] of [
      [-1.65, 4.55, 2.42], [1.65, 4.55, 2.42],
      [-2.6, 5.55, -0.55], [2.42, 6.1, 1.98],
    ] as const) {
      castle.add(block(0.16, 0.62, 0.08, 0x17141c, wx, wy, wz));
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
    for (const [bx, bz] of [[-1, -9], [8, -10], [1, -20], [9, -18]] as const) {
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
      let lz = i % 2 === 0 ? -HOUSE_HALF + 0.4 : HOUSE_HALF - 0.4;
      // dodge the caged man's bars — a south-side lamp there would clip
      // straight through the cage
      if (Math.abs(lx - CAGE_X) < 1.8) lz = HOUSE_HALF - 0.4;
      const lamp = new THREE.Group();
      lamp.add(block(0.14, 2.1, 0.14, PALETTE.woodDark, 0, 1.05, 0));
      const bulb = block(0.32, 0.32, 0.32, PALETTE.light, 0, 2.15, 0);
      bulb.material = new THREE.MeshLambertMaterial({
        color: PALETTE.light, emissive: 0xfff0b0, emissiveIntensity: 0.5,
      });
      lamp.add(bulb);
      lamp.position.set(lx, 0, lz);
      s.add(lamp);
    }

    // small partition walls between rooms — just enough to read as separate
    // spaces, with a gap down the centre of the hall to walk through
    const PARTITION_COLORS = [PALETTE.wallPink, PALETTE.wallMint, PALETTE.wallLilac];
    const span = HOUSE_HALF - PARTITION_GAP;
    this.partitionXs = [
      IX + 3,
      ...STATIONS.slice(1).map((sx, i) => (STATIONS[i] + sx) / 2),
      HOUSE_EXIT_X - 6,
    ];
    this.partitionXs.forEach((wx, i) => {
      const color = PARTITION_COLORS[i % PARTITION_COLORS.length];
      s.add(block(0.14, 2.2, span, color, wx, 1.1, -(PARTITION_GAP + HOUSE_HALF) / 2));
      s.add(block(0.14, 2.2, span, color, wx, 1.1, (PARTITION_GAP + HOUSE_HALF) / 2));
    });

    // 1. the dusty room (south alcove) — two mouse servants: one sweeps,
    // one follows after with water
    {
      const x = STATIONS[0];
      s.add(block(3.2, 0.05, 3.0, 0xcbb98a, x, 0.03, -3.2));
      s.add(block(0.4, 0.3, 0.4, PALETTE.stone, x + 0.9, 0.15, -3.4)); // water bucket (the source)

      const sweeper = makeBear({ species: 'mouse', outfit: 'overalls', outfitColor: 0x8a6f52, scale: 0.52 });
      sweeper.root.position.set(x - 0.9, 0, -2.7);
      sweeper.root.rotation.y = 0.5;
      const broomHandle = new THREE.Group();
      broomHandle.add(block(0.07, 0.85, 0.07, PALETTE.woodDark, 0, -0.35, 0.1));
      broomHandle.add(block(0.24, 0.18, 0.1, 0xc9a865, 0, -0.8, 0.16)); // bristles
      sweeper.armR.add(broomHandle);
      s.add(sweeper.root);
      this.sweeper = sweeper;
      this.sweeperArm = sweeper.armR;
      this.houseColliders.push({ x: x - 0.9, z: -2.7, r: 0.4 });
      this.npcTalks.push({
        parts: sweeper, talked: false, radius: 1.1,
        lines: [{ speaker: '', text: '(the little sweeper, between coughs) It never comes truly clean this way, sir — the harder I sweep, the worse it gets!' }],
      });

      const waterer = makeBear({ species: 'mouse', outfit: 'shirt', outfitColor: 0x8fb8d8, scale: 0.52 });
      waterer.root.position.set(x + 1.0, 0, -3.6);
      waterer.root.rotation.y = -0.6;
      const pail = block(0.2, 0.22, 0.18, 0x4a4440, 0, -0.45, 0.14);
      waterer.armR.add(pail);
      s.add(waterer.root);
      this.waterer = waterer;
      this.watererArm = waterer.armR;
      this.houseColliders.push({ x: x + 1.0, z: -3.6, r: 0.4 });
      this.npcTalks.push({
        parts: waterer, talked: false, radius: 1.1,
        lines: [{ speaker: '', text: '(the little waterer, pail in hand) A splash of water first, and the dust lies down like a lamb. Sweeping alone never once managed it.' }],
      });

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

    // 2. the two children (north alcove) — Passion buried in toys on the
    // left, Patience sitting quietly on the right with nothing around her
    {
      const x = STATIONS[1];
      const passion = makeBear({ species: 'bear', outfit: 'shirt', outfitColor: 0xe8834a, scale: 0.68 });
      passion.root.position.set(x - 1.3, 0, 1.6);
      passion.root.rotation.y = 0.5;
      // a little rag doll, held and waved about
      const doll = new THREE.Group();
      doll.add(block(0.14, 0.22, 0.1, 0xffd6a5, 0, 0, 0));
      doll.add(block(0.13, 0.13, 0.1, 0xf7c8d4, 0, 0.17, 0));
      doll.position.set(0, -0.28, 0.2);
      passion.armR.add(doll);
      s.add(passion.root);
      this.passionArm = passion.armR;
      this.houseColliders.push({ x: x - 1.3, z: 1.6, r: 0.45 });
      this.npcTalks.push({
        parts: passion, talked: false, radius: 1.2,
        lines: [{ speaker: 'Passion', text: 'Mine! All of it, NOW! Why should I wait for anything, when I can have it all today?' }],
      });
      // toys scattered all around her
      for (const [tx, tz, c] of [[-2.2, 0.5, 0xffe08a], [-1.8, 1.6, 0xffb3c6]] as const) {
        s.add(block(0.22, 0.22, 0.22, c, x + tx, 0.11, tz));
      }
      // a little wooden car
      const car = new THREE.Group();
      car.add(block(0.5, 0.2, 0.3, 0xff8a3d, 0, 0.15, 0));
      car.add(block(0.3, 0.14, 0.26, 0xffc35c, 0, 0.3, 0));
      for (const wx of [-0.18, 0.18]) {
        for (const wz of [-0.13, 0.13]) car.add(block(0.1, 0.1, 0.1, 0x2c2a30, wx, 0.06, wz));
      }
      car.position.set(x - 2.5, 0, 1.0);
      car.rotation.y = 0.6;
      s.add(car);
      // a bouncing ball
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mat(0xff6b81));
      ball.position.set(x - 1.6, 0.16, 2.2);
      ball.castShadow = true;
      s.add(ball);
      this.toyBall = ball;
      // gift boxes with ribbons
      for (const [gx, gz, c, rc] of [
        [-2.0, 2.3, 0xaecbff, 0xfff6c9],
        [-1.0, 0.6, PALETTE.dressLeaf, 0xffe08a],
      ] as const) {
        s.add(block(0.3, 0.3, 0.3, c, x + gx, 0.16, gz));
        s.add(block(0.32, 0.06, 0.06, rc, x + gx, 0.24, gz));
        s.add(block(0.06, 0.06, 0.32, rc, x + gx, 0.24, gz));
      }

      const patience = makeBear({ species: 'bear', outfit: 'overalls', outfitColor: PALETTE.dressLeaf, scale: 0.68 });
      patience.root.position.set(x + 1.6, 0, 1.8);
      patience.root.rotation.y = -0.5;
      s.add(patience.root);
      this.houseColliders.push({ x: x + 1.6, z: 1.8, r: 0.45 });
      this.npcTalks.push({
        parts: patience, talked: false, radius: 1.2,
        lines: [{ speaker: 'Patience', text: 'I\'d rather wait and have something that lasts, than grab at what falls apart in my hands.' }],
      });
    }

    // 3. the fire against the wall (south alcove) — devil on the left,
    // Christ on the right, the fire in the middle with the wall — rotated
    // 90°, now a fin running front-to-back — floating just above it
    {
      const x = STATIONS[2];
      const fireZ = -1.8;
      // the wall: rotated a quarter turn, so it's a thin fin dividing the
      // space front-to-back rather than a slab facing the walkway
      s.add(block(0.4, 1.5, 1.8, PALETTE.stone, x, 2.05, fireZ));
      // the fire, layered and detailed: a glowing core, licking flames, and
      // a warm light spilling out
      s.add(block(0.9, 0.14, 0.9, 0x4a4038, x, 0.08, fireZ)); // charred hearth base
      for (let i = 0; i < 14; i++) {
        const hue = [0xff8a3d, 0xffc35c, 0xff5c3d, 0xffe08a][i % 4];
        const m = new THREE.MeshBasicMaterial({ color: hue });
        const h = 0.3 + Math.random() * 0.55;
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.18 + Math.random() * 0.14, h, 0.18 + Math.random() * 0.14), m);
        mesh.position.set(x + (Math.random() - 0.5) * 0.8, h / 2 + 0.1, fireZ + (Math.random() - 0.5) * 0.6);
        s.add(mesh);
        this.fireMotes.push(mesh);
      }
      const glow = new THREE.PointLight(0xffa347, 1.8, 6);
      glow.position.set(x, 0.6, fireZ);
      s.add(glow);
      this.fireGlow = glow;
      // embers rising from the flames
      for (let i = 0; i < 10; i++) {
        const m = new THREE.MeshBasicMaterial({ color: 0xffcf7a, transparent: true, opacity: 0 });
        const ember = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.06), m);
        const baseX = x + (Math.random() - 0.5) * 0.7;
        const baseZ = fireZ + (Math.random() - 0.5) * 0.5;
        ember.position.set(baseX, 0.3, baseZ);
        s.add(ember);
        this.embers.push({ mesh: ember, mat: m, life: Math.random(), baseX, baseZ });
      }
      // the devil, on the left, pouring water into the fire
      const devil = makeBear({ species: 'cat', outfit: 'none', fur: 0x5a5464, scale: 0.9 });
      devil.root.position.set(x - 1.8, 0, fireZ + 0.3);
      devil.root.rotation.y = Math.PI / 2; // faces right, toward the fire
      devil.armR.add(block(0.26, 0.34, 0.22, 0x4a4440, 0, -0.5, 0.16)); // pail, carried in hand
      s.add(devil.root);
      this.devilArm = devil.armR;
      this.houseColliders.push({ x: x - 1.8, z: fireZ + 0.3, r: 0.45 });
      this.npcTalks.push({
        parts: devil, talked: false, radius: 1.2,
        lines: [{ speaker: '', text: '(the dark figure pours, unblinking) Pour and pour... this fire will never go out, no matter what I do to smother it.' }],
      });
      // Christ, on the right, pouring oil into the same fire
      const christ = makeBear({ species: 'lion', outfit: 'robe', outfitColor: PALETTE.robeWhite, scale: 0.85 });
      christ.root.position.set(x + 1.8, 0, fireZ + 0.3);
      christ.root.rotation.y = -Math.PI / 2; // faces left, toward the fire
      christ.armR.add(block(0.22, 0.3, 0.2, PALETTE.robeGold, 0, -0.5, 0.16)); // oil jug, carried in hand
      s.add(christ.root);
      this.christArm = christ.armR;
      this.houseColliders.push({ x: x + 1.8, z: fireZ + 0.3, r: 0.45 });
      this.npcTalks.push({
        parts: christ, talked: false, radius: 1.2,
        lines: [{ speaker: '', text: '(a quiet voice, warm and steady) Have no fear, Christian. My grace feeds this flame, and it will never run dry.' }],
      });
      // water drops (blue) falling from the devil's pail into the fire
      for (let i = 0; i < 10; i++) {
        const m = new THREE.MeshBasicMaterial({ color: 0x5aa8e8, transparent: true, opacity: 0 });
        const drop = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.08), m);
        drop.visible = false;
        s.add(drop);
        this.waterDrops.push({ mesh: drop, mat: m, active: false });
      }
      // oil drops (bright yellow) falling from Christ's jug into the fire
      for (let i = 0; i < 10; i++) {
        const m = new THREE.MeshBasicMaterial({ color: 0xffe14d, transparent: true, opacity: 0 });
        const drop = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.08), m);
        drop.visible = false;
        s.add(drop);
        this.oilDrops.push({ mesh: drop, mat: m, active: false });
      }
    }

    // 4. the armed man and the palace (north alcove) — armored, sword and
    // shield in hand, fights his way past the guards, then enters the gate
    {
      const x = STATIONS[3];
      s.add(block(2.6, 2.8, 0.3, PALETTE.roofLilac, x, 1.4, 4.2)); // palace facade
      s.add(block(2.8, 0.3, 0.4, PALETTE.robeGold, x, 2.85, 4.2)); // cornice
      s.add(block(0.9, 1.7, 0.3, 0xfff6c9, x, 0.85, 4.05)); // glowing doorway
      this.knightDoorPos.set(x, 0, 3.85);

      this.guardBaseX = [];
      for (const gx of [-1.1, 1.1]) {
        const guard = makeBear({ species: 'pig', outfit: 'overalls', outfitColor: 0x5a5464, scale: 0.9 });
        guard.root.position.set(x + gx, 0, 3.0);
        guard.root.rotation.y = Math.PI;
        const spear = new THREE.Group();
        spear.add(block(0.06, 1.2, 0.06, PALETTE.woodDark, 0, 0.3, 0));
        spear.add(block(0.12, 0.24, 0.12, 0xc7c9cf, 0, 0.95, 0));
        guard.armR.add(spear);
        s.add(guard.root);
        this.guards.push(guard);
        this.guardStagger.push(0);
        this.guardBaseX.push(x + gx);
        this.houseColliders.push({ x: x + gx, z: 3.0, r: 0.45 });
      }

      const knight = makeBear({ species: 'bear', outfit: 'shirt', outfitColor: 0x8a8f9a, scale: 0.95 });
      knight.root.position.set(x, 0, 1.2);
      // a helmet
      knight.head.add(block(0.7, 0.22, 0.68, 0xc7c9cf, 0, 0.74, 0));
      knight.head.add(block(0.46, 0.14, 0.1, 0xc7c9cf, 0, 0.52, 0.42)); // visor bar
      // a shield on his left arm
      knight.armL.add(block(0.36, 0.5, 0.1, 0x8a8f9a, 0, -0.3, 0.2));
      knight.armL.add(block(0.18, 0.24, 0.11, PALETTE.robeGold, 0, -0.3, 0.24)); // shield boss
      // a sword in his right hand
      const swordGrp = new THREE.Group();
      swordGrp.add(block(0.08, 0.7, 0.08, 0xd8d3cc, 0, -0.15, 0));
      swordGrp.add(block(0.22, 0.1, 0.08, 0x8a6f52, 0, -0.46, 0)); // hilt guard
      knight.armR.add(swordGrp);
      s.add(knight.root);
      this.knight = knight;
      this.knightArm = knight.armR;
      this.knightShieldArm = knight.armL;
      this.houseColliders.push({ x, z: 1.2, r: 0.45 });
      this.npcTalks.push({
        parts: knight, talked: false, radius: 1.3,
        lines: [{ speaker: '', text: '(the armoured man, standing bravely) Write down your name, friend, and take up your sword. This road needs courage.' }],
      });
    }

    // 5. the man in the iron cage (south alcove) — bars on all four sides,
    // tucked into a real corner where the back wall meets the room's edge
    {
      const cx = CAGE_X;
      const HW = 1.1;
      const HD = 0.95;
      const BARH = 2.1;
      const cz = -(HOUSE_HALF - HD - 0.2); // clear of the back wall
      s.add(block(HW * 2, 0.05, HD * 2, 0x3a3640, cx, 0.03, cz)); // cage floor
      const barMat = 0x2c2a30;
      for (const bx of [-1.1, -0.55, 0, 0.55, 1.1]) {
        s.add(block(0.06, BARH, 0.06, barMat, cx + bx, BARH / 2, cz - HD)); // back bars
        s.add(block(0.06, BARH, 0.06, barMat, cx + bx, BARH / 2, cz + HD)); // front bars
      }
      for (const bz of [-0.63, 0, 0.63]) {
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
      // the cage itself blocks the way — bigger than the man inside it
      this.houseColliders.push({ x: cx, z: cz, r: Math.max(HW, HD) + 0.1 });
      this.npcTalks.push({
        parts: caged, talked: false, radius: 1.6,
        lines: [{ speaker: '', text: '(the caged man, barely lifting his head) Don\'t linger here on my account, friend. Just... don\'t let your heart go hard the way mine did.' }],
      });
    }

    // 6. the dream of judgment (north alcove) — a longer bed, seated (not
    // standing), trembling, sweat beading on his brow
    {
      const x = STATIONS[5];
      const bz = 3.0;
      s.add(block(1.1, 0.3, 2.2, PALETTE.woodDark, x, 0.3, bz)); // longer bed frame
      s.add(block(1.0, 0.2, 2.0, 0xeef2ff, x, 0.5, bz)); // blanket
      s.add(block(0.5, 0.18, 0.4, 0xfff6e8, x, 0.6, bz - 0.95)); // pillow
      this.houseColliders.push({ x, z: bz, r: 1.15 });
      const dreamer = makeBear({ species: 'rabbit', outfit: 'none', scale: 0.85 });
      // hips at the blanket's height, legs swung forward so they stretch out
      // in front of him on top of the covers — reads as sitting, not standing
      dreamer.root.position.set(x, 0.6, bz - 0.3);
      dreamer.legL.rotation.x = -1.3;
      dreamer.legR.rotation.x = -1.3;
      s.add(dreamer.root);
      this.dreamer = dreamer;
      // sweat drops beading on his brow, animated falling
      const dropDefs: Array<[number, number]> = [[-0.26, 0.5], [0.28, 0.55]];
      for (const [dx, baseY] of dropDefs) {
        const m = new THREE.MeshBasicMaterial({ color: 0x6fc3f0, transparent: true, opacity: 0 });
        const drop = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.1, 0.07), m);
        drop.position.set(dx, baseY, 0.42);
        dreamer.head.add(drop);
        this.sweatDrops.push({ mesh: drop, mat: m, baseY });
      }
      this.npcTalks.push({
        parts: dreamer, talked: false, radius: 1.5,
        lines: [{ speaker: '', text: '(the man, still shaking) Don\'t wake me yet... no, wait — don\'t let it be real...' }],
      });
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
    // a real, solid door on a hinge, filling the doorway, swinging open
    // once the farewell is said
    const exitDoorPivot = new THREE.Group();
    exitDoorPivot.position.set(HOUSE_EXIT_X, 0, -DOOR_GAP);
    const exitPanel = block(0.14, 1.9, DOOR_GAP * 1.85, PALETTE.woodDark, 0, 0.95, DOOR_GAP * 0.925);
    exitDoorPivot.add(exitPanel);
    s.add(exitDoorPivot);
    this.exitDoor = exitDoorPivot;

    // foot-dust puffs while Christian walks (same system as Chapter I)
    for (let i = 0; i < 16; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), m);
      mesh.visible = false;
      mesh.castShadow = false;
      s.add(mesh);
      this.footDust.push({ mesh, mat: m, life: 1, vx: 0, vz: 0 });
    }
  }

  // ------------------------------------------------------------ runtime

  enter(revisit: boolean): { christian: BearParts } {
    this.build();
    this.revisit = revisit;
    this.mutterIndex = 0;
    this.volleyT = 0;
    this.houseGreeted = revisit; // revisiting skips the Interpreter's House
    this.houseCalledOut = false;
    this.interpreterIdleTalked = false;
    this.interpreterExitTalked = false;
    for (const t of this.npcTalks) t.talked = false;
    this.dustBurst = 0;
    this.dustBurstTarget = 0;
    this.sprinkleT = 0;
    this.knightState = 'idle';
    this.knightT = 0;
    if (this.knight) {
      this.knight.root.visible = true;
      this.knight.root.position.set(STATIONS[3], 0, 1.2);
      this.knight.root.rotation.set(0, 0, 0);
    }
    for (let i = 0; i < this.guards.length; i++) this.guardStagger[i] = 0;
    this.stationIndex = STATIONS.length;
    this.houseDoorOpen = false;
    this.exitDoorOpen = false;
    this.interpreterTarget = null;
    for (const a of this.arrows) { a.active = false; a.g.visible = false; }
    this.hasPassedGate = false;
    this.peekBlocked = false;
    this.peekVolley = 0;
    this.goodwillNear = false;
    this.goodwillEntering = false;
    this.goodwillEntranceDone = null;
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
      this.cb.setObjective('🚪 The Gate stands open — the narrow way runs east');
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
    this.interpreterIdleTalked = false;
    this.interpreterExitTalked = false;
    for (const t of this.npcTalks) t.talked = false;
    this.knightState = 'idle';
    this.knightT = 0;
    if (this.knight) {
      this.knight.root.visible = true;
      this.knight.root.position.set(STATIONS[3], 0, 1.2);
      this.knight.root.rotation.set(0, 0, 0);
    }
    for (let i = 0; i < this.guards.length; i++) this.guardStagger[i] = 0;
    this.hasPassedGate = target !== 'house';
    this.peekBlocked = false;
    this.peekVolley = 0;
    this.goodwillNear = false;
    if (target === 'house') {
      this.christian.root.position.set(IX, 0, 0);
      this.christian.root.rotation.y = Math.PI / 2;
      this.interpreter.root.position.set(IX + 1.5, 0, -1.8);
      this.interpreter.root.rotation.y = -Math.PI / 2;
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

  // Christian can't walk through a partition wall — only through its gap
  private resolvePartitions(p: THREE.Vector3): void {
    const halfT = 0.18; // thin wall + a sliver of clearance — just enough to stop clipping
    const gapHalf = PARTITION_GAP / 2 - 0.3; // a little slack so he doesn't catch on the edge
    if (Math.abs(p.z) < gapHalf) return; // inside the walkway gap — nothing blocks him
    for (const wx of this.partitionXs) {
      if (p.x > wx - halfT && p.x < wx + halfT) {
        p.x = p.x < wx ? wx - halfT : wx + halfT;
      }
    }
  }

  // Christian can't walk through the House's characters or furniture either
  private resolveHouseColliders(p: THREE.Vector3): void {
    for (const c of this.houseColliders) {
      const dx = p.x - c.x;
      const dz = p.z - c.z;
      const d = Math.hypot(dx, dz);
      if (d < c.r && d > 0.0001) {
        p.x = c.x + (dx / d) * c.r;
        p.z = c.z + (dz / d) * c.r;
      }
    }
  }

  afterMove(): void {
    const p = this.christian.root.position;
    this.resolvePeopleCollision(p);
    if (this.phase === 'house' || this.phase === 'houseExit') {
      this.resolvePartitions(p);
      this.resolveHouseColliders(p);
    }

    // ---------- inside the House of the Interpreter ----------
    if (this.phase === 'house' || this.phase === 'houseExit') {
      p.z = THREE.MathUtils.clamp(p.z, -HOUSE_HALF + 0.8, HOUSE_HALF - 0.8);
      p.x = THREE.MathUtils.clamp(p.x, IX - 2, HOUSE_EXIT_X + 3);

      if (this.phase === 'house') {
        // walk up to the Interpreter before moving on, and he'll greet you
        if (
          !this.interpreterIdleTalked && this.stationIndex === 0 &&
          p.distanceTo(this.interpreter.root.position) < 1.4
        ) {
          this.interpreterIdleTalked = true;
          this.cb.playScript([
            { speaker: 'Interpreter', text: 'Take your time, Christian. Walk on when you\'re ready, and I\'ll show you all that\'s here to see.' },
          ]);
          return;
        }
        // walk up to any of the House's characters, and they'll speak
        for (const t of this.npcTalks) {
          if (!t.talked && p.distanceTo(t.parts.root.position) < t.radius) {
            t.talked = true;
            this.cb.playScript(t.lines);
            return;
          }
        }
        if (this.stationIndex < STATIONS.length && p.x > STATIONS[this.stationIndex] - 2) {
          const idx = this.stationIndex;
          this.stationIndex++;
          // Interpreter walks to a scene-specific spot — never teleports
          const side = p.z >= 0 ? -1.6 : 1.6;
          if (idx === 0) {
            // sweeping: top-left corner (clear of servants and Christian's path), facing east
            this.interpreterTarget = new THREE.Vector3(STATIONS[0] - 2.0, 0, -2.0);
            this.interpreterFaceOnArrive = Math.PI / 2;
            this.christian.root.rotation.y = Math.PI; // face the sweeping servants
          } else if (idx === 1) {
            // children: top-right corner, facing down toward the kids
            this.interpreterTarget = new THREE.Vector3(STATIONS[1] + 2.0, 0, -1.8);
            this.interpreterFaceOnArrive = 0;
          } else if (idx === 2) {
            // fire/wall: top-left next to the devil, facing down into the room
            this.interpreterTarget = new THREE.Vector3(STATIONS[2] - 1.8, 0, -3.0);
            this.interpreterFaceOnArrive = 0;
          } else if (idx === 3) {
            // armed man: further left so he doesn't bump into Christian
            this.interpreterTarget = new THREE.Vector3(STATIONS[3] - 2.5, 0, side);
            this.interpreterFaceOnArrive = p.z >= 0 ? 0 : Math.PI;
          } else if (idx === 4) {
            // caged man: standard opposite side, Christian faces the cage
            this.interpreterTarget = new THREE.Vector3(STATIONS[4] - 1, 0, side);
            this.interpreterFaceOnArrive = p.z >= 0 ? 0 : Math.PI;
            this.christian.root.rotation.y = Math.PI; // face toward cage (top of screen)
          } else {
            this.interpreterTarget = new THREE.Vector3(STATIONS[idx] - 1, 0, side);
            this.interpreterFaceOnArrive = p.z >= 0 ? 0 : Math.PI;
          }
          if (idx === 0) {
            // the dusty room: fill it with a choking cloud, then settle it
            // with a sprinkle of water, timed to the dialogue
            this.dustBurstTarget = 1;
            this.cb.playScript(DUST_LINES_A, () => {
              this.dustBurstTarget = 0;
              this.sprinkleT = 1.6;
              this.cb.playScript(DUST_LINES_B);
            });
          } else if (idx === 3) {
            // armed man: fight starts after setup narration; knight only enters
            // the gate when the Interpreter's dialogue cues it
            this.cb.playScript([VIGNETTES[2][0], VIGNETTES[2][1]], () => {
              this.knightState = 'fighting';
              this.knightT = 0;
              this.cb.playScript([VIGNETTES[2][2], VIGNETTES[2][3]], () => {
                this.knightState = 'entering';
                this.knightT = 0;
                this.cb.playScript([VIGNETTES[2][4], VIGNETTES[2][5]]);
              });
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

      // houseExit: once Christian walks through the open door, cut back outside
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
      // re-talk to Interpreter near the exit door if Christian doubles back
      if (!this.interpreterExitTalked && p.distanceTo(this.interpreter.root.position) < 1.8) {
        this.interpreterExitTalked = true;
        this.cb.playScript([
          { speaker: 'Interpreter', text: 'Still here, Christian? The road is waiting — but it\'s good to pause and look back sometimes.' },
          { speaker: 'Interpreter', text: 'Everything you\'ve seen today will make more sense the further you walk. Now go — grace will carry you to the end.' },
        ]);
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

    // once through the Gate, Beelzebub's archers still watch the open ground
    // before it — try to step back out and they loose another volley,
    // simulating that the enemy is always there
    if (this.hasPassedGate && !this.revisit && this.phase === 'freeroam' && p.x < GATE_X - 1.2) {
      p.x = GATE_X - 1.2;
      if (!this.peekBlocked) {
        this.peekBlocked = true;
        this.peekVolley = 5;
        this.peekArrowTimer = 0;
        this.cb.rumbleSound();
        this.cb.playScript([
          { speaker: 'Goodwill', text: 'Careful! Beelzebub\'s archers never sleep — stay behind the wall, Christian!' },
        ]);
      }
    } else if (p.x > GATE_X + 0.5) {
      this.peekBlocked = false;
    }

    // walk up to Goodwill again, behind the Gate, and he'll gladly talk
    if (
      this.goodwill.root.visible && (this.phase === 'freeroam' || this.phase === 'done') &&
      p.distanceTo(this.goodwill.root.position) < 2.2
    ) {
      if (!this.goodwillNear) {
        this.goodwillNear = true;
        this.cb.playScript([
          { speaker: 'Goodwill', text: 'Still here, are you? The Highway lies straight ahead, Christian — I told you true.' },
          { speaker: 'Goodwill', text: 'Keep that shining light before your eyes. It has never yet led a pilgrim wrong.' },
        ]);
      }
    } else {
      this.goodwillNear = false;
    }

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
          this.interpreter.root.position.set(IX + 1.5, 0, -1.8);
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
        { speaker: 'Interpreter', text: 'Christian! Christian — over here! Won\'t you stop a moment at an old owl\'s door?' },
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
          { speaker: 'Christian', text: '*sigh* Help said it. Evangelist said it. "Knock, and it will be opened." Keep walking, Christian. Just keep walking.' },
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
          { speaker: '', text: 'The gate is shut. Above it, an old inscription reads: "Knock, and it will be opened to you."' },
          { speaker: 'Christian', text: '*knock… knock…* May I come in? Will the keeper open the gate for someone as lost and burdened as me?' },
          { speaker: '???', text: '(a deep, warm voice, like far-off thunder that means no harm) Who knocks?' },
          { speaker: 'Christian', text: 'I am a burdened traveller from the City of Destruction. I am going to the Celestial City, and they told me the road begins through this Gate.' },
          { speaker: 'Goodwill', text: 'Then I gladly open it. We turn no one away who knocks — no one.' },
        ], () => {
          // The doors swing wide while Goodwill walks out from within rather
          // than appearing instantly in the gateway.
          this.doorOpen = true;
          this.goodwill.root.visible = true;
          this.goodwill.root.position.set(GATE_X + 5.2, 0, 0);
          this.goodwill.root.rotation.y = -Math.PI / 2;
          this.goodwillEntering = true;
          this.cb.blipSound();
          this.goodwillEntranceDone = () => {
            this.cb.playScript([
              { speaker: '', text: 'The doors swing open. A golden-maned LION in a white robe walks quickly from inside, warm and bright as sunrise.' },
              { speaker: 'Goodwill', text: 'I am Goodwill, keeper of this Gate. But don\'t stand in the open, friend—' },
              { speaker: 'Goodwill', text: 'That castle over there belongs to BEELZEBUB, and his archers shoot at every pilgrim who reaches my doorstep. QUICKLY — give me your paw!' },
            ], () => {
              this.phase = 'volley';
              this.volleyT = 0;
              this.arrowTimer = 0;
              this.cb.rumbleSound();
              this.cb.setObjective('🏹 Arrows from the dark castle…!');
            });
          };
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
    if (this.goodwill.root.visible) {
      if (this.goodwillEntering) {
        const targetX = GATE_X + 1.55;
        const remaining = this.goodwill.root.position.x - targetX;
        if (remaining > 0.08) {
          this.goodwill.root.position.x -= Math.min(remaining, dt * 3.0);
          this.goodwill.root.rotation.y = -Math.PI / 2;
          animateBear(this.goodwill, t + 0.7, true);
        } else {
          this.goodwill.root.position.x = targetX;
          this.goodwillEntering = false;
          animateBear(this.goodwill, t + 0.7, false);
          const onArrive = this.goodwillEntranceDone;
          this.goodwillEntranceDone = null;
          onArrive?.();
        }
      } else {
        // Goodwill keeps his attention on Christian during conversations and
        // whenever the player approaches him again.
        const dx = this.christian.root.position.x - this.goodwill.root.position.x;
        const dz = this.christian.root.position.z - this.goodwill.root.position.z;
        if (Math.hypot(dx, dz) > 0.05) this.goodwill.root.rotation.y = Math.atan2(dx, dz);
        animateBear(this.goodwill, t + 0.7, false);
      }
    }

    // foot-dust puffs while walking
    if (moving) {
      this.footDustTimer -= dt;
      if (this.footDustTimer <= 0) {
        this.footDustTimer = 0.13;
        const cp = this.christian.root.position;
        const fd = this.footDust.find((d) => d.life >= 1);
        if (fd) {
          fd.life = 0;
          fd.vx = (Math.random() - 0.5) * 0.8;
          fd.vz = (Math.random() - 0.5) * 0.8;
          fd.mesh.position.set(cp.x + (Math.random() - 0.5) * 0.5, 0.12, cp.z + (Math.random() - 0.5) * 0.5);
          fd.mesh.visible = true;
        }
      }
    }
    for (const fd of this.footDust) {
      if (fd.life >= 1) continue;
      fd.life = Math.min(1, fd.life + dt * 2.2);
      fd.mesh.position.x += fd.vx * dt;
      fd.mesh.position.z += fd.vz * dt;
      fd.mesh.position.y += dt * 0.9;
      const ss = 0.6 + fd.life * 1.6;
      fd.mesh.scale.setScalar(ss);
      fd.mat.opacity = 0.55 * (1 - fd.life);
      if (fd.life >= 1) fd.mesh.visible = false;
    }

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
    // the fire that never goes out — flickering flames, a pulsing glow, and
    // embers rising out of it
    for (let i = 0; i < this.fireMotes.length; i++) {
      const mesh = this.fireMotes[i];
      const s = 0.8 + 0.35 * Math.abs(Math.sin(t * 6.5 + i * 1.9));
      mesh.scale.set(1, s, 1);
    }
    if (this.fireGlow) this.fireGlow.intensity = 1.5 + Math.abs(Math.sin(t * 5)) * 0.8;
    for (const e of this.embers) {
      e.life += dt * 0.6;
      if (e.life >= 1) {
        e.life -= 1;
        e.mesh.position.set(e.baseX, 0.3, e.baseZ);
      }
      e.mesh.position.y += dt * 0.7;
      e.mesh.position.x += Math.sin(t * 3 + e.baseZ) * dt * 0.15;
      e.mat.opacity = 0.8 * (1 - e.life);
    }
    // the devil endlessly tips his pail; Christ, unseen, endlessly tips his oil
    if (this.devilArm) this.devilArm.rotation.x = -0.9 + Math.sin(t * 2.2) * 0.5;
    if (this.christArm) this.christArm.rotation.x = -0.9 + Math.sin(t * 1.8 + 1) * 0.5;

    // blue water drops fall from the devil's pail (left); bright yellow oil
    // drops fall from Christ's jug (right) — both into the fire in the middle
    this.dropTimer -= dt;
    if (this.dropTimer <= 0) {
      this.dropTimer = 0.12;
      const wd = this.waterDrops.find((d) => !d.active);
      if (wd) {
        wd.active = true;
        wd.mesh.position.set(STATIONS[2] - 1.2 + (Math.random() - 0.5) * 0.3, 0.85, -1.7);
        wd.mesh.visible = true;
        wd.mat.opacity = 0.85;
      }
      const od = this.oilDrops.find((d) => !d.active);
      if (od) {
        od.active = true;
        od.mesh.position.set(STATIONS[2] + 1.2 + (Math.random() - 0.5) * 0.3, 0.85, -1.7);
        od.mesh.visible = true;
        od.mat.opacity = 0.9;
      }
    }
    for (const d of this.waterDrops) {
      if (!d.active) continue;
      d.mesh.position.y -= dt * 2.2;
      if (d.mesh.position.y <= 0.08) { d.active = false; d.mesh.visible = false; }
    }
    for (const d of this.oilDrops) {
      if (!d.active) continue;
      d.mesh.position.y -= dt * 2.2;
      if (d.mesh.position.y <= 0.08) { d.active = false; d.mesh.visible = false; }
    }

    // the sweeper works hard while the dust billows; the waterer douses the
    // floor once the dust clears, both timed to the same dialogue beats
    if (this.sweeper && this.sweeperArm) {
      const sweeping = this.dustBurst > 0.1;
      this.sweeperArm.rotation.z = sweeping ? Math.sin(t * 11) * 0.9 : 0;
      this.sweeper.root.position.x = STATIONS[0] - 0.9 + (sweeping ? Math.sin(t * 3) * 0.3 : 0);
      animateBear(this.sweeper, t * 4, sweeping);
    }
    if (this.waterer && this.watererArm) {
      const pouring = this.sprinkleT > 0;
      this.watererArm.rotation.x = pouring ? -1.1 + Math.sin(t * 5) * 0.4 : -0.1;
      animateBear(this.waterer, t * 3, false);
    }

    // Passion's ball bounces as she plays
    if (this.toyBall) {
      this.toyBall.position.y = 0.16 + Math.abs(Math.sin(t * 2.6)) * 0.18;
    }
    if (this.passionArm) {
      this.passionArm.rotation.x = -0.3 + Math.sin(t * 2.4) * 0.3;
    }

    // the dreamer trembles, visibly scared, sweat beading and falling
    if (this.dreamer) {
      this.dreamer.root.rotation.z = Math.sin(t * 19) * 0.05;
      this.dreamer.root.rotation.x = Math.sin(t * 23) * 0.04;
      this.dreamer.head.rotation.y = Math.sin(t * 14) * 0.06;
    }
    for (let i = 0; i < this.sweatDrops.length; i++) {
      const d = this.sweatDrops[i];
      const cyc = (t * 0.9 + i * 0.5) % 1;
      d.mesh.position.y = d.baseY - cyc * 0.45;
      d.mat.opacity = 0.85 * (1 - cyc);
    }

    // the armed man: fights his way past the guards, then enters the gate
    if (this.knightState === 'fighting') {
      this.knightT += dt;
      if (this.knightArm) this.knightArm.rotation.x = -0.3 + Math.sin(this.knightT * 11) * 1.1;
      if (this.knightShieldArm) this.knightShieldArm.rotation.z = 0.2 + Math.sin(this.knightT * 7 + 1) * 0.15;
      if (this.knight) {
        this.knight.root.rotation.z = Math.sin(this.knightT * 8) * 0.06;
        animateBear(this.knight, t, false);
      }
      this.guards.forEach((g, i) => {
        this.guardStagger[i] = Math.max(0, this.guardStagger[i] - dt * 2.5);
        if (Math.random() < dt * 1.8) this.guardStagger[i] = 1;
        const kick = this.guardStagger[i];
        g.root.position.x = this.guardBaseX[i] + Math.sin(this.knightT * 22 + i) * 0.08 * kick;
        g.root.rotation.z = Math.sin(this.knightT * 16 + i) * 0.35 * kick;
        animateBear(g, t + i, false);
      });
      // loop the fight animation without auto-entering — entering is triggered
      // by the dialogue callback when the Interpreter speaks
      if (this.knightT > 2.6) this.knightT = 0.5;
    } else if (this.knightState === 'entering' && this.knight) {
      this.knightT += dt;
      const kp = this.knight.root.position;
      const dx = this.knightDoorPos.x - kp.x;
      const dz = this.knightDoorPos.z - kp.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.15) {
        const step = Math.min(3 * dt, d);
        kp.x += (dx / d) * step;
        kp.z += (dz / d) * step;
        this.knight.root.rotation.y = Math.atan2(dx, dz);
        animateBear(this.knight, t, true);
      } else {
        this.knightState = 'done';
        this.knight.root.visible = false; // through the gate, and welcomed within
      }
    } else if (this.knight && this.knight.root.visible) {
      animateBear(this.knight, t + 2, false);
    }

    // the gate doors swing
    // Match Chapter I: stop just short of 90° so panels never swing through
    // the flanking pillars or overlap the wall.
    const doorTarget = this.doorOpen ? 1.5 : 0;
    if (this.doorL && this.doorR) {
      this.doorL.rotation.y += (-doorTarget - this.doorL.rotation.y) * 0.06;
      this.doorR.rotation.y += (doorTarget - this.doorR.rotation.y) * 0.06;
    }
    // the cottage door swings open to welcome Christian in, and shut behind him
    if (this.cottageDoor) {
      const cDoorTarget = this.houseDoorOpen ? -2.1 : 0;
      this.cottageDoor.rotation.y += (cDoorTarget - this.cottageDoor.rotation.y) * 0.08;
    }
    // the far door out of the hall swings open once the farewell is said
    if (this.exitDoor) {
      const eDoorTarget = this.exitDoorOpen ? -2.1 : 0;
      this.exitDoor.rotation.y += (eDoorTarget - this.exitDoor.rotation.y) * 0.08;
    }

    // castle windows pulse balefully
    for (let i = 0; i < this.castleGlows.length; i++) {
      (this.castleGlows[i].material as THREE.MeshBasicMaterial).opacity =
        0.5 + 0.4 * Math.abs(Math.sin(t * 1.7 + i * 1.9));
    }

    // a short, sharp volley whenever Christian tries to step back out past
    // the Gate — the archers were never actually called off
    if (this.peekVolley > 0) {
      this.peekArrowTimer -= dt;
      if (this.peekArrowTimer <= 0) {
        this.peekArrowTimer = 0.15;
        this.fireArrow();
        this.peekVolley--;
      }
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
        this.cb.setObjective('🚪 Safe behind the Gate');
        this.cb.blipSound();
        this.cb.playScript([
          { speaker: '', text: 'A great paw closes over Christian\'s, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side.' },
          { speaker: 'Goodwill', text: 'There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now.' },
          { speaker: 'Christian', text: '*catching his breath* You… you know my name?' },
          { speaker: 'Goodwill', text: 'I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?' },
          { speaker: 'Christian', text: 'I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir.' },
          { speaker: 'Goodwill', text: 'And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one.' },
          { speaker: 'Christian', text: 'Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?' },
          { speaker: 'Goodwill', text: 'Not here, dear pilgrim. Be patient a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where no one will ever find it.' },
          { speaker: 'Goodwill', text: 'Look east. That is the King\'s Highway — straight and narrow, built by the King and His Son. Stay on it without wandering away, and you will not lose your way.' },
          { speaker: 'Christian', text: 'Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not.' },
          { speaker: 'Goodwill', text: '*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you.' },
        ], () => {
          this.phase = 'freeroam';
          this.hasPassedGate = true;
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
