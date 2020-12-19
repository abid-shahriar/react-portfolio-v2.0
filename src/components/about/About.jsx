import React from "react";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__wrapper">
        <div className="about__info">
          <h2>
            Hello there, I am <span>Abid Shahriar</span>
          </h2>
          <p>A web designer and a front-end web developer.</p>
        </div>
        <div className="about__btns">
          <a
            href="https://github.com/abid-shahriar"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a href="#conatct">send me a message</a>
        </div>
      </div>
    </section>
  );
}
