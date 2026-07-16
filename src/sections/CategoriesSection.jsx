import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import TrophyGraphic from '../components/TrophyGraphic'
import { categories, getByCategory } from '../data/products'

const routeFor = (id) => (id === 'location' ? '/theme-awards' : '/products')

export default function CategoriesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal as="p" className="eyebrow">
              Our Collections
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Three ways to <span className="text-gold">celebrate excellence</span>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/products" className="btn-ghost shrink-0">
              Browse all products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const preview = getByCategory(cat.id).slice(0, 3)
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <Link
                  to={routeFor(cat.id)}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/50 p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-gold-lg"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

                  {/* Preview trophies */}
                  <div className="relative mb-8 flex h-40 items-end justify-center gap-1">
                    {preview.map((p, idx) => (
                      <motion.div
                        key={p.id}
                        className="w-1/3"
                        style={{ zIndex: idx === 1 ? 3 : 1 }}
                        initial={{ y: 10, opacity: 0.7 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.08 }}
                      >
                        <TrophyGraphic
                          item={p}
                          className={`h-full w-full transition-transform duration-500 group-hover:-translate-y-1 ${
                            idx === 1 ? 'scale-110' : 'scale-90 opacity-80'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">{cat.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gold/80">{cat.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-greyt">
                    {cat.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-gold">
                    Explore collection
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
