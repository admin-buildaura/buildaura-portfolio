export default function Team() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#f0ece3] mb-8">Our Team</h1>
        <p className="text-xl text-[#f0ece3]/80 mb-12">
          Meet the talented individuals behind BuildAura.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10">
            <div className="w-24 h-24 bg-[#0b0b09] rounded-full mb-4 mx-auto"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2 text-center">Team Member</h3>
            <p className="text-[#f0ece3]/60 text-center">Role</p>
          </div>
          
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10">
            <div className="w-24 h-24 bg-[#0b0b09] rounded-full mb-4 mx-auto"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2 text-center">Team Member</h3>
            <p className="text-[#f0ece3]/60 text-center">Role</p>
          </div>
          
          <div className="bg-[#1a1a18] rounded-lg p-6 border border-[#f0ece3]/10">
            <div className="w-24 h-24 bg-[#0b0b09] rounded-full mb-4 mx-auto"></div>
            <h3 className="text-xl font-semibold text-[#f0ece3] mb-2 text-center">Team Member</h3>
            <p className="text-[#f0ece3]/60 text-center">Role</p>
          </div>
        </div>
      </div>
    </div>
  )
}
