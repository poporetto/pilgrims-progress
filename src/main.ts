import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, animateBear } from './bear';
import { buildWorld, Collider } from './world';
import { createNPCs, NPC, QuestState, DialogueLine } from './npcs';
import { Music } from './music';

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
  chapterComplete: false,
};

const music = new Music();

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

function setObjective(text: string): void {
  ui.objective.textContent = text;
}

// ---------------------------------------------------------------- dialogue

let dialogueLines: DialogueLine[] = [];
let dialogueIndex = 0;
let dialogueOpen = false;
let dialogueNPC: NPC | null = null;

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
  setObjective('✨ Follow the shining light to the east!');
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
    else tryTalk();
  }
});
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
  // world bounds
  pos.x = THREE.MathUtils.clamp(pos.x, -45, 90);
  pos.z = THREE.MathUtils.clamp(pos.z, -32, 32);
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
  playerMoving = len > 0.15 && !dialogueOpen && started && !quest.chapterComplete;

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

    // can't leave town before meeting Evangelist
    if (!quest.talkedToEvangelist && pos.x > 48) {
      pos.x = 48;
      if (t - blockMessageAt > 4) {
        blockMessageAt = t;
        setObjective('🤔 The fields look endless… I should ask Evangelist for direction.');
      }
    }
  }
  animateBear(christian, t, playerMoving);

  // reached the shining light → chapter complete
  if (
    quest.talkedToEvangelist && !quest.chapterComplete &&
    christian.root.position.distanceTo(world.lightBeam.position) < 4.5
  ) {
    quest.chapterComplete = true;
    ui.ending.style.display = 'flex';
    ui.ending.classList.add('hidden');
    requestAnimationFrame(() =>
      requestAnimationFrame(() => ui.ending.classList.remove('hidden')),
    );
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
    if (!npc.wanderRadius || isTalking) {
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
}

// ---------------------------------------------------------------- loop

const clock = new THREE.Clock();

function tick(): void {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  if (started) {
    updatePlayer(dt, t);
    updateNPCs(dt, t);

    // interact prompt
    nearestNPC = dialogueOpen ? null : findNearestNPC();
    if (nearestNPC && !quest.chapterComplete) {
      ui.prompt.style.display = 'block';
      ui.promptWho.textContent = `Talk to ${nearestNPC.name}`;
      if (isTouch) ui.talkBtn.style.display = 'block';
    } else {
      ui.prompt.style.display = 'none';
      if (!dialogueOpen) ui.talkBtn.style.display = 'none';
    }
  }

  world.update(t);

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
  renderer.setSize(window.innerWidth, window.innerHeight);
});

tick();

// small debug handle for testing (harmless in production)
(window as any).__game = { christian, npcs, quest, world, openDialogue, advanceDialogue, camTarget };
