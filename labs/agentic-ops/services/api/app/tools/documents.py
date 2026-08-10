from __future__ import annotations

from ..models import SourceCard, ToolResult
from ..retrieval.search import search as retrieval_search


def search_documents(query: str, top_k: int = 4) -> ToolResult:
    hits = retrieval_search(query=query, top_k=top_k)
    sources = [
        SourceCard(
            document=h["document"],
            page=h.get("page"),
            confidence=h.get("confidence"),
            excerpt=h.get("excerpt"),
        )
        for h in hits
    ]
    return ToolResult(
        name="search_documents",
        ok=True,
        output={"hits": [s.model_dump() for s in sources], "count": len(sources)},
    )
