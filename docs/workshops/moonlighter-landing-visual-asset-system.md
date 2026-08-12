# Moonlighter AI-Assisted 3D Printing

## Landing-page visual asset, volumetric image, and icon system

**Version:** 1.0  
**Route:** `/workshop/moonlighter-ai-3d-printing`  
**Companion document:** `Moonlighter_AI_Assisted_3D_Printing_Workshop_Spec_v1.md`  
**Asset registry:** `landing-media.ts`  
**Asset destination:** `public/workshops/moonlighter-ai-3d-printing/`  
**Status:** Production-ready art direction with labeled Moonlighter placeholders

---

## 1. Creative direction: Materialized Interface

The landing page should feel like the digital workflow has acquired weight, depth, and a physical presence. Images are not passive rectangles. Selected objects cross their own image boundary, cast shadows onto the apparent page surface, pass through translucent mesh membranes, or appear to move from screen-space into printed matter.

The tone is:

- Friendly and inviting, never childish.
- Premium consumer-technology launch imagery without copying a specific company, logo, product, or trade dress.
- Elegant and spacious, with one strong focal action per image.
- Technically credible enough for a fabrication workshop.
- Warm and human rather than metallic, neon, or sci-fi.
- Cohesive across CGI, photography, and hybrid composites.

### Core visual sentence

> A friendly object moves from flat image to volumetric mesh to physical print, occasionally stepping outside the visual frame to meet the participant.

### Working anchor subject: the Moonlet

Use one provisional print-safe subject to unify the hero, pipeline, and tier images until Moonlighter provides official imagery or a mascot direction.

**Moonlet form:** a compact, friendly moon-creature/object hybrid; one rounded bean-shaped body; two short ear-like or antenna-like forms fused into the main mass; two shallow circular eye recesses; broad weighted feet fused into an integrated oval base; no fingers, no separate accessories, no thin limbs, no floating parts; clean silhouette; approximately 60 mm tall in the default version.

The Moonlet is a working visual device, not a proposed Moonlighter logo. Do not place it in the header, turn it into a brand mark, or imply that it is an official venue mascot.

### Continuity rule

- Use the Moonlet in `hero-pipeline`, all four `outcome-*` assets, `tier-mini`, and `tier-sculpture`.
- Use different fabrication examples in the method, included, instructor, and schedule sections, preserving the curriculum decision that module examples vary by lesson.
- Keep the Moonlet silhouette stable across its seven appearances. Its surface state changes; its anatomy does not.

---

## 2. Asset modes and rhythm

The page should not look like fifteen variations of the same AI render. Use three clearly differentiated modes.

| Mode | Character | Assets |
| --- | --- | --- |
| **Designed volumetric** | Purpose-built CGI, abstracted geometry, page-aware composition, smooth gradient atmosphere | `outcome-image`, `outcome-mesh`, `included-files` |
| **Photoreal documentary/product** | Real camera logic, believable workshop surfaces, slight imperfection, actual PLA texture and human scale | `outcome-reference`, `outcome-print`, `tier-mini`, `tier-sculpture`, `tools-filament`, `instructor`, `schedule-room`, `schedule-printers` |
| **Hybrid physical + digital** | Photographic base with one physically plausible CGI mesh/gradient intervention | `hero-pipeline`, `tools-flexible`, `included-kit`, `access-welcome` |

### Page rhythm

1. **Hero:** strong hybrid spectacle.
2. **Outcome:** alternating factual photo and designed transformation.
3. **Tiers:** grounded physical photography.
4. **Method/Included:** one hybrid moment, one material photo, one kit photo, one designed file object.
5. **Instructor/Schedule:** documentary credibility.
6. **Access:** one subtle, friendly hybrid closing gesture.

This distribution reserves the most expressive CGI for the workflow itself and uses photography to prove that the workshop is physical, social, and operationally real.

---

## 3. Color and light system

### Base palette

| Name | Value | Use in imagery |
| --- | --- | --- |
| Charcoal | `#1A1A1A` | Deep background, black PLA, technical surfaces |
| Paper | `#FFFFFF` | Light fields, diffusion cards, white PLA |
| Warm ground | `#F7F6F4` | Editorial photo backgrounds and page-surface illusion |
| Coral | `#FF6B5A` | Primary glow, coral PLA, focal mesh edge, one object per frame |
| Soft gray | `#E8E8E8` | Clay mesh, hairlines, neutral equipment |
| Digital blue | `#277DA8` | Secondary interior mesh light only; never compete with coral |
| Controlled amber | `#D88A24` | Tiny process indicator or warm reflected light |
| Verified green | `#347A52` | Tiny completion cue; never a dominant scenic color |

### Gradient recipes

#### G1 — Coral bloom

`#FF6B5A` → `#FF927F` → transparent warm white

Use as a soft radial light behind a subject, never as a full rainbow background. The brightest area occupies no more than 20–30% of the canvas.

#### G2 — Mesh spectrum

`#277DA8` → muted aqua `#78C5CF` → coral `#FF6B5A`

