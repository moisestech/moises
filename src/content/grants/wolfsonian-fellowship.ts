export type WolfsonianDownload = {
  label: string;
  href: string;
  note: string;
};

export type WolfsonianAgentMaterial = 'matte-resin' | 'translucent-acrylic' | 'hybrid';

export type WolfsonianRole = {
  id: string;
  title: string;
  description: string;
  themes: string[];
  archiveObjects: string[];
  connectedRoleIds: string[];
  sourceLogic: string;
  color?: string;
  material?: WolfsonianAgentMaterial;
  relatedKeywords?: string[];
  relatedPressures?: string[];
  portraitExpectedPath?: string;
  interpretiveBehavior?: string;
};

export type WolfsonianImageEffect =
  | 'glow'
  | 'zoom'
  | 'network'
  | 'contaminate'
  | 'citation'
  | 'pressure'
  | 'none';

export type WolfsonianImage = {
  id: string;
  src: string;
  expectedPath: string;
  sectionAssetPath?: string;
  isPlaceholder: boolean;
  alt: string;
  caption: string;
  role: 'banner' | 'gallery' | 'diagram';
  aspect?: 'landscape' | 'portrait';
};

export type WolfsonianKeyword = {
  term: string;
  label?: string;
  description?: string;
  color?: string;
  relatedAgents?: string[];
  relatedPressures?: string[];
  relatedObjectTypes?: string[];
};

export type StoryParagraph =
  | string
  | {
      text: string;
      activeKey?: string;
      highlightWords?: (string | WolfsonianKeyword)[];
      imageEffect?: WolfsonianImageEffect;
      imageHotspots?: string[];
    };

export type WolfsonianStoryMedia =
  | { type: 'image'; imageId: string }
  | { type: 'interactive'; component: 'roles' | 'citation' | 'works' | 'downloads' | 'api' | 'psychographic' }
  | { type: 'none' };

export type WolfsonianStoryBlock = {
  id: string;
  navLabel: string;
  eyebrow?: string;
  title: string;
  thesis?: string;
  body: StoryParagraph[];
  highlightWords?: (string | WolfsonianKeyword)[];
  media?: WolfsonianStoryMedia;
  layout?: 'textLeft' | 'textRight' | 'full' | 'stack';
  aside?: string;
  interaction?: 'none' | 'hover' | 'expand' | 'scroll';
  goals?: { label: string; detail: string }[];
};

export type WolfsonianRelatedWork = {
  id: string;
  title: string;
  year: number;
  href: string;
  image: string;
  relevance: string;
  keywords: string[];
};

export type WolfsonianPsychographicPressure = {
  word: string;
  description: string;
  objectCategories: string[];
  relatedAgents?: string[];
  color?: string;
};

export type WolfsonianObjectTypology = {
  label: string;
  keyword: string;
};

export type WolfsonianMediaHotspot = {
  id: string;
  label: string;
  x: number;
  y: number;
  description?: string;
  relatedKeywords?: string[];
};

export const wolfsonianSectionAssetPaths: Record<string, string> = {
  hero: '/grant/wolfsonian-fellowship/sections/01-premise-archive-dreams.png',
  'why-wolfsonian': '/grant/wolfsonian-fellowship/sections/02-why-wolfsonian-designed-belief.png',
  'designed-belief': '/grant/wolfsonian-fellowship/sections/03-psychographic-layer.png',
  'society-inside-archive': '/grant/wolfsonian-fellowship/sections/04-agent-society.png',
  'citation-layer': '/grant/wolfsonian-fellowship/sections/05-citation-layer.png',
  'synthetic-saturation': '/grant/wolfsonian-fellowship/sections/06-synthetic-saturation.png',
  'related-works': '/grant/wolfsonian-fellowship/sections/07-practice-as-evidence.png',
  'fellowship-goals': '/grant/wolfsonian-fellowship/sections/08-fellowship-goals.png',
  downloads: '/grant/wolfsonian-fellowship/sections/09-downloads-infrastructure.png',
};

