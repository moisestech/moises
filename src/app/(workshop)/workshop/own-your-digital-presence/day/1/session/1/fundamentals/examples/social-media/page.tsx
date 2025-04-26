import { Metadata } from 'next'
import SocialMediaClient from '@/components/workshop/SocialMediaClient'

export const metadata: Metadata = {
  title: 'Social Media Example | Digital Presence Workshop',
  description: 'Example of a social media feed to engage with your audience.'
}

export default function SocialMediaExamplePage() {
  return <SocialMediaClient />
} 