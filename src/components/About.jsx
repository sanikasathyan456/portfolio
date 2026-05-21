import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-neutral-100 px-6"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">

        {/* LEFT SIDE - Creative Visual */}
        <div className="relative flex justify-center items-center">

          {/* Glow background */}
          <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

          {/* Profile Circle */}
          <div className="relative w-56 h-56 rounded-full border-4 border-cyan-500 shadow-xl flex items-center justify-center bg-neutral-900/50">
            <span className="text-5xl font-bold text-cyan-500">S</span>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 bg-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-neutral-800 text-neutral-200 animate-bounce shadow-md">
            💻 Developer
          </div>

          <div className="absolute -bottom-6 -right-6 bg-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-neutral-800 text-neutral-200 animate-pulse shadow-md">
            🚀 Learner
          </div>

        </div>

        {/* RIGHT SIDE - Content */}
        <div className="flex flex-col gap-6">

          <div>
            <h2 className="text-4xl font-bold text-cyan-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-cyan-500 rounded mt-2"></div>
          </div>

          <div className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-neutral-800">
            <p className="text-neutral-300 leading-relaxed">
              I am Sanika, currently pursuing a Diploma in Computer Engineering.
              I enjoy improving my programming knowledge and building creative projects.
              I love exploring UI/UX design and modern web technologies.
            </p>
          </div>

          {/* Small highlight stats */}
          <div className="flex gap-4">
            <div className="bg-cyan-950/30 px-4 py-2 rounded-lg border border-cyan-900/50">
              <p className="text-cyan-400 font-bold">10+ Projects</p>
            </div>
            <div className="bg-cyan-950/30 px-4 py-2 rounded-lg border border-cyan-900/50">
              <p className="text-cyan-400 font-bold">Frontend Focus</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;