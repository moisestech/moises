import { Metadata } from 'next'
import SquarespacePlatformClientDay3MouseCursor from '@/components/workshop/squarespace/SquarespacePlatformClientDay3MouseCursor'

export const metadata: Metadata = {
  title: 'Custom Mouse Cursor Guide',
  description: 'Learn how to add custom mouse cursors to your Squarespace site',
}

export default function MouseCursorPage() {
  return <SquarespacePlatformClientDay3MouseCursor />
} 