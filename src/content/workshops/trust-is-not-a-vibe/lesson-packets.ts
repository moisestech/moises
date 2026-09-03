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
    idea: 'A finished-looking answer is not proof that the system behind it is safe. Make your first call from the card alone, before you see what it read.',
    seeCaption: 'The card is all you get for now. Nothing has been sent or changed.',
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
}

export function getTrustLessonPacket(chapterId: TrustChapterId): TrustLessonPacket | undefined {
  return TRUST_LESSON_PACKETS[chapterId]
}
