import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { evidenceProjects } from '@/content/evidence/projects';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { comfyMtsFrontendBanner } from '@/content/evidence/applicationBanners';

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
      'Verified production story first (Lore Machine × ComfyUI with Martin). Visible Vue/ComfyUI_frontend proof ships next — items below update as artifacts land.',
    items: [
      {
        id: 'lore-comfyui',
        title: 'Lore Machine × ComfyUI connection (with Martin)',
        status: 'ready',
        body: 'Production generative-image path ran on **ComfyUI**. Collaborated with **Martin** on building and architecture of that connection — frontend/product ownership on Moises’s side, joint systems work on how workflows entered the product.',
        href: evidenceProjects['lore-machine'].href,
        linkLabel: 'Lore Machine',
      },
      {
        id: 'example-repo',
        title: 'Example Vue / ComfyUI frontend repo',
        status: 'todo',
        body: '**Coming soon:** public example repo demonstrating Vue 3 + TypeScript patterns adjacent to ComfyUI_frontend — not claimed as production Vue shipping yet. Link will land here when published.',
      },
      {
        id: 'oss-pr',
        title: 'Focused ComfyUI_frontend contribution',
        status: 'todo',
        body: '**Coming soon / TODO:** One focused PR in Comfy-Org/ComfyUI_frontend — layout/responsive fix, keyboard interaction, empty/loading/error state, search/filter, missing tests, or accessibility.',
        href: 'https://github.com/Comfy-Org/ComfyUI_frontend/blob/main/CONTRIBUTING.md',
        linkLabel: 'ComfyUI frontend contributing guide',
      },
      {
        id: 'prototype',
        title: 'ComfyUI product prototype (Vue / TypeScript)',
        status: 'todo',
        body: '**Coming soon:** polished prototype (e.g. Workflow Review & Provenance Mode or Workflow Diff) with Vitest + Playwright, README, architecture note, and short demo.',
      },
      {
        id: 'demo-package',
        title: 'Application package (demo, architecture, links)',
        status: 'todo',
        body: '**Coming soon:** two-minute demo, architecture/tradeoffs doc, GitHub + live demo links. Certificates tracked visually below — ranked below shipping evidence.',
      },
    ],
  },
  comingSoon: {
    title: 'Coming soon — proof still shipping',
    intro:
      'Places I’m strengthening for this role. Not claimed as established expertise. Links and badges update when artifacts are ready.',
    items: [
      {
        id: 'vue-example-repo',
        title: 'Vue / ComfyUI example repository',
        body: 'Public example repo for Vue 3 Composition API + TypeScript patterns relevant to ComfyUI_frontend. **I do not claim Vue/LiteGraph production ownership** — this is the honest proof vehicle.',
        linkLabel: 'Repo (coming soon)',
      },
      {
        id: 'vue-certificate',
        title: 'Vue.js certificate',
        body: 'Optional Mid-Level Vue.js certification — visual placeholder only. Ranked below a focused OSS PR and working prototype; will not lead the application.',
        badge: 'Coming soon',
      },
      {
        id: 'comfyui-frontend-fluency',
        title: 'ComfyUI_frontend day-to-day fluency',
        body: 'Deeper Vue 3, Pinia, PrimeVue, LiteGraph node-canvas interactions, Vitest/Playwright patterns, and Electron-specific frontend behavior inside their repo.',
      },
      {
        id: 'playwright-vitest',
        title: 'Vitest + Playwright against Comfy patterns',
        body: 'Component and e2e tests matching ComfyUI_frontend conventions — loading/empty/error paths, keyboard flows, and workflow-artifact fixtures.',
      },
      {
        id: 'expert-interviews',
        title: 'Creator / expert discovery notes',
        body: 'Interview themes from working ComfyUI users — large-workflow pain, review/debug friction, output↔graph disconnects — feeding the prototype brief.',
      },
      {
        id: 'demo-video',
        title: 'Two-minute product demo',
        body: 'Screen recording of the Vue prototype (or accepted PR) with architecture callouts for hiring review.',
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
      'Private application dossier for Comfy MTS Frontend — Lore Machine founding engineer, ComfyUI generative-image connection with Martin, and Coming soon Vue/ComfyUI_frontend proof.',
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
  heroPrimaryCta: { label: 'View Evidence Roadmap', href: '#evidence' },
  heroSecondaryCta: { label: 'View Coming Soon', href: '#coming-soon' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'coming-soon', label: 'Coming soon' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'experience', label: 'Experience' },
    { id: 'selected-project', label: 'Lore Machine' },
    { id: 'technologies', label: 'Stack' },
    { id: 'principles', label: 'How I ship' },
    { id: 'process', label: '30-day plan' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'I build interfaces for generative creative systems — including ComfyUI-backed ones.',
    subheadline:
      'Founding frontend engineer and creative technologist. At Lore Machine, generative-image work ran on ComfyUI; I collaborated with Martin on building and architecting that connection.',
    introParagraphs: [
      'Comfy asks candidates to **use ComfyUI, build with it, and contribute to the open-source project**. This private page is the application package for **Member of Technical Staff, Frontend**.',
      'As a founding engineer at **Lore Machine**, I owned creator-facing interfaces, authentication, and API integrations for a real-time generative storytelling product. **ComfyUI powered the generative-image path** — I collaborated with **Martin** on the **build and architecture of that connection**.',
      'I am **not** claiming Vue or LiteGraph production expertise. An example repo, certificates, and deeper ComfyUI_frontend fluency are tracked as **Coming soon**. Evidence over credential theater.',
    ],
    trustLine:
      'Lore Machine founding engineer · ComfyUI connection with Martin · artist-engineer perspective',
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
  techLogoIds: ['comfyui', 'vue', 'typescript', 'react', 'nextjs'],
  resumeSectionTitle: 'Ready to review the evidence as it ships?',
  resumeSectionNote:
    'GitHub, Drive résumé, career packet, and email below. Coming soon cards update as the Vue example repo, certificates, and ComfyUI_frontend proof land.',
};
