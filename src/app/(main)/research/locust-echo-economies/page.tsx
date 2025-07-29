import { Metadata } from 'next'
import LocustEchoEconomiesClient from '@/components/page/LocustEchoEconomiesClient'

export const metadata: Metadata = {
  title: 'Echo Economies - Locust Projects Installation',
  description: 'An installation exploring algorithmic capitalism through kinetic sculpture, data flows, and interactive experiences.',
  keywords: ['algorithmic capitalism', 'kinetic sculpture', 'data art', 'interactive installation', 'Miami art'],
}

export default function LocustEchoEconomiesPage() {
  return <LocustEchoEconomiesClient />
} 