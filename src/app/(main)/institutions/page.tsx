import type { Metadata } from 'next';
import { InstitutionsHubClient } from '@/components/institutions/InstitutionsHubClient';
import { institutionsHub } from '@/content/institutions/hub';

const { meta } = institutionsHub;

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

export default function InstitutionsPage() {
  return <InstitutionsHubClient />;
}
