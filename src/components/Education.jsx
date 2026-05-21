import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-slate-100 px-6"
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full items-center">
        
        {/* Left Side: Creative Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold text-blue-500 tracking-wide uppercase">
              Education
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
          </div>
          
          {/* Creative Content in Blank Space */}
          <div className="mt-4 p-5 bg-neutral-900/40 backdrop-blur-sm rounded-2xl border border-neutral-800 shadow-sm max-w-sm">
            <span className="text-3xl">🎓</span>
            <h3 className="text-lg font-bold text-slate-200 mt-2">Learning is a Journey</h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              Building a strong foundation in technology, exploring new skills, and turning ideas into reality through code.
            </p>
          </div>
        </div>

        {/* Right Side: Education Card */}
        <div className="flex justify-center">
          <div className="bg-neutral-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-black/40 border border-neutral-800 max-w-md w-full relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-black/60">
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-sky-500"></div>
            
            <div className="flex flex-col items-center text-center gap-3 pt-4">
              <h3 className="text-xl font-bold text-slate-100 leading-snug">
                Diploma in Computer Engineering
              </h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Govt. Women's Polytechnic College, <br />
                Thiruvananthapuram
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;