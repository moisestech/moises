import { NextResponse } from 'next/server'
import { isFacilitatorAuthenticated } from '@/lib/workshop/moonlighter/facilitator-auth'
import { updateSessionControl } from '@/lib/workshop/moonlighter/offline-store'

type Ctx = { params: Promise<{ code: string }> }

export async function POST(request: Request, ctx: Ctx) {
  const { code: raw } = await ctx.params
  const code = raw.toUpperCase()
  if (!(await isFacilitatorAuthenticated(code))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await request.json().catch(() => ({}))
  const session = updateSessionControl(code, {
    current_module:
      typeof body.current_module === 'number' ? body.current_module : undefined,
    mode: body.mode,
    warning_minutes:
      body.warning_minutes === null || typeof body.warning_minutes === 'number'
        ? body.warning_minutes
        : undefined,
    facilitator_notes:
      typeof body.facilitator_notes === 'string' ? body.facilitator_notes : undefined,
  })
  if (!session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  return NextResponse.json({ session })
}
