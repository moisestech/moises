'use client'

import { ClipboardList } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function WorksheetPage() {
  return (
    <ContentPage
      title="Website Planning Worksheet"
      description="Download and complete this worksheet to plan your portfolio website content and structure."
      icon={ClipboardList}
      sections={[
        {
          title: "Website Planning Worksheet",
          content: (
            <div className="space-y-4">
              <p>
                Use this worksheet to organize your thoughts and plan your website content:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Website Planning Worksheet</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">1. Website Goals</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>What is the main purpose of your website?</li>
                      <li>Who is your target audience?</li>
                      <li>What actions do you want visitors to take?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">2. Content Sections</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Portfolio/Gallery</li>
                      <li>About/Biography</li>
                      <li>Contact Information</li>
                      <li>Additional Sections (Blog, Shop, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">3. Media Assets</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Portfolio Images</li>
                      <li>Profile/About Images</li>
                      <li>Additional Media (Videos, Audio, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">4. Written Content</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Artist Statement</li>
                      <li>Biography</li>
                      <li>Project Descriptions</li>
                      <li>Contact Information</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="/workshop/own-your-digital-presence/day/1/session/1/resources/worksheet.pdf"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  download
                >
                  Download Worksheet
                </a>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 