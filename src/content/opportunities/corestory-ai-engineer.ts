import type { Opportunity } from './types';
import type { ThirtySixtyNinetyData } from './systemsDossier';
import { corestoryAiEngineerBanner } from '@/content/evidence/applicationBanners';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { productionAiAutomationPack } from '@/content/evidence/productionAiAutomationPack';
import {
  sprint2026Ctas,
  sprint2026Headshot,
  sprint2026LogoBand,
  verifierBoundaryNote,
} from './shared-sprint-2026';

const infra24 = productionAiAutomationPack.infra24MemoryAgent;

const corestoryPlan: ThirtySixtyNinetyData = {
  title: 'First 90 days',
  subtitle: 'Close the platform-orchestration gap while contributing where production evidence is already strong.',
  disclaimer:
    'Candidate working method only. Not based on private knowledge of CoreStory’s codebase, customers, or internal AI stack.',
  phases: [
    {
      id: '30',
      label: 'First 30 days',
      title: 'Learn the CoreStory AI engine',
      items: [
        'Map existing RAG, indexing, vector, and agent pipelines and how they surface business logic from legacy code.',
        'Reproduce evaluation, latency, and cost baselines before proposing changes.',
        'Study LlamaIndex / LangChain (or CoreStory’s chosen orchestration) conventions already in use.',
        'Pair with product, data, and infrastructure on one active narrative-intelligence workflow.',
        'Document where my applied-AI experience maps directly vs. where platform-specific ramp is required.',
        'Ship a small, low-risk improvement: eval case, retrieval debug tool, or documentation of a failure mode.',
      ],
    },
    {
      id: '60',
      label: 'Days 31–60',
      title: 'Own a bounded AI surface',
      items: [
        'Take responsibility for one retrieval, summarization, or agent path end-to-end.',
        'Improve grounding, citations, or hybrid ranking where quality gaps are measurable.',
        'Add observability for latency, cost, and failure classes on that path.',
        'Collaborate on deployment patterns (Docker / cloud services) with backend and DevOps.',
        'Write internal notes that convert experiments into reusable evaluation methodology.',
        'Present results with honest limits — especially anything still adjacent rather than production-proven.',
      ],
    },
    {
      id: '90',
      label: 'Days 61–90',
      title: 'Make the engine more legible and reusable',
      items: [
        'Turn repeated retrieval/agent patterns into shared utilities or templates.',
        'Strengthen benchmark coverage for accuracy, explainability, and regression.',
        'Propose one roadmap item aligned to CoreStory’s mission: safer modernization insight from legacy systems.',
        'Help reduce costly failure modes by making uncertain model outputs more inspectable.',
        'Hand off documentation that a peer engineer can operate without tribal knowledge.',
      ],
    },
  ],
};

/**
 * CoreStory — AI Engineer (narrative intelligence / legacy-code AI platform).
 * Compact recruiter dossier: strong applied LLM + product + agentic evidence;
 * honest gaps on production LlamaIndex/LangChain orchestration and managed vector DBs.
 */
