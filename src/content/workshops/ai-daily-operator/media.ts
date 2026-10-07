/**
 * Build Your AI Daily Operator — canonical media registry.
 *
 * Cloudinary root mirrors the course architecture:
 * dccmiami/workshops/ai-daily-operator/
 *
 * Keep public IDs stable. Replace an approved asset in place rather than
 * versioning production filenames. Drafts belong in 90-drafts-archive.
 */

export const DAILY_OPERATOR_CLOUDINARY_CLOUD = 'dck5rzi4h' as const
export const DAILY_OPERATOR_MEDIA_ROOT =
  'dccmiami/workshops/ai-daily-operator' as const

export type DailyOperatorMediaStatus =
  | 'needed'
  | 'generated-local'
  | 'working'
  | 'approved'
  | 'rejected'

export type DailyOperatorMediaRole =
  | 'hero'
  | 'artifact'
  | 'diagram'
  | 'object'
  | 'signal'
  | 'lens'
  | 'case-study'
  | 'industry-overlay'
  | 'marketing'

export type DailyOperatorMediaAsset = {
  publicId: string
  folder: string
  concept: string
  role: DailyOperatorMediaRole
  status: DailyOperatorMediaStatus
  alt: string
  usage: readonly ('web' | 'lms' | 'slides' | 'social')[]
}

function asset(
  folder: string,
  fileName: string,
  config: Omit<DailyOperatorMediaAsset, 'publicId' | 'folder'>,
): DailyOperatorMediaAsset {
  return {
    publicId: `${DAILY_OPERATOR_MEDIA_ROOT}/${folder}/${fileName}`,
    folder: `${DAILY_OPERATOR_MEDIA_ROOT}/${folder}`,
    ...config,
  }
}

export function dailyOperatorCloudinaryUrl(
  publicId: string,
  transform = 'f_auto,q_auto',
) {
  return `https://res.cloudinary.com/${DAILY_OPERATOR_CLOUDINARY_CLOUD}/image/upload/${transform}/${publicId}`
}

