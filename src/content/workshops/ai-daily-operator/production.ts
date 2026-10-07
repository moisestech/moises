/**
 * Founder Attention OS — production plan.
 *
 * Separates work that can be completed remotely from manual UI capture / live
 * rehearsal work, and gives Life OS / project-management systems stable task text.
 */

export type ProductionTask = {
  id: string
  title: string
  phase: 'remote-now' | 'desktop-capture' | 'pre-pilot' | 'post-pilot'
  minutes: number | null
  owner: 'Moises' | 'ChatGPT/Cursor' | 'shared'
  definitionOfDone: string
  status: 'done' | 'ready' | 'blocked-manual' | 'todo'
}

export const DAILY_OPERATOR_PRODUCTION_TASKS: readonly ProductionTask[] = [
  {
    id: 'ado-p0-master-strategy',
    title: 'Maintain master strategy / curriculum document',
    phase: 'remote-now',
    minutes: null,
    owner: 'shared',
    definitionOfDone:
      'Google Drive master doc, GitHub master plan, and code registries agree on five levels, pricing hypothesis, funnel, canonical architecture, and human-in-the-loop policy.',
    status: 'done',
  },
  {
    id: 'ado-p0-artifacts',
    title: 'Complete all 12 participant artifact schemas',
    phase: 'remote-now',
    minutes: null,
    owner: 'ChatGPT/Cursor',
    definitionOfDone:
      'All twelve artifacts exist as structured renderable content with purpose, completion rule, sections, and fields.',
    status: 'done',
  },
  {
    id: 'ado-p0-benchmarks',
    title: 'Maintain official Academy and competitor benchmark registry',
    phase: 'remote-now',
    minutes: 30,
    owner: 'shared',
    definitionOfDone:
      'OpenAI Academy, Claude Academy, closest paid competitor, and operating-system benchmark are reviewed and crosswalked to the five levels.',
    status: 'ready',
  },
  {
    id: 'ado-p0-example',
    title: 'Complete sanitized DCC Level I worked example',
    phase: 'remote-now',
    minutes: 30,
    owner: 'shared',
    definitionOfDone:
      'Founder Profile, Attention Rules, sample day, sample brief, and first friction are sufficient for facilitation without exposing private account data.',
    status: 'done',
  },
  {
    id: 'ado-p0-synthetic',
    title: 'Create a synthetic fallback business case',
    phase: 'remote-now',
    minutes: 30,
    owner: 'ChatGPT/Cursor',
    definitionOfDone:
      'A complete fictional business can be used for every Level I exercise when participants do not want to use real information.',
    status: 'todo',
  },
  {
    id: 'ado-p0-privacy',
    title: 'Add participant privacy and data-use guidance',
    phase: 'remote-now',
    minutes: 20,
    owner: 'ChatGPT/Cursor',
    definitionOfDone:
      'Toolkit and facilitator guide clearly state what not to expose and when to use the synthetic fallback.',
    status: 'ready',
  },
  {
    id: 'ado-p0-followup',
    title: 'Build seven-day follow-up sequence',
    phase: 'remote-now',
    minutes: 45,
    owner: 'ChatGPT/Cursor',
    definitionOfDone:
      'Participants receive one lightweight daily use instruction and one end-of-week review path without motivational spam.',
    status: 'todo',
  },
  {
    id: 'ado-p0-core-media',
    title: 'Promote reusable core visual assets to canonical Cloudinary IDs',
    phase: 'remote-now',
    minutes: 45,
    owner: 'shared',
    definitionOfDone:
      'Approved core concepts are present in Cloudinary and media.ts marks delivery=cloudinary.',
    status: 'ready',
  },
  {
    id: 'ado-p1-chatgpt-run',
    title: 'Run Level I toolkit end-to-end in ChatGPT',
    phase: 'desktop-capture',
    minutes: 45,
    owner: 'Moises',
    definitionOfDone:
      'Complete the participant flow, record friction, and save current UI captures using manifest IDs.',
    status: 'blocked-manual',
  },
  {
    id: 'ado-p1-claude-run',
    title: 'Run Level I toolkit end-to-end in Claude',
    phase: 'desktop-capture',
    minutes: 45,
    owner: 'Moises',
    definitionOfDone:
      'Complete the same participant flow, compare differences, and save current UI captures using manifest IDs.',
    status: 'blocked-manual',
  },
  {
    id: 'ado-p1-captures',
    title: 'Capture Level I ChatGPT + Claude screenshot set',
    phase: 'desktop-capture',
    minutes: 30,
    owner: 'Moises',
    definitionOfDone:
      'Five minimum screenshots per platform plus one short end-to-end demo recording exist and are promoted to Cloudinary.',
    status: 'blocked-manual',
  },
  {
    id: 'ado-p1-rehearsal',
    title: 'Time one full 90-minute rehearsal',
    phase: 'desktop-capture',
    minutes: 100,
    owner: 'shared',
    definitionOfDone:
      'Actual timing, stall points, completion rate, and facilitator interventions are logged.',
    status: 'blocked-manual',
  },
  {
    id: 'ado-prepilot-offer',
    title: 'Finalize Level I institutional pilot offer',
    phase: 'pre-pilot',
    minutes: 45,
    owner: 'shared',
    definitionOfDone:
      'One-page host offer states outcome, audience, 90-minute format, requirements, participant outputs, pilot price, and follow-up.',
    status: 'todo',
  },
  {
    id: 'ado-prepilot-pricing',
    title: 'Validate pilot pricing after 2–3 hosted sessions',
    phase: 'post-pilot',
    minutes: null,
    owner: 'Moises',
    definitionOfDone:
      'Pricing decision uses host willingness-to-pay, completion/usefulness, seven-day reuse, and deeper implementation interest.',
    status: 'todo',
  },
] as const
