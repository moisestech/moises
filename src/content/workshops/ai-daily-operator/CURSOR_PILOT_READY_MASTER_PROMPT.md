# Cursor Master Prompt — Founder Attention OS Pilot Operations Pass

You are continuing **Build Your AI Daily Operator / Founder Attention OS** in:

```
moisestech/moises
```

## Branch

Work only on:

```
feat/founder-attention-pilot-ops
```

This branch was cut from `main` after the Daily Operator work was merged.

Do not merge to `main`.
Do not modify Moonlighter Gate 1 or The Cloud Is Thirsty.
Do not rewrite history.
Do not fabricate ChatGPT / Claude screenshots or participant evidence.

## Verified repository state

At the start of this pass:

- `main` head: `6e774c043335d4ce4d52986bfeb55ed7e30d8279`
- `main` and the former `cursor/ai-daily-operator` branch had converged at the same commit
- the old operator branch was removed after merge
- Vercel on `main` was green
- Daily Operator public page and Level I toolkit are on `main`
- Level I state tests exist
- facilitator scorecard exists
- delegation readiness gate exists
- cohort after-action schema exists
- host one-pager exists
- public page has already been compressed
- DCC is correctly described as a sanitized operating example, not a documented proof case
- there has been one observed Monique Scale Up session only

Separate open work:
- `feat/moonlighter-workshop-gate-1` → draft PR #59
- `research/water-ai-material-internet-2026-10` → draft PR #60

Do not touch those branches in this pass.

## Product invariants

Public title:

```
Build Your AI Daily Operator
```

Method:

```
Founder Attention OS
```

Promise:

```
Know what deserves your attention, and build the systems that support it.
```

Four lenses:

```
Commitments
Revenue / Mission
Risk
Capacity
```

Evidence discipline:

```
FACT → INTERPRETATION → RECOMMENDATION
```

Missing information remains unknown.

Human governance:

```
RECOMMEND → EXPLAIN → ASK → ACT
```

Automation rule:

```
Observe friction → diagnose → simplify / clarify / delegate / connect → automate only when justified
```

Do not turn this into generic productivity, generic prompt engineering, or an AI Chief of Staff product.

---

# What this branch already adds

## Delivery variants

`src/content/workshops/ai-daily-operator/delivery-variants.ts`

One Level I competency model, two delivery formats:

### Core
- 90 minutes
- minimum useful build
- institutional / accelerator / intro format

### Studio
- 2.5–3 hours
- same competency model
- more coached iteration, challenge, troubleshooting, and transfer

Do not duplicate the course into two separate curricula.

## Preflight

`src/content/workshops/ai-daily-operator/preflight.ts`

Typed:
- host preflight
- participant pre-session preparation
- facilitator preflight

No integrations are required.
Minimum-safe-context privacy remains the default.

## Pilot operations UI

Route:

```
/workshop/build-your-ai-daily-operator/level-i/facilitate
```

Component:

```
src/components/workshop/ai-daily-operator/LevelIPilotOpsClient.tsx
```

Rules:
- noindex
- browser-local only
- no participant data sent to a server
- tracks preflight
- tracks cohort after-action data
- tracks facilitator scorecard
- computes clarity delta
- optionally computes Moises gross contribution / Moises hours
- exports JSON
- reset clears only this course record

## Tests

`pnpm test:level-i` should run all `*.test.ts` files in the Daily Operator content directory.

Current tests cover:
- Level I assessment / persistence / completion
- delivery variants
- preflight logic

---

# Next coding objective

Do not add more curriculum.

The next pass should make the pilot-ops layer reliable enough to use in a real room and easy enough that it actually reduces founder overhead.

Work in this order.

## P0 — Verify the branch

Run:

```
pnpm test:level-i
pnpm build
```

If either fails:
1. fix the smallest issue;
2. rerun;
3. do not stack unrelated changes on a failing build.

## P1 — Harden the facilitator ops UI

Review `LevelIPilotOpsClient.tsx` for:

- hydration safety;
- localStorage corruption fallback;
- numeric input edge cases;
- clipboard failure handling;
- download URL cleanup;
- reset scope;
- keyboard accessibility;
- visible focus states;
- mobile layout;
- screen-reader labels;
- empty-state clarity;
- accidental submission behavior.

Do not add authentication or a database in this pass.

## P2 — Add import / resume support

A facilitator should be able to resume a prior exported cohort JSON on another machine.

Add:
- Import JSON control
- schema validation / defensive parsing
- version field in export payload
- reject incompatible or malformed files without destroying current local state
- explicit confirmation before replacing current session state

No network upload.

## P3 — Make session readiness visible

Create a small computed readiness summary using existing evidence:

```
Operational readiness
Learning readiness
Evidence readiness
Delegation readiness
```

Do not invent participant outcomes.

Examples:
- preflight incomplete → operational readiness open
- rehearsal not yet run → evidence readiness open
- real screenshots missing → proof readiness open
- facilitator scorecard incomplete → delegation readiness open

Prefer a typed helper in content code over hard-coding logic in the React component.

## P4 — Add a human-readable export

JSON is useful for systems but poor for quick review.

Add a plain-text / Markdown export that includes:
- host
- date
- Core / Studio
- participants / completions / passes
- clarity before / after / delta
- top friction
- top stall point
- top facilitator intervention
- founder minutes
- facilitator minutes
- contribution per founder hour when known
- quote permission
- one change
- one thing not to change

Do not expose confidential participant inputs.

## P5 — Link facilitator docs, not public marketing

The facilitator route should remain noindex and should not become a primary public CTA.

Add it only where an instructor would reasonably find it:
- facilitator guide
- internal course docs
- optionally a subtle “Facilitator ops” link from the participant toolkit only if clearly separated from participant flow

Default preference: docs only, not participant UI.

## P6 — Keep Monique generic in code

Do not hard-code Monique into:
- facilitator roles
- economics
- readiness logic
- participant UI
- public page

The relationship remains a real-world test of the generic delegation infrastructure.

There has been one observed session only.

Current relationship sequence:

```
DCC participation
→ useful peer relationship
→ course reveal
→ critique
→ one bounded pilot if additive
→ measure founder-hours + participant quality
→ only then consider recurring facilitator economics
```

## P7 — Stop at pilot reliability

Do not build yet:
- accounts
- LMS
- facilitator licensing system
- payments
- automated certificates
- Airtable sync
- server-side participant storage
- CRM writes
- recurring follow-up automation

Those require pilot evidence first.

---

# Definition of done for this branch

The branch is ready for review when:

1. `pnpm test:level-i` passes.
2. `pnpm build` passes.
3. facilitator route works on desktop and mobile.
4. corrupt local storage does not break the page.
5. export JSON works.
6. import JSON works safely.
7. Markdown/text export works.
8. preflight readiness is legible.
9. no data leaves the browser.
10. public participant flow remains unchanged.
11. no Moonlighter or water-research files changed.
12. Vercel preview is green.

At the end report:
- commits
- files changed
- test/build status
- preview URL
- what still requires Moises
- whether the next milestone should be rehearsal, first pilot, or real screenshot capture
