"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#5f3b86]/5 blur-[120px]" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-[#61abbb]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <span className="block text-[11px] tracking-[0.45em] uppercase text-black/50 mb-6">
            About Us
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-black">
            About the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #000000, #5f3b86)",
              }}
            >
              Digital Inclusion Initiative
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-black/70 leading-relaxed">
            We are a social-impact organisation advancing access to devices,
            data, and job-ready digital skills, so everyone can participate
            meaningfully in the digital economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
