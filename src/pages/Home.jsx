import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
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
          <a href="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2020/11/LinkedIn-Access-Denied.png"><LinkedInIcon /></a>
          <a href='mailto:clif2501@gmail.com'><EmailIcon /></a>
          <a href='https://t.me/clif2501'><TelegramIcon /></a>
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
              DDL, DML-скрипты, любые виды связей, ограничения целостности, есть опыт проектирования баз данных.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
