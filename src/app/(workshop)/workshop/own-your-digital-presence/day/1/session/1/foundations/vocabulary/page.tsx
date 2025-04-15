'use client'

import { 
  BookOpen, 
  Globe, 
  Server, 
  Shield, 
  Smartphone, 
  Layout, 
  Search, 
  FileText, 
  Image as LucideImage, 
  LayoutDashboard, 
  Users, 
  Code2, 
  FileCode,
  ArrowLeft, 
  ChevronRight 
} from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

const VocabularyPage = () => {
  return (
    <ContentPage
      title="Web Development Vocabulary"
      description="Learn the essential terms and concepts you'll need to understand when building your website."
      icon={BookOpen}
      sections={[
        {
          title: "Basic Web Terms",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <NextImage 
                        src="/images/vocabulary-concept.jpg" 
                        alt="Vocabulary concept illustration" 
                        width={24} 
                        height={24}
                        className="w-6 h-6 text-indigo-600"
                      />
                    </div>
                    <h3 className="text-xl font-space-mono font-bold text-gray-900">Domain</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Your website&apos;s address on the internet (e.g., www.yourname.com). 
                    Think of it as your digital street address.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Related Terms:</span> URL, Web Address, Domain Name
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <Server className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-space-mono font-bold text-gray-900">Hosting</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The service that stores your website&apos;s files and makes them accessible on the internet. 
                    Like renting space for your digital home.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Related Terms:</span> Server, Web Host, Cloud Storage
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">SSL Certificate</h4>
                  </div>
                  <p className="text-gray-600 mb-2">A security protocol that encrypts data between your website and visitors (indicated by "https://").</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Let's Encrypt, Cloudflare SSL</p>
                  <Link 
                    href="https://letsencrypt.org/" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about SSL →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">Responsive Design</h4>
                  </div>
                  <p className="text-gray-600 mb-2">A design approach that ensures your website looks good on all devices (desktop, tablet, mobile).</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Bootstrap, Tailwind CSS, Material UI</p>
                  <Link 
                    href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about responsive design →
                  </Link>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Content Management",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Layout className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">CMS (Content Management System)</h4>
                  </div>
                  <p className="text-gray-600 mb-2">A platform that allows you to manage website content without coding (e.g., WordPress, Squarespace).</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: WordPress, Squarespace, Wix, Webflow</p>
                  <Link 
                    href="https://wordpress.org/" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about CMS →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">Website Performance</h4>
                  </div>
                  <p className="text-gray-600 mb-2">Tools for monitoring and improving website speed and user experience.</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Google Analytics, Squarespace Analytics, Wix Analytics</p>
                  <Link 
                    href="https://web.dev/performance/"
                    className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about website performance →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">Metadata</h4>
                  </div>
                  <p className="text-gray-600 mb-2">Information about your content that helps search engines understand your website.</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Title tags, meta descriptions, Open Graph tags</p>
                  <Link 
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about metadata →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <NextImage
                      src="/images/workshop/vocabulary-concept.jpg"
                      alt="Vocabulary concept illustration"
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                    <h3 className="font-medium text-gray-900">Vocabulary Basics</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Descriptive text added to images for accessibility purposes.</p>
                  <p className="text-sm text-gray-500 mb-2">Example: "Abstract painting with blue and yellow brushstrokes"</p>
                  <Link 
                    href="https://www.w3.org/WAI/tutorials/images/decision-tree/" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about alt text →
                  </Link>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Design & Development",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <LayoutDashboard className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">UI (User Interface)</h4>
                  </div>
                  <p className="text-gray-600 mb-2">The visual elements and layout of your website that users interact with.</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Buttons, menus, forms, color schemes</p>
                  <Link 
                    href="https://www.interaction-design.org/literature/topics/ui-design" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about UI design →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">UX (User Experience)</h4>
                  </div>
                  <p className="text-gray-600 mb-2">The overall experience users have when interacting with your website.</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Navigation flow, loading times, mobile responsiveness</p>
                  <Link 
                    href="https://www.nngroup.com/articles/definition-user-experience/" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about UX →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">CSS (Cascading Style Sheets)</h4>
                  </div>
                  <p className="text-gray-600 mb-2">Code that controls the visual appearance of your website.</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Colors, fonts, spacing, animations</p>
                  <Link 
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about CSS →
                  </Link>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileCode className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-semibold text-indigo-600">HTML (Hypertext Markup Language)</h4>
                  </div>
                  <p className="text-gray-600 mb-2">The standard language for creating web pages and applications.</p>
                  <p className="text-sm text-gray-500 mb-2">Examples: Headings, paragraphs, links, images</p>
                  <Link 
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                    target="_blank" 
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more about HTML →
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  )
}

export default VocabularyPage 