import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const MentalStateItem = ({ percent, description }) => {
  const lang = useLang();
  return (
    <li className='mental-state__list-item'>
      <span className='mental-state__list-item--state'>{`${percent}%`}</span>
      {description[lang]}
    </li>
  );
};

MentalStateItem.propTypes = {
  percent: PropTypes.number.isRequired,
  description: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }),
};
