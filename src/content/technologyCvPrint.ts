/**
 * Print-to-PDF technology CV — data, solutions, and full-stack product roles.
 * Open `/cv/tech/print` → Print → Save as PDF.
 */

export const technologyCvPdfPath = '/resume/moises-sanabria-technology-cv.pdf';

export const technologyCvPrint = {
  headline: 'Moises Sanabria',
  titleLine: 'Full-Stack AI Engineer',
  location: 'Miami Beach, FL 33139',
  contact: {
    phone: '(954) 588-4680',
    email: 'm@moises.tech',
    site: 'https://moises.tech/cv/tech',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    github: 'https://github.com/moisestech',
  },
  summary: [
    'Full-stack engineer who ships applied AI products end-to-end — from founding-engineer product work to client-facing solutions engineering — with current focus on AI-native, agent-orchestrated development workflows.',
  ],
  skillGroups: [
    {
      title: 'Core Languages & Frontend',
      items: [
        'JavaScript (Node.js, React, Next.js), TypeScript, HTML5/CSS3',
        'Tailwind, Jotai, XState, Shadcn',
      ],
    },
    {
      title: 'AI / GenAI Product',
      items: [
        'Applied GenAI integration, Replicate',
        'Real-time AI image/media pipelines, prompt engineering',
      ],
    },
    {
      title: 'AI-Native Development & Agentic Workflows',
      items: ['Cursor, Claude Code, n8n, Make.com, multi-tool agent orchestration'],
    },
    {
      title: 'Backend / Data',
      items: [
        'Python, SQL (MySQL, Snowflake, Athena), GraphQL',
        'Supabase, Auth0, Row-Level Security',
      ],
    },
    {
      title: 'Cloud / Infra',
      items: ['AWS (Amplify, CloudFront, S3, Kinesis, Glue ETL, SageMaker)', 'Docker'],
    },
    {
      title: 'Practice',
      items: ['Unix, Git, solutions engineering, technical education/translation'],
    },
  ],
  experienceIntro: 'Selected professional experience:',
  suggestedPdfFilename: 'Moises-Sanabria-Technology-CV.pdf',
} as const;
