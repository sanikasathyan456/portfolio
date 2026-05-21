import React from "react";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-neutral-100 py-16 px-6 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold mb-10 tracking-wide uppercase text-cyan-400">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">

          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center font-semibold text-lg text-neutral-200 transition-all duration-300 shadow-sm hover:scale-105 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
            HTML
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center font-semibold text-lg text-neutral-200 transition-all duration-300 shadow-sm hover:scale-105 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
            CSS
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center font-semibold text-lg text-neutral-200 transition-all duration-300 shadow-sm hover:scale-105 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
            JavaScript
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center font-semibold text-lg text-neutral-200 transition-all duration-300 shadow-sm hover:scale-105 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
            React JS
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center font-semibold text-lg text-neutral-200 transition-all duration-300 shadow-sm hover:scale-105 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
            PHP
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center font-semibold text-lg text-neutral-200 transition-all duration-300 shadow-sm hover:scale-105 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
            MySQL
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;
