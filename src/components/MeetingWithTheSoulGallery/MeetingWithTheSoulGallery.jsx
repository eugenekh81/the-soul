import Carousel from 'react-bootstrap/Carousel';
import { meetingWithSoul } from '../../data/meetingWithSoul';
// import { MeetingWithTheSoulGalleryItem } from '../MeetingWithTheSoulGalleryItem';

export const MeetingWithTheSoulGallery = () => {
  return (
    <>
      <Carousel variant='dark' className='meeting-soul__carousel'>
        {meetingWithSoul.map((item) => (
          <Carousel.Item key={item.id}>
            <div className='meeting-soul__gallery-item meeting-soul__gallery-item--carousel'>
              {item.images.map((image) => (
                <div className='meeting-soul__gallery-item' key={image}>
                  <img
                    src={image}
                    className='meeting-soul__gallery-image'
                    alt='gallery photo'
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <ul className='meeting-soul__gallery'>
        {meetingWithSoul.map((item) => (
          <MeetingWithTheSoulGalleryItem key={item.id} images={item.images} />
        ))}
      </ul> */}

      <Carousel
        variant='dark'
        className='meeting-soul__carousel meeting-soul__carousel--desktop'
      >
        <Carousel.Item className='meeting-soul__carousel-item--desktop'>
          <div className='meeting-soul__carousel-items-container--desktop'>
            {meetingWithSoul.slice(0, 3).map((item) => (
              <div className='meeting-soul__gallery-item' key={item.id}>
                {item.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    className='meeting-soul__gallery-image'
                    alt='gallery photo'
                  />
                ))}
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item className='meeting-soul__carousel-item--desktop'>
          <div className='meeting-soul__carousel-items-container--desktop'>
            {meetingWithSoul.slice(3, 6).map((item) => (
              <div className='meeting-soul__gallery-item' key={item.id}>
                {item.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    className='meeting-soul__gallery-image'
                    alt='gallery photo'
                  />
                ))}
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item className='meeting-soul__carousel-item--desktop'>
          <div className='meeting-soul__carousel-items-container--desktop'>
            {meetingWithSoul.slice(6, 9).map((item) => (
              <div className='meeting-soul__gallery-item' key={item.id}>
                {item.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    className='meeting-soul__gallery-image'
                    alt='gallery photo'
                  />
                ))}
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
