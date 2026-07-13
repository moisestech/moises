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

/** Sprint seq 5 · Due Jul 16 */
export const neogovStaffAgenticAiOpportunity: Opportunity = {
  slug: 'neogov-staff-agentic-ai-developer',
  status: 'active',
  listed: true,
  variant: 'compact',
  seo: {
    title: 'Staff Agentic AI Developer — NEOGOV · Moises Sanabria',
    description:
      'Production agentic automation, governance boundaries, Airtable approval patterns, and public-sector-ready documentation.',
    indexable: true,
  },
  company: 'NEOGOV',
  roleTitle: 'Staff Agentic AI Developer',
  audienceKeywords: {
    terms: [
      { label: 'Agentic automation', detail: 'Production n8n with AI Agent node + Airtable pipeline routing.' },
      { label: 'Governance', detail: 'Human-in-the-loop labels, no auto-send, strict verifier in career orchestration.' },
      { label: 'Institutional systems', detail: 'DCC / Oolite digital infrastructure and workshop delivery.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Staff Agentic AI Developer',
    subheadline: 'Production n8n · governance · Airtable · institutional adoption',
    introParagraphs: [
      'I build agent-style automations with explicit human boundaries — production n8n Gmail intelligence (classify, label, sync to Airtable), Make ops sync for a nonprofit bookstore, and a verified multi-agent career orchestration system with strict claim verification.',
      'Infra24 Memory Agent RAG work exists as a local pilot — not claimed as verified-live production until deployed and checked. ' + verifierBoundaryNote,
    ],
    trustLine: 'Agentic ops with governance · public-sector caution · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Why this role fits',
  roleMatchRows: [
    {
      requirement: 'Production agentic automation',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: { src: evidenceProjects['n8n-gmail-intelligence'].imageSrc, alt: 'n8n production workflow', local: true },
    },
    {
      requirement: 'Human-in-the-loop / safe actions',
      evidence: 'Career orchestration: no auto-send recruiter mail; label + Airtable suggest paths; Application Identity Triage strict verifier.',
      illustration: { src: evidenceProjects['digital-culture-infrastructure'].imageSrc, alt: 'Institutional infra' },
    },
    {
      requirement: 'Full-stack delivery',
      evidence: 'Next.js, TypeScript, Supabase, Vercel — AI24, institutional sites, automation glue.',
      illustration: { src: evidenceProjects.ai24.imageSrc, alt: 'AI24', local: evidenceProjects.ai24.imageLocal },
    },
    {
      requirement: 'Production RAG / vector at scale',
      evidence: '[PROHIBITED UNTIL VERIFIED LIVE] Infra24 Memory Agent is built locally — do not claim until dcc.miami demo verified.',
      illustration: { src: evidenceProjects['digital-culture-infrastructure'].imageSrc, alt: 'DCC platform' },
    },
  ],
  featuredProjectIds: ['n8n-gmail-intelligence', 'bookleggers-commerce-automation', 'digital-culture-infrastructure', 'ai24'],
  skillsMatrixRows: [
    { category: 'Agentic', skills: 'n8n AI Agent nodes, workflow routing, LLM classification, error boundaries', icon: 'workflow' },
    { category: 'Governance', skills: 'Human approval, taxonomy, verifier gates, documentation', icon: 'shield' },
    { category: 'Integrations', skills: 'Airtable, Gmail, Make.com, Square, APIs', icon: 'boxes' },
    { category: 'Delivery', skills: 'Institutional stakeholders, workshops, runbooks', icon: 'users' },
  ],
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Governed agentic ops → trustworthy public-sector patterns',
  innovationLabBody:
    'NEOGOV needs agents that respect audit trails and human approval — my production n8n + orchestration evidence matches; RAG claims wait for verified-live Infra24 demo.',
  ctas: sprint2026Ctas('NEOGOV Staff Agentic AI Developer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — staff agentic AI lane',
};
