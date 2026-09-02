import { cn } from '@/lib/utils'
import { TrustLabBanner } from './TrustLabBanner'
import { TrustWorkshopNav } from './TrustWorkshopNav'
import { trust } from './trust-tokens'

/** Clears the live site header so the lab title is never under the logo/nav. */
const TRUST_HEADER_CLEARANCE =
  'pt-[calc(var(--site-header-expanded-height,12rem)+0.75rem)] md:pt-[calc(var(--site-header-expanded-height,12rem)+1.25rem)]'

export function TrustWorkshopShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(trust.shell, TRUST_HEADER_CLEARANCE, 'print:pt-0')}>
      <TrustWorkshopNav />
      <TrustLabBanner />
      {children}
    </div>
  )
}
