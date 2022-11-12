import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h2>
          Привет, я Вячеслав
        </h2>
        <div className="prompt">
          <p>Начинающий Java бэкенд-разработчик.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>

      <div className="skills">
        <h1>Навыки</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Spring Boot Framework</h2>
            <span>
              Разработка REST-сервисов с помощью самого популярного фреймворка для Java.
            </span>
          </li>
          <li className='item'>
            <h2>Контроль версий с помощью Git</h2>
            <span>
              Знание продвинутых команд для управления состоянием исходного кода приложения. 
            </span>
          </li>
          <li className='item'>
            <h2>Основы работы с SQL</h2>
            <span>
              DDL, DML-скрипты, любые виды связей, ограничения целостности. Имеется опыт проектирования баз данных.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
