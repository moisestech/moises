/**
 * Extra FDE flagship sections that do not belong on the Deloitte overlay.
 * Status labels are evidence, not aspiration.
 */

import type { ArchitectureFlowData } from '@/content/opportunities/systemsDossier';
import type { CodeInspectBlock, HonestyOverlay, ProcessStep } from '@/content/opportunities/types';
import type { LifecycleStage } from '@/content/opportunities/lifecycle';
import { AEP_BLOB, AEP_REPO, AGENTIC_OPS_BLOB, AGENTIC_OPS_REPO } from '@/content/opportunities/fdeEvidenceRegistry';

export const ANATOMY_STATUSES = [
  'shipped',
  'reference',
  'prototype',
  'next',
  'not_claimed',
] as const;

export type AnatomyStatus = (typeof ANATOMY_STATUSES)[number];

export const ANATOMY_STATUS_LABEL: Record<AnatomyStatus, string> = {
  shipped: 'Shipped',
  reference: 'Implemented in reference system',
  prototype: 'Prototype',
  next: 'Next',
  not_claimed: 'Not claimed',
};

export type AnatomyLayer = {
  id: string;
  n: string;
  title: string;
  body: string;
  status: AnatomyStatus;
  source?: string;
};

export const FDE_ANATOMY_LAYERS: AnatomyLayer[] = [
  {
    id: 'workflow',
    n: '01',
    title: 'Organizational workflow',
    body: 'A real brief: handbook question or six-week program launch. Owner, data, and write-cost are named before tools.',
    status: 'reference',
    source: 'Agentic Ops domain pack',
  },
  {
    id: 'api',
    n: '02',
    title: 'API layer',
    body: 'FastAPI runs, tools, and approval decisions. OpenAPI is exported from the service.',
    status: 'reference',
    source: 'agentic_ops/main.py',
  },
  {
    id: 'auth',
    n: '03',
    title: 'Identity / auth',
    body: 'Production identity is not on the Agentic Ops decision route. Do not read this page as an Auth0 or RLS case.',
    status: 'next',
  },
  {
    id: 'state',
    n: '04',
    title: 'Agent state',
    body: 'LangGraph AgentState. The graph compiles with MemorySaver. Pause and resume stay inside one process. A restart does not resume the run.',
    status: 'reference',
    source: 'graph/__init__.py',
  },
  {
    id: 'retrieval',
    n: '05',
    title: 'Retrieval',
    body: 'Agentic Ops: keyword retrieval with source cards. AEP: Postgres search path labeled hybrid in the scorecard — inspect search.ts; do not treat Agentic Ops as hybrid.',
    status: 'reference',
    source: 'retrieval/keyword.py · AEP search.ts',
  },
  {
    id: 'provider',
    n: '06',
    title: 'Model / provider',
    body: 'Fake provider is the CI default. Live OpenAI / Anthropic / Bedrock adapters raise if selected. No “deployed on Claude” claim.',
    status: 'reference',
    source: 'providers/fake.py',
  },
  {
    id: 'tools',
    n: '07',
    title: 'Tool registry',
    body: 'Four tools: search_documents, check_calendar, calculate_budget, manage_actions.',
    status: 'reference',
  },
  {
    id: 'permissions',
    n: '08',
    title: 'Permission layer',
    body: 'READ vs WRITE. manage_actions returns pending_approval until a human decision reaches execute_node.',
    status: 'reference',
  },
  {
    id: 'external',
    n: '09',
    title: 'External systems',
    body: 'No email, no calendar invites, no purchases. Writes are an internal task ledger. Playwire and Bookleggers are separate production integrations.',
    status: 'shipped',
    source: 'Playwire · Bookleggers — not this runtime',
  },
  {
    id: 'eval',
    n: '10',
    title: 'Evaluator / policy',
    body: 'Grounding checks and golden-set evals. Ungrounded answers fail closed or pause.',
    status: 'reference',
  },
  {
    id: 'hitl',
    n: '11',
    title: 'HITL gate',
    body: 'langgraph.types.interrupt on writes. AEP persists assessment state across a review pause.',
    status: 'reference',
    source: 'AEP run.ts · Ops await_approval_node',
  },
  {
    id: 'audit',
    n: '12',
    title: 'Persistence / audit',
    body: 'Run timeline, tool calls, citations, approval state. AEP keeps an append-only review trail in the TypeScript reference.',
    status: 'reference',
  },
  {
    id: 'console',
    n: '13',
    title: 'Operator console',
    body: 'Next.js /console: run the brief, see stages, approve or reject. Local, not hosted.',
    status: 'reference',
  },
  {
    id: 'obs',
    n: '14',
    title: 'Observability',
    body: 'Inspector / timeline in-repo. OpenTelemetry export is not claimed as measured.',
    status: 'next',
  },
];

