from __future__ import annotations

import json
import uuid
from pathlib import Path

from .models import (
    AgentRun,
    ApprovalRequest,
    RunStatus,
    StartRunRequest,
    TimelineEvent,
    ToolCall,
)
from .state import store
from .tools import dispatch_tool, requires_approval

DEMO_RUN = Path(__file__).resolve().parents[3] / "fixtures" / "demo-run.json"


def _new_id() -> str:
    return f"run-{uuid.uuid4().hex[:8]}"


def load_demo_run() -> AgentRun:
    data = json.loads(DEMO_RUN.read_text())
    return AgentRun.model_validate(data)


def start_run(req: StartRunRequest) -> AgentRun:
    if req.demo:
        run = load_demo_run()
        run.id = _new_id()
        # Stop before write so UI can show approval gate
        if run.status == RunStatus.completed:
            run.status = RunStatus.awaiting_approval
        return store.save(run)

    run = AgentRun(id=_new_id(), brief=req.brief, status=RunStatus.planning)
    store.save(run)
    store.append_event(
        run.id,
        TimelineEvent(kind="status", message="Brief analyzed"),
    )

    # Deterministic planning for creative-program without LLM key
    plan = [
        "Extract requirements from brief",
        "search_documents for guidelines and capacity",
        "check_calendar for six-week windows",
        "calculate_budget against max envelope",
        "Request approval before manage_actions",
    ]
    run = store.get(run.id)  # type: ignore[assignment]
    run.plan = plan
    store.save(run)
    store.append_event(run.id, TimelineEvent(kind="status", message=f"{len(plan)} steps planned"))

    # Tool sequence
    for name, args in [
        ("search_documents", {"query": "workshop capacity budget equipment"}),
        ("check_calendar", {"weeks": 6}),
        ("calculate_budget", {"max_budget": 2000}),
    ]:
        store.set_status(run.id, RunStatus.tooling)
        store.append_event(run.id, TimelineEvent(kind="tool", message=f"→ {name}", tool=name))
        result = dispatch_tool(name, args)
        msg = f"{name} ok" if result.ok else f"{name} failed: {result.error}"
        sources = []
        if name == "search_documents" and result.ok:
            from .models import SourceCard

            sources = [SourceCard.model_validate(h) for h in result.output.get("hits", [])]
            msg = f"{result.output.get('count', 0)} relevant documents retrieved"
        if name == "check_calendar" and result.ok:
            msg = f"{len(result.output.get('candidates', []))} candidate dates found"
        if name == "calculate_budget" and result.ok:
            msg = f"Estimated total: ${result.output.get('estimated_total')}"
        store.append_event(
            run.id,
            TimelineEvent(kind="tool_result", message=msg, tool=name, sources=sources),
        )

    write = ToolCall(
        name="manage_actions",
        arguments={
            "action": "create",
            "tasks": [
                {"title": "Confirm workshop capacity (8)", "owner": "TD"},
                {"title": "Lock Tue/Thu schedule block", "owner": "Director"},
                {"title": "Finalize materials PO under $2,000", "owner": "Ops"},
            ],
        },
    )
    store.set_pending_write(run.id, write)
    store.append_event(
        run.id,
        TimelineEvent(kind="approval", message="! Approval required before manage_actions"),
    )
    return store.set_status(run.id, RunStatus.awaiting_approval)


def apply_approval(req: ApprovalRequest) -> AgentRun:
    run = store.get(req.run_id)
    if not run:
        raise KeyError(req.run_id)
    if run.status != RunStatus.awaiting_approval or not run.pending_write:
        return run

    if not req.approve:
        store.append_event(run.id, TimelineEvent(kind="status", message="USER REVISED — write cancelled"))
        store.set_pending_write(run.id, None)
        return store.set_status(run.id, RunStatus.revised)

    call = run.pending_write
    if requires_approval(call.name):
        store.append_event(run.id, TimelineEvent(kind="status", message="USER APPROVED"))
        store.set_status(run.id, RunStatus.executing)
        store.append_event(
            run.id,
            TimelineEvent(kind="tool", message=f"→ {call.name}", tool=call.name),
        )
        result = dispatch_tool(call.name, call.arguments)
        created = result.output.get("created", 0)
        store.append_event(
            run.id,
            TimelineEvent(
                kind="tool_result",
                message=f"{created} implementation tasks created",
                tool=call.name,
            ),
        )
        run = store.get(run.id)  # type: ignore[assignment]
        run.artifact = {
            "tasks_created": created,
            "note": req.note,
            "summary": "Six-week creative technology program plan ready for handoff.",
        }
        store.save(run)
        store.set_pending_write(run.id, None)
        store.append_event(run.id, TimelineEvent(kind="status", message="✓ Workflow completed"))
        return store.set_status(run.id, RunStatus.completed)

    return run
