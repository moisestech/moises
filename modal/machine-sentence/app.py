"""
Machine Sentence No. 1 — Modal body-score endpoint skeleton.

Never returns motor commands. Clamps scores to [0, 1].

Setup:
  pip install modal
  modal token new

Develop:
  modal serve modal/machine-sentence/app.py

Deploy:
  modal deploy modal/machine-sentence/app.py

Then set on Vercel / .env.local:
  MODAL_INFERENCE_URL=<https endpoint from deploy>
  MODAL_INFERENCE_TOKEN=<optional bearer>

Security:
  - Prefer Modal proxy auth or a shared bearer token
  - Do not expose tokens to the browser
  - Next.js /api/grant/machine-sentence/score is the only client entry

Next steps:
  - Swap heuristic scoring for a small open-weight embedding + linear head
  - Add image / texture path only after body scoring is reliable
"""

from __future__ import annotations

import hashlib
import time
from typing import Literal

import modal

app = modal.App("machine-sentence-body-score")

State = Literal[
    "column",
    "sentence",
    "aperture",
    "witness",
    "refusal",
    "compression",
    "chorus",
    "fault_line",
]


def _unit(h: int, salt: int) -> float:
    x = (h ^ salt) * 2654435761 & 0xFFFFFFFF
    return (x % 1000) / 1000.0


def _pick_state(h: int, scores: dict[str, float]) -> State:
    if scores["contradiction"] > 0.72:
        return "chorus"
    if scores["attention"] > 0.7 and scores["openness"] > 0.55:
        return "witness"
    if scores["openness"] > 0.68:
        return "aperture"
    if scores["compression"] > 0.65:
        return "compression"
    if scores["coherence"] < 0.35:
        return "fault_line"
    if scores["attention"] < 0.3:
        return "refusal"
    if scores["coherence"] > 0.7 and scores["openness"] < 0.4:
        return "column"
    if scores["openness"] > 0.45:
        return "sentence"
    states: list[State] = [
        "column",
        "sentence",
        "aperture",
        "witness",
        "refusal",
        "compression",
        "chorus",
        "fault_line",
    ]
    return states[h % len(states)]


def score_text(text: str) -> dict:
    started = time.time()
    normalized = " ".join(text.strip().lower().split())
    if not normalized:
        raise ValueError("empty")
    if len(normalized) > 500:
        raise ValueError("too_large")
    h = int(hashlib.md5(normalized.encode("utf-8")).hexdigest()[:8], 16)
    scores = {
        "openness": _unit(h, 1),
        "coherence": _unit(h, 2),
        "attention": _unit(h, 3),
        "contradiction": _unit(h, 4),
        "compression": _unit(h, 5),
        "organicMachine": _unit(h, 6),
    }
    return {
        **scores,
        "state": _pick_state(h, scores),
        "mode": "modal",
        "model": "modal-hash-v1",
        "latencyMs": int((time.time() - started) * 1000),
    }


@app.function()
@modal.fastapi_endpoint(method="POST")
def body_score(item: dict):
    """POST JSON { \"text\": string } → BodyScore. No motor fields."""
    text = str(item.get("text", ""))
    try:
        return score_text(text)
    except ValueError as exc:
        return {"error": str(exc)}
