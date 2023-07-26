import React from "react";
import Header from "./Header";
import Page1 from "./Page1";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
import Certification from "./Certification";
import Footer from "./Footer";

function App() {
  return (
    <div style={{backgroundImage:"url('https://cdn.svgator.com/images/2022/06/SVG-background-animation.gif')"}}>
      <Header />
      <Page1 />
      <Skills />
      <Project />
      <Certification />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
