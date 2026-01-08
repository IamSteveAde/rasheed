'use client'

import { motion } from 'framer-motion'

export default function VisionLegacySection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-40" id="vision">

      {/* ORBIT SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Orbit 1 */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 160,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C2A45D]/20"
        />

        {/* Orbit 2 */}
        <motion.div
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 220,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/2 left-1/2 w-[1200px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C2A45D]/15"
        />

        {/* Orbit 3 */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 260,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/2 left-1/2 w-[1400px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C2A45D]/10"
        />

        {/* Soft ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(194,164,93,0.08),transparent_45%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-12"
        >
          Vision & Legacy
        </motion.p>

        {/* Main statement */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed"
        >
          Legacy is not declared.  
          <br />
          It is{' '}
          <span className="text-[#C2A45D]">established through time</span>.
        </motion.h3>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="mt-14 text-[#5A5A5A] leading-relaxed max-w-2xl mx-auto"
        >
          <p className="mb-6">
            Rasheed Kashamu approaches legacy as a responsibility — one that
            requires patience, restraint, and a clear sense of direction.
          </p>

          <p>
            His vision is shaped by long-term thinking and disciplined choices,
            guided by the belief that influence should endure quietly and
            reveal itself through outcomes, not announcements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
