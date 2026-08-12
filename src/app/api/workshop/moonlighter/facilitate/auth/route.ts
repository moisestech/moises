import { NextResponse } from 'next/server'
import {
  MOONLIGHTER_FACILITATOR_COOKIE,
  facilitatorSessionToken,
  verifyFacilitatorPin,
} from '@/lib/workshop/moonlighter/facilitator-auth'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const pin = String(body.pin ?? '')
  const code = String(body.code ?? '').trim().toUpperCase()
  if (!code || !verifyFacilitatorPin(pin)) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
  }
  const token = facilitatorSessionToken(code)
  const res = NextResponse.json({ ok: true })
  res.cookies.set(MOONLIGHTER_FACILITATOR_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  })
  return res
}
