'use client'

import { CheckSquare } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function ChecklistPage() {
  return (
    <ContentPage
      title="Website Launch Checklist"
      description="Use this comprehensive checklist to ensure your portfolio website is ready for launch."
      icon={CheckSquare}
      sections={[
        {
          title: "Website Launch Checklist",
          content: (
            <div className="space-y-4">
              <p>
                Follow this checklist to ensure your website is complete and ready for launch:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Website Launch Checklist</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">1. Content Preparation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>All portfolio images are optimized and ready</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Artist statement and bio are written</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Project descriptions are complete</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Contact information is up to date</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">2. Technical Setup</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Domain name is registered</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Hosting is set up</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>SSL certificate is installed</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Website is mobile-responsive</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">3. Analytics & Performance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Google Analytics is installed</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>XML sitemap is generated</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">4. Final Checks</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>All links are working</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Forms are tested</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Social media links are connected</span>
                      </li>
                      <li className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span>Backup system is in place</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="/workshop/own-your-digital-presence/day/1/session/1/resources/checklist.pdf"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  download
                >
                  Download Checklist
                </a>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 