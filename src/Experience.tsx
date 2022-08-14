import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LanguageIcon from './LanguageIcon';
import Zendesk from './logos/zendesk.svg';
import GA from './logos/ga-b.png';
import Bliimo from './logos/bliimo.png';
import RSA from './logos/rsa.png';
import VFI from './logos/verifone.png';

function Experience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: '#00acc1', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #00acc1' }}
        iconClassName="circle-icon"
        icon={<LanguageIcon src={Zendesk} title="Zendesk" />}
        date="May - Aug 2022"
        dateClassName="date-text"
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineering Intern, Zendesk
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          Worked on the internal tools for Zendesk API and API documentation
          using Golang, Postman API and GitHub Actions.
        </h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#5ddef4', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #5ddef4' }}
        iconClassName="circle-icon"
        icon={<LanguageIcon src={GA} title="General Assembly" />}
        date="Jan - Apr 2022"
        dateClassName="date-text"
      >
        <h3 className="vertical-timeline-element-title">
          React Development Course, General Assembly
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          Participated in Victoria's Digital Jobs Program and finished the final
          project using React Typescript, Firebase Auth and Firestore.
        </h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#00acc1', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #00acc1' }}
        iconClassName="circle-icon"
        icon={<LanguageIcon src={Bliimo} title="Bliimo" />}
        date="Apr - Jun 2019"
        dateClassName="date-text"
      >
        <h3 className="vertical-timeline-element-title">
          Freelance Frontend Consultant, Bliimo
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          Worked on the admin and technology websites using Angular Typescript.
        </h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#5ddef4', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #5ddef4' }}
        iconClassName="circle-icon"
        icon={<LanguageIcon src={RSA} title="Rohde&Schwarz Asia" />}
        date="Oct 2010 - Dec 2017"
        dateClassName="date-text"
      >
        <h3 className="vertical-timeline-element-title">
          Software Development Engineer, Rohde&Schwarz
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          Worked on the radio monitoring system software for military and
          commercial purposes using C++ Qt and C# WPF.
        </h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#00acc1', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #00acc1' }}
        iconClassName="circle-icon"
        icon={<LanguageIcon src={VFI} title="Verifone" />}
        date="Jun 2005 - Jun 2010"
        dateClassName="date-text"
      >
        <h3 className="vertical-timeline-element-title">
          Software Design Engineer, Verifone
        </h3>
        <h5 className="vertical-timeline-element-subtitle">
          Worked on the libraries of a payment solution using C and OpenSSL.
        </h5>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
