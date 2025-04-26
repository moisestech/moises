import { Metadata } from 'next'
import BlogClient from '@/components/workshop/BlogClient'

export const metadata: Metadata = {
  title: 'Blog Example | Digital Presence Workshop',
  description: 'Example of a blog layout for sharing your thoughts and insights.'
}

export default function BlogExamplePage() {
  return <BlogClient />
} 