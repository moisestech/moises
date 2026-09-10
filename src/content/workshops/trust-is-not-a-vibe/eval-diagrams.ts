import { TRUST_LEARN_BASE, type TrustChapterId } from './types'

/**
 * Landscape evaluation diagrams. Production 16:9 WebPs (1672 × 941) live on
 * Cloudinary. Pages read `src` from this registry — do not hard-code paths
 * in chapter JSX. These are not idea portraits.
 */
export type TrustEvalDiagramUse = 'required' | 'supporting' | 'deeper'

export type TrustEvalDiagramId =
  | 'eval-01'
  | 'eval-02'
  | 'eval-03'
  | 'eval-04'
  | 'eval-05'
  | 'eval-06'
  | 'eval-07'
  | 'eval-08'
  | 'eval-09'
  | 'eval-10'
  | 'eval-11'
  | 'eval-12'
  | 'eval-13'
  | 'eval-14'
  | 'eval-15'

export type TrustEvalDiagram = {
  id: TrustEvalDiagramId
  chapter: TrustChapterId
  use: TrustEvalDiagramUse
  filename: string
  src: string
  alt: string
  /** Presenter takeaway. Course language stays in nearby HTML, not on the image. */
  caption: string
  placement: string
}

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload'

export const TRUST_EVAL_DIAGRAM_SIZE = { width: 1672, height: 941 } as const

