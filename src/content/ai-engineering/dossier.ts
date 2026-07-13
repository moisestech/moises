import { evidenceProjects } from '@/content/evidence/projects';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { aiEngineeringVisuals } from '@/content/ai-engineering/visualAssets';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import type { Opportunity } from '@/content/opportunities/types';
import { aiEngineeringPacket } from './packet';

const p = aiEngineeringPacket;

export const aiEngineeringDossier: Opportunity = {
  slug: 'ai-engineering',
  status: 'active',
  variant: 'compact',
  listed: false,
  applicationBanner: aiEngineeringVisuals.heroBanner,
  seo: {
    title: p.seo.title,
    description: p.seo.description,
    indexable: true,
  },
  audienceKeywords: {
    lead: 'Built for recruiters evaluating',
    terms: [
      {
        label: 'Claude Code / agentic systems',
        detail: 'AI coding workflows, tool orchestration, and production prototypes with Claude and Cursor.',
      },
      {
        label: 'full-stack AI infrastructure',
        detail: 'Next.js, Supabase, Airtable, n8n, and Vercel — from workflow design to deployed interfaces.',
      },
      {
        label: 'solo builder delivery',
        detail: 'Scope with non-technical stakeholders, cut v1, and ship working systems quickly.',
      },
    ],
  },
  roleTitle: 'Full-Stack AI Systems Builder',
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'snapshot', label: 'Snapshot' },
    { id: 'fit', label: 'Role fit' },
    { id: 'skills', label: 'Skills' },
    { id: 'proof', label: 'Proof' },
    { id: 'process', label: 'How I work' },
    { id: 'packet', label: 'Packet' },
    { id: 'resume', label: 'Résumé' },
  ],
  hero: {
    headline: p.hero.headline,
    subheadline: p.hero.headlineStack,
    introParagraphs: [p.hero.subheadline, p.shortBio],
    trustLine: 'Miami / Remote · Contract, W2, full-time · Solo scoping and prototype delivery',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: aiEngineeringVisuals.headshot.alt,
  },
  roleMatchSectionTitle: 'Stack match — Claude Code / agentic engineering',
  roleMatchIntro:
    'How the core platforms in current AI engineering roles map to systems I have already built and shipped.',
  roleMatchColumnHeaders: { left: 'Platform', right: 'Proof angle' },
  roleMatchRows: [
    {
      requirement: 'Claude Code / Claude Desktop',
      evidence: p.stackMatch[0].proofAngle,
      illustration: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783032752/jobs/claude_logo_2023_wihocz.png',
        alt: 'Claude — agentic coding and workflow tooling',
      },
    },
    {
      requirement: 'OpenAI / LLM workflows',
      evidence: p.stackMatch[1].proofAngle,
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: evidenceProjects['lore-machine'].imageAlt,
      },
    },
    {
      requirement: 'Next.js / React / TypeScript',
      evidence: p.stackMatch[2].proofAngle,
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: evidenceProjects.ai24.imageAlt,
      },
    },
    {
      requirement: 'Supabase',
      evidence: p.stackMatch[3].proofAngle,
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — full-stack data and product infrastructure',
      },
    },
    {
      requirement: 'Airtable',
      evidence: p.stackMatch[4].proofAngle,
      illustration: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783032752/jobs/airtable_logo_xserwf.png',
        alt: 'Airtable — Life OS and recruiter graph operating system',
      },
    },
    {
      requirement: 'n8n / automation',
      evidence: p.stackMatch[5].proofAngle,
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: evidenceProjects['n8n-gmail-intelligence'].imageAlt,
        local: evidenceProjects['n8n-gmail-intelligence'].imageLocal,
      },
    },
    {
      requirement: 'Make.com / client ops',
      evidence: p.stackMatch[6].proofAngle,
      illustration: {
        src: evidenceProjects['bookleggers-commerce-automation'].imageSrc,
        alt: evidenceProjects['bookleggers-commerce-automation'].imageAlt,
        local: evidenceProjects['bookleggers-commerce-automation'].imageLocal,
      },
    },
    {
      requirement: 'Vercel / GitHub',
      evidence: p.stackMatch[7].proofAngle,
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Production deployment and engineering workflow',
      },
    },
  ],
  featuredProjectIds: [
    'n8n-gmail-intelligence',
    'bookleggers-commerce-automation',
    'lore-machine',
    'ai24',
    'digital-culture-infrastructure',
  ],
  caseStudyOverrides: [],
  caseStudiesSectionTitle: 'Proof projects',
  caseStudiesIntro:
    'Selected systems across automation, full-stack AI product work, institutional infrastructure, and founding engineer delivery.',
  skillsSectionTitle: 'Core technical skills',
  skillsMatrixRows: [
    { category: 'Agentic / LLM', skills: 'Claude Code, OpenAI API, prompt workflows, tool orchestration, structured outputs', icon: 'sparkles' },
    { category: 'Full-stack', skills: 'Next.js, React, TypeScript, Supabase, PostgreSQL, APIs', icon: 'code2' },
    { category: 'Automation / ops', skills: 'Airtable CRM, n8n (production Gmail AI Agent), Make.com, Square → Airtable sync', icon: 'workflow' },
    { category: 'Deployment', skills: 'Vercel, GitHub, CI/CD, documentation, stakeholder handoff', icon: 'cloud' },
    { category: 'Product judgment', skills: 'Solo scoping, POC delivery, non-technical communication, v1 cutting', icon: 'users' },
    { category: 'AI product', skills: 'GenAI prototypes, multimodal pipelines, institutional tooling', icon: 'rocket' },
  ],
  processSectionTitle: 'How I work',
  processIntro: p.howIWork.lead,
  processSteps: p.howIWork.steps.map((step) => ({
    title: step.title,
    description: step.description,
  })),
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Solo builder who can ship agentic systems',
  innovationLabBody: p.technicalSummary150,
  ctas: recruitingCtas({
    emailSubject: 'AI Engineering — Moises Sanabria',
    caseStudiesAnchor: '#proof',
    resumePdfPath: p.downloads.resumePdf.path,
    resumePrintPath: p.downloads.resumePrint.path,
    portfolio: undefined,
  }),
  animatedLogoBand: aiEngineeringVisuals.logoBand,
  techLogoIds: [...aiEngineeringVisuals.techLogoIds],
  resumeSectionTitle: 'Résumé, packet, and contact',
  resumeSectionNote: p.availability.summary,
};

