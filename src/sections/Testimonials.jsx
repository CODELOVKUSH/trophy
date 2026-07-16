import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Reveal from '../components/Reveal'

// Placeholder-ready testimonials + trusted-by marquee.
const quotes = [
  {
    text: 'The location-themed trophies were the highlight of our annual meet — every regional team felt genuinely seen.',
    name: 'Placeholder Name',
    role: 'Events Lead, Placeholder Corp',
  },
  {
    text: 'Beautiful craftsmanship and a turnaround that actually matched our timeline. The gold-ring awards looked stunning on stage.',
    name: 'Placeholder Name',
    role: 'HR Manager, Placeholder Ltd',
  },
  {
    text: 'From first sketch to delivery, the process was effortless. Our winners loved the personalised engraving.',
    name: 'Placeholder Name',
    role: 'Founder, Placeholder Studio',
  },
]

const trustedBy = [
  'ACME CORP',
  'NORTHWIND',
  'ZENITH',
  'VERTEX',
  'AURORA',
  'MERIDIAN',
  'PINNACLE',
  'SUMMIT',
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="eyebrow justify-center">
            Trusted Recognition
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-5 text-4xl font-bold sm:text-5xl">
            Loved by teams that <span className="text-gold">celebrate well</span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-800/50 p-8">
                <Quote className="h-8 w-8 text-gold/60" />
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 text-gold" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/5 pt-4">
                  <div className="font-display font-semibold">{q.name}</div>
                  <div className="text-xs text-greyt">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Auto-scrolling logo strip */}
      <div className="relative mt-20 flex overflow-hidden border-y border-white/10 py-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          className="flex shrink-0 items-center gap-16 pr-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          {[...trustedBy, ...trustedBy].map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl font-bold tracking-widest text-white/25 transition-colors hover:text-gold"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
