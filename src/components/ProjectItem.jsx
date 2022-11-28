import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ title, image, id }) {
  const navigate = useNavigate();
  function enterProject() {
    return () => {
      navigate(`/project/${id}`);
    };
  }

  return (
    <div
      className="projectItem"
      onClick={enterProject()}
      onKeyDown={enterProject()}
      role="button"
      tabIndex={id}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{title}</h1>
    </div>
  );
}

export default ProjectItem;
