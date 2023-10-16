import Carousel from 'react-bootstrap/Carousel';
import './Reviews.scss';

import { reviews } from '../../data/reviews';
import { ReviewItem } from '../ReviewItem/';

export const Reviews = () => {
  return (
    <section className='section page__section reviews'>
      <div className='container'>
        <h2 className='section__title'>Reviews</h2>

        <div className='reviews__list'>
        <Carousel>
         {reviews.map(r => {
          return (
          <Carousel.Item interval={3000} key={r.id}>
            <ReviewItem {...r} key={r.id} />
          </Carousel.Item>
          )})}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
