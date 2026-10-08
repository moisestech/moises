# CURSOR IMPLEMENTATION PROMPT — Build Your AI Daily Operator

You are implementing the production-ready public workshop/course experience for **Build Your AI Daily Operator** inside the existing **moisestech/moises** repository.

Do not redesign the curriculum from scratch. Do not generate new imagery. Do not invent Cloudinary URLs. Do not merge to main.

---

## 0. BRANCH

Work only on:

```
cursor/ai-daily-operator
```

Before any large code change, create a checkpoint commit if the working tree contains uncommitted workshop work.

Never merge to `main` automatically.

---

## 1. PRODUCT

**Public title:** Build Your AI Daily Operator  
**Method:** Founder Attention OS  
**Plain-English promise:** Know what deserves your attention, why it matters, and what can wait.

Primary public route:

```
/workshop/build-your-ai-daily-operator
```

Participant Level I route:

```
/workshop/build-your-ai-daily-operator/level-i
```

The public page belongs to **Moises.tech**.

DCC Miami is a worked/reference implementation inside the curriculum, not the owner of the public workshop.

---

## 2. READ THESE FILES FIRST

Before modifying anything, inspect and summarize the current implementation of:

```
src/app/(main)/workshop/build-your-ai-daily-operator/page.tsx
src/app/(main)/workshop/build-your-ai-daily-operator/level-i/page.tsx
src/components/workshop/ai-daily-operator/ProgramClient.tsx
src/components/workshop/ai-daily-operator/LevelIToolkitClient.tsx
src/components/workshop/ai-daily-operator/LevelIAssessment.tsx
src/components/workshop/ai-daily-operator/ArtifactWorksheet.tsx

src/content/workshops/ai-daily-operator/program.ts
src/content/workshops/ai-daily-operator/media.ts
src/content/workshops/ai-daily-operator/artifacts.ts
src/content/workshops/ai-daily-operator/operator-prompt.ts
src/content/workshops/ai-daily-operator/level-i-walkthrough.ts
src/content/workshops/ai-daily-operator/level-i-assessment.ts
src/content/workshops/ai-daily-operator/tool-guides.ts
src/content/workshops/ai-daily-operator/resources.ts
src/content/workshops/ai-daily-operator/benchmarks.ts
src/content/workshops/ai-daily-operator/examples.ts
src/content/workshops/ai-daily-operator/offer.ts
src/content/workshops/ai-daily-operator/facilitator.ts
src/content/workshops/ai-daily-operator/production.ts
src/content/workshops/ai-daily-operator/synthetic-case.ts
src/content/workshops/ai-daily-operator/seven-day-followup.ts

src/content/workshops/ai-daily-operator/image-manifest.json
src/content/workshops/ai-daily-operator/cloudinary-migration-map.json

docs/workshops/ai-daily-operator-master-plan.md

src/content/workshops/catalog.ts
src/content/workshops/catalog-covers.ts
src/app/(main)/workshops/page.tsx
src/app/(main)/workshop/[slug]/page.tsx
src/components/workshops/WorkshopCatalogLandingClient.tsx
```

Do not assume an older DCC workshop architecture applies. This program already has its own deep route and typed content system.

---

## 3. SOURCE-OF-TRUTH RULES

Keep these layers separate.

### Curriculum/content

Canonical source:

```
program.ts
artifacts.ts
operator-prompt.ts
level-i-walkthrough.ts
facilitator.ts
examples.ts
synthetic-case.ts
seven-day-followup.ts
resources.ts
benchmarks.ts
```

### Media audit/history

Canonical source:

```
image-manifest.json
cloudinary-migration-map.json
```

The image manifest may contain canonical, supporting, reference, exploration, rejected, and real-documentation items.

### Public typed media

Canonical public media source:

```
media.ts
```

Do not put an asset into the public UI merely because it exists in the manifest.

### Commercial planning

Internal only unless explicitly approved:

```
offer.ts
```

Do not render internal pricing hypotheses publicly.

---

## 4. CLOUDINARY OWNERSHIP

The canonical public namespace is now:

```
moisestech/workshops/build-your-ai-daily-operator/
```

The old namespace:

```
dccmiami/workshops/ai-daily-operator/
```

is legacy/source history.

Do not delete or rename old DCC assets.

Do not make the public page depend on the old DCC namespace after the corresponding asset has been verified in the Moises namespace.

---

## 5. VERIFIED CANONICAL CLOUDINARY ASSETS

