'use client'

import { Layout, ArrowRight, Image, Menu, Maximize2, GalleryHorizontal } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function WixComponentsPage() {
  return (
    <ContentPage
      title="Wix Components"
      description="Learn how to implement interactive components in Wix"
      icon={Layout}
      sections={[
        {
          title: "Carousels in Wix",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Wix provides several ways to create and customize carousels:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Slideshow element for image carousels</li>
                <li>Add the Gallery element for portfolio carousels</li>
                <li>Customize transition effects and timing</li>
                <li>Add navigation arrows and dots</li>
                <li>Configure autoplay and pause on hover</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Wix's carousel presets as a starting point and customize the design to match your brand.</p>
              </div>
            </div>
          )
        },
        {
          title: "Modals in Wix",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create engaging modals using Wix's built-in tools:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Lightbox element for image modals</li>
                <li>Add the Popup element for announcements and forms</li>
                <li>Configure trigger conditions (scroll, time, exit intent)</li>
                <li>Customize animation and transition effects</li>
                <li>Add close buttons and overlay options</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Wix's modal templates to create consistent popups across your site.</p>
              </div>
            </div>
          )
        },
        {
          title: "Menus in Wix",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create responsive navigation menus in Wix:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Menu element for main navigation</li>
                <li>Add dropdown menus for subcategories</li>
                <li>Configure mobile menu behavior</li>
                <li>Customize menu styles and animations</li>
                <li>Add mega menus for complex navigation</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Wix's menu presets to ensure proper mobile responsiveness and accessibility.</p>
              </div>
            </div>
          )
        },
        {
          title: "Galleries in Wix",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create beautiful image galleries in Wix:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Gallery element for image displays</li>
                <li>Choose from grid, masonry, or slider layouts</li>
                <li>Add hover effects and animations</li>
                <li>Configure lightbox behavior</li>
                <li>Add filtering and sorting options</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Wix's gallery presets to create professional-looking image displays with minimal effort.</p>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Now that you understand the components, let's move on to implementing your page:
              </p>
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/implementation"
                className={cn(
                  "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                  "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                )}
              >
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Wix Implementation</h4>
                  <p className="text-sm text-gray-600">Learn how to put it all together and create your page</p>
                </div>
              </Link>
            </div>
          )
        }
      ]}
    />
  )
} 