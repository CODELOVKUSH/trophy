import { Link } from 'react-router-dom'

// PROMENTO wordmark — "PRO" in white, "MENTO" in gold, with a small trophy mark.
export default function Logo({ className = '', showMark = true, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Promento — home"
    >
      {showMark && (
        <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-ink-700 ring-1 ring-white/10 transition-colors group-hover:ring-gold/50">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
            <path d="M8 5H5a3 3 0 0 0 3 4" />
            <path d="M16 5h3a3 3 0 0 1-3 4" />
            <path d="M12 13v3" />
            <path d="M9.5 20l.6-3.5h3.8l.6 3.5z" />
          </svg>
        </span>
      )}
      <span className="font-brand text-xl font-extrabold leading-none tracking-brand">
        <span className="text-white">PRO</span>
        <span className="text-gold">MENTO</span>
      </span>
    </Link>
  )
}
