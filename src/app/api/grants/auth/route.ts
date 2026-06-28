import { NextResponse } from 'next/server';
import {
  GRANTS_DIRECTORY_COOKIE,
  getGrantsDirectorySessionToken,
  verifyGrantsDirectoryPassword,
} from '@/lib/grants-directory-auth';

const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: Request) {
  let password = '';

  try {
    const body = (await request.json()) as { password?: string };
    password = body.password ?? '';
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!verifyGrantsDirectoryPassword(password)) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(GRANTS_DIRECTORY_COOKIE, getGrantsDirectorySessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/grants',
    maxAge: SESSION_MAX_AGE,
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(GRANTS_DIRECTORY_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/grants',
    maxAge: 0,
  });

  return response;
}
