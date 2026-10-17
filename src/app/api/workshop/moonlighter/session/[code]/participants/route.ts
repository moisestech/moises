import { NextResponse } from 'next/server'
import { parseGateRatings, projectSlug, rubricHasRed, rubricSummary } from '@/lib/workshop/moonlighter/gate-review'
import {
  DurableStoreError,
  findWorkshopParticipant,
  getWorkshopBundle,
  updateWorkshopParticipant,
  upsertWorkshopCheckpoint,
  upsertWorkshopHandoff,
} from '@/lib/workshop/moonlighter/session-store'
import { GATE1_CHECKPOINT_MODULE, type CheckpointState } from '@/lib/workshop/moonlighter/types'

type Ctx = { params: Promise<{ code: string }> }

const PARTICIPANT_CHECKPOINT_STATES = new Set<CheckpointState>([
  'not_started',
  'working',
  'ready_for_review',
  'needs_fix',
])

const HELD_BY_INSTRUCTOR = new Set([
  'approved_in_class',
  'approved_queued',
  'printing',
  'recovery',
  'ready_for_pickup',
])

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
      participants: bundle.participants,
      checkpoints: bundle.checkpoints,
      offline: bundle.offline,
    })
  } catch (error) {
    return storeFailure(error)
  }
}

export async function POST(request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const code = raw.toUpperCase()
  try {
    const bundle = await getWorkshopBundle(code)
    if (!bundle) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    const body = await request.json().catch(() => ({}))
    const token = String(body.token ?? '')
    const participant = await findWorkshopParticipant(token)
    if (!participant || participant.session_id !== bundle.session.id) {
      return NextResponse.json({ error: 'Invalid participant token' }, { status: 401 })
    }

    if (body.action === 'checkpoint') {
      const moduleId = Number(body.module_id)
      const state = body.state as CheckpointState
      if (!PARTICIPANT_CHECKPOINT_STATES.has(state)) {
        return NextResponse.json({ error: 'That checkpoint state is instructor-only.' }, { status: 403 })
      }
      const row = await upsertWorkshopCheckpoint(participant.id, moduleId, state, body.note)
      return NextResponse.json({
        checkpoint: row,
        participant: await findWorkshopParticipant(token),
        offline: bundle.offline,
      })
    }

    if (body.action === 'update') {
      const updated = await updateWorkshopParticipant(participant.id, {
        pace: body.pace ?? participant.pace,
        pla_color: body.pla_color ?? participant.pla_color,
        tier: body.tier ?? participant.tier,
        help_flag: body.help_flag ?? participant.help_flag,
        policy_acked:
          typeof body.policy_acked === 'boolean' ? body.policy_acked : participant.policy_acked,
      })
      return NextResponse.json({ participant: updated, offline: bundle.offline })
    }

    if (body.action === 'gate_review') {
      if (
        'email' in body ||
        'contact_email' in body ||
        'documentation_consent' in body ||
        'documentationConsent' in body
      ) {
        return NextResponse.json(
          { error: 'This page does not collect email or documentation consent.' },
          { status: 400 },
        )
      }
      if ('printer_unit' in body || 'printer_id' in body || 'printer_state' in body) {
        return NextResponse.json({ error: 'A review request does not assign a printer.' }, { status: 400 })
      }
      if (body.stages_complete !== true) {
        return NextResponse.json(
          { error: 'Finish all six checkpoints before requesting review.' },
          { status: 400 },
        )
      }
      if (body.reference_rights !== true) {
        return NextResponse.json(
          { error: 'Confirm you have rights to the reference before requesting review.' },
          { status: 400 },
        )
      }
      const title = String(body.project_title ?? '').trim()
      if (!title) {
        return NextResponse.json({ error: 'A project name is required.' }, { status: 400 })
      }
      const ratings = parseGateRatings(body.ratings)
      if (!ratings) {
        return NextResponse.json({ error: 'Rate every rubric line.' }, { status: 400 })
      }
      const summary = rubricSummary(ratings)
      if (rubricHasRed(summary)) {
        return NextResponse.json({ error: 'A red rubric cannot be sent for review.' }, { status: 400 })
      }
      const tier = body.tier === 'sculpture' ? 'sculpture' : body.tier === 'mini' ? 'mini' : ''
      if (!tier) {
        return NextResponse.json({ error: 'Choose a production tier.' }, { status: 400 })
      }
      const existing = bundle.handoffs.find((h) => h.participant_id === participant.id)
      if (existing && HELD_BY_INSTRUCTOR.has(existing.approval_status)) {
        return NextResponse.json(
          { error: 'The instructor already holds this file. Ask them before sending another draft.' },
          { status: 409 },
        )
      }
      const handoff = await upsertWorkshopHandoff({
        session_id: bundle.session.id,
        participant_id: participant.id,
        project_title: title,
        project_slug: projectSlug(bundle.session.code, participant.id, title),
        approved_filename: existing?.approved_filename ?? '',
        tier,
        dimensions: existing?.dimensions ?? '',
        pla_color: existing?.pla_color ?? '',
        printer_unit: '',
        support_rating: existing?.support_rating ?? '',
        approval_status: 'ready_for_review',
        expected_pickup: existing?.expected_pickup ?? '',
        notes: summary,
        rubric_summary: summary,
        reference_rights: true,
      })
      await upsertWorkshopCheckpoint(participant.id, GATE1_CHECKPOINT_MODULE, 'ready_for_review', summary)
      await updateWorkshopParticipant(participant.id, {
        tier: tier === 'sculpture' ? 'sculpture' : 'miniature',
        status: 'ready_for_review',
      })
      return NextResponse.json({ handoff, offline: bundle.offline })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (error) {
    return storeFailure(error)
  }
}
