import PropTypes from 'prop-types';

export const CrisisCenterConsultationItem = ({ title, text }) => {
  return (
    <li className='consultations__item'>
      <h3 className='consultations__title'>{title}</h3>
      <p className='consultations__text'>{text}</p>
    </li>
  );
};

CrisisCenterConsultationItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
