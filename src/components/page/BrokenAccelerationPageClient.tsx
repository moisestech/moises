'use client'

import Image from 'next/image'
import Link from 'next/link'
import { research } from '@/constants/research'

const RELATED = [
  {
    slug: 'doomscrolling_treadmill',
    title: 'Doom Scrolling Treadmill',
    year: 2024,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
    blurb:
      'Durational performance that traps the body in the feed—speed and capture as medium.',
  },
  {
    slug: 'smart_shoppers',
    title: 'Smart Shoppers',
    year: 2024,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    blurb:
      'Consumer form meets cognition as commodity—how intelligence is staged as something to wheel through the market.',
  },
  {
    slug: 'price_of_existence',
    title: 'Price of Existence',
    year: 2024,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg',
    blurb:
      'Value, circulation, and mortality made material—an older register of acceleration and precarity in the work.',
  },
  {
    slug: 'simulation_faith',
    title: 'Simulation Faith',
    year: 2025,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
    blurb:
      'Sacred iconography rewired by mediation—belief under continuous technical adjustment.',
  },
] as const

const WAVEMAKER_IMPLEMENTATION_IMAGE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1775098478/art/moisestech-website/research/broken-acceleration/broken-acceleration-who-will-you-make-it-happen-apr1st-wavemaker-2026_h9fixj.png'

const BITM_WRITING_IMAGE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1775099574/art/moisestech-website/research/broken-acceleration/broken-acceleration-writing-apr1st-wavemaker-2026_xrg993.png'

