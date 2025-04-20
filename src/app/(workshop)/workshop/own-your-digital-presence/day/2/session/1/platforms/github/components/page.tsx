'use client'

import { Code, ArrowRight, Image, Menu, Maximize2, GalleryHorizontal } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function GitHubComponentsPage() {
  return (
    <ContentPage
      title="GitHub Components"
      description="Learn how to implement interactive components using HTML, CSS, and JavaScript"
      icon={Code}
      sections={[
        {
          title: "Carousels with JavaScript",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create responsive carousels using modern JavaScript:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the <code className="bg-gray-100 px-1 rounded">swiper.js</code> library for touch-friendly carousels</li>
                <li>Implement CSS Grid or Flexbox for layout</li>
                <li>Add smooth transitions with CSS animations</li>
                <li>Create navigation controls with JavaScript</li>
                <li>Implement autoplay and pause functionality</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid for the carousel container and JavaScript for the sliding functionality.</p>
              </div>
            </div>
          )
        },
        {
          title: "Modals with JavaScript",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create accessible modals using HTML and JavaScript:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the <code className="bg-gray-100 px-1 rounded">dialog</code> element for semantic structure</li>
                <li>Implement CSS for modal positioning and animations</li>
                <li>Add keyboard navigation and focus trapping</li>
                <li>Create backdrop with CSS <code className="bg-gray-100 px-1 rounded">::backdrop</code></li>
                <li>Handle modal state with JavaScript</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use the native dialog element for better accessibility and browser support.</p>
              </div>
            </div>
          )
        },
        {
          title: "Menus with JavaScript",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create responsive navigation menus:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use semantic HTML with <code className="bg-gray-100 px-1 rounded">nav</code> and <code className="bg-gray-100 px-1 rounded">ul</code> elements</li>
                <li>Implement CSS Flexbox for layout</li>
                <li>Add hamburger menu for mobile</li>
                <li>Create dropdowns with CSS and JavaScript</li>
                <li>Ensure keyboard navigation and accessibility</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid for complex menu layouts and JavaScript for interactive features.</p>
              </div>
            </div>
          )
        },
        {
          title: "Galleries with JavaScript",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create responsive image galleries:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use CSS Grid for gallery layout</li>
                <li>Implement lightbox with JavaScript</li>
                <li>Add lazy loading for performance</li>
                <li>Create filtering with JavaScript</li>
                <li>Implement masonry layout with CSS Grid</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid for the gallery layout and JavaScript for interactive features like lightbox and filtering.</p>
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