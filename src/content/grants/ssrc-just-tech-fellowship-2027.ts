import type { WorkMediaItem } from '@/components/page/WorkImageCarousel';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import {
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';

export type SsrcImageRole = 'banner' | 'gallery' | 'engine-study' | 'logo';

export type SsrcImage = {
  src: string;
  expectedPath: string;
  isPlaceholder: boolean;
  alt: string;
  caption: string;
  role: SsrcImageRole;
};

export type SsrcEngineChapter = {
  id: string;
  title: string;
  focus: string;
  body: string;
  politicalQuestions: string[];
  studyImage: SsrcImage;
};

export type SsrcWorkSample = {
  id: string;
  title: string;
  type: 'artwork' | 'infrastructure';
  medium: string;
  description: string;
  relevance: string;
  slug?: string;
  href?: string;
  images: readonly WorkMediaItem[];
};

export type SsrcTimelineQuarter = {
  quarter: string;
  focus: string;
  outputs: string[];
};

export type SsrcPracticeWork = {
  slug: string;
  title: string;
  note: string;
  href?: string;
};

export type SsrcPracticeCategory = {
  id: string;
  title: string;
  works: SsrcPracticeWork[];
};

export type SsrcInfrastructureCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  logoSrc: string | null;
  logoAlt: string;
  logoExpectedPath: string;
};

export type SsrcApplicationMaterial = {
  label: string;
  status: 'Ready' | 'Drafting' | 'Needs edit' | 'Select' | 'Needs recording' | 'Needs gathering';
  notes: string;
};

export type SsrcOriginalConcept = {
  id: string;
  name: string;
  shortDefinition: string;
  relatedEngineId: string;
  originality: 'Original' | 'Adapted' | 'In conversation with';
  appearsIn: string;
};

export type SsrcFieldReference = {
  id: string;
  title: string;
  author: string;
  relevance: string;
  theme: string;
  href?: string;
};

export type SsrcArchiveLink = {
  label: string;
  href: string;
  description: string;
  status: 'live' | 'coming-soon';
};

export const ssrcJustTechMeta = {
  fellowshipLabel: 'SSRC Just Tech Fellowship 2027',
  projectTitle: 'Born into the Machine',
  subtitle: 'Art, Labor, and Human Agency After Intelligence Becomes Infrastructure',
  applicant: 'Moises Sanabria',
  route: '/grant/ssrc-just-tech-fellowship-2027',
  deadline: 'June 28, 2026 at 11:59 p.m. EST',
  fellowshipPeriod: 'January–December 2027',
  status: 'Drafting',
  format: 'Sculpture, writing, video, archive, public talks',
  centralQuestion: 'What happens to human value when intelligence becomes infrastructure?',
  heroIntro:
    'A proposed Just Tech Fellowship project exploring what happens to labor, value, attention, authorship, and political agency when intelligence becomes cheap, automated, and embedded into everyday systems.',
  /** Set when video is recorded; embed hidden until then */
  youtubeVideoId: null as string | null,
  /** Full share URL for copy-link button */
  shareUrl: 'https://www.youtube.com/watch?v=PLACEHOLDER',
  portraitUrl: moisesSanabriaHeadshot,
  social: {
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    instagram: 'https://www.instagram.com/moisesdsanabria/',
    bio: '/bio',
    bioLabel: 'Bio',
  },
} as const;

/** Upload logos to these paths before launch (or swap to Cloudinary URLs in content) */
export const ssrcLogoAssets = {
  ssrcJustTech: {
    expectedPath: '/grant/ssrc-just-tech-fellowship-2027/logos/ssrc-just-tech.svg',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1782125045/grants/ssrc-just-tech/ssrc-logo-horizontal_qx1dof.png',
    alt: 'SSRC Just Tech Fellowship',
  },
  oolite: {
    expectedPath: '/grant/ssrc-just-tech-fellowship-2027/logos/oolite-digital-lab.svg',
    alt: 'Oolite Digital Lab',
  },
  dcc: {
    expectedPath: '/grant/ssrc-just-tech-fellowship-2027/logos/dcc-miami.svg',
    alt: 'DCC.Miami',
  },
  infra24: {
    expectedPath: '/grant/ssrc-just-tech-fellowship-2027/logos/infra24.svg',
    alt: 'Infra24',
  },
} as const;

