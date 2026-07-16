import { motion } from 'framer-motion'

// Reusable inner-page hero header.
export default function PageHeader({ eyebrow, title, highlight, subtitle }) {
  return (
    <section className="bg-grain relative overflow-hidden bg-ink-radial pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
      <div className="container-x relative text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow justify-center"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mx-auto mt-5 max-w-4xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          {title} {highlight && <span className="text-gold-shimmer">{highlight}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-greyt"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
