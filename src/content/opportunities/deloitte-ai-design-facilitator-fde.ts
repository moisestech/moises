/**
 * Deloitte — AI Design Facilitator and Forward-Deployed Engineer II
 * /opportunities/deloitte-ai-design-facilitator-fde
 * Alias: /applied-ai/deloitte-ai-design-facilitator
 *
 * Compact application-evidence overlay for requisition 360529.
 * Lead with design practice, facilitation, and product incubation; keep
 * consulting-platform cadence as an explicit ramp.
 */

import type { CodeInspectBlock, HonestyOverlay, Opportunity } from './types';
import { deloitteAiDesignFacilitatorFdeBanner } from '@/content/evidence/applicationBanners';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { productionAiAutomationPack } from '@/content/evidence/productionAiAutomationPack';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { sprint2026Ctas, sprint2026Headshot } from './shared-sprint-2026';
import {
  genAiCurriculumSmeCertifications,
} from './packs/genAiCurriculumSmePack';
import { ART_OF_AI_AGENTS_SCREENSHOTS } from '@/constants/art-of-ai-agents';
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop';
import { digilabAsset, OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/oolite-arts/media';

const EMPLOYER_URL =
  'https://apply.deloitte.com/en_US/careers/JobDetail/AI-Design-Facilitator-and-Forward-Deployed-Engineer-II/360529';

const TECH_CV_PDF = '/resume/moises-sanabria-technology-cv.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';
const PIPELINE_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
const PIPELINE_BLOB = `${PIPELINE_REPO}/blob/main`;
const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
const BOOKLEGGERS_WORKFLOW_SRC =
  '/images/opportunities/deloitte-ai-design-facilitator-fde/bookleggers-workflow.svg';

const lore = evidenceProjects['lore-machine'];
const playwire = evidenceProjects['playwire-alumni'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];
const n8nPack = productionAiAutomationPack.n8nGmailIntelligence;

const taskAutomationSlide = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'artist-task-automation-1',
)!;
const emailInboxDiagram = ART_OF_AI_AGENTS_SCREENSHOTS.find(
  (s) => s.id === 'email-inbox-organizer-diagram',
)!;
const workshopTeaching = digilabAsset('workshop.art-tech-coding');
const workshopVibe = digilabAsset('workshop.vibe-code-net-art');
const workshopWebsites = digilabAsset('workshop.artist-websites-cover');

const honestyOverlay: HonestyOverlay = {
  title: 'The design and facilitation practice is proven. Consulting cadence is the ramp.',
  intro:
    'This page does not treat workshop teaching as a substitute for Deloitte client tenure. It separates the work I can contribute immediately from the consulting-platform context I would still need to learn.',
  provenTitle: 'Proven now',
  proven: [
    'Cooper Union BFA and a design practice applied to installations, product interfaces, and workshop curricula.',
    'Eighteen hands-on technical and creative-technology workshops at Oolite Arts — not all exclusively generative AI.',
    'Product incubation at Lore Machine: founding engineer on a shipped generative storytelling platform.',
    'Client-facing solutions at Playwire and with institutional partners: listen, prototype, explain tradeoffs, leave the team able to operate the work.',
    'Airtable and AI workflow experience, including a live Square → Make → Airtable client automation and adjacent CRM-ready review work.',
    'Public teaching artifacts: The Art of AI Agents handout, Learn AI Without Losing Yourself, and Digilab documentation.',
  ],
  notClaimedTitle: 'Ramping into',
  notClaimed: [
    'Deloitte’s specific consulting methodology and internal delivery conventions.',
    'Consulting-team staffing cadence and a 50% travel rhythm.',
    'Employer-specific platforms not already used daily.',
    'A formal UX-researcher title inside a consultancy.',
    'GitHub Copilot or Replit as the primary daily stack — Cursor and Claude are.',
  ],
  rampStatement:
    'If the seat is a career UX researcher who does not ship, I am not that candidate. If the team needs someone who can teach technical AI through making, run design-forward workshops, prototype with generative tools, and incubate a product with mixed stakeholders, the match is direct. FLORA Field Kit is a prototype with demo fixtures — useful as a rapid-prototyping example, not a featured production system.',
};