export type SsrcMajorZoneIcon =
  | 'sparkles'
  | 'lightbulb'
  | 'layers'
  | 'globe'
  | 'library'
  | 'gallery'
  | 'clipboard';

export type SsrcMajorZone = {
  id: string;
  number: string;
  label: string;
  summary: string;
  icon: SsrcMajorZoneIcon;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
};

export const ssrcMajorZones: readonly SsrcMajorZone[] = [
  {
    id: 'opening',
    number: '01',
    label: 'Opening',
    summary: 'The project in 90 seconds.',
    icon: 'sparkles',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
      alt: 'Baby AGI — sculptural installation.',
      caption: 'Baby AGI (2023) — Born into the Machine.',
    },
  },
  {
    id: 'thesis',
    number: '02',
    label: 'Thesis',
    summary: 'Central claims and research questions.',
    icon: 'lightbulb',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
      alt: 'Smart Shoppers — sculpture examining consumer systems and value.',
      caption: 'Smart Shoppers (2024) — value under networked commerce.',
    },
  },
  {
    id: 'engines',
    number: '03',
    label: 'Engines',
    summary: 'Five sculptural research chapters.',
    icon: 'layers',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
      alt: 'Touch Grass / Doomscrolling Treadmill — durational installation on attention.',
      caption: 'Doomscrolling Treadmill (2024) — attention as infrastructure.',
    },
  },
  {
    id: 'public',
    number: '04',
    label: 'Public',
    summary: 'Culture, archive, and civic contribution.',
    icon: 'globe',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      alt: 'Digital Divinities at Bakehouse open studios — public program.',
      caption: 'Digital Divinities — public culture and collective ritual.',
    },
  },
  {
    id: 'field',
    number: '05',
    label: 'Field',
    summary: 'Original concepts and selected references.',
    icon: 'library',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
      alt: 'Born into the Machine research — broken acceleration diagram.',
      caption: 'Research dossier — concepts in formation.',
    },
  },
  {
    id: 'evidence',
    number: '06',
    label: 'Evidence',
    summary: 'Work samples and practice context.',
    icon: 'gallery',
    image: {
      src: OOLITE_DIGITAL_LAB_IMAGE,
      alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      caption: 'Oolite Digital Lab — public technology infrastructure.',
    },
  },
  {
    id: 'application',
    number: '07',
    label: 'Application',
    summary: 'Timeline, materials, and contact.',
    icon: 'clipboard',
    image: {
      src: moisesSanabriaHeadshot,
      alt: 'Moises Sanabria — applicant portrait.',
      caption: 'Moises Sanabria — Miami-based interdisciplinary artist.',
    },
  },
] as const;

/** @deprecated Use ssrcMajorZones for navigation */
export const ssrcNavItems = ssrcMajorZones.map((z) => ({ id: z.id, label: z.label }));

export const ssrcThesisPullQuote =
  'When intelligence becomes infrastructure, labor, authorship, attention, and political agency are reorganized.';

export const ssrcReviewerHook = {
  label: 'Project summary',
  text: 'Born into the Machine examines what happens to labor, value, and human agency when intelligence becomes infrastructure. As AI systems make cognitive tasks cheap, fast, and widely available, human value shifts away from simply knowing, producing, or solving and toward judgment, context, embodiment, trust, responsibility, and political agency. Through sculptural engines, public writing, video, and a digital artist-book archive, the project translates debates about AI safety, algorithmic justice, labor, consent, and attention into cultural forms people can see, feel, and discuss. The project argues that AI is not only a technological system; it is becoming a social environment. Before intelligent systems become invisible infrastructure, culture can help people name what is changing, imagine what should be protected, and demand more accountable technological futures.',
} as const;

/**
 * Phase 1 content sync: manual copy from Airtable base "Born into the Machine OS".
 * Tables: Original Concepts, Sculptural Engines, Sources, Quote Bank, Assets, Application Materials.
 */