These assets are confirmed in the Moises.tech namespace and may be used now.

### Level II

Permission Map:

```
public_id:
moisestech/workshops/build-your-ai-daily-operator/02-connected-operator/source-access/permission-map

secure_url:
https://res.cloudinary.com/dck5rzi4h/image/upload/v1791429428/moisestech/workshops/build-your-ai-daily-operator/02-connected-operator/source-access/permission-map.png

actual dimensions:
1448 × 1086
```

### Level IV — Friction Intelligence

```
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/retrieval/friction-retrieval
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/reconciliation/friction-reconciliation
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/memory/friction-memory
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/transfer/friction-transfer
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/decision/friction-decision
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/approval/friction-approval
moisestech/workshops/build-your-ai-daily-operator/04-friction-intelligence/communication/friction-communication
```

All seven are:

```
1254 × 1254
png
```

Use the exact URLs/versions in `image-manifest.json` or `cloudinary-migration-map.json`.

### Level V

Automation Selection:

```
public_id:
moisestech/workshops/build-your-ai-daily-operator/05-operating-system/automation-selection/impact-frequency-ease-risk

actual:
1254 × 1254
```

Workflow Blueprint:

```
public_id:
moisestech/workshops/build-your-ai-daily-operator/05-operating-system/workflow-blueprint/workflow-blueprint

actual:
1448 × 1086
```

Weekly Operating Review:

```
public_id:
moisestech/workshops/build-your-ai-daily-operator/05-operating-system/weekly-review/weekly-operating-review

actual:
1536 × 1024
```

Never guess asset dimensions. Read them from the manifest.

---

## 6. DO NOT WIRE THESE YET

The following concepts exist in curriculum/media planning but their canonical Moises.tech binary is not yet reconciled.

Do not fabricate URLs, use old generated filenames as final public names, or silently pull from the DCC namespace.

```
operator-core
attention-flywheel
business-signal-set
commitments
revenue-mission
risk
capacity
goal-attention-funnel
fragmented-attention
fact-interpretation-recommendation
founder-profile
daily-operating-brief
calendar-capacity
source-of-truth
business-pulse
friction-overview
human-approval-gate
90-day-improvement-roadmap
seven-day-experiment
```

The public page may render text/structural placeholders for the concepts, but never a fake image URL or fake product screenshot.

---

## 7. REAL DOCUMENTATION — DO NOT GENERATE

These must be actual screenshots/recordings or explicitly marked synthetic teaching examples:

```
ChatGPT UI
Claude UI
Google Calendar
Gmail
Airtable / CRM
QuickBooks
n8n
real workshop room
real participant use
DCC documentary evidence
```

Use `tool-guides.ts` for required capture IDs and status.

If a tool capture is missing, render no fake UI.

A participant-facing note such as “real walkthrough capture coming after pilot validation” is acceptable only if the existing design needs it; otherwise omit the media gracefully.

---

## 8. PUBLIC PAGE INFORMATION ARCHITECTURE

Refine the existing dedicated public page rather than replacing it with the generic catalog landing.

The page should tell this story:

### A. Hero

**Build Your AI Daily Operator**

Founder Attention OS

**Know what deserves your attention, why it matters, and what can wait.**

Primary CTA:
```
Open Level I toolkit
```

Secondary CTA:
```
Host this workshop
```

Do not show internal cohort pricing.

If the canonical hero/Operator Core is not yet available in Moises Cloudinary, keep the hero text-first. Do not use a weak substitute just to fill space.

### B. The problem

Frame the difference between:

```
calendar → what is scheduled
task list → what is listed
Daily Operator → what deserves attention and why
```

Use the product language already present in `program.ts`.

### C. The method

Show the conceptual loop textually until the Attention Flywheel is available:

```
Goals → Signals → Judgment → Attention → Action → Review → System Improvement
```

### D. Level I outcome

Make Level I visibly bookable/pilot-ready.

90 minutes.

No integrations required.

Participant leaves with:

```
Founder Profile
Attention Rules
Daily Operator
Daily Operating Brief
first Friction Log note
```

Link to:

```
/workshop/build-your-ai-daily-operator/level-i
```

### E. The deeper progression

Show Levels II–V as a progression, not four equally weighted products.

```
II Connected Operator
III Business Pulse
IV Friction Intelligence
V From Operator to Operating System
```

### F. Trust / source authority

Use the verified Permission Map where it actually teaches the idea:

