/**
 * No Vacancy Miami Beach 2026 — shared program metadata.
 * Public grant hub: /grant/no-vacancy-2026
 * Official proposal: Volver a Valer only.
 */

export const noVacancyGrantMeta = {
  callId: 'CTA-2026-002',
  projectName: 'No Vacancy, Miami Beach',
  year: 2026,
  deadline: 'Thursday, July 16, 2026, 5:00 pm EST',
  deadlineIso: '2026-07-16',
  stipend: '$10,000 all-inclusive per selected artist',
  duration: 'Five-week temporary hotel installation',
  submittableUrl: 'http://cityofmiamibeach.submittable.com/submit',
  hubRoute: '/grant/no-vacancy-2026',
  volverRoute: '/grant/no-vacancy-2026/volver-a-valer',
  touchGrassRoute: '/grant/no-vacancy-2026/touch-grass',
  researchTouchGrassRoute: '/research/touch-grass-circuit-floor',
  contacts: [
    {
      name: 'Danielle Bender',
      role: 'Cultural Affairs Manager',
      phone: '305-673-7577 Ext. 26256',
      email: 'daniellebender@miamibeachfl.gov',
    },
    {
      name: 'Oscar Rieveling Sanchez',
      role: 'Art in Public Places Coordinator',
      phone: '305-673-7577 Ext. 22711',
      email: 'oscarrievelingsanchez@miamibeachfl.gov',
    },
  ],
} as const;

/** Sole official proposal card for the hub */
export const noVacancyProposalCards = [
  {
    slug: 'volver-a-valer',
    title: 'Volver a Valer',
    subtitle: 'The Value We Carry',
    thesis:
      'A site-fitted printed currency floor and two or three freestanding sculptures examining how money, labor, memory, care, and identity are transformed through migration.',
    status: 'Official proposal',
    href: noVacancyGrantMeta.volverRoute,
    gesture: 'Printed currency floor + Market Rate + Soft Currency (+ optional Carry-On)',
  },
] as const;