export const ssrcOriginalConcepts: SsrcOriginalConcept[] = [
  {
    id: 'intelligence-infrastructure',
    name: 'Intelligence becomes infrastructure',
    shortDefinition:
      'AI becomes embedded into everyday platforms, institutions, devices, and workflows — not a tool beside life, but an environment within it.',
    relatedEngineId: 'intelligence-commodity',
    originality: 'Original',
    appearsIn: 'Central thesis, grant proposal, book introduction',
  },
  {
    id: 'sculptural-engines',
    name: 'Sculptural engines',
    shortDefinition:
      'Physical artworks that model how technological systems act on bodies, labor, attention, and public imagination.',
    relatedEngineId: 'intelligence-commodity',
    originality: 'Original',
    appearsIn: 'Artistic method across all five engines',
  },
  {
    id: 'adaptation-tax',
    name: 'The Adaptation Tax',
    shortDefinition:
      'The unpaid or under-recognized labor people perform to learn, verify, translate, and keep up with AI systems.',
    relatedEngineId: 'adaptation-tax',
    originality: 'Original',
    appearsIn: 'Engine chapter 02, personal statement, field notes',
  },
  {
    id: 'attention-engine-concept',
    name: 'The Attention Engine',
    shortDefinition:
      'Platforms and AI systems that capture, redirect, and monetize human attention as economic and political force.',
    relatedEngineId: 'attention-engine',
    originality: 'Original',
    appearsIn: 'Engine chapter 03, prior works (Doomscrolling Treadmill)',
  },
  {
    id: 'agency-gap',
    name: 'The Agency Gap',
    shortDefinition:
      'The distance between AI convenience and meaningful human control, consent, and responsibility.',
    relatedEngineId: 'agency-gap',
    originality: 'Original',
    appearsIn: 'Engine chapter 04, public contribution',
  },
  {
    id: 'right-to-refusal',
    name: 'The Human Right to Refusal',
    shortDefinition:
      'What people should be able to opt out of when automated systems process, score, rank, or act on their behalf.',
    relatedEngineId: 'right-to-refusal',
    originality: 'Original',
    appearsIn: 'Engine chapter 05, field context (algorithmic justice)',
  },
];

export const ssrcFieldContext = {
  title: 'In conversation with',
  intro:
    'Born into the Machine is in conversation with artists, researchers, and public-interest technology organizations examining AI power, labor, attention, consent, and public life. Selected references below situate the project; the full bibliography lives in the research archive.',
  bibliographyTeaser: 'Full bibliography and quote bank — research archive (in development)',
} as const;

export const ssrcFieldReferences: SsrcFieldReference[] = [
  {
    id: 'ajl',
    title: 'Algorithmic Justice League',
    author: 'Joy Buolamwini / AJL',
    relevance: 'AI harms, bias, public awareness — art and research combined',
    theme: 'Algorithmic justice',
    href: 'https://www.ajl.org/',
  },
  {
    id: 'ai-now',
    title: 'AI Now Institute',
    author: 'AI Now',
    relevance: 'AI as concentrated power; accountability and governance',
    theme: 'AI power / accountability',
    href: 'https://ainowinstitute.org/',
  },
  {
    id: 'data-society',
    title: 'Data & Society',
    author: 'Data & Society Research Institute',
    relevance: 'Social implications of data-centric technologies and automation',
    theme: 'Tech and society',
    href: 'https://datasociety.net/',
  },
  {
    id: 'benjamin',
    title: 'Race After Technology',
    author: 'Ruha Benjamin',
    relevance: 'Race, imagination, and technology as social system',
    theme: 'Race / imagination / justice',
  },
  {
    id: 'noble',
    title: 'Algorithms of Oppression',
    author: 'Safiya Umoja Noble',
    relevance: 'Search, algorithms, race, and structural power',
    theme: 'Search / algorithms / power',
  },
  {
    id: 'mccarthy',
    title: 'LAUREN / LAURENOS',
    author: 'Lauren Lee McCarthy',
    relevance: 'Automation, surveillance, and algorithmic living',
    theme: 'Automation / surveillance',
    href: 'https://lauren-mccarthy.com/',
  },
  {
    id: 'steyerl',
    title: 'Duty Free Art / image politics',
    author: 'Hito Steyerl',
    relevance: 'Images, power, technology, and circulation',
    theme: 'Images / power / technology',
  },
  {
    id: 'kinder',
    title: 'AI labor transition research',
    author: 'Molly Kinder',
    relevance: 'AI labor disruption, adaptation, and policy',
    theme: 'AI labor / policy',
  },
];

