import { evidenceProjects } from '@/content/evidence/projects';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';

const lore = evidenceProjects['lore-machine'];

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

/** Proof-first content for Comfy MTS Frontend work-sample page. */
export const comfyWorkSample = {
  hero: {
    eyebrow: 'COMFY · MEMBER OF TECHNICAL STAFF, FRONTEND',
    headline:
      'Building visual AI interfaces with the control of an engineer and the instincts of a working artist.',
    support:
      'I’m a founding frontend engineer and creative technologist who helped build Lore Machine, a production visual-AI platform incorporating ComfyUI-powered image workflows. I specialize in turning complex generative systems into interfaces creators can understand, control, and trust.',
    primaryCta: { label: 'View ComfyUI Experience', href: '#comfyui-experience' },
    secondaryCtas: [
      { label: 'GitHub', href: 'https://github.com/moisestech' },
      { label: 'Download Résumé', href: resumePdfDriveViewUrl },
      { label: 'Contact Me', href: 'mailto:m@moises.tech?subject=Comfy%20%E2%80%94%20MTS%20Frontend%20%E2%80%94%20Moises%20Sanabria' },
    ],
    statusLine: 'Miami-based · Open to relocating to San Francisco',
    atmosphereSrc: '/images/opportunities/comfy-mts-hero-atmosphere.png',
    /** Fallback atmospheric crop (existing staff banner) until cinematic asset is finalized. */
    atmosphereFallbackSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785764243/jobs/banners/comfy-ui-frontend-staff-banner_ciekv7.png',
  },
  credibility: [
    { id: 'lore', label: 'Lore Machine', value: 'Founding frontend engineer' },
    { id: 'comfyui', label: 'ComfyUI', value: 'Production workflow experience' },
    { id: 'years', label: 'Product delivery', value: '8+ years shipping interactive systems' },
    { id: 'perspective', label: 'Perspective', value: 'Engineer + practicing artist' },
  ] satisfies CredibilityItem[],
  techBadges: [
    { id: 'comfyui', label: 'ComfyUI', src: '/images/tech-logos/comfyui.svg' },
    { id: 'vue', label: 'Vue.js', src: '/images/tech-logos/vue.svg' },
    { id: 'typescript', label: 'TypeScript', src: '/images/tech-logos/typescript.svg' },
    { id: 'vite', label: 'Vite', src: '/images/tech-logos/vite.svg' },
  ],
  caseStudy: {
    sectionId: 'comfyui-experience',
    title: 'Lore Machine × ComfyUI',
    subtitle: 'Lead case study · production generative-image connection',
    challenge:
      'Transform long-form written narratives into coherent, editable visual sequences through a production creative-AI interface — without forcing creators to operate raw model tooling.',
    roleLead:
      'Founding engineer on a three-person team. Owned major portions of the customer-facing frontend while collaborating with Martin on the ComfyUI pipeline connection.',
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
      'Keep frontend ownership honest: React/Next product UI, not Vue/LiteGraph claims.',
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
        evidenceIds: ['lore-fe', 'api-states'],
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
        evidenceIds: ['lore-fe', 'ai24'],
      },
      {
        id: 'perf',
        title: 'Performance & maintainability',
        summary: 'Production Vercel delivery, typed surfaces, honest ramp into Vue tests.',
        evidenceIds: ['lore-fe', 'ramp'],
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
        summary: 'Artist-engineer judgment; keyboardable demos; reduced-motion support.',
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
        detail: 'Interactive mock of inspectable workflow ↔ output linking.',
        href: '#provenance-explorer',
      },
      {
        id: 'ai24',
        label: 'AI24 creative pipeline',
        detail: 'Human-reviewable generative content flows.',
        href: '#selected-work',
      },
      {
        id: 'ramp',
        label: 'Honest Vue / LiteGraph ramp',
        detail: 'Coming soon proof track — not overclaimed expertise.',
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
      'Vue / LiteGraph proof via example repo and PRs — never overclaim the stack transfer.',
    ],
  },
  ramp: {
    title: 'Honest ramp areas',
    intro:
      'Comfy’s stack is Vue 3, TypeScript, Pinia, PrimeVue, Vitest, Playwright, Electron, LiteGraph. Production depth here is React/Next creative-AI product engineering plus ComfyUI pipeline architecture with Martin. The items below are active growth — not claimed expertise.',
  },
  first30: {
    title: 'First ~10 days of proof',
    steps: [
      {
        title: 'Repository fluency',
        description:
          'Run ComfyUI_frontend locally. Read CONTRIBUTING. Trace one Vue feature → store → tests. Identify 2–3 candidate issues.',
      },
      {
        title: 'Product discovery',
        description:
          'Interview expert ComfyUI users. Capture repeated pain. Write the product rationale before coding.',
      },
      {
        title: 'Prototype / example repo',
        description:
          'Ship a Vue/TypeScript example with empty/loading/error paths and Playwright coverage.',
      },
      {
        title: 'Open-source proof',
        description:
          'Open a focused PR with reproduction steps, screenshots, and implementation rationale.',
      },
      {
        title: 'Application package',
        description:
          'Demo recording, live links on this page, GitHub + résumé + contact.',
      },
    ],
  },
  selectedWork: [
    {
      id: 'lore',
      title: lore.title,
      detail: 'Founding FE · ComfyUI-backed generative storytelling product',
      imageSrc: lore.imageSrc,
      imageAlt: lore.imageAlt,
      href: lore.href,
    },
    {
      id: 'ai24',
      title: evidenceProjects.ai24.title,
      detail: 'Creative AI pipeline with human review before publish',
      imageSrc: evidenceProjects.ai24.imageSrc,
      imageAlt: evidenceProjects.ai24.imageAlt,
      href: evidenceProjects.ai24.href,
    },
  ],
  commandItems: [
    { id: 'comfy', label: 'View ComfyUI experience', href: '#comfyui-experience' },
    { id: 'lore', label: 'View Lore Machine case study', href: '#comfyui-experience' },
    { id: 'provenance', label: 'Open Output Provenance Explorer', href: '#provenance-explorer' },
    { id: 'github', label: 'Open GitHub', href: 'https://github.com/moisestech' },
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
        'HTML typography over atmospheric image — no baked-in generated text',
        'Center scrim for contrast; left-aligned on mobile',
        'Decorative image uses empty alt; meaning in headings',
      ],
    },
    {
      id: 'provenance',
      target: '#provenance-explorer',
      label: 'Provenance explorer',
      notes: [
        'Client-only mock data — no backend',
        'Keyboard prev/next + focus styles',
        'prefers-reduced-motion disables path pulses',
      ],
    },
    {
      id: 'fit',
      target: '#role-fit',
      label: 'Role-fit map',
      notes: [
        'Evidence remains visible without hover',
        'Focus/hover only highlights relationships',
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
      thumbTone: 'from-amber-700/80 via-stone-800 to-stone-950',
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
      thumbTone: 'from-cyan-800/70 via-slate-800 to-stone-950',
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
      thumbTone: 'from-stone-600 via-stone-800 to-black',
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
      thumbTone: 'from-stone-900 to-stone-950',
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
      thumbTone: 'from-red-950 via-stone-900 to-black',
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
