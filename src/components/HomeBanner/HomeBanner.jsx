import './HomeBanner.scss';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import cn from 'classnames';

export const HomeBanner = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      <section className='home-hero'>
        <div className='home-hero__banner'></div>
        <div className='home-hero__text-container'>
          <h1 className='home-hero__title'>
            THE S<img src='/images/home/title-o.png' />
            UL
          </h1>
          <p
            className={cn('home-hero__subtitle', {
              'home-hero__subtitle--ua': lang === 'ua',
            })}
          >
            {lang === 'en' ? 'psychology center' : 'психологічний центр'}
          </p>
        </div>
      </section>
    </>
  );
};
