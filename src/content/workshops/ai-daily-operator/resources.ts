/**
 * AI Daily Operator — official learning resources and market benchmarks.
 *
 * Keep vendor learning links current. These resources are references and
 * prerequisites; they are not copied into the course.
 */

export type DailyOperatorResource = {
  id: string
  provider: string
  title: string
  url: string
  kind: 'official-course' | 'official-resource' | 'benchmark'
  relevance: readonly string[]
  useInProgram: string
}

export const DAILY_OPERATOR_RESOURCES: readonly DailyOperatorResource[] = [
  {
    id: 'openai-academy-courses',
    provider: 'OpenAI',
    title: 'OpenAI Academy Courses',
    url: 'https://academy.openai.com/pages/courses',
    kind: 'official-resource',
    relevance: ['Level I', 'Level V', 'AI fluency', 'workflows'],
    useInProgram:
      'Link as an official product-learning path. Do not spend Level I reproducing generic ChatGPT foundations that OpenAI already maintains.',
  },
  {
    id: 'openai-ai-foundations',
    provider: 'OpenAI',
    title: 'AI Foundations',
    url: 'https://academy.openai.com/public/courses/ai-foundations-dnq5w',
    kind: 'official-course',
    relevance: ['Level I', 'prompting', 'context', 'responsible use'],
    useInProgram:
      'Recommended optional prerequisite for participants who are completely new to ChatGPT.',
  },
  {
    id: 'openai-academy-course-reference',
    provider: 'OpenAI',
    title: 'OpenAI Academy course catalog and durations',
    url: 'https://help.openai.com/en/articles/20001270-openai-academy-courses',
    kind: 'official-resource',
    relevance: ['curriculum benchmark', 'assessments', 'certificates'],
    useInProgram:
      'Benchmark the Foundations pathway: AI Foundations, Applied AI Foundations, Agents and Workflows.',
  },
  {
    id: 'openai-small-business-hub',
    provider: 'OpenAI',
    title: 'ChatGPT for Small Business — Workshop Resource Hub',
    url: 'https://academy.openai.com/public/resources/openai-academy-small-business-resource-hub-2026-06-03',
    kind: 'official-resource',
    relevance: ['Level I', 'small business', 'pedagogy', 'human review'],
    useInProgram:
      'Borrow pedagogy, not content: demo → try → discuss; Goal / Context / Output / Boundary; synthetic fallback case; explicit human review.',
  },
  {
    id: 'openai-chatgpt-for-work',
    provider: 'OpenAI',
    title: 'ChatGPT for Work',
    url: 'https://openai.com/academy/chatgpt-for-work/',
    kind: 'official-resource',
    relevance: ['Level I', 'Level II', 'roles', 'operations'],
    useInProgram:
      'Use as a current feature/use-case reference when updating tool guides.',
  },
  {
    id: 'claude-academy',
    provider: 'Anthropic',
    title: 'Claude Academy',
    url: 'https://academy.claude.com/',
    kind: 'official-resource',
    relevance: ['Level I', 'AI fluency', 'human-agent teams'],
    useInProgram:
      'Primary Anthropic learning reference. Link rather than duplicating broad AI literacy.',
  },
  {
    id: 'claude-ai-fluency',
    provider: 'Anthropic',
    title: 'AI Fluency: Framework and Foundations',
    url: 'https://academy.claude.com/courses/ai-fluency-framework-foundations',
    kind: 'official-course',
    relevance: ['Level I', 'Delegation', 'Description', 'Discernment', 'Diligence'],
    useInProgram:
      'Crosswalk the 4D framework to Founder Attention OS: delegation → attention routing; description → context; discernment → inspectable judgment; diligence → approval and responsibility.',
  },
  {
    id: 'claude-capabilities-limitations',
    provider: 'Anthropic',
    title: 'AI Capabilities and Limitations',
    url: 'https://academy.claude.com/courses/ai-capabilities-and-limitations',
    kind: 'official-course',
    relevance: ['Level I', 'limitations', 'context', 'knowledge', 'steerability'],
    useInProgram:
      'Use as optional deeper learning. Teach only the subset needed to prevent over-trust in the Daily Operator.',
  },
  {
    id: 'claude-human-agent-teams',
    provider: 'Anthropic',
    title: 'Building Effective Human-Agent Teams (beta)',
    url: 'https://academy.claude.com/courses/building-effective-human-agent-teams',
    kind: 'official-course',
    relevance: ['Level II', 'Level V', 'roles', 'information access', 'gradual release'],
    useInProgram:
      'Incorporate clear roles, written north star, gradual release, and right information access into advanced modules.',
  },
  {
    id: 'claude-small-business',
    provider: 'Anthropic',
    title: 'Claude for Small Business / AI Fluency for Small Business',
    url: 'https://www.anthropic.com/news/claude-for-small-business',
    kind: 'official-resource',
    relevance: ['small business', 'Level I', 'trust', 'human in the loop'],
    useInProgram:
      'Benchmark small-business language, responsibility, and safe adoption.',
  },
  {
    id: 'claude-nonprofit-workflow',
    provider: 'Anthropic',
    title: 'Moving Your Workflow Beyond Chat',
    url: 'https://claude.com/resources/webinars/claude-for-nonprofits-moving-your-workflow-beyond-chat',
    kind: 'official-resource',
    relevance: ['Level II', 'Level V', 'Projects', 'Skills', 'Connectors'],
    useInProgram:
      'Use the Chat → Project → Skill → Connector ladder as a comparison point for our chat → durable context → workflow → system progression.',
  },
  {
    id: 'section-personal-agent',
    provider: 'Section',
    title: 'Building Your First Personal AI Agent with ChatGPT Work',
    url: 'https://www.sectionai.com/courses/building-your-first-personal-ai-agent-with-chatgpt-work',
    kind: 'benchmark',
    relevance: ['Level I', 'Chief of Staff', 'calendar', 'inbox', 'recurring work'],
    useInProgram:
      'Closest direct commercial benchmark. Differentiate on attention judgment, source integrity, friction-before-automation, and approval.',
  },
  {
    id: 'section-pricing',
    provider: 'Section',
    title: 'Section AI Academy Pricing',
    url: 'https://www.sectionai.com/pricing',
    kind: 'benchmark',
    relevance: ['pricing', 'individual workshop', 'membership'],
    useInProgram:
      'Use current standalone/live pricing as an individual-market anchor, not as an institutional facilitation ceiling.',
  },
  {
    id: 'maven-ai-operating-system',
    provider: 'Maven',
    title: 'Build Your AI Operating System',
    url: 'https://maven.com/actionablefeedback/build-your-ai-operating-system',
    kind: 'benchmark',
    relevance: ['operating system', 'focus', 'founders', 'pricing'],
    useInProgram:
      'Higher-priced benchmark validating operating-system/focus language. Our program should stay more explicit about sources, business signals, friction, and governance.',
  },
] as const

