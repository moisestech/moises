import dynamic from 'next/dynamic'

// Use dynamic import to load the client component
const DigitalPresenceClient = dynamic(() => import('@/components/page/DigitalPresenceClient'), {
  ssr: true // Enable server-side rendering
})

export const metadata = {
  title: 'Build Your Website: Own Your Digital Presence',
  description: 'A practical, hands-on course designed to teach accessible and open-source solutions to design, host, and manage your website domain.',
}

export default function DigitalPresencePage() {
  return <DigitalPresenceClient />
} 