import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDossierClient } from '@/components/projects/ProjectDossierClient';
import { getProjectDossier, projectStaticSlugs } from '@/content/projects/registry';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projectStaticSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectDossier(params.slug);
  if (!project) {
    return { title: 'Not found' };
  }
  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      type: 'website',
    },
  };
}

export default function ProjectSlugPage({ params }: Props) {
  const project = getProjectDossier(params.slug);
  if (!project) {
    notFound();
  }
  return <ProjectDossierClient project={project} />;
}
