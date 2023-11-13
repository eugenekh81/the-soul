import { Hero } from '../Hero/Hero';
import { NavLink } from 'react-router-dom';

import './Projects.scss';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const Projects = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section page__section--bgc-green section projects'>
      <div className='container'>
        <h2 className='section__title'>
        {lang === 'en' ? 'Projects' : 'Проекти'}
          </h2>
        <NavLink to={`/${lang}/ukrainian-circle`} className='projects__uc-container'>
          <Hero />
        </NavLink>

        <p className='projects__project-description'>
          Our primary project that covers all areas of everyday life.
          <br />
          It spans over 9 weeks in the form of online meetings.
          <br /><br />
          The pilot project took place during the summer of 2023 and was a
          success.
          Next project is scheduled to start in 2024.
          We encourage you to enroll and become a participant
        </p>

        <NavLink to={`/${lang}/ukrainian-circle`} className="button projects__uc-button-more">
        {lang === 'en' ? 'Ukrainian Circle Project' : 'Проект Українське Коло'}

          </NavLink>

      </div>
    </section>
  );
};
