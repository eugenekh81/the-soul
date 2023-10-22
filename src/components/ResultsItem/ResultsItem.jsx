import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import sprite from '/images/infographics/infographics.svg';

export const ResultsItem = ({ number, text, iconId }) => {
  return (
    <Col sm={6} md={4} className='infographics__item'>
      <svg className='infographics__icon'>
        <use href={`${sprite}${iconId}`}></use>
      </svg>
      <div className='infographics__text'>
        <span className='infographics__number'>{number} </span>

        <span className='infographics__description'>{text}</span>
      </div>
    </Col>
  );
};

ResultsItem.propTypes = {
  number: PropTypes.numberisRequired,
  text: PropTypes.stringisRequired,
  iconId: PropTypes.stringisRequired,
};
