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
    <div>
      <div id="box1">
        <Header />
        <Page1 />
      </div>
      <Skills />
      <Project />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
