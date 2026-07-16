import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import { categories, products } from '../data/products'

// Tabbed / filterable gallery with animated layout transitions.
export default function FilterGallery({ initial = 'all', showAll = true }) {
  const [active, setActive] = useState(initial)

  const tabs = useMemo(
    () => [
      ...(showAll ? [{ id: 'all', short: 'All Awards' }] : []),
      ...categories.map((c) => ({ id: c.id, short: c.short })),
    ],
    [showAll]
  )

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => {
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                isActive ? 'text-ink-900' : 'text-white/70 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gold-gradient shadow-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.short}</span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
