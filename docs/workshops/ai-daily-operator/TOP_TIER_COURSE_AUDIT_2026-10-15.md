# Founder Attention OS / Build Your AI Daily Operator — Top-Tier Course Audit

**Audit date:** 2026-10-15  
**Repo:** `moisestech/moises`  
**Branch:** `cursor/ai-daily-operator`  
**Audited head:** `e98c20538ccaba100ee37db808b0e41db4304ac4`

## Executive read

The course is no longer in idea-stage. Level I is a real participant product with a working public route, toolkit, structured artifacts, assessment, completion state, feedback instrument, facilitator materials, canonical media, synthetic fallback, privacy guidance, and a concrete 90-minute run-of-show.

The highest-value work is no longer “add more curriculum.” It is to:

1. validate the 90-minute experience in real rooms;
2. make quality observable and transferable to another facilitator;
3. reconcile stale internal production-status records with actual repo state;
4. reduce public-page complexity;
5. add software QA / tests around the participant state machine;
6. capture real product interfaces after the flow is stable;
7. collect real course evidence and longitudinal outcomes;
8. resolve branch divergence before final production merge.

A top-tier course should be judged by **participant transfer + facilitator transfer + evidence + reliability**, not by the number of modules or images.

---

## Current engineering / deployment state

- Vercel status on audited head: **success**.
- Branch vs `main`: **diverged**.
- Branch is **79 commits ahead** and **54 commits behind** `main`.
- Do not merge or force-rebase automatically.
- Before final release, inspect conflicts and create a deliberate sync plan.

This branch-divergence issue is now a real production risk because a large body of workshop work is sitting on a long-lived branch while the site continues moving.

---

## Current code / course inventory

### Public product

Routes:

```
/workshop/build-your-ai-daily-operator
/workshop/build-your-ai-daily-operator/level-i
```

The workshop is also represented in the main workshop catalog and has a canonical Operator Core cover.

### Program page

Current `ProgramClient.tsx`:

- ~725 lines;
- 21 `<section>` blocks;
- 22 visible H2-level ideas.

Current major sections include:

1. Build the first useful version in 90 minutes
2. What this refuses
3. Attention, then a system
4. Make the work legible
5. Five levels
6. Connected does not mean autonomous
7. Each level leaves a project
8. A map, not the lessons
9. Repeated manual work is evidence
10. Automate only what earns it
11. Twelve artifacts
12. The examples change
13. The 90-minute ScaleUp session
14. Five minutes, then the point is obvious
15. The lines that recur
16. Required, optional, advanced
17. One fictional company, six noun sets
18. The friction, then a choice
19. The learning objectives
20. How Level I is taught
21. What the first cohort is for
22. Ask for Level I

**Audit:** the page contains strong material but still behaves partly like a product specification. A top-tier public page should compress the above into a clearer transformation / proof / CTA hierarchy.

### Level I participant product

Implemented:

- 90-minute walkthrough;
- minimum-safe-context privacy boundary;
- synthetic Northstar Studio Co. fallback;
- official OpenAI / Claude learning references;
- portable vendor-neutral Daily Operator prompt;
- four fillable participant artifacts;
- browser-local persistence;
- copy / print / PDF flows;
- 10-question scenario-based competency check;
- 80% pass threshold;
- completion evidence summary;
- post-workshop feedback instrument;
- real-product walkthrough placeholders;
- completion summary that combines artifact progress + assessment + practical evidence.

### Participant artifacts

All **12** artifact schemas exist:

1. Founder Profile
2. Attention Rules
3. Daily Operator
4. Daily Operating Brief
5. Business Source Map
6. Permission Map
7. Business Pulse
8. Friction Log
9. Friction Map
10. Workflow Blueprint
11. Weekly Operating Review
12. 90-Day Roadmap

Level I currently exposes the first four as working participant worksheets.

### Facilitation

Existing facilitator infrastructure:

