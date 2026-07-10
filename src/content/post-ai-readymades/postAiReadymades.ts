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
  year: string;
  parentProject: 'Born Into the Machine';
  series: '365 Post-AI Readymades';
  objectFamily: string;
  primaryObjects: string[];
  shortDescription: string;
  imageUrl?: string;
  artworkSlug?: string;
  storyUrl?: string;
  status: StudyStatus;
  imageObjectBalance: ImageObjectBalance;
  missingLaborType: string[];
  rawnessSource: string[];
};

export type ObjectFamily = {
  id: string;
  title: string;
  description: string;
  studyCount: number;
};

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
    entriesArchived: 1,
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

export const postAiReadymadesStudies: Study[] = [
  {
    id: '001',
    number: '001',
    title: 'Power Strip Pietà',
    year: '2026',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Cheap Support Structures',
    primaryObjects: ['power strip', 'extension cords', 'devotional gesture'],
    shortDescription: 'A devotional circuit of plugs, bodies, and dependency.',
    status: 'Daily Selection',
    imageObjectBalance: 'Needs both',
    missingLaborType: ['fabrication', 'electrical staging'],
    rawnessSource: ['consumer hardware', 'domestic overload'],
  },
  {
    id: '002',
    number: '002',
    title: 'POS Prayer Hands',
    year: '2026',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Payment / Transaction Objects',
    primaryObjects: ['POS terminal', 'prayer hands', 'receipt paper'],
    shortDescription: 'A transaction device becomes a devotional gesture.',
    status: 'Website Candidate',
    imageObjectBalance: 'Image does enough',
    missingLaborType: ['transaction staging', 'retail display'],
    rawnessSource: ['payment hardware', 'service labor'],
  },
  {
    id: '003',
    number: '003',
    title: 'Doomscrolling Treadmill',
    year: '2024',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Attention Economy Devices',
    primaryObjects: ['treadmill', 'vertical screens', 'feed'],
    shortDescription: 'A body walks in place while the feed keeps moving.',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
    artworkSlug: 'doomscrolling_treadmill',
    status: 'Existing Work / Study Anchor',
    imageObjectBalance: 'Object should be built',
    missingLaborType: ['durational performance', 'platform capture'],
    rawnessSource: ['existing sculpture', 'feed culture'],
  },
  {
    id: '004',
    number: '004',
    title: 'Simulation Faith',
    year: '2025',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Techno-Spiritual Objects',
    primaryObjects: ['infant figure', 'VR headset', 'suspension rig'],
    shortDescription: 'A sacred child enters the headset of synthetic belief.',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
    artworkSlug: 'simulation_faith',
    status: 'Existing Work / Study Anchor',
    imageObjectBalance: 'Object should be built',
    missingLaborType: ['icon fabrication', 'belief staging'],
    rawnessSource: ['existing sculpture', 'synthetic devotion'],
  },
  {
    id: '005',
    number: '005',
    title: 'Baby AGI',
    year: '2023',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'AI Childhood / Birth / Care',
    primaryObjects: ['gaming PC', 'stroller', 'robotic hands'],
    shortDescription: 'A gaming PC becomes a stroller for artificial infancy.',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
    artworkSlug: 'baby_agi',
    status: 'Existing Work / Study Anchor',
    imageObjectBalance: 'Object should be built',
    missingLaborType: ['ready-made assembly', 'care staging'],
    rawnessSource: ['existing sculpture', 'AGI discourse'],
  },
  {
    id: '006',
    number: '006',
    title: 'Privacy is a Luxury',
    year: '2025',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Corporate Anonymity / Surveillance',
    primaryObjects: ['Guy Fawkes mask', 'POS terminal', 'Wi-Fi routers'],
    shortDescription: 'Anonymity, payment, and network hardware become a luxury mask.',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
    artworkSlug: 'privacy_is_a_luxury',
    status: 'Existing Work / Study Anchor',
    imageObjectBalance: 'Object should be built',
    missingLaborType: ['surveillance staging', 'subscription labor'],
    rawnessSource: ['existing sculpture', 'VPN culture'],
  },
  {
    id: '007',
    number: '007',
    title: 'Price of Existence',
    year: '2024',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Migrant / Material Memory',
    primaryObjects: ['skeleton', 'collapsed currency', 'pedestal'],
    shortDescription: 'A skeleton wrapped in collapsed currency becomes an index of value decay.',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg',
    artworkSlug: 'price_of_existence',
    status: 'Existing Work / Study Anchor',
    imageObjectBalance: 'Object should be built',
    missingLaborType: ['currency wrapping', 'memorial labor'],
    rawnessSource: ['existing sculpture', 'inflation memory'],
  },
  {
    id: '008',
    number: '008',
    title: 'Tripod LLM Body',
    year: '2026',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Cheap Support Structures',
    primaryObjects: ['tripod', 'camera rig', 'limb-like extension'],
    shortDescription: 'A support structure begins to resemble a thinking body.',
    status: 'Daily Selection Placeholder',
    imageObjectBalance: 'Unclear',
    missingLaborType: ['support fabrication', 'pose staging'],
    rawnessSource: ['production hardware', 'model posture'],
  },
  {
    id: '009',
    number: '009',
    title: 'Milk Crate Machine',
    year: '2026',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Cheap Support Structures',
    primaryObjects: ['milk crates', 'zip ties', 'improvised stack'],
    shortDescription: 'Improvised support becomes sculptural infrastructure.',
    status: 'Daily Selection Placeholder',
    imageObjectBalance: 'Needs both',
    missingLaborType: ['improvised assembly', 'load-bearing staging'],
    rawnessSource: ['urban salvage', 'studio improvisation'],
  },
  {
    id: '010',
    number: '010',
    title: 'Cable Chinchorro',
    year: '2026',
    parentProject: 'Born Into the Machine',
    series: '365 Post-AI Readymades',
    objectFamily: 'Migrant / Material Memory',
    primaryObjects: ['hammock', 'ethernet cables', 'rest surface'],
    shortDescription: 'Diaspora rest is rewoven through network dependency.',
    status: 'Daily Selection Placeholder',
    imageObjectBalance: 'Image does enough',
    missingLaborType: ['weaving labor', 'network entanglement'],
    rawnessSource: ['diaspora craft', 'connectivity fatigue'],
  },
];

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
    studyCount: 1,
  },
  {
    id: 'cheap-support',
    title: 'Cheap Support Structures',
    description: 'Tripods, crates, strips, and improvised infrastructure that hold everything else up.',
    studyCount: 3,
  },
  {
    id: 'techno-spiritual',
    title: 'Techno-Spiritual Objects',
    description: 'Sacred iconography rewired through headsets, glow, and synthetic belief.',
    studyCount: 1,
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
    studyCount: 1,
  },
  {
    id: 'ai-childhood',
    title: 'AI Childhood / Birth / Care',
    description: 'Strollers, cradles, and infancy metaphors for synthetic growth.',
    studyCount: 1,
  },
  {
    id: 'migrant-memory',
    title: 'Migrant / Material Memory',
    description: 'Currency, craft, and displacement materials folded into sculptural memory.',
    studyCount: 2,
  },
  {
    id: 'corporate-surveillance',
    title: 'Corporate Anonymity / Surveillance',
    description: 'Masks, routers, and privacy products staged as luxury defenses.',
    studyCount: 1,
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
