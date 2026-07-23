import * as THREE from 'three';
import { PALETTE } from './palette';

// Chibi voxel character factory. All villagers share the same block anatomy
// (stubby legs, round body, oversized head); species swap out ears, snouts
// and tails, and everyone wears clothes.

export type Species = 'bear' | 'pig' | 'frog' | 'rabbit' | 'cat' | 'lion' | 'owl' | 'mouse' | 'sheep' | 'dog';
export type Outfit = 'shirt' | 'dress' | 'apron' | 'robe' | 'overalls' | 'none';

export interface CharacterOptions {
  species?: Species;
  fur?: number;
  scale?: number;
  outfit?: Outfit;
  outfitColor?: number;
  burden?: boolean;   // Christian's great burden on the back
  sling?: boolean;    // travel sling bag across the chest
  plump?: boolean;    // slightly wider body and bigger tummy (Christian only)
}

export interface BearParts {
  root: THREE.Group;
  body: THREE.Group;
  head: THREE.Group;
  armL: THREE.Group;
  armR: THREE.Group;
  legL: THREE.Group;
  legR: THREE.Group;
  tail?: THREE.Mesh;
  eyes?: THREE.Mesh[];
  /** Stylized movement dust; kept on the actor so every chapter gets it. */
  dustPuffs?: THREE.Mesh[];
  dustTimer?: number;
  dustLastT?: number;
}

const geoCache = new Map<string, THREE.BoxGeometry>();
function box(w: number, h: number, d: number): THREE.BoxGeometry {
  const key = `${w},${h},${d}`;
  let g = geoCache.get(key);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    geoCache.set(key, g);
  }
  return g;
}

const matCache = new Map<number, THREE.MeshLambertMaterial>();
export function mat(color: number): THREE.MeshLambertMaterial {
  let m = matCache.get(color);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color });
    matCache.set(color, m);
  }
  return m;
}

