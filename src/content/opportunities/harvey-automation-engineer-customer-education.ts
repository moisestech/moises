import type { Opportunity } from './types';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import {
  sprint2026Ctas,
  sprint2026Headshot,
  sprint2026LogoBand,
  sprint2026NavItems,
  sprint2026ProcessSteps,
  sprint2026TeachingHighlights,
  verifierBoundaryNote,
} from './shared-sprint-2026';

/** Sprint seq 2 · Due Jul 13 */
export const harveyAutomationEngineerOpportunity: Opportunity = {
  slug: 'harvey-automation-engineer-customer-education',
  status: 'active',
  listed: true,
  variant: 'compact',
  seo: {
    title: 'Automation Engineer, Customer Education — Harvey · Moises Sanabria',
    description:
      'Automation, AI workflows, customer education, and documentation — n8n production agent, Make ops automation, and public AI teaching programs.',
    indexable: true,
  },
  company: 'Harvey',
  roleTitle: 'Automation Engineer, Customer Education',
  audienceKeywords: {
    terms: [
      { label: 'Workflow automation', detail: 'Production n8n Gmail intelligence + Make commerce sync.' },
      { label: 'Customer education', detail: 'Public workshops — Art of AI Agents, Learn AI Without Losing Yourself.' },
      { label: 'Documentation & adoption', detail: 'Runbooks, taxonomy, field maps, nontechnical stakeholder training.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Automation Engineer · Customer Education',
    subheadline: 'n8n · Make · Airtable · teaching · documentation for adoption',
    introParagraphs: [
      'I build production automations that nontechnical teams can operate — n8n Gmail intelligence (AI Agent node + Airtable routing), Make + Square + Airtable for Bookleggers, and public AI education programs for practitioners and institutions.',
      verifierBoundaryNote,
    ],
    trustLine: 'Automation + teaching · production n8n · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Why this role fits',
  roleMatchIntro: 'Harvey’s lane overlaps automation engineering, customer-facing documentation, and AI workflow adoption — my strongest confirmed evidence cluster.',
  roleMatchRows: [
    {
      requirement: 'Production workflow automation',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: { src: evidenceProjects['n8n-gmail-intelligence'].imageSrc, alt: 'n8n workflow', local: true },
    },
    {
      requirement: 'Ops integrations (SaaS glue)',
      evidence: automationProjectSpecs['bookleggers-commerce-automation'].evidenceLine,
      illustration: { src: evidenceProjects['bookleggers-commerce-automation'].imageSrc, alt: 'Bookleggers automation' },
    },
    {
      requirement: 'Customer education & enablement',
      evidence: 'Public multi-session AI agent workshops and structured curricula for artists and institutions.',
      illustration: { src: evidenceProjects.ai24.imageSrc, alt: 'AI24 teaching', local: evidenceProjects.ai24.imageLocal },
    },
    {
      requirement: 'Legal / enterprise platform depth',
      evidence: '[LIKELY — NEEDS VERIFICATION] No confirmed Harvey or legal-tech production deployment; frame automation + education transferability.',
      illustration: { src: evidenceProjects['digital-culture-infrastructure'].imageSrc, alt: 'Institutional tooling' },
    },
  ],
  featuredProjectIds: ['n8n-gmail-intelligence', 'bookleggers-commerce-automation', 'ai24', 'digital-culture-infrastructure'],
  teachingHighlights: sprint2026TeachingHighlights,
  skillsMatrixRows: [
    { category: 'Automation', skills: 'n8n AI Agent nodes, Make.com, Airtable, Gmail API, error boundaries', icon: 'workflow' },
    { category: 'Education', skills: 'Workshop design, curriculum, executive-friendly explainers', icon: 'presentation' },
    { category: 'Documentation', skills: 'Taxonomy, field maps, runbooks, adoption checklists', icon: 'fileText' },
    { category: 'Stack', skills: 'Next.js, TypeScript, Supabase, Vercel', icon: 'code2' },
  ],
  processSectionTitle: 'How I enable customers',
  processIntro: 'Automate the repeatable work; document the exceptions; teach the team to operate the system.',
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Automation that teams can actually run',
  innovationLabBody:
    'Harvey needs engineers who build workflows and help customers adopt them — my n8n + teaching combination is confirmed evidence, not aspirational stack listing.',
  ctas: sprint2026Ctas('Harvey Automation Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé tailored for automation + education',
  resumeSectionNote: 'Verify Harvey listing still open before submit.',
};
