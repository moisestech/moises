# Website Strategy — Moises Sanabria 2026–2028

**Purpose:** Project brief and PRD for the artist website. Use this document to align Cursor, content, and design decisions with institutional goals.

---

## 1. Who You Are

**Moises Sanabria** — Miami-based interdisciplinary artist working across sculpture, installation, performance, AI, code, and digital media.

**Practice:** Examines what it means to navigate "being chronically online" in an age where digital systems mediate nearly every facet of existence. At the intersection of machine philosophy, digital humanities, and memetics, explores how technology reshapes identity, value, and connection. Bridges contemporary art and hyper-accelerated internet culture through humor and critique.

**Methods:** AI algorithms, physical sculptures, immersive installations, code, poetic computation. Manual techniques and programming infrastructure as artistic gestures.

---

## 2. Core Themes

- **Techno-spirituality** — Faith, belief, and transcendence in digital environments (e.g., Simulation Faith)
- **Cognition as commodity** — How intelligence and attention are monetized (e.g., Smart Shoppers)
- **Digital labor and value** — Inflation, currency, ephemeral wealth (e.g., Price of Existence, Beyond Money)
- **Interface aesthetics** — Platform dependency, surveillance, privacy as luxury (e.g., Privacy is a Luxury)
- **Emotional life under networked systems** — Burnout, doomscrolling, synthetic flow (e.g., Doomscrolling Treadmill)
- **Algorithmic desire** — How recommendation systems shape taste and want (e.g., Taste the Algorithm)

---

## 3. Primary Audiences (in order)

1. **Curators** — Museum and gallery curators seeking exhibition-ready work
2. **Grant panels** — Eyebeam, Knight, residencies, fellowships
3. **Residencies and fellowships** — Institutional opportunities
4. **Museum and institutional partners** — Collaborations, commissions
5. **Collectors** — Art buyers and patrons
6. **Press** — Critics, journalists, art writers
7. **Workshop and teaching partners** — Oolite, workshops, educational opportunities

The site must be **conceptually rigorous** and **easy to scan**. Institutional viewers should understand the practice in 2–4 minutes.

---

## 4. Canon Works (6–8 for Selected Works)

| Slug | Title | Year | Why |
|------|-------|------|-----|
| `privacy_is_a_luxury` | Privacy is a Luxury | 2025 | Surveillance, monetized privacy, VPN culture |
| `taste_the_algorithm` | Taste the Algorithm | 2026 | Algorithmic desire, Museum of Sex context |
| `simulation_faith` | Simulation Faith | 2025 | Techno-spirituality, VR and belief |
| `price_of_existence` | Price of Existence | 2024 | Value, inflation, mortality, Fundación Paiz |
| `doomscrolling_treadmill` | Doom Scrolling Treadmill | 2024 | Digital labor, burnout, performance |
| `smart_shoppers` | Smart Shoppers | 2024 | Cognition as commodity, AI, consumerism |
| `vr_hug` | VR Hug | 2017 | Intimacy and technology, early signature work |
| `beyond_money` | Beyond Money | 2022 | GANs, value, NFT/capitalism |

**Eyebeam-focused trio:** Doomscrolling Treadmill, Simulation Faith, Price of Existence.

---

## 5. Website Goals (2026–2028)

- **Foreground selected works** — 6–8 strongest pieces with clear institutional framing
- **Separate Selected Works from Archive** — Selected = curated, high authority; Archive = full body
- **Present research as supporting the art practice** — Not a separate lab or startup identity
- **Enable project-specific landing pages** — Grant/residency microsites (e.g., `/eyebeam`)
- **Museum-legible** — Clear hierarchy, scannable, grant-panel friendly
- **Conceptually strong** — Avoid generic portfolio or consulting framing

---

## 6. Page Hierarchy and Nav

**Current nav:** Visit, Exhibitions, Events, Art and Artist, Bio, Store

**Proposed evolution:**
- **Home** — Hero, conceptual thesis, 5–8 key works, clear CTAs
- **Selected Works** — 6–8 canon works (distinct from full portfolio/archive)
- **Archive** — Full body of work, searchable/filterable
- **Research** — Born into the Machine, Noisy Systems, etc. — tied to artworks
- **Exhibitions / Events** — Calendar, history
- **Bio** — Short, institutional, longer versions
- **Teaching / Workshops** — Oolite, Own Your Digital Presence, etc.
- **Grant landing pages** — `/eyebeam`, `/grant/knight-foundation`, etc.

**Key decision:** What is the single primary entry point for institutional viewers?
- **Option A:** Home (thesis + works)
- **Option B:** Selected Works (direct to evidence)
- **Option C:** Project-specific landing page (e.g., `/eyebeam` for Eyebeam application)

---

## 7. Visual Tone

- **Feel:** Museum-legible, conceptually strong, contemporary
- **Not:** Generic portfolio, consulting page, startup pitch, product landing
- **Typography:** MoMA Sans (current), refined, readable
- **Avoid:** Walls of text, engineering-job language, service pricing, too many projects on one page

---

## 8. Definitions

### Research
The conceptual and technical engine behind the artworks. Not a separate lab or startup. Content (Born into the Machine, Noisy Systems, Locust Echo Economies) should tie directly back to artworks and themes.

### Teaching
Extension of the art practice — workshops, Oolite, Own Your Digital Presence. Should feel like public forms of the same inquiry, not a separate consulting identity.

### Archive
Full body of work beyond the 6–8 selected. Lower hierarchy than Selected Works. Supports deep dives for curators and researchers.

---

## 9. Grant / Residency Use Cases

- **Eyebeam** — `/eyebeam` as microsite: inquiry, 3 works, technology in practice, public forms, contact
- **Knight Foundation** — `/grant/knight-foundation` (existing)
- **Other opportunities** — Custom landing pages as needed; template in [docs/eyebeam-inquiry-page-plan.md](eyebeam-inquiry-page-plan.md)

**Success metric:** In 2–4 minutes, a panelist understands: core inquiry, why the work fits, which projects prove it, how technology functions, what conversation you're inviting.

---

## 10. Content Sources

| Content | Location |
|--------|----------|
| Artworks | `src/constants/artworks.ts` |
| Exhibitions | `src/constants/exhibitions.ts` |
| Eyebeam inquiry | `src/constants/eyebeam-inquiry.ts` |
| Born into the Machine | `content/born-into-the-machine/` |
| Research projects | `src/constants/research.ts`, `noisy-systems.ts` |
| Images | Cloudinary `art/moisestech-website/` |

---

## 11. Related Documents

- [Eyebeam Inquiry Page Plan](eyebeam-inquiry-page-plan.md)
- [Cursor Prompts](cursor-prompts.md)
- [Cloudinary MCP Setup](cloudinary-mcp-setup.md)
- [Site Architecture Proposal 2026](site-architecture-proposal-2026.md)
- [Cloudinary Asset Audit](cloudinary-asset-audit.md)
- [Born into the Machine — Chapter Outline](../content/born-into-the-machine/chapter-outline.json)
