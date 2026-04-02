# Site Architecture Proposal — 2026–2028

**Based on:** [website-strategy-moises-2026.md](website-strategy-moises-2026.md)  
**Date:** March 2026

---

## 1. Top-Level Navigation (Proposed)

| Order | Nav Item | Path | Purpose |
|-------|----------|------|---------|
| 1 | Visit | `/visit` | Physical location, hours (keep) |
| 2 | Exhibitions & Events | Dropdown | Current nav structure works; consolidate under one label |
| 3 | **Selected Works** | `/selected-works` | **NEW** — 6–8 canon works, primary institutional entry |
| 4 | Archive | `/collection` or `/archive` | Full body of work (rename/reframe existing collection) |
| 5 | Research | `/research` | Born into the Machine, Noisy Systems — tied to artworks |
| 6 | Teaching | `/teaching` | Workshops, Oolite — extension of practice |
| 7 | Bio | `/bio` | Short, institutional, longer versions |
| 8 | CV | `/cv` or `/resume` | Keep (DesktopNavigation has CV) |
| 9 | Store | External | Artsy link (keep) |

**Key change:** Add **Selected Works** as a distinct, high-authority section. Rename "Art and artists" to surface Selected Works first, with Archive as secondary.

---

## 2. Page Hierarchy

```
Home (/)
├── Selected Works (/selected-works)     ← NEW, primary art entry
│   └── Artwork detail (/art/[slug])
├── Archive (/collection or /archive)    ← Reframe existing
│   ├── Recent Works
│   ├── Early Works
│   └── By period
├── Research (/research)
│   ├── Born into the Machine
│   ├── Noisy Systems
│   ├── Locust Echo Economies
│   └── The Value and Future of the Image
├── Exhibitions & Events (dropdown)
│   ├── Current exhibitions
│   ├── Exhibition history
│   ├── Events calendar
│   └── (Film series, Performances — if applicable)
├── Teaching (/teaching)
├── Bio (/bio)
├── CV (/cv or /resume)
└── Grant landing pages (not in main nav)
    ├── /eyebeam
    └── /grant/knight-foundation
```

---

## 3. Pages to Merge, Split, Add, or Demote

### Add
- **`/selected-works`** — Dedicated page for 6–8 canon works. Can be built from existing portfolio data filtered by slug.

### Merge / Consolidate
- **Portfolio vs Collection** — Currently `/portfolio` and `/collection` (with recent-works, early-works). Propose: `/selected-works` = curated 6–8; `/archive` or `/collection` = full body. Portfolio could redirect to Selected Works or become the archive.
- **Exhibitions vs Events** — Already under one dropdown; keep.

### Split
- **Research** — Already has sub-pages (Born into the Machine, Noisy Systems, etc.). Ensure each ties back to artworks in copy.

### Demote (remove from primary nav)
- **Grant pages** — `/eyebeam`, `/grant/knight-foundation` stay as microsites, linked from applications, not main nav.
- **Workshop deep routes** — `/workshop/own-your-digital-presence/day/1/...` — keep for workshop participants; Teaching is the entry point.

---

## 4. Selected Works vs Archive vs Research

| Section | Purpose | Content |
|---------|---------|---------|
| **Selected Works** | Primary institutional entry. 6–8 strongest works. | privacy_is_a_luxury, taste_the_algorithm, simulation_faith, price_of_existence, doomscrolling_treadmill, smart_shoppers, vr_hug, beyond_money |
| **Archive** | Full body of work. For curators doing deep dives. | All artworks in artworks.ts, organized by period or theme |
| **Research** | Conceptual engine behind the work. Not a lab. | Born into the Machine, Noisy Systems, etc. — each section should reference which artworks it informs |

---

## 5. Homepage Priorities

1. **Hero** — One strong image + conceptual thesis (1–2 sentences)
2. **Selected Works preview** — 5–8 key works with links to `/selected-works` or `/art/[slug]`
3. **Current inquiry** — Born into the Machine or similar (short)
4. **Exhibitions / Events** — What's on now
5. **Bio (short)** — 80-word version + link to full bio
6. **CTAs** — View Selected Works, View Archive, Contact, Eyebeam (if relevant)

**Remove or reduce:** Long walls of text, too many projects, consulting framing.

---

## 6. Primary Entry Point Decision

**Recommendation: Option A — Home**

- Home should immediately communicate thesis + 5–8 key works.
- Selected Works is one click away for curators who want the full list.
- Project-specific landing pages (e.g., `/eyebeam`) are for applications — panelists get a direct link.

**Rationale:** Most institutional viewers land on Home first. If Home is strong, they stay. Selected Works supports deep dives. Grant pages are for targeted applications.

---

## 7. Risks

| Risk | Mitigation |
|------|------------|
| Nav bloat | Keep to 7–8 items; use dropdowns for Exhibitions & Events |
| Selected Works vs Archive confusion | Clear labels: "Selected Works" = curated; "Archive" = full body |
| Research feels separate | Add "Related artworks" to each research section |
| Grant pages orphaned | Link from Bio or a discrete "Opportunities" area if needed |

---

## 8. Next Actions

1. **Create `/selected-works` page** — Filter artworks by canon slugs; reuse ArtworkEntry or similar component.
2. **Update Header + DesktopNavigation** — Add "Selected Works", rename "Art and artists" to "Archive" or restructure.
3. **Homepage rewrite** — Use [docs/cursor-prompts.md](cursor-prompts.md) prompt B.
4. **Research page audit** — Add artwork links to each research section.
5. **Add Cloudinary MCP** — Run asset scan once configured (see [cloudinary-mcp-setup.md](cloudinary-mcp-setup.md)).

---

## 9. 2-Year Evolution Path

| Phase | Focus |
|-------|-------|
| **Now (2026)** | Selected Works page, nav update, homepage refresh |
| **Mid 2026** | Research page ties to artworks; grant landing pages polished |
| **2027** | Archive filters (by year, theme); teaching page as extension of practice |
| **2028** | Iterate based on analytics, grant feedback, curator usage |
