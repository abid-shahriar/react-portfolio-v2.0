import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import { FullPage, Slide } from "react-full-page";

function App() {
  return (
    <>
      <Nav />
      <FullPage>
        <Slide>
          <About />
        </Slide>
        <Slide>
          <Skills />
        </Slide>
      </FullPage>
    </>
  );
}

export default App;
