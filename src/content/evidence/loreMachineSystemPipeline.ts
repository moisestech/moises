import { evidenceProjects } from '@/content/evidence/projects';
import type {
  SystemPipelineCaseStudyData,
  SystemPipelineOwnershipLabel,
  SystemPipelineRelevanceRow,
  SystemPipelineStage,
} from '@/content/evidence/systemPipeline';

const LORE_HOME = evidenceProjects['lore-machine'].imageSrc;
const LORE_HOME_ALT = evidenceProjects['lore-machine'].imageAlt;

const PLACEHOLDER = '/images/opportunities/placeholders/lore-machine-stage-placeholder.svg';

const ownershipLegend: SystemPipelineOwnershipLabel[] = [
  {
    id: 'Owned',
    meaning: 'Directly designed or implemented the layer.',
  },
  {
    id: 'Co-designed',
    meaning: 'Materially shaped it with another engineer or specialist.',
  },
  {
    id: 'Integrated',
    meaning: 'Connected the layer to the application and product workflow.',
  },
  {
    id: 'Led delivery',
    meaning: 'Coordinated people, sprints, decisions, and execution.',
  },
];

const verifiedTech = [
  'TypeScript',
  'Next.js',
  'Vercel',
  'LLMs',
  'PromptOps',
  'Stable Diffusion',
  'Replicate',
  'Azure',
  'Python',
] as const;

const relevanceRows: SystemPipelineRelevanceRow[] = [
  {
    id: 'source-to-intel',
    challenge: 'Turn difficult source material into usable intelligence',
    evidence: 'Transformed long-form narrative inputs into structured, creator-facing workflows.',
  },
  {
    id: 'multi-ai',
    challenge: 'Integrate multiple AI capabilities into one product',
    evidence: 'Connected model behavior, API operations, application state, and generation interfaces.',
  },
  {
    id: 'probabilistic',
    challenge: 'Make probabilistic systems understandable',
    evidence:
      'Represented asynchronous AI operations as visible product states rather than opaque background calls.',
  },
  {
    id: 'prototype-prod',
    challenge: 'Move from prototype to production',
    evidence:
      'Helped carry a real-time generative storytelling application from early prototype through production deployment.',
  },
  {
    id: 'cross-functional',
    challenge: 'Collaborate across product, AI, and infrastructure',
    evidence:
      'Managed contractor and sprint timelines while translating between engineering, business, marketing, and leadership.',
  },
  {
    id: 'human-control',
    challenge: 'Keep humans in control of AI output',
    evidence: 'Built creator-facing review and revision workflows around generated scenes and media.',
  },
  {
    id: 'face-vs-animal',
    challenge: 'Adapt the pipeline when the creator brief does not match the model assumption',
    evidence:
      'Face-coherent generation assumed human characters; animal and other nonhuman casts had no usable face path. People keep face-to-face coherence; animals skip that and use prompt engineering so those stories could ship without the face pipeline failing.',
  },
];

const caveats = [
  'Structurally relevant product and systems experience — not a claim that Lore Machine was a RAG, vector-database, LangChain, LlamaIndex, knowledge-graph, or legacy-code analysis platform.',
  'No invented latency, scale, user-count, or accuracy metrics.',
  'Stage screenshots beyond the public homepage remain placeholders until approved, sanitized assets are available.',
];

function stagePlaceholder(stageLabel: string) {
  return {
    src: PLACEHOLDER,
    alt: `Placeholder for approved Lore Machine evidence — ${stageLabel}`,
    local: true,
    isPlaceholder: true,
    imageTodo: `TODO: add approved Lore Machine evidence — ${stageLabel}`,
  };
}

