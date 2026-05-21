import React from 'react';

function Contact(){
    return(
      <section id="contact" className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#262626] text-slate-100 py-16 px-6 flex flex-col items-center justify-center">
        
        <h2 className="text-3xl font-bold mb-10 tracking-wide uppercase text-blue-500">
          Contact
        </h2>

        <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-12 max-w-2xl w-full space-y-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-black/50 relative overflow-hidden group">

          {/* Top decorative line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-sky-400"></div>
          
          {/* Email Row */}
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800/40 transition-colors">
            <div className="text-2xl bg-blue-950/40 text-blue-400 w-14 h-14 flex items-center justify-center rounded-xl font-bold border border-blue-900/30">
              ✉️
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</p>
              <p className="text-base font-semibold text-slate-300">sanika@123gmail.com</p>
            </div>
          </div>

          {/* Phone Row */}
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800/40 transition-colors">
            <div className="text-2xl bg-blue-950/40 text-blue-400 w-14 h-14 flex items-center justify-center rounded-xl font-bold border border-blue-900/30">
              📞
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</p>
              <p className="text-base font-semibold text-slate-300">2345678230</p>
            </div>
          </div>

          {/* Place Row */}
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800/40 transition-colors">
            <div className="text-2xl bg-blue-950/40 text-blue-400 w-14 h-14 flex items-center justify-center rounded-xl font-bold border border-blue-900/30">
              📍
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Place</p>
              <p className="text-base font-semibold text-slate-300">Kerala, India</p>
            </div>
          </div>

        </div>
      </section>
    )
}

export default Contact;



