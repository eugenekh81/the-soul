import { useContext } from 'react';
import documents from '/images/about-us/about-us--documents.jpg';
import { LangContext } from '../../context/LangContextProvider';
import { NavLink } from 'react-router-dom';

export const AboutUsDescription = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='about-us__description page__section section'>
      <div className='container'>
        <div className='about-us__description-content'>
          <div className='about-us__description-text-container'>
            <p className='about-us__description-text'>
              {lang === 'en'
                ? 'The Ukrainian Center of Psychology "The Soul" is a professional association of psychologists from various fields, created with the purpose of providing psychological assistance to people.'
                : "Український Центр психології THE SOUL - це професійне об'єднання психологів різних напрямів, створене з метою надання психологічної допомоги людям."}
            </p>
            <p className='about-us__description-text'>
              {lang === 'en'
                ? 'The Ukrainian Center of Psychology "The Soul" was established on February 2, 2021, as an initiative of psychologists practicing in various directions, including psychoanalysis, psychotherapy, Jungian analysis, schema therapy, psychodrama, dance movement therapy, and body-oriented therapies.'
                : 'Український Центр Психології The Soul “Душа” був створений 2 лютого 2021 року як ініціативний союз психологів, які практикують у різних напрямках (психоаналіз, психотерапія, юнгіанський аналіз, схема терапія, психодрама, танце-рухова та тілесно-орієнтована терапії).'}
            </p>
            <p className='about-us__description-text'>
              {lang === 'en'
                ? 'Starting from 2023, we operate as a non-governmental organization "Ukrainian Center of Psychology \'The Soul\'".'
                : 'З 2023 року ми працюємо як Громадська організація \'Український Центр психології "Душа"\'.'}
            </p>
            <p className='about-us__description-text'>
              {lang === 'en' ? (
                <>
                  Our team consists of 4 psychologists -{' '}
                  <NavLink to={`/${lang}/team/olexandra-shymanova`}>
                    Olexandra Shymanova
                  </NavLink>
                  ,{' '}
                  <NavLink to={`/${lang}/team/mariya-vynnytska`}>
                    Mariya Vynnytska
                  </NavLink>
                  ,{' '}
                  <NavLink to={`/${lang}/team/maryna-yakhno`}>
                    Maryna Yakhno
                  </NavLink>
                  , and{' '}
                  <NavLink to={`/${lang}/team/iryna-Royenko`}>
                    Irina Royenko
                  </NavLink>
                  . We are located in different parts of the world - Alexandra
                  in Belgium, Maria in Singapore, Marina and Irina are both in
                  Ukraine. Regardless, we all work together, united by a common
                  goal and mission.
                </>
              ) : (
                <>
                  В нашій команді 4 психологи -{' '}
                  <NavLink to={`/${lang}/team/olexandra-shymanova`}>
                    Олександра Шиманова
                  </NavLink>
                  ,{' '}
                  <NavLink to={`/${lang}/team/mariya-vynnytska`}>
                    Марія Винницька
                  </NavLink>
                  ,{' '}
                  <NavLink to={`/${lang}/team/maryna-yakhno`}>
                    Марина Яхно
                  </NavLink>{' '}
                  та{' '}
                  <NavLink to={`/${lang}/team/iryna-Royenko`}>
                    Ірина Роєнко
                  </NavLink>
                  . Всі ми знаходимось в різних кінцях світу - Олександра -
                  Бельгія, Марія - Сінгапур, Марина та Ірина - Україна, але
                  працюємо разом, обʼєднані однією метою та місією.
                </>
              )}
            </p>
          </div>
          <div className='about-us__description-documents-container'>
            <img
              src={documents}
              alt='The Soul Center documents'
              className='about-us__description-documents'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
