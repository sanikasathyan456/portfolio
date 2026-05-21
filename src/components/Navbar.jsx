import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-slate-200/40 shadow-sm">

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide text-slate-800"
        >
          Sanika<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition-colors duration-300 hover:text-blue-600"
            >
              {item}

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-lg px-6 py-5 flex flex-col gap-4">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 font-medium hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}

export default Navbar;
