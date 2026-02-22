-- Run this in Supabase SQL Editor to create the leads table
-- Table: leads (workshop waitlist, contact form, etc.)
-- API uses Service Role key (bypasses RLS)

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  email text NOT NULL,
  source text DEFAULT 'talk_hub',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  referrer text,
  context jsonb
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_source ON public.leads(source);
