import { Menu, ChevronDown, ChevronRight, Link, Smartphone, Layout } from "lucide-react"
import { PlatformBadge } from "@/components/workshop/PlatformBadge"

export default function NavigationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Website Navigation</h1>
        <p className="text-muted-foreground">
          Learn about navigation structures and best practices across platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Navigation Fundamentals */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Menu className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Navigation Fundamentals</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Components</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Main navigation menu</li>
                <li>Secondary navigation</li>
                <li>Footer links</li>
                <li>Breadcrumbs</li>
                <li>Call-to-action buttons</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Keep navigation simple and intuitive</li>
                <li>Use clear, descriptive labels</li>
                <li>Maintain consistent placement</li>
                <li>Limit top-level menu items</li>
                <li>Include search functionality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Mobile Navigation</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Mobile Patterns</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Hamburger menu</li>
                <li>Bottom navigation bar</li>
                <li>Slide-out menus</li>
                <li>Tab navigation</li>
                <li>Floating action buttons</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Considerations</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Touch-friendly targets</li>
                <li>Responsive breakpoints</li>
                <li>Gesture support</li>
                <li>Off-canvas navigation</li>
                <li>Mobile-first approach</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform-Specific Navigation */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Platform Navigation</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Wix Navigation</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Drag-and-drop menu builder</li>
                <li>Custom menu styles</li>
                <li>Mobile menu settings</li>
                <li>Dropdown menu support</li>
                <li>Menu animations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Squarespace Navigation</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Page organization</li>
                <li>Folder structure</li>
                <li>Secondary navigation</li>
                <li>Mobile menu customization</li>
                <li>Navigation labels</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">GitHub Navigation</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Custom navigation components</li>
                <li>Responsive menu implementation</li>
                <li>JavaScript menu interactions</li>
                <li>CSS styling options</li>
                <li>Accessibility considerations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Structure */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Link className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Navigation Structure</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Hierarchy</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Primary navigation items</li>
                <li>Secondary navigation items</li>
                <li>Footer navigation</li>
                <li>Utility navigation</li>
                <li>Contextual navigation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Organization</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Logical grouping</li>
                <li>Clear hierarchy</li>
                <li>Consistent labeling</li>
                <li>User-friendly structure</li>
                <li>SEO-friendly organization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 