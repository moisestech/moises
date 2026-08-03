export type ResearchMedia = {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
};

export type TechnicalSpec = {
  label: string;
  value: string;
};

export type IterationStudy = {
  id: string;
  number: string;
  title: string;
  description: string;
  media: ResearchMedia;
};

export type FabricationStep = {
  step: number;
  title: string;
  description: string;
};

export type NavSection = {
  id: string;
  label: string;
};

const CLOUDINARY_BASE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const weightOfTheCloudNav: NavSection[] = [
  { id: 'statement', label: 'Statement' },
  { id: 'goal', label: 'Goal' },
  { id: 'system', label: 'System' },
  { id: 'iterations', label: 'Iterations' },
  { id: 'references', label: 'References' },
  { id: 'materials', label: 'Materials' },
  { id: 'construction', label: 'Construction' },
  { id: 'credits', label: 'Credits' },
];

export const weightOfTheCloud = {
  title: 'The Weight of the Cloud',
  artists: 'Moises Sanabria + Fabiola Larios',
  year: 2026,
  status: 'In development',
  eyebrow: 'Research / sculpture in development · 2026',
  medium: 'Obsolete electronics, structural metal, embedded light, and control system',
  dimensionsIn: '48 × 48 × 48 in',
  dimensionsCm: '122 × 122 × 122 cm',
  productionMethod: 'Ideally constructed and assembled on site',
  metadata:
    'Obsolete electronics, structural metal, embedded light, and control system · Proposed 48 × 48 × 48 in · Ideally constructed and assembled on site',
  researchQuestion: 'What does the cloud weigh once its previous bodies are no longer useful?',
  lede:
    'The Weight of the Cloud compresses obsolete electronics into a four-foot cube whose disciplined geometry contrasts with the unstable technological matter embedded across its surface. Circuit boards, hard drives, routers, fans, cables, screens, and computer housings become the physical remains of a culture trained to imagine digital infrastructure as clean, distant, and immaterial.',
  statement: [
    'The sculpture gives the cloud a body. A controlled field of cold light moves through the cube’s gaps and internal void, suggesting that the discarded hardware continues to communicate after its usefulness has ended. The work treats e-waste not only as environmental residue, but as the abandoned physical body of memory, labor, attention, surveillance, and outsourced cognition.',
    'The work is not primarily a recycling sculpture. Recycling is its material condition. Its deeper subject is the continuous production and abandonment of technological bodies.',
  ],
  projectGoal: [
    'To give the cloud a measurable body—a four-foot modular cube whose silhouette stays architectural while its surface carries the real density of obsolete electronics.',
    'Building on site makes the process conceptually stronger. The host institution could contribute its own obsolete equipment, making the finished cube a physical portrait of the location’s technological memory. The installation period could function as an open studio or durational assembly process before the cube closes around its illuminated interior.',
  ],
  physicalSystem: [
    {
      number: '01',
      title: 'Structural frame',
      description: 'A load-bearing steel or aluminum internal frame. The electronic components do not carry the sculpture’s structural load.',
    },
    {
      number: '02',
      title: 'Six modular faces',
      description: 'Six removable mesh-backed e-waste panels, sorted and mechanically fastened.',
    },
    {
      number: '03',
      title: 'Illuminated void',
      description: 'A narrow illuminated central void—diffused light suggesting a server aisle, technological tomb, or inaccessible internal intelligence.',
    },
    {
      number: '04',
      title: 'Distributed signal',
      description: 'Distributed low-voltage network lights appearing asynchronously across the cube.',
    },
    {
      number: '05',
      title: 'Access and power',
      description: 'One removable service panel with concealed power, controller, fuse, and cable management.',
    },
  ],
  preferredSynthesis:
    'The final sculpture combines the disciplined silhouette of Monolith, the internal void of Residual Core, the real material specificity of Material Density, and a restrained version of Distributed Signal.',
} as const;

export const weightOfTheCloudHeroMedia: ResearchMedia = {
  src: `${CLOUDINARY_BASE}/v1785768535/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-04-wide-gallery_eishvd.png`,
  alt: 'The Weight of the Cloud — wide gallery study of a four-foot e-waste cube with an illuminated central seam in a white gallery',
  caption: 'Wide gallery study — proposed 48 × 48 × 48 in sculpture with illuminated residual core.',
  label: 'Concept rendering',
  orientation: 'landscape',
};