export const TRUST_EVAL_DIAGRAMS: Record<TrustEvalDiagramId, TrustEvalDiagram> = {
  'eval-01': {
    id: 'eval-01',
    chapter: 'looks-right',
    use: 'required',
    filename: '01-looks-right-one-output-many-claims.webp',
    src: `${CDN}/v1789037358/dccmiami/workshops/agentic-engineering-for-beginners/01-looks-right-one-output-many-claims_il6xfu.webp`,
    alt: 'One AI output separates into factual, permission, and impact claims that require different checks.',
    caption: 'A polished answer contains different kinds of claims; each needs a different check.',
    placement: `Looks Right · Check it · after the first Allow / Ask / Deny vote · ${TRUST_LEARN_BASE}/looks-right`,
  },
  'eval-02': {
    id: 'eval-02',
    chapter: 'looks-right',
    use: 'supporting',
    filename: '02-looks-right-one-behavior-per-eval.webp',
    src: `${CDN}/v1789037358/dccmiami/workshops/agentic-engineering-for-beginners/02-looks-right-one-behavior-per-eval_f4vjpp.webp`,
    alt: 'One behavior is isolated and tested with its own cases and grader.',
    caption: 'Test one behavior at a time, or you will not know what failed.',
    placement: `Looks Right · Check it · supporting reveal after Evidence / Authority / Impact · ${TRUST_LEARN_BASE}/looks-right`,
  },
  'eval-03': {
    id: 'eval-03',
    chapter: 'seeded-failures',
    use: 'required',
    filename: '03-seeded-failures-output-only-evaluation.webp',
    src: `${CDN}/v1789037359/dccmiami/workshops/agentic-engineering-for-beginners/03-seeded-failures-output-only-evaluation_fqlifa.webp`,
    alt: 'A polished message passes an output check while hidden system stages remain unexamined.',
    caption: 'Output grading sees the prose, not the path that produced it.',
    placement: `Seeded Failures · See it · before learners inspect The send · ${TRUST_LEARN_BASE}/seeded-failures`,
  },
  'eval-04': {
    id: 'eval-04',
    chapter: 'seeded-failures',
    use: 'required',
    filename: '04-seeded-failures-system-trajectory-evaluation.webp',
    src: `${CDN}/v1789037360/dccmiami/workshops/agentic-engineering-for-beginners/04-seeded-failures-system-trajectory-evaluation_zahqld.webp`,
    alt: 'Request, evidence, decision, tool call, permission, action, and outcome are inspected as one system trace.',
    caption: 'For an agent, the trajectory is part of the product.',
    placement: `Seeded Failures · Check it · after the planted failures are revealed · ${TRUST_LEARN_BASE}/seeded-failures`,
  },
  'eval-05': {
    id: 'eval-05',
    chapter: 'the-loop',
    use: 'required',
    filename: '05-the-loop-controlled-agent-runtime.webp',
    src: `${CDN}/v1789037360/dccmiami/workshops/agentic-engineering-for-beginners/05-the-loop-controlled-agent-runtime_h03ewl.webp`,
    alt: 'An agent observes, decides, and proposes, then stops at a permission gate before acting and checking.',
    caption: 'The model proposes; the system controls; the team authorizes.',
    placement: `The Loop · See it · immediately before the stage-mapping interaction · ${TRUST_LEARN_BASE}/the-loop`,
  },
  'eval-06': {
    id: 'eval-06',
    chapter: 'the-loop',
    use: 'deeper',
    filename: '06-the-loop-retrieval-answer-evaluation.webp',
    src: `${CDN}/v1789037361/dccmiami/workshops/agentic-engineering-for-beginners/06-the-loop-retrieval-answer-evaluation_tl8dbn.webp`,
    alt: 'Retrieval evidence and answer quality are evaluated separately before a decision.',
    caption: 'A good answer can rest on bad retrieval, and good retrieval can still be misused.',
    placement: `The Loop · Engineering Go deeper · optional · ${TRUST_LEARN_BASE}/the-loop`,
  },
  'eval-07': {
    id: 'eval-07',
    chapter: 'the-harness',
    use: 'required',
    filename: '07-the-harness-task-cases-grader.webp',
    src: `${CDN}/v1789037362/dccmiami/workshops/agentic-engineering-for-beginners/07-the-harness-task-cases-grader_plu5l8.webp`,
    alt: 'A task flows into test cases and a grader, producing evidence rather than an automatic verdict.',
    caption: 'Every evaluation needs a task, cases that expose it, and a grader.',
    placement: `The Harness · The idea · opening · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-08': {
    id: 'eval-08',
    chapter: 'the-harness',
    use: 'required',
    filename: '08-the-harness-golden-cases.webp',
    src: `${CDN}/v1789037362/dccmiami/workshops/agentic-engineering-for-beginners/08-the-harness-golden-cases_le0jk4.webp`,
    alt: 'Common, edge, and known-failure cases surround the risk area in a curated golden set.',
    caption: 'A golden set is small by design and grows from real failures.',
    placement: `The Harness · See it · golden-set activity · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-09': {
    id: 'eval-09',
    chapter: 'the-harness',
    use: 'required',
    filename: '09-the-harness-complementary-graders.webp',
    src: `${CDN}/v1789037363/dccmiami/workshops/agentic-engineering-for-beginners/09-the-harness-complementary-graders_wxch5q.webp`,
    alt: 'Code, model, human, and outcome graders inspect one proposal and combine complementary evidence.',
    caption: 'No grader sees everything; confidence comes from complementary evidence.',
    placement: `The Harness · See it · after the golden-set activity · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-10': {
    id: 'eval-10',
    chapter: 'the-harness',
    use: 'supporting',
    filename: '10-the-harness-calibrated-model-judge.webp',
    src: `${CDN}/v1789037364/dccmiami/workshops/agentic-engineering-for-beginners/10-the-harness-calibrated-model-judge_wjxywq.webp`,
    alt: 'Tone, clarity, and completeness ratings are calibrated against human anchors before becoming evidence.',
    caption: 'A model judge is useful only when calibrated against human-labeled anchors.',
    placement: `The Harness · Go deeper · model-judge supporting detail, first reveal · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-11': {
    id: 'eval-11',
    chapter: 'the-harness',
    use: 'supporting',
    filename: '11-the-harness-semantic-grading.webp',
    src: `${CDN}/v1789037364/dccmiami/workshops/agentic-engineering-for-beginners/11-the-harness-semantic-grading_lq6fo4.webp`,
    alt: 'No, I cannot, not allowed, and unable converge into the semantic category refusal before a calibration check.',
    caption: 'Exact wording changes; behavior is what we grade.',
    placement: `The Harness · Go deeper · model-judge supporting detail, second reveal · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-12': {
    id: 'eval-12',
    chapter: 'the-harness',
    use: 'deeper',
    filename: '12-the-harness-multidimensional-performance.webp',
    src: `${CDN}/v1789037365/dccmiami/workshops/agentic-engineering-for-beginners/12-the-harness-multidimensional-performance_nisysl.webp`,
    alt: 'Versions A and B differ across resolution, steps, latency, cost, and recovery.',
    caption: 'Averages erase tradeoffs; keep independent dimensions visible.',
    placement: `The Harness · Engineering Go deeper · optional · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-13': {
    id: 'eval-13',
    chapter: 'the-harness',
    use: 'required',
    filename: '13-the-harness-allow-ask-deny-threshold.webp',
    src: `${CDN}/v1789037366/dccmiami/workshops/agentic-engineering-for-beginners/13-the-harness-allow-ask-deny-threshold_dubtg6.webp`,
    alt: 'Eight cases sit across Allow, Ask, and Deny zones, including cases near both decision boundaries.',
    caption: 'Ask is not indecision; it is an intentional intervention state.',
    placement: `The Harness · Check it · immediately before the team release vote · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-14': {
    id: 'eval-14',
    chapter: 'the-harness',
    use: 'required',
    filename: '14-the-harness-critical-slice-regression.webp',
    src: `${CDN}/v1789037367/dccmiami/workshops/agentic-engineering-for-beginners/14-the-harness-critical-slice-regression_gailbr.webp`,
    alt: 'An overall score of 92 percent sits beside passing date, count, and pause checks while permission fails and regresses.',
    caption: 'A high overall score cannot cancel a release-blocking failure.',
    placement: `The Harness · See it · regression check before the chapter verdict · ${TRUST_LEARN_BASE}/the-harness`,
  },
  'eval-15': {
    id: 'eval-15',
    chapter: 'seeded-failures',
    use: 'required',
    filename: '15-agent-system-evaluation-boundary.webp',
    src: `${CDN}/v1789038116/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-diagram-15-agent-system-evaluation-boundary-landscape_aintfu.webp`,
    alt: 'An AI system of model, tools, context, and guardrails sits before the output that an evaluation scores.',
    caption: 'Scoring the output leaves the system unexamined. The eval has to reach the harness, the tools, and the gate.',
    placement: `Seeded Failures · The idea · evaluation boundary · ${TRUST_LEARN_BASE}/seeded-failures`,
  },
}

export function getTrustEvalDiagram(id: TrustEvalDiagramId): TrustEvalDiagram {
  return TRUST_EVAL_DIAGRAMS[id]
}

export const TRUST_REQUIRED_EVAL_DIAGRAMS = (
  Object.values(TRUST_EVAL_DIAGRAMS) as TrustEvalDiagram[]
).filter((item) => item.use === 'required')

export const TRUST_SUPPORTING_EVAL_DIAGRAMS = (
  Object.values(TRUST_EVAL_DIAGRAMS) as TrustEvalDiagram[]
).filter((item) => item.use === 'supporting')

export const TRUST_DEEPER_EVAL_DIAGRAMS = (
  Object.values(TRUST_EVAL_DIAGRAMS) as TrustEvalDiagram[]
).filter((item) => item.use === 'deeper')
