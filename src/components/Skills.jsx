import React from "react";

function Skills() {
  return (
    <>
      <section id="skills" className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-slate-100 py-16 px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-10 tracking-wide uppercase text-blue-500">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          
          {/* HTML */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-xl p-6 text-center font-semibold text-lg text-slate-300 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <span className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
            HTML
          </div>

          {/* CSS */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-xl p-6 text-center font-semibold text-lg text-slate-300 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <span className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
            CSS
          </div>

          {/* JavaScript */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-xl p-6 text-center font-semibold text-lg text-slate-300 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <span className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
            JavaScript
          </div>

          {/* React JS */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-xl p-6 text-center font-semibold text-lg text-slate-300 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <span className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
            React JS
          </div>

          {/* PHP */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-xl p-6 text-center font-semibold text-lg text-slate-300 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <span className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
            PHP
          </div>

          {/* MySQL */}
          <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-xl p-6 text-center font-semibold text-lg text-slate-300 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
            <span className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
            MySQL
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;