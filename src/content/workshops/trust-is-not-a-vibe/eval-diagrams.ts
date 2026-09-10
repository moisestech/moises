import { TRUST_LEARN_BASE, type TrustChapterId } from './types'

/**
 * Landscape evaluation diagrams. Concept references until the custom 16:9
 * rasters exist. Swap `src` to the production Cloudinary URL — one field —
 * when `trust-is-not-a-vibe-diagram-NN-…-landscape.png` is uploaded.
 *
 * These are not idea portraits. Portrait cards stay in idea-illustrations.ts.
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

export type TrustEvalDiagram = {
  id: TrustEvalDiagramId
  chapter: TrustChapterId
  use: TrustEvalDiagramUse
  /** Concept-reference Cloudinary URL. Keep the uploaded original unchanged. */
  reference: string
  /** Planned production filename. Not a path — swap `src` when it exists. */
  production: string
  /**
   * Image actually rendered. Currently the reference URL. Point this at the
   * production Cloudinary object when the custom raster lands.
   */
  src: string
  alt: string
  /** Teaching purpose. Course language stays in HTML, not on the image. */
  caption: string
  placement: string
}

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload'

function diagram(entry: Omit<TrustEvalDiagram, 'src'>): TrustEvalDiagram {
  return { ...entry, src: entry.reference }
}

export const TRUST_EVAL_DIAGRAM_SIZE = { width: 1600, height: 900 } as const

