import { Palette, Image, Video, ArrowRight, Paintbrush } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function WixThemePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Theme & Design</h1>
        <p className="text-lg text-muted-foreground">
          Customize your site's look and feel with Wix's powerful theme and design tools.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Site Theme */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Site Theme</h2>
          </div>
          <p className="text-muted-foreground">
            Choose and customize your site's color and text theme for a consistent look.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Palette className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Theme Options</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Pre-designed theme selection</li>
                    <li>Custom color palette</li>
                    <li>Text style customization</li>
                    <li>Font family selection</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Themed Elements */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Paintbrush className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Themed Elements</h2>
          </div>
          <p className="text-muted-foreground">
            Add elements that automatically match your site's theme.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Paintbrush className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Element Types</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Themed text blocks</li>
                    <li>Styled buttons</li>
                    <li>Matching shapes</li>
                    <li>Consistent icons</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Page Background */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Image className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Page Background</h2>
          </div>
          <p className="text-muted-foreground">
            Customize your page backgrounds with various options.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Background Types</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Solid color backgrounds</li>
                    <li>Image backgrounds</li>
                    <li>Video backgrounds</li>
                    <li>Apply to multiple pages</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Page Transitions */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Page Transitions</h2>
          </div>
          <p className="text-muted-foreground">
            Add engaging transitions between pages.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Transition Effects</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Slide transitions</li>
                    <li>Fade effects</li>
                    <li>Zoom animations</li>
                    <li>Custom timing</li>
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