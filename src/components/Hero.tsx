import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, FileDown } from 'lucide-react'
import DecodeText from './DecodeText'

const EnergyCore = lazy(() => import('./EnergyCore'))

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-blueprint relative min-h-[100dvh] overflow-hidden">
      {/* 3D energy core: right half on desktop, dimmed backdrop on mobile */}
      <div className="absolute inset-y-0 right-0 w-full opacity-40 lg:w-1/2 lg:opacity-100">
        <Suspense fallback={null}>
          <EnergyCore animate={!reduceMotion} />
        </Suspense>
      </div>
      {/* fade the grid + canvas toward the page bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pt-20 md:px-6">
        <div className="max-w-2xl">
          <motion.img
            src="./assets/profile.jpg"
            alt="Foto profil Ilham Pradina"
            className="mb-6 h-20 w-20 sm:h-24 sm:w-24 rounded-2xl border-2 border-volt/50 object-cover object-top"
            initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] text-volt">
            <DecodeText text="ELECTRICAL ENGINEER // D4 TEKNIK ELEKTRO UNY" delay={300} />
          </p>

          <motion.h1
            className="mt-5 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[0.95] text-fg"
            initial={reduceMotion ? false : { y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            Ilham
            <br />
            Pradina
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-dim"
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            Sistem tenaga listrik, proteksi, PLC, dan IoT. Lima pengalaman
            industri, dari pabrik kimia sampai pembangkit listrik.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          >
            <a
              href="./assets/Ilham-Pradina-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-volt px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <FileDown className="h-4 w-4" />
              Unduh CV
            </a>
            <a
              href="#pengalaman"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm text-fg transition-colors hover:border-volt/50 hover:text-volt"
            >
              <ArrowDown className="h-4 w-4" />
              Lihat pengalaman
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
