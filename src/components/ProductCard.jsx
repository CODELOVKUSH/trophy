import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowUpRight } from 'lucide-react'
import TrophyGraphic from './TrophyGraphic'
import { whatsappLink } from '../data/contact'

const ProductCard = forwardRef(function ProductCard({ item }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:shadow-gold-lg"
    >
      {/* Sparkle accents on hover */}
      <Sparkles className="pointer-events-none absolute right-4 top-4 z-10 h-4 w-4 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Visual */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-radial">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-6"
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <TrophyGraphic item={item} className="h-full w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)]" />
        </motion.div>
        {/* shine sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gold-sheen opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-40" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-greyt">{item.blurb}</p>
        <p className="mt-3 text-xs font-medium text-gold/80">{item.material}</p>

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <a
            href={whatsappLink(`Hi Promento! I'm interested in the "${item.name}". Could you share options?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/contact"
            className="text-xs font-medium text-white/50 transition-colors hover:text-white"
          >
            Get a quote →
          </Link>
        </div>
      </div>
    </motion.article>
  )
})

export default ProductCard
