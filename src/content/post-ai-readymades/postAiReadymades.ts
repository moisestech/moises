export type StudyStatus =
  | 'Daily Selection'
  | 'Website Candidate'
  | 'Physical Build Candidate'
  | 'Content Only'
  | 'Existing Work / Study Anchor'
  | 'Daily Selection Placeholder';

export type ImageObjectBalance =
  | 'Image does enough'
  | 'Object should be built'
  | 'Needs both'
  | 'Unclear';

export type Study = {
  id: string;
  number: string;
  title: string;
  /** ISO date `YYYY-MM-DD` when known; preferred over year for tombstone display. */
  date?: string;
  year?: string;
  parentProject: 'Born Into the Machine';
  series: '365 Post-AI Readymades';
  imageUrl: string;
  objectFamily?: string;
  primaryObjects?: string[];
  shortDescription?: string;
  medium?: string;
  dimensions?: string;
  materials?: string;
  location?: string;
  /** Longer catalogue / research note for exploring the work further. */
  researchNotes?: string;
  /** Freeform tags for later filtering (object family, theme, material, etc.). */
  researchTags?: string[];
  artworkSlug?: string;
  storyUrl?: string;
  status: StudyStatus;
  imageObjectBalance?: ImageObjectBalance;
  missingLaborType?: string[];
  rawnessSource?: string[];
};

/** Seed entry: image required; date + tombstone/research fields optional and fillable later. */
export type StudySeed = {
  imageUrl: string;
  date?: string;
  year?: string;
  title?: string;
  status?: StudyStatus;
  objectFamily?: string;
  primaryObjects?: string[];
  shortDescription?: string;
  medium?: string;
  dimensions?: string;
  materials?: string;
  location?: string;
  researchNotes?: string;
  researchTags?: string[];
  artworkSlug?: string;
  storyUrl?: string;
  imageObjectBalance?: ImageObjectBalance;
  missingLaborType?: string[];
  rawnessSource?: string[];
};

export type ObjectFamily = {
  id: string;
  title: string;
  description: string;
  studyCount: number;
};

