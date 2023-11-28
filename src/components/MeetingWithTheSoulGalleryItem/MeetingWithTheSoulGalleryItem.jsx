import PropTypes from 'prop-types';

export const MeetingWithTheSoulGalleryItem = ({ images }) => {
  console.log(images);
  return (
    <div className='meeting-soul__gallery-item'>
      {images.map((image) => (
        <img
          key={image}
          src={image}
          className='meeting-soul__gallery-image'
          alt='gallery photo'
        />
      ))}
    </div>
  );
};

MeetingWithTheSoulGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};
