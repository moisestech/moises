/**
 * No Vacancy Miami Beach 2026 — shared program metadata.
 * Public grant hub: /grant/no-vacancy-2026
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

export const noVacancyProposalCards = [
  {
    slug: 'volver-a-valer',
    title: 'Volver a Valer',
    subtitle: 'A Study in Migrating Value',
    thesis:
      'A hotel waiting environment transformed into a field of money, receipts, and reflective surfaces — Venezuelan in entry point, Latin American in resonance.',
    status: 'Primary candidate',
    href: noVacancyGrantMeta.volverRoute,
    gesture: 'Partially wrapped waiting / check-in environment',
  },
  {
    slug: 'touch-grass',
    title: 'Touch Grass: Circuit Floor',
    subtitle: 'The Ground Is Online',
    thesis:
      'A modular walkable floor of reclaimed circuit boards — obsolete electronics as luminous ground in hotel circulation space.',
    status: 'Alternate proposal',
    href: noVacancyGrantMeta.touchGrassRoute,
    gesture: 'Modular illuminated floor field (~20 sq. ft.)',
  },
] as const;