const codeInspect: CodeInspectBlock = {
  title: 'Code to inspect',
  intro:
    'Public files from a graph-shaped, persisted workflow with explicit transitions and human review. Custom state machine — not a LangGraph implementation. Assessment currently uses a deterministic fake model provider for workflow tests. Reference implementation, not a customer production deployment.',
  items: [
    {
      id: 'run',
      title: 'Stateful run + human review',
      href: `${PIPELINE_BLOB}/packages/agent/src/run.ts`,
      body: 'Collect → normalize → retrieve → assess → validate → human review → approve or reject → finalize.',
    },
    {
      id: 'policy',
      title: 'Citation and transition policy',
      href: `${PIPELINE_BLOB}/packages/agent/src/policy.ts`,
      body: 'Unsupported evidence lowers confidence, changes status, and forces human review.',
    },
    {
      id: 'search',
      title: 'Tenant-scoped hybrid retrieval',
      href: `${PIPELINE_BLOB}/packages/retrieval/src/search.ts`,
      body: 'Keyword search and semantic search combined, scoped to tenant and visibility.',
    },
    {
      id: 'runner',
      title: 'Retries, idempotency, dead letters',
      href: `${PIPELINE_BLOB}/packages/jobs/src/runner.ts`,
      body: 'Duplicate protection, classified failures, retry backoff, and an exception queue.',
    },
  ],
  footnotes: [
    {
      label: 'Repository',
      href: PIPELINE_REPO,
    },
  ],
};

export const deloitteFitStrip = {
  title: 'Four ways the work already maps',
  intro: 'Design, facilitation, product incubation, and client systems — each with a public artifact.',
  pillars: [
    {
      id: 'design',
      label: 'Design',
      proof: 'Cooper Union BFA and a human-centered practice of intake, critique, and iteration.',
      href: '#facilitation',
      hrefLabel: 'Facilitation model',
    },
    {
      id: 'facilitation',
      label: 'Facilitation',
      proof: '18 hands-on workshops across AI and creative technology for mixed-skill participants.',
      href: '/oolite-arts',
      hrefLabel: 'Oolite case study',
    },
    {
      id: 'product',
      label: 'Product',
      proof: 'Founding engineer on Lore Machine — a generative storytelling product taken into production.',
      href: '/projects/lore-machine',
      hrefLabel: 'Lore Machine',
    },
    {
      id: 'client',
      label: 'Client systems',
      proof: 'Playwire AdTech plus live Airtable automation and CRM-ready review workflows.',
      href: '#bookleggers',
      hrefLabel: 'Client workflow',
    },
  ],
} as const;

export const deloitteBookleggersCase = {
  eyebrow: 'Client workflow · human-centered operations',
  title: 'Designing a workflow the client can actually trust.',
  subheading: 'Real operational feedback turned into a clearer Airtable-to-CRM handoff.',
  story:
    'The interesting part wasn’t just connecting tools. It was listening to the actual user, identifying where the downstream system rejected the data model, building a review layer in Airtable, and making sure the client could validate the output before it entered their CRM.',
  issue:
    'A client noticed that an exported field included a timestamp even though the destination expected a date-only value.',
  response: [
    'Listen to the user and treat the report as an operational failure, not a cosmetic bug.',
    'Translate the feedback into a specific data-contract requirement.',
    'Normalize the export without rewriting the underlying source unnecessarily.',
    'Test representative records and timezone edge cases.',
    'Keep a human reviewer in control before the CRM import.',
    'Document the process so the client can operate it independently.',
  ],
  liveBoundary:
    'Square → Make → Airtable is verified live. Airtable cleanup and Bloomerang-ready export is a real adjacent workflow. The two are related evidence, not one collapsed production pipeline.',
  privacy:
    'This diagram is original and anonymized. It does not display donor names, amounts, inboxes, or private records.',
  flow: [
    'Data source',
    'Airtable review',
    'Field cleanup',
    'Human approval',
    'CRM-ready export',
  ],
  diagramSrc: BOOKLEGGERS_WORKFLOW_SRC,
  diagramAlt:
    'Privacy-safe workflow diagram: data source, Airtable review, field cleanup, human approval, CRM-ready export.',
} as const;

