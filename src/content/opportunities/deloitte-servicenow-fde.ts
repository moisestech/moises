/**
 * Deloitte — Forward Deployed Engineer, ServiceNow
 * /opportunities/deloitte-servicenow-fde
 * Alias: /applied-ai/deloitte-fde-servicenow
 *
 * Compact application-evidence overlay for requisition 362315.
 * Lead with proven FDE delivery; keep ServiceNow platform depth as an explicit ramp.
 */

import type { CodeInspectBlock, HonestyOverlay, Opportunity } from './types';
import { deloitteServicenowFdeBanner } from '@/content/evidence/applicationBanners';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { productionAiAutomationPack } from '@/content/evidence/productionAiAutomationPack';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { sprint2026Ctas, sprint2026Headshot } from './shared-sprint-2026';
import { OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/oolite-arts/media';

const EMPLOYER_URL =
  'https://apply.deloitte.com/en_US/careers/JobDetail/Forward-Deployed-Engineer-ServiceNow/362315';

const RESUME_PDF = '/resume/MoisesSanabria_Deloitte_FDE_Resume.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';
const PIPELINE_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
const PIPELINE_BLOB = `${PIPELINE_REPO}/blob/main`;

const agenticOps = evidenceProjects['agentic-ops'];
const infra = evidenceProjects['digital-culture-infrastructure'];
const n8n = evidenceProjects['n8n-gmail-intelligence'];
const n8nSpec = automationProjectSpecs['n8n-gmail-intelligence'];
const n8nPack = productionAiAutomationPack.n8nGmailIntelligence;
const lore = evidenceProjects['lore-machine'];
const playwire = evidenceProjects['playwire-alumni'];
const provenance = evidenceProjects['comfyui-output-provenance'];

const honestyOverlay: HonestyOverlay = {
  title: 'Strong FDE match. Explicit ServiceNow ramp.',
  intro:
    'This page does not present transferable AI experience as platform certification. It separates the delivery capabilities I can contribute immediately from the ServiceNow depth I would need to build.',
  provenTitle: 'Proven now',
  proven: [
    'Full-stack product delivery across React, Next.js, TypeScript, Node.js, APIs, SQL, AWS, and Vercel.',
    'Client-facing integration and troubleshooting at Playwire.',
    'Production generative storytelling delivery at Lore Machine.',
    '18 hands-on technical workshops at Oolite Arts.',
    'Public reference implementation for stateful assessments, hybrid retrieval, citation gates, human review, and durable jobs.',
  ],
  notClaimedTitle: 'Not claimed yet',
  notClaimed: [
    'Prior ServiceNow implementation ownership.',
    'Deloitte client work.',
    'Customer production deployment of the Agentic Evidence Pipeline.',
    'SOC 2 or security certification.',
    'Live-model quality gains from the offline fake-provider report.',
  ],
  rampStatement:
    'If the role requires same-day ServiceNow platform ownership, I am not the finished candidate. If the team values forward-deployed AI delivery, facilitation, product incubation, and the ability to ramp deliberately into a platform, the transferable match is strong.',
};

const codeInspect: CodeInspectBlock = {
  title: 'Code to inspect',
  intro:
    'Strongest public files from the Agentic Evidence Pipeline. This is a Building v0.1 reference implementation — not a customer production deployment and not completed ServiceNow work.',
  items: [
    {
      id: 'run',
      title: 'Stateful run + human review',
      href: `${PIPELINE_BLOB}/packages/agent/src/run.ts`,
      body: 'Idempotent run creation, explicit state transitions, persisted assessment state, review pause/resume, and audit events.',
    },
    {
      id: 'policy',
      title: 'Citation fail-closed policy',
      href: `${PIPELINE_BLOB}/packages/agent/src/policy.ts`,
      body: 'Unsupported evidence IDs lower confidence, change status to insufficient evidence, and force human review.',
    },
    {
      id: 'search',
      title: 'Hybrid retrieval',
      href: `${PIPELINE_BLOB}/packages/retrieval/src/search.ts`,
      body: 'Tenant- and visibility-scoped lexical and vector search combined through reciprocal rank fusion.',
    },
    {
      id: 'runner',
      title: 'Durable job runner',
      href: `${PIPELINE_BLOB}/packages/jobs/src/runner.ts`,
      body: 'Duplicate protection, classified failures, retry backoff, dead-letter handling, and replay semantics.',
    },
  ],
  footnotes: [
    {
      label: 'Evidence ledger',
      href: `${PIPELINE_BLOB}/docs/EVIDENCE_LEDGER.md`,
    },
    {
      label: 'Offline fake-provider report',
      href: `${PIPELINE_BLOB}/reports/offline/2026-08-12-fake-provider.json`,
      note: 'offline harness evidence only',
    },
  ],
};

/**
 * Deloitte ServiceNow FDE — compact recruiter dossier.
 */
export const deloitteServicenowFdeOpportunity: Opportunity = {
  slug: 'deloitte-servicenow-fde',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'draft',
  variant: 'compact',
  capabilitiesHref: capabilitiesPillarHref('ai-engineering'),
  applicationBanner: deloitteServicenowFdeBanner,
  seo: {
    title: 'Moises Sanabria — Deloitte Forward Deployed Engineer Evidence',
    description:
      'Applied-AI, client delivery, agentic workflow, and technical enablement evidence for Deloitte Forward Deployed Engineer - ServiceNow, requisition 362315.',
    indexable: false,
    keywords: [
      'Forward Deployed Engineer',
      'ServiceNow',
      'Deloitte',
      'GenAI',
      'agentic AI',
      'human-in-the-loop',
      'application evidence',
    ],
  },
  visibilityNote:
    'Private application-evidence page for Deloitte Forward Deployed Engineer — ServiceNow (requisition 362315). Not affiliated with or endorsed by Deloitte.',
  company: 'Deloitte',
  roleTitle: 'Forward Deployed Engineer — ServiceNow',
  heroEyebrow: 'APPLICATION EVIDENCE / DELOITTE / REQ. 362315',
  candidateName: 'Moises Sanabria',
  heroMetaChips: [
    '18 workshops delivered',
    'Founding engineer / production GenAI',
    'Client-facing SaaS integrations',
    'Agentic + RAG workflows',
    'Miami / U.S. citizen',
  ],
  heroPrimaryCta: { label: 'View the evidence', href: '#case-studies' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'honesty', label: 'Honesty' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'code-inspect', label: 'Code' },
    { id: 'process', label: 'Thin slice' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'Forward-Deployed AI Engineer',
    subheadline: 'From ambiguous GenAI use cases to working, reviewable systems.',
    introParagraphs: [
      'I build full-stack AI workflows, lead mixed-stakeholder working sessions, and turn prototype evidence into reusable delivery assets. My strongest match is the forward-deployed method: discover, build, harden, document, and enable.',
    ],
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  honestyOverlay,
  codeInspect,
  roleMatchSectionTitle: 'Role-to-evidence map',
  roleMatchIntro:
    'Deloitte responsibilities mapped to public, working evidence. ServiceNow platform ownership is not inferred from these rows.',
  roleMatchColumnHeaders: {
    left: 'Deloitte responsibility',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Embed with clients and identify high-value use cases',
      evidence:
        'Playwire solutions engineering; Lore Machine cross-functional translation; Oolite stakeholder operations.',
      status: 'demonstrated',
      illustration: {
        src: playwire.imageSrc,
        alt: playwire.imageAlt,
      },
    },
    {
      requirement: 'Prototype working GenAI solutions',
      evidence:
        'Lore Machine production platform; Institutional Memory Agent (Infra24 prototype); AI24; local Infra24 pilots — not claimed as verified-live production RAG.',
      status: 'demonstrated',
      illustration: {
        src: lore.imageSrc,
        alt: lore.imageAlt,
      },
    },
    {
      requirement: 'Build agentic platforms and workflows',
      evidence: `Agentic Evidence Pipeline (${PIPELINE_REPO}) — public reference implementation, Building v0.1. Stateful TypeScript assessments with human review and a reviewable trail. Not a customer production deployment and not a completed ServiceNow implementation.`,
      status: 'transferable',
      illustration: {
        src: agenticOps.imageSrc,
        alt: agenticOps.imageAlt,
      },
    },
    {
      requirement: 'Human-in-the-loop controls and model-risk awareness',
      evidence:
        'Airtable approval queue; grounded retrieval guards on the Memory Agent prototype; golden-set evaluation concepts; citation fail-closed policy in the public evidence pipeline.',
      status: 'demonstrated',
      illustration: {
        src: n8n.imageSrc,
        alt: n8n.imageAlt,
      },
    },
    {
      requirement: 'Enterprise integrations',
      evidence:
        'Lore Machine APIs and authentication; Salesforce-to-WordPress at ICA Miami; Kinesis/Athena-to-Snowflake at Playwire; GraphQL and SaaS integrations.',
      status: 'demonstrated',
      illustration: {
        src: infra.imageSrc,
        alt: infra.imageAlt,
      },
    },
    {
      requirement: 'Production-quality code and reusable assets',
      evidence:
        'Contract tests, connector interfaces, runbooks, repository documentation, and CI-ready patterns in public GitHub work — including the Agentic Evidence Pipeline and ComfyUI Output Provenance.',
      status: 'demonstrated',
      illustration: {
        src: provenance.imageSrc,
        alt: provenance.imageAlt,
        local: provenance.imageLocal,
      },
    },
    {
      requirement: 'Lead working sessions and enable teams',
      evidence:
        'Eighteen Oolite workshops delivered; AI and tool instruction; mixed-audience technical translation. Oolite Digital Lab: https://oolitearts.org/digital-lab/',
      status: 'demonstrated',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    },
  ],
  featuredProjectIds: [
    'agentic-ops',
    'digital-culture-infrastructure',
    'n8n-gmail-intelligence',
    'lore-machine',
  ],
  caseStudyColumns: 2,
  caseStudiesSectionTitle: 'Featured evidence',
  caseStudiesIntro:
    'Public, working proof first. Agentic Evidence Pipeline is a public reference implementation — Building v0.1. Institutional Memory Agent is a local prototype. ServiceNow work is not inferred from these cards.',
  caseStudyOverrides: [
    {
      evidenceId: 'agentic-ops',
      title: 'Agentic Evidence Pipeline',
      category: 'PUBLIC REFERENCE IMPLEMENTATION — BUILDING V0.1',
      summary:
        'Stateful TypeScript reference implementation for turning public or synthetic evidence into typed, cited assessments; it pauses for human review and preserves a reviewable trail. Not a customer production deployment and not a completed ServiceNow implementation.',
      skillTags: [
        'Stateful runs',
        'Hybrid retrieval',
        'Citation gates',
        'Human review',
        'Durable jobs',
      ],
      href: PIPELINE_REPO,
      linkLabel: 'View repository',
    },
    {
      evidenceId: 'digital-culture-infrastructure',
      title: 'Institutional Memory Agent',
      category: 'RAG / EVALUATION / GOVERNED OUTPUT — PROTOTYPE',
      summary:
        'A retrieval-augmented assistant for cultural institutions using hybrid ranking, grounding guards, a golden-set evaluation script, and human-approved public outputs. Local prototype / pilot — not claimed as verified-live production RAG.',
      skillTags: ['Hybrid ranking', 'Grounding', 'Golden-set eval', 'Human approval', 'Prototype'],
      href: '/projects/infra24',
      linkLabel: 'View Infra24 context',
    },
    {
      evidenceId: 'n8n-gmail-intelligence',
      title: n8nSpec.title,
      category: `HUMAN-IN-THE-LOOP / AIRTABLE — ${n8nPack.buildState.replace('_', ' ')}`,
      summary:
        'Production n8n + Airtable operating pattern: the Gmail Intelligence Agent classifies inbound mail, applies structured labels, and writes recruiter/opportunity signals to Airtable with human approval before outbound action. Registry status: production / verified live.',
      skillTags: [...n8nSpec.skillTags],
      href: n8nSpec.href ?? '/workshop/the-art-of-ai-agents/share',
      linkLabel: 'View workflow context',
    },
    {
      evidenceId: 'lore-machine',
      title: 'Product delivery + enablement',
      category: 'LORE MACHINE + OOLITE ARTS',
      summary:
        'Production generative storytelling at Lore Machine, plus 18 hands-on technical workshops at Oolite Arts. Evidence of shipping with mixed stakeholders and leaving teams able to operate the work.',
      skillTags: ['Product delivery', 'GenAI', 'Workshops', 'Enablement', 'Handoff'],
      href: '/projects/lore-machine',
      linkLabel: 'View Lore Machine',
      secondaryHref: 'https://oolitearts.org/digital-lab/',
      secondaryLinkLabel: 'Oolite Digital Lab',
    },
  ],
  skillsMatrixRows: [],
  processSectionTitle: 'Proposed ServiceNow thin slice',
  processIntro:
    'A bounded ramp artifact: structured intake -> retrieval-assisted recommendation -> human approval -> auditable decision record -> handoff runbook. This demonstrates how I would learn the platform and de-risk a first client workflow; it is not presented as completed ServiceNow work.',
  processSteps: [
    {
      title: 'Structured intake',
      description: 'Capture a real service request with the fields the client already uses.',
    },
    {
      title: 'Retrieval-assisted recommendation',
      description: 'Classify and recommend a next action from retrieved context; abstain when evidence is thin.',
    },
    {
      title: 'Human approval',
      description: 'Pause write-path and low-confidence cases for a reviewer before anything hits the platform.',
    },
    {
      title: 'Auditable decision record',
      description: 'Persist the approved result, citations, and reviewer identity as a reviewable trail.',
    },
    {
      title: 'Handoff runbook',
      description: 'Leave the thin slice operable: failure states, owners, and how to replay or extend it.',
    },
  ],
  ctas: {
    ...sprint2026Ctas('Deloitte Forward Deployed Engineer — ServiceNow'),
    resumePdfPath: RESUME_PDF,
    resumePdfLabel: 'Download targeted resume',
    evidenceBriefPdfPath: EVIDENCE_BRIEF_PDF,
    evidenceBriefLabel: 'Open technical evidence brief',
    github: PIPELINE_REPO,
    githubLabel: 'Inspect the GitHub implementation',
    githubProfile: 'https://github.com/moisestech',
    careerPacket: '/forward-deployed',
    caseStudiesAnchor: undefined,
    resumePrintPath: undefined,
  },
  techLogoIds: [],
  resumeSectionTitle: 'The platform gap is specific. The delivery pattern is already proven.',
  resumeSectionNote: `I am most useful where a team needs someone who can listen, prototype, explain tradeoffs, build across the stack, and leave behind a system other people can operate. Targeted resume, technical evidence brief, and GitHub implementation below. Listing: ${EMPLOYER_URL}`,
};
