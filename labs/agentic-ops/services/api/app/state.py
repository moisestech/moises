from __future__ import annotations

from copy import deepcopy

from .models import AgentRun, RunStatus, TimelineEvent, ToolCall


class RunStore:
    """In-memory run store — replace with Postgres in production path."""

    def __init__(self) -> None:
        self._runs: dict[str, AgentRun] = {}

    def save(self, run: AgentRun) -> AgentRun:
        self._runs[run.id] = deepcopy(run)
        return self.get(run.id)  # type: ignore[return-value]

    def get(self, run_id: str) -> AgentRun | None:
        run = self._runs.get(run_id)
        return deepcopy(run) if run else None

    def append_event(self, run_id: str, event: TimelineEvent) -> AgentRun:
        run = self._runs[run_id]
        run.events.append(event)
        return self.save(run)

    def set_status(self, run_id: str, status: RunStatus) -> AgentRun:
        run = self._runs[run_id]
        run.status = status
        return self.save(run)

    def set_pending_write(self, run_id: str, call: ToolCall | None) -> AgentRun:
        run = self._runs[run_id]
        run.pending_write = call
        return self.save(run)


store = RunStore()
