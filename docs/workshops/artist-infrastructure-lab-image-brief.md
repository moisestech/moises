# Artist Infrastructure Lab — image brief

How to generate the pictures for `/workshop/artist-infrastructure-lab`.

The page is a **working proposal** for co-development with Dimitry Chamy and FIU Ratcliffe. It is not an approved course. No dates, credit, enrollment, or partnership are confirmed. Every picture is a conceptual visualization unless a later brief explicitly labels a real photograph.

When a file is ready, upload it to Cloudinary folder **`dccmiami/workshops/artist-infrastructure/`**. The live chapter plates already use that folder. New files should not overwrite those URLs until the page is pointed at them.

Landscape plates already on the page (do not treat these as documentary proof):

- Cover B `ratcliffe-cover-direction-b-semantic-workflow`
- Cover A `ratcliffe-cover-direction-a-moises-artist-interface`
- Facilitation `ratcliffe-conceptual-workshop-facilitation`
- Chapters 01–08 `ratcliffe-ch01` through `ratcliffe-ch08`

This brief asks for a **second, matched set**: an icon, a transparent PNG, and a landscape still for each idea, so the spine, the path, and the plates can share one object language. Lucide icons are the temporary marks. These files replace them.

---

## What the pictures have to accomplish

A curator, a faculty reader, or Dimitry should be able to say, without reading a paragraph:

1. The lab holds **two lenses in equal balance**: digital and public humanities, and artist infrastructure.
2. The work moves in **eight steps**, and each step leaves an artifact another person can inspect.
3. **Uncertainty stays visible.** A date range with a question mark is not cleaned into a confident year.
4. **A person decides.** A model may suggest. It does not publish, export, or invent a missing right.
5. **Missing rights stop the record.** Fluency is not permission.
6. The picture is a **proposal for a studio**, not a photograph of a class that already happened at Ratcliffe.

Locked sentence the pictures must support:

> Interpret critically. Build concretely. Test socially. Maintain responsibly.

Shared sample the pictures may quote, and must not “correct”:

- Title supplied. Creator unknown.
- Date **1930–1940?** supplied. The year **1936** is unsupported and must sit aside, not replace the range.
- Place **Miami?** is not in the source. It stays in review.
- Rights are **not supplied**. Record B-015 is held. Record A-014 may move only because rights were supplied.
- One internal note is restricted. It is not a public caption.

---

## What we are trying to convey

| Convey | Do not convey |
| --- | --- |
| A studio table, a tray, a gate, a case, a cable you can unplug | A SaaS dashboard, a startup pitch, a neural-net background |
| Human review as a physical lever, stamp, or empty chair | An autonomous agent finishing the work |
| Gaps, empty slots, frosted sleeves, a disconnected end | A complete knowledge graph with every fact filled in |
| Warm paper, charcoal, teal, one orange for a decision or a stop | Rainbow categories, neon, holograms, mascots |
| Conceptual still life, clearly not a documented session | FIU logos, classroom photography claimed as this lab, stock “diverse workshop” scenes |
| One object readable at icon size and again as a landscape | Tiny UI text, fake paragraphs, invented metrics |

People, if they appear, are anonymous studio figures. No recognizable portrait of Moises in this set. No institutional seals.

---

## Design

Match the live page: warm paper, charcoal type, deep teal, restrained orange.

**Palette**

- Paper `#f3eee6`, lighter ground `#e5f2f1`, card `#f7f3ec`
- Charcoal `#1c1916`
- Teal `#0f5f5c`, pale teal tick `#7eaea9`
- Orange `#c4511a`, deep orange `#7a3412`

**Color steps along the path** (same object, different step — not a new hue)

1. Observe — solid teal
2. Structure — teal object on a pale teal ground
3. Automate — charcoal
4. Judge — charcoal object with one orange tick
5. Relate — solid orange
6. Publish — deep orange
7. Preserve — teal outline, paper inside
8. Hand off — orange outline, paper inside

**Material**

Museum still life. Metal table, archival tray, cotton gloves optional, paper cards, eyelets, a manual lever, a transport case. Soft directional light. Generous empty table. No lens flare, no smoke, no isometric startup diagram.

**Type inside the image**

At most one short stamp: `1930–1940?`, `HOLD`, `REVIEW`, `SOURCE`. Never a paragraph. Never `1936` as the accepted date. Never a logo.

**Shared suffix — append to every landscape prompt**

> Conceptual museum still life for an artist’s studio proposal, warm paper #f3eee6 and charcoal #1c1916, deep teal #0f5f5c and one restrained orange #c4511a, soft directional light, generous negative space, no logos, no readable paragraphs, no watermarks, no mascots, no holograms, no product screenshots, not a photograph of a real class.

