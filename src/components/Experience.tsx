import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const JOBS = [
  {
    abbr: 'MCCI',
    company: 'PT Merak Chemicals Indonesia',
    location: 'Cilegon, Banten',
    role: 'Magang, Seksi Elektrik & Maintenance',
    period: 'Nov 2025 - Mei 2026',
    points: [
      'Membantu pengelolaan safe work permit',
      'Terlibat dalam pekerjaan electric maintenance',
      'Membuat Single Line Diagram MCCI menggunakan ETAP',
      'Input dan pengolahan data motor area TPA2 dan UTT',
    ],
  },
  {
    abbr: 'SSP',
    company: 'PT Sumber Segara Primadaya',
    location: 'Cilacap, Jawa Tengah',
    role: 'Magang, Instrument',
    period: 'Sep - Des 2024',
    points: [
      'Inspeksi dan maintenance komponen instrument',
      'Kalibrasi dan penggantian valve',
      'Pengawasan dan dokumentasi pekerjaan',
    ],
  },
  {
    abbr: 'SBI',
    company: 'PT Solusi Bangun Indonesia',
    location: 'Cilacap, Jawa Tengah',
    role: 'Magang, Maintenance',
    period: 'Jul - Sep 2024',
    points: [
      'TPM pada area Reclaimer Limestone',
      'Preventive maintenance rutin Reclaimer Silica dan Weight Feeder',
      'Cleaning dan penggantian carbon brush motor raw mill',
      'Kalibrasi Weight Feeder',
    ],
  },
  {
    abbr: 'TKT',
    company: 'CV Tiga Karsa Teknologi',
    location: 'Magelang, Jawa Tengah',
    role: 'Internship, Tata Udara Residensial',
    period: 'Jan 2024 - Jan 2025',
    points: ['Instalasi dan service sistem tata udara residensial'],
  },
  {
    abbr: 'LCTN',
    company: 'PT Lotte Chemical Titan Nusantara',
    location: 'Cilegon, Banten',
    role: 'Magang, Maintenance',
    period: 'Jul - Agu 2022',
    points: [
      'Penggantian valve dan power supply',
      'Pemasangan sensor di area plant',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const job = JOBS[active]

  return (
    <section id="pengalaman" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-fg">
        Lima industri, satu jalur:{' '}
        <span className="text-volt">tenaga listrik.</span>
      </h2>
      <p className="mt-4 max-w-xl text-sm md:text-base text-dim leading-relaxed">
        Pencet lingkaran tiap tempat magang untuk melihat detail pekerjaannya.
      </p>

      {/* horizontal bus line with one node per internship */}
      <div className="relative mt-14">
        <div
          className="absolute left-0 right-0 top-6 sm:top-8 md:top-10 h-px bg-line"
          aria-hidden
        />
        <div className="relative flex justify-between gap-1 sm:gap-2">
          {JOBS.map((item, i) => {
            const isActive = active === i
            return (
              <button
                key={item.abbr}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={`Lihat detail magang di ${item.company}`}
                className="group flex w-full cursor-pointer flex-col items-center gap-2.5"
              >
                <span
                  className={`flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-2 font-mono text-[10px] sm:text-xs md:text-sm transition-all duration-300 ${
                    isActive
                      ? 'glow-volt scale-110 border-volt bg-volt/15 text-volt'
                      : 'border-line bg-panel text-dim group-hover:scale-105 group-hover:border-volt/60 group-hover:text-volt'
                  }`}
                >
                  {item.abbr}
                </span>
                <span
                  className={`text-center font-mono text-[9px] sm:text-[10px] md:text-xs transition-colors ${
                    isActive ? 'text-volt' : 'text-dim group-hover:text-fg'
                  }`}
                >
                  {item.period}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* detail card for the selected internship */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 rounded-xl border border-volt/40 bg-panel p-6 md:p-8"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-lg md:text-2xl text-fg">{job.company}</h3>
            <p className="flex items-center gap-1.5 font-mono text-[11px] md:text-xs text-dim">
              <MapPin className="h-3.5 w-3.5 text-volt/70" />
              {job.location}
            </p>
          </div>
          <p className="mt-1 text-sm md:text-base text-volt">{job.role}</p>
          <ul className="mt-5 grid gap-2.5 md:grid-cols-2 md:gap-x-10">
            {job.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-xs md:text-sm text-dim leading-relaxed"
              >
                <span className="mt-[7px] h-1 w-3 shrink-0 bg-volt/70" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
