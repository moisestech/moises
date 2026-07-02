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
};
