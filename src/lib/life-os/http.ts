/**
 * Plain LIFE OS Airtable HTTP (usable from Next server routes and CLI scripts).
 */

export type LifeOsAirtableRecord<TFields extends Record<string, unknown> = Record<string, unknown>> = {
  id: string;
  createdTime?: string;
  fields: TFields;
};

export type LifeOsFetchOptions = {
  fields?: string[];
  filterByFormula?: string;
  viewId?: string;
  sort?: { field: string; direction?: 'asc' | 'desc' }[];
  /** Next.js fetch cache — omit in CLI */
  next?: { revalidate?: number; tags?: string[] };
};

export class LifeOsAirtableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LifeOsAirtableError';
  }
}

export async function lifeOsFetchRecords<
  TFields extends Record<string, unknown> = Record<string, unknown>,
>(
  apiKey: string,
  baseId: string,
  tableId: string,
  options: LifeOsFetchOptions = {},
): Promise<LifeOsAirtableRecord<TFields>[]> {
  const records: LifeOsAirtableRecord<TFields>[] = [];
  let offset: string | undefined;

  do {
    const params = new URLSearchParams();
    if (options.fields?.length) {
      for (const field of options.fields) params.append('fields[]', field);
    }
    if (options.filterByFormula) params.set('filterByFormula', options.filterByFormula);
    if (options.viewId) params.set('view', options.viewId);
    options.sort?.forEach((sort, index) => {
      params.set(`sort[${index}][field]`, sort.field);
      params.set(`sort[${index}][direction]`, sort.direction ?? 'asc');
    });
    if (offset) params.set('offset', offset);

    const query = params.toString();
    const url = `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}${
      query ? `?${query}` : ''
    }`;

    const init: RequestInit & { next?: { revalidate?: number; tags?: string[] } } = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    };
    if (options.next) init.next = options.next;

    const response = await fetch(url, init);
    if (!response.ok) {
      const body = await response.text();
      throw new LifeOsAirtableError(
        `LIFE OS Airtable request failed (${response.status}): ${body || response.statusText}`,
      );
    }

    const data = (await response.json()) as {
      records: LifeOsAirtableRecord<TFields>[];
      offset?: string;
    };
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  return records;
}

export async function lifeOsDiscoverTables(
  apiKey: string,
  baseId: string,
): Promise<
  Array<{
    id: string;
    name: string;
    fields: Array<{ id: string; name: string; type: string; choices?: string[] }>;
  }>
> {
  const res = await fetch(
    `https://api.airtable.com/v0/meta/bases/${encodeURIComponent(baseId)}/tables`,
    { headers: { Authorization: `Bearer ${apiKey}` } },
  );
  if (!res.ok) {
    throw new LifeOsAirtableError(`LIFE OS Meta API ${res.status}: ${await res.text()}`);
  }
  const data = (await res.json()) as {
    tables: Array<{
      id: string;
      name: string;
      fields: Array<{
        id: string;
        name: string;
        type: string;
        options?: { choices?: Array<{ name: string }> };
      }>;
    }>;
  };
  return data.tables.map((t) => ({
    id: t.id,
    name: t.name,
    fields: t.fields.map((f) => ({
      id: f.id,
      name: f.name,
      type: f.type,
      choices:
        f.type === 'singleSelect'
          ? (f.options?.choices ?? []).map((c) => c.name)
          : undefined,
    })),
  }));
}
