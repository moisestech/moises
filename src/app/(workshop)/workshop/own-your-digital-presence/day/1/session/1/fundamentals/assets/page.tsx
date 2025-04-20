'use client'

import { Image } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function AssetsFoundationsPage() {
  return (
    <ContentPage
      title="Asset Management"
      description="Learn how to effectively manage and optimize your digital assets for your artist website."
      icon={Image}
      sections={[
        {
          title: "Asset Types",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Images</h4>
                  <p className="text-gray-600 mb-2">Best practices for images:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use high-resolution images (minimum 1500px on longest side)</li>
                    <li>Save in appropriate formats (JPEG for photos, PNG for graphics)</li>
                    <li>Optimize file sizes without quality loss</li>
                    <li>Maintain consistent aspect ratios</li>
                    <li>Include descriptive filenames and alt text</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Videos</h4>
                  <p className="text-gray-600 mb-2">Video optimization tips:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use appropriate video formats (MP4, WebM)</li>
                    <li>Optimize for web playback</li>
                    <li>Include captions and transcripts</li>
                    <li>Consider using video hosting services</li>
                    <li>Provide thumbnail images</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Documents</h4>
                  <p className="text-gray-600 mb-2">Document handling:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use PDF for downloadable content</li>
                    <li>Optimize PDFs for web viewing</li>
                    <li>Include proper metadata</li>
                    <li>Consider accessibility features</li>
                    <li>Provide alternative formats when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Organization",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">File Structure</h4>
                  <p className="text-gray-600 mb-2">Create an organized system:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use clear folder hierarchies</li>
                    <li>Group assets by type and purpose</li>
                    <li>Maintain consistent naming conventions</li>
                    <li>Keep original files separate from web versions</li>
                    <li>Document your organization system</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Version Control</h4>
                  <p className="text-gray-600 mb-2">Manage file versions:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Keep track of file versions</li>
                    <li>Use clear version naming</li>
                    <li>Maintain backup copies</li>
                    <li>Document changes between versions</li>
                    <li>Consider using version control systems</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Metadata</h4>
                  <p className="text-gray-600 mb-2">Include important information:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Add descriptive titles and descriptions</li>
                    <li>Include copyright information</li>
                    <li>Add relevant keywords and tags</li>
                    <li>Document creation dates and authors</li>
                    <li>Maintain consistent metadata formats</li>
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
                  <h4 className="font-semibold text-indigo-600 mb-2">Optimization</h4>
                  <p className="text-gray-600 mb-2">Ensure fast loading times:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Compress images appropriately</li>
                    <li>Use responsive image techniques</li>
                    <li>Implement lazy loading</li>
                    <li>Consider using a CDN</li>
                    <li>Test loading performance regularly</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Accessibility</h4>
                  <p className="text-gray-600 mb-2">Make assets accessible:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Provide alt text for images</li>
                    <li>Include captions for videos</li>
                    <li>Ensure proper color contrast</li>
                    <li>Use semantic HTML structure</li>
                    <li>Test with screen readers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Backup Strategy</h4>
                  <p className="text-gray-600 mb-2">Protect your assets:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Maintain regular backups</li>
                    <li>Use cloud storage solutions</li>
                    <li>Keep multiple backup copies</li>
                    <li>Test backup restoration</li>
                    <li>Document backup procedures</li>
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