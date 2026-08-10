#!/usr/bin/env npx tsx
/**
 * LIFE OS schema + list helper for moises.tech agents.
 *
 *   npm run life-os:discover
 *   npm run life-os:list -- inbox
 *   npm run life-os:list -- actions
 *   npm run life-os:list -- projects
 *   npm run life-os:list -- opportunities
 *
 * Requires AIRTABLE_LIFE_OS_API_KEY (or AIRTABLE_ACCESS_TOKEN) with access to
 * base apprswzWnLrHBwFcx. Meta discover needs schema.bases:read.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function loadEnvFile(path: string) {
  if (!existsSync(path)) return;
  const text = readFileSync(path, 'utf8');
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}

loadEnvFile(resolve(process.cwd(), '.env.local'));
loadEnvFile(resolve(process.cwd(), '.env'));

async function main() {
  const {
    getLifeOsConnection,
    LIFE_OS_BASE_ID_DEFAULT,
    LIFE_OS_LINKED_TABLE_ID,
  } = await import('../src/lib/life-os/config');
  const { lifeOsDiscoverTables, lifeOsFetchRecords } = await import('../src/lib/life-os/http');

  const [, , cmd, table] = process.argv;

  if (cmd === 'list' && table) {
    const c = getLifeOsConnection();
    if (!c?.apiKey) {
      console.error('Missing AIRTABLE_LIFE_OS_API_KEY or AIRTABLE_ACCESS_TOKEN');
      process.exit(1);
    }
    const key = table as 'inbox' | 'actions' | 'projects' | 'opportunities';
    const { LIFE_OS_TABLE_IDS } = await import('../src/lib/life-os/fields');
    const tableId =
      key === 'opportunities'
        ? process.env.AIRTABLE_LIFE_OS_TABLE_OPPORTUNITIES?.trim() || LIFE_OS_TABLE_IDS.opportunities
        : c.tables[key];
    if (!tableId) {
      console.error(`AIRTABLE_LIFE_OS_TABLE_${key.toUpperCase()} not set. Run discover first.`);
      process.exit(1);
    }
    const viewIdResolved =
      key === 'actions'
        ? process.env.AIRTABLE_LIFE_OS_ACTIONS_VIEW?.trim() || 'viwCBm6vyBOpjYzFK'
        : process.env[`AIRTABLE_LIFE_OS_${key.toUpperCase()}_VIEW`]?.trim() || undefined;
    const rows = await lifeOsFetchRecords(c.apiKey, c.baseId, tableId, {
      viewId: viewIdResolved,
    });
    console.log(
      `${key}: ${rows.length} records (table ${tableId}${viewIdResolved ? ` view ${viewIdResolved}` : ''})`,
    );
    const titleKeys = [
      'Action Title',
      'Project Name',
      'Raw Input',
      'Opportunity Name',
      'Name',
      'Title',
    ];
    const statusKeys = ['Status', 'Inbox Action State', 'Stage'];
    for (const r of rows.slice(0, 25)) {
      let name = r.id;
      for (const k of titleKeys) {
        const v = r.fields[k];
        if (typeof v === 'string' && v.trim()) {
          name = v.trim().slice(0, 100);
          break;
        }
      }
      let status = '';
      for (const k of statusKeys) {
        const v = r.fields[k];
        if (typeof v === 'string' && v.trim()) {
          status = v.trim();
          break;
        }
      }
      console.log(`- ${r.id}  ${name}${status ? `  [${status}]` : ''}`);
    }
    if (rows.length > 25) console.log(`… +${rows.length - 25} more`);
    return;
  }

  const c = getLifeOsConnection();
  const apiKey = c?.apiKey;
  const baseId = c?.baseId || LIFE_OS_BASE_ID_DEFAULT;
  if (!apiKey) {
    console.error('Missing AIRTABLE_LIFE_OS_API_KEY or AIRTABLE_ACCESS_TOKEN');
    process.exit(1);
  }

  console.log(`Base ${baseId}`);
  console.log(`Linked table hint: ${LIFE_OS_LINKED_TABLE_ID}`);
  console.log('');

  const tables = await lifeOsDiscoverTables(apiKey, baseId);
  for (const t of tables) {
    const mark = t.id === LIFE_OS_LINKED_TABLE_ID ? '  ← linked URL table' : '';
    console.log(`## ${t.name}  \`${t.id}\`${mark}`);
    for (const f of t.fields) {
      const choices = f.choices?.length ? ` choices=[${f.choices.join(', ')}]` : '';
      console.log(`  - ${f.name} (${f.type})${choices}`);
    }
    console.log('');
  }

  console.log('Suggested .env.local mapping (edit names to match):');
  for (const t of tables) {
    const key = t.name.toLowerCase();
    if (key.includes('inbox')) console.log(`AIRTABLE_LIFE_OS_TABLE_INBOX=${t.id}`);
    else if (key.includes('action')) console.log(`AIRTABLE_LIFE_OS_TABLE_ACTIONS=${t.id}`);
    else if (key.includes('project')) console.log(`AIRTABLE_LIFE_OS_TABLE_PROJECTS=${t.id}`);
  }
}

main().catch((e) => {
  const msg = e instanceof Error ? e.message : String(e);
  console.error(msg);
  if (/403|INVALID_PERMISSIONS/i.test(msg)) {
    console.error(`
The current PAT cannot read LIFE OS (apprswzWnLrHBwFcx).
Create a token at https://airtable.com/create/tokens with:
  - scopes: data.records:read (+ schema.bases:read for discover)
  - access: base LIFE OS
Then set AIRTABLE_LIFE_OS_API_KEY in .env.local (see docs/life-os.md).`);
  }
  process.exit(1);
});
