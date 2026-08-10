import 'server-only';

import type { AirtableRecord } from '@/lib/airtable/client';
import { fetchLifeOsRecords } from '@/lib/life-os/client';
import { requireLifeOsTable } from '@/lib/life-os/config';
import { PROJECTS_FIELDS } from '@/lib/life-os/fields';

export type LifeOsProject = {
  id: string;
  title: string;
  status?: string;
  summary?: string;
  notes?: string;
  url?: string;
  raw: AirtableRecord;
};

function str(fields: Record<string, unknown>, key: string): string | undefined {
  const v = fields[key];
  if (typeof v === 'string' && v.trim()) return v.trim();
  if (typeof v === 'number') return String(v);
  return undefined;
}

function mapProject(rec: AirtableRecord): LifeOsProject {
  const f = rec.fields;
  return {
    id: rec.id,
    title: str(f, PROJECTS_FIELDS.title()) ?? '(untitled)',
    status: str(f, PROJECTS_FIELDS.status()),
    summary: str(f, PROJECTS_FIELDS.summary()),
    notes: str(f, PROJECTS_FIELDS.notes()),
    url: str(f, PROJECTS_FIELDS.url()),
    raw: rec,
  };
}

export async function listLifeOsProjects(options?: {
  filterByFormula?: string;
  viewId?: string;
}): Promise<LifeOsProject[]> {
  const { apiKey, baseId, tableId } = requireLifeOsTable('projects');
  const rows = await fetchLifeOsRecords(apiKey, baseId, tableId, {
    filterByFormula: options?.filterByFormula,
    viewId: options?.viewId ?? process.env.AIRTABLE_LIFE_OS_PROJECTS_VIEW?.trim(),
    tags: ['life-os', 'life-os-projects'],
  });
  return rows.map(mapProject);
}
