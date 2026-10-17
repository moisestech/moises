/**
 * Internal facilitator measurement for Founder Attention OS.
 * Not a license, not a public price, and not tied to a named outside teacher.
 */

export const MOISES_CONTRIBUTION_METRIC = 'Moises gross contribution / Moises hours' as const

export const FACILITATOR_SCORECARD_CRITERIA = [
  { id: 'method-fidelity', label: 'Method fidelity', prompt: 'Did the session stay on attention, judgment, and one improvement?' },
  { id: 'four-lenses', label: 'Four-lens fidelity', prompt: 'Were Commitments, Revenue or Mission, Risk, and Capacity actually used?' },
  { id: 'fact-interpretation', label: 'Fact / Interpretation / Recommendation', prompt: 'Could participants separate what happened, what it means, and what to do?' },
  { id: 'unknown', label: 'Unknown stays unknown', prompt: 'Was missing information left unknown instead of filled in?' },
  { id: 'approval', label: 'Approval boundaries', prompt: 'Did Recommend, Explain, Ask, Act stay visible before a consequential step?' },
  { id: 'beginner', label: 'Beginner handling', prompt: 'Could a nontechnical participant finish without an integration?' },
  { id: 'pacing', label: 'Pacing', prompt: 'Did Core still fit 90 minutes, with recovery instead of new curriculum?' },
  { id: 'no-automation', label: 'No premature automation', prompt: 'Was friction left as evidence during the first breakthrough?' },
  { id: 'completion', label: 'Participant completion', prompt: 'How many people left with the required Level I artifacts?' },
  { id: 'pass-rate', label: 'Assessment pass rate', prompt: 'How many scored at least 8 of 10?' },
  { id: 'clarity', label: 'Clarity improvement', prompt: 'Did clarity-after rise from clarity-before?' },
  { id: 'interventions', label: 'Founder interventions', prompt: 'How many times did Moises have to rescue the room?' },
  { id: 'founder-minutes', label: 'Founder minutes', prompt: 'Minutes Moises spent in the room beyond the planned role.' },
  { id: 'prep-minutes', label: 'Facilitator prep minutes', prompt: 'Minutes the facilitator spent preparing.' },
  { id: 'followup-minutes', label: 'Facilitator follow-up minutes', prompt: 'Minutes the facilitator spent after the session.' },
] as const

export type FacilitatorScorecardCriterionId = (typeof FACILITATOR_SCORECARD_CRITERIA)[number]['id']

export type FacilitatorRoleHours = {
  founderMinutes: number
  facilitatorPrepMinutes: number
  facilitatorFollowUpMinutes: number
  sessionMinutes: number
}

/** Gross contribution divided by founder hours. Null when hours are zero. */
export function moisesContributionPerHour(grossContribution: number, founderHours: number): number | null {
  if (!Number.isFinite(grossContribution) || !Number.isFinite(founderHours) || founderHours <= 0) return null
  return grossContribution / founderHours
}

export function founderHoursFromMinutes(minutes: number): number {
  if (!Number.isFinite(minutes) || minutes <= 0) return 0
  return minutes / 60
}