Use inside translucent mesh surfaces or edge lighting. Keep most of the object gray/frosted so the gradient feels like information passing through volume.

#### G3 — Charcoal eclipse

`#1A1A1A` → `#2A2422` → `#3A2E2A`

Use in the hero and charcoal tiles to create depth without visible banding or a theatrical spotlight.

#### G4 — Frosted paper

`#FFFFFF` → `#F7F6F4` → `#E8E8E8`

Use for designed light scenes and translucent page-plane objects.

### Lighting rules

- One large, soft key light as if from a north-facing studio window.
- Fine coral rim light only on the principal transformation object.
- Soft contact shadows prove scale and prevent CGI objects from floating.
- Highlights should be broad and matte, not chrome or liquid-metal.
- Volumetric light is a subtle haze around mesh transitions, not visible laser beams.
- Avoid intense bloom, neon edge lighting, cyberpunk blue/pink splits, or glossy black luxury-ad clichés.

---

## 4. Material language

Each material communicates a stage of the workflow.

| Material | Meaning | Surface treatment |
| --- | --- | --- |
| Warm paper / seamless photo sweep | Reference, learning, access | Slight fiber or studio sweep texture |
| Frosted acrylic plane | Interface boundary | 10–20% translucency, soft edge, realistic refraction |
| Gray clay | Untextured mesh | Fine matte surface, visible topology only where useful |
| Coral PLA | Chosen physical output | Matte polymer, fine horizontal layer lines, tiny real imperfections |
| Black PLA | Technical neutral | Soft charcoal, layer lines visible in raking light |
| White PLA | Scale and form | Warm white, never overexposed |
| Volumetric mesh membrane | Digital transformation | Sparse nodes, elegant quad/tri topology, blue-to-coral energy moving through it |
| Brushed dark work surface | Fabrication context | Subtle grain, no luxury automotive reflections |

### Mesh design rules

- Mesh density follows curvature: broader polygons on flat zones, finer polygons around facial/edge features.
- Use a mix of wireframe and softly filled translucent cells.
- Nodes are small and precise, not glowing particles.
- Do not use a generic globe network, blockchain web, neural brain, or holographic HUD.
- The mesh should describe a real printable form and help explain volume.

---

## 5. Fourth-wall pattern library

Use these patterns selectively. No image should use more than one primary pattern.

### F1 — Frame crossing

Part of the subject extends 4–8% beyond an implied rectangular image plane and casts a shadow onto the warm page surface. Best for hero and `outcome-image`.

### F2 — Mesh handoff

A flat image plane curls or tessellates into a mesh that becomes a physical object. Best for hero and `tools-flexible`.

### F3 — Page-plane contact

The subject sits on an apparent white or charcoal page plane; its shadow falls outside the inner image area. Best for `included-files` and `access-welcome`.

### F4 — Portal slice

One thin vertical translucent plane intersects the subject: image on one side, mesh in the center, PLA on the other. Best for pipeline transformations.

### F5 — Viewer offering

A real human hand or a print tray gently presents an object toward the camera. Best for `tier-mini`, `tier-sculpture`, or access. Use only once on the page to avoid repetition.

### F6 — Icon becomes object

A simple interface glyph extrudes subtly into a physical token or casts a real shadow. Reserve for the access closing image or a designed file still.

### Strength scale

| Level | Behavior | Use |
| --- | --- | --- |
| 0 | Conventional photo | Documentary assets |
| 1 | Shadow or gradient slightly escapes internal frame | Most hybrids |
| 2 | Subject or mesh crosses boundary | Hero, one outcome, one included asset |
| 3 | Major spatial illusion | Hero only |

---

## 6. Shared prompt building blocks

These are prompt modules, not text to display in the images.

### Designed-volumetric suffix

> Premium friendly consumer-technology launch art direction, elegant volumetric 3D render, physically plausible soft studio lighting, generous negative space, restrained coral #FF6B5A with small digital-blue #277DA8 accents, warm paper and charcoal environment, matte materials, precise contact shadows, subtle depth haze, no logos, no fake interface text, no watermark, no sci-fi holograms, no neon cyberpunk lighting, no excessive glassmorphism.

### Photoreal suffix

> Moonlighter FabLab maker-lab documentary and editorial product photography, photorealistic, warm daylight, believable scale and lens perspective, charcoal work surfaces, restrained coral #FF6B5A accents, natural material texture, small real-world imperfections, generous negative space, no identifiable logos, no fake UI text, no watermark, no sci-fi elements, no over-retouching.

### Hybrid suffix

> Photoreal maker-lab scene with one seamlessly integrated volumetric CGI intervention, premium friendly consumer-technology art direction, physically correct perspective and shadows, restrained coral #FF6B5A and digital blue #277DA8, charcoal and warm paper surfaces, generous negative space, no logos, no fake UI text, no watermark, no holographic controls, no neon sci-fi atmosphere.

### Global avoid list

