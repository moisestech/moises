# DCC Miami handoff — `/institutions` + `/artist-infrastructure`

This folder is a portable copy of the two institutional offering pages currently live on **moises.tech**, rewritten so **DCC Miami** can offer them.

**Goal:** DCC Miami becomes the door for institutional services and artist-infrastructure teaching. **moises.tech** stays the art-practice site.

Live references:

- [moises.tech/institutions](https://moises.tech/institutions) — museum / org digital systems
- [moises.tech/artist-infrastructure](https://moises.tech/artist-infrastructure) — incubator / guest teaching offer
- Target site: [dcc.miami](https://www.dcc.miami) — codebase `Documents/website/infra24`

## What to open first

| File | Use |
| --- | --- |
| [`POSITIONING.md`](./POSITIONING.md) | Why these pages move, what stays on moises.tech, how doors split |
| [`CURSOR-PROMPTS.md`](./CURSOR-PROMPTS.md) | Paste-ready prompts for a Cursor chat **inside the Infra24 / DCC repo** |
| `dcc-content/` | DCC-voiced copy (use these, not the moises.tech originals) |
| `source/` | Verbatim working files from moises.tech (structure + UI to port) |

## Two pages, two jobs

1. **`/institutions`** — services DCC sells to museums and arts organizations: web, Salesforce, automation, livestreaming, digital labs.
2. **`/artist-infrastructure`** — workshops and curriculum DCC sells to incubators, schools, and artist programs.

Do **not** merge these into `/infra24` (product: signs, kiosks, portals) or `/workshops` (public catalog). Link those pages; don’t replace them.

## How to use this in DCC Cursor

1. Open the Infra24 repo (`/Users/moisessanabria/Documents/website/infra24`).
2. Paste **Prompt 0** from `CURSOR-PROMPTS.md`.
3. After it reports the stack, paste **Prompt 1**, then **Prompt 2**, then **Prompt 3**.

The prompts already point at this folder by absolute path.

## Contact on DCC pages

Use DCC channels, not the personal moises.tech ones:

- Email: `contact@dcc.miami`
- Calendly: `https://calendly.com/dccmiami`
- Partners inbox already on DCC: `dccmiami@gmail.com`
