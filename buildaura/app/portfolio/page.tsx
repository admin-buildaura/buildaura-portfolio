export default function Portfolio() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#f0ece3] mb-8">Portfolio</h1>
        <p className="text-xl text-[#f0ece3]/80 mb-12">
          Explore our recent projects and creative work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10 hover:border-[#d4a017]/50 transition-colors">
            <div className="aspect-video bg-[#0b0b09] rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2">Project One</h3>
            <p className="text-[#f0ece3]/60">Description of the project goes here.</p>
          </div>
          
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10 hover:border-[#d4a017]/50 transition-colors">
            <div className="aspect-video bg-[#0b0b09] rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2">Project Two</h3>
            <p className="text-[#f0ece3]/60">Description of the project goes here.</p>
          </div>
          
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10 hover:border-[#d4a017]/50 transition-colors">
            <div className="aspect-video bg-[#0b0b09] rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2">Project Three</h3>
            <p className="text-[#f0ece3]/60">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
