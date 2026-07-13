import type { Opportunity } from './types';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { productionAiAutomationPack } from '@/content/evidence/productionAiAutomationPack';
import {
  sprint2026Ctas,
  sprint2026Headshot,
  sprint2026LogoBand,
  sprint2026NavItems,
  sprint2026ProcessSteps,
  verifierBoundaryNote,
} from './shared-sprint-2026';

/** Sprint seq 6 · Due Jul 17 · Blocked by evidence until Infra24 verified live */
export const corestoryAiEngineerOpportunity: Opportunity = {
  slug: 'corestory-ai-engineer',
  status: 'active',
  listed: false,
  variant: 'compact',
  seo: {
    title: 'AI Engineer — CoreStory · Moises Sanabria',
    description:
      'Agentic AI and integration engineering — blocked for RAG/vector claims until Infra24 Memory Agent is verified live.',
    indexable: false,
  },
  visibilityNote:
    'BLOCKED BY EVIDENCE — CoreStory likely requires RAG/vector depth. Infra24 Memory Agent is built locally, not verified live. Do not submit until deploy + eval green + verifier sign-off.',
  company: 'CoreStory',
  roleTitle: 'AI Engineer',
  audienceKeywords: {
    terms: [
      { label: 'Agentic automation', detail: 'Confirmed: n8n production workflow + Airtable routing.' },
      { label: 'RAG / vector', detail: 'PROHIBITED until Infra24 verified live — see productionAiAutomationPack.infra24MemoryAgent.' },
      { label: 'Product engineering', detail: 'Lore Machine founding engineer; full-stack TypeScript delivery.' },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'AI Engineer',
    subheadline: 'Agentic automation confirmed · RAG evidence blocked pending verified-live Infra24 demo',
    introParagraphs: [
      'Full-Stack AI Engineer with confirmed production automation (n8n, Make, Airtable) and founding-engineer GenAI product work (Lore Machine). CoreStory alignment on RAG/vector/orchestration requires Infra24 Memory Agent to reach verified-live state before this dossier is submission-ready.',
      verifierBoundaryNote,
      `Infra24 build state: ${productionAiAutomationPack.infra24MemoryAgent.buildState}.`,
    ],
    trustLine: 'Hold submit until evidence gate clears · recruiter follow-up scheduled separately',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (with evidence gates)',
  roleMatchIntro: 'Green = confirmed. Red = blocked until Infra24 deploy + live verification.',
  roleMatchRows: [
    {
      requirement: 'Agentic workflow automation',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: { src: evidenceProjects['n8n-gmail-intelligence'].imageSrc, alt: 'n8n', local: true },
    },
    {
      requirement: 'LLM product engineering',
      evidence: 'Lore Machine founding engineer — prompt workflows, generative media APIs, Vercel production.',
      illustration: { src: evidenceProjects['lore-machine'].imageSrc, alt: 'Lore Machine', local: evidenceProjects['lore-machine'].imageLocal },
    },
    {
      requirement: 'RAG / retrieval systems',
      evidence: `[BLOCKED] ${productionAiAutomationPack.infra24MemoryAgent.buildState} — deploy Infra24, run eval green, verify live URL before claiming.`,
      illustration: { src: evidenceProjects['digital-culture-infrastructure'].imageSrc, alt: 'DCC infra' },
    },
    {
      requirement: 'Vector database production',
      evidence: '[BLOCKED] pgvector work exists in Infra24 repo locally — prohibited in public claims until verified live.',
      illustration: { src: evidenceProjects['digital-culture-infrastructure'].imageSrc, alt: 'Infra24 context' },
    },
  ],
  featuredProjectIds: ['n8n-gmail-intelligence', 'lore-machine', 'ai24'],
  skillsMatrixRows: [
    { category: 'Confirmed', skills: 'n8n, Airtable, Make, TypeScript, Next.js, LLM workflows', icon: 'workflow' },
    { category: 'Blocked', skills: 'RAG, pgvector, institutional Memory Agent — pending verified-live Infra24', icon: 'shield' },
    { category: 'Gap plan', skills: 'Deploy infra24 → sync embeddings → eval green → update dossier → reverifier', icon: 'target' },
  ],
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Evidence gate',
  innovationLabLead: 'Do not submit yet',
  innovationLabBody:
    'Closing the Infra24 verified-live gate unlocks CoreStory RAG claims and likely moves this role from blocked to pursue-with-conditions.',
  ctas: sprint2026Ctas('CoreStory AI Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — hold until RAG evidence live',
  resumeSectionNote: 'Use automation-first bullets only until Infra24 verifier clears.',
};
