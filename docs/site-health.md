# Site health / continuity

Living audit of page families, source-of-truth paths, opportunity readiness, and cleanup rules.  
**Start here** in a new chat before editing opportunities, institutions, capabilities, or Digilab media.

Cursor rule: [`.cursor/rules/site-health.mdc`](../.cursor/rules/site-health.mdc)

Last audit: **2026-08-07** · Last progress update: **2026-08-09 (Three flagship proofs)**

---

## Progress tracker

Use this table to resume work. Update when a pass ships.

| Pass | Date | What changed | Result |
|---|---|---|---|
| Docs | 2026-08-07 | `site-health`, opportunities inventory, institutions, capabilities enforcement, Cursor rule | Continuity live |
| **C→A pass 1** | 2026-08-07 | Unlisted Blue Acorn, Harvey, NEOGOV; CVS private archetype + `capabilitiesHref` | Index cleaned of thin/risky drafts |
| Workshops catalog | 2026-08-07 | CSV → `catalog.ts`; Ready grid on `/workshops#catalog` | Hub shows 8 Ready offers |
| **C→A pass 2** | 2026-08-07 | AI SA banner; caps hrefs; tracker sync | Tracker complete; archetype banner |
| **Workshops SEO** | 2026-08-07 | Thin landings for 7 Ready slugs at `/workshop/[slug]`; outcomes/whyNow in catalog; cross-links from artist-infrastructure + Digilab classes; SEO feature card points in-site | Indexable landings for SEO/writing/docs/AI/vibe/studio/copyright |
| **Three flagships** | 2026-08-09 | Evidence registry v2; `/forward-deployed`, `/creative-ai`, `/projects/agentic-ops`; homepage hire door; sitemap/robots; recipe-ranked dossiers | Hiring spine = three flagships; skill-demand over dossier count |

### Next recommended passes (ordered)

1. Finish **agentic-ops** application-ready gates (demo replay, MCP, RAG, evals, CI) in sibling repo.
2. Digilab verified KPI nulls + SmartSigns install photos when cleared.
3. Migrate remaining opportunity dossiers to `evidenceRecipe` weights.
4. Digilab 360 / video.
5. Optional: richer workshop landings (hero images from Digilab media registry).

## Honest verdict

The site has **two institutional doors** and **three hiring flagships**. Conversion lifts come from deepening those proofs — not from more thin `/opportunities/*` pages.

```text
Institutions send:  /artist-infrastructure  →  /oolite-arts (proof)  →  Calendly
Hiring flagships:   /projects/agentic-ops · /forward-deployed · /creative-ai
Hiring skills SoT:  /capabilities  →  private /opportunities/[slug] (thin overlays)
Do not mix doors:   incubators ≠ /ai-engineering; hiring ≠ /artist-infrastructure alone
```

### Do not build yet

Standalone MCP demo, RAG demo, FastAPI demo, pgvector demo, Claude demo, OAuth demo, TouchDesigner/WebGPU demos, or more thin opportunity dossiers for score theater. Put agent/RAG/MCP/evals **inside** `agentic-ops`. ArtLikes / Monica client cases stay **planned** slots only.

| Family | Working | Needs clarification / polish | Missing / thin |
|---|---|---|---|
| Institutions | `/artist-infrastructure` offer, `/oolite-arts` Digilab case study, `/institutions` directory, Digilab media registry | Two availability lines; `/workshops` visual brand drift; Bakehouse placeholder media | Unified availability; workshops on Inst shell; 360/video |
| Opportunities | Creative-agency factory + honesty labels; Comfy / Flora / Affirm / Knight; packs + tracker pattern | Remaining listed pages; WMX sibling; ONX framing | Banners on thin private dossiers; tracker sync; agency media TODOs |
| Capabilities / recruiting | `/capabilities` as skills SoT | Many compact pages still ship long `skillsMatrixRows` without `capabilitiesHref` | Enforcement + thin matrices only |
| Workshops | `/workshops#catalog` + Ready `/workshop/[slug]` landings | Inst shell restyle on hub; Digilab hero images on landings | In Development / Coming Soon pages |
| Oolite duplicates | Canonical story on `/oolite-arts` | `/tech-nonprofit/oolite/*` and Knight grant archive still read as competing “the” Oolite page | Explicit archive labeling / nav demotion |

---

## 1. Families and entry URLs

