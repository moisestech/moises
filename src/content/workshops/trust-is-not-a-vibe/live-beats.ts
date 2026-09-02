import type { TrustLiveBeat } from './types'

export const TRUST_LIVE_BEATS: readonly TrustLiveBeat[] = [
  {
    id: 'open-vote',
    startMin: 0,
    endMin: 2,
    title: 'Show the card. Vote first.',
    chapterId: 'looks-right',
    cue: 'Ask the central question. Collect Allow / Ask / Deny. Do not correct yet.',
  },
  {
    id: 'context',
    startMin: 2,
    endMin: 4,
    title: 'Name the shared problem',
    chapterId: 'looks-right',
    cue: 'Six-week launch. Synthetic fixture. Restate the decision: may this system act?',
  },
  {
    id: 'teach-layers',
    startMin: 4,
    endMin: 7,
    title: 'Evidence, Authority, Impact',
    chapterId: 'looks-right',
    cue: 'One example each. Then connect the three layers to Allow / Ask / Deny.',
  },
  {
    id: 'assign-lenses',
    startMin: 7,
    endMin: 8,
    title: 'Hand out seats',
    chapterId: 'four-lenses',
    cue: 'PM: outcome. Engineer: source and permission. Design / strategy: who feels it.',
  },
  {
    id: 'role-inspect',
    startMin: 8,
    endMin: 12,
    title: 'Inspect through the interruption',
    chapterId: 'four-lenses',
    interrupt: true,
    cue: 'At 8:00, take the in-character question. Rephrase it. Use it. Invite an adjacent seat.',
  },
  {
    id: 'reveal-verdict',
    startMin: 12,
    endMin: 15,
    title: 'Reveal failures. Vote again.',
    chapterId: 'seeded-failures',
    cue: 'Name three failures that are not “hallucination.” If time is gone, stop here.',
  },
  {
    id: 'harness',
    startMin: 15,
    endMin: 19,
    title: 'Minimum harness',
    chapterId: 'the-harness',
    cue: 'Match one control. Name one safeguard. Skip The Loop on the live clock.',
    skipOnLiveClock: false,
  },
  {
    id: 'transfer',
    startMin: 19,
    endMin: 24,
    title: 'Unseen second case',
    chapterId: 'transfer',
    cue: 'Do not walk Case B in advance. Independent classification.',
  },
  {
    id: 'teach-back',
    startMin: 24,
    endMin: 27,
    title: 'Role-switch teach-back',
    chapterId: 'transfer',
    cue: 'Each seat explains another lens in one sentence.',
  },
  {
    id: 'exit',
    startMin: 27,
    endMin: 30,
    title: 'Exit ticket',
    chapterId: 'transfer',
    cue: 'What changed your decision? Rubric on the unseen case.',
  },
] as const

export function getLiveBeatAtElapsed(elapsedMin: number): TrustLiveBeat {
  const clamped = Math.min(29.99, Math.max(0, elapsedMin))
  return (
    TRUST_LIVE_BEATS.find((beat) => clamped >= beat.startMin && clamped < beat.endMin) ??
    TRUST_LIVE_BEATS[TRUST_LIVE_BEATS.length - 1]
  )
}

export const TRUST_LIVE_CUE_MINUTES = [2, 4, 7, 8, 12, 15, 19, 24, 27] as const
