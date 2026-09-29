# AEP workshop image brief

How to generate the pictures for `/workshop/agentic-evidence-pipeline`.

When an asset is ready, upload it to Cloudinary folder **`dccmiami/workshops/agentic-evidence-pipeline/`**, then set the matching URL on the entry in [`src/content/workshops/aep-workshop-visuals.ts`](../../src/content/workshops/aep-workshop-visuals.ts).

- Landscape plate → `src`
- Transparent PNG (cutout on stone or dark) → `transparentSrc`
- Icon (square mark) → `iconSrc`

The page already shows a labeled placeholder until `src` is set. Icons and transparent marks can land in jump chips, GitHub buttons, Allow/Ask/Deny cards, and code-pair chips after you upload them.

---

## What this page is for

The page is a **recruiter-legible teaching surface**, not a product landing and not a Deloitte case study.

A hiring reader should leave able to say:

1. Moises designs the **harness around the model**, not a chatbot that “just works.”
2. **Citations fail closed.** Invented evidence does not become a fluent paragraph.
3. **A person approves writes.** Review is persisted state, not a modal.
4. The work is **inspectable** — public TypeScript, GitHub, an honest scorecard.
5. The six-word thin slice is **how he would enter**, not a completed client delivery.

Locked sentences the pictures must support, not decorate:

- Capacity: *I design the harness around the model: citations fail closed, a person approves writes, and the trail is inspectable.*
- Thin slice: *I sit with the workflow, ship a reviewable slice, and leave an owner who can operate it without me.*
- Honesty: reference implementation, synthetic fixtures, fake-provider evals — not a hosted product, not Deloitte client work, not a live-model quality claim.

---

## What we are trying to convey (overall)

| Do convey | Do not convey |
| --- | --- |
| Governance, pause, paper, stamp, rail, allowlist | A finished SaaS dashboard |
| Model as glow / fluency; harness as structure | “AI that looks smart” |
| Human authority over writes | Autonomous agents shipping to customers |
| Inspectability (printout, GitHub, file name) | Secret sauce / black box |
| Proposed method (thin slice as beads, not a trophy) | Case-study photography, office heroes |
| Quiet institutional color | Startup gradients, mascots, 3D robots |

These pictures sit next to **real code**. They should make the failure visible so the excerpt feels like a solution, not a decoration.

---

## Design system

Match the live page (`opp` theme, MoMA Sans, stone, one cyan accent).

**Surfaces**

- Paper / stone: `#f5f5f4`, `#e7e5e4`, `#d6d3d1`
- Ink: `#1c1917`, `#44403c`
- Dark plate (code-adjacent): `#0c0a09` with stone-100 type

**Authority colors (same as the page chips)**

- Allow / shipped — emerald `#6ee7b7` / `#065f46`
- Ask / review — amber `#fcd34d` / `#92400e`
- Deny / fail-closed — rose / coral `#fda4af` / `#9f1239`
- Inspect / GitHub — cyan `#22d3ee` / `#0e7490` plus stone

**Type in the image**

Prefer **one word or a short stamp**: `REVIEW`, `STOP`, `ALLOW`, `ASK`, `DENY`, `policy.ts`. No paragraphs of fake UI. No client names. No logos except a small GitHub mark where the brief asks for it.

**Light**

Museum still-life or overhead documentary. Soft directional light. No neon holograms, no lens flare, no cinematic smoke.

**Shared suffix — append to every prompt**

> Institutional dossier still-life, warm stone paper and charcoal ink, one restrained cyan rule, quiet coral only when something fails closed, generous negative space, no product UI chrome, no readable client names, no watermarks, no mascots, no science-fiction holograms, no invented metrics.

**Shared suffix for transparent PNGs**

> Isolated subject on a true transparent background, crisp silhouette, no drop shadow unless noted, no background paper, no crop into the mark, PNG-ready.

**Shared suffix for icons**

> Flat institutional pictogram, centered in a square, two or three shapes maximum, stone + one accent, no perspective, no photorealism, readable at 24px.

---

## Three formats per concept

Generate **all three** for each ID below. Same idea, different job.

| Format | Size | Use on the page | File name |
| --- | --- | --- | --- |
| **Landscape** | 16:9 (2400×1350) unless the plate is 4:3 (1600×1200) or 21:9 (2520×1080) | Hero / section plate (`src`) | `{id}-landscape.png` |
| **Transparent PNG** | Subject on alpha, longest side 1600 | Overlay on stone or dark cards, next to code | `{id}-transparent.png` |
| **Icon** | 512×512 PNG, transparent | Jump chips, pair tone chips, small headers | `{id}-icon.png` |

