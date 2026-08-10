from __future__ import annotations

from ..models import Permission, ToolResult
from . import actions, budget, calendar, documents

TOOL_PERMISSIONS: dict[str, Permission] = {
    "search_documents": Permission.READ,
    "check_calendar": Permission.READ,
    "calculate_budget": Permission.READ,
    "manage_actions": Permission.WRITE,
}

REQUIRES_APPROVAL = {Permission.WRITE, Permission.EXTERNAL, Permission.SENSITIVE}


def permission_for(tool_name: str) -> Permission:
    return TOOL_PERMISSIONS.get(tool_name, Permission.SENSITIVE)


def requires_approval(tool_name: str) -> bool:
    return permission_for(tool_name) in REQUIRES_APPROVAL


def dispatch_tool(name: str, arguments: dict) -> ToolResult:
    if name == "search_documents":
        return documents.search_documents(**arguments)
    if name == "check_calendar":
        return calendar.check_calendar(**arguments)
    if name == "calculate_budget":
        return budget.calculate_budget(**arguments)
    if name == "manage_actions":
        return actions.manage_actions(**arguments)
    return ToolResult(name=name, ok=False, error=f"Unknown tool: {name}")
