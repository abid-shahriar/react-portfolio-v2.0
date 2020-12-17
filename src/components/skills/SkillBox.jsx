import React from "react";

const allSkills = [
  {
    name: "Frontend Skills",
    skillset: ["HTML", "CSS/SASS", "JavaScript", "ReactJS"],
  },
  {
    name: "Backend Skills",
    skillset: ["NodeJS", "Express", "Mongoose", "MongoDB"],
  },
  {
    name: "Other Skills",
    skillset: ["Git/Github", "Redux", "ContextApi", "Cpnel"],
  },
];

export const SkillBox = () => {
  return allSkills.map((skill) => (
    <div className="skill-box">
      <h3>{skill.name}</h3>
      <div className="skill-box__skills">
        <ul>
          {skill.skillset.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  ));
};
