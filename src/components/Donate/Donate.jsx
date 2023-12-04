import sprite from '/images/concepts/concepts.svg';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useContext, useEffect, useState } from 'react';
import './Donate.scss';
import { LangContext } from '../../context/LangContextProvider';
import cn from 'classnames';

export const Donate = () => {
  const { lang } = useContext(LangContext);
  const { ref: mainPhotoRef, inView } = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  return (
    <NavLink
      to={`/${lang}/donate`}
      className={cn(
        'button',
        'section__button',
        'donate__button',
        'animation',
        'animation__fade-up',
        {
          'animation__fade-up--fire': inView || animated,
        }
      )}
    >
      <svg className='donate__icon'>
        <use href={sprite + '#plant'} />
      </svg>
      {lang === 'en' ? 'Donate now' : 'Допомогти'}
      <div className='animation__point' ref={mainPhotoRef}></div>
    </NavLink>
  );
};