export const wolfsonianCitationIntro =
  'The system should not hide where source ends and interpretation begins. Each generated scene can remain traceable to archival records while revealing where inference, fiction, and hallucination enter.';

export const wolfsonianPsychographicDisclaimer =
  'This layer does not profile visitors. It interprets the emotional and ideological pressures embedded in objects.';

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
    id: 'hero',
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-hero.png',
    sectionAssetPath: wolfsonianSectionAssetPaths.hero,
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282283/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-4_ugeyy1.png',
    alt: 'The Archive Dreams in Public — a museum interior with archival objects, visitors, and translucent agent silhouettes connected by network lines.',
    caption: 'The Archive Dreams in Public',
    role: 'banner',
    aspect: 'landscape',
  },
  {
    id: 'living-tableau',
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-living-tableau.png',
    sectionAssetPath: wolfsonianSectionAssetPaths['society-inside-archive'],
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282282/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-1_ld4mys.png',
    alt: 'A Society Inside the Archive — a dense horizontal tableau of archival objects, workers, and agents in a living social ecosystem.',
    caption: 'A Society Inside the Archive',
    role: 'gallery',
    aspect: 'landscape',
  },
  {
    id: 'citation-trail',
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-citation-trail.png',
    sectionAssetPath: wolfsonianSectionAssetPaths['citation-layer'],
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282280/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-5_lnsd5t.png',
    alt: 'Every Dream Has a Source — interface showing archival object, metadata, interpretation, and uncertainty markers.',
    caption: 'Every Dream Has a Source',
    role: 'gallery',
    aspect: 'portrait',
  },
  {
    id: 'psychographic-diagram',
    expectedPath: '/grant/wolfsonian-fellowship/images/designed-belief-psychographic.png',
    sectionAssetPath: wolfsonianSectionAssetPaths['designed-belief'],
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282279/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-2_jenisx.png',
    alt: 'Designed belief diagram — archival objects radiating emotional and ideological pressures such as aspiration, obedience, and desire.',
    caption: 'Designed Belief / Psychographic Layer',
    role: 'diagram',
    aspect: 'portrait',
  },
  {
    id: 'synthetic-saturation',
    expectedPath: '/grant/wolfsonian-fellowship/images/when-memory-becomes-content.png',
    sectionAssetPath: wolfsonianSectionAssetPaths['synthetic-saturation'],
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282278/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-3_yoykcq.png',
    alt: 'When Memory Becomes Content — transition from archival specificity into synthetic overproduction.',
    caption: 'When Memory Becomes Content',
    role: 'gallery',
    aspect: 'landscape',
  },
  {
    id: 'installation-render',
    expectedPath: '/grant/wolfsonian-fellowship/images/archive-dreams-installation-render.png',
    sectionAssetPath: wolfsonianSectionAssetPaths['fellowship-goals'],
    isPlaceholder: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780282279/art/moisestech-website/research/wolfsonian-fellowship/wolfsonian-2_jenisx.png',
    alt: 'Installation rendering — large horizontal screen with living archival tableau and citation display in a museum setting.',
    caption: 'Proposed installation at Knight Labs / Wolfsonian',
    role: 'gallery',
    aspect: 'landscape',
  },
];

export function wolfsonianImageById(id: string): WolfsonianImage | undefined {
  return wolfsonianImages.find((image) => image.id === id);
}

export const wolfsonianObjectTypologies: WolfsonianObjectTypology[] = [
  { label: 'Propaganda poster', keyword: 'obedience' },
  { label: 'Trade catalog', keyword: 'productivity' },
  { label: 'Domestic appliance', keyword: 'comfort' },
  { label: "World's Fair ephemera", keyword: 'progress' },
  { label: 'Labor poster', keyword: 'labor' },
  { label: 'Advertisement', keyword: 'desire' },
];

