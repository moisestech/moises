import { evidenceProjects } from '@/content/evidence/projects';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';

const lore = evidenceProjects['lore-machine'];

/** Canonical Output Provenance Explorer links — use everywhere. */
export const provenanceLinks = {
  demo: 'https://comfyui-output-provenance.vercel.app',
  repo: 'https://github.com/moisestech/comfyui-output-provenance',
  docs: 'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/README.md',
  roadmap: 'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/ROADMAP.md',
  architecture:
    'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/ARCHITECTURE.md',
  testing: 'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/TESTING.md',
  performance:
    'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/PERFORMANCE.md',
  evidence:
    'https://github.com/moisestech/comfyui-output-provenance/blob/main/docs/PORTFOLIO_EVIDENCE.md',
  mark: 'https://raw.githubusercontent.com/moisestech/comfyui-output-provenance/main/docs/assets/provenance-mark.svg',
  heroSvg:
    'https://raw.githubusercontent.com/moisestech/comfyui-output-provenance/main/docs/assets/readme-hero.svg',
} as const;

/** Creative-software dark UI tokens aligned with apps/demo. */
export const provenanceBrand = {
  surface: '#11110f',
  surfaceElevated: '#191916',
  canvas: '#0c0c0b',
  text: '#f4f1e8',
  textMuted: '#aaa79d',
  border: '#3b3a34',
  accent: '#f0c94b',
  accentSubtle: '#2a2618',
  focus: '#9cc8ff',
  node: '#25241f',
  nodeActive: '#332f1d',
  edge: '#858276',
  done: '#22c55e',
  active: '#f0c94b',
  next: '#3b82f6',
  later: '#64748b',
  blocked: '#ef4444',
} as const;

export type CredibilityItem = {
  id: string;
  label: string;
  value: string;
};

export type OwnershipLane = 'owned' | 'collaborated' | 'teammate';

export type OwnershipItem = {
  id: string;
  text: string;
  lane: OwnershipLane;
};

export type RoleFitRequirement = {
  id: string;
  title: string;
  summary: string;
  evidenceIds: string[];
};

export type RoleFitEvidence = {
  id: string;
  label: string;
  detail: string;
  href?: string;
};

export type ProvenanceNode = {
  id: string;
  label: string;
  kind: 'model' | 'prompt' | 'sample' | 'decode' | 'output';
  x: number;
  y: number;
};

export type ProvenanceOutput = {
  id: string;
  title: string;
  thumbTone: string;
  seed: number;
  steps: number;
  model: string;
  sampler: string;
  prompt: string;
  nodeIds: string[];
  state?: 'ok' | 'empty' | 'error';
};

export type MilestoneStatus = 'done' | 'active' | 'next' | 'later';

export type MilestoneRow = {
  id: string;
  theme: string;
  progress: string;
  status: MilestoneStatus;
  detail: string;
};

