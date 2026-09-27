import { AEP_BLOB, AEP_REPO } from '@/content/opportunities/fdeEvidenceRegistry'

export const FDE_EVIDENCE_STATUSES = ['shipped', 'in_progress', 'not_yet'] as const
export type FdeEvidenceStatus = (typeof FDE_EVIDENCE_STATUSES)[number]

export const FDE_EVIDENCE_STATUS_LABEL: Record<FdeEvidenceStatus, 'Shipped' | 'In progress' | 'Not yet'> = {
  shipped: 'Shipped',
  in_progress: 'In progress',
  not_yet: 'Not yet',
}

export type FdeEvidenceLink = {
  label: string
  href: string
}

export type FdeScorecardItem = {
  id: string
  label: string
  status: FdeEvidenceStatus
  evidence: FdeEvidenceLink[]
  note?: string
}

export type FdeEvidenceScorecard = {
  updated: string
  flagship: {
    name: string
    repo: string
    deployment: string
  }
  items: readonly FdeScorecardItem[]
}

export const FDE_EVIDENCE: FdeEvidenceScorecard = {
  updated: '2026-09-27',
  flagship: {
    name: 'agentic-evidence-pipeline',
    repo: AEP_REPO,
    deployment: 'In progress — first vertical: DCC Miami Fabricate My File intake.',
  },
  items: [
    {
      id: 'real-work',
      label: 'Real users, real work',
      status: 'not_yet',
      evidence: [],
    },
    {
      id: 'multi-tool',
      label: 'Multi-tool agent',
      status: 'in_progress',
      evidence: [
        { label: 'Hybrid retrieval', href: `${AEP_BLOB}/packages/retrieval/src/search.ts` },
        { label: 'Durable jobs', href: `${AEP_BLOB}/packages/jobs/src/runner.ts` },
      ],
    },
    {
      id: 'approval',
      label: 'Human approval + guardrails',
      status: 'shipped',
      evidence: [
        { label: 'Persisted run + review', href: `${AEP_BLOB}/packages/agent/src/run.ts` },
        { label: 'Citation fail-closed', href: `${AEP_BLOB}/packages/agent/src/policy.ts` },
      ],
    },
    {
      id: 'evals',
      label: 'Evals',
      status: 'in_progress',
      evidence: [
        {
          label: 'Offline fake-provider report',
          href: `${AEP_BLOB}/reports/offline/2026-08-12-fake-provider.json`,
        },
      ],
      note: '30-case synthetic suite; real-job suite pending written consent.',
    },
    {
      id: 'observability',
      label: 'Observability',
      status: 'in_progress',
      evidence: [{ label: 'Run inspector UI', href: `${AEP_BLOB}/apps/web` }],
      note: 'Inspector is shipped locally. OpenTelemetry export is not yet measured.',
    },
    {
      id: 'adoption',
      label: 'Adoption metrics',
      status: 'not_yet',
      evidence: [],
    },
    {
      id: 'reuse',
      label: 'Reusable across organizations',
      status: 'in_progress',
      evidence: [{ label: 'Architecture', href: `${AEP_BLOB}/docs/ARCHITECTURE.md` }],
      note: 'One reference implementation. Second org is not claimed.',
    },
    {
      id: 'narrative',
      label: 'Deployment case study',
      status: 'not_yet',
      evidence: [],
    },
  ],
}

export function assertFdeEvidence(data: FdeEvidenceScorecard): void {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) {
    throw new Error(`fde-evidence: updated must be YYYY-MM-DD, got ${data.updated}`)
  }
  if (!data.flagship.name || !data.flagship.repo || !data.flagship.deployment) {
    throw new Error('fde-evidence: flagship name, repo, and deployment are required')
  }
  const placeholder = `[${'MOISES'}:`
  if (data.flagship.deployment.includes(placeholder)) {
    throw new Error('fde-evidence: placeholder in flagship.deployment')
  }
  for (const item of data.items) {
    if (!FDE_EVIDENCE_STATUSES.includes(item.status)) {
      throw new Error(`fde-evidence: invalid status on ${item.id}`)
    }
    if (item.status === 'shipped' && item.evidence.length < 1) {
      throw new Error(`fde-evidence: shipped item ${item.id} requires at least one evidence link`)
    }
    if (item.note?.includes(placeholder) || item.label.includes(placeholder)) {
      throw new Error(`fde-evidence: placeholder on ${item.id}`)
    }
  }
}

assertFdeEvidence(FDE_EVIDENCE)
