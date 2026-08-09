# Digilab / Oolite Arts media workflow

Handoff doc for updating Digital Lab photography, class cards, offerings, and (next) 360 / video.

Cursor rule (auto-loads on related files): `.cursor/rules/digilab-oolite-media.mdc`

## Why this exists

Cloudinary URLs change (version hashes, folders, re-uploads). Pages must not depend on raw URLs. The registry maps **stable ids → current URL + where used**.

## Files

| File | Job |
|---|---|
| `src/content/oolite-arts/media.ts` | Stable media registry |
| `src/content/oolite-arts/case-study.ts` | Content model for `/oolite-arts` |
| `src/components/case-studies/oolite/OoliteCaseStudy.tsx` | Case study UI (parallax hero, gallery, classes, offerings) |
| `src/content/institutions/artistInfrastructure.ts` | `/artist-infrastructure` proof gallery |
| `src/content/evidence/projects.ts` | Re-exports `OOLITE_DIGITAL_LAB_IMAGE` from registry |

## Prompt to paste in a new chat

```
Continue Digilab / Oolite Arts media work.

Read:
- .cursor/rules/digilab-oolite-media.mdc
- docs/oolite-digilab-media-workflow.md
- src/content/oolite-arts/media.ts

Rules:
- Update media via stable ids in media.ts (never scatter raw Cloudinary URLs)
- Keep usedOn accurate when wiring pages
- Credits: Fabiola (Director of Digital Lab) first, then Moises (Technical Director of Digital)
- Class cards = banners + documentary stills
- preview-* offerings = developed at Oolite, now offered independently

Next goals:
1) Optimize /oolite-arts and /artist-infrastructure photography layout
2) Plan 360 viewer component using digilab.360-* stills (then equirectangular/video)
3) Add any new Cloudinary links I paste into the registry with names + usedOn
```

## Categories in the registry

- `space` — room, entrance, 360 stills
- `workshop-banner` — class card covers
- `documentary` — teaching / workshop in progress
- `service` — independent offerings (preview cards)
- `headshot` — portraits (`portrait.moises`, `portrait.fabiola`)
- *(planned)* `video`, `pano` — process video + equirectangular masters

## Roadmap

### Phase A — stills (current)

- [x] Registry with stable ids + `usedOn`
- [x] Case study hero parallax, lab gallery, classes, offerings
- [x] Artist-infrastructure proof gallery
- [x] Portraits for credits
- [ ] Layout / performance polish on `/oolite-arts` and `/artist-infrastructure`
- [ ] Replace remaining inline Digilab URLs sitewide (opportunity banners, etc.) with registry imports

### Phase B — 360

- [ ] Confirm which `digilab.360-*` stills are true equirectangular vs flat documentation
- [ ] Add `pano.*` registry entries for masters (separate from flat stills if needed)
- [ ] Build `/oolite-arts` 360 viewer component (replace or augment hover parallax)
- [ ] Poster frame must reference an existing still id

### Phase C — video

- [ ] Add `video` category to registry
- [ ] Workshop / resin process clips with poster still ids
- [ ] Prefer short muted loops in case study sections; full clips on demand

## Credit line (canonical)

> Developed with Director of Digital Lab Fabiola Larios; Moises Sanabria as Technical Director of Digital; with Oolite staff, participating artists, and institutional partners.

## When URLs change

1. Find asset by `cloudinaryId` or filename stem in `media.ts`
2. Replace `src` (and version in the URL)
3. Leave `id` and `usedOn` unless the page mapping actually changed
4. Grep for the old URL to catch stragglers outside the registry
