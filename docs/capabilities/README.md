# Capabilities — Technical Proof Engine (`/capabilities`)

Canonical skills map for recruiting. Every archetype and focus dossier should **deep-link here** instead of re-authoring the same skills matrix.

## Purpose

Answer: *What evidence does a hiring manager need to believe I can solve their problems in week one?*

Six pillars (AI Engineering, Software Engineering, Data / Infrastructure, Design + Creative Technology, DevOps + Deployment, Leadership / Communication). Each skill is:

- **Proven** — public link required (type-enforced)
- **Building** — active ramp, optional partial evidence
- **Planned** — roadmap only, low emphasis

Certifications are modeled in draft data but **not rendered** until statuses are confirmed.

## Source of truth

| Layer | Path |
|-------|------|
| Types | [`src/content/capabilities/types.ts`](../../src/content/capabilities/types.ts) |
| Pillars | [`src/content/capabilities/pillars.ts`](../../src/content/capabilities/pillars.ts) |
| Skills | [`src/content/capabilities/skills.ts`](../../src/content/capabilities/skills.ts) |
| API | [`src/content/capabilities/index.ts`](../../src/content/capabilities/index.ts) |
| Page | [`src/app/(main)/capabilities/page.tsx`](../../src/app/(main)/capabilities/page.tsx) |
| UI | [`src/components/capabilities/`](../../src/components/capabilities/) |

**Update a skill’s status only in `src/content/capabilities/skills.ts`.** Building → Proven only when a repo, case study, or live demo URL exists.

## Deep-links from focus pages

Set `capabilitiesHref` on an [`Opportunity`](../../src/content/opportunities/types.ts) (e.g. `/capabilities#data-infrastructure`). Clients render [`CapabilitiesDeepLink`](../../src/components/capabilities/CapabilitiesDeepLink.tsx).

Focus pages wired today:

- `/ai-engineering` → `#ai-engineering`
- Affirm systems dossier → `#ai-engineering`
- Forward Deployed → `#devops-deployment`
- AI Solutions Architect → `#software-engineering`
- FLORA Founding DE → `#data-infrastructure`
- Comfy MTS Frontend → `#design-creative-technology`
- Creative-agency factory → `#design-creative-technology`

## New employer applications (process)

1. Pick public archetype send URL ([`roleArchetypes.ts`](../../src/content/applications/roleArchetypes.ts)).
2. Add a **thin** private overlay (hero, role-match, banner) — not a forked skills matrix.
3. Set `capabilitiesHref` to the matching pillar hash.
4. Keep interactive proof (Comfy / Flora / Affirm architecture) on the dossier; shared skills live on `/capabilities`.

## Credibility rules

- Never mark Proven without `evidence.href`.
- RAG / MCP / multi-provider routing stay Building or Planned until verified-live (matches existing opportunity evidence gates).
- Do not invent certification progress on this page.
