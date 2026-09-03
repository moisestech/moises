import type { Metadata } from 'next';
import Link from 'next/link';
import { PolicyPage, PolicySection, PolicyList } from '@/components/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy policy | Moises Sanabria',
  description:
    'What the studio collects when you use this site, why it is kept, and how to have it removed.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <PolicyPage
      title="Privacy policy"
      purpose="This page describes what the studio collects when you use this site, why it is kept, and how to have it removed."
      updated="September 2026"
    >
      <PolicySection heading="Browsing requires nothing from you">
        <p>
          You can read every page on this site without an account, and without submitting any
          information. The site runs no advertising networks, no cross-site tracking, and no
          third-party marketing pixels. Nothing collected here is sold or shared for advertising.
        </p>
      </PolicySection>

      <PolicySection heading="What you send deliberately">
        <p>
          When you submit the contact form or an inquiry form, the studio receives what you typed
          along with a small amount of context about where the request came from:
        </p>
        <PolicyList
          items={[
            'Your name, email address, and message.',
            'The page that referred you, and campaign parameters if the link you followed carried them.',
          ]}
        />
        <p>
          This is stored in a private database and used only to reply to you and to keep track of
          correspondence about exhibitions, commissions, teaching, and press. It is not added to a
          mailing list unless you ask to be added.
        </p>
      </PolicySection>

      <PolicySection heading="What stays on your own device">
        <p>
          The workshop and course pages remember your progress — the seat you chose, the exercises
          you completed, and the notes you wrote — using your browser&apos;s local storage. That
          record never leaves your device and is not visible to the studio. Clearing your
          browser&apos;s site data erases it.
        </p>
      </PolicySection>

      <PolicySection heading="Services this site depends on">
        <p>
          Three providers process technical data in order to serve the site. Each acts on the
          studio&apos;s behalf and holds its own privacy terms:
        </p>
        <PolicyList
          items={[
            'Vercel hosts the site and keeps standard server request logs.',
            'Supabase stores the messages submitted through the forms described above.',
            'Cloudinary delivers images and video.',
          ]}
        />
      </PolicySection>

      <PolicySection heading="Asking for your information">
        <p>
          You can ask what the studio holds about you, ask for a correction, or ask for deletion, at
          any time and without explanation. Write to{' '}
          <a href="mailto:m@moises.tech" className="underline hover:no-underline">
            m@moises.tech
          </a>{' '}
          and the request will be handled directly. Deletion requests are honored unless the message
          is part of an active contract or a legal obligation to keep records.
        </p>
      </PolicySection>

      <PolicySection heading="Changes and contact">
        <p>
          If this policy changes, the date above changes with it. Questions about privacy, or about
          anything else, can go through{' '}
          <Link href="/contact" className="underline hover:no-underline">
            the contact page
          </Link>{' '}
          or directly to{' '}
          <a href="mailto:m@moises.tech" className="underline hover:no-underline">
            m@moises.tech
          </a>
          . Related pages:{' '}
          <Link href="/terms" className="underline hover:no-underline">
            terms of use
          </Link>{' '}
          and{' '}
          <Link href="/guidelines" className="underline hover:no-underline">
            visitor guidelines
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
