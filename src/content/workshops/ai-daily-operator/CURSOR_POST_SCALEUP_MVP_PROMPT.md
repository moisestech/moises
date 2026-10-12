# Cursor Master Prompt — Founder Attention OS Post-Scale-Up MVP

You are continuing the **Build Your AI Daily Operator / Founder Attention OS** product in the private repo `moisestech/moises`.

## Branch safety

Work only on:

```
cursor/ai-daily-operator
```

Do not merge to `main`.
Do not delete or rewrite legacy DCC media before verified replacement.
Do not invent Cloudinary URLs, versions, dimensions, asset IDs, or tool screenshots.

## Read first

Before editing, read these files:

```
src/content/workshops/ai-daily-operator/program.ts
src/content/workshops/ai-daily-operator/artifacts.ts
src/content/workshops/ai-daily-operator/facilitator.ts
src/content/workshops/ai-daily-operator/level-i-walkthrough.ts
src/content/workshops/ai-daily-operator/level-i-assessment.ts
src/content/workshops/ai-daily-operator/level-i-feedback.ts
src/content/workshops/ai-daily-operator/tool-guides.ts
src/content/workshops/ai-daily-operator/media.ts
src/content/workshops/ai-daily-operator/image-manifest.json
src/content/workshops/ai-daily-operator/cloudinary-migration-map.json
src/components/workshop/ai-daily-operator/ProgramClient.tsx
src/components/workshop/ai-daily-operator/LevelIToolkitClient.tsx
src/components/workshop/ai-daily-operator/LevelIAssessment.tsx
src/components/workshop/ai-daily-operator/LevelICompletionSummary.tsx
src/components/workshop/ai-daily-operator/LevelIFeedback.tsx
src/components/workshop/ai-daily-operator/ToolGuidePlaceholders.tsx
docs/workshops/ai-daily-operator-master-plan.md
docs/workshops/ai-daily-operator-level-i-capture-checklist.md
src/content/workshops/ai-daily-operator/CURSOR_IMPLEMENTATION_PROMPT.md
```

## Product invariants

Public title:

```
Build Your AI Daily Operator
```

Method:

```
Founder Attention OS
```

Core promise:

```
Know what deserves your attention, and build the systems that support it.
```

Core flywheel:

```
Goals → Signals → Judgment → Attention → Action → Review → System Improvement → Goals
```

Four judgment lenses:

```
Commitments
Revenue / Mission
Risk
Capacity
```

Epistemic rule:

```
FACT → INTERPRETATION → RECOMMENDATION
```

Missing information is unknown. Never turn missing information into a fact.

Human-in-the-loop rule:

```
RECOMMEND → EXPLAIN → ASK → ACT
```

Automation only follows demonstrated friction. Never teach automation as the default response to repeated work.

Tool progression:

```
chat → work → workflow → system
```

## Current Level I state

Level I is a 90-minute no-integration workshop.

Participants leave with:

1. Founder Profile
2. Attention Rules
3. Daily Operator
4. Daily Operating Brief
5. one observed friction
6. a seven-day experiment
7. a 10-question scenario-based competency check
8. a browser-local completion summary
9. a browser-local post-workshop feedback instrument

Real product walkthrough slots are already scaffolded. Do not generate fake ChatGPT or Claude UI.

Canonical Level I capture plan is exactly:

```
ChatGPT: 7 screenshots + 1 short demo
Claude: 7 screenshots + 1 short demo
```

Use `docs/workshops/ai-daily-operator-level-i-capture-checklist.md` when real captures are available.

## Canonical media state

Canonical Cloudinary root:

```
moisestech/workshops/build-your-ai-daily-operator/
```

All 16 canonical conceptual assets are already uploaded and represented in the manifest.

Do not make new concept imagery unless a real instructional gap is demonstrated.

The five core public assets include:

```
00-core/hero/operator-core
00-core/attention-flywheel/attention-flywheel
01-daily-operator/daily-brief/daily-operating-brief
04-friction-intelligence/overview/friction-overview
05-operating-system/human-approval/human-approval-gate
```

## Post-Scale-Up strategic goal

The next MVP is not “more curriculum.”

The goal is to prove that Level I can be **delivered without the founder becoming the bottleneck**.

Treat the first external facilitator as a pilot operator, not a co-owner.

Long-term target:

```
A → C
```

Where:

**A — Facilitated pilot**
- Moises owns methodology, curriculum, website, artifacts, assessment, product.
- A pilot facilitator takes a meaningful share of prep, facilitation, participant support, and/or follow-up.
- Economics may be shared because labor and founder-hours are shared.
- Revenue share does not imply IP ownership.

**C — Independent licensed facilitator**
- An approved facilitator may eventually source and deliver Level I cohorts independently.
- Moises retains curriculum / method / platform / IP economics.
- Facilitator economics increase when they also handle distribution and operations.
- No exclusivity, sublicensing, or ownership transfer is implied by the MVP.

## Facilitator autonomy ladder

Build the product so a facilitator can progress through:

```
0. Observe
1. Co-facilitate
2. Lead with oversight
3. Licensed facilitator
```

The curriculum should make quality observable at each stage.

## MVP deliverables

Complete these in order. Do not expand scope unless a blocker appears.

### 1. Facilitator Pack — Level I

Create a reusable, product-owned facilitator pack from existing source material.

Target roughly 5–8 pages of equivalent content, not a giant manual.

It must include:

