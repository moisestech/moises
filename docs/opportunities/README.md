# Opportunities microsite (`/opportunities`)

Role-specific recruiting dossiers: compact technical briefs you can drop into email threads. These routes are **not** linked from the main exhibition navigation by design.

## Family decision tree

Classify every new role before writing a page. Personalization = thin config (hero, role-match, banner, ≤1 unique section)—not a forked architecture.

1. **Art direction / creative director / creative editor / ACD innovation** → `creative-agency`  
   Factory: [`createCreativeAgencyOpportunity.ts`](../../src/content/opportunities/createCreativeAgencyOpportunity.ts)  
   Shell: [`CreativeAgencyClient`](../../src/components/opportunities/creative-agency/CreativeAgencyClient.tsx)

2. **Needs a custom interactive proof** (Comfy-style work sample, Flora interactivity) → `role-portfolio`  
   Shape: [`rolePortfolio.ts`](../../src/content/opportunities/rolePortfolio.ts)

3. **Affirm-shaped systems / trust / 30-60-90 architecture panels** → `systems-dossier` (rare)

4. **Default for engineering, SA, FDE, data, instructor-technical** → `compact`  
   Default path in [`OpportunityPageClient`](../../src/components/opportunities/OpportunityPageClient.tsx)

5. **Knight-only full dossier** → `full-dossier`

**Evidence packs** (pick subsets): [`src/content/opportunities/packs/`](../../src/content/opportunities/packs/)

**Application tracker** (status + slug + priority): [`src/content/applications/opportunityTracker.ts`](../../src/content/applications/opportunityTracker.ts)

## Public role archetypes (Airtable Inbox clusters)

Send these for multi-job clusters; keep employer dossiers private.

| Archetype | Send URL | Alias |
|-----------|----------|-------|
| AI Engineer (~15) | `/ai-engineering` | `/ai-engineer` |
| Forward Deployed (~8) | `/opportunities/forward-deployed-ai-engineer` | `/forward-deployed-engineer` |
| AI Solutions Architect (~6) | `/opportunities/ai-solutions-architect` | `/ai-solutions-architect` |
| Institutional / arts | `/institutions`, Knight, Oolite | not the job-search sprint |

Source of truth: [`roleArchetypes.ts`](../../src/content/applications/roleArchetypes.ts).

## URLs

- **Index:** `/opportunities` — lists `status: 'active'` opportunities from the registry.
- **Per role:** `/opportunities/[slug]` — e.g. `/opportunities/cvs-senior-genai-engineer`.
- **Knight (canonical):** `/technology-product-strategy` — unchanged; see [docs/knight-application/README.md](../knight-application/README.md).
- **Redirects:** `/technology-product-strategy/genai-innovation-lab` → `/opportunities/cvs-senior-genai-engineer`; `/opportunities/cvs-genai-engineer` and `/opportunities/senior-genai-engineer` → `/opportunities/cvs-senior-genai-engineer`; Ogilvy `...creative-editor` → `...creative-director`; archetype aliases above (see `next.config.js`).

These routes use a **recruiting-specific site header** modeled on the main site: **MoMA Sans**, **text logo**, two-row desktop layout (logo row + links), theme toggle, and no Visit CTA. See [`src/config/recruiting-navigation.ts`](../../src/config/recruiting-navigation.ts) and [`RecruitingSiteHeader.tsx`](../../src/components/opportunities/RecruitingSiteHeader.tsx). Main content clears the fixed header via `RECRUITING_MAIN_PADDING_TOP` in [`recruiting-layout.ts`](../../src/config/recruiting-layout.ts) (`pt-[8.4rem]`). Optionally set **`applicationBanner`** on an `Opportunity` (or on the Knight [`technologyProductStrategy`](../../src/content/technologyProductStrategy.ts) object) to show a **full-bleed image** directly under the header — useful for employer-specific hero art. Implemented by [`OpportunityApplicationBanner.tsx`](../../src/components/opportunities/OpportunityApplicationBanner.tsx).

