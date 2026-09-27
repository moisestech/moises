/**
 * WEB-01 — stale-claim list. Confirm before any copy edit.
 * None of these are auto-fixed. WEB-04 may apply one-liners only if approved.
 */
export const FDE_STALE_CLAIMS = [
  {
    id: 'forward-deployed-is-deloitte-send',
    path: 'src/app/(main)/forward-deployed/page.tsx',
    note: '/forward-deployed is the Deloitte Design Facilitator dossier, not a generic FDE landing. Keep.',
    action: 'keep',
  },
  {
    id: 'lore-present-adjacent',
    path: 'src/content/opportunities/* and src/content/applications/playwire.ts',
    note: 'Lore Machine founding engineer / CPO appears in present-adjacent tone on several overlays. Confirm past vs current before any WEB-04 copy change.',
    action: 'wait',
  },
  {
    id: 'agentic-ops-homepage-tile',
    path: 'src/content/evidence/flagships.ts',
    note: 'Agentic Ops homepage tile can be read as the production agent flagship. It is claimable: false. Do not promote. Do not delete this pass.',
    action: 'keep',
  },
  {
    id: 'claude-deployed-sentence',
    path: 'applications / future AEP copy',
    note: 'Never write “I deployed a system using Claude” until AEP MODEL_PROVIDER / live eval config is verified in TICKET-00.',
    action: 'wait',
  },
  {
    id: 'invented-metrics',
    path: 'any FDE / AEP page',
    note: 'Do not invent DCC job counts, time saved, or cost.',
    action: 'keep',
  },
] as const
