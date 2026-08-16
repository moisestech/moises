# Institutions family (Miami outreach)

Museum-legible pages for incubators, cultural partners, and institutional outreach.  
**Continuity index:** [`docs/site-health.md`](../site-health.md)

## Send hierarchy

Use this order when picking a link:

**Museum / nonprofit digital systems (e.g. Courtney at ICA):**

1. **`/institutions`** — focused services page (web, Salesforce, automation, livestreaming, labs)
2. **`/ica-miami`** · **`/oolite-arts`** · **`/bakehouse`** — flagship proof
3. Calendly — 20-minute conversation

**Artist-facing workshops / incubators:**

1. **`/artist-infrastructure`** — workshops, systems, engagement formats
2. **`/oolite-arts`** — Digilab proof
3. **`/workshops`** — bookable pilots + public catalog (`#catalog`)

**Private:** `/artist-sustainability` — YoungArts supplement (`noindex`) — not a public outreach door.

**Named contact audits:** Dimitry Chamy + Sophia (MadArts) — [`docs/outreach/madarts-dimitry-send-audit.md`](../outreach/madarts-dimitry-send-audit.md).  
Sophia’s research door includes **`/research/the-algorithm-is-outside`**.

Workshop catalog detail: [`docs/workshops-catalog.md`](../workshops-catalog.md).

Hiring proof is a **different family:** `/capabilities` → employer dossiers. Do not send incubators to `/ai-engineering` as the Miami outreach link.

## Canonical vs archive Oolite

| Surface | Role | Action |
|---|---|---|
| `/oolite-arts` | **Canonical** Digilab case study (credits, disclaimer, media registry) | Send for proof |
| `/tech-nonprofit/oolite/*` | Program ops / KPI / roadmap UI | Label archive/ops; point narrative to `/oolite-arts` |
| `/grant/knight-foundation/*` | Knight proposal archive | Archive; do not compete with `/oolite-arts` as “the” Digilab page |

Credits framing (canonical): **Fabiola Larios** (Director of Digital Lab) first, then **Moises Sanabria** (Technical Director of Digital).

## Shared primitives

| Primitive | Path | Use |
|---|---|---|
| Family nav, shell, section label, CTAs | [`InstitutionalUi.tsx`](../../src/components/institutions/InstitutionalUi.tsx) | All institutional family pages |
| Hero, curriculum cards, galleries, proof | [`OutreachComponents.tsx`](../../src/components/institutions/OutreachComponents.tsx) | Outreach composition (artist-infrastructure first) |
| Family links, Calendly, pilot pricing, availability | [`shared.ts`](../../src/content/institutions/shared.ts) | **One** availability sentence; one pricing source |
| Digilab stills | [`media.ts`](../../src/content/oolite-arts/media.ts) | Stable ids only — see Digilab workflow |

**Do not:** invent a third section-label or proof-card dialect on Bakehouse / workshops / Oolite. Prefer `InstSectionLabel`, `InstPageShell`, shared CTAs, and outreach proof components.

**Private pages:** `/artist-sustainability` should not pitch the public family strip as its primary job — drop or minimize `InstFamilyNav` there when polishing.

## Digilab media

Stills, portraits, class banners, and service previews: [`docs/oolite-digilab-media-workflow.md`](../oolite-digilab-media-workflow.md)  
Banner generation prompt for `/artist-infrastructure`: [`artist-infrastructure-banner-prompt.md`](./artist-infrastructure-banner-prompt.md)
Cursor rule: [`.cursor/rules/digilab-oolite-media.mdc`](../../.cursor/rules/digilab-oolite-media.mdc)

Next phases: layout polish → 360 viewer → video entries in the same registry.

## Availability and pricing

- **Collaboration offer line:** `INSTITUTIONAL_COLLABORATION_AVAILABILITY` in [`shared.ts`](../../src/content/institutions/shared.ts) (fall 2026 paid guest teaching / curriculum / pilots). Used by `/artist-infrastructure` hero, engagement, and CTA. `INSTITUTIONAL_AVAILABILITY` aliases this.
- **Services page availability:** `INSTITUTIONAL_SERVICES_AVAILABILITY` — currently available for project-based and fractional work on `/institutions`. Do not reuse the fall 2026 teaching line there.
- **Oolite contract context:** `OOLITE_CONTRACT_CONTEXT` (Sept 17, 2026) — case-study framing only, not a competing hero availability line.
- **Pilot pricing** mirrors Digilab public seat rates via `PILOT_PRICING` + [`workshopsOfferings.ts`](../../src/content/institutions/workshopsOfferings.ts) for workshops. Do **not** present `$45` or hosted workshop flats on `/institutions`.

## Key content files

| Route | Content | Client |
|---|---|---|
| `/artist-infrastructure` | `artistInfrastructure.ts` | `ArtistInfrastructureClient.tsx` |
| `/oolite-arts` | `oolite-arts/case-study.ts` | `OoliteCaseStudy.tsx` |
| `/institutions` | `hub.ts` | `InstitutionsHubClient.tsx` |
| `/ica-miami` | `icaMiami.ts` | `IcaMiamiPageClient.tsx` |
| `/bakehouse` | `bakehouse.ts` | `BakehousePageClient.tsx` |
| `/workshops` | `workshopsOfferings.ts` | `WorkshopClient.tsx` |
| `/artist-sustainability` | `artistSustainability.ts` | `ArtistSustainabilityClient.tsx` |

## Known polish gaps

- Workshops visual language still diverges from the institutional dossier system
- Bakehouse SmartSign / systems photography still placeholder-heavy
- DCC.MIAMI public section deferred on `/artist-infrastructure` (insufficient documentary proof)
- Museum of Sex hub card image mismatch (transmediale poster) — fix when touching hub media