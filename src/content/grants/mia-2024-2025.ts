import { getExhibitionBySlug } from '@/constants/exhibitions';

const SITE = 'https://www.moises.tech';

export const miaGrant = {
  path: '/grant/mia-2024-2025',
  canonicalUrl: `${SITE}/grant/mia-2024-2025`,
  title: 'Miami Individual Artists Grant FY2024–2025 | Moises Sanabria',
  description:
    'Artistic activity by Miami-based artist Moises Sanabria from October 2024 through September 2025, including exhibitions, new-media presentations, sculpture, research, and artist education.',
  ogImage: {
    url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
    alt: 'Privacy is a Luxury, a sculpture by Moises Sanabria presented at The Net Gala in 2025',
  },
} as const;

export interface MiaActivity {
  date: string;
  title: string;
  venue: string;
  type: string;
  body: string;
  href: string;
  linkLabel: string;
  image?: { src: string; alt: string; caption?: string };
}

function exhibitionImage(slug: string) {
  const exhibition = getExhibitionBySlug(slug);
  if (!exhibition?.imageUrl) return undefined;
  return {
    src: exhibition.imageUrl,
    alt: exhibition.imageAlt || exhibition.title,
  };
}

export const miaActivities: MiaActivity[] = [
  {
    date: 'October 19, 2024',
    title: 'Low Resolution',
    venue: '568 Broadway — New York, NY',
    type: 'Moving-image screening',
    body: 'All Studios Everything was screened at Low Resolution GIF Screening \\ High Resolution Finissage, a one-night moving-image program at 568 Broadway, SoHo. The artist CV records the screening as curated by Kelani Nichole for Postmasters Gallery, New York.',
    href: '/calendar/exhibitions/low-resolution',
    linkLabel: 'Low Resolution screening',
    image: exhibitionImage('low-resolution'),
  },
  {
    date: 'December 2024',
    title: 'Notions of Home',
    venue: 'ICA Miami / Dminti / Tezos — Miami, FL',
    type: 'Exhibition / digital presentation',
    body: 'Moises Sanabria participated in Notions of Home, a group exhibition in Miami presented with ICA Miami, Dminti, and Tezos. The exhibition graphic lists him with Fabiola Larios.',
    href: '/calendar/exhibitions/notions-of-home',
    linkLabel: 'Notions of Home',
    image: exhibitionImage('notions-of-home'),
  },
  {
    date: 'March 21 – August 31, 2025',
    title: 'Technofetishism: Whip It into Shape',
    venue: 'MOMus – Experimental Center for the Arts — Thessaloniki, Greece',
    type: 'Group exhibition and recorded artist contribution',
    body: 'Group exhibition examining bodies, desire, control, technology, overconsumption, and information overload. The site record credits a collaboration with Tom Galle and John Yuyi. A recorded artist contribution on technology, intimacy, desire, and mediated relationships was made in connection with the exhibition. That recording is not in the site archive.',
    href: '/calendar/exhibitions/technofetishism',
    linkLabel: 'Technofetishism at MOMus',
    image: exhibitionImage('technofetishism'),
  },
  {
    date: 'April 17, 2025',
    title: 'New Media Block Party',
    venue: 'Pérez Art Museum Miami — Miami, FL',
    type: 'AI24 Live / experimental AI media presentation',
    body: 'Moises Sanabria participated alongside Fabiola Larios through AI24 Live, a collaborative platform, presenting experimental AI-generated media and moving-image work at the New Media Block Party.',
    href: '/calendar/exhibitions/new-media-block-party',
    linkLabel: 'New Media Block Party at PAMM',
  },
  {
    date: 'April 2025',
    title: 'Own Your Digital Presence',
    venue: 'Bakehouse Art Complex — Miami, FL',
    type: 'Multi-session artist workshop',
    body: 'Moises Sanabria led the Bakehouse edition of Own Your Digital Presence, also titled Build Your Website. The sessions covered artist websites, digital identity, presenting work online, search visibility, and artist autonomy on the web. They ran April 24, April 26–27, and April 28, 2025.',
    href: '/workshop/own-your-digital-presence',
    linkLabel: 'Own Your Digital Presence workshop',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg',
      alt: 'Own Your Digital Presence workshop, in-person weekend session',
    },
  },
  {
    date: 'May 3, 2025',
    title: 'The Net Gala',
    venue: '64 Dobbin Street — Brooklyn, NY',
    type: 'Privacy is a Luxury · sculpture / technological readymade',
    body: 'Privacy is a Luxury was presented at The Net Gala. The sculpture stages privacy, corporate anonymity, surveillance, payment infrastructure, and network hardware as one object, with identity treated as something transactional.',
    href: '/art/privacy_is_a_luxury',
    linkLabel: 'Privacy is a Luxury',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
      alt: 'Privacy is a Luxury — gold Guy Fawkes mask with payment terminal and Wi-Fi routers',
      caption: 'The artwork. Installation photography from 64 Dobbin Street is not in the archive.',
    },
  },
  {
    date: 'June 21, 2025',
    title: 'Algorítmica Íntima :: Runtime ::',
    venue: 'Centro Cultural Afirme — Mexico City, Mexico',
    type: 'Group exhibition',
    body: 'Group exhibition on algorithms, computational culture, technological mediation, and digital systems. The exhibition graphic dates the presentation June–July 2025; the grant-year record dates the presentation context to June 21, 2025. The site record does not name a separate artwork title for this participation.',
    href: '/calendar/exhibitions/algoritmica-intima',
    linkLabel: 'Algorítmica Íntima :: Runtime ::',
    image: exhibitionImage('algoritmica-intima'),
  },
  {
    date: 'August–September 2025',
    title: 'Taste the Algorithm',
    venue: 'Studio research and development — Miami, FL',
    type: 'New sculpture / research and development',
    body: 'The sculpture was developed in 2025. On September 16, 2025, it was selected for the forthcoming F*ck Art Miami exhibition at the Museum of Sex Miami. That exhibition opened in 2026. The photograph below documents the 2026 installation, not a 2025 exhibition.',
    href: '/art/taste_the_algorithm',
    linkLabel: 'Taste the Algorithm',
    image: {
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1789442394/art/moisestech-website/artworks/2026_taste_the_algorithm/TasteTheAlgorithm_Museum-of-Sex-Miami_F_CK-Art_PhotoBy_Mateo-SeZa-1024x683_bus6vb.jpg',
      alt: 'Taste the Algorithm installed at the Museum of Sex Miami in 2026. Photo: Mateo SeZa / SeZa Studios.',
      caption: 'Later realization, Museum of Sex Miami, 2026. Developed and selected in 2025.',
    },
  },
];

export const miaRelatedLinks = [
  { href: '/art/privacy_is_a_luxury', label: 'Privacy is a Luxury' },
  { href: '/art/taste_the_algorithm', label: 'Taste the Algorithm' },
  { href: '/calendar/exhibitions/low-resolution', label: 'Low Resolution — All Studios Everything' },
  { href: '/calendar/exhibitions/new-media-block-party', label: 'New Media Block Party — AI24 Live' },
  { href: '/ai24', label: 'AI24' },
  { href: '/workshop/own-your-digital-presence', label: 'Own Your Digital Presence' },
  { href: '/calendar/exhibitions/notions-of-home', label: 'Notions of Home' },
  { href: '/calendar/exhibitions/technofetishism', label: 'Technofetishism: Whip It into Shape' },
  { href: '/calendar/exhibitions/algoritmica-intima', label: 'Algorítmica Íntima :: Runtime ::' },
  { href: '/calendar/exhibitions/the-net-gala', label: 'The Net Gala' },
  { href: '/selected-works', label: 'Selected works' },
] as const;
