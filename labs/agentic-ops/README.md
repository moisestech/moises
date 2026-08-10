# Agentic Ops

**An auditable multi-tool agent runtime for organizational workflows.**

> Portable scaffold living in `moises/labs/agentic-ops` until extracted to
> [`github.com/moisestech/agentic-ops`](https://github.com/moisestech/agentic-ops).
> Site case study: [moises.tech/projects/agentic-ops](https://moises.tech/projects/agentic-ops).

This is **not a chatbot**.

```text
User Brief → Planner → Tools → State → Retrieval → Synthesis → HUMAN APPROVAL → Execute
```

## V1 domain

**Creative Institution Program Launch** — program brief, equipment, calendar, staff capacity, budget, guidelines → requirements, schedule, budget, resource plan, risks, tasks, communications.

## Four tools (MCP)

| Tool | Permission | Purpose |
|------|------------|---------|
| `search_documents` | READ | RAG over organizational files |
| `check_calendar` | READ | Availability / constraints |
| `calculate_budget` | READ | Structured financial calculations |
| `manage_actions` | WRITE | Create / update implementation tasks |

WRITE / EXTERNAL / SENSITIVE require human approval.

## Demo mode

Recruiters should use **Replay sample workflow** — a stored deterministic run — without API keys.

```bash
# Live (developers)
cp .env.example .env
docker compose up
# open http://localhost:3000

# Demo replay (no secrets)
DEMO_MODE=1 docker compose up
```

## Application-ready gates

See [docs/architecture.md](docs/architecture.md). Until gates clear, moises.tech marks RAG/MCP/agents as **Building**, not Proven.

## Layout

```text
apps/web          Next.js control UI (timeline, approval, sources)
services/api      FastAPI orchestrator + tools + retrieval
packages/mcp      MCP server exposing the four tools
evals/            Synthetic regression cases
scenarios/        Domain packs (creative-program, …)
fixtures/         Sample docs / calendars / budgets
```

## License

MIT — see LICENSE.