## Add a new opportunity

1. **Classify** — Use the family decision tree above; add/update a row in [`opportunityTracker.ts`](../../src/content/applications/opportunityTracker.ts).
2. **Evidence** — Pick a pack subset from [`packs/`](../../src/content/opportunities/packs/). Extend [`projects.ts`](../../src/content/evidence/projects.ts) only when needed. Add preview images under `public/images/opportunities/`.
3. **Tech logos** — Add keys to [`src/content/evidence/tech-logos.ts`](../../src/content/evidence/tech-logos.ts) (`id`, `label`, optional `imageSrc` under `/public`). Reference ids from the opportunity config’s `techLogoIds`.
4. **Config** — Create [`src/content/opportunities/your-slug.ts`](../../src/content/opportunities/) exporting an `Opportunity` (or use the creative-agency factory). Prefer `listed: false` and `seo.indexable: false` for private dossiers.
5. **Registry** — Register the object in [`src/content/opportunities/registry.ts`](../../src/content/opportunities/registry.ts) inside `bySlug`.
6. **Résumé** — Set `ctas.resumePdfPath` (file in `public/resume/`) and/or `ctas.resumePrintPath` (print route). Shared UI: [`OpportunityResumeLinks.tsx`](../../src/components/opportunities/OpportunityResumeLinks.tsx). Theme tokens: [`opportunityTheme.ts`](../../src/components/opportunities/opportunityTheme.ts).
7. **Optional redirect** — If you want a second vanity URL, add a `redirects()` entry in `next.config.js`.
8. **Smoke-test** the slug (and alias) before sending.

## Knight in this system

- Metadata and types for Knight live in [`src/content/opportunities/knight-journalism-tech-product-strategist.ts`](../../src/content/opportunities/knight-journalism-tech-product-strategist.ts) as **`status: 'active'`** — listed on `/opportunities` and served at `/opportunities/knight-journalism-tech-product-strategist` (same UI as the canonical dossier). Banner image is defined once on [`technologyProductStrategy.applicationBanner`](../src/content/technologyProductStrategy.ts) and referenced from the Knight opportunity config.
- The live dossier remains [`TechnologyProductStrategyClient.tsx`](../../src/components/technology-product-strategy/TechnologyProductStrategyClient.tsx), now wrapped in [`OpportunityShell`](../../src/components/opportunities/OpportunityShell.tsx) for shared layout and sticky section nav.

## Logos and previews

- **Animated logo band** — [`AnimatedLogoBand`](../../src/components/opportunities/AnimatedLogoBand.tsx) + logo URLs in [`recruitingLogoBand.ts`](../../src/content/evidence/recruitingLogoBand.ts). Set `animatedLogoBand` on an `Opportunity` to show the marquee in the hero and again under “Platforms and tools.”
- **Case study cards** use SVG placeholders in `public/images/opportunities/` until you drop in real screenshots.

## Teaching, credentials, and social

Optional on each `Opportunity` in [`types.ts`](../../src/content/opportunities/types.ts):

- `teachingHighlights` — cards linking to `/teaching` and workshop routes.
- `certifications` — short, verifiable lines (degree, major cert URLs, or “see `/cv`”).
- `ctas.instagram` — alongside LinkedIn and GitHub in the hero “Profiles” strip and footer CTAs.

## Analytics

CTA clicks use [`src/lib/analytics.ts`](../../src/lib/analytics.ts) `track('opportunity_cta_click', { opportunitySlug, kind })`.

- **Compact opportunities:** `slug` from config (e.g. `cvs-senior-genai-engineer`).
- **Knight dossier:** `opportunitySlug` is `technology-product-strategy` for legacy URL tracking.

Use PostHog or gtag in production; in dev, events may log via `console.debug` when neither is present.

## Tone

Keep copy **evidence-based** and aligned with site rules: artist-technologist first, engineering and GenAI as integrated practice — avoid generic consulting pitch tone.
