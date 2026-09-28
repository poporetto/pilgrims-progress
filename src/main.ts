import { inject as injectAnalytics } from '@vercel/analytics';
import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear, block, mat, liveBears, BearParts } from './bear';
import { buildWorld, WALL, Interactable } from './world';
import { createNPCs, NPC, QuestState, DialogueLine } from './npcs';
import { EnchantedScene } from './enchanted';
import { Music } from './music';
import { WorldMap } from './worldmap';
import { SloughScene } from './slough';
import { MoralityScene } from './morality';
import { WicketGateScene } from './wicketgate';
import { CrossScene } from './cross';
import { HighwayScene } from './highway';
import { HillScene } from './hill';
import { PalaceScene } from './palace';
import { ValleyScene } from './valley';
import { ShadowScene } from './shadow';
import { VanityScene } from './vanity';
import { LucreScene } from './lucre';
import { CastleScene } from './castle';
import { MountainScene } from './mountain';
import { BeulahScene } from './beulah';
import { CelestialScene } from './celestial';
import { makeAlpineMountain } from './alpine';
import { CameraController, type CameraFrame } from './core/camera';
import { Atmosphere, configureRenderer } from './render/atmosphere';
import { windUniforms } from './world/voxels';
import { getDialogueCharacterNames, getDialoguePortrait, preloadAllPortraits } from './dialoguePortraits';

// ---------------------------------------------------------------- setup

// Vercel Analytics (vanilla/no-framework integration — this is a plain
// Vite + TS app, not Next.js). No-ops harmlessly when not served from Vercel.
injectAnalytics();

// Warm the portrait image cache in the background once the browser is idle,
// so dialogue portraits are already downloaded before any character speaks
// (rather than popping in empty for a split second on first use). Deferred
// off the critical path so it never competes with the initial scene setup.
const schedulePortraitPreload =
  window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
schedulePortraitPreload(() => preloadAllPortraits());

// dev only: a hot update must never stack a second game instance (two tick
// loops sharing one dialogue DOM = ghost dialogue) — always hard-reload.
(import.meta as any).hot?.accept(() => window.location.reload());

const app = document.getElementById('app')!;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
configureRenderer(renderer);
app.appendChild(renderer.domElement);

// The opening cover uses the real Chapter I Christian rig on a miniature
// highway—not a CSS imitation. It renders independently behind the title card.
const titleJourneyCanvas = document.getElementById('title-journey-canvas') as HTMLCanvasElement;
const titleJourneyRenderer = new THREE.WebGLRenderer({
  canvas: titleJourneyCanvas, alpha: true, antialias: true,
});
titleJourneyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
titleJourneyRenderer.setClearColor(0xd8edf7, 1);
configureRenderer(titleJourneyRenderer);
const titleJourneyScene = new THREE.Scene();
titleJourneyScene.background = new THREE.Color(0xd8edf7);
titleJourneyScene.fog = new THREE.Fog(0xd8edf7, 24, 62);
const titleJourneyCamera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
titleJourneyCamera.position.set(0, 7.2, 15);
titleJourneyCamera.lookAt(0, 1.1, 0);
titleJourneyScene.add(new THREE.HemisphereLight(0xfff4e9, 0xd0b18e, 1.58));
const titleJourneySun = new THREE.DirectionalLight(0xffe2bd, 1.55);
titleJourneySun.position.set(-7, 12, 8);
titleJourneySun.castShadow = true;
titleJourneySun.shadow.mapSize.set(1024, 1024);
titleJourneySun.shadow.camera.left = -18;
titleJourneySun.shadow.camera.right = 18;
titleJourneySun.shadow.camera.top = 10;
titleJourneySun.shadow.camera.bottom = -8;
titleJourneyScene.add(titleJourneySun);

const titleGround = new THREE.Mesh(new THREE.PlaneGeometry(74, 34), mat(0xb8cc8f));
titleGround.rotation.x = -Math.PI / 2;
titleGround.position.y = -0.03;
titleGround.receiveShadow = true;
titleJourneyScene.add(titleGround);
const titleHighway = new THREE.Mesh(new THREE.PlaneGeometry(42, 3.7), mat(0xe9c9a4));
titleHighway.rotation.x = -Math.PI / 2;
titleHighway.position.y = 0.015;
titleHighway.receiveShadow = true;
titleJourneyScene.add(titleHighway);
for (let i = 0; i < 25; i++) {
  const roadStone = block(
    1.15, 0.055, 0.72,
    [0xd8b892, 0xf0d5b2, 0xcaa47f][i % 3],
    -14 + i * 1.18, 0.055, ((i % 3) - 1) * 0.62,
  );
  roadStone.rotation.y = ((i % 5) - 2) * 0.025;
  roadStone.castShadow = false;
  titleJourneyScene.add(roadStone);
}
for (const side of [-1, 1]) {
  for (let i = 0; i < 12; i++) {
    const edge = block(0.75, 0.14, 0.34, i % 2 ? 0xad866d : 0xc29d7d,
      -13.5 + i * 2.45, 0.08, side * 1.95);
    edge.castShadow = false;
    titleJourneyScene.add(edge);
  }
}
// Voxel trees now live in the same rendered world as Christian and the road.
function addTitleTree(x: number, z: number, scale: number, blossom = false): void {
  const tree = new THREE.Group();
  tree.add(block(0.42, 2.0, 0.42, 0x967252, 0, 1.0, 0));
  tree.add(block(2.0, 1.25, 1.8, blossom ? 0xefaebe : 0x92b778, 0, 2.3, 0));
  tree.add(block(1.35, 1.0, 1.25, blossom ? 0xf8cbd5 : 0xacc88c, 0.2, 3.15, 0));
  tree.scale.setScalar(scale);
  tree.position.set(x, 0, z);
  titleJourneyScene.add(tree);
}
addTitleTree(-13, -2.9, 1.05, true);
addTitleTree(-8.5, -4.1, 0.78);
addTitleTree(8.7, -4.0, 0.82, true);
addTitleTree(13.2, -2.8, 1.08);
addTitleTree(-16, 2.7, 0.72);
addTitleTree(16, 2.8, 0.7, true);

// Block-built clouds and sun complete the fully 3D title background.
function addTitleCloud(x: number, y: number, z: number, scale: number): void {
  const cloud = new THREE.Group();
  cloud.add(block(3.4, 0.8, 1.2, 0xfff4ec, 0, 0, 0));
  cloud.add(block(1.8, 1.0, 1.25, 0xfffaf2, -1.0, 0.55, 0));
  cloud.add(block(2.0, 1.2, 1.3, 0xfff8f0, 0.8, 0.62, 0));
  cloud.add(block(1.3, 0.75, 1.0, 0xf3dce0, 2.0, 0.1, 0));
  cloud.scale.setScalar(scale);
  cloud.position.set(x, y, z);
  titleJourneyScene.add(cloud);
}
addTitleCloud(-10, 7.4, -12, 0.7);
addTitleCloud(0.5, 8.5, -15, 0.52);
addTitleCloud(11, 7.1, -13, 0.62);
const titleSun = block(1.7, 1.7, 0.8, 0xffe89a, 11.5, 9.2, -18);
const titleSunMat = titleSun.material as THREE.MeshStandardMaterial;
titleSunMat.emissive = new THREE.Color(0xffd66b);
titleSunMat.emissiveIntensity = 0.65;
titleJourneyScene.add(titleSun);
// Soft grass and flowers replace the old blue-brown lower band around the
// highway. They stay low so Christian remains the unmistakable focal point.
const titleFlowerColors = [0xe99eb4, 0xf5b7c6, 0xffd4dc, 0xffe6ad, 0xf8f0e5];
for (const side of [-1, 1]) {
  for (let i = 0; i < 18; i++) {
    const x = -14 + i * 1.65;
    const z = side * (2.45 + (i % 3) * 0.38);
    titleJourneyScene.add(block(0.07, 0.32 + (i % 2) * 0.12, 0.07,
      i % 2 ? 0x779e67 : 0x89af75, x, 0.18, z));
    if (i % 2 === 0) {
      titleJourneyScene.add(block(0.2, 0.16, 0.2,
        titleFlowerColors[(i / 2 + (side > 0 ? 1 : 0)) % titleFlowerColors.length],
        x, 0.42, z));
    }
  }
}
// The title uses the same faceted alpine language as the world map. Their
// bases sit behind the highway and their summits remain deliberately lower in
// frame so the book title keeps a calm margin of sky.
function addTitleMountain(
  x: number, z: number, width: number, height: number,
  colors: [number, number, number],
): void {
  const mountain = makeAlpineMountain({
    width,
    height,
    depth: width * 0.55,
    rock: colors[1],
    rockLight: colors[0],
    snow: 0xfffdf7,
    snowHeightRatio: 0.375,
    castShadow: true,
  });
  mountain.position.set(x, -0.1, z);
  titleJourneyScene.add(mountain);
}
addTitleMountain(-10.5, -11.23, 8.64, 6.3, [0xc2dfed, 0x9fc8dc, 0xd5e9f1]);
addTitleMountain(-3.7, -12.38, 10.8, 7.2, [0xb5d7e8, 0x8fbdd5, 0xcbe5f0]);
addTitleMountain(4.5, -11.95, 10.08, 6.7, [0xbdddeb, 0x98c3d8, 0xd1e8f1]);
addTitleMountain(11.2, -11.09, 8.16, 5.8, [0xcce5ef, 0xa9cfdf, 0xdcecf2]);

const titleChristian = makeBear({
  species: 'bear', fur: PALETTE.bearBrown,
  outfit: 'shirt', outfitColor: 0x8fb8d8,
  sling: true, burden: true, scale: 1.22,
});
titleChristian.root.rotation.y = Math.PI / 2;
titleJourneyScene.add(titleChristian.root);

// The title road quietly previews the friendships formed across the story.
// One companion follows at a time, and both travellers fully clear the frame
// before the next pair begins the long walk.
const titlePliable = makeBear({
  species: 'rabbit', fur: 0xf3ead9,
  outfit: 'shirt', outfitColor: 0xffd6a5, scale: 1.02,
});
const titleFaithful = makeBear({
  species: 'sheep', fur: 0xf3efe4,
  outfit: 'shirt', outfitColor: 0xa8c4a2, scale: 1.04,
});
const titleHopeful = makeBear({
  species: 'dog', fur: 0xd9b088,
  outfit: 'shirt', outfitColor: 0x7fb8a2, scale: 1.04,
});
const titleCompanions = [titlePliable, titleFaithful, titleHopeful];
for (const companion of titleCompanions) {
  companion.root.rotation.y = Math.PI / 2;
  companion.root.visible = false;
  titleJourneyScene.add(companion.root);
}

// Christian's actual voxel face fills the small title medallion.
const titleFaceCanvas = document.getElementById('title-face-canvas') as HTMLCanvasElement;
const titleFaceRenderer = new THREE.WebGLRenderer({
  canvas: titleFaceCanvas, alpha: true, antialias: true,
});
titleFaceRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
titleFaceRenderer.setClearColor(0x000000, 0);
const titleFaceScene = new THREE.Scene();
titleFaceScene.add(new THREE.HemisphereLight(0xf8fbff, 0xb89472, 1.75));
const titleFaceLight = new THREE.DirectionalLight(0xffedcf, 1.4);
titleFaceLight.position.set(-3, 5, 5);
titleFaceScene.add(titleFaceLight);
const titleFaceChristian = makeBear({
  species: 'bear', fur: PALETTE.bearBrown, outfit: 'none',
});
// The medallion is a portrait seal: detach the shared head rig so no torso,
// arms, or clothing can enter the circular crop.
const titleFaceHead = titleFaceChristian.head;
titleFaceChristian.body.remove(titleFaceHead);
titleFaceHead.position.set(0, 0, 0);
titleFaceScene.add(titleFaceHead);
const titleFaceCamera = new THREE.PerspectiveCamera(26, 1, 0.1, 20);
titleFaceCamera.position.set(0, 0.48, 3.4);
titleFaceCamera.lookAt(0, 0.48, 0);

function resizeTitleJourney(): void {
  const width = Math.max(1, titleJourneyCanvas.clientWidth);
  const height = Math.max(1, titleJourneyCanvas.clientHeight);
  titleJourneyRenderer.setSize(width, height, false);
  titleJourneyCamera.aspect = width / height;
  titleJourneyCamera.updateProjectionMatrix();
  const faceWidth = Math.max(1, titleFaceCanvas.clientWidth);
  const faceHeight = Math.max(1, titleFaceCanvas.clientHeight);
  titleFaceRenderer.setSize(faceWidth, faceHeight, false);
  titleFaceCamera.aspect = faceWidth / faceHeight;
  titleFaceCamera.updateProjectionMatrix();
}
resizeTitleJourney();

const scene = new THREE.Scene();
scene.background = new THREE.Color(PALETTE.sky);
scene.fog = new THREE.Fog(PALETTE.fog, 55, 130);

// A slightly telephoto lens flattens perspective into a miniature-diorama
// look. Every camera offset is scaled by LENS so framing matches the old 50°.
const CAMERA_FOV = 38;
const LENS = Math.tan(THREE.MathUtils.degToRad(25)) / Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2));
const camera = new THREE.PerspectiveCamera(
  CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, 400,
);
// Tall portrait phones would otherwise see a very narrow slice of the world:
// widen the vertical field so the horizontal view matches a near-square
// screen (capped, so the telephoto diorama look survives).
function fitCameraFov(): void {
  const aspect = window.innerWidth / window.innerHeight;
  const PORTRAIT = 0.85;
  camera.fov = aspect >= PORTRAIT
    ? CAMERA_FOV
    : Math.min(58, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2)) * PORTRAIT / aspect)));
  camera.updateProjectionMatrix();
}
fitCameraFov();

// Warm, soft morning light for Chapter I: creamy sky fill, gentle golden
// sunlight and an earthy grass bounce keep the village welcoming.
scene.add(new THREE.HemisphereLight(0xfff0dc, 0xd9d2b5, 1.28));
const sun = new THREE.DirectionalLight(0xffd6a3, 1.08);
// Mid-morning sun: still eastward but lower and slightly south of the road,
// so shadows fall on a clear diagonal rather than straight across the ground.
sun.position.set(50, 136, 0);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -60;
sun.shadow.camera.right = 60;
sun.shadow.camera.top = 60;
sun.shadow.camera.bottom = -60;
sun.shadow.camera.far = 150;
sun.shadow.radius = 5;
scene.add(sun);

// ---------------------------------------------------------------- world & actors

const world = buildWorld(scene);
const npcs: NPC[] = createNPCs(scene);

const christian = makeBear({
  species: 'bear',
  fur: PALETTE.bearBrown,
  outfit: 'shirt',
  outfitColor: 0x8fb8d8,
  sling: true,
  burden: true,
  plump: true,
});
christian.root.position.set(-6, 0, -4);
scene.add(christian.root);

const quest: QuestState = {
  talkedToEvangelist: false,
  talkedToFamily: false,
  chaseDone: false,
  eggsCollected: 0,
  pliableFollowing: false,
  pliableLeft: false,
  chapterComplete: false,
  sloughComplete: false,
  moralityDone: false,
  wicketDone: false,
  interpreterDone: false,
  crossDone: false,
  highwayDone: false,
  hillDone: false,
  palaceDone: false,
  valleyDone: false,
  shadowDone: false,
  vanityDone: false,
  lucreDone: false,
  castleDone: false,
  mountainDone: false,
  enchantedDone: false,
  beulahDone: false,
  celestialDone: false,
};

