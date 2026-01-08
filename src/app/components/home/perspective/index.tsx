'use client'

import { motion } from 'framer-motion'

export default function PresencePerspectiveSection() {
  return (
    <section className="relative bg-white py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto mb-12 h-px w-24 bg-[#C2A45D]/60"
        />

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-10"
        >
          Presence & Perspective
        </motion.p>

        {/* Core statement */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed mb-12"
        >
          Presence is not about being seen everywhere.  
          <br />
          It is about being understood where it counts.
        </motion.h3>

        {/* Supporting copy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="text-[#5A5A5A] leading-relaxed max-w-2xl mx-auto"
        >
          <p className="mb-6">
            Rasheed Kashamu approaches influence with intention — guided by
            clarity of thought, restraint in action, and consistency over time.
          </p>

          <p className="mb-6">
            In an environment shaped by speed and spectacle, he remains
            deliberate, allowing decisions, values, and long-term outcomes
            to define his presence rather than constant visibility.
          </p>

          <p>
            Perspective, for him, is earned through years of measured choices
            and enduring commitments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
