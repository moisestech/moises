"""Fixture-backed retrieval. Swap for pgvector embeddings when DEMO_MODE=0."""

from __future__ import annotations

import json
from pathlib import Path

FIXTURES = Path(__file__).resolve().parents[4] / "fixtures" / "corpus.json"


def _load_corpus() -> list[dict]:
    if FIXTURES.exists():
        return json.loads(FIXTURES.read_text())
    return [
        {
            "document": "digital-lab-program-guidelines.pdf",
            "page": "04",
            "confidence": 0.91,
            "excerpt": "Workshop capacity should remain at eight participants for resin printing safety.",
            "keywords": ["capacity", "workshop", "eight", "resin"],
        },
        {
            "document": "program-budget-policy.md",
            "page": "1",
            "confidence": 0.88,
            "excerpt": "Pilot programs must stay within the approved $2,000 materials and facilitation envelope.",
            "keywords": ["budget", "2000", "pilot"],
        },
        {
            "document": "equipment-inventory.csv",
            "page": None,
            "confidence": 0.84,
            "excerpt": "2× resin printers, 4× workstations, 1× SmartSign player reserved for lobby.",
            "keywords": ["equipment", "printer", "smartsign"],
        },
        {
            "document": "staff-capacity-notes.md",
            "page": "2",
            "confidence": 0.8,
            "excerpt": "Technical Director available Tue/Thu open hours; Director of Digital Lab leads curriculum.",
            "keywords": ["staff", "capacity", "tuesday", "thursday"],
        },
    ]


def search(query: str, top_k: int = 4) -> list[dict]:
    corpus = _load_corpus()
    q = query.lower()
    scored: list[tuple[float, dict]] = []
    for doc in corpus:
        keywords = doc.get("keywords") or []
        hit = sum(1 for k in keywords if k.lower() in q) + (1 if any(w in q for w in doc["excerpt"].lower().split()[:6]) else 0)
        score = float(doc.get("confidence") or 0.5) + 0.05 * hit
        scored.append((score, doc))
    scored.sort(key=lambda x: x[0], reverse=True)
    return [
        {
            "document": d["document"],
            "page": d.get("page"),
            "confidence": round(s, 2),
            "excerpt": d.get("excerpt"),
        }
        for s, d in scored[:top_k]
    ]
