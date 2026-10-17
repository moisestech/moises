# Branch sync report — Founder Attention OS

Written 2026-10-17. This is a report only. No merge and no rebase was performed.

## Heads

- Workshop branch: `cursor/ai-daily-operator` at `14bfb3c` (`feat: simplify Founder Attention OS public page`)
- `origin/main` at `1076a9a` (`Merge pull request #65 from moisestech/feat/image-anchor`)
- Merge base: `5bc85b1`

Counts from `git rev-list --left-right --count origin/main...HEAD`:

- 91 commits on the workshop branch that are not on `main`
- 63 commits on `main` that are not on the workshop branch

`main` has moved since the earlier 84 / 61 note. These counts are the ones to use.

## Files changed on both sides

One file:

- `src/components/workshops/WorkshopsIndex.tsx`

The branch adds a “separate program” band that links to Build Your AI Daily Operator. `main` adds the institutional family nav, sticky classes, and shorter top padding on the same page. A merge should keep both: the nav from `main`, and the operator band from this branch.

## Routes and catalog

No dedicated operator route exists on `main`. These files changed only on the workshop branch:

- `src/app/(main)/workshop/build-your-ai-daily-operator/page.tsx`
- `src/app/(main)/workshop/build-your-ai-daily-operator/level-i/page.tsx`
- `src/content/workshops/catalog.ts`
- `src/content/workshops/catalog-covers.ts`

`main` also edits `src/components/workshops/WorkshopCatalogLandingClient.tsx`. That file was not edited on this branch, so it should come in clean.

## Dependencies

`package.json` changed on this branch only: a `test:level-i` script. `origin/main` did not change `package.json` or `pnpm-lock.yaml` since the merge base. There is no dependency conflict in this comparison.

## Recommendation

Merge `origin/main` into `cursor/ai-daily-operator`. Do not rebase. The branch is already published, and a rebase would rewrite about 91 commits for a one-file overlap.

Do not cut a fresh branch and transplant the workshop commits. The history is the course record, and the integration risk is the workshops index, not a tangled route rewrite.

When that merge happens, resolve `WorkshopsIndex.tsx` by keeping the institutional nav and the Daily Operator band. Then run the production build and `pnpm test:level-i`. Stop there. Do not merge the workshop branch into `main` in the same step.
