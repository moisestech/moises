import type { Metadata } from 'next';
import { ForwardDeployedClient } from '@/components/flagships/ForwardDeployedClient';
import { forwardDeployedFlagship } from '@/content/flagships/forward-deployed';

const { seo } = forwardDeployedFlagship;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  ...(seo.keywords?.length ? { keywords: seo.keywords } : {}),
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/forward-deployed',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
};

export default function ForwardDeployedPage() {
  return <ForwardDeployedClient />;
}
