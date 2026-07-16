import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TrophyGraphic from '../components/TrophyGraphic'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import CTABand from '../sections/CTABand'
import { getByCategory } from '../data/products'
import { whatsappLink } from '../data/contact'

export default function ThemeAwards() {
  const items = getByCategory('location')

  return (
    <>
      <PageHeader
        eyebrow="Location & Theme Awards"
        title="Trophies with a"
        highlight="sense of place"
        subtitle="Custom regional-themed trophies featuring iconic landmarks and culture — a distinctive way to honour teams, destinations and milestones. Each design is a starting point, fully customisable to your brand and text."
      />

      {/* Intro band */}
      <section className="py-14">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-ink-800/50 p-8 text-center">
            <p className="text-lg leading-relaxed text-white/85">
              From Goa's lighthouse to the Petronas Towers, our theme awards capture the
              spirit of a destination in layered acrylic and gold accents — perfect for
              regional sales awards, travel incentives and cultural events.
            </p>
          </Reveal>
        </div>
      </section>

      {/* City grid */}
      <section className="pb-8">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <StaggerItem key={item.id}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/50 transition-all duration-300 hover:border-gold/40 hover:shadow-gold-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-ink-radial">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center p-8"
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    >
                      <TrophyGraphic item={item} className="h-full w-full" />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gold-sheen opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-40" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.place}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold">{item.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-greyt">{item.blurb}</p>

                    {item.motifs && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.motifs.map((m) => (
                          <span
                            key={m}
                            className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[11px] font-medium text-gold/90"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={whatsappLink(`Hi Promento! I love the ${item.place} theme award ("${item.name}"). Can we customise it?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 border-t border-white/5 pt-4 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                    >
                      Enquire about {item.place}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Custom note */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="rounded-3xl border border-gold/20 bg-gold/5 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Don't see your city?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-greyt">
              We design new location themes on request — share the landmark or cultural
              motif you have in mind and we'll sketch a concept for you.
            </p>
            <a href={whatsappLink('Hi Promento! I would like a custom location-themed award for a city not listed.')} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
              Request a custom theme
            </a>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