export const DAILY_OPERATOR_MEDIA = {
  core: {
    attentionFlywheel: asset(
      '00-core/attention-flywheel',
      'ado-core-attention-flywheel',
      {
        concept: 'attention-flywheel',
        role: 'diagram',
        status: 'generated-local',
        alt: 'A circular operating model connecting goals, business signals, judgment, attention, action, review, and system improvement.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
    operatorCore: asset('00-core/hero', 'ado-core-operator-core', {
      concept: 'operator-core',
      role: 'hero',
      status: 'generated-local',
      alt: 'A central operator core receiving multiple business signals and producing one prioritized output.',
      usage: ['web', 'lms', 'slides'],
    }),
    signalSet: asset('00-core/signal-library', 'ado-core-signal-set', {
      concept: 'business-signal-set',
      role: 'signal',
      status: 'generated-local',
      alt: 'A reusable set of business signals including calendar, messages, invoices, leads, tasks, and files.',
      usage: ['web', 'lms', 'slides'],
    }),
    lenses: {
      commitments: asset(
        '00-core/judgment-lenses',
        'ado-lens-commitments',
        {
          concept: 'commitments',
          role: 'lens',
          status: 'generated-local',
          alt: 'Interlocked calendar commitments showing work that has already been promised.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      revenueMission: asset(
        '00-core/judgment-lenses',
        'ado-lens-revenue-mission',
        {
          concept: 'revenue-mission',
          role: 'lens',
          status: 'generated-local',
          alt: 'A value signal moving toward an objective, representing revenue or mission impact.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      risk: asset('00-core/judgment-lenses', 'ado-lens-risk', {
        concept: 'risk',
        role: 'lens',
        status: 'generated-local',
        alt: 'A business signal reaching a warning threshold, representing consequence if work waits.',
        usage: ['web', 'lms', 'slides'],
      }),
      capacity: asset('00-core/judgment-lenses', 'ado-lens-capacity', {
        concept: 'capacity',
        role: 'lens',
        status: 'generated-local',
        alt: 'A finite container nearly full of work blocks, representing realistic human capacity.',
        usage: ['web', 'lms', 'slides'],
      }),
    },
  },

  modules: {
    m01: {
      goalAttentionFunnel: asset(
        '01-daily-operator/m01-attention-before-automation',
        'ado-m01-goal-attention-funnel',
        {
          concept: 'goal-attention-funnel',
          role: 'diagram',
          status: 'generated-local',
          alt: 'Many business demands passing through a goal and judgment funnel until only a few priorities receive attention.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      fragmentedAttention: asset(
        '01-daily-operator/m01-attention-before-automation',
        'ado-m01-fragmented-attention',
        {
          concept: 'fragmented-attention',
          role: 'diagram',
          status: 'generated-local',
          alt: 'Business signals, messages, files, invoices, and tasks tangled together before prioritization.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m02: {
      factInterpretationRecommendation: asset(
        '01-daily-operator/m02-ai-fluency',
        'ado-m02-fact-interpretation-recommendation',
        {
          concept: 'fact-interpretation-recommendation',
          role: 'diagram',
          status: 'generated-local',
          alt: 'Three distinct stages separating facts, interpretation, and recommendations.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m03: {
      founderProfile: asset(
        '01-daily-operator/m03-business-context',
        'ado-m03-founder-profile',
        {
          concept: 'founder-profile',
          role: 'artifact',
          status: 'generated-local',
          alt: 'A founder operating profile containing objectives, responsibilities, constraints, and approval boundaries.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m04: {
      dailyOperatingBrief: asset(
        '01-daily-operator/m04-daily-operator',
        'ado-m04-daily-operating-brief',
        {
          concept: 'daily-operating-brief',
          role: 'artifact',
          status: 'generated-local',
          alt: 'A Daily Operating Brief organized around outcome, needs you, money, focus, and what can wait.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m05: {
      calendarCapacity: asset(
        '02-connected-operator/m05-calendar-as-capacity',
        'ado-m05-calendar-capacity',
        {
          concept: 'calendar-capacity',
          role: 'diagram',
          status: 'generated-local',
          alt: 'Calendar commitments occupying finite capacity rather than simply listing meetings.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m06: {
      sourceOfTruth: asset(
        '02-connected-operator/m06-signals-and-sources',
        'ado-m06-source-of-truth',
        {
          concept: 'source-of-truth',
          role: 'diagram',
          status: 'generated-local',
          alt: 'Separate business systems remaining distinct while the operator selectively retrieves the right signal from each.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      permissionMap: asset(
        '02-connected-operator/m06-signals-and-sources',
        'ado-m06-permission-map',
        {
          concept: 'permission-map',
          role: 'artifact',
          status: 'approved',
          alt: 'A map showing which business sources an AI system may read, draft from, or never act on alone.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m07: {
      businessPulse: asset(
        '03-business-pulse/m07-money-and-pipeline',
        'ado-m07-business-pulse',
        {
          concept: 'business-pulse',
          role: 'artifact',
          status: 'generated-local',
          alt: 'Revenue, pipeline, delivery, and capacity feeding one concise business pulse.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m08: {
      frictionOverview: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-overview',
        {
          concept: 'friction-overview',
          role: 'diagram',
          status: 'generated-local',
          alt: 'A visible bottleneck created by repeated manual retrieval, transfer, and coordination.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      retrieval: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-retrieval',
        {
          concept: 'friction-retrieval',
          role: 'object',
          status: 'approved',
          alt: 'Repeated retrieval from multiple sources to answer one recurring business question.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      reconciliation: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-reconciliation',
        {
          concept: 'friction-reconciliation',
          role: 'object',
          status: 'approved',
          alt: 'Two conflicting business records being manually reconciled.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      memory: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-memory',
        {
          concept: 'friction-memory',
          role: 'object',
          status: 'approved',
          alt: 'Important commitments depending on fragile human memory rather than a reliable system.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      transfer: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-transfer',
        {
          concept: 'friction-transfer',
          role: 'object',
          status: 'approved',
          alt: 'Information being manually copied between two otherwise clean business systems.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      decision: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-decision',
        {
          concept: 'friction-decision',
          role: 'object',
          status: 'approved',
          alt: 'The same routine judgment being reconstructed repeatedly instead of encoded as a clear rule.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      approval: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-approval',
        {
          concept: 'friction-approval',
          role: 'object',
          status: 'approved',
          alt: 'Many business flows waiting at one human approval bottleneck.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      communication: asset(
        '04-friction-intelligence/m08-friction-intelligence',
        'ado-m08-friction-communication',
        {
          concept: 'friction-communication',
          role: 'object',
          status: 'approved',
          alt: 'The same information repeatedly rewritten for several channels and recipients.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m09: {
      frictionScore: asset(
        '05-workflow-builder/m09-automation-selection',
        'ado-m09-impact-frequency-ease-risk',
        {
          concept: 'impact-frequency-ease-risk',
          role: 'diagram',
          status: 'approved',
          alt: 'A four-factor decision model for choosing whether a repeated friction is worth automating.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m10: {
      workflowBlueprint: asset(
        '05-workflow-builder/m10-build-one-workflow',
        'ado-m10-workflow-blueprint',
        {
          concept: 'workflow-blueprint',
          role: 'artifact',
          status: 'approved',
          alt: 'A governed workflow moving through trigger, context, reasoning, output, approval, action, and record.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m11: {
      humanApprovalGate: asset(
        '05-workflow-builder/m11-trust-and-approval',
        'ado-m11-human-approval-gate',
        {
          concept: 'human-approval-gate',
          role: 'diagram',
          status: 'generated-local',
          alt: 'An AI recommendation stopping at a human approval gate before consequential action.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },

    m12: {
      weeklyReview: asset(
        '05-workflow-builder/m12-weekly-operator-review',
        'ado-m12-weekly-operating-review',
        {
          concept: 'weekly-operating-review',
          role: 'artifact',
          status: 'approved',
          alt: 'A week of daily briefs resolving into what moved, what stuck, repeated friction, and one next improvement.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
      improvementRoadmap: asset(
        '05-workflow-builder/m12-weekly-operator-review',
        'ado-m12-90-day-improvement-roadmap',
        {
          concept: '90-day-improvement-roadmap',
          role: 'artifact',
          status: 'needed',
          alt: 'A restrained 90-day sequence of business improvements rather than a pile of automations.',
          usage: ['web', 'lms', 'slides'],
        },
      ),
    },
  },

  capstone: {
    sevenDayExperiment: asset(
      '06-capstone/seven-day-experiment',
      'ado-capstone-seven-day-experiment',
      {
        concept: 'seven-day-experiment',
        role: 'artifact',
        status: 'generated-local',
        alt: 'Seven daily operating briefs becoming clearer over one week as missing context and friction are documented.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
  },

  overlays: {
    creativeArtist: asset(
      '07-industry-overlays/creative-artist',
      'ado-overlay-creative-artist',
      {
        concept: 'creative-artist',
        role: 'industry-overlay',
        status: 'needed',
        alt: 'Founder Attention OS applied to grants, commissions, exhibitions, workshops, and creative production.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
    consultantAgency: asset(
      '07-industry-overlays/consultant-agency',
      'ado-overlay-consultant-agency',
      {
        concept: 'consultant-agency',
        role: 'industry-overlay',
        status: 'needed',
        alt: 'Founder Attention OS applied to proposals, retainers, client delivery, and follow-up.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
    localService: asset(
      '07-industry-overlays/local-service',
      'ado-overlay-local-service',
      {
        concept: 'local-service',
        role: 'industry-overlay',
        status: 'needed',
        alt: 'Founder Attention OS applied to appointments, quotes, jobs, payments, and customer requests.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
    retailHospitality: asset(
      '07-industry-overlays/retail-hospitality',
      'ado-overlay-retail-hospitality',
      {
        concept: 'retail-hospitality',
        role: 'industry-overlay',
        status: 'needed',
        alt: 'Founder Attention OS applied to staffing, sales, inventory, promotions, and customer communication.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
    nonprofitCultural: asset(
      '07-industry-overlays/nonprofit-cultural',
      'ado-overlay-nonprofit-cultural',
      {
        concept: 'nonprofit-cultural',
        role: 'industry-overlay',
        status: 'needed',
        alt: 'Founder Attention OS applied to grants, donors, programs, board commitments, and reporting.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
    professionalServices: asset(
      '07-industry-overlays/professional-services',
      'ado-overlay-professional-services',
      {
        concept: 'professional-services',
        role: 'industry-overlay',
        status: 'needed',
        alt: 'Founder Attention OS applied to client matters, deadlines, billable work, pipeline, and compliance.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
  },

  dccCaseStudy: {
    operatingCase: asset(
      '08-dcc-case-study',
      'ado-dcc-operating-case',
      {
        concept: 'dcc-operating-case',
        role: 'case-study',
        status: 'needed',
        alt: 'DCC Miami as a real creative-business case with workshops, clients, proposals, invoices, deadlines, and capacity competing for attention.',
        usage: ['web', 'lms', 'slides'],
      },
    ),
  },
} as const
