import sprite from '/images/concepts/concepts.svg';
import './Donate.scss';

export const Donate = () => {
  return (
    <a href='#' className='button section__button donate__button'>
      <svg className='donate__icon'>
        <use href={sprite + '#plant'} />
      </svg>
      Donate now
    </a>
  );
};