export function block(
  w: number, h: number, d: number, color: number,
  x = 0, y = 0, z = 0,
): THREE.Mesh {
  const mesh = new THREE.Mesh(box(w, h, d), mat(color));
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

const DEFAULT_FUR: Record<Species, number> = {
  bear: PALETTE.bearBrown,
  pig: 0xf5b6c0,
  frog: 0xa4d97c,
  rabbit: 0xf3ead9,
  cat: 0xc8bfb4,
  lion: 0xd9a860,
  owl: 0x8a7864,
  mouse: 0xb8aa9c,
  sheep: 0xf3efe4,
  dog: 0xb98f66,
};

const BELLY: Record<Species, number> = {
  bear: PALETTE.bearCream,
  pig: 0xfad4da,
  frog: 0xd6eec0,
  rabbit: 0xfdf8ee,
  cat: 0xede7dd,
  lion: 0xf0dcbb,
  owl: 0xe8ddc9,
  mouse: 0xf3ece3,
  sheep: 0xfaf7ef,
  dog: 0xf0e2cc,
};

const LION_MANE = 0xb0793a;

export function makeBear(opts: CharacterOptions = {}): BearParts {
  const species = opts.species ?? 'bear';
  const fur = opts.fur ?? DEFAULT_FUR[species];
  const belly = BELLY[species];
  const scale = opts.scale ?? 1;

  const root = new THREE.Group();
  // Scene-agnostic character collision metadata. The active pilgrim is marked
  // by the same burdened/pre-armor or plump/post-Cross options used elsewhere.
  root.userData.characterRadius = 0.72 * scale;
  root.userData.isPilgrim = species === 'bear' && (opts.plump === true || opts.burden === true);

  // Chapter I-style dust pool. These are emitted into the scene (rather than
  // remaining parented to the character) so each puff genuinely stays behind
  // Christian and drifts away after his step.
  const dustPuffs: THREE.Mesh[] = [];
  // Christian is burdened before the Cross and plump after it; both forms need
  // the same trail. Other bears stay dust-free.
  const hasFootDust = species === 'bear' && (opts.plump === true || opts.burden === true);
  for (const side of [-1, 1]) {
    const puff = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.22, 0.22),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }),
    );
    puff.position.set(side * 0.2, 0.11, -0.58);
    puff.scale.setScalar(1);
    puff.castShadow = false;
    puff.visible = false;
    puff.userData.life = 1;
    puff.userData.vx = 0;
    puff.userData.vz = 0;
    if (hasFootDust) dustPuffs.push(puff);
  }

  // --- legs (pivots at hip so they can swing) ---
  const makeLeg = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.2 * side, 0.55, 0);
    pivot.add(block(0.3, 0.55, 0.34, fur, 0, -0.28, 0));
    pivot.add(block(0.32, 0.14, 0.38, belly, 0, -0.5, 0.02)); // paw pad
    root.add(pivot);
    return pivot;
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  // --- body group (bobs while walking) ---
  const body = new THREE.Group();
  body.position.y = 0.55;
  root.add(body);

  const bodyW = opts.plump ? 1.02 : 0.92;
  const bodyD = opts.plump ? 0.68 : 0.6;
  const tummyW = opts.plump ? 0.78 : 0.6;
  const tummyD = opts.plump ? 0.17 : 0.1;
  body.add(block(bodyW, 0.78, bodyD, fur, 0, 0.4, 0));
  body.add(block(tummyW, 0.5, tummyD, belly, 0, 0.38, 0.28)); // tummy
  // neck: bridges the body top (y 0.79) and the head bottom so the head never
  // looks chopped off when it sways or the character lies down. Height halved
  // (0.44 → 0.22) for a shorter, stockier neck; the head is lowered to match
  // (see head.position.y below) so no gap opens up.
  body.add(block(0.52, 0.22, 0.46, fur, 0, 0.88, 0));

  // species tails
  let tail: THREE.Mesh | undefined;
  if (species === 'bear') {
    // Normal, snug tail position. Armour moves this back only after it is worn.
    tail = block(0.2, 0.2, 0.2, fur, 0, 0.25, -(bodyD / 2 + 0.1));
    body.add(tail);
  } else if (species === 'pig') {
    body.add(block(0.12, 0.12, 0.16, 0xef9fac, 0.08, 0.3, -0.36));
    body.add(block(0.12, 0.12, 0.12, 0xef9fac, 0.16, 0.4, -0.4));
  } else if (species === 'rabbit') {
    body.add(block(0.24, 0.24, 0.2, 0xffffff, 0, 0.28, -0.36));
  } else if (species === 'cat') {
    body.add(block(0.14, 0.14, 0.5, fur, 0.2, 0.3, -0.5));
    body.add(block(0.14, 0.3, 0.14, fur, 0.2, 0.5, -0.72));
  } else if (species === 'lion') {
    // long tail with a dark tuft
    body.add(block(0.14, 0.14, 0.55, fur, 0.2, 0.28, -0.52));
    body.add(block(0.22, 0.22, 0.22, LION_MANE, 0.2, 0.28, -0.84));
  } else if (species === 'mouse') {
    // a thin, long tail
    body.add(block(0.08, 0.08, 0.6, 0xd9a3ac, 0.1, 0.22, -0.5));
  } else if (species === 'sheep') {
    // woolly fleece over the shoulders and a stubby tail
    body.add(block(bodyW + 0.12, 0.34, bodyD + 0.12, 0xffffff, 0, 0.66, 0));
    body.add(block(0.22, 0.22, 0.18, 0xffffff, 0, 0.3, -(bodyD / 2 + 0.06)));
  } else if (species === 'dog') {
    // A short, three-piece voxel tail with a jaunty upward wag.
    const tailBase = block(0.18, 0.22, 0.3, fur, 0.1, 0.42, -(bodyD / 2 + 0.12));
    tailBase.rotation.x = -0.45;
    body.add(tailBase);
    const tailMid = block(0.16, 0.28, 0.18, fur, 0.18, 0.62, -(bodyD / 2 + 0.31));
    tailMid.rotation.x = -0.68;
    tailMid.rotation.z = -0.18;
    body.add(tailMid);
    const tailTip = block(0.18, 0.18, 0.18, BELLY.dog, 0.27, 0.82, -(bodyD / 2 + 0.4));
    body.add(tailTip);
  }
  // frogs and owls have no visible tail

  // --- arms ---
  const makeArm = (side: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(0.55 * side, 0.68, 0);
    pivot.add(block(0.26, 0.55, 0.3, fur, 0, -0.22, 0));
    pivot.add(block(0.28, 0.14, 0.32, belly, 0, -0.46, 0));
    body.add(pivot);
    return pivot;
  };
  const armL = makeArm(-1);
  const armR = makeArm(1);

  // --- head group ---
  const head = new THREE.Group();
  // lowered from 1.16 to 0.98 to sit atop the now-shorter neck (see neck block
  // above) — keeps the head connected to the body rather than floating
  head.position.y = 0.98;
  body.add(head);

  head.add(block(0.95, 0.82, 0.8, fur, 0, 0.4, 0));

  // species faces & ears
  if (species === 'bear') {
    head.add(block(0.24, 0.24, 0.16, fur, -0.36, 0.9, 0));
    head.add(block(0.24, 0.24, 0.16, fur, 0.36, 0.9, 0));
    head.add(block(0.14, 0.14, 0.1, belly, -0.36, 0.9, 0.05));
    head.add(block(0.14, 0.14, 0.1, belly, 0.36, 0.9, 0.05));
    head.add(block(0.4, 0.3, 0.18, PALETTE.snout, 0, 0.26, 0.46));
    head.add(block(0.16, 0.12, 0.08, PALETTE.nose, 0, 0.34, 0.56));
  } else if (species === 'pig') {
    // floppy triangle-ish ears
    const earL = block(0.26, 0.26, 0.14, 0xef9fac, -0.34, 0.9, 0);
    earL.rotation.z = 0.5;
    head.add(earL);
    const earR = block(0.26, 0.26, 0.14, 0xef9fac, 0.34, 0.9, 0);
    earR.rotation.z = -0.5;
    head.add(earR);
    // round snout with nostrils
    head.add(block(0.42, 0.3, 0.16, 0xef9fac, 0, 0.3, 0.46));
    head.add(block(0.07, 0.12, 0.04, 0xc76f7e, -0.1, 0.3, 0.55));
    head.add(block(0.07, 0.12, 0.04, 0xc76f7e, 0.1, 0.3, 0.55));
  } else if (species === 'frog') {
    // eye bumps on top of the head
    for (const side of [-1, 1]) {
      head.add(block(0.28, 0.26, 0.28, fur, 0.26 * side, 0.94, 0.16));
      head.add(block(0.18, 0.18, 0.08, 0xffffff, 0.26 * side, 0.96, 0.32));
      head.add(block(0.09, 0.12, 0.04, PALETTE.nose, 0.26 * side, 0.96, 0.37));
    }
    // wide happy mouth
    head.add(block(0.5, 0.06, 0.05, 0x5e7d4a, 0, 0.2, 0.41));
  } else if (species === 'rabbit') {
    for (const side of [-1, 1]) {
      head.add(block(0.2, 0.7, 0.14, fur, 0.24 * side, 1.1, 0));
      head.add(block(0.1, 0.5, 0.06, 0xf7c8d4, 0.24 * side, 1.1, 0.06));
    }
    head.add(block(0.3, 0.22, 0.14, 0xffffff, 0, 0.26, 0.44));
    head.add(block(0.12, 0.1, 0.06, 0xe58a9b, 0, 0.36, 0.52));
  } else if (species === 'cat') {
    for (const side of [-1, 1]) {
      const ear = block(0.24, 0.28, 0.14, fur, 0.32 * side, 0.92, 0);
      ear.rotation.z = -0.4 * side;
      head.add(ear);
      head.add(block(0.12, 0.14, 0.08, 0xf7c8d4, 0.32 * side, 0.9, 0.05));
    }
    head.add(block(0.3, 0.2, 0.14, 0xffffff, 0, 0.24, 0.44));
    head.add(block(0.1, 0.08, 0.06, 0xe58a9b, 0, 0.32, 0.52));
  } else if (species === 'lion') {
    // a thick mane framing the whole face (kept clear of the head's faces
    // — head spans x ±0.475, y -0.01..0.81, z ±0.4 — to avoid z-fighting)
    head.add(block(1.3, 1.2, 0.34, LION_MANE, 0, 0.4, -0.44));   // big ruff behind
    head.add(block(1.24, 0.3, 0.62, LION_MANE, 0, 0.97, -0.12)); // crown tuft
    head.add(block(0.3, 1.06, 0.62, LION_MANE, -0.62, 0.38, -0.12)); // side ruffs
    head.add(block(0.3, 1.06, 0.62, LION_MANE, 0.62, 0.38, -0.12));
    head.add(block(0.9, 0.26, 0.6, LION_MANE, 0, -0.15, -0.1));  // chin ruff
    // little round ears peeking from the mane
    head.add(block(0.24, 0.24, 0.18, fur, -0.42, 1.06, 0.02));
    head.add(block(0.24, 0.24, 0.18, fur, 0.42, 1.06, 0.02));
    // gentle golden muzzle
    head.add(block(0.44, 0.32, 0.2, PALETTE.snout, 0, 0.26, 0.47));
    head.add(block(0.16, 0.12, 0.08, PALETTE.nose, 0, 0.35, 0.58));
  } else if (species === 'owl') {
    // Strong stepped brow and pointed ear tufts make the silhouette distinctly
    // owl-like even at the small scale used for Interpreter and Watchful.
    for (const side of [-1, 1]) {
      const tuft = block(0.18, 0.38, 0.16, fur, 0.34 * side, 1.02, -0.01);
      tuft.rotation.z = -0.25 * side;
      head.add(tuft);
      const brow = block(0.42, 0.13, 0.12, fur, 0.22 * side, 0.72, 0.47);
      brow.rotation.z = -0.18 * side;
      head.add(brow);
      // Cream facial disks sit behind the detailed eye layers below.
      head.add(block(0.44, 0.46, 0.1, belly, 0.23 * side, 0.49, 0.45));
    }
    // Two-piece golden hooked beak.
    const beakTop = block(0.2, 0.2, 0.18, 0xe8a23a, 0, 0.34, 0.58);
    beakTop.rotation.x = 0.2;
    head.add(beakTop);
    const beakTip = block(0.12, 0.16, 0.14, 0xc98428, 0, 0.22, 0.63);
    beakTip.rotation.x = -0.28;
    head.add(beakTip);
    // Layered breast plumage and short wing feathers.
    body.add(block(0.68, 0.22, 0.1, belly, 0, 0.66, bodyD / 2 + 0.08));
    body.add(block(0.54, 0.2, 0.11, belly, 0, 0.43, bodyD / 2 + 0.09));
    body.add(block(0.4, 0.18, 0.12, belly, 0, 0.22, bodyD / 2 + 0.1));
    // Bare-armed owls get feathered wings. When an owl wears a robe or shirt
    // the sleeve fully covers these feathers, and the coplanar overlap made the
    // arm flicker (z-fighting), so we skip them for clothed owls.
    if ((opts.outfit ?? 'none') === 'none') {
      for (const side of [-1, 1]) {
        const wing = side < 0 ? armL : armR;
        wing.add(block(0.34, 0.18, 0.39, fur, 0, -0.13, 0));
        wing.add(block(0.28, 0.16, 0.41, belly, 0, -0.32, 0.02));
      }
    }
  } else if (species === 'sheep') {
    // a fluffy wool cap over the crown (kept clear of the head's faces)
    head.add(block(1.04, 0.34, 0.9, 0xffffff, 0, 0.9, -0.02));
    head.add(block(0.8, 0.28, 0.7, 0xffffff, 0, 1.12, -0.04));
    head.add(block(0.4, 0.22, 0.4, 0xffffff, 0.12, 1.3, 0));
    // little sideways ears
    for (const side of [-1, 1]) {
      const ear = block(0.36, 0.18, 0.14, fur, 0.56 * side, 0.62, 0.02);
      ear.rotation.z = -0.25 * side;
      head.add(ear);
    }
    // soft muzzle with a rosy nose
    head.add(block(0.36, 0.26, 0.16, 0xfaf7ef, 0, 0.24, 0.45));
    head.add(block(0.13, 0.1, 0.07, 0xe0a3ac, 0, 0.32, 0.54));
  } else if (species === 'dog') {
    // Rounded floppy ears, warm muzzle, and bright eyes give Hopeful a gentle,
    // puppy-like face rather than a square bear face with dog parts attached.
    const earC = new THREE.Color(fur).multiplyScalar(0.72).getHex();
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), mat(earC));
      ear.scale.set(0.85, 1.7, 0.6);
      ear.position.set(0.5 * side, 0.48, 0.02);
      ear.rotation.z = 0.18 * side;
      head.add(ear);
    }
    // A layered voxel muzzle reads friendly while matching the blocky art style.
    head.add(block(0.54, 0.3, 0.28, belly, 0, 0.2, 0.5));
    head.add(block(0.36, 0.2, 0.16, 0xfff3df, 0, 0.26, 0.65));
    head.add(block(0.18, 0.14, 0.1, 0x2e2a28, 0, 0.34, 0.72));
    // mouth line + a little pink tongue lolling out
    head.add(block(0.34, 0.05, 0.06, 0x8a6f52, 0, 0.06, 0.7));
    head.add(block(0.16, 0.07, 0.16, 0xe58a9b, 0.08, 0.0, 0.62));
    // a brow patch above one eye, like every good mutt
    head.add(block(0.2, 0.18, 0.06, earC, 0.24, 0.7, 0.42));
  } else if (species === 'mouse') {
    // big round ears
    head.add(block(0.3, 0.3, 0.1, fur, -0.32, 0.98, 0.02));
    head.add(block(0.3, 0.3, 0.1, fur, 0.32, 0.98, 0.02));
    head.add(block(0.16, 0.16, 0.06, 0xd9a3ac, -0.32, 0.98, 0.07));
    head.add(block(0.16, 0.16, 0.06, 0xd9a3ac, 0.32, 0.98, 0.07));
    // small pointed pink snout
    head.add(block(0.26, 0.2, 0.16, 0xf3ece3, 0, 0.24, 0.44));
    head.add(block(0.1, 0.08, 0.06, 0xd9a3ac, 0, 0.3, 0.53));
    // whiskers
    head.add(block(0.28, 0.02, 0.02, 0xffffff, -0.05, 0.28, 0.55));
    head.add(block(0.28, 0.02, 0.02, 0xffffff, 0.05, 0.28, 0.55));
  }

  // eyes (frogs already have theirs on top)
  const eyes: THREE.Mesh[] = [];
  if (species === 'owl') {
    // Christian-style readable eyes: bright square whites with dark voxel
    // pupils, placed fully in front of the facial disks.
    for (const side of [-1, 1]) {
      const white = block(0.22, 0.24, 0.07, 0xf9fbf5, 0.23 * side, 0.52, 0.525);
      const pupil = block(0.1, 0.14, 0.055, PALETTE.nose, 0.23 * side, 0.51, 0.59);
      head.add(white);
      head.add(pupil);
      eyes.push(pupil);
    }
  } else if (species !== 'frog') {
    const eyeL = block(0.1, 0.14, 0.05, PALETTE.nose, -0.24, 0.5, 0.41);
    const eyeR = block(0.1, 0.14, 0.05, PALETTE.nose, 0.24, 0.5, 0.41);
    head.add(eyeL);
    head.add(eyeR);
    eyes.push(eyeL, eyeR);
  }
  // rosy cheeks for everyone
  head.add(block(0.12, 0.08, 0.04, 0xf7b2bd, -0.36, 0.32, 0.41));
  head.add(block(0.12, 0.08, 0.04, 0xf7b2bd, 0.36, 0.32, 0.41));

  // --- clothes ---
  const outfit = opts.outfit ?? 'none';
  const oc = opts.outfitColor ?? PALETTE.dressRose;
  // NB: outfit shells must not share faces with the body/tummy blocks
  // (body top sits at y 0.79, tummy front at z 0.33) or they z-fight.
  if (outfit === 'shirt') {
    // the shell must clear the (possibly plump) body on every side, or the
    // fur pokes through and the coplanar faces flicker
    // shell top must clear body top (body: h=0.78 at y=0.4 → top=0.79)
    body.add(block(opts.plump ? 1.12 : 0.98, opts.plump ? 0.54 : 0.52, opts.plump ? 0.82 : 0.74, oc, 0, opts.plump ? 0.53 : 0.52, 0));
    // sleeves on the upper arms
    armL.add(block(0.32, 0.28, 0.4, oc, 0, -0.1, 0));
    armR.add(block(0.32, 0.28, 0.4, oc, 0, -0.1, 0));
  } else if (outfit === 'dress') {
    body.add(block(1.0, 0.5, 0.68, oc, 0, 0.12, 0));
    body.add(block(0.96, 0.4, 0.7, oc, 0, 0.52, 0));
    body.add(block(0.5, 0.16, 0.06, 0xffffff, 0, 0.68, 0.34)); // collar
    armL.add(block(0.32, 0.24, 0.36, oc, 0, -0.08, 0));
    armR.add(block(0.32, 0.24, 0.36, oc, 0, -0.08, 0));
  } else if (outfit === 'apron') {
    body.add(block(0.98, 0.5, 0.7, 0xfaf3e3, 0, 0.5, 0)); // shirt under the apron
    armL.add(block(0.32, 0.26, 0.36, 0xfaf3e3, 0, -0.1, 0));
    armR.add(block(0.32, 0.26, 0.36, 0xfaf3e3, 0, -0.1, 0));
    body.add(block(0.62, 0.6, 0.08, oc, 0, 0.32, 0.32));
    body.add(block(0.3, 0.14, 0.06, oc, 0, 0.68, 0.34)); // bib strap
  } else if (outfit === 'overalls') {
    body.add(block(0.96, 0.44, 0.64, oc, 0, 0.2, 0));
    body.add(block(0.44, 0.4, 0.08, oc, 0, 0.56, 0.3)); // bib
    body.add(block(0.12, 0.4, 0.06, oc, -0.22, 0.72, 0.3)); // straps
    body.add(block(0.12, 0.4, 0.06, oc, 0.22, 0.72, 0.3));
  } else if (outfit === 'robe') {
    body.add(block(1.02, 0.9, 0.7, oc, 0, 0.36, 0));
    body.add(block(0.3, 0.1, 0.06, PALETTE.robeGold, 0, 0.66, 0.34)); // clasp
    armL.add(block(0.34, 0.4, 0.38, oc, 0, -0.14, 0));
    armR.add(block(0.34, 0.4, 0.38, oc, 0, -0.14, 0));
    head.add(block(0.9, 0.5, 0.2, oc, 0, 0.5, -0.45)); // hood
  }

  // --- travel sling bag (diagonal strap over the chest, bag at the hip) ---
  if (opts.sling) {
    // Straps sit distinctly in front of the shirt shell. Coplanar back faces
    // caused the dark strap and blue clothing to flicker on burdened Christian.
    const strapZ = opts.plump ? 0.46 : 0.415;
    const strapF = block(0.14, 1.05, 0.05, 0x8a6f52, 0, 0.42, strapZ);
    strapF.rotation.z = 0.72;
    body.add(strapF);
    const strapB = block(0.14, 1.05, 0.05, 0x8a6f52, 0, 0.42, opts.plump ? -0.46 : -0.415);
    strapB.rotation.z = -0.72;
    body.add(strapB);
    // shoulder pad where the straps meet
    body.add(block(0.24, 0.12, 0.7, 0x8a6f52, -0.34, 0.82, 0));
    // the satchel at the right hip
    body.add(block(0.46, 0.36, 0.22, 0xa9825e, 0.5, 0.02, 0.1));
    body.add(block(0.46, 0.14, 0.24, 0x8a6f52, 0.5, 0.16, 0.1)); // flap
    body.add(block(0.1, 0.1, 0.06, PALETTE.robeGold, 0.5, 0.06, 0.23)); // buckle
  }

  // --- Christian's great burden ---
  if (opts.burden) {
    body.add(block(0.88, 0.62, 0.54, PALETTE.burden, 0, 0.45, -0.56));
    body.add(block(0.70, 0.50, 0.46, 0x87817a, 0, 0.96, -0.54));
    body.add(block(0.50, 0.36, 0.36, PALETTE.burdenStrap, 0, 1.28, -0.52));
    // Keep the burden straps one layer farther forward than both shirt and
    // sling, avoiding exact shared depth surfaces on Christian's chest.
    const bStrapZ = opts.plump ? 0.48 : 0.44;
    // Match the shirt shell exactly from hem to top; only the diagonal travel
    // sling is allowed to continue beyond this panel.
    const verticalStrapH = opts.plump ? 0.54 : 0.52;
    const verticalStrapY = opts.plump ? 0.53 : 0.52;
    body.add(block(0.1, verticalStrapH, 0.08, PALETTE.burdenStrap, -0.3, verticalStrapY, bStrapZ));
    body.add(block(0.1, verticalStrapH, 0.08, PALETTE.burdenStrap, 0.3, verticalStrapY, bStrapZ));
  }

  root.scale.setScalar(scale);
  return { root, body, head, armL, armR, legL, legR, tail, eyes, dustPuffs, dustTimer: 0, dustLastT: 0 };
}

