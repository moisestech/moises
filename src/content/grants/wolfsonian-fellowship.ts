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
    href: '/resume/moises-sanabria-senior-genai-engineer.pdf',
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
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282283/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-4_ugeyy1.png',
    alt: 'Wolfsonian interface composition used as the proposal banner image.',
    caption: 'Banner frame from the Wolfsonian fellowship visual essay.',
    role: 'banner',
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282282/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-1_ld4mys.png',
    alt: 'Wolfsonian archival interface screen with object relationship context.',
    caption: 'Relationship view emphasizing provenance and linked records.',
    role: 'gallery',
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282280/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-5_lnsd5t.png',
    alt: 'Wolfsonian interaction detail showing role-based interpretive pathways.',
    caption: 'Interaction detail showing role-centered meaning flow.',
    role: 'gallery',
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282279/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-2_jenisx.png',
    alt: 'Wolfsonian archive objects surfaced in a visual essay layout.',
    caption: 'Object grouping used to test institutional storytelling.',
    role: 'gallery',
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282278/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-3_yoykcq.png',
    alt: 'Wolfsonian prototype frame with metadata and citation logic.',
    caption: 'Citation-focused frame linking metadata to interpretation.',
    role: 'gallery',
  },
];

export const wolfsonianVisualEssaySections = [
  {
    title: 'Project framing',
    body: 'This proposal positions archival practice as a living choreography between objects, institutions, and public attention. The visual essay treats each artifact as active evidence: it stores cultural memory while inviting reinterpretation through contemporary interface behavior.',
  },
  {
    title: 'Method',
    body: 'The first build combines image-led curatorial writing with a lightweight interaction layer. Visitors can move through a concise narrative and then inspect how institutional roles shape interpretation, citation, and preservation without submitting personal information or entering a quiz funnel.',
  },
  {
    title: 'Public value',
    body: 'The page is public and shareable while remaining unlisted. This supports fellowship circulation across reviewers and collaborators while preserving a focused, non-extractive visitor experience aligned with museum context and educational use.',
  },
];

export const wolfsonianInstitutionalRoles: WolfsonianRole[] = [
  {
    id: 'archivist',
    title: 'The Archivist',
    description: 'Protects provenance and context so interpretation can remain accountable over time.',
    themes: ['Preservation', 'Metadata integrity'],
    archiveObjects: ['Accession ledger', 'Condition report', 'Digitization index'],
    connectedRoleIds: ['curator', 'registrar'],
    sourceLogic: 'Drawn from archival standards where catalog records and custody logs anchor public interpretation.',
  },
  {
    id: 'curator',
    title: 'The Curator',
    description: 'Shapes narrative framing while connecting artifacts to historical and civic questions.',
    themes: ['Interpretation', 'Public discourse'],
    archiveObjects: ['Exhibition brief', 'Wall text draft', 'Research bibliography'],
    connectedRoleIds: ['archivist', 'educator'],
    sourceLogic: 'Based on curatorial workflow in which interpretation depends on verified object histories and citation trails.',
  },
  {
    id: 'educator',
    title: 'The Educator',
    description: 'Translates institutional research into public learning encounters and shared language.',
    themes: ['Access', 'Pedagogy'],
    archiveObjects: ['Teaching guide', 'Program notes', 'Workshop prompt set'],
    connectedRoleIds: ['curator', 'conservator'],
    sourceLogic: 'Modeled on museum education practice that transforms scholarship into participatory but non-extractive engagement.',
  },
  {
    id: 'conservator',
    title: 'The Conservator',
    description: 'Maintains material life so objects remain legible, stable, and ethically handled.',
    themes: ['Material care', 'Risk mitigation'],
    archiveObjects: ['Treatment log', 'Material analysis notes', 'Handling protocol'],
    connectedRoleIds: ['archivist', 'educator'],
    sourceLogic: 'Informed by conservation records where treatment decisions become part of the object knowledge system.',
  },
  {
    id: 'registrar',
    title: 'The Registrar',
    description: 'Tracks custody, movement, and documentation so institutional memory does not fragment.',
    themes: ['Citation trail', 'Operational continuity'],
    archiveObjects: ['Loan agreement', 'Transport log', 'Rights documentation'],
    connectedRoleIds: ['archivist', 'curator'],
    sourceLogic: 'Grounded in registrar procedures that link legal, logistical, and interpretive accountability.',
  },
];
