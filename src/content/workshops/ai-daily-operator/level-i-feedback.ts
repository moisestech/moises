/**
 * Founder Attention OS — Level I post-workshop feedback.
 *
 * Purpose: measure learning value and identify where the course itself should improve.
 * Do not collect unnecessary sensitive business information.
 */

export type LevelIFeedbackScale = 1 | 2 | 3 | 4 | 5

export const LEVEL_I_FEEDBACK_USEFUL_OPTIONS = [
  'Choosing one outcome',
  'Founder Profile',
  'Attention Rules',
  'Daily Operator',
  'Daily Operating Brief',
  'Fact / Interpretation / Recommendation',
  'Friction identification',
  'Competency check',
] as const

export const LEVEL_I_FEEDBACK_REUSE_OPTIONS = [
  'Yes — I expect to use it tomorrow',
  'Maybe — I need to adapt it first',
  'No — I do not see a use yet',
] as const

export const LEVEL_I_FEEDBACK_PERMISSION_OPTIONS = [
  'No — keep this feedback private',
  'Yes — anonymized feedback may be quoted',
  'Yes — contact me before using my name or organization',
] as const

export type LevelIFeedbackState = {
  clarityBefore: LevelIFeedbackScale | 0
  clarityAfter: LevelIFeedbackScale | 0
  confidencePrioritizing: LevelIFeedbackScale | 0
  mostUseful: string
  reuseIntent: string
  frictionFound: string
  confusion: string
  changeRequest: string
  quote: string
  quotePermission: string
}

export const EMPTY_LEVEL_I_FEEDBACK: LevelIFeedbackState = {
  clarityBefore: 0,
  clarityAfter: 0,
  confidencePrioritizing: 0,
  mostUseful: '',
  reuseIntent: '',
  frictionFound: '',
  confusion: '',
  changeRequest: '',
  quote: '',
  quotePermission: '',
}