type TextSpeed = 'instant' | 'gentle' | 'storybook';
interface GameSettings {
  version: 1;
  audioEnabled: boolean;
  musicVolume: number;
  sfxVolume: number;
  textSpeed: TextSpeed;
  reducedMotion: boolean;
  largeDialogue: boolean;
}
const SETTINGS_KEY = 'pilgrims-progress-settings';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const defaultSettings: GameSettings = {
  version: 1,
  audioEnabled: true,
  musicVolume: 0.5,
  sfxVolume: 0.7,
  textSpeed: 'gentle',
  reducedMotion: prefersReducedMotion,
  largeDialogue: false,
};
function readGameSettings(): GameSettings {
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return {
        ...defaultSettings,
        audioEnabled: window.localStorage.getItem('pilgrims-progress-sound') !== 'off',
      };
    }
    const saved = JSON.parse(raw) as Partial<GameSettings>;
    const speed: TextSpeed = ['instant', 'gentle', 'storybook'].includes(saved.textSpeed ?? '')
      ? saved.textSpeed as TextSpeed : defaultSettings.textSpeed;
    return {
      version: 1,
      audioEnabled: typeof saved.audioEnabled === 'boolean' ? saved.audioEnabled : true,
      musicVolume: THREE.MathUtils.clamp(Number(saved.musicVolume ?? .5), 0, 1),
      sfxVolume: THREE.MathUtils.clamp(Number(saved.sfxVolume ?? .7), 0, 1),
      textSpeed: speed,
      reducedMotion: typeof saved.reducedMotion === 'boolean' ? saved.reducedMotion : prefersReducedMotion,
      largeDialogue: saved.largeDialogue === true,
    };
  } catch {
    return { ...defaultSettings };
  }
}
let gameSettings = readGameSettings();
function saveGameSettings(): void {
  try {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(gameSettings));
    window.localStorage.setItem('pilgrims-progress-sound', gameSettings.audioEnabled ? 'on' : 'off');
  } catch {
    // Settings still work for this session when storage is unavailable.
  }
}

const music = new Music();
music.enabled = gameSettings.audioEnabled;
music.setMusicVolume(gameSettings.musicVolume);
music.setSfxVolume(gameSettings.sfxVolume);
document.documentElement.classList.toggle('reduce-motion', gameSettings.reducedMotion);
document.documentElement.classList.toggle('large-dialogue', gameSettings.largeDialogue);
const worldMap = new WorldMap(window.innerWidth / window.innerHeight);
type GameMode =
  | 'village' | 'map' | 'slough' | 'morality' | 'wicket' | 'cross'
  | 'highway' | 'hill' | 'palace' | 'valley' | 'shadow' | 'vanity' | 'lucre' | 'castle'
  | 'mountain' | 'enchanted' | 'beulah' | 'celestial';
let mode: GameMode = 'village';

// ---------------------------------------------------------------- chapter save

const SAVE_KEY = 'pilgrims-progress-save';
const SAVE_VERSION = 1;
interface ChapterSave {
  version: number;
  completedChapter: number;
  updatedAt: string;
}

const CHAPTER_NAMES = [
  '',
  'City of Destruction',
  'Slough of Despond',
  'Worldly Wiseman & Mount Sinai',
  'Wicket Gate & the Interpreter',
  'The Cross',
  'The King’s Highway',
  'Hill Difficulty',
  'Palace Beautiful',
  'Valley of Humiliation',
  'Shadow of Death',
  'Vanity Fair',
  'Hill Lucre',
  'Doubting Castle',
  'Delectable Mountains',
  'Enchanted Ground',
  'Beulah Land',
  'The Celestial City',
];

function latestCompletedChapter(): number {
  if (quest.celestialDone) return 17;
  if (quest.beulahDone) return 16;
  if (quest.enchantedDone) return 15;
  if (quest.mountainDone) return 14;
  if (quest.castleDone) return 13;
  if (quest.lucreDone) return 12;
  if (quest.vanityDone) return 11;
  if (quest.shadowDone) return 10;
  if (quest.valleyDone) return 9;
  if (quest.palaceDone) return 8;
  if (quest.hillDone) return 7;
  if (quest.highwayDone) return 6;
  if (quest.crossDone) return 5;
  if (quest.wicketDone) return 4;
  if (quest.moralityDone) return 3;
  if (quest.sloughComplete) return 2;
  if (quest.chapterComplete) return 1;
  return 0;
}

function readChapterSave(): ChapterSave | null {
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ChapterSave>;
    if (
      parsed.version !== SAVE_VERSION
      || !Number.isInteger(parsed.completedChapter)
      || (parsed.completedChapter ?? 0) < 1
      || (parsed.completedChapter ?? 0) > 17
      || typeof parsed.updatedAt !== 'string'
    ) return null;
    return parsed as ChapterSave;
  } catch {
    return null;
  }
}

function saveChapterProgress(): void {
  const completedChapter = latestCompletedChapter();
  if (completedChapter < 1) return;
  try {
    window.localStorage.setItem(SAVE_KEY, JSON.stringify({
      version: SAVE_VERSION,
      completedChapter,
      updatedAt: new Date().toISOString(),
    } satisfies ChapterSave));
  } catch {
    // The game remains playable when storage is blocked or unavailable.
  }
}

function restoreChapterProgress(save: ChapterSave): void {
  const rank = save.completedChapter;
  Object.assign(quest, {
    talkedToEvangelist: rank >= 1,
    talkedToFamily: rank >= 1,
    chaseDone: rank >= 1,
    pliableFollowing: rank >= 1,
    pliableLeft: rank >= 2,
    chapterComplete: rank >= 1,
    sloughComplete: rank >= 2,
    moralityDone: rank >= 3,
    wicketDone: rank >= 4,
    interpreterDone: rank >= 4,
    crossDone: rank >= 5,
    highwayDone: rank >= 6,
    hillDone: rank >= 7,
    palaceDone: rank >= 8,
    valleyDone: rank >= 9,
    shadowDone: rank >= 10,
    vanityDone: rank >= 11,
    lucreDone: rank >= 12,
    castleDone: rank >= 13,
    mountainDone: rank >= 14,
    enchantedDone: rank >= 15,
    beulahDone: rank >= 16,
    celestialDone: rank >= 17,
  });

  worldMap.sloughDone = rank >= 2;
  worldMap.moralityDone = rank >= 3;
  worldMap.wicketDone = rank >= 4;
  worldMap.crossDone = rank >= 5;
  worldMap.highwayDone = rank >= 6;
  worldMap.hillDone = rank >= 7;
  worldMap.palaceDone = rank >= 8;
  worldMap.valleyDone = rank >= 9;
  worldMap.shadowDone = rank >= 10;
  worldMap.vanityDone = rank >= 11;
  worldMap.lucreDone = rank >= 12;
  worldMap.castleDone = rank >= 13;
  worldMap.mountainDone = rank >= 14;
  worldMap.enchantedDone = rank >= 15;
  worldMap.beulahDone = rank >= 16;
  worldMap.celestialDone = rank >= 17;

  worldMap.progress = rank >= 17 ? worldMap.celestialT
    : rank >= 16 ? worldMap.beulahT
    : rank >= 15 ? worldMap.enchantedT
    : rank >= 14 ? worldMap.mountainT
    : rank >= 13 ? worldMap.castleT
    : rank >= 12 ? worldMap.lucreT
    : rank >= 11 ? worldMap.vanityT
    : rank >= 10 ? worldMap.shadowT
    : rank >= 9 ? worldMap.valleyT
    : rank >= 8 ? worldMap.palaceT
    : rank >= 7 ? worldMap.hillT
    : rank >= 6 ? worldMap.highwayT
    : rank >= 5 ? worldMap.crossT
    : rank >= 4 ? worldMap.beyondT
    : rank >= 3 ? worldMap.forkT
    : rank >= 2 ? worldMap.sloughT
    : worldMap.cityT;
  worldMap.road = 'main';
  worldMap.branchP = 0;
  worldMap.justDiverted = false;
  worldMap.start(mapParty());
}

let storedChapterSave = readChapterSave();

// ---------------------------------------------------------------- UI refs

const ui = {
  objective: document.getElementById('objective')!,
  prompt: document.getElementById('prompt')!,
  promptWho: document.querySelector('#prompt .who')! as HTMLElement,
  promptKey: document.querySelector('#prompt .key')! as HTMLElement,
  dialogue: document.getElementById('dialogue')!,
  dialoguePortrait: document.querySelector('#dialogue .portrait')! as HTMLElement,
  dialogueName: document.querySelector('#dialogue .name')! as HTMLElement,
  dialogueText: document.querySelector('#dialogue .text')! as HTMLElement,
  settingsBtn: document.getElementById('settings-btn')! as HTMLButtonElement,
  settingsOverlay: document.getElementById('settings-overlay')! as HTMLElement,
  settingsClose: document.getElementById('settings-close')! as HTMLButtonElement,
  soundToggle: document.getElementById('sound-toggle')! as HTMLButtonElement,
  settingsTab: document.getElementById('settings-tab')! as HTMLButtonElement,
  aboutTab: document.getElementById('about-tab')! as HTMLButtonElement,
  settingsPanel: document.getElementById('settings-panel')! as HTMLElement,
  aboutPanel: document.getElementById('about-panel')! as HTMLElement,
  musicVolume: document.getElementById('music-volume')! as HTMLInputElement,
  musicVolumeValue: document.getElementById('music-volume-value')! as HTMLOutputElement,
  sfxVolume: document.getElementById('sfx-volume')! as HTMLInputElement,
  sfxVolumeValue: document.getElementById('sfx-volume-value')! as HTMLOutputElement,
  textSpeed: document.getElementById('text-speed')! as HTMLSelectElement,
  motionToggle: document.getElementById('motion-toggle')! as HTMLButtonElement,
  largeTextToggle: document.getElementById('large-text-toggle')! as HTMLButtonElement,
  resetSaveBtn: document.getElementById('reset-save-btn')! as HTMLButtonElement,
  talkBtn: document.getElementById('talk-btn')! as HTMLButtonElement,
  joystick: document.getElementById('joystick')!,
  stick: document.querySelector('#joystick .stick')! as HTMLElement,
  titleScreen: document.getElementById('title-screen')!,
  startBtn: document.getElementById('start-btn')! as HTMLButtonElement,
  newJourneyBtn: document.getElementById('new-journey-btn')! as HTMLButtonElement,
  saveSummary: document.getElementById('save-summary')! as HTMLElement,
  ending: document.getElementById('ending')!,
  restartBtn: document.getElementById('restart-btn')! as HTMLButtonElement,
  debugBtn: document.getElementById('debug-btn')! as HTMLButtonElement,
  debugPanel: document.getElementById('debug-panel')! as HTMLElement,
  fade: document.getElementById('fade')! as HTMLElement,
};

// On narrow screens the round controls sit below the objective. Use the
// objective's actual wrapped height so long instructions never collide with
// them; ResizeObserver also reacts whenever chapter text changes its line count.
function positionMobileHudControls(): void {
  if (window.innerWidth > 700) {
    document.documentElement.style.removeProperty('--mobile-controls-top');
    return;
  }
  const objectiveBottom = ui.objective.getBoundingClientRect().bottom;
  document.documentElement.style.setProperty('--mobile-controls-top', `${Math.ceil(objectiveBottom + 10)}px`);
}
new ResizeObserver(positionMobileHudControls).observe(ui.objective);
requestAnimationFrame(positionMobileHudControls);

// a brief screen fade to mask an instant scene cut (e.g. stepping through a
// doorway into an interior built far away on the same axis)
function fadeTransition(mid: () => void, holdMs = 420): void {
  ui.fade.classList.add('show');
  window.setTimeout(() => {
    mid();
    requestAnimationFrame(() => ui.fade.classList.remove('show'));
  }, gameSettings.reducedMotion ? 80 : holdMs);
}

const isTouch =
  window.matchMedia('(pointer: coarse)').matches
  || navigator.maxTouchPoints > 0
  || 'ontouchstart' in window;
document.documentElement.classList.toggle('touch-device', isTouch);
if (isTouch) {
  document.body.classList.add('touch');
  ui.promptKey.style.display = 'none';
}

let started = false;
ui.startBtn.addEventListener('click', () => {
  started = true;
  music.start();
  if (storedChapterSave) {
    restoreChapterProgress(storedChapterSave);
    goToMap();
  }
  ui.titleScreen.classList.add('hidden');
  setTimeout(() => (ui.titleScreen.style.display = 'none'), 900);
});

function clearSaveAndReload(): void {
  try {
    window.localStorage.removeItem(SAVE_KEY);
  } catch {
    // Reload still starts a fresh in-memory journey if storage is unavailable.
  }
  storedChapterSave = null;
  window.location.reload();
}

ui.newJourneyBtn.addEventListener('click', () => {
  if (!window.confirm('Start a new journey? Your saved chapter progress will be cleared.')) return;
  clearSaveAndReload();
});

function updateSoundToggle(): void {
  ui.soundToggle.setAttribute('aria-checked', String(gameSettings.audioEnabled));
  ui.soundToggle.setAttribute(
    'aria-label',
    `Audio ${gameSettings.audioEnabled ? 'on' : 'off'}`,
  );
}

function updateSettingsUI(): void {
  updateSoundToggle();
  ui.musicVolume.value = String(Math.round(gameSettings.musicVolume * 100));
  ui.musicVolumeValue.value = `${ui.musicVolume.value}%`;
  ui.sfxVolume.value = String(Math.round(gameSettings.sfxVolume * 100));
  ui.sfxVolumeValue.value = `${ui.sfxVolume.value}%`;
  ui.textSpeed.value = gameSettings.textSpeed;
  ui.motionToggle.setAttribute('aria-checked', String(gameSettings.reducedMotion));
  ui.motionToggle.setAttribute('aria-label', `Reduced motion ${gameSettings.reducedMotion ? 'on' : 'off'}`);
  ui.largeTextToggle.setAttribute('aria-checked', String(gameSettings.largeDialogue));
  ui.largeTextToggle.setAttribute('aria-label', `Larger dialogue ${gameSettings.largeDialogue ? 'on' : 'off'}`);
}

function applySettings(): void {
  music.enabled = gameSettings.audioEnabled;
  music.setMusicVolume(gameSettings.musicVolume);
  music.setSfxVolume(gameSettings.sfxVolume);
  document.documentElement.classList.toggle('reduce-motion', gameSettings.reducedMotion);
  document.documentElement.classList.toggle('large-dialogue', gameSettings.largeDialogue);
  updateSettingsUI();
  saveGameSettings();
}

function showSettingsPanel(panel: 'settings' | 'about'): void {
  const showAbout = panel === 'about';
  ui.settingsTab.setAttribute('aria-selected', String(!showAbout));
  ui.aboutTab.setAttribute('aria-selected', String(showAbout));
  ui.settingsPanel.classList.toggle('active', !showAbout);
  ui.aboutPanel.classList.toggle('active', showAbout);
}

function openSettings(): void {
  ui.debugPanel.classList.remove('open');
  showSettingsPanel('settings');
  ui.settingsOverlay.classList.add('open');
  ui.settingsOverlay.setAttribute('aria-hidden', 'false');
  ui.settingsClose.focus();
}

function closeSettings(): void {
  ui.settingsOverlay.classList.remove('open');
  ui.settingsOverlay.setAttribute('aria-hidden', 'true');
  ui.settingsBtn.focus();
}

updateSettingsUI();
ui.settingsBtn.addEventListener('click', openSettings);
ui.settingsClose.addEventListener('click', closeSettings);
ui.settingsTab.addEventListener('click', () => showSettingsPanel('settings'));
ui.aboutTab.addEventListener('click', () => showSettingsPanel('about'));
ui.settingsOverlay.addEventListener('click', (event) => {
  if (event.target === ui.settingsOverlay) closeSettings();
});
ui.soundToggle.addEventListener('click', () => {
  music.start();
  gameSettings.audioEnabled = music.toggle();
  applySettings();
});
ui.musicVolume.addEventListener('input', () => {
  gameSettings.musicVolume = Number(ui.musicVolume.value) / 100;
  applySettings();
});
ui.sfxVolume.addEventListener('input', () => {
  gameSettings.sfxVolume = Number(ui.sfxVolume.value) / 100;
  applySettings();
});
ui.textSpeed.addEventListener('change', () => {
  gameSettings.textSpeed = ui.textSpeed.value as TextSpeed;
  applySettings();
});
ui.motionToggle.addEventListener('click', () => {
  gameSettings.reducedMotion = !gameSettings.reducedMotion;
  applySettings();
});
ui.largeTextToggle.addEventListener('click', () => {
  gameSettings.largeDialogue = !gameSettings.largeDialogue;
  applySettings();
});
ui.resetSaveBtn.addEventListener('click', () => {
  if (!window.confirm('Reset the saved journey? Your settings will stay the same.')) return;
  clearSaveAndReload();
});

ui.restartBtn.addEventListener('click', () => {
  if (!window.confirm('Restart from the beginning? Your saved chapter progress will be cleared.')) return;
  clearSaveAndReload();
});

// ---------- parametrized chapter-complete screen ----------
let endingAction: (() => void) | null = null;
let endingOpen = false;
let cutscene = false; // freezes the player during scripted scenes (gate chase)

