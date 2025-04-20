'use client'

import { Smartphone, ArrowRight, Layout, Maximize2, Monitor } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function GitHubMobilePage() {
  return (
    <ContentPage
      title="GitHub Mobile Design"
      description="Learn how to implement mobile-first design and optimization in GitHub Pages"
      icon={Smartphone}
      sections={[
        {
          title: "Mobile-First Design in GitHub Pages",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Implement mobile-first design in your GitHub Pages site:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use CSS media queries for responsive design</li>
                <li>Implement flexible grid systems</li>
                <li>Optimize images for mobile performance</li>
                <li>Use relative units (em, rem, %) for sizing</li>
                <li>Test across different device sizes</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Start with mobile styles first, then use media queries to enhance for larger screens.</p>
              </div>
            </div>
          )
        },
        {
          title: "Mobile Navigation",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create mobile-friendly navigation:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Implement hamburger menu for mobile</li>
                <li>Use touch-friendly navigation elements</li>
                <li>Ensure proper spacing for touch targets</li>
                <li>Add smooth transitions for mobile menus</li>
                <li>Test navigation on different devices</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS flexbox or grid for responsive navigation layouts.</p>
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
                <li>Use responsive typography</li>
                <li>Optimize images with srcset and sizes</li>
                <li>Implement lazy loading for images</li>
                <li>Use CSS Grid or Flexbox for layouts</li>
                <li>Test content on different devices</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS custom properties for consistent spacing and typography across devices.</p>
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
                <li>Use browser dev tools for testing</li>
                <li>Test on actual mobile devices</li>
                <li>Check performance with Lighthouse</li>
                <li>Verify touch interactions</li>
                <li>Test across different browsers</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use GitHub Actions for automated testing and deployment.</p>
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
                href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/implementation"
                className={cn(
                  "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                  "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                )}
              >
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">GitHub Implementation</h4>
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