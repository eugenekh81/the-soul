import PropTypes from 'prop-types';

export const CrisisCenterSpecialThanksItem = ({ src }) => {
  return (
    <li className='special-thanks__item'>
      <img src={src} alt='Thank you!' className='special-thanks__img' />
    </li>
  );
};

CrisisCenterSpecialThanksItem.propTypes = {
  src: PropTypes.string.isRequired,
};
