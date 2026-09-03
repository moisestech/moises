import type { TrustChapter, TrustChapterId } from './types'

export const TRUST_TITLE = 'Trust Is Not a Vibe'
export const TRUST_SUBTITLE = 'A field lab for evaluating AI before it acts.'
export { TRUST_SESSION_TITLE, TRUST_CENTRAL_QUESTION } from './types'
export const TRUST_PROBLEM_NAME = 'Painfully Alone'
export const TRUST_SECONDARY_LINE = 'No agent is an island.'
export const TRUST_THESIS = 'The model proposes. The system controls. The team authorizes.'
export const TRUST_ONE_LINE =
  'You never know an agent works by watching it succeed once. You know by measuring it on your data, again.'

export const TRUST_ISLAND_BEATS = [
  {
    id: 'proposes',
    line: 'The model proposes.',
    body: 'The agent writes a recommendation. That is a draft, not permission to act.',
    still: 'peelOpenHero' as const,
  },
  {
    id: 'controls',
    line: 'The system controls.',
    body: 'Checks, permissions, and the loop decide what that draft is allowed to touch.',
    still: 'fullHarness' as const,
  },
  {
    id: 'authorizes',
    line: 'The team authorizes.',
    body: 'Someone with a seat says Allow, Ask, or Deny before anything writes, sends, or ships.',
    still: 'verdictCards' as const,
  },
] as const

export const TRUST_ALONE_SLIDES = [
  { asset: 'peelOpenHero' as const, goalIndex: 0 },
  { asset: 'simpleLoop' as const, goalIndex: 1 },
  { asset: 'verdictCards' as const, goalIndex: 2 },
  { asset: 'roleLensCards' as const, goalIndex: 3 },
] as const

export const TRUST_CHAPTERS: readonly TrustChapter[] = [
  {
    id: 'looks-right',
    slug: 'looks-right',
    number: 1,
    clock: '0–5',
    durationHint: '~5 min',
    title: 'Looks Right',
    summary:
      'A polished agent card asks for a launch. Vote Allow, Ask, or Deny before you see the system. Then peel the output open: Evidence, Authority, Impact.',
    objectives: [
      'Record a baseline judgment from the output alone.',
      'Separate a good-looking answer from the process that produced it.',
      'Name Evidence, Authority, and Impact as three layers under the card.',
    ],
    keyIdeas: [
      'The hardest part is not building the agent. It is knowing whether it is any good.',
      'Watching it succeed once is a vibe eval, not evidence.',
      'You graded the answer. You have not graded the system.',
      'Looks right is not the same as may act.',
    ],
    checkpoint: 'Save a baseline Allow / Ask / Deny vote.',
    videoClip: {
      title: 'The hardest part is knowing whether it works',
      status: 'pending',
      durationHint: '45–90s',
      sourceNote: 'Instructor clip pending. Maps to evals video 0:00–3:10, rewritten in our voice.',
    },
  },
  {
    id: 'four-lenses',
    slug: 'four-lenses',
    number: 2,
    clock: '5–10',
    durationHint: '~5 min',
    title: 'Four Lenses',
    summary:
      'Same card — The send. Pick the job you will keep. Write one thing that job must see before this send may go out.',
    objectives: [
      'Choose one seat and stay with it for the rest of the lab.',
      'Write one thing that seat would need to see before the agent may act.',
      'Notice the blind spot that seat usually misses.',
    ],
    keyIdeas: [
      'When the agent breaks you need where and why — not a 2 a.m. transcript read.',
      'Cross-functional review is part of the technical harness, not administrative overhead.',
      'Role collapse is how a fast FDE becomes the system’s only safeguard.',
      'You are not standing outside the system anymore.',
    ],
    checkpoint: 'Select a seat and save one “I need to see” note.',
    videoClip: {
      title: 'Four seats, one case',
      status: 'pending',
      durationHint: '45–90s',
      sourceNote: 'Instructor clip pending. No source-video mapping — this beat is ours.',
    },
  },
  {
    id: 'seeded-failures',
    slug: 'seeded-failures',
    number: 3,
    clock: '10–15',
    durationHint: '~5 min',
    title: 'Seeded Failures',
    summary:
      'Six problems were planted in The send — calendar, roster, 87%, send permission, auto-removal, and the missing pause. Reveal them. Name three. Vote again.',
    objectives: [
      'Identify at least three seeded failures beyond “hallucination.”',
      'Re-vote after seeing Evidence, Authority, and Impact.',
      'Close the first 15 minutes with a complete lesson, even if the room stops here.',
    ],
    keyIdeas: [
      'An agent is a chain of decisions, not one answer. Failure can hide in any link.',
      'Benchmarks test a model. Evals test this agent, on this task, with this data.',
      'Failure is not only made-up facts. It is also count mismatches, missing permission, and skipped escalation.',
      'A good-looking output can still come from a bad agent.',
      'The first 15 minutes is a full arc: vote, peel, inspect, reveal, re-vote.',
    ],
    checkpoint: 'Name three failures and save a second vote.',
    videoClip: {
      title: 'You graded the answer, not the system',
      status: 'pending',
      durationHint: '45–90s',
      sourceNote: 'Instructor clip pending. Maps to evals video 3:10–5:46 (eval vs benchmark).',
    },
  },
  {
    id: 'the-loop',
    slug: 'the-loop',
    number: 4,
    clock: '15–20',
    durationHint: '~5 min',
    title: 'The Loop',
    summary:
      'Give each failure a location: Observe, Decide, Act, Check, then Stop / Ask / Continue. Simple labels first. Technical vocabulary in the notes.',
    objectives: [
      'Place at least three failures on the observable agent loop.',
      'Distinguish output quality from the path that produced it.',
      'Say what an eval measures, in one sentence.',
    ],
    keyIdeas: [
      'An eval is a repeatable score for this agent, on this task, with this data — not a leaderboard.',
      'It answers one question: is the agent getting better, or did this change silently break it?',
      'Traditional ML graded multiple choice. Agents write essays. You need a rubric, not an answer key.',
      'Four metrics: relevance, faithfulness, correctness, coherence. The mix depends on the task.',
      'Three buckets: overlap, semantic, model-based. Most agent work needs a judge, not word overlap.',
      'We evaluate observable traces, not hidden chain-of-thought.',
    ],
    checkpoint: 'Place three failures on the loop.',
    videoClip: {
      title: 'From multiple choice to essay',
      status: 'pending',
      durationHint: '45–90s',
      sourceNote: 'Instructor clip pending. Maps to evals video 5:46–9:48 (ML vs LLM; four metrics).',
    },
  },
  {
    id: 'the-harness',
    slug: 'the-harness',
    number: 5,
    clock: '20–25',
    durationHint: '~5 min',
    title: 'The Harness',
    summary:
      'Match one control to each failure. Learn the golden-case rule. Decide Allow, Ask, or Deny as a team — with one safeguard named.',
    objectives: [
      'Match a primary control to each discovered failure.',
      'Repeat the harness distinction: eval, guardrail, approval, trace, fallback.',
      'Make and defend a team verdict.',
    ],
    keyIdeas: [
      'Do not start by grabbing metrics off a list. Start with a golden set of cases.',
      'Four graders: human, user signals, code, LLM-as-judge. Calibrate the judge on a human sample.',
      'User signals arrive after you ship. They cannot be the safety net.',
      'The loop exists to catch the thing you broke when you fixed something else.',
      'Whac-a-mole: fix one, another pops. A provider can change the model under you overnight.',
    ],
    checkpoint: 'Match one control per failure, then choose Allow, Ask, or Deny.',
    videoClip: {
      title: 'Golden cases first, then the loop',
      status: 'pending',
      durationHint: '45–90s',
      sourceNote:
        'Instructor clip pending. Maps to evals video 13:56–21:04 (golden set, four graders, continuous loop). Skip 9:48–12:20 sponsor block.',
    },
  },
  {
    id: 'transfer',
    slug: 'transfer',
    number: 6,
    clock: '25–30',
    durationHint: '~5 min',
    title: 'Transfer',
    summary:
      'An unseen museum-intake case. Score Evidence, Authority, Impact, and Control. Write what changed your decision.',
    objectives: [
      'Transfer the framework to a case you have not rehearsed.',
      'Reach an exercise target of 6/8 with no zero in Authority.',
      'Name the mechanism that changed the first vote.',
    ],
    keyIdeas: [
      'Transfer is the test. Recall of Case A is not.',
      '6/8 is an exercise target, not a measured cohort claim.',
      TRUST_ONE_LINE,
    ],
    checkpoint: 'Complete the eight-point rubric and the exit ticket.',
    videoClip: {
      title: 'The one thing to remember',
      status: 'pending',
      durationHint: '45–90s',
      sourceNote: 'Instructor clip pending. Maps to evals video 21:04–21:34. Do not use the academy pitch.',
    },
  },
] as const

