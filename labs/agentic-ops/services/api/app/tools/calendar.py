from __future__ import annotations

from ..models import ToolResult


def check_calendar(weeks: int = 6, constraints: list[str] | None = None) -> ToolResult:
    # Fixture-backed availability for creative-program scenario
    candidates = [
        {"start": "2026-09-08", "end": "2026-10-17", "label": "Tue/Thu open-lab aligned"},
        {"start": "2026-09-15", "end": "2026-10-24", "label": "Workshop series block"},
        {"start": "2026-10-01", "end": "2026-11-12", "label": "Fallback window"},
    ]
    return ToolResult(
        name="check_calendar",
        ok=True,
        output={"weeks": weeks, "constraints": constraints or [], "candidates": candidates},
    )
