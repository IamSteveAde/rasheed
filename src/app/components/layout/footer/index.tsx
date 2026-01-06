'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-black py-28 md:py-36 overflow-hidden">

      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[70%] bg-gradient-to-r from-transparent via-[#C2A45D]/40 to-transparent" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-20 items-start">

          {/* LEFT — IDENTITY */}
          <div className="md:col-span-4 space-y-6">
            <span
              className="
                block
                text-sm
                tracking-[0.35em]
                uppercase
                font-light
                text-white
              "
            >
              Jubril <span className="text-[#C2A45D]">Okoya</span>
            </span>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              A personal archive reflecting values, perspective, and long-term
              intent — shaped by discipline, responsibility, and legacy-driven
              thinking.
            </p>
          </div>

          {/* CENTER — NAVIGATION */}
          <div className="md:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Explore
            </span>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#abouts"
                  className="text-white/70 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#vision"
                  className="text-white/70 hover:text-white transition"
                >
                  Vision & Legacy
                </Link>
              </li>
              <li>
                <Link
                  href="#ventures"
                  className="text-white/70 hover:text-white transition"
                >
                  Ventures
                </Link>
              </li>
              <li>
                <Link
                  href="#impact"
                  className="text-white/70 hover:text-white transition"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="#enquiries"
                  className="text-white/70 hover:text-white transition"
                >
                  Private Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT — STATEMENT */}
          <div className="md:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Perspective
            </span>

            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              This platform exists to shape understanding, preserve intent, and
              provide quiet clarity — not to seek attention, but to define it
              deliberately.
            </p>

            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-white/50 border-b border-[#C2A45D]/40 pb-1">
              By intention
            </span>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-24 text-center text-white/35 text-xs tracking-wide">
          © {new Date().getFullYear()} Jubril Okoya. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
