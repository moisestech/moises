import dynamic from 'next/dynamic'

const WebsiteDay2Session1Client = dynamic(
  () => import('@/components/page/WebsiteDay2Session1Client'),
  { ssr: false }
)

export default function Day2Session1Page() {
  return <WebsiteDay2Session1Client />
} 