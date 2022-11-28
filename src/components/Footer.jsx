import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';
import { Icon56LogoVk } from '@vkontakte/icons';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const [vkLogoSize, setVkLogoSize] = useState(window.innerWidth > 600 ? 70 : 50);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setVkLogoSize(70);
      } else {
        setVkLogoSize(50);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="footer">
      <div className="socialMedia">
        <span id="vkIcon">
          <a href="https://vk.com/clif2501">
            <Icon56LogoVk width={vkLogoSize} height={vkLogoSize} />
          </a>
        </span>
        <a href="https://t.me/clif2501">
          <TelegramIcon />
        </a>
        <a href="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2020/11/LinkedIn-Access-Denied.png">
          <LinkedInIcon />
        </a> {/* А линкедына у меня пока нет :) */}
        <a href="https://github.com/clif2501">
          <GitHubIcon />
        </a>
      </div>
      <p>&copy; 2022 java-viacheslav-andreevich.ru</p>
    </div>
  );
}

export default Footer;
