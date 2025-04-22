import { Metadata } from 'next'
import SquarespacePlatformClientDay3Parallax from '@/components/workshop/squarespace/SquarespacePlatformClientDay3Parallax'

export const metadata: Metadata = {
  title: 'Squarespace Parallax Guide',
  description: 'Learn how to create immersive scrolling experiences with Squarespace\'s parallax features',
}

export default function ParallaxPage() {
  return <SquarespacePlatformClientDay3Parallax />
} 