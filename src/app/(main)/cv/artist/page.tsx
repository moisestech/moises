// Artist CV — exhibitions from Airtable; static sections from cvData.

import { Metadata } from 'next';
import { getCV } from '@/lib/airtable/cv';
import CvClientPage from '@/components/CvClientPage';

export const metadata: Metadata = {
  title: 'Artist CV | Moises Sanabria',
  description: 'Artist curriculum vitae — exhibitions, grants, press, and institutional practice.',
};

export default async function ArtistCvPage() {
  const { data, error } = await getCV();

  if (error) {
    console.error('[CV] Airtable exhibitions unavailable:', error);
  }

  return (
    <CvClientPage
      airtableExhibitions={data?.exhibitionsByYear}
      airtableError={error}
    />
  );
}
