# AI Daily Operator / Founder Attention OS — Master Plan

**Status:** Level I pilot-ready; full program in development  
**Last reviewed:** 2026-10-07  
**Public workshop:** Build Your AI Daily Operator  
**Method:** Founder Attention OS  
**Promise:** Know what deserves your attention, and build the systems that support it.

## Core thesis

Goals organize attention. Signals inform judgment. Workflows preserve attention. Review improves the system.

**Attention Flywheel**

`Goals → Signals → Judgment → Attention → Action → Review → System Improvement → Goals`

The course is not generic AI productivity training and is not a prompt-engineering course. Its distinct territory is:

- finite founder attention;
- durable business context;
- Commitments / Revenue or Mission / Risk / Capacity;
- source-of-truth and permission rules;
- friction as evidence before automation;
- inspectable recommendations;
- governed workflows with human responsibility;
- a review loop that improves the system.

## Naming decision

Keep **Build Your AI Daily Operator** for now.

Use **Founder Attention OS** as the named methodology.

Always pair the title with a plain-language descriptor:

> A practical founder operating system for deciding what deserves your attention, why it matters, and what can wait.

Use “AI Chief of Staff” and “AI Executive Assistant” only as comparison/search language. Do not make either the primary category unless pilot feedback proves “Daily Operator” is too hard to understand.

## Product architecture

One stackable program, five levels.

### Level I — AI Daily Operator — 90 minutes

**Question:** What deserves my attention today?

No integrations. Prove the judgment model first.

Leaves with:

1. Founder Profile
2. Attention Rules
3. Daily Operator
4. Daily Operating Brief
5. First Friction Log note

### Level II — Connected Operator — about 2 hours

**Question:** Which source should the system trust for which information?

Leaves with:

5. Business Source Map
6. Permission Map

### Level III — Business Pulse — about 60 minutes

**Question:** What economically or missionally matters?

Leaves with:

7. Business Pulse

### Level IV — Friction Intelligence — about 60 minutes

**Question:** What repeatedly steals attention?

Friction taxonomy:

- retrieval
- reconciliation
- memory
- transfer
- decision
- approval
- communication

Score candidates with **Impact × Frequency × Ease × Risk**.

Leaves with:

8. Friction Log
9. Friction Map

### Level V — From Operator to Operating System

**Question:** How should one justified friction actually run?

Canonical workflow:

`Trigger → Context → Reasoning → Output → Approval → Action → Record`

Leaves with:

10. Workflow Blueprint
11. Weekly Operating Review
12. 90-Day Improvement Roadmap

### Capstone

Seven-day experiment.

Run the brief once per day. Record:

- what it got wrong;
- what it missed;
- what information had to be reconstructed manually;
- what context or rule should change.

## Human-in-the-loop rule

Canonical policy:

`RECOMMEND → EXPLAIN → ASK → ACT`

Missing information is **unknown**, not false.

Consequential actions remain under human responsibility unless a narrowly defined class of low-risk action has been deliberately approved after testing.

Level III financial instruction is read-only decision context by default. Do not teach automated payments or accounting writes as the core pattern.

## Canonical repositories

### GitHub — machine-readable source of truth

`src/content/workshops/ai-daily-operator/`

- `program.ts` — program and competency map
- `media.ts` — Cloudinary media registry
- `artifacts.ts` — all 12 participant artifact schemas
- `level-i-walkthrough.ts` — timed Level I facilitation flow
- `operator-prompt.ts` — portable Daily Operator prompt
- `tool-guides.ts` — real screenshot/video capture manifest
- `resources.ts` — official Academy + benchmark links
- `offer.ts` — internal funnel/pricing hypotheses
- this file — strategic handoff

### Google Drive — human working library

Root folder: **AI Daily Operator — Founder Attention OS**

- 01 — Master Strategy
- 02 — Curriculum + Artifacts
- 03 — Tool Captures
- 04 — Benchmarks + References
- 05 — Exports

