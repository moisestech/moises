import type { Opportunity } from './types';
import { evidenceProjects } from '@/content/evidence/projects';
import { genAiRecruitingLogoBand, moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export const cvsGenaiEngineerOpportunity: Opportunity = {
  slug: 'cvs-senior-genai-engineer',
  status: 'active',
  variant: 'compact',
  applicationBanner: {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778695455/jobs/banners/senior-genai-engineer-banner_iljp58.png',
    alt: 'Senior GenAI Engineer — application banner tailored to this role.',
  },
  seo: {
    title: 'Senior GenAI Engineer — Moises Sanabria | moises.tech',
    description:
      'GenAI prototypes, LLM systems, agent workflows, and multimodal AI products — compact dossier for innovation lab and senior GenAI engineering roles.',
    indexable: true,
  },
  audienceKeywords: {
    terms: [
      {
        label: 'Rapid prototyping',
        detail: 'From ambiguous briefs to interactive demos and MVPs — Lore Machine, AI24, and internal lab-style builds.',
      },
      {
        label: 'LLM applications',
        detail: 'Prompt workflows, structured outputs, APIs, evaluation, and product-facing text and tooling.',
      },
      {
        label: 'Multimodal systems',
        detail: 'Text, image, and media pipelines — narrative-to-visual flows, datasets, and generative media stacks.',
      },
    ],
  },
  company: 'CVS Health (example targeting)',
  roleTitle: 'Senior GenAI Engineer',
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'teaching-cred', label: 'Teaching' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'How I work' },
    { id: 'resume', label: 'Résumé' },
  ],
  hero: {
    headline: 'Senior GenAI Engineer',
    subheadline: 'LLM systems · Agent workflows · Multimodal prototypes · AI product strategy',
    introParagraphs: [
      'I am a Miami-based engineer, artist-technologist, and product strategist with 12+ years building web systems, creative AI tools, and experimental GenAI workflows. My work sits at the intersection of software engineering, multimodal AI, product prototyping, and applied research.',
      'I have contributed to AI storytelling platforms, prompt workflows, generative image systems, cloud-based media pipelines, automation tools, and educational AI infrastructure for artists and institutions. For Senior GenAI Engineer roles, I bring hands-on engineering, product intuition, visual systems thinking, and a track record of turning ambiguous ideas into demos and MVPs.',
    ],
    trustLine:
      '12+ years in full-stack engineering · AI product development · startup systems · multimodal media infrastructure',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Why this role fits',
  roleMatchIntro:
    'Innovation lab GenAI roles need someone who can experiment with emerging tools, evaluate what is real, and ship prototypes. That is how I already work across product, media, and institutional contexts.',
  roleMatchColumnHeaders: {
    left: 'Skill/Experience',
    right: 'Relevant experience',
  },
  roleMatchRows: [
    {
      requirement: 'GenAI prototypes / PoCs / MVPs',
      evidence:
        'Built AI storytelling systems, creative automation tools, and rapid prototypes at Lore Machine, AI24, and related product contexts.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — AI narrative-to-media platform where GenAI prototypes and PoCs shipped to production contexts.',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'LLM applications',
      evidence:
        'Prompt workflows, structured outputs, OpenAI API integration, and text synthesis pipelines for content and tooling.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — LLM-backed workflows turning long-form text into structured creative outputs.',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Python and TypeScript systems',
      evidence:
        'Full-stack delivery across Next.js/TypeScript products and Python/API-oriented automation and glue systems.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Digital culture infrastructure — full-stack portals, automation, and TypeScript-heavy product surfaces.',
        local: evidenceProjects['digital-culture-infrastructure'].imageLocal,
      },
    },
    {
      requirement: 'Hugging Face / open-source AI',
      evidence:
        'Stable Diffusion, ComfyUI, model workflows, and generative image systems in research and product settings.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Multimodal generative image workflows — open-model stacks, ComfyUI, and Hugging Face–adjacent tooling.',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'Agentic workflows',
      evidence:
        'n8n automation, AI workflow design, and expanding hands-on orchestration with LangGraph, CrewAI, and OpenAI Agents.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — applied AI systems, automation strategy, and agent-style teaching and tooling for institutions.',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Multimodal AI',
      evidence:
        'Text-to-image, narrative-to-visual pipelines, video and image datasets, pose workflows, and AI media systems.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Multimodal AI — text-to-image pipelines, pose control, and narrative-to-visual generation research.',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'Cloud deployment',
      evidence:
        'Azure, Vercel, Supabase, Replicate, CI/CD, blob storage, and workers patterns in shipping products.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — cloud-backed media generation with Azure, Vercel, workers, and managed AI APIs.',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Innovation lab mindset',
      evidence:
        'Artist-technologist practice with experimental prototypes, public talks, workshops, and applied AI research translation.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Experimental generative media R&D — rapid visual iteration aligned with lab-style discovery work.',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'AI literacy and teaching',
      evidence:
        'Public AI workshops and multi-session programs on agents, digital presence, and critical AI use — see Teaching section on this page.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — AI literacy programs, workshops, and LMS-oriented teaching infrastructure.',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
  ],
  featuredProjectIds: [
    'lore-machine',
    'ai24',
    'multimodal-image-systems',
    'digital-culture-infrastructure',
  ],
  caseStudiesSectionTitle: 'Featured case studies',
  caseStudiesIntro:
    'Selected work includes private startup systems and client-facing prototypes where source cannot be shared. Public summaries and skills tags below reflect what I can discuss.',
  skillsSectionTitle: 'Core technical skills',
  skillsMatrixRows: [
    { category: 'Languages', skills: 'Python, TypeScript, JavaScript', icon: 'code2' },
    {
      category: 'GenAI / LLMs',
      skills: 'OpenAI API, prompt engineering, structured generation, LLM workflow design',
      icon: 'sparkles',
    },
    {
      category: 'Agentic systems',
      skills:
        'LangChain-style patterns, n8n automation, tool-based workflows; currently expanding hands-on agent orchestration with LangGraph, CrewAI, and OpenAI Agents',
      icon: 'workflow',
    },
    {
      category: 'Multimodal AI',
      skills: 'Text-to-image, image datasets, generative media, pose control, character consistency',
      icon: 'image',
    },
    {
      category: 'AI platforms',
      skills: 'Hugging Face ecosystem, Replicate, ComfyUI, Stable Diffusion workflows',
      icon: 'boxes',
    },
    { category: 'Cloud / infra', skills: 'Azure, Vercel, Supabase, blob storage, CI/CD, workers', icon: 'cloud' },
    {
      category: 'Product',
      skills: 'Prototyping, MVPs, innovation strategy, technical research translation',
      icon: 'rocket',
    },
    {
      category: 'Collaboration',
      skills: 'Cross-functional teams, executive communication, workshops, documentation',
      icon: 'users',
    },
  ],
  processSectionTitle: 'How I work in innovation labs',
  processIntro:
    'I work best when the problem is not fully defined yet. I map the business question, identify the AI capability, prototype the smallest useful workflow, evaluate model behavior, and turn the result into a demo, MVP, or technical direction stakeholders can understand.',
  processSteps: [
    {
      title: 'Translate the business problem into an AI use case',
      description: 'Clarify success criteria, constraints, and what “good” output looks like for users.',
    },
    {
      title: 'Identify model, framework, and data requirements',
      description: 'Choose APIs, open weights, orchestration, evaluation data, and safety boundaries.',
    },
    {
      title: 'Prototype quickly',
      description: 'Ship with Python, TypeScript, APIs, and orchestration tools — favor learning speed early.',
    },
    {
      title: 'Evaluate outputs, failure modes, latency, and scale',
      description: 'Stress-test prompts, edge cases, cost, and operational feasibility.',
    },
    {
      title: 'Package into demo, MVP, roadmap, or architecture',
      description: 'Document tradeoffs and hand off a path the org can maintain.',
    },
  ],
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Emerging models → working products',
  innovationLabBody:
    'Most candidates can list GenAI tools. I focus on turning emerging capabilities into working prototypes, legible systems, and product direction — the bridge between research velocity and something a team can ship.',
  teachingHighlights: [
    {
      title: 'Teaching hub',
      description: 'Workshops, programs, and how I frame AI for artists, institutions, and the public.',
      href: '/teaching',
    },
    {
      title: 'The Art of AI Agents',
      description: 'Multi-session workshop on practical agent workflows and tooling.',
      href: '/workshop/the-art-of-ai-agents',
    },
    {
      title: 'Learn AI Without Losing Yourself',
      description: 'Structured curriculum for critical, sustainable AI practice.',
      href: '/workshop/learn-ai-without-losing-yourself',
    },
    {
      title: 'Own Your Digital Presence',
      description: 'Website and content strategy intensive including AI-assisted workflows.',
      href: '/workshop/own-your-digital-presence',
    },
  ],
  certifications: [
    {
      name: 'Cooper Union — B.S. Fine Arts & Creative Technology',
      detail: 'Undergraduate work at the intersection of art, engineering, and computation.',
      href: 'https://cooper.edu',
    },
    {
      name: 'Cloud and data-adjacent engineering',
      detail:
        'Hands-on delivery with AWS-oriented stacks (e.g. CloudFront, S3, streaming and analytics pipelines) in museum and product roles — timelines on web CV.',
      href: '/cv',
    },
  ],
  ctas: {
    resumePdfPath: '/resume/moises-sanabria-senior-genai-engineer.pdf',
    email: 'm@moises.tech',
    emailSubject: 'Senior GenAI Engineer — Moises Sanabria',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    github: 'https://github.com/moisestech',
    instagram: 'https://www.instagram.com/moisesdsanabria',
    portfolio: '/portfolio',
    cv: '/cv',
    caseStudiesAnchor: '#case-studies',
  },
  animatedLogoBand: genAiRecruitingLogoBand,
  techLogoIds: [],
  resumeSectionTitle: 'Résumé tailored for Senior GenAI Engineer roles',
  resumeSectionNote:
    'Available for remote W2 contract roles in GenAI, AI product engineering, innovation labs, and multimodal AI systems.',
};
