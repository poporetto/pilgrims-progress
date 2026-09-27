# Pilgrim's Progress — Remake Audit, Feature Checklist & Plan

Branch: `opus-5-rebuild`. This file is the source of truth for the remake;
update the checklist as phases land.

## 1. Current architecture (audit)

- **Stack:** Vite 5 + TypeScript (strict) + Three.js r166. No framework.
  All art and music are procedural; the only binary assets are 61 dialogue
  portraits (`public/portraits/*.webp`, ~444 KB) and the favicon.
- **Size:** ~23.4k lines of TS across 27 files, plus a 1.15k-line
  `index.html` that holds all UI markup and CSS.
- **`main.ts` (3.6k lines):** renderer, title screen (two extra mini
  renderers), HUD/UI wiring, dialogue system, choice box, save system,
  settings, Chapter I village gameplay, quest state, world-map glue,
  debug jumps, and **17 near-identical per-mode render blocks** (input →
  move → `afterMove` → `update` → prompt → camera → render).
- **Chapter scenes (`slough.ts` … `celestial.ts`):** one class per chapter,
  each owning its own `THREE.Scene`, its own Christian rig, lights, sky
  colour, fog, props and a phase state machine. Common surface:
  `enter(revisit)`, `moveFactor()`, `afterMove()`, `update(dt,t,moving)`,
  plus `nearX()/talkX()` interaction hooks. Interiors are teleported far
  away on the same scene and reached through a screen fade.
- **Shared helpers:** `bear.ts` (`block()`, `mat()` → cached
  `MeshLambertMaterial`, `makeBear()` chibi rig + `animateBear()`,
  armor/Shining-One detail layers, foot dust), `light.ts` (shining-light
  beacon, `setupSunShadow`), `palette.ts`, `road.ts` (highway paving),
  `alpine.ts` (faceted mountains), `music.ts` (Web Audio procedural score,
  11 moods), `dialoguePortraits.ts`, `npcs.ts` (village NPCs + quest state),
  `world.ts` (Chapter I village), `worldmap.ts` (overworld continent).

### Weaknesses
- **Rendering:** Lambert materials, no tone mapping / colour-management
  tuning, flat single-colour backgrounds, one fixed sun shadow frustum
  (`half=90`, 2048 map → soft/blurry shadows), raw unbevelled boxes
  everywhere, very few contact shadows.
- **Architecture:** input/camera/prompt logic copy-pasted 17×; every
  camera or post change costs 17 edits. Thousands of individual meshes
  (no merging/instancing) → high draw calls.
- **Characters:** swing-only walk cycle, no blink/breathing/weight shift,
  instant-ish turning, no squash/bounce.
- **UI:** functional but inconsistent; emoji-heavy legacy strings.

## 2. Feature checklist (must survive the remake)

### Global
- [ ] Title screen: animated diorama (Christian + rotating companions),
      portrait medallion, Begin / Continue / New Journey, save summary
- [ ] Chapter-level autosave (localStorage) and restore to world map
- [ ] Settings: sound toggle, reduced motion, Ko-fi link
- [ ] Controls: WASD/arrows, E/Space to interact, touch joystick + talk
      button + sword button, mouse click (balloons), drag (key minigame)
- [ ] Dialogue box with speaker portraits, narrator lines, advance by
      key/click, blip sound, highlighted story names
- [ ] Choice box (two-option decisions)
- [ ] Objective/hint bar; interaction prompt ("E Talk to …")
- [ ] Chapter-complete ending card + Continue; finale scroll + "The End"
- [ ] Screen fades between areas; procedural music per mood (map, village,
      slough, sinai, gate, interpreter, cross, fair, celestial, battle…)
- [ ] World map: continent, road network, progress gating, fork/byway to
      Morality, auto-enter on reaching a chapter, revisit prompts
- [ ] Debug chapter jumps (dev only), Vercel Analytics

### Chapters (phase machines are preserved verbatim)
- [ ] I Village: talk to family/neighbours, interactables (pump, chickens,
      nest, cow…), bun hand-off, Obstinate & Pliable chase, gate + Evangelist
- [ ] II Slough: fall in, struggle, Help rescues, Pliable leaves, freeroam
- [ ] III Morality: Worldly Wiseman, Sinai quake + embers, Evangelist runs in,
      rebuke, return; re-talk Evangelist
- [ ] IV Wicket Gate: long approach mutters, knock, Goodwill walks out,
      arrow volley + animated rescue, peek-volley, Interpreter's house
      (6 vignettes, re-talkable NPCs), cottage exit
- [ ] V Cross: burden rolls into tomb, three Shining Ones, gifts
- [ ] VI Highway: sleepers (Simple/Sloth/Presumption), Formalist &
      Hypocrisy jump the wall, debate, walk together at night
- [ ] VII Hill: fork, arbor sleep, lost scroll retrace + pick-up, Timorous &
      Mistrust, lions warning
- [ ] VIII Palace: chained lions gauntlet, Watchful, four women, records,
      treasures, stairs → roof telescope, arming ceremony, farewell
