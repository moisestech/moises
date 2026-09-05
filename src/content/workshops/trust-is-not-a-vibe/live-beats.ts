import { TRUST_CHAPTERS } from './chapters'
import { formatTrustClock, TRUST_TIME_SEGMENTS, TRUST_TOTAL_MINUTES } from './time-budget'
import type { TrustAuthoredLiveBeat, TrustChapterId, TrustLiveBeat, TrustTimeSegmentId } from './types'

/**
 * The room-facing subdivision of the course clock.
 *
 * These used to be a second, hand-numbered timeline that disagreed with the
 * chapter budget: it opened at 0:00 with no Overview, gave Transfer eleven
 * minutes, and omitted The Loop entirely while one cue told the presenter to
 * "skip The Loop on the live clock". A facilitator following this table and a
 * learner following the chapter clocks were running different courses.
 *
 * Beats now declare only which segment they subdivide and how long they run.
 * Positions are derived from the budget, and `assertBeatsMatchBudget` fails the
 * build if a segment's beats do not sum to its budgeted minutes, so the two
 * cannot drift apart again.
 */
const AUTHORED: readonly TrustAuthoredLiveBeat[] = [
  {
    id: 'orient',
    segmentId: 'overview',
    minutes: 2.5,
    title: 'Frame the room. Hand out seats.',
    cue: 'What the next 28 minutes are for. Have the room pick a seat, or deal them.',
  },
  {
    id: 'open-vote',
    segmentId: 'looks-right',
    minutes: 1.5,
    title: 'Show the card. Vote first.',
    cue: 'Ask the central question. Collect Allow / Ask / Deny. Do not correct yet.',
  },
  {
    id: 'context',
    segmentId: 'looks-right',
    minutes: 1,
    title: 'Name the shared problem',
    cue: 'Made-up enrollment card. Restate the decision: may this system act?',
  },
  {
    id: 'teach-layers',
    segmentId: 'looks-right',
    minutes: 1.5,
    title: 'Evidence, Authority, Impact',
    cue: 'One example each. Then connect the three layers to Allow / Ask / Deny.',
  },
  {
    id: 'assign-lenses',
    segmentId: 'four-lenses',
    minutes: 1,
    title: 'Each seat writes one criterion',
    cue: 'PM: outcome. Engineer: source and permission. Design / strategy: who feels it.',
  },
  {
    id: 'role-inspect',
    segmentId: 'four-lenses',
    minutes: 3,
    title: 'Inspect through the interruption',
    interrupt: true,
    cue: 'Take the in-character question. Rephrase it. Use it. Invite an adjacent seat.',
  },
  {
    id: 'reveal-verdict',
    segmentId: 'seeded-failures',
    minutes: 4.5,
    title: 'Reveal failures. Vote again.',
    cue: 'Name three failures that are not “hallucination.” Each one becomes a future test case.',
  },
  {
    id: 'loop-anatomy',
    segmentId: 'the-loop',
    minutes: 2.5,
    title: 'Where the failure happened',
    cue: 'Observe → Decide → Act → Check, then Stop / Ask / Continue. Locate one failure on it.',
  },
  {
    id: 'loop-scoring',
    segmentId: 'the-loop',
    minutes: 2,
    title: 'What good means here',
    cue: 'Match words, compare meaning, or apply a rubric. The question decides the check.',
  },
  {
    id: 'harness-cases',
    segmentId: 'the-harness',
    minutes: 3.5,
    title: 'Golden set and controls',
    cue: 'Common, edge, known failure. Match one control to each named failure.',
  },
  {
    id: 'harness-graders',
    segmentId: 'the-harness',
    minutes: 2.5,
    title: 'Who or what checks',
    cue: 'Human, user, code, model — and the limits of each. Then re-run to catch regressions.',
  },
  {
    id: 'transfer',
    segmentId: 'transfer',
    minutes: 2.5,
    title: 'Unseen second case',
    cue: 'Do not walk Case B in advance. Same job, new card. Independent classification.',
  },
  {
    id: 'buffer',
    segmentId: 'buffer',
    minutes: 2,
    title: 'Discussion and questions',
    cue: 'What changed your decision? Open depth here if the room asks for metric names or tools.',
  },
] as const

const CHAPTER_IDS = new Set<string>(TRUST_CHAPTERS.map((chapter) => chapter.id))

function assertBeatsMatchBudget(): void {
  for (const segment of TRUST_TIME_SEGMENTS) {
    const authored = AUTHORED.filter((beat) => beat.segmentId === segment.id)
    if (authored.length === 0) {
      throw new Error(`Trust live clock has no beat for segment "${segment.id}".`)
    }
    const total = authored.reduce((sum, beat) => sum + beat.minutes, 0)
    // Compare in seconds; half-minute budgets make float equality unreliable.
    if (Math.round(total * 60) !== Math.round(segment.minutes * 60)) {
      throw new Error(
        `Trust live clock drift: segment "${segment.id}" is budgeted ${segment.minutes} min but its beats sum to ${total} min.`
      )
    }
  }
}

assertBeatsMatchBudget()

function segmentStart(id: TrustTimeSegmentId): number {
  const segment = TRUST_TIME_SEGMENTS.find((entry) => entry.id === id)
  if (!segment) throw new Error(`Unknown Trust time segment: ${id}`)
  return segment.startMin
}

export const TRUST_LIVE_BEATS: readonly TrustLiveBeat[] = AUTHORED.map((beat) => {
  // Offset within the beat's own segment, so a segment's beats stay contiguous
  // and anchored to the budget rather than to a running global total.
  const priorInSegment = AUTHORED.filter(
    (other) => other.segmentId === beat.segmentId && AUTHORED.indexOf(other) < AUTHORED.indexOf(beat)
  ).reduce((sum, other) => sum + other.minutes, 0)

  const startMin = segmentStart(beat.segmentId) + priorInSegment
  const endMin = startMin + beat.minutes

  return {
    ...beat,
    startMin,
    endMin,
    clock: `${formatTrustClock(startMin)}–${formatTrustClock(endMin)}`,
    chapterId: CHAPTER_IDS.has(beat.segmentId) ? (beat.segmentId as TrustChapterId) : undefined,
  }
})

export function getLiveBeatAtElapsed(elapsedMin: number): TrustLiveBeat {
  const clamped = Math.min(TRUST_TOTAL_MINUTES - 0.01, Math.max(0, elapsedMin))
  return (
    TRUST_LIVE_BEATS.find((beat) => clamped >= beat.startMin && clamped < beat.endMin) ??
    TRUST_LIVE_BEATS[TRUST_LIVE_BEATS.length - 1]
  )
}

/** Beat boundaries, for the cue pills on the countdown. */
export const TRUST_LIVE_CUE_MINUTES: readonly number[] = TRUST_LIVE_BEATS.map((beat) => beat.startMin)

/** When the designed in-character interruption lands. */
export const TRUST_INTERRUPT_BEAT = TRUST_LIVE_BEATS.find((beat) => beat.interrupt)
