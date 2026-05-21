import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#121212] border-t border-neutral-800 py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Sanika<span className="text-blue-500">.</span>
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-6">
            Frontend Developer focused on creating modern, responsive and user-friendly web experiences.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Navigation
          </h3>

          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Connect
          </h3>

          <div className="flex flex-col gap-2 text-sm text-slate-300">

            <a href="https://github.com/" className="hover:text-white transition-colors">
              GitHub
            </a>

            <a href="https://linkedin.com/" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>

            <a href="mailto:sanika@123gmail.com" className="hover:text-emerald-400 transition-colors">
              Email
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-slate-500 text-sm mt-10 border-t border-neutral-800 pt-6">
        © 2026 Sanika. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;