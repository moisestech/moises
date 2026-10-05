export interface Exhibitions {
  id: number;
  title: string;
  date: string;
  imageUrl?: string;
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
  /** Stable path segment for /calendar/exhibitions/[slug]. */
  slug?: string;
  activityType?: string;
  imageAlt?: string;
  /** Kept off the homepage carousel when there is no verified event photograph. */
  archiveOnly?: boolean;
  related?: { href: string; label: string }[];
  externalLinkLabel?: string;
}

export const exhibitions: Exhibitions[] = [
  {
    id: 1,
    title: 'CONTINUUM',
    date: 'July - September 2024',
    imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    location: 'MUNAG & CFCE, Antigua Guatemala',
    description: 'A groundbreaking exhibition showcasing digital art and new media from eight countries, exploring the evolution of artistic expression through technology. The exhibition features works that challenge traditional boundaries and demonstrate how artists use digital tools to create meaningful connections between past, present, and future. Bakehouse artists Fabiola Larios, Moises Sanabria, and Leo Castañeda participated.',
    tags: ["Digital Art", "New Media", "International", "Technology", "Contemporary Art"],
    curator: 'Waseem A. Syed',
    featured_work: 'Smart Shoppers & The Price of Existence',
    link: 'https://www.bacfl.org/blog/csiu59p0euqb6bnpyojclicd6bjjiw',
    partners: ['Fundación Paiz para la Educación y la Cultura', 'Bakehouse Art Complex'],
    support: 'Fundación Paiz para la Educación y la Cultura'
  },
  {
    id: 2,
    title: 'The Net Gala',
    date: 'May 3, 2025',
    slug: 'the-net-gala',
    activityType: 'Sculpture / technological readymade',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951050/art/moisestech-website/exhibitions/may_2025_netartgala_ny/net-art-gala-exhibition-banner-og_nxqcum.png',
    imageAlt: 'The Net Gala — event graphic',
    location: '64 Dobbin Street, Brooklyn, New York',
    description:
      'On May 3, 2025, Privacy is a Luxury was presented at The Net Gala, 64 Dobbin Street, Brooklyn, New York. The sculpture treats privacy as something sold rather than held: a gold Guy Fawkes mask carrying payment hardware and network equipment, so anonymity, surveillance, and identity sit on the same object.',
    featured_work: 'Privacy is a Luxury',
    // TODO: Add installation photography of Privacy is a Luxury at 64 Dobbin Street. Current image is the event graphic.
    tags: ['Privacy', 'Surveillance', 'Sculpture', 'Network infrastructure'],
    related: [
      { href: '/art/privacy_is_a_luxury', label: 'Privacy is a Luxury' },
    ],
  },
  {
    id: 3,
    title: 'Technofetishism: Whip it into Shape',
    date: 'March 21 – August 31, 2025',
    slug: 'technofetishism',
    activityType: 'Group exhibition',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740950484/art/moisestech-website/exhibitions/apr_2025_technofetishism_momus/momus-exhibition-banner_uun9rx.jpg',
    imageAlt: 'MOMus — Metropolitan Organisation of Museums of Visual Arts of Thessaloniki',
    location: 'MOMus – Experimental Center for the Arts, Thessaloniki, Greece',
    shortName: 'MOMus',
    description:
      'International group exhibition at MOMus – Experimental Center for the Arts, Thessaloniki, on view March 21 through August 31, 2025. The exhibition examines bodies, desire, control, technology, overconsumption, and information overload. The site record credits Moises Sanabria’s contribution as a collaboration with Tom Galle and John Yuyi. He also made a recorded artist contribution in connection with the exhibition, on technology, intimacy, desire, and mediated relationships. That recording is not yet in the site archive.',
    tags: ["Technology", "Identity", "Digital Culture", "Body Politics", "Technofetishism", "Contemporary Art"],
    curator: 'Eirini Papakostantinou, Art Historian, Curator MOMus-Experimental Center for the Arts',
    featured_work: 'Collaboration with Tom Galle and John Yuyi',
    // TODO: Add official MOMus installation photography and the recorded artist-contribution video if a URL or file is added to the repository.
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
    date: 'October 19, 2024',
    slug: 'low-resolution',
    activityType: 'Moving-image screening',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
    imageAlt: 'Low Resolution GIF Screening poster, October 19, 2024, 568 Broadway, New York',
    location: '568 Broadway, SoHo, New York, NY',
    description:
      'One-night moving-image screening, Low Resolution GIF Screening \\ High Resolution Finissage, at 568 Broadway, SoHo, New York, on October 19, 2024. Moises Sanabria presented All Studios Everything, an internet-culture film. The artist CV records the screening as curated by Kelani Nichole for Postmasters Gallery, New York.',
    featured_work: 'All Studios Everything',
    curator: 'Kelani Nichole',
    related: [
      {
        href: 'https://www.youtube.com/watch?v=XuSwUBULiQs',
        label: 'All Studios Everything on YouTube',
      },
    ],
  },
  {
    id: 7,
    title: 'Notions of Home',
    date: 'December 2024',
    slug: 'notions-of-home',
    activityType: 'Exhibition / digital presentation',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg',
    imageAlt:
      'Notions of Home exhibition graphic listing Moises Sanabria with Fabiola Larios, ICA Miami, Dminti, and Tezos',
    location: 'ICA Miami / Dminti / Tezos, Miami, FL',
    description:
      'In December 2024, Moises Sanabria participated in Notions of Home, a group exhibition in Miami presented by ICA Miami, Dminti, and Tezos. The exhibition graphic lists him with Fabiola Larios.',
    featured_work: 'With Fabiola Larios',
    link: 'https://spotlight.tezos.com/art-on-tezos-2024-miami-art-week/',
    externalLinkLabel: 'Art on Tezos — Miami Art Week',
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
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1789442394/art/moisestech-website/artworks/2026_taste_the_algorithm/TasteTheAlgorithm_Museum-of-Sex-Miami_F_CK-Art_PhotoBy_Mateo-SeZa-1024x683_bus6vb.jpg',
    imageAlt:
      'Taste the Algorithm installed at the Museum of Sex Miami in 2026. Photo: Mateo SeZa / SeZa Studios.',
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
    title: 'Algorítmica Íntima :: Runtime ::',
    date: 'June–July 2025',
    slug: 'algoritmica-intima',
    activityType: 'Group exhibition',
    imageUrl: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751123479/art/moisestech-website/exhibitions/june_2025_algoritmica_intima_cdmx/algoritmica-intima-exhibitions-june-2025_zmg4mq.jpg',
    imageAlt:
      'Algorítmica Íntima :: Runtime :: exhibition graphic, Centro Cultural Afirme, Mexico City, June–July 2025',
    location: 'Centro Cultural Afirme, Mexico City, Mexico',
    description:
      'International group exhibition at Centro Cultural Afirme, Mexico City, documented on the exhibition graphic as June–July 2025. The grant-year presentation context is June 21, 2025. The exhibition brings together artists working around algorithms, computational culture, technological mediation, and digital systems. The site record does not identify a separate title for the work Moises Sanabria presented.',
    tags: ['Digital Art', 'Algorithms', 'Intimacy', 'Technology'],
    // TODO: Add installation photography. The exhibition graphic does not name Moises Sanabria’s presented artwork.
  },
  {
    id: 15,
    title: 'New Media Block Party',
    date: 'April 17, 2025',
    slug: 'new-media-block-party',
    activityType: 'AI24 Live / experimental AI media presentation',
    location: 'Pérez Art Museum Miami, Miami, FL',
    archiveOnly: true,
    description:
      'On April 17, 2025, Moises Sanabria participated in the New Media Block Party at Pérez Art Museum Miami alongside Fabiola Larios through AI24 Live, a collaborative platform. The presentation was experimental AI-generated media and moving image.',
    featured_work: 'AI24 Live, with Fabiola Larios',
    // TODO: Add permission-cleared New Media Block Party photography. Do not substitute unrelated PAMM or Digital Divinities images.
    related: [{ href: '/ai24', label: 'AI24' }],
  },
];

export function getExhibitionBySlug(slug: string) {
  return exhibitions.find((exhibition) => exhibition.slug === slug);
}
