import type { Metadata } from 'next';
import SfccSupportMaterialsPage from '@/components/grant/SfccSupportMaterialsPage';
import { sfccMeta, sfccOgImage, sfccSeo } from '@/content/grants/sfcc-2026';

export const metadata: Metadata = {
  title: sfccSeo.title,
  description: sfccSeo.description,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: sfccMeta.canonicalUrl,
  },
  openGraph: {
    title: sfccSeo.title,
    description: sfccSeo.description,
    type: 'website',
    url: sfccMeta.canonicalUrl,
    siteName: 'Moises Sanabria',
    images: [
      {
        url: sfccOgImage.url,
        alt: sfccOgImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: sfccSeo.title,
    description: sfccSeo.description,
    images: [sfccOgImage.url],
  },
};

export default function Sfcc2026SupportMaterialsRoute() {
  return <SfccSupportMaterialsPage />;
}
