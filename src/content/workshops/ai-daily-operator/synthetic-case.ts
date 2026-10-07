/**
 * Founder Attention OS — synthetic fallback case.
 *
 * Use when a participant does not want to use real business information.
 * Entirely fictional. Designed to exercise all four Level I artifacts.
 */

export const SYNTHETIC_LEVEL_I_CASE = {
  name: 'Northstar Studio Co.',
  type: 'Fictional small creative-services business',
  note:
    'This case is fictional and safe for workshop practice. It is not based on a real company.',
  founderProfile: {
    business:
      'Northstar Studio Co. creates visual identity, small websites, and launch materials for local businesses and nonprofit teams.',
    role:
      'Founder responsible for sales conversations, project scoping, creative direction, final client approvals, and keeping delivery on track.',
    thirtyDayOutcome:
      'Close one qualified new project while delivering the current launch package on time without adding weekend catch-up work.',
    revenueMission:
      'Revenue comes from project fees and small monthly retainers. The founder wants repeat business without sacrificing quality or personal creative time.',
    founderOnlyWork: [
      'final project scope and pricing',
      'high-value sales conversations',
      'creative direction at key review points',
      'final approval on client promises',
    ],
    delegate: [
      'routine file organization',
      'meeting-note cleanup',
      'first-draft status updates',
      'asset collection reminders',
      'basic production formatting',
    ],
    constraints: [
      'founder works 9:30–5:30',
      'needs one 90-minute uninterrupted creative block daily',
      'client reviews often require 30 minutes preparation',
      'Friday afternoon is reserved for invoicing and weekly review',
    ],
    requestsArrive: ['email', 'contact form', 'Instagram DM'],
    leadsTracked: 'simple spreadsheet',
    projectsTracked: 'task board',
    paymentsTracked: 'accounting software',
    approvalRequired: [
      'pricing changes',
      'new deadlines',
      'client-facing commitments',
      'purchases over the business threshold',
      'invoice/payment changes',
    ],
  },
  attentionRules: {
    commitments:
      'Externally promised client deadlines and confirmed meetings with preparation requirements come first.',
    revenueMission:
      'Qualified sales conversations and work required to complete paid delivery can earn attention.',
    risk:
      'Surface anything that could cause a missed launch, client surprise, payment delay, or avoidable rework.',
    capacity:
      'Keep at least one 90-minute creative block and do not create more than three top outcomes.',
    canWait: [
      'portfolio redesign',
      'new software research',
      'social posting not tied to a current launch',
    ],
  },
  workday: {
    calendar: [
      '10:00–10:30 qualified prospect call',
      '1:00–1:45 current client review',
      '4:00–4:30 internal contractor check-in',
    ],
    deadlines: [
      'client homepage design due tomorrow at noon',
      'proposal requested by prospect by end of week',
    ],
    signals: [
      'client still owes one required logo file',
      'prospect opened the proposal brief twice but has not confirmed budget',
      'one invoice is six days overdue',
      'founder has no protected creative block on tomorrow’s calendar',
    ],
    tasks: [
      'redesign portfolio homepage',
      'research a new AI image tool',
      'prepare client review',
      'finish homepage design',
      'follow up on missing logo file',
      'send overdue invoice reminder draft for approval',
      'outline prospect proposal',
      'schedule social posts',
    ],
  },
  expectedLearning:
    'A strong brief should protect delivery and creative capacity, prepare the founder for the qualified prospect/client conversations, and explicitly deprioritize portfolio/tool-research work. It should not automatically send reminders, change meetings, or create accounting actions.',
  firstFrictionCandidates: [
    'lead follow-up depends on manually checking the spreadsheet and email',
    'required client assets are tracked across email and the task board',
    'invoice status has to be manually checked before follow-up',
  ],
} as const
