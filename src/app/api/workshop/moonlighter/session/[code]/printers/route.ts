import { NextResponse } from 'next/server'
import { isFacilitatorAuthenticated } from '@/lib/workshop/moonlighter/facilitator-auth'
import {
  addRecovery,
  getBundleByCode,
  updatePrinter,
  upsertHandoff,
} from '@/lib/workshop/moonlighter/offline-store'

type Ctx = { params: Promise<{ code: string }> }

export async function GET(_request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const bundle = getBundleByCode(raw.toUpperCase())
  if (!bundle) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  return NextResponse.json({
    printers: bundle.printers,
    handoffs: bundle.handoffs,
    recovery: bundle.recovery,
  })
}

export async function POST(request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const code = raw.toUpperCase()
  if (!(await isFacilitatorAuthenticated(code))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const bundle = getBundleByCode(code)
  if (!bundle) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  const body = await request.json().catch(() => ({}))

  if (body.action === 'printer') {
    const printer = updatePrinter(String(body.printer_id), {
      state: body.state,
      job: body.job,
      participant_id: body.participant_id,
      estimate_min: body.estimate_min,
      color: body.color,
    })
    return NextResponse.json({ printer })
  }

  if (body.action === 'handoff') {
    const handoff = upsertHandoff({
      session_id: bundle.session.id,
      participant_id: String(body.participant_id),
      project_title: String(body.project_title ?? ''),
      approved_filename: String(body.approved_filename ?? ''),
      tier: String(body.tier ?? ''),
      dimensions: String(body.dimensions ?? ''),
      pla_color: String(body.pla_color ?? ''),
      printer_unit: String(body.printer_unit ?? ''),
      support_rating: String(body.support_rating ?? ''),
      approval_status: String(body.approval_status ?? 'ready_for_review'),
      expected_pickup: String(body.expected_pickup ?? ''),
      notes: String(body.notes ?? ''),
    })
    return NextResponse.json({ handoff })
  }

  if (body.action === 'recovery') {
    const row = addRecovery({
      session_id: bundle.session.id,
      participant_id: String(body.participant_id),
      failure_type: String(body.failure_type ?? 'production'),
      photo_note: String(body.photo_note ?? ''),
      reprint_queued: Boolean(body.reprint_queued),
    })
    return NextResponse.json({ recovery: row })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
