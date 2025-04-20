import { FileText, Image, Layout, List, PenTool, User } from 'lucide-react'
import { FaWix, FaSquarespace, FaGithub } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function AboutCVPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About & CV Pages</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create compelling About and CV pages across different platforms to showcase your professional background and artistic journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Wix Section */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="wix">Wix</PlatformBadge>
          </div>
          <h2 className="text-xl font-semibold">Wix About/CV Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Customizable layouts with drag-and-drop</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image className="h-4 w-4 shrink-0" />
                  <span>Image galleries and media integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <List className="h-4 w-4 shrink-0" />
                  <span>Timeline and experience sections</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <PenTool className="h-4 w-4 shrink-0" />
                  <span>Use Wix's built-in CV templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <User className="h-4 w-4 shrink-0" />
                  <span>Add professional headshots and portfolio images</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Include downloadable PDF versions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Squarespace Section */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="squarespace">Squarespace</PlatformBadge>
          </div>
          <h2 className="text-xl font-semibold">Squarespace About/CV Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Fluid Engine for responsive layouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image className="h-4 w-4 shrink-0" />
                  <span>Image blocks with advanced styling</span>
                </li>
                <li className="flex items-start gap-2">
                  <List className="h-4 w-4 shrink-0" />
                  <span>Customizable content blocks</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <PenTool className="h-4 w-4 shrink-0" />
                  <span>Utilize Squarespace's style editor</span>
                </li>
                <li className="flex items-start gap-2">
                  <User className="h-4 w-4 shrink-0" />
                  <span>Create a professional bio section</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Link to external CV documents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="github">GitHub</PlatformBadge>
          </div>
          <h2 className="text-xl font-semibold">GitHub About/CV Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Markdown-based content creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image className="h-4 w-4 shrink-0" />
                  <span>Image hosting and embedding</span>
                </li>
                <li className="flex items-start gap-2">
                  <List className="h-4 w-4 shrink-0" />
                  <span>Version control for updates</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <PenTool className="h-4 w-4 shrink-0" />
                  <span>Use GitHub Pages for hosting</span>
                </li>
                <li className="flex items-start gap-2">
                  <User className="h-4 w-4 shrink-0" />
                  <span>Create a dedicated CV repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Include README.md with your CV</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-4">Cross-Platform Tips</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Content Organization</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <List className="h-4 w-4 shrink-0" />
                <span>Keep your CV concise and well-structured</span>
              </li>
              <li className="flex items-start gap-2">
                <Image className="h-4 w-4 shrink-0" />
                <span>Use high-quality images and maintain consistency</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="h-4 w-4 shrink-0" />
                <span>Regularly update your content and achievements</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Professional Presentation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <PenTool className="h-4 w-4 shrink-0" />
                <span>Maintain consistent branding across platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <User className="h-4 w-4 shrink-0" />
                <span>Include contact information and social links</span>
              </li>
              <li className="flex items-start gap-2">
                <Layout className="h-4 w-4 shrink-0" />
                <span>Ensure mobile responsiveness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 