import { NextResponse } from 'next/server'
import { rubricHasRed } from '@/lib/workshop/moonlighter/gate-review'
import { isFacilitatorAuthenticated } from '@/lib/workshop/moonlighter/facilitator-auth'
import {
  DurableStoreError,
  addWorkshopRecovery,
  getWorkshopBundle,
  updateWorkshopPrinter,
  upsertWorkshopHandoff,
} from '@/lib/workshop/moonlighter/session-store'
import type { PrinterState } from '@/lib/workshop/moonlighter/types'

type Ctx = { params: Promise<{ code: string }> }

const ACTIVE_LANE = new Set<PrinterState>(['assigned', 'printing'])
const DISPATCH_STATUS = new Set(['approved_in_class', 'approved_queued', 'printing'])

function storeFailure(error: unknown) {
  console.error('[moonlighter session]', error)
  if (error instanceof DurableStoreError) {
    return NextResponse.json(
      { error: 'The session record could not be saved. This rehearsal was not stored in memory.' },
      { status: 503 },
    )
  }
  return NextResponse.json({ error: 'Session request failed' }, { status: 500 })
}

export async function GET(_request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  try {
    const bundle = await getWorkshopBundle(raw.toUpperCase())
    if (!bundle) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    return NextResponse.json({
      printers: bundle.printers,
      handoffs: bundle.handoffs,
      recovery: bundle.recovery,
      offline: bundle.offline,
    })
  } catch (error) {
    return storeFailure(error)
  }
}

export async function POST(request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const code = raw.toUpperCase()
  if (!(await isFacilitatorAuthenticated(code))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const bundle = await getWorkshopBundle(code)
    if (!bundle) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    const body = await request.json().catch(() => ({}))

    if (body.action === 'printer') {
      const state = typeof body.state === 'string' ? (body.state as PrinterState) : undefined
      const participantId = typeof body.participant_id === 'string' ? body.participant_id : null
      if (state && ACTIVE_LANE.has(state)) {
        if (!participantId) {
          return NextResponse.json({ error: 'Select a participant before assigning a lane.' }, { status: 400 })
        }
        const handoff = bundle.handoffs.find((h) => h.participant_id === participantId)
        if (!handoff || !['approved_in_class', 'approved_queued'].includes(handoff.approval_status)) {
          return NextResponse.json(
            { error: 'Assign a lane only after this file is approved for class or for the queue.' },
            { status: 400 },
          )
        }
        if (rubricHasRed(handoff.rubric_summary)) {
          return NextResponse.json({ error: 'A red rubric cannot be dispatched.' }, { status: 400 })
        }
        const lane = bundle.printers.find((p) => p.id === String(body.printer_id))
        if (
          lane &&
          ACTIVE_LANE.has(lane.state) &&
          lane.participant_id &&
          lane.participant_id !== participantId
        ) {
          return NextResponse.json({ error: 'This lane already has an active job.' }, { status: 409 })
        }
      }
      const patch: Parameters<typeof updateWorkshopPrinter>[1] = {}
      if (state) patch.state = state
      if (typeof body.job === 'string' || body.job === null) patch.job = body.job
      if (typeof body.participant_id === 'string' || body.participant_id === null) {
        patch.participant_id = body.participant_id
      }
      if (typeof body.estimate_min === 'number' || body.estimate_min === null) {
        patch.estimate_min = body.estimate_min
      }
      if (typeof body.color === 'string') patch.color = body.color
      if (state === 'idle') {
        patch.participant_id = null
        patch.job = null
      }
      const printer = await updateWorkshopPrinter(String(body.printer_id), patch)
      return NextResponse.json({ printer, offline: bundle.offline })
    }

    if (body.action === 'handoff') {
      const participantId = String(body.participant_id ?? '')
      const existing = bundle.handoffs.find((h) => h.participant_id === participantId)
      const approval = String(body.approval_status ?? existing?.approval_status ?? 'ready_for_review')
      let notes = String(body.notes ?? existing?.notes ?? '')
      if (approval === 'needs_work') {
        const fix = String(body.named_fix ?? '').trim()
        if (!fix) {
          return NextResponse.json({ error: 'Needs work requires one named fix.' }, { status: 400 })
        }
        const fixLine = `Fix: ${fix}`
        if (!notes.split('\n').includes(fixLine)) {
          notes = [notes, fixLine].filter(Boolean).join('\n')
        }
      }
      const summary =
        body.rubric_summary != null ? String(body.rubric_summary) : (existing?.rubric_summary ?? '')
      if (DISPATCH_STATUS.has(approval) && rubricHasRed(summary)) {
        return NextResponse.json({ error: 'A red rubric cannot be dispatched.' }, { status: 400 })
      }
      const handoff = await upsertWorkshopHandoff({
        session_id: bundle.session.id,
        participant_id: participantId,
        project_title: String(body.project_title ?? existing?.project_title ?? ''),
        project_slug: body.project_slug != null ? String(body.project_slug) : existing?.project_slug,
        approved_filename: String(body.approved_filename ?? existing?.approved_filename ?? ''),
        tier: String(body.tier ?? existing?.tier ?? ''),
        dimensions: String(body.dimensions ?? existing?.dimensions ?? ''),
        pla_color: String(body.pla_color ?? existing?.pla_color ?? ''),
        printer_unit: String(body.printer_unit ?? existing?.printer_unit ?? ''),
        support_rating: String(body.support_rating ?? existing?.support_rating ?? ''),
        approval_status: approval,
        expected_pickup: String(body.expected_pickup ?? existing?.expected_pickup ?? ''),
        notes,
        rubric_summary: summary,
        reference_rights:
          typeof body.reference_rights === 'boolean' ? body.reference_rights : existing?.reference_rights,
      })
      return NextResponse.json({ handoff, offline: bundle.offline })
    }

    if (body.action === 'recovery') {
      const row = await addWorkshopRecovery({
        session_id: bundle.session.id,
        participant_id: String(body.participant_id),
        failure_type: String(body.failure_type ?? 'production'),
        photo_note: String(body.photo_note ?? ''),
        reprint_queued: Boolean(body.reprint_queued),
      })
      return NextResponse.json({ recovery: row, offline: bundle.offline })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (error) {
    return storeFailure(error)
  }
}
