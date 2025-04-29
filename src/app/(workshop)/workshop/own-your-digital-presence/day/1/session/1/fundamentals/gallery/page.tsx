import { Metadata } from 'next'
import Day1Session1FundamentalsGallery from '@/components/workshop/Day1Session1FundamentalsGallery'

export const metadata: Metadata = {
  title: 'Gallery | Digital Presence Workshop',
  description: 'Learn about gallery layouts and best practices for showcasing your work.',
}

function GalleryPage() {
  return <Day1Session1FundamentalsGallery />
}

export default GalleryPage; 