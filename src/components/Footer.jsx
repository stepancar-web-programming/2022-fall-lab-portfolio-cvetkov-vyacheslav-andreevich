import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
// import { Icon56LogoVk } from '@vkontakte/icons';
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {/* <Icon56LogoVk /> */}
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <GitHubIcon />
        </div>
        <p>&copy; 2022 viacheslav.ru</p>
    </div>
  )
}

export default Footer