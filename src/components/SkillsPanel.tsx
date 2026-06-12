import { motion, useReducedMotion } from 'framer-motion'
import {
  CircuitBoard,
  PencilRuler,
  UtilityPole,
  Wrench,
} from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const GROUPS = [
  {
    name: 'Sistem Tenaga',
    icon: UtilityPole,
    skills: [
      { code: 'PWR-01', label: 'Instalasi & operasi sistem tenaga' },
      { code: 'PWR-02', label: 'Proteksi tenaga listrik' },
      { code: 'PWR-03', label: 'Transmisi & distribusi' },
      { code: 'PWR-04', label: 'Pembangkit tenaga listrik' },
    ],
  },
  {
    name: 'Desain & Simulasi',
    icon: PencilRuler,
    skills: [
      { code: 'CAD-01', label: 'AutoCAD' },
      { code: 'SIM-01', label: 'ETAP' },
      { code: 'SIM-02', label: 'Simurelay' },
    ],
  },
  {
    name: 'Otomasi & Kontrol',
    icon: CircuitBoard,
    skills: [
      { code: 'CTL-01', label: 'PLC' },
      { code: 'MCU-01', label: 'ESP32' },
      { code: 'MCU-02', label: 'Arduino' },
      { code: 'IOT-01', label: 'Internet of Things' },
    ],
  },
  {
    name: 'Lapangan',
    icon: Wrench,
    skills: [
      { code: 'FLD-01', label: 'Pengujian instalasi' },
      { code: 'FLD-02', label: 'Preventive maintenance' },
      { code: 'FLD-03', label: 'Kalibrasi instrument' },
    ],
  },
]

export default function SkillsPanel() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="keahlian" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-fg">
        Panel keahlian.
      </h2>
      <p className="mt-4 max-w-md text-sm md:text-base text-dim leading-relaxed">
        Kombinasi sistem tenaga, simulasi, otomasi, dan pekerjaan lapangan.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.name}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: gi * 0.08, ease: EASE }}
          >
            <div className="flex items-center gap-2.5">
              <group.icon className="h-4 w-4 text-volt" />
              <h3 className="font-mono text-[11px] tracking-[0.18em] text-dim">
                {group.name.toUpperCase()}
              </h3>
            </div>
            <div className="mt-4 flex flex-col gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.code}
                  className="rounded-lg border border-line border-l-2 border-l-volt/70 bg-panel px-4 py-3 transition-colors hover:border-volt/40"
                >
                  <span className="block font-mono text-[10px] tracking-[0.14em] text-dim">
                    {skill.code}
                  </span>
                  <span className="block text-xs md:text-sm text-fg">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
