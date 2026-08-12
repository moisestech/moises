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

/** Sprint seq 1 · Due Jul 12 · Listing verification required before submit */
export const deepgramSolutionsArchitectOpportunity: Opportunity = {
  slug: 'deepgram-solutions-architect',
  status: 'active',
  listed: false,
  variant: 'compact',
  capabilitiesHref: '/capabilities#ai-engineering',
  seo: {
    title: 'Solutions Architect — Deepgram · Moises Sanabria',
    description:
      'Customer-facing solutions architecture, technical discovery, and AI/voice-adjacent product translation — Full-Stack AI Engineer with Playwire solutions history and production automation evidence.',
    indexable: false,
  },
  visibilityNote:
    'Listing verification pending — Indeed email found; company careers page not independently confirmed open. Do not submit until reverified.',
  company: 'Deepgram',
  roleTitle: 'Solutions Architect',
  audienceKeywords: {
    terms: [
      { label: 'Solutions architecture', detail: 'Scoping integrations, technical discovery, and stakeholder-ready recommendations.' },
      { label: 'Customer-facing technical', detail: 'Playwire Solutions Engineer — publisher onboarding, JS debugging, SaaS delivery.' },
      { label: 'AI product translation', detail: 'Lore Machine founding engineer; AI24 education infrastructure; automation ops.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Solutions Architect',
    subheadline: 'Technical discovery · integration architecture · customer-facing AI systems',
    introParagraphs: [
      'Full-Stack AI Engineer with customer-facing solutions delivery (Playwire Solutions Engineer), founding-engineer product work (Lore Machine), and production automation systems (n8n Gmail intelligence, Make + Square + Airtable).',
      verifierBoundaryNote,
    ],
    trustLine: 'Solutions + data background · Playwire 2021–2022 · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (verifier-checked)',
  roleMatchIntro: 'Strongest lanes: technical discovery, integration scoping, demos, and documentation for nontechnical buyers.',
  roleMatchRows: [
    {
      requirement: 'Customer-facing technical discovery',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: { src: evidenceProjects['n8n-gmail-intelligence'].imageSrc, alt: 'n8n Gmail intelligence', local: true },
    },
    {
      requirement: 'Solutions / pre-sales engineering',
      evidence:
        'Playwire Solutions Engineer: publisher implementations, JavaScript debugging, SaaS onboarding without framework abstractions.',
      illustration: { src: evidenceProjects['playwire-alumni'].imageSrc, alt: 'Playwire solutions experience', local: true },
    },
    {
      requirement: 'AI / API product context',
      evidence:
        'Lore Machine founding engineer — LLM and generative media APIs, Vercel deployment, cross-functional stakeholder communication.',
      illustration: { src: evidenceProjects['lore-machine'].imageSrc, alt: 'Lore Machine', local: evidenceProjects['lore-machine'].imageLocal },
    },
    {
      requirement: 'Voice / speech platform depth',
      evidence: '[GAP — NEEDS VERIFICATION] No confirmed production speech-to-text or Deepgram SDK integration in portfolio yet.',
      illustration: { src: evidenceProjects.ai24.imageSrc, alt: 'AI24 applied AI context', local: evidenceProjects.ai24.imageLocal },
    },
  ],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'n8n-gmail-intelligence', 'ai24'],
  skillsMatrixRows: [
    { category: 'Solutions', skills: 'Discovery, scoping, demos, runbooks, executive communication', icon: 'target' },
    { category: 'Integrations', skills: 'REST APIs, webhooks, Airtable, Gmail, Square, SaaS onboarding', icon: 'workflow' },
    { category: 'AI products', skills: 'LLM workflows, prompt ops, applied GenAI prototypes — honest voice-platform gap noted', icon: 'sparkles' },
    { category: 'Data-adjacent', skills: 'Snowflake, Tableau, pipeline migration (Playwire Data Analyst)', icon: 'lineChart' },
  ],
  processSectionTitle: 'How I work with customers',
  processIntro: 'Map the integration surface first, prototype the smallest proof, document adoption paths.',
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Technical translator · builder',
  innovationLabBody:
    'Deepgram SA roles need someone who can sit with customers, map architecture, and ship credible proofs — my Playwire + automation + product stack matches that motion; voice-specific depth must be verified against the JD.',
  ctas: sprint2026Ctas('Deepgram Solutions Architect'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — Solutions Architect lane',
  resumeSectionNote: 'Lead with Full-Stack AI Engineer + Playwire Solutions; verify listing before submit.',
};
