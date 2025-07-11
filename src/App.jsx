import React from "react";
import Nav from "./sections/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <Nav/>
      <Hero/>
      <About/>      
    

      <Routes>{/* <Route path="/" element= {<Home></Home>}></Route> */}</Routes>
    </div>
  );
};

export default App;
