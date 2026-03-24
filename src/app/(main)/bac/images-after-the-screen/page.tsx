import { Metadata } from 'next';
import BacFieldGuideClient from '@/components/bac-field-guide/BacFieldGuideClient';

const canonical = 'https://moises.tech/bac/images-after-the-screen';

export const metadata: Metadata = {
  title: 'BAC Reading Group — Session Field Guide | Images After the Screen — Moises Sanabria',
  description:
    'Session field guide for the BAC reading group on photography, AI, vulgarity, authorship, and the changing visual condition. Readings: Steyerl, Fontcuberta, Kissick. March 26, 2026.',
  openGraph: {
    title: 'BAC Reading Group — Session Field Guide | Images After the Screen',
    description:
      'Photography, AI, and the new visual order — readings, concepts, and discussion questions with Moises Sanabria and Fabiola Larios.',
    type: 'website',
    url: canonical,
  },
};

export default function BacImagesAfterTheScreenPage() {
  return <BacFieldGuideClient />;
}
