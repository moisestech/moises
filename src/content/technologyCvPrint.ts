/**
 * Print-to-PDF technology CV — data, solutions, and full-stack product roles.
 * Open `/cv/tech/print` → Print → Save as PDF.
 */

export const technologyCvPdfPath = '/resume/moises-sanabria-technology-cv.pdf';

export const technologyCvPrint = {
  headline: 'Moises Sanabria',
  titleLine: 'Full Stack Web AI Engineer · Data & publisher systems · AI product',
  location: 'Miami Beach, FL — remote-friendly',
  contact: {
    email: 'm@moises.tech',
    site: 'https://moises.tech/cv/tech',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    github: 'https://github.com/moisestech',
  },
  summary: [
    'Miami-based engineer and artist-technologist with 12+ years building web applications, data pipelines, and AI product systems. Former Playwire Solutions Engineer and Data Analyst (2021–2022): publisher integrations, Kinesis-to-Snowflake pipelines, Tableau auction analytics, and Slack alerting.',
    'Since Playwire: founding engineer at Lore Machine (real-time AI storytelling on Vercel), Technical Director of Digital at Oolite Arts, and institutional stacks through AI24 and DCC Miami — hands-on delivery across TypeScript, React, Next.js, Python, AWS, and Snowflake.',
  ],
  skillGroups: [
    {
      title: 'Data & ad tech',
      items: [
        'Snowflake, SQL, Tableau, AWS Kinesis/Athena',
        'ETL pipelines, BI dashboards, Slack alerting',
        'Publisher integrations, auction performance analysis',
      ],
    },
    {
      title: 'Engineering',
      items: [
        'TypeScript, JavaScript, Python, React, Next.js',
        'API design, real-time UX, Chrome DevTools debugging',
        'Vercel, CI/CD, GraphQL, Supabase',
      ],
    },
    {
      title: 'AI product',
      items: [
        'OpenAI API, LLM workflows, generative media pipelines',
        'Rapid prototyping, MVPs, technical client communication',
      ],
    },
  ],
  experienceIntro: 'Selected professional experience (artist CV and exhibitions at moises.tech/cv/artist):',
  suggestedPdfFilename: 'Moises-Sanabria-Technology-CV.pdf',
} as const;
