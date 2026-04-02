# Cursor Prompts — Reusable Chat Templates

Copy and paste these prompts into Cursor chat for page-by-page work and media management. See [website-strategy-moises-2026.md](website-strategy-moises-2026.md) for context.

---

## A. Site Architecture

Use this first to define information architecture.

```
You are helping me restructure my artist website for the next 2–3 years.

Context:
- I am Moises Sanabria, a Miami-based interdisciplinary artist working across sculpture, installation, performance, AI, code, and digital media.
- My strongest themes are techno-spirituality, networked belief, cognition as commodity, inflation/value, digital labor, interface aesthetics, and the emotional conditions of life inside computational systems.
- The website must optimize first for curators, grant panels, residencies, and museum opportunities.
- Secondary audiences are collectors, press, and teaching/workshop partners.
- I want the site to feel conceptually strong but also be easy for institutions to navigate.

Task:
Read docs/website-strategy-moises-2026.md and help me define the ideal information architecture for my artist website for the next 2–3 years.

Audit the current information architecture and propose:
1. ideal top navigation
2. page hierarchy
3. which pages should be merged, split, added, or demoted
4. how to distinguish Selected Works vs Archive vs Research
5. what the homepage should prioritize
6. a recommended 2-year evolution path

Output format:
- top-level nav
- page-by-page purpose
- recommended hierarchy
- risks
- next actions
```

---

## B. Homepage Strategy

```
Help me rewrite the homepage of my artist website for institutional clarity.

Goals:
- immediately communicate who I am and what my work is about
- foreground 5–8 key works
- balance conceptual tone with grant / curator usability
- make the site feel museum-legible rather than like a generic portfolio

Please provide:
1. homepage content hierarchy
2. hero copy options
3. section order
4. CTA structure
5. what should be removed
6. what should link where
```

---

## C. Selected Works

```
Help me build a Selected Works page for my website.

I want this page to be the main institutional entry point for curators, grants, residencies, and collectors.

Use this framework:
- 6–8 strongest works only (see docs/website-strategy-moises-2026.md for canon list)
- each entry should include title, year, medium, dimensions if available
- 80–150 word description
- a one-line conceptual framing
- recommended image order
- suggestions for which works belong here versus Archive

Please also tell me whether the selection feels coherent as one body of work.
```

---

## D. Artwork Page

```
Help me write a museum-legible artwork page for this piece.

Inputs:
- Title:
- Year:
- Medium:
- Dimensions:
- Short concept:
- Materials / visual details:
- Exhibition history:
- Related themes:

Please generate:
1. a 30-word version
2. a 90-word version
3. a fuller 150–220 word version
4. alt text
5. related tags / internal links
6. suggestions for installation views, detail shots, and process documentation
```

---

## E. Bio / Statement

```
Help me rewrite my bio and artist statement for clarity across grants, residencies, and institutional opportunities.

I need:
- 80-word short bio
- 150-word short institutional bio
- 250–300 word longer bio
- 120–180 word artist statement
- a version that emphasizes my museum practice over my technical consulting work
- a version that still frames AI, code, and research as core parts of the art practice without fragmenting the read
```

---

## F. Grant Landing Page

```
Help me create a project-specific grant landing page for my website.

The page should function as a microsite for an application.

Include:
1. project title
2. one-paragraph overview
3. 300–500 word project statement
4. key images / mockups needed
5. related prior works section
6. why this project matters now
7. production / research notes
8. optional technical notes
9. a concise version for panelists skimming quickly

Tone:
clear, serious, contemporary art institution friendly, still conceptually strong
```

---

## G. Research Page Framing

```
Help me redefine my Research page so it supports my art practice instead of competing with it.

I want Research to feel like:
- the conceptual and technical engine behind the artworks
not:
- a separate startup or unrelated lab identity

Please propose:
1. the role of the Research page
2. section structure
3. what content belongs there
4. what should move elsewhere
5. example copy
6. language that ties research directly back to the artworks
```

---

## H. Opportunity Tailoring

```
I am applying to [grant/residency/opportunity].

Based on my website strategy, tell me:
1. which page I should send first
2. whether I should make a custom landing page
3. which 4–6 works are most relevant
4. how to frame continuity in my practice
5. what parts of my site may confuse reviewers
6. what website changes would most improve this application
```

---

## Media Prompts (Cloudinary MCP)

Requires Cloudinary Asset Management MCP to be configured. See [cloudinary-mcp-setup.md](cloudinary-mcp-setup.md).

### Scan Assets

```
Using the Cloudinary MCP, list all assets in art/moisestech-website/ and compare them to the URLs in src/constants/artworks.ts. Report orphaned assets and any artworks.ts URLs that don't exist in Cloudinary.
```

### Tag Artwork Images

```
Using Cloudinary MCP, add tags to all images in art/moisestech-website/artworks/ based on the folder name (e.g. folder 2025_privacy_mask gets tag "privacy_is_a_luxury").
```

### Generate Optimized URLs

```
For each Cloudinary URL in src/constants/artworks.ts, generate an optimized delivery URL with w_1200, q_auto, f_auto. Show me the diff.
```

### Compare Exhibitions and Artworks

```
Using Cloudinary MCP, search assets in art/moisestech-website/ and compare to all URLs in src/constants/exhibitions.ts and src/constants/artworks.ts. List any URLs in the code that don't match Cloudinary assets, and any Cloudinary assets that aren't referenced in the code.
```

---

## Recommended First Prompts

Run in this order:

1. **Strategy** — Site architecture prompt (A)
2. **Nav** — "Based on my goals, propose the final top navigation and explain why each item belongs there."
3. **Selected Works** — "Help me choose the 6–8 works that should make up my Selected Works page and explain why each belongs."
4. **Homepage** — Homepage strategy prompt (B)
5. **Research** — Research page framing prompt (G)
6. **Media audit** — Scan assets prompt (after Cloudinary MCP is configured)
