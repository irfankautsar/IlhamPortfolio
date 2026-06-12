import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, Users } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Education() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="pendidikan" className="border-y border-line bg-panel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 md:px-6 md:py-32 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-volt" />
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-fg">
              Pendidikan
            </h2>
          </div>
          <div className="mt-6 rounded-xl border border-line bg-panel p-6">
            <p className="text-base md:text-lg text-fg">
              Universitas Negeri Yogyakarta
            </p>
            <p className="mt-1 text-sm text-dim">
              D4 Teknik Elektro, 2021 - 2024
            </p>
            <p className="mt-3 font-mono text-2xl text-volt">3.70<span className="text-sm text-dim"> / 4.00</span></p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                'Asisten dosen praktikum pembangkit, transmisi-distribusi, dan PLC',
                'Membuat miniatur PLTU lengkap dengan sistem monitoring',
                'Pemateri PLC di Politeknik Negeri Malang',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-dim leading-relaxed">
                  <span className="mt-[7px] h-1 w-3 shrink-0 bg-volt/70" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
        >
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-volt" />
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-fg">
              Organisasi
            </h2>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-xl border border-volt/30 bg-panel p-6">
              <p className="text-base md:text-lg text-fg">Tektronik UNY</p>
              <p className="mt-1 text-sm text-dim">Leader, 2022 - 2024</p>
              <p className="mt-3 text-xs md:text-sm text-dim leading-relaxed">
                Memimpin tim teknologi kelistrikan dan elektronika: proyek
                trainer PLTS off-grid, instalasi PLTS, serta pelatihan
                mikrokontroler dan IoT untuk mahasiswa dan mitra eksternal.
              </p>
              <img
                src="./assets/tektronik-card.jpg"
                alt="Kartu nama Tektronik UNY milik Ilham Pradina sebagai Supervisor"
                loading="lazy"
                className="mt-5 w-full max-w-sm rounded-lg border border-line"
              />
            </div>
            <div className="rounded-xl border border-line bg-panel p-6">
              <p className="text-sm md:text-base text-fg">
                Himpunan Mahasiswa Vokasi Teknik Elektro & Elektronika
              </p>
              <p className="mt-1 text-xs md:text-sm text-dim">
                Staff PSDM, 2023 - 2024. Program pengembangan hard skill dan
                soft skill mahasiswa.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
