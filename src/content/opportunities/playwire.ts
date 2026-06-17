import type { Opportunity } from './types';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { evidenceProjects } from '@/content/evidence/projects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export const playwireOpportunity: Opportunity = {
  slug: 'playwire',
  status: 'active',
  listed: false,
  variant: 'compact',
  applicationBanner: {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
    alt: 'Playwire RAMP publisher journey — concept application dossier',
    aspectClass: 'aspect-[3/1] max-h-[220px]',
  },
  seo: {
    title: 'Playwire return dossier — Moises Sanabria | moises.tech',
    description:
      'Former Playwire Data & Solutions (2021–2022). Interactive RAMP publisher journey demo, role-fit evidence, and technical dossier for return conversations.',
    indexable: false,
  },
  audienceLine:
    'Private dossier for Playwire return conversations — Data, Solutions Engineering, or Product Engineering (Miami / remote).',
  company: 'Playwire',
  roleTitle: 'Data · Solutions · Product Engineering',
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'publisher-demo', label: 'Demo' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Approach' },
    { id: 'resume', label: 'Résumé' },
  ],
  hero: {
    headline: 'Publisher-facing systems — Data, Solutions & Product',
    subheadline: 'Snowflake pipelines · publisher integrations · Next.js product demos',
    introParagraphs: [
      'I spent two years at Playwire on Solutions Engineering and the Data team — publisher integrations, JavaScript debugging, Kinesis-to-Snowflake pipelines, Tableau auction analytics, and Slack alerting for data reliability.',
      'Since then I have shipped as a founding engineer at Lore Machine and built institutional stacks through AI24 and DCC Miami. This dossier includes an interactive publisher journey demo grounded in RAMP, PARMM, and Flex Suite — the questions publishers ask before switching stacks.',
    ],
    trustLine: 'Former Playwire Data + Solutions (2021–2022) · Miami-based · flexible on Data, Solutions, or Product Engineering',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Why a return makes sense',
  roleMatchIntro:
    'Flexible across Data, Solutions, and Product Engineering — I already know publisher workflows from inside the house and have deepened full-stack and product delivery since.',
  roleMatchColumnHeaders: {
    left: 'Capability',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Publisher data pipelines',
      evidence:
        'Data Analyst: Kinesis ingestion → Athena → Snowflake migration; auction bidding BI in Tableau; Slack alerting for consistency and reliability.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — former Data team pipelines and analytics',
        local: true,
      },
    },
    {
      requirement: 'Publisher technical delivery',
      evidence:
        'Solutions Engineer: timeline scoping with BD and client teams, JavaScript debugging via Chrome DevTools, delivering publisher solutions into Playwire SaaS.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — Solutions Engineering publisher integrations',
        local: true,
      },
    },
    {
      requirement: 'Real-time analytics UX',
      evidence:
        'Interactive RAMP mock dashboard on this page; Lore Machine product work with live generation and API-backed flows.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — real-time product UI and API flows',
      },
    },
    {
      requirement: 'Ad-tech domain knowledge',
      evidence:
        'Two years in-house plus current homework on RAMP Managed/Self-Service, Flex Suite, PARMM, and QPT yield framing.',
      illustration: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
        alt: 'RAMP publisher journey concept demo',
      },
    },
    {
      requirement: 'Full-stack shipping',
      evidence:
        'Next.js, TypeScript, React, AWS patterns across Lore Machine, DCC Miami, and this dossier.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'DCC Miami — institutional Next.js platform',
      },
    },
    {
      requirement: 'AI / ML adjacent',
      evidence:
        'Lore Machine and AI24 — LLM workflows and automation; honest gap on production ML model ownership at ad-tech scale.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — applied AI systems and automation',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
  ],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'digital-culture-infrastructure', 'ai24'],
  caseStudiesSectionTitle: 'Selected work',
  caseStudiesIntro:
    'Playwire experience is described without proprietary screenshots. Public product and institutional work below reflects skills transferable to RAMP.',
  skillsSectionTitle: 'Core technical skills',
  skillsMatrixRows: [
    { category: 'Data', skills: 'Snowflake, SQL, Tableau, Kinesis, Athena, ETL pipelines, Slack alerting', icon: 'lineChart' },
    { category: 'Languages', skills: 'TypeScript, JavaScript, Python', icon: 'code2' },
    { category: 'Frontend', skills: 'React, Next.js, publisher integration debugging, responsive dashboards', icon: 'layers' },
    { category: 'Cloud', skills: 'AWS (Kinesis, analytics), Vercel, CI/CD patterns', icon: 'cloud' },
    { category: 'Publisher ops', skills: 'Client timelines, technical solutions delivery, auction performance analysis', icon: 'users' },
    { category: 'Product', skills: 'Prototyping, real-time UX, institutional and startup execution', icon: 'rocket' },
  ],
  processSectionTitle: 'How I approach publisher systems',
  processIntro:
    'Start from the publisher question — traffic, format mix, ops capacity, transparency — then map to data, integration, and UX that makes yield legible.',
  processSteps: [
    {
      title: 'Listen to the publisher workflow',
      description: 'Vertical, traffic, current stack, and what “success” means for revenue vs. UX.',
      logoIds: ['tableau', 'snowflake'],
    },
    {
      title: 'Map data and integration paths',
      description: 'Pipelines, alerting, and the technical surface area for onboarding.',
      logoIds: ['aws', 'snowflake'],
    },
    {
      title: 'Prototype dashboards and tools',
      description: 'Real-time visibility mockups and client-facing demos stakeholders can react to.',
      logoIds: ['nextjs', 'react', 'typescript'],
    },
    {
      title: 'Ship, monitor, iterate',
      description: 'Alerting, consistency checks, and tight feedback loops with yield and solutions teams.',
      logoIds: ['github', 'aws'],
    },
  ],
  innovationLabSectionTitle: 'Positioning',
  innovationLabLead: 'Publisher-first systems thinking',
  innovationLabBody:
    'Playwire’s thesis — transparency, performance, and revenue control for publishers — is the lens I used for this demo. I want to bring data pipeline discipline, solutions delivery habits, and product shipping velocity back to the team building RAMP.',
  ctas: recruitingCtas({
    emailSubject: 'Playwire — Moises Sanabria dossier',
    caseStudiesAnchor: '#case-studies',
    resumePrintPath: '/cv',
    cv: '/cv',
  }),
  techLogoIds: ['snowflake', 'tableau', 'aws', 'typescript', 'react', 'nextjs', 'python'],
  visibilityNote:
    'Private link — not listed on the public opportunities index. Share with Jarrett Abello, HR, or hiring managers only.',
  resumeSectionTitle: 'Résumé & CV',
  resumeSectionNote:
    'Full CV at /cv. Former Playwire roles: Solutions Engineer (2021), Data Analyst (2022). Open to Miami, Boca Raton, or remote.',
};
