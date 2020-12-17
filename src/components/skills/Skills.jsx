import React from "react";

export default function Skills() {
  return (
    <div className="section skills" id="skills">
      <div className="section__wrapper">
        <div className="Skills__container">
          <div className="skill-box">
            <h3>Frontend Skills</h3>
            <div className="skill-box__skills">
              <ul>
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
              </ul>
            </div>
          </div>

          <div className="skill-box">
            <h3>Backend Skills</h3>
            <div className="skill-box__skills">
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>

          <div className="skill-box">
            <h3>Other Skills</h3>
            <div className="skill-box__skills">
              <ul>
                <li>Git/Github</li>
                <li>Redux</li>
                <li>ContextApi</li>
                <li>Capnel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
