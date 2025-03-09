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
}

export const exhibitions: Exhibitions[] = [
  {
    id: 1,
    title: 'The Net Art Gala',
    date: 'May',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951050/art/moisestech-website/exhibitions/may_2025_netartgala_ny/net-art-gala-exhibition-banner-og_nxqcum.png',
    location: 'NY, USA',
    description: 'This exhibition explores the complex relationship between humans and technology, examining how digital devices have evolved beyond tools to become objects of desire and worship. Through diverse artworks, the exhibition investigates how technology shapes modern identity, self-representation, and our understanding of gender in the digital age. Featured works highlight the intimate fusion of human bodies with technological extensions, revealing patterns of power, dependency, and pleasure in our digital interactions. The exhibition critically examines contemporary phenomena including technological messianism, digital behavior modification, innovation obsession, and the pursuit of perfection through technological means. It invites viewers to reflect on their own relationship with technology and its role in shaping human consciousness and desire.',
    tags: ["Technology", "Identity", "Digital Culture", "Body Politics"],

  },
  {
    id: 2,
    title: 'Technofetishim',
    date: 'Apr',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740950484/art/moisestech-website/exhibitions/apr_2025_technofetishism_momus/momus-exhibition-banner_uun9rx.jpg',
    location: 'Thessaloniki, Greece',
    description: 'This exhibition explores the complex relationship between humans and technology, examining how digital devices have evolved beyond tools to become objects of desire and worship. Through diverse artworks, the exhibition investigates how technology shapes modern identity, self-representation, and our understanding of gender in the digital age. Featured works highlight the intimate fusion of human bodies with technological extensions, revealing patterns of power, dependency, and pleasure in our digital interactions. The exhibition critically examines contemporary phenomena including technological messianism, digital behavior modification, innovation obsession, and the pursuit of perfection through technological means. It invites viewers to reflect on their own relationship with technology and its role in shaping human consciousness and desire.',
    tags: ["Technology", "Identity", "Digital Culture", "Body Politics"],

  },
  {
    id: 3,
    title: 'Bakehouse Open Studios',
    date: 'Mar 11',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    location: 'Miami, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 4,
    title: 'Performance in Flux',
    date: 'February 21-22',
    imageUrl:
      '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
    location: 'Orlando, USA',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
  },
  {
    id: 5,
    title: 'Low Resolution',
    date: 'Oct 23, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
    location: 'NY, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 6,
    title: 'Notions of Home',
    date: 'December 6, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg',
    location: 'Miami, USA',
    description:
      'ICA Miami X Dminti presents Notions of Home, a group exhibition featuring works by artists from across the globe.',
  },
  {
    id: 7,
    title: 'Artweek Satellite Art Show',
    date: 'Dec 6-11, 2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951329/art/moisestech-website/exhibitions/dec_2024_satellite-art-show_mia/satellite-art-exhibition-banner_fcgciy.png',
    location: 'Orlando, FL',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
  },
  {
    id: 8,
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
    id: 9,
    title: 'Future Muses',
    date: 'December 9, 2023',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1740951765/art/moisestech-website/exhibitions/2023_dec_future-muses_mia/future-muses-adobe-future-commerce_banner_uduetj.webp',
    location: 'Miami, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
];
