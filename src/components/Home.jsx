import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-slate-100 px-6"
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full items-center">

        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100">
            Hi, I'm <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Sanika Sathyan</span>
          </h1>

          <p className="text-lg font-medium text-slate-400">
            Frontend Developer | React Enthusiast | UI Designer
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md shadow-blue-900/40 hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* Creative background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-800 shadow-xl bg-neutral-900/50">
              <img 
                src="images/home.png" 
                alt="Sanika Sathyan" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
