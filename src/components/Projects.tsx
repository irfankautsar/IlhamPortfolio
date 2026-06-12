import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const PROJECTS = [
  {
    src: './assets/plts-rooftop.jpg',
    title: 'Instalasi PLTS Rooftop',
    desc: 'Pemasangan panel surya on-roof bersama tim Tektronik, dari mounting sampai komisioning.',
    big: true,
  },
  {
    src: './assets/plts-trainer-team.jpg',
    title: 'Trainer PLTS Off-Grid',
    desc: 'Trainer pembelajaran sistem PLTS off-grid karya tim Tektronik UNY.',
  },
  {
    src: './assets/smart-grid-trainer.jpg',
    title: 'Smart Grid Trainer',
    desc: 'Praktik operasi pembangkit, SCADA, dan transmisi-distribusi pada smart grid trainer.',
  },
  {
    src: './assets/dashboard-motor.jpg',
    title: 'Dashboard Maintenance Motor',
    desc: 'Monitoring preventive maintenance dan status overhaul 211 motor di MCCI.',
  },
  {
    src: './assets/komunitas-serut.jpg',
    title: 'Pengabdian Masyarakat',
    desc: 'Kegiatan komunitas bersama Tektronik di Balai Warga Serut, Kulon Progo.',
  },
]

function Card({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.figure
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-panel ${
        project.big ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <div className={`overflow-hidden ${project.big ? 'flex-1 min-h-64' : 'h-44 sm:h-52'}`}>
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="border-t border-line p-4 md:p-5">
        <h3 className="text-sm md:text-base text-fg">{project.title}</h3>
        <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-dim">
          {project.desc}
        </p>
      </figcaption>
    </motion.figure>
  )
}

export default function Projects() {
  return (
    <section id="proyek" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-fg">
          Dari trainer PLTS sampai lantai pabrik.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PROJECTS.map((project, i) => (
            <Card key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
