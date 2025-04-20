import { Calendar, Clock, MapPin, Users, Ticket, Link, FileText } from 'lucide-react'
import { FaWix, FaSquarespace, FaGithub } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Events Management</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create and manage events across different platforms to showcase your exhibitions, workshops, and performances.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Wix Section */}
        <div className="space-y-4 rounded-lg border p-6">
          <div className="flex items-center gap-2">
            <PlatformBadge platform="wix">Wix</PlatformBadge>
          </div>
          <h2 className="text-xl font-semibold">Wix Events Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>Event calendar and scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ticket className="h-4 w-4 shrink-0" />
                  <span>Ticket sales and RSVP management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 shrink-0" />
                  <span>Attendee management and notifications</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Use Wix Events app for comprehensive management</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Include venue details and maps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>Set up automated reminders</span>
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
          <h2 className="text-xl font-semibold">Squarespace Events Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>Event blocks and calendar views</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ticket className="h-4 w-4 shrink-0" />
                  <span>Event registration and ticketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 shrink-0" />
                  <span>Guest list management</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Utilize Squarespace's event templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Add location and venue information</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>Schedule recurring events</span>
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
          <h2 className="text-xl font-semibold">GitHub Events Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>Markdown-based event listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Link className="h-4 w-4 shrink-0" />
                  <span>External registration links</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 shrink-0" />
                  <span>Community engagement</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Create dedicated events repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Include venue and location details</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>Maintain event schedule in README</span>
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
            <h3 className="font-medium">Event Organization</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Calendar className="h-4 w-4 shrink-0" />
                <span>Maintain a consistent event calendar</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 shrink-0" />
                <span>Track attendance and engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="h-4 w-4 shrink-0" />
                <span>Keep event descriptions clear and detailed</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Event Promotion</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Link className="h-4 w-4 shrink-0" />
                <span>Share event links across platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Set up automated reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <Ticket className="h-4 w-4 shrink-0" />
                <span>Manage ticket sales and registrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 