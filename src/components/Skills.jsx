import React from "react";

function Skills() {
  return (
    <>
      <section id="skills" className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200 text-slate-800 py-16 px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-10 tracking-wide uppercase text-blue-600">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="bg-white/80 backdrop-blur-md border border-white rounded-xl p-6 text-center font-semibold text-lg text-slate-700 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100">
            HTML
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white rounded-xl p-6 text-center font-semibold text-lg text-slate-700 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100">
            CSS
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white rounded-xl p-6 text-center font-semibold text-lg text-slate-700 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100">
            JavaScript
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white rounded-xl p-6 text-center font-semibold text-lg text-slate-700 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100">
            React JS
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white rounded-xl p-6 text-center font-semibold text-lg text-slate-700 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100">
            PHP
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white rounded-xl p-6 text-center font-semibold text-lg text-slate-700 transition-all duration-300 shadow-sm hover:scale-105 hover:text-blue-600 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100">
            MySQL
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
