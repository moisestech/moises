from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "services" / "api"))

from app.tools import dispatch_tool, requires_approval  # noqa: E402


def test_read_tools_ok():
    assert dispatch_tool("search_documents", {"query": "capacity"}).ok
    assert dispatch_tool("check_calendar", {"weeks": 6}).ok
    assert dispatch_tool("calculate_budget", {"max_budget": 2000}).output["within_budget"] is True


def test_write_requires_approval():
    assert requires_approval("manage_actions") is True
    assert requires_approval("search_documents") is False