// Shared finishing layer for Christian's post-Palace armour. Scene-specific
// swords and shields can still be added independently, but the breastplate,
// pauldrons, belt, and greaves now read the same throughout the journey.
export function addPilgrimArmorDetails(parts: BearParts): void {
  const STEEL_LIGHT = 0xe8edf2;
  parts.body.add(block(0.72, 0.42, 0.07, STEEL_LIGHT, 0, 0.43, 0.48));
  parts.body.add(block(0.1, 0.46, 0.08, PALETTE.robeGold, 0, 0.43, 0.53));
  parts.body.add(block(0.98, 0.1, 0.09, PALETTE.robeGold, 0, 0.15, 0.48));
  // The breastplate's rear face occupies the tail's normal position. Move the
  // existing tail behind it only for armored Christian, preventing flicker
  // without making the earlier burdened/unarmored tail look detached.
  if (parts.tail) parts.tail.position.z = -0.64;
  for (const side of [-1, 1]) {
    parts.body.add(block(0.24, 0.18, 0.72, 0xc0c9d0, side * 0.56, 0.68, 0));
    const leg = side < 0 ? parts.legL : parts.legR;
    leg.add(block(0.31, 0.24, 0.38, 0xcfd6dd, 0, -0.2, 0));
  }
}

// Shared Shining One treatment used at the Cross, Beulah, and the Celestial
// City. Two compact feather blocks per side stay behind the robe instead of
// cutting through the arms and torso.
export function addShiningOneDetails(parts: BearParts): void {
  for (const side of [-1, 1]) {
    const upper = block(0.15, 0.82, 0.4, 0xfffdf4, side * 0.5, 0.66, -0.51);
    upper.rotation.z = side * 0.18;
    upper.rotation.y = side * 0.12;
    parts.body.add(upper);

    const lower = block(0.13, 0.58, 0.32, 0xf5ecd8, side * 0.56, 0.22, -0.53);
    lower.rotation.z = side * 0.34;
    lower.rotation.y = side * 0.16;
    parts.body.add(lower);
  }
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.38, 0.055, 8, 20),
    new THREE.MeshBasicMaterial({ color: 0xfff2b0 }),
  );
  halo.rotation.x = Math.PI / 2;
  halo.position.set(0, 1.28, 0);
  parts.head.add(halo);
}

