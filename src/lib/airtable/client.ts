import 'server-only';

export class AirtableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AirtableError';
  }
}

export type AirtableRecord<TFields extends Record<string, unknown> = Record<string, unknown>> = {
  id: string;
  createdTime: string;
  fields: TFields;
};

export type FetchAirtableRecordsOptions = {
  fields?: string[];
  filterByFormula?: string;
  sort?: { field: string; direction?: 'asc' | 'desc' }[];
};

type AirtableListResponse<TFields extends Record<string, unknown>> = {
  records: AirtableRecord<TFields>[];
  offset?: string;
};

function getAirtableConfig() {
  const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!accessToken || !baseId) {
    throw new AirtableError(
      'Missing AIRTABLE_ACCESS_TOKEN or AIRTABLE_BASE_ID environment variables.',
    );
  }

  return { accessToken, baseId };
}

export async function fetchAirtableRecords<TFields extends Record<string, unknown> = Record<string, unknown>>(
  tableNameOrId: string,
  options: FetchAirtableRecordsOptions = {},
): Promise<AirtableRecord<TFields>[]> {
  const { accessToken, baseId } = getAirtableConfig();
  const records: AirtableRecord<TFields>[] = [];
  let offset: string | undefined;

  do {
    const params = new URLSearchParams();

    if (options.fields?.length) {
      for (const field of options.fields) {
        params.append('fields[]', field);
      }
    }

    if (options.filterByFormula) {
      params.set('filterByFormula', options.filterByFormula);
    }

    options.sort?.forEach((sort, index) => {
      params.set(`sort[${index}][field]`, sort.field);
      params.set(`sort[${index}][direction]`, sort.direction ?? 'asc');
    });

    if (offset) {
      params.set('offset', offset);
    }

    const query = params.toString();
    const url = `https://api.airtable.com/v0/${baseId}/${tableNameOrId}${query ? `?${query}` : ''}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        revalidate: 3600,
        tags: ['cv-exhibitions'],
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new AirtableError(
        `Airtable request failed (${response.status}): ${body || response.statusText}`,
      );
    }

    const data = (await response.json()) as AirtableListResponse<TFields>;
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  return records;
}
