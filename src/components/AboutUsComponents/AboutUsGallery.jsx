import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

export const AboutUsGallery = ({ images, slides }) => {
  return (
    <div className='about-us__gallery'>
      <Carousel className='about-us__activities-carousel carousel-dark theme-light'>
        <Carousel.Item>
          <div className='about-us__activities-carousel-item-content'>
            {images.slice(0, 3).map((activity) => (
              <img
                className='about-us__activities-carousel-item-img'
                key={activity.imgSrc}
                src={activity.imgSrc}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about-us__activities-carousel-item-content'>
            {images.slice(3, 6).map((activity) => (
              <img
                className='about-us__activities-carousel-item-img'
                key={activity.imgSrc}
                src={activity.imgSrc}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about-us__activities-carousel-item-content'>
            {images.slice(6, 9).map((activity) => (
              <img
                className='about-us__activities-carousel-item-img'
                key={activity.imgSrc}
                src={activity.imgSrc}
              />
            ))}
          </div>
        </Carousel.Item>
        {slides >= 4 && (
          <Carousel.Item>
            <div className='about-us__activities-carousel-item-content'>
              {images.slice(9, 12).map((activity) => (
                <img
                  className='about-us__activities-carousel-item-img'
                  key={activity.imgSrc}
                  src={activity.imgSrc}
                />
              ))}
            </div>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
};

AboutUsGallery.propTypes = {
  images: PropTypes.array.isRequired,
  slides: PropTypes.number,
};
