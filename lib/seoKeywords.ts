// Master list of mid-tail SEO keywords for Moises Sanabria's site
// Update quarterly as trends shift

const rawKeywords = [
  'brain rot meme',
  'brain rot content',
  'doom scrolling art',
  'technoromanticism',
  'memetics art',
  'ai sculpture',
  'ai sculpting',
  'creative ai',
  'synthetic media',
  'virtual reality hug art',
  'the art of doom scrolling',
  'moises sanabria artist',
  'miami artist',
  'contemporary art miami',
  'google gradients',
  'bolivares skeleton art',
  'materializing new media',
  'material internet',
  'machine philosophy',
  'moises machine philosophy',
  'the art of memetics',
  'gan art',
  'brain rot sculpture',
  'low‑effort contemporary art',
];

// Deduplicate, lower-case, and trim
const uniqueKeywords = Array.from(new Set(rawKeywords.map(k => k.toLowerCase().trim())));

// Alphabetical sort
export const seoKeywordsAlpha = [...uniqueKeywords].sort();

// Sort by phrase length (shortest to longest)
export const seoKeywordsByLength = [...uniqueKeywords].sort((a, b) => a.length - b.length); 