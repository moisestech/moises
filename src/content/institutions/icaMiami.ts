/**
 * /ica-miami — dedicated ICA systems case study.
 * Facts limited to verified Digital Producer work (Oct 2019–Dec 2020).
 * Notions of Home is later exhibition context only — not employment proof.
 */

import { icaMiamiSystemsBanner } from '@/content/evidence/applicationBanners';
import { LANE_ILLUSTRATIONS } from './hub';
import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
  INSTITUTIONAL_SCHEDULE_CTA_LABEL,
} from './shared';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const ICA_NOTIONS = `${CDN}/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg`;

export const icaMiamiPage = {
  meta: {
    title: 'ICA Miami — Digital Production Systems | Moises Sanabria',
    description:
      'Digital Producer at ICA Miami (2019–2020): Salesforce-to-WordPress workflows, website management, livestreaming, SEO, and vendor coordination for museum public programs.',
    url: 'https://moises.tech/ica-miami',
  },
  banner: icaMiamiSystemsBanner,
  bannerNote:
    'ICA Miami Design District building — institutional presence. Later-reference photograph; not workplace proof from 2019–2020.',
  logo: {
    src: `${CDN}/v1746647551/DMINTI/ica-miami-logo-black_wttraz.png`,
    alt: 'ICA Miami',
    width: 140,
    height: 140,
  },
  hero: {
    eyebrow: 'ICA Miami · Digital Producer',
    headline: 'Connecting museum data, public programming, and digital audiences.',
    lead:
      'From October 2019 to December 2020 I worked inside ICA Miami as Digital Producer—connecting Salesforce collection data to WordPress and ticketing, maintaining the public site, and producing livestreams and captions for programs that had to reach beyond the building.',
    dates: 'October 2019 – December 2020',
    status: 'Employment / operated',
    availability: 'Currently available for related web, Salesforce, and livestreaming work.',
  },
  artResearchCenter: {
    eyebrow: 'Knight Foundation Art + Research Center',
    title: 'A public channel for research, lectures, and live programs.',
    body:
      'During the Digital Producer tenure I helped build the public video channel that carries Art + Research Center lectures, talks, and live programs—so scholarship could travel beyond the building. The screenshots show that channel in use. The archive has continued since 2020.',
    support:
      'ICA Miami expanded and renamed the Art + Research Center the Knight Foundation Art + Research Center after a Knight Foundation grant supporting digital scholarship and public programs. The Digital Producer role sat inside that expansion.',
    logos: [
      {
        src: `${CDN}/v1790032347/art/moisestech-website/institutions/art-research-center-logo_ogrrdy.png`,
        alt: 'Knight Foundation Art + Research Center',
        width: 1292,
        height: 724,
      },
      {
        src: `${CDN}/v1790032373/art/moisestech-website/institutions/KF_Logotype_Icon-and-Stacked-Name_ifbyda.webp`,
        alt: 'John S. and James L. Knight Foundation',
        width: 1152,
        height: 373,
      },
    ],
    channel: [
      {
        src: `${CDN}/v1790032367/art/moisestech-website/institutions/ica-miami-art-research-center-1-playlist_bhafax.png`,
        alt: 'ICA Miami video channel — A+RC public lecture player',
        caption: 'Lecture player on the ICA Miami video channel.',
      },
      {
        src: `${CDN}/v1790032369/art/moisestech-website/institutions/ica-miami-art-research-center-2-playlist_glprua.png`,
        alt: 'ICA Miami video channel — A+RC lectures, talks, and live programs',
        caption: 'Channel grid for A+RC lectures and programs. The archive continues after 2020.',
      },
    ],
  },
  capabilities: [
    {
      title: 'Salesforce → WordPress / ticketing',
      body: 'Synced the museum’s art collection from Salesforce into WordPress ticketing infrastructure so public pages and registration could stay connected to institutional data.',
      illustration: LANE_ILLUSTRATIONS.web,
    },
    {
      title: 'Website management',
      body: 'WordPress administration, GitHub workflows, GraphQL, AWS CloudFront, SEO, and ongoing web maintenance.',
    },
    {
      title: 'Vendor coordination',
      body: 'Managed third-party vendors delivering interactive HTML5 video and web production—reducing the number of handoffs required for public digital work.',
    },
    {
      title: 'Livestreaming and captions',
      body: 'OBS livestreaming, YouTube, AI-driven subtitling, and After Effects for the Institute’s international music program and remote public programs.',
      illustration: LANE_ILLUSTRATIONS.live,
    },
  ],
  proofSequence: [
    { stage: 'Need', text: 'Digital autonomy, faster updates, connected collection and program data, remote programs.' },
    { stage: 'Intervention', text: 'Web and data integration, vendor coordination, streaming workflows, captioning, forms, reporting, and production.' },
    { stage: 'Adoption', text: 'Cross-department use by development, external affairs, education, curatorial, and programs.' },
    { stage: 'Capacity', text: 'Lower vendor friction and reusable public-program workflows.' },
  ],
  laterContext: {
    title: 'Later exhibition context',
    body: 'Notions of Home (ICA Miami × Dminti) is a later exhibition credit. It is cultural context, not visual evidence of the 2019–2020 Digital Producer role.',
    image: {
      src: ICA_NOTIONS,
      alt: 'Notions of Home — ICA Miami × Dminti exhibition banner',
    },
    href: '/calendar/exhibitions',
  },
  ctas: {
    primary: { label: INSTITUTIONAL_SCHEDULE_CTA_LABEL, href: INSTITUTIONAL_CALENDLY_URL },
    email: INSTITUTIONAL_EMAIL,
    back: { label: 'Institutional technology overview', href: '/institutions' },
  },
} as const;