/** Format ISO `YYYY-MM-DD` for tombstone display, e.g. `31 Jul 2026`. */
export function formatStudyDate(date: string): string {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/** Prefer precise date; fall back to year. */
export function studyTombstoneDate(study: Pick<Study, 'date' | 'year'>): string | undefined {
  if (study.date) return formatStudyDate(study.date);
  return study.year;
}

const STUDY_SEEDS: StudySeed[] = [
  // Batch 1 — early archive (precise dates TBD)
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824746/art/moisestech-website/research/post-ai-readymades/1070F0C0-1C3C-4E11-8D69-8997B91E7CED_qc2bta.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824745/art/moisestech-website/research/post-ai-readymades/0BE2D665-D24E-461B-B7F5-B1DABC28C714_b7uhvd.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824745/art/moisestech-website/research/post-ai-readymades/2461026D-E34E-4371-B472-C17088BEC5E4_he425j.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824744/art/moisestech-website/research/post-ai-readymades/FAEFE59B-4227-4F97-A16F-4B69B738C58A_zm5oti.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824743/art/moisestech-website/research/post-ai-readymades/06ACF6F0-59E6-4EB2-A1F3-DB9789607E2E_cqbd8q.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824742/art/moisestech-website/research/post-ai-readymades/BFBD2AC5-3BFA-49EC-9BD8-0A72495BDFAD_vsfwxg.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824742/art/moisestech-website/research/post-ai-readymades/87104727-787B-4000-AC18-D77BD253944F_kxn3ji.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824742/art/moisestech-website/research/post-ai-readymades/AE155651-EFB5-44F9-B46B-8D16AB56AC55_g1su6n.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824741/art/moisestech-website/research/post-ai-readymades/70207A04-7270-4BE2-8658-C9B6972004FF_xne6bp.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824739/art/moisestech-website/research/post-ai-readymades/C7FFD60D-C86C-4D36-AC66-81072E2F1C7E_m13dzl.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824738/art/moisestech-website/research/post-ai-readymades/A742ACF4-D4DD-43E9-B211-4CB44D431959_gdtgrj.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824738/art/moisestech-website/research/post-ai-readymades/F2C0E5F6-1793-4A09-A528-BCE2B7E6B391_vxijmx.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824738/art/moisestech-website/research/post-ai-readymades/562694C9-77F5-4DEB-B509-69BD1B349F48_xmwuxa.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824738/art/moisestech-website/research/post-ai-readymades/3DB76547-EEB5-4434-87D3-65A4B490798F_gmawjz.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824738/art/moisestech-website/research/post-ai-readymades/85F6D550-1584-4E61-95E6-C7B65437CDF2_fglnce.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824735/art/moisestech-website/research/post-ai-readymades/D4884857-5209-4051-946C-A06CF26FBBC2_cng7vy.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824734/art/moisestech-website/research/post-ai-readymades/B1C0A2C4-5829-4502-9BEC-77BB32F9B74F_rmwtni.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824734/art/moisestech-website/research/post-ai-readymades/46B07EB1-B8FC-45FC-99CB-33D67ADA5DB9_arpivs.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824734/art/moisestech-website/research/post-ai-readymades/E3DC55EE-B745-424D-9EDE-407693994EA4_yrn7lo.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824733/art/moisestech-website/research/post-ai-readymades/A08A37E3-F81E-41EA-9ED9-8296DE2F411E_jsgaif.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824731/art/moisestech-website/research/post-ai-readymades/7B5A23F4-6579-4E1E-A15E-497D0C3388A6_uybcmk.png' },
  { imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1783824730/art/moisestech-website/research/post-ai-readymades/ED43EA83-E4E7-4BCD-AFBB-A257F1A4B3D0_bampcz.png' },
  // Batch 2 — 31 Jul 2026
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524909/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_03_00_10_PM_fefab6.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524907/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_02_59_24_PM_z7l9l9.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524906/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_02_58_57_PM_zfvmze.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524905/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_02_58_50_PM_xq0rsr.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524903/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_03_00_16_PM_oyxk1g.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524902/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_02_58_27_PM_ra9101.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524901/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_02_59_06_PM_hp0dzf.png',
    date: '2026-07-31',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785524899/art/moisestech-website/research/post-ai-readymades/ChatGPT_Image_Jul_31_2026_02_58_44_PM_wpblgm.png',
    date: '2026-07-31',
  },
];

function makeStudy(index: number, seed: StudySeed): Study {
  const number = String(index + 1).padStart(3, '0');
  const yearFromDate = seed.date?.slice(0, 4);
  return {
    id: number,
    number,
    title: seed.title ?? `Study ${number}`,
    date: seed.date,
    year: seed.year ?? yearFromDate ?? '2026',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    imageUrl: seed.imageUrl,
    status: seed.status ?? 'Daily Selection',
    objectFamily: seed.objectFamily,
    primaryObjects: seed.primaryObjects,
    shortDescription: seed.shortDescription,
    medium: seed.medium,
    dimensions: seed.dimensions,
    materials: seed.materials,
    location: seed.location,
    researchNotes: seed.researchNotes,
    researchTags: seed.researchTags,
    artworkSlug: seed.artworkSlug,
    storyUrl: seed.storyUrl,
    imageObjectBalance: seed.imageObjectBalance,
    missingLaborType: seed.missingLaborType,
    rawnessSource: seed.rawnessSource,
  };
}

export const postAiReadymadesPage = {
  parentLabel: 'Born Into the Machine',
  title: '365 Post-AI Readymades',
  subtitle: 'A symbolic daily archive of speculative sculptures, institutional images, and skipped objects.',
  subtitleSharp:
    'One IG Story at a time, the object becomes believable before it becomes physical.',
  status: 'Daily archive · in development',
  year: 2026,
  heroStatement:
    '365 Post-AI Readymades is the studio method of Born Into the Machine: a symbolic archive of daily selections where speculative objects move between image, IG Story, institutional display, missing labor, and possible sculpture.',
  catalogueAnswers: [
    {
      question: 'What is this?',
      answer:
        'A symbolic 365-entry archive of post-AI readymade studies—vertical artifacts between image, Story, and possible sculpture.',
    },
    {
      question: 'How does it work?',
      answer: 'One selected vertical image / IG Story becomes an official archive entry each day.',
    },
    {
      question: 'Why does it matter?',
      answer:
        'Sculpture, labor, institution, image, feed, and plausibility collapse into one compressed public artifact.',
    },
  ],
  projectStatement: [
    '365 Post-AI Readymades treats image generation as a sculptural plausibility engine. Each study begins as an object relation, passes through a feedback loop of taste, machine vision, budget, and white cube believability, and becomes a vertical image that may be posted, archived, built, or left suspended.',
    'The physical object is not erased. It is delayed, simulated, compressed, or made unnecessary for a moment. The archive tracks that threshold: when an image feels raw enough, cheap enough, and believable enough to almost become real.',
  ],
  ritualLine: 'Instagram is the flash. Airtable is the archive. The website is the public memory.',
  ritualSteps: [
    'Inspiration',
    'Object Relation',
    'Plausibility Image',
    'IG Story',
    'Airtable Archive',
    '60-Day Review',
    'Website / E-book / Physical Work',
  ],
  skippedObject: {
    title: 'The Skipped Object',
    body: [
      'Traditionally, a sculpture moves from idea to sketch to fabrication to installation to documentation. In 365 Post-AI Readymades, that sequence collapses. The object appears first as plausible documentation, often before it exists.',
      'The question is not whether the object is fake. The question is whether the image has already performed enough of the object’s cultural work.',
    ],
  },
  review: {
    title: 'First 60-Day Review',
    intro:
      'After sixty selected studies, the archive will be reviewed for website candidates, physical build candidates, content-only works, book/glossary terms, object families, and recurring materials.',
    entriesArchived: 30,
    totalEntries: 365,
    firstReviewAt: 60,
    websitePrototypeTarget: '12–20 selected studies',
    buckets: [
      'content-only',
      'website candidate',
      'physical build candidate',
      'book/glossary candidate',
      'weak but useful',
    ],
  },
  parentConnection: {
    body: [
      'Born Into the Machine is the parent thesis. 365 Post-AI Readymades is the studio method.',
      'The project asks how taste, labor, identity, and sculpture change when the artist is already working inside the machine: inside the model, the feed, the archive, the white cube image, and the systems that decide what feels real.',
    ],
    backHref: '/research/born-into-the-machine',
    backLabel: 'Back to Born Into the Machine',
  },
} as const;

export const postAiReadymadesStudies: Study[] = STUDY_SEEDS.map((seed, index) =>
  makeStudy(index, seed),
);

export const postAiReadymadesObjectFamilies: ObjectFamily[] = [
  {
    id: 'screens-as-bodies',
    title: 'Screens as Bodies',
    description: 'Displays treated as limbs, faces, and organs of a distributed body.',
    studyCount: 0,
  },
  {
    id: 'payment-transaction',
    title: 'Payment / Transaction Objects',
    description: 'Terminals, receipts, and checkout hardware as devotional or punitive forms.',
    studyCount: 0,
  },
  {
    id: 'cheap-support',
    title: 'Cheap Support Structures',
    description: 'Tripods, crates, strips, and improvised infrastructure that hold everything else up.',
    studyCount: 0,
  },
  {
    id: 'techno-spiritual',
    title: 'Techno-Spiritual Objects',
    description: 'Sacred iconography rewired through headsets, glow, and synthetic belief.',
    studyCount: 0,
  },
  {
    id: 'delivery-logistics',
    title: 'Delivery / Logistics Bodies',
    description: 'Packages, routes, and last-mile objects as sculptural carriers of labor.',
    studyCount: 0,
  },
  {
    id: 'domestic-exhaustion',
    title: 'Domestic Exhaustion Machines',
    description: 'Household devices staged as engines of unpaid maintenance and fatigue.',
    studyCount: 0,
  },
  {
    id: 'medical-training',
    title: 'Medical / Training Bodies',
    description: 'Mannequins, trainers, and care proxies that rehearse the body under systems.',
    studyCount: 0,
  },
  {
    id: 'attention-economy',
    title: 'Attention Economy Devices',
    description: 'Feeds, scrolls, and capture rigs that monetize looking and staying.',
    studyCount: 0,
  },
  {
    id: 'ai-childhood',
    title: 'AI Childhood / Birth / Care',
    description: 'Strollers, cradles, and infancy metaphors for synthetic growth.',
    studyCount: 0,
  },
  {
    id: 'migrant-memory',
    title: 'Migrant / Material Memory',
    description: 'Currency, craft, and displacement materials folded into sculptural memory.',
    studyCount: 0,
  },
  {
    id: 'corporate-surveillance',
    title: 'Corporate Anonymity / Surveillance',
    description: 'Masks, routers, and privacy products staged as luxury defenses.',
    studyCount: 0,
  },
  {
    id: 'unbuilt-infrastructure',
    title: 'Unbuilt Infrastructure',
    description: 'Speculative civic and technical forms that exist first as plausible images.',
    studyCount: 0,
  },
];

export const postAiReadymadesSeo = {
  title: 'Born Into the Machine: 365 Post-AI Readymades — Moises Sanabria',
  description:
    'A symbolic daily archive of speculative sculptures, institutional images, and skipped objects. One IG Story at a time, the object becomes believable before it becomes physical.',
  ogImageAlt: '365 Post-AI Readymades — vertical study archive for Born Into the Machine',
} as const;
