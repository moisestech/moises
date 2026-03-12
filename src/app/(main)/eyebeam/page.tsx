import { Metadata } from 'next';
import EyebeamInquiryPage from '@/components/page/EyebeamInquiryPage';

export const metadata: Metadata = {
  title: 'Materializing the Internet | Moises Sanabria',
  description:
    'Works and inquiries by Moises Sanabria on platform logic, attention, belief, and networked life. Selected works: Doomscrolling Treadmill, Simulation Faith, Price of Existence.',
  openGraph: {
    title: 'Materializing the Internet | Moises Sanabria',
    description:
      'Works and inquiries by Moises Sanabria on platform logic, attention, belief, and networked life.',
    type: 'website',
    url: 'https://moises.tech/eyebeam',
  },
};

export default function EyebeamPage() {
  return <EyebeamInquiryPage />;
}
