import {
  AI24_WEBSITE_HERO_IMAGE,
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { moisesRecruitingProfiles } from '@/content/evidence/recruitingDefaults';
import { aiEngineeringVisuals, proofProjectImageSrc } from '@/content/ai-engineering/visualAssets';

export type StackMatchRow = {
  platform: string;
  proofAngle: string;
};

export type ProofProject = {
  slug: string;
  title: string;
  problem: string;
  systemBuilt: string;
  stack: string[];
  users: string;
  outcome: string;
  whyItMatters: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
};

export type DownloadAsset = {
  label: string;
  path: string;
  available: boolean;
  fallbackPath?: string;
  fallbackLabel?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

const SITE_ORIGIN = 'https://moises.tech';

/** Google Drive — primary recruiter resume PDF */
export const RESUME_PDF_GOOGLE_DRIVE_ID = '1XfqTrXGnUM3visTffEtVmX_5b1_A0OCK';
export const resumePdfDriveViewUrl = `https://drive.google.com/file/d/${RESUME_PDF_GOOGLE_DRIVE_ID}/view?usp=sharing`;
export const resumePdfDriveDownloadUrl = `https://drive.google.com/uc?export=download&id=${RESUME_PDF_GOOGLE_DRIVE_ID}`;

/** Paste into Gmail recruiter replies */
export const recruiterLinksBlock = `AI Engineering: ${SITE_ORIGIN}/ai-engineering
Career Packet: ${SITE_ORIGIN}/career-packet
Resume: ${SITE_ORIGIN}/cv/tech
Resume (PDF): ${resumePdfDriveViewUrl}
GitHub: https://github.com/moisestech`;

export const recruiterEmailFooter = `—
Moises Sanabria · Full-Stack AI Systems Builder
${SITE_ORIGIN}/career-packet · ${SITE_ORIGIN}/ai-engineering
m@moises.tech · Miami / Remote`;

export const aiEngineeringPacket = {
  seo: {
    title: 'Full-Stack AI Systems Builder — Moises Sanabria | moises.tech',
    description:
      'Claude Code · agentic systems · Next.js · Supabase · Airtable · n8n. Practical AI workflows, automation, and production prototypes for organizations that need a solo builder who can scope and ship.',
    ogImage: aiEngineeringVisuals.ogImage,
  },
  careerPacketOgImage: aiEngineeringVisuals.careerPacketOgImage,
  hero: {
    headline: 'Full-Stack AI Systems Builder',
    headlineStack: 'Claude Code · Next.js · Supabase · Airtable · Automation Workflows',
    subheadline:
      'I design and ship practical AI systems that connect LLM workflows, databases, automations, and usable interfaces for real organizations.',
    primaryQuestion:
      'Can this person build agentic AI tools in production, fast, with modern full-stack infrastructure?',
  },
  recruiterSnapshot: [
    { label: 'Role lane', value: 'Full-Stack AI Engineer / Agentic Systems Builder' },
    { label: 'Location', value: 'Miami / Remote' },
    { label: 'Work modes', value: 'Contract, W2, full-time, consulting' },
    {
      label: 'Core stack',
      value: 'Claude, OpenAI, Next.js, React, TypeScript, Supabase, Airtable, n8n, Vercel',
    },
    { label: 'Strength', value: 'Solo builder who can scope, prototype, and ship' },
    {
      label: 'Differentiator',
      value: 'Artist-engineer with strong stakeholder communication and product judgment',
    },
  ],
  agenticFit: {
    title: 'Claude Code / Agentic AI Systems fit',
    intro: 'Current market fit for roles requiring agentic tooling, solo engineering, and fast POC delivery.',
    items: [
      'Claude / OpenAI workflows and production AI prototypes',
      'Next.js / React / TypeScript product interfaces',
      'Supabase data layer and Vercel deployments',
      'Airtable CRM and workflow operating systems',
      'n8n automation pipelines and routing logic',
      'Solo scoping and prototype delivery (POC in a week)',
      'Non-technical stakeholder communication',
      'GitHub engineering workflow and documentation',
    ],
  },
  bestFitRoles: [
    'AI Engineer',
    'Full-Stack AI Engineer',
    'Agentic AI Developer',
    'Claude Code Engineer',
    'Applied AI Engineer',
    'AI Product Engineer',
    'Automation Engineer',
  ],
  stackMatch: [
    {
      platform: 'Claude Code / Claude Desktop',
      proofAngle: 'AI coding workflows, agentic build sessions, rapid prototyping in Cursor and Claude',
    },
    {
      platform: 'OpenAI / LLM workflows',
      proofAngle: 'Prompt systems, structured outputs, automation, and production-facing prototypes',
    },
    {
      platform: 'Next.js / React / TypeScript',
      proofAngle: 'AI24, Infra24, product interfaces, and recruiter-facing site systems',
    },
    {
      platform: 'Supabase',
      proofAngle: 'App backends, auth/data layer, and full-stack prototypes',
    },
    {
      platform: 'Airtable',
      proofAngle: 'Life OS, recruiter graph, operational CRM, and decision-layer workflows',
    },
    {
      platform: 'n8n / automation',
      proofAngle: 'Gmail routing, labels, workflow automation, and system orchestration',
    },
    {
      platform: 'Vercel / GitHub',
      proofAngle: 'Deployed web apps, CI/CD patterns, and engineering documentation',
    },
  ] satisfies StackMatchRow[],
  shortBio:
    'Moises Sanabria is a Miami-based full-stack AI systems builder who ships agentic workflows, automation systems, and production-ready prototypes using Claude, Next.js, Supabase, Airtable, and n8n.',
  technicalSummary150:
    'Full-stack AI systems builder across Claude/OpenAI workflows, Next.js, TypeScript, Supabase, Airtable, and n8n. Ships agentic tools, CRM-style operating systems, and deployed prototypes for organizations that need one engineer who can scope with non-technical stakeholders and deliver quickly. Background includes founding engineer work at Lore Machine, AI24 infrastructure, Infra24 smart signage, and Oolite Digital Lab technical direction.',
  recruiterBlurb:
    'Moises Sanabria is a Miami-based full-stack AI systems builder. He works across Claude Code, Next.js, TypeScript, Supabase, Airtable, and n8n to ship agentic workflows, automation systems, and production-ready prototypes. He is especially strong as a solo builder in ambiguous roles that require technical execution, workflow design, and clear communication with non-technical stakeholders.',
  howIWork: {
    lead: 'I can sit with a non-technical stakeholder, identify the real workflow, cut scope, define the first useful version, and ship a working prototype quickly.',
    steps: [
      {
        title: 'Scope the workflow',
        description: 'Clarify the decision, user, and what “done” looks like for v1.',
      },
      {
        title: 'Map data and decisions',
        description: 'Define tables, automations, LLM touchpoints, and failure modes.',
      },
      {
        title: 'Build prototype',
        description: 'Ship the smallest useful version in Next.js, APIs, or agentic tooling.',
      },
      {
        title: 'Connect automations',
        description: 'Wire n8n, Airtable, webhooks, and notification paths.',
      },
      {
        title: 'Test with real users',
        description: 'Validate with stakeholders before over-building.',
      },
      {
        title: 'Deploy and document',
        description: 'Vercel deploy, handoff docs, and a path the org can maintain.',
      },
    ] satisfies ProcessStep[],
  },
  proofProjects: [
    {
      slug: 'life-os',
      title: 'Life OS / Recruiter Graph',
      problem:
        'Recruiting signals, follow-ups, and opportunity tracking were scattered across Gmail, LinkedIn, and ad-hoc notes — hard to act on quickly.',
      systemBuilt:
        'Airtable-backed operating system with Gmail automation (n8n), recruiter labeling, duplicate-risk tracking, Life OS Actions, and decision workflows that turn inbox noise into prioritized next steps.',
      stack: ['Airtable', 'n8n', 'Gmail API', 'Claude', 'Workflow design', 'CRM architecture'],
      users: 'Personal ops layer; recruiter pipeline and opportunity triage',
      outcome:
        'Faster recruiter response, cleaner archive batches, and a repeatable system for capturing fit, risk, and follow-up state.',
      whyItMatters:
        'Direct proof of Airtable CRM design, automation pipelines, and agentic-adjacent workflow systems — the same stack many Claude Code / agentic engineering roles require.',
      imageSrc: proofProjectImageSrc(
        'life-os',
        aiEngineeringVisuals.proofImageFallbacks['life-os'],
      ),
      imageAlt: 'Life OS and recruiter graph — AI workflow and career systems architecture',
    },
    {
      slug: 'ai24',
      title: 'AI24',
      problem:
        'Artists and institutions needed legible paths into emerging AI tools without losing critical judgment or operational clarity.',
      systemBuilt:
        'Full-stack AI infrastructure: workshop programs, LMS-oriented architecture, automation strategy, and applied AI product systems deployed on modern web stack.',
      stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel', 'GenAI education', 'Automation'],
      users: 'Artists, institutions, workshop cohorts',
      outcome: 'Public programs, product hub, and repeatable AI literacy delivery',
      whyItMatters: 'End-to-end full-stack AI systems ownership — product, workflows, and deployment.',
      href: '/projects/ai24',
      imageSrc: AI24_WEBSITE_HERO_IMAGE,
      imageAlt: 'AI24 website — above-the-fold product and program hub',
    },
    {
      slug: 'infra24',
      title: 'Infra24 / Smart Sign',
      problem:
        'Cultural venues needed community-facing digital displays that non-technical staff could update without engineering support.',
      systemBuilt:
        'CMS-driven smart signage: Raspberry Pi deployment, content feeds, venue integrations, and automation for bilingual public displays.',
      stack: ['Raspberry Pi', 'CMS', 'Next.js', 'Signage systems', 'Automation'],
      users: 'Venue staff, community audiences, program coordinators',
      outcome: 'Deployed signage systems with operable content workflows',
      whyItMatters:
        'Real-world deployed infrastructure beyond the browser — ops, hardware-adjacent systems, and stakeholder-facing tooling.',
      href: '/projects/infra24',
      imageSrc: proofProjectImageSrc('infra24', aiEngineeringVisuals.proofImageFallbacks.infra24),
      imageAlt: 'Smart signage and digital infrastructure deployment',
    },
    {
      slug: 'oolite-digital-lab',
      title: 'Oolite Digital Lab',
      problem:
        'An arts institution needed unified digital lab operations, artist access pathways, and public-facing program infrastructure.',
      systemBuilt:
        'Technical direction for lab ops, booking pathways, signage, AI/media literacy programs, documentation, vendor coordination, and leadership reporting.',
      stack: ['Technical direction', 'Airtable-adjacent ops', 'Documentation', 'AI literacy', 'Signage'],
      users: 'Artists, lab staff, institutional leadership',
      outcome: 'Operational digital lab systems and stakeholder-ready program delivery',
      whyItMatters:
        'Technical leadership with non-engineering stakeholders — the “only engineer in the room” pattern.',
      href: 'https://oolitearts.org/digital-lab/',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      slug: 'lore-machine',
      title: 'Lore Machine',
      problem:
        'Long-form narrative needed to become structured, visual, production-ready media without a large engineering team.',
      systemBuilt:
        'Founding engineer / Chief Prompt Officer: frontend app, auth, APIs, prompt workflows, generative image pipelines, and sprint coordination in a 3-person startup team.',
      stack: ['TypeScript', 'Next.js', 'Vercel', 'LLMs', 'Stable Diffusion', 'Replicate', 'Azure'],
      users: 'Writers, media teams, startup leadership',
      outcome: 'Production AI storytelling platform shipped to market contexts',
      whyItMatters: 'Founding engineer proof — agentic creative workflows at startup speed.',
      href: '/projects/lore-machine',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
    },
  ] satisfies ProofProject[],
  careerPacketIntro:
    'This packet summarizes my background as a full-stack AI systems builder with experience across LLM workflows, product prototypes, automation systems, and stakeholder-facing technical infrastructure.',
  availability: {
    summary:
      'Open to full-time, contract-to-hire, W2 remote contract, and selective consulting in applied AI, agentic systems, and automation-heavy builds.',
    email: 'm@moises.tech',
    location: 'Miami, FL / Remote-friendly',
    linkedin: moisesRecruitingProfiles.linkedin,
    github: moisesRecruitingProfiles.github,
  },
  downloads: {
    resumePdf: {
      label: 'Download Resume (PDF)',
      path: resumePdfDriveViewUrl,
      available: true,
    },
    resumePdfAlt: {
      label: 'Technology CV (PDF)',
      path: '/downloads/Moises_Sanabria_AI_Engineer_Resume.pdf',
      available: true,
    },
    resumePrint: {
      label: 'Print Resume',
      path: '/opportunities/cvs-senior-genai-engineer/print/resume',
      available: true,
    },
    resumeDocx: {
      label: 'Resume (DOCX)',
      path: '/downloads/Moises_Sanabria_AI_Engineer_Resume.docx',
      available: false,
      fallbackPath: '/opportunities/cvs-senior-genai-engineer/print/resume',
      fallbackLabel: 'Print to PDF',
    },
    portfolioPacket: {
      label: 'AI Engineering one-pager (PDF)',
      path: '/downloads/Moises_Sanabria_AI_Engineering_Portfolio_Packet.pdf',
      available: false,
      fallbackPath: '/ai-engineering',
      fallbackLabel: 'View AI Engineering page',
    },
  } satisfies Record<string, DownloadAsset>,
  resumeWebPath: '/cv/tech',
  careerPacketPath: '/career-packet',
  email: 'm@moises.tech',
  recruiterLinksBlock,
  recruiterEmailFooter,
} as const;