export const deloitteFacilitationModel = {
  eyebrow: 'Facilitation practice',
  title: 'Teach the tool by making something people can finish.',
  intro:
    'Eighteen Oolite workshops covered technical and creative-technology subjects — AI, artist websites, creative coding, digital fabrication — not a single-topic GenAI series. The method stays the same.',
  steps: [
    { id: 'listen', label: 'Listen', body: 'Understand the audience, context, and anxieties before choosing a tool.' },
    { id: 'frame', label: 'Frame', body: 'Define the real user problem and what a finished artifact looks like.' },
    { id: 'demonstrate', label: 'Demonstrate', body: 'Show a practical workflow in approachable language.' },
    { id: 'build', label: 'Build', body: 'Have participants make a small working artifact in the room.' },
    { id: 'test', label: 'Test', body: 'Observe friction and rewrite the brief before scaling the exercise.' },
    { id: 'enable', label: 'Enable', body: 'Leave instructions, prompts, or a repeatable handoff.' },
  ],
  artifact: {
    title: 'The Art of AI Agents — public handout',
    body: 'Participants design an email-intelligence workflow with clear categories and a human boundary on outbound actions. The diagram, system prompt, and copyable fields are public.',
    href: '/workshop/the-art-of-ai-agents/share',
    hrefLabel: 'Open the workshop handout',
    imageSrc: emailInboxDiagram.src,
    imageAlt: emailInboxDiagram.alt,
  },
  media: [
    {
      src: workshopTeaching.src,
      alt: workshopTeaching.alt,
      caption: workshopTeaching.caption ?? 'Art-tech coding workshop in the Digital Lab',
    },
    {
      src: workshopVibe.src,
      alt: workshopVibe.alt,
      caption: workshopVibe.caption ?? 'Vibe Code and Net Art workshop banner',
    },
    {
      src: workshopWebsites.src,
      alt: workshopWebsites.alt,
      caption: workshopWebsites.caption ?? 'Artist Websites for Beginners',
    },
  ],
} as const;

export const deloitteNinetyMinuteSprint = {
  eyebrow: 'Proposed working session',
  title: 'A design-forward AI prototyping session.',
  intro:
    'How I would facilitate a mixed team: frame the user problem, teach the relevant AI pattern, pair-build a thin prototype, then leave an owner and a handoff. This is a proposed session — not prior Deloitte work.',
  steps: [
    { time: '00–10', title: 'Discover', body: 'Find the real user and the operational friction.' },
    { time: '10–25', title: 'Frame', body: 'Write the problem, assumptions, evidence, and risks.' },
    { time: '25–45', title: 'Teach', body: 'Show the relevant AI pattern and the guardrails around it.' },
    { time: '45–70', title: 'Pair-build', body: 'Make a thin prototype in Cursor, Claude, Airtable, or a lightweight web stack.' },
    { time: '70–82', title: 'Test', body: 'Put it in front of users and capture friction.' },
    { time: '82–90', title: 'Decide', body: 'Build, stop, or pivot. Assign an owner. Leave a handoff.' },
  ],
} as const;

export const deloitteHitlDiagram = {
  eyebrow: 'Governed AI workflows',
  title: 'AI can move the work forward. People remain accountable for the decision.',
  intro:
    'I separate the creative or probabilistic part of AI from the operational controls around it. The model can help interpret information, but the workflow explicitly controls what evidence it can use, what state it is in, whether a person needs to approve the result, and how failures get recorded and retried.',
  flow: [
    'Source material',
    'Retrieve relevant evidence',
    'Generate a draft',
    'Check policy and citations',
    'Human review',
    'Approved output',
  ],
  labels: [
    'Tenant-aware retrieval',
    'Explicit workflow state',
    'Citation validation',
    'Review before consequential actions',
    'Retry and error handling',
    'Visible decision history',
  ],
} as const;

/**
 * Deloitte AI Design Facilitator FDE II — compact recruiter dossier.
 */
