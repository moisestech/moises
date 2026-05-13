/**
 * Knight Foundation — Technology Product Strategist (Journalism Program).
 * Canonical public dossier URL remains /technology-product-strategy (see docs/knight-application).
 * This module documents the opportunity inside the same system types for registries and future mirrors.
 */
import type { Opportunity } from './types';

export const knightJournalismTechProductStrategistMeta = {
  slug: 'knight-journalism-tech-product-strategist',
  canonicalPath: '/technology-product-strategy',
  company: 'Knight Foundation',
  role: 'Technology Product Strategist',
  program: 'Journalism Program',
} as const;

/** Draft config: not served from /opportunities/[slug] until promoted to active + registered. */
export const knightJournalismTechProductStrategistOpportunity: Opportunity = {
  slug: knightJournalismTechProductStrategistMeta.slug,
  status: 'draft',
  variant: 'full-dossier',
  seo: {
    title: 'Technology product strategy for public information | Moises Sanabria',
    description:
      'Selected case studies, frameworks, and capabilities for technology product strategy at the intersection of AI, civic media, and public information systems.',
    indexable: false,
  },
  audienceLine:
    'Prepared as supporting material for Knight Foundation’s Journalism Program — Technology Product Strategist (Miami, FL or remote).',
  company: knightJournalismTechProductStrategistMeta.company,
  roleTitle: knightJournalismTechProductStrategistMeta.role,
  hero: {
    headline: 'Technology product strategy for public information',
    subheadline: 'AI, media systems, civic technology, startup execution, and public-facing cultural infrastructure.',
    introParagraphs: [
      'Full dossier content is maintained on the canonical page linked from application materials.',
    ],
  },
  roleMatchRows: [],
  featuredProjectIds: [],
  skillsMatrixRows: [],
  processSteps: [],
  ctas: {
    email: 'm@moises.tech',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    resumePrintPath: '/technology-product-strategy/print/resume',
    coverLetterPrintPath: '/technology-product-strategy/print/cover-letter',
    portfolio: '/portfolio',
    cv: '/cv',
  },
  techLogoIds: [],
};
