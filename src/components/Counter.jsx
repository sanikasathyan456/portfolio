



import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("component mounted")
  },[]);

  function Increment() {
    if (count < 20) setCount(count + 1);
  }
  
  function Decrement() {
    if (count > 0) setCount(count - 1);
  }

   function Multiplication() {
    if (count < 20) setCount(count *5);
  }
  
  
  function Reset() {
    setCount(0);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200 text-slate-800 flex flex-col items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl shadow-blue-100 relative overflow-hidden">
        {/* Top decorative line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-sky-400"></div>
        
        <h2 className="text-xl font-bold text-slate-500 uppercase tracking-wider mb-4">
          Counter
        </h2>

        {/* Counter Display */}
        <h1 className="text-6xl font-black text-blue-600 mb-8 transition-all duration-300">
          {count}
        </h1>

        {/* Buttons Group */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={Increment} 
              className="px-4 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all duration-200"
            >
              Increment
            </button>
            
            <button 
              onClick={Decrement} 
              className="px-4 py-3 bg-slate-700 text-white font-bold rounded-xl shadow-md shadow-slate-200 hover:bg-slate-800 active:scale-95 transition-all duration-200"
            >
              Decrement
            </button>
          </div>

          <button 
            onClick={Reset} 
            className="w-full px-4 py-3 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-50 active:scale-95 transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;