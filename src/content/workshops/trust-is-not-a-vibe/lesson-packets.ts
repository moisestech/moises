import { TRUST_LOOKS_RIGHT_FRAME } from './cases'
import type { TrustPlaceholderKey } from './placeholders'
import type { TrustChapterId, TrustRoleId } from './types'

export type TrustIdeaTerm = {
  term: string
  meaning: string
}

export type TrustRoleChoice = {
  id: string
  label: string
}

/** One graded question for one seat on one chapter. */
export type TrustRoleCheck = {
  prompt: string
  choices: readonly TrustRoleChoice[]
  correct: string
  because: string
}

function roleCheck(
  prompt: string,
  a: string,
  b: string,
  c: string,
  correct: 'a' | 'b' | 'c',
  because: string
): TrustRoleCheck {
  return {
    prompt,
    choices: [
      { id: 'a', label: a },
      { id: 'b', label: b },
      { id: 'c', label: c },
    ],
    correct,
    because,
  }
}

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
  /** Lead copy when See it looks at the specimen (Four Lenses card mode). */
  seeLead?: string
  tryPrompt: string
  doneBefore: string
  doneAfter: string
  /** One question per seat, specific to this chapter. Shown as the Try it hint. */
  roleSignals: Partial<Record<TrustRoleId, string>>
  /** One graded check per seat. Shown in Check it. */
  roleChecks: Record<TrustRoleId, TrustRoleCheck>
  /** Extra idea paragraphs. When omitted, `idea` is the single paragraph. */
  ideaParagraphs?: readonly string[]
  /** Working terms this chapter teaches. Marked in The idea, each with a definition. */
  ideaTerms: readonly TrustIdeaTerm[]
  /** Concept still for the right column of The idea. Omitted when `ideaStills` carry the images. */
  ideaStill?: TrustPlaceholderKey
  /**
   * Landscape stills aligned with `ideaParagraphs`. Each beat is one Present
   * slide: the sentence plus its image. Course language stays in the caption.
   */
  ideaStills?: readonly TrustIdeaStill[]
  /** Teaching diagram that pages before the quote. */
  ideaDiagram: TrustIdeaDiagramId
  /** Source quote after the claim, before See it. Not a rail step. */
  ideaQuote: TrustIdeaQuote
}

/** One compact beat after The idea: quote, attribution, and a course bridge. */
export type TrustIdeaQuote = {
  text: string
  attribution: string
  bridge: string
  /** Self-paced source link only. Present stays uncluttered. */
  href?: string
}

export const TRUST_IDEA_QUOTES = {
  'looks-right': {
    text: 'What you see is all there is.',
    attribution: 'Daniel Kahneman',
    bridge: 'The polished card is all you can see — missing evidence still counts.',
  },
  'four-lenses': {
    text: 'A systems approach begins when first you see the world through the eyes of another.',
    attribution: 'C. West Churchman',
    bridge: 'Each seat changes the boundary and what counts as enough evidence.',
  },
  'seeded-failures': {
    text: 'We cannot change the human condition, but we can change the conditions under which humans work.',
    attribution: 'James Reason',
    bridge: 'Planted breaks are operating conditions, not “the model hallucinated.”',
  },
  'the-loop': {
    text: 'The purpose of a system is what it does.',
    attribution: 'Stafford Beer',
    bridge: 'Trace what it observed, decided, and wrote — not what the prose claims.',
  },
  'the-harness': {
    text: 'Safety is a system property, not a component property, and must be controlled at the system level, not the component level.',
    attribution: 'Nancy Leveson',
    bridge: 'A good model cannot make a write safe by itself.',
  },
  transfer: {
    text: 'In general, measure performance of a model on the data gathered after the data you trained the model on.',
    attribution: 'Martin Zinkevich, Google',
    bridge: 'Case A recall is not the test. Measure Case B on new data.',
    href: 'https://developers.google.com/machine-learning/guides/rules-of-ml',
  },
} as const satisfies Record<TrustChapterId, TrustIdeaQuote>

export type TrustIdeaStill = {
  id: string
  src: string
  alt: string
  caption: string
}

export const TRUST_IDEA_LANDSCAPE_SIZE = { width: 1672, height: 941 } as const

