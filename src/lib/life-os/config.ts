/**
 * LIFE OS (personal PM / career / applications) — separate from artist CV Airtable.
 *
 * Base UI: https://airtable.com/apprswzWnLrHBwFcx/...
 * Shared URL was Actions (not Inbox): .../tblzQ5bVKCXrsc0IU/viwCBm6vyBOpjYzFK
 */

import { LIFE_OS_TABLE_IDS } from '@/lib/life-os/fields';

export const LIFE_OS_BASE_ID_DEFAULT = 'apprswzWnLrHBwFcx';

/** Table from the user-linked URL (= Actions). Prefer LIFE_OS_TABLE_IDS.actions. */
export const LIFE_OS_LINKED_TABLE_ID = LIFE_OS_TABLE_IDS.actions;

export type LifeOsTableKey = 'inbox' | 'actions' | 'projects';

export type LifeOsConnection = {
  apiKey: string;
  baseId: string;
  tables: Partial<Record<LifeOsTableKey, string>>;
};

function readEnv(key: string): string | undefined {
  const v = process.env[key]?.trim();
  return v || undefined;
}

/**
 * PAT: AIRTABLE_LIFE_OS_API_KEY → AIRTABLE_ACCESS_TOKEN → AIRTABLE_API_KEY
 * Base: AIRTABLE_LIFE_OS_BASE_ID → LIFE_OS_BASE_ID_DEFAULT
 */
export function getLifeOsConnection(): LifeOsConnection | null {
  const apiKey =
    readEnv('AIRTABLE_LIFE_OS_API_KEY') ||
    readEnv('AIRTABLE_ACCESS_TOKEN') ||
    readEnv('AIRTABLE_API_KEY');
  const baseId = readEnv('AIRTABLE_LIFE_OS_BASE_ID') || LIFE_OS_BASE_ID_DEFAULT;

  if (!apiKey || !baseId) return null;

  const tables: Partial<Record<LifeOsTableKey, string>> = {
    inbox: readEnv('AIRTABLE_LIFE_OS_TABLE_INBOX') || LIFE_OS_TABLE_IDS.inbox,
    actions: readEnv('AIRTABLE_LIFE_OS_TABLE_ACTIONS') || LIFE_OS_TABLE_IDS.actions,
    projects: readEnv('AIRTABLE_LIFE_OS_TABLE_PROJECTS') || LIFE_OS_TABLE_IDS.projects,
  };

  return { apiKey, baseId, tables };
}

export function isLifeOsConfigured(table?: LifeOsTableKey): boolean {
  const c = getLifeOsConnection();
  if (!c) return false;
  if (!table) return Boolean(c.tables.inbox || c.tables.actions || c.tables.projects);
  return Boolean(c.tables[table]);
}

export function requireLifeOsTable(
  table: LifeOsTableKey,
): { apiKey: string; baseId: string; tableId: string } {
  const c = getLifeOsConnection();
  const tableId = c?.tables[table];
  if (!c?.apiKey || !c.baseId || !tableId) {
    throw new Error(
      `LIFE OS ${table} not configured. Set AIRTABLE_LIFE_OS_API_KEY (or AIRTABLE_ACCESS_TOKEN) and AIRTABLE_LIFE_OS_TABLE_${table.toUpperCase()}. Run: npm run life-os:discover`,
    );
  }
  return { apiKey: c.apiKey, baseId: c.baseId, tableId };
}
