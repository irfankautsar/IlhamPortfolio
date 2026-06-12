import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const JOBS = [
  {
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
    company: 'CV Tiga Karsa Teknologi',
    location: 'Magelang, Jawa Tengah',
    role: 'Internship, Tata Udara Residensial',
    period: 'Jan 2024 - Jan 2025',
    points: ['Instalasi dan service sistem tata udara residensial'],
  },
  {
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
  const [open, setOpen] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <section id="pengalaman" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-fg">
        Lima industri, satu jalur:{' '}
        <span className="text-volt">tenaga listrik.</span>
      </h2>
      <p className="mt-4 max-w-xl text-sm md:text-base text-dim leading-relaxed">
        Klik tiap perusahaan untuk melihat detail pekerjaannya. Disusun seperti
        single line diagram: satu bus, lima feeder.
      </p>

      {/* vertical bus line with breaker nodes */}
      <div className="relative mt-12 lg:mt-16">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-line" aria-hidden />
        <div className="flex flex-col gap-3">
          {JOBS.map((job, i) => {
            const isOpen = open === i
            return (
              <div key={job.company} className="relative pl-10">
                {/* breaker node */}
                <span
                  className={`absolute left-0 top-4 h-[23px] w-[23px] rounded-full border-2 transition-colors ${
                    isOpen ? 'border-volt bg-volt/20' : 'border-line bg-ink'
                  }`}
                  aria-hidden
                >
                  <span
                    className={`absolute inset-[5px] rounded-full transition-colors ${
                      isOpen ? 'bg-volt glow-volt' : 'bg-line'
                    }`}
                  />
                </span>

                <div
                  className={`overflow-hidden rounded-lg border transition-colors ${
                    isOpen ? 'border-volt/40 bg-panel' : 'border-line bg-transparent hover:border-volt/25'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full flex-col gap-1 px-4 py-4 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-6"
                  >
                    <span>
                      <span className="block text-base md:text-lg text-fg">
                        {job.company}
                      </span>
                      <span className="block text-xs md:text-sm text-dim">
                        {job.role}
                      </span>
                    </span>
                    <span className="flex items-center gap-3 font-mono text-[11px] md:text-xs text-dim">
                      {job.period}
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-volt' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="border-t border-line px-4 py-4 md:px-6">
                          <p className="font-mono text-[11px] text-dim">
                            {job.location}
                          </p>
                          <ul className="mt-3 grid gap-2 md:grid-cols-2 md:gap-x-8">
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
