'use client'

import { Layout, ArrowRight, Image, Menu, Maximize2, GalleryHorizontal } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function SquarespaceComponentsPage() {
  return (
    <ContentPage
      title="Squarespace Components"
      description="Learn how to implement interactive components in Squarespace"
      icon={Layout}
      sections={[
        {
          title: "Carousels in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Squarespace offers several ways to create carousels:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Gallery Block with carousel layout</li>
                <li>Add the Slideshow Block for image carousels</li>
                <li>Customize transition effects and timing</li>
                <li>Add navigation arrows and dots</li>
                <li>Configure autoplay and pause on hover</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's carousel presets as a starting point and customize through the Style Editor.</p>
              </div>
            </div>
          )
        },
        {
          title: "Modals in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create engaging modals using Squarespace's tools:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Lightbox feature for image modals</li>
                <li>Add the Newsletter Block for signup forms</li>
                <li>Configure announcement bars for important messages</li>
                <li>Customize modal styles through the Style Editor</li>
                <li>Add close buttons and overlay options</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's built-in blocks to create consistent modals across your site.</p>
              </div>
            </div>
          )
        },
        {
          title: "Menus in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create responsive navigation menus in Squarespace:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Main Navigation for primary menu</li>
                <li>Add secondary navigation for additional links</li>
                <li>Configure mobile menu behavior</li>
                <li>Customize menu styles through the Style Editor</li>
                <li>Add dropdown menus for subcategories</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's navigation presets to ensure proper mobile responsiveness and accessibility.</p>
              </div>
            </div>
          )
        },
        {
          title: "Galleries in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create beautiful image galleries in Squarespace:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Gallery Block for image displays</li>
                <li>Choose from grid, masonry, or carousel layouts</li>
                <li>Add hover effects and animations</li>
                <li>Configure lightbox behavior</li>
                <li>Add filtering and sorting options</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's gallery presets to create professional-looking image displays with minimal effort.</p>
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