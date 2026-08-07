import type { CapabilityPillarId, CapabilitySkill } from './types';

/**
 * Honest skill inventory for the Technical Proof Engine.
 * Proven requires a public href. RAG / MCP / multi-provider routing stay gated
 * until verified-live demos exist (matches opportunities evidence rules).
 */
export const CAPABILITY_SKILLS: Record<CapabilityPillarId, CapabilitySkill[]> = {
  'ai-engineering': [
    {
      id: 'prompt-engineering',
      name: 'Prompt engineering',
      status: 'proven',
      evidence: { label: 'Lore Machine', href: 'https://loremachine.world/' },
    },
    {
      id: 'llm-product-workflows',
      name: 'LLM product workflows (generation + review loops)',
      status: 'proven',
      evidence: { label: 'AI24', href: '/ai24' },
    },
    {
      id: 'generative-image-pipelines',
      name: 'Generative image / multimodal pipelines',
      status: 'proven',
      evidence: {
        label: 'Broken Acceleration research',
        href: '/research/broken-acceleration',
      },
    },
    {
      id: 'agentic-automation',
      name: 'Agentic automation (n8n / workflow agents)',
      status: 'proven',
      evidence: { label: 'AI Engineering packet', href: '/ai-engineering' },
    },
    {
      id: 'rag-pgvector',
      name: 'RAG (embeddings, chunking, retrieval)',
      status: 'building',
      note: 'Infra24 Memory Agent pilot — not claimed production until verified live.',
      evidence: { label: 'Artist infrastructure', href: '/artist-infrastructure' },
    },
    {
      id: 'mcp-custom',
      name: 'Custom MCP server / client + tools',
      status: 'building',
      note: 'In progress — Stacklok-adjacent priority.',
    },
    {
      id: 'agent-frameworks',
      name: 'Agent orchestration frameworks (LangGraph, CrewAI, etc.)',
      status: 'building',
      note: 'Rule-based / n8n agents ship today; framework depth is the ramp.',
    },
    {
      id: 'vector-dbs-beyond-pg',
      name: 'Vector DBs beyond pgvector (Pinecone, Weaviate, Qdrant)',
      status: 'planned',
    },
    {
      id: 'multi-provider-routing',
      name: 'Multi-provider LLM routing / fallbacks',
      status: 'planned',
    },
  ],

  'software-engineering': [
    {
      id: 'typescript',
      name: 'TypeScript',
      status: 'proven',
      evidence: { label: 'Lore Machine', href: 'https://loremachine.world/' },
    },
    {
      id: 'javascript-node',
      name: 'JavaScript / Node.js',
      status: 'proven',
      evidence: { label: 'DCC Miami', href: 'https://dcc.miami' },
    },
    {
      id: 'react-next',
      name: 'React / Next.js',
      status: 'proven',
      evidence: { label: 'AI24', href: '/ai24' },
    },
    {
      id: 'python',
      name: 'Python',
      status: 'proven',
      evidence: {
        label: 'Broken Acceleration research',
        href: '/research/broken-acceleration',
      },
    },
    {
      id: 'sql',
      name: 'SQL (MySQL, Athena, warehouse SQL)',
      status: 'proven',
      evidence: {
        label: 'FLORA data dossier (Playwire spine)',
        href: '/opportunities/flora-founding-data-engineer',
      },
    },
    {
      id: 'auth-oauth',
      name: 'Authentication / OAuth',
      status: 'proven',
      evidence: { label: 'Lore Machine', href: 'https://loremachine.world/' },
    },
    {
      id: 'rest-apis',
      name: 'REST APIs / third-party integrations',
      status: 'proven',
      evidence: { label: 'AI24', href: '/ai24' },
    },
    {
      id: 'testing',
      name: 'Testing (Vitest / Playwright / Jest)',
      status: 'building',
      evidence: {
        label: 'Provenance Explorer (Vitest)',
        href: 'https://github.com/moisestech/comfyui-output-provenance',
      },
      note: 'Shipped in example monorepo; expanding across product surfaces.',
    },
    {
      id: 'go-rust',
      name: 'Go / Rust',
      status: 'planned',
    },
  ],

  'data-infrastructure': [
    {
      id: 'snowflake',
      name: 'Snowflake',
      status: 'proven',
      evidence: {
        label: 'Playwire → FLORA dossier',
        href: '/opportunities/flora-founding-data-engineer',
      },
    },
    {
      id: 'etl-pipelines',
      name: 'ETL pipelines (Kinesis → Athena → Snowflake)',
      status: 'proven',
      evidence: {
        label: 'Playwire → FLORA dossier',
        href: '/opportunities/flora-founding-data-engineer',
      },
    },
    {
      id: 'tableau-bi',
      name: 'Tableau / executive BI dashboards',
      status: 'proven',
      evidence: {
        label: 'Playwire → FLORA dossier',
        href: '/opportunities/flora-founding-data-engineer',
      },
    },
    {
      id: 'supabase-postgres',
      name: 'Supabase / Postgres',
      status: 'proven',
      evidence: { label: 'AI24', href: '/ai24' },
    },
    {
      id: 'pgvector',
      name: 'pgvector',
      status: 'building',
      note: 'Local / pilot depth — verified-live gate before Proven.',
      evidence: { label: 'Artist infrastructure', href: '/artist-infrastructure' },
    },
    {
      id: 'dbt',
      name: 'dbt',
      status: 'planned',
    },
    {
      id: 'bigquery-duckdb',
      name: 'BigQuery / DuckDB',
      status: 'planned',
    },
  ],

  'design-creative-technology': [
    {
      id: 'comfyui-diffusion',
      name: 'ComfyUI / SDXL / diffusion pipelines',
      status: 'proven',
      evidence: {
        label: 'Output Provenance Explorer',
        href: 'https://comfyui-output-provenance.vercel.app',
      },
    },
    {
      id: 'generative-media',
      name: 'Generative image / video product pipelines',
      status: 'proven',
      evidence: { label: 'Lore Machine', href: 'https://loremachine.world/' },
    },
    {
      id: 'touchdesigner',
      name: 'TouchDesigner / live installation production',
      status: 'proven',
      evidence: { label: 'Artist CV', href: '/cv/artist' },
    },
    {
      id: 'live-installation',
      name: 'Live / interactive installation',
      status: 'proven',
      evidence: { label: 'Portfolio', href: '/portfolio' },
    },
    {
      id: 'webxr',
      name: 'WebXR / immersive prototypes',
      status: 'proven',
      evidence: { label: 'Artist CV', href: '/cv/artist' },
    },
    {
      id: 'fabrication-lab',
      name: 'Fabrication / digital lab operations',
      status: 'proven',
      evidence: { label: 'Oolite Arts case study', href: '/oolite-arts' },
    },
    {
      id: 'threejs-webgl',
      name: 'Three.js / WebGL',
      status: 'building',
      note: 'Listed historically — needs a current linkable demo.',
    },
  ],

  'devops-deployment': [
    {
      id: 'vercel',
      name: 'Vercel deployment',
      status: 'proven',
      evidence: { label: 'Lore Machine', href: 'https://loremachine.world/' },
    },
    {
      id: 'github-actions',
      name: 'GitHub Actions CI/CD',
      status: 'proven',
      evidence: {
        label: 'Provenance Explorer CI',
        href: 'https://github.com/moisestech/comfyui-output-provenance',
      },
    },
    {
      id: 'docker',
      name: 'Docker',
      status: 'proven',
      evidence: {
        label: 'Broken Acceleration research',
        href: '/research/broken-acceleration',
      },
      note: 'Training / environment containerization background.',
    },
    {
      id: 'aws',
      name: 'AWS (S3, Kinesis, Glue, CloudFront)',
      status: 'proven',
      evidence: {
        label: 'Playwire → FLORA dossier',
        href: '/opportunities/flora-founding-data-engineer',
      },
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      status: 'planned',
    },
    {
      id: 'terraform',
      name: 'Terraform',
      status: 'planned',
    },
  ],

  'leadership-communication': [
    {
      id: 'cross-functional-leadership',
      name: 'Cross-functional team leadership',
      status: 'proven',
      evidence: { label: 'Lore Machine', href: 'https://loremachine.world/' },
    },
    {
      id: 'vendor-management',
      name: 'Vendor / contractor management',
      status: 'proven',
      evidence: { label: 'Oolite Arts case study', href: '/oolite-arts' },
    },
    {
      id: 'technical-translation',
      name: 'Technical translation to non-technical stakeholders',
      status: 'proven',
      evidence: { label: 'Oolite Arts case study', href: '/oolite-arts' },
    },
    {
      id: 'solutions-engineering',
      name: 'Client-facing solutions engineering',
      status: 'proven',
      evidence: {
        label: 'Forward Deployed engineer dossier',
        href: '/opportunities/forward-deployed-ai-engineer',
      },
    },
    {
      id: 'curriculum-teaching',
      name: 'Curriculum design / teaching',
      status: 'proven',
      evidence: { label: 'Oolite Arts case study', href: '/oolite-arts' },
    },
  ],
};

/** Tier-1 certs — statuses TBD until Moises confirms. Not rendered in v1 UI. */
export const CAPABILITY_CERTIFICATIONS_DRAFT = [
  {
    id: 'aws-ai-practitioner',
    name: 'AWS Certified AI Practitioner',
    tier: 1 as const,
    status: 'not-started' as const,
    note: 'Status TBD — do not publish until confirmed.',
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    tier: 1 as const,
    status: 'not-started' as const,
    note: 'Status TBD — do not publish until confirmed.',
  },
  {
    id: 'dbt-fundamentals',
    name: 'dbt Fundamentals',
    tier: 1 as const,
    status: 'not-started' as const,
    note: 'Status TBD — do not publish until confirmed.',
  },
  {
    id: 'snowflake-hands-on',
    name: 'Snowflake Hands-on Essentials',
    tier: 1 as const,
    status: 'not-started' as const,
    note: 'Status TBD — do not publish until confirmed.',
  },
  {
    id: 'github-foundations',
    name: 'GitHub Foundations',
    tier: 1 as const,
    status: 'not-started' as const,
    note: 'Status TBD — do not publish until confirmed.',
  },
] as const;