export const corestoryAiEngineerOpportunity: Opportunity = {
  slug: 'corestory-ai-engineer',
  status: 'active',
  listed: true,
  variant: 'compact',
  applicationBanner: corestoryAiEngineerBanner,
  seo: {
    title: 'Moises Sanabria — AI Engineer, applied to CoreStory',
    description:
      'Applied AI engineering dossier for CoreStory’s narrative intelligence platform — LLM products, retrieval design, agentic workflows, and honest gaps on production vector orchestration.',
    indexable: false,
    keywords: [
      'AI Engineer',
      'RAG engineer',
      'LLM systems',
      'retrieval augmented generation',
      'vector search',
      'LangChain',
      'LlamaIndex',
      'agentic AI',
      'legacy modernization AI',
      'CoreStory',
    ],
  },
  visibilityNote:
    'Private role-specific dossier prepared for CoreStory’s AI Engineer position. Not affiliated with or endorsed by CoreStory. Retrieval/vector claims stay prototype-honest until verified live.',
  company: 'CoreStory',
  roleTitle: 'AI Engineer',
  heroEyebrow: 'CORESTORY · AI ENGINEER · REMOTE',
  heroRoleMeta: 'LLM systems · retrieval · agents · narrative intelligence',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'I build LLM-powered products and agentic workflows where retrieval, grounding, and explainability matter as much as generation.',
  heroMetaChips: [
    'LLM integration',
    'Retrieval & embeddings',
    'Agentic workflows',
    'Prompt orchestration',
    'Full-stack AI products',
    'Evaluation & grounding',
    'SaaS / early-stage delivery',
    'Remote-ready',
  ],
  heroPrimaryCta: { label: 'Review AI evidence', href: '#case-studies' },
  heroSecondaryCta: { label: 'Download Résumé', href: '#resume' },
  audienceKeywords: {
    lead: 'Prepared for CoreStory AI, product, and infrastructure evaluators.',
    terms: [
      {
        label: 'Narrative from systems',
        detail: 'Experience turning model behavior into usable product workflows — not demos only.',
      },
      {
        label: 'Retrieval with limits',
        detail: 'Institutional Memory Agent: embeddings, hybrid ranking, grounding — prototype / local pilot, not claimed as production LangChain.',
      },
      {
        label: 'Agentic production',
        detail: 'Confirmed n8n AI Agent + Airtable routing with human-in-the-loop boundaries.',
      },
      {
        label: 'Honest stack ramp',
        detail: 'LlamaIndex / managed vector DBs (Pinecone, Weaviate, etc.) are learning priorities — not invented production claims.',
      },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'skills', label: 'Stack' },
    { id: 'process', label: 'How I work' },
    { id: 'plan', label: '90 days' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'LLM systems, retrieval, and agents that make legacy complexity explainable.',
    subheadline: 'AI Engineer · CoreStory · Remote-first',
    introParagraphs: [
      'I am a full-stack and applied-AI engineer who builds products where large language models, retrieval, and conversational workflows have to work together under real production constraints.',
      'CoreStory’s mission — surfacing business logic and technical insight from legacy systems — maps to work I already do: translating opaque system behavior into grounded, reviewable narratives that teams can trust enough to act on.',
      `My strongest confirmed evidence is generative AI product engineering (Lore Machine), production agentic automation (n8n / Airtable), and retrieval-system design as a local prototype (${infra24.title}: ${infra24.buildState}). I do not claim production ownership of LlamaIndex, LangChain, Pinecone, or Weaviate — those are intentional platform ramps on top of transferable retrieval and agent patterns.`,
      verifierBoundaryNote,
    ],
    trustLine:
      'Miami-based · Remote-first comfortable · Full-stack AI + applied NLP practice · Honest about orchestration/vector depth',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit — CoreStory AI Engineer',
  roleMatchIntro:
    'Statuses are honest labels, not match percentages: Demonstrated, Strongly transferable, Prototype, Developing, Gap acknowledged.',
  roleMatchColumnHeaders: {
    left: 'CoreStory need',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'LLM-powered systems (RAG, chat agents, summarizers)',
      evidence:
        '[Demonstrated / transferable] Lore Machine generative product systems; AI24 News (real-time generative app); agent chat/tool-calling workflows; Institutional Memory Agent design for grounded Q&A and summarization-style answers (prototype).',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: evidenceProjects['lore-machine'].imageAlt,
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'LlamaIndex, LangChain, or similar orchestration',
      evidence:
        '[Developing / Gap acknowledged] Hands-on orchestration today is through product APIs, prompt/context systems, n8n AI Agent nodes, and custom TypeScript retrieval flows — not claimed production LlamaIndex/LangChain ownership. Conceptual patterns transfer; framework fluency is a first-ramp priority.',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'Agent orchestration via production n8n AI Agent workflows',
        local: true,
      },
    },
    {
      requirement: 'Vector databases (Pinecone, Weaviate, Chroma, Azure Cognitive Search, etc.)',
      evidence:
        `[Prototype] Supabase pgvector embeddings work exists in ${infra24.title} (${infra24.buildState}). Not claimed as production Pinecone/Weaviate/Milvus/FAISS ownership. Transferable: embedding pipelines, indexing mindset, hybrid ranking design.`,
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Institutional infrastructure context for retrieval prototyping',
      },
    },
    {
      requirement: 'OpenAI / Anthropic / open-source LLM integration',
      evidence:
        '[Demonstrated] Production and product integrations across OpenAI, Claude/Anthropic tooling, Together AI, and generative media APIs in Lore Machine and AI24 surfaces.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: evidenceProjects.ai24.imageAlt,
      },
    },
    {
      requirement: 'Python (FastAPI, Pandas, NumPy) + AI services',
      evidence:
        '[Transferable / partial] Python in Lore Machine and ML training contexts; FastAPI called out in broader AI engineering materials. Strongest day-to-day shipping language is TypeScript/Next.js — Python depth for CoreStory services is a strengthening area, not a bluff.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Full-stack AI product engineering',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'RAG patterns, embeddings, tokenization, prompt engineering, tool calling',
      evidence:
        '[Demonstrated / prototype] PromptOps and context architecture in Lore Machine; embeddings + hybrid retrieval + grounding guards in Memory Agent prototype; tool calling and structured routing in production n8n AI Agent workflows.',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
        local: true,
      },
    },
    {
      requirement: 'Production AI deployment (Docker, Azure, AWS)',
      evidence:
        '[Demonstrated / transferable] Vercel production for AI products; Azure and Docker in verified ML/training and cloud contexts; AWS data/infra experience from Playwire. Ready to collaborate with DevOps on CoreStory’s cloud deployment path.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Production cloud and data systems experience',
        local: true,
      },
    },
    {
      requirement: 'SaaS / early-stage startup environment',
      evidence:
        '[Demonstrated] Lore Machine founding-engineer ownership in a small team; high-agency delivery across product, integrations, and iteration under shifting model capabilities.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Early-stage generative AI product ownership',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: '7+ years engineering / 3+ years AI-ML-NLP (JD bar)',
      evidence:
        '[Honest positioning] Multi-year full-stack and applied-AI product experience spanning generative systems, automation, and data platforms. I would not inflate titles or invent a pure ML-research tenure; I present a senior systems + applied-AI profile ready to deepen CoreStory’s AI engine.',
      illustration: {
        src: sprint2026Headshot,
        alt: 'Moises Sanabria',
      },
    },
    {
      requirement: 'Knowledge graphs / Neo4j / multimodal (preferred)',
      evidence:
        '[Adjacent / developing] Multimodal generative workflows and document/institutional knowledge systems experience. No claim of production Neo4j knowledge-graph ownership.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: evidenceProjects['multimodal-image-systems'].imageAlt,
      },
    },
  ],
  featuredProjectIds: [
    'lore-machine',
    'digital-culture-infrastructure',
    'n8n-gmail-intelligence',
    'ai24',
    'playwire-alumni',
  ],
  caseStudyColumns: 2,
  caseStudiesSectionTitle: 'Evidence for CoreStory’s AI engine',
  caseStudiesIntro:
    'Focused on LLM products, retrieval design, agentic workflows, and production delivery. Institutional Memory Agent remains a local prototype — not production LangChain/Pinecone.',
  caseStudyOverrides: [
    {
      evidenceId: 'lore-machine',
      title: 'Lore Machine — generative systems as product',
      category: 'LLM product engineering',
      summary:
        'Founding-engineer ownership of a real-time generative storytelling platform: frontend, authentication, AI/data API integrations, prompt and context systems, and production deployment. Directly relevant to integrating LLMs into a cohesive platform where model behavior must stay usable, inspectable, and shippable.',
      skillTags: ['LLMs', 'PromptOps', 'TypeScript', 'APIs', 'Auth', 'Vercel', 'Startup delivery'],
      href: evidenceProjects['lore-machine'].href,
      linkLabel: 'View Lore Machine',
    },
    {
      evidenceId: 'digital-culture-infrastructure',
      title: 'Institutional Memory Agent — retrieval prototype',
      category: 'RAG design · Prototype',
      summary:
        `Designed a retrieval-augmented Q&A path for institutional knowledge: document ingestion, OpenAI embeddings, Supabase pgvector, hybrid keyword/semantic ranking, grounding controls, golden-set evaluation concepts, and human approval before public outputs. Build state: ${infra24.buildState}. Not a claim of production LlamaIndex/LangChain or managed vector-DB ownership — it is the transferable architecture for CoreStory-style grounded narrative answers.`,
      skillTags: ['Embeddings', 'pgvector', 'Hybrid retrieval', 'Grounding', 'Evaluation', 'Prototype'],
      imageSrc: evidenceProjects['digital-culture-infrastructure'].imageSrc,
      imageAlt: 'Institutional systems context for retrieval-agent prototyping',
      href: 'https://dcc.miami',
      linkLabel: 'Institutional context',
    },
    {
      evidenceId: 'n8n-gmail-intelligence',
      title: 'Production agentic workflow with human review',
      category: 'Agentic systems · Tool calling',
      summary:
        `${automationProjectSpecs['n8n-gmail-intelligence'].summary} Shows chat-agent-adjacent tool calling, structured outputs, and approval-aware automation — the operational layer CoreStory needs around model calls, not only the model itself.`,
      skillTags: ['n8n', 'AI Agent', 'Tool calling', 'Airtable', 'HITL', 'Production ops'],
      imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
      imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
      imageLocal: automationProjectSpecs['n8n-gmail-intelligence'].imageLocal,
    },
    {
      evidenceId: 'ai24',
      title: 'AI24 News — integrated LLM application',
      category: 'Applied generative AI',
      summary:
        'Real-time AI-native application combining external data, generative illustration, frontend state, database infrastructure, and observability. Evidence of coordinating model calls, data, and UX as one system — aligned with CoreStory’s need to productionize AI features, not leave them as notebooks.',
      skillTags: ['Next.js', 'LLM APIs', 'Observability', 'Supabase', 'Product AI'],
      href: 'https://ai24.live',
      linkLabel: 'View AI24',
    },
    {
      evidenceId: 'playwire-alumni',
      title: 'Playwire — production systems under operational load',
      category: 'Scale · debugging · cloud adjacency',
      summary:
        'Solutions and data engineering in production: integrations, AWS data paths (Kinesis/Athena → Snowflake), monitoring, and stakeholder delivery. Supports CoreStory’s need for engineers who can collaborate with backend/DevOps on latency, cost, and reliability around AI services.',
      skillTags: ['AWS', 'Snowflake', 'SQL', 'Monitoring', 'Solutions engineering'],
    },
  ],
  skillsSectionTitle: 'Stack map — demonstrated vs developing',
  skillsMatrixRows: [
    {
      category: 'Demonstrated AI surface',
      skills:
        'LLM APIs (OpenAI, Claude/Anthropic, Together), prompt/context architecture, generative product features, tool-calling agent workflows, grounding & human review, TypeScript/Next.js AI apps',
      icon: 'sparkles',
    },
    {
      category: 'Retrieval (prototype depth)',
      skills:
        'Embeddings, Supabase pgvector, hybrid ranking concepts, citation-oriented answers, golden-set evaluation thinking — not verified-live enterprise RAG',
      icon: 'layers',
    },
    {
      category: 'Production & platform',
      skills: 'Vercel, Docker (verified ML context), Azure adjacency, AWS data infra, Git, SaaS shipping, monitoring/alerting habits',
      icon: 'cloud',
    },
    {
      category: 'Developing for CoreStory',
      skills:
        'LlamaIndex · LangChain / LangGraph · Pinecone / Weaviate / Chroma / Azure Cognitive Search · Neo4j knowledge graphs · deeper Python/FastAPI AI services · formal model cost/latency benchmarking frameworks',
      icon: 'target',
    },
  ],
  processSectionTitle: 'How I would approach CoreStory’s AI engine',
  processIntro:
    'Legacy modernization AI fails when retrieval looks fluent but is ungrounded. I optimize for explainability and measurable quality before cleverness.',
  processSteps: [
    {
      title: 'Make the legacy signal inspectable',
      description:
        'Clarify what “business logic” and “technical insight” mean for the current workflow — sources, chunks, graph edges, and what must never be hallucinated.',
    },
    {
      title: 'Separate retrieval from narrative',
      description:
        'Keep evidence channels distinct from generated explanation so engineers and stakeholders can see what the system observed vs. inferred.',
    },
    {
      title: 'Orchestrate with the team’s framework',
      description:
        'Adopt CoreStory’s LlamaIndex/LangChain (or equivalent) conventions rather than inventing a parallel stack — map existing agent/retrieval patterns onto theirs.',
    },
    {
      title: 'Benchmark latency, cost, and failure modes',
      description:
        'Instrument paths early; treat regressions in groundedness as first-class defects, not polish items.',
    },
    {
      title: 'Document for the next engineer',
      description:
        'Evaluation cases, runbooks, and limits — so the AI engine stays operable as the company scales.',
    },
  ],
  innovationLabSectionTitle: 'Why CoreStory',
  innovationLabLead: 'Unlocking intelligence inside systems people already depend on',
  innovationLabBody:
    'CoreStory sits at a problem I care about: enterprises fail expensive modernization efforts when the logic trapped in legacy systems stays opaque. Building AI that retrieves, explains, and narrates that logic — accurately enough to reduce risk — is closer to my applied systems work than generic chatbot demos. I would bring production product engineering, agentic workflow discipline, and retrieval-design judgment, while being direct about the framework and managed-vector gaps I would close inside your stack.',
  plan: corestoryPlan,
  ctas: sprint2026Ctas('CoreStory AI Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [
    'openai',
    'anthropic',
    'langchain',
    'langgraph',
    'pinecone',
    'python',
    'typescript',
    'nextjs',
    'supabase',
    'docker',
    'azure',
    'aws',
    'n8n',
    'vercel',
    'huggingface',
    'github',
  ],
  resumeSectionTitle: 'Build AI that makes complex systems legible.',
  resumeSectionNote:
    'I am interested in helping CoreStory’s AI engine retrieve, explain, and narrate legacy intelligence with production discipline. Private role-specific dossier — retrieval claims remain prototype-honest until verified live.',
};
