/**
 * AI Daily Operator / Founder Attention OS — benchmark curriculum registry.
 *
 * Purpose:
 * - Track official AI-literacy material we should review rather than duplicate.
 * - Track nearby paid courses so positioning and pricing stay grounded.
 * - Give Cursor a stable list of references for future course scaffolding.
 *
 * Last reviewed: 2026-10-07
 */

export type CourseBenchmark = {
  id: string
  provider: string
  title: string
  url: string
  kind: 'official-foundation' | 'official-workshop' | 'official-agent' | 'paid-competitor'
  priority: 'must-review' | 'should-review' | 'reference'
  whyItMatters: string
  whatToBorrow: readonly string[]
  whatNotToDuplicate?: readonly string[]
}

export const DAILY_OPERATOR_BENCHMARKS: readonly CourseBenchmark[] = [
  {
    id: 'openai-ai-foundations',
    provider: 'OpenAI Academy',
    title: 'AI Foundations',
    url: 'https://academy.openai.com/public/courses/ai-foundations-dnq5w',
    kind: 'official-foundation',
    priority: 'must-review',
    whyItMatters:
      'Official beginner pathway around clear instructions, context, output review, and responsible use.',
    whatToBorrow: [
      'Practice on a real work task',
      'Clear instructions and relevant context',
      'Review outputs instead of accepting fluent answers',
      'Responsible-use baseline',
    ],
    whatNotToDuplicate: [
      'Generic AI/LLM orientation beyond what the Daily Operator exercise requires',
    ],
  },
  {
    id: 'openai-applied-ai-foundations',
    provider: 'OpenAI Academy',
    title: 'Applied AI Foundations',
    url: 'https://academy.openai.com/pages/courses',
    kind: 'official-foundation',
    priority: 'must-review',
    whyItMatters:
      'Official progression from useful prompts into repeatable workflows with review points.',
    whatToBorrow: [
      'Break recurring work into steps',
      'Create repeatable workflows',
      'Include explicit review checkpoints',
    ],
  },
  {
    id: 'openai-agents-workflows',
    provider: 'OpenAI Academy',
    title: 'Agents and Workflows',
    url: 'https://academy.openai.com/pages/courses',
    kind: 'official-agent',
    priority: 'must-review',
    whyItMatters:
      'Official agent-workflow curriculum emphasizes outputs, boundaries, context, review, and iteration.',
    whatToBorrow: [
      'Define outputs before execution',
      'Set boundaries explicitly',
      'Provide the right context',
      'Review and improve structured workflows',
    ],
  },
  {
    id: 'openai-small-business-hub',
    provider: 'OpenAI Academy',
    title: 'ChatGPT for Small Business — Workshop Resource Hub',
    url: 'https://academy.openai.com/public/resources/openai-academy-small-business-resource-hub-2026-06-03',
    kind: 'official-workshop',
    priority: 'must-review',
    whyItMatters:
      'Closest official pedagogical reference for a nontechnical small-business cohort.',
    whatToBorrow: [
      'Watch → try → discuss rhythm',
      'Use real business information when appropriate and safe',
      'Provide a complete fictional fallback case',
      'Give participants copyable prompts and practice files',
      'Build something usable during the session',
    ],
  },
  {
    id: 'openai-small-business-work',
    provider: 'OpenAI Academy',
    title: 'How small businesses can put ChatGPT Work into practice',
    url: 'https://academy.openai.com/public/clubs/small-business-ipf4m/events/how-small-businesses-can-put-chatgpt-work-into-practice-4100tgvv69',
    kind: 'official-workshop',
    priority: 'should-review',
    whyItMatters:
      'Current official examples of using files/apps/context, recurring work, and business-wide execution.',
    whatToBorrow: [
      'Identify high-value workflows rather than features',
      'Use business context from files, apps, and tools',
      'Turn goals into finished deliverables',
      'Treat recurring/scheduled work as an extension, not the starting point',
    ],
  },

  {
    id: 'claude-ai-fluency',
    provider: 'Claude Academy',
    title: 'AI Fluency: Framework and foundations',
    url: 'https://academy.claude.com/courses/ai-fluency-framework-foundations',
    kind: 'official-foundation',
    priority: 'must-review',
    whyItMatters:
      'The 4D framework provides a rigorous cross-platform language for effective, ethical human-AI collaboration.',
    whatToBorrow: [
      'Delegation — decide what should be handed to AI',
      'Description — communicate context, process, and desired performance',
      'Discernment — critically evaluate output',
      'Diligence — remain responsible for safe and ethical use',
      'Automation / Augmentation / Agency as distinct modes',
    ],
  },
  {
    id: 'claude-capabilities-limitations',
    provider: 'Claude Academy',
    title: 'AI capabilities and limitations',
    url: 'https://academy.claude.com/courses/ai-capabilities-and-limitations',
    kind: 'official-foundation',
    priority: 'should-review',
    whyItMatters:
      'Provides the mental model needed to understand knowledge gaps, context limits, steerability failures, and confident errors.',
    whatToBorrow: [
      'Calibrated trust',
      'Knowledge vs retrieval/tool-use distinction',
      'Context-window / working-memory awareness',
      'Diagnose the failure mode before retrying',
      'Steerability has limits',
    ],
    whatNotToDuplicate: [
      'A full 3.5-hour technical mental-model course inside our founder workshop',
    ],
  },
  {
    id: 'claude-human-agent-teams',
    provider: 'Claude Academy',
    title: 'Building effective human-agent teams (beta)',
    url: 'https://academy.claude.com/courses/building-effective-human-agent-teams',
    kind: 'official-agent',
    priority: 'must-review',
    whyItMatters:
      'Its clear roles, written north star, gradual release, and right-information-access principles map directly to the Founder Attention OS.',
    whatToBorrow: [
      'Human-defined north star',
      'Clear human and agent roles',
      'Right information access',
      'Grant autonomy gradually in proportion to demonstrated reliability',
      'Keep judgment-heavy decisions with people',
    ],
  },
  {
    id: 'claude-nonprofit-beyond-chat',
    provider: 'Anthropic / Claude',
    title: 'Claude for Nonprofits: Moving Your Workflow Beyond Chat',
    url: 'https://claude.com/resources/webinars/claude-for-nonprofits-moving-your-workflow-beyond-chat',
    kind: 'official-workshop',
    priority: 'should-review',
    whyItMatters:
      'Demonstrates a useful progression from chat to durable context, reusable skill, and connected source.',
    whatToBorrow: [
      'Chat → Project → Skill → Connector ladder',
      'Make the difference between stages visible using the same workflow',
      'Show why context that compounds is better than repeatedly reprompting',
    ],
  },

  {
    id: 'section-personal-agent',
    provider: 'Section',
    title: 'Building Your First Personal AI Agent with ChatGPT Work',
    url: 'https://www.sectionai.com/courses/building-your-first-personal-ai-agent-with-chatgpt-work',
    kind: 'paid-competitor',
    priority: 'must-review',
    whyItMatters:
      'The closest direct paid workshop competitor: 2 hours, nontechnical, Chief-of-Staff framing, connected calendar/inbox/messages, $195 standalone.',
    whatToBorrow: [
      'Immediate relatable business promise',
      'Hands-on build in a short live session',
      'Show recurring work worth handing off',
    ],
    whatNotToDuplicate: [
      'Chief-of-Staff positioning as the primary identity',
      'Reducing the method to inbox/calendar productivity',
      'Assuming integrations are available in the room',
    ],
  },
  {
    id: 'maven-flow-state-ai-os',
    provider: 'Maven / Flow State',
    title: 'Build Your AI Operating System',
    url: 'https://maven.com/actionablefeedback/build-your-ai-operating-system',
    kind: 'paid-competitor',
    priority: 'must-review',
    whyItMatters:
      'A current $800, roughly 6–6.5 hour founder/operator benchmark around focus, overwhelm, systematic execution, and an AI-native operating system.',
    whatToBorrow: [
      'Systematic-execution framing',
      'Premium pricing for a complete operating-system outcome',
      'Position against firefighting and fragmented attention',
    ],
    whatNotToDuplicate: [
      'Broad life/coaching territory that weakens the business-information and workflow differentiation',
    ],
  },
  {
    id: 'maven-claude-ai-os',
    provider: 'Maven',
    title: 'Build Your AI OS in Claude Cowork',
    url: 'https://maven.com/thaddeus-demeke/build-your-ai-operating-system-in-claude',
    kind: 'paid-competitor',
    priority: 'should-review',
    whyItMatters:
      'A current 3-hour, $295 workshop that organizes persistent context, data sources, workflows, and a 90-day plan.',
    whatToBorrow: [
      'Persistent-context framing',
      'Context / data sources / workflows as layers',
      'Leave with a 90-day plan',
    ],
    whatNotToDuplicate: [
      'Vendor-locking the core methodology to Claude',
    ],
  },
] as const

export const DAILY_OPERATOR_BENCHMARK_REVIEW_ORDER = [
  'openai-small-business-hub',
  'openai-ai-foundations',
  'openai-applied-ai-foundations',
  'openai-agents-workflows',
  'claude-ai-fluency',
  'claude-human-agent-teams',
  'claude-capabilities-limitations',
  'section-personal-agent',
  'maven-flow-state-ai-os',
  'maven-claude-ai-os',
  'claude-nonprofit-beyond-chat',
  'openai-small-business-work',
] as const
