import { testimonials } from "@/lib/data"
import { RevealContainer } from "@/components/ui/reveal-section"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 bg-[#0b0b09] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,146,42,0.05)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 dot-grid opacity-25"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealContainer className="mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9922a]" />
            <span className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.14em]">
              Voices from Clients
            </span>
          </div>
          <h2
            className="reveal reveal-delay-1 font-display font-bold tracking-[-0.025em] leading-[1.1]"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
          >
            What Our Clients Say
          </h2>
        </RevealContainer>

        <RevealContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${i + 1} group flex flex-col p-8 rounded-2xl bg-[#111110] border border-white/[0.07] hover:border-[rgba(201,146,42,0.15)] transition-all duration-400 card-glow`}
            >
              {/* Quote mark */}
              <div
                className="font-display text-[64px] leading-none font-bold mb-4 select-none"
                style={{ color: "rgba(201,146,42,0.25)" }}
              >
                &ldquo;
              </div>

              <p className="text-[15px] text-[#c8c2b4] leading-[1.8] flex-1 mb-8">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.07] mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Initials avatar */}
                <div className="w-10 h-10 rounded-full bg-[rgba(201,146,42,0.1)] border border-[rgba(201,146,42,0.25)] flex items-center justify-center shrink-0">
                  <span className="font-display text-[13px] font-bold text-[#e8a832]">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#f0ece3]">{t.author}</p>
                  <p className="text-[12px] text-[#8a8478]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealContainer>
      </div>
    </section>
  )
}
