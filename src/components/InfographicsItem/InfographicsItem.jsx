import PropTypes from 'prop-types';
import sprite from '/images/infographics/infographics.svg';

export const InfographicsItem = ({
  number,
  text,
  iconId,
}) => {
  return (
    <li className='infographics__item'>
      <svg className='infographics__icon'>
        <use href={`${sprite}${iconId}`}></use>
      </svg>
      <div className="infographics__text">
        <span className="infographics__number">
          {number}
          {' '}
          </span>

        <span className='infographics__description'>
          {text}
        </span>
      </div>
    </li>
  );
};

InfographicsItem.propTypes = {
  number: PropTypes.numberisRequired,
  text: PropTypes.stringisRequired,
  iconId: PropTypes.stringisRequired,
}
