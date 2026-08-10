from __future__ import annotations

from ..models import ToolResult


def calculate_budget(max_budget: float = 2000.0, line_items: list[dict] | None = None) -> ToolResult:
    items = line_items or [
        {"name": "Facilitator honoraria", "amount": 900},
        {"name": "Materials / resin / filament", "amount": 420},
        {"name": "Software licenses (workshop)", "amount": 280},
        {"name": "Printing / wayfinding", "amount": 142},
    ]
    total = sum(float(i["amount"]) for i in items)
    return ToolResult(
        name="calculate_budget",
        ok=True,
        output={
            "max_budget": max_budget,
            "line_items": items,
            "estimated_total": total,
            "within_budget": total <= max_budget,
        },
    )
