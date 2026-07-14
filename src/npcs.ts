import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, BearParts, BearAccessory } from './bear';

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface NPC {
  id: string;
  name: string;
  parts: BearParts;
  position: THREE.Vector3;
  facing: number;
  // returns the lines to speak right now (may depend on quest state)
  getLines: (state: QuestState) => DialogueLine[];
  onFinish?: (state: QuestState) => void;
  wanderRadius?: number;
}

export interface QuestState {
  talkedToEvangelist: boolean;
  talkedToFamily: boolean;
  chapterComplete: boolean;
}

interface NPCDef {
  id: string;
  name: string;
  fur: number;
  scale: number;
  accessory: BearAccessory;
  accessoryColor?: number;
  x: number;
  z: number;
  facing: number;
  wanderRadius?: number;
  getLines: (state: QuestState) => DialogueLine[];
  onFinish?: (state: QuestState) => void;
}

const DEFS: NPCDef[] = [
  {
    id: 'christiana',
    name: 'Christiana',
    fur: PALETTE.bearHoney,
    scale: 0.95,
    accessory: 'dress',
    accessoryColor: PALETTE.dressRose,
    x: -8.5, z: -7,
    facing: Math.PI,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Christiana', text: 'You really mean to go, then… toward that light in the east?' },
            { speaker: 'Christiana', text: 'Then go safely, my dear Christian. The cubs and I will keep the hearth warm.' },
            { speaker: 'Christiana', text: 'Perhaps one day… we will follow you. 💗' },
          ]
        : [
            { speaker: 'Christiana', text: 'Christian, dear, you have been sighing all week over that heavy burden on your back.' },
            { speaker: 'Christiana', text: 'You keep saying our city will not stand… it frightens the cubs, you know.' },
            { speaker: 'Christiana', text: 'If you truly must find answers, they say a wise bear called Evangelist walks the east road.' },
          ],
    onFinish: (s) => { s.talkedToFamily = true; },
  },
  {
    id: 'cub1',
    name: 'Matthew (cub)',
    fur: PALETTE.bearBrown,
    scale: 0.55,
    accessory: 'none',
    x: -11, z: -6,
    facing: Math.PI * 0.8,
    wanderRadius: 2,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Matthew', text: 'Papa, is that sparkly light for YOU? It looks like a star that fell down!' },
            { speaker: 'Matthew', text: 'Bring me back a piece of it, okay? Promise!' },
          ]
        : [
            { speaker: 'Matthew', text: 'Papa! Why do you always carry that big lumpy backpack?' },
            { speaker: 'Matthew', text: 'It looks SO heavy. I tried to lift it once and fell right over. Plop!' },
          ],
  },
  {
    id: 'cub2',
    name: 'Samuel (cub)',
    fur: PALETTE.bearHoney,
    scale: 0.5,
    accessory: 'none',
    x: -7, z: -5,
    facing: -Math.PI * 0.7,
    wanderRadius: 2,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Samuel', text: '*sniff* …You are going away, Papa?' },
            { speaker: 'Samuel', text: 'Mama says brave bears follow their hearts. So… be the bravest one ever.' },
          ]
        : [
            { speaker: 'Samuel', text: 'Papa, I found a honey-flower by the well! Want to smell it?' },
            { speaker: 'Samuel', text: 'It smells like… like honey! Hee hee.' },
          ],
  },
  {
    id: 'obstinate',
    name: 'Obstinate',
    fur: PALETTE.bearCocoa,
    scale: 1.05,
    accessory: 'apron',
    accessoryColor: 0x9db8a1,
    x: 4, z: 4.5,
    facing: -Math.PI / 3,
    getLines: () => [
      { speaker: 'Obstinate', text: 'Hmph. Still going on about the city falling down, Christian?' },
      { speaker: 'Obstinate', text: 'This is the finest city a bear could want! Honey in the market, fish in the river…' },
      { speaker: 'Obstinate', text: 'Leave if you like — but no sensible bear will go with you. Hmph!' },
    ],
  },
  {
    id: 'pliable',
    name: 'Pliable',
    fur: PALETTE.bearHoney,
    scale: 0.95,
    accessory: 'none',
    x: 7, z: 1,
    facing: Math.PI,
    wanderRadius: 3,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Pliable', text: 'A shining light, you say?! Ooooh, that DOES sound exciting…' },
            { speaker: 'Pliable', text: 'Maybe I will come along! …Unless the road gets muddy. I do hate mud.' },
          ]
        : [
            { speaker: 'Pliable', text: 'Oh, hello Christian! Don\'t mind old Obstinate — he grumbles at clouds, too.' },
            { speaker: 'Pliable', text: 'A Celestial City, all gold and light? If it\'s real, I\'d love to see it… I think.' },
          ],
  },
  {
    id: 'baker',
    name: 'Mrs. Bramble',
    fur: PALETTE.bearBrown,
    scale: 0.98,
    accessory: 'apron',
    accessoryColor: 0xf3d9a6,
    x: -3, z: 11,
    facing: 0,
    getLines: () => [
      { speaker: 'Mrs. Bramble', text: 'Fresh honey-buns! Oh — Christian, dear, you look pale as flour.' },
      { speaker: 'Mrs. Bramble', text: 'Here, imagine I gave you a bun. On the house. You\'ll need your strength, whatever it is you\'re up to.' },
    ],
  },
  {
    id: 'evangelist',
    name: 'Evangelist',
    fur: 0xa89a8c, // wise silver-grey bear
    scale: 1.15,
    accessory: 'robe',
    accessoryColor: PALETTE.robeWhite,
    x: 42, z: 0,
    facing: -Math.PI / 2,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Evangelist', text: 'Do you see the shining light, Christian? Keep it ever before your eyes.' },
            { speaker: 'Evangelist', text: 'Walk straight toward it, and you shall find the Wicket Gate. Knock, and it will be opened.' },
          ]
        : [
            { speaker: 'Evangelist', text: 'Peace to you, burdened friend. I am called Evangelist. Why do you sigh so?' },
            { speaker: 'Christian', text: 'This burden on my back grows heavier each day… and I fear our city will not stand. But I do not know where to go!' },
            { speaker: 'Evangelist', text: 'Then hear me. Beyond the fields lies a Wicket Gate, the beginning of the true way.' },
            { speaker: 'Christian', text: 'A gate? I look and look, but I cannot see any gate…' },
            { speaker: 'Evangelist', text: 'Do you see, far off, yonder shining light?' },
            { speaker: 'Christian', text: '…I… yes! I think I see it!' },
            { speaker: 'Evangelist', text: 'Keep that light in your eye and go straight toward it. There you will find the Gate. Now run, Christian — run and do not look back!' },
          ],
    onFinish: (s) => { s.talkedToEvangelist = true; },
  },
];

export function createNPCs(scene: THREE.Scene): NPC[] {
  return DEFS.map((def) => {
    const parts = makeBear({
      fur: def.fur,
      scale: def.scale,
      accessory: def.accessory,
      accessoryColor: def.accessoryColor,
    });
    parts.root.position.set(def.x, 0, def.z);
    parts.root.rotation.y = def.facing;
    scene.add(parts.root);
    return {
      id: def.id,
      name: def.name,
      parts,
      position: new THREE.Vector3(def.x, 0, def.z),
      facing: def.facing,
      getLines: def.getLines,
      onFinish: def.onFinish,
      wanderRadius: def.wanderRadius,
    };
  });
}
