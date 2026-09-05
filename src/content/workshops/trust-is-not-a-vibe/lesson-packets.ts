import { TRUST_LOOKS_RIGHT_FRAME } from './cases'
import type { TrustChapterId, TrustRoleId } from './types'

/**
 * Learner-facing copy for the repeatable five-part lesson packet:
 * the idea, see it, try it, check it, your seat. Chapters are added here as
 * each one is rebuilt as a guided lesson.
 */
export type TrustLessonPacket = {
  chapterId: TrustChapterId
  where: string
  idea: string
  seeCaption: string
  tryPrompt: string
  doneBefore: string
  doneAfter: string
  /** One question per seat, specific to this chapter. */
  roleSignals: Partial<Record<TrustRoleId, string>>
}

export const TRUST_LESSON_PACKETS: Partial<Record<TrustChapterId, TrustLessonPacket>> = {
  // Where, do-now, and done-when reuse the locked frame copy rather than restating it.
  'looks-right': {
    chapterId: 'looks-right',
    where: TRUST_LOOKS_RIGHT_FRAME.where,
    idea: 'An enrollment product asked an agent what to do. The agent wrote a recommendation — a screen that looks finished. That screen is not proof the system behind it is safe. Decide Allow, Ask, or Deny from that screen alone, before you see what the agent read.',
    seeCaption: 'This is the enrollment screen the agent wrote. Nothing has been sent or changed.',
    tryPrompt: TRUST_LOOKS_RIGHT_FRAME.doNow,
    doneBefore: TRUST_LOOKS_RIGHT_FRAME.doneBefore,
    doneAfter: TRUST_LOOKS_RIGHT_FRAME.doneAfter,
    roleSignals: {
      pm: 'Is this outcome actually ready?',
      engineering: 'What evidence and permissions exist?',
      design: 'Can someone understand and stop it?',
      strategy: 'Who owns the consequence?',
    },
  },
  'four-lenses': {
    chapterId: 'four-lenses',
    where: '2 of 6 · Four Lenses',
    idea: 'Good depends on what your job must protect. Four seats read the same enrollment card and each one needs something different before it may act.',
    seeCaption: 'One card, four seats. Pick the seat you will keep for the rest of the class.',
    tryPrompt: 'Write one thing your seat must see before this card may act.',
    doneBefore: 'Done when you pick a seat and save one requirement.',
    doneAfter: 'Complete: your seat and your requirement are saved.',
    roleSignals: {
      pm: 'What outcome must be true before this is acceptable?',
      engineering: 'What evidence and permission can you verify?',
      design: 'Can a person see this coming and stop it?',
      strategy: 'Who owns the consequence when it scales?',
    },
  },
  'seeded-failures': {
    chapterId: 'seeded-failures',
    where: '3 of 6 · Seeded Failures',
    idea: 'A correct-looking card can hide planted failures that are not “it hallucinated.” Count mismatches, missing permission, and a skipped pause count.',
    seeCaption: 'The same send. Six problems were planted in the calendar, the roster, the 87%, the send permission, the removal, and the missing pause.',
    tryPrompt: 'Reveal the six failures. Name at least three.',
    doneBefore: 'Done when you name three failures and vote again.',
    doneAfter: 'Complete: three failures named and a second vote saved.',
    roleSignals: {
      pm: 'Which planted break would still ship if the prose were true?',
      engineering: 'Which failure is evidence, and which is permission?',
      design: 'Which failure would a participant feel first?',
      strategy: 'Which failure becomes policy if this send goes out?',
    },
  },
  'the-loop': {
    chapterId: 'the-loop',
    where: '4 of 6 · The Loop',
    idea: 'Locate each break on Observe, Decide, Act, Check, or Stop — not how the prose sounds. You are finding a stage in The send.',
    seeCaption: 'The loop is the map. Visible labels first; technical names sit on the token.',
    tryPrompt: 'Place at least three failures on the loop.',
    doneBefore: 'Done when three failures have a stage.',
    doneAfter: 'Complete: three failures are on the loop.',
    roleSignals: {
      pm: 'If you only graded the output, which stage would you never see?',
      engineering: 'Which stage is a data or permission break, not a wording break?',
      design: 'Where would a person have been able to stop this?',
      strategy: 'Which stage owns the consequence when this scales?',
    },
  },
  'the-harness': {
    chapterId: 'the-harness',
    where: '5 of 6 · The Harness',
    idea: 'The model proposes. The harness is what must be true before a write. Match a control, name one gate, then vote as a team.',
    seeCaption: 'Follow the run. See where each failure actually happened.',
    tryPrompt: 'Match a control to each break in The send.',
    doneBefore: 'Done when every failure has a control, a safeguard is named, and the team votes.',
    doneAfter: 'Complete: controls, safeguard, and team verdict are saved.',
    roleSignals: {
      pm: 'Which control would have stopped the write even if the card still looked finished?',
      engineering: 'Which control is a check you can run before the send?',
      design: 'Which control would a person see and understand?',
      strategy: 'Who owns the gate when this is no longer a one-off?',
    },
  },
  transfer: {
    chapterId: 'transfer',
    where: '6 of 6 · Transfer',
    idea: 'New card, same question. Recall of Case A is not the test — you only know by measuring on your data, again.',
    seeCaption: 'An unseen museum-intake case. Same Allow, Ask, or Deny.',
    tryPrompt: 'Vote on the unseen case.',
    doneBefore: 'Done when you vote and write the evaluation plan you would bring.',
    doneAfter: 'Complete: vote and plan are saved.',
    roleSignals: {
      pm: 'What outcome must be true before this unseen card may act?',
      engineering: 'What evidence and permission can you verify on a case you have not rehearsed?',
      design: 'Can someone understand and stop this new write?',
      strategy: 'Who owns the consequence if this intake ships?',
    },
  },
}

export function getTrustLessonPacket(chapterId: TrustChapterId): TrustLessonPacket | undefined {
  return TRUST_LESSON_PACKETS[chapterId]
}
