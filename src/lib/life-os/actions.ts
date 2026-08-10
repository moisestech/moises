import 'server-only';

import type { AirtableRecord } from '@/lib/airtable/client';
import { fetchLifeOsRecords } from '@/lib/life-os/client';
import { requireLifeOsTable } from '@/lib/life-os/config';
import { ACTIONS_FIELDS, LIFE_OS_ACTIONS_VIEW_DEFAULT } from '@/lib/life-os/fields';

export type LifeOsAction = {
  id: string;
  title: string;
  status?: string;
  project?: string;
  due?: string;
  notes?: string;
  priority?: string;
  raw: AirtableRecord;
};

function str(fields: Record<string, unknown>, key: string): string | undefined {
  const v = fields[key];
  if (typeof v === 'string' && v.trim()) return v.trim();
  if (typeof v === 'number') return String(v);
  if (Array.isArray(v) && typeof v[0] === 'string') return v[0];
  return undefined;
}

function mapAction(rec: AirtableRecord): LifeOsAction {
  const f = rec.fields;
  return {
    id: rec.id,
    title: str(f, ACTIONS_FIELDS.title()) ?? '(untitled)',
    status: str(f, ACTIONS_FIELDS.status()),
    project: str(f, ACTIONS_FIELDS.project()),
    due: str(f, ACTIONS_FIELDS.due()),
    notes: str(f, ACTIONS_FIELDS.notes()),
    priority: str(f, ACTIONS_FIELDS.priority()),
    raw: rec,
  };
}

export async function listLifeOsActions(options?: {
  filterByFormula?: string;
  /** Pass `null` to skip the default Agency OS view */
  viewId?: string | null;
}): Promise<LifeOsAction[]> {
  const { apiKey, baseId, tableId } = requireLifeOsTable('actions');
  const viewId =
    options?.viewId === null
      ? undefined
      : options?.viewId ??
        process.env.AIRTABLE_LIFE_OS_ACTIONS_VIEW?.trim() ??
        LIFE_OS_ACTIONS_VIEW_DEFAULT;
  const rows = await fetchLifeOsRecords(apiKey, baseId, tableId, {
    filterByFormula: options?.filterByFormula,
    viewId,
    tags: ['life-os', 'life-os-actions'],
  });
  return rows.map(mapAction);
}