function showEnding(title: string, sub: string, body: string, action: () => void): void {
  // Chapter-level autosave only: no positions, dialogue steps, or mid-chapter
  // state are written. Reopening the game resumes from the world map.
  saveChapterProgress();
  endingOpen = true;
  document.getElementById('ending-title')!.textContent = title.replace(LEADING_EMOJI, '');
  document.getElementById('ending-sub')!.textContent = sub;
  document.getElementById('ending-body')!.textContent = body;
  endingAction = action;
  ui.ending.style.display = 'flex';
  ui.ending.classList.add('hidden');
  requestAnimationFrame(() =>
    requestAnimationFrame(() => ui.ending.classList.remove('hidden')),
  );
}

const continueBtn = document.getElementById('continue-btn') as HTMLButtonElement;
continueBtn.addEventListener('click', () => {
  music.blip();
  endingOpen = false;
  ui.ending.classList.add('hidden');
  setTimeout(() => (ui.ending.style.display = 'none'), 900);
  // close any dialogue left open
  dialogueOpen = false;
  stopDialogueTyping(false);
  dialogueNPC = null;
  scriptDone = null;
  ui.dialogue.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  endingAction?.();
  endingAction = null;
});

// small companions who should be visible walking with Christian on the
// world map, once the story has actually introduced them
function mapParty(): Array<'pliable' | 'hopeful'> {
  const party: Array<'pliable' | 'hopeful'> = [];
  if (quest.pliableFollowing && !quest.pliableLeft) party.push('pliable');
  if (quest.vanityDone) party.push('hopeful');
  return party;
}

function goToMap(): void {
  mode = 'map';
  sleepUI.classList.remove('show');
  renderer.domElement.style.filter = '';
  document.getElementById('sword-btn')?.classList.remove('show');
  music.setStyle('map');
  ui.promptKey.style.display = 'none';
  setObjective(quest.celestialDone
    ? '🗺 The pilgrimage is finished — Christian is home in the Celestial City 👑'
    : quest.beulahDone
    ? '🗺 Across the River — the angels wait to lead you up to the Celestial City ✨'
    : quest.enchantedDone
    ? '🗺 The Enchanted Ground is behind you — beyond lies Beulah Land, and the River'
    : quest.mountainDone
    ? '🗺 Leave the mountains carefully — the dreamy Enchanted Ground lies ahead'
    : quest.castleDone
    ? '🗺 Doubting Castle is behind you — bright mountains rise ahead: a place of rest'
    : quest.lucreDone
    ? '🗺 Past the silver hill — the King\'s Highway grows rocky ahead. Beware Bypath Meadow!'
    : quest.vanityDone
    ? '🗺 With Hopeful now — ahead, the easy Plain and the glittering Hill Lucre'
    : quest.shadowDone
    ? '🗺 Two pilgrims now! Gaudy banners rise ahead — the city of Vanity Fair'
    : quest.valleyDone
    ? '🗺 Apollyon is fled — but a darker valley waits: the Shadow of Death…'
    : quest.palaceDone
    ? '🗺 Armed head to paw — down into the Valley of Humiliation'
    : quest.hillDone
    ? '🗺 Over the Hill Difficulty — a white palace glows in the dusk ahead!'
    : quest.highwayDone
    ? '🗺 A steep mountain looms past the night road — the Hill Difficulty!'
    : quest.crossDone
    ? '🗺 The burden is gone! On along the King\'s Highway, into the evening…'
    : quest.wicketDone
      ? '🗺 Past the Gate a green hill rises — on to the place of deliverance!'
      : quest.moralityDone
      ? '🗺 The long road east lies open — on toward the Wicket Gate!'
      : quest.sloughComplete
        ? '🗺 East to the crossroad — a smooth byway and a barred road'
        : '🗺 The road east — onward to the Slough of Despond');
}

// ---------- Chapter II: the Slough of Despond ----------
const slough = new SloughScene({
  playScript,
  setObjective,
  splashSound: () => music.splash(),
  onExit: () => goToMap(),
  onComplete: () => {
    quest.sloughComplete = true;
    if (quest.pliableFollowing) quest.pliableLeft = true;
    // Pliable turned for home at the first hardship — he's gone for good now,
    // not just quietly idling somewhere back in the village
    if (quest.pliableLeft) {
      const idx = npcs.findIndex((n) => n.id === 'pliable');
      if (idx !== -1) {
        scene.remove(npcs[idx].parts.root);
        npcs.splice(idx, 1);
        wanderState.splice(idx, 1); // keep it aligned with npcs by index
      }
    }
    showEnding(
      '🌊 Chapter II Complete',
      'Through the Slough of Despond',
      'Pliable turned back at the first hardship — but Christian, with Help\'s '
      + 'strong paw, came through the mire, burden and all. The road runs on…',
      () => {
        worldMap.sloughDone = true;
        worldMap.start(mapParty());
        worldMap.progress = worldMap.sloughT;
        goToMap();
      },
    );
  },
});
let sloughActors: { christian: import('./bear').BearParts; pliable: import('./bear').BearParts | null } | null = null;

// ---------- Chapter III: Mr. Worldly Wiseman & Mount Sinai ----------
const morality = new MoralityScene({
  playScript,
  showChoice,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  onComplete: () => {
    quest.moralityDone = true;
    showEnding(
      '⛰ Chapter III Complete',
      'Mr. Worldly Wiseman and Mount Sinai',
      'The smooth byway led only beneath the burning mountain of the Law. '
      + 'Evangelist unmasked the flatterer, and Christian turned back to the true '
      + 'way — the long road east lies open at last…',
      () => {
        worldMap.moralityDone = true;
        worldMap.road = 'main';
        worldMap.progress = worldMap.forkT;
        worldMap.start(mapParty());
        goToMap();
      },
    );
  },
});
let moralityActors: { christian: import('./bear').BearParts } | null = null;

function enterMorality(revisit: boolean): void {
  mode = 'morality';
  music.setStyle('sinai');
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  moralityActors = morality.enter(revisit);
  camTarget.copy(moralityActors.christian.root.position);
}

// ---------- Chapter IV: the Wicket Gate ----------
const wicket = new WicketGateScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  fade: (mid) => fadeTransition(() => {
    mid();
    // snap camera to new position so the fade covers the cut completely
    if (wicketActors) camTarget.copy(wicketActors.christian.root.position);
  }),
  onComplete: () => {
    quest.wicketDone = true;
    quest.interpreterDone = true;
    showEnding(
      '🚪 Chapter IV Complete',
      'The Wicket Gate and the House of the Interpreter',
      'Goodwill the great lion drew Christian through the Gate, out of the reach of '
      + 'Beelzebub\'s arrows, and set his feet on the King\'s Highway. There, in a '
      + 'cottage by the road, the Interpreter — a wise old owl — showed him six sights '
      + 'to carry in his heart: the dust and the water, Passion and Patience, the fire '
      + 'and the hidden oil, the armed man at the palace gate, the caged professor, and '
      + 'the dream of judgment. Somewhere ahead now lies the place of deliverance, where '
      + 'the burden falls of itself…',
      () => {
        // reaching this point always implies the Slough and Morality are behind
        // us too — without this the map's "barred road" clamp snaps progress
        // straight back to the Slough the moment you try to move
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.beyondT;
        goToMap();
      },
    );
  },
});
let wicketActors: { christian: import('./bear').BearParts } | null = null;

// ---------- Chapter V: the Cross and the empty tomb ----------
const cross = new CrossScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  onComplete: () => {
    quest.crossDone = true;
    showEnding(
      '✝ Chapter V Complete',
      'The Cross and the Empty Tomb',
      'At the top of the hill the burden loosened of itself, rolled down into the '
      + 'open tomb, and was never seen again. Three Shining Ones met Christian there: '
      + 'his sins forgiven, his rags exchanged for shining garments, a seal on his '
      + 'forehead and a sealed scroll in his paw — the King\'s own promise. Not by '
      + 'the hard journey, nor by any good deed, but by grace alone he goes on now, '
      + 'singing, toward the Celestial City…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.crossT;
        goToMap();
      },
    );
  },
});
let crossActors: { christian: import('./bear').BearParts } | null = null;

// ---------- Chapter VI: the King's Highway at evening ----------
const highway = new HighwayScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  onComplete: () => {
    quest.highwayDone = true;
    showEnding(
      '🌙 Chapter VI Complete',
      'The King\'s Highway',
      'Beside the road three sleepers — Simple, Sloth and Presumption — waved away '
      + 'every warning and slept on in their chains; no one can be woken who is '
      + 'determined to sleep. Then Formalist and Hypocrisy came over the wall, '
      + 'trusting custom instead of the King\'s command, and fell in alongside. '
      + 'As the sun set, the three walked on together toward the light — but only '
      + 'one of them carries the King\'s scroll and seal…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.highwayT;
        goToMap();
      },
    );
  },
});
let highwayActors: { christian: import('./bear').BearParts } | null = null;

// ---------- Chapter VII: the Hill of Difficulty ----------
const hill = new HillScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  onComplete: () => {
    quest.hillDone = true;
    showEnding(
      '⛰ Chapter VII Complete',
      'The Hill of Difficulty',
      'At the hill\'s foot Formalist and Hypocrisy took the easy ways called Danger '
      + 'and Destruction, and were never seen again. Christian took the steep path — '
      + 'dozed too long in the Lord\'s arbor, lost the scroll of his assurance, and '
      + 'humbly climbed the hill twice to win it back. Even the news of lions ahead '
      + 'could not turn him: behind lies certain ruin, ahead — whatever comes — lies '
      + 'life. He presses on toward the Celestial City…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.hillT;
        goToMap();
      },
    );
  },
});
let hillActors: { christian: import('./bear').BearParts } | null = null;

function enterHill(revisit: boolean): void {
  mode = 'hill';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  hillActors = hill.enter(revisit);
  camTarget.copy(hillActors.christian.root.position);
}

// ---------- Chapter VIII: Palace Beautiful ----------
const palace = new PalaceScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  fade: (mid) => fadeTransition(() => {
    mid();
    if (palaceActors) camTarget.copy(palaceActors.christian.root.position);
  }),
  onComplete: () => {
    quest.palaceDone = true;
    showEnding(
      '🏰 Chapter VIII Complete',
      'Palace Beautiful',
      'Between the roaring lions — chained, though he could not see it — Christian '
      + 'kept the middle of the path and reached Palace Beautiful. There Discretion, '
      + 'Prudence, Piety and Charity heard his whole story, showed him the records '
      + 'and treasures of the King, and from the rooftop he glimpsed — far, far off — '
      + 'the shining Celestial City itself. Armed at their hands with the whole Armor '
      + 'of God, he goes down now into the Valley of Humiliation…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.palaceT;
        goToMap();
      },
    );
  },
});
let palaceActors: { christian: import('./bear').BearParts } | null = null;

function enterPalace(revisit: boolean): void {
  mode = 'palace';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  palaceActors = palace.enter(revisit);
  camTarget.copy(palaceActors.christian.root.position);
}

// ---------- Chapter IX: the Valley of Humiliation & Apollyon ----------
const battleUI = document.getElementById('battle-ui')!;
const sleepUI = document.getElementById('sleep-ui')!;
const sleepFill = document.querySelector('#sleep-ui .sleep-fill')! as HTMLElement;
const swordBtn = document.getElementById('sword-btn')! as HTMLButtonElement;
const battleFillChr = document.querySelector('#battle-ui .brow.chr .bfill')! as HTMLElement;
const battleFillApo = document.querySelector('#battle-ui .brow.apo .bfill')! as HTMLElement;

const valley = new ValleyScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  battleUI: (show) => battleUI.classList.toggle('show', show),
  setHP: (c, a) => {
    battleFillChr.style.width = `${Math.max(0, c)}%`;
    battleFillApo.style.width = `${Math.max(0, a)}%`;
  },
  onComplete: () => {
    quest.valleyDone = true;
    showEnding(
      '⚔ Chapter IX Complete',
      'The Valley of Humiliation',
      'Apollyon barred the whole breadth of the way — and neither his offers nor his '
      + 'accusations could move a pilgrim who answered only: "My Prince is merciful, '
      + 'and ready to forgive." The battle was long; Christian fell, and his sword flew '
      + 'from his paw — but "when I fall, I shall ARISE." With the Sword of the Spirit '
      + 'blazing he drove the Destroyer into the sky, was healed with leaves from the '
      + 'Tree of Life, and walks on: more than conqueror…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.valleyT;
        goToMap();
      },
    );
  },
});
let valleyActors: { christian: import('./bear').BearParts } | null = null;

function enterValley(revisit: boolean): void {
  mode = 'valley';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  // restore the second HP bar to Apollyon — Doubting Castle repurposes this same
  // bar for Hopeful and leaves the label changed, so reset it here
  const apoName = document.querySelector('#battle-ui .brow.apo .bname') as HTMLElement | null;
  if (apoName) apoName.textContent = 'Apollyon';
  valleyActors = valley.enter(revisit);
  camTarget.copy(valleyActors.christian.root.position);
}

// ---------- Chapter X: the Valley of the Shadow of Death ----------
const shadow = new ShadowScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  splashSound: () => music.splash(),
  setMusic: (style) => music.setStyle(style),
  fade: (mid) => fadeTransition(() => {
    mid();
    if (shadowActors) camTarget.copy(shadowActors.christian.root.position);
  }),
  onComplete: () => {
    quest.shadowDone = true;
    showEnding(
      '🐑 Chapter X Complete',
      'The Valley of the Shadow of Death',
      'Through a night with no bottom to its darkness — a stride-wide path between '
      + 'the ditch and the mire, noises with no owners, whispers that wore his own '
      + 'voice — Christian walked by prayer instead of sight. Dawn showed him every '
      + 'pit and snare he had been carried past, and at the valley\'s end stood the '
      + 'voice that had prayed him through it: FAITHFUL, his own neighbour from the '
      + 'City of Destruction. Two pilgrims now, walking east together…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.shadowDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.shadowT;
        goToMap();
      },
    );
  },
});
let shadowActors: { christian: import('./bear').BearParts } | null = null;

// ---------- Chapter XI: Vanity Fair ----------
const vanity = new VanityScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  fade: (mid) => fadeTransition(() => {
    mid();
    if (vanityActors) camTarget.copy(vanityActors.christian.root.position);
  }),
  onComplete: () => {
    quest.vanityDone = true;
    showEnding(
      '🎪 Chapter XI Complete',
      'Vanity Fair',
      'Talkative talked, and could answer everything except what grace had done to '
      + 'HIM. Then the road ran through Vanity Fair, where everything is for sale — '
      + 'and two pilgrims who would buy nothing but the truth were mobbed, tried '
      + 'before Lord Hate-Good, and Faithful was burned at the stake. But the fire '
      + 'could not hold him: a chariot of light carried him straight to the King. '
      + 'And in the crowd one young heart caught fire of a different kind — Hopeful '
      + 'walks beside Christian now, and the road goes on…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.shadowDone = true;
        worldMap.vanityDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.vanityT;
        goToMap();
      },
    );
  },
});
let vanityActors: { christian: import('./bear').BearParts } | null = null;

// ---------- the branching choice box ----------
const choiceBox = document.getElementById('choice')!;
const choiceA = document.querySelector('#choice .opt-a')! as HTMLButtonElement;
const choiceB = document.querySelector('#choice .opt-b')! as HTMLButtonElement;
let choiceCb: ((pick: 0 | 1) => void) | null = null;

function showChoice(a: string, b: string, cb: (pick: 0 | 1) => void): void {
  // the cosy choice cards carry their own icons — drop legacy emoji
  choiceA.textContent = a.replace(LEADING_EMOJI, '');
  choiceB.textContent = b.replace(LEADING_EMOJI, '');
  choiceCb = cb;
  choiceBox.classList.add('open');
}
function pickChoice(pick: 0 | 1): void {
  if (!choiceCb) return;
  const cb = choiceCb;
  choiceCb = null;
  choiceBox.classList.remove('open');
  music.blip();
  cb(pick);
}
choiceA.addEventListener('click', () => pickChoice(0));
choiceB.addEventListener('click', () => pickChoice(1));

// ---------- the Promise-key minigame: drag the orb along the cross ----------
// mouse and touch both go through Pointer Events, so no separate touch path is needed
const keyGameBox = document.getElementById('key-game')!;
const keyTrack = document.querySelector('#key-game .cross-track')! as HTMLElement;
const keyOrb = document.getElementById('key-orb')!;
const keyWaypoints = ['n', 'e', 's', 'w'].map((dir) => ({
  el: document.querySelector(`#key-game .wp-${dir}`)! as HTMLElement,
  arm: document.querySelector(`#key-game .arm-${dir}`)! as HTMLElement,
  visited: false,
}));
let keyDragActive = false;
let keyDragId = -1;
let keyGameOpen = false;

