export {
  TRUST_BASE,
  TRUST_CENTRAL_QUESTION,
  TRUST_DECISION_CARD_HREF,
  TRUST_LEARN_BASE,
  TRUST_REHEARSE_HREF,
  TRUST_SESSION_TITLE,
  TRUST_SLUG,
  TRUST_SURFACES_HREF,
} from './types'
export type {
  TrustCase,
  TrustChapter,
  TrustChapterId,
  TrustControl,
  TrustControlId,
  TrustFailure,
  TrustFailureMarkId,
  TrustLayerId,
  TrustLiveBeat,
  TrustLiveBeatId,
  TrustLoopNode,
  TrustLoopStage,
  TrustMarkId,
  TrustRole,
  TrustRoleId,
  TrustRubricKey,
  TrustRubricScore,
  TrustSpeakerNote,
  TrustVerdict,
} from './types'

export { TRUST_DEMO_SURFACES, TRUST_PLACEHOLDERS } from './placeholders'
export type { TrustPlaceholder, TrustPlaceholderKey, TrustPlaceholderStatus } from './placeholders'

export { getLiveBeatAtElapsed, TRUST_LIVE_BEATS, TRUST_LIVE_CUE_MINUTES } from './live-beats'

export { getTrustRole, TRUST_COMBINED_STRATEGY_DESIGN, TRUST_ROLES } from './roles'

export {
  TRUST_CASE_A,
  TRUST_CASE_B,
  TRUST_CONTROLS,
  TRUST_HARNESS_LINE,
  TRUST_LOOP,
  TRUST_VOCAB_SLIDE,
} from './cases'

export {
  EVALS_ENGINEER_STACK,
  EVALS_FIELD_VOCAB,
  EVALS_SOURCE,
  EVALS_TEACHING,
  EVALS_TRANSLATION,
} from './evals-source'
export type { EvalsTranslationBeat, TrustTeachingCard, TrustTeachingKind } from './evals-source'

export {
  getAdjacentTrustChapters,
  getTrustChapter,
  getTrustChapterIndex,
  TRUST_CHAPTER_SLUGS,
  TRUST_CHAPTERS,
  TRUST_ONE_LINE,
  TRUST_OUTCOMES,
  TRUST_PROBLEM_NAME,
  TRUST_QUICK_FACTS,
  TRUST_SECONDARY_LINE,
  TRUST_SUBTITLE,
  TRUST_THESIS,
  TRUST_TITLE,
} from './chapters'

export { getTrustSpeakerNote, TRUST_SPEAKER_NOTES } from './speaker-notes'

export const TRUST_SEO = {
  title: 'Trust Is Not a Vibe — 30-minute field lab | Moises Sanabria',
  description:
    'A 30-minute field lab for evaluating AI before it acts. Mixed teams — product, engineering, design, and strategy — learn to separate a good-looking output from a safe agent.',
  keywords: [
    'AI evals',
    'agent evaluation',
    'forward-deployed',
    'Allow Ask Deny',
    'AI workshop',
    'Moises Sanabria',
    'trust is not a vibe',
  ],
} as const