Also generate the **six jump-nav icons** and the **three authority marks** listed at the end. Those are icon + transparent only (no landscape).

---

## Honesty / refuse list

Do not draw:

- A live Claude / ChatGPT window, or any claim that a production model is deployed
- Job counts, clocks that imply time saved, dollar amounts
- Deloitte, DCC client faces, or identifiable people
- A fake “AEP Cloud Console”
- Screenshots of the actual Next.js page (we already have the page)
- Cute robots, brain-in-a-jar, neural-net spaghetti

GitHub mark is allowed only on `github-inspect` and the repo/nav icons.

---

## Cloudinary

Folder: `dccmiami/workshops/agentic-evidence-pipeline/`

Example public ID: `dccmiami/workshops/agentic-evidence-pipeline/hero-capacity-landscape`

After upload, paste the `https://res.cloudinary.com/dck5rzi4h/image/upload/...` URL into `src` / `transparentSrc` / `iconSrc`.

Existing OG card can stay [`AEP_CARD_V2`](../../src/content/evidence/projects.ts) until `hero-capacity` landscape is live.

---

## Plate 01 — `hero-capacity`

**Page slot.** Under the large capacity sentence.

**What it must accomplish.** Make the locked sentence visible without reading the sentence. A recruiter scrolling past should see: fluent model in the back, a typed card in front, a coral miss, a human stamp.

**Convey.** Moises’s capacity is **harness design**, not model fluency. The model is atmosphere. The card, the miss, and the stamp are the work.

**Do not convey.** A hero product shot. A person “using AI.” A city skyline.

**Landscape 16:9.** Museum-dossier still-life. Midground: a typed assessment card (short unreadable lines, one circled coral chip). Background: soft unfocused model glow, not a logo. Foreground right: a rubber stamp impression reading REVIEW in stone-rose ink. One thin cyan rule under the card. [SUFFIX]

**Transparent PNG.** The assessment card + coral chip + REVIEW stamp as a single cutout cluster, no table, no room. [TRANSPARENT SUFFIX]

**Icon.** Three stacked bars (card) with a small rose tick on the middle bar and a square stamp in the corner. [ICON SUFFIX]

---

## Plate 02 — `model-vs-harness`

**Page slot.** Above “Model vs harness.”

**What it must accomplish.** Split the page’s argument into two readable halves so the existing cards feel like a caption, not the first explanation.

**Convey.** The model **interprets ambiguity**. The harness **owns the rest** (context, tools, permissions, validation, review, audit). Fluency is not authority.

**Do not convey.** Left = bad, right = good in a moral cartoon. Both sides are real. The right side is what Moises builds.

**Landscape 16:9.** Split plate, one cyan vertical rule. Left: soft, slightly overexposed paragraph texture, edges dissolving (the model). Right: four rigid boxes labeled only as mute blocks — context, tools, gate, pause — on stone paper. No fake UI chrome. [SUFFIX]

**Transparent PNG.** The four harness boxes as a vertical stack cutout, plus a separate soft “glow paragraph” cutout if you want to layer them. Prefer one file: stack only. [TRANSPARENT SUFFIX]

**Icon.** A dashed cloud on the left of a square, a solid rectangle on the right, one vertical rule. [ICON SUFFIX]

---

## Plate 03 — `fail-closed`

**Page slot.** Top of the Code section, before the policy pair.

**What it must accomplish.** Show **deny** as a physical miss, not a red error toast. This is the emotional key of the page.

**Convey.** An unsupported citation does not get invented repair prose. It hits STOP. Status becomes insufficient evidence. A person is required.

**Do not convey.** Anger, sirens, “AI safety” clichés, a broken robot.

**Landscape 4:3.** A citation arrow leaves a fluent paragraph and misses a neat stack of evidence slips. It hits a rose STOP slab. Quiet caption space for the words “not in allowlist” in small institutional caps. Dry, archival. [SUFFIX]

**Transparent PNG.** Arrow + miss + STOP slab only, no paragraph, no table. [TRANSPARENT SUFFIX]

**Icon.** An arrow that does not meet a stack; a small rose bar blocks it. [ICON SUFFIX]

---

## Plate 04 — `github-inspect`

**Page slot.** `#repo`, and it can echo the primary GitHub button.

**What it must accomplish.** Prove inspectability. The repo is the evidence. A finger on `policy.ts` is more honest than a constellation of logos.

**Convey.** You can open the file. Offline evals use a fake provider. Nothing here is a live-model quality claim.

