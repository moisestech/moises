export type WolfsonianDownload = {
  label: string;
  href: string;
  note: string;
};

export type WolfsonianRole = {
  id: string;
  title: string;
  description: string;
  themes: string[];
  archiveObjects: string[];
  connectedRoleIds: string[];
  sourceLogic: string;
};

export type WolfsonianImage = {
  src: string;
  expectedPath: string;
  isPlaceholder: boolean;
  alt: string;
  caption: string;
  role: 'banner' | 'gallery';
};

export const wolfsonianDownloads: WolfsonianDownload[] = [
  {
    label: 'Download proposal',
    href: '/grant/wolfsonian-fellowship/wolfsonian-fellowship-proposal.pdf',
    note: 'Full fellowship proposal in PDF format.',
  },
  {
    label: 'Download CV',
    href: '/grant/wolfsonian-fellowship/moises-sanabria-cv.pdf',
    note: 'Current CV used for fellowship review.',
  },
  {
    label: 'Download multimedia sheet',
    href: '/grant/wolfsonian-fellowship/wolfsonian-multimedia-sheet.pdf',
    note: 'Image index, media links, and technical notes.',
  },
];

export const wolfsonianApiHighlight = {
  label: 'Wolfsonian Labs Digital API',
  href: 'https://labs.wolfsonian.org/digital/api/',
  summary:
    'Primary data source for the fellowship prototype. It supports relationship-driven object exploration and citation-aware interpretation.',
};

export const wolfsonianImages: WolfsonianImage[] = [
  {
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-hero.png',
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282283/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-4_ugeyy1.png',
    alt: 'The Archive Dreams in Public hero frame.',
    caption: 'Hero image for the project title sequence.',
    role: 'banner',
  },
  {
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-living-tableau.png',
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282282/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-1_ld4mys.png',
    alt: 'A Society Inside the Archive visual frame.',
    caption: 'A Society Inside the Archive',
    role: 'gallery',
  },
  {
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-citation-trail.png',
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282280/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-5_lnsd5t.png',
    alt: 'Every Dream Has a Source visual frame.',
    caption: 'Every Dream Has a Source',
    role: 'gallery',
  },
  {
    expectedPath: '/grant/wolfsonian-fellowship/images/institutional-memory-engine.png',
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282279/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-2_jenisx.png',
    alt: 'The Institutional Memory Engine visual frame.',
    caption: 'The Institutional Memory Engine',
    role: 'gallery',
  },
  {
    expectedPath: '/grant/wolfsonian-fellowship/images/when-memory-becomes-content.png',
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282278/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-3_yoykcq.png',
    alt: 'When Memory Becomes Content visual frame.',
    caption: 'When Memory Becomes Content',
    role: 'gallery',
  },
  {
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-installation-render.png',
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282283/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-4_ugeyy1.png',
    alt: 'Installation rendering placeholder for final sequence frame.',
    caption: 'Installation Rendering (placeholder)',
    role: 'gallery',
  },
];

export const wolfsonianVisualEssaySections = [
  {
    title: 'A Society Inside the Archive',
    body: 'The archive is staged as a living tableau where records, labels, and objects participate in a social field rather than a static index.',
  },
  {
    title: 'The Institutional Memory Engine',
    body: 'Agents coordinate metadata, interpretation, and temporal uncertainty. The system is legible as a museum process rather than a hidden model pipeline.',
  },
  {
    title: 'Every Dream Has a Source',
    body: 'Citation trails remain visible so generated interpretations stay accountable to provenance, catalog logic, and archival care.',
  },
  {
    title: 'When Memory Becomes Content',
    body: 'The project includes a self-critique of synthetic saturation, showing how institutional memory can flatten into spectacle when source logic is removed.',
  },
  {
    title: 'The Museum Remembers Through People',
    body: 'Human labor, maintenance, and interpretive care remain central. The interaction is lightweight, contemplative, and non-extractive.',
  },
];

export const wolfsonianInstitutionalRoles: WolfsonianRole[] = [
  {
    id: 'archivist',
    title: 'The Archivist',
    description: 'Protects provenance so interpretation remains accountable across time.',
    themes: ['Preservation', 'Metadata integrity'],
    archiveObjects: ['Accession ledger', 'Condition report', 'Citation trail'],
    connectedRoleIds: ['worker', 'orphan-record'],
    sourceLogic: 'Drawn from archival standards where catalog records and custody logs anchor public interpretation.',
  },
  {
    id: 'worker',
    title: 'The Worker',
    description: 'Sustains everyday catalog labor that keeps institutional memory from collapsing.',
    themes: ['Labor', 'Maintenance'],
    archiveObjects: ['Processing queue', 'Metadata backlog', 'Rights note'],
    connectedRoleIds: ['archivist', 'optimizer'],
    sourceLogic: 'Based on the daily invisible work that stabilizes records before public interpretation appears.',
  },
  {
    id: 'futurist',
    title: 'The Futurist',
    description: 'Projects new institutional narratives from incomplete archival traces.',
    themes: ['Speculation', 'Institutional projection'],
    archiveObjects: ['Scenario sketch', 'Prototype prompt', 'Forecast memo'],
    connectedRoleIds: ['optimizer', 'propagandist'],
    sourceLogic: 'Anchored in scenario-building practices where institutions imagine public futures from partial records.',
  },
  {
    id: 'mourner',
    title: 'The Mourner',
    description: 'Notices what the catalog cannot preserve and names institutional loss.',
    themes: ['Absence', 'Human care'],
    archiveObjects: ['Orphan record', 'Missing metadata', 'Condition drift'],
    connectedRoleIds: ['archivist', 'orphan-record'],
    sourceLogic: 'Emerges from conservation and archival gaps where loss is itself a critical record.',
  },
  {
    id: 'optimizer',
    title: 'The Optimizer',
    description: 'Compresses complexity into efficient flows and measurable outputs.',
    themes: ['Efficiency', 'Legibility metrics'],
    archiveObjects: ['Pipeline dashboard', 'Performance summary', 'Taxonomy normalizer'],
    connectedRoleIds: ['worker', 'counterfeit'],
    sourceLogic: 'Reflects platform-driven process optimization where speed can overtake contextual nuance.',
  },
  {
    id: 'propagandist',
    title: 'The Propagandist',
    description: 'Amplifies selective narratives until they become institutional common sense.',
    themes: ['Narrative control', 'Visibility'],
    archiveObjects: ['Press packet', 'Promotional excerpt', 'Headline variant'],
    connectedRoleIds: ['futurist', 'counterfeit'],
    sourceLogic: 'Based on communications logic where repetition can outrun provenance and blur evidence.',
  },
  {
    id: 'counterfeit',
    title: 'The Counterfeit',
    description: 'Simulates archival authority without preserving source accountability.',
    themes: ['Synthetic saturation', 'Credibility mimicry'],
    archiveObjects: ['Generated caption', 'Detached citation', 'Surface match'],
    connectedRoleIds: ['optimizer', 'propagandist'],
    sourceLogic: 'Marks the failure mode where model outputs imitate archive language while severing source chains.',
  },
  {
    id: 'orphan-record',
    title: 'The Orphan Record',
    description: 'A fragment that survives without the full context it once carried.',
    themes: ['Fragmentation', 'Context loss'],
    archiveObjects: ['Unattributed image', 'Broken link', 'Partial accession note'],
    connectedRoleIds: ['archivist', 'mourner'],
    sourceLogic: 'Represents archival residues that require human interpretation and care to avoid institutional erasure.',
  },
];
