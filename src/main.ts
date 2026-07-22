import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear } from './bear';
import { buildWorld, WALL, Interactable } from './world';
import { createNPCs, NPC, QuestState, DialogueLine } from './npcs';
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

// ---------------------------------------------------------------- setup

// dev only: a hot update must never stack a second game instance (two tick
// loops sharing one dialogue DOM = ghost dialogue) — always hard-reload.
(import.meta as any).hot?.accept(() => window.location.reload());

const app = document.getElementById('app')!;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(PALETTE.sky);
scene.fog = new THREE.Fog(PALETTE.fog, 55, 130);

const camera = new THREE.PerspectiveCamera(
  50, window.innerWidth / window.innerHeight, 0.1, 300,
);

// soft pastel lighting
scene.add(new THREE.HemisphereLight(0xdff0ff, 0xc9e8c0, 0.9));
const sun = new THREE.DirectionalLight(PALETTE.sun, 1.6);
sun.position.set(-30, 45, 25);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -60;
sun.shadow.camera.right = 60;
sun.shadow.camera.top = 60;
sun.shadow.camera.bottom = -60;
sun.shadow.camera.far = 150;
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
};

const music = new Music();
const worldMap = new WorldMap(window.innerWidth / window.innerHeight);
let mode:
  | 'village' | 'map' | 'slough' | 'morality' | 'wicket' | 'cross'
  | 'highway' | 'hill' | 'palace' | 'valley' | 'shadow' | 'vanity' | 'lucre' | 'castle'
  | 'mountain' = 'village';

// ---------------------------------------------------------------- UI refs

const ui = {
  objective: document.getElementById('objective')!,
  prompt: document.getElementById('prompt')!,
  promptWho: document.querySelector('#prompt .who')! as HTMLElement,
  promptKey: document.querySelector('#prompt .key')! as HTMLElement,
  dialogue: document.getElementById('dialogue')!,
  dialogueName: document.querySelector('#dialogue .name')! as HTMLElement,
  dialogueText: document.querySelector('#dialogue .text')! as HTMLElement,
  musicBtn: document.getElementById('music-btn')! as HTMLButtonElement,
  talkBtn: document.getElementById('talk-btn')! as HTMLButtonElement,
  joystick: document.getElementById('joystick')!,
  stick: document.querySelector('#joystick .stick')! as HTMLElement,
  titleScreen: document.getElementById('title-screen')!,
  startBtn: document.getElementById('start-btn')! as HTMLButtonElement,
  ending: document.getElementById('ending')!,
  restartBtn: document.getElementById('restart-btn')! as HTMLButtonElement,
  debugBtn: document.getElementById('debug-btn')! as HTMLButtonElement,
  debugPanel: document.getElementById('debug-panel')! as HTMLElement,
  fade: document.getElementById('fade')! as HTMLElement,
};

// a brief screen fade to mask an instant scene cut (e.g. stepping through a
// doorway into an interior built far away on the same axis)
function fadeTransition(mid: () => void, holdMs = 420): void {
  ui.fade.classList.add('show');
  window.setTimeout(() => {
    mid();
    requestAnimationFrame(() => ui.fade.classList.remove('show'));
  }, holdMs);
}

const isTouch = window.matchMedia('(pointer: coarse)').matches;
if (isTouch) {
  document.body.classList.add('touch');
  ui.promptKey.style.display = 'none';
}

let started = false;
ui.startBtn.addEventListener('click', () => {
  started = true;
  music.start();
  ui.titleScreen.classList.add('hidden');
  setTimeout(() => (ui.titleScreen.style.display = 'none'), 900);
});

ui.musicBtn.addEventListener('click', () => {
  music.start();
  ui.musicBtn.textContent = music.toggle() ? '🎵' : '🔇';
});

ui.restartBtn.addEventListener('click', () => window.location.reload());

// ---------- parametrized chapter-complete screen ----------
let endingAction: (() => void) | null = null;
let endingOpen = false;
let cutscene = false; // freezes the player during scripted scenes (gate chase)

