import type { Opportunity } from './types';
import type { SystemsDossier } from './systemsDossier';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import {
  affirmAiSolutionsSkillLogoBand,
  affirmCompanyLogos,
  moisesSanabriaHeadshot,
} from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';
import {
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { affirmAiSolutionsEngineerBanner } from '@/content/evidence/applicationBanners';

const systemsDossier: SystemsDossier = {
  fitSectionTitle: 'The role matches how I already work',
  fitPillars: [
    {
      id: 'ambiguity',
      title: 'From ambiguity to systems',
      body: 'I am most useful when the original request is incomplete, operationally messy, or spread across several tools and stakeholders.',
    },
    {
      id: 'ownership',
      title: 'Full-lifecycle ownership',
      body: 'I work across architecture, interface design, implementation, deployment, documentation, iteration, and maintenance rather than treating delivery as a handoff.',
    },
    {
      id: 'translation',
      title: 'Technical and human translation',
      body: 'As a Playwire Solutions Engineer I scoped and delivered publisher integrations for nontechnical buyers; I still translate constraints for artists, educators, administrators, partners, and leadership into actionable systems.',
    },
    {
      id: 'trust',
      title: 'AI that earns trust',
      body: 'From Lore Machine product AI through agentic operations workflows, I treat AI as a production dependency that needs evidence, permissions, failure handling, evaluation, and clear limits—not magical copy generation.',
    },
  ],
  architecture: {
    title: 'A governed employee knowledge system',
    subtitle:
      'A role-specific architecture study for the kind of system People Tech & Analytics could operate. This is a proposed implementation model, not a claim of access to Affirm’s internal systems.',
    disclaimer:
      'Proposed implementation model only. Not affiliated with or endorsed by Affirm. Not a claim of access to Affirm systems.',
    syntheticLabel: 'All sample employee information below is synthetic.',
    stages: [
      {
        id: 'sources',
        title: 'Knowledge and operational sources',
        nodes: [
          { id: 'workday', label: 'Workday' },
          { id: 'notion', label: 'Notion' },
          { id: 'policies', label: 'People policies' },
          { id: 'cases', label: 'Case-management records' },
          { id: 'hr-data', label: 'Structured HR data' },
          { id: 'docs', label: 'Approved internal documentation' },
        ],
      },
      {
        id: 'ingestion',
        title: 'Ingestion and modeling',
        nodes: [
          { id: 'connectors', label: 'Source connectors' },
          { id: 'schedule', label: 'Scheduled ingestion' },
          { id: 'parsing', label: 'Document parsing' },
          { id: 'dbt', label: 'dbt transformations' },
          { id: 'snowflake', label: 'Snowflake models' },
          { id: 'metadata', label: 'Metadata and ownership' },
          { id: 'classification', label: 'Data classification' },
        ],
      },
      {
        id: 'governance',
        title: 'Governance layer',
        nodes: [
          { id: 'identity', label: 'Employee identity' },
          { id: 'rbac', label: 'Role-based access control' },
          { id: 'doc-perms', label: 'Document-level permissions' },
          { id: 'policy', label: 'Data classification policy' },
          { id: 'retrieval-filter', label: 'Retrieval filtering' },
          { id: 'audit', label: 'Audit trail' },
        ],
      },
      {
        id: 'ai',
        title: 'AI service layer',
        nodes: [
          { id: 'query-class', label: 'Query classification' },
          { id: 'retrieval', label: 'Governed retrieval' },
          { id: 'context', label: 'Context assembly' },
          { id: 'router', label: 'Model router' },
          { id: 'schema', label: 'Structured-output schema' },
          { id: 'citations', label: 'Citation generation' },
          { id: 'confidence', label: 'Confidence assessment' },
        ],
      },
      {
        id: 'reliability',
        title: 'Reliability layer',
        nodes: [
          { id: 'validation', label: 'Validation' },
          { id: 'fallback', label: 'Fallback chain' },
          { id: 'circuit', label: 'External API circuit breakers' },
          { id: 'timeout', label: 'Timeout handling' },
          { id: 'hallucination', label: 'Hallucination checks' },
          { id: 'escalation', label: 'Human escalation' },
          { id: 'monitoring', label: 'Monitoring and evaluation' },
        ],
      },
      {
        id: 'application',
        title: 'Application layer',
        nodes: [
          { id: 'assistant', label: 'Employee assistant' },
          { id: 'console', label: 'People Operations console' },
          { id: 'case-api', label: 'Case summary API' },
          { id: 'actions', label: 'Internal workflow actions' },
          { id: 'feedback', label: 'Feedback and correction interface' },
        ],
      },
      {
        id: 'observability',
        title: 'Observability',
        nodes: [
          { id: 'traces', label: 'Request traces' },
          { id: 'sources-obs', label: 'Retrieval sources' },
          { id: 'model-sel', label: 'Model selection' },
          { id: 'val-fail', label: 'Validation failures' },
          { id: 'latency', label: 'Latency' },
          { id: 'cost', label: 'Cost' },
          { id: 'user-feedback', label: 'User feedback' },
          { id: 'esc-rate', label: 'Escalation rate' },
        ],
      },
    ],
    scenarios: [
      {
        id: 'parental-leave',
        question: 'What parental leave policy applies to me?',
        stageIds: ['sources', 'ingestion', 'governance', 'ai', 'reliability', 'application', 'observability'],
        nodeIds: [
          'policies',
          'docs',
          'parsing',
          'classification',
          'identity',
          'rbac',
          'retrieval-filter',
          'query-class',
          'retrieval',
          'citations',
          'confidence',
          'validation',
          'assistant',
          'sources-obs',
        ],
        summary:
          'Policy answer path: authorize the employee, retrieve only approved policy versions, require citations and confidence, then respond or escalate.',
      },
      {
        id: 'case-status',
        question: 'What is the status of my People Operations case?',
        stageIds: ['sources', 'ingestion', 'governance', 'ai', 'reliability', 'application', 'observability'],
        nodeIds: [
          'cases',
          'hr-data',
          'connectors',
          'metadata',
          'identity',
          'rbac',
          'doc-perms',
          'audit',
          'retrieval',
          'context',
          'schema',
          'validation',
          'escalation',
          'assistant',
          'console',
          'traces',
        ],
        summary:
          'Case status path: bind identity to case ownership, filter protected fields, return structured status with audit logging — escalate when classification is ambiguous.',
      },
      {
        id: 'onboarding',
        question: 'Which onboarding tasks are incomplete for this employee?',
        stageIds: ['sources', 'ingestion', 'governance', 'ai', 'reliability', 'application', 'observability'],
        nodeIds: [
          'workday',
          'hr-data',
          'docs',
          'snowflake',
          'dbt',
          'identity',
          'rbac',
          'query-class',
          'context',
          'schema',
          'validation',
          'assistant',
          'actions',
          'feedback',
          'user-feedback',
        ],
        summary:
          'Onboarding path: assemble structured task state from owned sources, enforce manager/ops visibility rules, and expose incomplete items as actionable workflow state.',
      },
    ],
  },
  permissions: {
    title: 'Trust boundary demonstration',
    subtitle: 'The same question produces different retrieval permissions by role.',
    question: 'Show me the documentation connected to Alex’s leave request.',
    syntheticLabel: 'Synthetic persona and case data. Names and cases are invented for demonstration.',
    principles: [
      'Authentication answers who the person is.',
      'Authorization answers what they can access.',
      'Retrieval must enforce those rules before context reaches the model.',
      'The model must never be used as the permission layer.',
    ],
    personas: [
      {
        id: 'employee',
        label: 'Employee',
        accessSummary: 'Can only access their own approved policy information and case status.',
        allowed: ['Own approved leave policy excerpts', 'Own case status fields', 'Self-service next steps'],
        denied: ['Other employees’ case records', 'Manager notes', 'Medical or protected case attachments'],
      },
      {
        id: 'manager',
        label: 'People Manager',
        accessSummary:
          'Can access manager-approved workflow information, but not confidential medical or protected case details.',
        allowed: [
          'Manager-approved workflow status for direct reports',
          'Scheduling and coverage context when authorized',
          'Policy guidance relevant to team leave',
        ],
        denied: ['Confidential medical details', 'Protected case narratives', 'Unassigned employee records'],
      },
      {
        id: 'people-ops',
        label: 'People Operations Partner',
        accessSummary: 'Can access authorized case records according to assigned role and audit requirements.',
        allowed: [
          'Assigned case records under role scope',
          'Policy versions and case timeline fields',
          'Correction and escalation pathways',
        ],
        denied: ['Systems outside role assignment', 'Unaudited bulk export of protected fields'],
      },
    ],
  },
  reliability: {
    title: 'The model is one dependency, not the system',
    subtitle: 'Production AI controls for governed employee answers.',
    pipelineSteps: ['Retrieve', 'Authorize', 'Generate', 'Validate', 'Cite', 'Respond or Escalate'],
    controls: [
      {
        id: 'schema',
        title: 'Structured output validation',
        purpose: 'Reject or repair responses that do not match the required schema.',
      },
      {
        id: 'citations',
        title: 'Grounded citations',
        purpose: 'Every policy answer should identify the governed source and version used.',
      },
      {
        id: 'threshold',
        title: 'Retrieval threshold',
        purpose: 'Do not answer when the retrieved evidence is weak or contradictory.',
      },
      {
        id: 'fallback',
        title: 'Model fallback',
        purpose: 'Route to an approved fallback model when the primary model fails or becomes unavailable.',
      },
      {
        id: 'circuit',
        title: 'Circuit breaker',
        purpose: 'Prevent repeated calls to an unhealthy external service.',
      },
      {
        id: 'boundary',
        title: 'Data boundary checks',
        purpose: 'Verify that unauthorized records have not entered the prompt context.',
      },
      {
        id: 'escalation',
        title: 'Human escalation',
        purpose: 'Escalate sensitive, ambiguous, or policy-changing questions to a qualified person.',
      },
      {
        id: 'eval',
        title: 'Evaluation and monitoring',
        purpose:
          'Measure groundedness, retrieval quality, refusal behavior, latency, cost, and correction rate.',
      },
    ],
  },
  translation: {
    title: 'Translate the request before building the solution',
    examples: [
      {
        id: 'chatbot',
        statedRequest: 'Can we make an AI chatbot for employee questions?',
        underlyingProblem:
          'Policies are fragmented, permissions differ by employee, documents change over time, and People Operations needs a correction path.',
        engineeringResponse:
          'Create governed retrieval, document ownership, permission-aware context assembly, citations, escalation, and an interface for corrections.',
      },
      {
        id: 'summarize',
        statedRequest: 'Can the model summarize every case automatically?',
        underlyingProblem:
          'Different cases contain different classifications of sensitive information, and summary quality needs to be reviewed against the source.',
        engineeringResponse:
          'Classify cases, restrict fields before generation, validate structured summaries, log source references, and route high-risk categories to human review.',
      },
      {
        id: 'integrate',
        statedRequest: 'Can we connect Workday, Notion, and the case tool?',
        underlyingProblem:
          'The systems have different identities, schemas, update cycles, ownership rules, and access models.',
        engineeringResponse:
          'Define canonical entities, source ownership, sync behavior, conflict resolution, authentication, authorization, observability, and failure recovery before treating integration as complete.',
      },
    ],
  },
  capabilityMap: {
    title: 'Relevant technical surface',
    subtitle: 'Grouped by how the work shows up in production—not a wall of logo badges.',
    groups: [
      {
        id: 'product',
        title: 'Product and application engineering',
        items: [
          'Full-stack web applications',
          'APIs',
          'Interface architecture',
          'Authentication patterns',
          'Data flows',
          'Internal tools',
          'Workflow design',
          'AI-assisted product development',
        ],
      },
      {
        id: 'ai',
        title: 'AI systems',
        items: [
          'Agent workflows',
          'Retrieval-based systems (architecture and demos)',
          'Prompt and context architecture',
          'Structured outputs',
          'Model evaluation',
          'Human-in-the-loop workflows',
          'Multi-step orchestration',
          'Failure-state design',
        ],
      },
      {
        id: 'production',
        title: 'Production ownership',
        items: [
          'Git and GitHub',
          'Deployment (Vercel and production web systems)',
          'Docker (verified training / ML ops context)',
          'Documentation',
          'Maintenance and operational troubleshooting',
          'Testing and QA as practiced on shipped products',
          'TODO: verify broader CI/CD pipeline ownership claims before listing as Demonstrated',
          'TODO: verify secrets-management and centralized monitoring stack claims',
        ],
      },
      {
        id: 'learning',
        title: 'Data and platform learning priorities',
        items: [
          'Snowflake-native application patterns beyond prior Athena→Snowflake migration work',
          'dbt conventions',
          'Snowpark Container Services',
          'Workday integration patterns',
          'Enterprise people-data governance',
          'Quicksilver (Affirm platform reference)',
        ],
      },
    ],
    closingStatement:
      'I would not represent platform familiarity as production mastery. My advantage is the ability to understand the system boundary quickly, build a working vertical slice, document the constraints, and take responsibility for closing the gap.',
  },
  plan: {
    title: 'How I would enter the role',
    disclaimer:
      'This plan is a candidate working method. It is not based on private knowledge of Affirm’s internal infrastructure.',
    phases: [
      {
        id: '30',
        label: 'First 30 days',
        title: 'Understand the system',
        items: [
          'Map the People Tech & Analytics platform, stakeholders, source systems, access policies, and deployment path.',
          'Study existing Snowflake, dbt, Quicksilver, and Snowpark Container Services conventions.',
          'Review current AI applications, incident patterns, evaluation methods, and governance requirements.',
          'Shadow People Operations workflows.',
          'Select one narrow, high-value vertical slice.',
          'Ship a low-risk improvement or diagnostic tool.',
        ],
      },
      {
        id: '60',
        label: 'Days 31–60',
        title: 'Ship one governed vertical slice',
        items: [
          'Implement one production workflow from source to interface.',
          'Define identity, authorization, data classification, and audit behavior.',
          'Add structured-output validation, citations, monitoring, and escalation.',
          'Document architecture and operational ownership.',
          'Validate the system with People Operations stakeholders.',
          'Establish baseline quality, latency, cost, and correction metrics.',
        ],
      },
      {
        id: '90',
        label: 'Days 61–90',
        title: 'Strengthen and generalize',
        items: [
          'Address observed failure modes.',
          'Add fallback behavior and evaluation coverage.',
          'Turn repeated patterns into shared Python utilities or platform components.',
          'Improve developer documentation and deployment workflows.',
          'Identify the next two systems where the architecture can be reused.',
          'Present outcomes, limitations, and a responsible scaling plan.',
        ],
      },
    ],
  },
  caseStudiesTitle: 'Selected systems I have owned',
  caseStudiesIntro:
    'Focused ownership evidence for this role—ambiguity, stakeholders, production responsibility, and transferability—not a generic portfolio grid.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: 'Lore Machine',
      category: 'Founding engineer · AI product',
      ambiguity:
        'Building AI-native narrative-to-media product experiences before a complete predefined specification existed.',
      stakeholders: 'CEO, engineering peers, contractors, business and marketing partners',
      ownership:
        'Former founding engineer and Chief Prompt Officer — frontend, authentication, AI/data API integrations, prompt workflows, and generative media pipelines.',
      systemBuilt:
        'Real-time generative storytelling platform turning scripts, books, and lyrics into structured multimedia outputs.',
      production:
        'Deployed on Vercel from early prototype through production; owned iteration after launch.',
      challenge:
        'Translating emerging model capabilities into usable interfaces and workflows under shifting product requirements.',
      outcome:
        'Shipped AI product surfaces with full-stack ownership across interface, integrations, and prompt operations.',
      roleConnection:
        'Matches Affirm’s need to ship AI-powered products from incomplete specifications with continuing ownership.',
      skillTags: evidenceProjects['lore-machine'].skillTags,
      href: evidenceProjects['lore-machine'].href,
      linkLabel: 'View Lore Machine',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
      evidenceStatus: 'demonstrated',
    },
    {
      id: 'oolite',
      title: 'Oolite Arts Digital Lab',
      category: 'Technical Director · operational systems',
      ambiguity:
        'Operational and technical systems spanning artists, educators, staff, and leadership without a single “product” brief.',
      stakeholders: 'Artists, educators, program teams, leadership, community partners, vendors',
      ownership:
        'Technical Director of Digital — web systems, lab operations, equipment programs, documentation, education surfaces, and grant-facing digital infrastructure.',
      systemBuilt:
        'Day-to-day digital lab infrastructure and workflows that keep production spaces, programs, and public education running.',
      production:
        'Owns systems after launch: diagnosing operational failures, coordinating vendors, and maintaining documentation.',
      challenge:
        'Translating needs across technical and nontechnical teams while keeping production readiness for real programs.',
      outcome:
        'Transferable operational systems leadership—not an enterprise HR product, but the same stakeholder and ownership pattern Affirm’s People systems require.',
      roleConnection:
        'Directly maps to working with nontechnical stakeholders and owning systems beyond implementation.',
      skillTags: [
        'Operational systems',
        'Stakeholder translation',
        'Documentation',
        'Lab infrastructure',
        'Education programs',
      ],
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'Oolite Digital Lab',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      evidenceStatus: 'demonstrated',
    },
    {
      id: 'playwire',
      title: 'Playwire — Solutions Engineer & Data Analyst',
      category: 'Solutions engineering · data systems',
      ambiguity:
        'Publisher clients needed SaaS integrations and reliable data without waiting for perfect specifications or dedicated client engineering teams.',
      stakeholders: 'Business Development, publisher clients, client-side teams, data consumers',
      ownership:
        'Solutions Engineer for publisher implementations and JavaScript debugging into Playwire’s SaaS product; Data Analyst for Athena→Snowflake migration, Tableau auction analytics, and Slack reliability alerts.',
      systemBuilt:
        'Customer-facing onboarding and integration delivery plus scalable warehouse paths for auction and pipeline data.',
      production:
        'Owned live client implementations and data reliability paths—diagnosis when publisher or pipeline failures appeared in production.',
      challenge:
        'Translating incomplete publisher requirements into working integrations while keeping nontechnical stakeholders aligned.',
      outcome:
        'Two-year in-house track that pairs solutions engineering with Snowflake-adjacent data ownership—the core motion of an AI Solutions Engineer role.',
      roleConnection:
        'Direct solutions-engineering experience with stakeholders, incomplete specs, and production ownership; data work transfers to Affirm’s Snowflake-aware stack.',
      skillTags: evidenceProjects['playwire-alumni'].skillTags,
      imageSrc: evidenceProjects['playwire-alumni'].imageSrc,
      imageAlt: evidenceProjects['playwire-alumni'].imageAlt,
      evidenceStatus: 'demonstrated',
    },
    {
      id: 'n8n-gmail',
      title: automationProjectSpecs['n8n-gmail-intelligence'].title,
      category: 'Agentic workflow · production ops',
      ambiguity:
        'Inbox volume and recruiter signals needed triageable structure without a dedicated engineering team owning the process.',
      stakeholders: 'Self as operator; recruiter/opportunity pipeline consumers',
      ownership: 'Architecture, workflow implementation, routing taxonomy, and ongoing maintenance.',
      systemBuilt:
        automationProjectSpecs['n8n-gmail-intelligence'].summary,
      production:
        'Production n8n workflow with AI Agent classification, structured labeling, and Airtable sync.',
      challenge:
        'Designing failure-aware routing so misclassified mail does not silently corrupt the pipeline.',
      outcome:
        'Inbox volume becomes structured opportunity data with an explicit automation ownership path.',
      roleConnection:
        'Evidence of agent workflows, structured outputs, and production responsibility on an operational system.',
      skillTags: [...automationProjectSpecs['n8n-gmail-intelligence'].skillTags],
      imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
      imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
      imageLocal: automationProjectSpecs['n8n-gmail-intelligence'].imageLocal,
      evidenceStatus: 'demonstrated',
    },
  ],
  whyCompany: {
    title: 'Why this particular role',
    paragraphs: [
      'This role is compelling because it treats AI engineering as operational systems work rather than isolated model experimentation. That combination—solutions delivery plus production AI ownership—matches my Playwire Solutions Engineer track and Lore Machine founding-engineer work.',
      'I am also drawn to the team’s position inside the People function. Employee-facing AI has to be useful without becoming careless. It requires close work with domain experts, visible system boundaries, careful access control, and an honest understanding of where automation should stop.',
      'The opportunity to build for more than 2,000 employees, on a small team with meaningful autonomy, is the scale and level of ownership I am seeking.',
    ],
  },
  gapStatement: {
    title: 'What I would need to learn quickly',
    body: 'The most role-specific parts of the stack are Snowflake-native application deployment, Snowpark Container Services, Quicksilver, dbt conventions, and Workday’s integration surface. I would treat these as concrete engineering gaps to close, not vocabulary to hide behind. My relevant advantage is a history of entering undefined technical environments, understanding the system, building a working path through it, and becoming responsible for the result.',
  },
  roleReference: {
    title: 'Role reference',
    fields: [
      { label: 'Company', value: 'Affirm' },
      { label: 'Team', value: 'People Tech & Analytics' },
      { label: 'Role', value: 'AI Solutions Engineer' },
      { label: 'Location', value: 'Remote US' },
      { label: 'Pay grade', value: 'O' },
      { label: 'Equity grade', value: '12' },
      { label: 'Florida / other-state base range', value: '$195,000–$255,000' },
      { label: 'CA, WA, NY, NJ, CT base range', value: '$220,000–$280,000' },
      { label: 'Visa sponsorship', value: 'Not available' },
      { label: 'Work model', value: 'Remote-first role' },
    ],
    platformReferences: [
      'Snowflake',
      'Snowpark Container Services',
      'Quicksilver',
      'Python',
      'dbt',
      'Workday',
      'Notion',
      'Case-management systems',
    ],
    // TODO: set listingUrl when a verified Affirm careers URL is available.
  },
  ctaTitle: 'Let’s build the system behind the promise',
  ctaBody:
    'I would welcome the opportunity to discuss how I approach ambiguous operational problems, production AI reliability, stakeholder translation, and full-lifecycle ownership.',
};