| Family | Primary send URL | Also | Audience |
|---|---|---|---|
| Institutions / Miami outreach | `/artist-infrastructure` | `/oolite-arts`, `/institutions`, `/bakehouse`, `/workshops` | Incubators, orgs, partners |
| Digilab proof | `/oolite-arts` | Digilab media registry | Curators, panels, partners needing depth |
| **Hiring flagship — agents** | `/projects/agentic-ops` | `/ai-engineering`, `/capabilities#ai-engineering` | Applied AI / FDE / SA (Building until gates) |
| **Hiring flagship — FDE** | `/forward-deployed` | `/opportunities/forward-deployed-ai-engineer` overlay | Recruiters, FDE roles |
| **Hiring flagship — Creative AI** | `/creative-ai` | `/creative-technologist` alias | Creative Tech / AD / innovation |
| Hiring / recruiting skills | `/capabilities` | `/ai-engineering`, `/career-packet` | Recruiters, hiring managers |
| Employer dossiers | private `/opportunities/[slug]` | Index only for intentional public listings | Application threads |
| Teaching / workshops | `/workshops` | `/workshop/[slug]` deep programs, Digilab `#classes` | Artists, institutions, SEO for teaching proof |
| Grants | `/grant/...` | Knight archive | Panels — project-specific |
| Art / museum | main nav Selected Works | Archive, research | Curators, press |

**Do not mix doors:** incubators ≠ `/ai-engineering`; hiring ≠ `/artist-infrastructure` alone.

**Archive / ops (not the public Digilab story):** `/tech-nonprofit/oolite/*`, `/grant/knight-foundation/*` — link to `/oolite-arts` when someone needs the narrative case study.

**Private app (no institutional family pitch as primary):** `/artist-sustainability` (YoungArts supplement, `noindex`).

Detail docs:

- Opportunities → [`docs/opportunities/README.md`](./opportunities/README.md)
- Institutions → [`docs/institutions/README.md`](./institutions/README.md)
- Capabilities → [`docs/capabilities/README.md`](./capabilities/README.md)
- Workshops catalog → [`docs/workshops-catalog.md`](./workshops-catalog.md)
- Digilab media → [`docs/oolite-digilab-media-workflow.md`](./oolite-digilab-media-workflow.md)

---

## 2. Source-of-truth table

| Concern | Canonical path | Do not fork |
|---|---|---|
| **Hiring flagships** | `/projects/agentic-ops`, `/forward-deployed`, `/creative-ai` + [`src/content/evidence/flagships.ts`](../src/content/evidence/flagships.ts) | Per-employer competing case-study objects |
| Evidence projects (slim cards) | `src/content/evidence/projects.ts` | Duplicate summaries on every dossier |
| Evidence packs | `src/content/opportunities/packs/` | Copy-pasted `featuredProjectIds` without a pack or `evidenceRecipe` |
| Skills | `src/content/capabilities/` + `/capabilities` | Full `skillsMatrixRows` on every role |
| Opportunity chrome | `OpportunityShell` + `OpportunityHero` + `ResumeCTA` | New page client that reimplements them |
| Opportunity registry | `src/content/opportunities/registry.ts` | Orphan routes without registry |
| Application tracker | `src/content/applications/opportunityTracker.ts` | Registry change without tracker row |
| Institutions chrome | `InstitutionalUi.tsx` + `OutreachComponents.tsx` | Local `SectionLabel` / `CaseStudyCard` forks |
| Digilab stills | `src/content/oolite-arts/media.ts` | Inline Digilab Cloudinary URLs |
| Recruiting header | `recruiting-navigation.ts` + `RecruitingSiteHeader` | Ad-hoc headers on recruiting paths |
| Institutional family nav | `INSTITUTIONAL_FAMILY_NAV` in `shared.ts` | Competing availability / pricing copy |
| Availability / pricing | `src/content/institutions/shared.ts` (+ workshops offerings) | Second availability sentence on outreach pages |
| Workshop catalog | `src/content/workshops/catalog.ts` | Hand-editing CSV rows into random pages; see `docs/workshops-catalog.md` |

---

## 3. Opportunity readiness tiers

**28** registry opportunities · **~9** listed on index · rest private direct-URL.

### Tier A — ship / interview

Comfy, Flora, Affirm, Knight, Forward Deployed, NEW INC, Morley, Digitas, WMX AD (submitted).

### Tier B — ready private overlay

Ogilvy, WPP Hex, MSC, Razorfish, Alpha Drive, CoreStory, Stacklok, ONX, Air Space, Netflix, Playwire, **AI Solutions Architect** (public archetype — banner + caps in pass 2).

### Tier C — thin / private until polished

Blue Acorn, Harvey, NEOGOV, Deepgram, Endor (**unlisted**), CVS (private archetype overlay), WMX Design Leader (tracker synced; merge or differentiate still open).