export const TRUST_EVAL_DIAGRAMS: Record<TrustEvalDiagramId, TrustEvalDiagram> = {
  'eval-01': diagram({
    id: 'eval-01',
    chapter: 'looks-right',
    use: 'required',
    reference: `${CDN}/v1789009998/dccmiami/workshops/agentic-engineering-for-beginners/reference-01-looks-right-one-output-many-claims_np2k28.png`,
    production: 'trust-is-not-a-vibe-diagram-01-one-output-many-claims-landscape.png',
    alt: 'One polished cohort card surrounded by separate checks for evidence, tone, permission, impact, and cost.',
    caption:
      'One polished output contains factual, qualitative, authority, impact, and operational claims, and each claim needs a different kind of check.',
    placement: `Looks Right · Check it · after the first Allow / Ask / Deny vote · ${TRUST_LEARN_BASE}/looks-right`,
  }),
  'eval-02': diagram({
    id: 'eval-02',
    chapter: 'looks-right',
    use: 'supporting',
    reference: `${CDN}/v1789009997/dccmiami/workshops/agentic-engineering-for-beginners/reference-02-looks-right-one-behavior-per-eval_oo4wzy.png`,
    production: 'trust-is-not-a-vibe-diagram-02-one-behavior-per-eval-landscape.png',
    alt: 'Several individual evaluation cards, each testing one behavior instead of judging the whole agent at once.',
    caption: 'Replace the vague question “Is the agent good?” with one testable behavior at a time.',
    placement: `Looks Right · Check it · after Evidence / Authority / Impact · collapsed · ${TRUST_LEARN_BASE}/looks-right`,
  }),
  'eval-03': diagram({
    id: 'eval-03',
    chapter: 'seeded-failures',
    use: 'required',
    reference: `${CDN}/v1789009998/dccmiami/workshops/agentic-engineering-for-beginners/reference-03-seeded-failures-output-only-evaluation_wjgwoo.png`,
    production: 'trust-is-not-a-vibe-diagram-03-output-only-evaluation-landscape.png',
    alt: 'A polished output receiving a good score while system failures remain hidden behind it.',
    caption:
      'A polished final card can score well while hiding failures in evidence, tools, permissions, and pauses.',
    placement: `Seeded Failures · See it · before learners inspect The send · ${TRUST_LEARN_BASE}/seeded-failures`,
  }),
  'eval-04': diagram({
    id: 'eval-04',
    chapter: 'seeded-failures',
    use: 'required',
    reference: `${CDN}/v1789009999/dccmiami/workshops/agentic-engineering-for-beginners/reference-04-seeded-failures-system-trajectory-evaluation_ujjeju.png`,
    production: 'trust-is-not-a-vibe-diagram-04-system-trajectory-evaluation-landscape.png',
    alt: 'Evaluation probes placed along sources, reasoning, tool use, permission, action, and outcome.',
    caption:
      'Move evaluation inside the system: inspect sources, counts, tool use, permission, action, and outcome.',
    placement: `Seeded Failures · Check it · immediately after planted failures are revealed · ${TRUST_LEARN_BASE}/seeded-failures`,
  }),
  'eval-05': diagram({
    id: 'eval-05',
    chapter: 'the-loop',
    use: 'required',
    reference: `${CDN}/v1789010000/dccmiami/workshops/agentic-engineering-for-beginners/reference-05-the-loop-agent-runtime-cycle_wazbp2.png`,
    production: 'trust-is-not-a-vibe-diagram-05-controlled-agent-runtime-loop-landscape.png',
    alt: 'A controlled agent loop in which a proposal must pass a gate before action and is checked afterward.',
    caption:
      'Locate a break on Observe, Decide, Propose/Gate, Act, Check, or Stop rather than judging how the prose sounds.',
    placement: `The Loop · See it · immediately before the stage-mapping interaction · ${TRUST_LEARN_BASE}/the-loop`,
  }),
  'eval-06': diagram({
    id: 'eval-06',
    chapter: 'the-loop',
    use: 'deeper',
    reference: `${CDN}/v1789010000/dccmiami/workshops/agentic-engineering-for-beginners/reference-06-the-loop-rag-stage-specific-evaluation-go-deeper_jyxmrb.png`,
    production: 'trust-is-not-a-vibe-diagram-06-retrieval-and-answer-evaluation-landscape.png',
    alt: 'Retrieval and answer generation shown as separate stages with separate evaluations.',
    caption: 'Retrieval quality and answer faithfulness are separate claims with separate graders.',
    placement: `The Loop · Engineering Go deeper · after stage mapping · ${TRUST_LEARN_BASE}/the-loop`,
  }),
  'eval-07': diagram({
    id: 'eval-07',
    chapter: 'the-harness',
    use: 'required',
    reference: `${CDN}/v1789010001/dccmiami/workshops/agentic-engineering-for-beginners/reference-07-the-harness-task-data-grader-foundation_qwbtoq.png`,
    production: 'trust-is-not-a-vibe-diagram-07-task-cases-grader-foundation-landscape.png',
    alt: 'Task, cases, and grader arranged as the three foundations of one evaluation.',
    caption: 'The minimal evaluation unit is one task, revealing cases, and an appropriate grader.',
    placement: `The Harness · The idea · landscape before matching controls · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-08': diagram({
    id: 'eval-08',
    chapter: 'the-harness',
    use: 'required',
    reference: `${CDN}/v1789010001/dccmiami/workshops/agentic-engineering-for-beginners/reference-08-the-harness-golden-cases-diverse-difficult_kttupq.png`,
    production: 'trust-is-not-a-vibe-diagram-08-golden-cases-cover-the-failure-zone-landscape.png',
    alt: 'A golden set composed of common cases, edge cases, and known failures.',
    caption:
      'A useful golden set includes common cases, edge cases, and known failures — not merely many examples.',
    placement: `The Harness · See it · golden-set activity · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-09': diagram({
    id: 'eval-09',
    chapter: 'the-harness',
    use: 'required',
    reference: `${CDN}/v1789010002/dccmiami/workshops/agentic-engineering-for-beginners/reference-09-the-harness-complementary-grader-types_uko7c3.png`,
    production: 'trust-is-not-a-vibe-diagram-09-complementary-graders-landscape.png',
    alt: 'Four complementary grading methods contributing different evidence about the same output.',
    caption:
      'Code, model, human, and outcome evidence have different strengths and blind spots; they feed one evidence pool rather than map to fixed verdicts.',
    placement: `The Harness · See it · after the golden-set activity, when graders unlock · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-10': diagram({
    id: 'eval-10',
    chapter: 'the-harness',
    use: 'supporting',
    reference: `${CDN}/v1789010003/dccmiami/workshops/agentic-engineering-for-beginners/reference-10-the-harness-model-judge-subjective-criteria_rraey2.png`,
    production: 'trust-is-not-a-vibe-diagram-10-calibrated-model-judge-landscape.png',
    alt: 'A model judge applying a rubric and being calibrated against human-reviewed examples.',
    caption:
      'Use a model judge for rubric-shaped qualities such as tone and clarity, then calibrate it against human-labeled examples.',
    placement: `The Harness · Go deeper · model-judge detail under the grader chooser · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-11': diagram({
    id: 'eval-11',
    chapter: 'the-harness',
    use: 'supporting',
    reference: `${CDN}/v1789010003/dccmiami/workshops/agentic-engineering-for-beginners/reference-11-the-harness-varied-wording-semantic-grader_sjig5p.png`,
    production: 'trust-is-not-a-vibe-diagram-11-semantic-grading-across-varied-wording-landscape.png',
    alt: 'Different refusal phrasings converging on the same semantic behavior check.',
    caption:
      'Exact-string checks fail when different wording expresses the same behavior; semantic grading still needs clear criteria and calibration.',
    placement: `The Harness · Go deeper · model-judge detail, after calibration · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-12': diagram({
    id: 'eval-12',
    chapter: 'the-harness',
    use: 'deeper',
    reference: `${CDN}/v1789010004/dccmiami/workshops/agentic-engineering-for-beginners/reference-12-the-harness-agent-multimetric-radar-go-deeper_jzivpz.png`,
    production: 'trust-is-not-a-vibe-diagram-12-agent-performance-is-multidimensional-landscape.png',
    alt: 'Two agent versions compared across resolution, steps, latency, cost, and recovery.',
    caption:
      'Compare task resolution, steps, latency, cost, and recovery without compressing them into a single score.',
    placement: `The Harness · Engineering Go deeper · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-13': diagram({
    id: 'eval-13',
    chapter: 'the-harness',
    use: 'required',
    reference: `${CDN}/v1789010005/dccmiami/workshops/agentic-engineering-for-beginners/reference-13-the-harness-allow-ask-deny-threshold_l5bgtn.png`,
    production: 'trust-is-not-a-vibe-diagram-13-allow-ask-deny-threshold-landscape.png',
    alt: 'Cases distributed across explicit Allow, Ask, and Deny decision bands.',
    caption:
      'A harness converts evidence into an explicit gate: Allow, Ask, or Deny, and the Ask band should remain visible and meaningful.',
    placement: `The Harness · Check it · immediately before the team release vote · ${TRUST_LEARN_BASE}/the-harness`,
  }),
  'eval-14': diagram({
    id: 'eval-14',
    chapter: 'the-harness',
    use: 'required',
    reference: `${CDN}/v1789010005/dccmiami/workshops/agentic-engineering-for-beginners/reference-14-the-harness-aggregate-score-hides-critical-failure_bzhzw3.png`,
    production: 'trust-is-not-a-vibe-diagram-14-aggregate-score-hides-critical-failure-landscape.png',
    alt: 'A high overall score beside category results that reveal one critical permission failure.',
    caption:
      'A high overall score can hide a failed permission or pause case; release decisions must preserve critical slices, not only improve the average.',
    placement: `The Harness · See it · regression check before the chapter verdict · ${TRUST_LEARN_BASE}/the-harness`,
  }),
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
