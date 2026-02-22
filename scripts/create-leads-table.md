# Create Supabase `leads` Table

## Option 1: Supabase Dashboard (recommended)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → your project
2. Open **SQL Editor**
3. Paste and run the contents of `supabase/migrations/20260222_leads_table.sql`

## Option 2: Supabase CLI

If you have Supabase CLI linked:

```bash
supabase db push
```

Or run the migration file directly:

```bash
supabase db execute --file supabase/migrations/20260222_leads_table.sql
```

## Env vars

Add to `.env.local` (and your deployment platform, e.g. Vercel):

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Get these from Supabase → Project Settings → API.
