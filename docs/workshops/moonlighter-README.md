# Moonlighter — From Image to Object

Interactive teaching site for the Moonlighter FabLab AI-assisted 3D printing workshop.

## Routes

| Path | Purpose |
| --- | --- |
| `/workshop/moonlighter-ai-3d-printing` | Public landing |
| `/workshop/moonlighter-ai-3d-printing/join` | Create/join session |
| `/workshop/moonlighter-ai-3d-printing/session/[code]/m/[0-9]` | Participant modules |
| `/workshop/moonlighter-ai-3d-printing/present/[code]` | Room presenter |
| `/workshop/moonlighter-ai-3d-printing/facilitate/[code]` | Facilitator dashboard (PIN) |
| `/workshop/moonlighter-ai-3d-printing/resources` | Post-class resources |

## Ops

- Facilitator PIN: `MOONLIGHTER_FACILITATOR_PIN` (default `2468` in development)
- Live session state uses an in-memory store when Supabase is unset; SQL schema: `docs/workshops/moonlighter-supabase-schema.sql`
- Spec: `docs/workshops/moonlighter-ai-assisted-3d-printing-spec-v1.md`
- Content SoT: `src/content/workshops/moonlighter-ai-3d-printing/`

## Placeholders

Moonlighter brand color, registration URL, printer profiles, and one-week pickup language remain pending partner sign-off (`placeholders.ts`).
