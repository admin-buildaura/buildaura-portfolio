import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pb-24 pt-32 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#161410] via-[#0b0b09] to-[#080806]" />

      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_40%,rgba(201,146,42,0.09)_0%,transparent_65%)]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 dot-grid"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Aura rings (decorative, right side) */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,146,42,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-[rgba(201,146,42,0.1)] animate-aura pointer-events-none" />
      <div className="absolute right-[40px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[rgba(201,146,42,0.15)] animate-aura pointer-events-none [animation-delay:1s]" />
      <div className="absolute right-[130px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-[rgba(201,146,42,0.2)] animate-aura pointer-events-none [animation-delay:2s]" />

      {/* SVG building silhouette (right, faint) */}
      <svg
        className="absolute right-[8%] bottom-0 opacity-[0.045] pointer-events-none"
        width="480"
        height="560"
        viewBox="0 0 480 560"
        fill="none"
      >
        {/* Main tower */}
        <rect x="165" y="80" width="150" height="480" fill="white" />
        {/* Left wing */}
        <rect x="60" y="200" width="110" height="360" fill="white" />
        {/* Right wing */}
        <rect x="310" y="200" width="110" height="360" fill="white" />
        {/* Crown */}
        <rect x="210" y="30" width="60" height="55" fill="white" />
        <rect x="225" y="0" width="30" height="35" fill="white" />
        {/* Windows - main */}
        {[0, 1, 2, 3, 4, 5, 6].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`m-${row}-${col}`}
              x={185 + col * 42}
              y={110 + row * 55}
              width={24}
              height={32}
              fill="black"
              opacity="0.4"
            />
          ))
        )}
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up delay-100">
          <div className="w-12 h-px bg-gold-DEFAULT" />
          <span className="text-xs font-semibold text-gold-light tracking-[0.2em] uppercase">
            Premium Web Development — Modern Solutions
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold leading-[1.1] tracking-[-0.02em] max-w-4xl mb-6 opacity-0 animate-fade-up delay-200"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Build Beyond
          <br />
          <em className="not-italic text-gold-gradient">Ordinary.</em>
        </h1>

        {/* Sub */}
        <p className="text-lg font-normal text-cream-2 max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up delay-300">
          We help organizations design, build, and transform digital experiences — from concept to launch, creating modern web solutions that drive results.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-up delay-400">
          <Link
            href="#contact"
            className="flex items-center gap-2.5 bg-gold-DEFAULT hover:bg-gold-light text-[#0b0b09] text-sm font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold-DEFAULT/30 group"
          >
            Discuss Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <Link
            href="#work"
            className="flex items-center gap-2 text-sm font-medium text-cream-2 hover:text-cream-DEFAULT transition-colors duration-200 group"
          >
            View Our Work
            <span className="group-hover:translate-x-1 transition-transform duration-200">↓</span>
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-up delay-500">
          {[
            { value: "1", label: "Project completed" },
            { value: "100%", label: "Client satisfaction" },
            { value: "100%", label: "On-time delivery" },
            { value: "Modern", label: "Tech stack" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-gradient leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-cream-3 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
