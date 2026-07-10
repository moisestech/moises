# Born Into the Machine — Credibility Sprint Change Report

**Date:** July 10, 2026  
**Scope:** `/research/born-into-the-machine`

## Summary

Reframed the page around **Plausibility Studies**, **Infrastructure**, and **Embodied authorship**. Removed false assets (Broken Acceleration as studio/plausibility stand-in), added Studio 43 360 as primary Ch.03 experience, seeded plausibility audits for all 8 case studies, rebuilt pipeline trace with Baby AGI default, upgraded public infrastructure chapter, deferred hero video and audio UI.

---

## Files created

| File | Purpose |
|------|---------|
| `src/content/born-into-the-machine/bitm-types.ts` | Shared types: asset status, plausibility, labor, credits |
| `src/content/born-into-the-machine/bitm-methodology.ts` | Plausibility Studies definitions |
| `src/content/born-into-the-machine/bitm-pipeline-traces.ts` | Baby AGI pipeline node copy + thumbnails |
| `src/content/born-into-the-machine/bitm-institutions.ts` | Institution banner + diagram dependencies |
| `src/content/born-into-the-machine/bitm-public-documentation.ts` | Carousel slide content |
| `src/components/born-into-the-machine/BitmAssetPlaceholder.tsx` | Intentional missing-documentation UI |
| `src/components/born-into-the-machine/BitmStudio360Experience.tsx` | Momento360 Studio 43 primary embed |
| `src/components/born-into-the-machine/BitmPlausibilityBlock.tsx` | Compact plausibility audit UI |
| `src/components/born-into-the-machine/BitmCredits.tsx` | Project-level credits |
| `src/components/born-into-the-machine/BitmArchivePresentation.tsx` | AI Everydays archive variant |
| `src/components/born-into-the-machine/BitmPhotographicSequence.tsx` | Eye Plug photographic variant |
| `src/components/born-into-the-machine/BitmPublicDocumentationCarousel.tsx` | Ch.06 program/install slides |
| `src/components/born-into-the-machine/BitmInstitutionBanner.tsx` | Institutional network strip |
| `src/components/born-into-the-machine/BitmCaseStudyCardImage.tsx` | Card image extracted for client boundary |

## Files modified

- `src/config/born-into-the-machine-theme.ts` — media + interaction flags
- `src/content/born-into-the-machine/bitm-assets.ts` — Studio 43 embed, real studio assets, removed false URLs
- `src/content/born-into-the-machine/bitm-page.ts` — hero copy, methodology, Ch.6 intro, CTAs
- `src/content/born-into-the-machine/bitm-case-studies.ts` — plausibility, presentation types, credits, stage fixes
- `src/content/born-into-the-machine/bitm-labor.ts` — status-labeled labor fields
- `src/components/born-into-the-machine/BitmContext.tsx` — mobile, trace id, interaction intensity
- `src/components/born-into-the-machine/BitmHeroBoot.tsx` — new hierarchy, conditional cursor lens
- `src/components/born-into-the-machine/BitmStudioHotspots.tsx` — 360 primary
- `src/components/born-into-the-machine/BitmPipelineDiagram.tsx` — scroll-scrub, Baby AGI trace, plausibility emphasis
- `src/components/born-into-the-machine/BitmCaseStudyCard.tsx` — plausibility, variants, credits
- `src/components/born-into-the-machine/BitmStageSlider.tsx` — placeholders, mobile swipe buttons
- `src/components/born-into-the-machine/BitmPublicInfrastructure.tsx` — carousel + banner
- `src/components/born-into-the-machine/BitmStudioInfrastructureDiagram.tsx` — activeId fix, mobile accordion
- `src/components/born-into-the-machine/BitmPageClient.tsx` — reduced logs/chrome, audio hidden via flag
- `src/components/born-into-the-machine/BitmAudioExperience.tsx` — hidden when `audioExperienceStatus: planned`
- `src/components/born-into-the-machine/BitmLaborReveal.tsx` — status labels
- `src/components/born-into-the-machine/BitmShowLaborToggle.tsx` — tooltip
- `src/components/born-into-the-machine/BitmAuthorOperator.tsx` — Author / Operator / Collaborators

---

## Acceptance criteria

- [x] New hero subtitle + secondary metadata descriptor
- [x] Zero Broken Acceleration images on BITM page
- [x] Ch.03: Studio 43 360 primary; Bakehouse named; hotspot index cards
- [x] Plausibility Studies introduced as working methodology
- [x] Every case study has plausibility audit
- [x] No invented factual values (budgets/hours marked needed/partial)
- [x] Baby AGI default pipeline trace; plausibility node emphasized
- [x] AI Everydays archive / Eye Plug photographic variants
- [x] Ch.06 new copy; diagram bug fixed; carousel + institution banner
- [x] Show the Labor expanded with status labels
- [x] Audio hidden; hero video deferred with manifest comment in assets
- [x] Mobile editorial adaptation (accordion, swipe sliders, reduced chrome)
- [x] a11y: keyboard focus on controls, alt text, reduced motion respected

---

## Assets still `needed`

1. Flat Studio 43 panorama photo (image-positioned hotspots)
2. Hotspot close-ups: resin printer, GPU bench, cables, maquette
3. Hero video loop (10–18s, Baby AGI assemblage states)
4. Studio-machine audio + transcript
5. Portrait depth/mask/pose from Studio 43 shoot
6. Collaborative install photo (crew/rigging/cables)
7. Per-case plausibility stage photos (Baby AGI, Smart Shoppers, Simulation Faith, Privacy, Digital Divinities, Eye Plug staging/print/circulation)
8. Workshop documentation slide
9. Case study budgets and exact hours

---

## Copy / facts pending Moises verification

- Baby AGI / Smart Shoppers / Simulation Faith / Privacy — exact budgets and hours
- Rejected/simplified fabrication claims per work
- Collaborator names and roles (Fabiola Larios, John Yuyi — marked partial)
- Oolite relationship wording
- Institution relationship tags (host vs exhibition vs education vs funder)
- Approval/dependency claims for venues
- Superblue, MOMus, Locust, EdgeZones, Knight, Transmediale, HKW — captions are generic placeholders pending factual detail

---

## Next media sprint checklist

1. Shoot flat Studio 43 + hotspot close-ups
2. Produce hero loop (Baby AGI states)
3. Record studio-machine ambience + write transcript
4. Process portrait depth/mask/pose assets
5. Document collaborative installs (crew photos)
6. Fill plausibility stage gaps per case study
7. Enable pipeline traces for Doomscrolling + Digital Divinities
8. Set `heroVideoStatus` and `audioExperienceStatus` to `ready` when assets land

---

## Build

`npm run build` — **passed** (July 10, 2026)
