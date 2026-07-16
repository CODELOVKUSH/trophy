import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Star } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'
import HeroTrophy from '../components/HeroTrophy'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7 })
        .from(
          '.hero-letter',
          { yPercent: 120, opacity: 0, stagger: 0.06, duration: 0.9 },
          '-=0.35'
        )
        .from('.hero-tagline', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.4')
        .from('.hero-stat', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('.hero-trophy', { scale: 0.8, opacity: 0, duration: 1.1, ease: 'power2.out' }, '-=1.1')

      // Parallax drift on the trophy as you scroll away from the hero.
      gsap.to('.hero-trophy', {
        yPercent: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to('.hero-wordmark', {
        yPercent: -12,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const word = 'PROMENTO'

  return (
    <section
      ref={root}
      className="bg-grain relative flex min-h-screen items-center overflow-hidden bg-ink-radial pt-24"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-b" />

      {/* Floating spark particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-gold/40"
          style={{ left: `${12 + i * 14}%`, top: `${20 + (i % 3) * 22}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          <Star className="h-3 w-3" fill="currentColor" />
        </motion.span>
      ))}

      <div className="container-x relative z-10 grid items-center gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div>
          <p className="hero-eyebrow eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Custom Trophies · Mumbai
          </p>

          <h1 className="hero-wordmark mt-6 font-brand text-[clamp(3rem,11vw,8.5rem)] font-extrabold leading-[0.9] tracking-tight">
            <span className="sr-only">{word}</span>
            <span aria-hidden className="flex overflow-hidden">
              {word.split('').map((ch, i) => (
                <span
                  key={i}
                  className={`hero-letter inline-block ${i < 3 ? 'text-white' : 'text-gold-shimmer'}`}
                >
                  {ch}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-tagline mt-5 font-display text-xl font-semibold text-white/90 sm:text-2xl">
            Custom Trophies &amp; Awards
          </p>
          <p className="hero-sub mt-2 max-w-md text-base leading-relaxed text-greyt">
            Precision-crafted, personalised recognition for corporates, sports and
            events — <span className="text-gold">Crafting Your Pride.</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <span className="hero-cta">
              <MagneticButton to="/contact">
                Get a Custom Quote
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </span>
            <span className="hero-cta">
              <MagneticButton to="/products" className="btn-ghost" strength={0.2}>
                View Catalogue
              </MagneticButton>
            </span>
          </div>

          {/* Mini stats */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ['500+', 'Awards crafted'],
              ['7', 'Themed cities'],
              ['Pan-India', 'Delivery'],
            ].map(([n, l]) => (
              <div key={l} className="hero-stat">
                <div className="font-display text-2xl font-bold text-gold">{n}</div>
                <div className="text-xs uppercase tracking-wider text-greyt">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trophy visual */}
        <div className="hero-trophy relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/15 blur-[90px]" />
          <div className="animate-float">
            <HeroTrophy className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-greyt"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  )
}
