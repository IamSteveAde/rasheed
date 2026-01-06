'use client'

import { motion } from 'framer-motion'

export default function PositioningSection() {
  return (
    <section className="relative bg-white py-32" id='abouts'>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heritage divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto mb-10 h-px w-24 bg-[#C2A45D]/60"
        />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-10"
        >
          Position & Purpose
        </motion.h2>

        {/* Main statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-light text-[#141414] leading-relaxed max-w-3xl mx-auto"
        >
          Influence is not defined by volume, but by intention.
        </motion.p>

        {/* Supporting copy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto text-[#5A5A5A] leading-relaxed"
        >
          <p className="mb-6">
            Jubril Okoya represents a generation shaped by heritage and guided by
            discipline — one that understands that legacy is built through
            restraint, clarity, and long-term thinking.
          </p>

          <p>
            His approach to leadership and enterprise is deliberate. Every
            decision is measured against what endures, not what trends. This
            philosophy informs how he engages with business, public presence, and
            responsibility — quietly, thoughtfully, and with purpose.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
