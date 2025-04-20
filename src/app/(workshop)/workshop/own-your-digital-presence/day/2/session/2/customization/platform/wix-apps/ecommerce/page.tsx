import { ShoppingCart, CreditCard, Heart } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function EcommercePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">E-commerce Apps</h1>
        <p className="text-lg text-muted-foreground">
          Sell products, services, and memberships with Wix's e-commerce solutions. These apps help you create a complete online store experience.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Online Store</h2>
          </div>
          <p className="text-muted-foreground">
            Create a complete online store with powerful features.
          </p>
          <ul className="space-y-2">
            <li>Product management</li>
            <li>Inventory tracking</li>
            <li>Multiple payment options</li>
            <li>Shipping integration</li>
            <li>Order management</li>
            <li>Customer accounts</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Pricing Plans</h2>
          </div>
          <p className="text-muted-foreground">
            Sell subscriptions and memberships with recurring payments.
          </p>
          <ul className="space-y-2">
            <li>Subscription management</li>
            <li>Recurring billing</li>
            <li>Member access control</li>
            <li>Plan customization</li>
            <li>Payment scheduling</li>
            <li>Member portal</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Donations</h2>
          </div>
          <p className="text-muted-foreground">
            Accept donations and support for your cause or organization.
          </p>
          <ul className="space-y-2">
            <li>Custom donation forms</li>
            <li>Recurring donations</li>
            <li>Donation tracking</li>
            <li>Thank you pages</li>
            <li>Donor management</li>
            <li>Campaign creation</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 