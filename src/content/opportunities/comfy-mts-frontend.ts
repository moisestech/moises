import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import {
  comfyCompanyLogos,
  comfyFrontendSkillLogoBand,
  moisesSanabriaHeadshot,
} from '@/content/evidence/recruitingLogoBand';
import { evidenceProjects } from '@/content/evidence/projects';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { comfyMtsFrontendBanner } from '@/content/evidence/applicationBanners';

const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

/**
 * Comfy — Member of Technical Staff, Frontend
 * https://www.comfy.org/careers
 *
 * Accuracy notes:
 * - Lore Machine founding FE / generative product work is verified.
 * - Lore Machine generative-image connection ran on ComfyUI; Moises collaborated with Martin
 *   on building and architecture of that connection (not sole ownership of ComfyUI_frontend).
 * - Do not claim Vue/LiteGraph production shipping — link example repo / Coming soon until ready.
 * - Certificates and skill-gap areas are visual Coming soon placeholders.
 */

const ROLE_TITLE = 'Member of Technical Staff, Frontend';
const COMPANY = 'Comfy';

const rolePortfolio: RolePortfolioDossier = {
  fitSectionTitle: 'What this role needs — and what already matches',
  fitIntro:
    'Comfy hires builders who use ComfyUI, ship in the open, and care about creator control. I have already worked inside a production system where **ComfyUI powered generative-image workflows**, collaborating with **Martin** on the connection’s build and architecture. The remaining gap is Vue/LiteGraph fluency inside **ComfyUI_frontend** — owned honestly as Coming soon evidence, not claimed expertise.',
  fitPillars: [
    {
      id: 'production-genai-frontend',
      title: 'Production creative-AI frontend ownership',
      body: 'Founding engineer at Lore Machine — owned product interfaces, authentication, API integrations, and creator-facing workflows for a real-time generative storytelling platform shipped on Vercel.',
    },
    {
      id: 'comfyui-connection',
      title: 'ComfyUI in a shipped generative pipeline',
      body: 'At Lore Machine, generative-image work ran through **ComfyUI**. I collaborated with **Martin** on building and architecting that connection — workflow surfaces, generation handoff, and the product path creators actually used.',
    },
    {
      id: 'creator-user-understanding',
      title: 'Artist + engineer product judgment',
      body: 'I understand how creators review generations, manage workflow complexity, and need reliable interfaces — not demos that hide failure modes.',
    },
    {
      id: 'stack-transfer',
      title: 'Frontend craft transferring into Vue',
      body: 'Deep React / Next.js / TypeScript product experience. Vue, LiteGraph, Vitest, and Playwright are active growth areas — example repo and certificates land in Coming soon, not as established claims.',
    },
  ],
  evidenceRoadmap: {
    title: 'Evidence roadmap — make the fit visible',
    intro:
      'Primary proof is the live Vue monorepo + Vercel demo. Lore Machine × ComfyUI (with Martin) remains production context. OSS PR into ComfyUI_frontend is still open.',
    items: [
      {
        id: 'lore-comfyui',
        title: 'Lore Machine × ComfyUI connection (with Martin)',
        status: 'ready',
        body: 'Production generative-image path ran on **ComfyUI**. Collaborated with **Martin** on building and architecture of that connection — frontend/product ownership on Moises’s side, joint systems work on how workflows entered the product. Not sole graph-infrastructure ownership.',
        href: lore.href,
        linkLabel: 'Lore Machine',
        imageSrc: lore.imageSrc,
        imageAlt: lore.imageAlt,
      },
      {
        id: 'example-repo',
        title: 'Output Provenance Explorer (Vue monorepo)',
        status: 'ready',
        body: 'Public **Vue 3.5 + TypeScript** pnpm monorepo — Zod-validated workflow parse, upstream graph trace, three-panel demo shell, CI, and docs. Unofficial ComfyUI experiment; not affiliated with Comfy Org.',
        href: 'https://github.com/moisestech/comfyui-output-provenance',
        linkLabel: 'View repository',
      },
      {
        id: 'prototype',
        title: 'Live hosted demo (foundation slice)',
        status: 'ready',
        body: 'GPU-free standalone demo on Vercel: select an output, see upstream path, inspect parameters. **Milestone 0 complete · Milestone 1 next.** Extension package is architecture stubs — not installable.',
        href: 'https://comfyui-output-provenance.vercel.app',
        linkLabel: 'Open live demo',
      },
      {
        id: 'demo-package',
        title: 'Docs hub · architecture · roadmap · QA',
        status: 'ready',
        body: 'Application package linked: docs hub, roadmap (done vs left), architecture, testing, performance budgets (targets only), and portfolio evidence map.',
        href: 'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/README.md',
        linkLabel: 'Docs & roadmap',
      },
      {
        id: 'oss-pr',
        title: 'Focused ComfyUI_frontend contribution',
        status: 'todo',
        body: 'Still open — one focused PR in Comfy-Org/ComfyUI_frontend. Not claimed yet.',
        href: 'https://github.com/Comfy-Org/ComfyUI_frontend/blob/main/CONTRIBUTING.md',
        linkLabel: 'ComfyUI frontend contributing guide',
      },
    ],
  },
  comingSoon: {
    title: 'Honest ramp areas',
    intro:
      'Deepest production frontend experience is React and Next.js. This project uses Vue 3.5 deliberately to transfer into Comfy’s current frontend conventions — not to rewrite that history. At Lore Machine, owned customer-facing product layers around generation and review; collaborated on ComfyUI-powered workflows; was not the sole architect of underlying ComfyUI graph infrastructure.',
    items: [
      {
        id: 'vue-certificate',
        kind: 'cert',
        title: 'Vue.js certificate',
        certCredential: 'Mid-Level Vue.js Developer',
        certIssuer: 'Vue.js curriculum · pending enrollment',
        certHolder: 'Moises Sanabria',
        certId: 'PENDING',
        body: 'Optional certificate only — ranked below the shipped Vue monorepo, live demo, and a focused OSS PR.',
        badge: 'Coming soon',
      },
      {
        id: 'comfyui-frontend-fluency',
        kind: 'skill',
        title: 'LiteGraph / PrimeVue / Electron fluency',
        body: 'Deeper day-to-day fluency inside ComfyUI_frontend patterns — Pinia stores, LiteGraph canvas, Electron-specific behavior. Vitest + Playwright already ship in the example repo (not as a “credential”).',
      },
      {
        id: 'expert-interviews',
        kind: 'research',
        title: 'Creator / expert discovery notes',
        body: 'Interview themes from working ComfyUI users — feeding Milestone 1 fixtures and product rationale.',
      },
      {
        id: 'demo-video',
        kind: 'demo',
        title: 'Two-minute silent product demo',
        body: 'Screen recording of the live Vue demo with architecture callouts — still pending.',
      },
      {
        id: 'extension',
        kind: 'skill',
        title: 'Installable Comfy sidebar extension',
        body: 'Architecture stubs exist in `packages/comfy-extension` — not installable. Milestone 4.',
      },
      {
        id: 'oss-pr-open',
        kind: 'repo',
        title: 'ComfyUI_frontend OSS PR',
        body: 'Focused upstream contribution still open — do not claim merged work.',
        href: 'https://github.com/Comfy-Org/ComfyUI_frontend/blob/main/CONTRIBUTING.md',
        linkLabel: 'Contributing guide',
      },
    ],
  },
  capabilityMap: {
    title: 'Capabilities that transfer — and the Comfy stack still to prove',
    subtitle:
      'Established strengths first. Vue, LiteGraph, Vitest, Playwright, and Electron-specific frontend behavior stay in Coming soon until shipped evidence exists.',
    groups: [
      {
        id: 'frontend-craft',
        title: 'Frontend product engineering',
        items: [
          '**TypeScript, React, Next.js, responsive interfaces, design systems, authentication flows, creator-facing product UI, state management, and interactive prototyping**',
        ],
      },
      {
        id: 'comfyui-systems',
        title: 'ComfyUI in production (with Martin)',
        items: [
          '**Collaborated with Martin on building and architecting Lore Machine’s ComfyUI generative-image connection** — workflow handoff into product UI, generation status, and creator-facing review paths',
        ],
      },
      {
        id: 'genai-product',
        title: 'Generative creative systems',
        items: [
          '**Prompt systems, multimodal generation workflows, generative-image pipelines, human review of AI outputs, failure handling, and translating experimental models into usable product features**',
        ],
      },
      {
        id: 'creator-ux',
        title: 'Creator-facing product judgment',
        items: [
          '**Artist/engineer dual practice, visual review workflows, hiding vs exposing workflow complexity, and interfaces that stay reliable under ambiguous creative goals**',
        ],
      },
    ],
    currentlyExtending: [
      'Vue 3 Composition API / <script setup>',
      'Pinia',
      'PrimeVue',
      'LiteGraph / node-canvas interactions',
      'Vitest + Playwright against ComfyUI_frontend patterns',
      'Electron-specific frontend behavior',
      'Storybook for UI isolation',
    ],
    closingStatement:
      'Comfy’s stack is **Vue 3, TypeScript, Tailwind, Pinia, PrimeVue, Vitest, Playwright, Storybook, Electron, LiteGraph**. My production depth is **React/Next/TypeScript creative-AI product engineering** plus **ComfyUI pipeline architecture with Martin at Lore Machine**. Vue/LiteGraph product UI proof ships via the Coming soon track.',
  },
  experienceRolesTitle: 'Relevant experience',
  experienceRolesIntro:
    'Roles that demonstrate frontend ownership of generative creative products — including ComfyUI-backed image generation.',
  experienceRoles: [
    {
      id: 'lore-machine',
      org: 'Lore Machine',
      title: 'Founding Engineer · Chief Prompt Officer',
      period: 'June 2023 – 2025',
      bullets: [
        'One of three founding engineers building a **real-time generative-AI storytelling platform** that turned written narratives into structured, illustrated visual experiences.',
        'Owned **responsive product interfaces, authentication, application architecture, data transactions, API integrations, and creator-facing workflows** deployed on **Vercel**.',
        'Generative-image work **ran on ComfyUI**. Collaborated with **Martin** on **building and architecting that connection** — how workflows entered the product, how generations returned, and how creators operated the path.',
        'Developed **prompt systems and multimodal-generation workflows** connecting language models, image-generation systems, narrative structure, and visual output.',
        'Translated experimental generative-model capabilities into product features creators and nontechnical users could operate reliably — including status, iteration, and failure-aware UX.',
        'Used **Figma, Photoshop, Adobe Creative Cloud, and generative-AI tools** to prototype experiences and communicate across engineering, design, marketing, and leadership.',
        'Managed contractors, sprints, priorities, and progress reporting while shipping from early prototype through production.',
      ],
    },
    {
      id: 'ai24',
      org: 'AI24 News',
      title: 'Co-Founder · Creative AI Engineer',
      bullets: [
        'Built an AI-driven news application with an **API-driven creative-content pipeline** — ingestion, generative illustrations, database storage, observability, and responsive delivery.',
        'Designed human-reviewable AI content flows so generations could be **corrected and refined before publication**.',
        'Stack included **Next.js, TypeScript, React, Python, FastAPI, Supabase, PostgreSQL, React Query, Jotai, Tailwind CSS, Together AI, and Helicone**.',
      ],
    },
    {
      id: 'eden-art',
      org: 'Eden Art',
      title: 'Senior Front-End Engineer',
      period: 'January – May 2023',
      bullets: [
        'Built a responsive dApp for creating and interacting with **multimodal AI-generated images** across desktop and mobile.',
        'Translated emerging generative-model capabilities into accessible creative interfaces for artists without ML expertise.',
      ],
    },
  ],
  selectedProject: {
    title: 'Lore Machine × ComfyUI — generative-image connection (with Martin)',
    subtitle: 'Founding-engineer case study · ComfyUI-backed creative-AI product',
    deliveryStatus: 'deployed',
    imageSrc: lore.imageSrc,
    imageAlt: lore.imageAlt,
    href: lore.href,
    linkLabel: 'Open Lore Machine',
    bullets: [
      '**Problem:** turn long-form stories into sequences of generated visual scenes without requiring creators to operate raw model tooling.',
      '**ComfyUI:** generative-image work in the product **ran on ComfyUI**.',
      '**Collaboration:** worked with **Martin** on **building and architecting the ComfyUI connection** — systems design of the handoff, not a claim of sole ownership of ComfyUI itself or of Vue/LiteGraph frontend expertise.',
      '**Ownership (Moises):** frontend application, authentication, AI/data API integrations, prompt workflows, and product implementation across a three-person founding engineering team.',
      '**Creator UX:** hide or expose workflow complexity carefully; support iteration, review, and reliable operation for nontechnical users.',
      '**Stack context:** TypeScript / Next.js product on **Vercel**, with ComfyUI as the generative-image execution path alongside other model tooling used during the product’s life.',
    ],
  },
  selectedProjectSectionTitle: 'Selected case study',
  caseStudiesTitle: 'Related creative-AI product surfaces',
  caseStudiesIntro:
    'Adjacent shipped interfaces that show creator-facing generative product craft. Placeholders remain honest where Vue/ComfyUI_frontend proof is still shipping.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: lore.title,
      category: lore.category,
      ambiguity: 'Narrative → illustrated scene sequences without exposing raw model tooling.',
      stakeholders: 'Founding team, creators, nontechnical narrative authors.',
      ownership: 'Frontend, auth, API integrations, prompt workflows; ComfyUI connection architecture with Martin.',
      systemBuilt: 'Real-time generative storytelling product on Vercel with ComfyUI-backed image path.',
      production: 'Shipped production product used by creators.',
      outcome: 'Creators could iterate stories into visual sequences with reviewable generation flows.',
      roleConnection: 'Direct ComfyUI production experience + creator UI ownership for Comfy MTS Frontend.',
      skillTags: lore.skillTags,
      href: lore.href,
      linkLabel: 'Lore Machine',
      imageSrc: lore.imageSrc,
      imageAlt: lore.imageAlt,
      evidenceStatus: 'demonstrated',
      deliveryStatus: 'deployed',
    },
    {
      id: 'ai24',
      title: ai24.title,
      category: ai24.category,
      ambiguity: 'Make generative pipelines reviewable before publication.',
      stakeholders: 'Editors, illustrators, product users.',
      ownership: 'Creative AI engineering — content pipeline, review loops, responsive delivery.',
      systemBuilt: 'AI-driven news application with generative illustration pipeline.',
      production: 'Live product surfaces and editorial review flows.',
      outcome: 'Human-correctable AI content before publish.',
      roleConnection: 'Transferable creator-review UX and TypeScript product craft.',
      skillTags: ai24.skillTags,
      href: ai24.href,
      linkLabel: 'AI24',
      imageSrc: ai24.imageSrc,
      imageAlt: ai24.imageAlt,
      evidenceStatus: 'transferable',
      deliveryStatus: 'deployed',
    },
  ],
  creative: {
    title: 'Creator-facing generative production',
    lead: 'Interfaces that keep generative complexity operable — status, iteration, and review — without pretending the model always succeeds.',
    points: [
      'Hide vs expose workflow depth based on the creator’s actual job in the moment.',
      'Treat loading, empty, error, and partial-success as product surfaces, not polish.',
      'Collaborate across engineering and creative tooling (ComfyUI path with Martin at Lore Machine).',
    ],
    imageSrc: lore.imageSrc,
    imageAlt: lore.imageAlt,
  },
  principlesTitle: 'How I would ship inside ComfyUI_frontend',
  principles: [
    { id: 'focused', text: 'One focused PR — not an unsolicited redesign.' },
    { id: 'tests', text: 'TypeScript correctness, Vitest, and Playwright before asking for review.' },
    { id: 'states', text: 'Loading, empty, error, and partial-success states are product work, not polish.' },
    { id: 'respect', text: 'Prototype as exploration informed by creators — not “Comfy should adopt my feature.”' },
    { id: 'honest', text: 'Vue/LiteGraph proof via example repo and PRs — never overclaim the stack transfer.' },
  ],
  technologiesTitle: 'Selected technologies',
  technologies: [
    {
      id: 'established',
      label: 'Established',
      items:
        '**TypeScript, React, Next.js, Tailwind CSS, Node.js, ComfyUI (Lore Machine generative-image connection with Martin), Stable Diffusion / Replicate workflows, Figma, product UI architecture, Vercel**',
    },
    {
      id: 'comfy-target',
      label: 'Comfy frontend target stack (Coming soon)',
      items:
        '**Vue 3 Composition API, Pinia, PrimeVue, LiteGraph, Vitest, Playwright, Storybook, Electron frontend patterns**',
    },
    {
      id: 'not-chasing',
      label: 'Not leading with',
      items:
        'Certificate stacks as the primary credential — Vue cert may appear visually as Coming soon, but shipping evidence ranks first.',
    },
  ],
  availabilityNote:
    'Open to Comfy’s San Francisco–based Member of Technical Staff, Frontend role. Application package prioritizes Lore Machine × ComfyUI (with Martin), then GitHub evidence as Coming soon items ship.',
};

