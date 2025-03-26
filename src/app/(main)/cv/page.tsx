import { Metadata } from 'next';
import CvClientPage from '@/components/CvClientPage';

export const metadata: Metadata = {
  title: 'CV | Moises Sanabria',
  description: 'Professional curriculum vitae of Moises Sanabria, artist and creative technologist.'
};

export default function CvPage() {
  return <CvClientPage />;
}
