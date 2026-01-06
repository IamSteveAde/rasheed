'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

function Counter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 3,
        ease: 'easeOut'
      })
    }
  }, [isInView, value, count])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded}
    </motion.span>
  )
}

export default function PhilanthropyImpactSection() {
  return (
    <section className="relative bg-[#FAFAFA] py-40 overflow-hidden">

      {/* Faded World Map */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/hero/map.png"
          alt="Global impact map"
          width={1400}
          height={700}
          className="opacity-[0.07]"
        />
      </div>

      {/* Soft ambient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(194,164,93,0.06),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8"
          >
            Philanthropy & Social Impact
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed mb-6"
          >
            Responsibility does not end with success.  
            <br />
            It expands with it.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="text-[#5A5A5A] max-w-2xl leading-relaxed"
          >
            A measured commitment to people, communities, and long-term uplift —
            carried out quietly, consistently, and with intent.
          </motion.p>
        </div>

        {/* Impact Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          
          <ImpactMetric value={1200} suffix="+" label="Lives Touched" />
          <ImpactMetric value={15} suffix="+" label="Communities Supported" />
          <ImpactMetric value={25} suffix="+" label="Educational Initiatives Backed" />
          <ImpactMetric value={8} suffix="+" label="Years of Sustained Giving" />

        </div>
      </div>
    </section>
  )
}

function ImpactMetric({
  value,
  suffix,
  label
}: {
  value: number
  suffix?: string
  label: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-light text-[#141414] mb-3">
        <Counter value={value} />
        <span>{suffix}</span>
      </div>

      <div className="mx-auto h-px w-10 bg-[#C2A45D]/60 mb-4" />

      <p className="text-sm uppercase tracking-widest text-neutral-500">
        {label}
      </p>
    </motion.div>
  )
}
