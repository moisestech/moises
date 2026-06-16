import 'server-only';

import { AirtableError, fetchAirtableRecords } from '@/lib/airtable/client';
import { AIRTABLE_TABLES, EXHIBITION_FIELDS } from '@/lib/airtable/config';
import type { CVData, CVExhibition } from '@/types/cv';

type ExhibitionAirtableFields = {
  [EXHIBITION_FIELDS.title]?: string;
  [EXHIBITION_FIELDS.institution]?: string;
  [EXHIBITION_FIELDS.venueFullName]?: string;
  [EXHIBITION_FIELDS.city]?: string;
  [EXHIBITION_FIELDS.stateOrCountry]?: string;
  [EXHIBITION_FIELDS.year]?: number;
  [EXHIBITION_FIELDS.type]?: string;
  [EXHIBITION_FIELDS.url]?: string;
  [EXHIBITION_FIELDS.publicDescription]?: string;
};

const DISPLAY_FIELDS = [
  EXHIBITION_FIELDS.title,
  EXHIBITION_FIELDS.institution,
  EXHIBITION_FIELDS.venueFullName,
  EXHIBITION_FIELDS.city,
  EXHIBITION_FIELDS.stateOrCountry,
  EXHIBITION_FIELDS.year,
  EXHIBITION_FIELDS.type,
  EXHIBITION_FIELDS.url,
  EXHIBITION_FIELDS.publicDescription,
] as const;

function normalizeExhibition(record: {
  id: string;
  fields: ExhibitionAirtableFields;
}): CVExhibition | null {
  const title = record.fields[EXHIBITION_FIELDS.title]?.trim();
  const institution = record.fields[EXHIBITION_FIELDS.institution]?.trim();
  const city = record.fields[EXHIBITION_FIELDS.city]?.trim();
  const stateOrCountry = record.fields[EXHIBITION_FIELDS.stateOrCountry]?.trim();
  const year = record.fields[EXHIBITION_FIELDS.year];

  if (!title || !institution || !city || !stateOrCountry || typeof year !== 'number') {
    return null;
  }

  const venueFullName = record.fields[EXHIBITION_FIELDS.venueFullName]?.trim();
  const type = record.fields[EXHIBITION_FIELDS.type]?.trim() ?? '';
  const url = record.fields[EXHIBITION_FIELDS.url]?.trim();
  const publicDescription = record.fields[EXHIBITION_FIELDS.publicDescription]?.trim();

  return {
    id: record.id,
    title,
    institution,
    venueFullName: venueFullName || undefined,
    city,
    stateOrCountry,
    year,
    type,
    url: url || undefined,
    publicDescription: publicDescription || undefined,
  };
}

function groupExhibitionsByYear(exhibitions: CVExhibition[]): Record<string, CVExhibition[]> {
  const grouped: Record<string, CVExhibition[]> = {};

  for (const exhibition of exhibitions) {
    const yearKey = String(exhibition.year);
    if (!grouped[yearKey]) {
      grouped[yearKey] = [];
    }
    grouped[yearKey].push(exhibition);
  }

  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));
  const result: Record<string, CVExhibition[]> = {};

  for (const year of sortedYears) {
    result[year] = grouped[year];
  }

  return result;
}

export async function getCV(): Promise<{ data: CVData | null; error: string | null }> {
  try {
    const records = await fetchAirtableRecords<ExhibitionAirtableFields>(
      AIRTABLE_TABLES.exhibitions,
      {
        fields: [...DISPLAY_FIELDS],
        filterByFormula: `AND({${EXHIBITION_FIELDS.includeInPublicCV}} = TRUE(), {${EXHIBITION_FIELDS.type}} = "Group")`,
        sort: [
          { field: EXHIBITION_FIELDS.year, direction: 'desc' },
          { field: EXHIBITION_FIELDS.cvPriority, direction: 'asc' },
        ],
      },
    );

    const exhibitions = records
      .map(normalizeExhibition)
      .filter((exhibition): exhibition is CVExhibition => exhibition !== null);

    if (exhibitions.length === 0) {
      return { data: null, error: null };
    }

    return {
      data: {
        exhibitionsByYear: groupExhibitionsByYear(exhibitions),
      },
      error: null,
    };
  } catch (error) {
    const message =
      error instanceof AirtableError
        ? error.message
        : error instanceof Error
          ? error.message
          : 'Unknown Airtable error';

    return { data: null, error: message };
  }
}