- typed `facilitator.ts`;
- `LEVEL_I_FACILITATOR_GUIDE.md` (~222 lines);
- minute-by-minute 90-minute flow;
- checkpoints and recovery moves;
- privacy note;
- synthetic fallback;
- human-approval policy;
- scenario-based assessment standard;
- failure modes;
- post-workshop feedback questions.

This is already unusually strong for a 90-minute workshop.

### Host / sales infrastructure

Existing:

- `HOST_ONE_PAGER.md`;
- Level I audience;
- learning outcomes;
- platform requirements;
- host format;
- 90-minute arc;
- deeper Level II–V progression;
- internal pilot pricing hypothesis.

**Content gotcha:** the host one-pager currently describes DCC Miami as a “documented creative-business case,” while the media manifest still marks the DCC case as `awaiting-real-evidence`. Change this language until documentary evidence exists.

### Benchmarks

The repo has a stable benchmark registry covering:

- OpenAI Academy foundations;
- OpenAI small-business workshop resources;
- OpenAI agent/workflow learning;
- Claude AI Fluency;
- Claude capabilities / limitations;
- Claude human-agent teams;
- Claude nonprofit workflow progression;
- Section personal-agent workshop;
- Maven AI Operating System benchmarks.

This is sufficient as a competitive baseline. The next value comes from actual participant observation, not more competitor collection.

---

## Media / asset audit

### Manifest totals

Current audited manifest: **60 assets**

Status:

- **16 canonical**
- **14 supporting**
- **9 exploration**
- **17 real-documentation**
- **4 reference**

Delivery:

- **23 uploaded**
- **20 pending source reconciliation**
- **16 awaiting manual capture**
- **1 awaiting real evidence**

### Canonical conceptual media

**16 / 16 canonical conceptual assets are uploaded.**

The conceptual visual layer is therefore **not a blocker**.

Do not expand image generation unless a specific teaching gap is observed in a pilot.

### Real product documentation

Planned instructional capture registry: **26 assets**

By tool:

- ChatGPT: 8
- Claude: 8
- Google Calendar: 2
- Gmail: 1
- Airtable / CRM: 1
- QuickBooks: 2
- n8n: 4

By level:

- Level I: 16
- Level II: 4
- Level III: 2
- Level V: 4

By format:

- 23 screenshots
- 3 videos

Level I real UI is intentionally still placeholder-only:

- ChatGPT: 7 screenshots + 1 short demo;
- Claude: 7 screenshots + 1 short demo.

This should remain manual / real. Do not generate fake UI.

### Real case evidence

DCC case media is still:

```
awaiting-real-evidence
```

Do not present generated or sanitized examples as documentary proof.

---

## Audit of internal consistency

### 1. `production.ts` is stale

Several tasks are still marked `todo` or `ready` even though the work exists.

Examples:

- synthetic fallback says `todo`, but `synthetic-case.ts` and `SYNTHETIC_CASE.md` exist;
- privacy says `ready`, but privacy guidance is implemented;
- seven-day follow-up says `todo`, but `seven-day-followup.ts` exists;
- core media says `ready`, but all 16 canonical conceptual assets are uploaded;
- pre-pilot host offer says `todo`, but `HOST_ONE_PAGER.md` exists.

This makes project reporting less trustworthy.

**P0:** reconcile `production.ts` against actual repo state before adding more tasks.

### 2. Public page is too broad

The public page has 21 sections / 22 H2 ideas.

It contains useful material, but a top-tier conversion surface should probably reduce the visible narrative to roughly:

1. problem / promise;
2. Level I tangible outcome;
3. method / flywheel;
4. what participants build;
5. real walkthrough / evidence;
6. deeper progression;
7. host CTA.

Detailed module maps, artifact catalogs, scenario packs, principles, overlays, software layers, and pilot tactics should be moved lower, collapsed, or kept in facilitator / host material.

### 3. Level I is stronger than Levels II–V

Level II–V have:

