'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="relative bg-white py-40 overflow-hidden" id="abouts">

      {/* Ambient structure */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-[#C2A45D]/10 -translate-x-1/2 hidden md:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(194,164,93,0.06),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-sm uppercase tracking-[0.35em] text-neutral-500 mb-10"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed"
          >
            A deliberate life shaped by
            <br />
            <span className="text-[#C2A45D]">service, structure, and continuity</span>.
          </motion.h2>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="relative"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Public Service
            </p>

            <h3 className="text-xl font-light text-[#141414] mb-6">
              Governance with responsibility
            </h3>

            <p className="text-[#5A5A5A] leading-relaxed">
              As a legislator in the Ogun State House of Assembly, Rasheed Kashamu
              is engaged in the practical work of governance — lawmaking,
              representation, and oversight — with a focus on translating policy
              into outcomes that improve everyday life.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1 }}
            className="relative"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Enterprise
            </p>

            <h3 className="text-xl font-light text-[#141414] mb-6">
              Building beyond cycles
            </h3>

            <p className="text-[#5A5A5A] leading-relaxed">
              His involvement in private enterprise, real estate, and long-term
              investments reflects a consistent philosophy: disciplined
              execution, sustainable growth, and value creation that endures
              beyond market trends or political cycles.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="relative"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Continuity
            </p>

            <h3 className="text-xl font-light text-[#141414] mb-6">
              Legacy as obligation
            </h3>

            <p className="text-[#5A5A5A] leading-relaxed">
              Shaped by heritage but guided by personal conviction, Rasheed
              Kashamu approaches legacy not as inheritance, but as responsibility —
              preserving what works, reforming what does not, and building
              institutions that can outlast individuals.
            </p>
          </motion.div>
        </div>

        {/* Closing Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="mt-32 max-w-3xl mx-auto text-center"
        >
          <div className="mx-auto mb-10 h-px w-24 bg-[#C2A45D]/60" />

          <p className="text-lg font-light text-[#141414] leading-relaxed">
            Across public service, enterprise, and private initiatives,
            the principle remains the same:
          </p>

          <p className="mt-6 text-[#5A5A5A] leading-relaxed">
            to act with intention, to prioritise long-term outcomes over
            short-term visibility, and to contribute in ways that remain
            relevant long after decisions are made.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
