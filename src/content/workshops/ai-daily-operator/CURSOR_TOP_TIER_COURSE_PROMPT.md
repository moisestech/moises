# Cursor Master Prompt — Founder Attention OS Top-Tier Course Pass

You are continuing **Build Your AI Daily Operator / Founder Attention OS** in the private repo:

```
moisestech/moises
```

Work only on:

```
cursor/ai-daily-operator
```

Do not merge to `main`.
Do not force-rebase.
Do not rewrite branch history.
Do not generate fake ChatGPT / Claude UI.
Do not expand concept imagery unless a real teaching gap is observed.

Before editing, read:

```
docs/workshops/ai-daily-operator/TOP_TIER_COURSE_AUDIT_2026-10-15.md
docs/workshops/ai-daily-operator/LEVEL_I_FACILITATOR_GUIDE.md
docs/workshops/ai-daily-operator/HOST_ONE_PAGER.md
docs/workshops/ai-daily-operator/MASTER_PLAN.md
docs/workshops/ai-daily-operator-level-i-capture-checklist.md
src/content/workshops/ai-daily-operator/CURSOR_IMPLEMENTATION_PROMPT.md
src/content/workshops/ai-daily-operator/CURSOR_POST_SCALEUP_MVP_PROMPT.md
src/content/workshops/ai-daily-operator/program.ts
src/content/workshops/ai-daily-operator/production.ts
src/content/workshops/ai-daily-operator/facilitator.ts
src/content/workshops/ai-daily-operator/artifacts.ts
src/content/workshops/ai-daily-operator/level-i-walkthrough.ts
src/content/workshops/ai-daily-operator/level-i-assessment.ts
src/content/workshops/ai-daily-operator/level-i-feedback.ts
src/content/workshops/ai-daily-operator/tool-guides.ts
src/content/workshops/ai-daily-operator/media.ts
src/content/workshops/ai-daily-operator/image-manifest.json
src/components/workshop/ai-daily-operator/ProgramClient.tsx
src/components/workshop/ai-daily-operator/LevelIToolkitClient.tsx
src/components/workshop/ai-daily-operator/LevelIAssessment.tsx
src/components/workshop/ai-daily-operator/LevelICompletionSummary.tsx
src/components/workshop/ai-daily-operator/LevelIFeedback.tsx
src/components/workshop/ai-daily-operator/ToolGuidePlaceholders.tsx
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

Four lenses:

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

Automation rule:

```
Observe friction → diagnose → simplify / clarify / delegate / connect → automate only when justified
```

Never reposition the product as generic productivity, generic prompt engineering, or an “AI Chief of Staff” clone.

---

# Current audited state

At the start of this pass, assume:

- Vercel is green on the audited branch head;
- branch is long-lived and diverged from `main`;
- branch is 79 commits ahead and 54 behind `main`;
- all 16 canonical conceptual assets are uploaded;
- 12 participant artifact schemas exist;
- Level I toolkit exists and is functional;
- 10-question scenario assessment exists;
- Level I completion summary exists;
- Level I feedback exists;
- Level I facilitator guide exists;
- host one-pager exists;
- real UI captures are still intentionally pending;
- DCC documentary evidence is still pending;
- no workshop-specific test files currently exist.

Do not claim otherwise without verifying.

---

# Strategic objective

Make Level I **top-tier and transferable**, not larger.

A top-tier Level I means:

1. participant gets immediate value;
2. participant can explain the judgment, not only copy a prompt;
3. facilitator can deliver without Moises improvising every step;
4. course software is reliable;
5. evidence is collected ethically;
6. founder-hours can decrease as delivery capacity increases;
7. public page is clearer than the internal curriculum.

The next quality gain should come from:

```
observation → QA → facilitation transfer → evidence
```

not from more modules or more generated visuals.

---

# Priority 0 — reconcile reality before adding scope

## A. Reconcile `production.ts`

Audit every task against actual repo state.

Known stale examples include:

- synthetic fallback marked todo even though it exists;
- privacy marked ready even though implemented;
- seven-day follow-up marked todo even though implemented;
- core media marked ready even though canonical media is uploaded;
- host offer marked todo even though a host one-pager exists.

Update status only when source files support it.

Add new tasks only when they represent a real remaining dependency.

Recommended new tasks:

- top-tier public-page simplification;
- Level I state tests;
- facilitator scorecard;
- delegation readiness gate;
- cohort after-action report;
- branch sync plan;
- accessibility/mobile/print QA;
- real DCC evidence;
- real tool captures;
- pilot rehearsal.

## B. Fix evidence-language mismatch

In:

```
docs/workshops/ai-daily-operator/HOST_ONE_PAGER.md
```

do not say DCC is already a fully documented case while the manifest still says `awaiting-real-evidence`.

Use wording consistent with the public program:

```
DCC Miami is used as a sanitized operating example while documentary evidence is still being assembled.
```

Do not invent proof.

---

# Priority 1 — make delegation measurable

Create typed + human-readable sources for:

## Facilitator Scorecard

Track at minimum:

- explains the method clearly;
- preserves the four lenses;
- preserves unknown / fact / interpretation / recommendation;
- preserves Recommend → Explain → Ask → Act;
- handles nontechnical participants;
- does not jump to automation;
- uses synthetic fallback correctly;
- keeps the class on time;
- protects participant privacy;
- produces participant artifacts;
- assessment pass rate;
- completion rate;
- participant clarity delta;
- reuse intent;
- founder interventions required;
- founder minutes required;
- facilitator prep minutes;
- facilitator follow-up minutes.

Key business metric:

```
Moises gross contribution / Moises hours
```

Do not encode a permanent 50/50 split.

## Delegation Readiness Gate

A facilitator may not lead Level I independently until they can:

- explain what the class is and is not;
- teach one 30-day outcome;
- teach Founder Profile without intake sprawl;
- teach the four lenses;
- force one real tradeoff;
- teach Fact / Interpretation / Recommendation;
- preserve unknown as unknown;
- identify friction without jumping to automation;
- preserve human approval;
- use the synthetic fallback;
- run assessment / completion / feedback;
- know when to escalate to Moises;
- finish within the 90-minute window.

Use the autonomy ladder:

```
0 Observe
1 Co-facilitate
2 Lead with oversight
3 Approved / licensed facilitator
```

Do not build licensing infrastructure yet.

## Cohort After-Action Report

Create a small structured schema for each cohort:

- host;
- date;
- facilitator;
- participant count;
- completion count;
- assessment pass count;
- clarity before average;
- clarity after average;
- reuse intent;
- most common friction;
- top stall point;
- top facilitator intervention;
- founder minutes required;
- strongest participant quote / permission state;
- one curriculum change recommended;
- one thing not to change.

The principle is:

```
change one or two things per cohort, not the entire course
```

---

# Priority 2 — add software QA

There are no workshop-specific test files yet.

Add focused tests for Level I behavior.

Prefer small deterministic tests, not a giant test suite.

Cover at minimum:

## Assessment

- scoring 10/10;
- passing at 8/10;
- failing below 8;
- reset;
- persisted state load;
- corrupted localStorage fallback.

## Completion state

- artifact field counts;
- completion false with missing artifact fields;
- completion false if assessment not passed;
- completion false if practical evidence missing;
- completion true only when all required evidence is present.

## Participant persistence

- worksheet state persists;
- progress update event works;
- feedback state persists;
- clear/reset behavior does not erase unrelated browser data.

## Rendering / accessibility smoke checks

- main Level I landmarks exist;
- assessment radios have accessible labels;
- key buttons are keyboard reachable;
- no required information exists only in color.

Do not introduce a heavy new testing framework if the repo already has compatible Testing Library / Jest dependencies.

---

# Priority 3 — simplify the public page

Current public page has roughly 21 sections and 22 H2-level ideas.

Do not delete valuable curriculum source. Simplify **public rendering**.

Target a clearer public narrative:

```
1 Hero / promise
2 The problem: calendars show activity, not what matters
3 Start with Level I — 90 min / no integrations
4 What you build — show Daily Operating Brief
5 Founder Attention OS flywheel
6 How judgment works — four lenses + fact/interpretation/recommendation
7 Real walkthrough evidence / placeholder until captured
8 What repeated friction reveals
9 Automate only what earns it / human approval
10 Five-level progression — concise
11 Host / participant proof / pilot status
12 CTA
```

Move or collapse detailed:

- module maps;
- all 12 artifact descriptions;
- industry overlays;
- scenario packs;
- software layer tables;
- pilot tactics;
- verbose learning-objective maps.

Do not hide the five-level architecture; compress it.

Primary CTA:

```
Start with Level I
```

Secondary:

```
Host Level I
```

Tertiary:

```
See the five-level path
```

---

# Priority 4 — institutional readiness without overbuilding

Create lightweight internal / host assets:

## Host Preflight Checklist

Include:

- participant count;
- room / Zoom format;
- Wi-Fi;
- screen / projector;
- 90-minute protected time;
- participants bring laptop/phone;
- ChatGPT or Claude access;
- no integrations required;
- privacy note;
- synthetic fallback;
- how host handles accessibility needs;
- feedback / completion expectations.

## Participant Pre-Session Message

Keep it short.

Participants should bring:

- one 30-day outcome;
- current calendar / schedule;
- deadlines / follow-ups / open opportunities;
- ChatGPT or Claude access;
- no confidential / sensitive data required.

Do not ask them to connect business accounts.

## Facilitator Preflight

- open toolkit;
- open synthetic case;
- test projection;
- confirm timer;
- confirm backup tool;
- confirm participant privacy language;
- confirm after-action report template.

Do not build LMS / SSO / SCORM / user accounts yet.

---

# Priority 5 — real evidence

Do not fabricate this phase.

Real evidence remains manual / post-pilot.

When actual source material is available:

1. run Level I end-to-end in ChatGPT;
2. run same case in Claude;
3. capture exactly the canonical Level I set;
4. verify Cloudinary metadata;
5. replace placeholders only after verification;
6. collect one sanitized DCC case;
7. collect participant artifact / quote only with permission;
8. record clarity delta and seven-day reuse.

The capture plan remains:

```
ChatGPT: 7 screenshots + 1 short video
Claude: 7 screenshots + 1 short video
```

Do not expand it unless a pilot shows a missing teaching moment.

---

# Priority 6 — branch hygiene

The workshop branch is materially behind `main`.

Do **not** merge or rebase automatically.

Create a branch-sync report that answers:

- which current main files overlap workshop-modified files;
- what is likely to conflict;
- whether route/catalog/workshop components moved;
- whether dependencies/scripts changed;
- safest integration strategy;
- whether to merge main into branch, rebase onto main, or transplant the workshop changes into a fresh branch.

Stop before performing the sync unless explicitly approved.

This is a release dependency, not a curriculum problem.

---

# Monique / Scale Up observation protocol

Today and the next Scale Up session are observational research.

Do not change the course merely because one instructor does something differently.

Use notes to classify observations as:

```
curriculum gap
facilitation gap
participant behavior
distribution insight
delegation insight
not relevant
```

For each observation, capture:

- what happened;
- what participant behavior it produced;
- whether it repeated;
- what Founder Attention OS currently does;
- proposed smallest change;
- confidence level.

Do not create partnership claims.

Do not hard-code Monique into reusable course files.

---

# Definition of top-tier Level I

Do not call Level I top-tier until all are true:

## Learning

- participant creates all four core artifacts;
- participant can explain #1 vs #2;
- participant separates fact / interpretation / recommendation;
- participant identifies one friction;
- participant knows what requires human approval;
- assessment pass standard works.

## Experience

- 90-minute rehearsal fits;
- beginner can complete with synthetic fallback;
- advanced participant still gets value;
- mobile / desktop / print states work;
- privacy guidance is explicit;
- real tool guides are current.

## Facilitation

- second facilitator can prepare from docs;
- facilitator scorecard exists;
- delegation gate exists;
- one co-facilitated or observed pilot completed;
- founder intervention time is measured.

## Evidence

- at least one real hosted session;
- completion data;
- clarity-before/after data;
- at least one seven-day reuse signal;
- one permissioned participant/host quote or artifact;
- DCC example claim matches real evidence state.

## Engineering

- Level I state behavior has focused tests;
- Vercel preview green;
- no obvious accessibility blockers;
- production status registry matches reality;
- branch sync plan is complete;
- no fake UI;
- no unsupported public pricing claims;
- no auto-merge.

---

# Execution order

Make changes in this order:

1. reconcile `production.ts`;
2. fix host evidence wording;
3. add facilitator scorecard;
4. add delegation readiness gate;
5. add cohort after-action schema;
6. add focused Level I tests;
7. add host/participant/facilitator preflight materials;
8. simplify public page;
9. produce branch-sync report;
10. stop and report.

For each step:

- make the smallest coherent commit;
- preserve existing working behavior;
- do not merge;
- verify build after a coherent batch if possible;
- if Vercel fails, stop stacking changes and inspect.

At the end, report:

- commits;
- files changed;
- what moved from incomplete → complete;
- what still requires Moises/manual work;
- any branch-sync risk;
- next recommended milestone.
