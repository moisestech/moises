import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
    const filePath = path.join(
      process.cwd(),
      'content',
      'born-into-the-machine',
      'drafts',
      filename
    );

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    // Count speaker markers
    const markers = {
      human: 0,
      ai: 0,
      total: 0,
    };

    const humanPatterns = [
      /^Question\s*$/i,
      /^Answer from (a )?me/i,
      /^Quote from Me/i,
      /^Me:/i,
      /^You:/i,
      /^Questions and Visions:/i,
      /^Ideas for Book/i,
      /^Thought for/i,
    ];

    const aiPatterns = [
      /^GPT\s*$/i,
      /^ChatGPT/i,
      /^Feedback GPT/i,
      /^GPT (Answers?|Feedback|Question|Summarizing)/i,
      /^GPT (Question|Feedback|Answers?|Summarizing):/i,
    ];

    for (const line of lines) {
      const trimmed = line.trim();
      for (const pattern of humanPatterns) {
        if (pattern.test(trimmed)) {
          markers.human++;
          markers.total++;
          break;
        }
      }
      for (const pattern of aiPatterns) {
        if (pattern.test(trimmed)) {
          markers.ai++;
          markers.total++;
          break;
        }
      }
    }

    // Estimate average block size
    const avgBlockSize = markers.total > 0 
      ? Math.round(lines.length / markers.total)
      : lines.length;

    // Recommendations
    const recommendations = {
      shouldSplit: lines.length > 1000,
      optimalFileCount: Math.ceil(lines.length / 800),
      currentFileSize: lines.length,
      markerDensity: markers.total / lines.length,
      avgBlockSize,
      markersFound: markers,
    };

    return NextResponse.json({
      filename,
      stats: {
        totalLines: lines.length,
        totalCharacters: content.length,
        markersFound: markers,
        markerDensity: (markers.total / lines.length) * 100,
        avgBlockSize,
      },
      recommendations,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to analyze file structure' },
      { status: 500 }
    );
  }
}
