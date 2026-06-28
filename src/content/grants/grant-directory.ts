export type GrantDirectoryEntry = {
  id: string;
  title: string;
  organization: string;
  route: string;
  /** ISO date for sorting — page created or last materially updated */
  updatedAt: string;
  deadline?: string;
  status?: 'active' | 'draft' | 'submitted' | 'archive';
  summary?: string;
  parentId?: string;
};

const grantDirectoryEntries: GrantDirectoryEntry[] = [
  {
    id: 'four-artists-four-seasons',
    title: 'Four Artists: Four Seasons',
    organization: 'Bakehouse Art Complex',
    route: '/grant/four-artists-four-seasons',
    updatedAt: '2026-06-22',
    deadline: '2026-06-24',
    status: 'active',
    summary: 'Weekly micro-films and short-form storytelling application dossier.',
  },
  {
    id: 'ssrc-just-tech-fellowship-2027',
    title: 'Born into the Machine — Just Tech Fellowship 2027',
    organization: 'Social Science Research Council',
    route: '/grant/ssrc-just-tech-fellowship-2027',
    updatedAt: '2026-06-21',
    deadline: '2026-06-28',
    status: 'draft',
    summary: 'SSRC Just Tech Fellowship proposal — art, labor, and agency after intelligence becomes infrastructure.',
  },
  {
    id: 'wolfsonian-fellowship',
    title: 'The Archive Dreams in Public',
    organization: 'Wolfsonian-FIU Creative Fellowship',
    route: '/grant/wolfsonian-fellowship',
    updatedAt: '2026-05-31',
    status: 'submitted',
    summary: 'Museum archive as incomplete memory of a living digital society.',
  },
  {
    id: 'knight-foundation',
    title: 'AI24 Operating Ethos',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation',
    updatedAt: '2025-06-18',
    status: 'archive',
    summary: 'Human-centered digital capacity proposal for Miami cultural infrastructure.',
  },
  {
    id: 'knight-foundation-proposal',
    title: 'Proposal Details',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/proposal',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-budget',
    title: 'Budget Details',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/budget',
    updatedAt: '2025-06-02',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-pilot',
    title: '1 Year Pilot',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/pilot',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-workshops',
    title: 'Workshop Program',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/workshops',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-technical',
    title: 'Technical Details',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/technical',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-roadmap',
    title: 'Project Roadmap',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/roadmap',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-impact-roi',
    title: 'Impact & ROI',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/impact-roi',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-community-smart-signs',
    title: 'Smart Signage',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/community-smart-signs',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-sustainability-cycle',
    title: 'Sustainability Cycle',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/sustainability-cycle',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-ai-toolkits',
    title: 'AI Toolkits',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/ai-toolkits',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
  {
    id: 'knight-foundation-pitch',
    title: 'Pitch',
    organization: 'Knight Foundation',
    route: '/grant/knight-foundation/pitch',
    updatedAt: '2025-06-18',
    status: 'archive',
    parentId: 'knight-foundation',
  },
];

export const grantDirectoryByDate = [...grantDirectoryEntries].sort(
  (a, b) => b.updatedAt.localeCompare(a.updatedAt),
);

export const grantDirectoryCount = grantDirectoryEntries.length;

function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function formatGrantDirectoryDate(isoDate: string): string {
  return formatDisplayDate(isoDate);
}
