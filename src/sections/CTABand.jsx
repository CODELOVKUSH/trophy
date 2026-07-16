import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/contact'

export default function CTABand() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-ink-800/60 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/15 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />

          <div className="relative">
            <p className="eyebrow justify-center">Ready when you are</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Let's craft an award your winners will{' '}
              <span className="text-gold-shimmer">never forget</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-greyt">
              Share your occasion and we'll design something entirely yours — from a
              single trophy to a full event series.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact">
                Get a Custom Quote
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
