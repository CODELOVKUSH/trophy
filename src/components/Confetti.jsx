import { motion } from 'framer-motion'

// Lightweight trophy-icon confetti burst for form success states.
const COLORS = ['#F5C518', '#FFCC29', '#FDE68A', '#FFFFFF', '#C99A0E']

export default function Confetti({ count = 28 }) {
  const pieces = Array.from({ length: count }, (_, i) => {
    // Deterministic pseudo-spread so no Math.random is needed at module scope.
    const angle = (i / count) * Math.PI * 2
    const dist = 120 + (i % 5) * 26
    return {
      id: i,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist - 40,
      rotate: (i % 2 ? 1 : -1) * (120 + i * 12),
      color: COLORS[i % COLORS.length],
      size: 6 + (i % 4) * 3,
      delay: (i % 6) * 0.02,
    }
  })

  return (
    <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center overflow-visible">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-[2px]"
          style={{ width: p.size, height: p.size * 1.6, background: p.color }}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0.4, rotate: 0 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 1, rotate: p.rotate }}
          transition={{ duration: 1.1, delay: p.delay, ease: [0.2, 0.7, 0.3, 1] }}
        />
      ))}
    </div>
  )
}
