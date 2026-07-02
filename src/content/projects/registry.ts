import type { ProjectDossier } from './types';
import { loreMachineProject } from './lore-machine';
import { ai24Project } from './ai24';
import { infra24Project } from './infra24';
import { ooliteDigitalLabProject } from './oolite-digital-lab';

const bySlug: Record<string, ProjectDossier> = {
  [loreMachineProject.slug]: loreMachineProject,
  [ai24Project.slug]: ai24Project,
  [infra24Project.slug]: infra24Project,
  [ooliteDigitalLabProject.slug]: ooliteDigitalLabProject,
};

export function getProjectDossier(slug: string): ProjectDossier | undefined {
  return bySlug[slug];
}

export function projectStaticSlugs(): { slug: string }[] {
  return Object.keys(bySlug).map((slug) => ({ slug }));
}

export const allProjectDossiers = Object.values(bySlug);