export const comfyMtsFrontendOpportunity: Opportunity = {
  slug: 'comfy-mts-frontend',
  status: 'active',
  listed: false,
  variant: 'role-portfolio',
  applicationBanner: comfyMtsFrontendBanner,
  seo: {
    title: 'Moises Sanabria — Comfy · Member of Technical Staff, Frontend',
    description:
      'Comfy MTS Frontend work sample — Output Provenance Explorer live Vue demo + repo, Lore Machine × ComfyUI case study, honest Vue ramp.',
    indexable: false,
  },
  visibilityNote: `Role-specific portfolio · ${COMPANY} · ${ROLE_TITLE}`,
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'Comfy',
        detail: 'Open visual AI platform — ComfyUI for creators who want control, quality, and scale.',
      },
      {
        label: 'MTS Frontend',
        detail: 'Member of Technical Staff, Frontend — Vue/TypeScript product UI on ComfyUI_frontend.',
      },
      {
        label: 'Builders who ship',
        detail: 'Use ComfyUI, contribute upstream, show work — not credential stacks.',
      },
    ],
  },
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  heroEyebrow: `${COMPANY} · ${ROLE_TITLE}`,
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Founding frontend engineer · ComfyUI pipeline collaborator · creative technologist',
  heroMetaChips: [
    'San Francisco–oriented role',
    'Private application dossier',
    'ComfyUI × Lore Machine',
  ],
  heroPrimaryCta: { label: 'Open live demo', href: 'https://comfyui-output-provenance.vercel.app' },
  heroSecondaryCta: {
    label: 'View repository',
    href: 'https://github.com/moisestech/comfyui-output-provenance',
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'credibility', label: 'Proof' },
    { id: 'comfyui-experience', label: 'Lore × ComfyUI' },
    { id: 'work-sample', label: 'Work sample' },
    { id: 'role-fit', label: 'Role fit' },
    { id: 'engineering', label: 'Approach' },
    { id: 'ramp', label: 'Ramp' },
    { id: 'provenance-explorer', label: 'Illustration' },
    { id: 'selected-work', label: 'Work' },
    { id: 'process', label: 'Sprint' },
    { id: 'contact', label: 'Contact' },
  ],
  companyLogoSrc: comfyCompanyLogos.light,
  companyLogoSrcDark: comfyCompanyLogos.dark,
  companyLogoAlt: comfyCompanyLogos.alt,
  animatedLogoBand: comfyFrontendSkillLogoBand,
  skillsSectionTitle: 'Skills map — established vs Coming soon',
  hero: {
    headline:
      'Building visual AI interfaces with the control of an engineer and the instincts of a working artist.',
    subheadline:
      'Founding frontend engineer and creative technologist. Lore Machine incorporated ComfyUI-powered image workflows; collaborated with Martin on that connection. Live Vue work sample: Output Provenance Explorer.',
    introParagraphs: [
      'Primary proof: **live Vue demo** + **GitHub monorepo** for Output Provenance Explorer (Milestone 0). Unofficial ComfyUI project — not affiliated with Comfy Org.',
      'Production context: Lore Machine × ComfyUI with Martin. Honest ramp: React/Next depth transferring into Vue 3.5 — not sole Comfy graph ownership.',
    ],
    trustLine: 'Miami-based · Open to relocating to San Francisco',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchRows: [],
  featuredProjectIds: ['lore-machine', 'multimodal-image-systems', 'ai24'],
  skillsMatrixRows: [
    {
      category: 'Frontend',
      skills: 'TypeScript, React, Next.js — Vue / LiteGraph in Coming soon',
      icon: 'code2',
    },
    {
      category: 'ComfyUI',
      skills: 'Lore Machine generative-image connection — architecture with Martin',
      icon: 'image',
    },
    {
      category: 'Product',
      skills: 'Founding-engineer ownership, ambiguous briefs → shipped interfaces',
      icon: 'sparkles',
    },
    {
      category: 'Proof plan',
      skills: 'Example Vue repo + ComfyUI_frontend PR + demo (Coming soon)',
      icon: 'target',
    },
  ],
  processSectionTitle: 'Focused sprint — first ~10 days of proof',
  processIntro:
    'A realistic evidence sprint aligned with Comfy’s contributor expectations. Not every day is calendar-literal — the sequence is what matters.',
  processSteps: [
    {
      title: 'Repository fluency',
      description:
        'Run ComfyUI_frontend locally (and Electron where needed). Read CONTRIBUTING. Trace one Vue feature component → store → tests. Run Vitest and Playwright. Identify 2–3 candidate issues.',
    },
    {
      title: 'Product discovery',
      description:
        'Interview expert ComfyUI users. Capture repeated pain. Select one narrow problem. Write the product rationale before coding.',
    },
    {
      title: 'Build the prototype / example repo',
      description:
        'Publish the Coming soon Vue/TypeScript example (or prototype) with state, empty/loading/error paths, unit tests, and one or two Playwright flows.',
    },
    {
      title: 'Open-source proof',
      description:
        'Open a focused PR or issue contribution with reproduction steps, screenshots/video, and implementation rationale. Respond professionally to review.',
    },
    {
      title: 'Application package',
      description:
        'Record the demo, refresh this opportunity page with live links (repo, cert badge if ready), and submit with GitHub + demo + résumé.',
    },
  ],
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    resumePrintPath: '/cv/tech/print',
    careerPacket: '/career-packet',
    caseStudiesAnchor: '#evidence',
    emailSubject: 'Comfy — Member of Technical Staff, Frontend — Moises Sanabria',
    github: 'https://github.com/moisestech',
  }),
  techLogoIds: ['comfyui', 'vue', 'typescript', 'react', 'nextjs', 'tailwind', 'github'],
  resumeSectionTitle: 'Ready to review the evidence as it ships?',
  resumeSectionNote:
    'GitHub, Drive résumé, career packet, and email below. Coming soon cards update as the Vue example repo, certificates, and ComfyUI_frontend proof land.',
};
