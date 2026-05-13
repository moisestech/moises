/**
 * Knight Foundation — Technology Product Strategist (Journalism Program).
 * Canonical public dossier URL remains /technology-product-strategy (see docs/knight-application).
 * This module documents the opportunity inside the same system types for registries and future mirrors.
 */
import type { Opportunity } from './types';
import { technologyProductStrategy } from '@/content/technologyProductStrategy';

export const knightJournalismTechProductStrategistMeta = {
  slug: 'knight-journalism-tech-product-strategist',
  canonicalPath: '/technology-product-strategy',
  company: 'Knight Foundation',
  role: 'Technology Product Strategist',
  program: 'Journalism Program',
} as const;

/**
 * Active recruiting entry: `/opportunities/knight-journalism-tech-product-strategist` renders the
 * full dossier (`TechnologyProductStrategyClient`). Canonical URL for emails remains `/technology-product-strategy`.
 */
export const knightJournalismTechProductStrategistOpportunity: Opportunity = {
  slug: knightJournalismTechProductStrategistMeta.slug,
  status: 'active',
  variant: 'full-dossier',
  applicationBanner: technologyProductStrategy.applicationBanner,
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
      'Full dossier: Knight Journalism Program — technology investments, AI evaluation, and civic information systems.',
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
