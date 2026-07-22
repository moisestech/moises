import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import {
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { forwardDeployedAiEngineerBanner } from '@/content/evidence/applicationBanners';

const rolePortfolio: RolePortfolioDossier = {
  fitSectionTitle: 'Built for the space between the brief and the working system.',
  fitIntro:
    'This role sits where software engineering, generative AI, creative production, and client deployment meet. That is the environment I already work in.',
  fitPillars: [
    {
      id: 'forward-deployed',
      title: 'Forward-Deployed Engineering',
      body: 'Working directly with clients and stakeholders to uncover the real problem, define a feasible system, and iterate toward deployment.',
    },
    {
      id: 'genai-systems',
      title: 'Generative AI Systems',
      body: 'Building with language models, image-generation systems, multimodal models, structured prompting, retrieval, agents, and human approval workflows.',
    },
    {
      id: 'creative-infra',
      title: 'Creative Production Infrastructure',
      body: 'Designing tools and pipelines for images, video, 3D, digital assets, interactive media, websites, and content operations.',
    },
    {
      id: 'translation',
      title: 'Technical Translation',
      body: 'Turning emerging technology into practical workflows, documentation, training, and reusable patterns for creative teams.',
    },
  ],
  caseStudiesTitle: 'Selected systems',
  caseStudiesIntro:
    'Case studies that show movement from ambiguous creative or operational problems into prototypes and deployed tools. Status labels distinguish shipped work from research and prototypes.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: 'Lore Machine',
      category: 'Founding engineer · generative storytelling platform',
      ambiguity:
        'An AI-native narrative-to-media product had to move from experimental model capabilities toward usable creative application surfaces before a complete specification existed.',
      stakeholders: 'CEO, engineering peers, contractors, business and marketing partners',
      ownership:
        'Founding engineer (one of three); title included Chief Prompt Officer — owned frontend application, authentication, AI/data API integrations, prompt workflows, and generative media pipelines.',
      systemBuilt:
        'Real-time generative storytelling platform turning scripts, books, and lyrics into structured multimedia outputs — prompt workflows, generative image systems, scene-oriented rendering logic, and product-facing AI development.',
      production:
        'Deployed on Vercel from early prototype through production; owned iteration after launch and contractor/sprint coordination reporting to the CEO.',
      challenge:
        'Translating emerging model capabilities into interfaces and workflows that creative and business stakeholders could actually use under shifting requirements.',
      outcome:
        'Shipped AI product surfaces with full-stack ownership across interface, integrations, and prompt operations.',
      roleConnection:
        'Demonstrates founding-engineer ownership of multimodal generative systems and the client-facing translation required in forward-deployed creative AI roles.',
      skillTags: evidenceProjects['lore-machine'].skillTags,
      href: evidenceProjects['lore-machine'].href,
      linkLabel: 'View Lore Machine',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'oolite',
      title: 'Oolite Arts Digital Lab',
      category: 'Technical Director · creative technology infrastructure',
      ambiguity:
        'Institutional digital capacity spanning artists, educators, staff, and leadership without a single product brief — booking, equipment readiness, fabrication, AI literacy, and day-to-day production support.',
      stakeholders: 'Artists, educators, program teams, leadership, community partners, vendors',
      ownership:
        'Technical Director of Digital — public-facing digital infrastructure, lab operations, equipment programs, documentation, education surfaces, and grant-facing digital work.',
      systemBuilt:
        'Day-to-day Digital Lab infrastructure and workflows: booking systems, equipment readiness, signage, fabrication/print coordination, and AI/media literacy programming that translates emerging tools into practical artist workflows.',
      production:
        'Owns systems after launch: diagnosing operational failures, coordinating vendors, maintaining documentation, and supporting artists with different levels of technical experience.',
      challenge:
        'Keeping production spaces usable while teaching emerging tools and balancing experimentation with institutional timelines and budgets.',
      outcome:
        'Operational creative-technology leadership that enables artists and staff without requiring them to become engineers.',
      roleConnection:
        'Forward-deployed enablement inside a cultural institution — discovery, tooling, troubleshooting, workshops, and knowledge transfer.',
      skillTags: [
        'Lab operations',
        'Stakeholder translation',
        'Documentation',
        'Digital fabrication',
        'AI literacy',
        'Vendor coordination',
      ],
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'Oolite Digital Lab',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'multimodal-image-systems',
      title: evidenceProjects['multimodal-image-systems'].title,
      category: 'Generative media · controlled production pipelines',
      ambiguity:
        'Creative image work needed controllable generation — pose, character consistency, dataset quality, and prompt discipline — not one-off demos.',
      stakeholders: 'Studio practice, research collaborators, exhibition and production contexts',
      ownership:
        'Pipeline research and implementation across Stable Diffusion workflows, ComfyUI experimentation, pose control, and visual consistency systems.',
      systemBuilt:
        evidenceProjects['multimodal-image-systems'].summary,
      production:
        'Practice-based generative pipelines used for research outputs and production experiments; ComfyUI framed as active research rather than a single client product.',
      challenge:
        'Keeping asset consistency and reviewable iteration when generative tools encourage uncontrolled variation.',
      outcome:
        'Reusable multimodal image workflow patterns spanning control, review, and delivery-oriented generation.',
      roleConnection:
        'Shows creative-production AI fluency across image systems — the infrastructure layer behind dependable generative media.',
      skillTags: evidenceProjects['multimodal-image-systems'].skillTags,
      href: evidenceProjects['multimodal-image-systems'].href,
      linkLabel: 'View research context',
      imageSrc: evidenceProjects['multimodal-image-systems'].imageSrc,
      imageAlt: evidenceProjects['multimodal-image-systems'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'research',
    },
    {
      id: 'n8n-gmail',
      title: automationProjectSpecs['n8n-gmail-intelligence'].title,
      category: 'AI agent · operations workflow',
      ambiguity:
        'Inbox volume and recruiter signals needed triageable structure without a dedicated engineering team owning the process.',
      stakeholders: 'Self as operator; recruiter and opportunity pipeline consumers',
      ownership: 'Architecture, workflow implementation, routing taxonomy, and ongoing maintenance.',
      systemBuilt:
        'Production n8n workflow with an AI Agent node that reads incoming Gmail, applies structured label routing, and syncs recruiter/opportunity signals into Airtable — no auto-send; human approval before outbound recruiter mail.',
      production:
        'Live production workflow with structured labeling, Airtable sync, and explicit human approval gates on consequential outbound actions.',
      challenge:
        'Designing failure-aware routing so misclassified mail does not silently corrupt the pipeline.',
      outcome:
        'Inbox volume becomes structured opportunity data with an explicit automation ownership path and human-in-the-loop boundaries.',
      roleConnection:
        'Evidence of agent workflows, structured outputs, approval gates, and production responsibility — transferable to client-facing ops automation.',
      skillTags: [...automationProjectSpecs['n8n-gmail-intelligence'].skillTags],
      imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
      imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
      imageLocal: automationProjectSpecs['n8n-gmail-intelligence'].imageLocal,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'bookleggers',
      title: automationProjectSpecs['bookleggers-commerce-automation'].title,
      category: 'Client ops · commerce sync',
      ambiguity:
        'A nonprofit library needed sales and inventory visibility without manual spreadsheet handoffs between Square and staff tools.',
      stakeholders: 'Bookleggers Library staff and operators',
      ownership: 'Make.com scenario design connecting Square point-of-sale transactions to Airtable.',
      systemBuilt: automationProjectSpecs['bookleggers-commerce-automation'].summary,
      production:
        'Live Make + Square + Airtable automation for sales/inventory visibility.',
      challenge:
        'Delivering a dependable sync layer that nontechnical staff can rely on day to day.',
      outcome:
        'Client-facing commerce automation that removes repetitive handoff labor while keeping staff in control of operational data.',
      roleConnection:
        'Direct client deployment of an integration workflow — discovery, build, and operational transfer.',
      skillTags: [...automationProjectSpecs['bookleggers-commerce-automation'].skillTags],
      imageSrc: automationProjectSpecs['bookleggers-commerce-automation'].imageSrc,
      imageAlt: automationProjectSpecs['bookleggers-commerce-automation'].imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'ai24',
      title: evidenceProjects.ai24.title,
      category: 'Interactive AI · education and cultural R&D',
      ambiguity:
        'Artists and institutions needed emerging AI tools to become legible, usable, and responsibly deployable — not only impressive demos.',
      stakeholders: 'Artists, educators, cultural organizations, workshop participants',
      ownership:
        'AI literacy workshops, LMS-oriented architecture, automation strategy, and applied systems teaching.',
      systemBuilt: evidenceProjects.ai24.summary,
      production:
        'Public programs and platform surfaces for AI education and cultural R&D; research and teaching systems rather than a single enterprise product.',
      challenge:
        'Translating multimodal and agentic tools into workshops and systems that people with different technical backgrounds can operate.',
      outcome:
        'Reusable patterns for teaching, prototyping, and deploying AI tools in cultural and creative contexts.',
      roleConnection:
        'Shows multimodal interface experimentation paired with documentation, workshops, and knowledge transfer — core forward-deployed skills.',
      skillTags: evidenceProjects.ai24.skillTags,
      href: evidenceProjects.ai24.href,
      linkLabel: 'Visit AI24',
      imageSrc: evidenceProjects.ai24.imageSrc,
      imageAlt: evidenceProjects.ai24.imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'prototype',
    },
  ],
  capabilityMap: {
    title: 'Technical capabilities',
    subtitle:
      'Organized by practical capability. Only technologies supported by verified experience are listed as established.',
    groups: [
      {
        id: 'ai-systems',
        title: 'AI Systems',
        items: [
          'LLM applications',
          'Structured prompting',
          'AI agents',
          'Multimodal workflows',
          'Diffusion and image-generation pipelines',
          'Human-in-the-loop systems',
          'Workflow testing and evaluation habits',
        ],
      },
      {
        id: 'engineering',
        title: 'Engineering',
        items: [
          'JavaScript / TypeScript',
          'Node.js',
          'Python',
          'React / Next.js',
          'APIs and webhooks',
          'Full-stack application development',
          'Cloud deployment (Vercel and related)',
          'Authentication and permissions',
          'Data and content pipelines',
        ],
      },
      {
        id: 'creative-tech',
        title: 'Creative Technology',
        items: [
          'Image and video workflows',
          'After Effects–oriented production',
          '3D scanning and fabrication support',
          'Interactive installations',
          'Creative automation',
          'Digital asset transformation',
          'Generative media',
        ],
      },
      {
        id: 'client-delivery',
        title: 'Client Delivery',
        items: [
          'Technical discovery',
          'Rapid prototyping',
          'Architecture',
          'Stakeholder communication',
          'Agile iteration',
          'Troubleshooting',
          'Documentation',
          'Workshops and team enablement',
        ],
      },
    ],
    currentlyExtending: [
      'Deeper vector-search / RAG production patterns',
      'Adobe UXP / CEP plugin surfaces',
      'Figma / Photoshop production tooling depth',
      'LangGraph-style agent orchestration frameworks',
    ],
    closingStatement:
      'I treat AI as production infrastructure: models, interfaces, approvals, delivery formats, and the people who operate the system after handoff.',
  },
  creative: {
    title: 'Creative tools and AI',
    lead: 'I understand the production environment—not only the model.',
    points: [
      'How creative teams actually review work — iteration cycles, versioning, and human creative direction.',
      'File formats, delivery requirements, and asset consistency across image, video, and interactive media.',
      'Where repetitive production labor can be automated without removing consequential judgment.',
      'The difference between a visually impressive demo and a dependable workflow a team can run.',
    ],
    imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
    imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
  },
  clientFacing: {
    title: 'Technical enough to build it. Clear enough to bring people with me.',
    intro:
      'Experience framed accurately as forward-deployed, collaborative, and client-facing — not as enterprise consulting theater.',
    points: [
      'Working with artists, cultural institutions, founders, creative teams, and organizational leadership.',
      'Translating nontechnical requirements into systems and production plans.',
      'Presenting prototypes, documenting decisions, and teaching emerging tools.',
      'Troubleshooting live creative and operational workflows under real timelines.',
      'Balancing experimentation with budgets, schedules, and operational constraints.',
    ],
  },
  principlesTitle: 'Technical principles',
  principles: [
    { id: 'reality', text: 'Prototype against reality.' },
    { id: 'humans', text: 'Keep humans at consequential decision points.' },
    { id: 'workflow', text: 'Design for the production workflow, not just the demo.' },
    { id: 'transfer', text: 'Leave behind a system the team can understand.' },
  ],
  experienceTitle: 'Experience snapshot',
  experienceIntro: 'Verified titles and dates from the technology résumé.',
  experience: [
    {
      id: 'oolite',
      org: 'Oolite Arts',
      title: 'Technical Director of Digital',
      period: 'Sep 2025 – Present',
      detail: 'Knight-funded Digital Lab — ops, artist enablement, AI literacy, fabrication support.',
    },
    {
      id: 'lore',
      org: 'Lore Machine',
      title: 'Founding Engineer / Chief Prompt Officer',
      period: 'Jun 2023 – 2025',
      detail: 'Generative storytelling platform — frontend, auth, AI/API integrations, prompt operations.',
    },
    {
      id: 'freelance',
      org: 'Freelance / Moises.Tech',
      title: 'Independent creative technology & full-stack consulting',
      period: '2014 – present (selected)',
      detail: 'StyleGAN / FOMM / XR prototypes, museum and festival production, applied AI systems.',
    },
    {
      id: 'practice',
      org: 'Interdisciplinary artistic practice',
      title: 'Artist · creative technologist',
      period: 'Ongoing',
      detail: 'Installations, generative media research, workshops, and public programs.',
    },
    {
      id: 'cooper',
      org: 'Cooper Union',
      title: 'Bachelor of Fine Arts (BFA)',
      period: 'Sep 2011 – May 2015',
      detail: 'New York, NY',
    },
  ],
  availabilityNote:
    'Available for 100% remote contract or contract-to-hire opportunities and periodic U.S. travel.',
};

