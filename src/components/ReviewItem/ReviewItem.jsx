import './ReviewItem.scss';
import PropTypes from 'prop-types';


import personPlaceholderImg from '/images/reviews/review_person_placeholder.png';

export const ReviewItem = ({
  name,
  location,
  review_text
}) => {
    return (
    <div className='reviews__item review'>
      <div className='review__image-container'>
        <img
          className='review__image'
          src={personPlaceholderImg}
          alt='person'
        />
      </div>

      <div className='review__name'>{name}</div>

      <div className='review__location'>{location}</div>

      <div className='review__text'>{review_text}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  review_text: PropTypes.string.isRequired,
}