export const ssrcBornIntoMachineArchive = {
  title: 'Born into the Machine archive',
  intro:
    'This grant page is part of a larger research and artist-book structure for Born into the Machine. The project archive gathers original concepts, sculptural engines, field notes, references, quotes, and artworks that will support future essays, exhibitions, talks, and a book-length project.',
  links: [
    {
      label: 'View book archive',
      href: '/research/born-into-the-machine',
      description: 'Living artist-book research hub and chapter drafts.',
      status: 'live',
    },
    {
      label: 'Bibliography',
      href: '/research/born-into-the-machine/bibliography',
      description: 'Sources, citations, and field context.',
      status: 'coming-soon',
    },
    {
      label: 'Sculptural engines',
      href: '/research/born-into-the-machine/sculptural-engines',
      description: 'Five research chapters as material arguments.',
      status: 'coming-soon',
    },
    {
      label: 'Quote bank',
      href: '/research/born-into-the-machine/quote-bank',
      description: 'Verified quotes, paraphrases, and reflections.',
      status: 'coming-soon',
    },
  ] satisfies SsrcArchiveLink[],
} as const;

export const ssrcHeroCtas = [
  { label: 'Read thesis', target: 'thesis' },
  { label: 'View engines', target: 'engines' },
  { label: 'Watch video', target: 'opening' },
  { label: 'Work samples', target: 'evidence' },
] as const;

export const ssrcThesis = {
  paragraphs: [
    'Born into the Machine examines how human labor, value, and agency change when intelligence becomes a commodity embedded in everyday systems. Through sculptural engines, public writing, video, and a digital artist-book archive, the project turns debates about AI safety, algorithmic justice, labor, attention, and consent into cultural forms that people can see, feel, and discuss.',
    'AI is not only a technological system. It is becoming a social environment. Before AI becomes policy, law, workplace infrastructure, or public administration, it becomes culture. People first encounter AI through chatbots, images, productivity tools, feeds, memes, classrooms, workplaces, customer service systems, art, fear, hype, and everyday interfaces.',
    'Born into the Machine argues that culture is where society learns what to accept, what to question, and what to regulate. If intelligence becomes abundant, automated, and platform-owned, then the central social question shifts from “Who is intelligent?” to “Who has agency, authorship, dignity, control, and rights inside intelligent systems?”',
  ],
  cultureToLaw: [
    'Culture gives people metaphors.',
    'Metaphors shape public understanding.',
    'Public understanding creates pressure.',
    'Pressure shapes institutions.',
    'Institutions shape policy and law.',
    'Law shapes what machines are allowed to do.',
  ],
} as const;

export const ssrcWhyNow = {
  intro:
    'AI is often described through the language of speed, productivity, creativity, and efficiency. But this language hides deeper social changes.',
  shifts: [
    'AI changes what counts as labor.',
    'AI changes who gets credit.',
    'AI changes how people prove value.',
    'AI changes how attention is captured.',
    'AI changes what institutions expect workers to adapt to.',
    'AI changes what artists, educators, and cultural workers are asked to explain.',
    'AI changes how power moves through interfaces, platforms, and automated decisions.',
  ],
  closing:
    'The question is not only whether AI can produce images, text, code, or decisions. The question is what happens to people when these abilities become normalized as infrastructure. This project uses art to make that shift visible.',
} as const;

export const ssrcProjectOverview = {
  summary:
    'Born into the Machine is an artist-led research and creative practice project examining how human labor, value, and agency change when intelligence becomes a commodity embedded into everyday systems.',
  detail:
    'As AI systems make cognitive tasks cheap, fast, and widely available, the value of human work shifts away from simply knowing, producing, or solving and toward judgment, context, embodiment, trust, responsibility, and political agency. Through sculptural engines, public writing, video, performance, and a digital artist-book archive, the project turns debates about AI safety, algorithmic justice, labor, attention, and consent into cultural forms that people can see, feel, and discuss.',
} as const;

export const ssrcResearchQuestions = [
  'What happens to labor when intelligence becomes cheap, automated, and widely accessible?',
  'If machines can generate cognitive output, what becomes valuable about human work?',
  'Who controls the infrastructures that distribute automated intelligence?',
  'How do AI systems change attention, authorship, trust, identity, and political agency?',
  'What forms of judgment should not be automated?',
  'Who benefits when intelligence becomes infrastructure? Who absorbs the cost of adapting to new systems?',
  'How can culture help people understand and contest AI before it becomes invisible infrastructure?',
  'What laws, rights, and public expectations become necessary when people are born into intelligent systems they did not choose?',
] as const;

