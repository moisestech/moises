import { createHash, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export const GRANTS_DIRECTORY_COOKIE = 'grants_dir_auth';

const GRANTS_DIRECTORY_PASSWORD =
  process.env.GRANTS_DIRECTORY_PASSWORD ?? 'Gr4nts3x3!';

function createSessionToken(): string {
  return createHash('sha256')
    .update(`grants-directory:${GRANTS_DIRECTORY_PASSWORD}`)
    .digest('hex');
}

export function verifyGrantsDirectoryPassword(password: string): boolean {
  const expected = GRANTS_DIRECTORY_PASSWORD;
  if (password.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(password), Buffer.from(expected));
}

export function getGrantsDirectorySessionToken(): string {
  return createSessionToken();
}

export async function isGrantsDirectoryAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(GRANTS_DIRECTORY_COOKIE)?.value;
  if (!token) return false;

  const expected = createSessionToken();
  if (token.length !== expected.length) return false;

  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}