**Do not convey.** “Open source startup.” Contributor graphs. Stars.

**Landscape 16:9.** Overhead of a printed TypeScript page on stone. A small GitHub mark in one corner. A hand (no face, no jewelry brand) pointing at a line that could be `policy.ts`. Documentary, not a mock. [SUFFIX]

**Transparent PNG.** Printed page + GitHub mark as a cutout, no hand if the hand is hard to isolate. [TRANSPARENT SUFFIX]

**Icon.** Simple GitHub mark in a stone square, or a document with a cat-free branch mark. If you use the official GitHub mark, keep it legal-small and pair it with our stone field. [ICON SUFFIX]

---

## Plate 05 — `allow-ask-deny`

**Page slot.** `#authority`, above the three cards.

**What it must accomplish.** One object, three fates. The object is a **write request** (an envelope, a slip, a punch card) — not a person.

**Convey.** Allow = read approved sources. Ask = pause for a person. Deny = fail closed. These are the only routes the README actually supports.

**Do not convey.** A traffic light as a toy. Consumer app icons (thumbs, chat bubbles).

**Landscape 16:9.** Three equal vertical lanes. Emerald ALLOW, amber ASK, rose DENY. The **same** write-request slip in each lane: in ALLOW it sits on a stack of public pages; in ASK it waits under a stamp pad; in DENY it is refused at a gate. Quiet institutional color. [SUFFIX]

**Transparent PNG.** The three slips as one strip, or three separate cutouts named `allow-ask-deny-allow-transparent.png` etc. Prefer one strip. [TRANSPARENT SUFFIX]

**Icon.** Three vertical bars, emerald / amber / rose, equal width. [ICON SUFFIX]

Also generate the three **authority marks** at the end of this file for the cards themselves.

---

## Plate 06 — `thin-slice`

**Page slot.** `#process`, above the six steps.

**What it must accomplish.** Show a **proposed method**, not a shipped program. Beads on a rail, not a trophy case.

**Convey.** Discover → Prototype → Govern → Deploy → Teach → Handoff. Facilitate and test live inside Teach and Prototype. This is how he would enter an FDE engagement.

**Do not convey.** A completed client timeline. Photos of a workshop room. “We delivered six phases.”

**Landscape 21:9.** Six stone or glass beads on a single charcoal rail, even spacing, lots of horizontal air. Tiny mute labels only if they stay legible at 200px tall; otherwise no type — the page already names the steps. [SUFFIX]

**Transparent PNG.** Rail + six beads only. [TRANSPARENT SUFFIX]

**Icon.** A short rail with six dots. [ICON SUFFIX]

---

## Plate 07 — `pair-citation`

**Page slot.** Left of the `policy.ts` excerpt (“The model cites evidence it never retrieved”).

**What it must accomplish.** Before / after of **fluency vs fail-closed**. The code on the right then looks like the mechanism, not a random snippet.

**Convey.** A fake footnote looks finished. The harness strikes it and stamps REVIEW. `applyCitationGate` is the thing that does that.

**Do not convey.** A diff viewer UI. Red squiggles like a spellchecker ad.

**Landscape 4:3.** Two pages side by side. Left: a fluent paragraph with a confident fake footnote mark. Right: the same page, footnote struck, REVIEW stamped in rose-stone. [SUFFIX]

**Transparent PNG.** The struck page + stamp only. [TRANSPARENT SUFFIX]

**Icon.** A small footnote mark with a rose slash. [ICON SUFFIX]

---

## Plate 08 — `pair-review`

**Page slot.** Left of the `run.ts` excerpt (“A restart drops the pending human decision”).

**What it must accomplish.** Show a timeline that **stops**. The next box is empty on purpose.

**Convey.** Review is persisted. A restart does not invent a decision. Status is `needs_review` until a person continues.

**Do not convey.** A loading spinner. A person at a laptop “approving in Slack.”

**Landscape 4:3.** A horizontal run of boxes. One box is amber and labeled only by a pause mark. The box after it is outlined and empty. No faces. [SUFFIX]

**Transparent PNG.** The paused box + empty next box. [TRANSPARENT SUFFIX]

**Icon.** A playhead that stops at a gate. [ICON SUFFIX]

---

## Extra: jump-nav icons (icon + transparent only)

These sit in the sticky chips: Capacity, Harness, Authority, Code, Thin slice, Repo.

