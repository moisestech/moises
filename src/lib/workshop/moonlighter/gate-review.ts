/** Shared Gate 1 review rules. The student page and the session API both use this. */

export const GATE1_RUBRIC = [
  'Silhouette',
  'Continuity',
  'Base & orientation',
  'Feature thickness',
  'Surface & slice',
] as const

export type GateRating = 'green' | 'amber' | 'red'

const RATINGS = new Set<GateRating>(['green', 'amber', 'red'])

export function parseGateRatings(input: unknown): Record<string, GateRating> | null {
  if (!input || typeof input !== 'object') return null
  const source = input as Record<string, unknown>
  const ratings = {} as Record<string, GateRating>
  for (const name of GATE1_RUBRIC) {
    const value = source[name]
    if (typeof value !== 'string' || !RATINGS.has(value as GateRating)) return null
    ratings[name] = value as GateRating
  }
  return ratings
}

export function rubricSummary(ratings: Record<string, GateRating>): string {
  return GATE1_RUBRIC.map((name) => `${name}: ${ratings[name]}`).join('\n')
}

export function rubricHasRed(summary: string): boolean {
  return summary.split('\n').some((line) => line.endsWith(': red'))
}

export function rubricHasAmber(summary: string): boolean {
  return summary.split('\n').some((line) => line.endsWith(': amber'))
}

export function projectSlug(sessionCode: string, participantId: string, title: string): string {
  const slug =
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'project'
  return `WKS-${sessionCode}-${participantId.slice(0, 8)}-${slug}`
}