export const careerPacketDossier: Opportunity = {
  ...aiEngineeringDossier,
  slug: 'career-packet',
  applicationBanner: aiEngineeringVisuals.careerPacketHeroBanner,
  animatedLogoBand: aiEngineeringVisuals.careerPacketLogoBand,
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'snapshot', label: 'Snapshot' },
    { id: 'materials', label: 'Materials' },
  ],
  hero: {
    headline: 'AI Engineering Career Packet',
    subheadline: 'Forwardable summary for recruiters and hiring managers',
    introParagraphs: [p.careerPacketIntro, p.shortBio],
    trustLine: 'Miami / Remote · Full-stack AI systems builder',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: aiEngineeringVisuals.headshot.alt,
  },
  roleMatchSectionTitle: 'Current fit: Claude Code / Agentic AI Engineering',
  roleMatchIntro: p.agenticFit.intro,
  roleMatchRows: p.agenticFit.items.map((item) => ({
    requirement: item.split('—')[0]?.trim() || item,
    evidence: item,
  })),
  resumeSectionTitle: 'Contact and next steps',
  ctas: recruitingCtas({
    emailSubject: 'AI Engineering Career Packet — Moises Sanabria',
    caseStudiesAnchor: '#proof',
    resumePdfPath: p.downloads.resumePdf.path,
    resumePrintPath: p.downloads.resumePrint.path,
    portfolio: undefined,
    ooliteOrg: undefined,
  }),
};
