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
  // Prefer a real local asset when available. Do not invent absolute / relative canonicals here —
  // Next metadataBase (https://moises.tech) resolves path-only canonicals.
  const canonical = `/opportunities/${opportunity.slug}`;
  const ogImage = opportunity.applicationBanner?.src;
  return {
    title: seo.title,
    description: seo.description,
    robots,
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: canonical,
      ...(ogImage ? { images: [{ url: ogImage, alt: opportunity.applicationBanner?.alt }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      ...(ogImage ? { images: [ogImage] } : {}),
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
