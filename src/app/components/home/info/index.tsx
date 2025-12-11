"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How does the WhatsApp bot work?",
      a: "Simply message Chuks AI on WhatsApp. The bot guides you through quotes, purchases, claims, and support — instantly.",
    },
    {
      q: "Is it secure?",
      a: "Yes. All messages are protected by WhatsApp’s end-to-end encryption plus our enterprise-grade security protocols.",
    },
    {
      q: "What insurance can I buy?",
      a: "You can purchase health, auto, travel, life, device insurance, and SME business protection.",
    },
    {
      q: "How do I file a claim?",
      a: "Start a chat with Chuks AI and select 'File a Claim'. The bot walks you through the entire process step-by-step.",
    },
    {
      q: "Is the service free?",
      a: "Yes. Chatting with Chuks AI is free. You only pay for the insurance plan you choose.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-[#f8fafc] overflow-hidden" id="faq">

      {/* --- LAYER 1: Soft floating orbs --- */}
      <div className="absolute top-10 left-10 h-48 w-48 bg-primary/20 blur-3xl rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 h-56 w-56 bg-blue-300/30 blur-3xl rounded-full opacity-40 animate-pulse delay-300"></div>

      {/* --- LAYER 2: Subtle AI grid pattern --- */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('/images/patterns/grid-light.svg')] bg-cover"></div>

      {/* --- LAYER 3: Earth rings --- */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <svg viewBox="0 0 800 800" className="w-[950px] h-[950px]">
          <circle cx="400" cy="400" r="140" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="230" stroke="#e2e8f0" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="320" stroke="#f1f5f9" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 container mx-auto lg:max-w-screen-xl px-6">

        {/* FAQ Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600">
            Everything you need to know about using Chuks AI for insurance.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 relative">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl p-6 shadow-md 
                           hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {/* Glow hover accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-midnight_text">
                    {item.q}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`relative overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
