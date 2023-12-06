import { useLang } from '../../hooks/useLang';

export const AboutUsHero = () => {
  const lang = useLang();

  return (
    <section className='about-us__hero'>
      <h1 className='about-us__main-title animation animation__fade-up animation__fade-up--fire'>
        {lang === 'en' ? 'About us' : 'Про нас'}
      </h1>
    </section>
  );
};
