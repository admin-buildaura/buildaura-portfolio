import { RevealContainer } from "@/components/ui/reveal-section"

export function MissionSection() {
  return (
    <section id="mission" className="relative py-32 bg-[#0b0b09] overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 dot-grid opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_60%,rgba(201,146,42,0.06)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="reveal flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#c9922a]" />
              <span className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.14em]">
                Our Mission
              </span>
            </div>
            <h2
              className="reveal reveal-delay-1 font-display font-bold tracking-[-0.025em] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(34px, 4vw, 54px)" }}
            >
              Bridging Vision<br />and Reality.
            </h2>
            <p className="reveal reveal-delay-2 text-[16px] text-[#c8c2b4] leading-[1.8] mb-6">
              The gap between architectural ambition and constructed reality is where most firms stumble. Our mission is to close that gap — permanently. We exist to engineer the extraordinary into existence, on time and on budget.
            </p>
            <p className="reveal reveal-delay-3 text-[16px] text-[#8a8478] leading-[1.8]">
              From heritage restorations to net-zero logistics hubs, every project carries the same commitment: that what gets built is indistinguishable from what was imagined.
            </p>

            {/* Core goal */}
            <div className="reveal reveal-delay-4 mt-10 p-6 rounded-xl border border-[rgba(201,146,42,0.2)] bg-[rgba(201,146,42,0.04)]">
              <p className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.12em] mb-2">Core Goal</p>
              <p className="text-[15px] text-[#f0ece3] leading-relaxed">
                To make landmark architecture accessible, deliverable, and sustainable for every ambitious organisation.
              </p>
            </div>
          </div>

          {/* Right: numbers */}
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-5">
            {[
              { n: "2026", label: "Founded in Bengaluru" },
              { n: "2", label: "Completed projects" },
              { n: "6", label: "LEED Platinum buildings" },
              { n: "8mo", label: "Avg. large-project delivery" },
            ].map((item) => (
              <div
                key={item.n}
                className="p-7 rounded-xl bg-[#111110] border border-white/[0.07] hover:border-[rgba(201,146,42,0.15)] transition-colors duration-300"
              >
                <p className="font-display text-[40px] font-bold text-gold-gradient leading-none mb-3">
                  {item.n}
                </p>
                <p className="text-[13px] text-[#8a8478] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </RevealContainer>
      </div>
    </section>
  )
}
