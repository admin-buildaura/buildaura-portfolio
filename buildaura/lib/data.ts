import type { Project, TeamMember, Testimonial, Service, Stat } from "@/types"

export const projects: Project[] = [
  {
    id: "house-of-evolve",
    title: "House of Evolve E-Commerce Platform",
    category: "E-Commerce Website",
    description:
      "A modern, fully-featured e-commerce platform built for House of Evolve. Features include seamless product browsing, secure checkout, responsive design, and optimized user experience across all devices.",
    metric: "100%",
    metricLabel: "client satisfaction",
    tags: ["E-Commerce", "Responsive", "Modern Design"],
    gradient: "from-amber-950/60 via-stone-900/80 to-stone-950",
    accent: "#c9922a",
  },
]

export const services: Service[] = [
  {
    id: "web-development",
    icon: "◈",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From landing pages to complex e-commerce platforms, we deliver scalable solutions.",
    tag: "Full Stack",
  },
  {
    id: "ecommerce",
    icon: "⬡",
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce platforms with secure payment integration, inventory management, and seamless user experiences that drive conversions.",
    tag: "E-Commerce",
  },
  {
    id: "ui-ux-design",
    icon: "◉",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the core. Every pixel crafted to engage and convert your audience.",
    tag: "Design",
  },
  {
    id: "responsive-design",
    icon: "⬢",
    title: "Responsive Design",
    description:
      "Mobile-first, responsive websites that look stunning and perform flawlessly across all devices and screen sizes.",
    tag: "Mobile Ready",
  },
]

export const stats: Stat[] = [
  { value: "1", label: "Project completed" },
  { value: "100%", label: "Client satisfaction" },
  { value: "100%", label: "On-time delivery" },
  { value: "Modern", label: "Tech stack" },
]

export const teamMembers: TeamMember[] = [
  {
    id: "anurag-kashyap",
    name: "Anurag Kashyap",
    role: "Co-Founder, SDE & System Designer",
    bio: "Lead system architect and software development engineer specializing in designing scalable, robust architectures. Passionate about creating modern web solutions with cutting-edge technologies and exceptional digital experiences.",
    credentials: ["B.Tech Graduate", "Class of 2025", "System Architecture", "Software Development"],
  },
  {
    id: "abhishek-yadav",
    name: "Abhishek Yadav",
    role: "Co-Founder & Full Stack Developer",
    bio: "Expert in crafting responsive and performant web applications. Focused on delivering high-quality code and innovative solutions that exceed client expectations.",
    credentials: ["B.Tech Graduate", "Class of 2025", "Full Stack Development", "UI/UX Implementation"],
  },
  {
    id: "md-abdullah",
    name: "Md Abdullah",
    role: "Co-Founder & Full Stack Developer",
    bio: "Dedicated to building robust and efficient web solutions. Combines technical expertise with creative problem-solving to bring digital visions to life.",
    credentials: ["MCA Graduate", "Class of 2025", "Full Stack Development", "System Architecture"],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "BuildAura delivered an exceptional e-commerce platform for House of Evolve. The website is modern, fast, and exactly what we needed. Their attention to detail and professionalism exceeded our expectations.",
    author: "House of Evolve Team",
    role: "Client",
    company: "House of Evolve",
  },
]
