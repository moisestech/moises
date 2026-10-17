/**
 * /ica-miami — historical Digital Producer case study (Oct 2019–Dec 2020).
 * Not a proposal, and not a description of ICA Miami’s current stack.
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
    title: 'ICA Miami — Digital Producer, 2019–2020 | Moises Sanabria',
    description:
      'Historical case study: Digital Producer at ICA Miami from October 2019 to December 2020. Collection data, the public site, livestreams, and vendor coordination during that tenure.',
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
    headline: 'Web, data, and digital production inside a museum program.',
    lead:
      'From October 2019 to December 2020 I worked at ICA Miami as Digital Producer. The role supported the public website, the path from collection records to ticketing, livestreams and captions for programs beyond the building, and coordination with vendors producing interactive video.',
    dates: 'October 2019 – December 2020',
    status: 'Completed employment',
    tenureNote:
      'This page records that tenure. It does not describe ICA Miami’s current staff, vendors, or technology.',
  },
  contributions: [
    {
      title: 'Collection data and public registration',
      body: 'Connected the museum’s art collection records to public pages and ticketing, so registration could stay tied to institutional data.',
      detail:
        'During this tenure, that connection ran from Salesforce into the WordPress ticketing infrastructure.',
      illustration: LANE_ILLUSTRATIONS.web,
    },
    {
      title: 'Website and publishing',
      body: 'Maintained the public site so program information could be updated as part of ongoing web operations.',
      detail:
        'The working stack in 2019–2020 included WordPress administration, GitHub workflows, GraphQL, AWS CloudFront, and SEO.',
    },
    {
      title: 'Livestreams, captions, and archive',
      body: 'Produced livestreams and captions for programs that had to reach beyond the building, including the Institute’s international music program.',
      detail:
        'Production used OBS, YouTube, AI-assisted subtitling, and After Effects.',
      illustration: LANE_ILLUSTRATIONS.live,
    },
    {
      title: 'Vendor coordination',
      body: 'Coordinated third-party vendors delivering interactive HTML5 video and web production for public digital work.',
      detail:
        'Vendors delivered interactive HTML5 video and web production. Coordinating that work was part of the Digital Producer role.',
    },
  ],
  artResearchCenter: {
    eyebrow: 'Knight Foundation Art + Research Center',
    title: 'A public channel for research, lectures, and live programs.',
    period: 'Built during the 2019–2020 tenure. The archive continued afterward.',
    body:
      'During the Digital Producer tenure I helped build the public video channel that carries Art + Research Center lectures, talks, and live programs. The screenshots show that channel in use.',
    support:
      'ICA Miami expanded and renamed the Art + Research Center the Knight Foundation Art + Research Center after a Knight Foundation grant supporting digital scholarship and public programs. The Digital Producer role sat inside that expansion. The channel’s later uploads are archive material, not evidence of continued employment.',
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
        caption: 'Documentary screenshot of a lecture player on the ICA Miami video channel.',
      },
      {
        src: `${CDN}/v1790032369/art/moisestech-website/institutions/ica-miami-art-research-center-2-playlist_glprua.png`,
        alt: 'ICA Miami video channel — A+RC lectures, talks, and live programs',
        caption:
          'Documentary screenshot of the channel grid. The archive continued after the Digital Producer tenure ended in 2020.',
      },
    ],
  },
  diagram: {
    title: 'A reconstructed view of the tenure',
    body: 'The diagram below is a conceptual illustration of how collection data, the public site, and livestream production related during 2019–2020. It is not a photograph of a system, and it is not a map of what ICA Miami uses now.',
  },
  laterContext: {
    title: 'Later exhibition context',
    body: 'Notions of Home (ICA Miami × Dminti) is a later exhibition credit. It is cultural context, not visual evidence of the 2019–2020 Digital Producer role.',
    image: {
      src: ICA_NOTIONS,
      alt: 'Notions of Home — ICA Miami × Dminti exhibition banner',
    },
    href: '/calendar/exhibitions/notions-of-home',
  },
  bridge: {
    title: 'What this experience informs',
    body: 'This experience informs how I approach connected digital operations for cultural organizations.',
  },
  ctas: {
    primary: { label: INSTITUTIONAL_SCHEDULE_CTA_LABEL, href: INSTITUTIONAL_CALENDLY_URL },
    email: INSTITUTIONAL_EMAIL,
    back: { label: 'Institutional technology overview', href: '/institutions' },
  },
} as const;
