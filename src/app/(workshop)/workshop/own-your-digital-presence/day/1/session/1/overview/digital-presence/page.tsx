'use client'

import { Globe } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

const DigitalPresencePage = () => {
  return (
    <ContentPage
      title="Understanding Digital Presence"
      description="Learn why digital presence is crucial for artists in today's connected world."
      icon={Globe}
      sections={[
        {
          title: "What is Digital Presence?",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Definition</h4>
                  <p className="text-gray-600 mb-2">
                    Digital presence refers to how you and your work exist and are perceived online. It encompasses:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Your portfolio website</li>
                    <li>Social media profiles</li>
                    <li>Online exhibitions</li>
                    <li>Digital documentation</li>
                    <li>Online reputation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Why It Matters</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Global reach and accessibility</li>
                    <li>Professional credibility</li>
                    <li>Opportunity discovery</li>
                    <li>Audience engagement</li>
                    <li>Career development</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Key Components",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Portfolio Website</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Professional presentation of work</li>
                    <li>Artist statement and bio</li>
                    <li>Contact information</li>
                    <li>Exhibition history</li>
                    <li>News and updates</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Social Media</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Platform selection</li>
                    <li>Content strategy</li>
                    <li>Community engagement</li>
                    <li>Brand consistency</li>
                    <li>Professional networking</li>
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
                  <h4 className="font-semibold text-indigo-600 mb-2">Content Strategy</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Regular updates and maintenance</li>
                    <li>High-quality images and documentation</li>
                    <li>Clear and consistent messaging</li>
                    <li>Professional communication</li>
                    <li>Accessibility considerations</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Technical Considerations</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Mobile responsiveness</li>
                    <li>Fast loading times</li>
                    <li>Content organization</li>
                    <li>User experience</li>
                    <li>Website performance</li>
                    <li>Accessibility</li>
                    <li>Regular backups</li>
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

export default DigitalPresencePage 