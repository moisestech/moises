# Workshops catalog

Public teaching catalog sourced from `Workshops-All Data.csv`.

**Continuity:** [`docs/site-health.md`](./site-health.md) · Institutions family: [`docs/institutions/README.md`](./institutions/README.md)

## Where things live

| Layer | Path | Job |
|---|---|---|
| Catalog data | [`src/content/workshops/catalog.ts`](../src/content/workshops/catalog.ts) | All 24 workshops (Ready / In Development / Coming Soon) |
| Institutional pilots | [`workshopsOfferings.ts`](../src/content/institutions/workshopsOfferings.ts) | 3 incubator modules + Digilab-aligned pricing |
| Hub UI | [`/workshops`](../src/app/(main)/workshops/page.tsx) + [`WorkshopClient.tsx`](../src/components/page/WorkshopClient.tsx) | Pilots + Ready catalog + legacy feature cards |
| SEO landings | [`/workshop/[slug]`](../src/app/(main)/workshop/[slug]/page.tsx) + [`WorkshopCatalogLandingClient.tsx`](../src/components/workshops/WorkshopCatalogLandingClient.tsx) | Ready catalog titles (thin, indexable) |
| Deep programs | `/workshop/own-your-digital-presence`, AI agents, etc. | Full syllabi (reserved — not overwritten by `[slug]`) |
| Digilab proof classes | [`/oolite-arts#classes`](../src/content/oolite-arts/case-study.ts) | Oolite case-study class archive |

## Ready landings (shipped)

| Slug | URL |
|---|---|
| seo-for-artists-in-the-age-of-ai-search | `/workshop/seo-for-artists-in-the-age-of-ai-search` |
| writing-about-your-digital-practice | `/workshop/writing-about-your-digital-practice` |
| documentation-for-artists | `/workshop/documentation-for-artists` |
| ai-for-artists-voice-workflow-and-authorship | `/workshop/ai-for-artists-voice-workflow-and-authorship` |
| vibe-coding-with-net-art | `/workshop/vibe-coding-with-net-art` |
| organizing-your-digital-studio | `/workshop/organizing-your-digital-studio` |
| ai-copyright-and-creative-risk | `/workshop/ai-copyright-and-creative-risk` |
| quickbooks-automation-for-artists | `/workshop/quickbooks-automation-for-artists` |
| own-your-digital-presence | `/workshop/own-your-digital-presence` (deep program) |

## Strategy (SEO + outreach)

1. **Hub** `/workshops` — indexable catalog of Ready titles + institutional pilots (Calendly).
2. **SEO landings** `/workshop/[slug]` — title, why now, outcomes, inquire CTAs, related track links.
3. **Cross-links** from `/artist-infrastructure`, `/oolite-arts#classes`, hub feature cards.
4. **Do not** invent thin pages for In Development / Coming Soon until content is ready.

## Regenerating from CSV

```bash
# Source file (local): ~/Downloads/Workshops-All Data.csv
# Regenerate catalog.ts when the sheet changes; keep WORKSHOP_RESERVED_DEEP_SLUGS in sync.
```

## Next build steps

- [x] Public landings for Ready slugs (except reserved deep programs)
- [x] Replace external Fabiola SEO link in `WORKSHOP_FEATURES` with in-site landing
- [x] Workshops strip / links on `/artist-infrastructure` + Digilab classes
- [ ] Wire Digilab `workshop.seo-banner` + vibe banner into landing heroes via media registry
- [ ] Optional: In Development titles as “coming soon” stubs (noindex)
