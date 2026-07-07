import { postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';

export type ReadymadesGalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  studyNumber?: string;
  aspect?: 'story' | 'landscape';
};

export type ReadymadesStoryParagraph = {
  key: string;
  text: string;
  imageId?: string;
};

export type ReadymadesStorySection = {
  id: string;
  eyebrow: string;
  title: string;
  layout: 'textLeft' | 'textRight' | 'stack';
  defaultImageId: string;
  paragraphs: ReadymadesStoryParagraph[];
  highlightKey: keyof typeof import('@/content/post-ai-readymades/postAiReadymadesKeywords').readymadesSectionHighlights;
};

const studyImage = (id: string) => postAiReadymadesStudies.find((s) => s.id === id)?.imageUrl;

export const readymadesGalleryImages: Record<string, ReadymadesGalleryImage> = {
  'study-001': {
    id: 'study-001',
    src: '',
    alt: 'Power Strip Pietà — vertical study placeholder',
    caption: 'Study 001 · Power Strip Pietà · Daily Selection',
    studyNumber: '001',
    aspect: 'story',
  },
  'study-003': {
    id: 'study-003',
    src: studyImage('003') ?? '',
    alt: 'Doomscrolling Treadmill',
    caption: 'Study 003 · Doomscrolling Treadmill · Attention as infrastructure',
    studyNumber: '003',
    aspect: 'story',
  },
  'study-004': {
    id: 'study-004',
    src: studyImage('004') ?? '',
    alt: 'Simulation Faith',
    caption: 'Study 004 · Simulation Faith · Techno-spiritual object',
    studyNumber: '004',
    aspect: 'story',
  },
  'study-005': {
    id: 'study-005',
    src: studyImage('005') ?? '',
    alt: 'Baby AGI',
    caption: 'Study 005 · Baby AGI · AI childhood / birth / care',
    studyNumber: '005',
    aspect: 'story',
  },
  'study-006': {
    id: 'study-006',
    src: studyImage('006') ?? '',
    alt: 'Privacy is a Luxury',
    caption: 'Study 006 · Privacy is a Luxury · Corporate anonymity',
    studyNumber: '006',
    aspect: 'story',
  },
  'study-007': {
    id: 'study-007',
    src: studyImage('007') ?? '',
    alt: 'Price of Existence',
    caption: 'Study 007 · Price of Existence · Migrant / material memory',
    studyNumber: '007',
    aspect: 'story',
  },
  'bitm-writing': {
    id: 'bitm-writing',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1775099574/art/moisestech-website/research/broken-acceleration/broken-acceleration-writing-apr1st-wavemaker-2026_xrg993.png',
    alt: 'Born Into the Machine — research writing',
    caption: 'Born Into the Machine · parent thesis and research archive',
    aspect: 'landscape',
  },
  'smart-shoppers': {
    id: 'smart-shoppers',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    alt: 'Smart Shoppers',
    caption: 'Related work · cognition staged as something to wheel through the market',
    aspect: 'landscape',
  },
  'doom-marathon': {
    id: 'doom-marathon',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743116742/art/moisestech-website/artworks/2024_doomscrolling_marathon/moises-sanabria-doomscrolling-marathon-proyecto-aparadores-cdmx-2024_jilui4.png',
    alt: 'Doomscrolling Marathon installation',
    caption: 'Doomscrolling Marathon · durational feed culture made physical',
    aspect: 'landscape',
  },
};

