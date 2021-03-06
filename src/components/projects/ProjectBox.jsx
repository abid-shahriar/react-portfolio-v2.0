import React from "react";
import projectsData from "./projectsData";

const ProjectBox = () => {
  return projectsData.map((project) => (
    <div key={project.id} className="project-box">
      <h3>{project.title}</h3>
      <img src={project.imgSrc} alt="project" />
      <p>{project.desc}</p>
      <div className="btns">
        <a href={project.codeSrc}>Code</a>
        <a href={project.liveSrc}>Demo</a>
      </div>
    </div>
  ));
};

export default ProjectBox;
