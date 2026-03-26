export interface Exhibitions {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  location?: string;
  description?: string;
  tags?: string[];
  featured_work?: string;
  curator?: string;
  support?: string;
  links?: string;
  partners?: string[];
  link?: string;
  shortName?: string;
}

export const exhibitions: Exhibitions[] = [
  {
    id: 1,
    title: 'CONTINUUM',
    date: 'July - September 2024',
    imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    location: 'MUNAG & CFCE, Antigua Guatemala',
    description: 'A groundbreaking exhibition showcasing digital art and new media from eight countries, exploring the evolution of artistic expression through technology. The exhibition features works that challenge traditional boundaries and demonstrate how artists use digital tools to create meaningful connections between past, present, and future.',
    tags: ["Digital Art", "New Media", "International", "Technology", "Contemporary Art"],
    curator: 'Waseem A. Syed',
    featured_work: 'Smart Shoppers & The Price of Existence',
    link: 'https://fundacionpaiz.org.gt/continuum-una-exposicion-sobre-futuros-y-tradiciones-mutantes/',
    partners: ['Fundación Paiz para la Educación y la Cultura'],
    support: 'Fundación Paiz para la Educación y la Cultura'
  },
  {
    id: 2,
    title: 'The Net Art Gala',
    date: 'May',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951050/art/moisestech-website/exhibitions/may_2025_netartgala_ny/net-art-gala-exhibition-banner-og_nxqcum.png',
    location: 'NY, USA',
    description: 'This exhibition explores the complex relationship between humans and technology, examining how digital devices have evolved beyond tools to become objects of desire and worship. Through diverse artworks, the exhibition investigates how technology shapes modern identity, self-representation, and our understanding of gender in the digital age. Featured works highlight the intimate fusion of human bodies with technological extensions, revealing patterns of power, dependency, and pleasure in our digital interactions. The exhibition critically examines contemporary phenomena including technological messianism, digital behavior modification, innovation obsession, and the pursuit of perfection through technological means. It invites viewers to reflect on their own relationship with technology and its role in shaping human consciousness and desire.',
    tags: ["Technology", "Identity", "Digital Culture", "Body Politics"],

  },
  {
    id: 3,
    title: 'Technofetishism: Whip it into Shape',
    date: 'March 21, 2025 - August 31, 2025',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740950484/art/moisestech-website/exhibitions/apr_2025_technofetishism_momus/momus-exhibition-banner_uun9rx.jpg',
    location: 'MOMus-Experimental Center for the Arts (Warehouse B1, Pier A\', Port), Thessaloniki, Greece',
    shortName: 'MOMus',
    description: 'A track from the 80\'s (Whip it, Devo), inspired by a novel from the 70\'s (Gravity\'s Rainbow, Thomas Pynchon) examines the collapse of a society, that stupefied by a delirium of overconsumption and information overload, worships the almost religious submission to technology —through which power is manifested, expanded, and normalized. The exhibition explores the fetishisation of technology by our contemporary techno-capitalist society, which has transformed technological objects into sources of sexual arousal, substitutes for desire, and venerated fetishes. The works presented offer a critical reflection on how technology mediates—and sometimes distorts—our notions of intimacy, eroticism, desire, and communication, our own identity, blurring the boundaries between freedom, compulsion, and constraint.',
    tags: ["Technology", "Identity", "Digital Culture", "Body Politics", "Technofetishism", "Contemporary Art"],
    curator: 'Eirini Papakostantinou, Art Historian, Curator MOMus-Experimental Center for the Arts',
    featured_work: 'Collaboration with Tom Galle and John Yuyi',
    link: 'https://www.momus.gr/en/exhibitions/tehnofetihismos-whip-it-shape',
  },
  {
    id: 4,
    title: 'Bakehouse Open Studios',
    date: 'Mar 11',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    location: 'Miami, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 5,
    title: 'Performance in Flux',
    date: 'February 21-22',
    imageUrl:
      '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
    location: 'Orlando, USA',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
  },
  {
    id: 6,
    title: 'Low Resolution',
    date: 'Oct 23, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
    location: 'NY, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 7,
    title: 'Notions of Home',
    date: 'December 6, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg',
    location: 'Miami, USA',
    description:
      'ICA Miami X Dminti presents Notions of Home, a group exhibition featuring works by artists from across the globe.',
  },
  {
    id: 8,
    title: 'Artweek Satellite Art Show',
    date: 'Dec 6-11, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951329/art/moisestech-website/exhibitions/dec_2024_satellite-art-show_mia/satellite-art-exhibition-banner_fcgciy.png',
    location: 'Orlando, FL',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
  },
  {
    id: 9,
    title: 'Breadbytes: Artmaking for the Next Generation',
    date: 'November 3, 2023 - February 3, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483633/art/moisestech-website/exhibitions/dec_2023_bakehouse_breadbytes/exhibition_shot_2_nbx7ky.jpg',
    location: 'Bakehouse Art Complex, 561 Northwest 32nd Street, Miami, FL',
    description:
      'BreadBytes presents four site-specific installations that integrate art with technology to consider our future, the future of Bakehouse as an institution, and the future of Miami. The exhibition features "From Cradle to AGI," a ready-made assembly exploring the nascent stages of Artificial General Intelligence and its impact on Generation Alpha.',
    featured_work: 'From Cradle to AGI',
    curator: 'Shawn',
    support: 'Knight Foundation, Miami-Dade County Department of Cultural Affairs',
    links: 'https://www.bacfl.org/exhibitions/breadbytes-artmaking-for-the-next-generation'
  },
  {
    id: 10,
    title: 'Future Muses',
    date: 'December 9, 2023',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951765/art/moisestech-website/exhibitions/2023_dec_future-muses_mia/future-muses-adobe-future-commerce_banner_uduetj.webp',
    location: 'Miami, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 12,
    title: 'Dark Drives: Uneasy Energies in Technological Times',
    date: 'January 28 - February 5, 2012',
    imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/5-million-dollars-1-terabyte_art404.jpg',
    location: 'Haus der Kulturen der Welt, Berlin, Germany',
    description: 'Part of transmediale 2012 in/compatible festival, this exhibition focused on "uneasy energies in technological times." Curated by Jacob Lillemose, the exhibition explored distortions, ambiguities, irritations, ironies, and unrest as significant trajectories in our relations with modern technology. The exhibition argued that these problematic states constitute fundamental aspects of technological times rather than obstacles to be overcome.',
    tags: ["Digital Culture", "Technology", "Conceptual Art", "Media Art"],
    featured_work: '5 Million Dollars 1 Terabyte',
    curator: 'Jacob Lillemose',
    link: 'https://archive.transmediale.de/festival-2012/exhibition',
  },
  {
    id: 14,
    title: 'F*ck Art: Nature & Artifice',
    date: '2026',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
    location: 'Museum of Sex, 2200 NW 24th Ave., Miami',
    shortName: 'Museum of Sex Miami',
    description:
      'F*ck Art: Nature & Artifice features works by Miami-based artists whose practices examine the city\'s distinctive convergence of subtropical ecology, technology, and sexual undercurrent. The exhibition embraces the blend of the organic and the digital, natural landscapes and engineered environments, flesh and code, intimacy and surveillance. The group show leans into Miami\'s volatility: rising tides, opulent excess, congested flows, feral exuberance, and the interplay between revelation and restraint, all refracted through an abiding fixation on the visible self. Intimate-scale pieces appear within vitrines that evoke archaeological fragments, their sequential arrangement mirroring the rhythm of digital browsing. Miami emerges as a creative force in continual motion, expansive and perpetually transforming. "We are thrilled to introduce F*ck Art to Miami, marking the debut of our dedicated series spotlighting local artists in this vibrant city." — Dan Gluck, CEO, Museum of Sex',
    tags: ['Erotic Art', 'Miami', 'Local Artists', 'Digital Art', 'Interactive', 'Contemporary Art'],
    curator: 'Tam Gryn',
    featured_work: 'Taste the Algorithm',
    link: 'https://www.museumofsex.com/exhibitions/fck-art-nature-artifice/',
    support: 'Museum of Sex',
  },
  {
    id: 13,
    title: 'Algoritmica Intima: Runtime',
    date: 'June - July 2025',
    imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751123479/art/moisestech-website/exhibitions/june_2025_algoritmica_intima_cdmx/algoritmica-intima-exhibitions-june-2025_zmg4mq.jpg',
    location: 'Centro Cultural Afirme, Mexico City, Mexico',
    description: 'An exhibition exploring the intimate relationship between algorithms and human experience, examining how computational processes shape our understanding of intimacy, identity, and connection in the digital age.',
    tags: ["Digital Art", "Algorithms", "Intimacy", "Technology"],
    curator: 'Centro Cultural Afirme',
  },
];
