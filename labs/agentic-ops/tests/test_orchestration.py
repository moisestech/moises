from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "services" / "api"))

from app.models import ApprovalRequest, StartRunRequest  # noqa: E402
from app.orchestrator import apply_approval, start_run  # noqa: E402


def test_demo_run_awaits_approval():
    run = start_run(StartRunRequest(brief="demo", demo=True))
    assert run.status.value == "awaiting_approval"
    assert run.pending_write is not None


def test_live_fixture_path_then_approve():
    run = start_run(
        StartRunRequest(
            brief="Prepare a six-week creative technology program under $2000.",
            demo=False,
        )
    )
    assert run.status.value == "awaiting_approval"
    done = apply_approval(ApprovalRequest(run_id=run.id, approve=True))
    assert done.status.value == "completed"
    assert done.artifact is not None