| ID | Convey | Icon prompt |
| --- | --- | --- |
| `nav-capacity` | Harness around the model | A small glow behind a solid card. [ICON SUFFIX] |
| `nav-harness` | Structure, not fluency | Four-box grid. [ICON SUFFIX] |
| `nav-authority` | Allow / ask / deny | Three vertical bars, emerald amber rose. [ICON SUFFIX] |
| `nav-code` | Fail-closed inspectability | Brackets with a rose tick. [ICON SUFFIX] |
| `nav-process` | Proposed rail | Six dots on a line. [ICON SUFFIX] |
| `nav-repo` | GitHub is the evidence | Document + small GitHub mark. [ICON SUFFIX] |

Also export each as `{id}-transparent.png` at 512–1024 if you want them on dark/light without a square plate.

---

## Extra: authority marks (icon + transparent only)

For the Allow / Ask / Deny cards.

| ID | Color | Prompt |
| --- | --- | --- |
| `mark-allow` | Emerald | An open tray of versioned pages, no people. [ICON SUFFIX] + [TRANSPARENT SUFFIX] |
| `mark-ask` | Amber | A stamp pad waiting, no hand required. [ICON SUFFIX] + [TRANSPARENT SUFFIX] |
| `mark-deny` | Rose | A gate or STOP slab, dry, not angry. [ICON SUFFIX] + [TRANSPARENT SUFFIX] |

---

## Extra: code-pair chips (icon + transparent only)

These can replace the text chips Fail closed / Needs review / Scoped / Idempotent.

| ID | Pair | Prompt |
| --- | --- | --- |
| `chip-deny` | policy.ts | Rose miss / STOP. |
| `chip-ask` | run.ts | Amber pause gate. |
| `chip-inspect` | search.ts | Cyan scoped stack (tenant + visibility). |
| `chip-allow` | runner.ts | Emerald duplicate key that returns the same job. |

**`chip-inspect` landscape optional 4:3.** Two drawers labeled only by mute tabs; one is closed to the other tenant. Convey: retrieval never crosses tenant or visibility. Do not draw a database product logo.

**`chip-allow` landscape optional 4:3.** Two identical job slips, one stamped already exists. Convey: enqueue is idempotent; failures go to dead letter, not a silent loop.

---

## Suggested generation order

1. `fail-closed` (defines the rose language)
2. `hero-capacity` (uses that language at hero scale)
3. `allow-ask-deny` + the three marks
4. `model-vs-harness`
5. `pair-citation` and `pair-review`
6. `thin-slice`
7. `github-inspect`
8. Jump-nav icons and chips (can be last; they are simpler)

If a generator fights transparent backgrounds, generate on `#f5f5f4` and cut in isolation. Do not leave a fake checkerboard in the file.

---

## How we will use them on the page

| Asset | Intended placement |
| --- | --- |
| Landscape `src` | Existing `AepWorkshopPlate` figures |
| Transparent PNG | Over stone cards, beside `<pre>` panels, GitHub CTA cluster |
| Icon | Jump chips, pair tone chips, section eyebrows |

Do not replace the code excerpts with pictures of code. The pictures name the **problem**; the `<pre>` is the **mechanism**.

---

## Copy-paste prompt pack (landscape only)

Suffix is already described above — append it.

```
hero-capacity:
Museum-dossier still-life. Midground: a typed assessment card with short unreadable lines and one circled coral unsupported-citation chip. Background: soft unfocused model glow, not a brand. Foreground: a rubber stamp impression reading REVIEW. One thin cyan rule under the card. 16:9.

model-vs-harness:
Split plate, one cyan vertical rule. Left: soft dissolving paragraph texture (the model). Right: four rigid mute boxes for context, tools, gate, pause on stone paper. Conceptual diagram, not a screenshot. 16:9.

fail-closed:
A citation arrow leaves a fluent paragraph, misses a stack of evidence slips, and hits a rose STOP slab. Caption space for “not in allowlist.” Dry, archival. 4:3.

github-inspect:
Overhead printed TypeScript page on stone, small GitHub mark in the corner, a hand pointing at a line that could be policy.ts. Documentary, not a marketing mock. 16:9.

allow-ask-deny:
Three vertical lanes, emerald ALLOW, amber ASK, rose DENY. The same write-request slip in each lane: on public pages; waiting under a stamp pad; refused at a gate. 16:9.

thin-slice:
Six stone or glass beads on one charcoal rail, even spacing, wide 21:9 air. The rail is the method. No office photography.

pair-citation:
Two pages. Left: fluent paragraph with a fake footnote. Right: same page, footnote struck, REVIEW stamped. 4:3.

pair-review:
A run of boxes. One amber pause. The next box outlined and empty. No faces. 4:3.
```

For transparent and icon versions, keep the same subject and apply the format suffixes in the Design system section.