> Avoid: text baked into images; misspelled labels; brand logos; Apple devices identifiable by logo; sci-fi HUDs; floating screens; hologram interfaces; robot hands; liquid chrome; rainbow gradients; purple neon; excessive lens flare; sterile all-white showroom; plastic-perfect people; extra fingers; malformed hands; impossible printer geometry; resin printers; filament entering the wrong machine location; levitating tools; thin fragile mascot parts; multiple unrelated mascots; cropped primary object.

---

## 7. Detailed prompts: 15 landing assets

### 7.1 `hero-pipeline`

**Mode:** Hybrid physical + digital  
**Aspect/export:** 16:9, 2400×1350  
**Fourth wall:** F2 Mesh handoff + Level 3 frame crossing  
**Continuity input:** Use the final `outcome-reference` image as Image 1 when generating this asset.

**Prompt**

> Use case: stylized-concept. Asset type: landing-page hero pipeline. Create one cinematic horizontal scene showing the same compact Moonlet subject traveling through four stages from left to right: a real reference photograph pinned or standing on a thin warm-paper plane; a refined coral-accented concept image; an untextured gray volumetric mesh; and a finished matte coral FDM print. Do not create four unrelated boxes. Let the paper reference gradually tessellate into an elegant translucent mesh ribbon, and let the printed figure step slightly beyond the final implied frame so its contact shadow lands on the charcoal page surface. Keep the Moonlet anatomy identical in every stage: rounded bean body, short fused ear-like forms, shallow circular eye recesses, broad feet fused into an oval base. The digital mesh carries a restrained blue-to-coral gradient internally; the real printed object shows fine horizontal PLA layer lines. Wide three-quarter camera, low but friendly viewing angle, the pipeline occupying the lower two-thirds, open charcoal negative space in the upper-left for page hierarchy. Background transitions from charcoal #1A1A1A to warm brown-black #3A2E2A with one soft coral radial glow at the upper-right. No arrows, labels, UI panels, or typography. Append the Hybrid suffix and Global avoid list.

**Crop safety:** Keep all four stages inside the central 84% width; only the final print may cross the implied internal plane.  
**QA:** One subject, exactly four readable material states, no duplicated limbs, mesh visibly becomes print, no resin cues.

---

### 7.2 `outcome-reference`

**Mode:** Photoreal product  
**Aspect/export:** 1:1, 1200×1200  
**Fourth wall:** Level 0  
**Role:** Generate this first; it becomes the continuity source for subsequent Moonlet assets.

**Prompt**

> Use case: product-mockup. Asset type: reference-quality workshop example. Photorealistic studio product photograph of one small hand-built Moonlet maquette centered on a warm light-gray seamless background. The subject is a compact moon-creature/object hybrid with one rounded bean-shaped body, two short ear-like forms fused into the body, two shallow circular eye recesses, and broad weighted feet fused into an integrated oval base. Show the complete silhouette with nothing cropped, no accessories, no thin parts, no visible text. Three-quarter front view at eye level, approximately 60 mm tall, clear separation between subject and background, soft even daylight, realistic subtle clay or matte paper-pulp texture, gentle grounding shadow. The image should look like a strong reference photograph a participant could upload for AI-to-3D conversion. Append the Photoreal suffix and Global avoid list.

**Crop safety:** 12% clear margin on all sides.  
**QA:** Full silhouette; one object; plain background; no coral yet except a tiny reflected accent if needed.

---

### 7.3 `outcome-image`

**Mode:** Designed volumetric  
**Aspect/export:** 1:1, 1200×1200  
**Fourth wall:** F1 Frame crossing, Level 2  
**Input:** Image 1 = approved `outcome-reference`, used for subject identity and silhouette.

**Prompt**

> Use case: stylized-concept. Asset type: print-friendly AI concept image. Transform the Moonlet from Image 1 into a refined, fabrication-ready character-object while preserving its exact anatomy and compact silhouette. Give the body large coherent rounded volumes, a stable integrated base, shallow recessed eyes, and one restrained coral surface zone that wraps naturally around the form. Place it in a minimal warm-paper studio with a soft coral bloom behind it. The subject appears to pass through a thin frosted square picture plane: most of the body remains inside, while one ear-like form and the front edge of the base extend slightly past the plane and cast precise soft shadows onto the outer page surface. Three-quarter view, no pose change, no thin details, no props, no scenery. Premium friendly volumetric CGI, not a toy advertisement. Append the Designed-volumetric suffix and Global avoid list.

**Crop safety:** The actual canvas boundary remains clear; only cross an implied internal frame.  
**QA:** Clear printable volumes; same Moonlet; no floating parts; one coral zone, not an all-coral blob.

---

### 7.4 `outcome-mesh`

**Mode:** Designed volumetric / technical  
**Aspect/export:** 1:1, 1200×1200  
**Fourth wall:** F4 Portal slice, Level 2  
**Input:** Image 1 = approved `outcome-image`, used for exact form.

**Prompt**

