import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const AboutUsHero = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='about-us__hero'>
      <h1 className='about-us__main-title'>
        {lang === 'en' ? 'About us' : 'Про нас'}
      </h1>
    </section>
  );
};