import { Metadata } from 'next'
import WixPlatformClientDay2 from '@/components/workshop/wix/WixPlatformClientDay2'

export const metadata: Metadata = {
  title: 'Wix Platform Guide',
  description: 'Learn how to build and manage your website using Wix',
}

export default function WixPage() {
  return <WixPlatformClientDay2 />
} 