export function getTrustChapter(slug: string): TrustChapter | undefined {
  return TRUST_CHAPTERS.find((chapter) => chapter.slug === slug)
}

export function getTrustChapterIndex(slug: string): number {
  return TRUST_CHAPTERS.findIndex((chapter) => chapter.slug === slug)
}

export function getAdjacentTrustChapters(slug: string): {
  prev: TrustChapter | null
  next: TrustChapter | null
} {
  const index = getTrustChapterIndex(slug)
  if (index < 0) return { prev: null, next: null }
  return {
    prev: index > 0 ? TRUST_CHAPTERS[index - 1] ?? null : null,
    next: index < TRUST_CHAPTERS.length - 1 ? TRUST_CHAPTERS[index + 1] ?? null : null,
  }
}

export const TRUST_CHAPTER_SLUGS = TRUST_CHAPTERS.map((chapter) => chapter.slug) as TrustChapterId[]

export const TRUST_OUTCOMES = [
  {
    title: 'See past the card',
    body: 'Given a confident recommendation, find at least three failure modes that are not “it hallucinated.”',
  },
  {
    title: 'Locate the failure',
    body: 'Place those failures on Observe, Decide, Act, Check, or Stop — using the visible labels first.',
  },
  {
    title: 'Choose an action',
    body: 'Classify Allow, Ask, or Deny, and justify one control before anyone uses the output.',
  },
  {
    title: 'Keep your seat',
    body: 'Explain what Product, Engineering, Design, or Strategy uniquely contributes to the harness.',
  },
] as const

export const TRUST_FOUR_SEATS_LEAD =
  'Four people inspect one recommendation. The case does not change when the seat does.'

export const TRUST_FOUR_SEATS_BODY =
  'The object is The send: an invented card that wants to confirm October 6, email 120 people, and auto-remove quiet participants. Product, Engineering, Design, and Strategy each ask a different question of that same card. Pick one job and keep it. You can change it later — the section stays here.'

export const TRUST_QUICK_FACTS = [
  { label: 'Seats', value: 'PM · Eng · Design · Strategy' },
  { label: 'Mode', value: 'Self-guided or facilitated' },
  { label: 'Cases', value: 'Two cases' },
] as const