function resetKeyGame(): void {
  for (const wp of keyWaypoints) {
    wp.visited = false;
    wp.el.classList.remove('lit');
    wp.arm.classList.remove('lit');
  }
  keyOrb.style.left = '50%';
  keyOrb.style.top = '30%';
}

function checkKeyWaypoints(clientX: number, clientY: number): void {
  for (const wp of keyWaypoints) {
    if (wp.visited) continue;
    const r = wp.el.getBoundingClientRect();
    const dist = Math.hypot(clientX - (r.left + r.width / 2), clientY - (r.top + r.height / 2));
    if (dist < 28) {
      wp.visited = true;
      wp.el.classList.add('lit');
      wp.arm.classList.add('lit'); // fill the line so progress is visible
      castle.advanceKeyStage();
    }
  }
}

keyOrb.addEventListener('pointerdown', (e) => {
  keyDragActive = true;
  keyDragId = e.pointerId;
  try { (keyOrb as HTMLElement).setPointerCapture(e.pointerId); } catch { /* no-op: browsers reject capture for a pointer that isn't currently active */ }
});
keyOrb.addEventListener('pointermove', (e) => {
  if (!keyDragActive || e.pointerId !== keyDragId) return;
  const rect = keyTrack.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  const y = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
  keyOrb.style.left = `${x * 100}%`;
  keyOrb.style.top = `${y * 100}%`;
  checkKeyWaypoints(e.clientX, e.clientY);
});
function endKeyDrag(e: PointerEvent): void {
  if (e.pointerId !== keyDragId) return;
  keyDragActive = false;
}
keyOrb.addEventListener('pointerup', endKeyDrag);
keyOrb.addEventListener('pointercancel', endKeyDrag);

// ---------- Beulah Land: pop the balloons of doubt by clicking/tapping ----------
// a pointerdown on the 3D canvas casts a ray from the camera through the pointer
// and asks the scene to pop whichever balloon body it hits. Gated hard to the
// 'doubt' phase (beulah.canPop()), so it never interferes with anything else.
const popRaycaster = new THREE.Raycaster();
const popPointer = new THREE.Vector2();
function tryPopAt(clientX: number, clientY: number): void {
  if (mode !== 'beulah' || !beulah.canPop()) return;
  const rect = renderer.domElement.getBoundingClientRect();
  popPointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  popPointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  popRaycaster.setFromCamera(popPointer, camera);
  beulah.tryPop(popRaycaster);
}
// 'click' fires for mouse, touch-tap, and automated clicks alike — the right
// event for a discrete "pop". Gated hard to the doubt phase inside tryPopAt.
renderer.domElement.addEventListener('click', (e: MouseEvent) => tryPopAt(e.clientX, e.clientY));

// ---------- Chapter XII: the Plain of Ease & the Hill Lucre ----------
const lucre = new LucreScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  showChoice,
  battleUI: (show) => {
    battleUI.classList.toggle('show', show);
    battleUI.classList.toggle('solo', show);
  },
  setHP: (c) => { battleFillChr.style.width = `${Math.max(0, c)}%`; },
  fade: (mid) => fadeTransition(() => {
    mid();
    if (lucreActors) camTarget.copy(lucreActors.christian.root.position);
  }),
  onComplete: () => {
    quest.lucreDone = true;
    showEnding(
      '🧂 Chapter XII Complete',
      'The Hill Lucre',
      'By-ends of Fair-speech would only walk with religion in silver slippers, and '
      + 'flounced off to his old school friends in their comfortable carriage. Then '
      + 'Demas called from the glittering mine of Lucre — and whoever turned aside, '
      + 'the hill swallowed: By-ends, Hold-the-world, Money-love and Save-all, never '
      + 'seen on the way again. Past the hill, a woman of pale salt stands forever '
      + 'half-turned toward what she left behind. Remember Lot\'s wife. Eyes east — '
      + 'always east…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.shadowDone = true;
        worldMap.vanityDone = true;
        worldMap.lucreDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.lucreT;
        goToMap();
      },
    );
  },
});
let lucreActors: { christian: import('./bear').BearParts } | null = null;

function enterLucre(revisit: boolean): void {
  mode = 'lucre';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  lucreActors = lucre.enter(revisit);
  camTarget.copy(lucreActors.christian.root.position);
}

// ---------- Chapter XIII: Doubting Castle ----------
const castle = new CastleScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  rumbleSound: () => music.rumble(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  showChoice,
  battleUI: (show) => {
    battleUI.classList.toggle('show', show);
    battleUI.classList.toggle('solo', false); // show both bars: Christian + Hopeful
  },
  setHP: (c, h) => {
    battleFillChr.style.width = `${Math.max(0, c)}%`;
    battleFillApo.style.width = `${Math.max(0, h)}%`;
  },
  fade: (mid) => fadeTransition(() => {
    mid();
    if (castleActors) camTarget.copy(castleActors.christian.root.position);
  }),
  onComplete: () => {
    quest.castleDone = true;
    showEnding(
      '🏰 Chapter XIII Complete',
      'Doubting Castle',
      'Christian\'s shortcut through Bypath Meadow led straight to Giant Despair\'s '
      + 'dungeon. Days of darkness, beatings, and despair — until Christian remembered '
      + 'the key called Promise that the King had given him all along. One key. '
      + 'Three locks. Every door flew open. They ran back to the King\'s Highway, '
      + 'left a warning for those who follow, and walked on — wiser, and more grateful '
      + 'for the true road than they had ever been before…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.shadowDone = true;
        worldMap.vanityDone = true;
        worldMap.lucreDone = true;
        worldMap.castleDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.castleT;
        goToMap();
      },
    );
  },
});
let castleActors: { christian: import('./bear').BearParts; hopeful: import('./bear').BearParts } | null = null;

function enterCastle(revisit: boolean): void {
  mode = 'castle';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  // repurpose the Apollyon bar to show Hopeful's HP
  const apoName = document.querySelector('#battle-ui .brow.apo .bname') as HTMLElement | null;
  if (apoName) apoName.textContent = 'Hopeful';
  castleActors = castle.enter(revisit);
  camTarget.copy(castleActors.christian.root.position);
}

// ---------- Chapter XIV: the Delectable Mountains ----------
const mountain = new MountainScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  rumbleSound: () => music.rumble(),
  setMusic: (style) => music.setStyle(style),
  onComplete: () => {
    quest.mountainDone = true;
    showEnding(
      '⛰ Chapter XIV Complete',
      'The Delectable Mountains',
      'In the bright mountains of the Lord, four shepherds — Knowledge, Experience, '
      + 'Watchful, and Sincere — fed the weary pilgrims and showed them four sights: '
      + 'the cliff of Hill Error, the blind wanderers of Mount Caution, a smoking door '
      + 'into Hell, and, through a trembling glass, the far golden towers of the '
      + 'Celestial City itself. Warned to keep the King\'s Highway and beware every '
      + 'shortcut, Christian and Hopeful walked on — rested, instructed, and full of '
      + 'fresh hope, for now they had seen where the long road ends…',
      () => {
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.shadowDone = true;
        worldMap.vanityDone = true;
        worldMap.lucreDone = true;
        worldMap.castleDone = true;
        worldMap.mountainDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.mountainT;
        goToMap();
      },
    );
  },
});
let mountainActors: { christian: import('./bear').BearParts; hopeful: import('./bear').BearParts } | null = null;

function enterMountain(revisit: boolean): void {
  mode = 'mountain';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  mountainActors = mountain.enter(revisit);
  camTarget.copy(mountainActors.christian.root.position);
}

// ---------- Chapter XV: the Enchanted Ground ----------
const enchanted = new EnchantedScene({
  playScript,
  showChoice,
  setObjective,
  setSleep: (value, show) => {
    sleepUI.classList.toggle('show', show);
    sleepFill.style.width = `${THREE.MathUtils.clamp(value, 0, 100)}%`;
  },
  setDream: (amount) => {
    const a = THREE.MathUtils.clamp(amount, 0, 1);
    // The final stretch of drowsiness falls away rapidly into darkness so
    // reaching zero wakefulness reads as a true blackout, not just soft blur.
    const blackout = THREE.MathUtils.smoothstep(a, 0.78, 1);
    const brightness = (1 - a * 0.18) * (1 - blackout * 0.94);
    renderer.domElement.style.filter =
      `blur(${(a * 3.2).toFixed(2)}px) saturate(${(1 - a * 0.45).toFixed(2)}) brightness(${brightness.toFixed(2)})`;
  },
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  setMusic: (style) => music.setStyle(style),
  onComplete: () => {
    quest.enchantedDone = true;
    showEnding(
      '🌾 Chapter XV Complete',
      'The Enchanted Ground',
      'Christian and Hopeful tested every voice against the King’s directions. They escaped '
      + 'the Flatterer’s net, refused Atheist’s hopeless road, and kept one another awake '
      + 'through the dreaming fields. Ignorance still trusted his own goodness, but the '
      + 'pilgrims trusted the King and walked together toward the light.',
      () => {
        worldMap.mountainDone = true;
        worldMap.enchantedDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.enchantedT;
        goToMap();
      },
    );
  },
});
let enchantedActors: { christian: import('./bear').BearParts; hopeful: import('./bear').BearParts } | null = null;

function enterEnchanted(revisit: boolean): void {
  mode = 'enchanted';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  enchantedActors = enchanted.enter(revisit);
  camTarget.copy(enchantedActors.christian.root.position);
}

// ---------- Chapter XVI: Beulah Land ----------
const beulah = new BeulahScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  rumbleSound: () => music.rumble(),
  setMusic: (style) => music.setStyle(style),
  onComplete: () => {
    quest.beulahDone = true;
    showEnding(
      '✨ Across the River',
      'Chapter XVI — Beulah Land',
      'In the golden country of Beulah, in sight of the shining City, Christian and '
      + 'Hopeful came at last to the deep River of death, where no bridge is and every '
      + 'pilgrim must cross. Christian sank, and old fears and sins rose about him like '
      + 'dark clouds — until Hopeful, feeling the bottom, held him up: "Be of good cheer; '
      + 'the King is with us." The doubts were put away, the far shore was reached, and '
      + 'two Shining Ones came down to meet them. Now, together, the angels will lead the '
      + 'pilgrims up the last shining hill — home to the Celestial City…',
      () => {
        // the road is now open all the way to the City's gate
        worldMap.sloughDone = true;
        worldMap.moralityDone = true;
        worldMap.wicketDone = true;
        worldMap.crossDone = true;
        worldMap.highwayDone = true;
        worldMap.hillDone = true;
        worldMap.palaceDone = true;
        worldMap.valleyDone = true;
        worldMap.shadowDone = true;
        worldMap.vanityDone = true;
        worldMap.lucreDone = true;
        worldMap.castleDone = true;
        worldMap.mountainDone = true;
        worldMap.enchantedDone = true;
        worldMap.beulahDone = true;
        worldMap.start(mapParty());
        worldMap.road = 'main';
        worldMap.progress = worldMap.beulahT;
        goToMap();
      },
    );
  },
});
let beulahActors: { christian: import('./bear').BearParts; hopeful: import('./bear').BearParts } | null = null;

function enterBeulah(revisit: boolean): void {
  mode = 'beulah';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  beulahActors = beulah.enter(revisit);
  camTarget.copy(beulahActors.christian.root.position);
}

// ---------- Chapter XVII: the Celestial City (the true finale) ----------
const celestial = new CelestialScene({
  playScript,
  setObjective,
  onExit: () => goToMap(),
  blipSound: () => music.blip(),
  rumbleSound: () => music.rumble(),
  setMusic: (style) => music.setStyle(style),
  fade: (mid) => fadeTransition(() => {
    mid();
    if (celestialActors) camTarget.copy(celestial.focus().position);
  }, 900),
  onComplete: () => {
    quest.celestialDone = true;
    worldMap.celestialDone = true;
    saveChapterProgress();
    // the true ending: Bunyan's scroll, then "The End"
    showFinale();
  },
});
let celestialActors: { christian: import('./bear').BearParts; hopeful: import('./bear').BearParts } | null = null;

function enterCelestial(revisit: boolean): void {
  mode = 'celestial';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  celestialActors = celestial.enter(revisit);
  camTarget.copy(celestialActors.christian.root.position);
}

// the closing sequence: fade to a scroll bearing Bunyan's warning, then "The End"
function showFinale(): void {
  const finale = document.getElementById('finale')!;
  finale.classList.add('show');
  requestAnimationFrame(() => requestAnimationFrame(() => finale.classList.add('reveal')));
  // after a good long read, dissolve the scroll into "The End"
  window.setTimeout(() => finale.classList.add('end'), 9000);
}

document.getElementById('finale-restart')?.addEventListener('click', () => {
  clearSaveAndReload();
});

function enterVanity(revisit: boolean): void {
  mode = 'vanity';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  vanityActors = vanity.enter(revisit);
  camTarget.copy(vanityActors.christian.root.position);
}

function enterShadow(revisit: boolean): void {
  mode = 'shadow';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  shadowActors = shadow.enter(revisit);
  camTarget.copy(shadowActors.christian.root.position);
}

function enterHighway(revisit: boolean): void {
  mode = 'highway';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  highwayActors = highway.enter(revisit);
  camTarget.copy(highwayActors.christian.root.position);
}

function enterCross(revisit: boolean): void {
  mode = 'cross';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  crossActors = cross.enter(revisit);
  camTarget.copy(crossActors.christian.root.position);
}

function enterWicket(revisit: boolean): void {
  mode = 'wicket';
  music.setStyle('gate');
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  wicketActors = wicket.enter(revisit);
  camTarget.copy(wicketActors.christian.root.position);
}

function enterSlough(revisit: boolean, replay = false): void {
  mode = 'slough';
  music.setStyle('slough');
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  // a story replay brings Pliable back, so the whole chapter is retold
  const withPliable = replay || (!revisit && quest.pliableFollowing && !quest.pliableLeft);
  sloughActors = slough.enter(withPliable, revisit);
  camTarget.copy(sloughActors.christian.root.position);
}

// revisit the City of Destruction from the world map
function enterVillage(): void {
  mode = 'village';
  music.setStyle('village');
  // Chapter I is behind him: the Wicket Gate road stays open on every visit
  // (including after a reload, when the gate would otherwise start shut)
  world.gate.open = true;
  world.gate.snap = true;
  world.lightBeam.visible = true;
  christian.root.position.set(WALL.east - 5, 0, 0);
  christian.root.rotation.y = -Math.PI / 2;
  camTarget.copy(christian.root.position);
  ui.prompt.style.display = 'none';
  ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
  if (isTouch) ui.talkBtn.style.display = 'none';
  setObjective('🏘 Home for a visit — the shining light in the east leads back to the road');
}

// strip a leading emoji/pictograph (plus its trailing space) from objective
// text — call sites still write '🌊 Chapter II Complete' etc. throughout the
// codebase, but the hint bar itself now shows plain text only.
const LEADING_EMOJI = /^(?:\p{Extended_Pictographic}️?‍?)+\s*/u;
function setObjective(text: string): void {
  const clean = text.replace(LEADING_EMOJI, '');
  if (ui.objective.textContent === clean) return;
  ui.objective.textContent = clean;
  // a gentle pop so a new goal is noticed without a modal interruption
  ui.objective.classList.remove('objective-bump');
  void ui.objective.offsetWidth;
  ui.objective.classList.add('objective-bump');
}

// ---------------------------------------------------------------- dialogue

let dialogueLines: DialogueLine[] = [];
let dialogueIndex = 0;
let dialogueOpen = false;
let dialogueNPC: NPC | null = null;
let scriptDone: (() => void) | null = null;
let dialogueTypingTimer: number | null = null;
let dialogueTyping = false;
let dialogueFullText = '';

// Mrs. Bramble's honey-bun is a real voxel prop, passed from her paw into
// Christian's rather than existing only in the dialogue.
const honeyBun = new THREE.Group();
honeyBun.add(block(0.44, 0.22, 0.32, 0xd89545, 0, 0, 0));
honeyBun.add(block(0.34, 0.08, 0.27, 0xf0b85f, 0, 0.13, 0));
honeyBun.add(block(0.07, 0.04, 0.22, 0xffd77d, -0.1, 0.18, 0));
honeyBun.add(block(0.07, 0.04, 0.22, 0xffd77d, 0.1, 0.18, 0));
honeyBun.visible = false;
scene.add(honeyBun);
let bunHandoffActive = false;
let bunHandoffPlayed = false;
let bunHandoffTime = 0;