function showEnding(title: string, sub: string, body: string, action: () => void): void {
  endingOpen = true;
  document.getElementById('ending-title')!.textContent = title;
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
  music.setStyle('map');
  ui.promptKey.style.display = 'none';
  setObjective(quest.mountainDone
    ? '🗺 The Delectable Mountains are behind you — the Celestial City draws near!'
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
  choiceA.textContent = a;
  choiceB.textContent = b;
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
  if (apoName) apoName.textContent = '🐕 Hopeful';
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

function enterSlough(revisit: boolean): void {
  mode = 'slough';
  music.setStyle('slough');
  ui.prompt.style.display = 'none';
  ui.talkBtn.style.display = 'none';
  sloughActors = slough.enter(!revisit && quest.pliableFollowing && !quest.pliableLeft, revisit);
  camTarget.copy(sloughActors.christian.root.position);
}

// revisit the City of Destruction from the world map
function enterVillage(): void {
  mode = 'village';
  music.setStyle('village');
  christian.root.position.set(WALL.east - 5, 0, 0);
  christian.root.rotation.y = -Math.PI / 2;
  camTarget.copy(christian.root.position);
  ui.prompt.style.display = 'none';
  ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
  if (isTouch) ui.talkBtn.style.display = 'none';
  setObjective('🏘 Home for a visit — the shining light in the east leads back to the road');
}

function setObjective(text: string): void {
  ui.objective.textContent = text;
}

// ---------------------------------------------------------------- dialogue

let dialogueLines: DialogueLine[] = [];
let dialogueIndex = 0;
let dialogueOpen = false;
let dialogueNPC: NPC | null = null;
let scriptDone: (() => void) | null = null;

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
  showLine();
  // NPC turns to face Christian
  const dx = christian.root.position.x - npc.parts.root.position.x;
  const dz = christian.root.position.z - npc.parts.root.position.z;
  npc.parts.root.rotation.y = Math.atan2(dx, dz);
}

function showLine(): void {
  const line = dialogueLines[dialogueIndex];
  ui.dialogueName.textContent = line.speaker;
  ui.dialogueText.textContent = line.text;
  // Christian's speech gets a warm brown bubble; narration (empty speaker) is neutral
  ui.dialogue.classList.toggle('christian', line.speaker === 'Christian');
  ui.dialogue.classList.toggle('narration', line.speaker === '');
}

function advanceDialogue(): void {
  music.blip();
  dialogueIndex++;
  if (dialogueIndex < dialogueLines.length) {
    showLine();
    return;
  }
  // finished
  dialogueOpen = false;
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
  }
});

