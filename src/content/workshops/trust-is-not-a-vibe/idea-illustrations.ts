import { TRUST_BASE, TRUST_LEARN_BASE } from './types'

/**
 * Portrait teaching illustrations. One registry — pages read from here.
 * Hold assets stay registered so the slot is reserved; they must not render
 * in the learner path until the redesign lands.
 */
export type TrustIdeaIllustrationStatus = 'ready' | 'hold'

export type TrustIdeaIllustrationId =
  | 'idea-00-overview-eval-is-a-decision-system'
  | 'idea-01-looks-right-polish-is-not-proof'
  | 'idea-02-looks-right-claims-need-different-checks'
  | 'idea-02-four-lenses-four-seats-one-card'
  | 'idea-03-seeded-failures-find-the-system-break'
  | 'idea-04-the-loop-human-controlled-agent-loop'
  | 'idea-05-the-harness-golden-dataset-first'
  | 'idea-06-the-harness-four-graders-have-blind-spots'
  | 'idea-07-the-harness-continuous-evaluation'
  | 'idea-08-the-harness-regression-whac-a-mole'
  | 'idea-09-the-harness-control-gate-vote'
  | 'idea-10-transfer-new-card-same-job'

export type TrustIdeaIllustration = {
  id: TrustIdeaIllustrationId
  src: string
  alt: string
  caption: string
  route: string
  placement: string
  status: TrustIdeaIllustrationStatus
  lessonConcept?:
    | 'overview'
    | 'looks-right'
    | 'four-lenses'
    | 'seeded-failures'
    | 'the-loop'
    | 'the-harness'
    | 'transfer'
}

const CDN =
  'https://res.cloudinary.com/dck5rzi4h/image/upload'