export const forwardDeployedAiEngineerOpportunity: Opportunity = {
  slug: 'forward-deployed-ai-engineer',
  status: 'active',
  listed: false,
  variant: 'role-portfolio',
  applicationBanner: forwardDeployedAiEngineerBanner,
  seo: {
    title: 'Moises Sanabria — Forward Deployed AI Engineer & Creative Technologist',
    description:
      'Selected AI systems, creative technology projects, and client-deployed workflows by Moises Sanabria.',
    indexable: false,
  },
  visibilityNote: 'Role-specific portfolio · Forward Deployed AI Engineer',
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Forward Deployed AI',
        detail: 'Client-facing engineering that turns ambiguous briefs into working systems.',
      },
      {
        label: 'Creative Technologist',
        detail: 'Production fluency across software, generative media, and studio workflows.',
      },
      {
        label: 'Client Deployment',
        detail: 'Prototype → integrate → harden → transfer — with humans at approval gates.',
      },
    ],
  },
  roleTitle: 'Forward Deployed AI Engineer – Creative Technologist',
  heroEyebrow: 'Forward Deployed AI Engineer · Creative Technologist',
  candidateName: 'Moises Sanabria',
  candidatePositioning: 'Software Engineering × Generative AI × Creative Technology × Client Deployment',
  heroMetaChips: [
    'Miami, Florida',
    'Remote contract or contract-to-hire',
    'Open to required U.S. travel',
  ],
  heroPrimaryCta: { label: 'View Selected Systems', href: '#work' },
  heroSecondaryCta: { label: 'View Technical Background', href: '#capabilities' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role match' },
    { id: 'work', label: 'Systems' },
    { id: 'process', label: 'Process' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'creative', label: 'Production' },
    { id: 'client', label: 'Client work' },
    { id: 'principles', label: 'Principles' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'I build AI systems for creative work.',
    subheadline:
      'I’m a full-stack engineer and interdisciplinary artist who turns ambiguous creative and operational challenges into working applications, automated pipelines, multimodal prototypes, and deployable client tools.',
    introParagraphs: [
      'This private page is a role-specific case-study portfolio for Forward Deployed AI Engineer / Creative Technologist conversations — selected systems, not a generic résumé dump.',
      'Evidence spans Lore Machine founding-engineer product work, Oolite Arts Digital Lab leadership, generative media pipelines, agentic operations with approval gates, and client-facing automation.',
    ],
    trustLine: 'Founding engineer · Technical Director of Digital · Creative technologist · Miami / Remote',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchRows: [],
  featuredProjectIds: [
    'lore-machine',
    'multimodal-image-systems',
    'n8n-gmail-intelligence',
    'bookleggers-commerce-automation',
    'ai24',
  ],
  skillsMatrixRows: [
    {
      category: 'AI Systems',
      skills: 'LLMs, structured prompting, agents, multimodal pipelines, human-in-the-loop',
      icon: 'sparkles',
    },
    {
      category: 'Engineering',
      skills: 'TypeScript, Next.js, Python, APIs, full-stack deployment',
      icon: 'code2',
    },
    {
      category: 'Creative Technology',
      skills: 'Generative media, fabrication support, interactive systems, asset pipelines',
      icon: 'image',
    },
    {
      category: 'Client Delivery',
      skills: 'Discovery, prototyping, documentation, workshops, troubleshooting',
      icon: 'users',
    },
  ],
  processSectionTitle: 'From ambiguity to deployment',
  processIntro:
    'A grounded delivery motion for creative and operational AI systems. Not every experimental artwork follows an enterprise software lifecycle — this is how I approach deployable tools.',
  processSteps: [
    {
      title: 'Discover',
      description:
        'Understand the people, production environment, constraints, and actual bottleneck.',
    },
    {
      title: 'Prototype',
      description: 'Build the smallest convincing technical proof using real inputs and workflows.',
    },
    {
      title: 'Integrate',
      description:
        'Connect models, APIs, creative tools, storage, review systems, and delivery endpoints.',
    },
    {
      title: 'Harden',
      description:
        'Add validation, observability, fallbacks, permissions, testing, and human approval.',
    },
    {
      title: 'Transfer',
      description: 'Document the system and enable the client team to operate and extend it.',
    },
  ],
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    resumePrintPath: '/cv/tech/print',
    careerPacket: '/career-packet',
    caseStudiesAnchor: '#work',
    emailSubject: 'Forward Deployed AI Engineer — Moises Sanabria',
  }),
  techLogoIds: [],
  resumeSectionTitle: 'Have an ambiguous creative AI problem?',
  resumeSectionNote:
    'I can help turn it into a prototype, production workflow, or deployable system. Résumé (Google Drive PDF), career packet, LinkedIn, and GitHub below.',
};
