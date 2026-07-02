import type { Metadata } from 'next';
import { CareerPacketClient } from '@/components/ai-engineering/CareerPacketClient';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';

export const metadata: Metadata = {
  title: 'AI Engineering Career Packet — Moises Sanabria',
  description: aiEngineeringPacket.careerPacketIntro,
  robots: { index: false, follow: true },
  openGraph: {
    title: 'AI Engineering Career Packet — Moises Sanabria',
    description: aiEngineeringPacket.careerPacketIntro,
    type: 'website',
    url: 'https://moises.tech/career-packet',
    images: [
      {
        url: aiEngineeringPacket.careerPacketOgImage,
        width: 1200,
        height: 630,
        alt: 'Moises Sanabria — AI Engineering Career Packet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering Career Packet — Moises Sanabria',
    description: aiEngineeringPacket.careerPacketIntro,
    images: [aiEngineeringPacket.careerPacketOgImage],
  },
};

export default function CareerPacketPage() {
  return <CareerPacketClient />;
}
