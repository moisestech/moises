# Opportunities microsite (`/opportunities`)

Role-specific recruiting dossiers: compact technical briefs you can drop into email threads. These routes are **not** linked from the main exhibition navigation by design.

**Continuity:** site-wide audit and pickup protocol live in [`docs/site-health.md`](../site-health.md). Read that first in a new chat.

## Family decision tree

Classify every new role before writing a page. Personalization = thin config (hero, role-match, banner, ≤1 unique section)—not a forked architecture.

1. **Art direction / creative director / creative editor / ACD innovation** → `creative-agency`  
   Factory: [`createCreativeAgencyOpportunity.ts`](../../src/content/opportunities/createCreativeAgencyOpportunity.ts)  
   Shell: [`CreativeAgencyClient`](../../src/components/opportunities/creative-agency/CreativeAgencyClient.tsx)  
   Note: typed as `variant: 'role-portfolio'` + `family: 'creative-agency'`; client routes on `creativeAgency` presence.

2. **Needs a custom interactive proof** (Comfy-style work sample, Flora interactivity) → `role-portfolio`  
   Shape: [`rolePortfolio.ts`](../../src/content/opportunities/rolePortfolio.ts)

3. **Affirm-shaped systems / trust / 30-60-90 architecture panels** → `systems-dossier` (rare)

4. **Default for engineering, SA, FDE, data, instructor-technical** → `compact`  
   Default path in [`OpportunityPageClient`](../../src/components/opportunities/OpportunityPageClient.tsx)

5. **Knight-only full dossier** → `full-dossier`

**Evidence packs** (pick subsets): [`src/content/opportunities/packs/`](../../src/content/opportunities/packs/)

**Canonical skills map:** [`/capabilities`](../../docs/capabilities/README.md) — Technical Proof Engine. New applications deep-link with `capabilitiesHref` instead of copying full skills matrices. Source: [`src/content/capabilities/`](../../src/content/capabilities/).

**Three flagships (prefer over dossier proliferation):** [`src/content/evidence/flagships.ts`](../../src/content/evidence/flagships.ts) + `evidenceRecipe` on Opportunity (CoreStory, WPP HEX, Stacklok, FDE archetype). Rank PRIMARY / SECONDARY / SUPPORTING — skill-demand patterns beat opportunity count.

**Application tracker** (status + slug + priority): [`src/content/applications/opportunityTracker.ts`](../../src/content/applications/opportunityTracker.ts)

## Client dispatch

[`OpportunityPageClient.tsx`](../../src/components/opportunities/OpportunityPageClient.tsx) branches in this order:

```text
full-dossier        → TechnologyProductStrategyClient
systems-dossier     → SystemsOpportunityClient
slug === comfy-mts-frontend  → ComfyWorkSampleClient   (hardcoded — replace with family/render hint later)
creativeAgency set  → CreativeAgencyClient
role-portfolio      → RolePortfolioClient
else                → compact shell (banner + hero + role match + cases + skills + process + CTAs)
```

