/**
 * One structured record per cohort. Change one or two things, not the course.
 */

export const COHORT_CHANGE_RULE = 'Change one or two things per cohort, not the whole course.' as const

export const COHORT_FORMATS = ['Core', 'Studio'] as const

export type CohortFormat = (typeof COHORT_FORMATS)[number]

export type QuotePermissionStatus = 'none' | 'asked' | 'granted' | 'declined'

export type CohortAfterAction = {
  host: string
  date: string
  format: CohortFormat
  facilitator: string
  participantCount: number
  completionCount: number
  passCount: number
  clarityBeforeAverage: number | null
  clarityAfterAverage: number | null
  reuseIntent: string
  topStallPoint: string
  mostCommonFriction: string
  topFacilitatorIntervention: string
  founderMinutes: number
  facilitatorMinutes: number
  quotePermissionStatus: QuotePermissionStatus
  oneRecommendedChange: string
  oneThingNotToChange: string
}

export function clarityDelta(report: Pick<CohortAfterAction, 'clarityBeforeAverage' | 'clarityAfterAverage'>): number | null {
  const { clarityBeforeAverage, clarityAfterAverage } = report
  if (clarityBeforeAverage == null || clarityAfterAverage == null) return null
  if (!Number.isFinite(clarityBeforeAverage) || !Number.isFinite(clarityAfterAverage)) return null
  return clarityAfterAverage - clarityBeforeAverage
}

export function recommendedChangeCount(changes: readonly string[]): number {
  return changes.map((item) => item.trim()).filter(Boolean).length
}

export function withinChangeBudget(changes: readonly string[]): boolean {
  const count = recommendedChangeCount(changes)
  return count >= 1 && count <= 2
}
