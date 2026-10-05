/**
 * Public Agentic Ops case — reference implementation, not a customer product.
 * Inspect github.com/moisestech/agentic-ops; labs/agentic-ops is an older embed.
 */

import { AGENTIC_OPS_BLOB, AGENTIC_OPS_REPO } from '@/content/opportunities/fdeEvidenceRegistry';

export const agenticOpsProject = {
  slug: 'agentic-ops',
  seo: {
    title: 'Agentic Ops — LangGraph Reference Runtime | Moises Sanabria',
    description:
      'A governed agent reference: LangGraph StateGraph, FastAPI, permissioned tools, keyword retrieval with citations, human approval, and fake-provider evals. MCP-shaped stdio — not an official MCP SDK server. Not a hosted customer product.',
  },
  title: 'Agentic Ops',
  category: 'Reference implementation · Python / FastAPI / LangGraph',
  status: 'reference' as const,
  subtitle: 'A governed agent for organizational work: retrieve, cite, pause, record.',
  whatItIs:
    'Not a chatbot wrapper. Someone asks a handbook question or a program-launch brief. The runtime retrieves approved files, calls permissioned tools, drafts with citations, evaluates grounding, and stops before any write. A person approves, edits, or rejects. An approved WRITE files one internal task.',
  domain:
    'Creative Institution Program Launch: program brief, equipment, calendar, staff capacity, budget, and guidelines → requirements, schedule, budget, resource plan, risks, tasks, and communications. Public/synthetic corpus only. Nothing is emailed.',
  whatIBuilt:
    'A Python 3.11 FastAPI service with a LangGraph StateGraph compiled on MemorySaver, a four-tool catalog with READ vs WRITE fences, keyword retrieval plus citation checks, golden-set evals on a fake provider, a Next.js approval console, and an MCP-shaped stdio tool server (newline JSON, no official MCP SDK). Live OpenAI / Anthropic / Bedrock adapters are present as stubs and raise if selected. A Postgres checkpointer and hybrid / pgvector retrieval are documented next steps, not implemented.',
  stack: [
    'Python',
    'FastAPI',
    'LangGraph',
    'TypeScript',
    'Next.js',
    'Docker',
    'Evals',
    'MCP-shaped stdio',
  ],
  tools: [
    {
      name: 'search_documents',
      purpose: 'Keyword retrieval over the approved org corpus, with source cards',
      permission: 'READ' as const,
    },
    {
      name: 'check_calendar',
      purpose: 'Availability and scheduling constraints',
      permission: 'READ' as const,
    },
    {
      name: 'calculate_budget',
      purpose: 'Structured financial / resource calculations',
      permission: 'READ' as const,
    },
    {
      name: 'manage_actions',
      purpose: 'Create or update implementation tasks — pending until a human decides',
      permission: 'WRITE' as const,
    },
  ],
  flow: [
    'Brief',
    'Retrieve',
    'Tools',
    'Draft and cite',
    'Evaluate',
    'Await approval or respond',
    'Execute write',
  ],
  gates: [
    { id: 'e2e', label: 'Synthetic program-launch brief completes on the fake provider', done: true },
    { id: 'graph', label: 'LangGraph StateGraph with conditional routing after evaluate', done: true },
    { id: 'agentic', label: 'Heuristic multi-tool sequence — not an LLM planner node', done: true },
    { id: 'mcp', label: 'MCP-shaped stdio + HTTP tool surface (not the official MCP SDK)', done: true },
    { id: 'rag', label: 'Keyword retrieval with citations (hybrid / pgvector is next)', done: true },
    { id: 'hitl', label: 'WRITE tools interrupt until a human decides', done: true },
    { id: 'reliability', label: 'Postgres checkpointer survives an agent restart', done: false },
    { id: 'evals', label: 'Golden-set / offline fake-provider evals in CI', done: true },
    { id: 'ui', label: 'Approval console with a run timeline', done: true },
    { id: 'ci', label: 'GitHub Actions verify + recruiter gate', done: true },
    { id: 'demo', label: 'Hosted public demo (no local Docker)', done: false },
    { id: 'official-mcp', label: 'Official MCP SDK over the same permissioned tools', done: false },
    { id: 'live-providers', label: 'Live OpenAI / Anthropic / Bedrock path', done: false },
  ],
  whyItMatters:
    'One repository shows the system underneath framework names: state, tools, permissions, retrieval, evaluation, human review, and fail-closed writes. Frameworks change. This shape does not.',
  imageSrc:
    'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
  imageAlt: 'Stand-in frame for Agentic Ops. Console screenshots live in the GitHub repo, not in this image.',
  repoUrl: AGENTIC_OPS_REPO,
  inspectLinks: [
    {
      id: 'graph',
      title: 'StateGraph construction',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/graph/__init__.py`,
      body: 'START → retrieve → tools → draft → evaluate → await_approval | respond → execute.',
    },
    {
      id: 'nodes',
      title: 'Node implementations',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/graph/nodes.py`,
      body: 'retrieve_node, tools_node, draft_node, evaluate_node, await_approval_node, execute_node.',
    },
    {
      id: 'tools',
      title: 'Permissioned tool catalog',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/tools/catalog.py`,
      body: 'READ tools run. WRITE manage_actions returns pending_approval until execute_node.',
    },
    {
      id: 'mcp',
      title: 'MCP-shaped stdio server',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/mcp.py`,
      body: 'Tool discovery and invocation over newline JSON. Not the official MCP SDK.',
    },
    {
      id: 'eval',
      title: 'Grounding / fail-closed eval',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/evals/grounding.py`,
      body: 'Ungrounded drafts require approval. Nobel-trap cases must abstain.',
    },
    {
      id: 'api',
      title: 'FastAPI routes',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/main.py`,
      body: 'Runs, tool HTTP mirror, approval decision. Decision route has no AuthN in v0.',
    },
  ],
  demoNote:
    'Clone the repo and run make verify, then the local console. Fake provider — no API keys. The checkpointer is MemorySaver, so a restart does not resume a paused run. There is no hosted public demo yet.',
  related: [
    { label: 'Forward-Deployed Systems', href: '/forward-deployed' },
    { label: 'Agentic Evidence Pipeline', href: '/workshop/agentic-evidence-pipeline' },
    { label: 'Capabilities', href: '/capabilities#ai-engineering' },
    { label: 'AI Engineering packet', href: '/ai-engineering' },
  ],
};