const stagesFull: SystemPipelineStage[] = [
  {
    id: 'source-narrative',
    step: '01',
    title: 'Source narrative and project state',
    systemAction:
      'A creator introduces written material and establishes a persistent project that can be developed across multiple generation and editing sessions.',
    candidateContribution:
      'Owned creator-facing application architecture, project interfaces, authenticated user flows, state management, and data transactions.',
    ownership: ['Owned'],
    technologyTags: ['TypeScript', 'Next.js', 'Vercel'],
    evidence: {
      src: LORE_HOME,
      alt: LORE_HOME_ALT,
    },
  },
  {
    id: 'narrative-structure',
    step: '02',
    title: 'Narrative structure and scene planning',
    systemAction:
      'Long-form source material becomes discrete scenes, visual moments, or structured narrative units for downstream generation.',
    candidateContribution:
      'Translated AI capabilities into understandable product states and helped design how users reviewed and navigated structured narrative outputs.',
    ownership: ['Co-designed', 'Integrated'],
    technologyTags: ['TypeScript', 'LLMs', 'PromptOps'],
    boundaryNote:
      'Do not treat this layer as solo ownership of every NLP or long-context component — it was collaboratively designed and integrated into the product.',
    evidence: stagePlaceholder('narrative structure and scene planning'),
  },
  {
    id: 'prompt-orchestration',
    step: '03',
    title: 'Prompt and model orchestration',
    systemAction:
      'Narrative context, scene information, visual direction, and creator choices are assembled into model-ready operations.',
    candidateContribution:
      'Designed prompt-facing product workflows and connected application state, creator controls, and AI API operations — operationalizing the connection between narrative context, creator intent, and generative-model behavior.',
    ownership: ['Owned', 'Integrated'],
    technologyTags: ['PromptOps', 'LLMs', 'TypeScript'],
    architectureNote:
      'Operational layer between creator intent and model behavior — not a claim of owning every underlying model service.',
    evidence: stagePlaceholder('prompt and model orchestration'),
  },
  {
    id: 'media-generation',
    step: '04',
    title: 'AI image and media generation',
    systemAction:
      'Generation jobs are submitted to model services, tracked during processing, and returned to the application as media assets.',
    candidateContribution:
      'Integrated AI and data APIs, represented asynchronous generation state in the interface, and helped make long-running model operations legible to users.',
    ownership: ['Integrated', 'Led delivery'],
    technologyTags: ['Replicate', 'Stable Diffusion', 'Azure', 'Python'],
    evidence: stagePlaceholder('AI image and media generation'),
  },
  {
    id: 'human-review',
    step: '05',
    title: 'Human review, variation, and revision',
    systemAction:
      'Generated outputs return to a creator-controlled environment where scenes can be reviewed, compared, regenerated, or refined.',
    candidateContribution:
      'Built the interactive scene workflow, application state, user controls, and generated-asset presentation that formed the human–AI revision loop.',
    ownership: ['Owned'],
    technologyTags: ['TypeScript', 'Next.js'],
    pullQuote:
      'AI output was not the end of the system. It returned as inspectable state inside a product where a person could evaluate and redirect it.',
    evidence: stagePlaceholder('human review, variation, and revision'),
  },
  {
    id: 'persistence-production',
    step: '06',
    title: 'Persistence and production operation',
    systemAction:
      'Projects, scene state, generations, user sessions, and media references persist across the application.',
    candidateContribution:
      'Owned authentication and key application/data flows, supported production deployment on Vercel, coordinated contractor and sprint timelines, reported progress to leadership, and translated between engineering, business, and marketing.',
    ownership: ['Owned', 'Led delivery'],
    technologyTags: ['Next.js', 'Vercel', 'TypeScript'],
    evidence: stagePlaceholder('persistence and production operation'),
  },
];

const stagesCondensed: SystemPipelineStage[] = stagesFull.map((stage) => {
  if (stage.id === 'prompt-orchestration') {
    return {
      ...stage,
      candidateContribution:
        'Designed prompt-facing product workflows connecting application state, creator controls, and AI API operations.',
    };
  }
  if (stage.id === 'persistence-production') {
    return {
      ...stage,
      candidateContribution:
        'Owned authentication and key application/data flows, supported Vercel production deployment, and led contractor/sprint coordination across engineering, business, and marketing.',
    };
  }
  if (stage.id === 'media-generation') {
    return {
      ...stage,
      candidateContribution:
        'Integrated AI/data APIs and made asynchronous generation state legible in the creator interface.',
    };
  }
  return stage;
});

const sharedBase = {
  eyebrow: 'System walkthrough · Lore Machine',
  title: 'From unstructured narrative to an editable generative production system',
  summary:
    'Lore Machine connected long-form narrative input, AI-assisted scene development, prompt and model operations, media generation, and human revision inside one creator-facing application. As a founding engineer, Moises owned the frontend application, authentication, and AI/data API integrations while helping carry the platform from early prototype through production.',
  ownershipLegend,
  technologyTags: [...verifiedTech],
  relevanceTitle: 'Product and engineering decisions',
  relevanceIntro:
    'How creator needs shaped application state, model integration, human review, and delivery.',
  relevanceRows,
  caveats,
  verificationNote:
    'Lore Machine proves AI product engineering, model integration, prompt-facing workflows, multimodal generation interfaces, human revision loops, and production delivery. It does not prove production RAG, vector databases, LangChain, LlamaIndex, LangGraph, knowledge graphs, or legacy-code parsing.',
} satisfies Omit<SystemPipelineCaseStudyData, 'stages' | 'fullCaseStudyHref' | 'fullCaseStudyLabel'>;

/** Full pipeline for `/projects/lore-machine`. */
export const loreMachinePipelineFull: SystemPipelineCaseStudyData = {
  ...sharedBase,
  stages: stagesFull,
};

/** Condensed pipeline for CoreStory opportunity page — links to the full project dossier. */
export const loreMachinePipelineCondensed: SystemPipelineCaseStudyData = {
  ...sharedBase,
  relevanceTitle: 'Why this experience maps to CoreStory',
  relevanceIntro:
    'Structurally relevant experience — not a claim that Lore Machine used CoreStory’s architecture, domain, or retrieval stack.',
  stages: stagesCondensed,
  fullCaseStudyHref: '/projects/lore-machine',
  fullCaseStudyLabel: 'Open full Lore Machine case study',
};
