import React, { useState, useEffect } from 'react'
import '../styles/Project.css'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeEmbed from '../components/YouTubeEmbed'

function ProjectPage() {
  const { id } = useParams()
  const project = ProjectList[id]

  const [demoWidth, setDemoWidth] = useState(700)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setDemoWidth(window.innerWidth)
      } else {
        setDemoWidth(700)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  const demo = project.video != null ?
    <YouTubeEmbed embedId={project.video} demoWidth={demoWidth} /> :
    <img src={project.image} alt='' width={demoWidth}/>

  return (
    <div className='project'>
      <h1>{project.title}</h1>
      {demo}
      <p>
        <b>Описание проекта:</b> {project.description}
      </p>
      <p>
        <b>Примененные навыки:</b> {project.skills}
      </p>
      <a href={project.link} ><GitHubIcon /></a>
    </div>
  )
}

export default ProjectPage