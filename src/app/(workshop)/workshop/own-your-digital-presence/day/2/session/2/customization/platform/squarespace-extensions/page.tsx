import { Grid, BarChart2, Package, CreditCard, Link } from 'lucide-react'
import { FaSquarespace } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function SquarespaceExtensionsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Squarespace Extensions</h1>
        <p className="text-lg text-muted-foreground">
          Extend your website's functionality with Squarespace's curated selection of extensions. Choose from a variety of tools to enhance your site's capabilities.
        </p>
        <PlatformBadge platform="squarespace">
          <FaSquarespace className="mr-2" />
          Squarespace Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Sales & Marketing</h2>
          </div>
          <p className="text-muted-foreground">
            Boost your sales and marketing efforts with powerful tools.
          </p>
          <ul className="space-y-2">
            <li>Mailchimp - Email & SMS marketing</li>
            <li>Weglot - Multi-language support</li>
            <li>SEOSpace - SEO optimization</li>
            <li>LiveChat - Customer support</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Inventory & Products</h2>
          </div>
          <p className="text-muted-foreground">
            Manage your products and inventory efficiently.
          </p>
          <ul className="space-y-2">
            <li>Printful - Print-on-demand</li>
            <li>Syncee - Dropshipping integration</li>
            <li>SKU IQ - Inventory management</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Finance & Shipping</h2>
          </div>
          <p className="text-muted-foreground">
            Streamline your financial and shipping operations.
          </p>
          <ul className="space-y-2">
            <li>TaxJar - Tax calculations</li>
            <li>QuickBooks - Accounting integration</li>
            <li>ShipStation - Shipping management</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Link className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Connected Services</h2>
          </div>
          <p className="text-muted-foreground">
            Connect with other platforms and services.
          </p>
          <ul className="space-y-2">
            <li>Social Media Integration</li>
            <li>Third-party Services</li>
            <li>API Connections</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 