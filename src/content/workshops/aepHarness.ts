import type { CodeInspectBlock, ProcessStep } from '@/content/opportunities/types';
import { AEP_BLOB, AEP_REPO } from '@/content/opportunities/fdeEvidenceRegistry';

export const AEP_WORKSHOP_HREF = '/workshop/agentic-evidence-pipeline';

export const aepCodeInspect: CodeInspectBlock = {
  title: 'Code to inspect',
  intro:
    'Evidence in. Reviewable decisions out. Strongest public files from the Agentic Evidence Pipeline — a TypeScript reference implementation with synthetic fixtures and a fake-model evaluation harness. Not a hosted customer product, not a live-model quality claim, and not client platform work. Demo rasters from the AEP repo are not copied here.',
  items: [
    {
      id: 'run',
      title: 'run.ts — stateful run + human review',
      href: `${AEP_BLOB}/packages/agent/src/run.ts`,
      icon: 'git-branch',
      body: 'Idempotent run creation, explicit state transitions, persisted assessment state, review pause/resume, and audit events.',
    },
    {
      id: 'policy',
      title: 'policy.ts — citation fail-closed',
      href: `${AEP_BLOB}/packages/agent/src/policy.ts`,
      icon: 'shield',
      body: 'Unsupported evidence IDs lower confidence, change status to insufficient evidence, and force human review.',
    },
    {
      id: 'search',
      title: 'search.ts — hybrid retrieval',
      href: `${AEP_BLOB}/packages/retrieval/src/search.ts`,
      icon: 'search',
      body: 'Tenant- and visibility-scoped lexical and vector search combined through reciprocal rank fusion.',
    },
    {
      id: 'runner',
      title: 'runner.ts — durable jobs',
      href: `${AEP_BLOB}/packages/jobs/src/runner.ts`,
      icon: 'repeat',
      body: 'Duplicate protection, classified failures, retry backoff, dead-letter handling, and replay semantics.',
    },
  ],
  footnotes: [
    {
      label: 'Evidence ledger',
      href: `${AEP_BLOB}/docs/EVIDENCE_LEDGER.md`,
    },
    {
      label: 'Offline fake-provider report',
      href: `${AEP_BLOB}/reports/offline/2026-08-12-fake-provider.json`,
      note: 'offline harness evidence only',
    },
  ],
};

export const aepThinSliceTitle = 'Proposed design-forward FDE thin slice';

export const aepThinSliceIntro =
  'A bounded first engagement in the same six words as the FDE page. Facilitate and test are verbs inside Teach and Prototype — not extra stages. This is how I would enter an FDE method; it is not presented as completed client work.';

export const aepThinSliceSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description:
      'Observe the current workflow with a user, then frame the decision owner, baseline, data constraints, and a measurable acceptance criterion before choosing tools.',
  },
  {
    title: 'Prototype',
    description:
      'Build one reviewable workflow. Keep deterministic rules outside the model, limit tool permissions, and define a manual fallback. Test expected, ambiguous, and adversarial inputs against the baseline.',
  },
  {
    title: 'Govern',
    description:
      'Put a human gate on write-paths. Unsupported citations fail closed; uncertain results pause for a person. Make limitations explicit.',
  },
  {
    title: 'Deploy',
    description:
      'Take the slice to a system people can operate. Record what changed and what remains uncertain.',
  },
  {
    title: 'Teach',
    description:
      'Facilitate a mixed-audience session so designers, engineers, and product partners can operate the work. Capture assumptions and decide what is outside the first slice.',
  },
  {
    title: 'Handoff',
    description:
      'Leave an owner, setup guide, failure procedure, and repeatable exercise. Ask a teammate to operate and explain the workflow without assistance before calling handover complete.',
  },
];

export const aepWorkshopSeo = {
  title: 'Agentic Evidence Pipeline — Harness teaching | Moises Sanabria',
  description:
    'Reference implementation for governed evidence: model versus harness, Allow/Ask/Deny, inspectable TypeScript, and a proposed six-word FDE thin slice. Not Deloitte client work.',
};

export { AEP_REPO };