**Shared suffix — transparent PNG**

> Isolated object on a true transparent background, crisp edge, no cast shadow on a floor, no paper backdrop, no crop through the object, PNG with alpha.

**Shared suffix — icon**

> Flat institutional pictogram, centered in a square, two or three shapes, charcoal plus the chapter’s one accent, no perspective, no photorealism, readable at 24 pixels, transparent background.

---

## Three files for every ID

| Format | Size | Job on the page | File name |
| --- | --- | --- | --- |
| Landscape | 3:2, 1536×1024 | Hero, chapter plate, path hover | `{id}-landscape.png` |
| Transparent PNG | Longest side 1600, alpha | Sits on the paper page, spine hover, path node | `{id}-transparent.png` |
| Icon | 512×512, alpha | Spine, phone bar, path bullet | `{id}-icon.png` |

Generate all three for each ID below. Same idea. The icon is the object reduced. The transparent PNG is the object you can lift off the table. The landscape is the object in a room with enough air to read the idea.

---

## 00 — Cover, the whole path

**ID** `cover-path`

**Accomplish.** Show the thesis as one table: source, interpretation, a human decision, a build, and a handoff, with one return line for revision. A reader should see sequence and a person who can send work back.

**Convey.** The lab is a path, not a tool demo. Revision is part of the path.

**Must show.** Five stations in a line. One return path. A figure who is working, not presenting to a camera.

**Must not show.** A finished course, a classroom full of laptops, a Ratcliffe sign, a date that has been “fixed.”

**Icon.** Five small blocks in a row and one curved return stroke, teal, charcoal last block.

**Transparent PNG.** The five-station table seen from a three-quarter view, objects only, no room.

**Landscape prompt.** A person stands at a long metal table divided into five stations: a source tray, a card being read, a manual lever, a small build, and a closed handoff case. One cable returns from the case to the reading station. Warm paper walls, charcoal clothing, teal tray, one orange lever. Conceptual cover, not a photograph of a workshop. [landscape suffix]

---

## 00b — Cover, archive and interface

**ID** `cover-split`

**Accomplish.** Hold the two lenses on one surface: an archival tray and a small patch bay, with a review gate between them.

**Convey.** Humanities questions and technical routing are the same table.

**Must show.** Paper records on the left, visible cables on the right, a gate in the middle that a hand can close.

**Must not show.** A split-screen app, a “versus” graphic, a winner.

**Icon.** A tray and a three-port block with a short bar between them.

**Transparent PNG.** The split surface only: tray, gate, patch bay.

**Landscape prompt.** A person beside one work surface split between an archival tray of cards and a small patch bay. A review gate sits in the middle, visibly open. Same light and palette as the path cover. Alternate conceptual cover, not documentary evidence. [landscape suffix]

---

## 00c — Facilitation

**ID** `facilitation`

**Accomplish.** Show the proposed format: a facilitator and a few learners around one table, with source cards and a review gate. Label in the caption, not in the picture, that this is conceptual.

**Convey.** Hands-on, small, shared table. Not a lecture hall.

**Must show.** Four learners and one facilitator. Cards on the table. One gate or hold tray.

**Must not show.** A branded classroom, name tags, a screen full of a chatbot, applause.

**Icon.** Four dots around a rectangle and one mark at the head of the table.

**Transparent PNG.** The tabletop with cards and the gate, figures omitted so it can sit on the paper page.

**Landscape prompt.** A facilitator and four learners work around a metal table with source cards and a review gate. Faces are turned toward the table, not the camera. Conceptual scene, not a documented session. [landscape suffix]

---

## 01 — Observe

**ID** `observe` · teal · Workflow Brief · “Whose labor and knowledge make the process possible?”

**Accomplish.** Make hidden labor visible under a finished card. The public output is the thin top layer. Under it: source, waiting, a tool, a person, maintenance.

**Convey.** A finished card is not self-explanatory. Someone photographed, someone wrote, someone can authorize, and rights are still missing.

**Must show.** A cutaway or a lifted lid. A finished card above. Below: a cable, a waiting slot, a relay or a glove. One empty slot that reads as “not yet allowed to leave.”

**Must not show.** A hero artwork with no underside. A clock that claims time saved.

**Icon.** An eye reduced to a card with a notch cut out of the bottom edge, solid teal.

**Transparent PNG.** The cutaway tray alone, lid raised, card hovering above the underside.

**Landscape prompt.** A cutaway filing tray. A finished catalog card rests on the top lip. Below the lip: relays, a short cable, and an empty waiting slot. Warm paper, teal metal, charcoal shadow. Conceptual cutaway of hidden labor, not a photograph of a collection. [landscape suffix]

---

## 02 — Structure