export const weightOfTheCloudIterations: IterationStudy[] = [
  {
    id: 'monolith',
    number: '01',
    title: 'Monolith',
    description:
      'A controlled surface dominated by larger computer housings and metal components. The cube reads first as architecture and only later as electronic waste.',
    media: {
      src: `${CLOUDINARY_BASE}/v1785768535/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-01-monolith_bortlt.png`,
      alt: 'Iteration 01 — Monolith: four-foot cube with architectural computer housings and metal components',
      caption: 'Iteration 01 — Monolith',
      label: 'Artwork study',
      orientation: 'landscape',
    },
  },
  {
    id: 'residual-core',
    number: '02',
    title: 'Residual Core',
    description:
      'A narrow illuminated seam divides the object, suggesting a server aisle, technological tomb, or inaccessible internal intelligence.',
    media: {
      src: `${CLOUDINARY_BASE}/v1785768538/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-02-residual-core_k4jbbp.png`,
      alt: 'Iteration 02 — Residual Core: e-waste cube split by a narrow illuminated central seam',
      caption: 'Iteration 02 — Residual Core',
      label: 'Artwork study',
      orientation: 'landscape',
    },
  },
  {
    id: 'material-density',
    number: '03',
    title: 'Material Density',
    description:
      'Circuit boards, cooling systems, cables, drives, ports, and electronic fragments become more visible. This direction is closest to the actual material currently available in the studio.',
    media: {
      src: `${CLOUDINARY_BASE}/v1785768536/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-03-material-density_bsjcxa.png`,
      alt: 'Iteration 03 — Material Density: cube surface dense with circuit boards, cables, drives, and electronic fragments',
      caption: 'Iteration 03 — Material Density',
      label: 'Artwork study',
      orientation: 'landscape',
    },
  },
  {
    id: 'distributed-signal',
    number: '04',
    title: 'Distributed Signal',
    description:
      'Small blue-white lights appear asynchronously throughout the cube. Reflections reach the gallery floor as though disconnected machines are quietly attempting to reconnect.',
    media: {
      src: `${CLOUDINARY_BASE}/v1785768537/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-05-distributed-signal_pwcgit.png`,
      alt: 'Iteration 04 — Distributed Signal: e-waste cube with asynchronous blue-white lights reflecting on the gallery floor',
      caption: 'Iteration 04 — Distributed Signal',
      label: 'Artwork study',
      orientation: 'landscape',
    },
  },
];

/** Default iteration for the interactive picker — closest to studio material. */
export const weightOfTheCloudDefaultIterationId = 'material-density';

export const weightOfTheCloudTechnicalSpecs: TechnicalSpec[] = [
  { label: 'Medium', value: 'Obsolete electronics, structural metal, embedded light, and control system' },
  { label: 'Proposed dimensions', value: '48 × 48 × 48 in (122 × 122 × 122 cm)' },
  { label: 'Structural frame', value: 'Welded steel or 80/20 aluminum extrusion — load-bearing; e-waste does not carry structural load' },
  { label: 'Panels', value: 'Six removable mesh-backed faces with sorted, mechanically fastened e-waste' },
  { label: 'Lighting', value: 'Diffused 24V illuminated void plus distributed low-voltage network lights' },
  { label: 'Power', value: 'Concealed controller, fuse, and cable management behind one service face' },
  { label: 'Service access', value: 'One removable panel for wiring, inspection, and transport' },
  {
    label: 'Safety',
    value:
      'All electronics decommissioned before fastening; no live mains on surface components; low-voltage lighting only; sharp edges secured; stable base footprint for gallery circulation',
  },
  { label: 'Production method', value: 'Ideally constructed and assembled on site' },
  { label: 'Status', value: 'In development · 2026' },
];

export const weightOfTheCloudFabricationSequence: FabricationStep[] = [
  {
    step: 1,
    title: 'Erect the structural frame',
    description:
      'Assemble the load-bearing steel or aluminum cube frame on site. Confirm plumb, level, and service-panel orientation before attaching faces.',
  },
  {
    step: 2,
    title: 'Sort and fasten e-waste panels',
    description:
      'Build six mesh-backed panels from sorted obsolete equipment—host-contributed hardware welcome. Fasten mechanically so panels remain removable.',
  },
  {
    step: 3,
    title: 'Install the illuminated void',
    description:
      'Mount the diffused 24V light core in the central void. Test glow through panel gaps before closing the remaining faces.',
  },
  {
    step: 4,
    title: 'Wire distributed signal and power',
    description:
      'Route low-voltage network lights, controller, fuse, and cable management through the designated access face. Keep all load off the e-waste skin.',
  },
  {
    step: 5,
    title: 'Close the cube',
    description:
      'Attach remaining panels and secure the service face. The installation period can remain an open studio until the cube finally closes around its illuminated interior.',
  },
];

export const weightOfTheCloudIndexImage = {
  url: `${CLOUDINARY_BASE}/v1785768535/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-04-wide-gallery_eishvd.png`,
  caption: 'The Weight of the Cloud — gallery study, sculpture in development',
};

/**
 * Related fallback / reference studies from a parallel Fabiola Larios project —
 * not Weight of the Cloud iterations, but adjacent material research.
 */
export const weightOfTheCloudReferenceIntro =
  'Adjacent reference studies from a parallel Fabiola Larios project. These are not Weight of the Cloud iterations; they document a fallback material approach that informs the collaborative research.';

export const weightOfTheCloudReferenceImages: ResearchMedia[] = [
  {
    src: `${CLOUDINARY_BASE}/v1785771360/art/moisestech-website/artworks/2026_weight_of_the_cloud/reference-image-project-fabiola-fallback/fabiola-reference-image-project-b1_dzzmpa.png`,
    alt: 'Fabiola Larios reference study B1 — fallback material project adjacent to The Weight of the Cloud',
    caption: 'Reference study B1 — Fabiola Larios fallback project',
    label: 'Reference study',
    orientation: 'landscape',
  },
  {
    src: `${CLOUDINARY_BASE}/v1785771356/art/moisestech-website/artworks/2026_weight_of_the_cloud/reference-image-project-fabiola-fallback/fabiola-reference-image-project-b2_ksw0xf.png`,
    alt: 'Fabiola Larios reference study B2 — fallback material project adjacent to The Weight of the Cloud',
    caption: 'Reference study B2 — Fabiola Larios fallback project',
    label: 'Reference study',
    orientation: 'landscape',
  },
];
