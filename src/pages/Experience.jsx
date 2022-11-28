import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2020"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Школа №582 с углубленным изучением английского и финского языков
          </h3>
          <p>
            Аттестат о полном среднем образовании (оценки: 4-5)
          </p>
          <div className="experience-img">
            <img src="data:image/png;base64,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" alt="" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - наст. время"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Национальный исследовательский университет ИТМО
          </h3>
          <p>
            Факультет программной инженерии и компьютерной техники, нейротехнологии и программирование
          </p>
          <div className="experience-img">
            <img src="https://itmo.ru/file/pages/213/logo_na_plashke_russkiy_belyy.png" alt="" width="50%" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="07.2022 - 09.2022"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Летняя школа бэкенд-разработки от Академии Яндекса
          </h3>
          <p>
            Курс лекций и практических заданий, работа в команде, разработка улучшения реального сервиса компании
          </p>
          <div className="experience-img">
            <img src="https://avatars.mds.yandex.net/get-bunker/135516/b5d842dd0e03a26c54749891dd1b0876edbae05d/orig" alt="" width="40%" />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
