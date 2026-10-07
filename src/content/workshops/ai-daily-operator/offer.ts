/**
 * Founder Attention OS — internal offer ladder and pricing hypotheses.
 *
 * Author planning only. Do not render as public pricing until pilot validation.
 */

export const DAILY_OPERATOR_POSITIONING = {
  workshopTitle: 'Build Your AI Daily Operator',
  method: 'Founder Attention OS',
  descriptor:
    'A practical founder operating system for deciding what deserves your attention, why it matters, and what can wait.',
  comparisonLanguage: ['AI Chief of Staff', 'AI Executive Assistant'],
  namingRule:
    'Use comparison language for comprehension/search only; do not make it the primary category.',
} as const

export const DAILY_OPERATOR_FUNNEL = [
  {
    stage: 'Free',
    offer: 'Public program page + Attention Flywheel + sample brief + Academy links',
    goal: 'Create comprehension and reduce prerequisite teaching.',
    price: '$0',
  },
  {
    stage: 'Level I',
    offer: '90-minute hosted AI Daily Operator workshop',
    goal: 'Produce immediate value and a first self-diagnosis.',
    price:
      'Pilot hypothesis: $1,500–$2,500 institutional; later $95–$195 individual.',
  },
  {
    stage: 'Levels II–V',
    offer: 'Full Founder Attention OS cohort',
    goal: 'Make the business legible, diagnose friction, and design one governed workflow.',
    price:
      'Pilot hypothesis: ~$750 individual; $1,000–$1,250 standard target; $7,500–$12,500 institutional cohort.',
  },
  {
    stage: 'Implementation',
    offer: 'Operating System / Workflow Implementation Sprint',
    goal: 'Implement only a justified friction with source, permission, and approval rules already defined.',
    price: 'Working range: $3,500–$7,500 for a narrow sprint; custom systems quoted separately.',
  },
] as const

export const DAILY_OPERATOR_CONVERSION_RULE =
  'The conversion moment comes after useful value: the participant sees a real Daily Operating Brief and a real Friction Map, then chooses whether deeper connection or implementation is worth it.'

export const DAILY_OPERATOR_PRICE_VALIDATION = [
  'Validate after 2–3 hosted Level I sessions.',
  'Test host willingness to pay before optimizing individual checkout.',
  'Do not discount the institutional offer to match short consumer workshop pricing.',
  'Track completion, usefulness, seven-day reuse, and implementation interest before raising price.',
  'Treat all ranges as internal hypotheses until validated.',
] as const
