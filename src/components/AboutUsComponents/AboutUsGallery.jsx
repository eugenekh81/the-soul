import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

export const AboutUsGallery = ({ images }) => {
  return (
    <div className='about-us__gallery'>
      <Carousel className='about-us__activities-carousel about-us__activities-carousel--mobile carousel-dark theme-light'>
        {images.map((activity) => (
          <Carousel.Item key={activity.imgSrc}>
            <div className='about-us__activities-carousel-item-content'>
              <img
                className='about-us__activities-carousel-item-img'
                src={activity.imgSrc}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel className='about-us__activities-carousel about-us__activities-carousel--tablet-m carousel-dark theme-light'>
        <Carousel.Item>
          <div className='about-us__activities-carousel-item-content'>
            {images.slice(0, 2).map((activity) => (
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
            {images.slice(2, 4).map((activity) => (
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
            {images.slice(4, 6).map((activity) => (
              <img
                className='about-us__activities-carousel-item-img'
                key={activity.imgSrc}
                src={activity.imgSrc}
              />
            ))}
          </div>
        </Carousel.Item>
        {images.length > 6 && (
          <Carousel.Item>
            <div className='about-us__activities-carousel-item-content'>
              {images.slice(6, 8).map((activity) => (
                <img
                  className='about-us__activities-carousel-item-img'
                  key={activity.imgSrc}
                  src={activity.imgSrc}
                />
              ))}
            </div>
          </Carousel.Item>
        )}
        {images.length > 8 && (
          <Carousel.Item>
            <div className='about-us__activities-carousel-item-content'>
              {images.slice(8, 10).map((activity) => (
                <img
                  className='about-us__activities-carousel-item-img'
                  key={activity.imgSrc}
                  src={activity.imgSrc}
                />
              ))}
            </div>
          </Carousel.Item>
        )}
        {images.length > 10 && (
          <Carousel.Item>
            <div className='about-us__activities-carousel-item-content'>
              {images.slice(10, 12).map((activity) => (
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

      <Carousel className='about-us__activities-carousel about-us__activities-carousel--desktop carousel-dark theme-light'>
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
        {images.length > 9 && (
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
