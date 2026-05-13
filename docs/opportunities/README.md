# Opportunities microsite (`/opportunities`)

Role-specific recruiting dossiers: compact technical briefs you can drop into email threads. These routes are **not** linked from the main exhibition navigation by design.

## URLs

- **Index:** `/opportunities` — lists `status: 'active'` opportunities from the registry.
- **Per role:** `/opportunities/[slug]` — e.g. `/opportunities/cvs-genai-engineer`.
- **Knight (canonical):** `/technology-product-strategy` — unchanged; see [docs/knight-application/README.md](../knight-application/README.md).
- **Alias redirect:** `/technology-product-strategy/genai-innovation-lab` → `/opportunities/cvs-genai-engineer` (see `next.config.js`).

## Add a new opportunity

1. **Evidence** — If the page uses shared case studies, add or extend entries in [`src/content/evidence/projects.ts`](../src/content/evidence/projects.ts). Add preview images under `public/images/opportunities/`.
2. **Tech logos** — Add keys to [`src/content/evidence/tech-logos.ts`](../src/content/evidence/tech-logos.ts) (`id`, `label`, optional `imageSrc` under `/public`). Reference ids from the opportunity config’s `techLogoIds`.
3. **Config** — Create [`src/content/opportunities/your-slug.ts`](../src/content/opportunities/) exporting an `Opportunity` object with `slug`, `status: 'active'`, `seo`, `variant: 'compact'`, hero, `roleMatchRows`, `featuredProjectIds`, `skillsMatrixRows`, `processSteps`, `ctas`, etc.
4. **Registry** — Register the object in [`src/content/opportunities/registry.ts`](../src/content/opportunities/registry.ts) inside `bySlug`.
5. **Résumé PDF** — Place the file in `public/resume/` and set `ctas.resumePdfPath` (e.g. `/resume/moises-sanabria-senior-genai-engineer.pdf`).
6. **Optional redirect** — If you want a second vanity URL, add a `redirects()` entry in `next.config.js`.

## Knight in this system

- Metadata and types for Knight live in [`src/content/opportunities/knight-journalism-tech-product-strategist.ts`](../src/content/opportunities/knight-journalism-tech-product-strategist.ts) as **`status: 'draft'`** so it is documented but **not** generated at `/opportunities/[slug]` until you promote it to `active` and register it for static params.
- The live dossier remains [`TechnologyProductStrategyClient.tsx`](../../src/components/technology-product-strategy/TechnologyProductStrategyClient.tsx), now wrapped in [`OpportunityShell`](../../src/components/opportunities/OpportunityShell.tsx) for shared layout and sticky section nav.

## Logos and previews

- **Tech stack row** (`TechStackLogos`) uses text badges from [`src/content/evidence/tech-logos.ts`](../../src/content/evidence/tech-logos.ts). Add `imageSrc` (path under `public/`) per tech id when you have SVG or PNG marks.
- **Case study cards** use SVG placeholders in `public/images/opportunities/` until you drop in real screenshots.

## Teaching, credentials, and social

Optional on each `Opportunity` in [`types.ts`](../../src/content/opportunities/types.ts):

- `teachingHighlights` — cards linking to `/teaching` and workshop routes.
- `certifications` — short, verifiable lines (degree, major cert URLs, or “see `/cv`”).
- `ctas.instagram` — alongside LinkedIn and GitHub in the hero “Profiles” strip and footer CTAs.

## Analytics

CTA clicks use [`src/lib/analytics.ts`](../../src/lib/analytics.ts) `track('opportunity_cta_click', { opportunitySlug, kind })`.

- **Compact opportunities:** `slug` from config (e.g. `cvs-genai-engineer`).
- **Knight dossier:** `opportunitySlug` is `technology-product-strategy` for legacy URL tracking.

Use PostHog or gtag in production; in dev, events may log via `console.debug` when neither is present.

## Tone

Keep copy **evidence-based** and aligned with site rules: artist-technologist first, engineering and GenAI as integrated practice — avoid generic consulting pitch tone.
