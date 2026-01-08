'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const hooks = [
  'Elected representative. Community advocate. Strategic leader.',
  'Bridging heritage with service, business with purpose.',
  'Advancing opportunity through thoughtful leadership.'
]

export default function HomeHero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hooks.length)
    }, 5200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(194,164,93,0.08),transparent_45%)]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(20,20,20,0.04),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT: TEXT */}
        <div className="relative">

          {/* Subtle vertical accent */}
          <div className="absolute -left-6 top-2 h-16 w-px bg-[#C2A45D]/40 hidden md:block" />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="text-4xl py-14 md:text-5xl font-light tracking-tight text-[#141414]"
          >
            Hon. Rasheed Kashamu
          </motion.h1>

          <div className="mt-6 h-[76px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
                className="text-lg md:text-xl text-[#5A5A5A] max-w-xl leading-relaxed"
              >
                {hooks[current]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.5 }}
            className="mt-10 text-xs uppercase tracking-[0.25em] text-[#7A7A7A]"
          >
            Member, Ogun State House of Assembly · Minority Whip · Entrepreneur
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.8 }}
            className="mt-6 text-[#6A6A6A] max-w-lg leading-relaxed"
          >
            Combining business acumen with a commitment to public service,
            Hon. Rasheed Kashamu advances opportunity, empowerment, and
            sustainable development for communities in Ogun State and beyond.
          </motion.p>
        </div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, ease: 'easeOut' }}
          className="relative w-full h-[540px]"
        >
          <div className="absolute -inset-3 rounded-3xl bg-[#C2A45D]/10 blur-2xl" />

          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-100">
            <Image
              src="/images/hero/kashamu.jpg"
              alt="Hon. Rasheed Kashamu"
              fill
              priority
              className="object-cover grayscale-[3%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
