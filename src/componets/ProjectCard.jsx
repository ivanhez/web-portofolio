import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a  target="_blank" rel="noopener noreferrer" href={link}>Ver proyecto</a>
    </div>
  );
};

export default ProjectCard;
