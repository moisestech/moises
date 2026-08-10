# Banner briefs — Hurix SME + QuickBooks for Artists

Use these with ChatGPT (or similar) to generate assets, then upload to Cloudinary and swap the interim URLs.

Wire-up targets:

| Page | Constant / file | Ratio |
| --- | --- | --- |
| `/opportunities/hurix-sme-generative-ai` | `genAiCurriculumSmeBanner` in `src/content/evidence/applicationBanners.ts` | **~1916×821 (~2.33)** GenAI family — or **2172×724 (3:1)** if you prefer creative-agency strip |
| `/workshop/quickbooks-automation-for-artists` | `QUICKBOOKS_AUTOMATION_BANNER` in `src/content/workshops/quickbooksAutomation.ts` | **2172×724 (3:1)** wide workshop strip |

Presentation on opportunity pages uses height-locked `contain-blur` — keep title lockup in the **center third**; avoid edge-critical text.

---

## 1. Hurix / GenAI Curriculum SME banner

**What the page is:** Private recruiting dossier for a **Subject Matter Expert — Generative AI** (certificate redevelopment, labs, assessments, video-ready teaching). Not a startup pitch. Not a purple “AI future” poster.

**Feel:** Editorial learning-product collage — curriculum + live teaching + production systems. Museum-legible dossier chrome.

**Must signal:**

- Technical learning content being refreshed (modules, labs, scripts)
- Human educator + screens / diagrams (agents, prompts) — not stock “robot handshake”
- Quiet tool atmosphere: OpenAI / Anthropic / n8n / Python as objects, not a logo wall
- Tone: Coursera / edX certificate SME, not CVS GenAI engineer pipelines

**Avoid:** purple AI glow, neon grids, “SME” badge stickers, corporate skyline, Intuit/Hurix logos (no brand affiliation claims), dense UI screenshots that crush at strip height.

### ChatGPT prompt (copy)

```
Editorial application banner for a Generative AI Subject Matter Expert dossier — Moises Sanabria / technical curriculum redevelopment.
Aspect: 1916×821 (~21:9) OR 2172×724 (3:1). Height-locked strip: keep the title in the center third so side crop is safe.

Feel: research dossier + professional learning studio, not startup pitch.
Center lockup in crisp white condensed sans:
  GENERATIVE AI SME
Subtitle under it:
  Curriculum · labs · assessments · video-ready teaching

Visual layers (documentary / slightly desaturated, teal + warm paper accents):
- Open laptop with curriculum outline / lab checklist (legible at distance, not tiny UI)
- Soft overlay of agent/workflow diagram nodes (abstract, not a real product UI dump)
- Hands or silhouette of an educator recording a screencast (no recognizable faces required)
- Quiet objects: notebook, microphone, code editor edge — not a logo grid
- Atmosphere of certificate-program production: scripts, slides, review notes

Typography: bold condensed sans for title; quiet mono caption strip at bottom:
  CERTIFICATE REDEVELOPMENT · LLM · AGENTS · LABS

Avoid: purple AI gradients, glow effects, stock handshake, corporate skylines, employer logos, “first/leading” badges, crowded tool logos.
```

**Alt text once live:** `Subject Matter Expert — Generative AI — curriculum, labs, and video-ready teaching banner`

---

## 2. QuickBooks Automation for Artists banner

**What the page is:** Artist-facing **studio ops workshop** — QuickBooks categories, invoices/expenses, light automation, **human review gates**. Extension of Creative Infrastructure / Digilab teaching — not an Intuit marketing page.

**Feel:** Working studio desk + calm bookkeeping clarity. Warm paper / concrete / desk light. Institutional workshop strip.

**Must signal:**

- Artist studio money workflow (invoices, receipts, categories)
- QuickBooks as a tool in the studio — not the hero brand
- Automation as routing + review, not “set and forget AI accountant”
- Fits `/artist-infrastructure` curriculum language

**Avoid:** Intuit logo lockups, green QuickBooks marketing chrome, crypto/fintech neon, purple AI, stock “happy freelancer with laptop,” fake dashboards with unreadable numbers.

### ChatGPT prompt (copy)

```
Wide institutional workshop banner for "QuickBooks Automation for Artists" — Moises Sanabria, Miami Digilab / Creative Infrastructure.
Aspect: 2172×724 (3:1). Keep title in the center third for safe side crop.

Feel: artist studio operations — calm, practical, museum-legible. Not fintech marketing.
Center lockup in crisp white or near-white condensed sans:
  QUICKBOOKS FOR ARTISTS
Subtitle:
  Studio bookkeeping · categories · human review gates

Visual layers (photoreal / documentary desk still, slightly desaturated with warm amber + cool gray):
- Artist studio desk: sketches or small art object at edge, laptop open to a clean category list / invoice queue (abstract, readable shapes — not a real QuickBooks UI clone)
- Soft paper receipts, labeled folders, a simple flowchart overlay: invoice → category → review → archive
- Hint of automation as quiet routing arrows — not robots, not chat bubbles
- Atmosphere of Oolite Digilab / Idea Center workshop: concrete, desk lamp, working practice

Typography: bold condensed sans for title; quiet mono caption at bottom:
  WORKSHOP · STUDIO OPS · AUTOMATION WITH REVIEW

Avoid: Intuit / QuickBooks official logos, green brand splash, purple AI glow, crypto aesthetics, stock handshake, unreadable fake dashboards, consulting pricing UI.
```

**Alt text once live:** `QuickBooks Automation for Artists — studio bookkeeping workshop banner`

**Interim now:** page uses slide 1 as banner with an “interim” caption until you upload the dedicated strip.

---

## After you generate

1. Export PNG (prefer exact ratio above).
2. Upload to Cloudinary:
   - Hurix: `jobs/banners/hurix-sme-generative-ai-banner_….png`
   - QuickBooks: `dccmiami/workshops/quickbooks-automation-for-artists/quickbooks-automation-banner_….png`
3. Tell the agent the URLs + measured width×height — wiring is a one-line swap in the constants above.
4. For Hurix, set `intrinsicRatio` to measured `width/height` in `defineApplicationBanner`.