export const ssrcSculpturalEnginesIntro = {
  title: 'Sculptural engines',
  paragraphs: [
    'The primary artistic output of Born into the Machine will be a series of sculptural engines: physical works that model how AI and digital systems act on the body, attention, labor, and public imagination.',
    'These works are not illustrations of technology. They are material arguments. They use familiar objects — screens, phones, laptops, chairs, projectors, receipts, office furniture, fitness equipment, clinical devices, domestic technologies, and digital fabrication — to make invisible systems physically encounterable.',
    'The goal is to make AI’s social effects visible without relying on science-fiction imagery. The work should feel materially plausible, public, and close to daily life.',
  ],
} as const;

const engineStudyPlaceholder = (id: string, title: string): SsrcImage => ({
  expectedPath: `/grant/ssrc-just-tech-fellowship-2027/sculptural-engines/${id}-study.jpg`,
  isPlaceholder: true,
  src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
  alt: `${title} — proposed sculptural direction.`,
  caption: 'Proposed sculptural direction / image study, 2026.',
  role: 'engine-study',
});

export const ssrcEngineChapters: SsrcEngineChapter[] = [
  {
    id: 'intelligence-commodity',
    title: 'The Intelligence Commodity',
    focus: 'Intelligence as subscription, platform, and product.',
    body: 'AI can now write, summarize, translate, code, compose, design, analyze, and generate. These capacities were once tied to expertise, training, and individual intelligence. Now they are increasingly delivered through platforms. The question becomes: if intelligence is no longer rare, what becomes valuable?',
    politicalQuestions: [
      'Who owns intelligence?',
      'Who profits from automated cognition?',
      'What happens to workers whose value was tied to knowledge?',
    ],
    studyImage: engineStudyPlaceholder('intelligence-commodity', 'The Intelligence Commodity'),
  },
  {
    id: 'adaptation-tax',
    title: 'The Adaptation Tax',
    focus: 'Hidden labor of learning, verifying, and translating AI systems.',
    body: 'The adaptation tax includes learning new tools, rebuilding workflows, verifying machine output, correcting hallucinations, translating systems for others, managing anxiety, defending human value, and proving that one’s work still matters. My own position as artist, engineer, educator, and cultural worker becomes a lens — not autobiography alone, but a vantage point into a broader social condition.',
    politicalQuestions: [
      'Who pays for retraining?',
      'Who absorbs technological disruption?',
      'What protections exist for workers forced to adapt?',
    ],
    studyImage: engineStudyPlaceholder('adaptation-tax', 'The Adaptation Tax'),
  },
  {
    id: 'attention-engine',
    title: 'The Attention Engine',
    focus: 'Platforms, feeds, AI assistants, and capture.',
    body: 'Attention is not only psychological. It is economic, political, and bodily. The feed, the chatbot, the notification, the dashboard, and the assistant all compete to shape what we notice, desire, ignore, and repeat.',
    politicalQuestions: [
      'Should attention capture be regulated?',
      'What rights do people have against manipulative interfaces?',
      'How does attention become labor?',
    ],
    studyImage: engineStudyPlaceholder('attention-engine', 'The Attention Engine'),
  },
  {
    id: 'agency-gap',
    title: 'The Agency Gap',
    focus: 'Systems acting without full human control.',
    body: 'AI assistants, recommendation systems, automated forms, smart devices, and predictive systems create a gap between convenience and agency. They promise to help, but they also decide, rank, suggest, filter, and act. The question becomes: who is responsible when intelligent systems act, and what does consent mean when systems are invisible?',
    politicalQuestions: [
      'Who is responsible when AI acts?',
      'What does consent mean with invisible systems?',
      'What should remain human-led?',
    ],
    studyImage: engineStudyPlaceholder('agency-gap', 'The Agency Gap'),
  },
  {
    id: 'right-to-refusal',
    title: 'The Human Right to Refusal',
    focus: 'Consent, opt-out, dignity, and rights.',
    body: 'Do workers have a right to refuse AI surveillance? Do artists have a right to refuse extraction of their work? Do communities have a right to know when AI systems are shaping decisions? Do people have a right to not be processed, scored, ranked, or predicted?',
    politicalQuestions: [
      'Do people have a right to not be processed by AI?',
      'Can artists refuse extraction of their work?',
      'What does meaningful consent look like?',
    ],
    studyImage: engineStudyPlaceholder('right-to-refusal', 'The Human Right to Refusal'),
  },
];

