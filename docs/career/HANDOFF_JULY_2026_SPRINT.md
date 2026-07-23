# moises.tech career handoff — July 2026 sprint

> **Build state:** `built_locally` — not committed, pushed, deployed, or verified live unless stated otherwise.  
> **For:** Application Identity Triage Agent · ChatGPT/Claude career orchestrators · Cursor

---

## Locked operating decisions (Jul 11)

| Rule | Setting |
|------|---------|
| Public dossiers | **Yes when verifier confirms** — no private recruiter data, no inflated claims |
| Fit thresholds | 80–100 pursue · 70–79 conditional · 60–69 selective · &lt;60 hold |
| WIP | **No fixed cap** — 6-role sprint; each active app needs a real next move |
| Standard application | ≤1 focused day unless creating reusable artifact |
| Infra24 RAG claims | **Prohibited until verified live** |

---

## July application sprint (Airtable-approved)

| Seq | Role | Slug | Listed | Indexable | Due |
|----:|------|------|--------|-----------|-----|
| 1 | Deepgram — Solutions Architect | `deepgram-solutions-architect` | false | false | Jul 12 |
| 2 | Harvey — Automation Engineer, Customer Education | `harvey-automation-engineer-customer-education` | **true** | **true** | Jul 13 |
| 3 | Endor Labs — Solutions Architect | `endor-labs-solutions-architect` | false | false | Jul 14 |
| 4 | Blue Acorn iCi — Agentic AI Integration Engineer | `blue-acorn-ici-agentic-ai-integration-engineer` | **true** | **true** | Jul 15 |
| 5 | NEOGOV — Staff Agentic AI Developer | `neogov-staff-agentic-ai-developer` | **true** | **true** | Jul 16 |
| 6 | CoreStory — AI Engineer | `corestory-ai-engineer` | false | false | Jul 17 — **blocked** |

### Ready-to-apply batch (Jul 23 — private dossiers)

| Role | Slug | Listed | Indexable |
|------|------|--------|-----------|
| **WPP HEX — Creative Innovation Lead / ACD** | `wpp-hex-creative-innovation-lead-acd` | false | false |
| Instacart — AI Solutions Architect | `instacart-ai-solutions-architect` | false | false |
| Talkiatry — Senior AI Engineer | `talkiatry-senior-ai-engineer` | false | false |
| Render — Solutions Engineer | `render-solutions-engineer` | false | false |

**Priority order:** WPP (flagship creative-tech) → Render → Instacart → Talkiatry (selective).

Held out: Deloitte Healthcare (location unconfirmed — McLean, VA).

Routes: `https://www.moises.tech/opportunities/[slug]`

---

## Confirmed evidence (safe to claim)

- **n8n Gmail Intelligence Agent** — production workflow, AI Agent node, labels, Airtable sync  
- **Bookleggers Make + Square + Airtable** — live commerce sync  
- **Multi-Agent Career System** — Claude + n8n + Airtable + Gmail + Triage Agent v1  
- **Lore Machine** — founding engineer (use outcomes; not “Chief Prompt Officer” as headline)  
- **Playwire** — Solutions + Data 2021–2022  
- **AI24 / teaching** — workshops and programs  

Canonical copy: `src/content/evidence/productionAiAutomationPack.ts`

---

## Prohibited until verified

- Production RAG / vector DB / LangChain / LangGraph / CrewAI depth  
- Infra24 Memory Agent as live demo (currently **built_locally** in infra24 repo)  
- Netflix-scale internal platform  
- Deloitte (expired — archived)  

Infra24 demo hub (when deployed): `/applied-ai` on dcc.miami

---

## Canonical source chain

```text
src/constants/resume.ts
src/content/evidence/productionAiAutomationPack.ts
src/content/evidence/automationProjects.ts
src/content/evidence/projects.ts
src/content/ai-engineering/packet.ts
src/content/opportunities/registry.ts
```

---

## P0 evidence pack (due Jul 14)

**Artifact:** Production AI Automation Evidence Pack

| Action | Status | Needs from Moises |
|--------|--------|-------------------|
| n8n label taxonomy + error handling | Doing | Exact labels, model, trigger cadence, retry/fallback |
| Bookleggers field map + sync | Ready | Square↔Airtable fields, frequency, go-live date |
| Screenshots + assembled pack | Ready | Redacted n8n/Make screenshots |

Fill `VERIFY:` fields in `productionAiAutomationPack.ts`.

---

## Infra24 parallel track (applied AI engineer)

| Item | State |
|------|-------|
| pgvector RAG + eval | Built locally |
| Network Readiness Agent | Built locally |
| `/applied-ai` hub | Built locally |
| Eval CLI | Fixed (server-only shim + sources bug) |
| Eval green 6/6 | **Blocked** — DCC org + embedding sync in Supabase |

Docs: `infra24/docs/APPLIED_AI_ENGINEER_EVIDENCE.md`

---

## Recruiter lanes (waiting — do not duplicate)

- Accelerant / Tausif — packet sent  
- Silverxis / Payal — follow-up scheduled Jul 13  
- Tekfortune / Ankur — follow-up scheduled Jul 13  
- Apetan / Vikas — follow-up scheduled Jul 13  

---

## Approval-gated (Cursor may prepare, not execute)

- git commit / push  
- deploy moises.tech or infra24  
- publish indexable pages beyond verifier approval  
- submit applications  
- send Gmail  

---

## Next Cursor tasks (suggested)

1. Fill `VERIFY:` fields in productionAiAutomationPack from Moises input  
2. Infra24: seed DCC org + sync embeddings → eval green  
3. moises: export technology CV PDF after resume review  
4. Deepgram/Endor: flip `listed/indexable` after listing reverification  
5. CoreStory: unblock after Infra24 verified-live gate  

---

*Generated to align with Application Identity Triage Agent v1 approved batch.*
