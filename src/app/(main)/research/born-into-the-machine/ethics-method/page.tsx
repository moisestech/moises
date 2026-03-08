import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EthicsMethodPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-44">
      <Link
        href="/research/born-into-the-machine"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Book
      </Link>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">Ethics & Method</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Stance</h2>
          <p className="text-lg leading-relaxed mb-4">
            I use AI daily as a digital limb, not as a god or an oracle. I think of
            "intelligence" as a commodity and of AI as a kind of language calculator, not
            a conscious mind. This book is an attempt to show the tension between slow,
            human, jagged thinking and fast, AI-accelerated slop.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm not pretending to be purely human in an age where intelligence is a
            commodity, and our sense of identity is largely derived from social networks
            and algorithmic visibility. The risk is becoming a cog, a data point, instead
            of a person.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Authorship Scheme</h2>
          <p className="text-lg leading-relaxed mb-4">
            Every piece of content in this book is marked with authorship indicators:
          </p>
          <ul className="list-none space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-2xl">●</span>
              <div>
                <strong className="text-lg">Human</strong> - Written fully by me, untouched
                by AI. These are my raw thoughts, reflections, and notes.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">◐</span>
              <div>
                <strong className="text-lg">Hybrid</strong> - Co-written, where AI suggested
                or reshaped text in response to my input. I've edited and approved these
                sections.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">○</span>
              <div>
                <strong className="text-lg">AI Draft</strong> - Text primarily generated
                by AI as a starting point, marked for critique and editing. These sections
                are clearly labeled as AI-generated and are subject to heavy revision or
                removal.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Commitments</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Reading Actual Books</h3>
              <p>
                I commit to reading physical books and taking notes from them. When I
                reference ideas from books, I'll distinguish between book-derived insight
                and AI-derived summaries.
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Slow Note-Taking</h3>
              <p>
                I maintain a practice of slow, deliberate note-taking. I won't let AI
                overwrite my notes—instead, I'll use it to help cluster, rephrase, and
                question them.
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">No Fabrication</h3>
              <p>
                I will not fabricate citations. If I need exact references, I'll help
                myself phrase what to look up or how to check the original source.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p>
                Everything here may become public text. I avoid sharing private,
                identifying, or sensitive info about anyone other than myself, unless
                already given in the conversation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Goal</h2>
          <p className="text-lg leading-relaxed mb-4">
            This book is not about replacing human thinking with AI. It's about:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Making myself more aware of how I'm thinking</li>
            <li>Exposing where AI is shaping the text</li>
            <li>Helping me articulate a clear, honest stance: "I'm not pretending to be
              purely human in an age where intelligence is a commodity—but I'm trying not
              to lose my humanity either."
            </li>
          </ul>
        </section>

        <section className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This page is part of the living book "Born into the Machine." The content
            reflects my ongoing exploration of co-intelligence and transparency in the
            post-AI writing era.
          </p>
        </section>
      </article>
    </div>
  );
}
