/**
 * Evergreen public FDE flagship — /forward-deployed
 * Employer overlays stay under /opportunities/... (Deloitte Design Facilitator is separate).
 */

import type { Opportunity } from '@/content/opportunities/types';
import { capabilitiesPillarHref } from '@/content/capabilities';
import { evidenceProjects } from '@/content/evidence/projects';
import { fdeEngineeringClaimedStackBand } from '@/content/evidence/recruitingLogoBand';
import { sprint2026Ctas, sprint2026Headshot } from '@/content/opportunities/shared-sprint-2026';
import { FDE_PARTNER_LOGOS } from '@/content/opportunities/fdePartnerLogos';
import {
  AGENTIC_OPS_REPO,
  FDE_ENGINEERING_EXPLORER_IDS,
  FDE_ENGINEERING_FEATURED_IDS,
  FDE_ENGINEERING_PROOF_IDS,
  FDE_ENGINEERING_SUPPORTING_IDS,
  fdeItem,
  toExplorerRow,
  toProofCard,
  toSupportingItem,
} from '@/content/opportunities/fdeEvidenceRegistry';
import { FDE_ENGINEERING_HONESTY, FDE_MESSY_SYSTEM_STEPS } from '@/content/flagships/fdeEngineeringEvidence';

const TECH_CV_PDF = '/resume/moises-sanabria-technology-cv.pdf';
const EVIDENCE_BRIEF_PDF = '/resume/MoisesSanabria_FDE_Technical_Evidence.pdf';

const ops = fdeItem('agentic-ops');
const lore = fdeItem('lore-machine');
const playwire = fdeItem('playwire');
const bookleggersEvidence = fdeItem('bookleggers');
const opsProject = evidenceProjects['agentic-ops'];
const playwireProject = evidenceProjects['playwire-alumni'];

