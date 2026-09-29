import type { Metadata } from 'next';
import { BakehouseSmartSignsClient } from '@/components/institutions/BakehouseSmartSignsClient';
import { bakehouseSmartSigns } from '@/content/institutions/bakehouse-smart-signs';

const { meta } = bakehouseSmartSigns;

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

export default function BakehouseSmartSignsPage() {
  return <BakehouseSmartSignsClient />;
}
