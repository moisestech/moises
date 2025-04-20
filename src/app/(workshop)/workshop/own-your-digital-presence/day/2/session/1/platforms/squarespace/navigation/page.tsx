import { Menu, ChevronDown, ChevronRight, Link, Smartphone, Layout, FolderTree } from "lucide-react"
import { PlatformBadge } from "@/components/workshop/PlatformBadge"

export default function SquarespaceNavigationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Squarespace Navigation</h1>
        <p className="text-muted-foreground">
          Learn how to set up and customize navigation in Squarespace
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Navigation Structure */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="squarespace">Squarespace</PlatformBadge>
            <h2 className="text-xl font-semibold">Navigation Structure</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Page Organization</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Main navigation pages</li>
                <li>Secondary navigation</li>
                <li>Footer links</li>
                <li>Folder structure</li>
                <li>Page hierarchy</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Navigation Types</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Main navigation menu</li>
                <li>Secondary navigation</li>
                <li>Footer navigation</li>
                <li>Utility navigation</li>
                <li>Contextual navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Customization */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Customization</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Menu Settings</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Menu style and layout</li>
                <li>Font and color customization</li>
                <li>Spacing and alignment</li>
                <li>Dropdown menu options</li>
                <li>Hover effects</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Page Settings</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Page visibility</li>
                <li>Navigation labels</li>
                <li>Page order</li>
                <li>Folder organization</li>
                <li>Link settings</li>
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
              <h3 className="font-medium">Mobile Menu</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Hamburger menu options</li>
                <li>Mobile menu style</li>
                <li>Breakpoint settings</li>
                <li>Touch-friendly targets</li>
                <li>Mobile-specific labels</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Responsive Design</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Responsive breakpoints</li>
                <li>Mobile-first approach</li>
                <li>Menu collapse behavior</li>
                <li>Mobile-specific content</li>
                <li>Touch interactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <FolderTree className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Best Practices</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Organization</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Logical page hierarchy</li>
                <li>Clear navigation labels</li>
                <li>Consistent structure</li>
                <li>User-friendly organization</li>
                <li>SEO-friendly structure</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">User Experience</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Intuitive navigation flow</li>
                <li>Clear call-to-actions</li>
                <li>Consistent placement</li>
                <li>Accessible navigation</li>
                <li>Quick access to key pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 