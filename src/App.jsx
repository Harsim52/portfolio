import React from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <Nav/>
      <Hero/>
      <About/>      
    

    </div>
  );
};

export default App;
