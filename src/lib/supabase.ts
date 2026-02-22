import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client with Service Role.
 * Use only in API routes / server components.
 * Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local
 */
export function createSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
