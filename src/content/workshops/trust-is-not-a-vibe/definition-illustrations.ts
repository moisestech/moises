const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload'

export type TrustDefinitionIllustrationId =
  | 'overview-checkpoints-build'
  | 'definition-eval'
  | 'definition-task'
  | 'definition-cases'
  | 'definition-grader'
  | 'vibe-eval'
  | 'benchmark'
  | 'faithfulness'
  | 'llm-as-judge'
  | 'baseline'

export type TrustDefinitionIllustration = {
  id: TrustDefinitionIllustrationId
  src: string
  alt: string
}

export const TRUST_DEFINITION_ILLUSTRATIONS: Record<
  TrustDefinitionIllustrationId,
  TrustDefinitionIllustration
> = {
  'overview-checkpoints-build': {
    id: 'overview-checkpoints-build',
    src: `${CDN}/v1789052547/dccmiami/workshops/agentic-engineering-for-beginners/01-overview-checkpoints-build-portrait_mvpr2s.webp`,
    alt: 'A sequence of connected checkpoints, each adding a new piece to a complete evaluation system.',
  },
  'definition-eval': {
    id: 'definition-eval',
    src: `${CDN}/v1789052547/dccmiami/workshops/agentic-engineering-for-beginners/02-overview-definition-eval-portrait_tqnxcl.webp`,
    alt: 'A repeatable testing system runs the same behavior and cases through an explicit measurement process.',
  },
  'definition-task': {
    id: 'definition-task',
    src: `${CDN}/v1789052549/dccmiami/workshops/agentic-engineering-for-beginners/03-overview-definition-task-portrait_kjrwsf.webp`,
    alt: 'One behavior is isolated as the single target of a test.',
  },
  'definition-cases': {
    id: 'definition-cases',
    src: `${CDN}/v1789052550/dccmiami/workshops/agentic-engineering-for-beginners/04-overview-definition-cases-portrait_hjwlka.webp`,
    alt: 'A curated set combines common situations, edge conditions, and known failures.',
  },
  'definition-grader': {
    id: 'definition-grader',
    src: `${CDN}/v1789052551/dccmiami/workshops/agentic-engineering-for-beginners/05-overview-definition-grader-portrait_paweya.webp`,
    alt: 'A measuring instrument turns an output into evidence while leaving the action gate separate.',
  },
  'vibe-eval': {
    id: 'vibe-eval',
    src: `${CDN}/v1789052552/dccmiami/workshops/agentic-engineering-for-beginners/06-looks-right-vibe-eval-portrait_qt6bad.webp`,
    alt: 'One polished successful run is isolated from the repeatable testing evidence required to prove performance.',
  },
  benchmark: {
    id: 'benchmark',
    src: `${CDN}/v1789052553/dccmiami/workshops/agentic-engineering-for-beginners/07-seeded-failures-benchmark-portrait_f27vfo.webp`,
    alt: 'A generic model test is separated from the real agent, tools, context, and consequences downstream.',
  },
  faithfulness: {
    id: 'faithfulness',
    src: `${CDN}/v1789052554/dccmiami/workshops/agentic-engineering-for-beginners/08-the-loop-faithfulness-portrait_t3eiwr.webp`,
    alt: 'Supported claims connect directly to source evidence while an unsupported claim breaks away.',
  },
  'llm-as-judge': {
    id: 'llm-as-judge',
    src: `${CDN}/v1789052555/dccmiami/workshops/agentic-engineering-for-beginners/09-the-harness-llm-as-judge-portrait_qvws5y.webp`,
    alt: 'An automated judge processes many outputs while three human-reviewed anchor cases calibrate its judgment.',
  },
  baseline: {
    id: 'baseline',
    src: `${CDN}/v1789052556/dccmiami/workshops/agentic-engineering-for-beginners/10-the-harness-baseline-portrait_k2aqlt.webp`,
    alt: 'The first measurement is pinned and preserved before adjustments, with an empty position waiting for comparison.',
  },
}

export const TRUST_DEFINITION_PORTRAIT_SIZE = { width: 941, height: 1672 } as const

export function getTrustDefinitionIllustration(id: TrustDefinitionIllustrationId): TrustDefinitionIllustration {
  return TRUST_DEFINITION_ILLUSTRATIONS[id]
}