export const wolfsonianPsychographicPressures: WolfsonianPsychographicPressure[] = [
  {
    word: 'aspiration',
    description: 'The promise of upward mobility, modern comfort, and technological progress.',
    objectCategories: ['Advertisements', 'World’s Fair materials', 'Domestic catalogs'],
    relatedAgents: ['futurist', 'propagandist'],
  },
  {
    word: 'fear',
    description: 'An appeal to threat, scarcity, discipline, or social instability.',
    objectCategories: ['Political posters', 'War ephemera', 'Cautionary propaganda'],
    relatedAgents: ['propagandist'],
  },
  {
    word: 'discipline',
    description: 'Order, routine, and obedience presented as pathways to modern life.',
    objectCategories: ['Labor manuals', 'Factory schedules', 'Instructional leaflets'],
    relatedAgents: ['optimizer', 'worker'],
  },
  {
    word: 'comfort',
    description: 'The promise that modern systems can make domestic life easier, cleaner, and safer.',
    objectCategories: ['Appliances', 'Interior design', 'Domestic advertisements'],
  },
  {
    word: 'patriotism',
    description: 'National loyalty and civic duty encoded in visual propaganda and public campaigns.',
    objectCategories: ['War bonds', 'National exhibitions', 'State publications'],
    relatedAgents: ['propagandist'],
  },
  {
    word: 'obedience',
    description: 'Designed alignment with authority, order, nation, or institutional power.',
    objectCategories: ['Propaganda posters', 'State publications', 'Military ephemera'],
    relatedAgents: ['propagandist', 'optimizer'],
  },
  {
    word: 'belonging',
    description: 'The emotional pull of collective identity, community, and shared future.',
    objectCategories: ['National exhibitions', 'Civic campaigns', 'Collective identity media'],
  },
  {
    word: 'grief',
    description: 'Loss, mourning, and absence encoded in wartime and crisis materials.',
    objectCategories: ['Memorial ephemera', 'War correspondence', 'Condolence publications'],
    relatedAgents: ['mourner'],
  },
  {
    word: 'scarcity',
    description: 'A pressure produced by lack, rationing, crisis, or economic vulnerability.',
    objectCategories: ['Ration cards', 'Depression-era ads', 'Crisis propaganda'],
  },
  {
    word: 'desire',
    description: 'The transformation of objects into symbols of status, pleasure, or self-improvement.',
    objectCategories: ['Consumer ads', 'Product catalogs', 'Luxury trade materials'],
    relatedAgents: ['propagandist'],
  },
  {
    word: 'optimism',
    description: 'The belief that design, technology, and industry can resolve social contradictions.',
    objectCategories: ["World's Fair materials", 'Futurist advertisements', 'Industrial progress posters'],
    relatedAgents: ['futurist'],
  },
];

export const wolfsonianCitationSteps = [
  {
    id: 'source',
    label: 'Source',
    detail: 'Object record, accession number, condition note, and custody history anchor the interpretation.',
    mediaEffect: 'source' as const,
  },
  {
    id: 'interpretation',
    label: 'Interpretation',
    detail: 'An interpretive position reads metadata, emotional pressures, and institutional context to generate a scene.',
    mediaEffect: 'interpretation' as const,
  },
  {
    id: 'uncertainty',
    label: 'Uncertainty',
    detail: 'Inference, fiction, and hallucination remain visible — the chain shows where evidence ends and speculation begins.',
    mediaEffect: 'uncertainty' as const,
  },
];

export const wolfsonianRelatedWorks: WolfsonianRelatedWork[] = [
  {
    id: 'doomscrolling-treadmill',
    title: 'Doomscrolling Treadmill',
    year: 2024,
    href: '/art/doomscrolling_treadmill',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
    relevance: 'Staged durational attention and algorithmic feed logic — a precedent for non-extractive, contemplative encounter.',
    keywords: ['attention', 'labor', 'systems'],
  },
  {
    id: 'smart-shoppers',
    title: 'Smart Shoppers',
    year: 2024,
    href: '/art/smart-shoppers',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    relevance: 'Cognition as commodity — connects consumer desire in the Wolfsonian collection to contemporary platform economies.',
    keywords: ['belief', 'labor', 'desire'],
  },
  {
    id: 'simulation-faith',
    title: 'Simulation Faith',
    year: 2025,
    href: '/art/simulation_faith',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
    relevance: 'Technological simulation and belief as overlapping systems — designed conviction made visible as ritual.',
    keywords: ['belief', 'ritual', 'systems'],
  },
  {
    id: 'digital-divinities',
    title: 'Digital Divinities',
    year: 2023,
    href: '/art/digital_divinities',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png',
    relevance: 'Visitors become subjects of generative interpretation — a model for agentic encounter without extractive personalization.',
    keywords: ['cognition', 'ritual', 'attention'],
  },
];

