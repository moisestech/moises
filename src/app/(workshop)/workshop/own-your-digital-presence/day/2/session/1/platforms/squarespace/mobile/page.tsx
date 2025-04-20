'use client'

import { Smartphone, ArrowRight, Layout, Maximize2, Monitor } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function SquarespaceMobilePage() {
  return (
    <ContentPage
      title="Squarespace Mobile Design"
      description="Learn how to implement mobile-first design and optimization in Squarespace"
      icon={Smartphone}
      sections={[
        {
          title: "Mobile-First Design in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Squarespace provides several tools for mobile-first design:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Mobile Styles panel to customize mobile layouts</li>
                <li>Configure responsive breakpoints in the Style Editor</li>
                <li>Optimize images for mobile performance</li>
                <li>Adjust spacing and typography for mobile screens</li>
                <li>Preview mobile layouts in real-time</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Start with the mobile layout first, then adapt to desktop for better mobile optimization.</p>
              </div>
            </div>
          )
        },
        {
          title: "Mobile Navigation",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create mobile-friendly navigation in Squarespace:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Mobile Navigation settings</li>
                <li>Configure hamburger menu behavior</li>
                <li>Add mobile-specific navigation items</li>
                <li>Optimize menu items for touch targets</li>
                <li>Ensure proper spacing for mobile users</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's mobile navigation presets to ensure proper touch targets and accessibility.</p>
              </div>
            </div>
          )
        },
        {
          title: "Mobile Content",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Optimize content for mobile devices:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Adjust text size and line height for readability</li>
                <li>Optimize images for mobile performance</li>
                <li>Use mobile-specific content blocks</li>
                <li>Configure touch-friendly buttons and links</li>
                <li>Test content on different mobile devices</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's mobile content presets to ensure proper spacing and readability on small screens.</p>
              </div>
            </div>
          )
        },
        {
          title: "Mobile Testing",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Test and optimize your mobile design:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use Squarespace's mobile preview tool</li>
                <li>Test on different device sizes</li>
                <li>Check touch targets and spacing</li>
                <li>Verify image loading and performance</li>
                <li>Test navigation and interactions</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's mobile testing tools to ensure your site works well on all devices.</p>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Now that you understand mobile design, let's move on to implementation:
              </p>
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/implementation"
                className={cn(
                  "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                  "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                )}
              >
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Squarespace Implementation</h4>
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