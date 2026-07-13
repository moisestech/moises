/**
 * Production AI Automation Evidence Pack — canonical copy for Command Center Artifact.
 * Shared across career packet, opportunity dossiers, and Cursor handoffs.
 *
 * Verifier rule: only claims marked `confirmed` may appear in public/indexable dossiers.
 */

export type EvidenceClaimStatus = 'confirmed' | 'needs_verification' | 'prohibited_until_verified';

export type EvidenceClaim = {
  text: string;
  status: EvidenceClaimStatus;
  source?: string;
};

export const productionAiAutomationPack = {
  artifactId: 'production-ai-automation-evidence-pack',
  title: 'Production AI Automation Evidence Pack',
  status: 'in_progress' as const,
  due: '2026-07-14',

  n8nGmailIntelligence: {
    title: 'n8n Gmail Intelligence Agent',
    buildState: 'verified_live' as const,
    summary:
      'Production n8n workflow with an AI Agent node that reads incoming Gmail, applies structured label routing, and syncs recruiter/opportunity signals into Airtable.',
    architecture: [
      { step: 'Trigger', detail: 'Gmail trigger on new inbound messages (cadence: VERIFY — polling interval or push)' },
      { step: 'AI Agent node', detail: 'LLM classifies message intent against fixed taxonomy (model: VERIFY)' },
      { step: 'Router', detail: 'Branch to label actions, skip, or human-review queue' },
      { step: 'Gmail actions', detail: 'Apply structured labels — no auto-send, no auto-archive without rules' },
      { step: 'Airtable sync', detail: 'Write recruiter/opportunity signals to Command Center or Life OS tables' },
    ],
    labelTaxonomy: [
      { label: 'VERIFY: Recruiter / agency', action: 'Apply label + optional Airtable upsert' },
      { label: 'VERIFY: Active opportunity', action: 'Link to Opportunity record when match found' },
      { label: 'VERIFY: Follow-up due', action: 'Flag for Life OS Action creation' },
      { label: 'VERIFY: Low signal / newsletter', action: 'Archive batch or secondary label' },
      { label: 'VERIFY: Human review', action: 'No automation — leaves inbox unlabeled or review queue' },
    ],
    errorHandling: [
      'Confirmed: workflow does not auto-send email replies.',
      'Confirmed: label-only and Airtable write paths — human approval before outbound recruiter mail.',
      'VERIFY: retry policy on Gmail API / Airtable rate limits.',
      'VERIFY: fallback label when LLM confidence low or parse fails.',
      'VERIFY: dead-letter or error notification channel (Slack/email).',
    ],
    humanReviewBoundaries: [
      'Recruiter replies and application submissions require explicit human approval.',
      'Opportunity creation may be suggested via Airtable but duplicate check before insert.',
      'No Gmail archive/delete without matching taxonomy rule.',
    ],
    confirmedClaims: [
      'Production n8n workflow is live.',
      'AI Agent node classifies incoming Gmail.',
      'Structured label routing is applied.',
      'Recruiter/opportunity signals sync to Airtable.',
    ] satisfies string[],
    screenshotChecklist: [
      'n8n canvas (redact PII)',
      'AI Agent node prompt / tool config (redact secrets)',
      'Sample labeled thread (redact addresses)',
      'Airtable record created from routing (redact PII)',
    ],
  },

  bookleggersCommerce: {
    title: 'Bookleggers — Square · Make · Airtable',
    buildState: 'verified_live' as const,
    summary:
      'Live Make.com scenario connecting Square POS transactions to Airtable for sales and inventory visibility at Bookleggers Library.',
    dataFlow: [
      'Square sale or inventory event → Make trigger',
      'Field map → Airtable create/update',
      'VERIFY: reverse sync direction if bidirectional',
    ],
    fieldMapping: [
      { square: 'VERIFY: product/SKU', airtable: 'VERIFY: Inventory table field' },
      { square: 'VERIFY: quantity', airtable: 'VERIFY: Qty on hand' },
      { square: 'VERIFY: sale amount', airtable: 'VERIFY: Sales log field' },
      { square: 'VERIFY: timestamp', airtable: 'VERIFY: Transaction date' },
    ],
    syncBehavior: {
      frequency: 'VERIFY: realtime vs scheduled',
      goLiveDate: 'VERIFY',
      conflictResolution: 'VERIFY: last-write-wins or manual review',
    },
    confirmedClaims: [
      'Live Make.com scenario connects Square to Airtable.',
      'Bookleggers staff use Airtable for sales/inventory visibility.',
      'Removes manual spreadsheet double-entry for covered transactions.',
    ] satisfies string[],
    screenshotChecklist: [
      'Make scenario map (redact tokens)',
      'Square trigger module config',
      'Airtable module field map',
      'Sample Airtable row from live sync (redact PII)',
    ],
  },

  multiAgentCareerSystem: {
    title: 'Multi-Agent Career & Productivity System',
    buildState: 'verified_live' as const,
    summary:
      'Claude + n8n + Airtable + Gmail orchestration for application pipeline, Life OS Actions, and recruiter graph — includes Application Identity Triage Agent v1.',
    confirmedClaims: [
      'Uses Claude for triage, drafting, and verification workflows.',
      'n8n handles Gmail intake automation.',
      'Airtable holds Opportunities, Actions, Artifacts, Recruiter Graph.',
      'Strict verifier blocks unsupported RAG/vector/LangGraph claims until evidence exists.',
    ] satisfies string[],
  },

  /** Infra24 Memory Agent — separate from automation pack; build state matters for claims */
  infra24MemoryAgent: {
    title: 'DCC Memory Agent (Infra24)',
    buildState: 'built_locally' as const,
    prohibitedPublicClaims: [
      'production RAG at enterprise scale',
      'verified-live pgvector demo URL',
      'LangChain/LangGraph orchestration in Infra24',
    ],
    allowedFramingWhenDeployed:
      'Governed institutional RAG pilot — hybrid retrieval, citations, eval harness — demo at dcc.miami after verified-live check.',
    repoPaths: [
      'lib/memory-agent/ask.ts',
      'supabase/migrations/20260711120000_memory_agent_embeddings_pgvector.sql',
      'docs/APPLIED_AI_ENGINEER_EVIDENCE.md',
    ],
  },
} as const;

export type ProductionAiAutomationPack = typeof productionAiAutomationPack;
