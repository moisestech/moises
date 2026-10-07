/**
 * Founder Attention OS — seven-day follow-up sequence.
 *
 * These are participant prompts/resources, not scheduled messages by default.
 */

export const SEVEN_DAY_FOLLOWUP = [
  {
    day: 0,
    title: 'Save the operating context',
    instruction:
      'Before leaving the workshop, save your Founder Profile, Attention Rules, Daily Operator, and first Daily Operating Brief somewhere you can find tomorrow.',
    prompt:
      'Confirm the four artifacts you are using for my Daily Operator. Tell me only what is missing before tomorrow.',
  },
  {
    day: 1,
    title: 'Run the brief once',
    instruction:
      'Use a real workday. Correct the operator instead of rewriting the whole prompt.',
    prompt:
      'Give me today’s Daily Operating Brief. End with: What did I miss or get wrong? What information did you have to reconstruct manually?',
  },
  {
    day: 2,
    title: 'Check the tradeoff',
    instruction:
      'Challenge the highest-ranked item. The goal is calibrated trust, not agreement.',
    prompt:
      'Why does priority #1 outrank #2 today? Separate Fact, Interpretation, and Recommendation. Tell me what missing context could reverse the ranking.',
  },
  {
    day: 3,
    title: 'Protect capacity',
    instruction:
      'Look for fragmentation, preparation needs, and missing focus time before adding more work.',
    prompt:
      'Given the schedule I provided, where is my real focus capacity today? What should wait so I do not plan an imaginary day?',
  },
  {
    day: 4,
    title: 'Notice repeated friction',
    instruction:
      'Do not automate yet. Capture what you repeatedly had to retrieve, remember, reconcile, transfer, decide, approve, or rewrite.',
    prompt:
      'From the last four days, list only repeated manual frictions you actually observed. Classify each without proposing an automation.',
  },
  {
    day: 5,
    title: 'Improve one rule',
    instruction:
      'Choose one correction to context or judgment that would make tomorrow’s brief more accurate.',
    prompt:
      'What one Founder Profile field or Attention Rule should I improve based on the mistakes and corrections from this week? Explain why it has the highest leverage.',
  },
  {
    day: 6,
    title: 'Do not automate the wrong thing',
    instruction:
      'Choose the strongest friction and consider simpler process, delegation, or source-of-truth changes first.',
    prompt:
      'For the strongest observed friction, compare: leave manual, simplify, delegate, AI-assist, connect a source, or automate. Do not prefer automation by default.',
  },
  {
    day: 7,
    title: 'Run the weekly review',
    instruction:
      'Close the loop: what moved, what stalled, what stole attention, and what one improvement deserves next week?',
    prompt:
      'Run my Weekly Operating Review. End with exactly four outputs: one outcome to prioritize, one thing to stop, one process to improve, and one block of time to protect.',
  },
] as const
