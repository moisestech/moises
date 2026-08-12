import type { Metadata } from 'next';
import Ai24PageClient from '@/components/ai24/Ai24PageClient';
import { ai24Seo } from '@/content/ai24/page';

export const metadata: Metadata = {
  title: ai24Seo.title,
  description: ai24Seo.description,
  keywords: [...ai24Seo.keywords],
  alternates: { canonical: ai24Seo.canonical },
  openGraph: {
    title: ai24Seo.title,
    description: ai24Seo.description,
    type: 'website',
    url: ai24Seo.canonical,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: ai24Seo.ogImage,
        alt: ai24Seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ai24Seo.title,
    description: ai24Seo.description,
    images: [ai24Seo.ogImage],
  },
};

export default function Ai24CompanyPage() {
  return <Ai24PageClient />;
}
