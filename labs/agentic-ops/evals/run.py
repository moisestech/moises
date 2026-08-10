#!/usr/bin/env python3
"""Lightweight eval runner for Agentic Ops behavioral regressions."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "services" / "api"))

from app.models import StartRunRequest  # noqa: E402
from app.orchestrator import start_run  # noqa: E402
from app.tools import dispatch_tool  # noqa: E402


def run_cases() -> int:
    cases = json.loads((Path(__file__).parent / "cases.json").read_text())
    failures = 0
    for case in cases:
        print(f"CASE {case['id']}")
        run = start_run(
            StartRunRequest(brief=case["task"], scenario="creative-program", demo=False)
        )
        tools_used = [e.tool for e in run.events if e.tool]
        for expected in case.get("expected_tools", []):
            if expected not in tools_used:
                print(f"  FAIL missing tool {expected}")
                failures += 1
            else:
                print(f"  OK tool {expected}")

        if case.get("require_approval_before_write"):
            if run.status.value != "awaiting_approval":
                print(f"  FAIL expected awaiting_approval got {run.status}")
                failures += 1
            else:
                print("  OK approval gate")

        if "max_budget" in case.get("constraints", {}):
            budget = dispatch_tool("calculate_budget", {"max_budget": case["constraints"]["max_budget"]})
            if not budget.output.get("within_budget"):
                print("  FAIL budget exceeded")
                failures += 1
            else:
                print("  OK budget constraint")

    print(f"\n{len(cases) - failures}/{len(cases)} checks passed (approx)")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(run_cases())
