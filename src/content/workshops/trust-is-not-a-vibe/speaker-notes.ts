import type { TrustSpeakerNote } from './types'

export const TRUST_SPEAKER_NOTES: readonly TrustSpeakerNote[] = [
  {
    chapterId: 'looks-right',
    interrupt: 'Wait for the first vote before you peel. Do not rescue the room with the environment card.',
    beats: [
      'Show only the polished card. Ask: would you let it act?',
      'Collect Allow / Ask / Deny as a baseline. Do not debate yet.',
      'Say the opening in English: the hardest part is not building the agent. Building is the fun part. The hard part is knowing whether the thing you just built is any good.',
      'One magical run is not production. That gap has a name: evaluation. Watching it succeed once is a vibe eval.',
      'Peel Evidence, then Authority, then Impact. Large labels. Technical words stay in your mouth.',
      'Close the beat: you saw the answer. Not the system.',
    ],
  },
  {
    chapterId: 'four-lenses',
    interrupt: 'Natural pause for a panel or host interruption. Hand out role cards. Combined Strategy/Design if the room is three.',
    beats: [
      'Assign seats. LMS: they pick. Live: deal the cards.',
      'Ask each seat: what would you need to see?',
      'Name the FDE problem: Painfully Alone — one person frames, builds, grades, and authorizes.',
      'From the lecture, in our voice: when it breaks you need where and why. You will not find that in transcripts at 2 a.m. That is why there are four seats.',
      'Seat translations: PM defines what good means. Eng names the checkable thing. Design makes Ask visible. Strategy names who owns a silent failure.',
      'Fourth wall: you are not standing outside the system. You are part of its harness.',
      'Do not flatten expertise. Let each seat keep its language.',
    ],
  },
  {
    chapterId: 'seeded-failures',
    interrupt: 'If you only have 15 minutes, stop after the re-vote. This is a complete lesson.',
    beats: [
      'Reveal the six seeded failures. Do not add new ones live.',
      'Ask for three by name. “Hallucination” alone is not enough.',
      'An agent is not one answer. It is a chain: pick a tool, call it, read the result, decide next. Failure can hide in any link.',
      'Benchmarks test the model. Same exam for everyone. Evals test this agent, on this task, with this data. A top-of-leaderboard model can still fall apart on this roster.',
      'If someone cites the one-third lab-to-deployed gap: that is from the source lecture, not a number we measured. Use it as a reason to evaluate before users feel it.',
      'Re-vote. Most rooms move from Allow toward Ask or Deny.',
      'Line: a correct-looking answer can still be produced by an unsafe process.',
      'If time is gone, thank the room and collect the exit line later.',
    ],
  },
  {
    chapterId: 'the-loop',
    beats: [
      'Draw Observe → Decide → Act → Check. Then add Stop / Ask / Continue.',
      'Only after that: context, tools, permissions, traces, evals, recovery.',
      'An eval is a structured, repeatable score. The only question: is the agent getting better, or did this change silently break it?',
      'An eval tests this agent on this task with this data. A benchmark picks a model.',
      'Traditional ML: multiple choice and an answer key. Agents: essays. A hundred good summaries can look nothing alike. Rubric, not answer key.',
      'Four metrics: relevance, faithfulness (groundedness — the hallucination check), correctness, coherence.',
      'Task changes the mix. Summarization: faithfulness, coverage, conciseness. Classification: accuracy / precision / recall / F1. Translation: meaning and fluency. RAG: faithfulness plus answer relevance — bad retrieval versus bad generation.',
      'Engineer-only if asked: three buckets — overlap (BLEU, ROUGE, blind to meaning), semantic (embeddings), model-based (LLM-as-judge, G-Eval).',
      'We evaluate traces we can see — not hidden chain-of-thought.',
    ],
  },
  {
    chapterId: 'the-harness',
    beats: [
      'Read the harness line once, slowly.',
      'The most important habit from the lecture: do not start by grabbing metrics off a list. Start with a golden set. Five to twenty cases. Common, annoying edge, every failure already seen. Metrics fall out of the cases.',
      'Four graders: human (gold, does not scale), user signals (after you ship — cannot be the safety net), code (cheap, instant, only when checkable), LLM-as-judge (calibrate on a human sample; length and position bias).',
      'Continuous loop: define good → cases → metrics → baseline → group failures → fix → rerun the same set. Catching the thing you broke is why the loop exists.',
      'Whac-a-mole: fix one, another pops. Providers can change the model under you overnight. Live failures flow back into the golden set.',
      'In software: CI/CD. In agents: CI/CD plus continuous evaluation and continuous monitoring.',
      'Engineer-only aside: Promptfoo and Ragas to run evals. LangSmith, Langfuse, Arize, Braintrust to trace. Do not make PM or Design memorize the stack.',
      'Team verdict. One safeguard. The model proposes. The team authorizes.',
    ],
  },
  {
    chapterId: 'transfer',
    beats: [
      'Do not walk Case B in advance. Transfer is the assessment.',
      'Eight points: Evidence, Authority, Impact, Control — 0 / 1 / 2 each.',
      'Exercise target: 6/8, no zero in Authority. Not a measured cohort claim.',
      'Exit ticket: what changed your decision?',
      'Last line, from the lecture, in our voice: you never know by watching it succeed once. You only know by measuring it on your data, again.',
      'Do not use the academy pitch or the sponsor demo. Those clocks are skipped on purpose.',
    ],
  },
] as const

export function getTrustSpeakerNote(chapterId: TrustSpeakerNote['chapterId']) {
  return TRUST_SPEAKER_NOTES.find((note) => note.chapterId === chapterId)
}
