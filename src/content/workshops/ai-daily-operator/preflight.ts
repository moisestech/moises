/**
 * Founder Attention OS — preflight checklists.
 *
 * These keep the first pilot operationally simple:
 * no integrations required, minimum-safe context, synthetic fallback available.
 */

export type PreflightItem = {
  id: string
  label: string
  required: boolean
}

export const HOST_PREFLIGHT: readonly PreflightItem[] = [
  { id: 'format', label: 'Confirm in-person or virtual format.', required: true },
  { id: 'cohort-size', label: 'Confirm expected participant count.', required: true },
  { id: 'protected-time', label: 'Protect the full session window with no competing agenda.', required: true },
  { id: 'wifi', label: 'Confirm reliable Wi-Fi.', required: true },
  { id: 'screen', label: 'Confirm projector / shared screen when in person.', required: false },
  { id: 'device', label: 'Participants bring a laptop or phone.', required: true },
  { id: 'ai-access', label: 'Participants can access ChatGPT or Claude.', required: true },
  { id: 'no-integrations', label: 'Communicate that Level I requires no business integrations.', required: true },
  { id: 'privacy', label: 'Share the minimum-safe-context privacy note.', required: true },
  { id: 'synthetic', label: 'Synthetic fallback case is available.', required: true },
  { id: 'accessibility', label: 'Ask the host about accessibility needs before the session.', required: true },
  { id: 'feedback', label: 'Confirm completion and feedback expectations.', required: true },
] as const

export const PARTICIPANT_PRESESSION: readonly PreflightItem[] = [
  { id: 'outcome', label: 'Bring one 30-day outcome you genuinely care about.', required: true },
  { id: 'commitments', label: 'Bring your current commitments, deadlines, and follow-ups.', required: true },
  { id: 'opportunities', label: 'Bring one or two open opportunities or money/mission signals.', required: true },
  { id: 'schedule', label: 'Have your current schedule or calendar available for reference.', required: true },
  { id: 'tool', label: 'Be able to use ChatGPT or Claude.', required: true },
  { id: 'privacy', label: 'Do not bring passwords, credentials, regulated data, or confidential records you cannot share.', required: true },
] as const

export const FACILITATOR_PREFLIGHT: readonly PreflightItem[] = [
  { id: 'toolkit', label: 'Open the Level I toolkit before participants arrive.', required: true },
  { id: 'synthetic', label: 'Open the synthetic case as a fallback.', required: true },
  { id: 'projection', label: 'Test projection / screen sharing.', required: true },
  { id: 'timer', label: 'Have a visible timer for the run-of-show.', required: true },
  { id: 'backup-model', label: 'Have a backup AI tool available if one service is unavailable.', required: true },
  { id: 'privacy-language', label: 'Review the minimum-safe-context privacy language.', required: true },
  { id: 'assessment', label: 'Confirm the assessment and completion flow is working.', required: true },
  { id: 'after-action', label: 'Open the cohort after-action template before the session.', required: true },
] as const

export function requiredPreflightIds(items: readonly PreflightItem[]): string[] {
  return items.filter((item) => item.required).map((item) => item.id)
}

export function preflightComplete(items: readonly PreflightItem[], completedIds: readonly string[]): boolean {
  const completed = new Set(completedIds)
  return requiredPreflightIds(items).every((id) => completed.has(id))
}
