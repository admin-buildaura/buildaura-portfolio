export default function Blogs() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#f0ece3] mb-8">Blogs</h1>
        <p className="text-xl text-[#f0ece3]/80 mb-12">
          Read our latest articles and insights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10 hover:border-[#d4a017]/50 transition-colors">
            <div className="aspect-video bg-[#0b0b09] rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2">Blog Post One</h3>
            <p className="text-[#f0ece3]/60 mb-4">Brief description of the blog post.</p>
            <p className="text-[#d4a017] text-sm">Read More →</p>
          </div>
          
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10 hover:border-[#d4a017]/50 transition-colors">
            <div className="aspect-video bg-[#0b0b09] rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2">Blog Post Two</h3>
            <p className="text-[#f0ece3]/60 mb-4">Brief description of the blog post.</p>
            <p className="text-[#d4a017] text-sm">Read More →</p>
          </div>
          
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10 hover:border-[#d4a017]/50 transition-colors">
            <div className="aspect-video bg-[#0b0b09] rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2">Blog Post Three</h3>
            <p className="text-[#f0ece3]/60 mb-4">Brief description of the blog post.</p>
            <p className="text-[#d4a017] text-sm">Read More →</p>
          </div>
        </div>
      </div>
    </div>
  )
}
