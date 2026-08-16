/**
 * /ica-miami — dedicated ICA systems case study.
 * Facts limited to verified Digital Producer work (Oct 2019–Dec 2020).
 * Notions of Home is later exhibition context only — not employment proof.
 */

import { icaMiamiSystemsBanner } from '@/content/evidence/applicationBanners';
import { INSTITUTIONAL_CALENDLY_URL, INSTITUTIONAL_EMAIL } from './shared';

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
  bannerNote: null as string | null,
  hero: {
    eyebrow: 'ICA Miami · Digital Producer',
    headline: 'Connecting museum data, public programming, and digital audiences.',
    lead:
      'From October 2019 to December 2020 I worked inside ICA Miami as Digital Producer—connecting Salesforce collection data to WordPress and ticketing, maintaining the public site, and producing livestreams and captions for programs that had to reach beyond the building.',
    dates: 'October 2019 – December 2020',
    status: 'Employment / operated',
    availability: 'Currently available for related web, Salesforce, and livestreaming work.',
  },
  capabilities: [
    {
      title: 'Salesforce → WordPress / ticketing',
      body: 'Synced the museum’s art collection from Salesforce into WordPress ticketing infrastructure so public pages and registration could stay connected to institutional data.',
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
    primary: { label: 'Discuss a related project', href: INSTITUTIONAL_CALENDLY_URL },
    email: INSTITUTIONAL_EMAIL,
    back: { label: 'Institutional technology overview', href: '/institutions' },
  },
} as const;
