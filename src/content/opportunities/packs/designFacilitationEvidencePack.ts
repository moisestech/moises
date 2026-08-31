import type { TeachingHighlight } from '../types';
import { genAiCurriculumSmeTeachingHighlights } from './genAiCurriculumSmePack';
import { deloitteFacilitatorWorkshopStill } from '@/content/evidence/applicationBanners';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { digilabMedia, OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/oolite-arts/media';

const n8nBanner = automationProjectSpecs['n8n-gmail-intelligence'];

/** Live teaching pack — prefer these in the dossier over GitHub blobs. */
export const saturdayLabLive = {
  hub: 'https://www.dcc.miami/workshop/saturday-lab',
  facilitator: 'https://www.dcc.miami/workshop/saturday-lab/facilitator',
  vibeCoding: 'https://www.dcc.miami/workshop/saturday-lab/vibe-coding',
  exitTicket: 'https://www.dcc.miami/workshop/saturday-lab/exit-ticket',
} as const;

/** Inspectable markdown source at a pinned infra24 commit — not the primary interviewer link. */
const saturdayLabSource =
  'https://github.com/moisestech/infra24/blob/4f7ec7e78601434be142dc333bff1fa726bce976/content/workshops/saturday-lab';

const vibe29 = digilabMedia['docs.vibe-apr25-29'];
const vibe35 = digilabMedia['docs.vibe-apr25-35'];
const vibe39 = digilabMedia['docs.vibe-apr25-39'];

export const designFacilitationTeachingHighlights: TeachingHighlight[] = [
  ...genAiCurriculumSmeTeachingHighlights
    .filter((item) => item.href === '/workshop/the-art-of-ai-agents/share')
    .map((item) => ({
      ...item,
      imageSrc: n8nBanner.imageSrc,
      imageAlt: n8nBanner.imageAlt,
    })),
  {
    title: 'Saturday Lab hub',
    description:
      'Public workshop hub for mixed-audience making, deploy, and review. A designed program page, not an attendance report. Source: GitHub markdown at commit 4f7ec7e.',
    href: saturdayLabLive.hub,
    imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
    imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    media: [
      {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
        caption: 'Digital Lab — Saturday Lab hub',
      },
    ],
  },
  {
    title: 'Facilitation: intake to working session',
    description:
      'Saturday Lab facilitator guide: intake questions, learner paths, shared demonstration, help queue, and closing reflection. Designed session plan, not an attendance report. Source: GitHub facilitator-run-of-show.md at 4f7ec7e.',
    href: saturdayLabLive.facilitator,
    imageSrc: deloitteFacilitatorWorkshopStill.src,
    imageAlt: deloitteFacilitatorWorkshopStill.alt,
    imageLocal: true,
    media: [
      {
        src: deloitteFacilitatorWorkshopStill.src,
        alt: deloitteFacilitatorWorkshopStill.alt,
        local: true,
        caption: 'Workshop still — facilitation',
      },
      {
        src: '/images/teaching/saturday-lab-facilitator-flow.svg',
        alt: 'Intake, learner-path routing, help queue, and run-of-show',
        local: true,
        caption: 'Intake → paths → help queue → run-of-show',
      },
    ],
  },
  {
    title: 'Exercise: explain, edit, test',
    description:
      'Vibe Coding learner packet with tool choices and prompts for understanding, changing, reviewing, and debugging code. Inspect the exercise a participant would follow. Source: GitHub packet-vibe-coding-for-artists.md at 4f7ec7e.',
    href: saturdayLabLive.vibeCoding,
    imageSrc: vibe35.src,
    imageAlt: vibe35.alt,
    media: [
      { src: vibe35.src, alt: vibe35.alt, caption: 'Vibe coding workshop — April 25' },
      { src: vibe29.src, alt: vibe29.alt, caption: 'Documentation frame 29' },
      { src: vibe39.src, alt: vibe39.alt, caption: 'Workstations — frame 39' },
    ],
  },
  {
    title: 'Assessment: exit ticket',
    description:
      'The closing assessment instrument. Completed learner responses and measured learning gains are not published here. A form screenshot is not in this repo — this is a typographic preview of the designed questions. Source: GitHub print/exit-ticket.md at 4f7ec7e.',
    href: saturdayLabLive.exitTicket,
    imageSrc: '/images/teaching/saturday-lab-exit-ticket.svg',
    imageAlt: 'Saturday Lab exit ticket instrument — designed questions, not scores',
    imageLocal: true,
    media: [
      {
        src: '/images/teaching/saturday-lab-exit-ticket.svg',
        alt: 'Saturday Lab exit ticket instrument — designed questions, not scores',
        local: true,
        caption: 'Instrument preview — responses are not published',
      },
    ],
  },
];

export const saturdayLabSourceIndex = saturdayLabSource;
