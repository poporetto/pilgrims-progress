import * as THREE from 'three';
import { PALETTE } from './palette';
import { makeBear, BearParts, Species, Outfit } from './bear';

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
  chaseDone: boolean;
  eggsCollected: number;
  pliableFollowing: boolean;
  pliableLeft: boolean;
  chapterComplete: boolean;
  sloughComplete: boolean;
}

interface NPCDef {
  id: string;
  name: string;
  species: Species;
  fur?: number;
  scale: number;
  outfit: Outfit;
  outfitColor?: number;
  x: number;
  z: number;
  facing: number;
  wanderRadius?: number;
  getLines: (state: QuestState) => DialogueLine[];
  onFinish?: (state: QuestState) => void;
}

const DEFS: NPCDef[] = [
  // ---------------- Christian's family ----------------
  {
    id: 'christiana',
    name: 'Christiana',
    species: 'bear',
    fur: PALETTE.bearHoney,
    scale: 0.95,
    outfit: 'dress',
    outfitColor: PALETTE.dressRose,
    x: -8.5, z: -7,
    facing: Math.PI,
    getLines: (s) => {
      const eggLine: DialogueLine[] = s.eggsCollected >= 3
        ? [{ speaker: 'Christiana', text: 'Oh — fresh eggs! Bless you, dear, breakfast will be lovely this morning. 🥚' }]
        : [];
      return s.talkedToEvangelist
        ? [
            { speaker: 'Christiana', text: 'You really mean to go, then… toward that light in the east?' },
            { speaker: 'Christiana', text: 'Then go safely, my dear Christian. The cubs and I will keep the hearth warm.' },
            { speaker: 'Christiana', text: 'Perhaps one day… we will follow you. 💗' },
          ]
        : [
            ...eggLine,
            { speaker: 'Christiana', text: 'Christian, dear, you have been sighing all week over that heavy burden on your back.' },
            { speaker: 'Christiana', text: 'You keep saying our city will not stand… it frightens the cubs, you know.' },
            { speaker: 'Christiana', text: 'If you truly must find answers, they say a wise bear called Evangelist walks the east road.' },
          ];
    },
    onFinish: (s) => { s.talkedToFamily = true; },
  },
  {
    id: 'cub1',
    name: 'Matthew (cub)',
    species: 'bear',
    fur: PALETTE.bearBrown,
    scale: 0.55,
    outfit: 'shirt',
    outfitColor: 0xaecbff,
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
    species: 'bear',
    fur: PALETTE.bearHoney,
    scale: 0.5,
    outfit: 'overalls',
    outfitColor: 0x9fdcc8,
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
  // ---------------- villagers ----------------
  {
    id: 'obstinate',
    name: 'Obstinate',
    species: 'pig',
    scale: 1.05,
    outfit: 'shirt',
    outfitColor: 0x9db8a1,
    x: 4, z: 4.5,
    facing: -Math.PI / 3,
    getLines: (s) =>
      s.chaseDone
        ? [
            { speaker: 'Obstinate', text: 'Oh. So you\'ve come crawling back, have you? …No? Just VISITING? Hmph.' },
            { speaker: 'Obstinate', text: 'Moonbeams and fairy-gold. Mark my words, Christian — no good ever came of leaving a perfectly fine city.' },
          ]
        : [
            { speaker: 'Obstinate', text: 'Hmph. Still going on about the city falling down, Christian?' },
            { speaker: 'Obstinate', text: 'This is the finest city anyone could want! Acorns in the market, mud by the river…' },
            { speaker: 'Obstinate', text: 'Leave if you like — but no sensible creature will go with you. Hmph!' },
          ],
  },
  {
    id: 'pliable',
    name: 'Pliable',
    species: 'rabbit',
    scale: 0.95,
    outfit: 'shirt',
    outfitColor: 0xffd6a5,
    x: 7, z: 1,
    facing: Math.PI,
    wanderRadius: 3,
    getLines: (s) =>
      s.pliableLeft
        ? [
            { speaker: 'Pliable', text: 'Ah— Christian! You made it out of that dreadful bog, then. *ahem* …You\'re not cross with me, are you?' },
            { speaker: 'Pliable', text: 'The mud, you see. It was in my EARS. A gentle-rabbit has his limits! …But do write when you reach that golden city.' },
          ]
        : s.pliableFollowing
          ? [
              { speaker: 'Pliable', text: 'Lead on, Christian! Crowns of gold, here we come — hop hop!' },
            ]
          : s.talkedToEvangelist
            ? [
                { speaker: 'Pliable', text: 'A shining light?! And a Wicket Gate?! Ooooh, tell me EVERYTHING.' },
                { speaker: 'Christian', text: 'Evangelist says beyond the gate lies the way to the Celestial City — where no city ever crumbles.' },
                { speaker: 'Pliable', text: 'Golden streets… crowns… no crumbling… It sounds marvellous. And far. And possibly muddy. Oh, I can\'t decide!' },
              ]
            : [
                { speaker: 'Pliable', text: 'Oh, hello Christian! Don\'t mind old Obstinate — he grumbles at clouds, too.' },
                { speaker: 'Pliable', text: 'A Celestial City, all gold and light? If it\'s real, I\'d love to see it… I think.' },
              ],
  },
  {
    id: 'baker',
    name: 'Mrs. Bramble',
    species: 'bear',
    fur: PALETTE.bearBrown,
    scale: 0.98,
    outfit: 'apron',
    outfitColor: 0xf3d9a6,
    x: -3, z: 11,
    facing: 0,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Mrs. Bramble', text: 'Leaving us, are you? Well, I never held with any of it, but I\'ll miss your face at my counter.' },
            { speaker: 'Christian', text: 'Thank you for all the buns, Mrs. Bramble. I won\'t forget your kindness.' },
            { speaker: 'Mrs. Bramble', text: 'Oh, hush now, off with you before I get flour in my eyes. Go on!' },
          ]
        : [
            { speaker: 'Mrs. Bramble', text: 'Fresh honey-buns! Oh — Christian, dear, you look pale as flour.' },
            { speaker: 'Christian', text: 'I\'m well enough, Mrs. Bramble. Just… this burden. It won\'t let me rest.' },
            { speaker: 'Mrs. Bramble', text: 'Here, imagine I gave you a bun. On the house. You\'ll need your strength, whatever it is you\'re up to.' },
          ],
  },
  {
    id: 'farmer',
    name: 'Old Hamlet',
    species: 'pig',
    fur: 0xe8a7b2,
    scale: 1.0,
    outfit: 'overalls',
    outfitColor: 0x8fb8d8,
    x: 17, z: 16,
    facing: -Math.PI / 2,
    wanderRadius: 3,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Old Hamlet', text: 'A light in the east, eh? My old snout smells a change in the wind…' },
            { speaker: 'Christian', text: 'I hope it\'s a change for the better, Old Hamlet. I mean to follow it.' },
            { speaker: 'Old Hamlet', text: 'Take care on the road, lad. Mind the bog past the fields — it swallows boots whole.' },
          ]
        : [
            { speaker: 'Old Hamlet', text: 'Mornin\', Christian. Fine day for turnips. Not so fine for carryin\' great sacks about, I\'d say.' },
            { speaker: 'Christian', text: 'It isn\'t turnips, Old Hamlet. I wish it were something I could just set down in a field.' },
            { speaker: 'Old Hamlet', text: 'You look like a pig who\'s seen the butcher\'s calendar. Whatever\'s weighing you, don\'t carry it alone.' },
          ],
  },
  {
    id: 'frogkid',
    name: 'Puddle',
    species: 'frog',
    scale: 0.55,
    outfit: 'shirt',
    outfitColor: 0xf7c8d4,
    x: 2.5, z: -3,
    facing: Math.PI,
    wanderRadius: 3,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Puddle', text: 'Ribbit! Are you really going away, Mister Christian? All the way past the fields?' },
            { speaker: 'Christian', text: 'All the way to a Celestial City, Puddle. I hope you\'ll come visit someday.' },
            { speaker: 'Puddle', text: 'A CELESTIAL city?! Do the puddles there go on forever?! …I\'ll practice my jumping, just in case!' },
          ]
        : [
            { speaker: 'Puddle', text: 'Ribbit! Mister Christian! I can jump higher than the well! Wanna see?' },
            { speaker: 'Christian', text: 'Ha! Go on then, Puddle — show me your best jump.' },
            { speaker: 'Puddle', text: '…Okay, maybe not HIGHER. But definitely louder. RIBBIT!' },
          ],
  },
  {
    id: 'florist',
    name: 'Clover',
    species: 'rabbit',
    fur: 0xe9d7c3,
    scale: 0.92,
    outfit: 'dress',
    outfitColor: 0xc7ecc2,
    x: -18, z: 4,
    facing: Math.PI / 2,
    wanderRadius: 3,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Clover', text: 'Everyone\'s whispering about you, Christian. A light beyond the fields, imagine!' },
            { speaker: 'Christian', text: 'It\'s true, Clover. I mean to follow it, however far it leads.' },
            { speaker: 'Clover', text: 'Here — a daisy for your buttonhole. Flowers make every road shorter.' },
          ]
        : [
            { speaker: 'Clover', text: 'Good day, Christian! My daisies came up lovely this spring, haven\'t they?' },
            { speaker: 'Christian', text: 'They\'re lovely, Clover. I only wish I could enjoy them without this weight on my back.' },
            { speaker: 'Clover', text: 'Though… the soil\'s been trembling lately. The flowers feel it too, I think.' },
          ],
  },
  {
    id: 'cat',
    name: 'Mr. Whiskers',
    species: 'cat',
    scale: 0.96,
    outfit: 'shirt',
    outfitColor: 0xcbb8f0,
    x: 10, z: -6,
    facing: Math.PI * 0.75,
    getLines: (s) =>
      s.talkedToEvangelist
        ? [
            { speaker: 'Mr. Whiskers', text: 'Mrrrow. So you\'re actually leaving. I suppose someone has to stop worrying about the city collapsing.' },
            { speaker: 'Christian', text: 'Will you miss me, Mr. Whiskers?' },
            { speaker: 'Mr. Whiskers', text: '…Don\'t make it strange. Go on, then. Mind the sunbeams on your way out.' },
          ]
        : [
            { speaker: 'Mr. Whiskers', text: 'Mrrrow. You\'re blocking my sunbeam, Christian.' },
            { speaker: 'Christian', text: 'Sorry, Mr. Whiskers. I have rather a lot on my mind — and on my back.' },
            { speaker: 'Mr. Whiskers', text: 'A city falling down? As long as it doesn\'t fall before my nap, I really can\'t be bothered.' },
          ],
  },
  // ---------------- Evangelist ----------------
  {
    id: 'evangelist',
    name: 'Evangelist',
    species: 'bear',
    fur: 0xa89a8c,
    scale: 1.15,
    outfit: 'robe',
    outfitColor: PALETTE.robeWhite,
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
      species: def.species,
      fur: def.fur,
      scale: def.scale,
      outfit: def.outfit,
      outfitColor: def.outfitColor,
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
