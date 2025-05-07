import { Metadata } from 'next'
import AISyllabusClient from '@/components/page/AISyllabusClient'

export const metadata: Metadata = {
  title: 'AI & The Arts - Course Syllabus',
  description: 'Comprehensive syllabus for the AI & The Arts workshop series. Learn about AI tools, creative applications, and hands-on projects.',
}

export default function SyllabusPage() {
  return <AISyllabusClient />
} 