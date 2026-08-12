import { NextResponse } from 'next/server'
import {
  findParticipantByToken,
  getBundleByCode,
  updateParticipant,
  upsertCheckpoint,
} from '@/lib/workshop/moonlighter/offline-store'
import type { CheckpointState } from '@/lib/workshop/moonlighter/types'

type Ctx = { params: Promise<{ code: string }> }

export async function GET(_request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const bundle = getBundleByCode(raw.toUpperCase())
  if (!bundle) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  return NextResponse.json({
    participants: bundle.participants,
    checkpoints: bundle.checkpoints,
  })
}

export async function POST(request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const code = raw.toUpperCase()
  const bundle = getBundleByCode(code)
  if (!bundle) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  const body = await request.json().catch(() => ({}))
  const token = String(body.token ?? '')
  const participant = findParticipantByToken(token)
  if (!participant || participant.session_id !== bundle.session.id) {
    return NextResponse.json({ error: 'Invalid participant token' }, { status: 401 })
  }

  if (body.action === 'checkpoint') {
    const moduleId = Number(body.module_id)
    const state = body.state as CheckpointState
    const row = upsertCheckpoint(participant.id, moduleId, state, body.note)
    return NextResponse.json({ checkpoint: row, participant: findParticipantByToken(token) })
  }

  if (body.action === 'update') {
    const updated = updateParticipant(participant.id, {
      pace: body.pace ?? participant.pace,
      pla_color: body.pla_color ?? participant.pla_color,
      tier: body.tier ?? participant.tier,
      help_flag: body.help_flag ?? participant.help_flag,
      policy_acked:
        typeof body.policy_acked === 'boolean' ? body.policy_acked : participant.policy_acked,
      status: body.status ?? participant.status,
    })
    return NextResponse.json({ participant: updated })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
