import type { Metadata } from 'next'
import { GateOneClient } from '@/components/workshop/moonlighter/GateOneClient'

export const metadata: Metadata = {
  title: 'From Image to Object — Studio workflow | Moises Sanabria',
  description: 'A guided image-to-3D printing workflow: reference, AI mesh, repair, orientation, slicing, and instructor print approval.',
}

export default function GateOnePage() {
  return <GateOneClient />
}