- [ ] IX Valley: Apollyon confrontation, turn-based battle w/ HP bars,
      fiery dart, fallen → Spirit sword, victory, healing, battle music
- [ ] X Shadow: darkness, whispers, psalm, dawn, meet Faithful, four
      memory rooms with talkable figures, walk on together
- [ ] XI Vanity Fair: Talkative, market, fountain, citizens, mob, trial in
      cage, Faithful's martyrdom & ascension, Hopeful joins
- [ ] XII Lucre: By-ends choice, Demas + mine choice, poison gas escape,
      By-ends' doom, pillar of salt (cat-woman), Demas re-talk
- [ ] XIII Doubting Castle: By-path meadow choice, storm, Giant Despair &
      Diffidence, dungeon, Promise key drag minigame, escape, warning sign
- [ ] XIV Delectable Mountains: shepherds, Hill Error, Mount Caution,
      door into Hell, Perspective Glass telescope, parting talk
- [ ] XV Enchanted Ground: Ignorance, fork, Flatterer's net, Atheist,
      stay-awake actions
- [ ] XVI Beulah: river of death, sinking, pop the balloons of doubt,
      Shining Ones
- [ ] XVII Celestial City: ascent, Pearl Gates, plaza of saints, crowning,
      Ignorance epilogue, Bunyan's warning scroll, The End

### Open visual bugs to catch during environment passes
- [x] "Random torchlight" — was a lone bog-rim cattail in the Slough
      (green pole + tan head beside the highway); replaced by reed clumps
- [ ] NPCs visually face the player when talking (spec §7)

### Environment passes
- [x] I Village
- [x] II Slough
- [x] III Morality & Sinai
- [x] IV Wicket Gate (exterior + cottage; interior house keeps its rooms)
- [x] V Cross
- [x] VI Highway at evening
- [x] VII Hill Difficulty
- [x] VIII Palace (exterior; hall/roof keep their rooms)
- [x] IX Valley of Humiliation
- [x] X Shadow of Death (merged statics, layered crags)
- [x] XI Vanity Fair
- [x] XII Plain of Ease & Hill Lucre

## Baseline (before remake, dev build, 1 s sample after debug jump)

| area | draw calls | tris | fps |
|---|---|---|---|
| village | 130 | 1560 | 60 |
| slough | 90 | 1080 | 61 |
| morality | 99 | 1178 | 61 |
| wicket / interpreter | 70 / 90 | 840 / 1080 | 61 |
| cross | 80 | 960 | 61 |
| highway | 79 | 948 | 61 |
| hill | 136 | 1652 | 61 |
| palace | 62 | 764 | 61 |
| valley | 69 | 828 | 61 |
| shadow | 87 | 1044 | 61 |
| vanity | 99 | 1188 | 61 |
| lucre | 116 | 1392 | 61 |
| castle | 162 | 2380 | 61 |
| mountain | 189 | 2324 | 60 |
| enchanted | 105 | 1260 | 61 |
| beulah | 218 | 2586 | 61 |
| celestial | 164 | 2574 | 61 |
| world map | 380 | 5169 | 56 |

## 3. Remake plan

The gameplay layer (phase machines, triggers, dialogue, colliders) is kept
intact — it is tuned and verified completable. The remake replaces the
**presentation foundation** underneath it and then redoes each chapter's art.
TypeScript is kept deliberately: it is the maintainable-JS architecture and
`tsc` is the safety net for a change this large.

1. **Baseline** — this document; draw-call / frame-time numbers per chapter.
2. **Unified loop** — `core/` with `ChapterAdapter` registry, `Input`,
   `CameraController` (smooth damped follow, per-chapter framing, focus
   overrides, interaction nudges). Collapse the 17 render blocks into one.
3. **Rendering foundation** — ACES/Neutral tone mapping + sRGB, shared
   `MeshStandardMaterial` palette system replacing `mat()`, gradient sky dome
   + stylised clouds, `createLightingRig(preset)` per chapter mood, a sun
   shadow frustum that follows the camera target (tight, crisp shadows),
   soft blob contact shadows under characters.
4. **Character rig** — same `BearParts` API; add blink, breathing, weight
   shift, walk bounce/squash, eased turning, talk/celebrate poses.
5. **UI redesign** — cosy rounded panels, typography, transitions,
   integrated interaction indicator, button states.
6. **Procedural asset kit** — seeded `createTree/Rock/Bush/Flower/House/
   Fence/Lamp/Bench` with instancing; stylised water.
7. **Per-chapter environment passes** — rebuild each `build()` with the kit,
   terrain elevation, composition and landmarks. Gameplay coordinates
   (triggers, clamps, colliders, NPC homes) stay fixed.
8. **Ambient life** — butterflies, birds, falling leaves, chimney smoke,
   grass/tree sway, particles.
9. **Perf pass** — static mesh merging per material, instancing, measured
   against the baseline.
10. **Full regression** against the checklist above.
