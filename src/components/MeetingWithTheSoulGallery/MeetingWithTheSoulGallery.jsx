import { meetingWithSoul } from '../../data/meetingWithSoul';
import { MeetingWithTheSoulGalleryItem } from '../MeetingWithTheSoulGalleryItem/MeetingWithTheSoulGalleryItem';

export const MeetingWithTheSoulGallery = () => {
  return (
    <ul className='meeting-soul__gallery'>
      {meetingWithSoul.map((item) => (
        <MeetingWithTheSoulGalleryItem key={item.id} images={item.images} />
      ))}
    </ul>
  );
};
