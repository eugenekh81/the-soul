import { Hero } from '../Hero/Hero';
import './Projects.scss';

export const Projects = () => {
  return (
    <section className='page__section page__section--bgc-green section projects'>
      <div className="container">
        <h2 className="section__title">
          Projects
        </h2>
        <div className="projects__uc-container">
          <Hero />
        </div>

        <p className="projects__project-description">
          Our primary project that covers all areas of everyday life.
          <br /><br />
          It spans over 9 weeks in the form of online meetings.
          <br /><br />
          The pilot project  took place during the summer of 2023 and was a success.
          <br /><br />
          Next project is scheduled to start in 2024.
          <br /><br />
          We encourage you to enroll and become a participant
        </p>
      </div>
    </section>
  );
};
