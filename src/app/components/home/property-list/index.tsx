"use client";

import {
  Bot,
  CheckCircle2,
  Timer,
  ShieldCheck,
  Languages,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "24/7 AI Support",
      desc: "Get help anytime with instant, human-like responses — no waiting, no hold music.",
      icon: Bot,
    },
    {
      title: "Verified Insurance Partners",
      desc: "We work only with trusted, vetted insurers so your cover is always reliable.",
      icon: CheckCircle2,
    },
    {
      title: "Fast Claims Support",
      desc: "Start, track, and get updates on your claims directly in WhatsApp.",
      icon: Timer,
    },
    {
      title: "Secure & Encrypted",
      desc: "Bank-grade security plus WhatsApp’s end-to-end encryption to protect your data.",
      icon: ShieldCheck,
    },
    {
      title: "Multi-language Support",
      desc: "English plus local languages (coming soon) so everyone can use Chuks AI comfortably.",
      icon: Languages,
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f5f7ff] to-white dark:from-[#050816] dark:via-[#050816] dark:to-[#050816]">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] -left-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      {/* Subtle grid / lines background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.17]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-200 dark:text-slate-800" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto md:max-w-screen-md lg:max-w-screen-xl px-4">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">
            Features
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4"
            data-aos="fade-left"
          >
            Everything you need in one WhatsApp conversation.
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
            Chuks AI makes insurance feel simple, fast, and human — without leaving the comfort of your chat screen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative flex flex-col items-start rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_22px_55px_rgba(37,99,235,0.28)] dark:border-white/5 dark:bg-white/5"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                {/* Accent line on top */}
                <span className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon wrapper */}
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 p-3 transition group-hover:bg-primary/10 group-hover:border-primary/40">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-midnight_text dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {feature.desc}
                </p>

                {/* Subtle bottom accent */}
                <div className="mt-4 h-px w-10 rounded-full bg-gradient-to-r from-primary/60 to-transparent opacity-70 group-hover:w-16 group-hover:opacity-100 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
