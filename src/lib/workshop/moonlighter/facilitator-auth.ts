import { createHash, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const MOONLIGHTER_FACILITATOR_COOKIE = 'moonlighter_facilitator_auth'

const PIN = process.env.MOONLIGHTER_FACILITATOR_PIN ?? '2468'

function tokenFor(code: string): string {
  return createHash('sha256').update(`moonlighter:${code.toUpperCase()}:${PIN}`).digest('hex')
}

export function verifyFacilitatorPin(pin: string): boolean {
  const expected = PIN
  if (pin.length !== expected.length) return false
  try {
    return timingSafeEqual(Buffer.from(pin), Buffer.from(expected))
  } catch {
    return false
  }
}

export function facilitatorSessionToken(code: string): string {
  return tokenFor(code)
}

export async function isFacilitatorAuthenticated(code: string): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(MOONLIGHTER_FACILITATOR_COOKIE)?.value
  if (!token) return false
  const expected = tokenFor(code)
  if (token.length !== expected.length) return false
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected))
  } catch {
    return false
  }
}
