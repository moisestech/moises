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

/** Ready-to-apply batch · AI Solutions Architect (Enterprise Solutions / field-first) */
export const instacartAiSolutionsArchitectOpportunity: Opportunity = {
  slug: 'instacart-ai-solutions-architect',
  status: 'active',
  listed: false,
  variant: 'compact',
  seo: {
    title: 'AI Solutions Architect — Instacart · Moises Sanabria',
    description:
      'Field-first AI solutions architecture: partner integrations, data/AI translation, and honest feasibility gating — Playwire solutions + data background with production automation evidence.',
    indexable: false,
  },
  visibilityNote:
    'Private dossier — strongest new lead in ready-to-apply batch. Do not index until application is ready.',
  company: 'Instacart',
  roleTitle: 'AI Solutions Architect',
  audienceKeywords: {
    terms: [
      { label: 'Field-first architecture', detail: 'Embed with partner teams: map data, design integrations, co-build proofs.' },
      { label: 'Solutions + data', detail: 'Playwire Solutions Engineer and Data Analyst — SaaS delivery and Snowflake/Tableau.' },
      { label: 'AI product translation', detail: 'Lore Machine founding engineer; AI24 education infrastructure; automation ops.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'AI Solutions Architect',
    subheadline: 'Partner integrations · data/AI architecture · technical feasibility',
    introParagraphs: [
      'Full-Stack AI Engineer with customer-facing solutions delivery (Playwire Solutions Engineer), data-platform work (Snowflake migration, Tableau analytics), founding-engineer product AI (Lore Machine), and production automation (n8n Gmail intelligence, Make + Square + Airtable).',
      verifierBoundaryNote,
    ],
    trustLine: 'Solutions + data · field-ready translation · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (verifier-checked)',
  roleMatchIntro:
    'Strongest lanes: technical discovery, integration scoping, data-aware feasibility, and stakeholder translation — enterprise retail/CPG/POS depth stays GAP where not evidenced.',
  roleMatchRows: [
    {
      requirement: 'Customer-facing solutions architecture',
      evidence:
        'Playwire Solutions Engineer: publisher implementations, JavaScript debugging, SaaS onboarding for nontechnical buyers.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire solutions experience',
        local: true,
      },
    },
    {
      requirement: 'Data architecture / enterprise integrations',
      evidence:
        'Playwire Data Analyst: Kinesis → Snowflake migration, Tableau auction analytics, Slack data alerting — enough fluency to gate feasibility before build.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire data',
        local: true,
      },
    },
    {
      requirement: 'AI product / API context',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n Gmail intelligence',
        local: true,
      },
    },
    {
      requirement: 'Retail / CPG / POS enterprise depth',
      evidence:
        '[GAP — NEEDS VERIFICATION] No confirmed ERP, POS, loyalty, or CPG partner integration engagement in portfolio — lead solutions + data + AI translation; do not invent retail case studies.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine product engineering',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
  ],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'n8n-gmail-intelligence', 'ai24'],
  skillsMatrixRows: [
    { category: 'Solutions', skills: 'Discovery, scoping, demos, feasibility gates, executive communication', icon: 'target' },
    { category: 'Data', skills: 'Snowflake, SQL, Tableau, pipeline migration, API integrations', icon: 'lineChart' },
    { category: 'AI products', skills: 'LLM workflows, prompt ops, applied GenAI prototypes — no unverified RAG', icon: 'sparkles' },
    { category: 'Boundaries', skills: 'No unverified retail/POS or production RAG claims', icon: 'shield' },
  ],
  processSectionTitle: 'How I work with partners',
  processIntro: 'Map data and integration surfaces first, gate feasibility early, prototype the smallest proof, document adoption.',
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Field architect who scopes honestly',
  innovationLabBody:
    'Instacart AI SA needs someone who embeds with partner engineering, maps messy data, and ships credible proofs — my Playwire + automation + product stack matches that motion; retail/CPG depth must stay evidence-bound.',
  ctas: sprint2026Ctas('Instacart AI Solutions Architect'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — AI Solutions Architect lane',
  resumeSectionNote: 'Lead with Full-Stack AI Engineer + Playwire Solutions/Data; verify listing before submit.',
};
