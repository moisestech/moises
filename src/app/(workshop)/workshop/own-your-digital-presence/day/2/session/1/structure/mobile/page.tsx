'use client'

import { Smartphone, ArrowRight, Maximize2, Hand, Layout, Monitor } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function MobilePage() {
  return (
    <ContentPage
      title="Mobile Design"
      description="Understanding mobile-first design principles and platform-specific implementations"
      icon={Smartphone}
      sections={[
        {
          title: "Mobile-First Design Principles",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Mobile-first design is an approach that prioritizes the mobile experience before scaling up to larger screens. This ensures your website is optimized for the majority of users who access content on mobile devices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Layout className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Responsive Layout</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Fluid grid systems</li>
                    <li>Flexible images and media</li>
                    <li>Breakpoint-based layouts</li>
                    <li>Stacked content for mobile</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Hand className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Touch Interactions</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Touch-friendly targets (48px minimum)</li>
                    <li>Gesture-based navigation</li>
                    <li>Touch-friendly forms</li>
                    <li>Mobile-friendly buttons</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Maximize2 className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Performance</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Optimized images and assets</li>
                    <li>Minimal HTTP requests</li>
                    <li>Lazy loading content</li>
                    <li>Reduced animations</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Monitor className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Content Strategy</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Prioritized content hierarchy</li>
                    <li>Concise, scannable text</li>
                    <li>Mobile-optimized media</li>
                    <li>Progressive disclosure</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Platform-Specific Implementation",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Each platform has its own tools and features for mobile optimization. Choose your platform to see specific implementation details:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-yellow-200 hover:bg-yellow-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-yellow-600">Wix Mobile</h4>
                    <p className="text-sm text-gray-600">Wix-specific mobile implementation</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-gray-200 hover:bg-gray-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Mobile</h4>
                    <p className="text-sm text-gray-600">Squarespace-specific mobile implementation</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Mobile</h4>
                    <p className="text-sm text-gray-600">GitHub Pages mobile implementation</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Follow these best practices for mobile design:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Start with mobile layouts and scale up</li>
                <li>Use relative units (em, rem, %) for sizing</li>
                <li>Implement touch-friendly navigation</li>
                <li>Optimize images and media for mobile</li>
                <li>Test on actual mobile devices</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use browser dev tools to simulate different mobile devices during development.</p>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 