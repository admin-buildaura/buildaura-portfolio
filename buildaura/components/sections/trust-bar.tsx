const trustedBy = [
  "House of Evolve",
]

export function TrustBar() {
  const items = [...trustedBy, ...trustedBy] // duplicate for seamless loop

  return (
    <section className="relative py-8 border-y border-white/[0.06] bg-[#0d0d0b] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d0b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d0b] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        {/* Label */}
        <div className="shrink-0 px-8 border-r border-white/[0.06] mr-8">
          <p className="text-[11px] font-medium text-[#8a8478] uppercase tracking-[0.14em] whitespace-nowrap">
            Trusted By
          </p>
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker flex items-center gap-0 whitespace-nowrap">
            {items.map((name, i) => (
              <span key={i} className="inline-flex items-center gap-6 px-8">
                <span className="text-[14px] font-medium text-[#c8c2b4] tracking-[0.01em] hover:text-[#f0ece3] transition-colors cursor-default">
                  {name}
                </span>
                <span className="w-1 h-1 rounded-full bg-[rgba(201,146,42,0.4)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