/** Proof-first content for Comfy MTS Frontend work-sample page. */
export const comfyWorkSample = {
  hero: {
    eyebrow: 'COMFY · MEMBER OF TECHNICAL STAFF, FRONTEND',
    headline:
      'Building visual AI interfaces with the control of an engineer and the instincts of a working artist.',
    support:
      'I’m a founding frontend engineer and creative technologist who helped build Lore Machine, a production visual-AI platform incorporating ComfyUI-powered image workflows. I specialize in turning complex generative systems into interfaces creators can understand, control, and trust.',
    primaryCta: { label: 'Open live demo', href: provenanceLinks.demo },
    secondaryCtas: [
      { label: 'View repository', href: provenanceLinks.repo },
      { label: 'Download Résumé', href: resumePdfDriveViewUrl },
      {
        label: 'Contact Me',
        href: 'mailto:m@moises.tech?subject=Comfy%20%E2%80%94%20MTS%20Frontend%20%E2%80%94%20Moises%20Sanabria',
      },
    ],
    tertiaryCta: { label: 'Lore × ComfyUI case study', href: '#comfyui-experience' },
    statusLine: 'Miami-based · Open to relocating to San Francisco',
    atmosphereSrc: '/images/opportunities/comfy-mts-hero-atmosphere.png',
    atmosphereFallbackSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785764243/jobs/banners/comfy-ui-frontend-staff-banner_ciekv7.png',
  },
  credibility: [
    { id: 'lore', label: 'Lore Machine', value: 'Founding frontend engineer' },
    { id: 'comfyui', label: 'ComfyUI', value: 'Production workflow collaboration' },
    { id: 'years', label: 'Product delivery', value: '8+ years shipping interactive systems' },
    { id: 'perspective', label: 'Perspective', value: 'Engineer + practicing artist' },
  ] satisfies CredibilityItem[],
  techBadges: [
    { id: 'mark', label: 'Provenance', src: provenanceLinks.mark },
    { id: 'comfyui', label: 'ComfyUI', src: '/images/tech-logos/comfyui.svg' },
    { id: 'vue', label: 'Vue.js', src: '/images/tech-logos/vue.svg' },
    { id: 'typescript', label: 'TypeScript', src: '/images/tech-logos/typescript.svg' },
    { id: 'vite', label: 'Vite', src: '/images/tech-logos/vite.svg' },
  ],
  product: {
    sectionId: 'work-sample',
    eyebrow: 'Unofficial ComfyUI project',
    title: 'Output Provenance Explorer',
    subtitle: 'Trace an output back to the workflow decisions that produced it.',
    statusChip: 'Architecture foundation',
    statusLine: 'Live demo · Milestone 0 complete · Milestone 1 next',
    definition:
      'An unofficial ComfyUI frontend experiment + portfolio engineering sample: a standalone Vue demo (and future sidebar extension) that reconnects a selected generated output to the nodes, parameters, and workflow path that produced it.',
    blurb90:
      'ComfyUI makes generation logic visible, but large histories can separate creative review from the path that produced a result. This unofficial project tests a provenance layer: select an output, see the upstream dependency path, and inspect parameters in a GPU-free standalone demo. The repo is a pnpm monorepo (demo, pure core, UI, extension adapter) with Zod validation, graph traversal tests, CI, and a public Vercel deploy. It demonstrates transfer into Comfy’s Vue conventions from a React/Next production background, without overclaiming extension readiness or sole Comfy infrastructure ownership at Lore Machine.',
    disclaimer: 'Unofficial project. Not affiliated with or endorsed by Comfy Org.',
    ctas: [
      { label: 'Open live demo', href: provenanceLinks.demo, primary: true },
      { label: 'View repository', href: provenanceLinks.repo, primary: false },
      { label: 'Docs & roadmap', href: provenanceLinks.docs, primary: false },
    ],
    docLinks: [
      { label: 'Docs hub', href: provenanceLinks.docs },
      { label: 'Roadmap', href: provenanceLinks.roadmap },
      { label: 'Architecture', href: provenanceLinks.architecture },
      { label: 'Testing / QA', href: provenanceLinks.testing },
      { label: 'Performance', href: provenanceLinks.performance },
      { label: 'Evidence map', href: provenanceLinks.evidence },
    ],
    panels: [
      { id: 'runs', label: 'Runs and outputs', job: 'Select generation / output' },
      { id: 'graph', label: 'Provenance graph', job: 'Highlight upstream path + text summary' },
      { id: 'inspector', label: 'Output inspector', job: 'Parameters + warnings' },
    ],
    goals: [
      'Trace selected output → upstream path',
      'Inspect generation parameters (prompt, model, seed, steps, …)',
      'Compare two outputs (roadmap — not in live Vue demo yet)',
      'Jump to source node when host supports it (extension — later)',
      'Surface incomplete metadata honestly',
      'Stay keyboard-reachable and demoable without GPU/Comfy',
    ],
    nonGoals: [
      'Replace Comfy canvas',
      'Prompt library / model manager',
      'Reimplement execution history',
      'Interpret every custom node',
      'Edit workflows in the standalone demo',
      'Fake production-ready extension',
    ],
    milestones: [
      {
        id: 'M0',
        theme: 'Foundation',
        progress: '~100%',
        status: 'done',
        detail: 'Monorepo, parser, trace, demo shell, CI, docs',
      },
      {
        id: 'M1',
        theme: 'Domain',
        progress: '~15%',
        status: 'next',
        detail: 'Real fixtures, history/API parsers, indexes, params',
      },
      {
        id: 'M2',
        theme: 'Reviewer demo',
        progress: '~20%',
        status: 'later',
        detail: 'Gallery, states, deeper inspector',
      },
      {
        id: 'M3',
        theme: 'Compare + quality',
        progress: '~10%',
        status: 'later',
        detail: 'Diff, a11y, Storybook, measured perf',
      },
      {
        id: 'M4',
        theme: 'Extension',
        progress: '~10%',
        status: 'later',
        detail: 'Sidebar, adapters, installable bundle',
      },
      {
        id: 'M5',
        theme: 'Release',
        progress: '~15%',
        status: 'later',
        detail: 'Interviews, screenshots, social card, tag',
      },
    ] satisfies MilestoneRow[],
    categorySnapshot: [
      {
        category: 'Architecture',
        done: 'Boundaries, Zod v1, trace, ADRs, adapter stubs',
        left: 'History/API parsers, adjacency indexes, Pinia stores, diff',
      },
      {
        category: 'UI',
        done: 'Three-panel shell, i18n, tokens, hosted demo',
        left: 'Multi-run gallery, compare, full state matrix',
      },
      {
        category: 'QA',
        done: '4 unit tests, 1 Playwright journey, CI green',
        left: 'Component tests, axe, contract suite, journey 2–7',
      },
      {
        category: 'Performance',
        done: 'Strategy + budgets documented',
        left: 'Large fixtures + published measurements',
      },
      {
        category: 'Host',
        done: 'Package boundary',
        left: 'Real sidebar + history routes',
      },
    ],
    stack: [
      { layer: 'UI', choice: 'Vue 3.5 Composition API + <script setup>' },
      { layer: 'State', choice: 'Pinia (roots present; full stores still next)' },
      { layer: 'Build', choice: 'Vite 8, pnpm 11, Node ≥ 22' },
      { layer: 'Style', choice: 'Tailwind 4 semantic tokens' },
      { layer: 'Domain', choice: 'Zod 4 boundary → canonical model' },
      { layer: 'Tests', choice: 'Vitest (unit), Playwright (e2e)' },
      { layer: 'License', choice: 'GPL-3.0-or-later' },
    ],
    qaHonesty:
      '4 unit tests (parse + trace) and CI green (format, lint, typecheck, unit, build, Playwright). Performance budgets are documented targets only — no published Lighthouse / latency claims yet.',
    architectureRule:
      'Host data enters unknown → validated once → canonical model → graph/UI. Never invent Comfy APIs.',
  },
  caseStudy: {
    sectionId: 'comfyui-experience',
    title: 'Lore Machine × ComfyUI',
    subtitle: 'Lead case study · production generative-image connection',
    challenge:
      'Transform long-form written narratives into coherent, editable visual sequences through a production creative-AI interface — without forcing creators to operate raw model tooling.',
    roleLead:
      'At Lore Machine, owned customer-facing product layers around generation and review; collaborated on ComfyUI-powered workflows; was not the sole architect of underlying ComfyUI graph infrastructure.',
    roleBullets: [
      'Owned major portions of the customer-facing frontend',
      'Translated complex generation infrastructure into usable product workflows',
      'Worked with Martin, who developed deeper ComfyUI pipeline expertise',
      'Connected product UI, APIs, authentication, generated assets, and user-facing states',
      'Collaborated across design, AI, engineering, and company leadership',
    ],
    pipeline: [
      'Story input',
      'Scene parsing',
      'Workflow configuration',
      'ComfyUI generation',
      'Status / retry handling',
      'Image sequence',
      'User review & export',
    ],
    ownership: [
      {
        id: 'fe-app',
        text: 'Responsive product UI, authentication, and creator-facing workflows',
        lane: 'owned',
      },
      {
        id: 'api-ux',
        text: 'API integrations, generation status, iteration, and failure-aware UX',
        lane: 'owned',
      },
      {
        id: 'prompt',
        text: 'Prompt systems connecting narrative structure to multimodal outputs',
        lane: 'owned',
      },
      {
        id: 'comfy-arch',
        text: 'Architecture of the ComfyUI generative-image connection into the product',
        lane: 'collaborated',
      },
      {
        id: 'handoff',
        text: 'Workflow handoff, generation return path, and creator review loop design',
        lane: 'collaborated',
      },
      {
        id: 'pipeline-depth',
        text: 'Deeper ComfyUI pipeline / node-graph execution expertise (Martin)',
        lane: 'teammate',
      },
      {
        id: 'infra',
        text: 'Underlying model hosting and infra outside the product UI surface',
        lane: 'teammate',
      },
    ] satisfies OwnershipItem[],
    decisions: [
      'Expose generation status and retry as product states — not hidden polish.',
      'Hide raw graph complexity by default; reveal control when creators need it.',
      'Keep frontend ownership honest: React/Next product UI at Lore; Vue transfer via the provenance monorepo.',
    ],
    evidence: {
      imageSrc: lore.imageSrc,
      imageAlt: lore.imageAlt,
      href: lore.href,
      linkLabel: 'Open Lore Machine',
    },
  },
  roleFit: {
    title: 'Role requirements → concrete evidence',
    intro:
      'Hover or focus a requirement to highlight related proof. Everything remains visible without hover — the interaction is for scanning, not gatekeeping.',
    requirements: [
      {
        id: 'core-fe',
        title: 'Core frontend architecture',
        summary: 'TypeScript product surfaces, auth, state, and API-bound UI.',
        evidenceIds: ['lore-fe', 'api-states', 'provenance'],
      },
      {
        id: 'complex-ux',
        title: 'Complex UX interactions',
        summary: 'Review loops, generation states, and inspectable creative flows.',
        evidenceIds: ['provenance', 'review-ux'],
      },
      {
        id: 'rapid-proto',
        title: 'Rapid prototyping',
        summary: 'Founding-engineer speed from ambiguous brief to shipped interface.',
        evidenceIds: ['lore-fe', 'provenance'],
      },
      {
        id: 'perf',
        title: 'Performance & maintainability',
        summary: 'Typed monorepo, CI, documented perf budgets (targets only).',
        evidenceIds: ['provenance', 'ramp'],
      },
      {
        id: 'xfn',
        title: 'Cross-functional product work',
        summary: 'Design, AI, engineering, and leadership collaboration.',
        evidenceIds: ['martin', 'lore-fe'],
      },
      {
        id: 'startup',
        title: 'Startup ownership',
        summary: 'Three-person founding team shipping a real creative-AI product.',
        evidenceIds: ['lore-fe', 'martin'],
      },
      {
        id: 'visual',
        title: 'Visual quality & accessibility',
        summary: 'Artist-engineer judgment; demoable without GPU; a11y still deepening.',
        evidenceIds: ['provenance', 'review-ux'],
      },
      {
        id: 'lead',
        title: 'Mentoring & technical leadership',
        summary: 'Contractor/sprint coordination and clear ownership boundaries.',
        evidenceIds: ['lore-fe', 'ramp'],
      },
    ] satisfies RoleFitRequirement[],
    evidence: [
      {
        id: 'lore-fe',
        label: 'Lore Machine frontend',
        detail: 'Founding FE ownership of creator-facing product UI.',
        href: '#comfyui-experience',
      },
      {
        id: 'martin',
        label: 'ComfyUI connection (with Martin)',
        detail: 'Collaborative architecture of generative-image path.',
        href: '#comfyui-experience',
      },
      {
        id: 'api-states',
        label: 'Generation status UX',
        detail: 'Loading, retry, and failure-aware product states.',
        href: '#comfyui-experience',
      },
      {
        id: 'review-ux',
        label: 'Creator review loops',
        detail: 'Interfaces for iterating visual sequences before publish.',
        href: '#comfyui-experience',
      },
      {
        id: 'provenance',
        label: 'Output Provenance Explorer',
        detail:
          'Live Vue monorepo + hosted demo tracing output → upstream path; foundation slice with CI and docs.',
        href: provenanceLinks.demo,
      },
      {
        id: 'ai24',
        label: 'AI24 creative pipeline',
        detail: 'Human-reviewable generative content flows.',
        href: '#selected-work',
      },
      {
        id: 'ramp',
        label: 'Honest Vue ramp',
        detail: 'Deliberate Vue 3.5 transfer — not a rewrite of React/Next history.',
        href: '#ramp',
      },
    ] satisfies RoleFitEvidence[],
  },
  engineering: {
    title: 'Engineering approach',
    principles: [
      'One focused PR — not an unsolicited redesign.',
      'TypeScript correctness and tests before asking for review.',
      'Loading, empty, error, and partial-success are product work.',
      'Prototype as exploration informed by creators — not “adopt my feature.”',
      'Host data enters unknown → validated once → canonical model → graph/UI.',
    ],
  },
  ramp: {
    title: 'Honest ramp areas',
    intro:
      'Deepest production frontend experience is React and Next.js. This project uses Vue 3.5 deliberately to transfer into Comfy’s current frontend conventions — not to rewrite that history.',
    loreBoundary:
      'At Lore Machine, owned customer-facing product layers around generation and review; collaborated on ComfyUI-powered workflows; was not the sole architect of underlying ComfyUI graph infrastructure.',
  },
  first30: {
    title: 'Proof sprint — status',
    steps: [
      {
        title: 'Prototype / example repo',
        description: `Done — Vue 3.5 + TypeScript monorepo with Zod parse, graph trace, CI, and docs. ${provenanceLinks.repo}`,
        status: 'done' as const,
      },
      {
        title: 'Application package',
        description: `Done — live demo, docs hub, architecture, roadmap, and this page linked. ${provenanceLinks.demo}`,
        status: 'done' as const,
      },
      {
        title: 'Repository fluency (ComfyUI_frontend)',
        description:
          'Next — run ComfyUI_frontend locally, trace Vue feature → store → tests, identify focused PR candidates.',
        status: 'next' as const,
      },
      {
        title: 'Product discovery',
        description: 'Open — interview expert ComfyUI users; capture repeated pain for Milestone 1 fixtures.',
        status: 'open' as const,
      },
      {
        title: 'Open-source proof',
        description: 'Open — focused PR to Comfy-Org/ComfyUI_frontend (not claimed yet).',
        status: 'open' as const,
      },
    ],
  },
  selectedWork: [
    {
      id: 'provenance',
      title: 'Output Provenance Explorer',
      detail: 'Vue 3.5 monorepo · live demo · M0 foundation',
      imageSrc: provenanceLinks.heroSvg,
      imageAlt: 'Architecture preview diagram for Output Provenance Explorer',
      href: provenanceLinks.demo,
      imageLocal: false,
    },
    {
      id: 'lore',
      title: lore.title,
      detail: 'Founding FE · ComfyUI-backed generative storytelling product',
      imageSrc: lore.imageSrc,
      imageAlt: lore.imageAlt,
      href: lore.href,
    },
  ],
  commandItems: [
    { id: 'comfy', label: 'View ComfyUI experience', href: '#comfyui-experience' },
    { id: 'demo', label: 'Open live Provenance demo', href: provenanceLinks.demo },
    { id: 'repo', label: 'View repository', href: provenanceLinks.repo },
    { id: 'docs', label: 'Docs hub / architecture', href: provenanceLinks.docs },
    { id: 'roadmap', label: 'Roadmap (done vs left)', href: provenanceLinks.roadmap },
    {
      id: 'illustration',
      label: 'In-page explorer (illustration)',
      href: '#provenance-explorer',
    },
    { id: 'resume', label: 'Download résumé', href: resumePdfDriveViewUrl },
    {
      id: 'contact',
      label: 'Contact Moises',
      href: 'mailto:m@moises.tech?subject=Comfy%20%E2%80%94%20MTS%20Frontend%20%E2%80%94%20Moises%20Sanabria',
    },
  ],
  inspectAnnotations: [
    {
      id: 'hero',
      target: '#hero',
      label: 'Hero',
      notes: [
        'Primary CTA opens the live Vue demo — not the in-page illustration',
        'HTML typography over atmospheric image',
        'Disclaimer: unofficial ComfyUI project',
      ],
    },
    {
      id: 'product',
      target: '#work-sample',
      label: 'Work sample',
      notes: [
        'Product proof = Vercel demo + GitHub monorepo',
        'M0 done / M1 next — extension not installable yet',
        'Compare mode exists only as illustration on this page',
      ],
    },
    {
      id: 'provenance',
      target: '#provenance-explorer',
      label: 'In-page explorer',
      notes: [
        'React illustration only — not the Vue product',
        'Keyboard prev/next for scanning',
        'prefers-reduced-motion disables path pulses',
      ],
    },
  ],
} as const;