export const ssrcLaborAgency = {
  intro: 'In a world where machines can produce cognitive output, what human capacities become more politically valuable?',
  oldLaborValue: [
    'Intelligence',
    'Expertise',
    'Execution',
    'Speed',
    'Production',
    'Technical skill',
    'Information access',
  ],
  newLaborValue: [
    'Judgment',
    'Discernment',
    'Taste',
    'Accountability',
    'Context',
    'Trust',
    'Ethics',
    'Embodiment',
    'Relation',
    'Care',
    'Refusal',
    'Governance',
    'Interpretation',
    'Public meaning',
  ],
} as const;

export const ssrcPublicContribution = {
  intro:
    'The public contribution of Born into the Machine is to build cultural language around AI before its systems become invisible, inevitable, or politically untouchable.',
  outputs: [
    'A series of research-based sculptural engines',
    'A digital artist-book archive on Moises.tech',
    'A short video introduction explaining the project',
    'Public-facing essays and field notes',
    'One or two talks, workshops, or public listening sessions',
    'A final presentation or open studio',
    'A reusable framework for discussing AI, labor, attention, consent, and human agency',
  ],
  bridge:
    'The project argues that the struggle over AI is not only technical or legal; it is also cultural. Before people can demand rights, transparency, consent, or accountability from intelligent systems, they need images, language, metaphors, and shared experiences that make those systems visible.',
} as const;

export const ssrcArchivePreview = {
  intro:
    'The grant page begins as an application dossier and evolves into a public-facing digital archive for Born into the Machine.',
  detail:
    'Rather than presenting the project as a finished book, the website will function as a living artist-book prototype: a place where research, sculpture, writing, and public imagination can develop together.',
  modules: [
    '/field-notes',
    '/sculptural-engines',
    '/book-chapters',
    '/video',
    '/workshops',
    '/images',
    '/references',
  ],
  researchHref: '/research/born-into-the-machine',
} as const;

export const ssrcVideoIntro = {
  title: 'Moises Sanabria — Born into the Machine',
  subtitle: '3-minute project introduction',
  placeholderNote:
    'Video recording in progress. When ready, the YouTube embed and share link below will be updated.',
  transcript: `Hi, I'm Moises Sanabria. I'm a Venezuelan-born, Miami-based interdisciplinary artist and full-stack AI/web engineer. My work investigates how emerging technologies reshape attention, labor, belief, and public life.

The project I'm proposing is called Born into the Machine.

The project asks: what happens to labor, value, and human agency when intelligence becomes infrastructure?

AI is often described through the language of speed, creativity, productivity, and efficiency. But I'm interested in the deeper shift underneath that language. If machines can now write, summarize, code, visualize, translate, and generate, then intelligence itself is becoming cheaper, faster, and more widely distributed through platforms.

That changes the meaning of human labor.

The question is no longer only who is intelligent. The question becomes: who has agency, authorship, dignity, control, and rights inside intelligent systems?

Through this project, I want to create a series of sculptural engines that make these invisible systems physically encounterable. My sculptures often begin with familiar objects — phones, screens, receipts, laptops, chairs, office furniture, domestic technologies, and institutional interfaces — and reconfigure them into forms that reveal the systems hidden inside everyday life.

For Born into the Machine, these works will explore intelligence as commodity, the adaptation tax of constantly learning new tools, attention capture, the agency gap between convenience and control, and the human right to refusal.

The project will also include public writing, video, talks or workshops, and a digital artist-book archive on Moises.tech. The goal is to build cultural language around AI before its systems become invisible, inevitable, or politically untouchable.

I see this project as a bridge between culture and policy. Before people can demand rights, transparency, consent, or accountability from intelligent systems, they need images, metaphors, and shared experiences that make those systems visible.

At its core, Born into the Machine argues that AI is not only a technological system. It is becoming a social environment. To understand it, we need to look not only at the machine, but at the human value, labor, and agency being reorganized around it.`,
} as const;

