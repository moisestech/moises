import { Calendar, CalendarDays, FileText, MessageSquare } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function BusinessToolsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Business Tools</h1>
        <p className="text-lg text-muted-foreground">
          Manage your business operations efficiently with Wix's business tools. From appointments to customer communication, these apps help streamline your workflow.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Bookings</h2>
          </div>
          <p className="text-muted-foreground">
            Let clients schedule appointments directly on your website.
          </p>
          <ul className="space-y-2">
            <li>Online scheduling</li>
            <li>Calendar management</li>
            <li>Automated reminders</li>
            <li>Payment processing</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Events</h2>
          </div>
          <p className="text-muted-foreground">
            Create and manage events with ticket sales and RSVP tracking.
          </p>
          <ul className="space-y-2">
            <li>Event creation</li>
            <li>Ticket sales</li>
            <li>RSVP management</li>
            <li>Event analytics</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Forms</h2>
          </div>
          <p className="text-muted-foreground">
            Create custom forms to collect information and payments.
          </p>
          <ul className="space-y-2">
            <li>Form builder</li>
            <li>Payment integration</li>
            <li>Data collection</li>
            <li>Form analytics</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Chat</h2>
          </div>
          <p className="text-muted-foreground">
            Communicate with your visitors in real-time.
          </p>
          <ul className="space-y-2">
            <li>Live chat</li>
            <li>Chat history</li>
            <li>Mobile app</li>
            <li>Automated responses</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 