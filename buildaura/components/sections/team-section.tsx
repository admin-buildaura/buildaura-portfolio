"use client"

import { useState, useEffect, useCallback } from "react"
import { teamMembers } from "@/lib/data"
import { RevealContainer } from "@/components/ui/reveal-section"

const AUTOPLAY_MS = 4000

export function TeamSection() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [animating, setAnimating] = useState(false)
  const total = teamMembers.length

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (animating) return
      setDirection(dir)
      setAnimating(true)
      setTimeout(() => {
        setActive(index)
        setAnimating(false)
      }, 350)
    },
    [animating]
  )

  const next = useCallback(() => {
    goTo((active + 1) % total, "next")
  }, [active, total, goTo])

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total, "prev")
  }, [active, total, goTo])

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next])

  const member = teamMembers[active]

  const slideOut =
    direction === "next" ? "-translate-x-6 opacity-0" : "translate-x-6 opacity-0"
  const slideIn = animating ? slideOut : "translate-x-0 opacity-100"

  return (
    <section id="team" className="py-32 bg-[#0e0e0c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <RevealContainer className="mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9922a]" />
            <span className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.14em]">
              The People
            </span>
          </div>
          <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-display font-bold tracking-[-0.025em] leading-[1.1]"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              Meet the Team
            </h2>
            <p className="text-[15px] text-[#8a8478] max-w-sm leading-relaxed">
              World-class architects, engineers, and developers who have spent careers
              defining the edge of digital excellence.
            </p>
          </div>
        </RevealContainer>

        {/* Carousel */}
        <div className="relative">
          {/* Card */}
          <div
            className={`transition-all duration-350 ease-out ${slideIn} max-w-2xl mx-auto`}
          >
            <div className="relative rounded-2xl bg-[#111110] border border-white/[0.07] hover:border-[rgba(201,146,42,0.2)] transition-all duration-400 overflow-hidden shadow-2xl">
              {/* Avatar area */}
              <div className="relative h-56 bg-gradient-to-br from-[#1c1a14] via-[#161410] to-[#0d0c09] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(201,146,42,0.1)_0%,transparent_65%)]" />
                <div className="relative z-10 w-24 h-24 rounded-full border-2 border-[rgba(201,146,42,0.35)] bg-gradient-to-br from-[#c9922a]/20 to-[#c9922a]/5 flex items-center justify-center shadow-lg shadow-[rgba(201,146,42,0.1)]">
                  <span className="font-display text-[32px] font-bold text-[#e8a832]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[radial-gradient(ellipse,rgba(201,146,42,0.12)_0%,transparent_70%)] blur-md" />

                {/* Counter badge */}
                <div className="absolute top-4 right-4 text-[11px] font-medium text-[#8a8478] bg-[#0e0e0c]/60 backdrop-blur-sm border border-white/[0.06] rounded-full px-3 py-1 tabular-nums">
                  {active + 1} / {total}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <h3 className="font-display text-[22px] font-semibold mb-1 tracking-[-0.01em]">
                  {member.name}
                </h3>
                <p className="text-[13px] text-[#c9922a] font-medium mb-5">{member.role}</p>
                <p className="text-[15px] text-[#8a8478] leading-[1.75] mb-7">{member.bio}</p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="text-[12px] text-[#8a8478] border border-white/[0.07] bg-white/[0.03] rounded-full px-3 py-1"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous team member"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] bg-[#111110] text-[#8a8478] hover:text-[#e8a832] hover:border-[rgba(201,146,42,0.3)] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next team member"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] bg-[#111110] text-[#8a8478] hover:text-[#e8a832] hover:border-[rgba(201,146,42,0.3)] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? "next" : "prev")}
              aria-label={`Go to team member ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-[#e8a832]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