**ID** `structure` · pale teal ground · Data Dictionary · “How do metadata and description shape what can be known?”

**Accomplish.** Show a schema that keeps gaps. Two compartments are honestly empty. One piece is left outside its slot because it does not belong yet.

**Convey.** Supplied, unknown, and needs-review are different states. The date range stays. The guessed city does not get a home.

**Must show.** An overhead sorting tray. A card reading `1930–1940?` seated in a slot. A separate scrap, visually aside, that must not be inserted. Two empty compartments.

**Must not show.** A spreadsheet screenshot. The year 1936 written in as the date. A full tray.

**Icon.** Three columns, the middle one empty, pale teal on charcoal.

**Transparent PNG.** The overhead tray, compartments and the one excluded piece.

**Landscape prompt.** Overhead view of a sorting tray on warm paper. Two compartments are empty on purpose. One card sits in its slot. One loose piece lies outside the grid, unassigned. Pale teal ground, charcoal rules, no readable paragraph except the stamp `1930–1940?` if type is used. [landscape suffix]

---

## 03 — Automate

**ID** `automate` · charcoal · Core Workflow and Execution Log · “Which choices become hidden when a workflow runs?”

**Accomplish.** Show a route that splits into review and hold, with a manual lever before anything can leave.

**Convey.** Automation makes the path visible. It does not decide. Missing rights stop the token. A suggestion cannot push the lever.

**Must show.** One intake. A branch. A token stopped before a lever. Two trays: review, and hold. The hold tray is clearly the stop.

**Must not show.** A living n8n screenshot, a robot arm, a green “success” confetti state, an export that has already happened for the held record.

**Icon.** A Y-shaped branch with a small bar across the exit, solid charcoal.

**Transparent PNG.** The tabletop router: token, lever, two trays.

**Landscape prompt.** A small tabletop router in charcoal metal. One token is stopped in front of a manual lever. Two exit trays are labeled only by position: one open for review, one closed as a hold. No screen. Conceptual automation study. [landscape suffix]

---

## 04 — Judge

**ID** `judge` · charcoal with an orange tick · AI Review Contract · “What counts as evidence rather than fluent speculation?”

**Accomplish.** Separate a supported date range from a fluent exact year. The orange tick marks the human reviewer’s decision, not the model’s confidence.

**Convey.** A precise year can look finished and still be unsupported. The reviewer keeps the uncertainty.

**Must show.** A viewing frame over a source card `1930–1940?`. Unsupported fragments, including a small `1936`, set aside on a separate mat. One orange mark that means “reviewed,” not “approved as fact.”

**Must not show.** A chatbot bubble that looks authoritative. A green check on 1936. A gavel cartoon.

**Icon.** A simple scale, one side heavier, with a single orange tick. Charcoal body.

**Transparent PNG.** The viewing frame, the source card, and the aside mat with the rejected fragment.

**Landscape prompt.** A viewing frame over a source card. Unsupported paper scraps sit on a separate mat, clearly not under the frame. One orange tick on the frame means a person reviewed the evidence. Charcoal ground, warm paper card. Conceptual evidence review, not a courtroom. [landscape suffix]

---

## 05 — Relate

**ID** `relate` · orange · Context Network · “What claim does a relationship make?”

**Accomplish.** Show relationships as claims with different strength: firm, proposed, restricted, unknown, and one end that is not connected.

**Convey.** A line on a map is an argument. Some arguments are not ready to publish. One node stays unconnected on purpose.

**Must show.** Five modules. Links of different kinds: a firm eyelet, a loose clip, a frosted sleeve, and one disconnected end. No web of identical lines.

**Must not show.** A social-network hairball, a “knowledge graph” product shot, every node filled with a name.

**Icon.** Two nodes joined by a solid stroke and a third node with a broken stroke, solid orange.

**Transparent PNG.** The five suspended modules and their four different connectors, including the open end.

**Landscape prompt.** Five small modules hung in a row against warm paper. Connectors differ: a firm eyelet, a loose clip, a frosted sleeve, and one end left unconnected. Orange hardware, charcoal modules. Conceptual relationship study, not an org chart. [landscape suffix]

---

## 06 — Publish

**ID** `publish` · deep orange · Accessible Storyboard · “What argument does an interface make?”

**Accomplish.** Show publication as separate layers that stay separate: source, metadata, context, interpretation, accessibility, credit. One gap stays uncovered. Interpretation can hinge, it cannot become the source.

**Convey.** The public card is an argument with a sequence. The date uncertainty is a layer, not a stain to retouch.

**Must show.** A stack of sheets on one spine. A visible gap. A hinge on one sheet so it can lift without covering the sheet under it.

**Must not show.** A polished webpage mockup, a social post, the gap filled in, the date rewritten as 1936.

