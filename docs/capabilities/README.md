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

### Enforcement (quality bar)

- **Default:** every new or polished opportunity sets `capabilitiesHref` to the matching pillar hash.
- **Allowed:** a **short** role-specific `skillsMatrixRows` block only when the role needs a few hiring-manager lines that `/capabilities` does not cover.
- **Forbidden:** re-authoring a full six-pillar skills matrix on the dossier. Skills status changes happen only in [`skills.ts`](../../src/content/capabilities/skills.ts).
- Compact engineering / SA / FDE pages missing `capabilitiesHref` are tracked as a cleanup item in [`docs/site-health.md`](../site-health.md) and the [opportunities inventory](../opportunities/README.md#inventory--readiness).

Focus pages wired today:

- `/ai-engineering` → `#ai-engineering`
- `/forward-deployed` → flagship lifecycle (FDE send)
- `/creative-ai` → `#design-creative-technology` (Creative Technologist / AD send)
- `/projects/agentic-ops` → Building shell for RAG / MCP / agents (not Proven until gates)
- Affirm systems dossier → `#ai-engineering`
- Forward Deployed overlay → `#devops-deployment`
- Deloitte ServiceNow FDE → `#ai-engineering`
- AI Solutions Architect → `#software-engineering`
- FLORA Founding DE → `#data-infrastructure`
- Comfy MTS Frontend → `#design-creative-technology`
- Creative-agency factory → `#design-creative-technology`
- Compact engineering overlays (Air Space, Alpha Drive, CoreStory, Netflix, Playwire, …) → pillar hashes set in pass 2
- NEW INC / ONX → `#design-creative-technology`
- Stacklok Staff FDE → `#devops-deployment`

## Flagship evidence registry

[`src/content/evidence/flagships.ts`](../../src/content/evidence/flagships.ts) ranks the same proofs per role via `rankEvidenceForRole` / `evidenceRecipe`. Do not invent standalone MCP/RAG demos — they live inside Agentic Ops.

## New employer applications (process)

1. Pick public archetype send URL ([`roleArchetypes.ts`](../../src/content/applications/roleArchetypes.ts)) — prefer `/forward-deployed`, `/creative-ai`, or `/ai-engineering`.
2. Add a **thin** private overlay (hero, role-match, banner) — not a forked skills matrix.
3. Set `capabilitiesHref` + optional `evidenceRecipe` (corestory / wpp-hex / unit8 / okta / forward-deployed-default).
4. Keep interactive proof (Comfy / Flora / Affirm architecture) on the dossier; shared skills live on `/capabilities`.

## Credibility rules

- Never mark Proven without `evidence.href`.
- RAG / MCP / multi-provider routing stay Building or Planned until verified-live (matches existing opportunity evidence gates).
- Do not invent certification progress on this page.
