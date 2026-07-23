import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { forwardDeployedAiEngineerBanner } from '@/content/evidence/applicationBanners';

const TITLE_STACK =
  'Creative Technologist · Forward Deployed AI Engineer · Full-Stack AI Engineer';

const rolePortfolio: RolePortfolioDossier = {
  capabilityMap: {
    title: 'Core Capabilities',
    subtitle: 'Organized the way this role works — creative production, AI systems, engineering, and client delivery.',
    groups: [
      {
        id: 'creative-ai',
        title: 'Creative AI & Production',
        items: [
          '**Adobe Creative Cloud, Adobe Firefly, Photoshop, After Effects, Figma, Figma Plugin SDK, generative-image APIs, multimodal AI, creative automation, image compositing, generative upscaling, localization, and digital-content production**',
        ],
      },
      {
        id: 'ai-ml',
        title: 'Artificial Intelligence & Machine Learning',
        items: [
          '**LLM applications, retrieval-augmented generation, embeddings, vector databases, hybrid retrieval, prompt engineering, grounding, evaluation, multimodal systems, StyleGAN, First Order Motion Model, and PyTorch**',
        ],
      },
      {
        id: 'backend',
        title: 'Backend Engineering & APIs',
        items: [
          '**Python, FastAPI, TypeScript, Node.js, REST APIs, third-party API integrations, Supabase, PostgreSQL, pgvector, authentication, data modeling, and service architecture**',
        ],
      },
      {
        id: 'frontend',
        title: 'Frontend Engineering',
        items: [
          '**React, Next.js, React Native, JavaScript, TypeScript, Tailwind CSS, React Query, Jotai, responsive interfaces, design systems, and interactive prototyping**',
        ],
      },
      {
        id: 'cloud',
        title: 'Cloud & Infrastructure',
        items: [
          '**AWS, Azure, Vercel, AWS CloudFront, Docker, GitHub, observability, CI/CD workflows, and foundational Kubernetes orchestration**',
        ],
      },
      {
        id: 'forward-deployed',
        title: 'Forward-Deployed Delivery',
        items: [
          '**Rapid prototyping, client discovery, technical demonstrations, stakeholder communication, ambiguous-problem definition, creative-workflow design, contractor management, sprint planning, and prototype-to-production delivery**',
        ],
      },
    ],
    currentlyExtending: [
      'Kubernetes — Udacity coursework, technical labs, and container-orchestration exercises',
    ],
    closingStatement:
      'Hands-on stack spans **Adobe Creative Cloud, Photoshop, Firefly, After Effects, Figma, Figma Plugin SDK, Python, FastAPI, React, Next.js, TypeScript, AWS, Azure, Docker, multimodal AI APIs, RAG systems, vector databases, and generative-image workflows**.',
  },
  experienceRolesTitle: 'Professional Experience',
  experienceRoles: [
    {
      id: 'lore-machine',
      org: 'Lore Machine',
      title: 'Chief Prompt Officer · Founding Engineer',
      bullets: [
        'Served as a **founding engineer** on a three-person engineering team building a real-time generative-AI storytelling platform that transformed written narratives into structured, illustrated visual experiences.',
        'Built core portions of the web application, including **responsive product interfaces, authentication, application architecture, data transactions, API integrations, and creator-facing workflows** deployed through **Vercel**.',
        'Developed and refined **prompt systems and multimodal-generation workflows** connecting language models, image-generation systems, narrative structure, and visual output.',
        'Translated experimental generative-model capabilities into understandable product features that creators and nontechnical users could operate reliably.',
        'Rapidly prototyped new AI features, evaluated model behavior, identified workflow failures, and iterated across **interface design, prompt architecture, generated assets, and application logic**.',
        'Used **Figma, Photoshop, Adobe Creative Cloud, and generative-AI tools** to prototype product experiences, prepare visual assets, and communicate workflows across engineering, design, marketing, and business stakeholders.',
        'Worked directly across technical, creative, marketing, and executive functions, helping turn ambiguous product goals into **implementation plans, working demonstrations, and production features**.',
        'Managed contractors, engineering sprints, feature priorities, and progress reporting to company leadership.',
      ],
    },
    {
      id: 'ai24',
      org: 'AI24 News',
      title: 'Co-Founder · Creative AI Engineer',
      bullets: [
        'Designed and built an AI-driven news application that transforms real-time news data into concise editorial experiences accompanied by automatically generated artistic illustrations.',
        'Created an **API-driven creative-content pipeline** integrating news ingestion, structured content processing, generative-image services, database storage, application state, observability, and responsive delivery.',
        'Built the application and supporting services using **Next.js, TypeScript, React, Python, FastAPI, Supabase, PostgreSQL, React Query, Jotai, Tailwind CSS, Together AI, MediaStack, and Helicone**.',
        'Developed repeatable creative-asset workflows using generative-image APIs alongside **Adobe Firefly, Photoshop, and Creative Cloud** for image generation, compositing, refinement, upscaling, formatting, and final asset preparation.',
        'Designed the system so AI-generated content could be **reviewed, corrected, and refined by a human** rather than automatically published without oversight.',
        'Experimented with **model selection, prompt construction, visual consistency, content grounding, failure handling, observability, and cost-conscious generation** across a continuous creative-production pipeline.',
        'Used **Figma and component-based interface design** to prototype editorial experiences and translate product concepts into reusable application components.',
        'Worked across **product strategy, creative direction, frontend engineering, backend services, AI integration, and content operations** as a hands-on Creative Technologist.',
      ],
    },
    {
      id: 'eden-art',
      org: 'Eden Art',
      title: 'Senior Front-End Engineer',
      bullets: [
        'Built a responsive decentralized application for creating and interacting with **multimodal AI-generated images** across desktop and mobile devices.',
        'Translated emerging generative-model capabilities into accessible creative interfaces for artists and users without machine-learning expertise.',
        'Built reusable React application architecture using **JavaScript, React Router, Hooks, Context, Lazy Loading, Suspense, Styled Components, Yarn Workspaces, and Ethereum tooling**.',
        'Integrated application state, asynchronous model outputs, wallet-based interactions, and generative-image experiences into a coherent creator-facing product.',
        'Collaborated across design, creative technology, blockchain, and engineering to prototype new modes of producing, displaying, and exchanging AI-generated artwork.',
        'Used **Figma, Photoshop, and Adobe creative tools** to evaluate interaction concepts, communicate product behavior, and refine the relationship between generated assets and interface design.',
      ],
    },
    {
      id: 'moises-tech',
      org: 'Moises.Tech',
      title: 'Creative Technologist · Full-Stack Engineer',
      location: 'New York, NY',
      period: 'April 2014–2019',
      bullets: [
        'Designed and delivered experimental software, generative-media systems, interactive installations, and creative-technology prototypes for **cultural institutions, media organizations, artists, and technology clients**.',
        'Built and deployed generative computer-vision workflows using **StyleGAN, First Order Motion Model, PyTorch, and image-processing pipelines** for creative-industry clients including **SelamX and Dazed Digital**.',
        'Used **Adobe Photoshop, Firefly, After Effects, Creative Cloud, and generative-AI tools** to create, composite, retouch, localize, animate, and prepare visual assets for digital campaigns and interactive experiences.',
        'Built and tested creative-tooling prototypes using **Figma and the Figma Plugin SDK**, exploring how design-system data, interface elements, and automated content could move between creative applications and production systems.',
        'Developed web applications, backend services, APIs, automations, and technical prototypes using **Python, FastAPI, React, Next.js, TypeScript, cloud services, and external AI APIs**.',
        'Prototyped mobile extended-reality technology for the opening of **The Shed**.',
        'Architected a live, audio-reactive virtual-reality performance for **Google NYC XR Creativity**.',
        'Worked directly with clients to understand loosely defined creative objectives, identify feasible technical approaches, produce working proofs of concept, and communicate tradeoffs involving **cost, reliability, visual quality, and production complexity**.',
        'Built systems across **AWS, Azure, Vercel, and Docker-based environments**.',
        'Completed Kubernetes coursework and hands-on orchestration labs through **Udacity** while continuing to develop production-level Kubernetes experience.',
      ],
    },
    {
      id: 'ica-miami',
      org: 'Institute of Contemporary Art, Miami',
      title: 'Digital Producer',
      location: 'Miami, FL',
      period: 'October 2019–December 2020',
      bullets: [
        'Designed and operated digital-production workflows supporting exhibitions, public programs, livestreams, and international music programming.',
        'Automated portions of the content-production process using **AI-assisted subtitling, translation, localization, video processing, After Effects, and OBS**.',
        'Managed third-party developers and production vendors across **interactive HTML5 video, WordPress, GitHub, GraphQL, Salesforce integrations, and AWS CloudFront delivery**.',
        'Helped synchronize collection and institutional data across **Salesforce, web platforms, and ticketing infrastructure**.',
        'Converted programming and curatorial requirements into practical technical workflows that could be delivered under institutional timelines and production constraints.',
      ],
    },
  ],
  selectedProject: {
    title: 'Institutional Memory Agent — Infra24',
    subtitle: 'Retrieval-Augmented AI System for Cultural Institutions',
    deliveryStatus: 'prototype',
    bullets: [
      'Built a retrieval-augmented AI agent designed to help cultural institutions search, interpret, and reuse knowledge distributed across documents and organizational records.',
      'Implemented **document ingestion, embeddings, Supabase pgvector retrieval, hybrid ranking, source grounding, and safeguards against fabricated or unsupported responses**.',
      'Designed the system as a **human-reviewable institutional tool** rather than an autonomous decision maker, preserving citations and source context within generated answers.',
      'Applied the same **RAG, grounding, retrieval, evaluation, backend-service, and API-design principles** required for client-facing enterprise AI applications.',
    ],
  },
  educationTitle: 'Education',
  education: [
    {
      id: 'cooper',
      institution: 'The Cooper Union for the Advancement of Science and Art',
      degree: 'Bachelor of Fine Arts',
    },
  ],
  continuingDevelopment: {
    title: 'Continuing Technical Development',
    subtitle: 'Udacity & Independent Technical Coursework',
    body: '**Cloud infrastructure, containerization, Kubernetes fundamentals, orchestration concepts, deployment workflows, and distributed application architecture**',
  },
  technologiesTitle: 'Selected Technologies',
  technologies: [
    {
      id: 'genai',
      label: 'Generative AI',
      items:
        '**OpenAI, Claude, Together AI, Adobe Firefly, multimodal models, image-generation APIs, prompt engineering, RAG, embeddings, vector retrieval**',
    },
    {
      id: 'languages',
      label: 'Languages',
      items: '**Python, TypeScript, JavaScript, SQL, HTML, CSS**',
    },
    {
      id: 'frameworks',
      label: 'Frameworks',
      items: '**FastAPI, React, Next.js, React Native, Node.js, Tailwind CSS, React Query**',
    },
    {
      id: 'data',
      label: 'Data',
      items: '**PostgreSQL, Supabase, pgvector, GraphQL, Salesforce**',
    },
    {
      id: 'creative',
      label: 'Creative Tools',
      items:
        '**Adobe Creative Cloud, Photoshop, After Effects, Firefly, Figma, Figma Plugin SDK, OBS**',
    },
    {
      id: 'cloud',
      label: 'Cloud & Infrastructure',
      items: '**AWS, Azure, CloudFront, Vercel, Docker, GitHub, CI/CD, Kubernetes fundamentals**',
    },
    {
      id: 'ml',
      label: 'Machine Learning',
      items:
        '**PyTorch, StyleGAN, First Order Motion Model, computer vision, generative-image workflows**',
    },
  ],
  availabilityNote:
    'Available for 100% remote contract or contract-to-hire opportunities and periodic U.S. travel.',
};