**Icon.** Three offset sheets with a notch missing from the top sheet, deep orange.

**Transparent PNG.** The layered stack with the hinge and the uncovered gap, no table.

**Landscape prompt.** Six thin layers held by one spine on a paper table, deep orange edges, charcoal type rules with no sentences. One gap is left uncovered. The interpretation layer has a hinge so it can lift. Conceptual publishing assembly. [landscape suffix]

---

## 07 — Preserve

**ID** `preserve` · teal outline, paper inside · Preservation Packet · “What remains useful when tools, links, or people fail?”

**Accomplish.** Show a kit that still works when the outside connection fails: two copies, removable storage, and a cable that is unplugged on purpose.

**Convey.** Preservation is a rehearsal of failure, not a backup icon. The local copy does not invent facts the service used to supply.

**Must show.** An open transport case. Two independent copies. A disconnected cable beside an empty socket. The case looks portable.

**Must not show.** A cloud logo, a glowing server, a “100% uptime” mark, a plugged-in cable that saves the day.

**Icon.** An open case drawn as an outline only, teal stroke, empty interior.

**Transparent PNG.** The open case with the two copies and the loose cable.

**Landscape prompt.** An open transport case on a paper floor. Inside: two matching copies and a removable block. Beside the case, a cable lies disconnected next to an empty socket. Teal outline on the case, paper interior, charcoal cable. Conceptual preservation kit. [landscape suffix]

---

## 08 — Hand off

**ID** `hand-off` · orange outline, paper inside · Operating Guide and 30-Day Plan · “Can another person operate and question the system?”

**Accomplish.** Show a case that can leave one station and be opened at another. A guide, dependency cards, and a cable ready for the receiving side. The second person has not been handed a login.

**Convey.** Continuation without the author in the room. The next choice includes pause and retire, not only “ship it.”

**Must show.** A portable case between two workstations. The receiving side is waiting, not already running. A short stack of cards that could be a guide.

**Must not show.** A handshake photo, a trophy, a completed deployment, the author’s password.

**Icon.** Two squares and a stroke that stops just short of the second square, orange outline.

**Transparent PNG.** The case, the guide cards, and the cable, no room.

**Landscape prompt.** A portable case sits between two workstations. A short guide and a few dependency cards are visible. A cable is ready to connect to the receiving side and is not yet plugged in. Orange outline, paper case, charcoal tables. Conceptual handoff, not a graduation. [landscape suffix]

---

## Spine-only marks

Icon and transparent PNG only. No landscape.

| ID | Accomplish | Icon prompt |
| --- | --- | --- |
| `mark-overview` | The front door of the lab, not a chapter. | A small filled square, charcoal, centered. |
| `mark-why` | The two lenses, equal. | Two equal bars side by side, teal and charcoal, same height. |
| `mark-path` | The eight steps as one route. | Eight tiny ticks in a column, fading from teal to orange. |
| `mark-tools` | Instruments that stay inspectable. | A tray with three short tools, charcoal line. |
| `mark-instructor` | A person who teaches from a practice, not a brand. | A single vertical figure reduced to a cap and shoulders, charcoal, no face detail. |
| `mark-codesign` | An open decision, not a signed deal. | Two facing brackets with air between them, orange stroke. |

Transparent PNG for each: the same mark at 1600px, still flat, still alpha, so it can sit beside a heading.

---

## Storyboards

These are not recordings. If generated, they are **landscape only**, 16:9, and must look like a labeled card, not a video still. No play button. No timeline. No faces performing.

| ID | Card says | Prompt |
| --- | --- | --- |
| `story-observe` | Map one finished output back to labor, source, delay, tools, and maintenance. | A storyboard card on warm paper with five empty frames and the words `OBSERVE` only. |
| `story-judge` | Compare `1930–1940?` with unsupported `1936`, then revise without erasing the uncertainty. | A storyboard card with two frames: a range, and a scrap set aside. Stamp `JUDGE`. |
| `story-publish` | Reorder source, context, interpretation, accessibility, and credit. Leave one gap. | A storyboard card of stacked sheets with one sheet lifted. Stamp `PUBLISH`. |
| `story-handoff` | A second person follows the guide, meets a missing dependency, and records the repair. | A storyboard card with a case and a disconnected cable. Stamp `HAND OFF`. |

---

## Check before upload

- The icon still reads at 24px on paper `#f3eee6` and on charcoal `#1c1916`.
- The transparent PNG has a real alpha channel, not a white box.
- The landscape is 3:2 and does not depend on tiny captions.
- `1936` never appears as the kept date.
- Nothing claims the scene happened at Ratcliffe, Oolite, or Moonlighter.
- No FIU mark, no course number, no price.
