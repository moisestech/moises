import type { TrustSpeakerNote } from './types'

export const TRUST_SPEAKER_NOTES: readonly TrustSpeakerNote[] = [
  {
    chapterId: 'looks-right',
    interrupt: 'Wait for the first vote before you peel. Do not rescue the room with the environment card.',
    beats: [
      '0–2: Show only the polished card. Central question: should this AI output be allowed to act? Collect Allow / Ask / Deny. Do not debate yet.',
      '2–4: State the shared problem. Six-week launch. Synthetic fixture. October 6 is on the card. The calendar is still tentative.',
      '4–7: Teach Evidence, then Authority, then Impact. One example each. Fluent output is not grounded evidence, permission, or acceptable impact.',
      'Close the beat: you saw the answer. Not the system.',
    ],
  },
  {
    chapterId: 'four-lenses',
    interrupt: 'At 8:00 — designed pause for the in-character question. Do not treat it as a derail.',
    beats: [
      '7–8: Assign seats. LMS: they pick. Live: deal the cards. Combined Strategy/Design if the room is three.',
      'PM: what outcome or commitment is being made? Engineer: what source, tool, or permission? Design / strategy: who experiences the consequence?',
      '8–12: When the question arrives, name the lens, rephrase it for the room, inspect the case, invite an adjacent seat, return to Allow / Ask / Deny.',
      'Pattern: that question exposes an authority boundary. The card says messages were scheduled. Context only permits drafting.',
      'You are not standing outside the system. You are part of its harness.',
    ],
  },
  {
    chapterId: 'seeded-failures',
    interrupt: 'If you only have 15 minutes, stop after the re-vote. This is a complete lesson.',
    beats: [
      '12–15: Reveal the six seeded failures. Do not add new ones live.',
      'Ask for three by name. “Hallucination” alone is not enough.',
      'Re-vote. Most rooms move from Allow toward Ask or Deny.',
      'Line: a correct-looking answer can still be produced by an unsafe process.',
      'Transition: we inspected the output. Next we design the minimum harness that keeps these from becoming actions.',
    ],
  },
  {
    chapterId: 'the-loop',
    interrupt: 'Skip this chapter on the live 30-minute clock. It is self-guided depth.',
    beats: [
      'Live clock: jump from seeded failures to The Harness.',
      'If you stay here: Observe → Decide → Act → Check, then Stop / Ask / Continue.',
      'An eval tests this agent on this task with this data. A benchmark picks a model.',
      'Traditional ML: multiple choice. Agents: essays. Rubric, not answer key.',
      'Four metrics if asked: relevance, faithfulness, correctness, coherence.',
    ],
  },
  {
    chapterId: 'the-harness',
    beats: [
      '15–19: Read the harness line once, slowly.',
      'Match one control to each named failure. Then ask for one safeguard in a sentence.',
      'Sources, permissions, validation, review, record — that is the minimum.',
      'Team verdict. The model proposes. The team authorizes.',
      'Engineer-only aside if asked: Promptfoo, Ragas, LangSmith, Langfuse, Arize, Braintrust. Do not make other seats memorize the stack.',
    ],
  },
  {
    chapterId: 'transfer',
    beats: [
      '19–24: Do not walk Case B in advance. Transfer is the assessment.',
      'Eight points: Evidence, Authority, Impact, Control — 0 / 1 / 2 each. Target 6/8, no zero in Authority. Not a measured cohort claim.',
      '24–27: Role-switch teach-back. Each seat explains another lens in one sentence.',
      '27–30: Exit ticket: what changed your decision?',
      'Last line: you never know by watching it succeed once.',
    ],
  },
] as const

export function getTrustSpeakerNote(chapterId: TrustSpeakerNote['chapterId']) {
  return TRUST_SPEAKER_NOTES.find((note) => note.chapterId === chapterId)
}
