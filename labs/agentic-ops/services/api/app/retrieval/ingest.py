"""Ingest path stub — wires to chunker + embeddings when live."""

from __future__ import annotations


def ingest_document(path: str) -> dict:
    return {
        "path": path,
        "status": "queued",
        "note": "DEMO_MODE uses fixtures/corpus.json. Live ingest: parse → chunk → embed → pgvector.",
    }