### Cloudinary — delivery media

Root:

`dccmiami/workshops/ai-daily-operator/`

Use for:

- canonical concept visuals;
- participant-artifact previews;
- DCC example exports;
- real tool screenshots;
- short recordings;
- LMS/module thumbnails;
- exported PDFs/media.

Do not use Cloudinary as the editable source of curriculum or worksheets.

## Tool-guide rule

Conceptual media is vendor-neutral.

Click-level instruction is vendor-specific and replaceable.

Current capture folders:

- `09-tool-guides/chatgpt/level-i`
- `09-tool-guides/claude/level-i`
- `09-tool-guides/google-calendar/level-ii`
- `09-tool-guides/gmail/level-ii`
- `09-tool-guides/airtable-crm/level-ii`
- `09-tool-guides/quickbooks/level-iii`
- `09-tool-guides/n8n/level-v`

Never generate fake UI for instruction. Use real screenshots or recordings.

## Official curriculum references

### OpenAI Academy

- Courses: https://academy.openai.com/pages/courses
- Course catalog/durations: https://help.openai.com/en/articles/20001270-openai-academy-courses
- Small Business Workshop Resource Hub: https://academy.openai.com/public/resources/openai-academy-small-business-resource-hub-2026-06-03
- ChatGPT for Work: https://openai.com/academy/chatgpt-for-work/

Important overlaps:

- clear instructions and context;
- repeatable workflows;
- checkpoints;
- human review;
- responsible use;
- smallest useful workflow first.

Do not duplicate generic product literacy OpenAI maintains better.

### Claude Academy

- Academy: https://academy.claude.com/
- AI Fluency: https://academy.claude.com/courses/ai-fluency-framework-foundations
- AI Capabilities and Limitations: https://academy.claude.com/courses/ai-capabilities-and-limitations
- Human-Agent Teams: https://academy.claude.com/courses/building-effective-human-agent-teams
- Claude for Small Business: https://www.anthropic.com/news/claude-for-small-business
- Moving Workflows Beyond Chat: https://claude.com/resources/webinars/claude-for-nonprofits-moving-your-workflow-beyond-chat

4D crosswalk:

- **Delegation** → attention routing / what requires the founder
- **Description** → Founder Profile + Attention Rules
- **Discernment** → Fact / Interpretation / Recommendation; challenge the ranking
- **Diligence** → approval policy and human responsibility

Useful advanced concepts:

- written north star;
- clear roles;
- right information access;
- gradual release;
- Chat → Project → Skill → Connector progression.

## Competitive references

### Section — Personal AI Agent / Chief of Staff

https://www.sectionai.com/courses/building-your-first-personal-ai-agent-with-chatgpt-work

Closest short-course competitor. Product-centric: calendar, inbox, messages, Chief-of-Staff framing.

**Our differentiation:** attention judgment, business goals, source integrity, friction-before-automation, explicit approval, weekly feedback loop.

Pricing reference:

https://www.sectionai.com/pricing

Many standalone 1.5–2 hour live workshops are around $195. Use this only as an individual-ticket benchmark.

### Maven — Build Your AI Operating System

https://maven.com/actionablefeedback/build-your-ai-operating-system

Higher-priced workshop benchmark validating operating-system / clear-focus framing.

## Funnel and pricing hypotheses

**Internal only until pilot validation.**

### Free

- public course page;
- Attention Flywheel;
- sample brief;
- official Academy links;
- simple attention/friction self-check.

### Level I — hosted workshop

Primary near-term buyer: institution / accelerator / chamber / cultural organization.

Pilot hypothesis:

- institutional: **$1,500–$2,500**
- later individual public ticket: **$95–$195**

### Full Levels II–V cohort

Pilot hypotheses:

- individual: **~$750**
- later target: **$1,000–$1,250**
- institutional cohort: **$7,500–$12,500**

### Implementation sprint

