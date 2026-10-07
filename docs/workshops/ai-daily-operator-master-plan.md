# AI Daily Operator / Founder Attention OS — Master Plan

_Last reviewed: 2026-10-07_

This is the Cursor-facing handoff for the program. The human-readable strategy lives in Google Drive. This file should remain concise enough to guide implementation without duplicating every facilitation note.

## Canonical product architecture

**Public workshop:** Build Your AI Daily Operator  
**Method:** Founder Attention OS  
**Plain-English descriptor:** A practical founder operating system for deciding what deserves attention, why it matters, and what can wait.

Core loop:

```
Goals → Signals → Judgment → Attention → Action → Review → System Improvement → Goals
```

Do not reposition the core as generic productivity, scheduling, “AI Chief of Staff,” or automation training. Those are adjacent categories and useful comparison language, not the owned methodology.

## Five levels

| Level | Name | Core question | Primary outputs |
| --- | --- | --- | --- |
| I | AI Daily Operator | What deserves my attention today? | Founder Profile, Attention Rules, Daily Operator, Daily Operating Brief |
| II | Connected Operator | Which source should the system trust for which signal? | Business Source Map, Permission Map |
| III | Business Pulse | What economically or missionally matters? | Business Pulse |
| IV | Friction Intelligence | What repeatedly steals attention? | Friction Log, Friction Map |
| V | From Operator to Operating System | How should one justified friction actually run? | Workflow Blueprint, Weekly Operating Review, 90-Day Roadmap |

Capstone: **Seven-Day Experiment**.

## Human-in-the-loop invariant

```
RECOMMEND → EXPLAIN → ASK → ACT
```

Consequential calendar changes, messages, purchases, payments, accounting writes, contracts, client commitments, and sensitive-data disclosure require explicit human responsibility/approval.

Missing information is **unknown**, never assumed false.

Important recommendations should be inspectable as:

```
FACT → INTERPRETATION → RECOMMENDATION
```

## Source-of-truth architecture

- `program.ts` — curriculum / competency map
- `media.ts` — conceptual media registry + Cloudinary delivery
- `artifacts.ts` — participant artifact schemas
- `level-i-walkthrough.ts` — timed Level I facilitation flow
- `operator-prompt.ts` — portable vendor-neutral Daily Operator prompt
- `tool-guides.ts` — real screenshot/video capture manifest
- `benchmarks.ts` — official curriculum and paid competitor registry

## Media architecture

Cloudinary root:

```
dccmiami/workshops/ai-daily-operator/
```

Key layers:

- `00-core` — durable conceptual vocabulary
- `01-daily-operator` — Level I concepts
- `02-connected-operator` — sources and permissions
- `03-business-pulse`
- `04-friction-intelligence`
- `05-workflow-builder`
- `06-capstone`
- `07-industry-overlays`
- `08-dcc-case-study`
- `09-tool-guides` — real UI only, never generated
- `10-participant-artifacts` — previews/examples/exports
- `11-course-docs` — final PDF/media exports, not editable strategy source
- `90-drafts-archive`

Vendor logos:

```
00-core/vendor-logos/chatgpt
00-core/vendor-logos/claude
```

Use current official brand assets only. Do not generate imitation logos.

## Tool-guide principle

Concept imagery teaches **how to think**.

Real screenshots/recordings teach **what to do in current software**.

Keep tool-specific guides short and replaceable because interfaces change.

Level I: ChatGPT + Claude, no integrations required.  
Level II: Calendar + email + CRM read/context.  
Level III: QuickBooks/accounting read-only decision context.  
Level V: n8n governed workflow.

Canonical Level V pattern:

```
Trigger → Context → Reasoning → Output → Approval → Action → Record
```

## Commercial ladder — internal hypothesis

Do not hard-code these prices into the public UI until validated.

1. **Free:** public methodology, sample brief, official Academy prerequisites, friction self-check.
2. **Level I institutional pilot:** target $1,500–$2,500 for a hosted 90-minute cohort, adjusted for cohort size/customization/follow-up.
3. **Public Level I later:** test roughly $95–$195.
4. **Full Levels II–V cohort:** pilot around $750 individual; target $1,000–$1,250 after validation.
5. **Institutional full sequence:** working hypothesis $7,500–$12,500.
6. **Implementation sprint:** working range $3,500–$7,500 for one tightly scoped justified workflow; quote larger systems separately.

Closest current paid anchors are stored in `benchmarks.ts`.

## Funnel

```
Free methodology / official prerequisites
→ Level I Daily Operator
→ useful Daily Operating Brief
→ participant sees Friction Map
→ Levels II–V cohort
→ justified implementation sprint
→ ongoing operating-system improvement
```

The conversion event is not “AI is amazing.” It is the participant recognizing a costly recurring friction after already receiving useful value.

## Definition of done — every level

A level is not complete until it has:

- competency statement
- participant artifact
- facilitator instructions
- concept visual
- real tool demonstration where relevant
- no-integration / synthetic fallback path
- DCC worked example
- human approval / responsibility rule
- completion assessment

## Current production priority

### Can do before manual screenshots

- finish artifact schemas 05–12
- build benchmark/reference registry
- build facilitator notes
- build DCC sanitized example content
- build synthetic fallback case
- finish core media promotion when source files are available
- finalize capture IDs and metadata
- add privacy/data-use guidance
- build seven-day follow-up sequence
- build internal host/pricing package

### Requires desktop/manual work later

- run full Level I in ChatGPT
- run full Level I in Claude
- capture current UIs
- record short demos
- capture Calendar/Gmail/CRM/QuickBooks/n8n later
- upload captures to their preassigned Cloudinary IDs
- time live rehearsal and log friction

## Naming decision

Keep **Build Your AI Daily Operator** for the pilot.

Always pair it with **Founder Attention OS** and the plain-English promise.

“AI Chief of Staff” is useful competitor/search language but too crowded and anthropomorphic to own. “AI Executive Assistant” is understandable but too administrative for the later curriculum.

Pilot-test whether participants understand “operator” before making any rename.

## Feedback flywheel

```
Learning goal
→ participant behavior/signals
→ identify highest-friction lesson
→ revise one artifact/prompt/guide
→ run again
→ compare
→ codify improvement in GitHub + Cloudinary
```

Do not revise the entire curriculum after every cohort.
