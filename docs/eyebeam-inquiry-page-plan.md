# Eyebeam Inquiry Page — Plan & Execution

**Goal:** A curated continuation of an email — not a generic portfolio. In 2–4 minutes, readers understand: core inquiry, why the work fits Eyebeam, which projects prove it, how technology functions, and what future conversation you're inviting.

---

## Best Page Location

### Recommended: `/eyebeam`

**Why:**
- Short, memorable URL for email: `moises.tech/eyebeam`
- Signals context (Eyebeam opportunity) without being in the main nav
- Can be linked directly from application email
- Doesn't clutter main site structure

**Alternatives considered:**
- `/inquiry` — Generic, reusable for other opportunities
- `/research/eyebeam` — Nested, longer URL
- `/opportunities/eyebeam` — If you build an opportunities section later

**Decision:** `/eyebeam` — best for "here's a link to learn more" in an email.

---

## Page Structure (Order)

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Frame the page immediately |
| 2 | Current Inquiry (Born into the Machine) | Thinking practice, not just works |
| 3 | Selected Works (3 max) | Evidence: Doomscrolling Treadmill, Simulation Faith, Price of Existence |
| 4 | Technology in the Practice | How tech functions — medium and subject |
| 5 | Public Forms | Modes of engagement (installations, talks, workshops, etc.) |
| 6 | Related Frameworks | Conceptual continuity (Born into the Machine, Artist in the Automation) |
| 7 | Short Bio / Contact | Enough context + links (CV, portfolio, contact) |
| 8 | Closing line | Invitation to reach out |

**Story arc:** thesis → evidence → method → formats → context

---

## Content Sources (Existing)

| Section | Source |
|---------|--------|
| Hero intro | New copy (provided in brief) |
| Born into the Machine | New copy (provided) |
| Doomscrolling Treadmill | `artworks.ts` → `doomscrolling_treadmill` |
| Simulation Faith | `artworks.ts` → `simulation_faith` |
| Price of Existence | `artworks.ts` → `price_of_existence` |
| Technology in the Practice | New copy (provided) |
| Public Forms | New copy (provided) |
| Related Frameworks | New copy (provided) |
| Short Bio | `artist.ts` + new condensed version |
| Images | Cloudinary URLs from artworks |

---

## Design Direction

- **Feel:** Research dossier in museum language
- **Not:** Portfolio dump, consulting page, product pitch
- **Tone:** Focused, elegant, thesis-driven, selective
- **Avoid:** Too many projects, engineering-job language, startup framing, service pricing, walls of text

---

## Execution Phases

### Phase 1: Route + Skeleton (MVP)
1. Create `src/app/(main)/eyebeam/page.tsx`
2. Create `src/components/page/EyebeamInquiryPage.tsx` (or `EyebeamInquiryClient.tsx` if client-only)
3. Minimal layout: Hero + 3 works + Technology + Contact
4. Reuse existing artwork data and images

### Phase 2: Full Content
1. Add all sections from the brief
2. Add Born into the Machine, Public Forms, Related Frameworks
3. Polish copy section by section

### Phase 3: Polish
1. Typography and spacing (museum-quality)
2. Responsive design
3. Metadata (title, description for sharing)
4. Optional: Add to sitemap or a discrete "Opportunities" nav item

---

## File Structure

```
src/
├── app/(main)/eyebeam/
│   └── page.tsx              # Route, metadata
├── components/page/
│   └── EyebeamInquiryPage.tsx  # Main page component
└── constants/
    └── eyebeam-inquiry.ts       # Optional: page copy in one place
```

---

## What NOT to Include

- Too many projects (3 max)
- Engineering-job language
- Startup / product framing
- Service pricing
- Long institutional history
- Giant walls of text
- Every possible idea

---

## Success Metric

> This artist is already working in the conceptual territory Eyebeam cares about, and the practice is serious, legible, and expandable.

Not: "This person does many things."
