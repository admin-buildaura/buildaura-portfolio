export default function Contact() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#f0ece3] mb-8">Contact Us</h1>
        <p className="text-xl text-[#f0ece3]/80 mb-12">
          Get in touch with us for your next project.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#f0ece3] mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#1a1a18] border border-[#f0ece3]/20 rounded-lg px-4 py-3 text-[#f0ece3] focus:border-[#d4a017] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#f0ece3] mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1a1a18] border border-[#f0ece3]/20 rounded-lg px-4 py-3 text-[#f0ece3] focus:border-[#d4a017] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#f0ece3] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-[#1a1a18] border border-[#f0ece3]/20 rounded-lg px-4 py-3 text-[#f0ece3] focus:border-[#d4a017] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="bg-[#d4a017] text-[#0b0b09] font-semibold px-8 py-3 rounded-lg hover:bg-[#d4a017]/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#f0ece3] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#f0ece3]/60 mb-1">Email</p>
                  <p className="text-[#f0ece3]">buildaura07@gmail.com</p>
                </div>
                <div>
                  <p className="text-[#f0ece3]/60 mb-1">Location</p>
                  <p className="text-[#f0ece3]">India</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#f0ece3] mb-4">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/admin-buildaura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0ece3]/80 hover:text-[#d4a017] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0ece3]/80 hover:text-[#d4a017] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