Only after a justified friction has a source, permission, and approval model.

Working range: **$3,500–$7,500** for a narrow implementation sprint; larger systems quoted separately.

### Conversion moment

Do not hard-sell at minute 90.

Conversion happens after value:

`Daily Operating Brief → Friction Map → participant realizes what is fragmented → deeper course or implementation becomes pull, not push.`

## Key tradeoffs / gotchas

### Vendor-neutral vs concrete

Keep the method vendor-neutral. Keep UI instruction small, real, current, and replaceable.

### Integration setup can destroy a workshop

Level I works manually. Every later connector lesson needs a synthetic/manual fallback.

### Screenshot decay

Store screenshots only under `09-tool-guides`. Never bake current UI into the intellectual-property diagrams.

### Finance risk

Read signals to support decisions. Do not default to accounting writes, payments, or financial autopilot.

### Automation bias

Every friction may end in:

- leave manual;
- simplify;
- delegate;
- AI-assist;
- connect;
- schedule;
- approval-based action;
- conditional automation.

### Privacy

Provide a complete synthetic practice case. Participants use real information only when appropriate and safe.

## Cloudinary logo status

Canonical vendor-logo folders exist:

- `00-core/vendor-logos/chatgpt`
- `00-core/vendor-logos/claude`

A legacy Claude logo exists elsewhere in Cloudinary at `jobs/claude_logo_2023_wihocz`. Do **not** promote it automatically without checking current brand guidance.

No clearly identified canonical ChatGPT/OpenAI logo asset was found. Existing “ChatGPT” search results were mostly generated-image filenames. Add current official brand assets later rather than generating imitation logos.

## Production priorities

### P0 — can complete without manual screenshots

- [x] Level I artifact schemas
- [x] Levels II–V artifact schemas
- [x] Level I 90-minute walkthrough
- [x] portable Daily Operator prompt
- [x] real-tool capture manifest
- [x] official learning-resource registry
- [x] internal offer/pricing hypothesis
- [x] Drive working folder architecture
- [x] Cloudinary participant-artifact/tool-guide/course-doc folders
- [ ] reconcile media registry status against actual Cloudinary presence
- [ ] create DCC worked-example content for all Level I artifacts
- [ ] create synthetic fallback business case
- [ ] create facilitator guide and participant privacy note
- [ ] create full Level I assessment / completion checklist
- [ ] prepare institutional host one-pager

### P1 — requires desktop/manual product use

- [ ] run Level I in ChatGPT
- [ ] run Level I in Claude
- [ ] capture minimum five screenshots per platform
- [ ] record one short demo per platform
- [ ] capture Calendar / Gmail / CRM Level II guides
- [ ] capture QuickBooks Level III guides
- [ ] build + capture canonical n8n Level V workflow
- [ ] upload approved captures to Cloudinary
- [ ] time the workshop and record stall points

### P2 — after first live pilot

- [ ] revise the highest-friction prompt/artifact
- [ ] validate “Daily Operator” comprehension
- [ ] validate institutional pricing
- [ ] choose public individual price
- [ ] collect seven-day reuse data
- [ ] package post-workshop follow-up
- [ ] decide paid cohort launch for Levels II–V

## Definition of 100%

### Level I

A participant can arrive with ChatGPT or Claude, complete four artifacts, generate a useful brief, explain the ranking, distinguish facts from interpretation/recommendation, identify one friction, and leave with a seven-day experiment without core-flow instructor improvisation.

### Full curriculum

Every level has:

- competency statement;
- participant artifact;
- facilitator instructions;
- conceptual visual;
- real tool demo where relevant;
- fallback path;
- DCC worked example;
- human-approval rule;
- clear completion criterion.

### Product

The public page explains the first useful outcome, Level I can be booked, artifacts work, tool captures are current, pricing is validated, the seven-day feedback loop exists, and implementation consulting is an explicit but non-coercive next step.
