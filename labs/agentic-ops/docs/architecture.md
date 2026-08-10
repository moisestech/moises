# Agentic Ops architecture

## Goal

Auditable multi-tool agent runtime for organizational workflows — not a chatbot.

## Runtime flow

```text
User Brief
    │
    ▼
 Planner  ──► Structured Plan
    │
    ├─► search_documents (READ)
    ├─► check_calendar   (READ)
    ├─► calculate_budget (READ)
    │
    ▼
 Agent State + Retrieval / Memory
    │
    ▼
 Decision / Synthesis
    │
    ▼
 HUMAN APPROVAL  (required for WRITE / EXTERNAL / SENSITIVE)
    │
    ├─► Execute ──► manage_actions (WRITE)
    └─► Revise
```

## Packages

| Path | Role |
|------|------|
| `services/api` | FastAPI orchestrator, state machine, tools, retrieval |
| `packages/mcp` | MCP server exposing the four tools |
| `apps/web` | Operational timeline UI (no hidden chain-of-thought) |
| `evals/` | Behavioral regression suite |
| `scenarios/` | Domain packs (tools, fixtures, instructions) |

## Security model

Every tool declares a permission: `READ` | `WRITE` | `EXTERNAL` | `SENSITIVE`.
The orchestrator blocks WRITE/EXTERNAL/SENSITIVE until an approval event is recorded.

## RAG path

Document → Parser → Chunker → Embedding → pgvector → Retriever → Agent Context → Source cards in UI.

## Demo mode

`DEMO_MODE=1` loads `fixtures/demo-run.json` and replays a deterministic timeline.
No API keys. No network tool calls.

## Application-ready gates

- [ ] One real workflow completes end-to-end
- [ ] Agent chooses and sequences multiple tools
- [ ] Tools exposed through MCP
- [ ] Retrieval grounding with source cards
- [ ] Write ops require approval
- [ ] Errors do not destroy the run
- [ ] Automated evals
- [ ] Legible timeline UI
- [ ] Public demo replay
- [ ] GitHub Actions + tests
- [ ] Case study on moises.tech (shell live; Proven after gates)

## Extract to standalone repo

```bash
# From moises root — when ready for github.com/moisestech/agentic-ops
git subtree split -P labs/agentic-ops -b agentic-ops-extract
# push branch to new remote
```
