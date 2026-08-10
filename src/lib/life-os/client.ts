import 'server-only';

import { AirtableError, type AirtableRecord } from '@/lib/airtable/client';
import {
  lifeOsDiscoverTables,
  lifeOsFetchRecords,
  type LifeOsFetchOptions,
} from '@/lib/life-os/http';

export type LifeOsListOptions = Omit<LifeOsFetchOptions, 'next'> & {
  revalidateSeconds?: number;
  tags?: string[];
};

/**
 * Fetch all records from a LIFE OS table (explicit base + PAT — not the artist CV base).
 */
export async function fetchLifeOsRecords<
  TFields extends Record<string, unknown> = Record<string, unknown>,
>(
  apiKey: string,
  baseId: string,
  tableId: string,
  options: LifeOsListOptions = {},
): Promise<AirtableRecord<TFields>[]> {
  try {
    return (await lifeOsFetchRecords<TFields>(apiKey, baseId, tableId, {
      ...options,
      next: {
        revalidate: options.revalidateSeconds ?? 60,
        tags: options.tags ?? ['life-os'],
      },
    })) as AirtableRecord<TFields>[];
  } catch (e) {
    if (e instanceof Error) throw new AirtableError(e.message);
    throw e;
  }
}

export async function discoverLifeOsTables(apiKey: string, baseId: string) {
  try {
    return await lifeOsDiscoverTables(apiKey, baseId);
  } catch (e) {
    if (e instanceof Error) throw new AirtableError(e.message);
    throw e;
  }
}