export const ssrcPracticeEvidence: {
  intro: string;
  categories: SsrcPracticeCategory[];
} = {
  intro:
    'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and full-stack AI/web engineer whose work investigates how emerging technologies reshape attention, labor, belief, and public life. His practice moves between sculpture, digital systems, public workshops, and cultural infrastructure. This project grows directly from that practice.',
  categories: [
    {
      id: 'attention',
      title: 'Attention systems',
      works: [
        { slug: 'doomscrolling_treadmill', title: 'Doomscrolling Treadmill', note: 'Attention as infrastructure; body as site of platform governance.' },
        { slug: 'taste_the_algorithm', title: 'Taste the Algorithm', note: 'Algorithmic feeds and platform-shaped perception.' },
      ],
    },
    {
      id: 'ai-labor',
      title: 'AI and labor',
      works: [
        { slug: 'baby_agi', title: 'Baby AGI', note: 'Born into intelligent systems; synthetic childhood and algorithmic growth.' },
        { slug: 'smart_shoppers', title: 'Smart Shoppers', note: 'Cognition staged as consumer product.' },
      ],
    },
    {
      id: 'machine-belief',
      title: 'Machine belief',
      works: [
        { slug: 'simulation_faith', title: 'Simulation Faith', note: 'Techno-spirituality and belief under synthetic mediation.' },
        { slug: 'baby_agi', title: 'From Cradle to AGI', note: 'Machine belief and the pre-natal genesis of AGI.' },
      ],
    },
    {
      id: 'public-tech',
      title: 'Public technology',
      works: [
        { slug: '', title: 'Oolite Digital Lab', note: 'Artist-facing digital fabrication, AI, and public technology education.', href: '/tech-nonprofit/oolite' },
        { slug: '', title: 'DCC.Miami', note: 'Miami digital culture ecosystem through workshops and artist-centered infrastructure.', href: 'https://dcc.miami' },
      ],
    },
  ],
};

export const ssrcInfrastructureCards: SsrcInfrastructureCard[] = [
  {
    id: 'oolite',
    title: 'Oolite Digital Lab',
    description:
      'Artist-facing digital fabrication, AI, 3D printing, web, and public technology education. My work with the Oolite Digital Lab gives me direct experience with artists navigating AI tools, digital fabrication, websites, and emerging technology in real time.',
    href: '/tech-nonprofit/oolite',
    logoSrc: null,
    logoAlt: ssrcLogoAssets.oolite.alt,
    logoExpectedPath: ssrcLogoAssets.oolite.expectedPath,
  },
  {
    id: 'dcc',
    title: 'DCC.Miami',
    description:
      'A broader effort to support Miami’s digital culture ecosystem through workshops, tools, and artist-centered infrastructure. DCC reflects my commitment to public digital culture and artist-centered technology education.',
    href: 'https://dcc.miami',
    logoSrc: null,
    logoAlt: ssrcLogoAssets.dcc.alt,
    logoExpectedPath: ssrcLogoAssets.dcc.expectedPath,
  },
  {
    id: 'infra24',
    title: 'Infra24',
    description:
      'Experimental public display and digital infrastructure work exploring how screens, signage, and civic systems shape attention. Infra24 informs my ongoing work with public-facing display systems and the politics of technological mediation.',
    href: '/grant/knight-foundation/community-smart-signs',
    logoSrc: null,
    logoAlt: ssrcLogoAssets.infra24.alt,
    logoExpectedPath: ssrcLogoAssets.infra24.expectedPath,
  },
];