- architecture;
- artifact schemas;
- media concepts;
- tool-guide plans.

They do **not** yet have the same participant product completeness as Level I:

- dedicated toolkit routes;
- per-level assessments;
- completion state;
- feedback instrument;
- facilitator-ready live run-of-show;
- real software documentation.

Do not pretend the full five-level program is equally finished.

### 4. Software QA is thin

There are currently **no ai-daily-operator-specific test/spec files**.

The participant product has stateful behavior:

- localStorage persistence;
- artifact completion;
- assessment scoring;
- completion summary;
- feedback state;
- print/export behavior.

A top-tier course should have basic tests for these behaviors before public launch.

### 5. Branch divergence is now a release concern

The workshop branch is 54 commits behind `main`.

Before final launch:

- inspect current `main` changes;
- identify workshop conflicts;
- create a deliberate sync plan;
- do not force rewrite or merge blindly;
- re-run build after reconciliation.

### 6. Host copy has one evidence overclaim

`HOST_ONE_PAGER.md` currently says DCC is a documented creative-business case.

The manifest says the real DCC case image/evidence is not yet complete.

Until evidence exists, use:

> DCC Miami is used as a sanitized operating example while documentary evidence is still being assembled.

---

# What would make this a top-of-the-line course

## Pillar 1 — Immediate usefulness

A participant must create something useful during the session.

Already strong:

- outcome;
- Founder Profile;
- Attention Rules;
- Daily Operator;
- Daily Operating Brief.

Top-tier test:

> Could a participant use the brief tomorrow without Moises present?

## Pillar 2 — Transfer, not prompt-copying

A participant must be able to explain:

- why #1 outranks #2;
- what is fact vs interpretation;
- what is unknown;
- what requires approval;
- what can wait;
- what friction they observed.

Already strong via scenario assessment and completion evidence.

Top-tier improvement:

- test assessment logic;
- use real cohort item analysis;
- revise questions based on common wrong answers.

## Pillar 3 — Excellent facilitation

Top-tier live courses do not rely on the founder improvising every explanation.

Already strong:

- facilitator guide;
- checkpoints;
- recovery moves.

Still needed:

- facilitator scorecard;
- delegation readiness gate;
- post-session facilitator after-action report;
- “requires Moises” vs “facilitator can own” matrix;
- one pilot with someone besides Moises.

## Pillar 4 — Real evidence

Top-tier course pages show proof, not only concepts.

Still needed:

- real ChatGPT / Claude walkthroughs;
- one sanitized DCC case;
- first participant artifacts with permission;
- first before/after clarity results;
- seven-day reuse evidence;
- host quote / participant quote with explicit permission.

## Pillar 5 — Reliable participant experience

Still needed:

- tests for localStorage state;
- tests for assessment score / reset;
- tests for completion-state calculations;
- accessibility pass;
- mobile pass;
- print / PDF pass;
- empty-state / corrupted-localStorage handling;
- clear “clear my local data” behavior;
- current browser / device smoke test.

## Pillar 6 — A real learning loop

Already have feedback instrument.

Top-tier improvement:

- one structured after-action report per cohort;
- aggregate anonymous learning metrics;
- track clarity delta;
- track completion;
- track assessment pass rate;
- track seven-day reuse;
- track most common friction type;
- track where people stall;
- change only one or two curriculum elements per cohort.

## Pillar 7 — Founder-hour leverage

A top-tier product for this business must also be teachable without becoming a Moises bottleneck.

Still needed:

- facilitator scorecard;
- role-based economics model;
- autonomy ladder;
- one co-facilitated pilot;
- founder intervention log;
- gross contribution / Moises hour metric.

## Pillar 8 — Institutional readiness

Already have host one-pager.

Later, after real demand:

- host preflight checklist;
- room / AV setup;
- participant onboarding email;
- facilitator preflight;
- attendance / completion export;
- accessibility accommodations;
- optional institutional reporting;
- optional badge/certificate only if hosts value it.

