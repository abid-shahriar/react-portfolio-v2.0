import React from "react";

export default function Skills() {
  return (
    <div className="section skills" id="skills">
      <div className="section__wrapper">
        <div className="Skills__container">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="skill-box">front end</div>
              </div>
              <div className="swiper-slide">
                <div className="skill-box">backend</div>
              </div>
              <div className="swiper-slide">
                <div className="skill-box"> others</div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
