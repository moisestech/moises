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

/** Sprint seq 4 · Due Jul 15 · Agentic AI lane */
export const blueAcornAgenticAiOpportunity: Opportunity = {
  slug: 'blue-acorn-ici-agentic-ai-integration-engineer',
  status: 'active',
  listed: false,
  variant: 'compact',
  capabilitiesHref: '/capabilities#ai-engineering',
  seo: {
    title: 'Agentic AI Integration Engineer — Blue Acorn iCi · Moises Sanabria',
    description:
      'Agentic workflows, n8n production automation, Make/Airtable integrations, and client-facing AI delivery.',
    indexable: false,
  },
  company: 'Blue Acorn iCi',
  roleTitle: 'Agentic AI Integration Engineer',
  audienceKeywords: {
    terms: [
      { label: 'Agentic workflows', detail: 'n8n AI Agent node, Airtable routing, human-in-the-loop career orchestration.' },
      { label: 'Integration engineering', detail: 'Make + Square + Airtable, Gmail API, SaaS glue systems.' },
      { label: 'Client delivery', detail: 'Playwire solutions history, demos, documentation for nontechnical buyers.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Agentic AI Integration Engineer',
    subheadline: 'n8n · Airtable · Make · LLM routing · client-facing integration delivery',
    introParagraphs: [
      'Full-Stack AI Engineer shipping production automations with agent-style nodes — n8n Gmail intelligence (classify → label → Airtable), Make commerce sync for Bookleggers, and multi-system career orchestration with strict verification boundaries.',
      verifierBoundaryNote,
    ],
    trustLine: 'Agentic automation · confirmed production n8n · agency-ready delivery',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Why this role fits',
  roleMatchRows: [
    {
      requirement: 'Agentic / AI workflow automation',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: { src: evidenceProjects['n8n-gmail-intelligence'].imageSrc, alt: 'n8n agent workflow', local: true },
    },
    {
      requirement: 'Commerce / ops integrations',
      evidence: automationProjectSpecs['bookleggers-commerce-automation'].evidenceLine,
      illustration: { src: evidenceProjects['bookleggers-commerce-automation'].imageSrc, alt: 'Make Square Airtable' },
    },
    {
      requirement: 'Client-facing technical delivery',
      evidence: 'Playwire Solutions Engineer + Playwire concept demo dossier — publisher-adjacent integration mindset.',
      illustration: { src: evidenceProjects['playwire-alumni'].imageSrc, alt: 'Playwire', local: true },
    },
    {
      requirement: 'LangGraph / enterprise agent framework',
      evidence: '[PROHIBITED UNTIL VERIFIED] Do not claim LangGraph/CrewAI builder depth — n8n + hand-rolled orchestration only.',
      illustration: { src: evidenceProjects.ai24.imageSrc, alt: 'AI24', local: evidenceProjects.ai24.imageLocal },
    },
  ],
  featuredProjectIds: ['n8n-gmail-intelligence', 'bookleggers-commerce-automation', 'playwire-alumni', 'ai24'],
  teachingHighlights: sprint2026TeachingHighlights,
  skillsMatrixRows: [
    { category: 'Agentic ops', skills: 'n8n AI Agent nodes, LLM routing, taxonomy design, human review boundaries', icon: 'workflow' },
    { category: 'Integrations', skills: 'Airtable, Make.com, Square, Gmail, webhooks', icon: 'boxes' },
    { category: 'Delivery', skills: 'Demos, runbooks, stakeholder scoping, Playwire solutions background', icon: 'rocket' },
    { category: 'Stack', skills: 'Next.js, TypeScript, Supabase, Vercel', icon: 'code2' },
  ],
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Integration engineer who ships agent-style ops',
  innovationLabBody: 'Blue Acorn needs integrators who can wire LLM-assisted workflows into client stacks — my n8n + Make evidence is production-confirmed, not slide-deck agentic AI.',
  ctas: sprint2026Ctas('Blue Acorn Agentic AI Integration Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — agentic integration lane',
};