Do **not** build LMS/SCORM/accounts/payments before demand justifies them.

---

# Prioritized remaining scope

## P0 — This week / before adding features

1. Capture Monique class observations from both Scale Up sessions.
2. Reconcile `production.ts` with actual repo state.
3. Create facilitator scorecard.
4. Create delegation readiness gate.
5. Fix DCC documentation claim in host one-pager.
6. Create a simple cohort after-action report schema.
7. Add test coverage for Level I participant state.
8. Create branch-sync plan because the workshop branch is 54 commits behind main.

## P1 — Before first hosted Level I pilot

1. Time one real 90-minute rehearsal.
2. Run the entire flow yourself in ChatGPT.
3. Run the same flow in Claude.
4. Capture the 16 Level I real-product assets.
5. Mobile / print / accessibility QA.
6. Host preflight checklist.
7. Participant pre-session email / preparation list.
8. Facilitator preflight.
9. First-pilot scorecard with founder-hour tracking.
10. Decide whether pilot completion should include a simple completion record/badge.

## P2 — During / immediately after first 1–3 pilots

1. Collect before/after clarity.
2. Track completion and assessment results.
3. Track seven-day reuse.
4. Capture participant quote with permission.
5. Capture one participant artifact with permission.
6. Build DCC documentary case evidence.
7. Revise the highest-friction lesson only.
8. Validate institutional pilot pricing.
9. Test co-facilitator handoff.

## P3 — Only after evidence

1. Dedicated Level II toolkit.
2. Level II assessment/completion.
3. Real Calendar / Gmail / CRM captures.
4. Level III toolkit + accounting read-only demo.
5. Level IV participant workflow.
6. Level V governed workflow build.
7. Facilitator licensing mechanics.
8. LMS / account system only if institutional demand requires it.

---

# Today’s Scale Up / Monique observation lens

Do not pitch today.

Capture raw evidence in four buckets:

## Pedagogy

- How does Monique open?
- How long before participants do something?
- How often does she lecture vs practice?
- How does she explain ambiguity?
- What analogies work?
- Where does the room slow down?

## Facilitation

- How does she handle a beginner?
- How does she handle someone advanced?
- How does she recover when someone gets stuck?
- How does she manage time?
- Does she create psychologically safe participation without over-talking?

## Overlap / complementarity

- What does she teach that Founder Attention OS already covers?
- What does she teach downstream of us?
- What does she teach better than we currently do?
- What infrastructure appears reusable?
- What would feel competitive rather than complementary?

## Delegation signal

- What could she teach tomorrow from a facilitator pack?
- What would still require Moises?
- Would she preserve “unknown is unknown”?
- Would she preserve human approval?
- Would she resist jumping directly to automation?
- Would she represent the method accurately without Moises in the room?

Do not over-interpret class one. Compare class one with class two before making a partnership decision.

---

# Course quality scoreboard

Current directional score:

| Dimension | Current | Top-tier threshold |
| --- | ---: | ---: |
| Positioning / differentiation | 9/10 | 9/10 |
| Level I curriculum | 9/10 | 9/10 |
| Participant artifacts | 9/10 | 9/10 |
| Assessment | 8.5/10 | 9/10 after pilot item analysis |
| Privacy / HITL | 9/10 | 9/10 |
| Conceptual media | 10/10 | 10/10 |
| Real tool evidence | 2/10 | 8+/10 |
| Facilitation system | 8/10 | 9/10 |
| Delegability | 6/10 | 9/10 |
| Participant software QA | 5/10 | 9/10 |
| Real outcome evidence | 2/10 | 8+/10 |
| Public-page clarity | 7/10 | 9/10 |
| Institutional readiness | 7/10 | 9/10 |
| Levels II–V completeness | 5/10 | 9/10 only after Level I validates |

The product is strong enough that the next increase in quality will come from **observed use, QA, facilitation transfer, and evidence** rather than more ideation.
