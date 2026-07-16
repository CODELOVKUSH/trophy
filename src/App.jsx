import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import useLenis from './hooks/useLenis'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ThemeAwards = lazy(() => import('./pages/ThemeAwards'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Wraps each page with a fade + vertical slide transition.
function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

function Fallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center">
      <div className="h-10 w-10 animate-spin-slow rounded-full border-2 border-gold/30 border-t-gold" />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  useLenis()

  return (
    <div className="relative min-h-screen bg-ink-900">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Fallback />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/products" element={<Page><Products /></Page>} />
            <Route path="/theme-awards" element={<Page><ThemeAwards /></Page>} />
            <Route path="/about" element={<Page><About /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
