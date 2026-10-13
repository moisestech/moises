/**
 * Water and AI research dossier. Images here must be actual approved work images.
 * Do not replace pending study images with unrelated generated illustrations.
 *
 * New study media belongs in Cloudinary:
 * art/moisestech-website/research/ai-water-material-internet/
 * The older, already-hosted assets are intentionally reused at their original URLs.
 */
export type WaterStudy = {
  id: string;
  number: string;
  title: string;
  date: string;
  medium: string;
  status: string;
  premise: string;
  text: string;
  image: { src: string; alt: string; caption: string } | null;
};

export const waterStudies: WaterStudy[] = [
  {
    id: 'human-coolant',
    number: '01',
    title: 'Human Coolant',
    date: 'September 2026',
    medium: 'AI-assisted speculative sculpture study',
    status: 'In development / image selection pending',
    premise: 'A computer survives on the water a human would drink.',
    text: 'Two unopened 24-packs of generic bottled drinking water form a low, self-standing support for a GPU. Clear cooling tubes cross the boundary between a machine’s heat and a human supply. The reveal happens in stages: the GPU is on the water; the GPU appears to use the water; machine survival begins to compete with human survival. No elaborate pedestal or technological spectacle is needed.',
    image: null,
  },
  {
    id: 'still-processing',
    number: '02',
    title: 'Still Processing',
    date: 'August–September 2026',
    medium: 'AI-assisted speculative sculpture study',
    status: 'In development / image selection pending',
    premise: 'A workstation leaks what it can no longer process.',
    text: 'An old beige computer continues to run while water exits the monitor, falls from the CD-ROM tray, and returns to a shallow reflective reservoir through a recirculating system. Vines and cables mingle around the machine. It first reads as a crying computer and then as a small, persistent circuit of cooling, exhaustion, and maintenance.',
    image: null,
  },
  {
    id: 'paper-waterfall',
    number: '03',
    title: 'Paper Waterfall',
    date: '2026',
    medium: 'Related AI-assisted installation study',
    status: 'Working study / image selection pending',
    premise: 'A feed becomes a flood of physical residue.',
    text: 'Continuous strips of printed information descend from inexpensive printers and collect on the floor. There is no literal water in this version: the waterfall is a visual grammar for digital circulation, overflow, and accumulation. It connects the water studies to the material waste of seemingly weightless information.',
    image: null,
  },
];

export const waterResearchReferences = [
  {
    id: 'liquid-cooled-nike',
    title: 'PC Liquid Cooled Nike Air Max Deluxe',
    year: '2018',
    status: 'Earlier artwork / documented image',
    description:
      'A sneaker adapted with PC liquid-cooling components. An earlier object relation in which the boundaries between body, consumer product, and machine begin to slip.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/pc-liquid-cool-nike-shoe_isqxjd.jpg',
    alt: 'PC Liquid Cooled Nike Air Max Deluxe, a sneaker with computer liquid-cooling components',
    caption: 'PC Liquid Cooled Nike Air Max Deluxe · 2018',
    href: '/art/pc_liquid_cooled_nike',
    credit: 'Moises Sanabria',
  },
  {
    id: 'weight-of-cloud',
    title: 'The Weight of the Cloud',
    year: '2026',
    status: 'Adjacent sculptural research / in development',
    description:
      'Obsolete electronics compressed into an architectural cube. Not a water sculpture, but a parallel inquiry into the hardware, waste, and infrastructure hidden by the language of the cloud.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785768536/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-03-material-density_bsjcxa.png',
    alt: 'Material-density concept rendering of The Weight of the Cloud, an e-waste cube',
    caption: 'The Weight of the Cloud · material-density study · 2026',
    href: '/research/weight-of-the-cloud',
    credit: 'Moises Sanabria + Fabiola Larios',
  },
] as const;
