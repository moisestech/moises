import { NextResponse } from 'next/server'
import { DurableStoreError, createWorkshopSession, getWorkshopBundle, joinWorkshopSession } from '@/lib/workshop/moonlighter/session-store'

export const dynamic = 'force-dynamic'

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

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const action = body.action as string | undefined

  try {
    if (action === 'create') {
      const result = await createWorkshopSession()
      return NextResponse.json(result)
    }

    if (action === 'join') {
      const code = String(body.code ?? '').trim().toUpperCase()
      const displayName = String(body.displayName ?? '').trim()
      if (!code || !displayName) {
        return NextResponse.json({ error: 'code and displayName required' }, { status: 400 })
      }
      const result = await joinWorkshopSession(code, displayName)
      if (!result) {
        return NextResponse.json({ error: 'Session not found' }, { status: 404 })
      }
      return NextResponse.json(result)
    }
  } catch (error) {
    return storeFailure(error)
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')?.trim().toUpperCase()
  if (!code) {
    return NextResponse.json({ error: 'code required' }, { status: 400 })
  }
  try {
    const bundle = await getWorkshopBundle(code)
    if (!bundle) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    return NextResponse.json(bundle)
  } catch (error) {
    return storeFailure(error)
  }
}
