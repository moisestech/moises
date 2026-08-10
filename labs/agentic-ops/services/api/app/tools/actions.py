from __future__ import annotations

from ..models import ToolResult

_TASKS: list[dict] = []


def manage_actions(action: str = "list", tasks: list[dict] | None = None) -> ToolResult:
    global _TASKS
    if action == "create" and tasks:
        _TASKS.extend(tasks)
        return ToolResult(
            name="manage_actions",
            ok=True,
            output={"created": len(tasks), "total": len(_TASKS), "tasks": _TASKS[-len(tasks) :]},
        )
    if action == "clear":
        _TASKS = []
        return ToolResult(name="manage_actions", ok=True, output={"total": 0})
    return ToolResult(name="manage_actions", ok=True, output={"total": len(_TASKS), "tasks": list(_TASKS)})
