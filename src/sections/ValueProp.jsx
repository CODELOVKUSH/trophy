import { PenTool, Gem, Zap, Truck } from 'lucide-react'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'

const features = [
  {
    icon: PenTool,
    title: 'Custom Design',
    text: 'Every award is designed around your name, brand and occasion — no templates, just your story.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    text: 'Optical crystal, acrylic, brushed metal and real gold-tone finishes, chosen for lasting shine.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    text: 'Prototyped and produced on tight event timelines without compromising on craft.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    text: 'Carefully packed and shipped across India — and internationally on request.',
  },
]

export default function ValueProp() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="p" className="eyebrow justify-center">
            Why Promento
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl">
            Recognition, <span className="text-gold-shimmer">crafted with precision</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-greyt">
            Promento designs and manufactures personalised trophies and awards that
            turn milestones into keepsakes — for corporates, sports and events alike.
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-2xl border border-white/10 bg-ink-800/60 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-gold">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink-900">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-greyt">{f.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
