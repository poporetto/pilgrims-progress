# Pilgrim's Progress — animated episodes

Turns the game's voxel world into 3–4 minute narrated videos for kids.
Everything is rendered from the real game code (same world, characters,
lighting and synth music). Only the voices are new, made with Kokoro TTS.

## Pipeline

1. **Script.** `film/<ep>/script.json` lists the cast (a Kokoro voice, speed and optional pitch for each character) and the beats. A beat is either a voiced line or a timed pause for action.
2. **Voices.** Run `node film/voices.mjs ep1` to voice every line, then `--engine chatterbox` for expressive takes.
   - **Kokoro** (the default) is local and fast. Its takes also serve as each character's voice identity.
   - **Chatterbox** is local, free and MIT-licensed. It clones each character from their Kokoro takes and speaks with an emotion level. Set that level per character in `cast.<name>.chatterbox.exaggeration`, or per line with `emo`. Values run from 0.25 (flat) to about 1.3 (big). One-time setup: `python3.12 -m venv film/.venv`, then `film/.venv/bin/pip install chatterbox-tts "setuptools<81"`.
   - **Fish Audio S2** (`--engine fish`) is a hosted API. It needs `FISH_API_KEY` in your environment or in `film/.env`.

   Each engine keeps its own takes, so you can switch engines without re-voicing. The output is `film/out/ep1/timeline.json`, which holds the start and end of every beat plus a per-frame loudness envelope. Characters move their bodies in time with that envelope while they talk. Add `--force` to re-voice all lines.
3. **Direction.** `src/film/ep1.ts` sets the staging (where characters walk and face), special moments (Elsie topples over, Evangelist points, Pliable hops) and the shot list. `src/film/engine.ts` is shared by all episodes. It covers actors, talking body language, occlusion-aware cameras, captions and music export.
4. **Preview.** Open `/film.html` on the dev server. Add `?t=100` to start at 100 s and press Space to pause.
5. **Render.** With the dev server running:

```bash
node film/render.mjs ep1 --url http://localhost:5173
```

The output is `film/out/ep1/ep1.mp4`: 1920×1080, 30 fps, with voices, a ducked music bed and burned-in captions.

`--sheet` writes contact sheets so you can review every shot quickly. `--from 38 --to 60` renders a test slice.

## Adding an episode

Copy `film/ep1/script.json` and `src/film/ep1.ts`, then build the new chapter's scene in place of `buildWorld`. Point `film.html` at the new module.
