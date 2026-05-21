import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Counter from "./components/Counter";
// import Data from "./components/Data";

import "./App.css";

function App(){
  return(
  <>
    
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    {/* <Counter/> 
    <Data/>    */}
     
    </>
  
    

  );
}

export default App;





