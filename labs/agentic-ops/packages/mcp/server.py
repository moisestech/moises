"""
Minimal MCP server exposing the four Agentic Ops tools.
Run: python -m packages.mcp.server  (from repo root with PYTHONPATH=.)
"""

from __future__ import annotations

import json
from typing import Any

# Local import path when running inside monorepo
try:
    from services.api.app.tools import TOOL_PERMISSIONS, dispatch_tool
except ImportError:  # pragma: no cover
    TOOL_PERMISSIONS = {}
    def dispatch_tool(name: str, arguments: dict) -> Any:  # type: ignore
        raise RuntimeError("API tools not on PYTHONPATH")


TOOLS = [
    {
        "name": "search_documents",
        "description": "RAG over organizational files",
        "permission": "READ",
        "inputSchema": {
            "type": "object",
            "properties": {"query": {"type": "string"}, "top_k": {"type": "integer"}},
            "required": ["query"],
        },
    },
    {
        "name": "check_calendar",
        "description": "Determine availability and scheduling constraints",
        "permission": "READ",
        "inputSchema": {
            "type": "object",
            "properties": {
                "weeks": {"type": "integer"},
                "constraints": {"type": "array", "items": {"type": "string"}},
            },
        },
    },
    {
        "name": "calculate_budget",
        "description": "Structured financial and resource calculations",
        "permission": "READ",
        "inputSchema": {
            "type": "object",
            "properties": {
                "max_budget": {"type": "number"},
                "line_items": {"type": "array"},
            },
        },
    },
    {
        "name": "manage_actions",
        "description": "Read/create/update implementation tasks",
        "permission": "WRITE",
        "inputSchema": {
            "type": "object",
            "properties": {
                "action": {"type": "string"},
                "tasks": {"type": "array"},
            },
        },
    },
]


def list_tools() -> list[dict]:
    return TOOLS


def call_tool(name: str, arguments: dict | None = None) -> dict:
    result = dispatch_tool(name, arguments or {})
    return result.model_dump() if hasattr(result, "model_dump") else dict(result)


if __name__ == "__main__":
    print(json.dumps({"tools": list_tools()}, indent=2))