export const TRUST_IDEA_ILLUSTRATIONS: Record<TrustIdeaIllustrationId, TrustIdeaIllustration> = {
  'idea-00-overview-eval-is-a-decision-system': {
    id: 'idea-00-overview-eval-is-a-decision-system',
    src: `${CDN}/v1788996616/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-00-overview-eval-is-a-decision-system_sho8jl.webp`,
    alt: 'Teaching illustration — an evaluation is a decision system that stops an agent before it may act. Not a product screenshot.',
    caption: 'An eval is a decision system: evidence in, a recorded Allow / Ask / Deny out.',
    route: TRUST_BASE,
    placement: 'Overview · 03 Why it matters · title beat; 04 The path · before the clock',
    status: 'ready',
    lessonConcept: 'overview',
  },
  'idea-01-looks-right-polish-is-not-proof': {
    id: 'idea-01-looks-right-polish-is-not-proof',
    src: `${CDN}/v1788996616/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-01-looks-right-polish-is-not-proof_c1injr.webp`,
    alt: 'Teaching illustration — a finished-looking card is not proof the system behind it is safe. Not a product screenshot.',
    caption: 'Polish is not proof. A finished card is a recommendation to judge, not evidence it may act.',
    route: `${TRUST_LEARN_BASE}/looks-right`,
    placement: 'Looks Right · Check it · after the first vote',
    status: 'ready',
    lessonConcept: 'looks-right',
  },
  'idea-02-looks-right-claims-need-different-checks': {
    id: 'idea-02-looks-right-claims-need-different-checks',
    src: `${CDN}/v1788996616/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-02-looks-right-claims-need-different-checks_ersvph.webp`,
    alt: 'Teaching illustration — different claims need different checks. Held for a simpler editorial-triptych redesign.',
    caption: 'Different claims need different checks.',
    route: `${TRUST_LEARN_BASE}/looks-right`,
    placement: 'Looks Right · hold · editorial-triptych redesign',
    status: 'hold',
    lessonConcept: 'looks-right',
  },
  'idea-02-four-lenses-four-seats-one-card': {
    id: 'idea-02-four-lenses-four-seats-one-card',
    src: `${CDN}/v1789002945/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-four-lenses-vertical_k0nkjx.png`,
    alt: 'Teaching illustration — four seats read one enrollment card. Course language stays in the caption, not on the image.',
    caption: 'Four seats read the same card. What each job must protect is different.',
    route: `${TRUST_LEARN_BASE}/four-lenses`,
    placement: 'Four Lenses · The idea · beside the claim',
    status: 'ready',
    lessonConcept: 'four-lenses',
  },
  'idea-03-seeded-failures-find-the-system-break': {
    id: 'idea-03-seeded-failures-find-the-system-break',
    src: `${CDN}/v1789003540/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-ai-agent-idea-seeded-failure-vertical_d7g5tn.png`,
    alt: 'Teaching illustration — a finished enrollment card sits above the planted breaks: a count mismatch, an unlocked send, and a skipped pause. Course language stays in the caption, not on the image.',
    caption: 'The break is in the process that produced the card, not in how finished the card looks.',
    route: `${TRUST_LEARN_BASE}/seeded-failures`,
    placement: 'Seeded Failures · The idea · beside the claim; Check it · after the search',
    status: 'ready',
    lessonConcept: 'seeded-failures',
  },
  'idea-04-the-loop-human-controlled-agent-loop': {
    id: 'idea-04-the-loop-human-controlled-agent-loop',
    src: `${CDN}/v1788996616/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-04-the-loop-human-controlled-agent-loop_bylkeb.webp`,
    alt: 'Teaching illustration — a proposed action stops at a permission gate before the agent may act. Not a product screenshot.',
    caption: 'The proposed action stops at a permission gate before it can act.',
    route: `${TRUST_LEARN_BASE}/the-loop`,
    placement: 'The Loop · The idea · beside the claim; Try it · right of the hint',
    status: 'ready',
    lessonConcept: 'the-loop',
  },
  'idea-05-the-harness-golden-dataset-first': {
    id: 'idea-05-the-harness-golden-dataset-first',
    src: `${CDN}/v1788996616/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-05-the-harness-golden-dataset-first_usuqfv.webp`,
    alt: 'Teaching illustration — examples come before metrics: a golden set of cases the system must keep passing. Not a product screenshot.',
    caption: 'Examples before metrics. A golden set is the cases this system has to keep passing.',
    route: `${TRUST_LEARN_BASE}/the-harness`,
    placement: 'The Harness · See it · first concept',
    status: 'ready',
    lessonConcept: 'the-harness',
  },
  'idea-06-the-harness-four-graders-have-blind-spots': {
    id: 'idea-06-the-harness-four-graders-have-blind-spots',
    src: `${CDN}/v1788996616/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-06-the-harness-four-graders-have-blind-spots_r8frwo.webp`,
    alt: 'Teaching illustration — human, user, code, and model graders each have a blind spot. Not a product screenshot.',
    caption: 'Four graders, four blind spots. No single score is a release decision.',
    route: `${TRUST_LEARN_BASE}/the-harness`,
    placement: 'The Harness · See it · after the golden-set move',
    status: 'ready',
    lessonConcept: 'the-harness',
  },
  'idea-07-the-harness-continuous-evaluation': {
    id: 'idea-07-the-harness-continuous-evaluation',
    src: `${CDN}/v1788996618/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-07-the-harness-continuous-evaluation_gi7ovd.webp`,
    alt: 'Teaching illustration — continuous evaluation as a loop. Held for a sparse-blueprint redesign.',
    caption: 'Evaluation has to keep running after the first pass.',
    route: `${TRUST_LEARN_BASE}/the-harness`,
    placement: 'The Harness · hold · sparse-blueprint redesign',
    status: 'hold',
    lessonConcept: 'the-harness',
  },
  'idea-08-the-harness-regression-whac-a-mole': {
    id: 'idea-08-the-harness-regression-whac-a-mole',
    src: `${CDN}/v1788996617/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-idea-08-the-harness-regression-whac-a-mole_mzmxsm.webp`,
    alt: 'Teaching illustration — fixing one failure can break a case that used to pass. Rerun the set. Not a product screenshot.',
    caption: 'A fix that wins one case can break another. Rerun the set; do not resample.',
    route: `${TRUST_LEARN_BASE}/the-harness`,
    placement: 'The Harness · See it · after regression, before the check',
    status: 'ready',
    lessonConcept: 'the-harness',
  },
  'idea-09-the-harness-control-gate-vote': {
    id: 'idea-09-the-harness-control-gate-vote',
    src: `${CDN}/v1789005550/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-ai-agent-idea-control-gate-vote_rhjbz2.png`,
    alt: 'Teaching illustration — a control gate with Allow, Ask, and Deny before a write may leave. Course language stays in the caption, not on the image.',
    caption: 'The proposed write stops at a control gate. A person records Allow, Ask, or Deny.',
    route: `${TRUST_LEARN_BASE}/the-harness`,
    placement: 'The Harness · The idea · beside the claim; Try it · right of the control match',
    status: 'ready',
    lessonConcept: 'the-harness',
  },
  'idea-10-transfer-new-card-same-job': {
    id: 'idea-10-transfer-new-card-same-job',
    src: `${CDN}/v1789006162/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-ai-agent-idea-transfer-vertical_h4kuxo.png`,
    alt: 'Teaching illustration — a new card marked B is measured while an earlier card marked A stays in a thought bubble. Course language stays in the caption, not as extra overlay.',
    caption: 'New card, same question. You only know by measuring on your data, again.',
    route: `${TRUST_LEARN_BASE}/transfer`,
    placement: 'Transfer · The idea · beside the claim',
    status: 'ready',
    lessonConcept: 'transfer',
  },
}

export const TRUST_IDEA_PORTRAIT_SIZE = { width: 941, height: 1672 } as const

export function getTrustIdeaIllustration(id: TrustIdeaIllustrationId): TrustIdeaIllustration {
  return TRUST_IDEA_ILLUSTRATIONS[id]
}

export const TRUST_READY_IDEA_ILLUSTRATIONS = (
  Object.values(TRUST_IDEA_ILLUSTRATIONS) as TrustIdeaIllustration[]
).filter((item) => item.status === 'ready')

export const TRUST_HOLD_IDEA_ILLUSTRATIONS = (
  Object.values(TRUST_IDEA_ILLUSTRATIONS) as TrustIdeaIllustration[]
).filter((item) => item.status === 'hold')
