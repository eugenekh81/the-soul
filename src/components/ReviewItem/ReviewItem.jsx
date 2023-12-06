import { useLang } from '../../hooks/useLang';
import './ReviewItem.scss';
import PropTypes from 'prop-types';

export const ReviewItem = ({ name, imgSrc, location, review_text }) => {
  const lang = useLang();
  return (
    <div className='reviews__item review'>
      <div className='review__image-container'>
        <img className='review__image' src={imgSrc} alt='person' />
      </div>

      <div className='review__name'>{name[lang]}</div>

      <div className='review__location'>{location[lang]}</div>

      <div className='review__text'>{review_text[lang]}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  name: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }).isRequired,
  imgSrc: PropTypes.string.isRequired,
  location: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }).isRequired,
  review_text: PropTypes.shape({
    en: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
  }).isRequired,
};
