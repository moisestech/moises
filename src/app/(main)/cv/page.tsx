// This page renders exhibitions from Airtable.
// Airtable is the source of truth for exhibitions and application-facing CV data.

import { Metadata } from 'next';
import { getCV } from '@/lib/airtable/cv';
import CvClientPage from '@/components/CvClientPage';

export const metadata: Metadata = {
  title: 'CV | Moises Sanabria',
  description: 'Professional curriculum vitae of Moises Sanabria, artist and creative technologist.',
};

export default async function CvPage() {
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
