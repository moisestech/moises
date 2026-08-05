import type { Metadata } from 'next';
import { BakehousePageClient } from '@/components/institutions/BakehousePageClient';
import { bakehousePage } from '@/content/institutions/bakehouse';

const { meta } = bakehousePage;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: meta.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
};

export default function BakehousePage() {
  return <BakehousePageClient />;
}