const LOOKS_RIGHT_CDN =
  'https://res.cloudinary.com/dck5rzi4h/image/upload'

export type TrustIdeaDiagramId =
  | 'prompt-output'
  | 'four-tasks'
  | 'output-kinds'
  | 'eval-steps'
  | 'grader-score'
  | 'transfer-pipeline'

export const TRUST_LESSON_PACKETS: Partial<Record<TrustChapterId, TrustLessonPacket>> = {
  // Where, do-now, and done-when reuse the locked frame copy rather than restating it.
  'looks-right': {
    chapterId: 'looks-right',
    where: TRUST_LOOKS_RIGHT_FRAME.where,
    idea: 'An enrollment product asked an agent what to do. The agent wrote a recommendation — a screen that looks finished. That screen is not proof the system behind it is safe. Decide Allow, Ask, or Deny from that screen alone, before you see what the agent read.',
    seeCaption: 'The card, before you vote.',
    tryPrompt: TRUST_LOOKS_RIGHT_FRAME.doNow,
    doneBefore: TRUST_LOOKS_RIGHT_FRAME.doneBefore,
    doneAfter: TRUST_LOOKS_RIGHT_FRAME.doneAfter,
    ideaParagraphs: [
      'Cohort Studio is a made-up enrollment product.',
      'An agent inside it just wrote what to do with a cohort.',
      'Confirm October 6, email 120 people, drop the ones it calls quiet.',
      'That recommendation lands as a screen in the product. In this lab we call that screen the card. It is not a slide and not a quiz. It is the surface a teammate would see before anything sends.',
      'A finished-looking screen is not proof the system behind it is safe. In Try it you will Allow, Ask, or Deny from that screen alone — before you see what the agent read.',
    ],
    ideaTerms: [
      {
        term: 'Cohort Studio is a made-up enrollment product',
        meaning: 'A fictional enrollment tool. Not a live dashboard.',
      },
      {
        term: 'An agent inside it just wrote what to do with a cohort',
        meaning: 'The model proposed an action. That is a draft, not permission to act.',
      },
      {
        term: 'Confirm October 6, email 120 people, drop the ones it calls quiet',
        meaning: 'The three writes the card is asking to make.',
      },
      { term: 'the card', meaning: 'The screen a teammate would see before anything sends. Not a slide and not a quiz.' },
      { term: 'Allow, Ask, or Deny', meaning: 'The three verdicts: let it act, pause for a person, or stop it.' },
      { term: 'Allow', meaning: 'Let the system act from this screen.' },
      { term: 'Ask', meaning: 'Pause for a person before it may act.' },
      { term: 'Deny', meaning: 'Do not let it act.' },
      { term: 'proof', meaning: 'A finished look is not evidence the system behind the screen is safe.' },
    ],
    ideaStills: [
      {
        id: 'looks-right-cohort-studio',
        src: `${LOOKS_RIGHT_CDN}/v1788998855/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-card-proposal-image_ar7tqf.png`,
        alt: 'A 3D illustration of Cohort Studio: a roster of participants, a calendar, and a chart, with a wand note beside the window.',
        caption: 'Cohort Studio. A roster, a calendar, and a send — before anyone has approved it.',
      },
      {
        id: 'looks-right-agent-action',
        src: `${LOOKS_RIGHT_CDN}/v1788999173/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-ai-agent-action-image_oic2tf.png`,
        alt: 'A 3D illustration of an agent drafting a recommendation, connected by a line to the Cohort Studio window.',
        caption: 'The agent writes a recommendation. That draft is not permission to act.',
      },
      {
        id: 'looks-right-card-suggestion',
        src: `${LOOKS_RIGHT_CDN}/v1788999295/dccmiami/workshops/agentic-engineering-for-beginners/cohort-studio-ai-agent-action-image-suggestion_oino5y.png`,
        alt: 'A 3D illustration of the finished card: October 6, an email to many people, and a quiet participant marked to drop.',
        caption: 'The card: a date, a mass email, and a quiet person marked to drop.',
      },
    ],
    ideaDiagram: 'prompt-output',
    ideaQuote: TRUST_IDEA_QUOTES['looks-right'],
    roleSignals: {
      pm: 'Is this outcome actually ready?',
      engineering: 'What evidence and permissions exist?',
      design: 'Can someone understand and stop it?',
      strategy: 'Who owns the consequence?',
    },
    roleChecks: {
      pm: roleCheck(
        'A finished-looking enrollment screen is:',
        'Proof the send is safe to ship.',
        'A recommendation to judge — not evidence the system is safe.',
        'Enough to Allow if the copy is polished.',
        'b',
        'The card is the surface a teammate sees. A finished look is not proof.'
      ),
      engineering: roleCheck(
        'Before this card may act, Engineering needs:',
        'A nicer layout on the card.',
        'A higher confidence number.',
        'Evidence of what it read, and whether it may write.',
        'c',
        'Engineering asks what it read, called, and is allowed to change.'
      ),
      design: roleCheck(
        'The most useful next move from this screen is:',
        'Ask whether a person can see the send and stop it.',
        'Ship it because the layout is clear.',
        'Hide the 87% so the card looks simpler.',
        'a',
        'Design watches whether someone can understand and intervene.'
      ),
      strategy: roleCheck(
        'If this send goes out, who owns the consequence?',
        'The model, because it wrote the card.',
        'The quiet participants, because they will notice first.',
        'Whoever approved a write without naming an owner.',
        'c',
        'Strategy asks who owns the consequence when it scales. The model does not.'
      ),
    },
  },
  'four-lenses': {
    chapterId: 'four-lenses',
    where: '2 of 6 · Four Lenses',
    idea: 'Good depends on what your job must protect. Four seats read the same enrollment card and each one needs something different before it may act.',
    ideaParagraphs: [
      'Good depends on what your job must protect.',
      'Four seats read the same enrollment card and each one needs something different before it may act.',
    ],
    seeCaption: 'One card, four seats. Look at the card, then pick the seat you will keep.',
    seeLead: 'This card is one enrollment recommendation, not a live send.',
    tryPrompt: 'Write one thing your seat must see before this card may act.',
    doneBefore: 'Done when you pick a seat and save one requirement.',
    doneAfter: 'Complete: your seat and your requirement are saved.',
    ideaTerms: [
      { term: 'seats', meaning: 'Product, Engineering, Design, Strategy — the job you keep for the rest of the lab.' },
      { term: 'card', meaning: 'The same enrollment screen all four seats read.' },
      { term: 'act', meaning: 'Write, send, or change something in the world — not just generate text.' },
    ],
    ideaDiagram: 'four-tasks',
    ideaQuote: TRUST_IDEA_QUOTES['four-lenses'],
    roleSignals: {
      pm: 'What outcome must be true before this is acceptable?',
      engineering: 'What evidence and permission can you verify?',
      design: 'Can a person see this coming and stop it?',
      strategy: 'Who owns the consequence when it scales?',
    },
    roleChecks: {
      pm: roleCheck(
        'Product’s job on this card is to:',
        'Name the outcome that must be true before it may act.',
        'Make the demo more compelling.',
        'Trace every tool call.',
        'a',
        'Product defines what good means. Trace work belongs to Engineering.'
      ),
      engineering: roleCheck(
        'The same card is safe for Engineering when:',
        'The prose sounds confident.',
        'You can verify evidence and permission.',
        'Design has written a prettier Ask state.',
        'b',
        'Engineering verifies what it read and what it may write — not the voice.'
      ),
      design: roleCheck(
        'Design’s requirement on this card is:',
        'A calendar row that confirms the date.',
        'A named policy owner.',
        'A person can see this coming and stop it.',
        'c',
        'Design watches intervention, not the launch date or the policy owner.'
      ),
      strategy: roleCheck(
        'Strategy’s question on this card is:',
        'Does the card look finished?',
        'Who owns the consequence if this scales?',
        'Which file did it read?',
        'b',
        'Strategy owns consequence and policy. The trace is Engineering’s.'
      ),
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
    ideaTerms: [
      {
        term: 'planted failures',
        meaning: 'Breaks we put in on purpose so you can find them. Not “the model hallucinated.”',
      },
      { term: 'permission', meaning: 'Whether this system is allowed to send, write, or change a record.' },
      { term: 'pause', meaning: 'A stop before the write, where a person can still intervene.' },
    ],
    ideaStill: 'failureTokens',
    ideaDiagram: 'output-kinds',
    ideaQuote: TRUST_IDEA_QUOTES['seeded-failures'],
    roleSignals: {
      pm: 'Which planted break would still ship if the prose were true?',
      engineering: 'Which failure is evidence, and which is permission?',
      design: 'Which failure would a participant feel first?',
      strategy: 'Which failure becomes policy if this send goes out?',
    },
    roleChecks: {
      pm: roleCheck(
        'A planted break that would still ship if the prose were true is:',
        'A typo in the greeting.',
        'A date or roster the card states as fact but the system does not have.',
        'A slightly dull headline.',
        'b',
        'The failures live in the facts and permissions, not in the voice.'
      ),
      engineering: roleCheck(
        'Which pair is evidence versus permission?',
        'The 87% is evidence; draft-only send is permission.',
        'Both are wording issues.',
        'The missing pause is evidence; the roster is permission.',
        'a',
        'Forecast claims are evidence. Draft-only is a permission boundary.'
      ),
      design: roleCheck(
        'Which failure would a participant feel first?',
        'The missing pause in a transcript.',
        'The draft-only flag.',
        'Being auto-removed without a conversation.',
        'c',
        'Harm lands on the person who is dropped, not on the log.'
      ),
      strategy: roleCheck(
        'If this send goes out, which failure becomes policy?',
        'The greeting’s tone.',
        'Treating a fabricated 87% as a launch fact.',
        'A missing caption on the card.',
        'b',
        'Shipping the number makes it institutional.'
      ),
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
    ideaTerms: [
      { term: 'The send', meaning: 'This chapter’s case — the enrollment action the agent wants to take.' },
      { term: 'Observe', meaning: 'What the agent read: context, retrieval, sources.' },
      { term: 'Decide', meaning: 'The plan, the goal, and how sure it claims to be.' },
      { term: 'Act', meaning: 'Tools, writes, and side effects — where the world changes.' },
      { term: 'Check', meaning: 'Whether a tool result or validation caught the break.' },
      { term: 'Stop', meaning: 'Budgets, escalation, fallback — where a person can halt the write.' },
      { term: 'stage', meaning: 'Where in the loop the break actually lives, not how the prose sounds.' },
    ],
    ideaDiagram: 'eval-steps',
    ideaQuote: TRUST_IDEA_QUOTES['the-loop'],
    roleSignals: {
      pm: 'If you only graded the output, which stage would you never see?',
      engineering: 'Which stage is a data or permission break, not a wording break?',
      design: 'Where would a person have been able to stop this?',
      strategy: 'Which stage owns the consequence when this scales?',
    },
    roleChecks: {
      pm: roleCheck(
        'If you only graded the output, which stage would you never see?',
        'Observe — what the agent read.',
        'Act — the send itself.',
        'The card’s headline.',
        'a',
        'Output grading never sees retrieval. That is why Observe has to be checked.'
      ),
      engineering: roleCheck(
        'A data or permission break lives in:',
        'How confident the prose sounds.',
        'Observe or Act — what it read, or what it may write.',
        'The italic caption on the card.',
        'b',
        'Those stages hold evidence and writes. Wording is not the break.'
      ),
      design: roleCheck(
        'Where would a person have been able to stop this?',
        'After the email lands.',
        'In the model’s training data.',
        'Stop — a pause before the write.',
        'c',
        'Stop is the intervention stage. After the send is too late.'
      ),
      strategy: roleCheck(
        'Which stage owns the consequence when this scales?',
        'The brand voice.',
        'Stop — who can halt the write when this is no longer a one-off.',
        'Decide — only the claimed confidence.',
        'b',
        'Escalation and ownership live at Stop, not in the tone of the card.'
      ),
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
    ideaTerms: [
      { term: 'harness', meaning: 'What must be true around the model before a write is allowed.' },
      { term: 'write', meaning: 'A change that leaves the system — send, save, remove, notify.' },
      { term: 'control', meaning: 'A check that can stop, constrain, or record that write.' },
      { term: 'gate', meaning: 'The specific stop you name before the team votes.' },
    ],
    ideaStill: 'fullHarness',
    ideaDiagram: 'grader-score',
    ideaQuote: TRUST_IDEA_QUOTES['the-harness'],
    roleSignals: {
      pm: 'Which control would have stopped the write even if the card still looked finished?',
      engineering: 'Which control is a check you can run before the send?',
      design: 'Which control would a person see and understand?',
      strategy: 'Who owns the gate when this is no longer a one-off?',
    },
    roleChecks: {
      pm: roleCheck(
        'A control that stops the write even if the card looks finished is:',
        'A prettier card.',
        'A gate that must pass before send.',
        'A higher model temperature.',
        'b',
        'The harness sits around the model. The screen cannot be the gate.'
      ),
      engineering: roleCheck(
        'A check you can run before the send is:',
        '“Human review” with no owner.',
        'Ask the model if it is sure.',
        'Validate roster and permission in code.',
        'c',
        'Code-based checks are replayable. An unnamed review is not.'
      ),
      design: roleCheck(
        'A control a person would see and understand is:',
        'A visible Ask that holds the send.',
        'A silent flag in a log.',
        'A system prompt the user never sees.',
        'a',
        'Design needs a readable intervention, not a hidden flag.'
      ),
      strategy: roleCheck(
        'Who owns the gate when this is no longer a one-off?',
        'The model.',
        'Whoever happens to be on Slack.',
        'A named owner and a recorded decision.',
        'c',
        'Ownership has to survive the first demo.'
      ),
    },
  },
  transfer: {
    chapterId: 'transfer',
    where: '6 of 6 · Transfer',
    idea: 'New card, same question. Recall of Case A is not the test, you only know by measuring on your data, again.',
    ideaParagraphs: [
      'New card, same question.',
      'Recall of Case A is not the test, you only know by measuring on your data, again.',
    ],
    seeCaption: 'An unseen museum-intake case. Same Allow, Ask, or Deny.',
    tryPrompt: 'Vote on the unseen case.',
    doneBefore: 'Done when you vote and write the evaluation plan you would bring.',
    doneAfter: 'Complete: vote and plan are saved.',
    ideaTerms: [
      { term: 'measuring', meaning: 'Scoring this agent on cases you can run again — not remembering the demo.' },
      { term: 'your data', meaning: 'The cases you actually hold, not the enrollment card you already judged.' },
    ],
    ideaStill: 'caseBTransfer',
    ideaDiagram: 'transfer-pipeline',
    ideaQuote: TRUST_IDEA_QUOTES.transfer,
    roleSignals: {
      pm: 'What outcome must be true before this unseen card may act?',
      engineering: 'What evidence and permission can you verify on a case you have not rehearsed?',
      design: 'Can someone understand and stop this new write?',
      strategy: 'Who owns the consequence if this intake ships?',
    },
    roleChecks: {
      pm: roleCheck(
        'The test of this unseen card is:',
        'Whether you remember Case A.',
        'Whether the outcome you named is true on this case.',
        'Whether the museum copy sounds like the enrollment copy.',
        'b',
        'Transfer is measuring again, not recalling the demo.'
      ),
      engineering: roleCheck(
        'On a case you have not rehearsed, you still need:',
        'The same enrollment date.',
        'The 87% from Case A.',
        'Evidence and permission you can verify here.',
        'c',
        'The method transfers. The numbers from Case A do not.'
      ),
      design: roleCheck(
        'Before this new write:',
        'Someone must be able to understand and stop it.',
        'The card should reuse the enrollment layout.',
        'You should Deny because it is unfamiliar.',
        'a',
        'Unfamiliar is not Deny. Intervention still applies.'
      ),
      strategy: roleCheck(
        'If this intake ships, who owns the consequence?',
        'The workshop, because the case is taught here.',
        'The model, because the case is new.',
        'A named owner on this institution’s data.',
        'c',
        'New case, same ownership question.'
      ),
    },
  },
}

export function getTrustLessonPacket(chapterId: TrustChapterId): TrustLessonPacket | undefined {
  return TRUST_LESSON_PACKETS[chapterId]
}
