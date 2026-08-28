import type { TeachingHighlight } from '../types';
import { genAiCurriculumSmeTeachingHighlights } from './genAiCurriculumSmePack';

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

/** Inspectable teaching materials; these links do not establish learner outcomes. */
export const designFacilitationTeachingHighlights: TeachingHighlight[] = [
  ...genAiCurriculumSmeTeachingHighlights.filter(
    (item) => item.href === '/workshop/the-art-of-ai-agents/share',
  ),
  {
    title: 'Saturday Lab hub',
    description:
      'Public workshop hub for mixed-audience making, deploy, and review. A designed program page, not an attendance report. Source: GitHub markdown at commit 4f7ec7e.',
    href: saturdayLabLive.hub,
  },
  {
    title: 'Facilitation: intake to working session',
    description:
      'Saturday Lab facilitator guide: intake questions, learner paths, shared demonstration, help queue, and closing reflection. Designed session plan, not an attendance report. Source: GitHub facilitator-run-of-show.md at 4f7ec7e.',
    href: saturdayLabLive.facilitator,
  },
  {
    title: 'Exercise: explain, edit, test',
    description:
      'Vibe Coding learner packet with tool choices and prompts for understanding, changing, reviewing, and debugging code. Inspect the exercise a participant would follow. Source: GitHub packet-vibe-coding-for-artists.md at 4f7ec7e.',
    href: saturdayLabLive.vibeCoding,
  },
  {
    title: 'Assessment: exit ticket',
    description:
      'The closing assessment instrument. Completed learner responses and measured learning gains are not published here. Source: GitHub print/exit-ticket.md at 4f7ec7e.',
    href: saturdayLabLive.exitTicket,
  },
];

export const saturdayLabSourceIndex = saturdayLabSource;
