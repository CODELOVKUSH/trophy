import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/contact'

// Floating click-to-chat button, bottom-right.
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Promento on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, type: 'spring', stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] shadow-[0_10px_35px_-8px_rgba(37,211,102,0.6)]"
    >
      <span className="grid h-14 w-14 place-items-center">
        <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
        <span className="absolute inset-0 rounded-full ring-2 ring-[#25D366]/50 animate-ping" />
      </span>
      <span className="max-w-0 whitespace-nowrap pr-0 text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-5">
        Chat with us
      </span>
    </motion.a>
  )
}