> Use case: stylized-concept. Asset type: 3D mesh orbit still. Show the exact Moonlet form from Image 1 as an untextured gray clay mesh in a centered three-quarter orbit view. The left 70% is softly filled matte gray geometry; the right 30% transitions through a thin vertical translucent portal slice into a precise visible topology wireframe. Use elegant quad-dominant topology where possible, denser around the eye recesses and ear curves, broader cells on the torso. A restrained internal gradient moves from digital blue #277DA8 at the back to coral #FF6B5A at the cut edge. Museum-neutral charcoal field, frosted circular floor plane, clean contact shadow. No software interface, axis gizmo, annotations, measurement text, or grid. Append the Designed-volumetric suffix and Global avoid list.

**Crop safety:** 15% clear margin; silhouette fully readable.  
**QA:** Same subject; topology follows geometry; gray remains dominant; no glowing particle cloud.

---

### 7.5 `outcome-print`

**Mode:** Photoreal product  
**Aspect/export:** 1:1, 1200×1200  
**Fourth wall:** Level 0–1  
**Input:** Image 1 = approved `outcome-mesh`, used for geometry.

**Prompt**

> Use case: product-mockup. Asset type: finished FDM outcome photograph. Create a photorealistic close product photo of the exact Moonlet geometry from Image 1 as a real single-color coral #FF6B5A PLA print. The object sits on a dark charcoal fabrication table with a warm white sweep behind it. Show fine horizontal FDM layer lines, a clean but not impossibly perfect surface, subtle seam evidence at the back edge, and a tiny support-removal mark beneath one ear-like form. The print is approximately 60 mm tall. Three-quarter camera at tabletop height, 70 mm product-photography lens feel, soft daylight with gentle raking light revealing layer texture, accurate contact shadow, no supports attached, no printer in frame. Append the Photoreal suffix and Global avoid list.

**Crop safety:** 12% clear margin.  
**QA:** Must look FDM, not resin or ceramic; coral color accurate; recognizable continuity.

---

### 7.6 `tier-mini`

**Mode:** Photoreal scale proof  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** F5 Viewer offering, Level 1  
**Input:** Image 1 = approved `outcome-print`, used for subject form.

**Prompt**

> Use case: photorealistic-natural. Asset type: miniature-tier scale photograph. A real adult hand gently presents the exact Moonlet from Image 1 as a warm white PLA miniature approximately 55 mm tall, resting naturally between the open palm and a charcoal tabletop. Place a simple unbranded metal caliper nearby, opened to roughly the object height, but do not show readable measurement numerals. The print has fine visible layer lines and a stable integrated base. Warm maker-lab daylight, credible skin texture and hand anatomy, shallow depth of field, editorial framing with clean negative space around the object. The hand enters from the lower edge as if offering the miniature toward the viewer; nothing crosses the outer canvas. Append the Photoreal suffix and Global avoid list.

**QA:** Natural hand; one print; believable 55 mm scale; no ruler text; white PLA not ceramic.

---

### 7.7 `tier-sculpture`

**Mode:** Photoreal production handoff  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** Level 0  
**Input:** Image 1 = approved `outcome-print`, used for subject form.

**Prompt**

> Use case: product-mockup. Asset type: sculpture-tier queued-pickup photograph. The same Moonlet geometry from Image 1 enlarged to approximately 110 mm tall as a real matte coral PLA FDM print, placed on a shallow charcoal production tray in a clean maker-lab pickup area. Beside it sits the smaller 55 mm white version as a scale twin, clearly secondary. Include a blank cream card clipped to the tray with no writing, so the website can overlay pickup information separately. Fine PLA layer lines, slightly longer vertical seam on the larger object, realistic warm daylight, three-quarter eye-level product photo, organized shelves softly out of focus. Append the Photoreal suffix and Global avoid list.

**QA:** Larger object clearly twice the visual scale; blank card; no generated labels; no luxury showroom perfection.

---

### 7.8 `tools-flexible`

**Mode:** Hybrid physical + digital  
**Aspect/export:** 16:9, 2400×1350  
**Fourth wall:** F2 Mesh handoff, Level 2  

**Prompt**

> Use case: stylized-concept. Asset type: tool-flexible method section image. Overhead photoreal maker bench with one unbranded open laptop, a blank dark-gray screen containing only a neutral clay object orbit with no controls or text, black/white/coral PLA swatches, digital calipers, a small printed test object, and a notebook turned so no writing is visible. From the laptop screen, the clay object’s edge transforms into a restrained translucent volumetric mesh ribbon that crosses the bezel, touches the physical desk, and resolves into the small real print. The CGI ribbon must match the desk perspective and cast a physically plausible soft shadow. Balanced editorial arrangement with generous empty charcoal surface, one coral accent, warm daylight. The laptop is generic and logo-free. Append the Hybrid suffix and Global avoid list.

**QA:** One laptop; no fake readable UI; mesh has physical contact; tools do not float; computer is not recognizably branded.

---

### 7.9 `tools-filament`

**Mode:** Photoreal editorial still life  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** Level 0  

**Prompt**