Full inventory table: [`docs/opportunities/README.md`](./opportunities/README.md#inventory--readiness).

### Clarification backlog (status)

1. Public index — **partial:** unlisted Blue Acorn / Harvey / NEOGOV / CVS; remaining listed need deliberate keep/unlist pass.
2. CVS — **resolved** (pass 1).
3. Creative public spine — open.
4. WMX siblings — open (both in tracker now).
5. ONX framing — open.
6. Tracker required on registry change — **pass 2 synced** missing registry slugs; keep as standing rule.

---

## 4. Institutions gaps (summary)

- **Availability:** hub / Bakehouse / YoungArts use contract-end language; artist-infrastructure uses “available fall 2026.” Unify in `shared.ts`.
- **Three Oolite stories:** `/oolite-arts` (canonical) vs `/tech-nonprofit/oolite/*` (ops) vs Knight grant archive — demote archive in copy/nav.
- **Workshops:** Ready catalog now on `/workshops#catalog` (`catalog.ts`); visual system still diverges from Inst shell — restyle later. Deep `/workshop/[slug]` landings still phased.
- **Bakehouse:** honest shipped/proposed buckets work; SmartSign photography still placeholder.
- **Digilab:** registry + portraits live; layout polish and 360/video are next (see Digilab workflow doc).

---

## 5. Do-not-fork list

1. **No 6th case-study / proof-card UI** — adapt existing: `CaseStudyGrid`, systems grid, creative modules, hub cards, outreach proof. Prefer one shared card + adapters later.
2. **No new opportunity page client** that re-copies banner / hero / shell chrome — extend composers or use factory / packs.
3. **No Comfy-style slug hardcodes** for the next interactive dossier — add an explicit `family` / render hint on `Opportunity`.
4. **No second Digilab media map** — registry only (`media.ts`).
5. **No second skills canon** — `/capabilities` + `capabilitiesHref`; short role matrices only when necessary.
6. **Max one in-page sticky section nav** per page (OpportunityShell sticky *or* creative DossierSectionNav *or* institutional section chips — not stacked by default).

---

## 6. Component cleanup backlog (implement later)

Ordered for site-wide leverage:

1. Opportunity chrome composer DRY (compact / role-portfolio / systems / creative)
2. Proof-card contract + pack discipline
3. `capabilitiesHref` enforcement on compact engineering pages
4. Institutions primitives (Bakehouse, workshops, Oolite section labels; drop family nav from private sustainability)
5. Nav ownership documentation → code
6. Digilab stray URLs → 360 → video

```text
docs (this file) → answer clarifications → chrome DRY → packs/cards → capabilitiesHref → inst shell → Digilab 360/video
```

---

## 7. Continuity checklist (PR / new page)

- [ ] Family classified (institutions / opportunities / capabilities / grants / art)
- [ ] Correct entry URL for the audience
- [ ] Pack + `capabilitiesHref` used for opportunities (or documented exception)
- [ ] Tracker row if registry slug added/changed
- [ ] No new case-study component or shell fork
- [ ] Correct header (recruiting vs InstFamilyNav vs main)
- [ ] Digilab images via `media.ts` ids
- [ ] This doc / family README updated if a pattern changed

---

## 8. Pasteable next-chat prompt

```
Continue from site health continuity docs.

Read first:
- docs/site-health.md
- docs/opportunities/README.md
- docs/institutions/README.md
- docs/oolite-digilab-media-workflow.md (if Digilab/media)

Rules:
- Do not invent a new case-study UI or opportunity shell
- Prefer packs + capabilitiesHref over full skills matrices
- Digilab stills only via src/content/oolite-arts/media.ts
- Send institutions via /artist-infrastructure; Digilab proof via /oolite-arts

Then: [answer clarification backlog / start chrome DRY / add banners / Digilab 360 — pick one]
```

---

## 9. Index of existing docs

| Doc | Role |
|---|---|
| [`docs/site-health.md`](./site-health.md) | Continuity index (this file) |
| [`docs/opportunities/README.md`](./opportunities/README.md) | Opportunity families, inventory, quality bar |
| [`docs/institutions/README.md`](./institutions/README.md) | Miami institutional send hierarchy |
| [`docs/capabilities/README.md`](./capabilities/README.md) | Skills proof engine |
| [`docs/workshops-catalog.md`](./workshops-catalog.md) | Workshop CSV → catalog + hub SEO plan |
| [`docs/oolite-digilab-media-workflow.md`](./oolite-digilab-media-workflow.md) | Digilab media registry + 360/video roadmap |
| [`docs/knight-application/`](./knight-application/) | Knight dossier specifics |
| [`docs/site-architecture-proposal-2026.md`](./site-architecture-proposal-2026.md) | Architecture proposal |
| [`docs/website-strategy-moises-2026.md`](./website-strategy-moises-2026.md) | Strategy — link, don’t rewrite |
| [`.cursor/rules/`](../.cursor/rules/) | artist-identity, page-structure, writing-style, Digilab media, site-health |
