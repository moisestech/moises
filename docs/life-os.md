# LIFE OS (moises.tech)

Read path from this repo into the personal **LIFE OS** Airtable base used for job applications, actions, and projects.

- Base: `apprswzWnLrHBwFcx`
- Shared URL was **Actions** (not Inbox): [`tblzQ5bVKCXrsc0IU` / `viwCBm6vyBOpjYzFK`](https://airtable.com/apprswzWnLrHBwFcx/tblzQ5bVKCXrsc0IU/viwCBm6vyBOpjYzFK?blocks=hide)
- Artist CV Airtable (`AIRTABLE_BASE_ID`) stays separate.

## Strategy — built vs next

### Already built (this repo)

| Piece | Status |
|-------|--------|
| Read client for Inbox / Actions / Projects / Opportunities | Done — `src/lib/life-os/` |
| CLI discover + list | Done — `npm run life-os:discover` / `life-os:list` |
| Token-gated API | Done — `GET /api/life-os?table=…` |
| Secrets hygiene | PAT only in `.env.local` (gitignored via `.env*.local`). Never commit. |
| Dual-base split | LIFE OS ≠ artist CV base |

### Needs build (ordered)

1. ~~Vercel env~~ — **optional**. LIFE OS is for local agent read/write; production dossiers do not need Airtable on Vercel.
2. **Opportunities → dossiers** — map LIFE OS Opportunities rows to `/opportunities/[slug]` tracker status (local PM spine).
3. **Write/claim port** — today write ops live in infra24; port only if agents should claim from moises.
4. **Optional tables** — People, Organizations, Interactions, Revenue (discover already lists them).
5. **Rotate PAT** — token was pasted in chat; regenerate when convenient.

### Do not mix

| Base | Use |
|------|-----|
| LIFE OS | Applications, actions, projects, opportunities — agent / PM spine |
| Artist CV (`AIRTABLE_BASE_ID`) | Public CV exhibitions only |

## Tables

| Key | Table | Id |
|-----|-------|-----|
| inbox | Inbox | `tblUQXkg1OTMDsBc9` |
| actions | Actions | `tblzQ5bVKCXrsc0IU` |
| projects | Projects | `tblRp4584Q9MXdGiu` |
| opportunities | Opportunities | `tblaAA3eyXUc1tIrc` |

## Configure

```bash
# .env.local  — NEVER commit this file
AIRTABLE_LIFE_OS_API_KEY=pat…          # life-os-moises-art-token
AIRTABLE_LIFE_OS_BASE_ID=apprswzWnLrHBwFcx
AIRTABLE_LIFE_OS_TABLE_INBOX=tblUQXkg1OTMDsBc9
AIRTABLE_LIFE_OS_TABLE_ACTIONS=tblzQ5bVKCXrsc0IU
AIRTABLE_LIFE_OS_TABLE_PROJECTS=tblRp4584Q9MXdGiu
AIRTABLE_LIFE_OS_TABLE_OPPORTUNITIES=tblaAA3eyXUc1tIrc
AIRTABLE_LIFE_OS_ACTIONS_VIEW=viwCBm6vyBOpjYzFK
LIFE_OS_READ_TOKEN=long-random
```

```bash
npm run life-os:discover
npm run life-os:list -- inbox
npm run life-os:list -- actions
npm run life-os:list -- projects
npm run life-os:list -- opportunities
```

## Code

| Path | Role |
|------|------|
| [`src/lib/life-os/`](../src/lib/life-os/) | Config, HTTP, readers |
| [`src/app/api/life-os/route.ts`](../src/app/api/life-os/route.ts) | Token-gated JSON read API |
| [`scripts/life-os-discover.ts`](../scripts/life-os-discover.ts) | Meta discover + list |

```ts
import {
  listLifeOsInbox,
  listLifeOsActions,
  listLifeOsProjects,
  listLifeOsOpportunities,
} from '@/lib/life-os';

const opportunities = await listLifeOsOpportunities();
```

## ChatGPT / Claude.ai

```http
GET /api/life-os?table=opportunities
x-life-os-token: $LIFE_OS_READ_TOKEN
```
