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
                  ? '"Therapeutic War Life Stories" Project (scheduled for February-March 2024, budget - 75,000 uah) is focused on people\'s stories of trauma and helping them in coping with the challenging experiences of war.'
                  : 'Проєкт "Терапевтичні воєнні історії життя" (запланований період реалізації лютий-березень 2024 р., бюджет - 75 000 грн) - направлений на людські історії про травмування та подолання важкого досвіду війни.'}
              </li>
              <li className='about-us__plans-item'>
                {lang === 'en'
                  ? 'The "Ukrainian Circle 2.0" Project (scheduled for June-August 2024, budget - 320,000 uah) is a 3-month long Psychological Recovery Program focused on addressing all aspects of life - emotional states, self-confidence, finance and self-realization, relationships and feeling of security.'
                  : 'Проєкт "Українське коло 2.0" (запланований період реалізації червень-серпень 2024 р., бюджет - 320 000 грн) - 3-х місячна Програма психологічного відновлення, направлена на опрацювання всіх сфер життя - емоційні стани, впевненість в собі, гроші та реалізація, стосунки, відчуття безпеки тощо.'}
              </li>
              <li className='about-us__plans-item'>
                {lang === 'en'
                  ? 'The "Effective Methods for Assisting Individuals Who Have Experienced Severe Traumatic Events" Project (September-November 2024, budget - 51,000 uah) involves collecting best practices based on previous projects, group sessions and spreading those methods among women that were affected by war.'
                  : 'Проєкт "Дієві практики допомоги людям, що пережили важкі травматичні події" (запланований період реалізації вересень-листопад 2024 р., бюджет - 51 000 грн) - збір найбільш дієвих практик на основі проведених проектів, опрацювання в групах та розповсюдження серед жінок, постраждалих від війни.'}
              </li>
            </ul>

            <p className='about-us__plans-text'>
              {lang === 'en'
                ? 'There will be regular psychological support groups as well as live broadcasts, workshops and online psychological events.'
                : 'Також в нашому Центрі будуть діяти регулярні групи психологічної підтримки, виходити прямі ефіри та практичні матеріали, організовуватись психологічні заходи онлайн формату.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
