import type { Metadata } from 'next';
import { BfiArchiveClient } from '@/components/institutions/BfiArchiveClient';
import { bfiArchive } from '@/content/institutions/bfi-archive';

const { meta } = bfiArchive;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: meta.url,
  },
};

export default function BfiArchivePage() {
  return <BfiArchiveClient />;
}
