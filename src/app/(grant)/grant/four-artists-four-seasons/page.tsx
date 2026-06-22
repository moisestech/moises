import type { Metadata } from 'next';
import FourArtistsFourSeasonsPage from '@/components/grant/FourArtistsFourSeasonsPage';
import { fourArtistsMeta } from '@/content/grants/four-artists-four-seasons';

const description =
  'Moises Sanabria — Bakehouse resident artist applying to Four Artists: Four Seasons. Weekly micro-films, short-form storytelling, and a repeatable 12-week documentation system.';

export const metadata: Metadata = {
  title: `Four Artists: Four Seasons | ${fourArtistsMeta.applicant}`,
  description,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: fourArtistsMeta.route,
  },
  openGraph: {
    title: `Four Artists: Four Seasons at Bakehouse | ${fourArtistsMeta.applicant}`,
    description,
    type: 'website',
    url: fourArtistsMeta.canonicalUrl,
  },
};

export default function FourArtistsFourSeasonsRoute() {
  return <FourArtistsFourSeasonsPage />;
}
