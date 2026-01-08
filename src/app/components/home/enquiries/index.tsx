'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivateEnquiriesSection() {
  return (
    <section
      id="enquiries"
      className="relative bg-[#FAFAFA] py-40 overflow-hidden"
    >
      {/* Subtle ambient depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(194,164,93,0.06),transparent_45%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

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
          Private Enquiries
        </motion.p>

        {/* Core statement */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed mb-12"
        >
          Access is intentional.  
          <br />
          Dialogue is purposeful.
        </motion.h3>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="text-[#5A5A5A] leading-relaxed max-w-xl mx-auto mb-16"
        >
          This platform is not intended for general correspondence.
          Private discussions are considered where there is clear alignment,
          long-term intent, or substantive relevance. All communication is
          handled with discretion and respect for privacy.
        </motion.p>

        {/* Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5 }}
        >
          <Link
            href="mailto:private@rasheedkashamu.com"
            className="
              inline-block
              px-10 py-4
              text-[11px]
              tracking-[0.35em]
              uppercase
              text-[#141414]
              border border-[#C2A45D]/60
              hover:bg-[#C2A45D]/10
              transition
            "
          >
            Request a Private Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
