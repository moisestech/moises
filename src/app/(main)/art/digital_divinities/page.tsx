import type { Metadata } from 'next';
import ArtworkDossierPage from '@/components/artwork-dossier/ArtworkDossierPage';
import { artist } from '@/constants/artworks';
import { DIGITAL_DIVINITIES_DOSSIER } from '@/content/artwork-dossiers/digital-divinities';

const artwork = artist.artworks.digital_divinities;

export const metadata: Metadata = {
  title: `${artwork.title} — Moises Sanabria`,
  description: DIGITAL_DIVINITIES_DOSSIER.publicDescription,
  alternates: { canonical: '/art/digital_divinities' },
  openGraph: {
    title: artwork.title,
    description: DIGITAL_DIVINITIES_DOSSIER.publicDescription,
    images: artwork.images[0]?.url ? [{ url: artwork.images[0].url, alt: artwork.title }] : [],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: artwork.title,
    description: DIGITAL_DIVINITIES_DOSSIER.publicDescription,
    images: artwork.images[0]?.url ? [artwork.images[0].url] : [],
  },
};

export default function DigitalDivinitiesArtPage() {
  return <ArtworkDossierPage dossier={DIGITAL_DIVINITIES_DOSSIER} />;
}
