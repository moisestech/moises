import type { Metadata } from 'next';
import { BookleggersPageClient } from '@/components/institutions/BookleggersPageClient';
import { bookleggersPage } from '@/content/institutions/bookleggers';

const { meta } = bookleggersPage;

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

export default function BookleggersPage() {
  return <BookleggersPageClient />;
}