function beginBunHandoff(): void {
  if (bunHandoffPlayed) return;
  bunHandoffPlayed = true;
  bunHandoffActive = true;
  bunHandoffTime = 0;
  honeyBun.visible = true;
}

function updateBunHandoff(dt: number): void {
  if (!bunHandoffActive) return;
  const baker = npcs.find((npc) => npc.id === 'baker');
  if (!baker) return;
  bunHandoffTime += dt;
  const from = baker.parts.root.position.clone().add(new THREE.Vector3(0, 1.15, 0));
  const to = christian.root.position.clone().add(new THREE.Vector3(0, 1.05, 0));
  const u = THREE.MathUtils.smoothstep(bunHandoffTime, 0.12, 1.05);
  honeyBun.position.lerpVectors(from, to, u);
  honeyBun.position.y += Math.sin(u * Math.PI) * 0.22;
  baker.parts.armR.rotation.x = -Math.sin(Math.min(1, bunHandoffTime / 0.5)) * 1.05;
  christian.armL.rotation.x = -Math.sin(Math.min(1, Math.max(0, bunHandoffTime - 0.45) / 0.5)) * 0.9;
  if (bunHandoffTime >= 1.65) {
    bunHandoffActive = false;
    honeyBun.visible = false;
    baker.parts.armR.rotation.x = 0;
    christian.armL.rotation.x = 0;
  }
}

// scripted cutscene dialogue (no NPC attached)
function playScript(lines: DialogueLine[], onDone?: () => void): void {
  dialogueNPC = null;
  dialogueLines = lines;
  dialogueIndex = 0;
  dialogueOpen = true;
  scriptDone = onDone ?? null;
  ui.dialogue.style.display = 'block';
  ui.prompt.style.display = 'none';
  if (isTouch) ui.talkBtn.style.display = 'block';
  showLine();
}

function openDialogue(npc: NPC): void {
  dialogueNPC = npc;
  dialogueLines = npc.getLines(quest);
  dialogueIndex = 0;
  dialogueOpen = true;
  ui.dialogue.style.display = 'block';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  if (npc.id === 'baker') bunHandoffPlayed = false;
  showLine();
  // NPC turns to face Christian
  const dx = christian.root.position.x - npc.parts.root.position.x;
  const dz = christian.root.position.z - npc.parts.root.position.z;
  npc.parts.root.rotation.y = Math.atan2(dx, dz);
}

const dialogueCharacterNames = getDialogueCharacterNames();
const dialogueNamePattern = new RegExp(
  `(^|[^A-Za-z])(${dialogueCharacterNames
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})(?=$|[^A-Za-z])`,
  'g',
);

function renderDialogueText(text: string): void {
  ui.dialogueText.replaceChildren();
  let cursor = 0;
  for (const match of text.matchAll(dialogueNamePattern)) {
    const prefix = match[1];
    const name = match[2];
    const nameStart = (match.index ?? 0) + prefix.length;
    if (nameStart > cursor) {
      ui.dialogueText.append(document.createTextNode(text.slice(cursor, nameStart)));
    }
    const strong = document.createElement('strong');
    strong.textContent = name;
    ui.dialogueText.append(strong);
    cursor = nameStart + name.length;
  }
  if (cursor < text.length) {
    ui.dialogueText.append(document.createTextNode(text.slice(cursor)));
  }
}

function stopDialogueTyping(showFullText = true): void {
  if (dialogueTypingTimer !== null) window.clearInterval(dialogueTypingTimer);
  dialogueTypingTimer = null;
  dialogueTyping = false;
  ui.dialogue.classList.remove('is-typing');
  if (showFullText && dialogueFullText) renderDialogueText(dialogueFullText);
}

function showDialogueText(text: string): void {
  stopDialogueTyping(false);
  dialogueFullText = text;
  if (gameSettings.textSpeed === 'instant' || gameSettings.reducedMotion) {
    renderDialogueText(text);
    return;
  }
  dialogueTyping = true;
  ui.dialogue.classList.add('is-typing');
  // Lay out the whole formatted line up front (bold story names included)
  // with every letter hidden, then reveal letters in order. The bubble is its
  // final height from the first letter, words never jump to the next line,
  // and names are bold from the moment they appear.
  renderDialogueText(text);
  const letters: HTMLElement[] = [];
  const walker = document.createTreeWalker(ui.dialogueText, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) textNodes.push(n as Text);
  for (const node of textNodes) {
    const frag = document.createDocumentFragment();
    for (const ch of node.data) {
      const span = document.createElement('span');
      span.className = 'type-ghost';
      span.textContent = ch;
      frag.append(span);
      letters.push(span);
    }
    node.replaceWith(frag);
  }
  let visibleCharacters = 0;
  const interval = gameSettings.textSpeed === 'storybook' ? 34 : 19;
  dialogueTypingTimer = window.setInterval(() => {
    letters[visibleCharacters]?.classList.remove('type-ghost');
    visibleCharacters += 1;
    if (visibleCharacters >= letters.length) stopDialogueTyping(true);
  }, interval);
}

function showLine(): void {
  const line = dialogueLines[dialogueIndex];
  const portrait = getDialoguePortrait(line.speaker);
  ui.dialogueName.textContent = line.speaker;
  showDialogueText(line.text);
  ui.dialogue.classList.toggle('has-portrait', portrait !== null);
  ui.dialoguePortrait.style.display = portrait ? 'block' : 'none';
  if (portrait) {
    ui.dialoguePortrait.style.backgroundImage = `url("${portrait}")`;
  }
  // Christian's speech gets a warm brown bubble; narration (empty speaker) is neutral
  ui.dialogue.classList.toggle('christian', line.speaker === 'Christian');
  ui.dialogue.classList.toggle('narration', line.speaker === '');
  if (
    dialogueNPC?.id === 'baker'
    && line.speaker === 'Mrs. Bramble'
    && line.text.startsWith('Here, take a honey-bun')
  ) beginBunHandoff();
}

function advanceDialogue(): void {
  if (dialogueTyping) {
    stopDialogueTyping(true);
    return;
  }
  // Let the visible handoff finish before the final line can be dismissed.
  if (bunHandoffActive) return;
  music.blip();
  dialogueIndex++;
  if (dialogueIndex < dialogueLines.length) {
    showLine();
    return;
  }
  // finished
  dialogueOpen = false;
  stopDialogueTyping(false);
  ui.dialogue.style.display = 'none';
  const npc = dialogueNPC;
  dialogueNPC = null;
  const done = scriptDone;
  scriptDone = null;
  if (done) {
    done();
    return;
  }
  if (!npc) return;
  const before = quest.talkedToEvangelist;
  npc.onFinish?.(quest);
  if (!before && quest.talkedToEvangelist) {
    revealShiningLight();
  }
}

ui.dialogue.addEventListener('click', advanceDialogue);

function revealShiningLight(): void {
  world.lightBeam.visible = true;
  world.gate.open = true;
  setObjective('✨ Follow the shining light through the Wicket Gate!');
}

// ---------------------------------------------------------------- input

const keys = new Set<string>();
window.addEventListener('keydown', (e) => {
  if (ui.settingsOverlay.classList.contains('open')) {
    if (e.code === 'Escape') closeSettings();
    return;
  }
  if (e.repeat) return;
  keys.add(e.code);
  if (
    e.code === 'KeyE' || e.code === 'Space' || e.code === 'Enter' ||
    e.key === 'e' || e.key === 'E' || e.key === ' ' || e.key === 'Enter'
  ) {
    if (dialogueOpen) advanceDialogue();
    else if (mode === 'map') tryEnterFromMap();
    else if (mode === 'village') tryTalk();
    else if (mode === 'slough') slough.talkToHelp();
    else if (mode === 'morality') morality.talkEvangelist();
    else if (mode === 'hill') hill.tryPickScroll();
    else if (mode === 'cross') {
      if (cross.nearCross()) cross.talkCross();
      else if (cross.nearTomb()) cross.talkTomb();
    }
    else if (mode === 'palace') {
      if (palace.nearWatchful()) palace.talkWatchful();
      else {
        for (let wi = 0; wi < 4; wi++) {
          if (palace.nearWoman(wi)) { palace.talkWoman(wi); break; }
        }
      }
    }
    else if (mode === 'shadow') {
      if (shadow.nearFaithful()) shadow.talkFaithful();
    }
    else if (mode === 'vanity') {
      if (vanity.nearFountain()) vanity.talkFountain();
      else if (vanity.nearCitizen()) vanity.talkCitizen();
    }
    else if (mode === 'valley') valley.tryAttack();
    else if (mode === 'lucre') lucre.tryTouchPillar();
    else if (mode === 'mountain') mountain.talkShepherd();
    else if (mode === 'enchanted') enchanted.tryWakeAction();
    else if (mode === 'beulah') { if (beulah.nearAngel()) beulah.talkAngel(); }
    else if (mode === 'celestial') { if (celestial.nearSaint()) celestial.talkSaint(); }
  }
});

// Entering a finished chapter from the map offers to retell its story from
// the start, or to simply wander the place again.
const MAP_CHAPTERS: Partial<Record<string, { done: () => boolean; enter: (revisit: boolean, replay: boolean) => void }>> = {
  slough: { done: () => quest.sloughComplete, enter: (r, replay) => enterSlough(r, replay) },
  morality: { done: () => quest.moralityDone, enter: (r) => enterMorality(r) },
  beyond: { done: () => quest.wicketDone, enter: (r) => enterWicket(r) },
  cross: { done: () => quest.crossDone, enter: (r) => enterCross(r) },
  highway: { done: () => quest.highwayDone, enter: (r) => enterHighway(r) },
  hill: { done: () => quest.hillDone, enter: (r) => enterHill(r) },
  palace: { done: () => quest.palaceDone, enter: (r) => enterPalace(r) },
  valley: { done: () => quest.valleyDone, enter: (r) => enterValley(r) },
  shadow: { done: () => quest.shadowDone, enter: (r) => enterShadow(r) },
  vanity: { done: () => quest.vanityDone, enter: (r) => enterVanity(r) },
  lucre: { done: () => quest.lucreDone, enter: (r) => enterLucre(r) },
  castle: { done: () => quest.castleDone, enter: (r) => enterCastle(r) },
  mountain: { done: () => quest.mountainDone, enter: (r) => enterMountain(r) },
  enchanted: { done: () => quest.enchantedDone, enter: (r) => enterEnchanted(r) },
  beulah: { done: () => quest.beulahDone, enter: (r) => enterBeulah(r) },
  celestial: { done: () => quest.celestialDone, enter: (r) => enterCelestial(r) },
};

function tryEnterFromMap(): void {
  if (choiceBox.classList.contains('open')) return;
  const spot = worldMap.spot();
  if (spot === 'city') { enterVillage(); return; }
  const ch = MAP_CHAPTERS[spot];
  if (!ch) return;
  if (!ch.done()) { ch.enter(false, false); return; }
  ui.prompt.style.display = 'none';
  showChoice('Replay the story from the beginning', 'Just wander around', (pick) => {
    if (mode !== 'map' || worldMap.spot() !== spot) return;
    if (pick === 0) ch.enter(false, true);
    else ch.enter(true, false);
  });
}
window.addEventListener('keyup', (e) => keys.delete(e.code));
// don't leave movement keys stuck when the tab loses focus mid-keypress
window.addEventListener('blur', () => keys.clear());
document.addEventListener('visibilitychange', () => {
  if (document.hidden) keys.clear();
});

// hidden playtest skip-keys: 9 = chapters I–II done (map at the slough),
// 8 = chapter III done too (map at the crossroad, long road open)
window.addEventListener('keydown', (e) => {
  if (e.code !== 'Digit9' && e.code !== 'Digit8') return;
  if (dialogueOpen || endingOpen) return;
  Object.assign(quest, {
    talkedToEvangelist: true, talkedToFamily: true, chaseDone: true,
    pliableFollowing: true, chapterComplete: true,
    sloughComplete: true, pliableLeft: true,
  });
  quest.moralityDone = e.code === 'Digit8';
  if (!started) {
    started = true;
    music.start();
    ui.titleScreen.classList.add('hidden');
    setTimeout(() => (ui.titleScreen.style.display = 'none'), 400);
  }
  worldMap.sloughDone = true;
  worldMap.moralityDone = quest.moralityDone;
  worldMap.start(mapParty());
  worldMap.road = 'main';
  worldMap.progress = quest.moralityDone ? worldMap.forkT : worldMap.sloughT;
  goToMap();
});

// ---------- debug chapter-select panel ----------
function debugEnsureStarted(): void {
  if (started) return;
  started = true;
  music.start();
  ui.titleScreen.classList.add('hidden');
  setTimeout(() => (ui.titleScreen.style.display = 'none'), 400);
}

function debugJumpToWorldMap(): void {
  // A debug jump can happen during any overlay or locked minigame. Clear all
  // of them so none remains above the map or keeps consuming touch input.
  dialogueOpen = false;
  stopDialogueTyping(false);
  dialogueNPC = null;
  scriptDone = null;
  endingOpen = false;
  cutscene = false;
  choiceCb = null;
  choiceBox.classList.remove('open');
  keyGameOpen = false;
  keyDragActive = false;
  keyGameBox.classList.remove('open');
  battleUI.classList.remove('show', 'solo');
  swordBtn.classList.remove('show');
  ui.dialogue.style.display = 'none';
  ui.ending.style.display = 'none';
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  const finale = document.getElementById('finale');
  finale?.classList.remove('show', 'reveal', 'end');

  // Mirror the real story state into the map. Previously the debug button
  // could enter map mode with stale locks and leave Christian unable to move.
  worldMap.sloughDone = quest.sloughComplete;
  worldMap.moralityDone = quest.moralityDone;
  worldMap.wicketDone = quest.wicketDone;
  worldMap.crossDone = quest.crossDone;
  worldMap.highwayDone = quest.highwayDone;
  worldMap.hillDone = quest.hillDone;
  worldMap.palaceDone = quest.palaceDone;
  worldMap.valleyDone = quest.valleyDone;
  worldMap.shadowDone = quest.shadowDone;
  worldMap.vanityDone = quest.vanityDone;
  worldMap.lucreDone = quest.lucreDone;
  worldMap.castleDone = quest.castleDone;
  worldMap.mountainDone = quest.mountainDone;
  worldMap.enchantedDone = quest.enchantedDone;
  worldMap.beulahDone = quest.beulahDone;
  worldMap.celestialDone = quest.celestialDone;

  // Place Christian at the latest completed landmark, ready to continue east.
  worldMap.progress = quest.celestialDone ? worldMap.celestialT
    : quest.beulahDone ? worldMap.beulahT
    : quest.enchantedDone ? worldMap.enchantedT
    : quest.mountainDone ? worldMap.mountainT
    : quest.castleDone ? worldMap.castleT
    : quest.lucreDone ? worldMap.lucreT
    : quest.vanityDone ? worldMap.vanityT
    : quest.shadowDone ? worldMap.shadowT
    : quest.valleyDone ? worldMap.valleyT
    : quest.palaceDone ? worldMap.palaceT
    : quest.hillDone ? worldMap.hillT
    : quest.highwayDone ? worldMap.highwayT
    : quest.crossDone ? worldMap.crossT
    : quest.wicketDone ? worldMap.beyondT
    : quest.moralityDone ? worldMap.forkT
    : quest.sloughComplete ? worldMap.sloughT
    : worldMap.cityT;
  worldMap.road = 'main';
  worldMap.branchP = 0;
  worldMap.justDiverted = false;
  worldMap.start(mapParty());
  goToMap();
}

ui.debugBtn.addEventListener('click', () => {
  ui.debugPanel.classList.toggle('open');
});

