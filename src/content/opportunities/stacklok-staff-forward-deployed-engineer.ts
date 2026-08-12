import type { Opportunity } from './types';
import type { SystemsDossier } from './systemsDossier';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';
import { stacklokStaffForwardDeployedEngineerBanner } from '@/content/evidence/applicationBanners';
import {
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';

const STACKLOK_COVER_LETTER_URL =
  'https://drive.google.com/file/d/1Q9UxrNq2vVouGFclUJvGTZP0QAAYbnJl/view?usp=sharing';

const stacklokLogoBand = [
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', height: 36 },
  { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js', height: 36 },
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', height: 36 },
  { src: 'https://cdn.simpleicons.org/nextdotjs', alt: 'Next.js', height: 36 },
  { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python', height: 36 },
  { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', height: 36 },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel', height: 36 },
  { src: 'https://cdn.simpleicons.org/n8n/EA4B71', alt: 'n8n', height: 36 },
  { src: 'https://cdn.simpleicons.org/snowflake/29B5E8', alt: 'Snowflake', height: 36 },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub', height: 36 },
];

const systemsDossier: SystemsDossier = {
  heroDiagram: 'enterprise-ai-deployment',
  evidenceBeforeArchitecture: true,
  architectureSectionId: 'operating-model',
  positioningStatement: {
    title: 'Why Stacklok',
    paragraphs: [
      'Enterprise AI adoption will not be solved by models alone. Organizations need secure connectivity to the tools and data they already trust, deployment standards that survive real environments, governance that security teams can defend, and observability that shows what agents and services are actually doing.',
      'Stacklok sits at that intersection: Kubernetes-native infrastructure, MCP and AI-agent connectivity, AI gateways, and open-source foundations aimed at regulated and security-conscious organizations. That is the kind of production problem I want to help define — how AI reaches production without becoming a shadow IT risk.',
      'I am drawn to forward deployed work because it forces the honest loop: customer reality → working deployment → reusable pattern → product feedback. That loop is where durable platforms get built.',
    ],
    annotation:
      'Candidate positioning only. Not affiliated with or endorsed by Stacklok. Not a claim of access to Stacklok systems or customer environments.',
  },
  fitSectionTitle: 'How I already work as a forward deployed engineer',
  fitIntro:
    'Adjacent strengths that reduce ramp risk — paired with an honest Kubernetes platform gap called out later on this page.',
  fitPillars: [
    {
      id: 'ambiguity',
      title: 'No playbook required',
      body: 'I am most useful when requirements are incomplete: scoping the real constraint, shipping a credible path, and leaving documentation behind.',
    },
    {
      id: 'customer',
      title: 'Customer-facing delivery',
      body: 'Playwire Solutions Engineer work and institutional technical leadership trained me to translate between buyers, operators, and engineers without losing technical accuracy.',
    },
    {
      id: 'ai-first',
      title: 'AI-first engineering judgment',
      body: 'I use agentic workflows, LLM integrations, and AI-assisted development to move faster — with human approval gates where production risk demands it.',
    },
    {
      id: 'repeatability',
      title: 'Field insight → reusable systems',
      body: 'Engagements should leave more than a one-off demo: runbooks, patterns, internal tools, and clear escalation paths back to product and platform teams.',
    },
  ],
  architecture: {
    title: 'Forward deployed operating model',
    subtitle:
      'How I run an engagement from discovery through reusable delivery — illustrated as a systems path, not a Stacklok internal process claim.',
    disclaimer:
      'Candidate working method only. Not based on private knowledge of Stacklok’s playbooks, ToolHive internals, or customer accounts.',
    syntheticLabel: 'Illustrative engagement model — synthetic scenario labels.',
    scenariosLabel: 'Engagement scenarios',
    stages: [
      {
        id: 'discover',
        title: 'Discover',
        nodes: [
          { id: 'goals', label: 'Org goals' },
          { id: 'constraints', label: 'Constraints' },
          { id: 'stakeholders', label: 'Stakeholders' },
          { id: 'security', label: 'Security needs' },
          { id: 'environment', label: 'Environment' },
        ],
      },
      {
        id: 'architect',
        title: 'Architect',
        nodes: [
          { id: 'path', label: 'Smallest production path' },
          { id: 'boundaries', label: 'System boundaries' },
          { id: 'integrations', label: 'Integrations' },
          { id: 'deploy-model', label: 'Deployment model' },
          { id: 'success', label: 'Success criteria' },
        ],
      },
      {
        id: 'prototype',
        title: 'Prototype',
        nodes: [
          { id: 'risk', label: 'Expose technical risk' },
          { id: 'feedback', label: 'User feedback' },
          { id: 'iterate', label: 'Fast iteration' },
        ],
      },
      {
        id: 'deploy',
        title: 'Deploy',
        nodes: [
          { id: 'ops-env', label: 'Operational environment' },
          { id: 'docs', label: 'Documentation' },
          { id: 'tests', label: 'Testing' },
          { id: 'perms', label: 'Permissions' },
          { id: 'handoff', label: 'Handoff plan' },
        ],
      },
      {
        id: 'observe',
        title: 'Observe',
        nodes: [
          { id: 'logs', label: 'Logs' },
          { id: 'analytics', label: 'Analytics' },
          { id: 'behavior', label: 'Production behavior' },
          { id: 'failures', label: 'Failure modes' },
        ],
      },
      {
        id: 'standardize',
        title: 'Standardize',
        nodes: [
          { id: 'components', label: 'Reusable components' },
          { id: 'runbooks', label: 'Runbooks' },
          { id: 'refs', label: 'Reference architectures' },
          { id: 'patterns', label: 'Deployment patterns' },
        ],
      },
      {
        id: 'feedback-product',
        title: 'Feed back',
        nodes: [
          { id: 'priorities', label: 'Product priorities' },
          { id: 'roadmap', label: 'Roadmap decisions' },
          { id: 'escalation', label: 'Escalation paths' },
        ],
      },
    ],
    scenarios: [
      {
        id: 'first-mcp',
        question: 'First MCP / agent connectivity in a cautious enterprise',
        stageIds: ['discover', 'architect', 'prototype', 'deploy', 'observe', 'standardize'],
        nodeIds: ['security', 'environment', 'path', 'integrations', 'perms', 'docs', 'runbooks'],
        summary:
          'Start with constraints and trust boundaries, prove a narrow connectivity path, deploy with documentation and permissions, then turn the engagement into a repeatable pattern.',
      },
      {
        id: 'blocked-deploy',
        question: 'Deployment blocked by permissions, networking, or runtime gaps',
        stageIds: ['discover', 'architect', 'deploy', 'observe', 'standardize', 'feedback-product'],
        nodeIds: ['constraints', 'security', 'deploy-model', 'failures', 'runbooks', 'escalation', 'priorities'],
        summary:
          'Diagnose the environmental blocker, document the failure class, unblock the customer path, and feed the pattern upstream so the next engagement is faster.',
      },
      {
        id: 'design-partner',
        question: 'Design-partner engagement that should shape the platform',
        stageIds: [
          'discover',
          'architect',
          'prototype',
          'deploy',
          'observe',
          'standardize',
          'feedback-product',
        ],
        nodeIds: ['goals', 'stakeholders', 'success', 'feedback', 'behavior', 'patterns', 'roadmap'],
        summary:
          'Treat the customer as a source of product truth: ship a working path, measure what actually happens, and translate field evidence into roadmap decisions.',
      },
    ],
  },
  capabilityMap: {
    title: 'Technical capability map',
    subtitle: 'Verified capabilities grouped for this role — plus a clearly labeled deepening area.',
    groups: [
      {
        id: 'applied-ai',
        title: 'Applied AI',
        items: [
          'LLM integrations and prompt orchestration',
          'Agentic workflows and structured tool use',
          'Human-in-the-loop review paths',
          'Retrieval / embeddings design (prototype-honest where not production)',
          'AI coding assistants and AI-assisted engineering practice',
          'MCP concepts and expanding tool-server / agent-connectivity work',
        ],
      },
      {
        id: 'software',
        title: 'Software engineering',
        items: [
          'TypeScript / JavaScript',
          'Python',
          'React / Next.js',
          'APIs and application architecture',
          'SQL',
          'Testing judgment, automation, and internal tools',
        ],
      },
      {
        id: 'data-cloud',
        title: 'Data and cloud',
        items: [
          'AWS data paths (e.g. Kinesis / Athena contexts from Playwire)',
          'Cloud deployment (Vercel and related application delivery)',
          'Containers / Docker (verified training and ML ops adjacency)',
          'Data pipelines, analytics, ETL adjacency',
          'Databases, monitoring, and production debugging habits',
        ],
      },
      {
        id: 'delivery',
        title: 'Delivery and leadership',
        items: [
          'Customer discovery and technical scoping',
          'Stakeholder communication across technical and non-technical audiences',
          'Workshops, documentation, and mentorship',
          'Cross-functional coordination and roadmap feedback',
        ],
      },
    ],
    currentlyExtending: [
      'Kubernetes architecture (operators, CRDs, controllers — intensive ramp, not claimed expertise)',
      'RBAC and enterprise permission models in cluster contexts',
      'Helm and GitOps (Flux / ArgoCD) deployment patterns',
      'MCP deployment patterns in enterprise environments',
      'Cloud-native observability stacks',
      'Go for platform engineering',
    ],
    currentlyExtendingTitle: 'Currently deepening',
    closingStatement:
      'AI should accelerate engineering judgment, not replace it. My job in the field is to leave systems that are operable, inspectable, and reusable.',
  },
  plan: {
    title: '30 / 60 / 90 day contribution plan',
    subtitle: 'Practical onboarding for ToolHive, MCP, and customer engagements — not a promise to own an entire region alone.',
    disclaimer:
      'Candidate working method only. Not based on private knowledge of Stacklok’s roadmap, staffing plan, or customer pipeline.',
    phases: [
      {
        id: '30',
        label: 'First 30 days',
        title: 'Learn the platform and the field motion',
        items: [
          'Understand ToolHive, the enterprise platform surface, and the MCP registry ecosystem at a working level.',
          'Reproduce core deployment paths locally and in representative cloud environments.',
          'Learn existing support, escalation, and design-partner workflows.',
          'Study recurring customer blockers — especially permissions, networking, runtime, and integration gaps.',
          'Map boundaries between forward deployed engineering, platform engineering, and applied AI.',
          'Contribute documentation improvements while onboarding.',
        ],
      },
      {
        id: '60',
        label: 'Days 31–60',
        title: 'Own a bounded customer workstream',
        items: [
          'Support or co-lead a live customer engagement.',
          'Own a defined deployment or integration workstream end-to-end.',
          'Document recurring Kubernetes, permission, networking, or MCP deployment issues.',
          'Begin converting findings into reusable runbooks.',
          'Prototype AI-assisted delivery and troubleshooting tools for the team where they reduce toil.',
          'Contribute a scoped improvement upstream where appropriate.',
        ],
      },
      {
        id: '90',
        label: 'Days 61–90',
        title: 'Lead delivery and feed the platform',
        items: [
          'Lead a customer workstream from technical scoping through a functioning deployment.',
          'Establish a reusable engagement template for similar accounts.',
          'Improve escalation paths and technical handoffs.',
          'Present field patterns to product and engineering.',
          'Identify one high-leverage product or platform improvement based on customer evidence.',
          'Mentor through pairing, documentation, and design review — not by claiming sole regional ownership.',
        ],
      },
    ],
  },
  caseStudiesTitle: 'Selected experience',
  caseStudiesIntro:
    'Ordered for this role: generative AI product founding work, production data/solutions engineering, institutional technical leadership, and rapid AI delivery.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: 'Lore Machine — founding engineer / AI systems',
      category: 'Applied AI · product engineering',
      ambiguity:
        'A startup generative storytelling product without an established playbook — experimental models had to become usable creator software.',
      stakeholders: 'Creators, engineering teammates, contractors, marketing, and leadership',
      ownership:
        'Founding-engineer ownership of frontend application surfaces, authentication, AI/data API integrations, prompt-facing workflows, and production delivery on Vercel.',
      systemBuilt:
        'Real-time generative production workflows connecting narrative input, model operations, media generation interfaces, application state, and human revision loops.',
      production:
        'Helped carry the platform from early prototype through production deployment with customer-facing iteration.',
      challenge:
        'Translating experimental AI capabilities into inspectable product behavior when latency, variation, and failure modes were part of the product.',
      outcome:
        'A shipped AI-native product workflow where humans stay in control of generative output.',
      roleConnection:
        'Direct evidence of AI-first engineering, ambiguous startup delivery, and turning field/product feedback into working systems — adjacent to forward deployed enterprise AI work.',
      skillTags: evidenceProjects['lore-machine'].skillTags,
      href: '/projects/lore-machine',
      linkLabel: 'Full Lore Machine case study',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'playwire',
      title: 'Playwire — Solutions Engineer & Data Analyst',
      category: 'Customer delivery · data systems',
      ambiguity:
        'Publisher clients needed SaaS integrations and reliable reporting without perfect specifications or dedicated client engineering teams.',
      stakeholders: 'Business development, publisher clients, client-side teams, data consumers',
      ownership:
        'Solutions Engineer for publisher implementations and JavaScript debugging into Playwire’s SaaS product; Data Analyst for Athena→Snowflake migration paths, Tableau auction analytics, and Slack reliability alerts.',
      systemBuilt:
        'Customer-facing onboarding/integration delivery plus warehouse and analytics paths for auction and pipeline data.',
      production:
        'Owned live client implementations and data reliability paths when publisher or pipeline failures appeared in production.',
      challenge:
        'Communicating across technical and business teams while keeping production systems trustworthy.',
      outcome:
        'Two-year in-house track pairing solutions engineering with data systems ownership.',
      roleConnection:
        'Closest verified analogue to forward deployed customer delivery under production constraints.',
      skillTags: evidenceProjects['playwire-alumni'].skillTags,
      imageSrc: evidenceProjects['playwire-alumni'].imageSrc,
      imageAlt: evidenceProjects['playwire-alumni'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'oolite-digital-lab',
      title: 'Oolite Arts Digital Lab — technical leadership',
      category: 'Infrastructure · adoption · training',
      ambiguity:
        'An arts institution needed functioning digital infrastructure, operating practices, and support for users with uneven technical fluency.',
      stakeholders: 'Artists, educators, program staff, administrators, leadership',
      ownership:
        'Technical Director / Digital Lab leadership: systems, hardware-software integration, documentation, troubleshooting, workshops, and repeatable workflows.',
      systemBuilt:
        'Lab operating practices, production tooling, training paths, and support models that made advanced tools usable day to day.',
      production:
        'Ongoing operational ownership — not a one-time install — including adoption, repair, and documentation.',
      challenge:
        'Building infrastructure people will actually use, then teaching and supporting it across skill levels.',
      outcome:
        'Institutional technical capacity: deployment, adoption, and communication as one job.',
      roleConnection:
        'Shows the forward deployed muscle of standing up systems, training users, and leaving operable practices behind.',
      skillTags: ['Technical leadership', 'Documentation', 'Workshops', 'Systems', 'Support'],
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'Oolite Digital Lab',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'ai24-independent',
      title: 'AI24 / independent engineering — rapid production delivery',
      category: 'Customer-facing AI implementation',
      ambiguity:
        'Clients and internal products needed working AI applications, automations, and agentic workflows on short learning loops.',
      stakeholders: 'Product partners, operators, workshop audiences, institutional collaborators',
      ownership:
        'Full-stack AI application development, automation, technical discovery, prototyping, and delivery across AI24 and independent engineering engagements.',
      systemBuilt:
        'AI-native applications and agentic workflows (including production n8n AI Agent paths) that turn stated needs into operable systems.',
      production:
        'Shipped surfaces with iteration based on real usage — not slide-deck prototypes alone.',
      challenge:
        'Moving quickly without skipping permissions, review gates, or maintainability.',
      outcome:
        'A repeatable motion: discover → prototype → deploy → document.',
      roleConnection:
        'Evidence of customer-facing implementation speed with AI systems and automation.',
      skillTags: [
        ...evidenceProjects.ai24.skillTags.slice(0, 4),
        ...automationProjectSpecs['n8n-gmail-intelligence'].skillTags.slice(0, 3),
      ],
      href: evidenceProjects.ai24.href,
      linkLabel: 'AI24',
      imageSrc: evidenceProjects.ai24.imageSrc,
      imageAlt: evidenceProjects.ai24.imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
  ],
  whyCompany: {
    title: 'Why this role',
    paragraphs: [
      'Staff Forward Deployed Engineer at Stacklok matches the work I already do at the intersection of applied AI, customer delivery, and production systems — while giving me a clear, honest ramp into deeper Kubernetes-native platform engineering.',
    ],
  },
  gapStatement: {
    title: 'Where I would ramp fastest',
    body: 'My deepest experience is in applied AI systems, production applications, data workflows, and customer-facing delivery. Stacklok’s deepest Kubernetes platform requirements — particularly operators, CRDs, Go controllers, Helm, and GitOps — are areas I would approach as an intensive technical ramp rather than overstate. My record is one of entering unfamiliar systems, developing the necessary depth quickly, and turning that learning into reliable implementation and documentation.',
    riskReducersTitle: 'What reduces ramp risk',
    riskReducers: [
      'Production engineering judgment under incomplete specs',
      'Cloud and container foundations (not claimed operator/CRD expertise)',
      'Strong debugging habits across application and data systems',
      'AI-assisted learning and development with human review gates',
      'Comfort working directly with users and stakeholders',
      'Documentation discipline and systems thinking',
      'High ownership in ambiguous environments',
    ],
  },
  roleReference: {
    title: 'Role reference',
    fields: [
      { label: 'Company', value: 'Stacklok' },
      { label: 'Role', value: 'Staff Forward Deployed Engineer' },
      { label: 'Location', value: 'Remote — North America (U.S. Eastern Time preference)' },
      { label: 'Candidate base', value: 'Miami, FL — Eastern Time Zone' },
      { label: 'Travel', value: 'Available for occasional travel' },
    ],
    platformReferences: [
      'ToolHive',
      'MCP',
      'Kubernetes',
      'AI gateways',
      'Enterprise AI agents',
      'Open-source foundations',
    ],
    listingUrl: 'https://www.stacklok.com/',
    listingUrlLabel: 'stacklok.com',
  },
  ctaTitle: 'Enterprise AI needs field-to-platform engineers',
  ctaBody:
    'Enterprise AI needs engineers who can move between product, infrastructure, customer reality, and implementation. That is the work I have built my career around.',
};

export const stacklokStaffForwardDeployedEngineerOpportunity: Opportunity = {
  slug: 'stacklok-staff-forward-deployed-engineer',
  status: 'active',
  listed: true,
  variant: 'systems-dossier',
  applicationBanner: stacklokStaffForwardDeployedEngineerBanner,
  seo: {
    title: 'Moises Sanabria | Staff Forward Deployed Engineer - Stacklok',
    description:
      'A tailored application for Stacklok focused on enterprise AI deployment, customer-facing engineering, agentic systems, production software, and reusable technical delivery.',
    indexable: false,
    keywords: [
      'Staff Forward Deployed Engineer',
      'Stacklok',
      'ToolHive',
      'MCP',
      'enterprise AI',
      'Kubernetes',
      'forward deployed engineering',
      'AI agents',
    ],
  },
  visibilityNote:
    'Candidate application page for Stacklok. Not affiliated with or endorsed by Stacklok. Kubernetes platform depth is framed as an intensive ramp, not claimed expertise.',
  company: 'Stacklok',
  roleTitle: 'Staff Forward Deployed Engineer',
  heroEyebrow: 'STACKLOK · STAFF FORWARD DEPLOYED ENGINEER · REMOTE',
  heroRoleMeta: 'Remote — North America · U.S. Eastern Time Zone preference',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Building the systems, workflows, and customer partnerships that move enterprise AI from evaluation into production.',
  heroMetaChips: [
    'Applied AI engineering',
    'Customer-facing delivery',
    'Production software',
    'Agentic workflows',
    'Data & cloud systems',
    'Documentation & repeatability',
    'Kubernetes ramp (honest)',
  ],
  heroPrimaryCta: { label: 'View relevant work', href: '#work' },
  heroSecondaryCta: { label: 'Role fit matrix', href: '#evidence' },
  animatedLogoBand: stacklokLogoBand,
  navItems: [
    { id: 'why', label: 'Why Stacklok' },
    { id: 'fit', label: 'Fit' },
    { id: 'evidence', label: 'Role fit' },
    { id: 'work', label: 'Experience' },
    { id: 'operating-model', label: 'Operating model' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'approach', label: 'AI-assisted' },
    { id: 'plan', label: '30/60/90' },
    { id: 'gap', label: 'Ramp' },
    { id: 'contact', label: 'Contact' },
  ],
  audienceKeywords: {
    lead: 'Prepared for Stacklok hiring managers evaluating Staff Forward Deployed Engineer candidates.',
    terms: [
      {
        label: 'Field → platform',
        detail: 'Customer discovery and delivery that feeds reusable patterns and product direction.',
      },
      {
        label: 'AI-first delivery',
        detail: 'Agentic workflows, LLM integrations, and AI-assisted engineering with human judgment.',
      },
      {
        label: 'Production systems',
        detail: 'Full-stack products, data pipelines, automations, and operational debugging.',
      },
      {
        label: 'Honest K8s ramp',
        detail: 'Cloud/container foundation present; operators, CRDs, and Go controllers not overstated.',
      },
    ],
  },
  hero: {
    headline: 'Staff Forward Deployed AI Engineer',
    subheadline: 'Stacklok · Remote — North America',
    introParagraphs: [
      'I operate at the intersection of applied AI engineering, customer-facing technical delivery, production software, and the messy work of building systems where no playbook exists yet.',
      'Miami-based, operating in the U.S. Eastern Time Zone, and available for occasional travel.',
    ],
    trustLine: 'Moises Sanabria · Miami / Eastern Time · Remote North America',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role-fit matrix',
  roleMatchIntro:
    'Alignment labels use the shared evidence scale: Demonstrated ≈ strong alignment; Transferable ≈ relevant foundation or expanding practice; Learning ≈ developing / adjacent (including Kubernetes platform depth).',
  roleMatchColumnHeaders: {
    left: 'Stacklok need',
    right: 'Relevant evidence',
    status: 'Level of alignment',
  },
  roleMatchRows: [
    {
      requirement: 'Customer-facing enterprise delivery',
      evidence:
        'Translating ambiguous stakeholder needs into deployed systems, technical programs, internal tools, and reusable workflows (Playwire Solutions Engineer; Oolite Digital Lab; Lore Machine founding delivery).',
      status: 'demonstrated',
    },
    {
      requirement: 'AI-first engineering practices',
      evidence:
        'Agentic workflows, LLM integrations, AI-assisted development, prompt orchestration, automation, and production AI tooling (Lore Machine; n8n AI Agent paths; AI24).',
      status: 'demonstrated',
    },
    {
      requirement: 'Production software engineering',
      evidence:
        'Full-stack systems, data products, application architecture, testing judgment, deployment, and maintenance across product and institutional contexts.',
      status: 'demonstrated',
    },
    {
      requirement: 'Field insight into product direction',
      evidence:
        'Turning user and stakeholder feedback into product decisions, workflow improvements, and technical roadmaps in startup and institutional settings.',
      status: 'demonstrated',
    },
    {
      requirement: 'Reusable deployment patterns and playbooks',
      evidence:
        'Documentation, repeatable production pipelines, internal tools, teaching systems, and operational standards (Digital Lab; automation runbooks; product handoffs).',
      status: 'demonstrated',
    },
    {
      requirement: 'Technical leadership and mentorship',
      evidence:
        'Founding engineering work, Digital Lab leadership, workshops, stakeholder guidance, technical documentation, and cross-functional direction.',
      status: 'demonstrated',
    },
    {
      requirement: 'Kubernetes platform depth',
      evidence:
        'Cloud, container, deployment, and infrastructure experience — but not primary ownership of Kubernetes operators, CRDs, or Go controllers. Framed as an intensive ramp.',
      status: 'learning',
    },
    {
      requirement: 'MCP and AI-agent infrastructure',
      evidence:
        'AI tool integrations, agentic workflows, structured tool use, orchestration, and current MCP-focused engineering practice — strong and expanding, not claimed as Stacklok platform authorship.',
      status: 'transferable',
    },
    {
      requirement: 'Observability and production debugging',
      evidence:
        'Data systems, production troubleshooting, logging, analytics, debugging, monitoring, and iterative reliability improvements (Playwire data reliability; product ops).',
      status: 'transferable',
    },
    {
      requirement: 'Communication',
      evidence:
        'Translating complex systems for technical teams, institutional stakeholders, clients, artists, and non-technical users.',
      status: 'demonstrated',
    },
  ],
  featuredProjectIds: [],
  techLogoIds: [],
  skillsMatrixRows: [],
  processSectionTitle: 'AI-assisted engineering',
  processIntro:
    'AI should accelerate engineering judgment, not replace it. These are concrete daily practices — planning, generation with review, debugging support, documentation, and approval gates — not a claim that models own production decisions.',
  innovationLabLead: 'AI should accelerate engineering judgment, not replace it.',
  innovationLabBody:
    'In forward deployed work that matters especially: assistants can speed orientation and drafting, but permissions, customer trust, and production failure modes stay human-owned.',
  processSteps: [
    {
      title: 'Implementation planning',
      description: 'Break ambiguous work into inspectable steps, risks, and success criteria before generating code.',
    },
    {
      title: 'Code generation with review',
      description: 'Use assistants for drafts and refactors, then apply human review for correctness, security, and operability.',
    },
    {
      title: 'Repository analysis & debugging',
      description: 'Accelerate orientation in unfamiliar codebases and failure traces without skipping verification.',
    },
    {
      title: 'Tests, docs, and runbooks',
      description: 'Generate scaffolding for tests and documentation, then harden what ships into customer-facing environments.',
    },
    {
      title: 'Agentic workflows with approval gates',
      description: 'Structured tool use and automation where repetitive work is safe — human approval where risk is not.',
    },
    {
      title: 'Reusable prompts and playbooks',
      description: 'Turn repeated field motions into prompts, checklists, and operational playbooks the next engineer can run.',
    },
  ],
  systemsDossier,
  resumeSectionTitle: systemsDossier.ctaTitle,
  resumeSectionNote: systemsDossier.ctaBody,
  ctas: recruitingCtas({
    emailSubject: 'Stacklok Staff Forward Deployed Engineer — Moises Sanabria',
    caseStudiesAnchor: '#work',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
    coverLetterUrl: STACKLOK_COVER_LETTER_URL,
    coverLetterPrintPath: '/opportunities/stacklok-staff-forward-deployed-engineer/print/cover-letter',
    cv: '/cv/tech',
    portfolio: '/portfolio',
  }),
};
