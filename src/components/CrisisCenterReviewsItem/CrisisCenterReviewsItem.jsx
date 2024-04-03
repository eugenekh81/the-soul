import PropTypes from 'prop-types';

export const CrisisCenterReviewsItem = ({ text, time }) => {
  return (
    <li className='crisis-center__reviews-item crisis-center__reviews-item--blue'>
      {text}

      <div className='crisis-center__reviews-notification crisis-center__reviews-notification--blue'>
        {time}
        <svg
          className='crisis-center__reviews-notification-icon'
          viewBox='0 0 23 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.73828 7.9375L5.53175 12.625L14.6361 1.375M10.8426 10.75L12.36 12.625L21.4643 1.375'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </li>
  );
};

CrisisCenterReviewsItem.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
