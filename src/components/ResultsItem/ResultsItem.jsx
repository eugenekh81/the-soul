import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import sprite from '/images/results/results.svg';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const ResultsItem = ({ number, text, iconId }) => {
  const lang = useLang();

  return (
    <Col sm={6} md={4} className='results__item'>
      <svg className='results__icon'>
        <use href={`${sprite}${iconId}`}></use>
      </svg>
      <div className='results__text'>
        <span className='results__number'>{number} </span>

        <span className='results__description'>{text[lang]}</span>
      </div>
    </Col>
  );
};

ResultsItem.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }).isRequired,
  iconId: PropTypes.string.isRequired,
};
