import { TRUST_CENTRAL_QUESTION, type TrustChapterId } from './types'

export type TrustChapterPath = {
  chapterId: TrustChapterId
  learnerBrief: string
  outcome: string
  question: string
  object: string
  action: string
  misconception: string
  fallback: string
  advanceWhen: string
  expectedResponse: string
  probe: string
  transition: string
}

export const TRUST_CHAPTER_PATH: Record<TrustChapterId, TrustChapterPath> = {
  'looks-right': {
    chapterId: 'looks-right',
    learnerBrief:
      'An agent wants to confirm October 6, email 120 people, and auto-remove quiet participants. Vote from that card alone — before you see what it read.',
    outcome: 'Record a baseline judgment from the output alone, then name Evidence, Authority, and Impact.',
    question: TRUST_CENTRAL_QUESTION,
    object: 'The send — typed AgentOutputCard. The studio still is atmosphere, not the fixture.',
    action: 'Vote Allow, Ask, or Deny. Then open the box.',
    misconception: 'A finished-looking card is evidence that the system is safe.',
    fallback: 'If the still fails to load, the HTML card is the entire exercise.',
    advanceWhen: 'A baseline vote is saved.',
    expectedResponse: 'Most rooms Allow or Ask. Few Deny before the peel.',
    probe: 'What would have to be true for this send to be safe?',
    transition: 'You graded the answer. Next: four seats look at the same card.',
  },
  'four-lenses': {
    chapterId: 'four-lenses',
    learnerBrief:
      'Same card. Pick the job you will keep. Write one thing that job must see before this send may go out.',
    outcome: 'Choose one seat and write one thing that seat must see before the agent may act.',
    question: 'What does your seat uniquely need to see?',
    object: 'Four seat cards on one case. Role picker is the exercise.',
    action: 'Pick Product, Engineering, Design, or Strategy. Save one “I need to see” note.',
    misconception: 'Cross-functional review is extra process around a finished technical decision.',
    fallback: 'If images fail, the seat buttons and prompt still run the chapter.',
    advanceWhen: 'A seat and a need-to-see note are saved.',
    expectedResponse: 'Product names an outcome. Engineering names a source or permission. Design or strategy names who is affected.',
    probe: 'What would your adjacent seat catch that you just skipped?',
    transition: 'You are inside the harness. Next: name the failures already in the card.',
  },
  'seeded-failures': {
    chapterId: 'seeded-failures',
    learnerBrief:
      'Six problems were planted in that same card: the calendar, the roster, the 87%, the send permission, the removal, and the missing pause. Reveal them. Name three. Vote again.',
    outcome: 'Name at least three seeded failures that are not “it hallucinated,” then vote again.',
    question: 'What failed in the system that produced this card?',
    object: 'Failure tokens. The interactive names are the exercise.',
    action: 'Reveal the six failures, name three, re-vote.',
    misconception: 'Failure means made-up facts. Count mismatches and missing permission do not count.',
    fallback: 'Tokens and the second vote work without the atlas still.',
    advanceWhen: 'Three failures are named and a second vote is saved.',
    expectedResponse: 'Rooms usually move from Allow toward Ask or Deny.',
    probe: 'Which failure would still be there if every sentence on the card were true?',
    transition: 'A correct-looking answer can come from an unsafe process. Next: locate each failure on the loop.',
  },
  'the-loop': {
    chapterId: 'the-loop',
    learnerBrief:
      'Put each failure you named on the loop — Observe, Decide, Act, Check, or Stop. You are locating a break in The send, not grading the prose.',
    outcome: 'Place at least three failures on Observe, Decide, Act, Check, or Stop.',
    question: 'Where in the loop did this fail — not how the prose sounds?',
    object: 'Loop mapper. The SVG diagram is a map, not a dashboard.',
    action: 'Drag or assign each named failure to a stage.',
    misconception: 'An eval is a leaderboard score for a model, not a test of this agent on this task.',
    fallback: 'The mapper and the stage list work if the loop still is missing.',
    advanceWhen: 'Three failures have a stage.',
    expectedResponse: 'Date and roster land in Observe. Forecast in Decide. Send and removal in Act. Missing pause in Stop.',
    probe: 'If you only graded the output, which stage would you never see?',
    transition: 'You located the breaks. Next: match a control to each one.',
  },
  'the-harness': {
    chapterId: 'the-harness',
    learnerBrief:
      'Match a control to each break in The send, then name one gate that would stop the write even if the card still looked finished.',
    outcome: 'Match one control to each failure and name one safeguard before a team verdict.',
    question: 'What must be true before this may act?',
    object: 'Control match. The six verbs stay interactive. Any photograph is documentation only.',
    action: 'Match controls, write one safeguard, vote as a team.',
    misconception: 'Human review is a safeguard. A named gate is a safeguard.',
    fallback: 'Control buttons and the verdict work without a printed-card still.',
    advanceWhen: 'Every failure has a control, a safeguard is written, and a team verdict is saved.',
    expectedResponse: 'Ground the date and forecast. Validate the roster. Restrict the send. Approve removal.',
    probe: 'Which control would have stopped the write even if the card still looked finished?',
    transition: 'The model proposes. The team authorizes. Next: an unseen case.',
  },
  transfer: {
    chapterId: 'transfer',
    learnerBrief: 'New card, same question. Should this unseen output be allowed to act?',
    outcome: 'Transfer the framework to an unseen case and write what changed the first vote.',
    question: 'Should this unseen output be allowed to act?',
    object: 'Case B card, rubric, teach-back, exit ticket.',
    action: 'Vote, score Evidence / Authority / Impact / Control, write the exit ticket.',
    misconception: 'Recalling Case A is the same as being able to judge a new one.',
    fallback: 'The typed Case B card and rubric are the assessment if the transfer still fails.',
    advanceWhen: 'A transfer vote is saved and the five-field evaluation plan is filled.',
    expectedResponse: 'Ask or Deny. A zero in Authority means the write is not safe.',
    probe: 'What mechanism — not what vibe — moved you from the first vote?',
    transition: 'You never know by watching it succeed once.',
  },
}

export function getTrustChapterPath(chapterId: TrustChapterId): TrustChapterPath {
  return TRUST_CHAPTER_PATH[chapterId]
}
