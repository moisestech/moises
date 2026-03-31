import type { Metadata } from 'next';
import DigitalDivinitiesProjectLanding from '@/components/digital-divinities/DigitalDivinitiesProjectLanding';
import { DIGITAL_DIVINITIES_PROJECT } from '@/constants/digital-divinities-project';

const title = 'Digital Divinities — Interactive AI Art Installation by Moises Sanabria';
const description =
  'An interactive AI art exhibit transforming visitor selfies into mythic portraits through generative image systems.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Moises Sanabria',
    'Digital Divinities',
    'interactive installation',
    'AI art',
    'generative art',
    'Miami artist',
    'museum',
    'festival',
    'public program',
  ],
  alternates: {
    canonical: '/art/digital_divinities/project',
  },
  openGraph: {
    title,
    description,
    url: '/art/digital_divinities/project',
    images: [
      {
        url: DIGITAL_DIVINITIES_PROJECT.ogImage,
        width: 1200,
        height: 630,
        alt: DIGITAL_DIVINITIES_PROJECT.heroImageAlt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [DIGITAL_DIVINITIES_PROJECT.ogImage],
  },
};

export default function DigitalDivinitiesProjectPage() {
  return <DigitalDivinitiesProjectLanding />;
}
