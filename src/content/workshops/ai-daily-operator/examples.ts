/**
 * Founder Attention OS — worked examples.
 *
 * DCC example is intentionally operational and non-sensitive. It demonstrates
 * structure without embedding private account balances or personal financial data.
 */

export const DCC_LEVEL_I_EXAMPLE = {
  label: 'DCC Miami — worked Level I example',
  note:
    'Operational teaching example. Uses representative DCC business patterns and intentionally omits private financial details.',
  founderProfile: {
    business:
      'DCC Miami is a creative-technology education and fabrication network that helps artists, students, institutions, and clients turn digital skills and files into usable projects, workshops, and physical/digital outcomes.',
    role:
      'Founder/operator responsible for institutional relationships, offer design, client scoping, curriculum direction, high-consequence approvals, and the operating system that connects the work.',
    thirtyDayOutcome:
      'Run one strong paid workshop, complete active client work reliably, and make the operator/client handoff less dependent on the founder remembering every next step.',
    revenueMission:
      'Revenue comes from workshops, fabrication/client services, and institutional work. Mission value comes from making creative-technology infrastructure more usable and transferable.',
    founderOnlyWork: [
      'high-value institutional relationship decisions',
      'scope and pricing decisions',
      'final curriculum/offer decisions',
      'high-risk client commitments',
      'approval of important external promises',
    ],
    delegate: [
      'routine production status updates',
      'file preparation and documentation',
      'repeat scheduling coordination',
      'operator handoff notes',
      'routine follow-up preparation',
    ],
    constraints: [
      'client delivery commitments compete with workshop preparation',
      'production work needs uninterrupted blocks',
      'some work depends on facility/equipment/operator availability',
      'institutional meetings may require preparation and travel/setup time',
    ],
    requestsArrive: ['email', 'WhatsApp/messages', 'referrals', 'institutional conversations'],
    leadsTracked: 'DCC CRM / Airtable',
    projectsTracked: 'production/project queue',
    paymentsTracked: 'accounting/payment systems',
    approvalRequired: [
      'new client scope or price commitments',
      'purchases and payments',
      'accounting changes',
      'external messages that create a material promise',
      'contract acceptance',
      'significant calendar changes',
    ],
  },
  attentionRules: {
    commitments:
      'Paid client delivery, confirmed workshops, institutional meetings, and promises with external consequences outrank optional internal improvements.',
    revenueMission:
      'Qualified client/institutional opportunities, collections, paid workshop enrollment, and work that improves access to DCC infrastructure can earn attention.',
    risk:
      'Surface anything likely to create a missed delivery, broken promise, stale qualified opportunity, safety/production issue, or preventable payment delay.',
    capacity:
      'Protect production/deep-work blocks; include setup/travel where relevant; no more than three top outcomes.',
    requiresFounder: [
      'important relationship judgment',
      'scope/price tradeoffs',
      'final approval on consequential promises',
    ],
    aiAssist: [
      'summaries',
      'draft follow-ups',
      'brief preparation',
      'comparison of known options',
      'first-pass documentation',
    ],
    canWait: [
      'nonurgent website polish',
      'tool research without a current decision',
      'low-consequence admin',
    ],
  },
  sampleDay: {
    commitments: [
      'client scope conversation',
      'production review',
      'workshop preparation block',
    ],
    signals: [
      'one active proposal needs a founder decision',
      'one follow-up is becoming stale',
      'one client delivery still needs review',
      'the next workshop needs enrollment attention',
      'no protected production block exists on the following day',
    ],
    possibleTasks: [
      'website update',
      'equipment research',
      'client follow-up',
      'proposal scope',
      'production review',
      'workshop promotion',
    ],
  },
  sampleBrief: {
    todayInOneSentence:
      'Protect the active client delivery, move the strongest opportunity, and preserve one uninterrupted production block.',
    topOutcomes: [
      'Resolve the client delivery decision that can block production.',
      'Move the qualified proposal/follow-up that has the strongest business consequence.',
      'Complete the minimum workshop action required to avoid an enrollment problem.',
    ],
    canWait: ['general equipment research', 'nonurgent website polish', 'low-consequence admin'],
    oneChange:
      'Protect a production block before accepting another optional meeting.',
  },
  firstFriction: {
    observation:
      'Follow-up context can require reconstructing the latest state across messages/email and the CRM.',
    type: ['retrieval', 'reconciliation'],
    firstImprovement:
      'Require one visible next-step field in the CRM after every meaningful lead interaction before considering automation.',
  },
} as const
