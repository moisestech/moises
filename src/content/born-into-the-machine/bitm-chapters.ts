import type { BitmChapterId, BitmConceptualIconKey } from '@/config/born-into-the-machine-theme';

export type BitmChapter = {
  id: BitmChapterId;
  index: number;
  eyebrow: string;
  title: string;
  iconKey: BitmConceptualIconKey;
  railMode: string;
  systemLog?: string;
};

export const bitmChapters: BitmChapter[] = [
  {
    id: 'boot',
    index: 0,
    eyebrow: 'Chapter 00',
    title: 'Boot',
    iconKey: 'birth-boot',
    railMode: 'INITIALIZING',
    systemLog: '[SYSTEM BOOT SEQUENCE STARTED]',
  },
  {
    id: 'thesis',
    index: 1,
    eyebrow: 'Chapter 01',
    title: 'Thesis',
    iconKey: 'human-machine',
    railMode: 'PUBLIC',
    systemLog: '[MODEL OUTPUT ACCEPTED]',
  },
  {
    id: 'condition',
    index: 2,
    eyebrow: 'Chapter 02',
    title: 'The Condition',
    iconKey: 'model',
    railMode: 'SURVEILLANCE',
    systemLog: '[IMAGE IS NOT THE FINAL FORM]',
  },
  {
    id: 'studio',
    index: 3,
    eyebrow: 'Chapter 03',
    title: 'The Studio',
    iconKey: 'studio',
    railMode: 'PRODUCTION',
    systemLog: '[MATERIAL TEST FAILED]',
  },
  {
    id: 'method',
    index: 4,
    eyebrow: 'Chapter 04',
    title: 'The Method',
    iconKey: 'dataset',
    railMode: 'PIPELINE',
    systemLog: '[PUBLIC ACCESS REQUIRED]',
  },
  {
    id: 'case-studies',
    index: 5,
    eyebrow: 'Chapter 05',
    title: 'Case Studies',
    iconKey: 'iteration',
    railMode: 'FABRICATION',
  },
  {
    id: 'public',
    index: 6,
    eyebrow: 'Chapter 06',
    title: 'Public Infrastructure',
    iconKey: 'public-space',
    railMode: 'DISTRIBUTED',
    systemLog: '[OBJECT REQUIRES MAINTENANCE]',
  },
  {
    id: 'ethics',
    index: 7,
    eyebrow: 'Chapter 07',
    title: 'Ethics & Maintenance',
    iconKey: 'consent',
    railMode: 'GOVERNANCE',
  },
  {
    id: 'author',
    index: 8,
    eyebrow: 'Chapter 08',
    title: 'Author / Operator',
    iconKey: 'human-machine',
    railMode: 'COLLABORATE',
  },
];

export const bitmNavItems = bitmChapters.map((c) => ({
  id: c.id,
  label: c.title,
}));
