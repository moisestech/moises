import type { TeachingHighlight } from '../types';
import { genAiCurriculumSmeTeachingHighlights } from './genAiCurriculumSmePack';

const saturdayLab =
  'https://github.com/moisestech/infra24/blob/4f7ec7e78601434be142dc333bff1fa726bce976/content/workshops/saturday-lab';

/** Inspectable teaching materials; these links do not establish learner outcomes. */
export const designFacilitationTeachingHighlights: TeachingHighlight[] = [
  ...genAiCurriculumSmeTeachingHighlights.filter(
    (item) => item.href === '/workshop/the-art-of-ai-agents/share',
  ),
  {
    title: 'Facilitation: intake to working session',
    description:
      'Saturday Lab facilitator guide: intake questions, learner paths, shared demonstration, help queue, and closing reflection. A designed session plan, not an attendance report.',
    href: `${saturdayLab}/facilitator-run-of-show.md`,
  },
  {
    title: 'Exercise: explain, edit, test',
    description:
      'Vibe Coding learner packet with tool choices and prompts for understanding, changing, reviewing, and debugging code. Inspect the exercise a participant would follow.',
    href: `${saturdayLab}/packet-vibe-coding-for-artists.md`,
  },
  {
    title: 'Assessment: exit ticket',
    description:
      'The closing assessment instrument. Completed learner responses and measured learning gains are not published here.',
    href: `${saturdayLab}/print/exit-ticket.md`,
  },
];
