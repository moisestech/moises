import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WorkPageClient } from '@/components/work/WorkPageClient';
import { getWorkSite, workStaticSlugs } from '@/content/work/registry';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return workStaticSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getWorkSite(params.slug);
  if (!work) {
    return { title: 'Not found' };
  }
  const { seo } = work;
  const robots = seo.indexable === false ? { index: false as const, follow: true } : undefined;
  return {
    title: seo.title,
    description: seo.description,
    robots,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
    },
  };
}

export default function WorkSlugPage({ params }: Props) {
  const work = getWorkSite(params.slug);
  if (!work) {
    notFound();
  }
  return <WorkPageClient work={work} />;
}
