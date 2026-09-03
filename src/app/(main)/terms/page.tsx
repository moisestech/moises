import type { Metadata } from 'next';
import Link from 'next/link';
import { PolicyPage, PolicySection, PolicyList } from '@/components/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms of use | Moises Sanabria',
  description:
    'The conditions for using this site, and how the artworks, texts, and teaching material may be reproduced.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <PolicyPage
      title="Terms of use"
      purpose="This page sets out the conditions for using this site, and how the artworks, texts, and teaching material published here may be reproduced."
      updated="September 2026"
    >
      <PolicySection heading="What this site is">
        <p>
          This site is published by the studio of Moises Sanabria as a record of an art practice: the
          works, the writing that supports them, and the teaching material developed alongside them.
          It is offered for reading, research, and institutional review.
        </p>
      </PolicySection>

      <PolicySection heading="Rights in the work">
        <p>
          The artworks, installation views, texts, diagrams, and course material on this site are the
          property of the artist and are protected by copyright. Publishing them here does not place
          them in the public domain.
        </p>
        <p>You may, without asking:</p>
        <PolicyList
          items={[
            'Quote short passages of the writing with attribution.',
            'Link to any page.',
            'Cite the work in scholarship, criticism, coursework, or grant review.',
          ]}
        />
        <p>Written permission is required to:</p>
        <PolicyList
          items={[
            'Reproduce images of the work in print or online, including in press coverage.',
            'Reproduce a text in full.',
            'Use any material to train a machine learning model or to build a derivative dataset.',
          ]}
        />
      </PolicySection>

      <PolicySection heading="Press and reproduction requests">
        <p>
          Press images, captions, and credit lines are available on request. Because the work often
          depends on how it is framed, the studio asks to see the context of a reproduction before
          approving it. Write to{' '}
          <a href="mailto:m@moises.tech" className="underline hover:no-underline">
            m@moises.tech
          </a>{' '}
          with the publication, the intended image, and the date.
        </p>
      </PolicySection>

      <PolicySection heading="Workshop and course material">
        <p>
          The workshops published here are free to work through on your own, and free to reference
          when teaching your own group with attribution. They may not be resold, repackaged as
          someone else&apos;s curriculum, or presented as the output of another organization. If you
          want to run one of them inside an institution, the studio would rather be asked than
          discover it later — those conversations are usually welcome.
        </p>
      </PolicySection>

      <PolicySection heading="Accuracy and availability">
        <p>
          Pages describing exhibitions, availability, and research in progress are accurate when
          written and are not always current. Nothing here is an offer to sell a work, and nothing
          here constitutes professional advice. The site is provided as it is, without warranty, and
          may be changed or taken offline at any time.
        </p>
      </PolicySection>

      <PolicySection heading="Links out">
        <p>
          Some pages link to institutions, collaborators, and outside writing. The studio does not
          control those sites and is not responsible for what they publish.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p>
          Questions about these terms, permissions, or licensing can go through{' '}
          <Link href="/contact" className="underline hover:no-underline">
            the contact page
          </Link>{' '}
          or directly to{' '}
          <a href="mailto:m@moises.tech" className="underline hover:no-underline">
            m@moises.tech
          </a>
          . Related pages:{' '}
          <Link href="/privacy" className="underline hover:no-underline">
            privacy policy
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
