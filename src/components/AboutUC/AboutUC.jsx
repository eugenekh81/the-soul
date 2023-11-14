import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import './AboutUC.scss';

export const AboutUC = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='page__section page__section--bgc-green section about'>
      <div className='container'>
        <p className='section__description section__description--mg-0 about__description'>
          {lang === 'en' ? (
            <>
              <span>The Ukrainian Circle project</span> took place during June -
              August 2023. It was created for Ukrainians who were affected by
              the war to help them recover and restore their mental health,
              improve their well-being and empower them with mental self-help
              skills. The Ukrainian Circle project is based on 200 individual
              crisis sessions and 2 years of psychotherapeutic activities.
            </>
          ) : (
            <>
              <span>Проект «Українське коло»</span> тривав протягом червня –
              серпня 2023 року. Він був створений для українців, які постраждали
              від війни, щоб допомогти їм відновити психічне здоров’я, покращити
              самопочуття та розвинути навички психічної самодопомоги. Проект
              «Українське коло» базується на практичному досвіді 200
              індивідуальних кризових консультацій та 2 роках психотерапевтичної
              роботи психологів.
            </>
          )}
        </p>
      </div>
    </section>
  );
};
