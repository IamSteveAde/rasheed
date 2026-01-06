'use client'

import { motion } from 'framer-motion'

const ventures = [
  {
    title: 'Real Estate & Development',
    description:
      'Thoughtfully planned developments focused on quality, sustainability, and long-term value.'
  },
  {
    title: 'Private Enterprise',
    description:
      'Strategic involvement in businesses where governance, discipline, and execution matter.'
  },
  {
    title: 'Long-Term Investments',
    description:
      'A patient approach to capital, prioritising resilience and enduring relevance.'
  },
  {
    title: 'Strategic Interests',
    description:
      'Ongoing exploration of opportunities aligned with innovation, infrastructure, and impact.'
  }
]

export default function VenturesSection() {
  return (
    <section className="relative bg-white py-36" id='ventures'>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8"
          >
            Ventures & Focus
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed mb-6"
          >
            Enterprise, when approached thoughtfully,
            becomes a long-term instrument for impact.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="text-[#5A5A5A] max-w-2xl leading-relaxed"
          >
            Jubril Okoya is selectively involved in ventures that align with his
            values of quality, longevity, and disciplined growth. His business
            interests are guided by patience, structure, and an emphasis on
            building things that endure beyond cycles and trends.
          </motion.p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
              className="relative p-10 border border-neutral-200 rounded-2xl hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              {/* subtle accent line */}
              <div className="absolute top-0 left-10 w-12 h-px bg-[#C2A45D]/60" />

              <h4 className="text-xl font-light text-[#141414] mb-4">
                {venture.title}
              </h4>

              <p className="text-[#5A5A5A] leading-relaxed">
                {venture.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
