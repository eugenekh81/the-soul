import PropTypes from 'prop-types';

export const MeetingWithTheSoulGalleryItem = ({ images }) => {
  console.log(images);
  return (
    <li className='meeting-soul__gallery-item'>
      {images.map((image) => (
        <img
          key={image}
          src={image}
          className='meeting-soul__gallery-image'
          alt='gallery photo'
        />
      ))}
    </li>
  );
};

MeetingWithTheSoulGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};