export default function BrokenAccelerationPageClient() {
  const item = research.broken_acceleration
  const hero = item.images[0]
  const plaza = item.images[1]
  const alternate = item.images[2]

  return (
    <article className="max-w-3xl mx-auto pb-16 sm:pb-24">
      <header className="mb-10 sm:mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          Research / proposed work · {item.year}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {item.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
          Slowing in the Age of Continuity
        </p>
      </header>

      <div className="w-full max-w-md sm:max-w-lg mx-auto mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={hero.url}
            alt="Broken Acceleration — full-size STOP sign on a self-balancing two-wheel base with asymmetrical aluminum claw arm and visible cable, deadpan outdoor documentation"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 100vw, 32rem"
          />
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">{hero.caption}</p>

      <p className="text-lg sm:text-xl leading-relaxed text-gray-800 dark:text-gray-200 border-l-2 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 mb-12">
        Broken Acceleration examines the tension between civic command and technological acceleration, asking what it
        means to stop in an environment increasingly shaped by automation, autonomous systems, and continuous
        optimization.
      </p>

      <section className="prose prose-lg dark:prose-invert max-w-none mb-14">
        <p>
          <em>Broken Acceleration</em> is a mobile public sculpture: a full-size STOP sign mounted on a self-balancing
          two-wheel base, with an asymmetrical aluminum claw arm and a visible cable running arm to body. The work is
          not traffic control. It is a civic object that misfires—asking for &ldquo;stop&rdquo; in places where stopping
          has become structurally difficult, where everyday life is organized around speed, responsiveness, and
          constant adjustment.
        </p>
        <p>
          The STOP sign is one of the most legible symbols of collective public instruction. Here it is fused with a
          balancing mobility platform associated with machine sensing, predictive movement, and continuous correction.
          The sculpture stages a friction between two regimes of motion: one based on shared civic language, and
          another increasingly governed by automated navigation and technological flow. It remains upright through
          powered micro-corrections, so its stability depends on motion—thematically aligned with slowing or stopping
          inside systems built to maintain continuity.
        </p>
        <p>
          Presented in a publicly accessible pedestrian site in Miami-Dade, the piece reads as a familiar object
          behaving incorrectly: alert, balancing, unable to fully stop. In that encounter, &ldquo;stop&rdquo; becomes
          less a traffic instruction than a social and philosophical question: What should stop here? What kinds of
          motion can no longer be paused?
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Why STOP?</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            The hexagon is already a kind of public contract—shared, repeated, meant to be obeyed at a glance. In this
            work it stops regulating cars and starts regulating attention: it asks whether shared language can still
            interrupt a world organized for throughput. The sign is durable and blunt; the base is restless and
            corrective. That mismatch is the sculpture.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Public plan</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            The project is realized through free, in-person public activations in a nontraditional Miami-Dade site: a
            publicly accessible plaza, courtyard, or open pedestrian zone—not a street or intersection, and not as
            civic infrastructure. Gatherings take the form of short &ldquo;Slowing Sessions&rdquo;: the sculpture
            balances in place while participants respond to a simple prompt—<em>What should stop here?</em> Brief
            answers can accumulate as a local archive tied to the work.
          </p>
          <p>
            Each session runs with a small safety perimeter if needed, a spotter, walking-speed or slower motion only,
            and a clear power-down plan. The object stays legible as artwork, not as a device for managing traffic.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Materials / form</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Fabrication combines an off-the-shelf self-balancing two-wheel base, a full-size STOP sign, a lightweight
            pole mount, and a custom asymmetrical claw arm in aluminum. The arm is primarily sculptural—awkward,
            enforcement-adjacent, with minimal motion only if testing proves it stable and necessary. Movement is
            restrained: powered balancing, subtle shifts in orientation, and if feasible low-speed remote repositioning
            within a bounded pedestrian zone—never a fully autonomous or theatrical robotic system.
          </p>
        </div>
      </section>

      <section className="mb-14" aria-labelledby="broken-acceleration-how-heading">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          Broken Acceleration · Slowing in the Age of Continuity
        </p>
        <h2
          id="broken-acceleration-how-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
        >
          How will you make it happen?
        </h2>
        <div className="w-full max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-700/80">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={WAVEMAKER_IMPLEMENTATION_IMAGE}
              alt="Broken Acceleration — WaveMaker implementation summary: fabrication, public activation, and site strategy"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            I will realize <em>Broken Acceleration</em> as a disciplined fabrication and public presentation project
            designed for reliability, safety, and strong visual impact. The sculpture consists of a full-size reflective
            STOP sign mounted to a self-balancing two-wheel base, plus one asymmetrical aluminum claw arm and a visible
            cable. The work will remain in a powered balancing state and may include subtle orientation shifts or very
            low-speed remote repositioning within a bounded pedestrian zone, but it will not depend on full autonomy or
            theatrical robotic performance.
          </p>
          <p>
            The technical strategy is intentionally lean. The mobility system will be sourced from an off-the-shelf
            self-balancing platform that supports controlled riderless operation, allowing the sculpture&rsquo;s
            movement to remain slow, bounded, and easy to supervise. Fabrication will prioritize structural stability and
            a low center of mass through a custom mounting plate, lightweight pole assembly, robust brackets, and
            ballast. The claw arm will be built as an aluminum armature with a clamp-like end effector and visible
            cabling. If testing suggests that a static arm is more reliable than a moving one, the work will remain
            static without losing its conceptual force.
          </p>
          <p>
            The project is being developed for free public activation in a publicly accessible, nontraditional
            Miami-Dade site such as a pedestrian plaza, threshold courtyard, or circulation-oriented open area. Current
            venue outreach is focused on mobility- and community-oriented sites that can host temporary public
            gatherings without roadway closures. This site strategy keeps the project aligned with WaveMaker&rsquo;s
            public-access goals while avoiding the heavier permit requirements associated with streets and intersections.
          </p>
          <p>
            Public sharing will take the form of at least one announced Slowing Session: a free in-person activation
            where the sculpture balances in place, occasionally repositions within a marked perimeter, and functions as a
            public prompt. Viewers will be invited to respond to a simple question, <em>What should stop here?</em>{' '}
            through conversation and short written reflections. Each activation will include an operator, a spotter,
            clear artwork labeling, boundary markers, and an immediate power-down procedure. This scope keeps the work
            achievable within the grant budget while preserving the conceptual tension between civic instruction,
            technological acceleration, and the shrinking possibility of pause.
          </p>
        </div>
      </section>

      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-900">
        <Image
          src={plaza.url}
          alt="Broken Acceleration — proposed placement in a publicly accessible pedestrian plaza, Miami-like context"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 42rem"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">{plaza.caption}</p>

      {alternate ? (
        <>
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-900">
            <Image
              src={alternate.url}
              alt="Broken Acceleration — alternate view of the sculpture: STOP sign, self-balancing base, claw arm and cable"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-14">{alternate.caption}</p>
        </>
      ) : null}

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Related works</h2>
        <ul className="space-y-10">
          {RELATED.map((w) => (
            <li key={w.slug}>
              <Link href={`/art/${w.slug}`} className="group flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="relative w-full sm:w-44 shrink-0 aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={w.image}
                    alt={`${w.title} — related work sample`}
                    fill
                    className="object-cover transition group-hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, 11rem"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">
                    {w.title} <span className="text-gray-500 font-normal">({w.year})</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{w.blurb}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14 border-t border-gray-200 dark:border-gray-700 pt-10" aria-labelledby="broken-acceleration-bitm-heading">
        <h2
          id="broken-acceleration-bitm-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
        >
          From Born into the Machine
        </h2>
        <div className="w-full max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-700/80">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={BITM_WRITING_IMAGE}
              alt="Broken Acceleration — excerpt on civic objects, continuity, and Born into the Machine research line"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            I am interested in public objects that continue to operate even when the world they belong to has changed.
            The stop sign is one of them. It is a durable symbol of shared civic language, but it now exists inside
            environments increasingly shaped by automation, prediction, and machine-managed movement. In that sense,{' '}
            <em>Broken Acceleration</em> is not only about traffic or mobility. It is about a historical shift in how
            stopping itself is understood.
          </p>
          <p>
            The work imagines a civic object caught between two regimes: one based on collective instruction, and
            another based on continuous correction. Mounted on a self-balancing base, the sign can only remain upright by
            staying in motion. Its command is clear, but its condition is contradictory. It asks for interruption while
            embodying the inability to fully stop.
          </p>
          <p>
            This tension connects to a broader line of thought I&rsquo;ve been developing in{' '}
            <Link href="/research/born-into-the-machine" className="underline underline-offset-4 hover:no-underline">
              Born into the Machine
            </Link>
            : how human life is reorganized by systems that value continuity, optimization, and responsiveness above
            pause. I&rsquo;m interested in the point where a familiar object becomes strange enough to reveal the
            ideology inside it. Here, the stop sign becomes less a directive than a question: what can still be
            interrupted, and who gets to decide?
          </p>
          <p>Art, for me, is not a way to solve that question. It is a way to make its pressure felt in public.</p>
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-gray-700 pt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Research context</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            This project extends a longer thread in the practice: how machine-managed environments reshape belief, labor,
            and movement. That inquiry also lives in{' '}
            <Link href="/research/born-into-the-machine" className="underline underline-offset-4 hover:no-underline">
              Born into the Machine
            </Link>
            —a written research line that informs works like this one without replacing them. <em>Broken Acceleration</em>{' '}
            stays grounded in sculpture and public encounter first.
          </p>
        </div>
      </section>
    </article>
  )
}
