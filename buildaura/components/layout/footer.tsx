import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { href: "#work", label: "Our Work" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-[#080806]">
      {/* Pre-footer CTA */}
      <div className="relative overflow-hidden border-t border-white/[0.06]">
        {/* Gold radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,146,42,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light mb-5">
            Let&apos;s build together
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-DEFAULT leading-tight mb-8 max-w-2xl">
            Ready to build something{" "}
            <span className="text-gold-light italic">great?</span>
          </h2>
          <p className="text-base text-cream-3 max-w-md mb-10 leading-relaxed">
            From concept to launch, we craft digital experiences that make your
            brand impossible to ignore.
          </p>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-gold-DEFAULT hover:bg-gold-light text-[#0b0b09] text-sm font-bold px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold-DEFAULT/25"
          >
            Start a Project
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Gold gradient rule */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,168,50,0.4) 30%, rgba(201,146,42,0.6) 50%, rgba(232,168,50,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand column */}
          
          {/* Navigate */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream-3 mb-6">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-2 hover:text-cream-DEFAULT hover:translate-x-0.5 transition-all duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 min-w-0">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream-3 mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cream-3 mb-2">
                  Email
                </p>
                <a
                  href="mailto:buildaura07@gmail.com"
                  className="group flex items-center gap-2 min-w-0 text-sm text-cream-2 hover:text-gold-light transition-colors duration-200"
                >
                  <span className="break-all min-w-0">buildaura07@gmail.com</span>
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cream-3 mb-2">
                  Phone
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { tel: "+919341330223", display: "+91 93413 30223" },
                    { tel: "+919717098980", display: "+91 97170 98980" },
                  ].map(({ tel, display }) => (
                    <a
                      key={tel}
                      href={`tel:${tel}`}
                      className="flex items-center gap-2 min-w-0 text-sm text-cream-2 hover:text-gold-light transition-colors duration-200"
                    >
                      {display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-3 order-2 sm:order-1">
            © {new Date().getFullYear()} BuildAura. All rights reserved.
          </p>
          <div className="flex items-center gap-6 order-1 sm:order-2">
            {["Privacy Policy", "Terms", "Legal"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs text-cream-3 hover:text-cream-2 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
