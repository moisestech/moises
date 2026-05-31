# Work microsites (`/work/[slug]`)

Tailored application pages for contractor and creative-tech outreach. They reuse the recruiting UI (`OpportunityShell`, hero, approach, résumé CTAs) and add a tiered **skill logo grid** per role.

## URLs

| Slug | Path | Indexable |
|------|------|-----------|
| `creative-tech-image-tools` | `/work/creative-tech-image-tools` | No (DM-only by default) |

Alias: `/opportunities/creative-tech-image-tools` → `/work/creative-tech-image-tools` (see `next.config.js`).

## Add a new work page

1. **Types** — Config shape lives in `src/content/work/types.ts` (`WorkSite`, `WorkSkillTier`, etc.).

2. **Config** — Create `src/content/work/<slug>.ts` with hero, `skillTiers`, `caseStudies` (evidence ids + optional copy overrides), `approachSteps`, `about`, `ctas`, `navItems`, and `seo` (`indexable: false` for private outreach).

3. **Registry** — Register the config in `src/content/work/registry.ts`.

4. **Logos** — Add any missing `logoId` values to `src/content/evidence/tech-logos.ts` and SVGs under `public/images/tech-logos/`.

5. **Build** — `pnpm run build` generates static params from the registry.

## Components

- `src/app/(main)/work/[slug]/page.tsx` — route + metadata (`robots` when not indexable)
- `src/components/work/WorkPageClient.tsx` — composes shell, hero, `SkillLogoTierGrid`, case studies, approach, about, contact CTA
- `src/content/work/toOpportunity.ts` — maps `WorkSite` → `Opportunity` for shared recruiting components

## Recruiting chrome

`/work` and `/work/*` use the recruiting header and padding via `isRecruitingSitePath` in `src/config/recruiting-navigation.ts`.

## Asset audit (`creative-tech-image-tools`)

| Asset | Status | Notes |
|-------|--------|-------|
| Hero headshot | OK | Cloudinary `moises-headshot` via `recruitingLogoBand` |
| Application banner | OK | `senior-genai-engineer-banner_iljp58.png` via `applicationBanners.ts` (your uploaded Cloudinary asset) |
| LinkedIn / Instagram | OK | Hero profiles row + contact footer |
| Web CV / Portfolio / Oolite | OK | Hero + contact via `OpportunitySiteLinks` — CV `/cv`, portfolio `/portfolio`, Oolite `/tech-nonprofit/oolite` |
| Skill tier logos | OK | Brand marks via Simple Icons CDN + Cloudinary `jobs/` logos; OpenSeadragon still text badge |
| Lore Machine card image | Interim | GenAI banner — **replace** with a Lore UI screenshot when you have one on Cloudinary |
| Multimodal card image | OK | `broken-acceleration` research still |
| DCC card image + link | OK | Cloudinary screenshot → `https://dcc.miami` |
| Lore / multimodal links | OK | `loremachine.world`, `/research/broken-acceleration` |
| Azure in skill grid | OK | Supporting tier (matches Lore stack tags) |
| AI24 (optional 4th) | Omitted | On plan scope — add only if you want education-platform evidence |
| Résumé PDF/print | OK | Points at CVS GenAI print routes |
| `indexable` / opportunities index | OK | Private DM link |

**Banner prompt:** [`creative-tech-banner-prompt.md`](./creative-tech-banner-prompt.md) — copy/paste for image generation.

**Upload when ready:**

1. `jobs/banners/creative-tech-image-tools-banner.png` → set `USE_DEDICATED_CREATIVE_TECH_BANNER = true` in `applicationBanners.ts`
2. `jobs/lore-machine-ui-screenshot.png` → update `lore-machine.imageSrc` in `evidence/projects.ts`