ui.debugPanel.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest('button[data-jump]') as HTMLButtonElement | null;
  if (!btn) return;
  const jump = btn.dataset.jump!;
  ui.debugPanel.classList.remove('open');
  debugEnsureStarted();
  dialogueOpen = false;
  stopDialogueTyping(false);
  dialogueNPC = null;
  scriptDone = null;
  endingOpen = false;
  cutscene = false;
  ui.dialogue.style.display = 'none';
  ui.ending.style.display = 'none';
  // debug jumps skip the map entirely, so make sure its "how far can I walk"
  // flags agree with wherever we're jumping to — otherwise a later visit to
  // the map can snap Christian's progress back to an earlier chapter
  // each jump implies every earlier chapter is behind us
  const ORDER = ['village', 'slough', 'morality', 'wicket-approach', 'cross', 'highway', 'hill', 'palace', 'valley', 'shadow', 'vanity', 'lucre', 'castle', 'mountain', 'enchanted', 'beulah', 'celestial'];
  const rank = ORDER.indexOf(
    jump === 'wicket-highway' || jump === 'interpreter'
      ? 'wicket-approach'
      : jump === 'ignorance-epilogue'
      ? 'celestial'
      : jump === 'map' ? 'village' : jump,
  );
  if (rank >= 2) worldMap.sloughDone = true;
  if (rank >= 3) worldMap.moralityDone = true;
  if (rank >= 4) worldMap.wicketDone = true;
  if (rank >= 5) { worldMap.crossDone = true; quest.crossDone = true; }
  if (rank >= 6) { worldMap.highwayDone = true; quest.highwayDone = true; }
  if (rank >= 7) { worldMap.hillDone = true; quest.hillDone = true; }
  if (rank >= 8) { worldMap.palaceDone = true; quest.palaceDone = true; }
  if (rank >= 9) { worldMap.valleyDone = true; quest.valleyDone = true; }
  if (rank >= 10) { worldMap.shadowDone = true; quest.shadowDone = true; }
  if (rank >= 11) { worldMap.vanityDone = true; quest.vanityDone = true; }
  if (rank >= 12) { worldMap.lucreDone = true; quest.lucreDone = true; }
  if (rank >= 13) { worldMap.castleDone = true; quest.castleDone = true; }
  if (rank >= 14) { worldMap.mountainDone = true; quest.mountainDone = true; }
  if (rank >= 15) { worldMap.enchantedDone = true; quest.enchantedDone = true; }
  if (rank >= 16) { worldMap.beulahDone = true; quest.beulahDone = true; }
  if (jump === 'village') enterVillage();
  else if (jump === 'slough') enterSlough(false);
  else if (jump === 'morality') enterMorality(false);
  else if (jump === 'wicket-approach') enterWicket(false);
  else if (jump === 'wicket-highway') { enterWicket(false); wicket.debugSkip('highway'); }
  else if (jump === 'interpreter') { enterWicket(false); wicket.debugSkip('house'); }
  else if (jump === 'cross') enterCross(false);
  else if (jump === 'highway') enterHighway(false);
  else if (jump === 'hill') enterHill(false);
  else if (jump === 'palace') enterPalace(false);
  else if (jump === 'valley') enterValley(false);
  else if (jump === 'shadow') enterShadow(false);
  else if (jump === 'vanity') enterVanity(false);
  else if (jump === 'lucre') enterLucre(false);
  else if (jump === 'castle') enterCastle(false);
  else if (jump === 'mountain') enterMountain(false);
  else if (jump === 'enchanted') enterEnchanted(false);
  else if (jump === 'beulah') enterBeulah(false);
  else if (jump === 'celestial') enterCelestial(false);
  else if (jump === 'ignorance-epilogue') {
    enterCelestial(false);
    celestial.debugIgnorance();
    camTarget.copy(celestial.focus().position);
  }
  else if (jump === 'map') debugJumpToWorldMap();
});

// touch joystick
const joy = { active: false, id: -1, x: 0, y: 0 };
ui.joystick.addEventListener('pointerdown', (e) => {
  joy.active = true;
  joy.id = e.pointerId;
  ui.joystick.setPointerCapture(e.pointerId);
  updateJoy(e);
});
ui.joystick.addEventListener('pointermove', (e) => {
  if (joy.active && e.pointerId === joy.id) updateJoy(e);
});
const endJoy = (e: PointerEvent) => {
  if (e.pointerId !== joy.id) return;
  joy.active = false;
  joy.x = 0;
  joy.y = 0;
  ui.stick.style.transform = 'translate(-50%, -50%)';
};
ui.joystick.addEventListener('pointerup', endJoy);
ui.joystick.addEventListener('pointercancel', endJoy);

function updateJoy(e: PointerEvent): void {
  const rect = ui.joystick.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  let dx = (e.clientX - cx) / (rect.width / 2);
  let dy = (e.clientY - cy) / (rect.height / 2);
  const len = Math.hypot(dx, dy);
  if (len > 1) { dx /= len; dy /= len; }
  joy.x = dx;
  joy.y = dy;
  ui.stick.style.transform =
    `translate(calc(-50% + ${dx * 33}px), calc(-50% + ${dy * 33}px))`;
}

ui.talkBtn.addEventListener('click', () => {
  if (dialogueOpen) advanceDialogue();
  else if (mode === 'map') tryEnterFromMap();
  else if (mode === 'village') tryTalk();
  else if (mode === 'slough') slough.talkToHelp();
  else if (mode === 'morality') morality.talkEvangelist();
  else if (mode === 'hill') hill.tryPickScroll();
  else if (mode === 'cross') {
    if (cross.nearCross()) cross.talkCross();
    else if (cross.nearTomb()) cross.talkTomb();
  }
  else if (mode === 'palace') {
    if (palace.nearWatchful()) palace.talkWatchful();
    else {
      for (let wi = 0; wi < 4; wi++) {
        if (palace.nearWoman(wi)) { palace.talkWoman(wi); break; }
      }
    }
  }
  else if (mode === 'shadow') {
    if (shadow.nearFaithful()) shadow.talkFaithful();
  }
  else if (mode === 'vanity') {
    if (vanity.nearFountain()) vanity.talkFountain();
    else if (vanity.nearCitizen()) vanity.talkCitizen();
  }
  else if (mode === 'valley') valley.tryAttack();
  else if (mode === 'lucre') lucre.tryTouchPillar();
  else if (mode === 'mountain') mountain.talkShepherd();
  else if (mode === 'enchanted') enchanted.tryWakeAction();
  else if (mode === 'beulah') { if (beulah.nearAngel()) beulah.talkAngel(); }
  else if (mode === 'celestial') { if (celestial.nearSaint()) celestial.talkSaint(); }
});

// The prompt itself is the largest and clearest touch target. Route it through
// the existing action button so every chapter keeps exactly the same behavior.
ui.prompt.addEventListener('click', () => {
  if (isTouch && ui.prompt.style.display !== 'none') ui.talkBtn.click();
});

// Chapter IX has its own explicit combat control. It uses the same guarded
// attack method as the keyboard, so rapid taps cannot skip the turn sequence.
swordBtn.addEventListener('click', () => {
  if (mode === 'valley' && !dialogueOpen && !endingOpen) valley.trySwordButton();
});

// ---------------------------------------------------------------- interaction

const TALK_RANGE = 3.2;
let nearestNPC: NPC | null = null;
let nearestThing: Interactable | null = null;

function findNearestNPC(): NPC | null {
  let best: NPC | null = null;
  let bestDist = TALK_RANGE;
  for (const npc of npcs) {
    const d = npc.parts.root.position.distanceTo(christian.root.position);
    if (d < bestDist) {
      best = npc;
      bestDist = d;
    }
  }
  return best;
}

function findNearestThing(): Interactable | null {
  let best: Interactable | null = null;
  let bestDist = Infinity;
  for (const it of world.interactables) {
    const d = Math.hypot(it.x - christian.root.position.x, it.z - christian.root.position.z);
    if (d < it.r && d < bestDist) {
      best = it;
      bestDist = d;
    }
  }
  return best;
}

function tryTalk(): void {
  if (dialogueOpen) return;
  if (nearestNPC) openDialogue(nearestNPC);
  else if (nearestThing) triggerInteract(nearestThing);
}

// ---------- village objects: well, pump, chickens, nest, cow ----------
const interactCounts: Record<string, number> = {};
function nextLine(id: string, pool: DialogueLine[][]): DialogueLine[] {
  const i = interactCounts[id] ?? 0;
  interactCounts[id] = (i + 1) % pool.length;
  return pool[i];
}

const WELL_LINES: DialogueLine[][] = [
  [{ speaker: '', text: 'The village well. He leans over and sees his own tired reflection looking back.' }],
  [{ speaker: '', text: 'The water is cool and still. For a moment, the weight on his back feels almost bearable.' }],
  [{ speaker: '', text: 'Someone has tied a faded ribbon to the crossbeam. He wonders what they wished for.' }],
];
const PUMP_LINES: DialogueLine[][] = [
  [{ speaker: '', text: 'He works the handle. Cold water gushes into the trough below.' }],
  [{ speaker: '', text: 'Splash! A few droplets catch the morning light like tiny stars.' }],
];
const CHICKEN_LINES: DialogueLine[][] = [
  [{ speaker: 'Chickens', text: 'Bawk! Bawk-bawk!' }, { speaker: 'Christian', text: 'Easy now, ladies. I only came to say good morning.' }],
  [{ speaker: 'Chickens', text: '*peck peck peck*' }],
];
const COW_LINES: DialogueLine[][] = [
  [{ speaker: 'Cow', text: 'Mooooo.' }, { speaker: '', text: 'Old Hamlet\'s cow, watching him with those big brown eyes again.' }],
  [{ speaker: 'Cow', text: 'Mooo-oo.' }, { speaker: 'Christian', text: 'I don\'t suppose you\'d care to carry this burden a while?' }],
];

function triggerInteract(it: Interactable): void {
  if (it.id === 'nest') {
    if (quest.eggsCollected < 3) {
      quest.eggsCollected++;
      const n = quest.eggsCollected;
      playScript([{
        speaker: '',
        text: n < 3
          ? `He gently takes an egg, still warm. (${n}/3 collected)`
          : 'He takes the last egg — the little basket is full. Time to bring these home to Christiana.',
      }]);
    } else {
      playScript([{ speaker: '', text: 'The nest is empty for now. Perhaps the hens will lay more tomorrow.' }]);
    }
    return;
  }
  const pools: Record<string, DialogueLine[][]> = {
    well: WELL_LINES, pump: PUMP_LINES, chickens: CHICKEN_LINES, cow: COW_LINES,
  };
  const pool = pools[it.id];
  if (pool) playScript(nextLine(it.id, pool));
}

// ---------------------------------------------------------------- movement & camera

const SPEED = 7;
const camOffset = new THREE.Vector3(0, 13, 13).multiplyScalar(LENS);
const HOUSE_CAM_OFFSET = new THREE.Vector3(0, 7.5, 7.5).multiplyScalar(LENS); // closer view inside the Interpreter's House
// looks in from the passage north of the cell — kept below the 6-unit ceiling
const DUNGEON_CAM_OFFSET = new THREE.Vector3(0, 4.4, -13.5);
// Scenes tuned their fog for the old 18.4-unit camera distance; the
// atmosphere layer shifts fog out by the extra distance of the longer lens.
const atmosphere = new Atmosphere({
  fogShift: camOffset.length() - Math.hypot(13, 13),
  shadowHalf: 28,
});
const camTarget = new THREE.Vector3();
// one damped camera shared by the village and every chapter scene
const cameraRig = new CameraController(camera, camTarget);
const valleyBattleFocus = new THREE.Vector3();
const valleyCameraOffset = new THREE.Vector3();
let valleyBattleZoom = 1;
let playerMoving = false;

// ---------- little white dust puffs at Christian's feet ----------
interface Dust { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; life: number; vx: number; vz: number; }
const dustPool: Dust[] = [];
for (let i = 0; i < 16; i++) {
  const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), m);
  mesh.visible = false;
  mesh.castShadow = false;
  scene.add(mesh);
  dustPool.push({ mesh, mat: m, life: 1, vx: 0, vz: 0 });
}
let dustTimer = 0;

function spawnDust(x: number, z: number): void {
  const d = dustPool.find((p) => p.life >= 1);
  if (!d) return;
  d.life = 0;
  d.vx = (Math.random() - 0.5) * 0.8;
  d.vz = (Math.random() - 0.5) * 0.8;
  d.mesh.position.set(x, 0.12, z);
  d.mesh.visible = true;
}

function updateDust(dt: number): void {
  for (const d of dustPool) {
    if (d.life >= 1) continue;
    d.life = Math.min(1, d.life + dt * 2.2);
    d.mesh.position.x += d.vx * dt;
    d.mesh.position.z += d.vz * dt;
    d.mesh.position.y += dt * 0.9;
    const s = 0.6 + d.life * 1.6;
    d.mesh.scale.setScalar(s);
    d.mat.opacity = 0.55 * (1 - d.life);
    if (d.life >= 1) d.mesh.visible = false;
  }
}

function resolveCollisions(pos: THREE.Vector3): void {
  const R = 0.6;
  for (const c of world.colliders) {
    const dx = pos.x - c.x;
    const dz = pos.z - c.z;
    const d = Math.hypot(dx, dz);
    const min = c.r + R;
    if (d < min && d > 0.0001) {
      pos.x = c.x + (dx / d) * min;
      pos.z = c.z + (dz / d) * min;
    }
  }
  // NPCs are soft colliders too
  for (const npc of npcs) {
    const dx = pos.x - npc.parts.root.position.x;
    const dz = pos.z - npc.parts.root.position.z;
    const d = Math.hypot(dx, dz);
    if (d < 1.1 && d > 0.0001) {
      pos.x = npc.parts.root.position.x + (dx / d) * 1.1;
      pos.z = npc.parts.root.position.z + (dz / d) * 1.1;
    }
  }
  // city wall bounds (inner faces minus the player's radius)
  const xMin = WALL.west + 1.4;
  const xMax = WALL.east - 1.2;
  const zLim = WALL.south - 1.4;
  const inGateCorridor = Math.abs(pos.z) < WALL.gateHalfWidth && pos.x > xMax - 2;
  if (inGateCorridor && world.gate.open) {
    // squeeze through the wicket gate to the light outside
    pos.z = THREE.MathUtils.clamp(pos.z, -WALL.gateHalfWidth, WALL.gateHalfWidth);
    pos.x = Math.min(pos.x, WALL.east + 8);
  } else {
    pos.x = THREE.MathUtils.clamp(pos.x, xMin, xMax);
    pos.z = THREE.MathUtils.clamp(pos.z, -zLim, zLim);
  }
}

// ---------- the gate chase: Obstinate & Pliable run after Christian ----------
let chaseRunning = false;
let obstinateReturning = false;
const chaseArrived = { obstinate: false, pliable: false };

const CHASE_LINES: DialogueLine[] = [
  { speaker: 'Obstinate', text: 'CHRISTIAN! Stop right there, you great woolly fool! Come back at once!' },
  { speaker: 'Christian', text: 'I cannot stay, neighbours. This city will not last. I am searching for a country that can never crumble. You have seen the light ahead — come with me!' },
  { speaker: 'Obstinate', text: 'What?! Leave our friends, our comforts, our whole city — for a dream out of that book of yours?' },
  { speaker: 'Christian', text: 'What I seek is worth more than all we would leave behind. Come and see for yourselves!' },
  { speaker: 'Obstinate', text: 'Pah! I\'ll not be dragged on any fool\'s errand. Pliable — take his other arm. We are hauling him home.' },
  { speaker: 'Pliable', text: 'Weeeell… actually, Obstinate… golden crowns? Streets of light? A city that never crumbles? …My paws are tingling.' },
  { speaker: 'Pliable', text: 'I\'m going WITH him! Think of it — glory, adventure, and no more of your grumbling!' },
  { speaker: 'Obstinate', text: 'You TOO?! Of all the—! FINE! Go drown in a bog together, the pair of you! I am going home like a SENSIBLE creature. HMPH!' },
  { speaker: 'Pliable', text: 'Don\'t mind him. Lead the way, friend Christian — hop hop!' },
];

function startChase(): void {
  cutscene = true;
  chaseRunning = true;
  chaseArrived.obstinate = false;
  chaseArrived.pliable = false;
  christian.root.rotation.y = -Math.PI / 2; // turns to face the shouting
  setObjective('❗ Someone is shouting after you…');
}

