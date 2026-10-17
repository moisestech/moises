/**
 * Autonomy ladder for a Founder Attention OS facilitator.
 * Advancement is observational. This is not a license.
 */

export const DELEGATION_RUNGS = [
  { level: 0, name: 'Observe', does: 'Watches a session and records the scorecard. Does not teach.' },
  { level: 1, name: 'Co-facilitate', does: 'Runs a bounded segment while Moises holds the room.' },
  { level: 2, name: 'Lead with oversight', does: 'Leads Core. Moises is present and can intervene.' },
  { level: 3, name: 'Approved independent facilitator', does: 'Leads Core without Moises in the room. Still uses the after-action report.' },
] as const

export type DelegationRung = (typeof DELEGATION_RUNGS)[number]['level']

export const DELEGATION_PRESERVATION_RULES = [
  'The four lenses: Commitments, Revenue or Mission, Risk, Capacity.',
  'Fact, interpretation, and recommendation stay separate.',
  'Unknown stays unknown.',
  'Recommend, explain, ask, then act.',
  'Friction is named before any automation.',
  'Privacy language and the synthetic fallback are ready.',
  'Completion, assessment, and feedback follow the Level I protocol.',
  'Core pacing holds at 90 minutes.',
] as const

export function canAdvanceRung(current: DelegationRung, rulesPreserved: readonly boolean[]): boolean {
  if (current >= 3) return false
  if (rulesPreserved.length !== DELEGATION_PRESERVATION_RULES.length) return false
  return rulesPreserved.every(Boolean)
}

export function nextRung(current: DelegationRung, rulesPreserved: readonly boolean[]): DelegationRung {
  if (!canAdvanceRung(current, rulesPreserved)) return current
  return (current + 1) as DelegationRung
}
