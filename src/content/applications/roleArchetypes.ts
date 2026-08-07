/**
 * Public role-archetype send links for Airtable Inbox triage.
 * Employer-specific `/opportunities/<company-slug>` dossiers stay private overlays.
 *
 * Institutional / arts lanes (Knight, NEW INC, Oolite, Bakehouse) are NOT these pages —
 * use `/institutions`, `/oolite-arts`, `/technology-product-strategy`, etc.
 */

export type RoleArchetypeId =
  | 'ai-engineer'
  | 'forward-deployed-engineer'
  | 'ai-solutions-architect'
  | 'creative'
  | 'institutional'
  | 'other';

export type RoleArchetype = {
  id: RoleArchetypeId;
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
      'Already live public packet. Highest leverage. Prefer /ai-engineering in emails; /ai-engineer aliases to it after deploy. Shared skills map: /capabilities#ai-engineering.',
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
      'Dossier already existed (was private/noindex). Now listed + indexable; short alias redirects after deploy. Shared skills map: /capabilities.',
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
      'New public archetype. Employer pages (Deepgram, Endor) remain private overlays when needed. Shared skills map: /capabilities.',
  },
  {
    id: 'creative',
    label: 'Creative / art direction',
    sendUrl: 'https://moises.tech/career-packet',
    aliasUrls: [],
    coversApprox: 'Agency AD/ACD/creative director cluster (prefer employer dossier when built)',
    status: 'live',
    notes:
      'No single public creative archetype yet — use employer dossiers (Morley, Digitas, WMX, Ogilvy) or career packet as fallback. Creative tech skills: /capabilities#design-creative-technology.',
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
  {
    id: 'other',
    label: 'Other / one-off',
    sendUrl: 'https://moises.tech/career-packet',
    aliasUrls: [],
    coversApprox: 'Roles that do not map cleanly to the three engineering archetypes',
    status: 'live',
    notes: 'Use career packet + tech CV; build a private dossier only if the role warrants it.',
  },
];

export function archetypeById(id: RoleArchetypeId): RoleArchetype | undefined {
  return roleArchetypes.find((a) => a.id === id);
}
