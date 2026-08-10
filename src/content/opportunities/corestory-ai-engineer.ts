/**
 * CoreStory — AI Engineer (strengthened Lore / product alignment)
 * /opportunities/corestory-ai-engineer
 *
 * Listing: https://job-boards.greenhouse.io/corestory/jobs/4984207007
 * RAG/vector claims stay gated until Agentic Ops verified live — Lore LLM product + automation are submit-ready.
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
import { engineeringEvidencePack } from './packs';

export const corestoryAiEngineerOpportunity: Opportunity = {
  slug: 'corestory-ai-engineer',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'ready',
  variant: 'compact',
  capabilitiesHref: '/capabilities#ai-engineering',
  seo: {
    title: 'AI Engineer — CoreStory · Moises Sanabria',
    description:
      'Private CoreStory AI Engineer dossier — Lore Machine LLM product engineering, agentic automation, and honest RAG evidence gates.',
    indexable: false,
  },
  visibilityNote:
    'Private application dossier · CoreStory · AI Engineer. RAG/vector claims remain gated until Infra24 is verified live; Lore product + automation evidence is confirmed.',
  company: 'CoreStory',
  roleTitle: 'AI Engineer',
  audienceKeywords: {
    terms: [
      {
        label: 'LLM product engineering',
        detail: 'Confirmed: Lore Machine founding engineer — prompts, multimodal APIs, TypeScript delivery.',
      },
      {
        label: 'Agentic automation',
        detail: 'Confirmed: n8n production workflow + Airtable routing.',
      },
      {
        label: 'RAG / vector',
        detail:
          'Gated until Agentic Ops demo + evals verified live — see /projects/agentic-ops (Building).',
      },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'AI engineer for narrative systems and agentic workflows',
    subheadline:
      'Lore Machine LLM product engineering confirmed · RAG depth labeled until Agentic Ops verified live',
    introParagraphs: [
      'CoreStory sits at the intersection of stories, structured knowledge, and AI systems. Primary proof: Agentic Ops (Building) + Lore Machine founding-engineer work turning narrative into structured multimedia — plus production agentic automation (n8n, Make, Airtable). Forward-deployed systems support the delivery story.',
      'Where CoreStory requires production RAG/vector depth, Agentic Ops remains a verified-live gate—not a silent claim. That honesty keeps the dossier usable for apply conversations without overselling.',
      verifierBoundaryNote,
    ],
    trustLine: 'Lore Machine founding engineer · production automation confirmed · RAG claims gated via Agentic Ops',
    headshotSrc: sprint2026Headshot,
    headshotAlt: 'Moises Sanabria',
  },
  roleMatchSectionTitle: 'Role fit (with evidence gates)',
  roleMatchIntro:
    'PRIMARY Agentic Ops · SECONDARY Lore · SUPPORTING Forward-Deployed. Treat RAG/vector as a clear ramp with a named evidence gate—not a fake production claim.',
  roleMatchRows: [
    {
      requirement: 'LLM / narrative product engineering',
      evidence:
        'Lore Machine founding engineer — prompt workflows, generative media APIs, scene-oriented rendering, Vercel production on a three-person team.',
      status: 'demonstrated',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Agentic workflow automation',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      status: 'demonstrated',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n',
        local: true,
      },
    },
    {
      requirement: 'Full-stack TypeScript delivery',
      evidence:
        'AI24 and Lore: Next.js/React product surfaces, APIs, auth, and human-review publishing pipelines.',
      status: 'demonstrated',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: evidenceProjects.ai24.imageAlt,
      },
    },
    {
      requirement: 'RAG / retrieval systems',
      evidence:
        '[GATED] Agentic Ops Building — public demo + eval regression required before claiming production RAG. Case: /projects/agentic-ops.',
      status: 'todo',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'DCC infra',
      },
    },
  ],
  evidenceRecipe: 'corestory',
  featuredProjectIds: [...engineeringEvidencePack.fullStackAiDefault],
  caseStudiesSectionTitle: 'Proof ranking for CoreStory',
  caseStudiesIntro:
    'Same three flagships as every application — reordered for this role. Agentic Ops stays Building until demo + evals clear.',
  skillsMatrixRows: [
    {
      category: 'Confirmed',
      skills: 'LLM product workflows, TypeScript, Next.js, n8n, Airtable, Make, prompt systems',
      icon: 'workflow',
    },
    {
      category: 'Gated',
      skills: 'Production RAG, MCP, agent orchestrator — pending Agentic Ops verified-live gates',
      icon: 'shield',
    },
    {
      category: 'Ramp plan',
      skills: 'Ship Agentic Ops demo → eval green → update dossier → apply with RAG claims',
      icon: 'target',
    },
  ],
  processSteps: sprint2026ProcessSteps,
  innovationLabSectionTitle: 'Evidence posture',
  innovationLabLead: 'Apply with Lore + automation; keep RAG honest',
  innovationLabBody:
    'CoreStory can be pursued on confirmed LLM product and agentic automation evidence. Closing the Agentic Ops verified-live gate upgrades RAG claims from gated to demonstrated—without rewriting the rest of the dossier.',
  ctas: sprint2026Ctas('CoreStory AI Engineer'),
  animatedLogoBand: sprint2026LogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé — CoreStory AI Engineer',
  resumeSectionNote:
    'Lead with Lore Machine and automation. Keep RAG bullets conditional until Agentic Ops verifier clears.',
};
