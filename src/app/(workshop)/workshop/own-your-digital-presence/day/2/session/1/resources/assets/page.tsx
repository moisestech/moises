'use client'

import { ArrowRight, Image, Palette, Smartphone, Code, Camera, Music, FileText } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function AssetsPage() {
  return (
    <ContentPage
      title="Website Assets"
      description="Resources for finding and managing your website assets"
      icon={Image}
      sections={[
        {
          title: "Image Resources",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Image className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Stock Photos</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Unsplash (free high-quality images)</li>
                    <li>Pexels (free stock photos)</li>
                    <li>Pixabay (free images and videos)</li>
                    <li>Adobe Stock (premium images)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Camera className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Image Optimization</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>TinyPNG (image compression)</li>
                    <li>Squoosh (web image optimization)</li>
                    <li>ImageOptim (desktop tool)</li>
                    <li>SVGOMG (SVG optimization)</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Design Assets",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Palette className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Icons & Graphics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Font Awesome (icons)</li>
                    <li>Material Icons</li>
                    <li>Flaticon (free icons)</li>
                    <li>Iconfinder (premium icons)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Fonts & Typography</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Google Fonts</li>
                    <li>Adobe Fonts</li>
                    <li>Font Squirrel</li>
                    <li>Typekit</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Platform-Specific Assets",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Image className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Wix Assets</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Wix Media</li>
                    <li>Wix App Market</li>
                    <li>Wix Templates</li>
                    <li>Wix Design Tools</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Image className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Squarespace Assets</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Squarespace Templates</li>
                    <li>Squarespace Extensions</li>
                    <li>Squarespace Design Tools</li>
                    <li>Squarespace Media</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">GitHub Assets</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>GitHub Pages Themes</li>
                    <li>Open Source Templates</li>
                    <li>Community Resources</li>
                    <li>Development Tools</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Asset Management",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Smartphone className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Best Practices</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Optimize for web performance</li>
                    <li>Use appropriate file formats</li>
                    <li>Maintain consistent branding</li>
                    <li>Consider mobile devices</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Code className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Technical Considerations</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>File size optimization</li>
                    <li>Responsive images</li>
                    <li>Lazy loading</li>
                    <li>CDN usage</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/resources/templates"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Website Templates</h4>
                    <p className="text-sm text-gray-600">Explore platform-specific templates</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Content Strategy</h4>
                    <p className="text-sm text-gray-600">Learn about organizing your content</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 