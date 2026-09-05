export {
  isTrustLabPath,
  TRUST_BASE,
  TRUST_CENTRAL_QUESTION,
  TRUST_DECISION_CARD_HREF,
  TRUST_LEARN_BASE,
  TRUST_REHEARSE_HREF,
  TRUST_SESSION_TITLE,
  TRUST_SLUG,
  TRUST_SURFACES_HREF,
  TRUST_FIXTURE_LABEL,
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
  TrustSpecimenRuntime,
  TrustSpeakerNote,
  TrustVerdict,
} from './types'

export {
  TRUST_CHAPTER_BANNER,
  TRUST_DEMO_SURFACES,
  TRUST_PLACEHOLDERS,
  trustBannerCopyForPath,
  trustBannerForPath,
  trustIncompleteRequired,
  trustOptionalStills,
  trustPlaceholderEntries,
  trustStillsNeeded,
} from './placeholders'
export type {
  TrustAssetKind,
  TrustBannerCopy,
  TrustPlaceholder,
  TrustPlaceholderKey,
  TrustPlaceholderStatus,
} from './placeholders'

export {
  getTrustInstructorClip,
  TRUST_INSTRUCTOR_CLIPS,
  TRUST_MEDIA_DIR,
  trustClipIsComplete,
  trustInstructorGroupStatus,
} from './instructor-clips'
export type { TrustClipMediaStatus, TrustInstructorClipRecord } from './instructor-clips'

export { getTrustChapterPath, TRUST_CHAPTER_PATH } from './chapter-path'
export type { TrustChapterPath } from './chapter-path'

export { getLiveBeatAtElapsed, TRUST_LIVE_BEATS, TRUST_LIVE_CUE_MINUTES } from './live-beats'

export {
  getTrustRole,
  TRUST_COMBINED_STRATEGY_DESIGN,
  TRUST_ROLES,
  TRUST_ROLE_ARTIFACT,
  TRUST_ROLE_DIRECTIVE,
  TRUST_ROLE_STANCE,
  TRUST_ROLE_TERMS,
} from './roles'

export { getTrustLessonPacket, TRUST_LESSON_PACKETS } from './lesson-packets'
export type { TrustLessonPacket } from './lesson-packets'

export {
  TRUST_CASE_A,
  TRUST_CASE_A_CARD_NOTE,
  TRUST_CASE_A_INTRO,
  TRUST_CASE_A_LEARNER_NAME,
  TRUST_CASE_B,
  TRUST_LOOKS_RIGHT_FRAME,
  TRUST_CONTROLS,
  TRUST_HARNESS_LINE,
  TRUST_LOOP,
  TRUST_VOCAB_SLIDE,
} from './cases'

export {
  TRUST_CLAIM_TRACE,
  TRUST_CLAIM_TRACE_LINE,
  TRUST_EVAL_ANATOMY,
  TRUST_EVAL_DEFINITION,
  TRUST_EVAL_LOOP,
  TRUST_METHOD_TRANSFER,
  TRUST_METHOD_TRANSFER_LINE,
  TRUST_GOLDEN_BUCKET_HINT,
  TRUST_GOLDEN_BUCKET_LABEL,
  TRUST_GOLDEN_CASES,
  TRUST_GRADERS,
  TRUST_JUDGE_CAVEAT,
  TRUST_ONE_RUN_LINE,
  TRUST_REGRESSION_LINE,
  TRUST_REGRESSION_RUN,
  TRUST_ROLE_CRITERION,
  TRUST_SCORING_APPROACHES,
  TRUST_SCORING_PROBES,
  TRUST_TESTING_LINE,
  TRUST_TOOL_LANDSCAPE,
  TRUST_TRACE_STEPS,
  TRUST_TRACE_VERDICT,
} from './evals'
export type {
  TrustEvalLoopStage,
  TrustEvalLoopStageId,
  TrustEvalStage,
  TrustEvalStageId,
  TrustGoldenBucket,
  TrustGoldenCase,
  TrustGrader,
  TrustGraderId,
  TrustRunResult,
  TrustTraceVerdict,
  TrustScoringApproach,
  TrustScoringApproachId,
  TrustScoringProbe,
  TrustTraceStep,
} from './evals'

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
  TRUST_ALONE_SLIDES,
  TRUST_FOUR_SEATS_BODY,
  TRUST_FOUR_SEATS_LEAD,
  TRUST_ISLAND_BEATS,
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

export {
  TRUST_BUFFER_MINUTES,
  TRUST_CHAPTER_TIME,
  TRUST_OVERVIEW_MINUTES,
  TRUST_OVERVIEW_TIME,
  TRUST_REQUIRED_MINUTES,
  TRUST_TIME_SEGMENTS,
  TRUST_TOTAL_MINUTES,
} from './time-budget'
export type { TrustTimeSegment, TrustTimeSegmentId } from './time-budget'

export { TRUST_OVERVIEW_SECTIONS, TRUST_OVERVIEW_SPEC } from './overview'
export type { TrustOverviewSection, TrustOverviewSectionId } from './overview'

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
