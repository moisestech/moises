# Moonlighter landing — image generation prompts

Use these prompts to replace the designed placeholders on `/workshop/moonlighter-ai-3d-printing`.

When an asset is ready, set `src` on the matching entry in `src/content/workshops/moonlighter-ai-3d-printing/landing-media.ts`.

## Shared suffix

Append to every prompt:

> Moonlighter FabLab maker-lab documentary style, charcoal equipment and surfaces, restrained coral accent #FF6B5A, warm daylight, generous negative space for UI overlays, precise but human, no visible brand logos, no fake interface text, no watermark, no science-fiction holograms

## Prompts by ID

### hero-pipeline · 16:9

A single sculptural subject shown across four stages left to right: clean reference photograph, AI-generated object concept on a neutral field, untextured gray 3D mesh, and a small coral PLA print with visible layer lines. Connected as one transformation, wide 16:9, calm negative space. [SUFFIX]

### outcome-reference · 1:1

Small everyday object photographed three-quarter view, complete silhouette, simple white/gray background, soft directional light, square 1:1. [SUFFIX]

### outcome-image · 1:1

Friendly printable miniature concept, thick solid volumes, clear silhouette, three-quarter view, neutral background, no thin wires or floating parts, square 1:1. [SUFFIX]

### outcome-mesh · 1:1

Untextured gray clay 3D mesh of a compact sculpture on a museum-like neutral field, orbit-ready still, square 1:1. [SUFFIX]

### outcome-print · 1:1

Small finished FDM sculpture in matte coral PLA with realistic layer lines, soft studio light, square 1:1. [SUFFIX]

### tier-mini · 4:3

Matte white PLA miniature about 55 mm tall beside a metal ruler and adult hand for scale, realistic layer lines, 4:3. [SUFFIX]

### tier-sculpture · 4:3

Matte coral PLA sculpture about 110 mm tall on a labeled pickup tray, proportionally identical geometry to a miniature twin, 4:3. [SUFFIX]

### tools-flexible · 16:9

Overhead maker bench: laptop with neutral gray 3D orbit (no readable UI), black white and coral PLA swatches, calipers, soft daylight, 16:9. [SUFFIX]

### tools-filament · 4:3

Black white and coral PLA filament spools with calipers on a charcoal maker table, soft daylight, 4:3. [SUFFIX]

### included-kit · 4:3

Editorial still life: provided desktop computer, three PLA spools black white coral, finished miniature, printed folder tabs for reference prompts mesh slice, 4:3. [SUFFIX]

### included-files · 4:3

Tidy project folder with labeled tabs for reference prompts mesh slice beside a finished miniature, soft daylight, 4:3. [SUFFIX]

### instructor · 4:3

Documentary workshop atmosphere: instructor hands gesturing toward a projection of a mesh and a small PLA print, participants at computers in soft focus, no identifiable faces required, 4:3. [SUFFIX]

### schedule-room · 16:9

Wide documentary FabLab classroom with eight computer stations, projection screen, supervised four-printer station in background, participants actively making, 16:9. [SUFFIX]

### schedule-printers · 16:9

Four desktop 3D printers in a supervised FabLab station, black white and coral filament, warm daylight, 16:9. [SUFFIX]

### access-welcome · 4:3

Calm welcome table with name cards, simple wayfinding card, accessibility note, coral accent ribbon, soft daylight, inclusive and uncluttered, 4:3. [SUFFIX]

## Current placeholder assets

Designed stills ship from `public/workshops/moonlighter-ai-3d-printing/*.webp` and are referenced via `src` in `landing-media.ts`. Replace those files (or point `src` to Cloudinary) when final photography arrives.

## Export tips

- Prefer PNG or WebP
- Hero / schedule: 2400×1350 (16:9)
- Tier / included / instructor / access: 1600×1200 (4:3)
- Outcome tiles: 1200×1200 (1:1)
- Keep faces optional; hands and process are enough
