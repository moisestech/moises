import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getWorkshopBySlug,
  listCatalogLandingSlugs,
  WORKSHOP_RESERVED_DEEP_SLUGS,
} from '@/content/workshops/catalog';
import { WorkshopCatalogLandingClient } from '@/components/workshops/WorkshopCatalogLandingClient';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listCatalogLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const workshop = getWorkshopBySlug(slug);
  if (!workshop || workshop.status !== 'ready') {
    return { title: 'Workshop | Moises Sanabria' };
  }
  const title = `${workshop.publicTitle} — Workshop | Moises Sanabria`;
  const description = workshop.hook || workshop.shortDescription;
  const url = `https://moises.tech/workshop/${workshop.slug}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

export default async function WorkshopCatalogLandingPage({ params }: PageProps) {
  const { slug } = await params;
  if ((WORKSHOP_RESERVED_DEEP_SLUGS as readonly string[]).includes(slug)) {
    notFound();
  }
  const workshop = getWorkshopBySlug(slug);
  if (!workshop || workshop.status !== 'ready') {
    notFound();
  }
  return <WorkshopCatalogLandingClient slug={slug} />;
}
