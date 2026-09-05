# Cursor prompts — port `/institutions` + `/artist-infrastructure` to DCC Miami

Open the **Infra24** repo (`/Users/moisessanabria/Documents/website/infra24`) in Cursor. Paste these one at a time. Do not paste Prompt 1 until Prompt 0 has listed the actual DCC primitives it will reuse.

Handoff folder (read-only source):

`/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff`

Read `POSITIONING.md` in that folder before writing copy.

---

## Prompt 0 — Orient (paste first)

```
You are working in the Infra24 repo that powers dcc.miami.

I want to add two public marketing pages that already exist on moises.tech:

1. /institutions — digital systems DCC offers museums and arts organizations
2. /artist-infrastructure — workshops/curriculum DCC offers incubators and artist programs

Do NOT implement yet. First read:

- /Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/README.md
- /Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/POSITIONING.md
- /Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/shared.ts

Then inspect THIS repo and report:

1. How marketing pages are built (PageHero, Section, cdcPageMetadata, lib/cdc/routes.ts, lib/marketing/content.ts navItems).
2. Where to register new routes so sitemap + breadcrumbs work.
3. Existing overlapping doors I must not collapse: /infra24, /workshops, /partners, /who-we-work-with, /contact.
4. Contact constants already in use (contact@dcc.miami, calendly.com/dccmiami).
5. How light/dark theming works — dcc.miami is a dark site. Do not paste the moises.tech light #f7f6f3 dossier look.
6. Whether Cloudinary images from res.cloudinary.com/dck5rzi4h are already allowed in next.config.

Return a short implementation plan: file paths you will create, primitives you will reuse, and what you will restyle vs copy. Wait for my next prompt before coding.
```

---

## Prompt 1 — Build `/institutions`

```
Build /institutions on DCC Miami using the handoff.

SOURCE OF TRUTH FOR COPY:
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/hub.ts
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/shared.ts
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/media.ts

SOURCE OF TRUTH FOR INFORMATION ARCHITECTURE (sections, not visual skin):
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/source/app/institutions-page.tsx
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/source/components/InstitutionsHubClient.tsx
and the other components in source/components/ that the hub client imports.

PAGE JOB
- Audience: museums, nonprofits, digital staff, institutional partners.
- Offer: web + Salesforce, automation/ops, livestreaming, digital labs.
- Next step: Calendly https://calendly.com/dccmiami and mailto:contact@dcc.miami
- This is DCC Miami’s services page. Subject is “DCC Miami / we”. Credit Moises Sanabria as founder/lead. Do not write it as a personal consulting page.

IMPLEMENTATION RULES
- Register the route in lib/cdc/routes.ts and use cdcPageMetadata.
- Put the page at app/(marketing)/institutions/page.tsx (or the equivalent marketing route group this repo uses).
- Keep copy in lib/ (or content/) as a data object, like other DCC marketing pages. Do not hardcode a wall of JSX copy.
- Restyle to DCC marketing chrome: PageHero, Section, existing cards/grids, dark theme. Do NOT import MoMA Sans or the light #f7f6f3 InstPageShell as the page skin.
- You MAY reuse section structure: hero, proof strip, four practice lanes, operating method (listen → connect → build → adopt → document), flagship case studies (Oolite, ICA, Bakehouse), additional evidence, process, three engagement modes, experience archive, final CTA.
- Flagship case studies that still live on moises.tech must link out: https://moises.tech/oolite-arts, https://moises.tech/ica-miami, https://moises.tech/bakehouse.
- Artwork links must go to https://moises.tech/art/... and https://moises.tech/calendar/exhibitions.
- Do not list DCC Miami as its own client.
- Do not show $45 public-seat pricing on this page.
- Use INSTITUTIONAL_SERVICES_AVAILABILITY (“Currently available for project-based and fractional engagements.”) — not the fall 2026 teaching line.
- Add a family strip linking /artist-infrastructure, /institutions, /workshops, /infra24, /partners.
- Wire the page into nav only if it fits an existing group (Programs or Organization). Prefer adding it to marketingNavSheetGroups rather than crowding the header icon strip. Mention where you put it.
- Use media.ts Cloudinary URLs. Do not invent new affiliations or metrics.

When done: list files created, routes registered, and any moises.tech links that remain outbound on purpose.
```

---

## Prompt 2 — Build `/artist-infrastructure`

