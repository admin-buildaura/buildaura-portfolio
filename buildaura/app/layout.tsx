import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BuildAura — Build Beyond Ordinary",
  description:
    "Professional web development and e-commerce solutions. Creating modern, responsive websites that drive results. Trusted by House of Evolve.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0b0b09] text-[#f0ece3] antialiased">
        {children}
      </body>
    </html>
  )
}