> Use case: product-mockup. Asset type: three-color material still. Overhead-to-three-quarter photoreal product still life of exactly three unbranded PLA filament spools—matte black, warm white, and provisional Moonlighter coral #FF6B5A—arranged on a brushed charcoal fabrication table. Add one metal caliper, three short straight filament samples, and one small neutral test cube. Use restrained warm daylight and raking light so filament winding and polymer texture are visible. Composition feels organized but genuinely used, with tiny dust and handling marks. Leave one open corner for HTML labels. No packaging, brand labels, readable measurements, or extra colors. Append the Photoreal suffix and Global avoid list.

**QA:** Exactly three spools; coral matches site accent; no resin bottles; no colorful background contamination.

---

### 7.10 `included-kit`

**Mode:** Hybrid editorial still life  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** F6 Icon becomes object, Level 1  

**Prompt**

> Use case: product-mockup. Asset type: workshop-included kit still life. A premium but believable overhead kit arrangement on warm off-white paper: generic compact computer or keyboard edge, three small PLA swatch cards in black/white/coral, a completed miniature, a blank project folder, a USB drive without branding, and four small frosted acrylic circular tokens. Each token carries only one simple embossed pictogram—computer, spool, stacked files, circular reprint arrow—with no words. One file token is subtly lifted and casts a soft physical shadow as if the interface icon has become an object. The scene remains mostly photoreal, with the frosted tokens as the only designed CGI intervention. Spacious grid, soft daylight, restrained shadows, no readable labels. Append the Hybrid suffix and Global avoid list.

**QA:** Four distinct tokens; no text; kit items look usable; no branded hardware.

---

### 7.11 `included-files`

**Mode:** Designed volumetric  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** F3 Page-plane contact + F6 Icon becomes object, Level 2  

**Prompt**

> Use case: stylized-concept. Asset type: complete-project-archive illustration. Create a sculptural stack of four oversized frosted file sheets standing on a warm paper plane. Do not render text. Differentiate the sheets through material and embedded object cues: first sheet contains a flat grayscale reference silhouette; second contains a coral concept image tile; third contains an embossed gray topology mesh; fourth contains a layered coral slicer-like contour pattern. A small finished miniature physically steps out from the final sheet and stands on the outer page plane, casting a contact shadow that crosses the implied file boundary. Add four tiny detachable corner tabs with simple pictograms only: camera frame, spark/image, mesh nodes, horizontal print layers. Premium friendly volumetric CGI, mostly white and soft gray with one coral progression and a small digital-blue mesh interior. Append the Designed-volumetric suffix and Global avoid list.

**QA:** No words; exactly four file stages; miniature emerges from last file; no fake operating-system folder icons.

---

### 7.12 `instructor`

**Mode:** Photoreal documentary  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** Level 0  

**Prompt**

> Use case: photorealistic-natural. Asset type: instructor credibility photograph. Candid hands-on workshop moment showing an instructor’s torso and hands, with the face either outside the crop or naturally soft and unidentifiable, guiding a participant through a small gray mesh orbit on a generic monitor. A real coral PLA miniature and calipers sit on the desk. The instructor points to the object silhouette rather than touching the screen; the participant controls the mouse. Warm daylight, real skin and fabric texture, charcoal work surface, shallow depth of field, calm collaborative energy, no staged handshake, no floating projection, no visible software names, no readable screen text. Append the Photoreal suffix and Global avoid list.

**QA:** Real screen, not hologram; hands anatomically credible; instructor is facilitating, participant is operating.

---

### 7.13 `schedule-room`

**Mode:** Photoreal documentary wide  
**Aspect/export:** 16:9, 2400×1350  
**Fourth wall:** Level 0  

**Prompt**

> Use case: photorealistic-natural. Asset type: six-hour workshop room context. Wide documentary photograph of a contemporary community FabLab classroom prepared for approximately eight participants, with eight practical computer workstations arranged so everyone can see a shared projection. A small supervised bank of FDM printers is visible in the background but not dominant. A diverse ages-16-plus group works at computers and handles small reference objects; faces are natural and not celebrity-like. Warm daylight, charcoal and light wood surfaces, restrained coral wayfinding accents, clear aisles, uncluttered cables, accessible circulation, credible maker-lab wear. Projection contains only large abstract image-to-mesh shapes with no readable text. Append the Photoreal suffix and Global avoid list.

**QA:** Approximately eight seats, not a lecture hall; no children; clear circulation; no resin printer or fumes.

---

### 7.14 `schedule-printers`

**Mode:** Photoreal operational close-up  
**Aspect/export:** 16:9, 2400×1350  
**Fourth wall:** Level 0  

**Prompt**

> Use case: photorealistic-natural. Asset type: supervised printer-station photograph. Wide close documentary view of a clean station with exactly four enclosed desktop FDM printers arranged in one or two practical rows, generic and logo-free, with black, warm-white, and coral PLA visible as the controlled material palette. One trained adult operator inspects the first layer on a front printer while another participant waits behind a marked boundary. Include a small queue tray with blank cards, scraper and pliers stored safely, tidy cable management, warm maker-lab daylight, realistic machine proportions and build plates. No hands inside a moving printer, no loose hair near machinery, no smoke, no resin, no readable brand names or warning text. Append the Photoreal suffix and Global avoid list.