export const forwardDeployedAiEngineerOpportunity: Opportunity = {
  slug: 'forward-deployed-ai-engineer',
  status: 'active',
  listed: true,
  variant: 'role-portfolio',
  applicationBanner: forwardDeployedAiEngineerBanner,
  seo: {
    title: 'Moises Sanabria — Creative Technologist · Forward Deployed AI Engineer',
    description:
      'Creative Technologist and full-stack AI engineer — Lore Machine founding engineer, generative-AI systems, creative production, and client-facing delivery.',
    indexable: false,
  },
  visibilityNote: 'Role-specific portfolio · Forward Deployed AI Engineer',
  company: 'Forward Deployed AI',
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Creative Technologist',
        detail: 'Production fluency across software, generative media, and studio workflows.',
      },
      {
        label: 'Forward Deployed AI',
        detail: 'Client-facing engineering that turns ambiguous briefs into working systems.',
      },
      {
        label: 'Full-Stack AI Engineer',
        detail: 'Interfaces, APIs, models, pipelines, and production delivery ownership.',
      },
    ],
  },
  roleTitle: TITLE_STACK,
  heroEyebrow: TITLE_STACK,
  candidateName: 'Moises Sanabria',
  candidatePositioning: TITLE_STACK,
  heroMetaChips: [
    'Miami, Florida',
    'Remote contract or contract-to-hire',
    'Open to required U.S. travel',
  ],
  heroPrimaryCta: { label: 'View Experience', href: '#experience' },
  heroSecondaryCta: { label: 'View Capabilities', href: '#capabilities' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'experience', label: 'Experience' },
    { id: 'selected-project', label: 'AI Project' },
    { id: 'education', label: 'Education' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'I build AI systems for creative work.',
    subheadline: TITLE_STACK,
    introParagraphs: [
      'Creative Technologist and full-stack AI engineer with more than **10 years of experience** building digital products, generative-AI systems, creative tools, and client-facing technology.',
      'Founding engineer at **Lore Machine**, where I helped build a real-time AI storytelling platform that transformed text into visual narrative experiences. My work combines **generative AI, software engineering, creative production, and rapid prototyping**—from an ambiguous client brief through functional prototype and production workflow.',
      'Hands-on experience includes **Adobe Creative Cloud, Photoshop, Firefly, After Effects, Figma, Figma Plugin SDK, Python, FastAPI, React, Next.js, TypeScript, AWS, Azure, Docker, multimodal AI APIs, RAG systems, vector databases, and generative-image workflows**.',
      'Currently developing deeper **Kubernetes** proficiency through *Udacity coursework, technical labs, and container-orchestration exercises*.',
    ],
    trustLine: TITLE_STACK,
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchRows: [],
  featuredProjectIds: ['lore-machine', 'ai24'],
  skillsMatrixRows: [
    {
      category: 'Creative AI & Production',
      skills: 'Adobe Creative Cloud, Firefly, Photoshop, After Effects, Figma, generative pipelines',
      icon: 'image',
    },
    {
      category: 'AI & ML',
      skills: 'LLMs, RAG, embeddings, multimodal systems, PyTorch, StyleGAN',
      icon: 'sparkles',
    },
    {
      category: 'Full-stack',
      skills: 'Python, FastAPI, TypeScript, Next.js, Supabase, PostgreSQL',
      icon: 'code2',
    },
    {
      category: 'Forward-Deployed',
      skills: 'Discovery, prototyping, demos, stakeholder communication, delivery',
      icon: 'users',
    },
  ],
  processSectionTitle: 'From ambiguity to deployment',
  processIntro:
    'A grounded delivery motion for creative and operational AI systems — from client brief through working prototype and production workflow.',
  processSteps: [
    {
      title: 'Discover',
      description:
        'Understand the people, production environment, constraints, and actual bottleneck.',
    },
    {
      title: 'Prototype',
      description: 'Build the smallest convincing technical proof using real inputs and workflows.',
    },
    {
      title: 'Integrate',
      description:
        'Connect models, APIs, creative tools, storage, review systems, and delivery endpoints.',
    },
    {
      title: 'Harden',
      description:
        'Add validation, observability, fallbacks, permissions, testing, and human approval.',
    },
    {
      title: 'Transfer',
      description: 'Document the system and enable the client team to operate and extend it.',
    },
  ],
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    resumePrintPath: '/cv/tech/print',
    careerPacket: '/career-packet',
    caseStudiesAnchor: '#experience',
    emailSubject: 'Creative Technologist / Forward Deployed AI Engineer — Moises Sanabria',
  }),
  techLogoIds: [],
  resumeSectionTitle: 'Have an ambiguous creative AI problem?',
  resumeSectionNote:
    'I can help turn it into a prototype, production workflow, or deployable system. Résumé (Google Drive PDF), career packet, LinkedIn, and GitHub below.',
};
