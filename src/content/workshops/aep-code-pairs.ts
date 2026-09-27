import { AEP_BLOB } from '@/content/opportunities/fdeEvidenceRegistry'
import type { AepWorkshopPlateId } from '@/content/workshops/aep-workshop-visuals'

export type AepCodePairTone = 'deny' | 'ask' | 'inspect' | 'allow'

export type AepCodePair = {
  id: string
  tone: AepCodePairTone
  problem: string
  why: string
  file: string
  href: string
  startLine: number
  lines: readonly string[]
  plate?: AepWorkshopPlateId
}

export const AEP_CODE_PAIRS: readonly AepCodePair[] = [
  {
    id: 'policy',
    tone: 'deny',
    problem: 'The model cites evidence it never retrieved.',
    why: 'Unsupported IDs fail closed. Confidence drops, status becomes insufficient evidence, and a person has to review.',
    file: 'packages/agent/src/policy.ts',
    href: `${AEP_BLOB}/packages/agent/src/policy.ts`,
    startLine: 36,
    plate: 'pair-citation',
    lines: [
      'export function applyCitationGate(',
      '  assessment: ControlAssessment,',
      '  allowlistedEvidenceIds: ReadonlySet<string>,',
      '): { assessment: ControlAssessment; blocked: boolean } {',
      '  const unsupported = findUnsupportedCitations(assessment, allowlistedEvidenceIds);',
      '  if (unsupported.length === 0) {',
      '    return { assessment, blocked: false };',
      '  }',
      '  return {',
      '    blocked: true,',
      '    assessment: {',
      '      ...assessment,',
      '      status: "insufficient_evidence",',
      '      requiresHumanReview: true,',
      '      unsupportedClaims: unsupported,',
      '      confidence: Math.min(assessment.confidence, 0.4),',
      '    },',
      '  };',
      '}',
    ],
  },
  {
    id: 'run',
    tone: 'ask',
    problem: 'A restart drops the pending human decision.',
    why: 'The run is persisted. When the citation gate blocks, status becomes needs_review and the audit trail records the pause.',
    file: 'packages/agent/src/run.ts',
    href: `${AEP_BLOB}/packages/agent/src/run.ts`,
    startLine: 194,
    plate: 'pair-review',
    lines: [
      'if (gated.blocked) {',
      '  await setStatus(db, run.id, status, "needs_review");',
      '  status = "needs_review";',
      '  prevHash = await appendAudit(db, {',
      '    runId: run.id,',
      '    tenantId: input.tenantId,',
      '    traceId,',
      '    eventType: "citation_gate_blocked",',
      '    actorType: "system",',
      '    payload: {',
      '      assessmentId: saved.id,',
      '      unsupportedClaims: gated.assessment.unsupportedClaims,',
      '    },',
      '    previousEventHash: prevHash,',
      '  });',
      '}',
    ],
  },
  {
    id: 'search',
    tone: 'inspect',
    problem: 'Retrieval ignores tenant and visibility.',
    why: 'Lexical search is scoped before rank fusion. Another tenant’s evidence never enters the allowlist.',
    file: 'packages/retrieval/src/search.ts',
    href: `${AEP_BLOB}/packages/retrieval/src/search.ts`,
    startLine: 101,
    lines: [
      'FROM "EvidenceItem"',
      'WHERE "tenantId" = $1::uuid',
      '  AND visibility = ANY($2::text[])',
      '  AND to_tsvector(\'english\', text) @@ plainto_tsquery(\'english\', $3)',
      'ORDER BY score DESC, id ASC',
      'LIMIT $4',
    ],
  },
  {
    id: 'runner',
    tone: 'allow',
    problem: 'The same job runs twice and fails silently.',
    why: 'Enqueue is idempotent. Unknown handlers and exhausted retries go to dead letter, not a quiet retry loop.',
    file: 'packages/jobs/src/runner.ts',
    href: `${AEP_BLOB}/packages/jobs/src/runner.ts`,
    startLine: 35,
    lines: [
      'async enqueue(input: EnqueueInput): Promise<{ job: DurableJobRecord; created: boolean }> {',
      '  const existing = await this.store.findByIdempotency(',
      '    input.tenantId,',
      '    input.name,',
      '    input.idempotencyKey,',
      '  );',
      '  if (existing) {',
      '    return { job: existing, created: false };',
      '  }',
      '  const job = await this.store.create({ ...input, id: randomUUID(), status: "queued" });',
      '  return { job, created: true };',
      '}',
    ],
  },
]
