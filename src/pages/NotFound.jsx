import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import HeroTrophy from '../components/HeroTrophy'

export default function NotFound() {
  return (
    <section className="bg-grain relative grid min-h-screen place-items-center overflow-hidden bg-ink-radial px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative text-center">
        <div className="mx-auto w-40 opacity-80">
          <HeroTrophy className="w-full" />
        </div>
        <p className="eyebrow mt-6 justify-center">Error 404</p>
        <h1 className="mt-4 font-brand text-6xl font-extrabold sm:text-7xl">
          <span className="text-white">Not </span>
          <span className="text-gold-shimmer">Found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-greyt">
          This trophy hasn't been crafted yet. Let's get you back to the showcase.
        </p>
        <Link to="/" className="btn-gold mt-8">
          <Home className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </section>
  )
}
