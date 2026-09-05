import type { TrustSpeakerNote } from './types'

export const TRUST_SPEAKER_NOTES: readonly TrustSpeakerNote[] = [
  {
    chapterId: 'looks-right',
    interrupt: 'Wait for the first vote before you peel. Do not rescue the room with the environment card.',
    beats: [
      '2:30–4:00: Show only the polished card. Central question: should this AI output be allowed to act? Collect Allow / Ask / Deny. Do not debate yet.',
      '4:00–5:00: State the shared problem. Made-up enrollment card. October 6 is on the card. The calendar is still tentative.',
      '5:00–6:30: Teach Evidence, then Authority, then Impact. One example each. Fluent output is not grounded evidence, permission, or acceptable impact.',
      'Close the beat: you saw the answer. Not the system. One success is not reliability evidence.',
    ],
  },
  {
    chapterId: 'four-lenses',
    interrupt: 'At 7:30 — designed pause for the in-character question. Do not treat it as a derail.',
    beats: [
      '6:30–7:30: Assign seats. LMS: they pick. Live: deal the cards. Combined Strategy/Design if the room is three.',
      'PM: what outcome or commitment is being made? Engineer: what source, tool, or permission? Design / strategy: who experiences the consequence?',
      'Each seat writes one criterion for the same send. That criterion comes back in The Harness.',
      '7:30–10:30: When the question arrives, name the lens, rephrase it for the room, inspect the case, invite an adjacent seat, return to Allow / Ask / Deny.',
      'Pattern: that question exposes an authority boundary. The card says messages were scheduled. Context only permits drafting.',
      'You are not standing outside the system. You are part of its harness.',
    ],
  },
  {
    chapterId: 'seeded-failures',
    interrupt: 'If the room is running long, stop after the re-vote. This is a complete lesson on its own.',
    beats: [
      '10:30–15:00: Reveal the six seeded failures. Do not add new ones live.',
      'Ask for three by name. “Hallucination” alone is not enough.',
      'Re-vote. Most rooms move from Allow toward Ask or Deny.',
      'Line: a correct-looking answer can still be produced by an unsafe process.',
      'Each failure you just named becomes a test case you keep. Transition: next, where in the run did it happen?',
    ],
  },
  {
    chapterId: 'the-loop',
    beats: [
      '15:00–17:30: Observe → Decide → Act → Check, then Stop / Ask / Continue. Put one named failure on the loop and ask which step let it through.',
      'An eval checks this agent on this task with this data. A benchmark compares models. Different questions.',
      '17:30–19:30: Three ways to check an answer — match the words, compare the meaning, or apply a rubric. The question decides the check.',
      'Deterministic checks first: if a date can be looked up, do not ask a model to judge it.',
      'Metric names live in Go deeper. Only open it if the room asks.',
    ],
  },
  {
    chapterId: 'the-harness',
    beats: [
      '19:30–23:00: Read the harness line once, slowly. Then build the golden set: common, edge, known failure.',
      'Match one control to each named failure. Sources, permissions, validation, review, record — that is the minimum.',
      '23:00–25:30: Four graders — human, user, code, model — and the limit of each. Then re-run the set so a fix does not break what already worked.',
      'Team verdict. The model proposes. The team authorizes.',
      'Engineer-only aside if asked: Promptfoo, Ragas, LangSmith, Langfuse, Phoenix, Braintrust. It is in Go deeper. Do not make other seats memorize the stack.',
    ],
  },
  {
    chapterId: 'transfer',
    beats: [
      '25:30–28:00: Do not walk Case B in advance. Transfer is the assessment. New card, same job.',
      'They write the five-field plan: cases, criteria, graders, evidence, decision.',
      'Buffer 28:00–30:00: what changed your decision? Take questions here.',
      'Rubric and teach-back are in Go deeper if the room wants them.',
      'Last line: you never know by watching it succeed once.',
    ],
  },
] as const

export function getTrustSpeakerNote(chapterId: TrustSpeakerNote['chapterId']) {
  return TRUST_SPEAKER_NOTES.find((note) => note.chapterId === chapterId)
}
