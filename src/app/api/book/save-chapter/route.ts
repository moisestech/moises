import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function POST(request: NextRequest) {
  try {
    const { slug, markdown } = await request.json();

    if (!slug || !markdown) {
      return NextResponse.json(
        { error: 'Slug and markdown are required' },
        { status: 400 }
      );
    }

    // Find the actual file path (handles numbered prefixes)
    const chaptersDir = path.join(
      process.cwd(),
      'content',
      'born-into-the-machine',
      'chapters'
    );

    let filePath = path.join(chaptersDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      // Try to find a file that ends with the slug (handles numbered prefixes)
      const files = fs.readdirSync(chaptersDir);
      const matchingFile = files.find(
        (file) => file.endsWith(`${slug}.md`) && !file.includes('-preview')
      );

      if (matchingFile) {
        filePath = path.join(chaptersDir, matchingFile);
      } else {
        return NextResponse.json(
          { error: 'Chapter not found' },
          { status: 404 }
        );
      }
    }

    // Parse the incoming markdown to extract frontmatter and content
    const parsed = matter(markdown);

    // Update lastModified timestamp
    const updatedFrontmatter = {
      ...parsed.data,
      lastModified: new Date().toISOString(),
    };

    // Reconstruct markdown with updated frontmatter
    const updatedMarkdown = matter.stringify(parsed.content, updatedFrontmatter);

    // Write file
    fs.writeFileSync(filePath, updatedMarkdown, 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Chapter saved successfully',
    });
  } catch (error: any) {
    console.error('Error saving chapter:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save chapter' },
      { status: 500 }
    );
  }
}