```
Which source is authoritative?
What may the system read?
What may it draft?
What still requires a human?
```

### G. Friction Intelligence

Use the seven verified friction objects as a compact instructional family.

Do not turn them into seven giant homepage sections.

Prefer a grid/carousel/compact taxonomy:

```
Retrieval
Reconciliation
Memory
Transfer
Decision
Approval
Communication
```

Explain:

```
Do not automate all seven.
Observe → classify → score → choose.
```

### H. Automation selection

Use the verified Impact × Frequency × Ease × Risk visual.

This is the bridge from diagnosis to workflow.

### I. Governed workflow

Use the verified Workflow Blueprint.

Display:

```
Trigger → Context → Reasoning → Output → Approval → Action → Record
```

Reinforce:

```
RECOMMEND → EXPLAIN → ASK → ACT
```

### J. Review / flywheel

Use the verified Weekly Operating Review.

Explain that the system improves from corrections and repeated friction rather than from endlessly rewriting one prompt.

### K. Official learning

Link to official OpenAI Academy and Claude Academy resources from `resources.ts` / `benchmarks.ts`.

Do not make the workshop duplicate generic product literacy.

### L. DCC case study

Do not render a fake documentary image.

Text from `examples.ts` may be used as a worked example, clearly labeled as a sanitized teaching example.

Documentary media comes later.

### M. Final CTA

Institutional/host CTA.

Level I first.

Do not hard-sell Levels II–V before the participant understands Level I.

---

## 9. WORKSHOP CATALOG INTEGRATION

The existing public workshop catalog currently does not include this program.

Add a catalog entry for:

```
slug: build-your-ai-daily-operator
```

Recommended public catalog metadata:

```
title: Build Your AI Daily Operator
publicTitle: Build Your AI Daily Operator
track: AI Literacy
status: in-development
level: Beginner–Intermediate
duration: 90 minutes
featured: true
href: /workshop/build-your-ai-daily-operator
```

Use curriculum copy from `program.ts`; do not invent a separate promise.

Also add:

```
build-your-ai-daily-operator
```

to:

```
WORKSHOP_RESERVED_DEEP_SLUGS
```

so the catalog discovers the workshop but the dedicated deep route remains authoritative.

### Catalog cover

Do not add a fake cover URL.

Only add a `catalog-covers.ts` entry once a verified canonical hero/cover exists in the Moises Cloudinary namespace.

Until then, ensure the catalog gracefully supports the missing cover.

---

## 10. MEDIA REGISTRY MIGRATION

Do not globally change the media root from DCC to Moises in one blind replacement.

Instead:

1. read `image-manifest.json`;
2. for each `cloudinary.uploadStatus === "uploaded"`, use the real Moises public ID / secure URL;
3. leave pending assets unresolved;
4. update `media.ts` only for assets that are physically verified in Moises Cloudinary;
5. preserve the semantic concept key and alt text;
6. do not mark a pending asset `delivery: "cloudinary"`.

If useful, add a helper that can accept an explicit verified public ID instead of assuming one global root.

The typed registry must never imply that a pending asset is live.

---

## 11. IMAGE LAYOUT RULES

Respect actual ratios.

Verified examples:

```
Friction objects: 1254 × 1254 → 1:1
Permission Map: 1448 × 1086 → ~4:3
Workflow Blueprint: 1448 × 1086 → ~4:3
Weekly Review: 1536 × 1024 → 3:2
```

Do not crop all assets into one 21:9 frame.

Use the image according to its teaching function.

Square object taxonomy → square grid.

Workflow / permission artifact → contained instructional figure.

Weekly Review → wider section artifact.

Use Cloudinary transformations for delivery where helpful, but preserve the source composition.

---

## 12. LEVEL I TOOLKIT

Do not redesign Level I from scratch.

Preserve:

- browser-local worksheet saving;
- Copy as text;
- Print / PDF;
- explicit minimum-safe-context privacy guidance;
- synthetic fallback;
- official Academy resource links;
- portable vendor-neutral prompt;
- 90-minute walkthrough;
- 10-question scenario-based competency check;
- 80% passing threshold;
- artifact evidence remains the main proof of learning, not quiz score alone.

Audit for consistency against:

```
artifacts.ts
level-i-walkthrough.ts
facilitator.ts
synthetic-case.ts
seven-day-followup.ts
```

Do not add integrations to Level I.

---

