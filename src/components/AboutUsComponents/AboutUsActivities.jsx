import { NavLink } from 'react-router-dom';
import { activities } from '../../data/activities';
import { AboutUsGallery } from './AboutUsGallery';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const AboutUsActivities = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='page__section section about-us__activities'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Events' : 'Діяльність'}
        </h2>
        <div className='about-us__activities-content'>
          <p className='about-us__activities-text about-us__activities-text--last'>
            {lang === 'en'
              ? 'Before the war, we operated as a Psychology Center and conducted numerous psychological events of various formats in Kyiv:'
              : 'До війни ми працювали як Центр психології та проводили багато психологічних заходів різного формату в Києві:'}
          </p>

          <AboutUsGallery images={activities.meetings} />

          <p className='about-us__activities-text'>
            {lang === 'en'
              ? 'With the onset of the war, we shifted our operations into a Crisis Center and began developing and implementing projects aimed at overcoming war trauma in Ukrainians, including crisis counseling and support groups,'
              : 'З початком війни ми переформатували свою діяльність на Кризовий Центр та почали розробляти та впроваджувати проекти, направлені на подолання воєнної травми в українців - Кризове консультування та групи підтримки,'}{' '}
            <NavLink to={`/${lang}/projects/meetings-with-the-soul`}>
              {lang === 'en' ? 'Meetings with the Soul' : 'Зустрічі з Душею'}
            </NavLink>
            ,{' '}
            <NavLink to={`/${lang}/projects/ukrainian-circle`}>
              {lang === 'en' ? 'Ukrainian Circle' : 'Українське коло'}
            </NavLink>
            .
          </p>

          <p className='about-us__activities-text about-us__activities-text--last'>
            {lang === 'en'
              ? 'We initiated our collaboration with international organizations, participating in educational programs on grief and loss processing (EKR). We took part in a Colloquium dedicated to the mental health of Ukrainians, addressing audiences from the United States, New Zealand, Malaysia, Singapore, and other countries around the world.'
              : 'Ми розпочали нашу співпрацю з міжнародними організаціями. Долучились до навчальних програм з опрацювання горя та втрати (EKR), брали участь у Колоквіумі, присвяченому психічному здоров&apos;ю українців перед аудиторію з США, Нової Зеландії, Малайзії, Сінгапуру та інших країн світу.'}
          </p>

          <AboutUsGallery images={activities.conferences} />
        </div>
      </div>
    </section>
  );
};
