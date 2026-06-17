export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  companyUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Skill {
  name: string;
  years: number;
  technologies?: string[];
  /** Key in `techLogoRegistry` for category icon */
  iconId?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export const resumeData = {
  name: 'Moises Sanabria',
  title: 'Full Stack Web AI Engineer',
  location: 'Miami Beach, FL, 33139',
  phone: '(954) 588-4680',
  email: 'm@moises.tech',
  linkedin: '/in/moisesdsanabria',
  github: 'github.com/moisestech',

  experience: [
    {
      company: 'Oolite Arts',
      title: 'Technical Director of Digital',
      location: 'Miami, FL',
      period: 'September 2025 – 2026',
      description: [
        'Support public-facing digital infrastructure for artist access, lab operations, booking pathways, equipment readiness, signage, and documentation.',
        'Develop AI, media, and digital literacy programs that translate emerging technology into practical tools for artists and cultural communities.',
        'Coordinate vendor communication, fabrication/printing workflows, grant documentation, demos, tutorials, and leadership updates across programs and operations.',
      ],
      companyUrl: 'https://oolitearts.org/digital-lab/',
    },
    {
      company: 'Lore Machine',
      title: 'Chief Prompt Officer',
      location: 'Miami, FL',
      period: 'June 2023 – 2025',
      description: [
        'Founding engineer working in a highly accountable 3-engineering team startup environment building the frontend web application, authentication, design, and data API transactions for a real-time AI image storytelling generation platform on Vercel.',
        'Manage third party contractors, project sprints, and reporting timeline and progress to CEO. Bridge leadership gaps between technical, business and marketing.',
      ],
      companyUrl: 'https://loremachine.world/',
    },
    {
      company: 'Eden Art',
      title: 'Senior Front End Engineer',
      location: 'Remote',
      period: 'Jan 2023 – May 2023',
      description: [
        'Building a Dapp web-app allowing users to create Multimodal A.I. images from Desktop/Mobile using ReactJS.',
      ],
      technologies: [
        'Eth-tools',
        'Javascript ES8',
        'Yarn Workspaces',
        'React.Router',
        'React Hooks',
        'Context',
        'React.Lazy',
        'React.Suspense',
        'Styled Components',
      ],
    },
    {
      company: 'Playwire',
      title: 'Data Analyst',
      location: 'Miami, FL',
      period: 'January 2022 – December 2022',
      description: [
        'Work in the Data Team migrating ingested Kinesis data from Athena tables into SnowFlake for better storage scalability, computation and analysis.',
        'Create Business intelligence tools using Tableau to visualize advertising auction bidding data U.S - Internationally to gage our bidding algorithm and performance.',
        'Setup alerting tools connected to Slack for faster monitoring of data consistency and reliability.',
      ],
    },
    {
      company: 'Playwire',
      title: 'Solutions Engineer',
      location: 'Boca Raton, FL',
      period: 'January 2021 – December 2021',
      description: [
        "Technical Solutions team - worked with Business Development and Client-Side teams to determine timeline and deliver publisher solutions into Playwire's SaSS product.",
        'Find solutions with advanced knowledge of JavaScript through a strong understanding of Chrome Dev Tools and JS fundamentals demonstrating Front-End debugging skills without reliance on frameworks.',
      ],
    },
    {
      company: 'Institute of Contemporary Art, Miami',
      title: 'Digital Producer',
      location: 'Miami, FL',
      period: 'October 2019 – December 2020',
      description: [
        'Managed 3rd-party vendors product using interactive HTML5 Video, WP-Admin, Github, GraphQL and AWS Cloudfront.',
        "Synced the Museum's art collection from SalesForce to Wordpress ticketing functionality, and maintained their SEO.",
        'Tripled the Institutes Youtube Channel subscribership through A.I. driven subtitles, After Effects, and live-streaming for their international music program using OBS.',
      ],
    },
    {
      company: 'Freelance Moises.Tech',
      title: 'Independent Developer',
      location: 'New York, NY',
      period: 'April 2014 – 2019',
      description: [
        'SelamX & Dazed Digital - Trained a Machine Learning StyleGAN model in PyTorch on Docker for Kylie Jenner. Pre-processed the Dataset for a First Order Motion Model for Till Lindemann.',
        'The Shed (Arts Center) - Prototyped mobile XR technologies for museum opening. Google NYC XR Creativity - Architected live audio-reactive VR performance.',
        'Thumblab Inc. - React Native developer for banking startup implementing designs and testing, towards version 1 release.',
      ],
    },
    {
      company: 'Wall Street Journal',
      title: 'Frontend Designer',
      location: 'New York, NY',
      period: 'May – August 2013',
      description: ['UI/UX Developer building components cross browser compatible in Javascript/CSS.'],
    },
  ] as Experience[],

  education: [
    {
      institution: 'Cooper Union for the Advancement of Science and Art',
      degree: 'B.S. in Fine Arts & Creative Tech',
      period: 'September 2011 – August 2015',
      location: 'New York, NY',
    },
  ] as Education[],

  skills: [
    {
      name: 'Javascript',
      years: 12,
      iconId: 'javascript',
      technologies: [
        'NodeJS',
        'React',
        'NextJS',
        'Jotai',
        'Web AI',
        'Tailwind',
        'XState',
        'Shadcn',
        'Realtime Streaming',
        'Replicate',
        'Auth0',
        'Row Level Security',
      ],
    },
    {
      name: 'Typescript',
      years: 4,
      iconId: 'typescript',
    },
    {
      name: 'Python',
      years: 6,
      iconId: 'python',
      technologies: ['Django', 'Google Colab', 'Numpy', 'Tensorflow'],
    },
    {
      name: 'Tableau',
      years: 3,
      iconId: 'tableau',
      technologies: ['Dashboards', 'Auction analytics', 'BI reporting', 'Publisher metrics'],
    },
    {
      name: 'SQL',
      years: 3,
      iconId: 'snowflake',
      technologies: ['MySQL', 'NoSQL', 'GraphQL', 'Snowflake', 'Athena'],
    },
    {
      name: 'HTML5 / CSS3',
      years: 12,
      iconId: 'tailwind',
    },
    {
      name: 'AWS',
      years: 2,
      iconId: 'aws',
      technologies: ['Amplify', 'Docker', 'CloudFront', 'S3', 'Kinesis', 'GLUE ETL', 'SageMaker'],
    },
    {
      name: 'Unix, Git',
      years: 12,
      iconId: 'github',
    },
  ] as Skill[],

  projects: [
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

  interests: ['Creative Machine Learning', 'WebAI', 'Image Gen', 'Agentic AI'],
};
