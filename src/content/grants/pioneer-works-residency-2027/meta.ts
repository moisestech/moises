/**
 * Pioneer Works 2027 Visual Arts Residency — program metadata
 * Public grant hub: /grant/pioneer-works-residency-2027
 */

export const pioneerWorksMeta = {
  callId: 'pioneer-works-residency-2027',
  projectName: '2027 Pioneer Works Visual Arts Residency',
  shortName: 'Pioneer Works 2027',
  year: 2027,
  residencyTrack: 'Visual Arts',
  duration: 'Five months during 2027',
  awardNote:
    '$5,000 residency award — not presented as a dedicated fabrication budget',
  studioNote: 'Approximately 20 × 11 ft glass-fronted studio (published approximate dimensions)',
  deadline: 'Monday, July 13, 2026, 11:59 PM EST',
  deadlineIso: '2026-07-13',
  applicationStatus: 'Proposal and work in progress',
  applyUrl: 'https://pioneerworks.org/residency',
  callPageUrl: 'https://pioneerworks.org/residency/visual-arts',
  faqUrl: 'https://pioneerworks.org/residency/faq',
  hubRoute: '/grant/pioneer-works-residency-2027',
  proposalRoute: '/grant/pioneer-works-residency-2027/machine-sentences',
  bitmRoute: '/research/born-into-the-machine',
  modalRoute: '/grant/modal-gray-area-2026',
  modalProposalRoute: '/grant/modal-gray-area-2026/machine-sentence-no-1',
  contacts: [
    {
      name: 'Pioneer Works Residency',
      role: 'Open call / residency inquiries',
      url: 'https://pioneerworks.org/residency',
    },
  ],
} as const;

export const pioneerWorksProposalCard = {
  slug: 'machine-sentences',
  title: 'MACHINE SENTENCES',
  subtitle: 'A model organism for language',
  thesis:
    'A five-month studio investigation in which human language becomes physical orientation, fragmented imagery, mechanical posture, and a family of screen-based sculptural objects.',
  status: 'Primary residency proposal',
  href: pioneerWorksMeta.proposalRoute,
  centralWork: 'Machine Sentence No. 1',
} as const;
