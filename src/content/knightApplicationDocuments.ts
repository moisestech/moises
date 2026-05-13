/**
 * Source copy for print-to-PDF résumé and cover letter routes.
 * Generate PDFs: open the print route in a browser → Print → Save as PDF.
 * Suggested filenames: Moises-Sanabria-Technology-Product-Strategist.pdf, Moises-Sanabria-Knight-Cover-Letter.pdf
 */

export const knightResumePrint = {
  headline: 'Moises Sanabria',
  titleLine: 'Technology product strategy · AI media systems · Full-stack engineering',
  location: 'Miami, FL — open to remote',
  contact: {
    email: 'm@moises.tech',
    site: 'https://moises.tech/technology-product-strategy',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
  },
  summary: [
    'Artist-technologist and full-stack engineer with a hybrid track record across AI-assisted media, startup product delivery, public programs, and institutional digital infrastructure.',
    'Interested in evaluating and shaping technology investments that strengthen how communities access, understand, and trust public information — with emphasis on AI capabilities, product clarity, sustainability, and replicability.',
  ],
  skillGroups: [
    {
      title: 'Product / strategy',
      items: [
        'Product roadmaps and MVP scoping',
        'Emerging technology evaluation',
        'Stakeholder communication and workshops',
        'Documentation and learning artifacts',
      ],
    },
    {
      title: 'Technical',
      items: [
        'React / Next.js / TypeScript',
        'Python, APIs, cloud workflows',
        'AI-assisted production and generative pipelines',
        'Streaming, automation, and data-adjacent tooling',
      ],
    },
    {
      title: 'Media / civic information',
      items: [
        'Public-facing AI literacy and teaching',
        'Live and distributed media formats',
        'Attention, recommendation, and platform consumption models',
      ],
    },
  ],
  /** Pulled from site resume; extend dates on web CV if needed */
  experienceIntro:
    'Selected experience (see moises.tech/cv for fuller exhibition and project history):',
};

export const knightCoverLetterPrint = {
  date: 'May 2026',
  recipient: 'Knight Foundation — Journalism Program',
  salutation: 'Dear hiring team,',
  paragraphs: [
    'I am writing to apply for the Technology Product Strategist role supporting Knight Foundation’s Journalism Program. I am a Miami-based artist-technologist, full-stack engineer, and startup operator whose work sits at the intersection of AI, media systems, public programs, and institutional technology infrastructure.',
    'Across AI24 Live, Digital Culture Center Miami, and hands-on startup product roles, I have shipped user-facing software, designed AI-assisted media workflows, and led public education formats that translate complex tools into legible experiences. In parallel, my studio practice—including work on algorithmic recommendation, attention, and real-time public AI—keeps consumption behavior and trust questions in the foreground, not as an afterthought to “innovation.”',
    'The responsibilities outlined for this role align closely with how I already work: building diverse networks of technologists and cultural practitioners, evaluating what can become a maintained product versus a one-off demo, and communicating clearly through documentation, diagrams, and convenings. My time as Digital Producer at ICA Miami, and ongoing cultural technology leadership, reinforced how streaming, collection systems, and editorial tooling connect to audience trust and operational reality.',
    'I would bring to Knight a rare combination of implementation depth, product judgment, and public-facing communication. I care deeply about journalism as civic infrastructure and about philanthropy’s role in de-risking ethical, replicable technology for communities.',
    'Supporting materials, including selected case studies and frameworks for reading technology investments, are here:',
  ],
  materialsUrl: 'https://moises.tech/technology-product-strategy',
  closing:
    'Thank you for your consideration. I would welcome the opportunity to discuss how I can support Knight’s investments at the intersection of technology and news.',
  signOff: 'Sincerely,',
  name: 'Moises Sanabria',
};
