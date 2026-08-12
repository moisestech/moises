import { NextResponse } from 'next/server'
import {
  createOfflineSession,
  getBundleByCode,
  joinOfflineSession,
} from '@/lib/workshop/moonlighter/offline-store'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const action = body.action as string | undefined

  if (action === 'create') {
    const session = createOfflineSession()
    return NextResponse.json({ session, offline: true })
  }

  if (action === 'join') {
    const code = String(body.code ?? '').trim().toUpperCase()
    const displayName = String(body.displayName ?? '').trim()
    if (!code || !displayName) {
      return NextResponse.json({ error: 'code and displayName required' }, { status: 400 })
    }
    const result = joinOfflineSession(code, displayName)
    if (!result) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    return NextResponse.json({ ...result, offline: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')?.trim().toUpperCase()
  if (!code) {
    return NextResponse.json({ error: 'code required' }, { status: 400 })
  }
  const bundle = getBundleByCode(code)
  if (!bundle) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  return NextResponse.json(bundle)
}
