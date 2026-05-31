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
