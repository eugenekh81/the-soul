import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import sprite from '/images/results/results.svg';

export const ResultsItem = ({ number, text, iconId }) => {
  return (
    <Col sm={6} md={4} className='results__item'>
      <svg className='results__icon'>
        <use href={`${sprite}${iconId}`}></use>
      </svg>
      <div className='results__text'>
        <span className='results__number'>{number} </span>

        <span className='results__description'>{text}</span>
      </div>
    </Col>
  );
};

ResultsItem.propTypes = {
  number: PropTypes.numberisRequired,
  text: PropTypes.stringisRequired,
  iconId: PropTypes.stringisRequired,
};
