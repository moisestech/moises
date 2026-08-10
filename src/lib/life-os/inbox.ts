import 'server-only';

import type { AirtableRecord } from '@/lib/airtable/client';
import { fetchLifeOsRecords } from '@/lib/life-os/client';
import { requireLifeOsTable } from '@/lib/life-os/config';
import { INBOX_FIELDS } from '@/lib/life-os/fields';

export type LifeOsInboxItem = {
  id: string;
  title: string;
  status?: string;
  company?: string;
  role?: string;
  url?: string;
  notes?: string;
  priority?: string;
  raw: AirtableRecord;
};

function str(fields: Record<string, unknown>, key: string): string | undefined {
  const v = fields[key];
  if (typeof v === 'string' && v.trim()) return v.trim();
  if (typeof v === 'number') return String(v);
  return undefined;
}

function mapInbox(rec: AirtableRecord): LifeOsInboxItem {
  const f = rec.fields;
  return {
    id: rec.id,
    title: str(f, INBOX_FIELDS.title()) ?? '(untitled)',
    status: str(f, INBOX_FIELDS.status()),
    company: str(f, INBOX_FIELDS.company()),
    role: str(f, INBOX_FIELDS.role()),
    url: str(f, INBOX_FIELDS.url()),
    notes: str(f, INBOX_FIELDS.notes()),
    priority: str(f, INBOX_FIELDS.priority()),
    raw: rec,
  };
}

export type ListInboxOptions = {
  viewId?: string;
  filterByFormula?: string;
};

/** Read Inbox (raw signals) for moises.tech application workflows. */
export async function listLifeOsInbox(options: ListInboxOptions = {}): Promise<LifeOsInboxItem[]> {
  const { apiKey, baseId, tableId } = requireLifeOsTable('inbox');
  const rows = await fetchLifeOsRecords(apiKey, baseId, tableId, {
    viewId: options.viewId ?? process.env.AIRTABLE_LIFE_OS_INBOX_VIEW?.trim(),
    filterByFormula: options.filterByFormula,
    tags: ['life-os', 'life-os-inbox'],
  });
  return rows.map(mapInbox);
}
