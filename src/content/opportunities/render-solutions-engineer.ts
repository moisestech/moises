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

/** Ready-to-apply batch · Solutions Engineer / pre-sales (same lane as Deepgram / Endor) */
export const renderSolutionsEngineerOpportunity: Opportunity = {
  slug: 'render-solutions-engineer',
  status: 'active',
  listed: false,
  variant: 'compact',
  seo: {
    title: 'Solutions Engineer — Render · Moises Sanabria',
    description:
      'Pre-sales solutions engineering: technical discovery, demos, POCs, and migration guidance — Playwire solutions history plus hands-on Next.js / Vercel deployment evidence.',
    indexable: false,
  },
  visibilityNote:
    'Private dossier — listing confirmed as Solutions Engineer / pre-sales. Do not index until application is ready.',
  company: 'Render',
  roleTitle: 'Solutions Engineer',
  audienceKeywords: {
    terms: [
      { label: 'Pre-sales solutions', detail: 'Discovery, demos, POCs, and stakeholder-ready architecture recommendations.' },
      { label: 'Customer-facing technical', detail: 'Playwire Solutions Engineer — publisher onboarding, JS debugging, SaaS delivery.' },
      { label: 'Deploy & migrate', detail: 'Next.js / Vercel production deploys; honest gap on Heroku→PaaS migration depth.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Solutions Engineer',
    subheadline: 'Technical discovery · demos · POCs · migration guidance',
    introParagraphs: [
      'Full-Stack AI Engineer with customer-facing solutions delivery (Playwire Solutions Engineer), founding-engineer product work (Lore Machine on Vercel), and production automation systems (n8n Gmail intelligence, Make + Square + Airtable).',
      verifierBoundaryNote,
    ],
    trustLine: 'Solutions + product delivery · Playwire 2021–2022 · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (verifier-checked)',
  roleMatchIntro:
    'Strongest lanes: technical discovery, demos, POC scoping, and documentation for engineering buyers — same motion as Deepgram / Endor SA pages.',
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
      requirement: 'Hands-on PaaS / modern web deploys',
      evidence:
        'Lore Machine founding engineer — LLM and generative media APIs, Vercel deployment, Next.js product delivery for cross-functional stakeholders.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Heroku / PaaS migration depth',
      evidence:
        '[GAP — NEEDS VERIFICATION] No confirmed production Heroku→Render (or equivalent PaaS) migration engagement in portfolio yet — lead with deploy fluency and discovery, not invented migration case studies.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 applied AI context',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
  ],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'n8n-gmail-intelligence', 'ai24'],
  skillsMatrixRows: [
    { category: 'Solutions', skills: 'Discovery, demos, POCs, runbooks, executive communication', icon: 'target' },
    { category: 'Integrations', skills: 'REST APIs, webhooks, Airtable, Gmail, Square, SaaS onboarding', icon: 'workflow' },
    { category: 'Delivery', skills: 'Next.js, TypeScript, Vercel, GitHub, full-stack product shipping', icon: 'rocket' },
    { category: 'Boundaries', skills: 'No unverified Heroku migration or infra-at-scale claims', icon: 'cloud' },
  ],
  processSectionTitle: 'How I work with prospects',
  processIntro: 'Map the app and migration surface first, prototype the smallest proof, document the adoption path.',
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Technical translator · builder',
  innovationLabBody:
    'Render SE roles need someone who can sit with engineering buyers, run credible demos, and scope migrations honestly — my Playwire + product + automation stack matches that motion; PaaS migration depth must stay evidence-bound.',
  ctas: sprint2026Ctas('Render Solutions Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — Solutions Engineer lane',
  resumeSectionNote: 'Lead with Full-Stack AI Engineer + Playwire Solutions; verify listing before submit.',
};
