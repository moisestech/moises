import { NextResponse } from 'next/server'
import { isFacilitatorAuthenticated } from '@/lib/workshop/moonlighter/facilitator-auth'
import {
  DurableStoreError,
  sessionStoreIsDurable,
  updateWorkshopControl,
} from '@/lib/workshop/moonlighter/session-store'

type Ctx = { params: Promise<{ code: string }> }

export async function POST(request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const code = raw.toUpperCase()
  if (!(await isFacilitatorAuthenticated(code))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json().catch(() => ({}))
  try {
    const session = await updateWorkshopControl(code, {
      current_module: typeof body.current_module === 'number' ? body.current_module : undefined,
      mode: body.mode,
      warning_minutes:
        body.warning_minutes === null || typeof body.warning_minutes === 'number'
          ? body.warning_minutes
          : undefined,
      facilitator_notes: typeof body.facilitator_notes === 'string' ? body.facilitator_notes : undefined,
    })
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    return NextResponse.json({ session, offline: !sessionStoreIsDurable() })
  } catch (error) {
    console.error('[moonlighter session]', error)
    if (error instanceof DurableStoreError) {
      return NextResponse.json(
        { error: 'The session record could not be saved. This rehearsal was not stored in memory.' },
        { status: 503 },
      )
    }
    return NextResponse.json({ error: 'Session request failed' }, { status: 500 })
  }
}
