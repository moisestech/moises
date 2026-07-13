import type { Opportunity } from './types';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { evidenceProjects } from '@/content/evidence/projects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export const netflixFullStackEngineerOpportunity: Opportunity = {
  slug: 'netflix-full-stack-engineer-ai-insights',
  status: 'active',
  listed: false,
  variant: 'compact',
  applicationBanner: {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
    alt: 'Netflix Full-Stack Engineer — AI Insights & Visualizations reach application',
    aspectClass: 'aspect-[3/1] max-h-[220px]',
  },
  seo: {
    title: 'Netflix Full-Stack Engineer 5, AI Insights & Visualizations — Moises Sanabria | moises.tech',
    description:
      'Reach application for Netflix Full-Stack Engineer 5, AI Insights & Visualizations — full-stack AI product engineering, data pipelines, and visualization-adjacent work.',
    indexable: false,
  },
  audienceLine:
    'Reach application for Netflix Full-Stack Engineer 5, AI Insights & Visualizations — full-stack AI tooling, internal platforms, and visualization work, framed honestly.',
  company: 'Netflix',
  roleTitle: 'Full-Stack Engineer 5, AI Insights & Visualizations',
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Approach' },
    { id: 'resume', label: 'Résumé' },
  ],
  hero: {
    headline: 'Full-stack AI product · Data insights · Internal tooling',
    subheadline: 'Applied AI platforms · visualization-adjacent BI · agent-orchestrated workflows',
    introParagraphs: [
      'This dossier is a tailored reach application for Netflix’s Full-Stack Engineer 5, AI Insights & Visualizations role. It maps my existing full-stack and applied-AI product work to the role’s emphasis on internal platforms, AI tooling, and visualization — framed honestly as a stretch application, not an inflated one.',
      'Strongest alignment: founding-engineer delivery on Lore Machine, Playwire data pipelines and Tableau BI, production n8n Gmail intelligence (AI Agent + Airtable), and live Make + Square + Airtable ops for Bookleggers Library. Gaps requiring evidence confirmation are flagged below.',
    ],
    trustLine:
      'Full-Stack AI Engineer · Miami-based · honest stretch application — gaps flagged where evidence is pending',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit (honest mapping)',
  roleMatchIntro:
    'Capabilities I can defend in conversation today, plus gaps that need role-specific evidence before this dossier is submission-ready.',
  roleMatchColumnHeaders: {
    left: 'Role emphasis',
    right: 'My evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Full-stack AI product delivery',
      evidence:
        'Founding engineer at Lore Machine: owned frontend, auth, and AI/data API integrations for a real-time generative platform on Vercel. Technical Director of Digital at Oolite Arts: public-facing digital infrastructure and AI/media programming.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — full-stack AI product on Vercel',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Data pipelines & insights-adjacent work',
      evidence:
        'Playwire Data Analyst: Kinesis → Athena → Snowflake migration, Tableau BI for U.S. and international auction bidding data, Slack alerting for data consistency. Relevant to insights workflows — though not at Netflix scale.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — data pipelines and Tableau BI',
        local: true,
      },
    },
    {
      requirement: 'Internal tooling & platform engineering',
      evidence:
        'Production n8n Gmail intelligence workflow (AI Agent classification, label routing, Airtable sync) and live Make + Square + Airtable commerce automation for Bookleggers Library — internal-ops tooling patterns at nonprofit scale. [GAP: Netflix-scale internal platform depth still needs role-specific evidence.]',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n — production internal ops automation',
        local: evidenceProjects['n8n-gmail-intelligence'].imageLocal,
      },
    },
    {
      requirement: 'Visualization & AI insights products',
      evidence:
        '[GAP — NEEDS EVIDENCE] Direct experience shipping data visualization products for internal stakeholders at scale. Tableau/BI work at Playwire is closest; additional viz or insights tooling should be added after evidence confirmation.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — Tableau auction analytics',
        local: true,
      },
    },
    {
      requirement: 'AI-native development workflows',
      evidence:
        'Current practice: Cursor, Claude Code, and multi-agent orchestration (Claude + Airtable + Gmail) for application-pipeline and task management — honest agentic-engineering artifact, not production RAG/vector depth.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — AI literacy and applied tooling',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
  ],
  featuredProjectIds: [
    'lore-machine',
    'playwire-alumni',
    'n8n-gmail-intelligence',
    'bookleggers-commerce-automation',
    'ai24',
  ],
  caseStudiesSectionTitle: 'Selected work',
  caseStudiesIntro:
    'Public and former-employer-adjacent work mapped to this role. Gaps above should be closed with role-specific evidence before submission.',
  skillsSectionTitle: 'Core technical skills',
  skillsMatrixRows: [
    {
      category: 'Full-stack',
      skills: 'TypeScript, JavaScript, React, Next.js, Vercel, API design, real-time UX',
      icon: 'code2',
    },
    {
      category: 'Data & viz-adjacent',
      skills: 'Snowflake, SQL, Tableau, Kinesis, Athena, ETL pipelines, Slack alerting',
      icon: 'lineChart',
    },
    {
      category: 'AI product',
      skills: 'Applied GenAI integration, Replicate, prompt engineering, real-time media pipelines',
      icon: 'sparkles',
    },
    {
      category: 'Agentic workflows',
      skills: 'Production n8n AI Agent, Make.com, Airtable ops sync, multi-tool orchestration',
      icon: 'workflow',
    },
    {
      category: 'Cloud',
      skills: 'AWS (Amplify, CloudFront, S3, Kinesis, Glue ETL), Docker',
      icon: 'cloud',
    },
    {
      category: 'Practice',
      skills: 'Solutions engineering, technical translation, rapid prototyping',
      icon: 'rocket',
    },
  ],
  processSectionTitle: 'How I would approach this role',
  processIntro:
    'Start from the internal user and the insight question — then map to data, tooling, and UX that makes AI-assisted workflows legible at scale.',
  processSteps: [
    {
      title: 'Understand the insight workflow',
      description: 'Who consumes the visualization, what decisions it drives, and what data freshness is required.',
      logoIds: ['tableau', 'snowflake'],
    },
    {
      title: 'Map data and integration surfaces',
      description: 'Pipelines, APIs, and the technical path from raw data to actionable internal tools.',
      logoIds: ['aws', 'typescript'],
    },
    {
      title: 'Prototype full-stack tooling',
      description: 'Interactive dashboards and AI-assisted workflows stakeholders can react to before scale investment.',
      logoIds: ['nextjs', 'react'],
    },
    {
      title: 'Ship, monitor, iterate',
      description: 'Alerting, consistency checks, and tight feedback loops with platform and insights teams.',
      logoIds: ['github', 'aws'],
    },
  ],
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Honest stretch application',
  innovationLabBody:
    'This role sits at the intersection of full-stack platform engineering, AI tooling, and visualization — areas where I have real delivery experience, but not yet at Netflix scale on internal insights products. I am applying because the trajectory of my work (founding engineer product delivery, data pipeline discipline, and current agentic development practice) aligns with where this team operates, and I can speak concretely to what I have built without inflating gaps.',
  ctas: recruitingCtas({
    emailSubject: 'Netflix Full-Stack Engineer 5, AI Insights & Visualizations — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    resumePdfPath: '/resume/moises-sanabria-technology-cv.pdf',
    resumePrintPath: '/cv/tech/print',
    cv: '/cv/tech',
  }),
  techLogoIds: ['typescript', 'react', 'nextjs', 'snowflake', 'tableau', 'aws', 'python'],
  resumeSectionTitle: 'Technology résumé & CV',
  resumeSectionNote:
    'Full technology CV at moises.tech/cv/tech — updated Full-Stack AI Engineer résumé with agentic workflow project. Gaps in this dossier should be resolved before submission.',
};
