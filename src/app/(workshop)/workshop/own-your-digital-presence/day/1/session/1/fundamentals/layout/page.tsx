'use client'

import { Layout } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function LayoutFoundationsPage() {
  return (
    <ContentPage
      title="Layout Foundations"
      description="Learn the essential principles of effective website layout for artist portfolios."
      icon={Layout}
      sections={[
        {
          title: "Layout Principles",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Visual Hierarchy</h4>
                  <p className="text-gray-600 mb-2">Guide visitors through your content:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use size and spacing to indicate importance</li>
                    <li>Create clear visual paths for the eye to follow</li>
                    <li>Group related elements together</li>
                    <li>Use contrast to highlight key information</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Grid Systems</h4>
                  <p className="text-gray-600 mb-2">Organize content effectively:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use consistent column widths</li>
                    <li>Maintain proper spacing between elements</li>
                    <li>Align elements to create visual order</li>
                    <li>Break the grid intentionally for emphasis</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">White Space</h4>
                  <p className="text-gray-600 mb-2">Use space effectively:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Give content room to breathe</li>
                    <li>Create visual separation between sections</li>
                    <li>Use margins and padding consistently</li>
                    <li>Balance filled and empty spaces</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Common Layout Patterns",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Single Column</h4>
                  <p className="text-gray-600 mb-2">Ideal for:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Artist statements and bios</li>
                    <li>Long-form content</li>
                    <li>Process documentation</li>
                    <li>Exhibition essays</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Grid Layout</h4>
                  <p className="text-gray-600 mb-2">Perfect for:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Portfolio galleries</li>
                    <li>Project showcases</li>
                    <li>Exhibition documentation</li>
                    <li>Process work</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Split Screen</h4>
                  <p className="text-gray-600 mb-2">Great for:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Image and text combinations</li>
                    <li>Before/after comparisons</li>
                    <li>Process documentation</li>
                    <li>Project highlights</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Consistency</h4>
                  <p className="text-gray-600 mb-2">Maintain visual harmony:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use consistent spacing throughout</li>
                    <li>Maintain alignment patterns</li>
                    <li>Keep typography consistent</li>
                    <li>Follow a color scheme</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Responsiveness</h4>
                  <p className="text-gray-600 mb-2">Ensure mobile compatibility:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Test layouts on different devices</li>
                    <li>Use flexible grid systems</li>
                    <li>Consider touch interactions</li>
                    <li>Optimize for different screen sizes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Accessibility</h4>
                  <p className="text-gray-600 mb-2">Make your layout inclusive:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Ensure proper contrast ratios</li>
                    <li>Maintain readable text sizes</li>
                    <li>Use semantic HTML structure</li>
                    <li>Include proper alt text</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 