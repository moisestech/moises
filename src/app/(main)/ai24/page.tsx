import type { Metadata } from 'next';
import Ai24StudioLanding from '@/components/page/Ai24StudioLanding';
import { AI24_STUDIO } from '@/content/ai24/studio';

const { meta } = AI24_STUDIO;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: meta.url,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'AI24 — creative technology studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Ai24Page() {
  return <Ai24StudioLanding />;
}
