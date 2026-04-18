"use client"

import { useState } from "react"
import { RevealContainer } from "@/components/ui/reveal-section"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 bg-[#0e0e0c] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,146,42,0.06)_0%,transparent_65%)]" />
      <div
        className="absolute inset-0 dot-grid opacity-30"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Aura rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(201,146,42,0.07)] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(201,146,42,0.1)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: CTA copy */}
          <RevealContainer>
            <div className="reveal flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#c9922a]" />
              <span className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.14em]">
                Let&apos;s Build
              </span>
            </div>

            <h2
              className="reveal reveal-delay-1 font-display font-bold tracking-[-0.025em] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              Ready to Build<br />
              <span className="text-gold-gradient">Something Lasting?</span>
            </h2>

            <p className="reveal reveal-delay-2 text-[16px] text-[#c8c2b4] leading-[1.8] mb-10">
              Whether you&apos;re planning a commercial tower, a luxury residence, or a net-zero industrial campus — we&apos;d love to be part of your story. Share your brief and our team will be in touch within 24 hours.
            </p>

            {/* Contact details */}
            <div className="reveal reveal-delay-3 flex flex-col gap-5">
              {[
                { label: "Email", value: "hello@buildaura.in", href: "mailto:hello@buildaura.in" },
                { label: "Phone", value: "+91 80 1234 5678", href: "tel:+918012345678" },
                { label: "Office", value: "48, Prestige Atlanta, MG Road, Bengaluru — 560001", href: "#" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6">
                  <span className="text-[11px] font-medium text-[#8a8478] uppercase tracking-[0.1em] w-14 pt-px shrink-0">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#c8c2b4] hover:text-[#f0ece3] transition-colors duration-200 leading-relaxed"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </RevealContainer>

          {/* Right: form */}
          <RevealContainer>
            <div className="reveal reveal-delay-2 p-8 lg:p-10 rounded-2xl bg-[#111110] border border-white/[0.07]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[rgba(201,146,42,0.12)] border border-[rgba(201,146,42,0.3)] flex items-center justify-center text-[24px] text-[#e8a832] mb-6">
                    ✓
                  </div>
                  <h3 className="font-display text-[24px] font-semibold mb-3">Message Sent</h3>
                  <p className="text-[14px] text-[#8a8478] leading-relaxed max-w-xs">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Your Name"
                      id="name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      required
                    />
                    <InputField
                      label="Company"
                      id="company"
                      value={formData.company}
                      onChange={(v) => setFormData({ ...formData, company: v })}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                      required
                    />
                    <InputField
                      label="Phone"
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                    />
                  </div>

                  {/* Project type select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-[12px] text-[#8a8478] uppercase tracking-[0.1em]">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0b0b09] border border-white/[0.1] text-[14px] text-[#f0ece3] focus:outline-none focus:border-[rgba(201,146,42,0.4)] transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0b0b09]">Select a category</option>
                      <option value="commercial" className="bg-[#0b0b09]">Commercial Development</option>
                      <option value="residential" className="bg-[#0b0b09]">Luxury Residential</option>
                      <option value="hospitality" className="bg-[#0b0b09]">Hospitality</option>
                      <option value="industrial" className="bg-[#0b0b09]">Industrial / Logistics</option>
                      <option value="heritage" className="bg-[#0b0b09]">Heritage Restoration</option>
                      <option value="other" className="bg-[#0b0b09]">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[12px] text-[#8a8478] uppercase tracking-[0.1em]">
                      Project Brief
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0b0b09] border border-white/[0.1] text-[14px] text-[#f0ece3] placeholder-[#8a8478]/60 focus:outline-none focus:border-[rgba(201,146,42,0.4)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2.5 bg-[#c9922a] hover:bg-[#e8a832] text-[#0b0b09] text-[14px] font-medium py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px group shadow-[0_0_30px_rgba(201,146,42,0.2)]"
                  >
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </form>
              )}
            </div>
          </RevealContainer>
        </div>
      </div>
    </section>
  )
}

function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[12px] text-[#8a8478] uppercase tracking-[0.1em]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-[#0b0b09] border border-white/[0.1] text-[14px] text-[#f0ece3] placeholder-[#8a8478]/60 focus:outline-none focus:border-[rgba(201,146,42,0.4)] transition-colors"
      />
    </div>
  )
}