**QA:** Exactly four printers; safe supervision; plausible filament routing; no impossible print activity.

---

### 7.15 `access-welcome`

**Mode:** Hybrid physical + digital  
**Aspect/export:** 4:3, 1600×1200  
**Fourth wall:** F3 Page-plane contact + F6 Icon becomes object, Level 1  

**Prompt**

> Use case: product-mockup. Asset type: inclusive workshop welcome image. Calm, uncluttered welcome table in a real community maker lab: blank folded name cards, one coral fabric ribbon used as wayfinding, a wide clear pathway visible beyond, a simple unbranded water bottle, a small printed miniature, and a blank accessibility information card with no writing. Add four small friendly frosted icon tokens resting physically on the table—age/participant, prerequisite cube, access pathway, pickup bag—using pictograms only. A very subtle coral-to-blue mesh strand enters from the edge of the blank access card and becomes the handle of the pickup token, suggesting digital preparation becoming physical welcome. Warm daylight, tactile materials, generous breathing room, no tokenistic posing, no people required. Append the Hybrid suffix and Global avoid list.

**QA:** No readable text; clear and calm rather than medical; access shown through spatial clarity, not disability stereotypes.

---

## 8. Icon system: MeshGlyphs

The landing page needs a deterministic vector icon set. Do not use image generation for the primary icons. Build or adapt them as SVG so line weight, color, accessibility, and responsive behavior remain controllable.

### Construction

- Base artboard: `24 × 24`.
- Stroke: `1.75 px` at 24 px; optical `2 px` is allowed on dense nodes.
- Caps and joins: round.
- Default fill: none.
- Minimum gap: `2 px` at 24 px.
- Node diameter: `2.25 px` for mesh nodes.
- Corner radius: approximately `2.5 px` on square forms.
- Avoid more than seven internal nodes or five horizontal layer lines in one icon.
- Use recognizable physical metaphors before abstract AI stars.
- Icons should remain legible at 18 px and comfortable at 24 px.

### Container treatments

| Container | Size | Default |
| --- | ---: | --- |
| Compact list icon | 36 px circle | Soft gray fill, charcoal glyph |
| Standard pillar icon | 48 px circle | Coral fill, charcoal or paper glyph according to contrast |
| Outcome tile icon | 56 px circle | Coral or paper based on tile background |
| Volumetric feature token | 64–80 px | Frosted circular 3D token derived from the SVG; decorative only |

The SVG remains the semantic icon. Any 3D token is a decorative enlargement and must use empty alt text if the SVG/text label already communicates the meaning.

### Set A — Four-stage pipeline

| ID | Name | Glyph construction | Primary use |
| --- | --- | --- | --- |
| `ml-reference` | Reference | Cropping corners around one rounded object silhouette | Outcome Reference, upload/reference |
| `ml-image` | Image | Picture frame with one restrained four-point spark at upper-right | Outcome Image, image generation |
| `ml-mesh` | Mesh | Rounded object outline with five connected topology nodes | Outcome Mesh, mesh conversion |
| `ml-print` | Print | Object silhouette above four horizontal layer lines | Outcome Print, physical output |

### Set B — Method pillars

| ID | Name | Glyph construction | Primary use |
| --- | --- | --- | --- |
| `ml-image-generate` | Generate image | Reference rectangle morphing into a second rectangle through one small spark | Image-gen pillar |
| `ml-image-to-3d` | Image to 3D | Flat square on left connected to small faceted volume on right | AI-to-3D pillar |
| `ml-mesh-check` | Mesh check | Mesh nodes inside a shield-like open contour with a check | Validation pillar |
| `ml-slice-print` | Slice and print | Three sliced contour bands descending into a build plate | Slice/print pillar |

### Set C — Included and policy

| ID | Name | Glyph construction | Primary use |
| --- | --- | --- | --- |
| `ml-computer` | Computer provided | Generic monitor with small base; no brand silhouette | Included list |
| `ml-filament` | Three-color PLA | Spool circle with one filament tail | Included list, material |
| `ml-archive` | Complete files | Four offset sheets with a small downward arrow | Included list, downloads |
| `ml-reprint` | Recovery | Circular arrow surrounding a small layered object | Reprint policy |
| `ml-pickup` | Pickup | Open-top bag or tray containing a tiny object | One-week pickup |
| `ml-shared-handoff` | Shared handoff | Two simple hands separated by a small tray; avoid handshake | Instructor/Moonlighter transfer |

### Set D — Production decisions

| ID | Name | Glyph construction | Primary use |
| --- | --- | --- | --- |
| `ml-mini` | Miniature tier | Small object beside a short vertical caliper bracket | Tier label |
| `ml-sculpture` | Sculpture tier | Larger object on low pedestal with height bracket | Tier label |
| `ml-clock` | Print time | Clock with one layered-object center | Quick/Standard/Extended |
| `ml-support-low` | Low support | Object with one short branch beneath it | Support rating |
| `ml-support-medium` | Moderate support | Object with three branches beneath it | Support rating |
| `ml-support-high` | High support | Object with five branches and a small review dot | Support rating |
| `ml-orient` | Orientation | Object above a curved rotation arrow and build plate | Slicing lesson |
| `ml-printer` | Printer station | Generic enclosed FDM frame with object on plate | Queue and schedule |

