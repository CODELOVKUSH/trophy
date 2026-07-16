import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Send, CheckCircle2 } from 'lucide-react'
import Confetti from './Confetti'
import { categories } from '../data/products'

const awardTypes = [
  ...categories.map((c) => c.name),
  'Not sure yet — need guidance',
]

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Field({ index, children }) {
  return (
    <motion.div custom={index} variants={fieldVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {children}
    </motion.div>
  )
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-greyt/70 outline-none transition-colors focus:border-gold/60 focus:ring-1 focus:ring-gold/40'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    awardType: awardTypes[0],
    quantity: '',
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end demo only — wire this up to your email service / CRM.
    setSent(true)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-3xl border border-gold/30 bg-ink-800/60 p-10 text-center"
          >
            <Confetti />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold-gradient shadow-gold-lg"
              >
                <Trophy className="h-10 w-10 text-ink-900" />
              </motion.div>
              <h3 className="mt-6 font-display text-2xl font-bold">Enquiry received!</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-greyt">
                Thank you, {form.name || 'friend'}. Our team will get back to you shortly
                with ideas for your <span className="text-gold">{form.awardType}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false)
                  setForm({ name: '', company: '', awardType: awardTypes[0], quantity: '', message: '' })
                }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
              >
                <CheckCircle2 className="h-4 w-4" />
                Send another enquiry
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-5 rounded-3xl border border-white/10 bg-ink-800/50 p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field index={0}>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </Field>
              <Field index={1}>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                  Company
                </label>
                <input
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Organisation (optional)"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field index={2}>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                  Award Type
                </label>
                <select value={form.awardType} onChange={update('awardType')} className={inputClass}>
                  {awardTypes.map((t) => (
                    <option key={t} className="bg-ink-800">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field index={3}>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={update('quantity')}
                  placeholder="e.g. 25"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field index={4}>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us about your occasion, theme, timeline and any personalisation…"
                className={`${inputClass} resize-none`}
              />
            </Field>

            <Field index={5}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold w-full sm:w-auto"
              >
                Send Enquiry
                <Send className="h-4 w-4" />
              </motion.button>
              <p className="mt-3 text-xs text-greyt">
                Prefer to chat? Message us on WhatsApp — bottom-right — for the fastest reply.
              </p>
            </Field>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
