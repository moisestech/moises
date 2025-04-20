'use client'

import { Layout, Grid, ArrowRight } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function SquarespaceStructurePage() {
  return (
    <ContentPage
      title="Squarespace Web Structure"
      description="Learn how to implement headers, footers, sections, and grids in Squarespace"
      icon={Layout}
      sections={[
        {
          title: "Headers in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Squarespace headers are highly customizable through the Style Editor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Customize header layout and spacing in the Style Editor</li>
                <li>Add your logo and navigation menu</li>
                <li>Choose between transparent, solid, or gradient backgrounds</li>
                <li>Configure sticky header behavior</li>
                <li>Add announcement bars for important messages</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's header presets as a starting point and customize them through the Style Editor.</p>
              </div>
            </div>
          )
        },
        {
          title: "Footers in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Squarespace footers can be customized with various elements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Add social media links and icons</li>
                <li>Include business information and contact details</li>
                <li>Create multiple columns for different content sections</li>
                <li>Add newsletter signup forms</li>
                <li>Include copyright information and legal links</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's footer blocks to create a professional and organized footer layout.</p>
              </div>
            </div>
          )
        },
        {
          title: "Sections in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Squarespace sections are the building blocks of your pages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Add Section button to insert pre-designed sections</li>
                <li>Customize section backgrounds with colors, images, or videos</li>
                <li>Add parallax scrolling effects for visual interest</li>
                <li>Create full-width or boxed sections</li>
                <li>Use section anchors for smooth scrolling navigation</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Save your custom sections as templates for reuse across your site.</p>
              </div>
            </div>
          )
        },
        {
          title: "Grids in Squarespace",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Squarespace offers flexible grid systems for content layout:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the Grid Block for image galleries and portfolios</li>
                <li>Add columns with the Column Block</li>
                <li>Create responsive grids that adapt to different screen sizes</li>
                <li>Use the Gallery Block for masonry layouts</li>
                <li>Implement grid-based layouts for product displays</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use Squarespace's grid presets to maintain consistent spacing and alignment across your site.</p>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Now that you understand the basic structure, let's move on to implementing components:
              </p>
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/components"
                className={cn(
                  "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                  "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                )}
              >
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Squarespace Components</h4>
                  <p className="text-sm text-gray-600">Learn about carousels, modals, and other interactive elements</p>
                </div>
              </Link>
            </div>
          )
        }
      ]}
    />
  )
} 