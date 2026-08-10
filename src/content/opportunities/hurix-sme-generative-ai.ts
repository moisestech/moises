/**
 * Hurix Digital — Subject Matter Expert, Generative AI
 * /opportunities/hurix-sme-generative-ai
 *
 * Reusable overlay for GenAI certificate / curriculum SME contracts
 * (Coursera, edX, Udemy, corporate learning refresh engagements).
 */

import type { Opportunity } from './types';
import { genAiCurriculumSmeBanner } from '@/content/evidence/applicationBanners';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';
import {
  genAiCurriculumSmeEvidenceLine,
  genAiCurriculumSmeFeaturedProjectIds,
  genAiCurriculumSmeLogoBand,
  genAiCurriculumSmeProcessSteps,
  genAiCurriculumSmeRoleMatchRows,
  genAiCurriculumSmeSkills,
  genAiCurriculumSmeTeachingHighlights,
  genAiCurriculumSmeVerifierNote,
} from './packs/genAiCurriculumSmePack';

export const hurixSmeGenerativeAiOpportunity: Opportunity = {
  slug: 'hurix-sme-generative-ai',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'ready',
  variant: 'compact',
  capabilitiesHref: '/capabilities#ai-engineering',
  applicationBanner: {
    ...genAiCurriculumSmeBanner,
    alt: 'Hurix Digital — Subject Matter Expert, Generative AI application banner',
  },
  seo: {
    title: 'SME — Generative AI (Hurix) · Moises Sanabria',
    description:
      'Private dossier for Hurix Generative AI Subject Matter Expert — curriculum refresh, labs, assessments, and video-ready technical learning content.',
    indexable: false,
  },
  visibilityNote:
    'Private application dossier · Hurix Digital · SME Generative AI · not affiliated with or endorsed by Hurix Systems',
  company: 'Hurix Digital',
  roleTitle: 'Subject Matter Expert — Generative AI',
  heroEyebrow: 'APPLICATION DOSSIER · HURIX',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'GenAI practitioner and educator — refreshes certificate content, labs, and screencast-ready materials from live teaching and production systems.',
  heroMetaChips: [
    'Remote US · short-term contract',
    'Curriculum SME',
    'LLM / agents',
    'Labs & assessments',
    'Video-ready teaching',
  ],
  heroPrimaryCta: { label: 'Role fit', href: '#fit' },
  heroSecondaryCta: { label: 'Workshop proof', href: '/workshop/the-art-of-ai-agents' },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Certificate redevelopment',
        detail: 'Refresh Generative AI modules, labs, assessments, and demos for professional learners.',
      },
      {
        label: 'Instructional collaboration',
        detail: 'Partner with IDs and video teams on scripts, walkthroughs, and production milestones.',
      },
      {
        label: 'Hands-on GenAI',
        detail: 'LLMs, prompt engineering, agents, Python, OpenAI / Anthropic / Gemini ecosystems.',
      },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'teaching-cred', label: 'Teaching' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'How I work' },
    { id: 'resume', label: 'Résumé' },
  ],
  hero: {
    headline: 'Subject Matter Expert — Generative AI',
    subheadline: 'Curriculum refresh · labs · assessments · screencast-ready technical content',
    introParagraphs: [
      'Hurix Digital needs experienced Generative AI professionals to redevelop a professional certificate program — refreshing technical content, updating coding labs, reviewing assessments, collaborating on instructional design, and supporting high-quality video learning.',
      'I already teach GenAI and agent workflows in public programs (The Art of AI Agents, Learn AI Without Losing Yourself), ship production automations with LLM agent nodes, and write materials nontechnical and practitioner audiences can follow.',
      genAiCurriculumSmeVerifierNote,
    ],
    trustLine: 'Public AI workshops · production n8n agents · Lore Machine GenAI product · Miami / remote US',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Why this engagement fits',
  roleMatchIntro:
    'Mapped to Hurix SME responsibilities: content redevelopment, modern GenAI labs, instructional collaboration, and timely milestone delivery — with honest stack boundaries.',
  roleMatchColumnHeaders: {
    left: 'Hurix need',
    right: 'Evidence',
  },
  roleMatchRows: genAiCurriculumSmeRoleMatchRows,
  featuredProjectIds: [...genAiCurriculumSmeFeaturedProjectIds],
  teachingHighlights: genAiCurriculumSmeTeachingHighlights,
  skillsMatrixRows: genAiCurriculumSmeSkills,
  processSectionTitle: 'How I would redevelop the certificate',
  processIntro:
    'Treat the certificate like a living product: audit, refresh for current practice, rebuild labs learners can finish, and leave materials instructional designers can maintain.',
  processSteps: genAiCurriculumSmeProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Technical SME who already teaches',
  innovationLabBody: `Most GenAI SMEs can list frameworks. I bring confirmed workshop curricula, production agent evidence (${genAiCurriculumSmeEvidenceLine}), and GenAI product delivery — packaged for certificate redevelopment, not slide-deck theory.`,
  ctas: recruitingCtas({
    emailSubject: 'Hurix — SME Generative AI — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
  }),
  animatedLogoBand: genAiCurriculumSmeLogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Application answers ready',
  resumeSectionNote:
    'Private Hurix dossier. Reuse this pack for Coursera / edX / Udemy / corporate GenAI SME overlays. LinkedIn, GitHub, portfolio, and workshop URLs are on this site and résumé.',
};
