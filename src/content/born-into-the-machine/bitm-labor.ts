import type { BitmChapterId } from '@/config/born-into-the-machine-theme';
import type { BitmLaborField } from '@/content/born-into-the-machine/bitm-types';

export type BitmLaborAnnotation = {
  chapterId?: BitmChapterId;
  caseStudySlug?: string;
  fields: BitmLaborField[];
};

export const bitmLaborAnnotations: BitmLaborAnnotation[] = [
  {
    chapterId: 'boot',
    fields: [
      { label: 'Hours', value: '40+ hrs system design before public page', status: 'partial' },
      { label: 'Tools', value: 'Next.js, Cloudinary, content architecture', status: 'documented' },
      { label: 'Maintenance', value: 'Ongoing deployment, copy updates, asset swaps', status: 'documented' },
    ],
  },
  {
    chapterId: 'thesis',
    fields: [
      { label: 'Hours', value: 'Studio 43 portrait shoot + depth map processing', status: 'partial' },
      { label: 'Materials', value: 'Bakehouse studio infrastructure, cables, monitors', status: 'documented' },
      { label: 'Collaborators', value: 'Photography, pose estimation pipeline — pending verification', status: 'being-indexed' },
    ],
  },
  {
    chapterId: 'studio',
    fields: [
      { label: 'Hours', value: 'Resin prints: 4–12 hrs per object including wash/cure', status: 'partial' },
      { label: 'Materials', value: 'PLA, resin, supports, isopropyl, gloves', status: 'documented' },
      { label: 'Tools', value: 'Resin printer, ventilation, curing station, GPU workstation', status: 'documented' },
      { label: 'Failures', value: 'Failed prints, warped supports, clogged nozzles', status: 'documented' },
    ],
  },
  {
    chapterId: 'method',
    fields: [
      { label: 'Hours', value: 'Plausibility audit often exceeds image generation time', status: 'partial' },
      { label: 'Tools', value: 'Spreadsheets, shop drawings, grant budgets', status: 'documented' },
      { label: 'Collaborators', value: 'Fabricators, institutional partners — per project', status: 'partial' },
    ],
  },
  {
    chapterId: 'case-studies',
    fields: [
      { label: 'Hours', value: 'Varies per work — see individual Plausibility Studies', status: 'partial' },
      { label: 'Cost', value: 'Hardware-dependent; public art budgets rarely cover full stack', status: 'partial' },
    ],
  },
  {
    chapterId: 'public',
    fields: [
      { label: 'Hours', value: 'Install crew 8–24 hrs per venue', status: 'partial' },
      { label: 'Collaborators', value: 'Gallery staff, riggers, educators', status: 'partial' },
      { label: 'Maintenance', value: 'Daily checks for interactive works', status: 'documented' },
    ],
  },
  {
    chapterId: 'ethics',
    fields: [
      { label: 'Hours', value: 'Moderation and consent review for participatory AI', status: 'documented' },
      { label: 'Tools', value: 'Documentation, contracts, accessibility review', status: 'documented' },
      { label: 'Failures', value: 'Undisclosed synthetic imagery; uncredited labor', status: 'documented' },
    ],
  },
  {
    chapterId: 'author',
    fields: [
      { label: 'Hours', value: 'Teaching workshops 3–6 hrs per session', status: 'partial' },
      { label: 'Collaborators', value: 'Institutions, students, fellow artists', status: 'partial' },
    ],
  },
  {
    caseStudySlug: 'baby_agi',
    fields: [
      { label: 'Hours', value: 'Weeks of assembly + electronics debugging', status: 'partial' },
      { label: 'Materials', value: 'Stroller, GPUs, custom PC, robotic hands', status: 'documented' },
      { label: 'Maintenance', value: 'Display calibration, fan replacement, cable management', status: 'documented' },
      { label: 'Cost', value: 'Pending verification', status: 'being-indexed' },
    ],
  },
  {
    caseStudySlug: 'doomscrolling_treadmill',
    fields: [
      { label: 'Hours', value: 'Festival install with crew labor', status: 'partial' },
      { label: 'Collaborators', value: 'Touch Grass program, Chroma Art Film Festival', status: 'partial' },
      { label: 'Maintenance', value: 'Treadmill mechanics, screen replacement', status: 'documented' },
    ],
  },
];

export function getLaborForChapter(chapterId: BitmChapterId): BitmLaborAnnotation | undefined {
  return bitmLaborAnnotations.find((a) => a.chapterId === chapterId);
}

export function getLaborForCaseStudy(slug: string): BitmLaborAnnotation | undefined {
  return bitmLaborAnnotations.find((a) => a.caseStudySlug === slug);
}
