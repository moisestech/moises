import type { Metadata } from 'next'
import { ProposalClient } from '@/components/workshop/artist-infrastructure-lab/ProposalClient'
import { LAB_STATUS, LAB_THESIS, LAB_TITLE } from '@/content/workshops/artist-infrastructure-lab'

export const metadata: Metadata = {
  title: `${LAB_TITLE} | Moises Sanabria`,
  description: `${LAB_THESIS} ${LAB_STATUS}`,
  openGraph: {
    title: `${LAB_TITLE} | Moises Sanabria`,
    description: LAB_THESIS,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function ArtistInfrastructureLabPage() {
  return <ProposalClient />
}
