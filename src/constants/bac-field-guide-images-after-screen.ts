/**
 * BAC Reading Group — Session Field Guide
 * Content model for /bac/images-after-the-screen (reusable pattern for future sessions).
 */

export type FieldGuideNavItem = {
  id: string;
  label: string;
};

export type FieldGuideReading = {
  id: string;
  author: string;
  title: string;
  source: string;
  year: string;
  externalUrl: string | null;
  pdfUrl: string | null;
  summary: string;
  whyItMatters: string;
};

export type FieldGuideConcept = {
  term: string;
  definition: string;
};

export type FieldGuidePerson = {
  name: string;
  bio: string;
};

export type FieldGuideLink = {
  label: string;
  href: string | null;
  external?: boolean;
};

export type FieldGuideHost = {
  name: string;
  bio: string;
  websiteUrl: string | null;
};

export const BAC_FIELD_GUIDE_IMAGES_AFTER_SCREEN = {
  formatLabel: 'Session Field Guide',

  nav: [
    { id: 'session-overview', label: 'Session Overview' },
    { id: 'how-readings-connect', label: 'How Readings Connect' },
    { id: 'readings', label: 'Readings' },
    { id: 'suggested-reading-path', label: 'Suggested Path' },
    { id: 'key-concepts', label: 'Key Concepts' },
    { id: 'writers-and-thinkers', label: 'Writers & Thinkers' },
    { id: 'artists-and-references', label: 'Artists & References' },
    { id: 'discussion-questions', label: 'Discussion Questions' },
    { id: 'session-flow', label: 'Session Flow' },
    { id: 'further-reading', label: 'Further Reading' },
    { id: 'about-hosts', label: 'About the Hosts' },
    { id: 'related-links', label: 'Related Links' },
  ] satisfies FieldGuideNavItem[],

  hero: {
    kicker: 'BAC Reading Group — Session Field Guide',
    title: 'Images After the Screen: Photography, AI, and the New Visual Order',
    subtitle:
      'A reading group on photography, AI, vulgarity, authorship, and the changing visual condition.',
    presentersLine: 'Presented by Moises Sanabria and Fabiola Larios',
    collaborationLine:
      'In collaboration with René Morales and the BAC Reading Group',
    sessionDate: 'March 26, 2026',
    purposeLine:
      'For participants in this BAC session and future reading groups: orient to the texts, support discussion, and document a repeatable format. Next step: follow the suggested reading path, then join with the discussion questions in view.',
  },

  overview: {
    title: 'Session Overview',
    body: [
      'This session explores how artists are navigating the transformation of the image in a moment when photography, internet culture, and artificial intelligence increasingly overlap. Through Hito Steyerl’s “Too Much World: Is the Internet Dead?”, Joan Fontcuberta’s “Redefining Photography and Taming Monsters”, and Dean Kissick’s “The Vulgar Image”, we look at how images move beyond the screen and into everyday life, and how artists are rethinking authorship, memory, taste, hybridity, and visual culture in response.',
      'Together, these readings open a conversation about what happens when images become ambient, unstable, grotesque, networked, and increasingly shaped by algorithmic systems.',
    ],
    whyNowTitle: 'Why this session now',
    whyNow:
      'Artists are working in a visual environment shaped by synthetic media, platform circulation, unstable authorship, and image overload. This session offers a way to navigate that condition through art, criticism, and visual culture.',
  },

  connections: {
    title: 'How the Readings Connect',
    cards: [
      {
        label: 'Hito Steyerl — Condition',
        text: 'Steyerl provides the macro frame: the internet and image systems no longer stay contained online, but become materially embedded in the world.',
      },
      {
        label: 'Joan Fontcuberta — Practice',
        text: 'Fontcuberta gives the artist- and photography-centered lens: AI, authorship, memory, monstrosity, and the changing visual order.',
      },
      {
        label: 'Dean Kissick — Atmosphere',
        text: 'Kissick brings the discussion into the present through vulgarity, grotesque internet imagery, memetic transformation, image excess, and unstable taste.',
      },
    ],
    bridge:
      'Together, these texts move from condition to practice to atmosphere: from the world images now inhabit, to the artist’s role within that transformation, to the strange visual culture emerging around us.',
  },

  readings: [
    {
      id: 'steyerl',
      author: 'Hito Steyerl',
      title: 'Too Much World: Is the Internet Dead?',
      source: 'e-flux journal',
      year: '2013',
      externalUrl:
        'https://www.e-flux.com/journal/49/75160/too-much-world-is-the-internet-dead/',
      pdfUrl: null,
      summary:
        'A foundational essay for thinking about the internet not as a separate virtual zone, but as something that has become embedded in physical, political, and spatial life.',
      whyItMatters:
        'This text establishes the broader condition for the session: the image world no longer lives only on screens. It spills into space, infrastructures, bodies, and everyday experience.',
    },
    {
      id: 'fontcuberta',
      author: 'Joan Fontcuberta',
      title: 'Redefining Photography and Taming Monsters',
      source: 'Blind Magazine',
      year: '2026',
      externalUrl: null,
      pdfUrl: null,
      summary:
        'A conversation on photography, AI, authorship, memory, monstrosity, and the emergence of a new visual order.',
      whyItMatters:
        'This text helps bring the discussion directly into artistic practice, especially around photography’s transformation under synthetic and algorithmic conditions.',
    },
    {
      id: 'kissick',
      author: 'Dean Kissick',
      title: 'The Vulgar Image',
      source: 'Spike',
      year: 'Summer 2025',
      externalUrl: null,
      pdfUrl: null,
      summary:
        'A sharp reflection on grotesque, tasteless, memetic, synthetic, and unstable image culture in the age of AI, platform excess, and aesthetic overload.',
      whyItMatters:
        'This text gives language to the current image atmosphere: vulgarity, mutation, bad taste, folklore, monsters, and visual excess.',
    },
  ] satisfies FieldGuideReading[],

  suggestedPath: {
    title: 'Suggested Reading Path',
    steps: [
      'Start with the session overview to get the framing.',
      'Read Steyerl for the larger condition of the internet and images beyond the screen.',
      'Read Fontcuberta for photography, AI, authorship, and memory.',
      'Read Kissick for the present-day visual atmosphere of vulgarity, mutation, and image excess.',
      'Return to the key concepts and discussion questions before the session.',
    ],
    note: 'This is not meant to be exhaustive. It is meant to create a shared vocabulary and open a strong artist-centered discussion.',
  },

  concepts: [
    {
      term: 'Image',
      definition:
        'A visual form that no longer belongs only to photography, painting, or screens, but moves across platforms, systems, and media conditions.',
    },
    {
      term: 'Materialization',
      definition:
        'The process by which digital systems become physical, social, spatial, or emotional realities.',
    },
    {
      term: 'Authorship',
      definition:
        'The changing role of the artist, maker, or photographer in a world of platforms, generative systems, and hybrid image production.',
    },
    {
      term: 'Memory',
      definition:
        'The archival and evidentiary dimension historically associated with photography, now complicated by generation, synthesis, and prediction.',
    },
    {
      term: 'Prediction',
      definition:
        'A logic central to algorithmic systems, where images and systems anticipate, generate, or optimize rather than simply record.',
    },
    {
      term: 'Hybridity',
      definition:
        'The collapse of older boundaries between photography, video, drawing, synthetic imagery, and computation.',
    },
    {
      term: 'Lived infrastructure',
      definition:
        'The systems that quietly organize daily life: feeds, interfaces, archives, rankings, storage, distribution, and visibility rules.',
    },
    {
      term: 'Taste',
      definition:
        'The aesthetic codes that determine what is seen as refined, acceptable, serious, or valuable.',
    },
    {
      term: 'Vulgarity',
      definition:
        'A way of thinking about images that are excessive, crude, unstable, grotesque, tasteless, or culturally destabilizing.',
    },
    {
      term: 'Grotesque',
      definition:
        'A visual logic of distortion, mutation, humor, excess, and bodily or symbolic transformation.',
    },
    {
      term: 'Transformation',
      definition:
        'The way digital and AI systems mutate, hybridize, and recompose existing visual forms into new image types.',
    },
    {
      term: 'Algorithm',
      definition:
        'A system of sorting, generating, predicting, or distributing images and information according to encoded rules and statistical patterns.',
    },
  ] satisfies FieldGuideConcept[],

  writers: {
    title: 'Writers and Thinkers in This Field Guide',
    core: [
      {
        name: 'Hito Steyerl',
        bio: 'Artist and writer whose work examines images, circulation, militarization, networks, and the political life of visual culture.',
      },
      {
        name: 'Joan Fontcuberta',
        bio: 'Artist, writer, and theorist whose work has long challenged truth claims in photography and now addresses AI and synthetic visual culture.',
      },
      {
        name: 'Dean Kissick',
        bio: 'Critic and essayist focused on contemporary image culture, vulgarity, taste, internet folklore, and digital aesthetics.',
      },
      {
        name: 'Byung-Chul Han',
        bio: 'Philosopher of digital life, information overload, and contemporary subjectivity; relevant here through questions of data, exhaustion, and mediation.',
      },
    ] satisfies FieldGuidePerson[],
    relatedTitle: 'Related thinkers',
    related: [
      {
        name: 'Nora N. Khan',
        bio: 'Critic and writer working on AI art, synthetic media, perception, and the stakes of criticism in computational culture.',
      },
      {
        name: 'Ruby Justice Thelot',
        bio: 'Writer whose work on the content creator as algorithmic folk artist offers a useful adjacent lens on internet culture and vernacular making.',
      },
    ] satisfies FieldGuidePerson[],
  },

  artists: {
    title: 'Artists and References to Know',
    intro:
      'A curated list for orientation—not encyclopedic. These names anchor the conversation in contemporary practice and image culture.',
    core: [
      {
        name: 'Hito Steyerl',
        note: 'For the political and infrastructural life of images.',
      },
      {
        name: 'Joan Fontcuberta',
        note: 'For photography, fiction, authorship, and AI-era visual instability.',
      },
      {
        name: 'Trevor Paglen',
        note: 'For machine vision, surveillance, invisible systems, and image infrastructures.',
      },
      {
        name: 'Sondra Perry',
        note: 'For identity, digital representation, interfaces, and image politics.',
      },
      {
        name: 'Morehshin Allahyari',
        note: 'For technological critique, digital colonialism, and speculative image-making.',
      },
      {
        name: 'Holly Herndon & Mat Dryhurst',
        note: 'For questions of AI, authorship, voice, consent, and the artist in computational systems.',
      },
      {
        name: 'American Artist',
        note: 'For race, interface, infrastructure, and the social life of computation.',
      },
    ],
    referencesTitle: 'Reference examples',
    references: [
      {
        name: 'Loab',
        note: 'A recurring AI-generated figure that became a reference point for uncanny and grotesque synthetic imagery.',
      },
      {
        name: 'Skibidi Toilet',
        note: 'A mass-circulating machinima phenomenon useful for thinking about absurdity, folklore, repetition, and the vulgar image.',
      },
      {
        name: 'Beeple',
        note: 'A reference point for image excess, digital spectacle, and the aesthetic flattening or acceleration of contemporary visual culture.',
      },
      {
        name: 'Hieronymus Bosch',
        note: 'A historical echo for grotesque transformation, hybrid figures, and visual chaos.',
      },
    ],
  },

  discussion: {
    title: 'Questions for Discussion',
    questions: [
      'What happens to the image when it no longer feels stable, singular, or purely photographic?',
      'How do AI and digital systems change the role of the artist, author, or image-maker?',
      'What is the difference between an image tied to memory and one shaped by prediction, recombination, or generation?',
      'Why do grotesque, vulgar, or “bad” images feel so culturally powerful right now?',
      'How are artists responding when photography, meme, content, and synthetic image begin to collapse into one another?',
      'What can artists reveal about contemporary image culture that technical, journalistic, or policy language cannot?',
    ],
  },

  sessionFlow: {
    title: 'Session Flow',
    blocks: [
      {
        label: 'Opening frame — 5–7 min',
        text: 'Introduce the session through the changing condition of the image under AI, digital circulation, and everyday networked life.',
      },
      {
        label: 'Steyerl discussion — 15 min',
        text: 'Establish the broader condition of images and systems moving beyond the screen.',
      },
      {
        label: 'Fontcuberta discussion — 20 min',
        text: 'Move into photography, authorship, memory, monstrosity, and the changing visual order.',
      },
      {
        label: 'Kissick discussion — 20 min',
        text: 'Open the present tense of vulgarity, grotesque aesthetics, bad taste, image overload, and contemporary internet folklore.',
      },
      {
        label: 'Artist practice round — 15 min',
        text: 'Invite participants to connect the readings to their own work, image habits, aesthetic decisions, or relationship to visual culture.',
      },
    ],
  },

  furtherReading: {
    title: 'Further Reading',
    intro:
      'This field guide is not exhaustive. It is meant as one entry point into a larger inquiry around images, systems, and contemporary life.',
    bullets: [
      'Hito Steyerl, “Medium Hot”',
      'Ruby Justice Thelot, “The Content Creator as Algorithmic Folk Artist”',
      'Nora N. Khan on AI criticism and synthetic media',
      'Additional essays on photography, synthetic media, authorship, and networked image culture',
    ],
  },

  hosts: {
    title: 'About the Hosts',
    people: [
      {
        name: 'Moises Sanabria',
        bio: 'Interdisciplinary artist based in Miami. His practice examines how algorithmic environments, platforms, and networked systems shape belief, labor, value, and desire; code and technical systems function as mediums and research methods within that work—not a separate identity from the art.',
        websiteUrl: 'https://moises.tech',
      },
      {
        name: 'Fabiola Larios',
        bio: 'Multidisciplinary artist whose work engages visual culture, embodiment, and expanded forms of image-making.',
        websiteUrl: null,
      },
    ] satisfies FieldGuideHost[],
  },

  relatedLinks: {
    title: 'Related Links',
    links: [
      {
        label: 'Bakehouse Art Complex — BAC Reading Group',
        href: 'https://bakehouseartcomplex.org',
        external: true,
      },
      {
        label: 'René Morales',
        href: 'https://www.pamm.org/about/staff/rene-morales/',
        external: true,
      },
      { label: 'Moises Sanabria', href: 'https://moises.tech', external: true },
      { label: 'Fabiola Larios', href: null },
    ] satisfies FieldGuideLink[],
  },
} as const;
