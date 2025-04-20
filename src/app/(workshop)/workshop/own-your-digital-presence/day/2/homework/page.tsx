import { ClipboardList, Layout, FileText, Smartphone, Image, Code, Settings } from 'lucide-react'

export default function Day2HomeworkPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Day 2 Homework Challenges</h1>
        <p className="text-lg text-muted-foreground">
          Complete these challenges to practice your website creation and customization skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Template Customization */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Customization</h2>
          </div>
          <p className="text-muted-foreground">
            Customize your chosen website template to match your brand and content needs.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Layout className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Select and apply a template that matches your needs</li>
                    <li>Customize colors, fonts, and layout</li>
                    <li>Add your logo and brand elements</li>
                    <li>Test template responsiveness on different devices</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Content Implementation */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Content Implementation</h2>
          </div>
          <p className="text-muted-foreground">
            Implement your planned content and ensure it's properly organized.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Add all planned pages and sections</li>
                    <li>Implement your written content</li>
                    <li>Organize content hierarchy</li>
                    <li>Add internal links between pages</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Media Management */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Image className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Media Management</h2>
          </div>
          <p className="text-muted-foreground">
            Add and optimize your media assets for the website.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Upload and organize images and videos</li>
                    <li>Optimize media for web performance</li>
                    <li>Add alt text and descriptions</li>
                    <li>Create media galleries and slideshows</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Optimization */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Mobile Optimization</h2>
          </div>
          <p className="text-muted-foreground">
            Ensure your website works perfectly on mobile devices.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Smartphone className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Test all pages on mobile devices</li>
                    <li>Adjust mobile-specific layouts</li>
                    <li>Optimize touch interactions</li>
                    <li>Check mobile navigation</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Platform Features */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Platform Features</h2>
          </div>
          <p className="text-muted-foreground">
            Implement and test platform-specific features.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Code className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Add and configure essential apps/extensions</li>
                    <li>Set up contact forms and social links</li>
                    <li>Configure SEO settings</li>
                    <li>Test all interactive features</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Customization Tools */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Customization Tools</h2>
          </div>
          <p className="text-muted-foreground">
            Explore and implement advanced customization options.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Settings className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Experiment with advanced design tools</li>
                    <li>Customize animations and transitions</li>
                    <li>Add custom code if needed</li>
                    <li>Test all customization features</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 