/**
 * Application tracker — source of truth for Aug 2026 opportunity pipeline.
 * Drives build order and prevents dead links in outreach docs.
 * Keep in sync with registry slugs when pages ship.
 *
 * Archetype send URLs: see `roleArchetypes.ts`.
 */

import {
  roleArchetypes,
  type RoleArchetypeId,
} from '@/content/applications/roleArchetypes';

export type OpportunityFamily =
  | 'creative-agency'
  | 'compact'
  | 'role-portfolio'
  | 'systems'
  | 'full'
  | 'none';

export type ApplicationTrackStatus =
  | 'submitted'
  | 'active'
  | 'to_apply'
  | 'hold'
  | 'filled'
  | 'recruiter'
  | 'rejected'
  | 'earlier';

/** What URL to put in the application / email for this track. */
export type SendLinkKind =
  | 'employer_dossier'
  | 'archetype'
  | 'career_packet'
  | 'missing';

export type ApplicationTrack = {
  id: string;
  company: string;
  role: string;
  status: ApplicationTrackStatus;
  /** Still-to-apply order (1 = next). */
  priority?: number;
  family: OpportunityFamily;
  /**
   * Inbox cluster for the public send page.
   * Prefer employer dossier when `slug` exists; otherwise fall back to archetype URL.
   */
  archetype?: RoleArchetypeId;
  /** `/opportunities/[slug]` when built. */
  slug?: string;
  /** Alias path that redirects to slug. */
  aliasSlug?: string;
  employerUrl?: string;
  notes?: string;
};

export const opportunityTracker: ApplicationTrack[] = [
  // —— Submitted ——
  {
    id: 'morley-art-director',
    company: 'Morley',
    role: 'Art Director, Remote Florida',
    status: 'submitted',
    family: 'creative-agency',
    slug: 'morley-art-director-florida',
    employerUrl: 'https://careers.morleycompanies.com/morley/jobs/6462?lang=en-us',
    notes: 'Applied Aug 6; Motion & Animation section required on dossier.',
  },
  {
    id: 'digitas-ad-creative',
    company: 'Digitas',
    role: 'Associate Director, Creative',
    status: 'submitted',
    family: 'creative-agency',
    slug: 'digitas-associate-director-creative',
    employerUrl: 'https://careers.publicisgroupe.com/jobs/166490?lang=en-us',
  },
  {
    id: 'digitas-ad-data-science',
    company: 'Digitas',
    role: 'Associate Director, Data Science',
    status: 'submitted',
    family: 'compact',
    employerUrl:
      'https://www.digitas.com/en-id/careers/148526-1034105-associate-director-data-science',
    notes: 'No dedicated dossier yet (P2).',
  },
  {
    id: 'comfy-mts-frontend',
    company: 'Comfy',
    role: 'Member of Technical Staff, Frontend',
    status: 'submitted',
    family: 'role-portfolio',
    slug: 'comfy-mts-frontend',
    employerUrl: 'https://jobs.ashbyhq.com/comfy-org/c3e0584d-5490-491f-aae4-b5922ef63fd2',
  },
  {
    id: 'wmx-senior-art-director-ai',
    company: 'WMX',
    role: 'Senior Art Director, Creative + AI',
    status: 'submitted',
    family: 'creative-agency',
    slug: 'wmx-senior-art-director-ai',
    employerUrl: 'https://www.wearewmx.com/',
    notes: 'Follow-up candidate; Design Leader sibling also exists.',
  },
  {
    id: 'unit8-senior-fde',
    company: 'Unit8',
    role: 'Senior Forward Deployed Engineer',
    status: 'submitted',
    family: 'none',
    employerUrl: 'https://unit8.com/career/',
    notes: 'Applied July 30; no dedicated dossier.',
  },
  {
    id: 'accenture-advanced-ai-architect',
    company: 'Accenture',
    role: 'Advanced AI Architect',
    status: 'rejected',
    family: 'none',
    employerUrl: 'https://www.accenture.com/us-en/careers/jobdetails?id=R00330053_en',
  },
  {
    id: 'tyket-ai-engineer',
    company: 'Tyket',
    role: 'AI Engineer',
    status: 'submitted',
    family: 'none',
    notes: 'Applied July 17 via recruiter; no public listing verified.',
  },
  {
    id: 'banesco-ai-developer',
    company: 'Banesco USA',
    role: 'AI Developer',
    status: 'submitted',
    family: 'compact',
    slug: undefined,
    employerUrl: 'https://banescousa.com/',
    notes: 'Form completed; receipt not recovered. Dossier claimed but missing (P2).',
  },

  // —— Active recruiter / interview ——
  {
    id: 'air-space-full-stack',
    company: 'Air Space Intelligence',
    role: 'Full Stack Engineer',
    status: 'active',
    family: 'compact',
    slug: 'air-space-intelligence-full-stack-engineer',
    employerUrl: 'https://algora.io/airspace-intelligence/job/JfqoRGCGkeE4tfdm',
  },
  {
    id: 'perficient-fde',
    company: 'Perficient',
    role: 'Forward Deployed AI Engineer / Creative Technologist',
    status: 'recruiter',
    family: 'role-portfolio',
    slug: 'forward-deployed-ai-engineer',
    employerUrl: 'https://www.perficient.com/careers',
    notes: 'Representation authorized $78/hr; one client track paused.',
  },
  {
    id: 'accelerant-claude-code',
    company: 'Accelerant Risk Exchange',
    role: 'Senior Claude Code AI Engineer',
    status: 'recruiter',
    family: 'none',
    employerUrl: 'https://ats.rippling.com/accelerant/jobs',
  },
  {
    id: 'apetan-senior-ai',
    company: 'Apetan',
    role: 'Senior AI Engineer',
    status: 'recruiter',
    family: 'none',
  },
  {
    id: 'apetan-enablement',
    company: 'Apetan client',
    role: 'AI Engineer, Enablement',
    status: 'recruiter',
    family: 'none',
    notes: 'Alpharetta hybrid concern.',
  },
  {
    id: 'silverxis-principal-ai',
    company: 'Silverxis client',
    role: 'Principal AI/FDE',
    status: 'recruiter',
    family: 'none',
    notes: '$65/hr W-2 discussed.',
  },
  {
    id: 'tekfortune-agentic',
    company: 'Tekfortune',
    role: 'Agentic AI Developer',
    status: 'recruiter',
    family: 'none',
    employerUrl: 'https://www.tekfortune.com/',
  },
  {
    id: 'tekfortune-av-support',
    company: 'Tekfortune',
    role: 'IT Site Support with AV',
    status: 'recruiter',
    family: 'none',
    employerUrl: 'https://www.tekfortune.com/',
  },
  {
    id: 'smartit-prompt',
    company: 'Smart IT Frame/LTM',
    role: 'Prompt Engineer',
    status: 'recruiter',
    family: 'none',
    employerUrl: 'https://smartitframe.com/',
  },
  {
    id: 'apple-data-engineer',
    company: 'Apple (contract)',
    role: 'Data Engineer/Architect',
    status: 'recruiter',
    family: 'compact',
    employerUrl: 'https://jobs.apple.com/en-us/search?location=sunnyvale-SVL',
    notes: 'Planned dossier slug apple-data-engineer — not built (P2).',
  },
  {
    id: 'jacoub-reyes-full-stack',
    company: 'Jacoub Reyes Studios',
    role: 'Full-Stack Engineer',
    status: 'active',
    family: 'none',
    employerUrl: 'https://moises.tech/work/creative-tech-image-tools',
    notes: 'NDA signed; contingent on funding. Uses /work microsite.',
  },

  // —— Still to apply (priority order) ——
  {
    id: 'ogilvy-creative-editor-ai',
    company: 'DAVID / Ogilvy',
    role: 'Creative Editor/AI',
    status: 'to_apply',
    priority: 1,
    family: 'creative-agency',
    slug: 'ogilvy-senior-ai-driven-creative-director',
    aliasSlug: 'ogilvy-senior-ai-driven-creative-editor',
    employerUrl: 'https://www.linkedin.com/jobs/view/creative-editor-ai-at-ogilvy-4400258835',
    notes:
      'DAVID Agency (WPP/Ogilvy) · Miami · posted 08/04/2026. Dossier embeds All Studios Everything (18M+). Need official DAVID/Ogilvy/WPP logos if available.',
  },
  {
    id: 'alpha-drive-full-stack',
    company: 'Alpha Drive AI',
    role: 'Full Stack Engineer',
    status: 'to_apply',
    priority: 2,
    family: 'compact',
    slug: 'alpha-drive-ai-full-stack-engineer',
    employerUrl: 'https://www.indeed.com/viewjob?jk=89804cc3c2ad9ff4',
    notes: 'Remote Florida; $125k–$150k.',
  },
  {
    id: 'corestory-ai-engineer',
    company: 'CoreStory',
    role: 'AI Engineer',
    status: 'to_apply',
    priority: 3,
    family: 'compact',
    slug: 'corestory-ai-engineer',
    employerUrl: 'https://job-boards.greenhouse.io/corestory/jobs/4984207007',
  },
  {
    id: 'wpp-hex-acd',
    company: 'WPP HEX',
    role: 'Creative Innovation Lead/ACD',
    status: 'to_apply',
    priority: 4,
    family: 'creative-agency',
    slug: 'wpp-hex-creative-innovation-lead-acd',
    employerUrl:
      'https://wpp.careersitecloud.com/job-6a50e0a35431fb4852d2dc16-creative-innovation-lead-acd-new-york',
  },
  {
    id: 'onx-artistic-development',
    company: 'Onassis ONX',
    role: 'Senior Manager of Artistic Development',
    status: 'to_apply',
    priority: 5,
    family: 'compact',
    slug: 'onx-senior-manager-artistic-development',
    employerUrl: 'https://www.instagram.com/p/DbljmMFmJep/',
    notes: 'Deadline recorded Aug 31.',
  },
  {
    id: 'deepgram-sa',
    company: 'Deepgram',
    role: 'Solutions Architect',
    status: 'to_apply',
    priority: 6,
    family: 'compact',
    slug: 'deepgram-solutions-architect',
    employerUrl: 'https://deepgram.com/careers',
  },
  {
    id: 'endor-labs-sa',
    company: 'Endor Labs',
    role: 'Solutions Architect',
    status: 'to_apply',
    priority: 7,
    family: 'compact',
    slug: 'endor-labs-solutions-architect',
    employerUrl: 'https://job-boards.greenhouse.io/endorlabs',
  },
  {
    id: 'blue-acorn-agentic',
    company: 'Blue Acorn iCi',
    role: 'Agentic AI Integration Engineer',
    status: 'to_apply',
    priority: 8,
    family: 'compact',
    slug: 'blue-acorn-ici-agentic-ai-integration-engineer',
    employerUrl:
      'https://blueacornici.applytojob.com/apply/CYi8MwO8a3/Agentic-AI-Integration-Engineer-Remote',
  },
  {
    id: 'harvey-automation-education',
    company: 'Harvey',
    role: 'Automation Engineer, Customer Education',
    status: 'to_apply',
    priority: 9,
    family: 'compact',
    slug: 'harvey-automation-engineer-customer-education',
    employerUrl: 'https://jobs.ashbyhq.com/harvey/dc3434da-7be2-4048-a652-7a02c22444ba',
  },
  {
    id: 'stacklok-staff-fde',
    company: 'Stacklok',
    role: 'Staff Forward Deployed Engineer',
    status: 'to_apply',
    priority: 10,
    family: 'role-portfolio',
    slug: 'stacklok-staff-forward-deployed-engineer',
    employerUrl: 'https://job-boards.greenhouse.io/stacklok/jobs/5199238007',
    notes: 'Verify geography before applying.',
  },
  {
    id: 'publicis-programmatic',
    company: 'Publicis',
    role: 'Programmatic Tech Lead / Director of Technology',
    status: 'to_apply',
    priority: 11,
    family: 'compact',
    employerUrl: 'https://www.linkedin.com/jobs/view/4190967478',
    notes: 'P2 — no dossier yet.',
  },
  {
    id: 'deloitte-instructor-fde',
    company: 'Deloitte',
    role: 'Technical AI Instructor and FDE II/III',
    status: 'to_apply',
    priority: 12,
    family: 'compact',
    employerUrl:
      'https://apply.deloitte.com/en_US/careers/JobDetail/Technical-AI-Instructor-and-Forward-Deployed-Engineer-II/350622',
    notes: 'P2.',
  },
  {
    id: 'deloitte-frontier-fde',
    company: 'Deloitte',
    role: 'Forward Deployed Engineer, Frontier GenAI',
    status: 'to_apply',
    priority: 13,
    family: 'role-portfolio',
    employerUrl:
      'https://apply.deloitte.com/en_US/careers/JobDetail/Forward-Deployed-Engineer-Frontier-GenAI/350555',
    notes: 'P2.',
  },
  {
    id: 'deloitte-servicenow-fde',
    company: 'Deloitte',
    role: 'Forward Deployed Engineer — ServiceNow',
    status: 'to_apply',
    family: 'compact',
    slug: 'deloitte-servicenow-fde',
    employerUrl:
      'https://apply.deloitte.com/en_US/careers/JobDetail/Forward-Deployed-Engineer-ServiceNow/362315',
    notes:
      'Private compact overlay for rec 362315. Honesty overlay + targeted resume. Alias /applied-ai/deloitte-fde-servicenow. Recruiting ends 10/30/2026.',
  },
  {
    id: 'neogov-agentic',
    company: 'NEOGOV',
    role: 'Staff Agentic AI Developer',
    status: 'to_apply',
    priority: 14,
    family: 'compact',
    slug: 'neogov-staff-agentic-ai-developer',
    employerUrl: 'https://www.neogov.com/about-us/careers/',
  },
  {
    id: 'netflix-ai-insights',
    company: 'Netflix',
    role: 'Full-Stack Engineer 5, AI Insights & Visualizations',
    status: 'to_apply',
    priority: 15,
    family: 'compact',
    slug: 'netflix-full-stack-engineer-ai-insights',
    employerUrl: 'https://explore.jobs.netflix.net/careers',
    notes: 'Reconfirm listing status.',
  },
  {
    id: 'cvs-senior-genai',
    company: 'CVS Health',
    role: 'Senior GenAI Engineer',
    status: 'to_apply',
    priority: 16,
    family: 'compact',
    slug: 'cvs-senior-genai-engineer',
    employerUrl: 'https://jobs.cvshealth.com/us/en/it-jobs',
    notes: 'Reconfirm listing status.',
  },

  // —— Hold / filled ——
  {
    id: 'razorfish-junior-ad',
    company: 'Razorfish',
    role: 'Junior Art Director',
    status: 'hold',
    family: 'creative-agency',
    slug: 'razorfish-junior-art-director',
    employerUrl: 'https://careers.publicisgroupe.com/razorfish/jobs',
    notes: 'Below level/economic floor.',
  },
  {
    id: 'msc-creative-director',
    company: 'MSC Cruises',
    role: 'Creative Director — Travel & Experiences',
    status: 'filled',
    family: 'creative-agency',
    slug: 'msc-cruises-creative-director-travel-experiences',
    employerUrl: 'https://careers.msccruises.com/gb/en/job/17088/Creative-Director',
  },
  {
    id: 'new-museum',
    company: 'New Museum',
    role: 'Title not recovered',
    status: 'hold',
    family: 'none',
    employerUrl: 'https://www.newmuseum.org/work-with-us/',
  },

  // —— Registry sync (pages exist; keep tracker complete) ——
  {
    id: 'affirm-ai-solutions-engineer',
    company: 'Affirm',
    role: 'AI Solutions Engineer',
    status: 'to_apply',
    family: 'systems',
    slug: 'affirm-ai-solutions-engineer',
    archetype: 'ai-solutions-architect',
    notes: 'Systems dossier live; listed archetype-adjacent.',
  },
  {
    id: 'flora-founding-data-engineer',
    company: 'FLORA',
    role: 'Founding Data Engineer',
    status: 'to_apply',
    family: 'role-portfolio',
    slug: 'flora-founding-data-engineer',
    archetype: 'ai-engineer',
    notes: 'Private role-portfolio with honest Coming soon gaps.',
  },
  {
    id: 'flora-forward-deployed-creative',
    company: 'FLORA',
    role: 'Forward Deployed Creative',
    status: 'to_apply',
    family: 'role-portfolio',
    slug: 'flora-forward-deployed-creative',
    archetype: 'creative',
    notes:
      'Private role-portfolio; Field Kit at flora-field-kit.moises.tech + github.com/moisestech/flora-field-kit; three View Links pending.',
  },
  {
    id: 'knight-journalism-tech-product-strategist',
    company: 'Knight Foundation',
    role: 'Technology Product Strategist, Journalism',
    status: 'earlier',
    family: 'full',
    slug: 'knight-journalism-tech-product-strategist',
    archetype: 'institutional',
    notes: 'Canonical dossier at /technology-product-strategy.',
  },
  {
    id: 'new-inc-media-fabrication-lab-manager',
    company: 'NEW INC',
    role: 'Media and Fabrication Lab Manager',
    status: 'to_apply',
    family: 'compact',
    slug: 'new-inc-media-fabrication-lab-manager',
    archetype: 'institutional',
    notes: 'Institutional compact dossier; Digilab-adjacent proof.',
  },
  {
    id: 'playwire-return',
    company: 'Playwire',
    role: 'Data · Solutions · Product Engineering (return)',
    status: 'to_apply',
    family: 'compact',
    slug: 'playwire',
    archetype: 'ai-solutions-architect',
    notes: 'Private return dossier.',
  },
  {
    id: 'wmx-senior-art-director-ai-driven-design-leader',
    company: 'WMX',
    role: 'Senior Art Director, AI-Driven Design Leader',
    status: 'to_apply',
    family: 'creative-agency',
    slug: 'wmx-senior-art-director-ai-driven-design-leader',
    archetype: 'creative',
    notes: 'Sibling of wmx-senior-art-director-ai — differentiate or merge later.',
  },

  // —— Earlier 2025 prep (no confirmation) ——
  {
    id: 'acoustic-web-ui',
    company: 'Acoustic',
    role: 'Web UI Developer',
    status: 'earlier',
    family: 'none',
    employerUrl: 'https://www.acoustic.com/careers',
  },
  {
    id: 'runway-mts-frontend',
    company: 'Runway',
    role: 'Member of Technical Staff, Frontend',
    status: 'earlier',
    family: 'none',
    employerUrl: 'https://runway.com/en/careers',
  },
  {
    id: 'crewai',
    company: 'CrewAI',
    role: 'Role title not preserved',
    status: 'earlier',
    family: 'none',
    employerUrl: 'https://apply.workable.com/crewai/',
  },
  {
    id: 'arcjet-dx',
    company: 'Arcjet',
    role: 'Developer Experience Engineer',
    status: 'earlier',
    family: 'none',
    employerUrl: 'https://arcjet.com/',
  },
  {
    id: 'moveworks',
    company: 'Moveworks',
    role: 'Role title not preserved',
    status: 'earlier',
    family: 'none',
    employerUrl: 'https://www.moveworks.com/us/en/company/careers',
  },
];

export function tracksToApply(): ApplicationTrack[] {
  return opportunityTracker
    .filter((t) => t.status === 'to_apply')
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
}

export function trackBySlug(slug: string): ApplicationTrack | undefined {
  return opportunityTracker.find((t) => t.slug === slug || t.aliasSlug === slug);
}

export function opportunityPath(track: ApplicationTrack): string | undefined {
  if (!track.slug) return undefined;
  return `/opportunities/${track.slug}`;
}

const SITE = 'https://moises.tech';

/** Infer archetype when not explicitly set on the track. */
export function resolveArchetype(track: ApplicationTrack): RoleArchetypeId {
  if (track.archetype) return track.archetype;
  if (track.family === 'creative-agency') return 'creative';

  const hay = `${track.company} ${track.role} ${track.notes ?? ''}`.toLowerCase();
  if (
    hay.includes('knight') ||
    hay.includes('new museum') ||
    hay.includes('new-inc') ||
    hay.includes('new inc') ||
    hay.includes('oolite') ||
    hay.includes('bakehouse')
  ) {
    return 'institutional';
  }
  if (
    hay.includes('solutions architect') ||
    hay.includes('ai architect') ||
    hay.includes('advanced ai architect')
  ) {
    return 'ai-solutions-architect';
  }
  if (
    hay.includes('forward deployed') ||
    hay.includes('creative technologist') ||
    (hay.includes('fde') && !hay.includes('frontend'))
  ) {
    return 'forward-deployed-engineer';
  }
  if (
    hay.includes('art director') ||
    hay.includes('creative director') ||
    hay.includes('creative editor') ||
    hay.includes('associate director, creative') ||
    hay.includes('creative innovation')
  ) {
    return 'creative';
  }
  if (
    hay.includes('ai engineer') ||
    hay.includes('full stack') ||
    hay.includes('full-stack') ||
    hay.includes('genai') ||
    hay.includes('agentic') ||
    hay.includes('claude code') ||
    hay.includes('automation engineer') ||
    hay.includes('prompt engineer') ||
    hay.includes('data engineer')
  ) {
    return 'ai-engineer';
  }
  return 'other';
}

export type ResolvedSendLink = {
  kind: SendLinkKind;
  url: string;
  label: string;
  /** True when an employer-specific dossier exists and should be preferred. */
  hasEmployerDossier: boolean;
};

/**
 * What URL to paste into the application / follow-up email.
 * Prefer employer dossier when built; otherwise fall back to the public archetype page.
 */
export function resolveSendLink(track: ApplicationTrack): ResolvedSendLink {
  if (track.slug) {
    return {
      kind: 'employer_dossier',
      url: `${SITE}/opportunities/${track.slug}`,
      label: `${track.company} dossier`,
      hasEmployerDossier: true,
    };
  }

  const archetypeId = resolveArchetype(track);
  const archetype = roleArchetypes.find((a) => a.id === archetypeId);
  if (archetype) {
    return {
      kind: archetypeId === 'other' || archetypeId === 'creative' ? 'career_packet' : 'archetype',
      url: archetype.sendUrl,
      label: archetype.label,
      hasEmployerDossier: false,
    };
  }

  return {
    kind: 'missing',
    url: `${SITE}/career-packet`,
    label: 'Career packet (fallback)',
    hasEmployerDossier: false,
  };
}

export type PipelineBucket = ApplicationTrackStatus | 'all';

export function countByStatus(): Record<ApplicationTrackStatus, number> {
  const counts = {
    submitted: 0,
    active: 0,
    to_apply: 0,
    hold: 0,
    filled: 0,
    recruiter: 0,
    rejected: 0,
    earlier: 0,
  } satisfies Record<ApplicationTrackStatus, number>;
  for (const t of opportunityTracker) counts[t.status] += 1;
  return counts;
}

export function countByArchetype(): Record<RoleArchetypeId, number> {
  const counts: Record<RoleArchetypeId, number> = {
    'ai-engineer': 0,
    'forward-deployed-engineer': 0,
    'ai-solutions-architect': 0,
    creative: 0,
    institutional: 0,
    other: 0,
  };
  for (const t of opportunityTracker) counts[resolveArchetype(t)] += 1;
  return counts;
}

/** Still-to-apply rows with no employer dossier — use archetype URL. */
export function tracksNeedingArchetypeFallback(): ApplicationTrack[] {
  return tracksToApply().filter((t) => !t.slug);
}

/** Submitted/active/recruiter without a dossier — impression risk if a fake link was cited. */
export function tracksWithLinkRisk(): ApplicationTrack[] {
  return opportunityTracker.filter(
    (t) =>
      (t.status === 'submitted' || t.status === 'active' || t.status === 'recruiter') &&
      !t.slug &&
      resolveArchetype(t) !== 'institutional',
  );
}

/** Next apply queue with resolved send links for copy/paste. */
export function applyQueueWithSendLinks(): Array<
  ApplicationTrack & { send: ResolvedSendLink; archetypeId: RoleArchetypeId }
> {
  return tracksToApply().map((t) => ({
    ...t,
    send: resolveSendLink(t),
    archetypeId: resolveArchetype(t),
  }));
}
