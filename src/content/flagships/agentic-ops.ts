/**
 * Site case shell for Agentic Ops — Building until repo demo + evals gate Proven claims.
 */

export const agenticOpsProject = {
  slug: 'agentic-ops',
  seo: {
    title: 'Agentic Ops — Auditable Multi-Tool Agent Runtime | Moises Sanabria',
    description:
      'An auditable multi-tool agent runtime for organizational workflows: planner, MCP tools, RAG, human approval, and evals. Building — public demo and regression suite in progress.',
  },
  title: 'Agentic Ops',
  category: 'AI engineering flagship · Building',
  status: 'building' as const,
  subtitle: 'An auditable multi-tool agent runtime for organizational workflows.',
  whatItIs:
    'Not a chatbot. Someone gives the system an organizational task — for example, prepare a six-week creative technology program — and the runtime plans, calls tools, retrieves institutional knowledge, synthesizes a decision package, and waits for human approval before executing writes.',
  domain:
    'Creative Institution Program Launch: program brief, equipment, calendar, staff capacity, budget, and program guidelines → requirements, schedule, budget, resource plan, risks, tasks, and communications.',
  whatIBuilt:
    'Architecture and implementation plan for a monorepo with Next.js control UI, FastAPI orchestrator, MCP tool server, pgvector retrieval, permissioned tools, eval harness, and deterministic demo replay. Scaffold lives in labs/agentic-ops until extracted to github.com/moisestech/agentic-ops. Public site ships this case shell first; Proven claims wait on application-ready gates.',
  stack: [
    'Python',
    'FastAPI',
    'TypeScript',
    'Next.js',
    'React',
    'Postgres',
    'pgvector',
    'MCP',
    'Docker',
    'GitHub Actions',
    'Evals',
  ],
  tools: [
    {
      name: 'search_documents',
      purpose: 'RAG over organizational files',
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
      purpose: 'Read / create / update implementation tasks',
      permission: 'WRITE' as const,
    },
  ],
  flow: [
    'User brief',
    'Planner',
    'Structured plan',
    'Document / Calendar / Budget tools',
    'Agent state + retrieval',
    'Decision / synthesis',
    'Human approval',
    'Execute or revise',
    'Final artifact',
  ],
  gates: [
    { id: 'e2e', label: 'One real workflow completes end-to-end', done: false },
    { id: 'agentic', label: 'Agent chooses and sequences multiple tools', done: false },
    { id: 'mcp', label: 'Tools exposed through MCP', done: false },
    { id: 'rag', label: 'Uses retrieved organizational knowledge with sources', done: false },
    { id: 'hitl', label: 'Write operations require approval', done: false },
    { id: 'reliability', label: 'Errors do not destroy the run', done: false },
    { id: 'evals', label: 'Automated behavior regression tests', done: false },
    { id: 'ui', label: 'Operational timeline (not hidden chain-of-thought)', done: false },
    { id: 'demo', label: 'Deterministic public demo replay', done: false },
    { id: 'ci', label: 'GitHub Actions + meaningful tests', done: false },
  ],
  whyItMatters:
    'One repository can substantiate Python, TypeScript, FastAPI, MCP, RAG, evals, HITL, observability, and permissioned tool design without a zoo of toy demos. Until application-ready gates clear, RAG/MCP/agent claims stay Building — not Proven.',
  imageSrc:
    'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
  imageAlt: 'Agentic Ops — organizational multi-tool agent runtime',
  repoUrl: 'https://github.com/moisestech/agentic-ops',
  demoNote:
    'Replay sample workflow will load a stored deterministic run — no API keys required for recruiters.',
  related: [
    { label: 'Forward-Deployed Systems', href: '/forward-deployed' },
    { label: 'Creative AI', href: '/creative-ai' },
    { label: 'Capabilities', href: '/capabilities#ai-engineering' },
    { label: 'AI Engineering packet', href: '/ai-engineering' },
  ],
};
