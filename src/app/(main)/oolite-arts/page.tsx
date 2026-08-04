import type { Metadata } from 'next';
import OoliteCaseStudy from '@/components/case-studies/oolite/OoliteCaseStudy';
import { OOLITE_ARTS_CASE_STUDY } from '@/content/oolite-arts/case-study';

const { meta } = OOLITE_ARTS_CASE_STUDY;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'article',
    url: meta.url,
    images: [
      {
        url: meta.ogImage,
        width: 1030,
        height: 579,
        alt: 'Oolite Arts Digital Lab',
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

export default function OoliteArtsPage() {
  return <OoliteCaseStudy />;
}
