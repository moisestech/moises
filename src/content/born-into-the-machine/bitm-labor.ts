import type { BitmChapterId } from '@/config/born-into-the-machine-theme';

export type BitmLaborAnnotation = {
  chapterId: BitmChapterId;
  hours?: string;
  materials?: string;
  tools?: string;
  collaborators?: string;
  failures?: string;
  maintenance?: string;
  costRange?: string;
};

export const bitmLaborAnnotations: BitmLaborAnnotation[] = [
  {
    chapterId: 'boot',
    hours: '40+ hrs system design before public page',
    tools: 'Next.js, Cloudinary, content architecture',
    maintenance: 'Ongoing deployment, copy updates, asset swaps',
  },
  {
    chapterId: 'thesis',
    hours: 'Studio 43 portrait shoot + depth map processing',
    materials: 'Bakehouse studio infrastructure, cables, monitors',
    collaborators: 'Photography, pose estimation pipeline',
  },
  {
    chapterId: 'studio',
    hours: 'Resin prints: 4–12 hrs per object including wash/cure',
    materials: 'PLA, resin, supports, isopropyl, gloves',
    tools: 'Resin printer, ventilation, curing station',
    failures: 'Failed prints, warped supports, clogged nozzles',
  },
  {
    chapterId: 'method',
    hours: 'Plausibility audit often exceeds image generation time',
    tools: 'Spreadsheets, shop drawings, grant budgets',
    collaborators: 'Fabricators, institutional partners',
  },
  {
    chapterId: 'case-studies',
    hours: 'Baby AGI: weeks of assembly + electronics debugging',
    materials: 'Stroller, GPUs, custom PC, robotic hands',
    maintenance: 'Display calibration, fan replacement, cable management',
    costRange: 'Hardware-dependent; public art budgets rarely cover full stack',
  },
  {
    chapterId: 'public',
    hours: 'Install crew 8–24 hrs per venue',
    collaborators: 'Gallery staff, riggers, educators',
    maintenance: 'Daily checks for interactive works',
  },
  {
    chapterId: 'ethics',
    hours: 'Moderation and consent review for participatory AI',
    tools: 'Documentation, contracts, accessibility review',
    failures: 'Undisclosed synthetic imagery; uncredited labor',
  },
  {
    chapterId: 'author',
    hours: 'Teaching workshops 3–6 hrs per session',
    collaborators: 'Institutions, students, fellow artists',
  },
];

export function getLaborForChapter(chapterId: BitmChapterId): BitmLaborAnnotation | undefined {
  return bitmLaborAnnotations.find((a) => a.chapterId === chapterId);
}
