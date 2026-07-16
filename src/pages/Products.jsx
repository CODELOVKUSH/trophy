import PageHeader from '../components/PageHeader'
import FilterGallery from '../components/FilterGallery'
import CTABand from '../sections/CTABand'
import Reveal from '../components/Reveal'
import { categories } from '../data/products'

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="The Catalogue"
        title="Awards for every"
        highlight="milestone"
        subtitle="Browse our signature collections — filter by series to find the finish, form and feeling that fits your occasion. Every piece is personalised with your name and text."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <FilterGallery />
        </div>
      </section>

      {/* Collection notes */}
      <section className="border-t border-white/10 py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <div className="surface h-full p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                  Series 0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-greyt">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
