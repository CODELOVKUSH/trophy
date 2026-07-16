import { Phone, Mail, Instagram, MapPin, MessageCircle, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  ADDRESS,
  MAPS_QUERY,
  MAPS_LINK,
  whatsappLink,
} from '../data/contact'

const details = [
  { icon: Phone, label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Instagram, label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, external: true },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappLink(), external: true },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's craft your"
        highlight="award"
        subtitle="Tell us about your occasion and we'll come back with ideas, materials and a quote. For the fastest reply, message us on WhatsApp."
      />

      <section className="pb-24 pt-8">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — form */}
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-bold">
              Request a custom quote
            </h2>
            <ContactForm />
          </Reveal>

          {/* Right — details + map */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.external ? '_blank' : undefined}
                  rel={d.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-800/50 p-5 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-greyt">{d.label}</div>
                    <div className="mt-0.5 break-words text-sm font-medium text-white group-hover:text-gold">
                      {d.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-greyt">Studio</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/85">{ADDRESS}</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-gold hover:text-gold-light"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4 text-xs text-greyt">
                <Clock className="h-4 w-4 text-gold" />
                Mon–Sat · 10:00 AM – 7:00 PM IST
              </div>
            </div>

            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Promento studio location — Dahisar East, Mumbai"
                src={MAPS_QUERY}
                className="h-64 w-full grayscale-[0.3] contrast-125"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
