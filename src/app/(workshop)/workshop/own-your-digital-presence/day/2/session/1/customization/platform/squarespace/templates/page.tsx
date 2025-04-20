import { FileText, Folder, Code, Layout, Settings } from 'lucide-react'
import { FaSquarespace } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function SquarespaceTemplatesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Squarespace Templates</h1>
        <p className="text-lg text-muted-foreground">
          Learn about Squarespace's template system and how to customize your website's structure and design.
        </p>
        <PlatformBadge platform="squarespace">
          <FaSquarespace className="mr-2" />
          Squarespace Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Template Structure */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Folder className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Structure</h2>
          </div>
          <p className="text-muted-foreground">
            Squarespace templates are organized into predefined folders and files, similar to a static website.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Core Folders</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>/assets - Design assets (images, fonts, icons)</li>
                    <li>/blocks - Navigation and reusable components</li>
                    <li>/collections - Content templates</li>
                    <li>/pages - Static page files</li>
                    <li>/scripts - JavaScript files</li>
                    <li>/styles - CSS/LESS stylesheets</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Template Languages */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Languages</h2>
          </div>
          <p className="text-muted-foreground">
            Squarespace templates use several languages and pre-processors for development.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Code className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">JSON Template</h3>
                  <p className="text-sm text-muted-foreground">
                    A minimalist template language for HTML templates
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Code className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">LESS CSS</h3>
                  <p className="text-sm text-muted-foreground">
                    Extends CSS with variables, mixins, and functions
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Template Configuration */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Template Configuration</h2>
          </div>
          <p className="text-muted-foreground">
            Configure your template settings and structure.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">template.conf</h3>
                  <p className="text-sm text-muted-foreground">
                    Main configuration file for:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Template naming</li>
                    <li>Layout specifications</li>
                    <li>Navigation sections</li>
                    <li>Stylesheet management</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Layouts & Regions */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Layouts & Regions</h2>
          </div>
          <p className="text-muted-foreground">
            Structure your website's layout with regions.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Layout className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">site.region</h3>
                  <p className="text-sm text-muted-foreground">
                    Global site wrapper template containing:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Site header</li>
                    <li>Footer</li>
                    <li>Sidebars</li>
                    <li>Body variants</li>
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