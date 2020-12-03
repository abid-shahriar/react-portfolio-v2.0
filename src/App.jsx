import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