export const FDE_RUNTIME_ARCHITECTURE: ArchitectureFlowData = {
  title: 'Agentic Ops graph',
  subtitle: 'Why LangGraph: conditional routing after evaluate, and a first-class interrupt for human approval. The checkpointer is MemorySaver.',
  disclaimer:
    'Reference implementation on a fake provider. Heuristic tool choice — not an LLM planner node. Keyword retrieval, not hybrid.',
  syntheticLabel: 'Synthetic / fixture corpus',
  scenariosLabel: 'Walk a path',
  stages: [
    {
      id: 'retrieve',
      title: 'Retrieve',
      nodes: [{ id: 'retrieve-node', label: 'Approved records' }],
    },
    {
      id: 'tools',
      title: 'Tools',
      nodes: [
        { id: 'read-tools', label: 'READ tools' },
        { id: 'write-fence', label: 'WRITE fenced' },
      ],
    },
    {
      id: 'draft',
      title: 'Draft',
      nodes: [{ id: 'draft-cite', label: 'Draft + cite' }],
    },
    {
      id: 'evaluate',
      title: 'Evaluate',
      nodes: [{ id: 'grounding', label: 'Grounding gate' }],
    },
    {
      id: 'gate',
      title: 'Gate',
      nodes: [
        { id: 'respond', label: 'Respond' },
        { id: 'pause', label: 'Await approval' },
      ],
    },
    {
      id: 'execute',
      title: 'Record',
      nodes: [{ id: 'execute-node', label: 'Internal task' }],
    },
  ],
  scenarios: [
    {
      id: 'read-path',
      question: 'Handbook question with evidence in the corpus',
      stageIds: ['retrieve', 'tools', 'draft', 'evaluate', 'gate'],
      nodeIds: ['retrieve-node', 'read-tools', 'draft-cite', 'grounding', 'respond'],
      summary: 'No WRITE. Evaluate routes to respond. The answer cites sources or abstains.',
    },
    {
      id: 'write-path',
      question: 'Program launch that would create a task',
      stageIds: ['retrieve', 'tools', 'draft', 'evaluate', 'gate', 'execute'],
      nodeIds: ['retrieve-node', 'write-fence', 'draft-cite', 'grounding', 'pause', 'execute-node'],
      summary: 'evaluate routes to await_approval. execute_node runs only after a human decision.',
    },
  ],
};

export type TechMatrixRow = {
  id: string;
  category: string;
  items: { term: string; note: string; status: AnatomyStatus }[];
};

