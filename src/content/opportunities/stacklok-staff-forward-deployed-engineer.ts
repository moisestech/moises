/**
 * Stacklok — Staff Forward Deployed Engineer
 * /opportunities/stacklok-staff-forward-deployed-engineer
 *
 * Listing: https://job-boards.greenhouse.io/stacklok/jobs/5199238007
 * Reuses Forward Deployed role-portfolio patterns; verify geography before applying.
 */

import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { stacklokStaffFdeBanner } from '@/content/evidence/applicationBanners';
import { engineeringEvidencePack } from './packs';
import { evidenceProjects } from '@/content/evidence/projects';

const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;
const n8n = evidenceProjects['n8n-gmail-intelligence'];

const rolePortfolio: RolePortfolioDossier = {
  capabilityMap: {
    title: 'Core capabilities',
    subtitle: 'Forward-deployed delivery across AI systems, product engineering, and client translation.',
    groups: [
      {
        id: 'fde',
        title: 'Forward-deployed delivery',
        items: [
          '**Rapid prototyping, stakeholder demos, ambiguous-problem definition, sprint planning, prototype-to-production handoff**',
        ],
      },
      {
        id: 'ai',
        title: 'AI systems',
        items: [
          '**LLM applications, prompt systems, multimodal pipelines, evaluation habits, human review gates**',
        ],
      },
      {
        id: 'stack',
        title: 'Full-stack engineering',
        items: [
          '**TypeScript, React, Next.js, Python, FastAPI, APIs, Vercel, Docker, AWS-adjacent shipping**',
        ],
      },
    ],
    currentlyExtending: [
      'Security-product domain depth for Stacklok-specific tooling — labeled as ramp, not invented tenure.',
    ],
    closingStatement:
      'Hands-on stack spans **TypeScript, React, Next.js, Python, FastAPI, LLM workflows, automation, and forward-deployed client delivery**.',
  },
  experienceRolesTitle: 'Professional experience',
  experienceRoles: [
    {
      id: 'lore-machine',
      org: 'Lore Machine',
      title: 'Chief Prompt Officer · Founding Engineer',
      bullets: [
        'Founding engineer on a generative-AI storytelling platform — interfaces, APIs, prompt systems, multimodal output.',
        'Translated experimental model capabilities into creator-facing product features.',
        'Managed contractors, sprints, and demos for technical and nontechnical stakeholders.',
      ],
    },
    {
      id: 'ai24',
      org: 'AI24',
      title: 'Co-Founder · Creative AI Engineer',
      bullets: [
        'Built AI editorial pipelines with human review before publish.',
        'Full-stack TypeScript delivery with generative-image and news integrations.',
      ],
    },
  ],
  availabilityNote:
    'Available for Stacklok Staff Forward Deployed Engineer conversations — confirm geography and hybrid expectations against the live Greenhouse listing before applying.',
};