export const ssrcWorkSamples: SsrcWorkSample[] = [
  {
    id: 'baby-agi',
    title: 'Baby AGI',
    type: 'artwork',
    medium: 'Mixed Media Installation with Generative Animation',
    description:
      'Captures the nascent stages of Artificial General Intelligence, symbolizing the impending paradigm shift toward coexistence with advanced AI. A smart baby stroller assembled from PC gaming components and AI-enhanced GPUs — the pre-natal genesis of AGI for Generation Alpha, those born amidst the AI revolution.',
    relevance:
      'This work sample demonstrates my sculptural approach to algorithmic life, machine belief, and technological mediation. The project uses familiar digital objects and bodily references to make invisible systems physically encounterable.',
    slug: 'baby_agi',
    images: [
      {
        type: 'video',
        vimeoId: '1079770763',
        caption: 'Baby AGI — generative loop from birth to AGI',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
        caption: 'Baby AGI — Swenson Gallery, Bakehouse Art Complex',
      },
    ],
  },
  {
    id: 'oolite-digital-lab',
    title: 'Oolite Digital Lab',
    type: 'infrastructure',
    medium: 'Knight-funded digital lab — workshops, fabrication, AI, and artist-facing technology',
    description:
      'As Technical Director of Digital at Oolite Arts, I help run the Knight-funded Digital Lab: public workshops, equipment access, automation, and production support for Miami artists navigating AI tools, digital fabrication, websites, and emerging technology in real time.',
    relevance:
      'This work sample demonstrates public-facing technology practice with artists and cultural organizations — institutional execution, real community engagement, and the social labor required to make emerging tools accessible.',
    href: '/tech-nonprofit/oolite',
    images: [
      {
        type: 'image',
        url: OOLITE_DIGITAL_LAB_IMAGE,
        caption: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    ],
  },
];

export const ssrcTimeline: SsrcTimelineQuarter[] = [
  {
    quarter: 'Q1: Jan–Mar 2027',
    focus: 'Research framework, archive setup, sculpture planning',
    outputs: ['Project outline', 'Archive structure', 'First studies'],
  },
  {
    quarter: 'Q2: Apr–Jun 2027',
    focus: 'Sculptural prototypes, writing, video',
    outputs: ['1–2 prototype studies', 'Video intro', 'First essay'],
  },
  {
    quarter: 'Q3: Jul–Sep 2027',
    focus: 'Public exchange, refinement, field notes',
    outputs: ['Workshop or talk', 'Field notes', 'Archive updates'],
  },
  {
    quarter: 'Q4: Oct–Dec 2027',
    focus: 'Final presentation and documentation',
    outputs: ['Final works or prototypes', 'Public archive', 'Reflection'],
  },
];

export const ssrcOutcomes2027 = [
  '2–3 sculptural works, prototypes, or installation studies',
  'A public digital artist-book archive',
  'A 3-minute video introduction',
  '3–5 short essays or field notes',
  '1–2 public talks, workshops, or listening sessions',
  'A final open studio, presentation, or exhibition-style documentation',
  'A clearer framework connecting AI, labor, attention, agency, and cultural rights',
] as const;

export const ssrcApplicationMaterials: SsrcApplicationMaterial[] = [
  { label: 'CV', status: 'Needs edit', notes: 'Compress to 2 pages' },
  { label: 'Personal statement', status: 'Drafting', notes: 'Practice and philosophy voice' },
  { label: 'Work proposal', status: 'Drafting', notes: '3,000-word max' },
  { label: 'Work sample 1 — Baby AGI', status: 'Select', notes: 'Sculpture / artwork' },
  { label: 'Work sample 2 — Oolite Digital Lab', status: 'Select', notes: 'Public technology / cultural infrastructure' },
  { label: 'Video', status: 'Needs recording', notes: '2–3 minutes' },
  { label: 'Images', status: 'Needs gathering', notes: 'Past work + proposed studies' },
  { label: 'AI use disclosure', status: 'Drafting', notes: 'Short and transparent' },
];

export const ssrcContact = {
  bio: 'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and full-stack AI/web engineer. His work spans sculpture, installation, machine learning, and live systems, focusing on how technological infrastructures shape perception, labor, and collective life.',
  closing:
    'For fellowship review, exhibitions, public programs, or artist-led technology conversations, please get in touch.',
  email: 'sesmoi.data@gmail.com',
  links: [
    { label: 'Artist CV', href: '/cv/artist' },
    { label: 'Born into the Machine research', href: '/research/born-into-the-machine' },
    { label: 'Full portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const ssrcImages: SsrcImage[] = [
  {
    expectedPath: '/grant/ssrc-just-tech-fellowship-2027/hero-born-into-the-machine.jpg',
    isPlaceholder: false,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
    alt: 'Baby AGI — sculptural installation exploring birth into intelligent systems.',
    caption: 'Baby AGI (2023) — hero image for Born into the Machine.',
    role: 'banner',
  },
];