let blockMessageAt = 0;
function updatePlayer(dt: number, t: number): void {
  let mx = 0;
  let mz = 0;
  if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
  if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
  mx += joy.x;
  mz += joy.y;

  const len = Math.hypot(mx, mz);
  playerMoving = len > 0.15 && !dialogueOpen && started && !endingOpen && !cutscene;

  if (playerMoving) {
    mx /= Math.max(len, 1);
    mz /= Math.max(len, 1);
    const pos = christian.root.position;
    pos.x += mx * SPEED * dt;
    pos.z += mz * SPEED * dt;
    resolveCollisions(pos);
    christian.root.rotation.y = lerpAngle(
      christian.root.rotation.y, Math.atan2(mx, mz), 12 * dt,
    );

    // the wicket gate stays shut until Evangelist shows the way
    if (!quest.talkedToEvangelist && pos.x > WALL.east - 4 && Math.abs(pos.z) < 5) {
      if (t - blockMessageAt > 4) {
        blockMessageAt = t;
        setObjective('🚪 The gate is shut fast… Evangelist on the east road may know the way.');
      }
    }

    // kick up little dust puffs while walking
    dustTimer -= dt;
    if (dustTimer <= 0) {
      dustTimer = 0.13;
      spawnDust(pos.x + (Math.random() - 0.5) * 0.5, pos.z + (Math.random() - 0.5) * 0.5);
    }
  }
  animateBear(christian, t, playerMoving);

  // racing for the gate the first time → Obstinate & Pliable give chase
  // (staged on the open road so the gate towers don't hide the scene)
  if (
    quest.talkedToEvangelist && !quest.chaseDone && !cutscene &&
    christian.root.position.x > WALL.east - 8 &&
    Math.abs(christian.root.position.z) < 4.5
  ) {
    startChase();
  }

  // reached the shining light beyond the gate
  if (
    quest.talkedToEvangelist && !cutscene &&
    christian.root.position.distanceTo(world.lightBeam.position) < 3.4
  ) {
    if (!quest.chapterComplete) {
      quest.chapterComplete = true;
      showEnding(
        '✨ Chapter I Complete',
        'Christian leaves the City of Destruction',
        'Obstinate turned back in disgust, but Pliable hops eagerly alongside. '
        + 'Through the Wicket Gate and into the wide world — the first step on the '
        + 'long road to the Celestial City…',
        () => {
          worldMap.start(mapParty());
          goToMap();
        },
      );
    } else if (!endingOpen) {
      // just visiting — walk back into the light to rejoin the road
      goToMap();
    }
  }
}

function lerpAngle(a: number, b: number, t: number): number {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * Math.min(t, 1);
}

// ---------------------------------------------------------------- NPC idle wander

const wanderState = npcs.map((npc) => ({
  home: npc.position.clone(),
  target: npc.position.clone(),
  wait: Math.random() * 4,
  moving: false,
}));

function updateNPCs(dt: number, t: number): void {
  npcs.forEach((npc, i) => {
    const ws = wanderState[i];
    const isTalking = dialogueOpen && dialogueNPC === npc;

    // gate chase: the pair sprint after Christian
    // (both stop NORTH-west of him so the dialogue panel can't hide them)
    if (chaseRunning && (npc.id === 'obstinate' || npc.id === 'pliable')) {
      const pos = npc.parts.root.position;
      const tx = christian.root.position.x - (npc.id === 'pliable' ? 1.3 : 2.6);
      const tz = christian.root.position.z - (npc.id === 'pliable' ? 2.3 : 1.1);
      const dx = tx - pos.x;
      const dz = tz - pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.25) {
        // they sprint flat-out — faster than Christian, so there's no outrunning them
        const step = Math.min(13.5 * dt, d);
        pos.x += (dx / d) * step;
        pos.z += (dz / d) * step;
        npc.parts.root.rotation.y = Math.atan2(dx, dz);
        animateBear(npc.parts, t * 1.4 + i, true);
      } else {
        chaseArrived[npc.id as 'obstinate' | 'pliable'] = true;
        const fx = christian.root.position.x - pos.x;
        const fz = christian.root.position.z - pos.z;
        npc.parts.root.rotation.y = Math.atan2(fx, fz);
        animateBear(npc.parts, t + i, false);
      }
      return;
    }

    // Obstinate stomps back home after the argument
    if (npc.id === 'obstinate' && obstinateReturning) {
      const pos = npc.parts.root.position;
      const dx = npc.position.x - pos.x;
      const dz = npc.position.z - pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.25) {
        pos.x += (dx / d) * 3.6 * dt;
        pos.z += (dz / d) * 3.6 * dt;
        npc.parts.root.rotation.y = Math.atan2(dx, dz);
        animateBear(npc.parts, t + i, true);
      } else {
        obstinateReturning = false;
        npc.parts.root.rotation.y = npc.facing;
        animateBear(npc.parts, t + i, false);
      }
      return;
    }

    // Pliable tags along once persuaded — but stops the moment he's left at the Slough
    if (npc.id === 'pliable' && quest.pliableFollowing && !quest.pliableLeft && !isTalking) {
      const pos = npc.parts.root.position;
      const dx = christian.root.position.x - pos.x;
      const dz = christian.root.position.z - pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 2.1) {
        const sp = Math.min(SPEED * 0.92, d * 2.5) * dt;
        pos.x += (dx / d) * sp;
        pos.z += (dz / d) * sp;
        npc.parts.root.rotation.y = Math.atan2(dx, dz);
        animateBear(npc.parts, t + 0.4, true);
      } else {
        animateBear(npc.parts, t + 0.4, false);
      }
      return;
    }

    if (!npc.wanderRadius || isTalking || cutscene) {
      animateBear(npc.parts, t + i * 1.7, false);
      return;
    }
    const pos = npc.parts.root.position;
    if (ws.moving) {
      const dx = ws.target.x - pos.x;
      const dz = ws.target.z - pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 0.15) {
        ws.moving = false;
        ws.wait = 2 + Math.random() * 5;
      } else {
        const sp = 1.6 * dt;
        pos.x += (dx / d) * sp;
        pos.z += (dz / d) * sp;
        npc.parts.root.rotation.y = Math.atan2(dx, dz);
      }
    } else {
      ws.wait -= dt;
      if (ws.wait <= 0) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * npc.wanderRadius;
        ws.target.set(ws.home.x + Math.cos(a) * r, 0, ws.home.z + Math.sin(a) * r);
        ws.moving = true;
      }
    }
    animateBear(npc.parts, t + i * 1.7, ws.moving);
  });

  // both pursuers caught up → the persuasion scene
  if (chaseRunning && chaseArrived.obstinate && chaseArrived.pliable && !dialogueOpen) {
    chaseRunning = false;
    playScript(CHASE_LINES, () => {
      quest.chaseDone = true;
      quest.pliableFollowing = true;
      obstinateReturning = true;
      cutscene = false;
      setObjective('✨ On to the shining light — Pliable comes too!');
    });
  }
}

// ---------------------------------------------------------------- loop

// ---------------------------------------------------------------- chapter loop
//
// Every chapter scene shares the same per-frame shape: read input, move the
// scene's own Christian, let the scene resolve collisions/triggers, animate,
// show a context prompt, frame the camera and render. Each chapter only
// describes what is *different* about it; `runChapter` does the rest.

type Actor = import('./bear').BearParts;

interface ChapterPrompt {
  text: string;
  /** Touch-button label; null hides the touch button. */
  button: string | null;
  /** Show the [E] key hint (desktop). Defaults to true. */
  key?: boolean;
}

interface ChapterAdapter {
  scene: () => THREE.Scene;
  actor: () => Actor | null;
  moveFactor: () => number;
  afterMove: (dt: number, moving: boolean) => void;
  update: (dt: number, t: number, moving: boolean) => void;
  /** Movement is paused while the choice box is open. */
  blockOnChoice?: boolean;
  invertInput?: () => boolean;
  prompt?: (choiceOpen: boolean) => ChapterPrompt | null;
  extra?: (choiceOpen: boolean) => void;
  frame?: (actor: Actor, dt: number) => CameraFrame;
  /** resolves a dialogue speaker's name to their rig (they turn to face Christian) */
  speaker?: (name: string) => BearParts | null;
}

const talk = (text: string, button = 'Talk'): ChapterPrompt => ({ text, button });

const CHAPTERS: Partial<Record<GameMode, ChapterAdapter>> = {
  slough: {
    scene: () => slough.scene,
    actor: () => sloughActors?.christian ?? null,
    moveFactor: () => slough.moveFactor(),
    afterMove: (_dt, moving) => slough.afterMove(moving),
    update: (dt, t, moving) => slough.update(dt, t, moving),
    prompt: () => (slough.nearHelp() ? talk('Talk to Help') : null),
  },
  morality: {
    scene: () => morality.scene,
    actor: () => moralityActors?.christian ?? null,
    moveFactor: () => morality.moveFactor(),
    afterMove: () => morality.afterMove(),
    update: (dt, t, moving) => morality.update(dt, t, moving),
    blockOnChoice: true,
    prompt: () => (morality.nearEvangelist() ? talk('Speak with Evangelist') : null),
  },
  wicket: {
    scene: () => wicket.scene,
    actor: () => wicketActors?.christian ?? null,
    moveFactor: () => wicket.moveFactor(),
    afterMove: () => wicket.afterMove(),
    update: (dt, t, moving) => wicket.update(dt, t, moving),
    frame: (a) => {
      const inHouse = wicket.phase === 'house' || wicket.phase === 'houseGreet' || wicket.phase === 'houseExit';
      return { focus: a.root.position, offset: inHouse ? HOUSE_CAM_OFFSET : camOffset };
    },
  },
  cross: {
    scene: () => cross.scene,
    actor: () => crossActors?.christian ?? null,
    moveFactor: () => cross.moveFactor(),
    afterMove: () => cross.afterMove(),
    update: (dt, t, moving) => cross.update(dt, t, moving),
    prompt: () => {
      if (cross.nearCross()) return talk('The Cross', 'Look');
      if (cross.nearTomb()) return talk('The empty tomb', 'Look');
      return null;
    },
  },
  highway: {
    scene: () => highway.scene,
    actor: () => highwayActors?.christian ?? null,
    moveFactor: () => highway.moveFactor(),
    afterMove: () => highway.afterMove(),
    update: (dt, t, moving) => highway.update(dt, t, moving),
  },
  hill: {
    scene: () => hill.scene,
    actor: () => hillActors?.christian ?? null,
    moveFactor: () => hill.moveFactor(),
    afterMove: () => hill.afterMove(),
    update: (dt, t, moving) => hill.update(dt, t, moving),
    prompt: () => (hill.nearScroll() ? talk('Pick up the scroll', 'Take') : null),
  },
  palace: {
    scene: () => palace.scene,
    actor: () => palaceActors?.christian ?? null,
    moveFactor: () => palace.moveFactor(),
    afterMove: () => palace.afterMove(),
    update: (dt, t, moving) => palace.update(dt, t, moving),
    speaker: (name) => palace.speakerRig(name),
    prompt: () => {
      if (palace.nearWatchful()) return talk('Talk to Watchful');
      for (let wi = 0; wi < 4; wi++) {
        if (palace.nearWoman(wi)) return talk(`Talk to ${palace.womanName(wi)}`);
      }
      return null;
    },
  },
  valley: {
    scene: () => valley.scene,
    actor: () => valleyActors?.christian ?? null,
    moveFactor: () => valley.moveFactor(),
    afterMove: () => valley.afterMove(),
    update: (dt, t, moving) => valley.update(dt, t, moving),
    prompt: () => (valley.canAttack() ? { text: 'Swing the sword!', button: null } : null),
    extra: () => swordBtn.classList.toggle('show', battleUI.classList.contains('show') && !dialogueOpen && !endingOpen),
    frame: (a, dt) => {
      const frameBattle = valley.battleCameraFocus(valleyBattleFocus);
      const mobileBattle = frameBattle && window.innerWidth <= 700 && camera.aspect < 0.8;
      // ease into the wide duel framing and back out after the victory
      valleyBattleZoom = THREE.MathUtils.lerp(
        valleyBattleZoom, mobileBattle ? 1.3 : 1, 1 - Math.exp(-dt * 2.8),
      );
      valleyCameraOffset.copy(camOffset).multiplyScalar(valleyBattleZoom);
      return { focus: frameBattle ? valleyBattleFocus : a.root.position, offset: valleyCameraOffset };
    },
  },
  shadow: {
    scene: () => shadow.scene,
    actor: () => shadowActors?.christian ?? null,
    moveFactor: () => shadow.moveFactor(),
    afterMove: (dt) => shadow.afterMove(dt),
    update: (dt, t, moving) => shadow.update(dt, t, moving),
    prompt: () => (shadow.nearFaithful() ? talk('Talk to Faithful') : null),
  },
  vanity: {
    scene: () => vanity.scene,
    actor: () => vanityActors?.christian ?? null,
    moveFactor: () => vanity.moveFactor(),
    afterMove: () => vanity.afterMove(),
    update: (dt, t, moving) => vanity.update(dt, t, moving),
    prompt: () => {
      if (vanity.nearFountain()) return talk('The fountain', 'Look');
      if (vanity.nearCitizen()) return talk('Talk to a citizen');
      return null;
    },
  },
  lucre: {
    scene: () => lucre.scene,
    actor: () => lucreActors?.christian ?? null,
    moveFactor: () => lucre.moveFactor(),
    afterMove: (dt) => lucre.afterMove(dt),
    update: (dt, t, moving) => lucre.update(dt, t, moving),
    blockOnChoice: true,
    prompt: (choiceOpen) => (lucre.nearPillar() && !choiceOpen ? talk('Look at the statue', 'Look') : null),
  },
  castle: {
    scene: () => castle.scene,
    actor: () => castleActors?.christian ?? null,
    moveFactor: () => castle.moveFactor(),
    afterMove: () => castle.afterMove(),
    update: (dt, t, moving) => castle.update(dt, t, moving),
    blockOnChoice: true,
    // the dungeon camera looks from the opposite side (~180° yaw), so invert
    // both axes to keep on-screen directions matching the pressed keys
    invertInput: () => castleInDungeon(),
    extra: (choiceOpen) => {
      // the drag-the-cross minigame, shown when near the Promise-key door
      const showKeyGame = castle.nearDoor() && !dialogueOpen && !endingOpen && !choiceOpen;
      if (showKeyGame && !keyGameOpen) resetKeyGame();
      keyGameOpen = showKeyGame;
      keyGameBox.classList.toggle('open', showKeyGame);
    },
    frame: (a) => ({ focus: a.root.position, offset: castleInDungeon() ? DUNGEON_CAM_OFFSET : camOffset }),
  },
  mountain: {
    scene: () => mountain.scene,
    actor: () => mountainActors?.christian ?? null,
    moveFactor: () => mountain.moveFactor(),
    afterMove: () => mountain.afterMove(),
    update: (dt, t, moving) => mountain.update(dt, t, moving),
    prompt: () => (mountain.nearShepherd() ? talk(`Talk to ${mountain.nearbyShepherdName()}`) : null),
  },
  enchanted: {
    scene: () => enchanted.scene,
    actor: () => enchantedActors?.christian ?? null,
    moveFactor: () => enchanted.moveFactor(),
    afterMove: () => enchanted.afterMove(),
    update: (dt, t, moving) => enchanted.update(dt, t, moving),
    prompt: () => (enchanted.canWake()
      ? talk('Encourage Hopeful, remember Scripture, or sing together', 'Stay Awake')
      : null),
  },
  beulah: {
    scene: () => beulah.scene,
    actor: () => beulahActors?.christian ?? null,
    moveFactor: () => beulah.moveFactor(),
    afterMove: () => beulah.afterMove(),
    update: (dt, t, moving) => beulah.update(dt, t, moving),
    prompt: () => {
      if (beulah.canPop()) {
        return {
          text: isTouch ? 'Tap the balloons of doubt to pop them' : 'Click the balloons of doubt to pop them',
          button: null,
          key: false,
        };
      }
      if (beulah.nearAngel()) return talk('Speak with the Shining One');
      return null;
    },
  },
  celestial: {
    scene: () => celestial.scene,
    actor: () => celestialActors?.christian ?? null,
    moveFactor: () => celestial.moveFactor(),
    afterMove: () => celestial.afterMove(),
    update: (dt, t, moving) => celestial.update(dt, t, moving),
    prompt: () => (celestial.nearSaint() ? talk(`Talk to ${celestial.nearbySaintName()}`) : null),
    // the camera pulls back and lifts as the pilgrims climb toward the City;
    // the epilogue follows Ignorance instead
    frame: () => {
      const focus = celestial.focus();
      const pull = 1 + THREE.MathUtils.clamp(focus.position.y / 10, 0, 1) * 0.55;
      celestialCameraOffset.copy(camOffset).multiplyScalar(pull);
      celestialCameraOffset.y += focus.position.y * 0.15;
      return { focus: focus.position, offset: celestialCameraOffset, lookHeight: 1.6, follow: 3 };
    },
  },
};

const celestialCameraOffset = new THREE.Vector3();

function castleInDungeon(): boolean {
  return castle.phase === 'dungeon' || castle.phase === 'key' || castle.phase === 'exit-door';
}