## 13. PRODUCT CLAIMS / PROVISIONAL FACTS

Use:

```
Level I is pilot-ready for hosted workshops.
The full Founder Attention OS curriculum remains in development.
```

Do not publicly claim:

- a validated completion rate;
- participant outcomes not yet measured;
- a fixed public ticket price;
- fixed cohort size unless approved elsewhere;
- connector availability for every participant;
- fully automated business operations;
- DCC case-study results not actually documented.

Internal pricing in `offer.ts` stays internal.

---

## 14. PUBLIC VS INTERNAL CONTENT

Public:

```
program.ts
selected media.ts assets
participant outcomes
official resource links
sanitized DCC worked example if useful
```

Internal / authoring:

```
offer.ts pricing hypotheses
production.ts internal tasks
benchmark strategy notes that are not participant-facing
rejected/reference/exploration images
migration history
```

Do not accidentally render author notes.

---

## 15. REQUIRED IMPLEMENTATION ORDER

Use small commits.

### Commit 1 — catalog integration

Suggested message:

```
feat: add AI Daily Operator to workshop catalog
```

Include:

- catalog entry;
- reserved deep slug;
- no fake cover.

### Commit 2 — canonical media migration support

Suggested message:

```
feat: wire verified Moises workshop media
```

Include only assets whose real Moises Cloudinary metadata is in the manifest.

### Commit 3 — public page media composition

Suggested message:

```
feat: add instructional media to AI Daily Operator page
```

Place media semantically.

### Commit 4 — page refinement

Suggested message:

```
feat: refine Founder Attention OS workshop narrative
```

Refine information hierarchy without rewriting the underlying curriculum.

Do not combine all four into one giant commit.

---

## 16. TESTS

At minimum run and report:

```
typecheck
lint if configured for changed files
production build or relevant Next route validation
```

Verify:

- `/workshops`
- `/workshop/build-your-ai-daily-operator`
- `/workshop/build-your-ai-daily-operator/level-i`
- generic `/workshop/[slug]` behavior is not broken
- static/dynamic route precedence is correct
- no duplicate-route behavior
- no invalid Cloudinary URLs
- no old DCC URL remains for an asset migrated to Moises namespace
- no pending asset is rendered as if uploaded
- no internal pricing is public
- no real-documentation placeholder is presented as evidence
- actual dimensions render without distortion
- approximately 390px mobile
- desktop
- light mode
- dark mode if this surface supports it
- existing site navigation remains intact

If a test fails, report it. Do not silently bypass it.

---

## 17. ACCESSIBILITY

Every public image needs alt text based on the curriculum purpose, not visual decoration.

Avoid alt text such as:

```
AI graphic
cool workflow image
diagram
```

Prefer:

```
Seven categories of repeated business friction used to identify where founder attention is being consumed manually.
```

For dense instructional diagrams, consider a short caption or nearby textual equivalent.

---

## 18. WHAT NOT TO DO

Do not:

- generate new images;
- create fake ChatGPT/Claude screenshots;
- recreate official logos;
- delete DCC source assets;
- infer Cloudinary versions;
- invent public URLs;
- publish internal prices;
- rename the workshop;
- make AI Chief of Staff the primary product category;
- build a new generic workshop framework;
- collapse all five levels into one giant landing-page syllabus;
- turn Level III into accounting instruction;
- turn Level V into an n8n tutorial;
- merge to main.

---

## 19. DEFINITION OF DONE FOR THIS IMPLEMENTATION PASS

This pass is complete when:

1. the course is discoverable from the existing Moises.tech workshops catalog;
2. its deep route remains authoritative;
3. verified Moises Cloudinary assets are used semantically;
4. pending/generated-local assets remain honestly pending;
5. Level I is the primary concrete offer;
6. Levels II–V read as a progression;
7. friction + approval + review make the methodology visibly distinct from a generic AI productivity course;
8. official Academy links remain available;
9. no fake documentary/UI evidence is present;
10. Level I includes the privacy boundary and scenario-based competency check;
11. the canonical Level I capture plan is 7 screenshots + 1 short video per platform, not one screenshot per walkthrough step;
12. typecheck/build/route checks pass;
13. changes remain on `cursor/ai-daily-operator`;
14. nothing is merged to main.

At the end, produce a concise implementation report:

```
CHANGED
NOT CHANGED
MEDIA WIRED
MEDIA STILL PENDING
TESTS
RISKS / FOLLOW-UPS
COMMITS
```
