import type { SystemPipelineCaseStudyData } from '@/content/evidence/systemPipeline';

export type ProjectDossier = {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  title: string;
  category: string;
  whatItIs: string;
  whatIBuilt: string;
  stack: string[];
  whyItMatters: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional external product or program link */
  externalHref?: string;
  externalLabel?: string;
  /** Short editorial lead above the dossier body */
  lead?: string;
  /** Visible product flow for incubation case studies */
  productFlow?: readonly { label: string; detail: string }[];
  /** Optional multi-stage system pipeline walkthrough */
  systemPipeline?: SystemPipelineCaseStudyData;
};
