import 'server-only';

import type { AirtableRecord } from '@/lib/airtable/client';
import { fetchLifeOsRecords } from '@/lib/life-os/client';
import { getLifeOsConnection, LIFE_OS_BASE_ID_DEFAULT } from '@/lib/life-os/config';
import { LIFE_OS_TABLE_IDS, OPPORTUNITIES_FIELDS } from '@/lib/life-os/fields';

export type LifeOsOpportunity = {
  id: string;
  title: string;
  type?: string;
  stage?: string;
  decision?: string;
  deadline?: string;
  url?: string;
  nextAction?: string;
  notes?: string;
  potentialValue?: number;
  raw: AirtableRecord;
};

function str(fields: Record<string, unknown>, key: string): string | undefined {
  const v = fields[key];
  if (typeof v === 'string' && v.trim()) return v.trim();
  if (typeof v === 'number') return String(v);
  return undefined;
}

function num(fields: Record<string, unknown>, key: string): number | undefined {
  const v = fields[key];
  return typeof v === 'number' ? v : undefined;
}

function mapOpportunity(rec: AirtableRecord): LifeOsOpportunity {
  const f = rec.fields;
  return {
    id: rec.id,
    title: str(f, OPPORTUNITIES_FIELDS.title()) ?? '(untitled)',
    type: str(f, OPPORTUNITIES_FIELDS.type()),
    stage: str(f, OPPORTUNITIES_FIELDS.stage()),
    decision: str(f, OPPORTUNITIES_FIELDS.decision()),
    deadline: str(f, OPPORTUNITIES_FIELDS.deadline()),
    url: str(f, OPPORTUNITIES_FIELDS.url()),
    nextAction: str(f, OPPORTUNITIES_FIELDS.nextAction()),
    notes: str(f, OPPORTUNITIES_FIELDS.notes()),
    potentialValue: num(f, OPPORTUNITIES_FIELDS.potentialValue()),
    raw: rec,
  };
}

function requireOpportunitiesTable(): { apiKey: string; baseId: string; tableId: string } {
  const c = getLifeOsConnection();
  const tableId =
    process.env.AIRTABLE_LIFE_OS_TABLE_OPPORTUNITIES?.trim() || LIFE_OS_TABLE_IDS.opportunities;
  if (!c?.apiKey) {
    throw new Error(
      'LIFE OS opportunities not configured. Set AIRTABLE_LIFE_OS_API_KEY. See docs/life-os.md.',
    );
  }
  return {
    apiKey: c.apiKey,
    baseId: c.baseId || LIFE_OS_BASE_ID_DEFAULT,
    tableId,
  };
}

/** Job / grant / residency opportunities — primary career pipeline for moises.tech. */
export async function listLifeOsOpportunities(options?: {
  filterByFormula?: string;
  viewId?: string;
}): Promise<LifeOsOpportunity[]> {
  const { apiKey, baseId, tableId } = requireOpportunitiesTable();
  const rows = await fetchLifeOsRecords(apiKey, baseId, tableId, {
    filterByFormula: options?.filterByFormula,
    viewId: options?.viewId ?? process.env.AIRTABLE_LIFE_OS_OPPORTUNITIES_VIEW?.trim(),
    tags: ['life-os', 'life-os-opportunities'],
  });
  return rows.map(mapOpportunity);
}