```
Build /artist-infrastructure on DCC Miami using the handoff.

SOURCE OF TRUTH FOR COPY:
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/artistInfrastructure.ts
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/artistInfrastructureMedia.ts
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/workshopsOfferings.ts
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/shared.ts
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/dcc-content/media.ts

SOURCE OF TRUTH FOR INFORMATION ARCHITECTURE:
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/source/app/artist-infrastructure-page.tsx
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/source/components/ArtistInfrastructureClient.tsx
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/source/components/OutreachComponents.tsx
/Users/moisessanabria/Documents/website/moises/docs/dcc-miami-handoff/source/components/HeroWorkshopCarousel.tsx

PAGE JOB
- Audience: incubators, schools, artist programs, cultural partners booking teaching.
- Offer: Studio Automation, QuickBooks Automation, Vibe Coding as method, Creative-Technology Infrastructure.
- Next step: Calendly https://calendly.com/dccmiami with subject-ready mailto:contact@dcc.miami
- Availability line: INSTITUTIONAL_COLLABORATION_AVAILABILITY (fall 2026 paid guest teaching / curriculum / pilots).

IMPLEMENTATION RULES
- Register /artist-infrastructure in lib/cdc/routes.ts.
- Same visual system as /institutions (DCC dark marketing chrome). Reuse the family strip.
- Keep section structure: hero + workshop carousel, context proof, logo band, positioning triad (Artist / Educator / Systems Builder), curriculum modules, Oolite proof gallery, engagement process, supporting proof, practice strip, engagement formats, CTA.
- Positioning triad: Artist card must point the studio practice to https://moises.tech (selected works). Educator and Systems Builder stay DCC offer language.
- Curriculum modules should expand (audience, formats, take-homes) like the source CurriculumModuleCard — not three mute teaser cards.
- Workshop landings that exist on DCC stay internal (/workshops, /workshop/...). If a slug does not exist on DCC, link to the DCC workshops catalog or to the moises.tech workshop URL and label it outbound.
- Oolite case study: https://moises.tech/oolite-arts. Credit Fabiola Larios first, then Moises Sanabria.
- Practice projects (Smart Shoppers, Doomscrolling, AI24): https://moises.tech/...
- Do not present $45 / $360–$450 as the headline offer on this page. Point to /workshops for bookable catalog + hosted rates.
- Do not dump a “media needed” debug strip on the public DCC page unless assets are actually missing.
- Match DCC writing: clear, concrete, no startup pitch, no “explores the intersection of”.

When done: list files, confirm both /institutions and /artist-infrastructure share the family nav, and list outbound moises.tech links.
```

---

## Prompt 3 — Nav, sitemap, QA

```
Finish wiring /institutions and /artist-infrastructure on DCC Miami.

1. Confirm both routes are in lib/cdc/routes.ts so sitemap + breadcrumbs work.
2. Confirm metadata titles:
   - Digital Systems for Arts Institutions — DCC Miami
   - Creative Infrastructure for Artists — DCC Miami
3. Add both pages to the marketing nav sheet in a sensible group. Do not hide them only in footer.
4. Cross-link from:
   - /workshops (a short band: “Institutions and incubators” → /artist-infrastructure and /institutions)
   - /infra24 (a short band: “Need web, CRM, labs, or teaching? Those live on /institutions and /artist-infrastructure. Infra24 is the public-interface product.”)
   - /partners and /contact if those pages list offering doors
5. QA:
   - No m@moises.tech or calendly.com/moisestech on these pages
   - No DCC-as-its-own-client card
   - Art and Oolite/ICA/Bakehouse case studies that are not on DCC yet are outbound to moises.tech
   - Dark theme readable; no light dossier leftover as the page background
   - Mobile: sticky family nav does not cover the DCC header; section anchors work
6. Do not change moises.tech in this repo. Redirects from moises.tech happen later on that site.

Report the public URLs, nav placement, and a checklist of outbound vs internal links.
```

---

## Optional Prompt 4 — After DCC is live (run in the **moises.tech** repo)

```
dcc.miami now hosts /institutions and /artist-infrastructure as the public offering doors.

On moises.tech, stop pitching those services as the primary institutional send.

1. Read docs/institutions/README.md and docs/site-health.md.
2. Propose (do not implement until I confirm) one of:
   A) Redirect /institutions and /artist-infrastructure to https://dcc.miami/institutions and https://dcc.miami/artist-infrastructure
   B) Keep thin landing pages that explain the work now lives at DCC Miami, with a single primary CTA out
3. Update send-hierarchy copy so incubators and museum digital staff are sent to dcc.miami, while curators/grants stay on moises.tech.
4. Keep /oolite-arts, /ica-miami, /bakehouse as case-study proof on moises.tech until those are ported.

Do not delete the case studies. Do not mix hiring/capabilities pages into this change.
```

---

## If the DCC agent starts copying the light dossier UI

Stop it. The information architecture and copy are the port. The visual system is DCC’s existing marketing chrome (`PageHero`, `Section`, dark neutrals, DCC logo lockup). A light museum-dossier page on dcc.miami will look like a second site glued on.