- what the class is / is not
- Level I promise
- 90-minute run-of-show
- teaching principles
- SEE → DO → LEAVE WITH pedagogy
- exact artifact outputs
- privacy / minimum-safe-context boundary
- synthetic fallback procedure
- common participant failure modes
- recovery moves when someone falls behind
- Fact / Interpretation / Recommendation teaching notes
- four-lens teaching notes
- approval-boundary notes
- friction taxonomy
- what not to automate
- competency-check standard
- completion evidence
- feedback protocol
- escalation rules
- what requires Moises vs. what does not
- post-session debrief questions for the facilitator

Prefer a typed source file under:

```
src/content/workshops/ai-daily-operator/
```

and a human-readable markdown mirror under:

```
docs/workshops/
```

Do not hard-code a specific facilitator's name into the reusable pack.

### 2. Facilitator Scorecard

Create a simple scorecard for pilot evaluation.

Track at minimum:

- explains method clearly
- preserves the four lenses
- preserves Fact / Interpretation / Recommendation
- preserves Recommend → Explain → Ask → Act
- handles nontechnical participants well
- uses synthetic fallback correctly
- does not jump to automation
- keeps class on time
- participant trust / room energy
- escalates appropriately
- participant completion rate
- assessment pass rate
- clarity-before vs clarity-after delta
- Daily Operator reuse intent
- founder interventions required
- founder minutes required

The key business metric is:

```
Moises gross contribution / Moises hours
```

not simply gross workshop revenue.

### 3. Pilot Economics Model

Create a small internal model separating four roles:

```
Curriculum / IP
Facilitation
Distribution
Operations
```

Do not publish pricing or revenue-share numbers publicly.

The model should support at least:

- Moises sources + Moises teaches
- Moises sources + facilitator teaches
- facilitator sources + facilitator teaches
- co-facilitated pilot

Revenue share must be role-based, not assumed to be permanent 50/50.

### 4. Host-facing Level I one-pager

Create a concise host-facing page or structured source that answers:

- who this is for
- 90-minute promise
- what participants leave with
- no integrations required
- privacy / synthetic fallback
- competency and completion evidence
- seven-day follow-up
- what the host needs to provide
- what Moises / facilitator provides
- pilot status
- contact CTA

Do not expose internal facilitator economics.

### 5. Delegation Readiness Gate

Create a clear readiness checklist before an external facilitator can lead Level I.

A facilitator should not lead alone until:

- they have observed or reviewed the run-of-show
- they can explain the method without collapsing it into generic AI productivity
- they can distinguish unknown / fact / interpretation / recommendation
- they can teach the four lenses
- they can identify friction without jumping to automation
- they can enforce approval boundaries
- they can use the synthetic fallback
- they can score the competency check
- they can run the completion and feedback protocol
- they know when to escalate

### 6. Public page restraint

Do not turn the public page into a facilitator-recruiting page.

The public program page should remain participant / host first.

If needed, add only a small host/facilitation note such as:

```
Level I is being developed as a repeatable facilitator-led program for institutional cohorts.
```

No partnership claims until a real pilot exists.

## Relationship / partnership guardrails

The first external facilitator is a **pilot facilitator**, not automatically a business partner.

Do not encode:
- 50/50 ownership
- permanent exclusivity
- perpetual license
- right to sublicense
- ownership of Levels II–V
- right to rewrite the method independently
- control of Founder Attention OS branding
- control of pricing

The first commercial experiment should be narrow:

```
one Level I pilot
```

Then review:

- participant outcomes
- facilitator quality
- founder hours saved
- economics
- relationship friction
- what still depends on Moises
- what curriculum knowledge remained tacit

If the facilitator needed founder intervention, ask:

```
What knowledge existed only in Moises's head?
```

Then convert that knowledge into:
- facilitator notes
- example
- rubric
- FAQ
- exercise
- escalation rule

That is the compounding-learning loop.

## Flywheel to preserve

```
Founder Attention OS
        ↓
facilitator-led Level I
        ↓
participant friction becomes visible
        ↓
education / operations / technical implementation paths
        ↓
real outcomes
        ↓
case evidence
        ↓
better curriculum
        ↓
more institutional cohorts
        ↓
more facilitators
        ↓
less founder delivery time
```

## Implementation rules

- preserve the existing Level I participant flow
- do not remove the completion summary or feedback instrument
- do not replace real-tool placeholders with generated UI
- keep private/internal economics out of the public page
- keep IP ownership and facilitator compensation conceptually separate
- do not create a marketplace or licensing backend yet
- do not build user accounts yet
- do not build payment automation yet
- do not merge to main
- keep changes reviewable in small commits

## Definition of done for the post-Scale-Up MVP

The MVP is ready when:

1. Level I remains usable end-to-end without integrations.
2. The public page clearly prioritizes Level I.
3. All canonical conceptual media remain verified.
4. Real tool slots remain explicit placeholders until actual captures exist.
5. Facilitator Pack exists.
6. Facilitator Scorecard exists.
7. Pilot Economics Model exists internally.
8. Host-facing Level I one-pager exists.
9. Delegation Readiness Gate exists.
10. A second competent facilitator could prepare for Level I without requiring a long verbal download from Moises.
11. The system can measure participant quality **and** founder-hours saved.
12. Vercel preview is green.
13. Nothing is merged automatically.

When direction is clear, make the next smallest safe production change. Stop and report before any change that would alter ownership, public pricing, licensing terms, or merge state.
