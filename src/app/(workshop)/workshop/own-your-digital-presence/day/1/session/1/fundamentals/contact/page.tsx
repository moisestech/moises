import { Mail, MessageSquare, Phone, MapPin, Send, Shield } from "lucide-react"
import { PlatformBadge } from "@/components/workshop/PlatformBadge"

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Forms</h1>
        <p className="text-muted-foreground">
          Learn how to implement contact forms across different platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Wix Contact Forms */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="wix">Wix</PlatformBadge>
            <h2 className="text-xl font-semibold">Contact Forms</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Drag-and-drop form builder</li>
                <li>Pre-designed form templates</li>
                <li>Email notifications</li>
                <li>Form analytics and tracking</li>
                <li>Spam protection</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Setup Steps</h3>
              <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                <li>Add the Contact Form element</li>
                <li>Customize form fields and design</li>
                <li>Set up email notifications</li>
                <li>Configure form settings</li>
                <li>Test and publish</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Squarespace Contact Forms */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="squarespace">Squarespace</PlatformBadge>
            <h2 className="text-xl font-semibold">Contact Forms</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Form block integration</li>
                <li>Customizable form fields</li>
                <li>Email forwarding</li>
                <li>Form storage and management</li>
                <li>Anti-spam measures</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Setup Steps</h3>
              <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                <li>Add a Form Block to your page</li>
                <li>Configure form fields and layout</li>
                <li>Set up email notifications</li>
                <li>Customize form styling</li>
                <li>Enable form storage</li>
              </ol>
            </div>
          </div>
        </div>

        {/* GitHub Contact Forms */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="github">GitHub</PlatformBadge>
            <h2 className="text-xl font-semibold">Contact Forms</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Custom form implementation</li>
                <li>Form submission handling</li>
                <li>Email service integration</li>
                <li>Form validation</li>
                <li>Custom styling options</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Setup Steps</h3>
              <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                <li>Create HTML form structure</li>
                <li>Add form validation</li>
                <li>Set up form submission handling</li>
                <li>Integrate with email service</li>
                <li>Style and customize the form</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Best Practices</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Form Design</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Keep forms simple and focused</li>
                <li>Use clear labels and placeholders</li>
                <li>Include required field indicators</li>
                <li>Ensure mobile responsiveness</li>
                <li>Add clear call-to-action buttons</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Security & Privacy</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Implement spam protection</li>
                <li>Use secure form submission</li>
                <li>Add privacy policy links</li>
                <li>Handle data securely</li>
                <li>Regularly monitor form submissions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 