/** Keyboard + virtual joystick → a movement vector in camera-space XZ. */
function readMoveInput(out: { x: number; z: number }): void {
  let mx = 0;
  let mz = 0;
  if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
  if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
  out.x = mx + joy.x;
  out.z = mz + joy.y;
}

function applyPrompt(p: ChapterPrompt | null): void {
  if (!p) {
    ui.prompt.style.display = 'none';
    if (isTouch && !dialogueOpen) ui.talkBtn.style.display = 'none';
    return;
  }
  ui.prompt.style.display = 'block';
  ui.promptKey.style.display = (p.key === false || isTouch) ? 'none' : 'inline-block';
  ui.promptWho.textContent = p.text;
  if (isTouch) {
    if (p.button) {
      ui.talkBtn.textContent = p.button;
      ui.talkBtn.style.display = 'block';
    } else if (!dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }
  }
}

const moveInput = { x: 0, z: 0 };
const chapterFrame: CameraFrame = { focus: new THREE.Vector3(), offset: camOffset };

// When a conversation opens, the nearest upright character turns (eased) to
// face Christian — chapters script their own talkers, so this is found
// spatially rather than per NPC.
let talkPartner: BearParts | null = null;
let talkWasOpen = false;
function faceTalkPartner(sc: THREE.Scene, actor: Actor, dt: number, a: ChapterAdapter): void {
  // a chapter that knows its cast turns whoever is speaking this line
  const named = dialogueOpen && a.speaker ? a.speaker(dialogueLines[dialogueIndex]?.speaker ?? '') : null;
  if (named) {
    talkWasOpen = true;
    talkPartner = named;
  } else if (dialogueOpen && !talkWasOpen) {
    talkPartner = null;
    let best = 3.4;
    const p = actor.root.position;
    for (const b of liveBears) {
      const r = b.root;
      if (r === actor.root || !r.visible || Math.abs(r.rotation.x) + Math.abs(r.rotation.z) > 0.05) continue;
      if (r.parent !== sc) continue;
      const d = Math.hypot(r.position.x - p.x, r.position.z - p.z);
      if (d < best) { best = d; talkPartner = b; }
    }
  }
  talkWasOpen = dialogueOpen;
  if (!dialogueOpen || !talkPartner) return;
  const r = talkPartner.root;
  const yaw = Math.atan2(actor.root.position.x - r.position.x, actor.root.position.z - r.position.z);
  r.rotation.y = lerpAngle(r.rotation.y, yaw, Math.min(1, 7 * dt));
}

function runChapter(a: ChapterAdapter, dt: number, t: number): boolean {
  const actor = a.actor();
  if (!actor) return false;
  readMoveInput(moveInput);
  let mx = moveInput.x;
  let mz = moveInput.z;
  if (a.invertInput?.()) { mx = -mx; mz = -mz; }
  const len = Math.hypot(mx, mz);
  const factor = a.moveFactor();
  const choiceOpen = choiceBox.classList.contains('open');
  const moving = len > 0.15 && !dialogueOpen && !endingOpen
    && !(a.blockOnChoice && choiceOpen) && factor > 0;
  if (moving) {
    mx /= Math.max(len, 1);
    mz /= Math.max(len, 1);
    actor.root.position.x += mx * SPEED * factor * dt;
    actor.root.position.z += mz * SPEED * factor * dt;
    actor.root.rotation.y = lerpAngle(actor.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
  }
  a.afterMove(dt, moving);
  a.update(dt, t, moving);
  faceTalkPartner(a.scene(), actor, dt, a);

  const idle = !dialogueOpen && !endingOpen;
  applyPrompt(idle && a.prompt ? a.prompt(choiceOpen) : null);
  a.extra?.(choiceOpen);

  let frame: CameraFrame;
  if (a.frame) frame = a.frame(actor, dt);
  else {
    chapterFrame.focus = actor.root.position;
    chapterFrame.offset = camOffset;
    chapterFrame.lookHeight = 1.4;
    chapterFrame.follow = 4;
    frame = chapterFrame;
  }
  cameraRig.update(dt, frame, gameSettings.reducedMotion);
  const sc = a.scene();
  atmosphere.update(sc, camera, cameraRig.target);
  renderer.render(sc, camera);
  return true;
}


const clock = new THREE.Clock();

function tick(): void {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  windUniforms.uWindTime.value = gameSettings.reducedMotion ? 0 : t;
  // phones: the joystick and Talk button step aside while a line is shown
  // (tapping the dialogue box advances it), so they never cover the text
  if (document.body.classList.contains('dialogue-open') !== dialogueOpen) {
    document.body.classList.toggle('dialogue-open', dialogueOpen);
  }

  if (!started) {
    // Three repeating crossings: Pliable, then Faithful, then Hopeful. Each
    // eighteen-second walk is followed by a short empty-road breath so the
    // preceding companion is unmistakably off-screen before the next appears.
    const titleLegLength = 20;
    const titleLeg = Math.floor((t % (titleLegLength * titleCompanions.length)) / titleLegLength);
    const titleLegTime = t % titleLegLength;
    const titleWalking = !gameSettings.reducedMotion && titleLegTime < 18;
    const journeyP = Math.min(titleLegTime / 18, 1);
    const titleX = -14.5 + journeyP * 34;
    titleChristian.root.visible = gameSettings.reducedMotion || titleWalking;
    titleChristian.root.position.set(gameSettings.reducedMotion ? -1.2 : titleX, 0, 0);
    titleChristian.root.rotation.y = Math.PI / 2;
    animateBear(titleChristian, t * 0.62, titleWalking);
    for (let i = 0; i < titleCompanions.length; i++) {
      const companion = titleCompanions[i];
      companion.root.visible = titleWalking && i === titleLeg;
      if (i === titleLeg) {
        companion.root.position.set(titleX - 2.37, 0, 0.55);
        companion.root.rotation.y = Math.PI / 2;
        animateBear(companion, t * 0.62 + i * 0.8, titleWalking);
      }
    }
    titleJourneyRenderer.render(titleJourneyScene, titleJourneyCamera);
    titleFaceHead.rotation.z = Math.sin(t * 0.7) * 0.025;
    titleFaceRenderer.render(titleFaceScene, titleFaceCamera);
  }

  if (mode === 'map') {
    // ---- world map mode ----
    let ax = 0;
    let az = 0;
    if (keys.has('KeyD') || keys.has('ArrowRight')) ax += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) ax -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) az += 1; // south = the byway at the crossroad
    if (keys.has('KeyW') || keys.has('ArrowUp')) az -= 1;
    ax += joy.x;
    az += joy.y;
    // hold still while the replay / wander choice is open
    if (choiceBox.classList.contains('open')) { ax = 0; az = 0; }
    worldMap.update(dt, t, THREE.MathUtils.clamp(ax, -1, 1), THREE.MathUtils.clamp(az, -1, 1));

    // the barred east road just shunted Christian onto the smooth byway
    if (worldMap.justDiverted) {
      worldMap.justDiverted = false;
      setObjective('🎩 The east road is barred — a smooth byway curves aside toward Morality…');
    }

    const spot = worldMap.spot();

    // reaching the middle of an island whose chapter is still ahead starts
    // that chapter at once — no keypress needed (revisits keep the prompt)
    if (spot === 'slough' && !quest.sloughComplete) { enterSlough(false); return; }
    if (spot === 'morality' && !quest.moralityDone) { enterMorality(false); return; }
    if (spot === 'beyond' && !quest.wicketDone) { enterWicket(false); return; }
    if (spot === 'cross' && !quest.crossDone) { enterCross(false); return; }
    if (spot === 'highway' && !quest.highwayDone) { enterHighway(false); return; }
    if (spot === 'hill' && !quest.hillDone) { enterHill(false); return; }
    if (spot === 'palace' && !quest.palaceDone) { enterPalace(false); return; }
    if (spot === 'valley' && !quest.valleyDone) { enterValley(false); return; }
    if (spot === 'shadow' && !quest.shadowDone) { enterShadow(false); return; }
    if (spot === 'vanity' && !quest.vanityDone) { enterVanity(false); return; }
    if (spot === 'lucre' && !quest.lucreDone) { enterLucre(false); return; }
    if (spot === 'castle' && !quest.castleDone) { enterCastle(false); return; }
    if (spot === 'mountain' && !quest.mountainDone) { enterMountain(false); return; }
    if (spot === 'enchanted' && !quest.enchantedDone) { enterEnchanted(false); return; }
    if (spot === 'beulah' && !quest.beulahDone) { enterBeulah(false); return; }
    if (spot === 'celestial' && !quest.celestialDone) { enterCelestial(false); return; }

    ui.prompt.style.display = spot === 'road' || choiceBox.classList.contains('open') ? 'none' : 'block';
    ui.promptKey.style.display = 'none';
    if (isTouch) ui.talkBtn.style.display = 'none';
    if (spot === 'city') {
      ui.promptWho.textContent = '🏘 Visit the City of Destruction';
    } else if (spot === 'slough') {
      ui.promptWho.textContent = quest.sloughComplete
        ? '🌊 Revisit the Slough of Despond'
        : 'Enter the Slough of Despond';
    } else if (spot === 'morality') {
      ui.promptWho.textContent = quest.moralityDone
        ? '⛰ Revisit the foot of Mount Sinai'
        : 'Enter the pleasant village of Morality';
    } else if (spot === 'fork') {
      ui.promptWho.textContent = quest.moralityDone
        ? '🪧 A crossroad — east: the true way · press S for the byway'
        : '🪧 A crossroad — the east road is barred…';
    } else if (spot === 'beyond') {
      ui.promptWho.textContent = quest.wicketDone
        ? '🚪 Revisit the Wicket Gate'
        : '🚪 Knock at the Wicket Gate';
    } else if (spot === 'cross') {
      ui.promptWho.textContent = quest.crossDone
        ? '✝ Revisit the hill of the Cross'
        : '✝ Climb the hill to the Cross';
    } else if (spot === 'highway') {
      ui.promptWho.textContent = quest.highwayDone
        ? '🌙 Walk the King\'s Highway again'
        : '🌙 Set out along the King\'s Highway';
    } else if (spot === 'hill') {
      ui.promptWho.textContent = quest.hillDone
        ? '⛰ Climb the Hill Difficulty again'
        : '⛰ Face the Hill Difficulty';
    } else if (spot === 'palace') {
      ui.promptWho.textContent = quest.palaceDone
        ? '🏰 Call again at Palace Beautiful'
        : '🏰 Approach Palace Beautiful';
    } else if (spot === 'valley') {
      ui.promptWho.textContent = quest.valleyDone
        ? '🌄 Revisit the Valley of Humiliation'
        : '🌄 Descend into the Valley of Humiliation';
    } else if (spot === 'shadow') {
      ui.promptWho.textContent = quest.shadowDone
        ? '🌑 Walk the Shadow valley again'
        : '🌑 Enter the Valley of the Shadow of Death';
    } else if (spot === 'vanity') {
      ui.promptWho.textContent = quest.vanityDone
        ? '🎪 Pass through Vanity Fair again'
        : '🎪 Enter the city of Vanity Fair';
    } else if (spot === 'lucre') {
      ui.promptWho.textContent = quest.lucreDone
        ? '🧂 Cross the Plain of Ease again'
        : '🧂 Cross the Plain of Ease, past the Hill Lucre';
    } else if (spot === 'castle') {
      ui.promptWho.textContent = quest.castleDone
        ? '🏰 Pass by Doubting Castle again'
        : '🏰 The King\'s Highway grows rocky — Doubting Castle ahead';
    } else if (spot === 'mountain') {
      ui.promptWho.textContent = quest.mountainDone
        ? '⛰ Rest again in the Delectable Mountains'
        : '⛰ Climb into the bright Delectable Mountains';
    } else if (spot === 'enchanted') {
      ui.promptWho.textContent = quest.enchantedDone
        ? '🌾 Walk the Enchanted Ground again'
        : '🌾 Enter the dreamy Enchanted Ground';
    } else if (spot === 'beulah') {
      ui.promptWho.textContent = quest.beulahDone
        ? '✨ Return to Beulah Land'
        : '✨ Enter Beulah Land — the River and the Celestial City';
    } else if (spot === 'celestial') {
      ui.promptWho.textContent = quest.celestialDone
        ? '👑 Return to the Celestial City'
        : '👑 Climb the shining hill to the Celestial City';
    }
    ui.promptWho.textContent = (ui.promptWho.textContent ?? '').replace(LEADING_EMOJI, '');
    if (spot !== 'road' && spot !== 'fork') {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      if (isTouch) {
        ui.talkBtn.textContent = 'Enter';
        ui.talkBtn.style.display = 'block';
      }
    }

    renderer.render(worldMap.scene, worldMap.camera);
    return;
  }

  const chapter = CHAPTERS[mode];
  if (chapter && runChapter(chapter, dt, t)) return;

  // ---- village mode ----
  if (started) {
    updatePlayer(dt, t);
    updateNPCs(dt, t);
    updateBunHandoff(dt);

    // interact prompt
    nearestNPC = dialogueOpen ? null : findNearestNPC();
    nearestThing = (dialogueOpen || nearestNPC) ? null : findNearestThing();
    if ((nearestNPC || nearestThing) && !endingOpen && !cutscene) {
      ui.prompt.style.display = 'block';
      ui.promptWho.textContent = nearestNPC
        ? `Talk to ${nearestNPC.name}`
        : `Look at ${nearestThing!.name}`;
      if (isTouch) {
        ui.talkBtn.textContent = nearestNPC ? 'Talk' : 'Look';
        ui.talkBtn.style.display = 'block';
      }
    } else {
      ui.prompt.style.display = 'none';
      if (!dialogueOpen) ui.talkBtn.style.display = 'none';
    }
  }

  world.update(t);
  updateDust(dt);

  // shining light pulse
  if (world.lightBeam.visible) {
    const s = 1 + Math.sin(t * 2.4) * 0.12;
    world.lightBeam.scale.set(s, 1, s);
  }

  // camera follows with a soft lag
  chapterFrame.focus = christian.root.position;
  chapterFrame.offset = camOffset;
  chapterFrame.lookHeight = 1.4;
  chapterFrame.follow = 4;
  cameraRig.update(dt, chapterFrame, gameSettings.reducedMotion);
  atmosphere.update(scene, camera, cameraRig.target);

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  positionMobileHudControls();
  camera.aspect = window.innerWidth / window.innerHeight;
  fitCameraFov();
  worldMap.resize(window.innerWidth / window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
  resizeTitleJourney();
});

tick();

// The title HTML can appear before this module has finished evaluating on a
// slower phone. Reveal the real Start button only after its listener is bound
// and the title scene has completed its first paint.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    ui.startBtn.disabled = false;
    ui.startBtn.setAttribute('aria-disabled', 'false');
    if (storedChapterSave) {
      const completed = storedChapterSave.completedChapter;
      ui.startBtn.textContent = 'Continue the Journey';
      ui.saveSummary.textContent =
        `Saved after Chapter ${completed} · ${CHAPTER_NAMES[completed]}`;
      ui.saveSummary.style.display = 'block';
      ui.newJourneyBtn.style.display = 'block';
    } else {
      ui.startBtn.textContent = 'Begin the Journey';
    }
    ui.titleScreen.classList.add('game-ready');
  });
});

// small debug handle for testing (harmless in production)
(window as any).__game = {
  christian, npcs, quest, world, openDialogue, advanceDialogue, camTarget,
  worldMap, slough, enterSlough, morality, enterMorality,
  wicket, enterWicket, cross, enterCross, highway, enterHighway, hill, enterHill,
  palace, enterPalace, valley, enterValley, shadow, enterShadow,
  vanity, enterVanity, lucre, enterLucre, playScript, goToMap,
  castle, enterCastle, mountain, enterMountain, enchanted, enterEnchanted, beulah, enterBeulah, celestial, enterCelestial, renderer, camera, camOffset, DUNGEON_CAM_OFFSET, cameraRig,
  get mode() { return mode; },
  get castleActors() { return castleActors; },
  get keys() { return keys; },
  renderCastleNow() {
    if (!castleActors) return;
    const cc = castleActors.christian;
    const inDungeon = castle.phase === 'dungeon' || castle.phase === 'key' || castle.phase === 'exit-door';
    camTarget.copy(cc.root.position);
    camera.position.copy(camTarget).add(inDungeon ? DUNGEON_CAM_OFFSET : camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(castle.scene, camera);
  },
};
