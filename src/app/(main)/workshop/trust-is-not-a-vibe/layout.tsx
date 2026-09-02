import type { ReactNode } from 'react'
import { TrustWorkshopShell } from '@/components/workshop/trust-is-not-a-vibe/TrustWorkshopShell'

export default function TrustWorkshopLayout({ children }: { children: ReactNode }) {
  return <TrustWorkshopShell>{children}</TrustWorkshopShell>
}
