import type { Metadata } from 'next';
import { ForwardDeployedClient } from '@/components/flagships/ForwardDeployedClient';
import { forwardDeployedFlagship } from '@/content/flagships/forward-deployed';

const { seo, banner } = forwardDeployedFlagship;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/forward-deployed',
    ...(banner?.src ? { images: [{ url: banner.src, alt: banner.alt }] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    ...(banner?.src ? { images: [banner.src] } : {}),
  },
  robots: { index: true, follow: true },
};

export default function ForwardDeployedPage() {
  return <ForwardDeployedClient />;
}
