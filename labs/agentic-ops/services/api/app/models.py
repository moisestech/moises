from __future__ import annotations

from enum import Enum
from typing import Any

from pydantic import BaseModel, Field


class Permission(str, Enum):
    READ = "READ"
    WRITE = "WRITE"
    EXTERNAL = "EXTERNAL"
    SENSITIVE = "SENSITIVE"


class ToolCall(BaseModel):
    name: str
    arguments: dict[str, Any] = Field(default_factory=dict)


class ToolResult(BaseModel):
    name: str
    ok: bool
    output: dict[str, Any] = Field(default_factory=dict)
    error: str | None = None


class SourceCard(BaseModel):
    document: str
    page: str | None = None
    confidence: float | None = None
    excerpt: str | None = None


class TimelineEvent(BaseModel):
    kind: str
    message: str
    tool: str | None = None
    sources: list[SourceCard] = Field(default_factory=list)


class RunStatus(str, Enum):
    planning = "planning"
    tooling = "tooling"
    awaiting_approval = "awaiting_approval"
    executing = "executing"
    completed = "completed"
    failed = "failed"
    revised = "revised"


class AgentRun(BaseModel):
    id: str
    brief: str
    status: RunStatus = RunStatus.planning
    plan: list[str] = Field(default_factory=list)
    events: list[TimelineEvent] = Field(default_factory=list)
    pending_write: ToolCall | None = None
    artifact: dict[str, Any] | None = None
    cost_tokens: int = 0


class StartRunRequest(BaseModel):
    brief: str
    scenario: str = "creative-program"
    demo: bool = True


class ApprovalRequest(BaseModel):
    run_id: str
    approve: bool
    note: str | None = None
