import type { Metadata } from 'next';
import { IcaMiamiPageClient } from '@/components/institutions/IcaMiamiPageClient';
import { icaMiamiPage } from '@/content/institutions/icaMiami';

const { meta } = icaMiamiPage;

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

export default function IcaMiamiPage() {
  return <IcaMiamiPageClient />;
}
