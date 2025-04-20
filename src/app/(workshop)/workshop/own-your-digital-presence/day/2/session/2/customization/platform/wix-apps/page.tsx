import { Grid, Image, Briefcase, ShoppingCart, Users } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function WixAppsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Apps</h1>
        <p className="text-lg text-muted-foreground">
          Enhance your website with Wix's powerful app ecosystem. Choose from a wide range of apps to add functionality and features to your site.
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
            <h2 className="text-xl font-semibold">Portfolio & Media</h2>
          </div>
          <p className="text-muted-foreground">
            Showcase your work with professional portfolio and media apps.
          </p>
          <ul className="space-y-2">
            <li>Portfolio - Beautiful work showcase</li>
            <li>Instagram Feed - Social media integration</li>
            <li>Video - Professional video hosting</li>
            <li>Music - Audio streaming and sales</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Business Tools</h2>
          </div>
          <p className="text-muted-foreground">
            Manage your business operations with powerful tools.
          </p>
          <ul className="space-y-2">
            <li>Bookings - Appointment scheduling</li>
            <li>Events - Event management</li>
            <li>Forms - Custom form builder</li>
            <li>Chat - Live chat support</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <h2 className="text-xl font-semibold">E-commerce</h2>
          </div>
          <p className="text-muted-foreground">
            Sell products and services with complete e-commerce solutions.
          </p>
          <ul className="space-y-2">
            <li>Online Store - Full store functionality</li>
            <li>Pricing Plans - Subscription management</li>
            <li>Donations - Accept donations</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Community</h2>
          </div>
          <p className="text-muted-foreground">
            Build and engage with your community.
          </p>
          <ul className="space-y-2">
            <li>Groups - Community management</li>
            <li>File Share - Document sharing</li>
            <li>Online Programs - Course creation</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 