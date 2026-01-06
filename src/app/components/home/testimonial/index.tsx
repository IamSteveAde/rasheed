'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.8,
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

export default function ImpactNumbersSection() {
  return (
    <section className="relative bg-[#FAFAFA] py-36 overflow-hidden" id='impact'>

      {/* subtle ambient depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(194,164,93,0.06),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8"
          >
            Measured Impact
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="text-3xl md:text-4xl font-light text-[#141414] leading-relaxed"
          >
            Impact is not claimed.  
            <br />
            It is demonstrated — quietly, over time.
          </motion.h3>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          
          <Metric
            value={10}
            suffix="+"
            label="Years of Active Focus"
          />

          <Metric
            value={5}
            suffix="+"
            label="Business Ventures Engaged"
          />

          <Metric
            value={8}
            suffix="+"
            label="Cities & Markets Reached"
          />

          <Metric
            value={12}
            suffix="+"
            label="Strategic Partnerships"
          />

        </div>
      </div>
    </section>
  )
}

function Metric({
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
      className="group"
    >
      <div className="text-4xl md:text-5xl font-light text-[#141414] mb-3">
        <Counter value={value} />
        <span>{suffix}</span>
      </div>

      <div className="h-px w-10 bg-[#C2A45D]/50 mb-4 group-hover:w-16 transition-all duration-500" />

      <p className="text-sm uppercase tracking-widest text-neutral-500">
        {label}
      </p>
    </motion.div>
  )
}
