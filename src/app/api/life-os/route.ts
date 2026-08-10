import { NextResponse } from 'next/server';
import {
  isLifeOsConfigured,
  listLifeOsActions,
  listLifeOsInbox,
  listLifeOsOpportunities,
  listLifeOsProjects,
} from '@/lib/life-os';

export const dynamic = 'force-dynamic';

/**
 * Private LIFE OS read API for local/agent use.
 * Header: `x-life-os-token: $LIFE_OS_READ_TOKEN` (required in production).
 */
function authorized(req: Request): boolean {
  const expected = process.env.LIFE_OS_READ_TOKEN?.trim();
  if (!expected) {
    return process.env.NODE_ENV !== 'production';
  }
  return req.headers.get('x-life-os-token') === expected;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const table = (url.searchParams.get('table') || 'inbox').toLowerCase();

  try {
    if (table === 'inbox') {
      if (!isLifeOsConfigured('inbox')) {
        return NextResponse.json({ error: 'Inbox not configured' }, { status: 503 });
      }
      const items = await listLifeOsInbox();
      return NextResponse.json({
        table: 'inbox',
        count: items.length,
        items: items.map(({ raw: _r, ...rest }) => rest),
      });
    }
    if (table === 'actions') {
      if (!isLifeOsConfigured('actions')) {
        return NextResponse.json({ error: 'Actions not configured' }, { status: 503 });
      }
      const items = await listLifeOsActions();
      return NextResponse.json({
        table: 'actions',
        count: items.length,
        items: items.map(({ raw: _r, ...rest }) => rest),
      });
    }
    if (table === 'projects') {
      if (!isLifeOsConfigured('projects')) {
        return NextResponse.json({ error: 'Projects not configured' }, { status: 503 });
      }
      const items = await listLifeOsProjects();
      return NextResponse.json({
        table: 'projects',
        count: items.length,
        items: items.map(({ raw: _r, ...rest }) => rest),
      });
    }
    if (table === 'opportunities') {
      if (!isLifeOsConfigured()) {
        return NextResponse.json({ error: 'LIFE OS not configured' }, { status: 503 });
      }
      const items = await listLifeOsOpportunities();
      return NextResponse.json({
        table: 'opportunities',
        count: items.length,
        items: items.map(({ raw: _r, ...rest }) => rest),
      });
    }
    return NextResponse.json(
      { error: 'table must be inbox|actions|projects|opportunities' },
      { status: 400 },
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : 'LIFE OS read failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
