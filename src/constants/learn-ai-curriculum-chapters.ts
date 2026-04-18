/**
 * Public curriculum outline for Learn AI Without Losing Yourself.
 * No presenter script — suitable for hosts, organizers, and attendees.
 */

export type LearnAiCurriculumChapter = {
  id: string
  title: string
  durationHint: string
  summary: string
  objectives: readonly string[]
  keyIdeas: readonly string[]
  demoSummary?: string
}

export const LEARN_AI_CURRICULUM_INTRO =
  'A session-length arc from room recognition through four practice zones (writing, research, brainstorming, synthetic assistance), optional systems thinking, and a closing re-grounding in what should stay human. Timing flexes between ~30 and 45 minutes; the default talk targets about 40 minutes.'

export const LEARN_AI_CURRICULUM_CHAPTERS: readonly LearnAiCurriculumChapter[] = [
  {
    id: 'opening',
    title: 'Opening — pressure, confidence, and the workshop formula',
    durationHint: '~5 min',
    summary:
      'Frames who is in the room (overload, not futurism), how AI changes the feeling of confidence, and why the session lives in the “uncomfortable middle.” Introduces the repeating lens: pressure, prompt, problem, practice.',
    objectives: [
      'Name why most people adopt AI under time pressure, not abstract curiosity.',
      'Contrast earned confidence with formatted or synthetic confidence.',
      'Understand the session method: assistance without surrender.',
    ],
    keyIdeas: [
      'Help and exposure often arrive together.',
      'Communication is increasingly shaped by machine-to-machine flow as well as human language.',
      'Every later demo will move from human pressure to method to critique.',
    ],
    demoSummary: 'Room questions and short framing beats; optional live poll by show of hands.',
  },
  {
    id: 'writing',
    title: 'Writing — voice, prompts, and one human sentence',
    durationHint: '~5 min',
    summary:
      'Professional writing as emotional formatting: the gap between how you need to sound and how you feel. Contrasts vague “make this better” prompts with specific task, tone, audience, and constraints. Ends with keeping one irreducibly human line in the final text.',
    objectives: [
      'Recognize vague prompting as stressed delegation, not instruction.',
      'Practice structuring prompts with task, tone, audience, and limits.',
      'Commit to preserving at least one line that only you could write.',
    ],
    keyIdeas: [
      'Specificity reduces generic output.',
      'Efficiency can crowd out sincerity if you never edit for stakes.',
    ],
    demoSummary: 'Before/after email prompt in a chat interface (live or staged).',
  },
  {
    id: 'research',
    title: 'Research — summaries, vibe-reading, and verification',
    durationHint: '~8 min',
    summary:
      'How summaries produce the “emotional experience of knowledge,” why polish can outrun truth, and how to interrupt synthetic confidence with verification and anti-sycophancy prompts. Closes with continuity as both superpower and trap, and explicit stopping rules.',
    objectives: [
      'Separate summary fluency from understanding and from social confidence.',
      'Use follow-up prompts that surface gaps, inference, and verification needs.',
      'Define exit criteria before long chat sessions.',
    ],
    keyIdeas: [
      'A summary is not understanding.',
      'Tone can arrive before truth; vibe-reading is a real failure mode.',
      'The ability to continue chatting is not the same as knowing when to stop.',
    ],
    demoSummary: 'Short text summarized, then critiqued with structured verification prompts.',
  },
  {
    id: 'brainstorming',
    title: 'Brainstorming — volume, contrast, and slop rot',
    durationHint: '~3.5 min',
    summary:
      'Why “give me twenty ideas” produces sameness, how contrast-based prompts improve ideation, and a simple triage (cliché / usable / alive). Names slop rot: slowly lowered standards under repeated generic polish.',
    objectives: [
      'Prefer contrast and constraints over raw list length.',
      'Sort ideas by taste, not by quantity.',
      'Notice when abundance numbs discernment.',
    ],
    keyIdeas: [
      'Abundance is not discernment.',
      'Taste is exercised in selection, not only generation.',
    ],
    demoSummary: 'Side-by-side bad vs better brainstorming prompts.',
  },
  {
    id: 'synthetic_staff',
    title: 'Synthetic assistance — stacks, inversion, and real support',
    durationHint: '~4.5 min',
    summary:
      'The comedy and cost of “ten assistants”: orchestration labor, role inversion (who is the model in your actual job), and the difference between scaling yourself and being supported. Asks whether tools become an excuse to withhold human help.',
    objectives: [
      'Map assistant stacks to oversight tasks you still own.',
      'Recognize hierarchy and delegated interpretation inside real workplaces.',
      'Question whether synthetic scale substitutes for institutional support.',
    ],
    keyIdeas: [
      'Having many tools is not the same as having backup.',
      'AI can mirror power dynamics, not only “help” neutrally.',
    ],
    demoSummary: 'Diagram or list of assistant roles; anchor lines on labor inversion.',
  },
  {
    id: 'advanced_systems',
    title: 'Advanced systems — prompts, memory, automation, upkeep',
    durationHint: '~6 min',
    summary:
      'When help becomes infrastructure: system prompts, chats vs projects vs memory, scheduled prompts, narrow cloning of style, and simple automation flows. Lands the maintenance cost: automation saves repetition and creates new upkeep.',
    objectives: [
      'Distinguish one-off chats from ongoing containers and stable memory.',
      'See automation as a design choice with operating cost.',
      'Use scheduling and structure without confusing them for judgment.',
    ],
    keyIdeas: [
      'Behavior architecture (system prompts) shapes every interaction.',
      'Panic-to-artifact pipelines still need human ownership at the edges.',
    ],
    demoSummary: 'High-level workflow sketch (e.g., capture → transform → store → notify).',
  },
  {
    id: 'closing',
    title: 'Closing — what stays human',
    durationHint: '~3 min',
    summary:
      'Re-states boundaries: drafts and speed can be delegated; intention, judgment, taste, ethics, context, emotional truth, and final choice stay with the person. Compresses principles into memorable lines.',
    objectives: [
      'Leave with four repeatable principles plus one closing line to remember.',
      'Feel permission to use tools without surrendering authorship.',
    ],
    keyIdeas: [
      'Assistance, not surrender.',
      'Presence over polish — do not erase evidence that you were in the work.',
    ],
  },
]
