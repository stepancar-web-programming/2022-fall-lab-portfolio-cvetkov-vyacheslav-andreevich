import React from 'react'
import '../styles/Projects.css'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'


function Projects() {
  return (
    <div className="projects">
      <h1>Участие в проектах</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} title={project.title} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects