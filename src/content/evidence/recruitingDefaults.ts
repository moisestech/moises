import type { OpportunityCtas } from '@/content/opportunities/types';

/** Shared profile + site links for opportunity and work microsites. */
export const moisesRecruitingProfiles = {
  email: 'm@moises.tech',
  linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
  github: 'https://github.com/moisestech',
  instagram: 'https://www.instagram.com/moisesdsanabria',
  portfolio: '/portfolio',
  cv: '/cv/tech',
  ooliteWork: 'https://oolitearts.org/digital-lab/',
  ooliteWorkLabel: 'Oolite Digital Lab',
  ooliteOrg: 'https://oolitearts.org',
} as const satisfies Partial<OpportunityCtas>;

/** Merge shared recruiting links with role-specific résumé paths, subjects, anchors. */
export function recruitingCtas(overrides: Partial<OpportunityCtas> = {}): OpportunityCtas {
  return { ...moisesRecruitingProfiles, ...overrides };
}