// Animate limbs: call every frame with elapsed time and whether moving.
export function animateBear(parts: BearParts, t: number, moving: boolean): void {
  // Keep the player from walking through any other character in the current
  // scene. Characters are direct scene children in every chapter, so the
  // shared rig can enforce this without scene-specific collider lists.
  if (parts.root.userData.isPilgrim && parts.root.parent) {
    const here = parts.root.position;
    const myRadius = parts.root.userData.characterRadius as number;
    for (const other of parts.root.parent.children) {
      if (other === parts.root || !other.visible || typeof other.userData.characterRadius !== 'number') continue;
      const dx = here.x - other.position.x;
      const dz = here.z - other.position.z;
      const distance = Math.hypot(dx, dz);
      const minDistance = myRadius + (other.userData.characterRadius as number);
      if (distance > 0.0001 && distance < minDistance) {
        const push = minDistance - distance;
        here.x += (dx / distance) * push;
        here.z += (dz / distance) * push;
      }
    }
  }
  const swing = moving ? Math.sin(t * 9) * 0.7 : 0;
  const idle = Math.sin(t * 2) * 0.02;
  parts.legL.rotation.x = swing;
  parts.legR.rotation.x = -swing;
  parts.armL.rotation.x = -swing * 0.8;
  parts.armR.rotation.x = swing * 0.8;
  parts.body.position.y = 0.55 + (moving ? Math.abs(Math.sin(t * 9)) * 0.06 : idle);
  parts.head.rotation.z = moving ? Math.sin(t * 4.5) * 0.04 : Math.sin(t * 1.5) * 0.03;
  const puffs = parts.dustPuffs ?? [];
  const dt = Math.min(Math.max(t - (parts.dustLastT ?? t), 0), 0.1);
  parts.dustLastT = t;
  for (const puff of puffs) {
    const life = puff.userData.life as number;
    if (life >= 1) continue;
    const nextLife = Math.min(1, life + dt * 2.2);
    puff.userData.life = nextLife;
    puff.position.x += (puff.userData.vx as number) * dt;
    puff.position.z += (puff.userData.vz as number) * dt;
    puff.position.y += dt * 0.9;
    puff.scale.setScalar(0.6 + nextLife * 1.6);
    (puff.material as THREE.MeshBasicMaterial).opacity = 0.55 * (1 - nextLife);
    if (nextLife >= 1) puff.visible = false;
  }
  if (moving && puffs.length && parts.root.parent) {
    parts.dustTimer = (parts.dustTimer ?? 0) - dt;
    if (parts.dustTimer <= 0) {
      parts.dustTimer = 0.13;
      const puff = puffs.find((candidate) => (candidate.userData.life as number) >= 1);
      if (puff) {
        const pos = parts.root.getWorldPosition(new THREE.Vector3());
        const rear = new THREE.Vector3(0, 0, -1).applyQuaternion(parts.root.getWorldQuaternion(new THREE.Quaternion()));
        puff.position.set(
          pos.x + rear.x * 0.45 + (Math.random() - 0.5) * 0.5,
          pos.y + 0.12,
          pos.z + rear.z * 0.45 + (Math.random() - 0.5) * 0.5,
        );
        puff.userData.life = 0;
        puff.userData.vx = (Math.random() - 0.5) * 0.8;
        puff.userData.vz = (Math.random() - 0.5) * 0.8;
        puff.scale.setScalar(0.6);
        puff.visible = true;
        parts.root.parent.add(puff);
      }
    }
  }
}
