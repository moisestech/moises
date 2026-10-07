/**
 * Level I — AI Daily Operator walkthrough.
 *
 * Platform-neutral method with ChatGPT and Claude capture variants.
 * Level I deliberately uses no integrations.
 */

export type LevelOneWalkthroughStep = {
  n: number
  minutes: string
  title: string
  participantAction: string
  facilitatorPoint: string
  prompt?: string
  leavesWith?: string
  captureIds: readonly string[]
}

export const LEVEL_I_OPENING =
  'Today we are not automating your business. We are teaching a system how to help you decide what deserves your attention — and making its judgment inspectable.'

export const LEVEL_I_WALKTHROUGH: readonly LevelOneWalkthroughStep[] = [
  {
    n: 1,
    minutes: '0–10',
    title: 'Choose one outcome',
    participantAction:
      'Name one meaningful business outcome that should be different 30 days from now.',
    facilitatorPoint:
      'The operator needs a destination before it can rank activity. A task list without a goal is only activity.',
    prompt:
      'My most important business outcome over the next 30 days is: [OUTCOME]. Before helping me prioritize, ask only the questions that could materially change how you understand this outcome.',
    leavesWith: 'A single 30-day outcome.',
    captureIds: [
      'ado-howto-chatgpt-l1-goal-01',
      'ado-howto-claude-l1-goal-01',
    ],
  },
  {
    n: 2,
    minutes: '10–25',
    title: 'Build the Founder Profile',
    participantAction:
      'Let the AI progressively interview you about the business, role, value model, founder-only work, constraints, source systems, and approval boundaries.',
    facilitatorPoint:
      'Do not dump a 20-question intake form into the chat. Learn enough context to improve the next decision, then continue progressively.',
    prompt:
      'Help me build a Founder Profile. Ask one useful question at a time. Prioritize business model, my role, current outcome, highest-value work only I can do, delegation, constraints, where requests/leads/projects/payments are tracked, and what always requires my approval. Stop when you have enough context to prioritize a real workday, then summarize the profile for my review.',
    leavesWith: 'Artifact 01 — Founder Profile.',
    captureIds: [
      'ado-howto-chatgpt-l1-founder-profile-02',
      'ado-howto-claude-l1-founder-profile-02',
    ],
  },
  {
    n: 3,
    minutes: '25–35',
    title: 'Write the Attention Rules',
    participantAction:
      'Define what earns attention using Commitments, Revenue / Mission, Risk, and Capacity.',
    facilitatorPoint:
      'Rules are useful only if they exclude something. If everything still qualifies, refine the tradeoff.',
    prompt:
      'Using my Founder Profile and 30-day outcome, help me write concise Attention Rules for Commitments, Revenue / Mission, Risk, and Capacity. Also define what normally requires me, what can be delegated, what AI may assist with, and what can usually wait. Make the rules force tradeoffs rather than label everything important.',
    leavesWith: 'Artifact 02 — Attention Rules.',
    captureIds: [
      'ado-howto-chatgpt-l1-attention-rules-03',
      'ado-howto-claude-l1-attention-rules-03',
    ],
  },
  {
    n: 4,
    minutes: '35–45',
    title: 'Create the Daily Operator',
    participantAction:
      'Save the operating instructions that will turn today’s information into a brief.',
    facilitatorPoint:
      'The prompt is not the product. The product is the operating context and judgment method encoded in the prompt.',
    prompt:
      'Create a portable Daily Operator instruction using my Founder Profile and Attention Rules. Its job is to answer: What needs me today, why does it matter, and what can wait? It must optimize attention rather than activity, use the four lenses, distinguish facts from interpretation and recommendation, ask for missing information rather than invent it, follow Recommend → Explain → Ask → Act, and notice recurring friction without interrupting every brief.',
    leavesWith: 'Artifact 03 — Daily Operator.',
    captureIds: [
      'ado-howto-chatgpt-l1-daily-operator-04',
      'ado-howto-claude-l1-daily-operator-04',
    ],
  },
  {
    n: 5,
    minutes: '45–58',
    title: 'Run a real day through it',
    participantAction:
      'Provide tomorrow or today’s actual commitments, deadlines, follow-ups, opportunities, and tasks manually.',
    facilitatorPoint:
      'Manual entry is intentional in Level I. It proves the decision model before adding connectors.',
    prompt:
      'Here is the information I currently have for [TODAY/TOMORROW]: [PASTE OR DESCRIBE CALENDAR, DEADLINES, FOLLOW-UPS, OPPORTUNITIES, TASKS, AND ANY MONEY OR MISSION SIGNALS THAT MAY MATTER]. Use my Daily Operator and produce my Daily Operating Brief.',
    leavesWith: 'Artifact 04 — first Daily Operating Brief.',
    captureIds: [
      'ado-howto-chatgpt-l1-daily-brief-05',
      'ado-howto-claude-l1-daily-brief-05',
    ],
  },
  {
    n: 6,
    minutes: '58–67',
    title: 'Challenge the ranking',
    participantAction:
      'Ask why priority #1 outranks #2 and inspect the evidence.',
    facilitatorPoint:
      'Participants should learn to interrogate a recommendation, not merely accept an articulate answer.',
    prompt:
      'Why did you rank priority #1 above priority #2? Show the tradeoff through Commitments, Revenue / Mission, Risk, and Capacity. If the ranking depends on missing context, say exactly what is missing.',
    leavesWith: 'A visible prioritization tradeoff.',
    captureIds: [
      'ado-howto-chatgpt-l1-challenge-priority-06',
      'ado-howto-claude-l1-challenge-priority-06',
    ],
  },
  {
    n: 7,
    minutes: '67–74',
    title: 'Separate fact from judgment',
    participantAction:
      'Take the highest-priority recommendation and classify its reasoning.',
    facilitatorPoint:
      'A fluent answer can still mix source facts, inference, and advice. The participant should see the boundary.',
    prompt:
      'For the highest-priority recommendation, separate your reasoning into exactly three sections: FACT — what I actually provided; INTERPRETATION — what you inferred from those facts; RECOMMENDATION — what you think I should do. Do not move an inference into FACT.',
    leavesWith: 'Fact / Interpretation / Recommendation evidence.',
    captureIds: [
      'ado-howto-chatgpt-l1-fact-interpretation-07',
      'ado-howto-claude-l1-fact-interpretation-07',
    ],
  },
  {
    n: 8,
    minutes: '74–82',
    title: 'Find one friction',
    participantAction:
      'Identify information that had to be reconstructed by hand.',
    facilitatorPoint:
      'This is the bridge to the rest of the curriculum. Friction is evidence, not an automatic invitation to automate.',
    prompt:
      'Looking only at what happened during this exercise, what information did I have to manually retrieve, remember, reconcile, transfer, decide, approve, or rewrite? Name the strongest recurring friction, why it matters, and where that information currently lives. Do not recommend an automation yet.',
    leavesWith: 'One initial Friction Log note.',
    captureIds: [
      'ado-howto-chatgpt-l1-friction-08',
      'ado-howto-claude-l1-friction-08',
    ],
  },
  {
    n: 9,
    minutes: '82–88',
    title: 'Choose one improvement',
    participantAction:
      'Improve the operating setup before adding technology.',
    facilitatorPoint:
      'The first improvement may be a clearer rule, a better source, a delegation decision, or a connector later.',
    prompt:
      'What is the smallest improvement that would make tomorrow’s brief more accurate or less manual? Consider a clearer rule, better source of truth, delegation, or missing context before recommending a connection or automation.',
    leavesWith: 'One next improvement.',
    captureIds: [
      'ado-howto-chatgpt-l1-improvement-09',
      'ado-howto-claude-l1-improvement-09',
    ],
  },
  {
    n: 10,
    minutes: '88–90',
    title: 'Start the seven-day experiment',
    participantAction:
      'Commit to running the brief once per day and recording corrections.',
    facilitatorPoint:
      'The operator becomes useful by being corrected against reality, not by trying to perfect the prompt in one sitting.',
    prompt:
      'For the next seven days, when I ask for my Daily Operating Brief, end with two short questions: What did I get wrong or miss? What information did I have to reconstruct manually? Use my answers to improve the Founder Profile, Attention Rules, and Friction Log without silently changing my approval boundaries.',
    leavesWith: 'Seven-Day Experiment started.',
    captureIds: [
      'ado-howto-chatgpt-l1-seven-day-10',
      'ado-howto-claude-l1-seven-day-10',
    ],
  },
]

export const LEVEL_I_CAPTURE_PLAN = {
  chatgpt: {
    folder:
      'dccmiami/workshops/ai-daily-operator/09-tool-guides/chatgpt',
    required: LEVEL_I_WALKTHROUGH.map((step) =>
      step.captureIds.find((id) => id.includes('chatgpt')),
    ).filter(Boolean),
    videoId: 'ado-howto-chatgpt-l1-demo-video',
  },
  claude: {
    folder:
      'dccmiami/workshops/ai-daily-operator/09-tool-guides/claude',
    required: LEVEL_I_WALKTHROUGH.map((step) =>
      step.captureIds.find((id) => id.includes('claude')),
    ).filter(Boolean),
    videoId: 'ado-howto-claude-l1-demo-video',
  },
} as const
