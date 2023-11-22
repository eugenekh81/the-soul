import Carousel from 'react-bootstrap/Carousel';
import { meetingWithSoul } from '../../data/meetingWithSoul';
import { MeetingWithTheSoulGalleryItem } from '../MeetingWithTheSoulGalleryItem/MeetingWithTheSoulGalleryItem';

export const MeetingWithTheSoulGallery = () => {
  return (
    <>
      <Carousel variant='dark' className='meeting-soul__carousel'>
        {meetingWithSoul.map((item) => (
          <Carousel.Item key={item.id}>
            <div className='meeting-soul__gallery-item meeting-soul__gallery-item--carousel'>

            {item.images.map((image) => (
              <img
              key={image}
              src={image}
              className='meeting-soul__gallery-image'
              alt='gallery photo'
              />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <ul className='meeting-soul__gallery'>
        {meetingWithSoul.map((item) => (
          <MeetingWithTheSoulGalleryItem key={item.id} images={item.images} />
        ))}
      </ul>
    </>
  );
};
