import './ReviewItem.scss';
import PropTypes from 'prop-types';

export const ReviewItem = ({
  name,
  imgSrc,
  location,
  review_text
}) => {
  console.log(name);
    return (
    <div className='reviews__item review'>
      <div className='review__image-container'>
        <img
          className='review__image'
          src={imgSrc}
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
  imgSrc: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  review_text: PropTypes.string.isRequired,
}
