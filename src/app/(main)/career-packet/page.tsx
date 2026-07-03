import type { Metadata } from 'next';
import { CareerPacketClient } from '@/components/ai-engineering/CareerPacketClient';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';

const SITE = 'https://moises.tech';
const p = aiEngineeringPacket;
const seo = p.careerPacketSeo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE}/career-packet` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: `${SITE}/career-packet`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
    images: [
      {
        url: p.careerPacketOgImage,
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [p.careerPacketOgImage],
  },
};

export default function CareerPacketPage() {
  return <CareerPacketClient />;
}
