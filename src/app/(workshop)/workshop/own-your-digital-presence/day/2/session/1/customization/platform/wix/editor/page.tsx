import { Layout, Paintbrush, Smartphone, Save, Eye, Upload } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function WixEditorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Editor</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to build and customize your website using the powerful Wix Editor platform.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Getting Started */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Getting Started</h2>
          </div>
          <p className="text-muted-foreground">
            Access the Wix Editor to begin building and customizing your website.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Layout className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Access Points</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Dashboard: Click Edit Site or Design Site</li>
                    <li>Mobile App: Access editor on your device</li>
                    <li>Direct URL: Your site's editor URL</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Adding Elements */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Paintbrush className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Adding Elements</h2>
          </div>
          <p className="text-muted-foreground">
            Customize your site with hundreds of stunning, customizable elements.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Paintbrush className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Available Elements</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Images and galleries</li>
                    <li>Text and headings</li>
                    <li>Shapes and strips</li>
                    <li>Buttons and forms</li>
                    <li>Social media elements</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Optimization */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Mobile Optimization</h2>
          </div>
          <p className="text-muted-foreground">
            Ensure your site looks great on all devices with mobile-specific adjustments.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Smartphone className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Mobile Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Dedicated mobile editor</li>
                    <li>Responsive design tools</li>
                    <li>Element visibility controls</li>
                    <li>Mobile-specific layouts</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Publishing */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Upload className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Publishing</h2>
          </div>
          <p className="text-muted-foreground">
            Save, preview, and publish your site with confidence.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Save className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Publishing Tools</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Save: Regular saving of work</li>
                    <li>Preview: View site before publishing</li>
                    <li>Publish: Make site live</li>
                    <li>Site History: Version control</li>
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