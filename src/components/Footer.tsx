import { motion, useReducedMotion } from 'framer-motion'
import { AtSign, Mail, MapPin, Phone } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer id="kontak" className="bg-blueprint relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32 text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] text-volt">
            STATUS: SIAP BEKERJA
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-fg">
            Butuh tenaga elektrik di tim Anda?
          </h2>

          <a
            href="mailto:ilhampradina25@gmail.com"
            className="mt-9 inline-flex max-w-full items-center gap-2 rounded-md bg-volt px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Mail className="h-4 w-4 shrink-0" />
            ilhampradina25@gmail.com
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] sm:text-xs text-dim">
            <a
              href="https://wa.me/6282258401990"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-volt"
            >
              <Phone className="h-3.5 w-3.5 text-volt/70" />
              WhatsApp: 0822-5840-1990
            </a>
            <a
              href="https://linkedin.com/in/ilhampradina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-volt"
            >
              <AtSign className="h-3.5 w-3.5 text-volt/70" />
              linkedin.com/in/ilhampradina
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-volt/70" />
              Kota Cilegon, Banten
            </span>
          </div>
        </motion.div>

        <p className="mt-16 font-mono text-[10px] text-dim/60">
          Ilham Pradina, 2026.
        </p>
      </div>
    </footer>
  )
}
