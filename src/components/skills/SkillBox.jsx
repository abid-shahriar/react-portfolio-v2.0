import React from "react";
import allSkills from "./skillsData";

export const SkillBox = () => {
  return allSkills.map((skill) => (
    <div key={skill.name} className="skill-box">
      <h3>{skill.name}</h3>
      <div className="skill-box__skills">
        <ul>
          {skill.skillset.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  ));
};
