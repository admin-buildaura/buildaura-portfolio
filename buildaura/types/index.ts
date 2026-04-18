export interface Project {
  id: string
  title: string
  category: string
  description: string
  metric: string
  metricLabel: string
  tags: string[]
  gradient: string
  accent: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  credentials: string[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  tag: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}