### Set E — Access and readiness

| ID | Name | Glyph construction | Primary use |
| --- | --- | --- | --- |
| `ml-age-16` | Ages 16+ | Simple participant bust with small plus; show “16+” as adjacent HTML text, not inside SVG | Access row |
| `ml-prerequisite` | Prior basics | One cube seated on a short book/base line | Basic 3D prerequisite |
| `ml-access` | Accessible setup | Wide open doorway/path icon; avoid relying only on wheelchair symbolism | Access row |
| `ml-account` | Account access | User bust beside one keyhole dot | Software access |
| `ml-ready` | Ready | Solid circle/check | Green status |
| `ml-adjust` | Adjust | Half circle with small calibration slider | Amber status |
| `ml-replace` | Replace | Broken silhouette with clean restart arrow | Coral status |

### Icon color behavior

| Context | Container | Glyph |
| --- | --- | --- |
| Charcoal tile | Coral `#FF6B5A` | Charcoal `#1A1A1A` |
| Coral tile | Paper `#FFFFFF` | Charcoal `#1A1A1A` |
| Paper section | Soft gray `#E8E8E8` | Charcoal `#1A1A1A` |
| Selected/hover | Coral bloom or paper lift | Preserve at least 3:1 non-text contrast |
| Ready | Pale green tint | `#347A52` |
| Adjust | Pale amber tint | `#D88A24` |
| Replace/blocked | Pale coral tint | `#CC5A55` |

### Volumetric token derivation

Four icons may receive decorative 3D token variants: Reference, Image, Mesh, Print.

- Frosted acrylic disc, 8–10 mm apparent thickness.
- Glyph embossed or recessed by 1–2 mm.
- Matte coral edge on Reference, Image, and Mesh; full coral token for Print.
- One soft key light and realistic contact shadow.
- Transparent-background WebP or PNG if implemented as raster.
- Do not create a separate visual language for every icon; the token derives directly from the approved SVG.

---

## 9. Image-to-interface composition rules

### Safe zones

- Keep primary subjects at least 10–12% from outer canvas edges.
- Frame-breaking occurs against an implied inner plane, not by cropping the actual asset.
- Preserve 20–30% calm area in 16:9 images for responsive crops.
- Do not bake headings, captions, arrows, badges, or status labels into images. These belong to HTML.

### Border integration

- Designed assets can use no visible image border; their internal page plane should visually align with the surrounding section background.
- Photographs retain a subtle 1 px soft-gray border on paper sections.
- On charcoal, use a white 8–10% keyline or a controlled internal vignette, not a bright frame.
- A subject that “escapes” a frame must still be clipped to the asset canvas; the page illusion comes from matching the image background to the section and layering a transparent cutout only if the implementation supports it.

### Optional two-layer implementation

For hero and `included-files`, the strongest fourth-wall effect can be built from two deliverables:

1. Background/base image with full composition.
2. Transparent subject/mesh foreground cutout positioned above the media frame.

If used, export both at identical canvas dimensions and preserve alignment. The no-JavaScript or reduced-motion state must still look complete using only the base image.

---

## 10. Motion and hover behavior

Motion should make depth legible, not turn the page into a product demo reel.

| Element | Rest | Hover/focus | Scroll entry |
| --- | --- | --- | --- |
| Designed image card | 0 elevation | Lift 3 px; shadow softens outward | Fade + 8 px lift, 400–500 ms |
| Mesh foreground | Neutral | Translate 2–4 px and rotate no more than 1° | Delayed 80 ms after card |
| Volumetric icon token | 0° | Tilt up to 4° toward pointer; no full rotation | Scale 0.97 → 1 |
| Photoreal card | Static | Lift 2 px only | Fade + 6 px lift |
| Outcome stage | Static | Coral edge light strengthens 8–12% | Stagger 60 ms per tile |
| Pipeline thumbnails | Static | Current stage gains 2 px coral ring | No independent parallax |

### Mesh shimmer

If implemented, animate a very soft gradient movement through the mesh over 8–12 seconds. Maximum contrast change: 8%. Pause when offscreen. Disable under `prefers-reduced-motion`.

### Pointer parallax

- Desktop pointer devices only.
- Maximum displacement: 6 px hero, 3 px cards.
- Do not apply to photography containing people.
- Motion is decorative and never communicates progress or state.

### Focus and accessibility

- Hover and focus states must match in information value.
- Use a visible 2 px focus ring outside the component, not only a shadow change.
- Alt text describes the educational content, not the style: e.g. “The same object shown as a reference photo, generated image, mesh, and coral FDM print.”
- Decorative mesh overlays and duplicate icon tokens use empty alt text.

---

## 11. Generation sequence for continuity

Do not generate all assets independently. Use a controlled chain.