export const forwardDeployedFlagship: Opportunity = {
  slug: 'forward-deployed',
  status: 'active',
  listed: false,
  family: 'compact',
  variant: 'compact',
  capabilitiesHref: capabilitiesPillarHref('ai-engineering'),
  heroActionLayout: 'primary-then-rest',
  showFdeRoleMap: true,
  showAepHarness: false,
  seo: {
    title: 'Forward-Deployed Engineer — Agentic Systems Evidence | Moises Sanabria',
    description:
      'Senior engineer who enters ambiguous organizations, wires models to real tools and data, adds evaluation and human controls, deploys a usable system, and leaves the team able to operate it. Python, FastAPI, LangGraph, MCP-shaped tools, TypeScript, HITL, evals.',
    indexable: true,
    keywords: [
      'Forward Deployed Engineer',
      'Forward Deployed AI Engineer',
      'Applied AI Engineer',
      'Agentic Systems',
      'Python',
      'FastAPI',
      'LangGraph',
      'MCP',
      'Model Context Protocol',
      'tool calling',
      'human in the loop',
      'evaluations',
      'RAG',
    ],
  },
  roleTitle: 'Forward-Deployed Engineer',
  heroEyebrow: 'FORWARD-DEPLOYED · APPLIED AI · AGENTIC SYSTEMS',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'I take ambiguous organizational problems, determine what should and should not be handled by AI, wire models to real tools and data, add evaluation and human controls, deploy a usable system, and leave the organization able to operate it.',
  audienceKeywords: {
    lead: 'How the work moves',
    terms: [
      {
        label: 'Discover',
        detail: 'Watch the real workflow. Name owner, data, permissions, and the cost of a bad write.',
      },
      {
        label: 'Prototype',
        detail: 'Bound one slice. Choose ordinary software, automation, retrieval, a model call, or an agent.',
      },
      {
        label: 'Govern',
        detail: 'Permissions, evals, fail-closed behavior, and a human gate on writes.',
      },
      {
        label: 'Deploy',
        detail: 'Put it in front of actual operators.',
      },
      {
        label: 'Teach',
        detail: 'Show where it works and where it breaks.',
      },
      {
        label: 'Handoff',
        detail: 'Runbook, ownership, and a next iteration.',
      },
    ],
  },
  heroMetaChips: [
    { label: 'Python · FastAPI · LangGraph', href: '#runtime' },
    { label: 'Lore Machine founding engineer', href: '/projects/lore-machine' },
    { label: 'Playwire solutions + data', href: '#case-studies' },
    'Miami / U.S. citizen',
  ],
  heroToolMarks: fdeEngineeringClaimedStackBand.slice(0, 5),
  heroPrimaryCta: { label: 'See the proof', href: '#honesty' },
  heroSecondaryCta: { label: 'Inspect Agentic Ops', href: '#runtime' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'honesty', label: 'Proof' },
    { id: 'proven', label: 'Proven' },
    { id: 'runtime', label: 'Agentic Ops' },
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'process', label: 'How I work' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'reliability', label: 'Trust' },
    { id: 'stack', label: 'Stack' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'fit', label: 'Explorer' },
    { id: 'harden', label: 'Next' },
    { id: 'teaching-cred', label: 'Teach' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'Forward-Deployed AI Systems',
    subheadline:
      'Senior engineer who deploys systems with people — not an educator who happens to code.',
    introParagraphs: [
      'Production GenAI product work, client-facing solutions and data engineering, and a Python LangGraph reference runtime with permissioned tools and human approval. A separate TypeScript evidence pipeline sits beside that runtime. Teaching is how handoff sticks. It is not the headline.',
    ],
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  honestyOverlay: FDE_ENGINEERING_HONESTY,
  proofSnapshot: {
    title: 'Proof snapshot',
    intro:
      'Each card is an evidence type, not a claim of completeness. Agentic Ops is the Python reference runtime. Lore and Playwire are production. Bakehouse is institutional delivery. AEP is a separate TypeScript reference.',
    cards: FDE_ENGINEERING_PROOF_IDS.map((id) => toProofCard(fdeItem(id))),
  },
  roleMatchSectionTitle: 'Evidence explorer',
  roleMatchColumnHeaders: {
    left: 'Stage',
    right: 'Claim',
  },
  roleMatchRows: FDE_ENGINEERING_EXPLORER_IDS.map((id) => toExplorerRow(fdeItem(id), 'flagship')),
  featuredProjectIds: [...FDE_ENGINEERING_FEATURED_IDS],
  caseStudyColumns: 2,
  caseStudiesSectionTitle: 'Production, client, and reference systems',
  caseStudiesIntro:
    'Agentic Ops, Lore Machine, Playwire, and Bookleggers. Bakehouse signage, Oolite, and the TypeScript evidence pipeline sit under See all.',
  caseStudyOverrides: [
    {
      evidenceId: 'agentic-ops',
      title: ops.title,
      category: 'AGENTIC OPS — PYTHON / LANGGRAPH · REFERENCE IMPLEMENTATION',
      summary: `${ops.whatThisProves} ${ops.limitation}`,
      skillTags: ops.tools ?? ['Python', 'FastAPI', 'LangGraph'],
      href: ops.inspectHref,
      linkLabel: ops.inspectLabel,
      secondaryHref: AGENTIC_OPS_REPO,
      secondaryLinkLabel: 'Ops on GitHub',
      imageSrc: opsProject.imageSrc,
      imageAlt: opsProject.imageAlt,
      evidenceType: ops.evidenceType,
      media: ops.media,
    },
    {
      evidenceId: 'lore-machine',
      title: lore.title,
      category: 'LORE MACHINE — SHIPPED PRODUCT',
      summary: `${lore.whatChanged} ${lore.limitation}`,
      skillTags: ['Founding engineer', 'Auth', 'APIs', 'GenAI product'],
      href: lore.inspectHref,
      linkLabel: lore.inspectLabel,
      evidenceType: lore.evidenceType,
      logoSrc: lore.logoSrc,
      logoAlt: lore.logoAlt,
      media: lore.media,
    },
    {
      evidenceId: 'playwire-alumni',
      title: playwire.title,
      category: 'PLAYWIRE — CLIENT / ENTERPRISE',
      summary: `${playwire.whatChanged} ${playwire.limitation}`,
      skillTags: playwire.tools ?? playwireProject.skillTags,
      href: playwire.inspectHref,
      linkLabel: playwire.inspectLabel,
      imageSrc: playwireProject.imageSrc,
      imageSrcDark: playwireProject.imageSrcDark,
      imageAlt: playwireProject.imageAlt,
      evidenceType: playwire.evidenceType,
      media: playwire.media,
    },
    {
      evidenceId: 'bookleggers-commerce-automation',
      title: bookleggersEvidence.title,
      category: 'BOOKLEGGERS — CLIENT AUTOMATION',
      summary: `${bookleggersEvidence.whatChanged} ${bookleggersEvidence.limitation}`,
      skillTags: ['Make.com', 'Square', 'Airtable'],
      href: bookleggersEvidence.inspectHref,
      linkLabel: bookleggersEvidence.inspectLabel,
      evidenceType: bookleggersEvidence.evidenceType,
      logoSrc: bookleggersEvidence.logoSrc,
      logoAlt: bookleggersEvidence.logoAlt,
      media: bookleggersEvidence.media,
    },
  ],
  supportingEvidenceTitle: 'See all — supporting evidence',
  supportingEvidenceIntro:
    'The TypeScript evidence pipeline, Oolite, the n8n workshop, and Field Kit. Bakehouse signage has its own section.',
  supportingEvidence: FDE_ENGINEERING_SUPPORTING_IDS.map((id) => toSupportingItem(fdeItem(id))),
  sectionQuotes: [
    {
      after: 'hero',
      quote: 'Decide whether AI belongs. Then wire, govern, deploy, and leave a path.',
      variant: 'terminal',
    },
    {
      after: 'cases',
      quote: 'Reference implementation is a maturity label. Production is a different one.',
    },
    {
      after: 'teaching',
      quote: 'The model interprets ambiguity. The harness owns context, tools, permissions, and review.',
    },
  ],
  certifications: [
    {
      name: 'Cooper Union — Bachelor of Fine Arts (BFA)',
      detail: 'Studio practice applied to systems — useful in mixed rooms, not a substitute for backend evidence.',
      href: 'https://cooper.edu',
      logoSrc: FDE_PARTNER_LOGOS.cooperUnion.src,
      logoAlt: FDE_PARTNER_LOGOS.cooperUnion.alt,
    },
    {
      name: 'Public GenAI / agent curricula',
      detail: 'The Art of AI Agents and related programs — enablement after the system exists.',
      href: '/workshop/the-art-of-ai-agents',
      icon: 'graduation',
    },
  ],
  skillsMatrixRows: [
    {
      category: 'Agent runtime',
      skills: 'LangGraph StateGraph, tool catalogs, HITL interrupt, fake-provider evals',
      icon: 'sparkles',
    },
    {
      category: 'Backend',
      skills: 'Python, FastAPI, TypeScript, Node, REST, Postgres, Docker',
      icon: 'code2',
    },
    {
      category: 'Data / client systems',
      skills: 'Kinesis, Athena, Snowflake, Airtable, publisher JavaScript integrations',
      icon: 'layers',
    },
    {
      category: 'Forward-deployed delivery',
      skills: 'Discovery, thin slice, integration inside an org, teaching, handoff',
      icon: 'users',
    },
  ],
  processSectionTitle: 'How I enter a messy system',
  processIntro:
    'Eight moves, mapped onto the existing Discover → Handoff lifecycle. Bound, choose, and wire sit inside Prototype so this page does not invent a second methodology.',
  processSteps: FDE_MESSY_SYSTEM_STEPS.map(({ title, description }) => ({ title, description })),
  ctas: {
    ...sprint2026Ctas('Forward-Deployed Engineer'),
    resumePdfPath: TECH_CV_PDF,
    resumePdfLabel: 'Download résumé',
    evidenceBriefPdfPath: EVIDENCE_BRIEF_PDF,
    evidenceBriefLabel: 'Open technical evidence brief',
    github: AGENTIC_OPS_REPO,
    githubLabel: 'Inspect Agentic Ops source',
    githubProfile: 'https://github.com/moisestech',
    caseStudiesAnchor: undefined,
    resumePrintPath: undefined,
  },
  techLogoIds: [],
  animatedLogoBand: fdeEngineeringClaimedStackBand,
  resumeSectionTitle: 'Discuss the work, inspect the evidence',
  resumeSectionNote:
    'Send this URL. Agentic Ops is the Python / LangGraph reference runtime. Lore and Playwire are production experience. Neither agent runtime is a live-model customer deployment. Teaching remains enablement evidence.',
};

export { FDE_ENGINEERING_HONESTY };
