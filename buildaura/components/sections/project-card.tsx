import { cn } from "@/lib/utils"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <article
      className={cn(
        "reveal group relative grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/[0.07] rounded-2xl overflow-hidden bg-[#111110] card-glow",
        !isEven && "lg:[direction:rtl]"
      )}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Visual panel */}
      <div
        className={cn(
          "relative h-72 lg:h-auto overflow-hidden",
          !isEven && "lg:[direction:ltr]"
        )}
      >
        {/* Gradient background standing in for project image */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            project.gradient
          )}
        />
        {/* Dot overlay */}
        <div
          className="absolute inset-0 dot-grid opacity-30"
          style={{
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
        {/* Abstract building illustration */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          viewBox="0 0 400 320"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect x="150" y="60" width="100" height="260" fill="white" />
          <rect x="60" y="130" width="95" height="190" fill="white" />
          <rect x="245" y="130" width="95" height="190" fill="white" />
          <rect x="180" y="20" width="40" height="45" fill="white" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1].map((c) => (
              <rect key={`${r}-${c}`} x={170 + c * 32} y={80 + r * 50} width={18} height={25} fill="black" opacity="0.5" />
            ))
          )}
        </svg>

        {/* Metric badge */}
        <div className="absolute top-5 left-5">
          <div
            className="px-3 py-1.5 rounded-md text-[11px] font-medium text-[#0b0b09] tracking-[0.04em]"
            style={{ background: project.accent }}
          >
            {project.category}
          </div>
        </div>

        {/* Big metric */}
        <div className="absolute bottom-5 left-5">
          <p className="font-display text-[38px] font-bold leading-none text-white">{project.metric}</p>
          <p className="text-[12px] text-white/50 mt-1">{project.metricLabel}</p>
        </div>
      </div>

      {/* Content panel */}
      <div
        className={cn(
          "flex flex-col justify-center p-8 lg:p-12",
          !isEven && "lg:[direction:ltr]"
        )}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] text-[#8a8478] border border-white/[0.08] bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-[26px] lg:text-[30px] font-semibold leading-[1.15] mb-5 tracking-[-0.02em]">
          {project.title}
        </h3>

        <p className="text-[15px] text-[#c8c2b4] leading-[1.75] mb-8">
          {project.description}
        </p>

        <button
          className="group/btn self-start flex items-center gap-2.5 text-[13px] font-medium"
          style={{ color: project.accent }}
        >
          View case study
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center border text-[11px] group-hover/btn:translate-x-1 transition-transform duration-200"
            style={{ borderColor: `${project.accent}40`, color: project.accent }}
          >
            →
          </span>
        </button>
      </div>
    </article>
  )
}
