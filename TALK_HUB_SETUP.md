# Talk Hub Setup — Ready for QR (Thu Feb 26)

## ✅ Implemented

### P0 — Must work before QR goes out
- **Supabase lead storage** — `/api/lead` inserts into `leads` table when env vars are set
- **`/contact` and `/support`** — Same page: Calendly CTA + contact form, both store in Supabase
- **Card A → `/contact`** — Institutions CTA links to contact page (with UTM preservation)
- **Card B bullets** — Learner outcomes: n8n automations, agent patterns, capture → summarize → publish
- **Card A bullets** — Institution outcomes: automation audits, workflow design, institutional memory systems
- **Mobile-first** — Headline, value prop, both CTAs above fold; 44px min button height; `inputMode="email"`

### P1 — Hub feels rewarding
- **Resources section** — AI Agents Packet, Example automations, Book a discovery call
- **Fabiola on SEO card** — Avatar (ui-avatars placeholder) + "SEO Workshop Lead"
- **Trust signals** — Oolite Arts, Locust Projects, Bakehouse Art Complex with logo placeholders (initials)

### P2 — Instrumentation
- **Analytics** — `track()` helper: `cta_institutions_click`, `waitlist_submit_success`, `workshop_card_click`
- **UX** — Success message "Check your inbox soon", disabled state while submitting

---

## 🔧 Setup (do today)

### 1. Create Supabase `leads` table

Run the SQL in `supabase/migrations/20260222_leads_table.sql` in your [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql). See `scripts/create-leads-table.md` for options.

### 2. Add env vars

Copy `.env.example` to `.env.local` and fill in:

- `SUPABASE_URL` — from Supabase → Project Settings → API
- `SUPABASE_SERVICE_ROLE_KEY` — from same page (use Service Role, not anon)

For deployment (Vercel, etc.), add these in the project’s environment variables.

---

## 📱 Acceptance test (5 min)

1. Open: `/workshop?utm_source=locust&utm_medium=qr&utm_campaign=ai_agents_talk`
2. **Card A** — Click "Schedule a discovery call" → goes to `/contact` with UTMs
3. **Card B** — Submit email → row appears in Supabase `leads` table
4. **Success state** — "You're on the list. Check your inbox soon."
5. **Contact page** — Calendly link has UTMs; form submits to `/api/contact`

---

## 📁 Key files

| File | Purpose |
|------|---------|
| `src/constants/workshop-hub.ts` | Talk Hub config: hero, CTAs, bullets, resources, trust signals |
| `src/components/page/WorkshopClient.tsx` | Talk Hub UI |
| `src/components/page/ContactSupportClient.tsx` | Contact/support page |
| `src/app/api/lead/route.ts` | Waitlist → Supabase |
| `src/app/api/contact/route.ts` | Contact form → Supabase |
| `src/lib/supabase.ts` | Server-side Supabase client |
| `src/lib/analytics.ts` | `track()` helper for PostHog/gtag |

---

## 🔄 Fallback behavior

- **No Supabase env vars** — Leads log to console; API still returns 200. Add env vars before QR goes out.
