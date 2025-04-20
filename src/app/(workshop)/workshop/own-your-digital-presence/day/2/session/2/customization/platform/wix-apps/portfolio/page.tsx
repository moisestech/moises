import { Image, Instagram, Video, Music } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function PortfolioMediaPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Portfolio & Media Apps</h1>
        <p className="text-lg text-muted-foreground">
          Showcase your work with professional portfolio and media apps from Wix. These tools help you present your content in the best possible way.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Image className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Portfolio</h2>
          </div>
          <p className="text-muted-foreground">
            Create a stunning portfolio to showcase your work.
          </p>
          <ul className="space-y-2">
            <li>Customizable layouts</li>
            <li>Image galleries</li>
            <li>Project descriptions</li>
            <li>Category organization</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Instagram className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Instagram Feed</h2>
          </div>
          <p className="text-muted-foreground">
            Display your Instagram content directly on your website.
          </p>
          <ul className="space-y-2">
            <li>Auto-sync with Instagram</li>
            <li>Customizable layouts</li>
            <li>Hashtag filtering</li>
            <li>Social proof</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Video</h2>
          </div>
          <p className="text-muted-foreground">
            Host and showcase your videos professionally.
          </p>
          <ul className="space-y-2">
            <li>Video hosting</li>
            <li>Custom player</li>
            <li>Playlist creation</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Music</h2>
          </div>
          <p className="text-muted-foreground">
            Share and sell your music directly on your website.
          </p>
          <ul className="space-y-2">
            <li>Audio player</li>
            <li>Music store</li>
            <li>Playlist creation</li>
            <li>Commission-free sales</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 