export const DAILY_OPERATOR_ACADEMY_CROSSWALK = [
  {
    level: 'I',
    internal: 'Attention, context, inspectable judgment, first brief',
    external:
      'OpenAI AI Foundations / Applied AI Foundations; Claude AI Fluency',
    differentiation:
      'Finite founder attention organized against an explicit business goal.',
  },
  {
    level: 'II',
    internal: 'Sources of truth, freshness, permissions, connected context',
    external:
      'OpenAI repeatable workflows; Claude human-agent teams and Connector progression',
    differentiation:
      'Which source should be trusted for which signal, and what happens when it is missing.',
  },
  {
    level: 'III',
    internal: 'Money / mission signals as decision context',
    external: 'Vendor role-based finance/operations examples',
    differentiation:
      'Metrics enter the brief only when they can change attention or a decision.',
  },
  {
    level: 'IV',
    internal: 'Friction taxonomy and Impact × Frequency × Ease × Risk',
    external: 'Use-case identification and workflow redesign programs',
    differentiation:
      'Friction is evidence; automation is not assumed to be the answer.',
  },
  {
    level: 'V',
    internal: 'Governed workflow with explicit approval and record',
    external:
      'OpenAI Agents and Workflows; Claude human-agent teams / Skills / Connectors',
    differentiation:
      'A human-responsible operating system whose performance feeds the Weekly Review and 90-Day Roadmap.',
  },
] as const

export const DAILY_OPERATOR_RESOURCES_LAST_REVIEWED = '2026-10-07' as const
