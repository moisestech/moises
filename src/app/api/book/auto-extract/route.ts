import { NextRequest, NextResponse } from 'next/server';
import { autoExtractDraft } from '@/lib/book/auto-extractor';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename } = body;

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }

    await autoExtractDraft(filename);

    return NextResponse.json({
      success: true,
      message: 'Extraction complete. Files saved to content/born-into-the-machine/extracted/',
    });
  } catch (error: any) {
    console.error('Extraction error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to extract entities' },
      { status: 500 }
    );
  }
}