export const stacklokStaffForwardDeployedEngineerOpportunity: Opportunity = {
  slug: 'stacklok-staff-forward-deployed-engineer',
  status: 'active',
  listed: false,
  family: 'role-portfolio',
  applicationStatus: 'ready',
  variant: 'role-portfolio',
  capabilitiesHref: '/capabilities#devops-deployment',
  applicationBanner: stacklokStaffFdeBanner,
  seo: {
    title: 'Stacklok — Staff Forward Deployed Engineer — Moises Sanabria',
    description:
      'Private dossier for Stacklok Staff Forward Deployed Engineer — client delivery, LLM systems, and full-stack prototyping.',
    indexable: false,
  },
  visibilityNote:
    'Private application dossier · Stacklok · Staff Forward Deployed Engineer · not affiliated with or endorsed by Stacklok. Verify listing geography before apply.',
  company: 'Stacklok',
  roleTitle: 'Staff Forward Deployed Engineer',
  heroEyebrow: 'APPLICATION DOSSIER · STACKLOK',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Forward Deployed AI Engineer · full-stack prototyping · stakeholder translation',
  heroMetaChips: [
    'Forward deployed',
    'LLM applications',
    'Full-stack TypeScript',
    'Client demos',
    'Verify geography',
  ],
  heroPrimaryCta: { label: 'Role fit', href: '#fit' },
  heroSecondaryCta: { label: 'Contact', href: '#contact' },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      { label: 'Stacklok', detail: 'Staff Forward Deployed Engineer — Greenhouse listing.' },
      {
        label: 'Forward deployed',
        detail: 'Prototype with customers; leave maintainable systems.',
      },
      {
        label: 'Geography',
        detail: 'Confirm location requirements before submitting.',
      },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'Staff forward-deployed engineer for AI systems that have to land with customers',
    subheadline:
      'Prototype fast, translate for stakeholders, leave production-shaped paths — with geography verified against the live listing',
    introParagraphs: [
      'Stacklok’s Staff FDE seat needs engineers who can sit with customers, ship prototypes, and harden what works. That matches my Lore Machine founding-engineer path, AI24 product delivery, and production automation work—plus the Forward Deployed AI Engineer dossier framing I use for client-facing AI roles.',
      'Geography and hybrid constraints must be confirmed on the Greenhouse posting before apply. This page is ready for that conversation without inventing location fit.',
    ],
    trustLine: 'Forward Deployed AI Engineer · Lore Machine · AI24 · Miami-based',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchSectionTitle: 'Role fit',
  roleMatchIntro: 'Staff FDE signals mapped to demonstrated delivery; domain and geography labeled honestly.',
  roleMatchColumnHeaders: { left: 'Stacklok priority', right: 'Evidence' },
  roleMatchRows: [
    {
      requirement: 'Forward-deployed / customer delivery',
      evidence:
        'Lore Machine founding engineer — demos, contractor management, stakeholder translation across creative and technical partners.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'LLM / AI application engineering',
      evidence:
        'Prompt systems and multimodal pipelines at Lore; AI24 editorial generation with human review.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Automation and integration',
      evidence: n8n.summary,
      status: 'demonstrated',
      illustration: { src: n8n.imageSrc, alt: n8n.imageAlt, local: n8n.imageLocal },
    },
    {
      requirement: 'Stacklok security-product domain + geography',
      evidence:
        'Not claimed. Confirm Greenhouse location requirements; treat Stacklok-specific domain as an explicit ramp.',
      status: 'todo',
    },
  ],
  featuredProjectIds: [...engineeringEvidencePack.solutionsArchitectDefault],
  evidenceRecipe: 'forward-deployed-default',
  caseStudiesSectionTitle: 'Proof ranking for Stacklok FDE',
  caseStudiesIntro:
    'PRIMARY Forward-Deployed Systems · SmartSigns · automation · Agentic Ops (Building). Same flagships, FDE ordering.',
  skillsMatrixRows: [
    {
      category: 'Delivery',
      skills: 'Prototyping, demos, stakeholder translation, sprint planning',
      icon: 'target',
    },
    {
      category: 'AI + stack',
      skills: 'LLM workflows, TypeScript, React, Next.js, Python, APIs, automation',
      icon: 'sparkles',
    },
    {
      category: 'Gaps',
      skills: 'Stacklok security-product tenure; geography confirmation required',
      icon: 'shield',
    },
  ],
  processSteps: [
    {
      title: 'Discover the customer workflow',
      description: 'Clarify users, constraints, and what “done” means before building.',
    },
    {
      title: 'Ship a vertical slice',
      description: 'Prototype the riskiest integration path; keep humans in the loop.',
    },
    {
      title: 'Harden and hand off',
      description: 'Document, evaluate, and leave a maintainable path for the customer team.',
    },
  ],
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    resumePrintPath: '/cv/tech/print',
    careerPacket: '/career-packet',
    caseStudiesAnchor: '#case-studies',
    emailSubject: 'Stacklok — Staff Forward Deployed Engineer — Moises Sanabria',
  }),
  techLogoIds: [],
  resumeSectionTitle: 'Discuss Stacklok Staff FDE (after geography check)',
  resumeSectionNote:
    'Private dossier. Confirm Greenhouse location before applying. Related: /opportunities/forward-deployed-ai-engineer.',
};
