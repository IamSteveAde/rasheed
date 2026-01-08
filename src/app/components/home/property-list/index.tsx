'use client'

import { motion } from 'framer-motion'

const ventures = [
  {
    title: 'Public Service & Governance',
    description:
      'Active engagement in legislative work, policy oversight, and constituency representation as a Member of the Ogun State House of Assembly, with a focus on governance, accountability, and community development.'
  },
  {
    title: 'Private Enterprise',
    description:
      'Involvement in privately held businesses, applying principles of structure, governance, and disciplined execution informed by both local and international exposure.'
  },
  {
    title: 'Real Estate & Property Interests',
    description:
      'Participation in property-related ventures with an emphasis on long-term value, responsible development, and practical utility rather than speculative activity.'
  },
  {
    title: 'Long-Term Economic Interests',
    description:
      'A measured approach to capital and opportunity, prioritising sustainability, continuity, and initiatives that contribute to economic participation and resilience.'
  }
]

export default function VenturesSection() {
  return (
    <section className="relative bg-white py-36" id="ventures">
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
            Responsibility in public life and discipline in enterprise
            require clarity of purpose and long-term thinking.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="text-[#5A5A5A] max-w-2xl leading-relaxed"
          >
            Rasheed Kashamu’s areas of focus span public service and private
            enterprise. Across both spheres, his involvement is shaped by an
            understanding that credibility, sustainability, and impact are
            built through consistency, structure, and measured decision-making
            rather than short-term visibility.
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
              {/* Subtle accent line */}
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
