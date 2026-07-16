import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessagesSquare, PenTool, Layers, Hammer, PackageCheck } from 'lucide-react'
import Reveal from '../components/Reveal'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: MessagesSquare,
    title: 'Consultation',
    text: 'We learn your occasion, quantity, budget and the feeling you want the award to carry.',
  },
  {
    icon: PenTool,
    title: 'Design',
    text: 'Our team sketches concepts and shares digital mockups with your name and branding placed.',
  },
  {
    icon: Layers,
    title: 'Prototyping',
    text: 'A physical or high-fidelity proof confirms proportions, finish and engraving before we scale.',
  },
  {
    icon: Hammer,
    title: 'Manufacturing',
    text: 'Skilled craftsmanship in acrylic, crystal and metal — cut, polished and personalised.',
  },
  {
    icon: PackageCheck,
    title: 'Delivery',
    text: 'Protective packing and dependable pan-India dispatch, timed to land before your event.',
  },
]

export default function Process() {
  const root = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mm = gsap.matchMedia()

    // Horizontal pinned scroll only on larger screens.
    mm.add('(min-width: 1024px)', () => {
      if (reduce) return
      const el = track.current
      const distance = el.scrollWidth - window.innerWidth + 120

      const horizontal = gsap.to(el, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${distance + 200}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Reveal each card as it scrolls into view along the horizontal track.
      gsap.utils.toArray('.proc-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontal,
            start: 'left 90%',
          },
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-ink-800/40 py-24 lg:py-0">
      <div className="container-x pt-4 lg:pt-24">
        <Reveal as="p" className="eyebrow">
          The Craft
        </Reveal>
        <Reveal as="h2" delay={0.05} className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Crafting Your Pride, <span className="text-gold-shimmer">step by step</span>
        </Reveal>
      </div>

      {/* Desktop: horizontal pinned track. Mobile: vertical stack. */}
      <div className="lg:flex lg:h-screen lg:items-center">
        <div
          ref={track}
          className="mt-12 flex flex-col gap-6 px-6 sm:px-8 lg:mt-0 lg:w-max lg:flex-row lg:gap-8 lg:px-12"
        >
          {/* Intro spacer card on desktop */}
          <div className="hidden shrink-0 lg:block lg:w-[22vw]" />

          {steps.map((s, i) => (
            <div
              key={s.title}
              className="proc-card group relative shrink-0 rounded-3xl border border-white/10 bg-ink-900/70 p-8 backdrop-blur-sm transition-colors hover:border-gold/40 lg:w-[26vw]"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-extrabold text-white/10 transition-colors group-hover:text-gold/25">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
              </div>
              <div className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-greyt">{s.text}</p>
            </div>
          ))}

          <div className="hidden shrink-0 lg:block lg:w-[10vw]" />
        </div>
      </div>
    </section>
  )
}
