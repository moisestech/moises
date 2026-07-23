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

/** Sprint seq 3 · Due Jul 14 */
export const endorLabsSolutionsArchitectOpportunity: Opportunity = {
  slug: 'endor-labs-solutions-architect',
  status: 'active',
  listed: true,
  variant: 'compact',
  seo: {
    title: 'Solutions Architect — Endor Labs · Moises Sanabria',
    description:
      'Solutions architecture for developer-tools and security-adjacent platforms — Playwire solutions + data background with honest security-depth boundaries.',
    indexable: false,
  },
  visibilityNote: 'Listing verification pending. Security/developer-tools depth requires careful framing — no unverified AppSec claims.',
  company: 'Endor Labs',
  roleTitle: 'Solutions Architect',
  audienceKeywords: {
    terms: [
      { label: 'Solutions architecture', detail: 'Integration scoping, POC design, customer technical discovery.' },
      { label: 'Developer tools context', detail: 'Full-stack delivery, GitHub workflows, API integrations.' },
      { label: 'Data pipelines', detail: 'Playwire Snowflake migration, Tableau BI, alerting.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Solutions Architect',
    subheadline: 'Developer-facing integrations · data systems · technical discovery',
    introParagraphs: [
      'Full-Stack AI Engineer with Playwire Solutions + Data experience, production automation, and founding-engineer product delivery. Endor Labs fit is architecture and customer translation — security-specific claims require verification against the JD.',
      verifierBoundaryNote,
    ],
    trustLine: 'Solutions + data · high-comp lane · verify listing before submit',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (honest)',
  roleMatchIntro: 'Strong on customer-facing architecture and integration delivery; AppSec specialization must not be invented.',
  roleMatchRows: [
    {
      requirement: 'Solutions engineering / architecture',
      evidence: 'Playwire Solutions Engineer — publisher SaaS integrations, technical debugging, stakeholder scoping.',
      illustration: { src: evidenceProjects['playwire-alumni'].imageSrc, alt: 'Playwire', local: true },
    },
    {
      requirement: 'Data platform familiarity',
      evidence: 'Kinesis → Snowflake migration, Tableau auction analytics, Slack data alerting (Playwire Data Analyst).',
      illustration: { src: evidenceProjects['playwire-alumni'].imageSrc, alt: 'Playwire data', local: true },
    },
    {
      requirement: 'Developer workflow automation',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: { src: evidenceProjects['n8n-gmail-intelligence'].imageSrc, alt: 'n8n', local: true },
    },
    {
      requirement: 'Application security / SCA depth',
      evidence: '[GAP — PROHIBITED UNTIL VERIFIED] Do not claim supply-chain or AppSec production expertise without evidence.',
      illustration: { src: evidenceProjects['lore-machine'].imageSrc, alt: 'Product engineering context', local: evidenceProjects['lore-machine'].imageLocal },
    },
  ],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'n8n-gmail-intelligence'],
  skillsMatrixRows: [
    { category: 'Solutions', skills: 'Discovery, POC scoping, integration architecture, demos', icon: 'target' },
    { category: 'Data', skills: 'Snowflake, SQL, Tableau, pipeline migration', icon: 'lineChart' },
    { category: 'Engineering', skills: 'TypeScript, Next.js, APIs, GitHub, Vercel', icon: 'code2' },
    { category: 'Boundaries', skills: 'No unverified AppSec or SCA product claims', icon: 'shield' },
  ],
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Architect who scopes honestly',
  innovationLabBody:
    'Endor SA success requires credible developer-tool conversation without overselling security depth — lead Playwire + automation + product, verify security fit from JD before submit.',
  ctas: sprint2026Ctas('Endor Labs Solutions Architect'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — Solutions Architect (developer tools lane)',
};
