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
  /** For favicon (Google s2 service resolves from domain) */
  publisherDomain: string;
  coverImageUrl: string | null;
  /** Optional list of alternate cover URLs (rights / sourcing notes) */
  coverImageUrlOptions: readonly string[];
  coverImageAlt: string;
  /** Tailwind classes when no cover image */
  placeholderClassName: string;
};

export type FieldGuideHeroStripAsset = {
  url: string;
  alt: string;
};

export type FieldGuideAssetLegalNote = {
  asset: string;
  note: string;
};

export type FieldGuideConcept = {
  term: string;
  definition: string;
};

/** Wikimedia / press portrait; use null URLs for initials fallback */
export type FieldGuidePortraitMeta = {
  imageUrl: string | null;
  sourcePageUrl: string | null;
  license: string | null;
  creditLine: string | null;
};

export type FieldGuidePerson = {
  name: string;
  bio: string;
  url: string | null;
  /** Where they appear in the assigned texts */
  mentionNote?: string;
  portrait: FieldGuidePortraitMeta;
};

export type FieldGuideArtistCoreEntry = {
  name: string;
  note: string;
  portrait: FieldGuidePortraitMeta;
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
        'https://www.e-flux.com/journal/49/60004/too-much-world-is-the-internet-dead',
      pdfUrl: null,
      summary:
        'A foundational essay for thinking about the internet not as a separate virtual zone, but as something that has become embedded in physical, political, and spatial life.',
      whyItMatters:
        'This text establishes the broader condition for the session: the image world no longer lives only on screens. It spills into space, infrastructures, bodies, and everyday experience.',
      publisherDomain: 'e-flux.com',
      coverImageUrl: null,
      coverImageUrlOptions: [],
      coverImageAlt:
        'No rights-cleared publication-domain cover image confirmed for the e-flux reading; keep gradient fallback.',
      placeholderClassName:
        'bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-950',
    },
    {
      id: 'fontcuberta',
      author: 'Joan Fontcuberta',
      title: 'Redefining Photography and Taming Monsters',
      source: 'Blind Magazine',
      year: '2023',
      externalUrl:
        'https://www.blind-magazine.com/news/joan-fontcuberta-redefining-photography-and-taming-monsters/',
      pdfUrl: null,
      summary:
        'A conversation on photography, AI, authorship, memory, monstrosity, and the emergence of a new visual order.',
      whyItMatters:
        'This text helps bring the discussion directly into artistic practice, especially around photography’s transformation under synthetic and algorithmic conditions.',
      publisherDomain: 'blind-magazine.com',
      coverImageUrl:
        'https://www.blind-magazine.com/wp-content/uploads/2023/04/joan-fontcuberta-gastropoda.jpg',
      coverImageUrlOptions: [],
      coverImageAlt: 'Joan Fontcuberta, Gastropoda (artwork referenced in Blind Magazine)',
      placeholderClassName: '',
    },
    {
      id: 'kissick',
      author: 'Dean Kissick',
      title: 'The Vulgar Image',
      source: 'Spike Art Magazine',
      year: 'Summer 2025',
      externalUrl: 'https://spikeartmagazine.com/articles/vulgarity-the-vulgar-image',
      pdfUrl: null,
      summary:
        'A sharp reflection on grotesque, tasteless, memetic, synthetic, and unstable image culture in the age of AI, platform excess, and aesthetic overload.',
      whyItMatters:
        'This text gives language to the current image atmosphere: vulgarity, mutation, bad taste, folklore, monsters, and visual excess.',
      publisherDomain: 'spikeartmagazine.com',
      coverImageUrl:
        'https://cdn.sanity.io/images/syotmk9q/production/2a40ff1af28bf6588460046f631d318e3fdd621d-1600x2000.jpg?auto=format&h=4800&q=70&w=3840',
      coverImageUrlOptions: [],
      coverImageAlt:
        'Truth Terminal by Beeple, 2024. Hero image for Dean Kissick’s “The Vulgar Image” on Spike Art Magazine.',
      placeholderClassName:
        'bg-gradient-to-br from-rose-200 to-amber-300 dark:from-rose-950 dark:to-amber-950',
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
    title: 'Writers and Thinkers Cited in These Readings',
    intro:
      'Authors of the assigned texts, plus thinkers explicitly named inside them (not an open bibliography).',
    core: [
      {
        name: 'Hito Steyerl',
        bio: 'Artist and writer whose work examines images, circulation, militarization, networks, and the political life of visual culture.',
        url: 'https://en.wikipedia.org/wiki/Hito_Steyerl',
        mentionNote: 'Author, “Too Much World: Is the Internet Dead?” (*e-flux journal*, 2013).',
        portrait: {
          imageUrl:
            'https://commons.wikimedia.org/wiki/Special:FilePath/Hito%20Steyerl%20at%20Berkeley%20Center%20for%20New%20Media.jpg',
          sourcePageUrl:
            'https://commons.wikimedia.org/wiki/File:Hito_Steyerl_at_Berkeley_Center_for_New_Media.jpg',
          license: 'CC BY-SA 2.0',
          creditLine:
            'Hito Steyerl at Berkeley Center for New Media, 2016. Photo: Berkeley Center for New Media.',
        },
      },
      {
        name: 'Joan Fontcuberta',
        bio: 'Artist and writer whose practice has long challenged truth claims in photography and now addresses AI and synthetic visual culture.',
        url: 'https://www.fontcuberta.com/',
        mentionNote: 'Interviewee, “Redefining Photography and Taming Monsters” (*Blind Magazine*, 2023).',
        portrait: {
          imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joan%20Fontcuberta.jpg',
          sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Joan_Fontcuberta.jpg',
          license: 'CC BY-SA 4.0',
          creditLine:
            'Joan Fontcuberta at FotoArtFestival 2007. Photo: Piotr Bieniecki / fototeo.pl.',
        },
      },
      {
        name: 'Dean Kissick',
        bio: 'Critic and essayist; contributing editor at Spike. Focus on contemporary image culture, vulgarity, taste, and internet folklore.',
        url: 'https://spikeartmagazine.com/authors/dean-kissick',
        mentionNote: 'Author, “The Vulgar Image” (*Spike*, Summer 2025).',
        portrait: {
          imageUrl: null,
          sourcePageUrl: null,
          license: null,
          creditLine: 'No clearly free-licensed portrait on Wikimedia Commons; initials fallback.',
        },
      },
      {
        name: 'Antonio Gramsci',
        bio: 'Italian Marxist philosopher and political theorist. In the *Blind* interview, Fontcuberta cites him on the “time of monsters”—analog photography’s transition and algorithms as “monstrosities.”',
        url: 'https://www.marxists.org/archive/gramsci/',
        mentionNote: 'Quoted in Fontcuberta / *Blind* on the exhibition *Monsters*.',
        portrait: {
          imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gramsci.png',
          sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Gramsci.png',
          license: 'Public domain',
          creditLine: 'Antonio Gramsci, portrait from the early 1920s. Unknown photographer.',
        },
      },
      {
        name: 'Byung-Chul Han',
        bio: 'Philosopher of digital life, burnout, and narrative. Kissick quotes him on reality becoming information (*The Crisis of Narration*, 2024) in the context of the “Late Information Age.”',
        url: 'https://ourworld.unu.edu/en/contributors/byung-chul-han',
        mentionNote: 'Cited in Kissick, “The Vulgar Image.”',
        portrait: {
          imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Byung-Chul%20Han.jpg',
          sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Byung-Chul_Han.jpg',
          license: 'CC BY-SA 4.0',
          creditLine: 'Byung-Chul Han in 2015. Photo: Actualiité / crop by MRCLD.',
        },
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
        portrait: {
          imageUrl:
            'https://commons.wikimedia.org/wiki/Special:FilePath/Hito%20Steyerl%20at%20Berkeley%20Center%20for%20New%20Media.jpg',
          sourcePageUrl:
            'https://commons.wikimedia.org/wiki/File:Hito_Steyerl_at_Berkeley_Center_for_New_Media.jpg',
          license: 'CC BY-SA 2.0',
          creditLine:
            'Hito Steyerl at Berkeley Center for New Media, 2016. Photo: Berkeley Center for New Media.',
        },
      },
      {
        name: 'Joan Fontcuberta',
        note: 'For photography, fiction, authorship, and AI-era visual instability.',
        portrait: {
          imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joan%20Fontcuberta.jpg',
          sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Joan_Fontcuberta.jpg',
          license: 'CC BY-SA 4.0',
          creditLine:
            'Joan Fontcuberta at FotoArtFestival 2007. Photo: Piotr Bieniecki / fototeo.pl.',
        },
      },
      {
        name: 'Trevor Paglen',
        note: 'For machine vision, surveillance, invisible systems, and image infrastructures.',
        portrait: {
          imageUrl:
            'https://commons.wikimedia.org/wiki/Special:FilePath/Trevor%20Paglen%20%40%20SXSW%202019%20%2833477109078%29.jpg',
          sourcePageUrl:
            'https://commons.wikimedia.org/wiki/File:Trevor_Paglen_%40_SXSW_2019_%2833477109078%29.jpg',
          license: 'CC BY-SA 2.0',
          creditLine: 'Trevor Paglen at SXSW 2019. Photo: Ståle Grut / NRKbeta.',
        },
      },
      {
        name: 'Sondra Perry',
        note: 'For identity, digital representation, interfaces, and image politics.',
        portrait: {
          imageUrl:
            'https://commons.wikimedia.org/wiki/Special:FilePath/Sondra%20Perry%20at%20Seattle%20Art%20Museum%2C%20December%202017.jpg',
          sourcePageUrl:
            'https://commons.wikimedia.org/wiki/File:Sondra_Perry_at_Seattle_Art_Museum,_December_2017.jpg',
          license: 'CC BY-SA 4.0',
          creditLine: 'Sondra Perry at Seattle Art Museum, 2017. Photo: Halimahart.',
        },
      },
      {
        name: 'Morehshin Allahyari',
        note: 'For technological critique, digital colonialism, and speculative image-making.',
        portrait: {
          imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Morehshin-2021.jpg',
          sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Morehshin-2021.jpg',
          license: 'CC BY-SA 4.0',
          creditLine: 'Morehshin Allahyari, 2021. Photo: Angiefromspace.',
        },
      },
      {
        name: 'Holly Herndon & Mat Dryhurst',
        note: 'For questions of AI, authorship, voice, consent, and the artist in computational systems.',
        portrait: {
          imageUrl:
            'https://commons.wikimedia.org/wiki/Special:FilePath/Holly%20Herndon%202024%20%28cropped%29.jpg',
          sourcePageUrl:
            'https://commons.wikimedia.org/wiki/File:Holly_Herndon_2024_(cropped).jpg',
          license: 'CC BY 2.0',
          creditLine:
            'Shown: Holly Herndon in Berlin, 2024. Photo: BMEIA / Michael Gruber. No separate Wikimedia portrait verified for Mat Dryhurst; initials reflect the collaboration.',
        },
      },
      {
        name: 'American Artist',
        note: 'For race, interface, infrastructure, and the social life of computation.',
        portrait: {
          imageUrl:
            'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20American%20Artist.jpg',
          sourcePageUrl:
            'https://commons.wikimedia.org/wiki/File:Portrait_of_American_Artist.jpg',
          license: 'CC BY-SA 4.0',
          creditLine: 'Portrait of American Artist, 2019. Photo: American Artist.',
        },
      },
    ] satisfies FieldGuideArtistCoreEntry[],
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
        websiteUrl: 'https://fabiola.io/',
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
      { label: 'Fabiola Larios', href: 'https://fabiola.io/', external: true },
    ] satisfies FieldGuideLink[],
  },

  heroStripAssets: [
    {
      url: 'https://www.e-flux.com/favicon.ico',
      alt: 'e-flux favicon',
    },
    {
      url: 'https://www.blind-magazine.com/favicon.ico',
      alt: 'Blind Magazine favicon',
    },
    {
      url: 'https://www.spikeartmagazine.com/favicon.ico',
      alt: 'Spike Art Magazine favicon',
    },
  ] satisfies FieldGuideHeroStripAsset[],

  assetLegalNotes: [
    {
      asset: 'readings[0].coverImageUrl',
      note: 'No publication-domain image URL confirmed from e-flux; safest option is to keep the gradient fallback unless you obtain an authorized image or host your own licensed asset.',
    },
    {
      asset: 'readings[2].coverImageUrl',
      note: 'Safe to hotlink from Spike’s own Sanity CDN because it is the publication’s CMS/CDN asset. Credit line in alt text: “Truth Terminal by Beeple, 2024.”',
    },
    {
      asset: 'heroStripAssets[*]',
      note: 'These are publication-domain favicon assets. Fine for small UI/logo usage, but not substitutes for branded press-kit logos.',
    },
    {
      asset: 'any_non_publication_domain_image',
      note: 'Do not hotlink unless you have explicit reuse rights or the image is clearly licensed for reuse. Prefer publication-domain assets, your own hosted PDFs/images, or licensed press-kit materials.',
    },
    {
      asset: 'writers/artists.portrait.imageUrl (Wikimedia Commons)',
      note: 'Portraits use Commons Special:FilePath URLs; attribution and license are on each file page (linked as “Photo source”). Verify file pages before reuse elsewhere.',
    },
  ] satisfies FieldGuideAssetLegalNote[],
} as const;
