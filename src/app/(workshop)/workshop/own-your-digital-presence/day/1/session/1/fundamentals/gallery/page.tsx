import { Metadata } from 'next'
import Day1Session1FundamentalsGallery from '@/components/workshop/Day1Session1FundamentalsGallery'

export const metadata: Metadata = {
  title: 'Gallery Layouts | Digital Presence Workshop',
  description: 'Learn how to create beautiful and responsive gallery layouts for your artwork across different platforms.',
}

export default function GalleryPage() {
  return <Day1Session1FundamentalsGallery />
} 