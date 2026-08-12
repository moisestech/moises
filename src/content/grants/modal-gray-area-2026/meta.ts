/**
 * Modal × Gray Area 2026 — program metadata
 * Public grant hub: /grant/modal-gray-area-2026
 */

export const modalGrayAreaMeta = {
  callId: 'modal-gray-area-2026',
  projectName: 'Modal × Gray Area: Call for Submissions',
  shortName: 'Modal × Gray Area 2026',
  year: 2026,
  deadline: 'Wednesday, July 15, 2026',
  deadlineIso: '2026-07-15',
  honorarium: '$2,000 artist honorarium',
  production: 'Up to $5,000 materials and production support',
  compute: 'Up to $20,000 in Modal compute credits',
  duration:
    'Development following selection through installation and public presentation at Gray Area in late October 2026',
  exhibition: 'Group exhibition · Gray Area, San Francisco · October 2026',
  applyUrl: 'https://modal.art/',
  callPageUrl: 'https://grayarea.org/initiative/modal-exhibition-open-call/',
  hubRoute: '/grant/modal-gray-area-2026',
  proposalRoute: '/grant/modal-gray-area-2026/machine-sentence-no-1',
  bitmRoute: '/research/born-into-the-machine',
  contacts: [
    {
      name: 'Gray Area',
      role: 'Program / exhibition inquiries',
      email: 'wade@grayarea.org',
    },
  ],
} as const;

export const modalGrayAreaProposalCard = {
  slug: 'machine-sentence-no-1',
  title: 'INCOMPLETE CONTAINMENT OF A MODEL',
  subtitle: 'A listening structure for inference under observation',
  thesis:
    'A civic-forensic sculpture receives one human sentence, changes its central aperture, and produces evidence of what the machine retained, transformed, and could not resolve.',
  status: 'Primary candidate',
  href: modalGrayAreaMeta.proposalRoute,
  gesture:
    'White civic-industrial listening structure — linked shutter aperture, static display, thermal forensic receipt.',
} as const;
