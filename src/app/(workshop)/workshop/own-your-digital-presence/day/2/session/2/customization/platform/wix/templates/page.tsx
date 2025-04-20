import { Layout, Copy, Image, FileText, ArrowRight } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function WixTemplatesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Templates</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to work with Wix templates and transfer content between sites.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Template Switching */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Switching</h2>
          </div>
          <p className="text-muted-foreground">
            While you can't directly apply a new template to an existing site, you can transfer content to a new site with your desired template.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Layout className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Process</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Create a new site with desired template</li>
                    <li>Transfer content from old site</li>
                    <li>Apply new theme to transferred content</li>
                    <li>Rebuild any incompatible elements</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Content Transfer */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Copy className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Content Transfer</h2>
          </div>
          <p className="text-muted-foreground">
            Transfer various elements and content between Wix sites.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Copy className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Transferable Items</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Pages and elements</li>
                    <li>Media files</li>
                    <li>Wix blog content</li>
                    <li>Domain settings</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Media Management */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Image className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Media Management</h2>
          </div>
          <p className="text-muted-foreground">
            Transfer media files between sites using the Media Manager.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Transfer Process</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Access Media Manager in new site</li>
                    <li>Click Upload → From Wix Account</li>
                    <li>Select source site and files</li>
                    <li>Import media to new site</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Element Transfer */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Element Transfer</h2>
          </div>
          <p className="text-muted-foreground">
            Copy and paste elements between sites with theme application.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Transfer Options</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Copy entire pages</li>
                    <li>Copy individual elements</li>
                    <li>Paste with or without theme</li>
                    <li>Rebuild incompatible elements</li>
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