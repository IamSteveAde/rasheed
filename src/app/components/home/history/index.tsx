"use client";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I bought my travel insurance in less than 5 minutes.",
      name: "Chinedu A.",
      initials: "CA",
    },
    {
      text: "Customer service is so fast. Filing a claim was easy.",
      name: "Fatima O.",
      initials: "FO",
    },
    {
      text: "Chuks AI is the smartest insurance assistant I’ve used.",
      name: "Tunde M.",
      initials: "TM",
    },
  ];

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden" id="testimonials">

      {/* Subtle circular rings pattern */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.15]">
        <svg
          viewBox="0 0 800 800"
          className="w-[900px] h-[900px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="120" stroke="#94a3b8" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="200" stroke="#94a3b8" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="300" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <circle cx="400" cy="400" r="380" stroke="#e2e8f0" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto lg:max-w-screen-xl px-6">

        {/* Section Heading */}
        <div className="max-w-xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-midnight_text">
            Loved by thousands of users.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border border-gray-200 bg-white 
                         shadow-[0_8px_20px_rgba(0,0,0,0.05)]
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Initials */}
              <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20
                              flex items-center justify-center text-primary text-xl font-bold mb-5">
                {item.initials}
              </div>

              {/* Text */}
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                “{item.text}”
              </p>

              {/* Name */}
              <p className="text-sm text-gray-500 font-medium">— {item.name}</p>

              {/* Accent underline */}
              <div className="mt-5 h-[2px] w-12 rounded-full bg-primary/50 group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
