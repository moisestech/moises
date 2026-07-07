import type { Metadata } from 'next';
import { PostAiReadymadesPage } from '@/components/post-ai-readymades/PostAiReadymadesPage';
import { postAiReadymadesSeo, postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';

const SITE = 'https://moises.tech';
const CANONICAL = `${SITE}/projects/born-into-the-machine/365-post-ai-readymades`;
const ogImage =
  postAiReadymadesStudies.find((study) => study.imageUrl)?.imageUrl ??
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1775099574/art/moisestech-website/research/broken-acceleration/broken-acceleration-writing-apr1st-wavemaker-2026_xrg993.png';

export const metadata: Metadata = {
  title: postAiReadymadesSeo.title,
  description: postAiReadymadesSeo.description,
  keywords: [
    '365 Post-AI Readymades',
    'Born Into the Machine',
    'Moises Sanabria',
    'post-AI sculpture',
    'readymades',
    'institutional catalogue',
    'Miami art',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: postAiReadymadesSeo.title,
    description: postAiReadymadesSeo.description,
    type: 'website',
    url: CANONICAL,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [{ url: ogImage, alt: postAiReadymadesSeo.ogImageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: postAiReadymadesSeo.title,
    description: postAiReadymadesSeo.description,
    images: [ogImage],
  },
};

export default function PostAiReadymadesRoutePage() {
  return <PostAiReadymadesPage />;
}
