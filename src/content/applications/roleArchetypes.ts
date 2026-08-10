/**
 * Public role-archetype send links for Airtable Inbox triage.
 * Employer-specific `/opportunities/<company-slug>` dossiers stay private overlays.
 *
 * Institutional / arts lanes (Knight, NEW INC, Oolite, Bakehouse) are NOT these pages —
 * use `/institutions`, `/oolite-arts`, `/technology-product-strategy`, etc.
 *
 * Hiring spine flagships: /projects/agentic-ops · /forward-deployed · /creative-ai
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
    coversApprox: 'AI / full-stack / agentic engineer cluster (skill-demand pattern, not dossier count)',
    status: 'live',
    notes:
      'Public packet. Prefer /ai-engineering; Agentic Ops case shell: /projects/agentic-ops (Building). Shared skills: /capabilities#ai-engineering.',
  },
  {
    id: 'forward-deployed-engineer',
    label: 'Forward Deployed Engineer',
    sendUrl: 'https://moises.tech/forward-deployed',
    aliasUrls: [
      'https://moises.tech/forward-deployed-engineer',
      'https://moises.tech/roles/forward-deployed-engineer',
    ],
    coversApprox: 'FDE / client-facing / creative technologist delivery cluster',
    status: 'live',
    notes:
      'Canonical flagship is /forward-deployed (lifecycle cases). Role overlay: /opportunities/forward-deployed-ai-engineer. Shared skills: /capabilities.',
  },
  {
    id: 'ai-solutions-architect',
    label: 'AI Solutions Architect',
    sendUrl: 'https://moises.tech/opportunities/ai-solutions-architect',
    aliasUrls: [
      'https://moises.tech/ai-solutions-architect',
      'https://moises.tech/roles/ai-solutions-architect',
    ],
    coversApprox: 'SA / customer-facing technical / pre-sales adjacent',
    status: 'built-pending-deploy',
    notes:
      'Public archetype. Employer pages remain private overlays when needed. Shared skills map: /capabilities.',
  },
  {
    id: 'creative',
    label: 'Creative / Creative Technologist',
    sendUrl: 'https://moises.tech/creative-ai',
    aliasUrls: [
      'https://moises.tech/creative-technologist',
      'https://moises.tech/roles/creative-technologist',
      'https://moises.tech/art-director',
    ],
    coversApprox: 'Agency AD/ACD + creative technologist / Creative AI leadership cluster',
    status: 'live',
    notes:
      'Canonical flagship is /creative-ai. Employer dossiers (Morley, Digitas, WMX, Ogilvy) remain private overlays. Skills: /capabilities#design-creative-technology.',
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
    notes: 'Keep out of the corporate archetype pages — separate career lane.',
  },
  {
    id: 'other',
    label: 'Other / one-off',
    sendUrl: 'https://moises.tech/career-packet',
    aliasUrls: [],
    coversApprox: 'Roles that do not map cleanly to the three engineering / creative flagships',
    status: 'live',
    notes: 'Use career packet + tech CV; build a private dossier only if the role warrants it.',
  },
];

export function archetypeById(id: RoleArchetypeId): RoleArchetype | undefined {
  return roleArchetypes.find((a) => a.id === id);
}
