import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0b0b09]/95 backdrop-blur-md border-b border-[#f0ece3]/10">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/buildaura_logo.svg"
            alt="BuildAura Logo"
            width={45}
            height={45}
            className="w-11 h-11"
          />
          <span className="text-2xl font-bold text-[#f0ece3] tracking-tight">BuildAura</span>
        </Link>

        <div className="flex items-center gap-28 ml-auto">
          <ul className="flex items-center gap-24">
            <li>
              <Link
                href="/"
                className="bg-[#1a1a18] text-[#f0ece3] px-5 py-2 rounded-lg border border-[#f0ece3]/20 font-medium text-lg transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-[#f0ece3] hover:text-[#d4a017] transition-colors duration-300 font-medium text-lg"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="text-[#f0ece3] hover:text-[#d4a017] transition-colors duration-300 font-medium text-lg"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className="text-[#f0ece3] hover:text-[#d4a017] transition-colors duration-300 font-medium text-lg"
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-[#f0ece3] hover:text-[#d4a017] transition-colors duration-300 font-medium text-lg"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#f0ece3] hover:text-[#d4a017] transition-colors duration-300 font-medium text-lg"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  )
}
