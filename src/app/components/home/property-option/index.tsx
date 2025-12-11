"use client";

import { MessageCircle, ListChecks, Coins, ShieldCheck } from "lucide-react";

export default function HowChuksAiWorks() {

  const steps = [
    {
      title: "Start a Chat",
      desc: "Message Chuks AI on WhatsApp — no app download needed.",
      icon: () => <MessageCircle className="w-12 h-12 text-primary" />,
    },
    {
      title: "Share Your Needs",
      desc: "Tell the bot what insurance you're looking for: auto, health, travel, device & more.",
      icon: () => <ListChecks className="w-12 h-12 text-primary" />,
    },
    {
      title: "Get Instant Quotes",
      desc: "Compare insurance plans from top providers in seconds.",
      icon: () => <Coins className="w-12 h-12 text-primary" />,
    },
    {
      title: "Buy or Claim in WhatsApp",
      desc: "Purchase policies or file claims instantly — all inside WhatsApp.",
      icon: () => <ShieldCheck className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section className="dark:bg-darkmode py-20" id="how">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">

        <h2 
          className="text-4xl font-bold mb-12 text-midnight_text dark:text-white"
          data-aos="fade-left"
        >
          How Chuks AI Works
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >

              <div className="p-4 border-2 rounded-lg border-border dark:border-dark_border mb-6 flex items-center justify-center">
                {step.icon()}
              </div>

              <p className="text-[22px] font-semibold text-midnight_text dark:text-white mb-2">
                {step.title}
              </p>

              <p className="text-base text-gray-500 dark:text-gray-300">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
