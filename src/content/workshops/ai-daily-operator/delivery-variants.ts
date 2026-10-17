/**
 * Founder Attention OS — delivery variants.
 *
 * One competency model, two delivery formats.
 * Core is the minimum useful build. Studio adds time for challenge,
 * coaching, iteration, and stronger transfer without becoming a different course.
 */

export const DAILY_OPERATOR_DELIVERY_VARIANTS = {
  core: {
    id: 'core',
    label: 'Level I Core',
    durationMinutes: 90,
    purpose: 'Institutional intro, accelerator session, or first useful Daily Operator build.',
    requiredOutcomes: [
      'Choose one 30-day outcome.',
      'Build a Founder Profile.',
      'Write Attention Rules.',
      'Create a portable Daily Operator.',
      'Run one real or synthetic Daily Operating Brief.',
      'Challenge why priority #1 ranks above #2.',
      'Separate Fact, Interpretation, and Recommendation.',
      'Capture one friction.',
      'Start the seven-day experiment.',
    ],
    facilitatorPattern: 'High structure, tight pacing, one meaningful breakthrough.',
  },
  studio: {
    id: 'studio',
    label: 'Level I Studio',
    durationMinutes: 180,
    purpose: 'Deeper hands-on application for founders who need more coaching, troubleshooting, and transfer.',
    requiredOutcomes: [
      'Complete every Core outcome.',
      'Run a second Daily Brief after critique.',
      'Make one explicit retain / delegate / redesign / automate decision.',
      'Complete one peer or facilitator challenge.',
      'Name the evidence or missing source behind one important recommendation.',
      'Leave with a stronger post-session operating experiment.',
    ],
    facilitatorPattern: 'More participant work time, more challenge, less lecture.',
  },
} as const

export type DailyOperatorDeliveryVariantId = keyof typeof DAILY_OPERATOR_DELIVERY_VARIANTS

export function getDeliveryVariant(id: DailyOperatorDeliveryVariantId) {
  return DAILY_OPERATOR_DELIVERY_VARIANTS[id]
}

export function isStudioDuration(minutes: number): boolean {
  return Number.isFinite(minutes) && minutes >= 150
}
