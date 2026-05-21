



import React from 'react';

function Project(){
    return (
      <section id="projects" className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-slate-100 py-16 px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-10 tracking-wide uppercase text-blue-500">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          
          {/* Admin Dashboard */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:shadow-black/50 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-orange-400"></div>
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
              Student Leave Management System
            </h3>
            <p className="text-sm font-semibold tracking-wider text-orange-400 uppercase bg-orange-950/40 px-3 py-1 rounded-full inline-block border border-orange-900/40">
              Admin Dashboard
            </p>
          </div>

          {/* Student Dashboard */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:shadow-black/50 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            <div className="text-3xl mb-4">👨‍🎓</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
              Student Leave Management System
            </h3>
            <p className="text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-950/40 px-3 py-1 rounded-full inline-block border border-blue-900/40">
              Student Dashboard
            </p>
          </div>

          {/* Faculty Dashboard */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:shadow-black/50 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
            <div className="text-3xl mb-4">🧑‍🏫</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
              Student Leave Management System
            </h3>
            <p className="text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full inline-block border border-emerald-900/40">
              Faculty Dashboard
            </p>
          </div>

        </div>
      </section>
    )
}
export default Project;