export const provenanceDemo = {
  nodes: [
    { id: 'ckpt', label: 'Checkpoint', kind: 'model', x: 8, y: 42 },
    { id: 'clip', label: 'CLIP Encode', kind: 'prompt', x: 28, y: 22 },
    { id: 'empty', label: 'Empty Latent', kind: 'sample', x: 28, y: 62 },
    { id: 'ksampler', label: 'KSampler', kind: 'sample', x: 52, y: 42 },
    { id: 'vae', label: 'VAE Decode', kind: 'decode', x: 72, y: 42 },
    { id: 'save', label: 'Save Image', kind: 'output', x: 90, y: 42 },
  ] satisfies ProvenanceNode[],
  edges: [
    ['ckpt', 'clip'],
    ['ckpt', 'ksampler'],
    ['clip', 'ksampler'],
    ['empty', 'ksampler'],
    ['ksampler', 'vae'],
    ['vae', 'save'],
  ] as [string, string][],
  outputs: [
    {
      id: 'out-a',
      title: 'Sequence frame A',
      thumbTone: 'from-[#332f1d] via-[#191916] to-[#0c0c0b]',
      seed: 1048291,
      steps: 28,
      model: 'sdxl-base (mock)',
      sampler: 'euler',
      prompt: 'atmospheric editorial landscape · dusk haze · restrained palette',
      nodeIds: ['ckpt', 'clip', 'empty', 'ksampler', 'vae', 'save'],
      state: 'ok',
    },
    {
      id: 'out-b',
      title: 'Sequence frame B',
      thumbTone: 'from-[#25241f] via-[#191916] to-[#0c0c0b]',
      seed: 881204,
      steps: 32,
      model: 'sdxl-base (mock)',
      sampler: 'dpmpp_2m',
      prompt: 'architectural interior · soft volume light · film still',
      nodeIds: ['ckpt', 'clip', 'empty', 'ksampler', 'vae', 'save'],
      state: 'ok',
    },
    {
      id: 'out-c',
      title: 'Material study',
      thumbTone: 'from-[#3b3a34] via-[#191916] to-[#0c0c0b]',
      seed: 552019,
      steps: 24,
      model: 'sdxl-base (mock)',
      sampler: 'euler',
      prompt: 'abstract material close-up · brushed metal · shallow depth',
      nodeIds: ['ckpt', 'clip', 'ksampler', 'vae', 'save'],
      state: 'ok',
    },
    {
      id: 'out-empty',
      title: 'Empty slot',
      thumbTone: 'from-[#11110f] to-[#0c0c0b]',
      seed: 0,
      steps: 0,
      model: '—',
      sampler: '—',
      prompt: 'No generation yet',
      nodeIds: [],
      state: 'empty',
    },
    {
      id: 'out-err',
      title: 'Failed run',
      thumbTone: 'from-[#3f1d1d] via-[#191916] to-[#0c0c0b]',
      seed: 991002,
      steps: 12,
      model: 'sdxl-base (mock)',
      sampler: 'euler',
      prompt: 'Interrupted — OOM on decode (mock error state)',
      nodeIds: ['ckpt', 'clip', 'ksampler'],
      state: 'error',
    },
  ] satisfies ProvenanceOutput[],
};
