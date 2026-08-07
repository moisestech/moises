/**
 * Public role-archetype send links for Airtable Inbox triage.
 * Employer-specific `/opportunities/<company-slug>` dossiers stay private overlays.
 *
 * Institutional / arts lanes (Knight, NEW INC, Oolite, Bakehouse) are NOT these pages —
 * use `/institutions`, `/oolite-arts`, `/technology-product-strategy`, etc.
 */

export type RoleArchetype = {
  id: 'ai-engineer' | 'forward-deployed-engineer' | 'ai-solutions-architect' | 'institutional';
  label: string;
  /** Canonical public URL to put in applications / Notes */
  sendUrl: string;
  /** Optional short alias that redirects to sendUrl */
  aliasUrls: string[];
  coversApprox: string;
  status: 'live' | 'built-pending-deploy' | 'use-existing-institutional';
  notes: string;
};

export const roleArchetypes: RoleArchetype[] = [
  {
    id: 'ai-engineer',
    label: 'AI Engineer',
    sendUrl: 'https://moises.tech/ai-engineering',
    aliasUrls: ['https://moises.tech/ai-engineer', 'https://moises.tech/roles/ai-engineer'],
    coversApprox: '~15 Inbox jobs (AI / full-stack / agentic engineer cluster)',
    status: 'live',
    notes:
      'Already live public packet. Highest leverage. Prefer /ai-engineering in emails; /ai-engineer aliases to it after deploy.',
  },
  {
    id: 'forward-deployed-engineer',
    label: 'Forward Deployed Engineer',
    sendUrl: 'https://moises.tech/opportunities/forward-deployed-ai-engineer',
    aliasUrls: [
      'https://moises.tech/forward-deployed-engineer',
      'https://moises.tech/roles/forward-deployed-engineer',
    ],
    coversApprox: '~8 Inbox jobs (FDE / client-facing / creative technologist delivery)',
    status: 'built-pending-deploy',
    notes:
      'Dossier already existed (was private/noindex). Now listed + indexable; short alias redirects after deploy.',
  },
  {
    id: 'ai-solutions-architect',
    label: 'AI Solutions Architect',
    sendUrl: 'https://moises.tech/opportunities/ai-solutions-architect',
    aliasUrls: [
      'https://moises.tech/ai-solutions-architect',
      'https://moises.tech/roles/ai-solutions-architect',
    ],
    coversApprox: '~6 Inbox jobs (SA / customer-facing technical / pre-sales adjacent)',
    status: 'built-pending-deploy',
    notes:
      'New public archetype. Employer pages (Deepgram, Endor) remain private overlays when needed.',
  },
  {
    id: 'institutional',
    label: 'Institutional / arts (not job-search sprint)',
    sendUrl: 'https://moises.tech/institutions',
    aliasUrls: [
      'https://moises.tech/technology-product-strategy',
      'https://moises.tech/oolite-arts',
    ],
    coversApprox: 'Knight Foundation, NEW INC / New Museum, DCC-adjacent',
    status: 'use-existing-institutional',
    notes: 'Keep out of the three corporate archetype pages — separate career lane.',
  },
];