export const affirmAiSolutionsEngineerOpportunity: Opportunity = {
  slug: 'affirm-ai-solutions-engineer',
  status: 'active',
  listed: true,
  variant: 'systems-dossier',
  seo: {
    title: 'Moises Sanabria — AI Solutions Engineer Application for Affirm',
    description:
      'A role-specific application demonstrating Moises Sanabria’s approach to production AI systems, governed knowledge, stakeholder translation, reliability, and full-lifecycle engineering.',
    indexable: true,
  },
  visibilityNote:
    'Candidate application page for Affirm. Not affiliated with or endorsed by Affirm.',
  company: 'Affirm',
  roleTitle: 'AI Solutions Engineer',
  heroEyebrow: 'Application for Affirm',
  heroRoleMeta: 'Remote US · People Tech & Analytics',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'I turn ambiguous, cross-functional problems into working AI products, operational tools, and production systems—as a solutions engineer, founding AI engineer, and technical director.',
  heroMetaChips: [
    'Remote US',
    'Solutions + AI engineering',
    'Full-stack AI systems',
    'Product and stakeholder ownership',
  ],
  heroPrimaryCta: { label: 'Explore role alignment', href: '#fit' },
  heroSecondaryCta: { label: 'View selected systems', href: '#systems-demo' },
  companyLogoSrc: affirmCompanyLogos.light,
  companyLogoSrcDark: affirmCompanyLogos.dark,
  companyLogoAlt: affirmCompanyLogos.alt,
  applicationBanner: affirmAiSolutionsEngineerBanner,
  animatedLogoBand: affirmAiSolutionsSkillLogoBand,
  navItems: [
    { id: 'fit', label: 'Fit' },
    { id: 'systems-demo', label: 'Systems demo' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'work', label: 'Work' },
    { id: 'reliability', label: 'Reliability' },
    { id: 'approach', label: 'Approach' },
    { id: 'plan', label: '30/60/90' },
    { id: 'contact', label: 'Contact' },
  ],
  audienceKeywords: {
    lead: 'Built for Affirm People Tech & Analytics evaluators.',
    terms: [
      {
        label: 'Solutions engineering',
        detail: 'Playwire Solutions Engineer — publisher integrations, debugging, and client delivery.',
      },
      {
        label: 'AI engineering',
        detail: 'Lore Machine founding engineer; agentic ops workflows; production AI product surfaces.',
      },
      {
        label: 'Governed systems thinking',
        detail: 'Permissions, citations, and failure handling before generation.',
      },
      {
        label: 'Full-lifecycle ownership',
        detail: 'Architecture through maintenance—not a handoff after the demo.',
      },
    ],
  },
  hero: {
    headline: 'AI Solutions Engineer',
    subheadline: 'Remote US · People Tech & Analytics',
    introParagraphs: [
      'I am a full-stack AI engineer, former Playwire Solutions Engineer and Data Analyst, technical director, and founding engineer. That combination—customer-facing solutions delivery, AI product engineering, and operational systems ownership—is how I approach roles like Affirm’s AI Solutions Engineer.',
      'My strongest work begins before a clean specification exists: identifying the real problem, designing the system, shipping it, and staying responsible for what happens after launch.',
    ],
    trustLine: 'Moises Sanabria · Miami / Remote US',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role requirement to demonstrated evidence',
  roleMatchIntro:
    'Transparent labels distinguish demonstrated work, transferable experience, role-specific demonstrations on this page, and learning priorities.',
  roleMatchColumnHeaders: {
    left: 'Affirm requirement',
    right: 'Evidence to present',
  },
  roleMatchRows: [
    {
      requirement: 'Build from an incomplete specification',
      evidence:
        'Playwire Solutions Engineer publisher implementations; Lore Machine founding engineering; Oolite Technical Director responsibilities.',
      status: 'demonstrated',
    },
    {
      requirement: 'Ship AI-powered products',
      evidence: 'Lore Machine founding engineer / Chief Prompt Officer; production agentic workflows (n8n Gmail intelligence).',
      status: 'demonstrated',
    },
    {
      requirement: 'Customer-facing / solutions delivery',
      evidence:
        'Playwire Solutions Engineer: scoped and delivered publisher SaaS integrations, JavaScript debugging, and onboarding for nontechnical client teams.',
      status: 'demonstrated',
    },
    {
      requirement: 'Work with nontechnical stakeholders',
      evidence:
        'Playwire clients and BD partners; Oolite Arts artists, educators, program teams, and leadership; community and institutional partners.',
      status: 'demonstrated',
    },
    {
      requirement: 'Own systems beyond implementation',
      evidence:
        'Deployment, operations, documentation, troubleshooting, and ongoing maintenance across Lore Machine, Oolite Digital Lab, and production automations.',
      status: 'demonstrated',
    },
    {
      requirement: 'Design full-stack architecture',
      evidence: 'Selected full-stack applications and the governed employee-knowledge architecture study on this page.',
      status: 'demonstrated',
    },
    {
      requirement: 'Production Python',
      evidence:
        'Python appears in Lore Machine and ML training context (StyleGAN / Docker). Broader production Python ownership claims need interview-depth verification.',
      status: 'todo',
    },
    {
      requirement: 'CI/CD and containerization',
      evidence:
        'Vercel production deploys and Docker in verified ML training context. Broader CI/CD pipeline ownership: TODO verify evidence.',
      status: 'todo',
    },
    {
      requirement: 'Snowflake and dbt',
      evidence:
        'Playwire Data Analyst: migrated Kinesis/Athena pipelines into Snowflake. dbt and Snowflake-native application patterns remain learning priorities—not claimed as Affirm-stack mastery.',
      status: 'transferable',
    },
    {
      requirement: 'Snowpark Container Services',
      evidence:
        'Transferable container and deployment experience (Docker, Vercel). No direct Snowpark Container Services claim.',
      status: 'learning',
    },
    {
      requirement: 'Workday integration',
      evidence:
        'Integration architecture demonstrated through the synthetic governed employee-system study on this page—not professional Workday delivery.',
      status: 'role-specific',
    },
    {
      requirement: 'Data governance and RBAC',
      evidence: 'Trust-boundary architecture and permission scenario on this page.',
      status: 'role-specific',
    },
    {
      requirement: 'Multi-model reliability',
      evidence: 'Reliability control panel on this page; production AI product ownership at Lore Machine for model-dependent shipping.',
      status: 'role-specific',
    },
    {
      requirement: 'Diagnose production failures',
      evidence:
        'Operational troubleshooting as Technical Director of Digital; production automation maintenance; shipped product iteration after launch.',
      status: 'demonstrated',
    },
  ],
  featuredProjectIds: ['lore-machine', 'playwire-alumni', 'n8n-gmail-intelligence'],
  caseStudiesSectionTitle: 'Selected systems I have owned',
  skillsSectionTitle: 'Relevant technical surface',
  skillsMatrixRows: [
    {
      category: 'Solutions engineering',
      skills: 'Discovery, scoping, demos, publisher/SaaS integrations, stakeholder runbooks (Playwire)',
      icon: 'target',
    },
    {
      category: 'Product engineering',
      skills: 'Full-stack apps, APIs, auth patterns, internal tools, workflow design',
      icon: 'workflow',
    },
    {
      category: 'AI systems',
      skills: 'Agent workflows, prompt/context architecture, structured outputs, failure-state design',
      icon: 'sparkles',
    },
    {
      category: 'Data-adjacent',
      skills: 'Snowflake migration experience (Playwire); dbt / Snowpark / Workday as learning priorities',
      icon: 'lineChart',
    },
  ],
  processSectionTitle: 'How I take an undefined problem into production',
  processIntro: 'A six-stage working method I reuse when the request is incomplete.',
  processSteps: [
    {
      title: 'Observe the actual workflow',
      description:
        'Talk to the people doing the work, inspect the tools, and identify where information, ownership, and decisions break down.',
    },
    {
      title: 'Define the system boundary',
      description:
        'Clarify users, permissions, source systems, failure modes, constraints, and what the AI must not decide.',
    },
    {
      title: 'Build a vertical slice',
      description: 'Connect one real workflow from source data to interface before expanding the architecture.',
    },
    {
      title: 'Make trust visible',
      description: 'Expose sources, permissions, state, confidence, and escalation paths in the interface.',
    },
    {
      title: 'Deploy and instrument',
      description: 'Add logging, monitoring, error handling, validation, documentation, and ownership.',
    },
    {
      title: 'Learn from production',
      description:
        'Review failure patterns, stakeholder feedback, corrections, latency, cost, and adoption before adding more automation.',
    },
  ],
  innovationLabSectionTitle: 'Systems orientation',
  innovationLabLead: 'Operational AI · governed knowledge',
  innovationLabBody:
    'People-facing AI succeeds when permissions, evidence, and escalation are part of the product—not afterthoughts around a model call.',
  ctas: recruitingCtas({
    emailSubject: 'Affirm AI Solutions Engineer — Moises Sanabria',
    caseStudiesAnchor: '#work',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
  }),
  techLogoIds: [
    'python',
    'openai',
    'typescript',
    'nextjs',
    'react',
    'vercel',
    'snowflake',
    'n8n',
    'airtable',
    'docker',
    'azure',
    'github',
  ],
  resumeSectionTitle: systemsDossier.ctaTitle,
  resumeSectionNote: systemsDossier.ctaBody,
  systemsDossier,
};