**Forbidden forks:** do not add a sixth page client that reimplements banner / visibility / audience / hero / `OpportunityShell`. Extract shared chrome or extend an existing composer. See [`docs/site-health.md`](../site-health.md#5-do-not-fork-list).

**Pack discipline:** prefer packs for `featuredProjectIds` / default skill rows. Per-role files stay thin (hero, role-match, banner, ≤1 unique section).

## Inventory / readiness

Audit date: **2026-08-07**. Listed = appears on `/opportunities` (`status: 'active'` and `listed !== false`). Tracker = slug mentioned in `opportunityTracker.ts`. Banner / caps = field present on the opportunity module (creative factory may inject caps/banner even when the thin file looks sparse).

| Slug | Family / variant | Listed | Banner | Caps href | Tracker | Tier |
|------|------------------|--------|--------|-----------|---------|------|
| affirm-ai-solutions-engineer | systems-dossier | yes | yes | yes | yes | A |
| ai-solutions-architect | compact (archetype) | yes | yes | yes | yes | B (pass 2 banner) |
| air-space-intelligence-full-stack-engineer | compact | no | **no** | yes | yes | B |
| alpha-drive-ai-full-stack-engineer | compact | no | yes | yes | yes | B |
| blue-acorn-ici-agentic-ai-integration-engineer | compact | no | **no** | yes | yes | C (unlisted pass 1) |
| comfy-mts-frontend | role-portfolio | no | yes | yes | yes | A |
| corestory-ai-engineer | compact | no | **no** | yes | yes | B |
| cvs-senior-genai-engineer | compact (archetype overlay) | no | yes | yes | yes | C→private (pass 1) |
| deepgram-solutions-architect | compact | no | **no** | yes | yes | C |
| deloitte-ai-design-facilitator-fde | compact | no | yes | yes | yes | B |
| deloitte-servicenow-fde | compact | no | yes | yes | yes | B |
| digitas-associate-director-creative | creative-agency | no* | yes | factory | yes | A |
| endor-labs-solutions-architect | compact | no | **no** | yes | yes | C |
| flora-founding-data-engineer | role-portfolio | no | yes | yes | yes | A |
| flora-forward-deployed-creative | role-portfolio | no | yes | yes | yes | A |
| forward-deployed-ai-engineer | role-portfolio | yes | yes | yes | yes | A |
| harvey-automation-engineer-customer-education | compact | no | **no** | yes | yes | C (unlisted pass 1) |
| knight-journalism-tech-product-strategist | full-dossier | yes | yes | — | yes | A |
| morley-art-director-florida | creative-agency | no* | yes | factory | yes | A |
| msc-cruises-creative-director-travel-experiences | creative-agency | no* | yes | factory | yes | B |
| neogov-staff-agentic-ai-developer | compact | no | **no** | yes | yes | C (unlisted pass 1) |
| netflix-full-stack-engineer-ai-insights | compact | no | yes | yes | yes | B |
| new-inc-media-fabrication-lab-manager | compact | yes | yes | yes | yes | A |
| ogilvy-senior-ai-driven-creative-director | creative-agency | no* | yes | factory | yes | B |
| onx-senior-manager-artistic-development | compact | no | yes | yes | yes | B |
| playwire | compact | no | yes | yes | yes | B |
| razorfish-junior-art-director | creative-agency | no* | yes | factory | yes | B |
| stacklok-staff-forward-deployed-engineer | role-portfolio | no | yes | yes | yes | B |
| wmx-senior-art-director-ai | creative-agency | no* | yes | factory | yes | A |
| wmx-senior-art-director-ai-driven-design-leader | creative-agency | no* | yes | factory | yes | C |
| wpp-hex-creative-innovation-lead-acd | creative-agency | no* | yes | factory | yes | B |

\*Creative-agency factory defaults to private (`listed: false`, noindex).

### Tier definitions

- **A — ship / interview:** strong enough to send or already submitted.
- **B — ready private overlay:** usable private brief; deepen as needed.
- **C — thin / risky if public:** sprint clones, missing banners, example framing, or sibling redundancy.

### Missing banners (priority)

Air Space, AI Solutions Architect, Blue Acorn, CoreStory, Deepgram, Endor, Harvey, NEOGOV.

### Tracker drift (registry slug absent from tracker)

**Cleared in C→A pass 2.** Standing rule: every new registry slug gets a tracker row.

## Quality bar (send-ready)

Checklist before treating a dossier as application-ready:

- [ ] Classified via family decision tree; registered in `registry.ts`
- [ ] Tracker row in `opportunityTracker.ts` + `applicationStatus` when known
- [ ] `applicationBanner` (index / OG) — required for listed pages
- [ ] Hero + intro; prefer `heroPrimaryCta` / `heroSecondaryCta`
- [ ] `capabilitiesHref` to a `/capabilities#…` pillar (not a full duplicated skills matrix)
- [ ] Evidence from a pack subset where possible; honest `EvidenceStatus` / TODOs OK
- [ ] Employer dossiers: `listed: false`, `seo.indexable: false` unless intentionally public
- [ ] No public “example targeting” or unverified `[PROHIBITED]` rows on listed index cards
- [ ] Smoke-tested slug (and redirects)

## Clarification backlog

Answer in a follow-up chat before mass unlisting or architecture refactors:

1. **Public index** — Which of the listed pages stay public vs unlist / become archetypes only?
2. **CVS** — **Resolved (pass 1):** private archetype overlay; no longer public “example targeting.”
3. **Creative public spine** — Keep `roleArchetypes.creative` → `/career-packet`, or add a creative archetype URL?
4. **WMX** — Keep AD + Design Leader siblings, or one primary?
5. **ONX** — Stay compact + education pack, or elevate to institutional / creative framing?
6. **Tracker rule** — Require a tracker row (+ `applicationStatus`) on every registry change?

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

### Application banner presentation

Default is **height-locked `contain-blur`**: shared strip heights, sharp art fills **full height** via `intrinsicRatio`, blurred cover of the same image fills the sides. See the full pattern + audit (Morley / Ogilvy / CVS) in [`application-banners.md`](./application-banners.md). Set `presentation: 'cover'` only for cinematic assets designed to survive edge crop.

## Add a new opportunity

1. **Classify** — Use the family decision tree above; add/update a row in [`opportunityTracker.ts`](../../src/content/applications/opportunityTracker.ts).
2. **Evidence** — Pick a pack subset from [`packs/`](../../src/content/opportunities/packs/). Extend [`projects.ts`](../../src/content/evidence/projects.ts) only when needed. Add preview images under `public/images/opportunities/`.
3. **Tech logos** — Add keys to [`src/content/evidence/tech-logos.ts`](../../src/content/evidence/tech-logos.ts) (`id`, `label`, optional `imageSrc` under `/public`). Reference ids from the opportunity config’s `techLogoIds`.
4. **Config** — Create [`src/content/opportunities/your-slug.ts`](../../src/content/opportunities/) exporting an `Opportunity` (or use the creative-agency factory). Prefer `listed: false` and `seo.indexable: false` for private dossiers. Set `capabilitiesHref`. Compact shells render `plan` (30/60/90) when `opportunity.plan` is set.
5. **Registry** — Register the object in [`src/content/opportunities/registry.ts`](../../src/content/opportunities/registry.ts) inside `bySlug`.
6. **Résumé** — Set `ctas.resumePdfPath` (file in `public/resume/`) and/or `ctas.resumePrintPath` (print route). Shared UI: [`OpportunityResumeLinks.tsx`](../../src/components/opportunities/OpportunityResumeLinks.tsx). Theme tokens: [`opportunityTheme.ts`](../../src/components/opportunities/opportunityTheme.ts).
7. **Optional redirect** — If you want a second vanity URL, add a `redirects()` entry in `next.config.js`.
8. **Smoke-test** the slug (and alias) before sending.
9. **Update inventory** — Refresh the readiness table in this README (or note the tier in the PR) when shipping.

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
