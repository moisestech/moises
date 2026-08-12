import type { Opportunity } from './types';
import type { ThirtySixtyNinetyData } from './systemsDossier';
import { banescoAiDeveloperBanner } from '@/content/evidence/applicationBanners';
import { evidenceProjects, OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import {
  sprint2026Ctas,
  sprint2026Headshot,
  sprint2026LogoBand,
  verifierBoundaryNote,
} from './shared-sprint-2026';

const banescoPlan: ThirtySixtyNinetyData = {
  title: 'First 90 days',
  subtitle: 'Research-oriented entry plan — not a promise to transform banking AI in a quarter.',
  disclaimer:
    'Candidate working method only. Not based on private knowledge of Banesco’s internal systems, data, or compliance stack.',
  phases: [
    {
      id: '30',
      label: 'First 30 days',
      title: 'Understand Banesco’s environment',
      items: [
        'Learn the current GCP architecture and security model.',
        'Understand existing data sources and ownership.',
        'Review current AI, automation, and predictive-model initiatives.',
        'Map stakeholders across technology, operations, risk, compliance, and business teams.',
        'Reproduce existing workflows before changing them.',
        'Document the AWS-to-GCP concepts that require the fastest platform ramp.',
        'Identify one contained, low-risk contribution.',
      ],
    },
    {
      id: '60',
      label: 'Days 31–60',
      title: 'Own a bounded problem',
      items: [
        'Take responsibility for a contained AI or automation workflow.',
        'Add observability and clear evaluation criteria.',
        'Improve documentation and repeatability.',
        'Validate requirements in English and Spanish where appropriate.',
        'Work with domain owners to identify false-positive, false-negative, and governance concerns.',
        'Deliver a usable proof of concept or production improvement.',
      ],
    },
    {
      id: '90',
      label: 'Days 61–90',
      title: 'Create reusable value',
      items: [
        'Convert repeated implementation patterns into reusable tools or templates.',
        'Improve model or agent evaluation.',
        'Strengthen monitoring and handoff documentation.',
        'Identify one high-value automation opportunity.',
        'Present findings clearly to technical and business stakeholders.',
        'Recommend the next step based on evidence rather than novelty.',
      ],
    },
  ],
};

/**
 * Banesco USA — AI Developer (Miami).
 * Compact recruiter dossier: applied AI, AWS/Snowflake cloud data, bilingual delivery,
 * honest GCP / Vertex AI / Gemini Enterprise Agent Space platform ramp.
 */
export const banescoAiDeveloperOpportunity: Opportunity = {
  slug: 'banesco-ai-developer',
  status: 'active',
  listed: true,
  variant: 'compact',
  applicationBanner: banescoAiDeveloperBanner,
  seo: {
    title: 'Moises Sanabria — AI Developer, applied to Banesco USA',
    description:
      'A bilingual applied-AI engineering dossier covering cloud data systems, generative AI products, retrieval, automation, and client-facing delivery in Miami.',
    indexable: false,
    keywords: [
      'bilingual AI engineer',
      'AI Developer Miami',
      'applied AI engineer',
      'generative AI banking',
      'bilingual software engineer',
      'Spanish-speaking AI engineer',
      'cloud data engineer',
      'AI automation',
      'Miami fintech engineer',
      'Banesco USA',
    ],
  },
  visibilityNote:
    'Private role-specific dossier prepared for Banesco USA’s AI Developer position. Not affiliated with or endorsed by Banesco USA.',
  company: 'Banesco USA',
  roleTitle: 'AI Developer',
  heroEyebrow: 'BANESCO USA · AI DEVELOPER · MIAMI',
  heroRoleMeta: 'Applied AI · cloud data systems · bilingual delivery',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Applied AI, cloud data systems, and bilingual delivery for real banking operations.',
  heroMetaChips: [
    'Applied AI',
    'Full-stack engineering',
    'Cloud data pipelines',
    'Retrieval systems',
    'Intelligent automation',
    'Bilingual English / Spanish',
    'Solutions engineering',
    'Miami-based',
  ],
  heroPrimaryCta: { label: 'Review Applied AI Evidence', href: '#case-studies' },
  heroSecondaryCta: { label: 'Download Résumé', href: '#resume' },
  audienceKeywords: {
    lead: 'Prepared for Banesco USA technology and business evaluators.',
    terms: [
      {
        label: 'Applied AI',
        detail: 'Lore Machine founding engineer; retrieval prototypes; production automation with human approval.',
      },
      {
        label: 'Cloud data (AWS)',
        detail: 'Playwire: Kinesis → Athena → Snowflake, Tableau BI, Slack data-quality alerting.',
      },
      {
        label: 'Bilingual Miami',
        detail: 'English and Spanish professional fluency; stakeholder and solutions delivery.',
      },
      {
        label: 'GCP ramp (honest)',
        detail: 'Strongest production cloud is AWS — Vertex AI / Gemini Enterprise Agent Space are intentional learning targets.',
      },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'skills', label: 'Materials' },
    { id: 'process', label: 'Platform ramp' },
    { id: 'plan', label: '90 days' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'Applied AI, cloud data systems, and bilingual delivery for real banking operations.',
    subheadline: 'AI Developer · Banesco USA · Miami',
    introParagraphs: [
      'I am a Miami-based full-stack and applied-AI engineer with experience building generative products, cloud data pipelines, retrieval systems, automation workflows, and client-facing technical solutions.',
      'I am fully bilingual in English and Spanish, with professional experience translating between technical systems, business priorities, and the people who need to use them.',
      'My strongest production cloud experience is in AWS, Snowflake, and Supabase rather than GCP and Vertex AI. I am approaching that gap directly: the transferable architecture is already part of my practice, and the platform-specific layer is the area I would ramp on first.',
      verifierBoundaryNote,
    ],
    trustLine:
      'Miami Beach, Florida · Authorized to work in the United States · Available for an in-person interview · English and Spanish · Open to full-time work',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role-fit summary',
  roleMatchIntro:
    'Statuses are honest labels—not percentage scores: Demonstrated, Strongly transferable, Developing, Gap acknowledged, Adjacent.',
  roleMatchColumnHeaders: {
    left: 'Banesco need',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Applied AI development',
      evidence:
        '[Demonstrated] Founding engineer at Lore Machine; Institutional Memory Agent (prototype); CRM-style approval-queue automation; AI24 News; agent-orchestrated personal workflows; generative AI integrations and retrieval-system design.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: evidenceProjects['lore-machine'].imageAlt,
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Cloud data systems',
      evidence:
        '[Demonstrated / transferable] AWS Kinesis, Athena, Snowflake, Glue ETL, Tableau, data-consistency alerting, SQL, Supabase, and production data troubleshooting at Playwire.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — cloud data pipelines and analytics',
        local: true,
      },
    },
    {
      requirement: 'Predictive modeling',
      evidence:
        '[Developing] Experience with data pipelines, model-integrated systems, TensorFlow familiarity, and analytics provides a foundation, but direct ownership of banking-specific predictive models has not yet been demonstrated.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Analytics and decision-support context from Playwire BI work',
        local: true,
      },
    },
    {
      requirement: 'GCP and Vertex AI',
      evidence:
        '[Gap acknowledged] Current production experience is AWS-centered. GCP, Vertex AI, and Gemini Enterprise Agent Space would be an intentional platform ramp rather than an existing specialization.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Production AI application engineering — platform-agnostic product patterns',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Intelligent automation',
      evidence:
        '[Demonstrated] Human-in-the-loop CRM-style ops agents; retrieval-grounded institutional agent (prototype); Gmail and Airtable tool-calling workflows; automated alerting and monitoring; approval-gated workflow design.',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: evidenceProjects['n8n-gmail-intelligence'].imageAlt,
        local: evidenceProjects['n8n-gmail-intelligence'].imageLocal,
      },
    },
    {
      requirement: 'Bilingual client and stakeholder delivery',
      evidence:
        '[Demonstrated] Full professional fluency in English and Spanish; Venezuelan-born and Miami-based; solutions engineering; institutional technical education; workshops; stakeholder presentations; client and artist support.',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    },
    {
      requirement: 'Financial-services context',
      evidence:
        '[Adjacent] React Native work for a banking startup; ad-tech auction and reporting data at Playwire; production systems handling access, authentication, data quality, and permissions. No claim of direct ownership of core banking infrastructure.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Production commercial systems context',
        local: true,
      },
    },
    {
      requirement: 'Responsible AI deployment',
      evidence:
        '[Demonstrated / transferable] Grounding guards; golden-set evaluation (prototype agent); human-approved public outputs; Airtable approval queues; Row-Level Security patterns; auth systems; permission-aware automation.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Institutional systems and governed tooling context',
      },
    },
  ],
  featuredProjectIds: [
    'playwire-alumni',
    'lore-machine',
    'digital-culture-infrastructure',
    'n8n-gmail-intelligence',
    'ai24',
    'multimodal-image-systems',
  ],
  caseStudyColumns: 2,
  caseStudiesSectionTitle: 'Selected evidence — cloud data, applied AI, bilingual delivery',
  caseStudiesIntro:
    'Gallery I–III compressed into six evidence cards. Institutional Memory Agent is a local prototype/pilot—not verified-live production RAG and not banking data. CRM-style automation is framed honestly as approval-queue workflow design.',
  caseStudyOverrides: [
    {
      evidenceId: 'playwire-alumni',
      title: 'Kinesis → Athena → Snowflake',
      category: 'Gallery I · Cloud Data Systems & Pipelines',
      summary:
        'At Playwire I worked with ingested AWS Kinesis data stored and queried through Athena, then helped migrate that data into Snowflake to improve storage scalability and analytical performance. I also built Tableau tooling for U.S. and international auction data and Slack-integrated alerting for data-consistency issues—so recurring problems were easier to detect before they became repeated escalations. Banking is a different domain; the underlying work is familiar: controlled data movement, quality checks, observability, scalable querying, and business-facing analysis. No invented throughput or cost metrics.',
      skillTags: [
        'AWS Kinesis',
        'Athena',
        'Snowflake',
        'SQL',
        'Glue ETL',
        'Tableau',
        'Monitoring',
        'Slack alerting',
      ],
    },
    {
      evidenceId: 'lore-machine',
      title: 'Lore Machine',
      category: 'Gallery II · Applied Generative AI',
      summary:
        'As one of three founding engineers, I owned the frontend application, authentication system, and AI/data API integrations for a real-time generative storytelling product—from early prototype through production deployment. The work required translating rapidly changing model capabilities into a stable, understandable user experience across engineering, business, and marketing. Evidence that I can build the application, permissions, interfaces, and operational layer required for an AI system to be used responsibly.',
      skillTags: [
        'React',
        'Next.js',
        'TypeScript',
        'Supabase',
        'Vercel',
        'Auth',
        'AI APIs',
        'Prompt systems',
        'RLS',
      ],
      href: evidenceProjects['lore-machine'].href,
      linkLabel: 'View Lore Machine',
    },
    {
      evidenceId: 'digital-culture-infrastructure',
      title: 'Institutional Memory Agent',
      category: 'Gallery II · Applied Generative AI · Prototype',
      summary:
        'Retrieval-augmented question-answering design for cultural institutions using TypeScript, Supabase pgvector, OpenAI embeddings, hybrid keyword and semantic ranking, and grounding controls intended to reduce fabricated answers—plus golden-set evaluation and human approval before public-facing outputs. Status: local prototype / pilot (Infra24 Memory Agent). Not verified-live production RAG and not financial data. The same architecture patterns can support controlled knowledge access and documentation retrieval where traceability matters.',
      skillTags: [
        'RAG design',
        'pgvector',
        'Hybrid retrieval',
        'Grounding',
        'Evaluation',
        'Human approval',
        'Prototype',
      ],
      imageSrc: evidenceProjects['digital-culture-infrastructure'].imageSrc,
      imageAlt: 'Institutional digital infrastructure context for knowledge-agent prototyping',
      href: 'https://dcc.miami',
      linkLabel: 'Institutional context',
    },
    {
      evidenceId: 'n8n-gmail-intelligence',
      title: 'Approval-gated CRM-style automation',
      category: 'Gallery II · Intelligent automation',
      summary:
        `${automationProjectSpecs['n8n-gmail-intelligence'].summary} Recommendations and structured outputs route into reviewable pipeline state rather than unconstrained external action—useful autonomy without silent writes. Demonstrates intelligent automation that improves workflow without removing accountability from consequential decisions.`,
      skillTags: [
        'n8n',
        'AI Agent node',
        'Airtable',
        'Human-in-the-loop',
        'Structured scoring',
        'Approval queues',
      ],
      imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
      imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
      imageLocal: automationProjectSpecs['n8n-gmail-intelligence'].imageLocal,
    },
    {
      evidenceId: 'ai24',
      title: 'AI24 News',
      category: 'Gallery II · Applied Generative AI',
      summary:
        'A real-time AI-native news application combining external news data, generative illustration, frontend state management, database infrastructure, and AI observability inside a production-oriented web application. Where verified in prior role materials: Next.js, TypeScript, React Query, Jotai, Tailwind, Supabase, MediaStack, Together AI, and Helicone. Shows coordination of external data, model calls, application state, observability, and UX as one integrated system.',
      skillTags: [
        'Next.js',
        'Jotai',
        'Supabase',
        'React Query',
        'Tailwind',
        'MediaStack',
        'Together AI',
        'Helicone',
      ],
      href: 'https://ai24.live',
      linkLabel: 'View AI24',
    },
    {
      evidenceId: 'multimodal-image-systems',
      title: 'Oolite Digital Lab — bilingual, client-facing delivery',
      category: 'Gallery III · Bilingual delivery',
      summary:
        'As Technical Director of Digital at Oolite Arts, I own public-facing digital infrastructure and help artists and staff use AI, media, fabrication, and digital tools through workshops, documentation, troubleshooting, and daily operational support—including booking systems, lab operations, equipment readiness, signage, vendor coordination, and eighteen workshops delivered. I was born in Venezuela, grew up in the United States, and work fluently in English and Spanish across writing, conversation, presentations, and technical explanation. In South Florida, bilingual delivery affects discovery, trust, documentation, training, and adoption—not as decoration after a system is designed.',
      skillTags: [
        'Solutions / stakeholder delivery',
        'Workshops',
        'Documentation',
        'Lab operations',
        'English / Spanish',
        'Institutional support',
      ],
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'Oolite Digital Lab',
    },
  ],
  skillsSectionTitle: 'Materials — demonstrated vs developing',
  skillsMatrixRows: [
    {
      category: 'AI and agents',
      skills:
        'OpenAI embeddings/completions, RAG design, Supabase pgvector, hybrid retrieval, generative AI APIs, prompt systems, golden-set evaluation, human-in-the-loop workflows, Claude, Cursor, tool orchestration',
      icon: 'sparkles',
    },
    {
      category: 'Cloud and data',
      skills:
        'AWS, Kinesis, Athena, Snowflake, Glue ETL, S3, SageMaker familiarity, SQL, Tableau, Supabase, Docker',
      icon: 'cloud',
    },
    {
      category: 'Product engineering',
      skills:
        'JavaScript, TypeScript, React, Next.js, Node.js, Python, GraphQL, Tailwind, Auth0, Row-Level Security, Git',
      icon: 'code2',
    },
    {
      category: 'Developing platform knowledge',
      skills:
        'Google Cloud Platform · Vertex AI · Gemini Enterprise Agent Space · banking predictive modeling · model governance · drift monitoring — intentional ramp, not claimed production ownership',
      icon: 'layers',
    },
  ],
  processSectionTitle: 'Platform ramp — AWS experience → GCP learning targets',
  processIntro:
    'Directional mappings only—not identical one-to-one equivalents. I would arrive with production experience in AWS, Snowflake, Supabase, model integrations, retrieval, automation, and full-stack AI applications. I would not claim deep production ownership of GCP, Vertex AI, or Gemini Enterprise Agent Space.',
  processSteps: [
    {
      title: 'AWS → GCP architecture mapping',
      description:
        'Kinesis → Pub/Sub or Dataflow · Athena → BigQuery · S3 → Cloud Storage · Glue ETL → Dataflow / Dataproc / Cloud Data Fusion · SageMaker familiarity → Vertex AI · CloudFront / Amplify → Cloud CDN / Firebase / Cloud Run patterns · IAM and app permissions → Google Cloud IAM and service accounts.',
      logoIds: ['aws', 'python'],
    },
    {
      title: 'Vertex AI study focus',
      description:
        'Model endpoints, pipelines, evaluation, feature management, monitoring, model registry, permissions, deployment patterns, and governance—understanding Banesco’s existing conventions before proposing new architecture.',
    },
    {
      title: 'Gemini Enterprise Agent Space',
      description:
        'Enterprise retrieval, governed knowledge access, agent permissions, tool connections, evaluation, human review, logging, and security boundaries. Existing retrieval, orchestration, approval-queue, and grounding work provides the conceptual foundation; the learning task is correct implementation inside Google’s enterprise agent ecosystem.',
    },
    {
      title: 'Predictive modeling for banking (deepening)',
      description:
        'Customer segmentation, churn/attrition indicators, operational forecasting, anomaly detection, risk-aware evaluation, imbalanced datasets, explainability, drift monitoring, fairness, regulatory review, and human decision support. Banking models must be evaluated for data provenance, bias, drift, access control, and the operational cost of false positives and false negatives—not accuracy alone.',
    },
  ],
  innovationLabSectionTitle: 'Why Banesco USA',
  innovationLabLead: 'AI inside concrete operations—not isolated demos',
  innovationLabBody:
    'Banesco is compelling because the role places AI inside a concrete operational environment. Predictive modeling and intelligent automation are most valuable when they solve real problems for employees, customers, and business units. My background sits across the layers required to make that happen: full-stack product engineering, cloud data systems, generative AI, retrieval, workflow automation, technical troubleshooting, and stakeholder communication. I am Miami-based and fully bilingual in English and Spanish—so cultural and linguistic understanding can be part of technical discovery, implementation, documentation, and adoption. I would bring strong applied-AI and AWS-based production experience while being direct about the platform gap: GCP, Vertex AI, and Gemini Enterprise Agent Space are areas I would ramp on deliberately.',
  plan: banescoPlan,
  ctas: sprint2026Ctas('Banesco USA AI Developer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [
    'openai',
    'anthropic',
    'python',
    'typescript',
    'nextjs',
    'react',
    'aws',
    'snowflake',
    'tableau',
    'docker',
    'supabase',
    'n8n',
    'vercel',
    'github',
  ],
  resumeSectionTitle: 'Build useful AI systems for the people who depend on them.',
  resumeSectionNote:
    'I am interested in bringing applied-AI engineering, cloud data experience, bilingual communication, and responsible automation into Banesco’s Miami-based technology organization. Private role-specific dossier prepared for Banesco USA’s AI Developer position.',
};
