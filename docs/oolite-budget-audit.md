# Oolite Digital Arts Lab — Budget Data Audit

**Date:** Feb 20, 2025

## Current Data Structure

### Location
- **Primary:** `src/components/page/OoliteDigitalBudgetPage.tsx` (inline `budgetData`)
- **Related:** `src/components/page/OoliteRoadmapPage.tsx` (monthly breakdown by quarter)
- **Translations:** `src/translations/oolite/en.ts`, `es.ts`, etc.

### Current Budget Schema

```
totalRequest: number
categories: [
  {
    name: string
    amount: number
    percentage: number
    icon: LucideIcon
    color: string
    description: string
    breakdown: [
      {
        title: string
        amount: number
        description: string
        details: string[]  // bullet points
      }
    ]
  }
]
```

### Current Totals
- **Total request:** $80,000
- **Phase-0 Room Refresh:** $12,000 (15%)
- **Phase-1 Core Workstations:** $32,000 (40%)
- **Phase-2 XR / Imaging / Prototyping:** $20,000 (25%)
- **Phase-3 Presentation & Streaming:** $8,000 (10%)
- **Contingency / Growth Buffer:** $8,000 (10%)

---

## Missing Fields for Reporting

Typical grant/funder reporting expects:

| Field | Purpose | Current |
|-------|---------|---------|
| `phaseId` / `phaseKey` | Link to roadmap timeline | ❌ |
| `plannedMonth` / `plannedQuarter` | When item is scheduled | ❌ |
| `vendor` / `supplier` | Who to purchase from | ❌ |
| `status` | planned | ordered | received | installed | ❌ |
| `actualSpent` | Track spend vs budget | ❌ |
| `invoiceRef` / `receiptRef` | Document reference | ❌ |
| `notes` | Ad-hoc notes | ❌ |

---

## Roadmap Alignment

The roadmap (`OoliteRoadmapPage`) has:
- **Q1 (Aug–Oct):** Foundation — $25K + $20K + $15K by month
- **Q2 (Nov–Jan):** Launch — $10K + $8K + $12K
- **Q3 (Feb–Apr):** Growth — $15K + $12K + $10K
- **Q4 (May–Jul):** Optimization — $12K + $8K + $10K

Budget phases map roughly to:
- **Phase-0, Phase-1** → Q1 (Foundation)
- **Phase-2** → Q2–Q3
- **Phase-3** → Q3–Q4
- **Contingency** → As needed

---

## Questions for You

1. **Reporting audience:** Who will use the reports? (Funder, internal, board?)
2. **Status tracking:** Do you need to track ordered/received/installed per line item?
3. **Actual vs budget:** Will you track actual spend, or is this proposal-only?
4. **Vendor info:** Do you want vendor/supplier names stored (even if not public)?
5. **Timeline linkage:** Should each line item have a `plannedMonth` or `plannedQuarter`?
6. **Data source:** Should budget data live in a shared constant (e.g. `src/constants/oolite-budget.ts`) so both the budget page and any reporting can use it?

---

## Recommended Next Steps

1. ~~Extract `budgetData` to `src/constants/oolite-budget.ts`~~ ✅ Done
2. ~~Add optional reporting fields: `phaseKey`, `plannedQuarter`, `status`, `vendor`, `notes`~~ ✅ Done
3. Keep backward compatibility — existing UI uses current fields; new fields are additive ✅
4. Build a simple reporting view (e.g. table export or print view) if needed

---

## Completed (Feb 20, 2025)

- **Extracted** budget to `src/constants/oolite-budget.ts`
- **Added** reporting fields: `phaseKey`, `plannedQuarter`, `plannedMonth` on all line items
- **Added** optional fields: `vendor`, `status`, `actualSpent`, `invoiceRef`, `notes`
- **Added** `BudgetItemStatus` type: `planned | ordered | received | installed | cancelled`
- **OoliteDigitalBudgetPage** now imports from `OOLITE_BUDGET`

### Internal Executive Reporting (Feb 20, 2025)

- **Audience:** Internal executive leadership
- **Budget vs Actual** summary: Total Budget, Actual Spent, Remaining, % Spent
- **Category filter toggle:** View All or filter by phase (Room Refresh, Core Workstations, etc.)
- **Budget vs Actual bar chart** by category
- **Pie chart** respects category filter
- **Line item cards** show: status badge, planned month/quarter, vendor, actual spend (when set)
- **First spend report:** October 2025 (project started late Sept)
- **plannedMonth** added to all items (Sep 2025 through Jul 2026)
- **Table/print/CSV export:** Lower priority — Airtable used for that
