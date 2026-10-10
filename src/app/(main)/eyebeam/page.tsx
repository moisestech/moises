import { Metadata } from 'next';
import EyebeamInquiryPage from '@/components/page/EyebeamInquiryPage';

export const metadata: Metadata = {
  title: 'Materializing the Internet | Moises Sanabria',
  description:
    'Works and inquiries by Moises Sanabria on agency, refusal, and distributed technological systems. Selected works: 5 Million Dollars 1 Terabyte, Doom Scrolling Treadmill.',
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
