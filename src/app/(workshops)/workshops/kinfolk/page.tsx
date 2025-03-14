import dynamic from 'next/dynamic'

// Use dynamic import to load the client component
const LandingKinfolkClient = dynamic(() => import('@/components/page/LandingKinfolkClient'), {
  ssr: true // Enable server-side rendering
})

export const metadata = {
  title: 'Kinfolk AI Technical Workshop',
  description: 'Technical implementation plan for leveraging Unity and AI to amplify Black & Brown historical narratives',
}

export default function KinfolkWorkshopPage() {
  return <LandingKinfolkClient />
} 