export const readymadesStorySections: ReadymadesStorySection[] = [
  {
    id: 'method',
    eyebrow: 'Studio method',
    title: 'One vertical selection per day',
    layout: 'textLeft',
    defaultImageId: 'study-001',
    highlightKey: 'method',
    paragraphs: [
      {
        key: 'method-0',
        text: '365 Post-AI Readymades is the studio method of Born Into the Machine: a symbolic archive where each day produces one selected vertical image—a post-AI readymade that may begin as an IG Story and end as catalogue entry, grant language, or sculpture.',
        imageId: 'study-001',
      },
      {
        key: 'method-1',
        text: 'Each study starts as an object relation—not a prompt in isolation, but a tension between things already in the world: plugs and bodies, POS terminals and prayer, strollers and GPUs. The sculptural plausibility engine asks whether the relation can survive institutional display.',
        imageId: 'study-005',
      },
      {
        key: 'method-2',
        text: 'The loop is taste, machine vision, budget, and white cube believability. When plausibility crosses a threshold, the image is posted, archived, reviewed, or left suspended—sometimes never built at all.',
        imageId: 'study-004',
      },
    ],
  },
  {
    id: 'ritual',
    eyebrow: 'Daily ritual',
    title: 'Flash, archive, public memory',
    layout: 'textRight',
    defaultImageId: 'study-003',
    highlightKey: 'ritual',
    paragraphs: [
      {
        key: 'ritual-0',
        text: 'Instagram is the flash: the object’s first public appearance in vertical format—fast, legible, and deliberately ephemeral. The IG Story is not documentation after the fact; it is often the debut.',
        imageId: 'study-003',
      },
      {
        key: 'ritual-1',
        text: 'The Airtable archive is the private memory: study number, object family, missing labor, rawness source, and review status. What the feed forgets in twenty-four hours, the archive keeps for the sixty-day review.',
        imageId: 'study-006',
      },
      {
        key: 'ritual-2',
        text: 'This website is the public memory—the institutional catalogue that turns a daily selection into something a curator, funder, or collaborator can read without watching every Story.',
        imageId: 'bitm-writing',
      },
    ],
  },
  {
    id: 'skipped',
    eyebrow: 'Essay anchor',
    title: 'The Skipped Object',
    layout: 'textLeft',
    defaultImageId: 'study-007',
    highlightKey: 'skipped',
    paragraphs: [
      {
        key: 'skipped-0',
        text: 'Traditionally, a sculpture moves from idea to sketch to fabrication to installation to documentation. In 365 Post-AI Readymades, that sequence collapses. The skipped object appears first as plausible documentation—often before it exists.',
        imageId: 'study-007',
      },
      {
        key: 'skipped-1',
        text: 'The readymade updated for the model: selection replaces making, but not entirely. The question is not whether the object is fake. The question is whether the image has already performed enough of the object’s cultural work.',
        imageId: 'smart-shoppers',
      },
      {
        key: 'skipped-2',
        text: 'Some studies remain content-only. Others become website candidates, physical build candidates, or glossary terms inside Born Into the Machine. The archive tracks that decision rather than hiding it.',
        imageId: 'doom-marathon',
      },
    ],
  },
  {
    id: 'parent',
    eyebrow: 'Parent project',
    title: 'Inside the machine',
    layout: 'textRight',
    defaultImageId: 'bitm-writing',
    highlightKey: 'parent',
    paragraphs: [
      {
        key: 'parent-0',
        text: 'Born Into the Machine is the parent thesis. 365 Post-AI Readymades is the studio method—a daily proof that the artist is already working inside the model, the feed, the archive, and the systems that decide what feels real.',
        imageId: 'bitm-writing',
      },
      {
        key: 'parent-1',
        text: 'The project asks how taste, labor, identity, and sculpture change when missing labor is constant: verifying, correcting, translating, and staging machine output for institutions that still speak in object language.',
        imageId: 'study-006',
      },
      {
        key: 'parent-2',
        text: 'Existing works anchor the archive—Doomscrolling Treadmill, Simulation Faith, Baby AGI—while new studies test whether the attention economy and techno-spiritual objects can enter the same catalogue rhythm.',
        imageId: 'study-004',
      },
    ],
  },
];

export const readymadesHeroParagraphs = [
  '365 Post-AI Readymades is the studio method of Born Into the Machine: a symbolic archive of daily selections where speculative objects move between image, IG Story, institutional display, missing labor, and possible sculpture.',
  'Hover each paragraph to see the study it pairs with. Underlined terms open catalogue notes. The physical object is not erased—it is delayed, simulated, compressed, or made unnecessary for a moment.',
];

export const readymadesGalleryStripIds = [
  'study-001',
  'study-003',
  'study-004',
  'study-005',
  'study-006',
  'study-007',
  'smart-shoppers',
  'doom-marathon',
] as const;

export const readymadesFeaturedNarratives = [
  {
    studyId: '003',
    relevance: 'A body walks in place while the feed keeps moving—an attention-economy device that predates the daily archive but anchors it.',
    conceptualTag: 'Feed as treadmill · body as capture surface',
  },
  {
    studyId: '004',
    relevance: 'Sacred iconography enters the headset—techno-spiritual plausibility before fabrication.',
    conceptualTag: 'Synthetic belief · infant iconography',
  },
  {
    studyId: '005',
    relevance: 'A gaming PC becomes a stroller—AI childhood staged as ready-made assembly.',
    conceptualTag: 'Pre-natal AGI · care as hardware',
  },
] as const;