1. Generate and approve `outcome-reference`.
2. Use it as the identity reference for `outcome-image`.
3. Use the approved concept for `outcome-mesh`.
4. Use the approved mesh/form for `outcome-print`.
5. Use the approved print as the form reference for both tier images.
6. Use the four approved outcome states as compositional references for `hero-pipeline`.
7. Generate documentary and material assets independently while maintaining the palette and photography suffix.
8. Generate the hybrid assets last so their CGI intervention can reuse the approved mesh and icon vocabulary.

### Variant policy

For each focal asset, produce two variants:

- **A — restrained:** smaller mesh intervention, more negative space.
- **B — expressive:** stronger frame crossing and gradient, same subject and composition.

Default to A for sections with dense copy. Use B only for the hero or a sparse feature area.

---

## 12. Asset-level alt text

| ID | Recommended alt text |
| --- | --- |
| `hero-pipeline` | The same compact figure progresses from reference photo to generated image, gray mesh, and coral FDM print. |
| `outcome-reference` | A clear reference photograph of a compact rounded figure on a neutral background. |
| `outcome-image` | A print-friendly generated version of the rounded figure with solid volumes and a stable base. |
| `outcome-mesh` | The figure shown as an untextured gray 3D mesh with visible topology. |
| `outcome-print` | A finished coral FDM print with visible layer lines. |
| `tier-mini` | A hand holds a small white PLA miniature beside calipers for scale. |
| `tier-sculpture` | A larger coral PLA sculpture and smaller white version wait together on a pickup tray. |
| `tools-flexible` | A laptop, mesh, filament samples, calipers, and finished print illustrate the tool-flexible workflow. |
| `tools-filament` | Black, white, and coral PLA spools arranged with calipers on a worktable. |
| `included-kit` | A computer, filament samples, miniature, project folder, and workshop policy tokens. |
| `included-files` | Reference, concept, mesh, and sliced-project files progress toward a physical miniature. |
| `instructor` | An instructor guides a participant through reviewing a 3D model at a computer. |
| `schedule-room` | Eight participants work at computers in a community fabrication classroom. |
| `schedule-printers` | Four supervised FDM printers operate at an organized printer station. |
| `access-welcome` | A calm workshop welcome table with wayfinding, name cards, and access information. |

---

## 13. QA rubric before final export

### Visual-system checks

- [ ] Coral is the dominant accent; digital blue appears only in mesh/digital transitions.
- [ ] At least seven assets remain primarily photographic.
- [ ] No more than five assets use a strong frame-breaking effect.
- [ ] Gradients are volumetric light or material transitions, not decorative rainbow backdrops.
- [ ] Charcoal and warm paper balance across the full page.
- [ ] Mesh topology is visually consistent across hero, outcome mesh, tools, files, and access.

### Fabrication credibility

- [ ] All final objects have a stable base or credible orientation.
- [ ] No thin floating parts, impossible overhangs, or accidental extra geometry.
- [ ] FDM outputs show subtle layer lines and do not look like resin, ceramic, or injection molding.
- [ ] Printer scenes show plausible enclosed FDM machines, build plates, and filament routing.
- [ ] No unsafe hands inside moving machines or loose tools near active beds.

### Human credibility

- [ ] Hands and people are anatomically natural.
- [ ] Faces are incidental, diverse, and not invented as identifiable instructors.
- [ ] The classroom looks like an active community lab, not a corporate stock-photo office.
- [ ] Accessibility is communicated through clear space, calm instructions, and multiple modes rather than stereotypes.

### Content safety and implementation

- [ ] No logos, watermarks, generated words, or fake interface labels.
- [ ] All operational labels remain in HTML.
- [ ] Outer crop safety is preserved at mobile and desktop breakpoints.
- [ ] Duplicate decorative assets use empty alt text.
- [ ] Exact Moonlighter brand color, logo, and printer models remain placeholders until supplied.

---

## 14. Pending Moonlighter inputs

Replace provisional choices only after Moonlighter confirms:

- Official logo files and logo-use rules.
- Exact brand accent color and approved gradient behavior.
- Exact FDM printer models and number available for the pilot.
- Approved filament brands and stocked colors.
- Photographs of the actual classroom, printer station, and computers.
- Permission to photograph or represent the facility and participants.
- Whether Moises should appear recognizably in the instructor asset or remain cropped/unidentifiable.
- Any existing icon or illustration system that should supersede MeshGlyphs.

Until then, the asset set must remain clearly generic, logo-free, and operationally plausible rather than claiming to depict Moonlighter’s exact room or equipment.

---

## 15. Recommended first production batch

Before producing all fifteen assets, generate these four to validate the system:

1. `outcome-reference` — locks the subject.
2. `outcome-image` — tests friendliness, print-safe volume, and frame crossing.
3. `outcome-mesh` — tests the signature volumetric mesh language.
4. `outcome-print` — proves the CGI-to-FDM material transition.

Once approved, create `hero-pipeline` and the two tier photographs. Those seven images establish the visual identity visible above the fold and in the first major content sections. The remaining eight can then be produced with lower continuity risk.

