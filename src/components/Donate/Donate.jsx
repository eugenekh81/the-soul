import sprite from '/images/concepts/concepts.svg';
import './Donate.scss';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const Donate = () => {
  const { lang } = useContext(LangContext);
  return (
    <a href='#' className='button section__button donate__button'>
      <svg className='donate__icon'>
        <use href={sprite + '#plant'} />
      </svg>
      {lang === 'en' ? 'Donate now' : 'Допомогти'}
    </a>
  );
};
