import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Button / link with a subtle magnetic pull toward the cursor.
export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  className = 'btn-gold',
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`${className} will-change-transform`}
      style={{ display: 'inline-flex' }}
    >
      {children}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} {...rest}>
      {inner}
    </button>
  )
}
