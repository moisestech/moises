import { Layout, Palette, Smartphone, Laptop, Settings } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function WixTemplatesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Templates</h1>
        <p className="text-lg text-muted-foreground">
          Explore Wix's extensive collection of templates and learn how to customize them for your website.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Template Overview */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Overview</h2>
          </div>
          <p className="text-muted-foreground">
            Wix offers over 800 professionally designed templates across various industries and purposes.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Layout className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Template Categories</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Business & Services</li>
                    <li>Store</li>
                    <li>Creative</li>
                    <li>Community</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Template Types */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Types</h2>
          </div>
          <p className="text-muted-foreground">
            Choose between pre-designed and blank templates based on your needs.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Palette className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Pre-designed Templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Includes sample content, color themes, and built-in features
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Palette className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Blank Templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Start from scratch with complete design control
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Responsive Design */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Responsive Design</h2>
          </div>
          <p className="text-muted-foreground">
            All Wix templates are fully responsive and optimized for all devices.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Smartphone className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Mobile Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic mobile-friendly layouts
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Laptop className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Desktop View</h3>
                  <p className="text-sm text-muted-foreground">
                    Full desktop experience with advanced features
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Template Customization */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Customization</h2>
          </div>
          <p className="text-muted-foreground">
            Extensive customization options for your chosen template.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Settings className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Customization Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Color schemes</li>
                    <li>Font styles</li>
                    <li>Layout modifications</li>
                    <li>Content updates</li>
                    <li>App integrations</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 