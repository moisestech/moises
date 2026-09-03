import { TRUST_CHAPTERS } from './chapters'
import type { TrustChapterId } from './types'

/**
 * One source for the course clock. Chapters carry their own `minutes`; the
 * running clock is derived here so no page hard-codes a time that drifts.
 *
 * The clock starts on the Overview, not on the first chapter. Required content
 * is budgeted at 28 minutes, leaving two minutes for transitions and
 * discussion when the course is presented live. Anything inside a "Go deeper"
 * disclosure is optional and is excluded from these numbers.
 */
export const TRUST_OVERVIEW_MINUTES = 2.5
export const TRUST_BUFFER_MINUTES = 2

export type TrustTimeSegmentId = 'overview' | TrustChapterId | 'buffer'

export type TrustTimeSegment = {
  id: TrustTimeSegmentId
  label: string
  minutes: number
  /** Running position, e.g. `2:30–6:30`. */
  clock: string
  /** Standalone length, e.g. `4 min 30 s`. */
  durationHint: string
}

function formatClock(minutes: number): string {
  const whole = Math.floor(minutes)
  const seconds = Math.round((minutes - whole) * 60)
  return `${whole}:${String(seconds).padStart(2, '0')}`
}

function formatDuration(minutes: number): string {
  const whole = Math.floor(minutes)
  const seconds = Math.round((minutes - whole) * 60)
  return seconds ? `${whole} min ${seconds} s` : `${whole} min`
}

const SEGMENT_SOURCE: readonly { id: TrustTimeSegmentId; label: string; minutes: number }[] = [
  { id: 'overview', label: 'Overview', minutes: TRUST_OVERVIEW_MINUTES },
  ...TRUST_CHAPTERS.map((chapter) => ({
    id: chapter.id as TrustTimeSegmentId,
    label: chapter.title,
    minutes: chapter.minutes,
  })),
  { id: 'buffer', label: 'Buffer', minutes: TRUST_BUFFER_MINUTES },
]

export const TRUST_TIME_SEGMENTS: readonly TrustTimeSegment[] = SEGMENT_SOURCE.reduce<TrustTimeSegment[]>(
  (segments, segment) => {
    const start = segments.reduce((total, done) => total + done.minutes, 0)
    segments.push({
      id: segment.id,
      label: segment.label,
      minutes: segment.minutes,
      clock: `${formatClock(start)}–${formatClock(start + segment.minutes)}`,
      durationHint: formatDuration(segment.minutes),
    })
    return segments
  },
  []
)

function segment(id: TrustTimeSegmentId): TrustTimeSegment {
  const found = TRUST_TIME_SEGMENTS.find((entry) => entry.id === id)
  if (!found) throw new Error(`Unknown Trust time segment: ${id}`)
  return found
}

export const TRUST_CHAPTER_TIME = Object.fromEntries(
  TRUST_CHAPTERS.map((chapter) => [chapter.id, segment(chapter.id)])
) as Record<TrustChapterId, TrustTimeSegment>

export const TRUST_OVERVIEW_TIME = segment('overview')

/** Required path only. Excludes the presentation buffer and all optional depth. */
export const TRUST_REQUIRED_MINUTES =
  TRUST_OVERVIEW_MINUTES + TRUST_CHAPTERS.reduce((total, chapter) => total + chapter.minutes, 0)

export const TRUST_TOTAL_MINUTES = TRUST_REQUIRED_MINUTES + TRUST_BUFFER_MINUTES
