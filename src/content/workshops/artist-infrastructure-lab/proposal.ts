export const LAB_PREMISE = [
  'Artists increasingly work through platforms, databases, models, archives, and automation. These tools shape what becomes visible, how knowledge is described, who can act, and what survives.',
  'This lab brings digital and public humanities into equal balance with hands-on artist infrastructure. Participants investigate a cultural or public question while constructing a small system they can inspect, test, document, and hand to another person.',
] as const

export const LAB_LENSES = [
  {
    id: 'humanities',
    title: 'Digital and public humanities',
    items: ['Provenance', 'Interpretation', 'Power', 'Uncertainty', 'Rights', 'Publics'],
  },
  {
    id: 'infrastructure',
    title: 'Artist infrastructure',
    items: ['Workflows', 'Tools', 'Automation', 'Documentation', 'Maintenance', 'Handoff'],
  },
] as const

export const LAB_SHARED_CENTER =
  'Evidence-aware systems people can inspect, use, question, and continue.'

export const LAB_TOOLS = [
  {
    name: 'Structured data',
    detail: 'CSV or an approved spreadsheet. Identifiers, schema, provenance, status, and rights.',
  },
  {
    name: 'Automation',
    detail:
      'n8n in an approved teaching environment. Triggers, mappings, conditions, logs, duplication, review, and failure. This preview does not connect to n8n.',
  },
  {
    name: 'Models',
    detail:
      'An institutionally approved model, if one is used. Supplied context, grounding, unsupported inference, and human authority. A no-AI route is always available. This preview uses a seeded suggestion, not a live model.',
  },
  {
    name: 'Public interface',
    detail: 'A course-native composer. Audience, sequence, attribution, accessibility, and publication gates.',
  },
  {
    name: 'Handoff',
    detail: 'Markdown, CSV, JSON, static HTML, and PDF. Portability, ownership, maintenance, and recovery.',
  },
] as const

export const LAB_RHYTHM = [
  'Short demonstration',
  'Guided construction',
  'Practice translation',
  'Peer test',
  'Failure rehearsal',
  'Artifact export',
] as const

export const LAB_FORMATS = [
  {
    title: 'Entry option',
    body: 'A paid two-part workshop. Scope, dates, hours, preparation, and budget agreed in writing.',
  },
  {
    title: 'Expanded option',
    body: 'Eight proposed studio sessions of about two hours across a semester. An earlier planning window was spring 2027. No dates are booked.',
  },
  {
    title: 'Collaborative option',
    body: 'A co-taught module inside an existing curriculum, with roles, preparation, assessment, and compensation explicit.',
  },
] as const

export const LAB_QUESTIONS = [
  'Who is the cohort?',
  'Which existing learning goals should this complement?',
  'What schedule is realistic?',
  'Which software environment is approved?',
  'What can be publicly shared?',
  'Who owns budget and approval?',
  'What would a useful first pilot demonstrate?',
] as const

export const LAB_INSTRUCTOR =
  'Moises Sanabria is a Miami-based interdisciplinary artist. His work examines how platforms, archives, and automation shape what can be seen, described, and kept. The lab draws on artist-facing programs, digital infrastructure, and teaching resources developed through Oolite Arts and ongoing work at Bakehouse Art Complex.'

export const LAB_NEXT =
  'Review the course direction together, choose one format, then agree a bounded paid pilot.'
