# 🐻 Pilgrim's Progress 

A cute pastel voxel-style 3D adventure based on John Bunyan's *The Pilgrim's
Progress*, with an all-bear cast. Christian the bear must leave the City of
Destruction and journey to the Celestial City.


Gameplay rules:
- Christian shouldn't be able to walk through characters
- Language is set to modern english.
- Christian should always face the NPC when interacting with them.
-  make sure when the event is triggered character positions won’t jump


## Chapter I — The City of Destruction

- Explore a medieval bear village in chunky voxel style
- Talk to Christiana and the cubs, the villagers (Obstinate, Pliable,
  Mrs. Bramble), and finally **Evangelist**
- Evangelist points Christian toward a **shining light** in the east —
  follow it to find the Wicket Gate and complete the chapter

## Tech

- [Three.js](https://threejs.org/) + TypeScript + Vite
- 100% procedural: all models are generated voxel blocks, the music is a
  Web Audio lullaby — no external assets
- Keyboard (WASD/arrows + E) and touch (virtual joystick + Talk button),
  ready for a future mobile build

## Run

```bash
npm install
npm run dev
```
