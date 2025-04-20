'use client'

import { Smartphone } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function MobileFoundationsPage() {
  return (
    <ContentPage
      title="Mobile Optimization"
      description="Learn how to create a responsive and mobile-friendly website that works well on all devices."
      icon={Smartphone}
      sections={[
        {
          title: "Responsive Design",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Viewport Settings</h4>
                  <p className="text-gray-600 mb-2">Essential viewport configurations:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Set proper viewport meta tag</li>
                    <li>Use relative units (em, rem, %) for sizing</li>
                    <li>Implement fluid typography</li>
                    <li>Consider device pixel ratio</li>
                    <li>Test on various screen sizes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Media Queries</h4>
                  <p className="text-gray-600 mb-2">Breakpoint strategies:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use mobile-first approach</li>
                    <li>Define meaningful breakpoints</li>
                    <li>Test breakpoint transitions</li>
                    <li>Consider device orientation</li>
                    <li>Document breakpoint usage</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Flexible Layouts</h4>
                  <p className="text-gray-600 mb-2">Layout techniques:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use CSS Grid and Flexbox</li>
                    <li>Implement fluid grids</li>
                    <li>Consider content reordering</li>
                    <li>Handle overflow gracefully</li>
                    <li>Maintain visual hierarchy</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Mobile UX",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Touch Interactions</h4>
                  <p className="text-gray-600 mb-2">Touch-friendly design:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Size touch targets appropriately (minimum 44x44px)</li>
                    <li>Provide adequate spacing between elements</li>
                    <li>Implement touch gestures</li>
                    <li>Consider thumb reach zones</li>
                    <li>Test touch interactions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Performance</h4>
                  <p className="text-gray-600 mb-2">Mobile optimization:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Optimize images for mobile</li>
                    <li>Minimize HTTP requests</li>
                    <li>Use efficient CSS and JavaScript</li>
                    <li>Implement lazy loading</li>
                    <li>Monitor performance metrics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Content Strategy</h4>
                  <p className="text-gray-600 mb-2">Mobile content considerations:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Prioritize essential content</li>
                    <li>Use concise, scannable text</li>
                    <li>Optimize images and media</li>
                    <li>Consider offline capabilities</li>
                    <li>Test content readability</li>
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
                  <h4 className="font-semibold text-indigo-600 mb-2">Testing</h4>
                  <p className="text-gray-600 mb-2">Testing strategies:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Test on actual devices</li>
                    <li>Use browser dev tools</li>
                    <li>Check different screen sizes</li>
                    <li>Test network conditions</li>
                    <li>Document testing results</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Accessibility</h4>
                  <p className="text-gray-600 mb-2">Mobile accessibility:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Ensure proper contrast</li>
                    <li>Support screen readers</li>
                    <li>Provide text alternatives</li>
                    <li>Test with accessibility tools</li>
                    <li>Follow WCAG guidelines</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Progressive Enhancement</h4>
                  <p className="text-gray-600 mb-2">Enhancement strategies:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Start with basic functionality</li>
                    <li>Add features progressively</li>
                    <li>Consider device capabilities</li>
                    <li>Test feature detection</li>
                    <li>Document enhancement layers</li>
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