import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OpportunityPageClient } from '@/components/opportunities/OpportunityPageClient';
import { getOpportunity, opportunityStaticSlugs } from '@/content/opportunities/registry';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return opportunityStaticSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const opportunity = getOpportunity(params.slug);
  if (!opportunity) {
    return { title: 'Not found' };
  }
  const { seo } = opportunity;
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

export default function OpportunitySlugPage({ params }: Props) {
  const opportunity = getOpportunity(params.slug);
  if (!opportunity || opportunity.status !== 'active') {
    notFound();
  }
  return <OpportunityPageClient opportunity={opportunity} />;
}
