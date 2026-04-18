"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#work", label: "Our Work" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-2 hover:text-cream-DEFAULT transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-gold-DEFAULT hover:bg-gold-light text-[#0b0b09] text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-DEFAULT/20 group"
          >
            Start a Project
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-6 h-0.5 bg-cream-DEFAULT transition-all duration-300 rounded-full", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-0.5 bg-cream-DEFAULT transition-all duration-300 rounded-full", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-cream-DEFAULT transition-all duration-300 rounded-full", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden glass border-t border-white/10 overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-cream-2 hover:text-cream-DEFAULT transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-3 flex items-center justify-center gap-2 bg-gold-DEFAULT text-[#0b0b09] text-sm font-semibold px-6 py-3 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </nav>
  )
}
