/**
 * WEB-01 — stale-claim list. Confirm before any copy edit.
 * None of these are auto-fixed.
 */
export const FDE_STALE_CLAIMS = [
  {
    id: 'forward-deployed-is-deloitte-send',
    path: 'src/app/(main)/forward-deployed/page.tsx',
    note: '/forward-deployed is the evergreen engineering FDE flagship. Deloitte Design Facilitator lives only at /opportunities/deloitte-ai-design-facilitator-fde.',
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
    note: 'Homepage recipes keep claimable: false so Agentic Ops is not read as a production product. /forward-deployed and /projects/agentic-ops may show it as a reference implementation.',
    action: 'keep',
  },
  {
    id: 'claude-deployed-sentence',
    path: 'applications / AEP / Agentic Ops copy',
    note: 'Never write “I deployed a system using Claude” until a live MODEL_PROVIDER path is verified.',
    action: 'wait',
  },
  {
    id: 'invented-metrics',
    path: 'any FDE / AEP page',
    note: 'Do not invent DCC job counts, time saved, or cost.',
    action: 'keep',
  },
] as const
