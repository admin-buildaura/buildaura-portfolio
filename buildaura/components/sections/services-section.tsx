import { services } from "@/lib/data"
import { RevealContainer } from "@/components/ui/reveal-section"

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-[#0e0e0c] overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,146,42,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <RevealContainer className="mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9922a]" />
            <span className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.14em]">
              What We Do
            </span>
          </div>
          <div className="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h2
              className="font-display font-bold tracking-[-0.025em] leading-[1.1]"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              How We Work<br />With You
            </h2>
            <p className="text-[15px] text-[#8a8478] leading-relaxed">
              Three ways to deliver your vision — choose the engagement model that fits your project and timeline.
            </p>
          </div>
        </RevealContainer>

        {/* Service cards */}
        <RevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${i + 1} group relative p-7 rounded-xl bg-[#111110] border border-white/[0.07] hover:border-[rgba(201,146,42,0.2)] transition-all duration-400 card-glow cursor-pointer`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[rgba(201,146,42,0.1)] border border-[rgba(201,146,42,0.15)] flex items-center justify-center text-[18px] text-[#e8a832] mb-6 group-hover:bg-[rgba(201,146,42,0.15)] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-medium text-[#8a8478] uppercase tracking-[0.12em] bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded mb-4">
                {service.tag}
              </span>

              <h3 className="font-display text-[20px] font-semibold leading-[1.25] mb-3 tracking-[-0.01em]">
                {service.title}
              </h3>

              <p className="text-[14px] text-[#8a8478] leading-[1.7]">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-1.5 text-[12px] text-[rgba(201,146,42,0.6)] group-hover:text-[#c9922a] transition-colors duration-200">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </div>
          ))}
        </RevealContainer>
      </div>
    </section>
  )
}
