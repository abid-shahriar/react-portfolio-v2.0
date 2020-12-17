import React from "react";
import { SkillBox } from "./SkillBox";

export default function Skills() {
  return (
    <div className="section skills" id="skills">
      <div className="section__wrapper">
        <div className="Skills__container">
          <SkillBox />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
