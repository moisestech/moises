# File manifest

## Use these on DCC (`dcc-content/`)

| File | Role |
| --- | --- |
| `shared.ts` | Calendly, email, availability, family nav, pilot pricing |
| `media.ts` | Inlined Cloudinary URLs (no Digilab registry required) |
| `hub.ts` | `/institutions` copy — DCC voice, outbound art/case-study links |
| `artistInfrastructure.ts` | `/artist-infrastructure` copy — DCC voice |
| `artistInfrastructureMedia.ts` | Banner + layer stills |
| `workshopsOfferings.ts` | Three bookable modules + hosted rates (link from workshops, not as `/institutions` pricing) |

These files still import moises.tech paths (`@/content/oolite-arts/media`, `@/content/evidence/projects`, etc.). On DCC, replace those imports with `media.ts` constants. The Cursor prompts tell the agent to do that.

## Verbatim moises.tech source (`source/`)

### Pages
- `app/institutions-page.tsx`
- `app/artist-infrastructure-page.tsx`

### Content (original, Moises-voiced — do not ship as-is)
- `content/hub.ts`
- `content/artistInfrastructure.ts`
- `content/artistInfrastructureMedia.ts`
- `content/shared.ts`
- `content/workshopsOfferings.ts`

### Components (IA + interaction — restyle, don’t paste the light skin)
- `InstitutionsHubClient.tsx`
- `ArtistInfrastructureClient.tsx`
- `InstitutionalUi.tsx` (accent tokens, family nav, CTAs, reveal)
- `OutreachComponents.tsx` (hero, triad, curriculum cards, proof, CTA)
- `HeroWorkshopCarousel.tsx`
- `InstitutionsHero.tsx`
- `CompoundingSystem.tsx`
- `PracticeLaneGrid.tsx`
- `FlagshipCaseStudies.tsx`
- `IcaSystemsDiagram.tsx`
- `EngagementModes.tsx`
- `InstitutionArchive.tsx`
- `InstitutionsFinalCTA.tsx`

### Shared deps (stub or simplify on DCC)
- `OpportunityApplicationBanner.tsx` — full-bleed banner; DCC can use a simpler Image
- `AnimatedLogoBand.tsx` — tool marquee
- `OpportunityAudienceKeywords.tsx`
- `OpportunityProfileImage.tsx` — optional; `next/image` is enough
- `analytics.ts` — no-op or existing DCC analytics
- `art-of-ai-agents.ts` — Locust hero + n8n logo
- `quickbooksAutomation.ts` — workshop media
- `utils.ts` — `cn()` (Infra24 already has this)

## Live URLs to match

- https://moises.tech/institutions
- https://moises.tech/artist-infrastructure
