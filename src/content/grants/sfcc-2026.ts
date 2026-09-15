import { artist } from '@/constants/artworks';

export const sfccMeta = {
  program: 'FY 2026–2027 Visual and Media Artists Grant',
  organization: 'South Florida Cultural Consortium',
  shortName: 'SFCC',
  applicant: 'Moises Sanabria',
  route: '/grant/sfcc-2026',
  shortRoute: '/grant/sfcc',
  canonicalUrl: 'https://moises.tech/grant/sfcc-2026',
  shortUrl: 'https://moises.tech/grant/sfcc',
  website: 'https://moises.tech',
  selectedWorksHref: '/selected-works',
  email: 'm@moises.tech',
  dccHref: 'https://www.dcc.miami',
} as const;

export const sfccSeo = {
  title: 'Support materials | South Florida Cultural Consortium | Moises Sanabria',
  description:
    'Work samples, artist statement, and bio for Moises Sanabria’s FY 2026–2027 South Florida Cultural Consortium Visual and Media Artists Grant application.',
} as const;

export const sfccIntro = {
  eyebrow: `${sfccMeta.organization} · ${sfccMeta.program}`,
  headline: 'Support materials',
  lede: 'Recent work samples, supporting video, artist statement, and biography for the FY 2026–2027 review.',
} as const;

export const sfccStatement = artist.artist_statement;
export const sfccBio = artist.artist_bio;

const TASTE_IMAGE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1789442394/art/moisestech-website/artworks/2026_taste_the_algorithm/TasteTheAlgorithm_Museum-of-Sex-Miami_F_CK-Art_PhotoBy_Mateo-SeZa-1024x683_bus6vb.jpg';
const BABY_AGI_STUDIO =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp';
const BABY_AGI_EXHIBITION =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483634/art/moisestech-website/exhibitions/dec_2023_bakehouse_breadbytes/exhibition_shot_1_v9nqyt.jpg';

export type SfccSampleImage = {
  url: string;
  caption: string;
};

export type SfccWorkSample = {
  id: string;
  title: string;
  source: string;
  year: string;
  href: string;
  caption: string;
  artworkHref?: string;
  articleHref?: string;
  articleLabel?: string;
  kind: 'youtube' | 'vimeo' | 'image';
  videoId?: string;
  aspectRatio?: '16:9' | '9:16';
  images?: readonly SfccSampleImage[];
};

export const sfccWorkSamples: SfccWorkSample[] = [
  {
    id: 'taste-the-algorithm',
    kind: 'image',
    title: 'Taste the Algorithm',
    source: 'Museum of Sex, Miami',
    year: '2026',
    href: '/art/taste_the_algorithm',
    artworkHref: '/art/taste_the_algorithm',
    articleHref:
      'https://www.artburstmiami.com/visual_arts/miami-museum-of-sex-fck-art-nature-and-artifice-exhibition',
    articleLabel: 'Artburst Miami',
    caption:
      'Installation view, F*ck Art: Nature & Artifice, Museum of Sex, Miami. Photo: Mateo SeZa / SeZa Studios.',
    images: [
      {
        url: TASTE_IMAGE,
        caption:
          'Taste the Algorithm — F*ck Art: Nature & Artifice, Museum of Sex, Miami. Photo: Mateo SeZa / SeZa Studios.',
      },
    ],
  },
  {
    id: 'doomscrolling-marathon',
    kind: 'youtube',
    videoId: 'qCkaEZjifXg',
    aspectRatio: '9:16',
    title: 'Doomscrolling Marathon',
    source: 'Aparadores, Mexico City',
    year: '2024',
    href: 'https://www.youtube.com/shorts/qCkaEZjifXg',
    artworkHref: '/art/doomscrolling_marathon',
    caption:
      'Vertical documentation of the public LED installation — a TikTok scroll staged as urban spectacle.',
  },
  {
    id: 'neural-chapel',
    kind: 'youtube',
    videoId: '3Wc1bN54R_I',
    aspectRatio: '16:9',
    title: 'Tech Prophecies: Neural Chapel',
    source: 'Fabiola Larios & Moises Sanabria',
    year: '2026',
    href: 'https://youtu.be/3Wc1bN54R_I',
    artworkHref: '/art/neural_chapel',
    caption:
      'Collaborative work with Fabiola Larios, presented in the context of ECCV 2026 Tech Prophecies.',
  },
  {
    id: 'baby-agi',
    kind: 'vimeo',
    videoId: '1079770763',
    title: 'Baby AGI / From Cradle to AGI',
    source: 'Bakehouse Art Complex',
    year: '2023',
    href: 'https://vimeo.com/1079770763',
    artworkHref: '/art/baby_agi',
    caption:
      'Generative loop animation for the stroller sculpture shown in Breadbytes: Artmaking for the Next Generation. Click photographs to view fullscreen.',
    images: [
      {
        url: BABY_AGI_STUDIO,
        caption: 'Baby AGI — stroller assembled from gaming hardware, GPUs, and robotic hands',
      },
      {
        url: BABY_AGI_EXHIBITION,
        caption: 'From Cradle to AGI — Breadbytes, Bakehouse Art Complex, 2023–2024',
      },
    ],
  },
  {
    id: 'vernissage-studio-visit',
    kind: 'youtube',
    videoId: '_8UDJ-n-PB0',
    title: 'Studio Visit: Moises Sanabria / Bakehouse Art Complex, Miami',
    source: 'VernissageTV',
    year: '2025',
    href: 'https://www.youtube.com/watch?v=_8UDJ-n-PB0',
    caption:
      'On-site studio visit documenting Studio 43 at Bakehouse Art Complex — production environment, works in progress, and how recent propositions become material practice.',
  },
  {
    id: 'bakehouse-community-documentary',
    kind: 'vimeo',
    videoId: '1154842944',
    title: 'Bakehouse Art Complex: On Community, Affordability, and Impact',
    source: 'Bakehouse Art Complex',
    year: '2026',
    href: 'https://vimeo.com/1154842944',
    caption:
      'Bakehouse 40th-anniversary documentary on community, affordability, and studio infrastructure. Created by Juan Luis Matos and Monica Sorelle (Preguntas Studio); produced and commissioned by Bakehouse Art Complex.',
  },
];

export const sfccOgImage = {
  url: TASTE_IMAGE,
  alt: 'Taste the Algorithm at the Museum of Sex, Miami. Photo: Mateo SeZa / SeZa Studios.',
} as const;