function tryEnterFromMap(): void {
  const spot = worldMap.spot();
  if (spot === 'slough') enterSlough(quest.sloughComplete);
  else if (spot === 'city') enterVillage();
  else if (spot === 'morality') enterMorality(quest.moralityDone);
  else if (spot === 'beyond') enterWicket(quest.wicketDone);
  else if (spot === 'cross') enterCross(quest.crossDone);
  else if (spot === 'highway') enterHighway(quest.highwayDone);
  else if (spot === 'hill') enterHill(quest.hillDone);
  else if (spot === 'palace') enterPalace(quest.palaceDone);
  else if (spot === 'valley') enterValley(quest.valleyDone);
  else if (spot === 'shadow') enterShadow(quest.shadowDone);
  else if (spot === 'vanity') enterVanity(quest.vanityDone);
  else if (spot === 'lucre') enterLucre(quest.lucreDone);
  else if (spot === 'castle') enterCastle(quest.castleDone);
  else if (spot === 'mountain') enterMountain(quest.mountainDone);
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
  const ORDER = ['village', 'slough', 'morality', 'wicket-approach', 'cross', 'highway', 'hill', 'palace', 'valley', 'shadow', 'vanity', 'lucre', 'castle', 'mountain'];
  const rank = ORDER.indexOf(
    jump === 'wicket-highway' || jump === 'interpreter' ? 'wicket-approach' : jump === 'map' ? 'village' : jump,
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
  else if (jump === 'map') { worldMap.start(mapParty()); worldMap.road = 'main'; goToMap(); }
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
const camOffset = new THREE.Vector3(0, 13, 13);
const HOUSE_CAM_OFFSET = new THREE.Vector3(0, 7.5, 7.5); // closer view inside the Interpreter's House
const DUNGEON_CAM_OFFSET = new THREE.Vector3(0, 6, -11); // camera looks from outside north wall inward
const camTarget = new THREE.Vector3();
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
  { speaker: 'Christian', text: 'I cannot, neighbours. This city will not stand — I go to seek a country that cannot crumble. You have seen the light yonder; come with me!' },
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

const clock = new THREE.Clock();

function tick(): void {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

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

    ui.prompt.style.display = spot === 'road' ? 'none' : 'block';
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
    }
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

  if (mode === 'slough' && sloughActors) {
    // ---- Slough of Despond mode ----
    const sc = sloughActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = slough.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      sc.root.position.x += mx * SPEED * factor * dt;
      sc.root.position.z += mz * SPEED * factor * dt;
      sc.root.rotation.y = lerpAngle(sc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    slough.afterMove(moving);
    slough.update(dt, t, moving);

    // talk prompt when standing near Help after the rescue
    const canTalkHelp = slough.nearHelp() && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canTalkHelp ? 'block' : 'none';
    if (canTalkHelp) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = 'Talk to Help';
      if (isTouch) {
        ui.talkBtn.textContent = 'Talk';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(sc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(slough.scene, camera);
    return;
  }

  if (mode === 'morality' && moralityActors) {
    // ---- Worldly Wiseman & Mount Sinai mode ----
    const mc = moralityActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = morality.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      mc.root.position.x += mx * SPEED * factor * dt;
      mc.root.position.z += mz * SPEED * factor * dt;
      mc.root.rotation.y = lerpAngle(mc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    morality.afterMove();
    morality.update(dt, t, moving);

    camTarget.lerp(mc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(morality.scene, camera);
    return;
  }

  if (mode === 'wicket' && wicketActors) {
    // ---- Wicket Gate mode ----
    const wc = wicketActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = wicket.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      wc.root.position.x += mx * SPEED * factor * dt;
      wc.root.position.z += mz * SPEED * factor * dt;
      wc.root.rotation.y = lerpAngle(wc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    wicket.afterMove();
    wicket.update(dt, t, moving);

    const inHouse = wicket.phase === 'house' || wicket.phase === 'houseGreet' || wicket.phase === 'houseExit';
    camTarget.lerp(wc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(inHouse ? HOUSE_CAM_OFFSET : camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(wicket.scene, camera);
    return;
  }

  if (mode === 'cross' && crossActors) {
    // ---- the Cross mode ----
    const cc = crossActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = cross.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      cc.root.position.x += mx * SPEED * factor * dt;
      cc.root.position.z += mz * SPEED * factor * dt;
      cc.root.rotation.y = lerpAngle(cc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    cross.afterMove();
    cross.update(dt, t, moving);

    const canTalkCross = (cross.nearCross() || cross.nearTomb()) && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canTalkCross ? 'block' : 'none';
    if (canTalkCross) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = cross.nearCross() ? 'The Cross' : 'The empty tomb';
      if (isTouch) {
        ui.talkBtn.textContent = 'Look';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(cc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(cross.scene, camera);
    return;
  }

  if (mode === 'highway' && highwayActors) {
    // ---- the King's Highway mode ----
    const hc = highwayActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = highway.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      hc.root.position.x += mx * SPEED * factor * dt;
      hc.root.position.z += mz * SPEED * factor * dt;
      hc.root.rotation.y = lerpAngle(hc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    highway.afterMove();
    highway.update(dt, t, moving);

    camTarget.lerp(hc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(highway.scene, camera);
    return;
  }

  if (mode === 'hill' && hillActors) {
    // ---- the Hill of Difficulty mode ----
    const lc = hillActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = hill.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      lc.root.position.x += mx * SPEED * factor * dt;
      lc.root.position.z += mz * SPEED * factor * dt;
      lc.root.rotation.y = lerpAngle(lc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    hill.afterMove();
    hill.update(dt, t, moving);

    // prompt when the lost scroll is within reach
    const canPick = hill.nearScroll() && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canPick ? 'block' : 'none';
    if (canPick) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = 'Pick up the scroll';
      if (isTouch) {
        ui.talkBtn.textContent = 'Take';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(lc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(hill.scene, camera);
    return;
  }

  if (mode === 'palace' && palaceActors) {
    // ---- Palace Beautiful mode ----
    const pc = palaceActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = palace.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      pc.root.position.x += mx * SPEED * factor * dt;
      pc.root.position.z += mz * SPEED * factor * dt;
      pc.root.rotation.y = lerpAngle(pc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    palace.afterMove();
    palace.update(dt, t, moving);

    let palaceTalkTarget = '';
    if (palace.nearWatchful()) palaceTalkTarget = 'Talk to Watchful';
    else {
      for (let wi = 0; wi < 4; wi++) {
        if (palace.nearWoman(wi)) { palaceTalkTarget = 'Talk to the Keeper'; break; }
      }
    }
    const canTalkPalace = !!palaceTalkTarget && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canTalkPalace ? 'block' : 'none';
    if (canTalkPalace) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = palaceTalkTarget;
      if (isTouch) {
        ui.talkBtn.textContent = 'Talk';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(pc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(palace.scene, camera);
    return;
  }

  if (mode === 'valley' && valleyActors) {
    // ---- Valley of Humiliation mode ----
    const vc = valleyActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = valley.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      vc.root.position.x += mx * SPEED * factor * dt;
      vc.root.position.z += mz * SPEED * factor * dt;
      vc.root.rotation.y = lerpAngle(vc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    valley.afterMove();
    valley.update(dt, t, moving);

    // battle prompt: strike when it's the player's turn
    const canStrike = valley.canAttack() && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canStrike ? 'block' : 'none';
    if (canStrike) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = 'Swing the sword!';
      if (isTouch) {
        ui.talkBtn.textContent = '⚔';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(vc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(valley.scene, camera);
    return;
  }

  if (mode === 'shadow' && shadowActors) {
    // ---- Valley of the Shadow of Death mode ----
    const shc = shadowActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = shadow.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      shc.root.position.x += mx * SPEED * factor * dt;
      shc.root.position.z += mz * SPEED * factor * dt;
      shc.root.rotation.y = lerpAngle(shc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    shadow.afterMove(dt);
    shadow.update(dt, t, moving);

    const canTalkShadow = shadow.nearFaithful() && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canTalkShadow ? 'block' : 'none';
    if (canTalkShadow) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = 'Talk to Faithful';
      if (isTouch) {
        ui.talkBtn.textContent = 'Talk';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(shc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(shadow.scene, camera);
    return;
  }

  if (mode === 'vanity' && vanityActors) {
    // ---- Vanity Fair mode ----
    const vfc = vanityActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = vanity.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      vfc.root.position.x += mx * SPEED * factor * dt;
      vfc.root.position.z += mz * SPEED * factor * dt;
      vfc.root.rotation.y = lerpAngle(vfc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    vanity.afterMove();
    vanity.update(dt, t, moving);

    let vanityTalkTarget = '';
    if (vanity.nearFountain()) vanityTalkTarget = 'The fountain';
    else if (vanity.nearCitizen()) vanityTalkTarget = 'Talk to a citizen';
    const canTalkVanity = !!vanityTalkTarget && !dialogueOpen && !endingOpen;
    ui.prompt.style.display = canTalkVanity ? 'block' : 'none';
    if (canTalkVanity) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = vanityTalkTarget;
      if (isTouch) {
        ui.talkBtn.textContent = vanity.nearFountain() ? 'Look' : 'Talk';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(vfc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(vanity.scene, camera);
    return;
  }

  if (mode === 'lucre' && lucreActors) {
    // ---- Hill Lucre mode ----
    const luc = lucreActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = lucre.moveFactor();
    const choiceOpen = choiceBox.classList.contains('open');
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && !choiceOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      luc.root.position.x += mx * SPEED * factor * dt;
      luc.root.position.z += mz * SPEED * factor * dt;
      luc.root.rotation.y = lerpAngle(luc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    lucre.afterMove(dt);
    lucre.update(dt, t, moving);

    // prompt at the pillar of salt
    const canTouch = lucre.nearPillar() && !dialogueOpen && !endingOpen && !choiceOpen;
    ui.prompt.style.display = canTouch ? 'block' : 'none';
    if (canTouch) {
      ui.promptKey.style.display = isTouch ? 'none' : 'inline-block';
      ui.promptWho.textContent = 'Look at the statue';
      if (isTouch) {
        ui.talkBtn.textContent = 'Look';
        ui.talkBtn.style.display = 'block';
      }
    } else if (isTouch && !dialogueOpen) {
      ui.talkBtn.style.display = 'none';
    }

    camTarget.lerp(luc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(lucre.scene, camera);
    return;
  }

  if (mode === 'castle' && castleActors) {
    // ---- Doubting Castle mode ----
    const cc = castleActors.christian;
    const inDungeon = castle.phase === 'dungeon' || castle.phase === 'key' || castle.phase === 'exit-door';
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    // the dungeon camera looks from the opposite side (see DUNGEON_CAM_OFFSET),
    // a ~180° yaw from the usual view — invert both axes so on-screen left/right
    // and forward/back still match the pressed keys
    if (inDungeon) {
      mx = -mx;
      mz = -mz;
    }
    const len = Math.hypot(mx, mz);
    const factor = castle.moveFactor();
    const choiceOpen = choiceBox.classList.contains('open');
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && !choiceOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      cc.root.position.x += mx * SPEED * factor * dt;
      cc.root.position.z += mz * SPEED * factor * dt;
      cc.root.rotation.y = lerpAngle(cc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    castle.afterMove();
    castle.update(dt, t, moving);

    // the drag-the-cross minigame, shown when near the Promise-key door
    const showKeyGame = castle.nearDoor() && !dialogueOpen && !endingOpen && !choiceOpen;
    if (showKeyGame && !keyGameOpen) resetKeyGame();
    keyGameOpen = showKeyGame;
    keyGameBox.classList.toggle('open', showKeyGame);

    camTarget.lerp(cc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(inDungeon ? DUNGEON_CAM_OFFSET : camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(castle.scene, camera);
    return;
  }

  if (mode === 'mountain' && mountainActors) {
    // ---- Delectable Mountains mode (outdoor, standard camera) ----
    const mc = mountainActors.christian;
    let mx = 0;
    let mz = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    mx += joy.x;
    mz += joy.y;
    const len = Math.hypot(mx, mz);
    const factor = mountain.moveFactor();
    const moving = len > 0.15 && !dialogueOpen && !endingOpen && factor > 0;
    if (moving) {
      mx /= Math.max(len, 1);
      mz /= Math.max(len, 1);
      mc.root.position.x += mx * SPEED * factor * dt;
      mc.root.position.z += mz * SPEED * factor * dt;
      mc.root.rotation.y = lerpAngle(mc.root.rotation.y, Math.atan2(mx, mz), 12 * dt);
    }
    mountain.afterMove();
    mountain.update(dt, t, moving);

    camTarget.lerp(mc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(mountain.scene, camera);
    return;
  }

  // ---- village mode ----
  if (started) {
    updatePlayer(dt, t);
    updateNPCs(dt, t);

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
  camTarget.lerp(christian.root.position, Math.min(4 * dt, 1));
  camera.position.copy(camTarget).add(camOffset);
  camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  worldMap.resize(window.innerWidth / window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});

tick();

// small debug handle for testing (harmless in production)
(window as any).__game = {
  christian, npcs, quest, world, openDialogue, advanceDialogue, camTarget,
  worldMap, slough, enterSlough, morality, enterMorality,
  wicket, enterWicket, cross, enterCross, highway, enterHighway, hill, enterHill,
  palace, enterPalace, valley, enterValley, shadow, enterShadow,
  vanity, enterVanity, lucre, enterLucre, playScript, goToMap,
  castle, enterCastle, mountain, enterMountain, renderer, camera, camOffset, DUNGEON_CAM_OFFSET,
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
