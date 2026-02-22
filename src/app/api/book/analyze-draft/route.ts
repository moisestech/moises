import { NextRequest, NextResponse } from 'next/server';
import { analyzeDraftFile } from '@/lib/book/draft-analyzer';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json(
      { error: 'Filename is required' },
      { status: 400 }
    );
  }

  try {
    const analysis = await analyzeDraftFile(filename);
    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze draft' },
      { status: 500 }
    );
  }
}
