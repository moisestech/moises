import type { Metadata } from 'next';
import Link from 'next/link';
import { PolicyPage, PolicySection, PolicyList } from '@/components/PolicyPage';

export const metadata: Metadata = {
  title: 'Visitor guidelines and policies | Moises Sanabria',
  description:
    'What to expect when visiting the studio, how to arrange a visit, and the conditions for photography and groups.',
  alternates: { canonical: '/guidelines' },
};

export default function Guidelines() {
  return (
    <PolicyPage
      title="Visitor guidelines and policies"
      purpose="This page is for anyone planning to see the work in person — curators, writers, collectors, students, and neighbors. It covers how to arrange a visit and what to expect once you are in the room."
      updated="September 2026"
    >
      <PolicySection heading="Arranging a visit">
        <p>
          Studio visits happen by appointment. The studio is located at the Bakehouse Art Complex in
          Miami; hours and directions are on{' '}
          <Link href="/visit" className="underline hover:no-underline">
            the visit page
          </Link>
          . To arrange a time, write through{' '}
          <Link href="/contact" className="underline hover:no-underline">
            the contact page
          </Link>{' '}
          and say roughly what you are hoping to see. Visits are more useful when the work in
          question is installed and running, and some pieces take time to set up.
        </p>
      </PolicySection>

      <PolicySection heading="In the room">
        <p>
          Much of the work involves screens, sensors, running software, and consumer objects wired
          into states they were not sold in. Some of it is fragile and some of it is live.
        </p>
        <PolicyList
          items={[
            'Please do not touch a work unless you are invited to. Several pieces are meant to be handled, and those will be pointed out.',
            'Cables, mounts, and enclosures are part of the work rather than infrastructure to step over. Watch your footing.',
            'Food and drink stay outside the installation areas.',
          ]}
        />
      </PolicySection>

      <PolicySection heading="Photography">
        <p>
          Photographs for your own notes and reference are welcome. Publishing or broadcasting images
          of the work — including on social platforms as part of professional coverage — needs
          permission first, and the studio can usually supply better images than a phone will manage
          in a working room. The reproduction conditions are set out in{' '}
          <Link href="/terms" className="underline hover:no-underline">
            the terms of use
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection heading="Access">
        <p>
          The studio aims to be usable by every visitor. If you have access needs — step-free
          routing, seating, quieter conditions, lighting sensitivity, or a work described aloud
          rather than read — say so when you write, and the visit will be arranged around them.
          Several works use flashing imagery and sustained sound; the studio will tell you which
          ones in advance if that matters to you.
        </p>
      </PolicySection>

      <PolicySection heading="Groups, classes, and press">
        <p>
          Classes and institutional groups are welcome with notice, and the studio can build a visit
          around a syllabus or a curatorial question rather than giving the same tour twice. Visitors
          under eighteen should come with an adult. Press visits can include time for an interview
          if you ask for it when scheduling.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p>
          Questions about a visit can go to{' '}
          <a href="mailto:m@moises.tech" className="underline hover:no-underline">
            m@moises.tech
          </a>
          . Related pages:{' '}
          <Link href="/privacy" className="underline hover:no-underline">
            privacy policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="underline hover:no-underline">
            terms of use
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
