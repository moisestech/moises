import type { Opportunity } from './types';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import {
  sprint2026Ctas,
  sprint2026Headshot,
  sprint2026LogoBand,
  sprint2026NavItems,
  sprint2026ProcessSteps,
  verifierBoundaryNote,
} from './shared-sprint-2026';

/**
 * Public archetype page for AI Solutions Architect / customer-facing technical roles.
 * Employer-specific dossiers (Deepgram, Endor Labs, etc.) stay private overlays on this spine.
 */
export const aiSolutionsArchitectOpportunity: Opportunity = {
  slug: 'ai-solutions-architect',
  status: 'active',
  listed: true,
  variant: 'compact',
  capabilitiesHref: '/capabilities#software-engineering',
  seo: {
    title: 'AI Solutions Architect — Moises Sanabria | moises.tech',
    description:
      'Customer-facing solutions architecture: technical discovery, integration scoping, demos, and AI product translation — Playwire solutions history plus production automation and product engineering.',
    indexable: true,
  },
  visibilityNote:
    'Public role archetype — send this URL for Solutions Architect / AI Solutions Engineer clusters. Employer dossiers stay private.',
  company: 'Open',
  roleTitle: 'AI Solutions Architect',
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Solutions architecture',
        detail: 'Scoping integrations, technical discovery, and stakeholder-ready recommendations.',
      },
      {
        label: 'Customer-facing technical',
        detail: 'Playwire Solutions Engineer — publisher onboarding, JS debugging, SaaS delivery.',
      },
      {
        label: 'AI product translation',
        detail: 'Lore Machine founding engineer; AI24 education infrastructure; automation ops.',
      },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'AI Solutions Architect',
    subheadline: 'Technical discovery · integration architecture · customer-facing AI systems',
    introParagraphs: [
      'Full-Stack AI Engineer with customer-facing solutions delivery (Playwire Solutions Engineer), founding-engineer product work (Lore Machine), and production automation systems (n8n, Make, Airtable).',
      'Best fit when the role needs someone who can sit with buyers and internal teams, map the integration surface, ship a credible proof, and leave documentation that nontechnical stakeholders can adopt.',
      verifierBoundaryNote,
    ],
    trustLine: 'Solutions + product + automation · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'What this lane covers',
  roleMatchIntro:
    'Strongest lanes: technical discovery, integration scoping, demos, and documentation for nontechnical buyers. Domain-specific depth (speech, AppSec, healthcare) is verified per employer JD — not invented here.',
  roleMatchRows: [
    {
      requirement: 'Customer-facing technical discovery',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n Gmail intelligence',
        local: true,
      },
    },
    {
      requirement: 'Solutions / pre-sales engineering',
      evidence:
        'Playwire Solutions Engineer: publisher implementations, JavaScript debugging, SaaS onboarding without framework abstractions.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire solutions experience',
        local: true,
      },
    },
    {
      requirement: 'AI / API product context',
      evidence:
        'Lore Machine founding engineer — LLM and generative media APIs, Vercel deployment, cross-functional stakeholder communication.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Documentation and adoption',
      evidence:
        'Oolite Digital Lab and institutional workshop systems — runbooks, taxonomy, and teaching that turns tools into repeatable practice.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 applied AI context',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
  ],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'n8n-gmail-intelligence', 'ai24'],
  skillsMatrixRows: [
    {
      category: 'Solutions',
      skills: 'Discovery, scoping, demos, runbooks, executive communication',
      icon: 'target',
    },
    {
      category: 'Integrations',
      skills: 'REST APIs, webhooks, Airtable, Gmail, Square, SaaS onboarding',
      icon: 'workflow',
    },
    {
      category: 'AI products',
      skills: 'LLM workflows, prompt ops, applied GenAI prototypes — domain gaps noted per JD',
      icon: 'sparkles',
    },
    {
      category: 'Data-adjacent',
      skills: 'Snowflake, Tableau, pipeline migration (Playwire Data Analyst)',
      icon: 'lineChart',
    },
  ],
  processSectionTitle: 'How I work with customers',
  processIntro: 'Map the integration surface first, prototype the smallest proof, document adoption paths.',
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Technical translator · builder',
  innovationLabBody:
    'AI Solutions Architect roles need someone who can sit with customers, map architecture, and ship credible proofs — Playwire solutions delivery, product engineering, and automation ops match that motion. Employer-specific depth is layered in private dossiers when needed.',
  ctas: sprint2026Ctas('AI Solutions Architect'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — Solutions Architect lane',
  resumeSectionNote:
    'Lead with Full-Stack AI Engineer + Playwire Solutions. Use employer dossiers only when the JD needs a private overlay.',
};
