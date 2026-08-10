/**
 * Harvey — Automation Engineer, Customer Education
 * /opportunities/harvey-automation-engineer-customer-education
 *
 * Closest existing education + automation dossier. Strengthened with Art of AI Agents
 * screenshots and shared GenAI curriculum SME teaching pack for reuse with Hurix-style roles.
 */

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
import { genAiCurriculumSmeTeachingHighlights } from './packs/genAiCurriculumSmePack';
import { ART_OF_AI_AGENTS_SCREENSHOTS, N8N_LOGO } from '@/constants/art-of-ai-agents';

/** Sprint seq 2 · Due Jul 13 */
export const harveyAutomationEngineerOpportunity: Opportunity = {
  slug: 'harvey-automation-engineer-customer-education',
  status: 'active',
  listed: false,
  variant: 'compact',
  capabilitiesHref: '/capabilities#ai-engineering',
  seo: {
    title: 'Automation Engineer, Customer Education — Harvey · Moises Sanabria',
    description:
      'Automation, AI workflows, customer education, and documentation — n8n production agent, Make ops automation, and public AI teaching programs with workshop screenshots.',
    indexable: false,
  },
  company: 'Harvey',
  roleTitle: 'Automation Engineer, Customer Education',
  audienceKeywords: {
    terms: [
      { label: 'Workflow automation', detail: 'Production n8n Gmail intelligence + Make commerce sync.' },
      {
        label: 'Customer education',
        detail: 'Public workshops — Art of AI Agents (screenshots attached), Learn AI Without Losing Yourself.',
      },
      { label: 'Documentation & adoption', detail: 'Runbooks, taxonomy, field maps, nontechnical stakeholder training.' },
    ],
  },
  navItems: [
    ...sprint2026NavItems.slice(0, 3),
    { id: 'teaching-cred', label: 'Teaching' },
    ...sprint2026NavItems.slice(3),
  ],
  hero: {
    headline: 'Automation Engineer · Customer Education',
    subheadline: 'n8n · Make · Airtable · teaching · documentation for adoption',
    introParagraphs: [
      'I build production automations that nontechnical teams can operate — n8n Gmail intelligence (AI Agent node + Airtable routing), Make + Square + Airtable for Bookleggers, and public AI education programs for practitioners and institutions.',
      'Teaching proof includes The Art of AI Agents (Locust Projects / Artist Task Automation slides) with chapter materials and human-supervised workflow framing.',
      verifierBoundaryNote,
    ],
    trustLine: 'Automation + teaching · production n8n · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Why this role fits',
  roleMatchIntro:
    'Harvey’s lane overlaps automation engineering, customer-facing documentation, and AI workflow adoption — my strongest confirmed evidence cluster.',
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
      evidence:
        'Public multi-session AI agent workshops with slide decks, labs, and chapter materials — Art of AI Agents Artist Task Automation track.',
      illustration: {
        src: ART_OF_AI_AGENTS_SCREENSHOTS[0].src,
        alt: ART_OF_AI_AGENTS_SCREENSHOTS[0].alt,
      },
    },
    {
      requirement: 'Legal / enterprise platform depth',
      evidence:
        '[LIKELY — NEEDS VERIFICATION] No confirmed Harvey or legal-tech production deployment; frame automation + education transferability.',
      illustration: { src: evidenceProjects['digital-culture-infrastructure'].imageSrc, alt: 'Institutional tooling' },
    },
  ],
  featuredProjectIds: ['n8n-gmail-intelligence', 'bookleggers-commerce-automation', 'ai24', 'digital-culture-infrastructure'],
  teachingHighlights: genAiCurriculumSmeTeachingHighlights,
  skillsMatrixRows: [
    { category: 'Automation', skills: 'n8n AI Agent nodes, Make.com, Airtable, Gmail API, error boundaries', icon: 'workflow' },
    { category: 'Education', skills: 'Workshop design, curriculum, executive-friendly explainers, screencasts', icon: 'presentation' },
    { category: 'Documentation', skills: 'Taxonomy, field maps, runbooks, adoption checklists', icon: 'fileText' },
    { category: 'Stack', skills: 'Next.js, TypeScript, Supabase, Vercel', icon: 'code2' },
  ],
  processSectionTitle: 'How I enable customers',
  processIntro: 'Automate the repeatable work; document the exceptions; teach the team to operate the system.',
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Automation that teams can actually run',
  innovationLabBody:
    'Harvey needs engineers who build workflows and help customers adopt them — my n8n + teaching combination is confirmed evidence, not aspirational stack listing. Same education pack powers GenAI SME dossiers (e.g. /opportunities/hurix-sme-generative-ai).',
  ctas: sprint2026Ctas('Harvey Automation Engineer'),
  animatedLogoBand: [
    { src: N8N_LOGO.src, alt: N8N_LOGO.alt, height: 36 },
    ...sprint2026LogoBand.filter((l) => l.alt.toLowerCase() !== 'n8n'),
  ],
  techLogoIds: [],
  resumeSectionTitle: 'Résumé tailored for automation + education',
  resumeSectionNote: 'Verify Harvey listing still open before submit. Teaching screenshots live on /workshop/the-art-of-ai-agents.',
};
