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

/** Ready-to-apply batch · Senior AI Engineer (builder / agentic lane — honest RAG + healthcare gaps) */
export const talkiatrySeniorAiEngineerOpportunity: Opportunity = {
  slug: 'talkiatry-senior-ai-engineer',
  status: 'active',
  listed: false,
  variant: 'compact',
  seo: {
    title: 'Senior AI Engineer — Talkiatry · Moises Sanabria',
    description:
      'Full-stack AI engineering for clinical workflows: agentic automation with human-in-the-loop boundaries — honest gaps on production RAG and healthcare-regulated depth.',
    indexable: false,
  },
  visibilityNote:
    'Private dossier — Senior AI Engineer lane. Healthcare-regulated and production RAG claims stay GAP until verified.',
  company: 'Talkiatry',
  roleTitle: 'Senior AI Engineer',
  audienceKeywords: {
    terms: [
      { label: 'Full-stack AI', detail: 'Next.js, TypeScript, APIs, and product surfaces that make AI usable in real workflows.' },
      { label: 'Agentic ops', detail: 'Production n8n with AI Agent node + Airtable routing; career orchestration with verifier gates.' },
      { label: 'Honest boundaries', detail: 'No production RAG / LangGraph / CrewAI claims until verified live.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Senior AI Engineer',
    subheadline: 'Full-stack delivery · agentic workflows · human-in-the-loop safety',
    introParagraphs: [
      'I build production-oriented AI systems with explicit human boundaries — n8n Gmail intelligence (classify, label, sync to Airtable), Make ops sync for a nonprofit bookstore, Lore Machine founding-engineer product AI, and AI24 education infrastructure.',
      'Infra24 Memory Agent RAG work exists as a local pilot — not claimed as verified-live production. Healthcare-regulated clinical AI depth is not in portfolio. ' +
        verifierBoundaryNote,
    ],
    trustLine: 'Governed agentic ops · full-stack product · Miami / remote',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (honest)',
  roleMatchIntro:
    'Strong on full-stack delivery and governed agentic automation; production RAG frameworks and healthcare-regulated depth must not be invented.',
  roleMatchRows: [
    {
      requirement: 'Full-stack AI product delivery',
      evidence:
        'Next.js, TypeScript, Vercel — Lore Machine founding engineer; AI24 and institutional sites with LLM-adjacent product surfaces.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Agentic / multi-step AI workflows',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n production workflow',
        local: true,
      },
    },
    {
      requirement: 'Guardrails / human-in-the-loop',
      evidence:
        'Career orchestration: no auto-send recruiter mail; label + Airtable suggest paths; Application Identity Triage strict verifier.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Institutional infrastructure',
      },
    },
    {
      requirement: 'Production RAG / LangGraph / CrewAI',
      evidence:
        '[PROHIBITED UNTIL VERIFIED LIVE] Infra24 Memory Agent is built locally — do not claim production RAG, vector DB, LangGraph, or CrewAI depth until verified.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 applied AI context',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Healthcare-regulated clinical AI',
      evidence:
        '[GAP — TRANSFERABLE ONLY] No confirmed HIPAA / clinical EHR / regulated mental-health AI production work — lead governed automation and full-stack delivery; do not invent clinical case studies.',
      illustration: {
        src: evidenceProjects['bookleggers-commerce-automation'].imageSrc,
        alt: 'Production automation ops',
        local: true,
      },
    },
  ],
  featuredProjectIds: [
    'n8n-gmail-intelligence',
    'lore-machine',
    'ai24',
    'bookleggers-commerce-automation',
  ],
  skillsMatrixRows: [
    { category: 'Agentic', skills: 'n8n AI Agent nodes, workflow routing, LLM classification, error boundaries', icon: 'workflow' },
    { category: 'Full-stack', skills: 'TypeScript, Next.js, APIs, Vercel, product shipping', icon: 'code2' },
    { category: 'Governance', skills: 'Human approval, taxonomy, verifier gates, documentation', icon: 'shield' },
    { category: 'Boundaries', skills: 'No unverified RAG frameworks or clinical AI claims', icon: 'cpu' },
  ],
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Builder with governed AI habits',
  innovationLabBody:
    'Talkiatry Senior AI Engineer needs production-minded full-stack AI with safety instincts — my n8n + product stack matches; RAG frameworks and healthcare-regulated depth wait for verified evidence.',
  ctas: sprint2026Ctas('Talkiatry Senior AI Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — Senior AI Engineer lane',
  resumeSectionNote: 'Lead with Full-Stack AI Engineer + production automation; keep RAG and clinical gaps explicit.',
};
