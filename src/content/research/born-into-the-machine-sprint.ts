/** @deprecated Sprint memo retired — use bitm-page.ts. Kept for import compatibility. */
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { bitmPage, bitmSeo } from '@/content/born-into-the-machine/bitm-page';

export const bornIntoTheMachineSprintHeroImage = bitmAssets.hero.og;

export const bornIntoTheMachineSprint = {
  title: bitmPage.titleDisplay,
  subtitle: bitmPage.subtitle,
  status: 'Research · active',
  year: bitmPage.year,
  lede: bitmPage.thesis,
} as const;

export const bornIntoTheMachineSprintLinks = [] as const;
export const bornIntoTheMachineDeeperLinks = bitmPage.deeperLinks;

export const bornIntoTheMachineSprintSeo = bitmSeo;
