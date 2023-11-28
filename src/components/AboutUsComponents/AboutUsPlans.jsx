import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const AboutUsPlans = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='page__section section about-us__plans'>
      <div className='container'>
        <div className='about-us__plans-content'>
          <h2 className='section__title'>
            {lang === 'en' ? 'Plans' : 'Плани'}
          </h2>

          <div className='about-us__plans'>
            <ul className='about-us__plans-list'>
              <li className='about-us__plans-item'>
                {lang === 'en'
                  ? '"Therapeutic War Life Stories" Project (February-March 2024)'
                  : 'Проект “Терапевтичні воєнні історії життя” (лютий-березень 2024 р.)'}
              </li>
              <li className='about-us__plans-item'>
                {lang === 'en'
                  ? 'The "Ukrainian Circle 2.0" Project (June-August 2024)'
                  : 'Проект “Українське коло 2.0” (червень-серпень 2024 р.)'}
              </li>
              <li className='about-us__plans-item'>
                {lang === 'en'
                  ? 'The "Effective Practices for Assisting Individuals Who Have Experienced Severe Traumatic Events" Project (September-November 2024)'
                  : 'Проект “Дієві практики допомоги людям, що пережили важкі травматичні події” (вересень-листопад 2024 р.)'}
              </li>
            </ul>

            <p className='about-us__plans-text'>
              {lang === 'en'
                ? ''
                : 'Також в нашому Центрі будуть діяти регулярні групи психологічної підтримки, виходити прямі ефіри та практичні матеріали, організовуватись психологічні заходи онлайн формату.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
