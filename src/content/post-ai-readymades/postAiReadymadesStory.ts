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

function studyGalleryEntry(number: string): ReadymadesGalleryImage {
  const study = postAiReadymadesStudies.find((s) => s.id === number);
  return {
    id: `study-${number}`,
    src: study?.imageUrl ?? '',
    alt: study?.title ?? `Study ${number}`,
    caption: `Study ${number} · 365 Post-AI Readymades · Daily Selection`,
    studyNumber: number,
    aspect: 'story',
  };
}

const studyGalleryImages = Object.fromEntries(
  postAiReadymadesStudies.map((study) => [`study-${study.number}`, studyGalleryEntry(study.number)]),
) as Record<string, ReadymadesGalleryImage>;

export const readymadesGalleryImages: Record<string, ReadymadesGalleryImage> = {
  ...studyGalleryImages,
  'bitm-writing': {
    id: 'bitm-writing',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1775099574/art/moisestech-website/research/broken-acceleration/broken-acceleration-writing-apr1st-wavemaker-2026_xrg993.png',
    alt: 'Born Into the Machine — research writing',
    caption: 'Born Into the Machine · parent thesis and research archive',
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
        text: 'Each study starts as an object relation—not a prompt in isolation, but a tension between things already in the world. The sculptural plausibility engine asks whether the relation can survive institutional display.',
        imageId: 'study-002',
      },
      {
        key: 'method-2',
        text: 'The loop is taste, machine vision, budget, and white cube believability. When plausibility crosses a threshold, the image is posted, archived, reviewed, or left suspended—sometimes never built at all.',
        imageId: 'study-003',
      },
    ],
  },
  {
    id: 'ritual',
    eyebrow: 'Daily ritual',
    title: 'Flash, archive, public memory',
    layout: 'textRight',
    defaultImageId: 'study-004',
    highlightKey: 'ritual',
    paragraphs: [
      {
        key: 'ritual-0',
        text: 'Instagram is the flash: the object’s first public appearance in vertical format—fast, legible, and deliberately ephemeral. The IG Story is not documentation after the fact; it is often the debut.',
        imageId: 'study-004',
      },
      {
        key: 'ritual-1',
        text: 'The Airtable archive is the private memory: study number, object family, missing labor, rawness source, and review status. What the feed forgets in twenty-four hours, the archive keeps for the sixty-day review.',
        imageId: 'study-005',
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
    defaultImageId: 'study-006',
    highlightKey: 'skipped',
    paragraphs: [
      {
        key: 'skipped-0',
        text: 'Traditionally, a sculpture moves from idea to sketch to fabrication to installation to documentation. In 365 Post-AI Readymades, that sequence collapses. The skipped object appears first as plausible documentation—often before it exists.',
        imageId: 'study-006',
      },
      {
        key: 'skipped-1',
        text: 'The readymade updated for the model: selection replaces making, but not entirely. The question is not whether the object is fake. The question is whether the image has already performed enough of the object’s cultural work.',
        imageId: 'study-007',
      },
      {
        key: 'skipped-2',
        text: 'Some studies remain content-only. Others become website candidates, physical build candidates, or glossary terms inside Born Into the Machine. The archive tracks that decision rather than hiding it.',
        imageId: 'study-008',
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
        imageId: 'study-009',
      },
      {
        key: 'parent-2',
        text: 'Each daily selection tests whether a speculative object can enter institutional catalogue rhythm—image first, metadata later, physical build only when the archive demands it.',
        imageId: 'study-010',
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
  'study-002',
  'study-003',
  'study-004',
  'study-005',
  'study-006',
  'study-007',
  'study-008',
  'bitm-writing',
] as const;

export const readymadesFeaturedNarratives = [] as const;

// Keep studyImage helper available for any future gallery wiring.
void studyImage;
