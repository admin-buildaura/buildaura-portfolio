import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"
import { RevealContainer, RevealSection } from "@/components/ui/reveal-section"

export function WorkSection() {
  return (
    <section id="work" className="py-32 bg-[#0b0b09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <RevealContainer className="mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9922a]" />
            <span className="text-[11px] font-medium text-[#e8a832] uppercase tracking-[0.14em]">
              Portfolio
            </span>
          </div>
          <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-display font-bold tracking-[-0.025em] leading-[1.1]"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              Our Work
            </h2>
            <p className="text-[15px] text-[#8a8478] max-w-sm leading-relaxed">
              A showcase of our e-commerce development expertise.
            </p>
          </div>
        </RevealContainer>

        {/* Project cards */}
        <RevealContainer className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </RevealContainer>
      </div>
    </section>
  )
}
