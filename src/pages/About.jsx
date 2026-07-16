import { motion } from 'framer-motion'
import { Target, Heart, Sparkles, ShieldCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Process from '../sections/Process'
import CTABand from '../sections/CTABand'
import HeroTrophy from '../components/HeroTrophy'

const values = [
  { icon: Target, title: 'Precision', text: 'Clean cuts, crisp engraving and finishes that hold up under stage lights.' },
  { icon: Heart, title: 'Personal', text: 'Every award carries a name and a story — never off-the-shelf.' },
  { icon: Sparkles, title: 'Distinctive', text: 'Designs that stand out on the shelf and in the photograph.' },
  { icon: ShieldCheck, title: 'Dependable', text: 'Timelines we keep and packaging that protects, pan-India.' },
]

const stats = [
  ['500+', 'Awards delivered'],
  ['7+', 'Themed city designs'],
  ['3', 'Signature series'],
  ['100%', 'Custom-made'],
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="We turn milestones into"
        highlight="keepsakes"
        subtitle="Promento is a Mumbai-based studio crafting premium, personalised trophies and awards for corporates, sports and events — with an obsession for detail and a promise of pride."
      />

      {/* Story split */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The Promento promise</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Craftsmanship that <span className="text-gold">honours the moment</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-greyt">
              <p>
                An award is more than an object — it's the moment someone's effort is
                seen. We design and manufacture each piece to carry that weight, pairing
                premium materials with meticulous personalisation.
              </p>
              <p>
                From a single bespoke corporate commission to a full series of
                location-themed trophies for a national event, our team guides you from
                first sketch to final delivery. The result is recognition that feels
                unmistakably yours.
              </p>
              <p className="font-display text-lg font-semibold text-gold">
                Crafting Your Pride — that's the whole idea.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/15 blur-[80px]" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HeroTrophy className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-ink-800/40 py-14">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.06} className="text-center">
              <div className="font-display text-4xl font-extrabold text-gold sm:text-5xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-greyt">{l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="p" className="eyebrow justify-center">
              What we stand for
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-5 text-4xl font-bold sm:text-5xl">
              Values in every <span className="text-gold">finish</span>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-ink-800/50 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-gold">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-greyt">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Process />
      <CTABand />
    </>
  )
}
