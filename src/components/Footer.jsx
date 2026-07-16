import { Link } from 'react-router-dom'
import { Phone, Mail, Instagram, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  ADDRESS,
} from '../data/contact'

const quickLinks = [
  { to: '/products', label: 'Products' },
  { to: '/theme-awards', label: 'Location & Theme Awards' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="rule-gold" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-greyt">
            Premium custom trophies and awards, precision-crafted in Mumbai for
            corporates, sports and events across India and beyond.
          </p>
          <p className="mt-6 font-display text-lg font-semibold text-gold">
            Crafting Your Pride
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            Explore
          </h4>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="group inline-flex items-start gap-3 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="group inline-flex items-start gap-3 hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 hover:text-gold"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {INSTAGRAM_HANDLE}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
            <li className="inline-flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="leading-relaxed text-greyt">{ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-greyt md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Promento Custom Trophy &amp; Awards. All rights reserved.</p>
          <p className="max-w-md text-greyt/80">
            All designs are the intellectual property of Promento Custom Trophy &amp; Awards.
          </p>
        </div>
      </div>
    </footer>
  )
}