export const deloitteAiDesignFacilitatorFdeOpportunity: Opportunity = {
  slug: 'deloitte-ai-design-facilitator-fde',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'submitted',
  variant: 'compact',
  capabilitiesHref: capabilitiesPillarHref('design-creative-technology'),
  applicationBanner: deloitteAiDesignFacilitatorFdeBanner,
  seo: {
    title: 'Moises Sanabria — Deloitte AI Design Facilitator Evidence',
    description:
      'Design facilitation, generative-AI teaching, rapid prototyping, and product incubation evidence for Deloitte AI Design Facilitator and Forward-Deployed Engineer II, requisition 360529.',
    indexable: false,
    keywords: [
      'AI Design Facilitator',
      'Forward Deployed Engineer',
      'Deloitte',
      'human-centered design',
      'generative AI workshops',
      'product incubation',
      'application evidence',
    ],
  },
  visibilityNote:
    'Private application-evidence page for Deloitte AI Design Facilitator and Forward-Deployed Engineer II (requisition 360529). Not affiliated with or endorsed by Deloitte.',
  company: 'Deloitte',
  roleTitle: 'AI Design Facilitator and Forward-Deployed Engineer II',
  heroEyebrow: 'APPLICATION EVIDENCE / DELOITTE DIGITAL / REQ. 360529',
  candidateName: 'Moises Sanabria',
  candidatePositioning: 'Teach the tool. Frame the problem. Build what people can actually use.',
  heroMetaChips: [
    'Cooper Union BFA',
    '18 technical workshops',
    'Founding Engineer / Lore Machine',
    'AdTech / Playwire',
    'Cursor · Claude · Airtable',
    'Miami · U.S. citizen',
  ],
  heroPrimaryCta: { label: 'See how the experience maps to the role', href: '#fit' },
  heroSecondaryCta: { label: 'View workshop and client evidence', href: '#case-studies' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'pillars', label: 'Fit' },
    { id: 'fit', label: 'Role map' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'facilitation', label: 'Workshops' },
    { id: 'bookleggers', label: 'Client' },
    { id: 'sprint', label: 'Session' },
    { id: 'hitl', label: 'HITL' },
    { id: 'honesty', label: 'Ramp' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'AI Design Facilitator & Forward-Deployed Engineer',
    subheadline:
      'I help mixed teams understand emerging AI tools, frame the right user problem, and turn ambiguity into working prototypes people can actually use.',
    introParagraphs: [
      'I’m a design-trained AI engineer and facilitator. I studied at Cooper Union, helped bring a generative storytelling platform into production as a founding engineer at Lore Machine, and designed and delivered 18 hands-on technical workshops through Oolite Arts. Earlier, I worked directly with clients and advertising technology at Playwire. This role brings together the three things I already do: frame problems through design, build working AI prototypes, and help mixed teams confidently adopt the tools.',
    ],
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  honestyOverlay,
  codeInspect,
  roleMatchSectionTitle: 'Role-to-evidence map',
  roleMatchIntro:
    'Select a requirement to see a supporting artifact. Advertising, Marketing & Commerce platform ownership is not inferred from these rows.',
  roleMatchColumnHeaders: {
    left: 'What the role needs',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Teach technical AI through a design lens',
      evidence:
        'Hands-on Oolite workshops and public programs (The Art of AI Agents, Learn AI Without Losing Yourself) for mixed-skill participants — designers, engineers, and nontechnical practitioners.',
      status: 'demonstrated',
      illustration: {
        src: taskAutomationSlide.src,
        alt: taskAutomationSlide.alt,
      },
    },
    {
      requirement: 'User research, critique, and user testing',
      evidence:
        'Artist intake, workshop feedback, prototype iteration, and a real client workflow correction: a timestamp appeared where a CRM expected a date-only field.',
      status: 'demonstrated',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    },
    {
      requirement: 'Incubate AI products from concept to working software',
      evidence:
        'Founding engineer at Lore Machine: frontend, authentication, AI/data integrations, and creator-facing review — prototype through production on Vercel.',
      status: 'demonstrated',
      illustration: {
        src: lore.imageSrc,
        alt: lore.imageAlt,
      },
    },
    {
      requirement: 'Work directly with clients and business stakeholders',
      evidence:
        'Playwire publisher integrations and Bookleggers operations: listen, debug a real friction point, leave a reviewable handoff.',
      status: 'demonstrated',
      illustration: {
        src: playwire.imageSrc,
        alt: playwire.imageAlt,
      },
    },
    {
      requirement: 'Support Advertising, Marketing & Commerce use cases',
      evidence:
        'Playwire AdTech (Kinesis, Athena, Snowflake, Tableau, publisher onboarding) plus Airtable/Bloomerang-related CRM workflows.',
      status: 'demonstrated',
      illustration: {
        src: BOOKLEGGERS_WORKFLOW_SRC,
        alt: 'Bookleggers Airtable-to-CRM review workflow diagram',
        local: true,
      },
    },
    {
      requirement: 'Enable internal teams to use modern AI tools',
      evidence:
        'Cursor, Claude, Airtable, n8n, structured prompts, public curricula, and repeatable workshop handoffs so teams can operate the work without me.',
      status: 'demonstrated',
      illustration: {
        src: emailInboxDiagram.src,
        alt: emailInboxDiagram.alt,
      },
    },
  ],
  featuredProjectIds: [
    'ai24',
    'bookleggers-commerce-automation',
    'lore-machine',
    'playwire-alumni',
    'n8n-gmail-intelligence',
  ],
  caseStudyColumns: 2,
  caseStudiesSectionTitle: 'Signature evidence',
  caseStudiesIntro:
    'Facilitation, live client operations, product incubation, and AdTech first. Each card states who the user was, what was built, and whether the work is live, production, a public teaching artifact, or a prototype.',
  caseStudyOverrides: [
    {
      evidenceId: 'ai24',
      title: 'Oolite Arts: design-led facilitation',
      category: 'PUBLIC WORKSHOP · INSTITUTIONAL PROGRAM',
      summary:
        'Technical Director of Digital with Fabiola Larios. Eighteen hands-on workshops across AI and creative technology for mixed-skill artists. Intake, critique, and documentation so the lab could run without a one-off demo.',
      skillTags: ['Workshops', 'Curriculum', 'Critique', 'Enablement', 'Handoff'],
      href: '/oolite-arts',
      linkLabel: 'View Oolite case study',
      secondaryHref: 'https://oolitearts.org/digital-lab/',
      secondaryLinkLabel: 'Oolite Digital Lab',
      imageSrc: workshopTeaching.src,
      imageAlt: workshopTeaching.alt,
    },
    {
      evidenceId: 'bookleggers-commerce-automation',
      title: 'Bookleggers: a reviewable Airtable handoff',
      category: 'LIVE CLIENT WORK',
      summary:
        'Live Square → Make → Airtable sales visibility for a Miami library. Adjacent work: Airtable cleanup and human review before a Bloomerang-ready export, including a date-only field the CRM rejected when it still carried a timestamp.',
      skillTags: ['Airtable', 'Make.com', 'Square', 'CRM handoff', 'Human review'],
      href: '#bookleggers',
      linkLabel: 'Read the workflow case',
      imageSrc: BOOKLEGGERS_WORKFLOW_SRC,
      imageAlt: 'Privacy-safe Bookleggers workflow diagram',
      imageLocal: true,
    },
    {
      evidenceId: 'lore-machine',
      title: 'Lore Machine: from idea to creator-facing product',
      category: 'PRODUCTION PRODUCT',
      summary:
        'Founding engineer. Owned frontend, authentication, and AI/data API integrations. Creators moved from narrative input through generated scenes to human revision. Shipped on Vercel.',
      skillTags: ['Product incubation', 'GenAI', 'Next.js', 'Creator UX', 'Human revision'],
      href: '/projects/lore-machine',
      linkLabel: 'View Lore Machine',
    },
    {
      evidenceId: 'playwire-alumni',
      title: 'Playwire: client-facing AdTech systems',
      category: 'CLIENT SYSTEMS · ADTECH',
      summary:
        'Solutions engineering with publishers and data work across Kinesis, Athena, Snowflake, and Tableau. Directly relevant to Advertising, Marketing & Commerce delivery.',
      skillTags: ['Publisher integrations', 'Snowflake', 'Tableau', 'AWS', 'Client delivery'],
    },
    {
      evidenceId: 'n8n-gmail-intelligence',
      title: n8nSpec.title,
      category: `PUBLIC WORKSHOP · ${n8nPack.buildState.replace('_', ' ')}`,
      summary:
        'Production n8n + Airtable pattern taught in The Art of AI Agents: classify inbound mail, apply structured labels, pause for human approval. Outbound communication stays human-approved.',
      skillTags: [...n8nSpec.skillTags],
      href: n8nSpec.href ?? '/workshop/the-art-of-ai-agents/share',
      linkLabel: 'View workshop handout',
      secondaryHref: '/workshop/the-art-of-ai-agents',
      secondaryLinkLabel: 'Art of AI Agents',
    },
  ],
  teachingHighlights: [
    {
      title: 'The Art of AI Agents',
      description:
        'Public workshop artifact: n8n email classification, taxonomy design, copyable prompts, and a human boundary on outbound actions.',
      href: '/workshop/the-art-of-ai-agents/share',
      imageSrc: emailInboxDiagram.src,
      imageAlt: emailInboxDiagram.alt,
    },
    {
      title: 'Learn AI Without Losing Yourself',
      description:
        'Structured public curriculum on practical AI, staying human in the loop, and teaching mixed audiences without treating the model as the whole system.',
      href: '/workshop/learn-ai-without-losing-yourself',
      imageSrc: LEARN_AI_WORKSHOP_HERO_IMAGE,
      imageAlt: 'Learn AI Without Losing Yourself — workshop visual',
    },
    {
      title: 'Oolite Arts Digital Lab',
      description:
        'Institutional teaching with Fabiola Larios: space, tools, curriculum, and human support designed as one program.',
      href: '/oolite-arts',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
  ],
  certifications: [...genAiCurriculumSmeCertifications],
  skillsMatrixRows: [
    {
      category: 'Facilitation',
      skills: 'Mixed-audience workshops, critique, technical translation, Digilab operations',
      icon: 'presentation',
    },
    {
      category: 'Human-centered design',
      skills: 'Intake, journey framing, tool testing with real users, rewrite the brief before scaling the build',
      icon: 'users',
    },
    {
      category: 'GenAI making',
      skills: 'Cursor, Claude, Airtable HITL, generative pipelines, rapid prototypes in Next.js / TypeScript',
      icon: 'sparkles',
    },
  ],
  processSectionTitle: 'Proposed design-forward working session',
  processIntro:
    'A bounded first engagement: frame a real user problem, facilitate a mixed-audience session, prototype with generative tools, test, then leave a runbook and a teaching artifact. Proposed — not completed Deloitte client work.',
  processSteps: [
    {
      title: 'Discover the friction',
      description: 'Intake with the people who will use the thing. Write the job, the constraint, and what “done” looks like.',
    },
    {
      title: 'Frame the problem',
      description: 'Assumptions, evidence, and risks on one page so engineers, designers, and product partners share the brief.',
    },
    {
      title: 'Teach the pattern',
      description: 'Show the relevant AI workflow and the human-approval gate in approachable language.',
    },
    {
      title: 'Pair-build a thin slice',
      description: 'Ship the smallest reviewable prototype in Cursor / Claude / Airtable / Next.js.',
    },
    {
      title: 'Test, decide, hand off',
      description: 'Capture failures, choose build / stop / pivot, assign an owner, leave a repeatable artifact.',
    },
  ],
  ctas: {
    ...sprint2026Ctas('Deloitte AI Design Facilitator and Forward-Deployed Engineer II'),
    resumePdfPath: TECH_CV_PDF,
    resumePdfLabel: 'Download résumé',
    evidenceBriefPdfPath: EVIDENCE_BRIEF_PDF,
    evidenceBriefLabel: 'Open technical evidence brief',
    github: PIPELINE_REPO,
    githubLabel: 'Inspect the evidence pipeline',
    githubProfile: 'https://github.com/moisestech',
    ooliteWork: '/oolite-arts',
    ooliteWorkLabel: 'Oolite Arts case study',
    caseStudiesAnchor: '#case-studies',
    resumePrintPath: undefined,
  },
  techLogoIds: [],
  resumeSectionTitle: 'See the workshops. Inspect the systems. Understand how I would help your team build.',
  resumeSectionNote: `Résumé, technical evidence brief, Oolite case study, public workshop artifact, and GitHub below. FLORA Field Kit (${FIELD_KIT_REPO}) is a prototype with demo fixtures — available on request, not the center of this page. Listing: ${EMPLOYER_URL}`,
};
