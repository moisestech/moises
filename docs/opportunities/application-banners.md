# Opportunity application banners

Canonical chrome for recruiting dossiers: a **full-bleed strip under the recruiting header** that stays legible on every viewport.

Implementation: [`OpportunityApplicationBanner.tsx`](../../src/components/opportunities/OpportunityApplicationBanner.tsx)  
Registry: [`applicationBanners.ts`](../../src/content/evidence/applicationBanners.ts)  
Type: `ApplicationBanner` in [`types.ts`](../../src/content/opportunities/types.ts)

---

## Problem (audit, 2026-08-10)

| Page | Asset | Measured | Old behavior | Result |
|------|-------|----------|--------------|--------|
| [Morley Art Director](https://www.moises.tech/opportunities/morley-art-director-florida) | `art-director-morley-banner_b5ridm.png` | **2172×724 (3:1)** | `object-cover` + ultra-wide frame + `max-h` | Strip became ~4–6:1; type and desk detail **unreadable** |
| Ogilvy / DAVID Creative Editor | Same family **3:1** creative banners | 2172×724 | Same cover crop | Same crush risk on desktop |
| CVS Senior GenAI | `senior-genai-engineer-banner_iljp58.png` | **1916×821 (~2.33)** | Same | Better than 3:1, still crushed when `max-h` forces a wider effective ratio |

Root cause: treating every asset as a cinematic **cover** crop. When the viewport frame is wider than the art’s intrinsic ratio, cover either crops critical content or (with height caps) flattens the strip until nothing reads.

---

## Solution: height-locked `contain-blur`

**Default for all opportunities.**

1. **Shared fixed-height strip** (same chrome everywhere)  
   `160 → 200 → 248 → 288 → 312px` across breakpoints (`APPLICATION_BANNER_FRAME`).
2. **Sharp layer fills the strip’s full height**  
   Aspect box from `intrinsicRatio` (width ÷ height). Never force a wider cover crop.
3. **Background = same image, `object-cover` + blur + light veil**  
   Fills the side bands when the viewport is wider than the art.
4. **Declare width** via `intrinsicRatio` after upload  
   Creative-agency family: **`3`**. GenAI / strategy family: **`≈2.334`**.

```text
┌──────────────────────── full viewport width ────────────────────────┐
│  blurred cover fill  │   sharp art (full height)   │  blurred fill  │
│                      │   aspect = intrinsicRatio   │                │
└──────────────────────┴─────────────────────────────┴────────────────┘
         ↑ fixed strip height (desktop ~288–312px)
```

Optional escape hatch: `presentation: 'cover'` + `aspectClass` — **only** for assets designed to survive edge crop (rare).

---

## How to add a banner

1. Export / generate at a known ratio (prefer **3:1** for creative dossiers, **~21:9 / 2.33** for gen-AI).
2. Upload to Cloudinary under `jobs/banners/…`.
3. Measure width÷height (PNG IHDR or Cloudinary console).
4. Register with the helper:

```ts
export const exampleBanner = defineApplicationBanner({
  src: `${cdn}/v…/jobs/banners/example.png`,
  alt: 'Employer — Role application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO, // or GENAI_BANNER_RATIO / measured
});
```

5. Attach on the opportunity: `applicationBanner: exampleBanner`.
6. Smoke-test desktop (≥1280px) and mobile: art must stay **fully readable**; sides may blur.

### Do / don’t

| Do | Don’t |
|----|--------|
| Set `intrinsicRatio` from real pixels | Reuse `aspectClass` for contain-blur frames |
| Keep critical type in the vertical center of the art | Rely on `object-cover object-top` for text-heavy banners |
| Use one shared strip height | Per-role ultra-wide aspect hacks that crush art |
| Prefer `defineApplicationBanner(...)` | Inline banners without a ratio |

---

## Generating new art

Update prompts so “safe crop” matches **contain-blur**, not cover:

- Design for the **full frame** to be visible (no important content only in outer 10%).
- Prefer **3:1 (≈2172×724)** for creative-agency dossiers.
- See also [`docs/work/creative-tech-banner-prompt.md`](../work/creative-tech-banner-prompt.md) — treat cover-safe notes there as legacy for `presentation: 'cover'` only.

---

## Checklist before sending a dossier

- [ ] Banner registered with `intrinsicRatio`
- [ ] Desktop: sharp art fills strip height; type/detail readable
- [ ] Mobile: strip still readable (may be nearly full-bleed if ratios match)
- [ ] Dark mode: blur + veil still separate sharp art from page chrome
- [ ] Alt text describes the application context (not empty, unless decorative-only)
