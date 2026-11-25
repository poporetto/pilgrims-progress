"""Batch Chatterbox TTS worker used by film/voices.mjs (--engine chatterbox).

Reads a JSON list of jobs on stdin:
  [{"text": ..., "ref": "voice sample.wav", "out": "line.wav",
    "exaggeration": 0.5, "cfg": 0.5, "temperature": 0.8, "seed": 1}]
and writes one WAV per job. The model loads once per batch.
"""
import json
import sys

import torch
import torchaudio

from chatterbox.tts import ChatterboxTTS

device = "mps" if torch.backends.mps.is_available() else "cpu"

# Checkpoints were saved on CUDA; remap them so they load on MPS/CPU.
_load = torch.load
torch.load = lambda *a, **k: _load(*a, **{**k, "map_location": torch.device(device)})

model = ChatterboxTTS.from_pretrained(device=device)
jobs = json.load(sys.stdin)
for job in jobs:
    torch.manual_seed(job.get("seed", 1))
    wav = model.generate(
        job["text"],
        audio_prompt_path=job["ref"],
        exaggeration=job.get("exaggeration", 0.5),
        cfg_weight=job.get("cfg", 0.5),
        temperature=job.get("temperature", 0.8),
    )
    torchaudio.save(job["out"], wav.cpu(), model.sr)
    print(f"voiced {job['out']}", flush=True)