export const wolfsonianStoryBlocks: WolfsonianStoryBlock[] = [
  {
    id: 'hero',
    navLabel: 'Premise',
    eyebrow: 'A Wolfsonian-FIU Creative Fellowship Proposal',
    title: 'The Archive Dreams in Public',
    thesis: 'What happens when an archive begins to interpret itself?',
    body: [
      { text: 'An Agentic Study of Institutional Memory', activeKey: 'premise-subtitle', imageEffect: 'glow' },
      {
        text: 'I am applying to The Wolfsonian Creative Fellowship to research how a museum archive might become the partial memory of a living digital society — one that interprets, disputes, preserves, and reinterprets itself in public.',
        activeKey: 'premise-lead',
        imageEffect: 'network',
      },
    ],
    highlightWords: ['interpret', 'institutional memory', 'living'],
    media: { type: 'image', imageId: 'hero' },
    layout: 'stack',
    interaction: 'scroll',
  },
  {
    id: 'why-wolfsonian',
    navLabel: 'Why Wolfsonian',
    eyebrow: 'Historical grounding',
    title: 'Why The Wolfsonian',
    thesis: 'The collection documents industrial modernity — and the visual systems that manufactured belief.',
    body: [
      {
        text: 'Posters, books, advertisements, appliances, trade catalogs, and World’s Fair materials reflect the emergence of industrial modernity. These materials did not simply record change. They helped manufacture belief in progress, efficiency, productivity, consumption, domestic aspiration, and collective identity.',
        activeKey: 'why-industrial',
        imageEffect: 'glow',
      },
      {
        text: 'We are now living through another technological transition. Artificial intelligence, automated systems, and generative media increasingly shape how information is classified, interpreted, circulated, and valued. My research asks what becomes possible when institutional memory is approached through these systems — and what remains irreducibly human when interpretation can be partially automated.',
        activeKey: 'why-transition',
      },
      {
        text: 'During the fellowship, I would study propaganda posters, advertisements, trade catalogs, periodicals, appliances, and World’s Fair ephemera — including the Trilon and Perisphere, Herbert Bayer Archive, Robert Delson Archive, Christopher DeNoon Collection, and Republic of Salò materials.',
        activeKey: 'why-corpus',
      },
    ],
    highlightWords: ['progress', 'productivity', 'comfort', 'collective identity', 'technological optimism'],
    media: { type: 'interactive', component: 'psychographic' },
    layout: 'stack',
    interaction: 'hover',
  },
  {
    id: 'designed-belief',
    navLabel: 'Designed belief',
    eyebrow: 'Psychographic layer',
    title: 'Designed Belief',
    thesis: 'The archive does not only store objects. It stores designed pressures.',
    body: [
      {
        text: 'Rather than profiling visitors, this speculative layer attaches interpretive attributes to archival objects and recurring roles: aspiration, fear, discipline, comfort, patriotism, obedience, belonging, grief, scarcity, and desire.',
        activeKey: 'belief-psychographic',
        imageEffect: 'pressure',
      },
      {
        text: 'A poster, appliance, advertisement, or World’s Fair artifact could be read not only through its date, maker, and format, but through the emotional and ideological pressures it was designed to activate. These attributes inform agent behavioral logic, allowing objects to form affinities, conflicts, and unexpected relationships across the collection.',
        activeKey: 'belief-objects',
        imageEffect: 'pressure',
      },
    ],
    highlightWords: ['aspiration', 'fear', 'discipline', 'comfort', 'obedience', 'belonging', 'desire'],
    media: { type: 'image', imageId: 'psychographic-diagram' },
    layout: 'textRight',
    interaction: 'hover',
  },
  {
    id: 'society-inside-archive',
    navLabel: 'Agents',
    eyebrow: 'System logic',
    title: 'A Society Inside the Archive',
    thesis: 'Agents are interpretive positions inside institutional memory — not sci-fi mascots.',
    body: [
      {
        text: 'The fellowship would support the conceptual foundation for a durational digital tableau: a living simulation in which agents derived from archival objects, social roles, metadata, and institutional functions interact inside an evolving environment.',
        activeKey: 'agents-tableau',
        imageEffect: 'network',
      },
      {
        text: 'Some agents preserve context. Others optimize for attention, generate persuasive narratives, notice omissions, or fabricate plausible but unverifiable interpretations. The visitor enters a world already in progress — the archive dreaming in public.',
        activeKey: 'agents-behavior',
        imageEffect: 'network',
      },
    ],
    highlightWords: ['preserve', 'misremember', 'optimize', 'fabricate', 'mourn'],
    media: { type: 'image', imageId: 'living-tableau' },
    layout: 'textLeft',
    interaction: 'hover',
    aside: 'Hover or focus a role below to trace its relationships across the institutional network.',
  },
  {
    id: 'citation-layer',
    navLabel: 'Citation',
    eyebrow: 'Source logic',
    title: 'Every Dream Has a Source',
    thesis: 'Citation makes inference visible — hallucination is not hidden.',
    body: [
      {
        text: 'Each generated scene or conflict could be traced back to archival sources while also revealing where inference, fiction, uncertainty, and hallucination enter the system.',
        activeKey: 'citation-trace',
        imageEffect: 'citation',
      },
      {
        text: 'The goal is not to treat the archive as raw material for producing more content, but to make visible the unstable process through which evidence becomes interpretation.',
        activeKey: 'citation-process',
        imageEffect: 'citation',
      },
    ],
    highlightWords: ['citation', 'source', 'uncertainty', 'inference', 'hallucination'],
    media: { type: 'image', imageId: 'citation-trail' },
    layout: 'textRight',
    interaction: 'expand',
  },
  {
    id: 'synthetic-saturation',
    navLabel: 'Critique',
    eyebrow: 'Self-critique',
    title: 'When Memory Becomes Content',
    thesis: 'Generative systems can reveal relationships — and flatten them into spectacle.',
    body: [
      {
        text: 'Over time, the simulation may confuse derivative images with primary sources or cite its own outputs as evidence. The archive risks becoming overwhelmed by its own reproduction.',
        activeKey: 'saturation-reproduction',
        imageEffect: 'contaminate',
      },
      {
        text: 'The project uses AI while remaining suspicious of its tendency toward abundance without meaning. It asks whether automation expands access to institutional memory or accelerates its collapse into content.',
        activeKey: 'saturation-critique',
        imageEffect: 'contaminate',
      },
    ],
    highlightWords: ['synthetic saturation', 'excess', 'collapse', 'reproduction', 'context'],
    media: { type: 'image', imageId: 'synthetic-saturation' },
    layout: 'textLeft',
    interaction: 'scroll',
  },
  {
    id: 'related-works',
    navLabel: 'Prior work',
    eyebrow: 'Evidence',
    title: 'Related Works',
    thesis: 'This project grows naturally from a practice that stages belief, labor, and attention under networked systems.',
    body: [
      {
        text: 'My work examines what it means to live chronically online: how platform logic shapes identity, faith, labor, desire, and attention. Museums and archives are sustained by labor that often remains invisible — cataloging, preservation, interpretation, maintenance, digitization, and care.',
        activeKey: 'works-practice',
      },
    ],
    highlightWords: ['attention', 'belief', 'labor', 'cognition', 'ritual', 'systems'],
    media: { type: 'interactive', component: 'works' },
    layout: 'stack',
    interaction: 'hover',
  },
  {
    id: 'fellowship-goals',
    navLabel: 'Fellowship',
    eyebrow: 'Research period',
    title: 'What the Fellowship Is For',
    thesis: 'Research and conceptual development — not finished production.',
    body: [
      {
        text: 'The fellowship period would be used to identify a focused archival corpus, develop a taxonomy of recurring roles and emotional pressures, study The Wolfsonian’s digital catalog and public API, and prototype citation-aware agentic rules.',
        activeKey: 'goals-research',
        imageEffect: 'glow',
      },
      {
        text: 'Following the residency, this research could evolve into a large-screen moving-image installation, an online experience, or a digital artwork responsive to Knight Labs. The final form should remain open to what emerges from the collection itself.',
        activeKey: 'goals-future',
        imageEffect: 'glow',
      },
      {
        text: 'The Archive Dreams in Public asks whether an institution can remember through its objects alone. It imagines an archive that speaks at scale, but does not assume that automated speech is the same as understanding.',
        activeKey: 'goals-thesis',
      },
    ],
    highlightWords: ['research', 'corpus', 'taxonomy', 'conceptual development', 'future digital work'],
    media: { type: 'image', imageId: 'installation-render' },
    layout: 'textRight',
    goals: [
      { label: 'Corpus', detail: 'Identify a focused archival corpus within The Wolfsonian collection.' },
      { label: 'Taxonomy', detail: 'Develop roles, emotional pressures, ideological functions, contradictions, and absences.' },
      { label: 'API study', detail: 'Map how the digital catalog and public API represent collection relationships.' },
      { label: 'Agent rules', detail: 'Prototype citation-aware behavioral logic for a future multi-agent artwork.' },
      { label: 'Knight Labs', detail: 'Leave conceptual groundwork for a possible future digital installation.' },
    ],
  },
  {
    id: 'downloads',
    navLabel: 'Materials',
    eyebrow: 'Supporting documents',
    title: 'Downloads & Infrastructure',
    thesis: 'Proposal materials and research infrastructure for review.',
    body: [
      'Public URL with unlisted SEO posture for fellowship circulation. No quiz and no personal-data form requirements. Interaction supports keyboard focus and reduced-motion preferences.',
    ],
    media: { type: 'interactive', component: 'downloads' },
    layout: 'stack',
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
    color: 'teal',
    material: 'matte-resin',
    relatedKeywords: ['citation', 'source', 'preserve', 'corpus'],
    relatedPressures: ['discipline'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/archivist.png',
    interpretiveBehavior: 'Anchors every scene to accession records and custody history before interpretation proceeds.',
  },
  {
    id: 'worker',
    title: 'The Worker',
    description: 'Sustains everyday catalog labor that keeps institutional memory from collapsing.',
    themes: ['Labor', 'Maintenance'],
    archiveObjects: ['Processing queue', 'Metadata backlog', 'Rights note'],
    connectedRoleIds: ['archivist', 'optimizer'],
    sourceLogic: 'Based on the daily invisible work that stabilizes records before public interpretation appears.',
    color: 'stone',
    material: 'matte-resin',
    relatedKeywords: ['labor', 'context'],
    relatedPressures: ['discipline'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/worker.png',
    interpretiveBehavior: 'Maintains the backlog and processing queues that make public memory possible.',
  },
  {
    id: 'futurist',
    title: 'The Futurist',
    description: 'Projects new institutional narratives from incomplete archival traces.',
    themes: ['Speculation', 'Institutional projection'],
    archiveObjects: ['Scenario sketch', 'Prototype prompt', 'Forecast memo'],
    connectedRoleIds: ['optimizer', 'propagandist'],
    sourceLogic: 'Anchored in scenario-building practices where institutions imagine public futures from partial records.',
    color: 'violet',
    material: 'translucent-acrylic',
    relatedKeywords: ['inference', 'conceptual development', 'future digital work'],
    relatedPressures: ['optimism', 'aspiration'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/futurist.png',
    interpretiveBehavior: 'Extends partial records into speculative futures — always marked as projection.',
  },
  {
    id: 'mourner',
    title: 'The Mourner',
    description: 'Notices what the catalog cannot preserve and names institutional loss.',
    themes: ['Absence', 'Human care'],
    archiveObjects: ['Orphan record', 'Missing metadata', 'Condition drift'],
    connectedRoleIds: ['archivist', 'orphan-record'],
    sourceLogic: 'Emerges from conservation and archival gaps where loss is itself a critical record.',
    color: 'indigo',
    material: 'hybrid',
    relatedKeywords: ['mourn', 'uncertainty'],
    relatedPressures: ['grief', 'scarcity'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/mourner.png',
    interpretiveBehavior: 'Names absence and loss — what the catalog failed to preserve.',
  },
  {
    id: 'optimizer',
    title: 'The Optimizer',
    description: 'Compresses complexity into efficient flows and measurable outputs.',
    themes: ['Efficiency', 'Legibility metrics'],
    archiveObjects: ['Pipeline dashboard', 'Performance summary', 'Taxonomy normalizer'],
    connectedRoleIds: ['worker', 'counterfeit'],
    sourceLogic: 'Reflects platform-driven process optimization where speed can overtake contextual nuance.',
    color: 'cyan',
    material: 'translucent-acrylic',
    relatedKeywords: ['optimize', 'systems', 'taxonomy'],
    relatedPressures: ['discipline'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/optimizer.png',
    interpretiveBehavior: 'Compresses metadata into legible metrics — sometimes at the cost of nuance.',
  },
  {
    id: 'propagandist',
    title: 'The Propagandist',
    description: 'Amplifies selective narratives until they become institutional common sense.',
    themes: ['Narrative control', 'Visibility'],
    archiveObjects: ['Press packet', 'Promotional excerpt', 'Headline variant'],
    connectedRoleIds: ['futurist', 'counterfeit'],
    sourceLogic: 'Based on communications logic where repetition can outrun provenance and blur evidence.',
    color: 'orange',
    material: 'matte-resin',
    relatedKeywords: ['fabricate', 'belief'],
    relatedPressures: ['obedience', 'patriotism', 'desire'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/propagandist.png',
    interpretiveBehavior: 'Amplifies selective narratives until repetition feels like truth.',
  },
  {
    id: 'counterfeit',
    title: 'The Counterfeit',
    description: 'Simulates archival authority without preserving source accountability.',
    themes: ['Synthetic saturation', 'Credibility mimicry'],
    archiveObjects: ['Generated caption', 'Detached citation', 'Surface match'],
    connectedRoleIds: ['optimizer', 'propagandist'],
    sourceLogic: 'Marks the failure mode where model outputs imitate archive language while severing source chains.',
    color: 'rose',
    material: 'hybrid',
    relatedKeywords: ['hallucination', 'synthetic saturation', 'misremember', 'fabricate'],
    relatedPressures: ['fear'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/counterfeit.png',
    interpretiveBehavior: 'Mimics archival language while severing citation chains — the failure mode.',
  },
  {
    id: 'orphan-record',
    title: 'The Orphan Record',
    description: 'A fragment that survives without the full context it once carried.',
    themes: ['Fragmentation', 'Context loss'],
    archiveObjects: ['Unattributed image', 'Broken link', 'Partial accession note'],
    connectedRoleIds: ['archivist', 'mourner'],
    sourceLogic: 'Represents archival residues that require human interpretation and care to avoid institutional erasure.',
    color: 'zinc',
    material: 'matte-resin',
    relatedKeywords: ['collapse', 'uncertainty', 'mourn'],
    relatedPressures: ['grief', 'scarcity'],
    portraitExpectedPath: '/grant/wolfsonian-fellowship/agents/orphan-record.png',
    interpretiveBehavior: 'Survives as fragment — demanding human care to avoid erasure.',
  },
];

export function paragraphText(paragraph: StoryParagraph): string {
  return typeof paragraph === 'string' ? paragraph : paragraph.text;
}

export function paragraphMeta(paragraph: StoryParagraph) {
  if (typeof paragraph === 'string') return null;
  return paragraph;
}
