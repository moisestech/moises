export type ReadymadesKeyword = {
  term: string;
  label?: string;
  description?: string;
  imageUrl?: string;
};

export const readymadesKeywordLibrary: Record<string, ReadymadesKeyword> = {
  'post-AI readymade': {
    term: 'post-AI readymade',
    label: 'Studio method',
    description:
      'An object relation staged after the model: selected, vertical, archived, and sometimes built—often beginning as one IG Story.',
  },
  'sculptural plausibility engine': {
    term: 'sculptural plausibility engine',
    label: 'Method',
    description:
      'Image generation treated as a way to test whether an object feels believable enough to exist in a white cube, a hotel lobby, or a grant PDF.',
  },
  'object relation': {
    term: 'object relation',
    label: 'Starting point',
    description:
      'Not a prompt alone—a tension between two or more things: plug and body, POS and prayer, stroller and GPU.',
  },
  'IG Story': {
    term: 'IG Story',
    label: 'Public flash',
    description:
      'The first public appearance of a study: vertical, ephemeral, and fast—the object’s debut before the archive catches up.',
  },
  'Airtable archive': {
    term: 'Airtable archive',
    label: 'Private memory',
    description:
      'Where studies accumulate metadata, review status, missing labor, and build decisions before the website publishes a selection.',
  },
  'missing labor': {
    term: 'missing labor',
    label: 'Adaptation tax',
    description:
      'The unpaid work of learning, verifying, correcting, and translating machine output into something an institution might accept.',
  },
  'skipped object': {
    term: 'skipped object',
    label: 'Essay anchor',
    description:
      'When fabrication is bypassed because the image has already performed enough of the object’s cultural work.',
  },
  'white cube believability': {
    term: 'white cube believability',
    label: 'Display test',
    description:
      'Whether an image can pass as institutional documentation—catalogue, grant, museum wall—before the physical work exists.',
  },
  'Born Into the Machine': {
    term: 'Born Into the Machine',
    label: 'Parent project',
    description:
      'The long-form thesis on intelligence as infrastructure—grants, public programs, sculptural engines, and this daily studio method.',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1775099574/art/moisestech-website/research/broken-acceleration/broken-acceleration-writing-apr1st-wavemaker-2026_xrg993.png',
  },
  plausibility: {
    term: 'plausibility',
    label: 'Threshold',
    description: 'The moment an image feels raw enough, cheap enough, and believable enough to almost become real.',
  },
  readymade: {
    term: 'readymade',
    label: 'Art history',
    description:
      'Duchamp’s transfer of authority from making to selecting—here updated for models, feeds, and daily selection rituals.',
  },
  'attention economy': {
    term: 'attention economy',
    label: 'Object family',
    description: 'Devices and durational forms where the body stays in place while the feed keeps moving.',
  },
  'techno-spiritual': {
    term: 'techno-spiritual',
    label: 'Object family',
    description: 'Sacred iconography rewired through headsets, glow, and synthetic belief systems.',
  },
};

export const readymadesSectionHighlights: Record<string, (string | ReadymadesKeyword)[]> = {
  hero: ['post-AI readymade', 'IG Story', 'Born Into the Machine'],
  method: ['object relation', 'sculptural plausibility engine', 'white cube believability', 'plausibility'],
  ritual: ['IG Story', 'Airtable archive', 'missing labor'],
  skipped: ['skipped object', 'readymade', 'plausibility'],
  parent: ['Born Into the Machine', 'missing labor', 'attention economy'],
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function normalizeReadymadesHighlights(highlights: (string | ReadymadesKeyword)[]): ReadymadesKeyword[] {
  return highlights.map((item) => {
    if (typeof item === 'string') {
      const key = Object.keys(readymadesKeywordLibrary).find((k) => k.toLowerCase() === item.toLowerCase());
      return key ? readymadesKeywordLibrary[key] : { term: item };
    }
    return item.description
      ? item
      : (readymadesKeywordLibrary[item.term] ??
          readymadesKeywordLibrary[
            Object.keys(readymadesKeywordLibrary).find((k) => k.toLowerCase() === item.term.toLowerCase()) ?? ''
          ] ??
          item);
  });
}

export function resolveReadymadesKeyword(term: string): ReadymadesKeyword {
  const key = Object.keys(readymadesKeywordLibrary).find((k) => k.toLowerCase() === term.toLowerCase());
  return key ? readymadesKeywordLibrary[key] : { term };
}

export function splitTextByReadymadesHighlights(text: string, highlights: ReadymadesKeyword[]) {
  if (!highlights.length) return [{ text, keyword: null as ReadymadesKeyword | null }];

  const sorted = [...highlights].sort((a, b) => b.term.length - a.term.length);
  const pattern = new RegExp(`(${sorted.map((k) => escapeRegExp(k.term)).join('|')})`, 'gi');
  const segments = text.split(pattern).filter(Boolean);

  return segments.map((segment) => {
    const match = sorted.find((k) => segment.toLowerCase() === k.term.toLowerCase());
    return { text: segment, keyword: match ?? null };
  });
}
