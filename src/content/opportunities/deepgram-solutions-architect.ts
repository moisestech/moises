import type { Opportunity } from './types';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import {
  moisesSanabriaHeadshot,
  type LogoBandItem,
} from '@/content/evidence/recruitingLogoBand';
import {
  sprint2026Ctas,
  sprint2026NavItems,
  sprint2026TeachingHighlights,
  verifierBoundaryNote,
} from './shared-sprint-2026';

const jobsCdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/**
 * Deepgram AppEng logo band — customer-facing + automation stack (not partnerships).
 * JD platforms: Python/TS, cloud/containers; speech remains an honest gap, not a logo claim.
 */
export const deepgramAppEngLogoBand: LogoBandItem[] = [
  { src: `${jobsCdn}/v1778692505/jobs/python-logo_edccrx.png`, alt: 'Python', height: 40 },
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', height: 36 },
  { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript', height: 36 },
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', height: 36 },
  { src: 'https://cdn.simpleicons.org/n8n/EA4B71', alt: 'n8n', height: 36 },
  { src: `${jobsCdn}/v1783032752/jobs/airtable_logo_xserwf.png`, alt: 'Airtable', height: 36 },
  { src: `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png`, alt: 'OpenAI', height: 36 },
  { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', height: 36 },
  { src: `${jobsCdn}/v1780254976/jobs/Microsoft_Azure.svg_tzplre.png`, alt: 'Azure', height: 36 },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel', height: 36 },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub', height: 36 },
];

/**
 * Deepgram — Solutions Architect (Applied Engineer), support-focused AppEng.
 * Remote US · EST or PST · $197K–$246K base + equity + bonus.
 * Private dossier; rewrite Jul 23 against full Applied Engineering JD.
 *
 * TODO: optional Deepgram company logo + application banner when assets land.
 */
export const deepgramSolutionsArchitectOpportunity: Opportunity = {
  slug: 'deepgram-solutions-architect',
  status: 'active',
  listed: true,
  variant: 'compact',
  seo: {
    title: 'Solutions Architect (Applied Engineer) — Deepgram · Moises Sanabria',
    description:
      'Post-sales customer engagements, support automation, and API-product fluency — Playwire solutions history plus production n8n/Make automation, with an honest voice/STT gap.',
    indexable: false,
  },
  visibilityNote:
    'Private dossier — Solutions Architect / Applied Engineer (AppEng), support-focused. Remote US · EST (Miami). Do not index until application is ready.',
  company: 'Deepgram',
  roleTitle: 'Solutions Architect (Applied Engineer)',
  heroEyebrow: 'Deepgram · Applied Engineering · Remote US (EST)',
  heroMetaChips: [
    'Remote · EST (Miami)',
    'Post-sales + support automation',
    'API-first products',
    'AI-first operating rhythm',
    'Path into pre-sales / implementation',
  ],
  heroPrimaryCta: { label: 'View selected work', href: '#case-studies' },
  heroSecondaryCta: { label: 'Discuss Applied Engineering fit', href: '#resume' },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Applied Engineering',
        detail: 'Unified solutions + implementation + technical support — own post-sales engagements end to end.',
      },
      {
        label: 'Support automation',
        detail: 'Build scalable tools so common issues become self-serve; escalate only what needs engineering depth.',
      },
      {
        label: 'Customer-facing technical',
        detail: 'Playwire Solutions Engineer — publisher onboarding, JS debugging, SaaS delivery under production pressure.',
      },
      {
        label: 'AI-first workflows',
        detail: 'Production agentic automation, teaching, and daily experimentation with emerging AI tools.',
      },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Solutions Architect bridging customers, support systems, and scalable automation',
    subheadline:
      'Applied Engineer · post-sales ownership · automation builder · API product fluency',
    introParagraphs: [
      'I am applying for Deepgram’s support-focused Solutions Architect (Applied Engineer) role because it matches how I already work: own customer-facing technical problems, ship automation that reduces repeat load, and document paths so others can self-solve. My background combines Playwire Solutions Engineering, founding-engineer product delivery at Lore Machine, and production automation (n8n Gmail intelligence, Make + Square + Airtable).',
      'Deepgram’s AppEng model — solutions, implementation, and support in one team — rewards engineers who treat support as a systems problem. I am based in Miami (Eastern Time), comfortable with an AI-first operating rhythm, and ready for remote US work on EST hours. ' +
        verifierBoundaryNote,
    ],
    trustLine: 'Miami · EST remote · Playwire Solutions + Data · production automation',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit — Solutions Architect / Applied Engineer',
  roleMatchIntro:
    'Time allocation in the JD is roughly 50% direct customer engagement, 30% automation, 10% docs, 10% broader AppEng. Strongest matches are post-sales technical ownership and support automation; speech/STT depth stays an honest gap.',
  roleMatchColumnHeaders: {
    left: 'Deepgram AppEng need',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Own complete post-sales customer engagements',
      evidence:
        'Playwire Solutions Engineer: publisher implementations, JavaScript debugging, SaaS onboarding, and stakeholder communication under production constraints.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire solutions experience',
        local: true,
      },
    },
    {
      requirement: 'Escalate and resolve complex technical issues in production',
      evidence:
        'Hands-on debugging of customer integrations and data pipelines (Playwire); production automation with explicit error boundaries and human-in-the-loop gates (n8n / Make).',
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n production workflow',
        local: true,
      },
    },
    {
      requirement: 'Build automation and scalable support solutions (~30% of role)',
      evidence: automationProjectSpecs['n8n-gmail-intelligence'].evidenceLine,
      illustration: {
        src: evidenceProjects['n8n-gmail-intelligence'].imageSrc,
        alt: 'n8n Gmail intelligence — classify, label, sync',
        local: true,
      },
    },
    {
      requirement: 'Create documentation and self-service resources',
      evidence:
        'AI24 workshops and curricula that turn complex AI systems into usable workflows; runbooks and taxonomy for automation ops; institutional artist enablement at Oolite.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — enablement and documentation',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Software engineering in a modern language (Python / TypeScript / JS)',
      evidence:
        'TypeScript / Next.js product engineering (Lore Machine, AI24); Python-adjacent generative pipelines; JavaScript debugging in publisher SaaS contexts (Playwire).',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — full-stack product delivery',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'API-first products and developer-tool fluency',
      evidence:
        'Lore Machine founding engineer — LLM and generative media APIs, Vercel deployment, creator-facing product workflows and stakeholder translation.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine API product context',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'AI-first mindset — experiment, adopt, measure',
      evidence:
        'Daily use of advanced AI tools across career orchestration, workshops, and product work; AI24 teaching that models responsible experimentation, not tool theater.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 applied AI practice',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Speech recognition / Voice AI / Deepgram platform depth',
      evidence:
        '[GAP] No confirmed production speech-to-text, TTS, or Deepgram SDK integration in portfolio yet — lead with AppEng motion and automation; learn voice stack on the job with honesty.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'Applied AI context — voice depth not claimed',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Based in Eastern or Pacific Time (US remote)',
      evidence: 'Based in Miami, Florida — Eastern Time. Available for remote US full-time on EST hours.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Miami institutional base',
      },
    },
  ],
  featuredProjectIds: [
    'playwire-alumni',
    'n8n-gmail-intelligence',
    'lore-machine',
    'bookleggers-commerce-automation',
    'ai24',
  ],
  caseStudyOverrides: [
    {
      evidenceId: 'playwire-alumni',
      title: 'Playwire — Solutions Engineer under production load',
      category: 'Customer-facing technical',
      summary:
        'Owned publisher integrations and debugging for a SaaS ad-tech stack — the same muscle Deepgram needs for post-sales engagements: clear technical guidance, fast diagnosis, and stakeholder-ready communication.',
      skillTags: ['Solutions engineering', 'JavaScript', 'SaaS onboarding', 'Production troubleshooting'],
    },
    {
      evidenceId: 'n8n-gmail-intelligence',
      title: 'n8n Gmail Intelligence — support automation pattern',
      category: 'Automation · scalable support',
      summary:
        'Production workflow with an AI Agent node that classifies inbound mail, applies structured labels, and syncs signals to Airtable — a concrete example of turning repeat support load into a maintainable system.',
      skillTags: ['n8n', 'AI Agent', 'Airtable', 'Error boundaries', 'Human-in-the-loop'],
    },
    {
      evidenceId: 'lore-machine',
      title: 'Lore Machine — API product engineering',
      category: 'API-first · developer-facing',
      summary:
        'Founding-engineer work on a generative storytelling platform — LLM APIs, product interfaces, and translating model behavior into creator-usable workflows without overstating voice-platform expertise.',
      skillTags: ['TypeScript', 'Next.js', 'LLM APIs', 'Product delivery'],
      href: 'https://loremachine.world/',
      linkLabel: 'View Lore Machine',
    },
    {
      evidenceId: 'bookleggers-commerce-automation',
      title: 'Bookleggers — Make + Square + Airtable',
      category: 'Ops automation',
      summary:
        'Live commerce sync for a nonprofit bookstore — field maps, sync reliability, and documentation so nontechnical operators can trust the system.',
      skillTags: ['Make.com', 'Square', 'Airtable', 'Ops documentation'],
    },
    {
      evidenceId: 'ai24',
      title: 'AI24 — docs, teaching, self-serve enablement',
      category: 'Documentation · enablement',
      summary:
        'Workshops and programs that help practitioners adopt AI tools independently — aligned with Deepgram’s need for guides and self-service that reduce ticket volume.',
      skillTags: ['Teaching', 'Runbooks', 'AI literacy', 'Enablement'],
      href: 'https://ai24.live',
    },
  ],
  caseStudiesSectionTitle: 'Selected proof',
  caseStudiesIntro:
    'Five contexts that map to AppEng: customer-facing solutions, support automation, API product engineering, ops reliability, and enablement docs.',
  caseStudyColumns: 2,
  teachingHighlights: sprint2026TeachingHighlights,
  skillsSectionTitle: 'Applied Engineering capabilities',
  skillsMatrixRows: [
    {
      category: 'Customer engagements',
      skills: 'Post-sales ownership, escalation triage, stakeholder communication, production debugging',
      icon: 'users',
    },
    {
      category: 'Support automation',
      skills: 'n8n AI Agent workflows, Make.com, Airtable routing, taxonomy, error handling, self-serve patterns',
      icon: 'workflow',
    },
    {
      category: 'Engineering',
      skills: 'TypeScript, JavaScript, Next.js, Python-adjacent pipelines, REST APIs, GitHub, Vercel',
      icon: 'code2',
    },
    {
      category: 'Enablement',
      skills: 'Technical writing, workshops, runbooks, translating complex systems for nontechnical users',
      icon: 'fileText',
    },
    {
      category: 'Boundaries',
      skills: 'No unverified speech/STT/Deepgram SDK claims — voice depth is a growth area',
      icon: 'shield',
    },
  ],
  processSectionTitle: 'How I work in Applied Engineering',
  processIntro:
    'Treat support as a systems problem: stabilize the customer, encode the pattern, document the path, feed product.',
  processSteps: [
    {
      title: 'Stabilize the customer engagement',
      description: 'Clarify the failure mode, reproduce, and restore confidence with clear technical guidance.',
      logoIds: ['typescript', 'javascript'],
    },
    {
      title: 'Diagnose with production discipline',
      description: 'Trace APIs, logs, and integration boundaries — prefer evidence over guesswork.',
      logoIds: ['python', 'github'],
    },
    {
      title: 'Encode the fix as automation when it repeats',
      description: 'If the pattern will recur, build a workflow or self-serve tool instead of only resolving once.',
      logoIds: ['n8n', 'airtable'],
    },
    {
      title: 'Document for self-serve',
      description: 'Leave guides and runbooks so customers and teammates can resolve similar issues without an escalation.',
      logoIds: ['openai'],
    },
    {
      title: 'Feed product and AppEng',
      description: 'Surface ticket patterns to engineering and share knowledge so pre-sales and implementation stay unblocked.',
    },
  ],
  innovationLabSectionTitle: 'Honest gaps & fit',
  innovationLabLead: 'AppEng motion is strong — Voice AI depth is the growth edge',
  innovationLabBody:
    'My strongest fit is the Applied Engineering blend Deepgram describes: customer-facing technical ownership, automation that reduces support load, and documentation that enables self-serve. I do not claim production speech-to-text or Deepgram platform experience yet; that is a learning curve I would take seriously while leading with solutions + automation evidence. Miami EST satisfies the Eastern Time requirement for this remote US role.',
  ctas: sprint2026Ctas('Deepgram Solutions Architect — Applied Engineer'),
  animatedLogoBand: deepgramAppEngLogoBand,
  techLogoIds: [
    'python',
    'typescript',
    'javascript',
    'react',
    'nextjs',
    'n8n',
    'airtable',
    'openai',
    'docker',
    'azure',
    'vercel',
    'github',
  ],
  resumeSectionTitle: 'Application',
  resumeSectionNote:
    'Lead with Playwire Solutions + production automation + API product work. Keep Voice AI gap explicit. EST remote · $197K–$246K base range noted in JD.',
};
