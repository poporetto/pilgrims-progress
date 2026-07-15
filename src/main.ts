import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear } from './bear';
import { buildWorld, WALL } from './world';
import { createNPCs, NPC, QuestState, DialogueLine } from './npcs';
import { Music } from './music';
import { WorldMap } from './worldmap';
import { SloughScene } from './slough';

// ---------------------------------------------------------------- setup

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
});
christian.root.position.set(-6, 0, -4);
scene.add(christian.root);

const quest: QuestState = {
  talkedToEvangelist: false,
  talkedToFamily: false,
  chaseDone: false,
  pliableFollowing: false,
  pliableLeft: false,
  chapterComplete: false,
  sloughComplete: false,
};

const music = new Music();
const worldMap = new WorldMap(window.innerWidth / window.innerHeight);
let mode: 'village' | 'map' | 'slough' = 'village';

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
};

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

function goToMap(): void {
  mode = 'map';
  music.setStyle('map');
  ui.promptKey.style.display = 'none';
  setObjective(quest.sloughComplete
    ? '🗺 The road stretches on toward the sunrise…'
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
    showEnding(
      '🌊 Chapter II Complete',
      'Through the Slough of Despond',
      'Pliable turned back at the first hardship — but Christian, with Help\'s '
      + 'strong paw, came through the mire, burden and all. The road runs on…',
      () => {
        worldMap.sloughDone = true;
        worldMap.start([]);
        worldMap.progress = 0.5;
        goToMap();
      },
    );
  },
});
let sloughActors: { christian: import('./bear').BearParts; pliable: import('./bear').BearParts | null } | null = null;

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
  // Christian's speech gets a warm brown bubble instead of pink
  ui.dialogue.classList.toggle('christian', line.speaker === 'Christian');
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
    else tryTalk();
  }
});

function tryEnterFromMap(): void {
  const spot = worldMap.spot();
  if (spot === 'slough') enterSlough(quest.sloughComplete);
  else if (spot === 'city') enterVillage();
}
window.addEventListener('keyup', (e) => keys.delete(e.code));
// don't leave movement keys stuck when the tab loses focus mid-keypress
window.addEventListener('blur', () => keys.clear());
document.addEventListener('visibilitychange', () => {
  if (document.hidden) keys.clear();
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
  else tryTalk();
});

// ---------------------------------------------------------------- interaction

const TALK_RANGE = 3.2;
let nearestNPC: NPC | null = null;

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

function tryTalk(): void {
  if (nearestNPC && !dialogueOpen) openDialogue(nearestNPC);
}

// ---------------------------------------------------------------- movement & camera

const SPEED = 7;
const camOffset = new THREE.Vector3(0, 13, 13);
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
          worldMap.start(quest.pliableFollowing && !quest.pliableLeft ? ['pliable'] : []);
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
    if (chaseRunning && (npc.id === 'obstinate' || npc.id === 'pliable')) {
      const pos = npc.parts.root.position;
      const tx = christian.root.position.x - 2.6;
      const tz = christian.root.position.z + (npc.id === 'pliable' ? 1.4 : -1.2);
      const dx = tx - pos.x;
      const dz = tz - pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.25) {
        const step = Math.min(10.5 * dt, d);
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

    // Pliable tags along once persuaded
    if (npc.id === 'pliable' && quest.pliableFollowing && !isTalking) {
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
    if (keys.has('KeyD') || keys.has('ArrowRight')) ax += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) ax -= 1;
    if (keys.has('KeyW') || keys.has('ArrowUp')) ax += 1; // "onward" = east
    if (keys.has('KeyS') || keys.has('ArrowDown')) ax -= 1;
    ax += joy.x;
    worldMap.update(dt, t, THREE.MathUtils.clamp(ax, -1, 1));

    const spot = worldMap.spot();
    ui.prompt.style.display = spot === 'road' ? 'none' : 'block';
    ui.promptKey.style.display = 'none';
    if (isTouch) ui.talkBtn.style.display = 'none';
    if (spot === 'city') {
      ui.promptWho.textContent = '🏘 Visit the City of Destruction';
    } else if (spot === 'slough') {
      ui.promptWho.textContent = quest.sloughComplete
        ? '🌊 Revisit the Slough of Despond'
        : 'Enter the Slough of Despond';
    } else if (spot === 'beyond') {
      ui.promptWho.textContent = '⛩ A light in the mist… Chapter III, coming soon!';
    }
    if (spot === 'city' || spot === 'slough') {
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

    camTarget.lerp(sc.root.position, Math.min(4 * dt, 1));
    camera.position.copy(camTarget).add(camOffset);
    camera.lookAt(camTarget.x, camTarget.y + 1.4, camTarget.z);
    renderer.render(slough.scene, camera);
    return;
  }

  // ---- village mode ----
  if (started) {
    updatePlayer(dt, t);
    updateNPCs(dt, t);

    // interact prompt
    nearestNPC = dialogueOpen ? null : findNearestNPC();
    if (nearestNPC && !endingOpen && !cutscene) {
      ui.prompt.style.display = 'block';
      ui.promptWho.textContent = `Talk to ${nearestNPC.name}`;
      if (isTouch) {
        ui.talkBtn.textContent = 'Talk';
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
  worldMap, slough, enterSlough, playScript,
  get mode() { return mode; },
};
