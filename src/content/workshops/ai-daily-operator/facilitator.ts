/**
 * Founder Attention OS — Level I facilitator guide.
 *
 * This is instructor-side material. Participants use /level-i and the four
 * Level I artifacts; the facilitator uses this to keep the 90-minute session
 * outcome-first and prevent integration/setup drift.
 */

export const LEVEL_I_FACILITATOR = {
  title: 'Build Your AI Daily Operator',
  method: 'Founder Attention OS',
  durationMinutes: 90,
  participantPromise:
    'Leave with a Founder Profile, Attention Rules, a portable Daily Operator, and a real Daily Operating Brief — plus one friction worth investigating.',
  instructorOpening:
    'Today we are not automating your business. We are teaching a system how to help you decide what deserves your attention, why it matters, and what can wait.',
  setup: {
    required: [
      'Laptop or phone with ChatGPT or Claude access',
      'One real 30-day business outcome',
      'A real or fictional workday to use in the exercise',
    ],
    optional: [
      'Participant calendar visible in another tab',
      'A short task list or notes',
      'One real follow-up, proposal, deadline, or financial/mission signal',
    ],
    notRequired: [
      'Calendar connector',
      'Email connector',
      'QuickBooks',
      'CRM',
      'n8n / Zapier / Make',
      'technical background',
    ],
  },
  privacyNote:
    'Participants may use their own business information only when appropriate and safe. If a participant does not want to use real business information, use the synthetic fallback case. Do not ask participants to expose confidential customer, personnel, legal, health, banking, or other sensitive information in a live room.',
  facilitationRules: [
    'Do not troubleshoot integrations during Level I.',
    'Keep one real 30-day outcome visible throughout the exercise.',
    'If a participant cannot choose between priorities, ask what changes if each item waits.',
    'If the AI invents context, stop and correct it immediately: missing is unknown.',
    'Challenge at least one recommendation with Fact / Interpretation / Recommendation.',
    'Do not let the Friction step become an automation pitch.',
    'End with one smallest improvement and the Seven-Day Experiment.',
  ],
  checkpoints: [
    {
      minute: 10,
      pass: 'Participant has one 30-day outcome, not a list of goals.',
      recovery:
        'Ask: If only one result could be materially different 30 days from now, what would you choose?',
    },
    {
      minute: 25,
      pass: 'Founder Profile contains enough context to prioritize one real day.',
      recovery:
        'Skip completeness. Capture role, value model, founder-only work, constraints, where key information lives, and approval boundaries.',
    },
    {
      minute: 35,
      pass: 'Attention Rules create at least one real exclusion/tradeoff.',
      recovery:
        'Ask: What productive-looking work should normally lose today?',
    },
    {
      minute: 58,
      pass: 'Participant has a first Daily Operating Brief with no more than three outcomes.',
      recovery:
        'Use the synthetic day if the participant cannot safely provide a real one.',
    },
    {
      minute: 74,
      pass: 'Participant can explain Fact vs Interpretation vs Recommendation on one priority.',
      recovery:
        'Facilitator models the distinction with one sentence from the brief.',
    },
    {
      minute: 82,
      pass: 'Participant has identified one observed friction without jumping to automation.',
      recovery:
        'Ask what they had to retrieve, remember, reconcile, transfer, decide, approve, or rewrite manually during the exercise.',
    },
    {
      minute: 90,
      pass: 'Participant leaves with four Level I artifacts, one friction note, and the seven-day loop.',
      recovery:
        'Prioritize saving artifacts over discussion. Follow-up materials can continue asynchronously.',
    },
  ],
  fallbackOrder: [
    'Use the participant’s real business information when appropriate and safe.',
    'Use a sanitized version of the participant’s information.',
    'Use the DCC worked example as instructor demonstration.',
    'Use the synthetic fallback case for participant practice.',
  ],
  assessment: {
    pass: [
      'Can state the current business outcome.',
      'Can explain why priority #1 outranks #2.',
      'Can separate fact, interpretation, and recommendation.',
      'Can name at least one productive-looking item that should wait.',
      'Can identify one observed manual friction.',
      'Can name an action that still requires human approval.',
    ],
    notPassYet: [
      'The AI produced a polished brief but the participant cannot explain the tradeoff.',
      'The output depends on invented or unverified facts.',
      'Everything remains a top priority.',
      'The participant believes Level I requires integrations.',
      'The participant jumps from one inconvenience directly to automation.',
    ],
  },
  postWorkshop:
    'Run the Daily Operating Brief for seven days. Each day record what the operator missed or got wrong and what information had to be reconstructed manually. Use the weekly review to choose one improvement.',
} as const
