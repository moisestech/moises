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
  return <>
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Build Your Website: Own Your Digital Presence</h1>
    <p className="mb-4">
      This workshop is designed to teach accessible and open-source solutions to design, host, and manage your website domain.
    </p>
    <p className="mb-4">
      We will be using Squarespace as our platform, but the concepts we cover can be applied to any website builder or CMS.
    </p>
  </div>
  <DigitalPresenceClient />
  </>
} 