export const FDE_TECH_MATRIX: TechMatrixRow[] = [
  {
    id: 'runtime',
    category: 'Agent runtime',
    items: [
      { term: 'LangGraph / StateGraph', note: 'Agentic Ops graph + interrupt', status: 'reference' },
      { term: 'Tool / function calling', note: 'Four-tool catalog, heuristic sequencing', status: 'reference' },
      { term: 'HITL', note: 'WRITE interrupt; AEP persisted review', status: 'reference' },
      { term: 'Checkpointing', note: 'LangGraph MemorySaver in Agentic Ops. Postgres restart survival is next.', status: 'reference' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    items: [
      { term: 'Python', note: 'Agentic Ops 3.11+ service', status: 'reference' },
      { term: 'FastAPI', note: 'Runs, tools, decisions, OpenAPI', status: 'reference' },
      { term: 'TypeScript / Node', note: 'AEP, this site, Field Kit, Lore product surfaces', status: 'shipped' },
      { term: 'REST', note: 'FastAPI + product APIs', status: 'shipped' },
      { term: 'GraphQL', note: 'ICA Miami vendor/context — not this agent runtime', status: 'shipped' },
    ],
  },
  {
    id: 'data',
    category: 'Retrieval / data',
    items: [
      { term: 'Keyword retrieval', note: 'Agentic Ops corpus search', status: 'reference' },
      { term: 'Hybrid retrieval', note: 'AEP search.ts — inspect; not Agentic Ops', status: 'prototype' },
      { term: 'Postgres', note: 'AEP persistence. Not the Agentic Ops checkpointer.', status: 'reference' },
      { term: 'Snowflake / Athena / Kinesis', note: 'Playwire Data Analyst year', status: 'shipped' },
      { term: 'pgvector', note: 'Documented next on Agentic Ops (OPS-05B)', status: 'next' },
    ],
  },
  {
    id: 'infra',
    category: 'Infrastructure',
    items: [
      { term: 'Docker', note: 'Agentic Ops compose + CI', status: 'reference' },
      { term: 'Vercel', note: 'Lore, this site, Field Kit demo', status: 'shipped' },
      { term: 'AWS', note: 'Kinesis, CloudFront, S3 — employment and product, not Ops hosting', status: 'shipped' },
    ],
  },
  {
    id: 'gov',
    category: 'Identity / governance',
    items: [
      { term: 'Permissioned tools', note: 'READ vs WRITE catalog', status: 'reference' },
      { term: 'Approval queues', note: 'Ops console + AEP review pause', status: 'reference' },
      { term: 'Auth0 / RLS', note: 'Résumé keywords only — not a public case', status: 'not_claimed' },
    ],
  },
  {
    id: 'automation',
    category: 'Automation / integration',
    items: [
      { term: 'Airtable', note: 'Bookleggers + teaching HITL', status: 'shipped' },
      { term: 'n8n', note: 'Production Gmail path + teaching adaptation (labeled separately)', status: 'shipped' },
      { term: 'JavaScript integrations', note: 'Playwire publisher onboarding', status: 'shipped' },
    ],
  },
  {
    id: 'providers',
    category: 'AI providers',
    items: [
      { term: 'OpenAI / Anthropic APIs', note: 'Product and teaching work; Ops live adapters are stubs', status: 'shipped' },
      { term: 'Fake / deterministic provider', note: 'Agentic Ops and AEP evals', status: 'reference' },
    ],
  },
];

export type FrameworkHonestyGroup = {
  id: string;
  title: string;
  items: string[];
};

export const FDE_FRAMEWORK_HONESTY: {
  intro: string;
  groups: FrameworkHonestyGroup[];
} = {
  intro:
    'Frameworks change. I focus on the underlying system: state, tools, permissions, retrieval, evaluation, human review, external APIs, and reliable failure behavior.',
  groups: [
    {
      id: 'hands-on',
      title: 'Hands-on / evidenced',
      items: [
        'LangGraph (StateGraph, interrupt, in-memory MemorySaver)',
        'FastAPI',
        'Python 3.11 agent service',
        'OpenAI and Anthropic APIs in product / teaching work',
        'MCP-shaped stdio tool discovery and invocation',
        'n8n AI Agent nodes in a production Gmail path',
      ],
    },
    {
      id: 'adjacent',
      title: 'Adjacent / transferable',
      items: [
        'LangChain-core / text splitters as Agentic Ops dependencies — not LangChain app ownership',
        'Keyword RAG patterns transferable to hybrid once OPS-05B lands',
        'GraphQL in an institutional vendor context (ICA Miami)',
      ],
    },
    {
      id: 'not-claimed',
      title: 'Not claimed',
      items: [
        'CrewAI',
        'Semantic Kernel',
        'Google ADK',
        'AWS AgentCore',
        'Azure AI Foundry',
        'Vertex AI agent tooling',
        'Microsoft Copilot Studio',
        'Official MCP SDK production server',
        'Auth0 or row-level security as a shipped case',
      ],
    },
  ],
};

export const FDE_TRUST_POINTS: { id: string; title: string; body: string }[] = [
  {
    id: 'permissions',
    title: 'Permission boundaries',
    body: 'READ tools run. WRITE tools return pending_approval until execute_node sees a human decision.',
  },
  {
    id: 'hitl',
    title: 'Human approval',
    body: 'Actions with external consequence pause. In this reference, the consequence is an internal task — not email or calendar writes.',
  },
  {
    id: 'grounding',
    title: 'Grounding',
    body: 'Answers should trace to approved records. Nobel-trap evals must abstain rather than invent.',
  },
  {
    id: 'fail-closed',
    title: 'Failure behavior',
    body: 'AEP: unsupported citations cannot silently pass. Agentic Ops: ungrounded drafts pause or refuse.',
  },
  {
    id: 'evals',
    title: 'Evaluation',
    body: 'Golden-set / offline fake-provider suites. Real-job suites wait on consent. No invented pass rates.',
  },
  {
    id: 'audit',
    title: 'Auditability',
    body: 'Tool calls, citations, and approval state sit on the run timeline. That is the operator surface, not hidden chain-of-thought.',
  },
  {
    id: 'least-agency',
    title: 'Least agency necessary',
    body: 'Bookleggers is Square → Airtable, not an agent. Playwire integrations were JavaScript and warehouse work. Some problems should stay SQL, forms, scheduled jobs, or deterministic code.',
  },
];

export type MessySystemStep = ProcessStep & { lifecycle: LifecycleStage };

export const FDE_MESSY_SYSTEM_STEPS: MessySystemStep[] = [
  {
    title: '01 — Discover',
    lifecycle: 'Discover',
    description: 'Watch the real workflow. Name the owner, the data, the permissions, and the cost of a bad write.',
  },
  {
    title: '02 — Bound',
    lifecycle: 'Prototype',
    description: 'One thin slice and an acceptance test. Not a platform rewrite.',
  },
  {
    title: '03 — Choose',
    lifecycle: 'Prototype',
    description:
      'Decide whether the slice is ordinary software, automation, retrieval, a single model call, an agent, or a mix. An agent is not the default.',
  },
  {
    title: '04 — Wire',
    lifecycle: 'Prototype',
    description: 'Connect identity, data, APIs, tools, and the operator UI the team will actually touch.',
  },
  {
    title: '05 — Govern',
    lifecycle: 'Govern',
    description: 'Permissions, evals, fail-closed behavior, HITL, and a trace someone can inspect.',
  },
  {
    title: '06 — Deploy',
    lifecycle: 'Deploy',
    description: 'Put it in front of actual operators. A laptop demo is not deployment.',
  },
  {
    title: '07 — Teach',
    lifecycle: 'Teach',
    description: 'Show where it works and where it breaks. Teaching is how the system stays operable.',
  },
  {
    title: '08 — Handoff',
    lifecycle: 'Handoff',
    description: 'Runbook, ownership, and a next iteration path. Leave.',
  },
];

export const FDE_HARDEN_NEXT: { id: string; title: string; body: string }[] = [
  {
    id: 'checkpointer',
    title: 'Postgres checkpointer',
    body: 'The graph compiles with LangGraph MemorySaver. A persistent checkpointer is what would let a pause survive a process restart.',
  },
  {
    id: 'mcp-sdk',
    title: 'Official MCP SDK',
    body: 'Replace the MCP-shaped stdio server with the official SDK. Keep the same permission and HITL layer.',
  },
  {
    id: 'identity',
    title: 'Identity on the decision route',
    body: 'The approval endpoint is unauthenticated in v0. Enterprise identity is a hardening step, not a current claim.',
  },
  {
    id: 'hybrid',
    title: 'Hybrid / pgvector retrieval',
    body: 'OPS-05B in the Agentic Ops repo. Keyword retrieval is what runs today.',
  },
  {
    id: 'providers',
    title: 'Live providers with retry / fallback',
    body: 'Adapters exist as stubs. Fake provider remains the honest demo path until that work is measured.',
  },
  {
    id: 'hosted',
    title: 'Hosted recruiter demo',
    body: 'Local Docker + make verify is the current path. No public hosted console yet.',
  },
  {
    id: 'ci-evals',
    title: 'Eval gates and cost budgets in CI',
    body: 'Golden-set evals run. Cost CI and richer tracing are next, not shipped.',
  },
];

export const FDE_AEP_INSPECT: CodeInspectBlock = {
  title: 'AEP — code to inspect',
  intro:
    'TypeScript technical flagship. Synthetic fixtures and a fake-model harness. Governance you can read, not a live-model quality claim.',
  items: [
    {
      id: 'policy',
      title: 'Citation fail-closed',
      href: `${AEP_BLOB}/packages/agent/src/policy.ts`,
      body: 'Unsupported citations cannot silently pass.',
      icon: 'shield',
    },
    {
      id: 'run',
      title: 'Persisted run + review',
      href: `${AEP_BLOB}/packages/agent/src/run.ts`,
      body: 'Assessment state survives a human pause.',
      icon: 'repeat',
    },
    {
      id: 'search',
      title: 'Retrieval',
      href: `${AEP_BLOB}/packages/retrieval/src/search.ts`,
      body: 'Inspect the search path before calling it hybrid in an interview.',
      icon: 'search',
    },
    {
      id: 'runner',
      title: 'Durable jobs',
      href: `${AEP_BLOB}/packages/jobs/src/runner.ts`,
      body: 'Job runner for the evidence pipeline.',
      icon: 'git-branch',
    },
  ],
  footnotes: [
    { label: 'AEP repository', href: AEP_REPO },
    { label: 'Workshop harness', href: '/workshop/agentic-evidence-pipeline' },
    { label: 'Evidence scorecard', href: '/forward-deployed/evidence' },
  ],
};

export const FDE_OPS_INSPECT: CodeInspectBlock = {
  title: 'Agentic Ops — code to inspect',
  intro:
    'Python reference runtime. Fake provider in CI. MCP-shaped stdio, not an official MCP server. LangGraph is the orchestrator because approval has to be a state, not a prompt.',
  items: [
    {
      id: 'graph',
      title: 'StateGraph',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/graph/__init__.py`,
      body: 'retrieve → tools → draft → evaluate → await_approval | respond.',
      icon: 'git-branch',
    },
    {
      id: 'nodes',
      title: 'Interrupt + execute',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/graph/nodes.py`,
      body: 'await_approval_node uses LangGraph interrupt.',
      icon: 'repeat',
    },
    {
      id: 'tools',
      title: 'READ / WRITE catalog',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/tools/catalog.py`,
      body: 'manage_actions stays pending until approved.',
      icon: 'shield',
    },
    {
      id: 'mcp',
      title: 'MCP-shaped stdio',
      href: `${AGENTIC_OPS_BLOB}/services/agent/src/agentic_ops/mcp.py`,
      body: 'Discovery and invocation. Next: official MCP SDK.',
      icon: 'search',
    },
  ],
  footnotes: [
    { label: 'Agentic Ops repository', href: AGENTIC_OPS_REPO },
    { label: 'MCP ADR', href: `${AGENTIC_OPS_BLOB}/docs/decisions/0004-mcp-tool-surface.md` },
    { label: 'LangGraph ADR', href: `${AGENTIC_OPS_BLOB}/docs/decisions/0002-langgraph-orchestrator.md` },
  ],
};

export const FDE_ENGINEERING_HONESTY: HonestyOverlay = {
  title: 'Proven now',
  intro:
    'Each line is something you can inspect or verify against employment history. Gaps stay visible so a hiring manager can trust the page.',
  provenTitle: 'On this page',
  proven: [
    'Founding-engineer work on a shipped GenAI product (Lore Machine): auth, APIs, product interfaces, mixed-stakeholder delivery.',
    'Client-facing Solutions Engineer year at Playwire, then a Data Analyst year on Kinesis → Athena → Snowflake — no metrics invented.',
    'TypeScript evidence pipeline (AEP) with citation fail-closed and persisted human review.',
    'Python FastAPI + LangGraph reference runtime (Agentic Ops) with permissioned tools, keyword RAG, evals, and HITL.',
    'MCP-shaped stdio tool server modeled around discovery and invocation — not an official MCP production deployment.',
    'Bakehouse SmartSigns: Raspberry Pi / Anthias displays, with operational handoff still in progress and install photos not yet published.',
  ],
  notClaimedTitle: 'Not claimed',
  notClaimed: [
    'CrewAI, Semantic Kernel, Google ADK, AgentCore, Azure AI Foundry, Vertex agent tooling, Copilot Studio.',
    'Official MCP SDK. Hosted Agentic Ops demo. Live Claude/OpenAI path inside AEP or Agentic Ops.',
    'Auth0 / RLS case study. BFI archive migration. A personal Raspberry Pi cyberdeck.',
    'pgvector queries in Agentic Ops. A Postgres checkpointer. An LLM planner node.',
  ],
  rampStatement:
    'I would bring this engineering and delivery habit into your stack — including a framework you already standardized — without pretending I have already shipped that wrapper.',
};

export const FDE_HARDWARE = {
  title: 'I also build the weird little systems',
  intro:
    'Useful FDE signal: I will debug the Linux box, the network, the API, and the interface when the real problem crosses layers. This is not an embedded-engineering pitch.',
  items: [
    {
      id: 'smartsigns',
      title: 'Bakehouse SmartSigns',
      body: 'Raspberry Pi / Anthias at Bakehouse Art Complex: Linux, a repeatable screen format, networking, and install constraints. Operational handoff is in progress. Install photography is not on the site yet.',
      href: '/bakehouse/smart-signs',
      label: 'Open the Smart Signs case',
      status: 'shipped' as AnatomyStatus,
    },
  ],
};
