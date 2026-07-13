import { AI24_WEBSITE_HERO_IMAGE, evidenceProjects, OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/evidence/projects';

export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  companyUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  note?: string;
}

export interface Skill {
  name: string;
  years?: number;
  technologies?: string[];
  /** Key in `techLogoRegistry` for category icon */
  iconId?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  period?: string;
}

export const resumeData = {
  name: 'Moises Sanabria',
  title: 'Full-Stack AI Engineer',
  location: 'Miami Beach, FL 33139',
  phone: '(954) 588-4680',
  email: 'm@moises.tech',
  linkedin: '/in/moisesdsanabria',
  github: 'github.com/moisestech',

  experience: [
    {
      company: 'Oolite Arts',
      title: 'Technical Director of Digital',
      location: 'Miami, FL',
      period: 'September 2025 – Present',
      description: [
        "Own public-facing digital infrastructure — booking systems, lab operations, equipment readiness, and signage — supporting daily artist access to Oolite's Digital Lab.",
        'Design and deliver AI, media, and digital-literacy programming that translates emerging AI/agentic tools into practical workflows for artists and cultural staff.',
        'Lead vendor coordination, fabrication/print workflows, and grant documentation across programs and operations.',
      ],
      companyUrl: 'https://oolitearts.org/digital-lab/',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      company: 'Lore Machine',
      title: 'Founding Engineer / Chief Prompt Officer',
      location: 'Miami, FL',
      period: 'June 2023 – 2025',
      description: [
        'Founding engineer (one of three) — owned the frontend application, authentication system, and AI/data API integrations for a real-time generative AI image-storytelling platform, deployed on Vercel from early prototype through production.',
        'Managed third-party contractors and sprint timelines, reporting progress directly to the CEO.',
        'Bridged technical, business, and marketing functions as the primary translator between engineering and leadership.',
      ],
      companyUrl: 'https://loremachine.world/',
      imageSrc: evidenceProjects['lore-machine'].imageSrc,
      imageAlt: evidenceProjects['lore-machine'].imageAlt,
    },
    {
      company: 'Playwire',
      title: 'Solutions Engineer',
      location: 'Boca Raton, FL',
      period: 'January 2021 – December 2021',
      description: [
        "Partnered with Business Development and client-side teams to scope and deliver publisher implementations into Playwire's SaaS product.",
        'Diagnosed and resolved front-end issues using deep JavaScript/Chrome DevTools fluency, without dependency on framework abstractions.',
      ],
      companyUrl: 'https://www.playwire.com/',
    },
    {
      company: 'Playwire',
      title: 'Data Analyst',
      location: 'Miami, FL',
      period: 'January 2022 – December 2022',
      description: [
        'Migrated ingested Kinesis data from Athena into Snowflake, improving storage scalability and query performance.',
        'Built Tableau BI tooling to visualize U.S. and international advertising-auction bidding data, supporting algorithm and performance evaluation.',
        'Set up Slack-integrated alerting for faster detection of data-consistency issues.',
      ],
      companyUrl: 'https://www.playwire.com/',
    },
    {
      company: 'Institute of Contemporary Art, Miami',
      title: 'Digital Producer',
      location: 'Miami, FL',
      period: 'October 2019 – December 2020',
      description: [
        'Managed third-party vendors delivering interactive HTML5 video, WordPress administration, GitHub workflows, GraphQL, and AWS CloudFront.',
        "Synced the museum's art collection from Salesforce into WordPress ticketing infrastructure and maintained SEO.",
        "Grew the Institute's YouTube channel through AI-driven subtitling, After Effects, and OBS livestreaming for its international music program.",
      ],
      companyUrl: 'https://icamiami.org/',
    },
    {
      company: 'Eden Art',
      title: 'Senior Front-End Engineer',
      location: 'Remote',
      period: 'January – May 2023',
      description: [
        'Built a Web3 DApp enabling multimodal AI image generation across desktop and mobile using React, React Router, Hooks, Context, Lazy/Suspense, and Styled Components.',
      ],
      companyUrl: 'https://www.eden.art/',
    },
    {
      company: 'Freelance / Moises.Tech',
      title: 'Independent Developer',
      location: 'New York, NY',
      period: 'April 2014 – 2019',
      description: [
        'Trained a StyleGAN model in PyTorch on Docker for SelamX/Dazed Digital; preprocessed a First Order Motion Model dataset.',
        "Prototyped mobile XR technology for The Shed's museum opening.",
        'Architected a live audio-reactive VR performance for Google NYC XR Creativity.',
        "Built React Native features for a banking startup's v1 release (Thumblab Inc.).",
      ],
    },
    {
      company: 'Wall Street Journal',
      title: 'Frontend Designer (Internship)',
      location: 'New York, NY',
      period: 'May – August 2013',
      description: ['Built cross-browser-compatible UI components in JavaScript/CSS.'],
    },
  ] as Experience[],

  education: [
    {
      institution: 'Cooper Union for the Advancement of Science and Art',
      degree: 'Bachelor of Fine Arts (BFA)',
      period: 'September 2011 – May 2015',
      location: 'New York, NY',
      note: 'One of three Cooper Union schools (Art, Architecture, Engineering) sharing a unified core curriculum.',
    },
  ] as Education[],

  skills: [
    {
      name: 'Core Languages & Frontend',
      technologies: [
        'JavaScript (Node.js, React, Next.js)',
        'TypeScript',
        'HTML5/CSS3',
        'Tailwind',
        'Jotai',
        'XState',
        'Shadcn',
      ],
    },
    {
      name: 'AI / GenAI Product',
      technologies: [
        'Applied GenAI integration',
        'Replicate',
        'Real-time AI image/media pipelines',
        'Prompt engineering',
      ],
    },
    {
      name: 'AI-Native Development & Agentic Workflows',
      technologies: ['Cursor', 'Claude Code', 'n8n', 'Make.com', 'Multi-tool agent orchestration'],
    },
    {
      name: 'Backend / Data',
      technologies: [
        'Python',
        'SQL (MySQL, Snowflake, Athena)',
        'GraphQL',
        'Supabase',
        'Auth0',
        'Row-Level Security',
      ],
    },
    {
      name: 'Cloud / Infra',
      technologies: ['AWS (Amplify, CloudFront, S3, Kinesis, Glue ETL, SageMaker)', 'Docker'],
    },
    {
      name: 'Practice',
      technologies: ['Unix', 'Git', 'Solutions engineering', 'Technical education/translation'],
    },
  ] as Skill[],

  projects: [
    {
      name: 'n8n Gmail Intelligence Agent',
      period: '2026',
      description:
        'Production n8n workflow with an AI Agent node that classifies incoming Gmail, applies structured label routing, and syncs recruiter/opportunity signals into Airtable for pipeline triage.',
      technologies: ['n8n', 'Gmail API', 'AI Agent node', 'Airtable', 'LLM routing'],
    },
    {
      name: 'Bookleggers — Square · Airtable · Make automation',
      period: '2026',
      description:
        'Live Make.com scenario connecting Square point-of-sale transactions to Airtable — giving Bookleggers Library staff sales and inventory visibility without manual spreadsheet handoffs.',
      technologies: ['Make.com', 'Airtable', 'Square', 'Commerce ops'],
    },
    {
      name: 'Multi-Agent Career & Productivity System',
      period: '2026',
      description:
        'Architected and operate a multi-agent AI orchestration system coordinating Claude, n8n, Airtable, and Gmail to run live application-pipeline tracking, task management, and recruiter-relationship workflows — hands-on practice in agent orchestration, tool-use design, and human-in-the-loop system architecture.',
      technologies: ['Claude', 'n8n', 'Airtable', 'Gmail', 'Agent orchestration'],
    },
    {
      name: 'AI24 News',
      description:
        'Building a realtime news web-app allowing users to generate artistic illustrations of news articles in Desktop/Mobile using ReactJS.',
      technologies: [
        'NextJS',
        'Jotai',
        'Supabase',
        'Javascript ES8',
        'React Query',
        'Tailwind',
        'React Suspense',
        'Media Stack API',
        'Together AI',
        'Helicone Observability',
      ],
      url: 'https://ai24.live',
    },
  ] as Project[],

  interests: [] as string[],
};
