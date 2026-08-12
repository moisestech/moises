/**
 * Alpha Drive AI — Full Stack Engineer
 * /opportunities/alpha-drive-ai-full-stack-engineer
 *
 * Indeed listing: remote Florida · $125k–$150k
 * https://www.indeed.com/viewjob?jk=89804cc3c2ad9ff4
 */

import type { Opportunity } from './types';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { evidenceProjects } from '@/content/evidence/projects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';
import { alphaDriveAiFullStackBanner } from '@/content/evidence/applicationBanners';
import { frontendProductPack } from './packs';
import {
  sprint2026Headshot,
  sprint2026NavItems,
  sprint2026ProcessSteps,
} from './shared-sprint-2026';

const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;
const n8n = evidenceProjects['n8n-gmail-intelligence'];

export const alphaDriveAiFullStackEngineerOpportunity: Opportunity = {
  slug: 'alpha-drive-ai-full-stack-engineer',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'ready',
  variant: 'compact',
  capabilitiesHref: '/capabilities#software-engineering',
  applicationBanner: alphaDriveAiFullStackBanner,
  seo: {
    title: 'Alpha Drive AI — Full Stack Engineer — Moises Sanabria',
    description:
      'Private application dossier for Alpha Drive AI Full Stack Engineer — React/TypeScript product ownership, Python services, LLM-accelerated delivery, remote Florida.',
    indexable: false,
  },
  visibilityNote:
    'Private application dossier · Alpha Drive AI · Full Stack Engineer · not affiliated with or endorsed by Alpha Drive AI',
  company: 'Alpha Drive AI',
  roleTitle: 'Full Stack Engineer',
  heroEyebrow: 'APPLICATION DOSSIER · REMOTE FLORIDA',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Full-stack AI product engineer — React/TypeScript surfaces, Python/API delivery, and LLM-accelerated shipping from Miami.',
  heroRoleMeta: 'Remote · Florida · Full Stack · React · TypeScript · Python · AI product',
  heroMetaChips: [
    'Florida remote',
    'React + TypeScript',
    'Python → API → UI',
    'LLM-accelerated delivery',
    'Founding-engineer product ownership',
  ],
  heroPrimaryCta: { label: 'Role fit', href: '#fit' },
  heroSecondaryCta: { label: 'Contact', href: '#resume' },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Alpha Drive AI',
        detail: 'Full Stack Engineer — remote Florida builder role.',
      },
      {
        label: 'Full stack',
        detail: 'Own the path from services and models to operator-facing UI.',
      },
      {
        label: 'Florida',
        detail: 'Miami-based — state fit for remote Florida requirements.',
      },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Full-stack engineer for AI product that has to ship',
    subheadline:
      'React/TypeScript product ownership, Python integrations, and LLM-accelerated delivery — from Miami, remote Florida',
    introParagraphs: [
      'Alpha Drive needs builders who can own surfaces and services—not slide decks. I match that signal as a founding full-stack engineer (Lore Machine), Creative AI engineer (AI24), and production automation practitioner (n8n/Make), with daily Cursor/Claude Code practice.',
      'I am Miami-based and available for a remote Florida seat. Aviation-specific or proprietary Alpha Drive domain knowledge is an honest ramp—not invented tenure.',
    ],
    trustLine: 'Full-Stack AI Engineer · Miami, Florida · remote-ready',
    headshotSrc: sprint2026Headshot ?? moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit',
  roleMatchIntro:
    'Mapped to a remote Florida full-stack AI builder seat. Demonstrated product ownership first; domain ramps labeled honestly.',
  roleMatchColumnHeaders: {
    left: 'Alpha Drive priority',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Full-stack product ownership',
      evidence:
        'Lore Machine founding engineer — React/Next.js interfaces, auth, APIs, Vercel production on a three-person team.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'AI / LLM application engineering',
      evidence:
        'Prompt systems and multimodal pipelines at Lore; AI24 editorial generation with human review before publish.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Automation and integration fluency',
      evidence: n8n.summary,
      status: 'demonstrated',
      illustration: { src: n8n.imageSrc, alt: n8n.imageAlt, local: n8n.imageLocal },
    },
    {
      requirement: 'Remote Florida collaboration',
      evidence: 'Miami-based; distributed creative-technical delivery across product and institutional partners.',
      status: 'demonstrated',
    },
  ],
  featuredProjectIds: [...frontendProductPack.featuredProjectIds],
  skillsMatrixRows: [...frontendProductPack.skillRows],
  processSteps: sprint2026ProcessSteps,
  processSectionTitle: 'How I would work at Alpha Drive',
  processIntro:
    'Clarify the operator workflow, ship the smallest useful vertical slice, document adoption, then harden.',
  ctas: recruitingCtas({
    emailSubject: 'Alpha Drive AI — Full Stack Engineer — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
  }),
  techLogoIds: [],
  resumeSectionTitle: 'Let’s talk about shipping the next Alpha Drive surface',
  resumeSectionNote:
    'Private dossier for Alpha Drive AI Full Stack Engineer. Download résumé or email Moises.',
};
