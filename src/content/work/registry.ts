import type { WorkSite } from './types';
import { creativeTechImageTools } from './creative-tech-image-tools';

const bySlug: Record<string, WorkSite> = {
  [creativeTechImageTools.slug]: creativeTechImageTools,
};

export function getWorkSite(slug: string): WorkSite | undefined {
  return bySlug[slug];
}

export function workStaticSlugs(): { slug: string }[] {
  return Object.keys(bySlug).map((slug) => ({ slug }));
}
