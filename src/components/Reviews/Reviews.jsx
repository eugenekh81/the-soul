import Carousel from 'react-bootstrap/Carousel';
import './Reviews.scss';

import reviews from '../../data/reviews.json';
import { ReviewItem } from '../ReviewItem/';
console.log(reviews);

export const Reviews = () => {
  return (
    <section className='section page__section reviews'>
      <div className='container'>
        <h2 className='section__title'>Reviews</h2>

        <div className='reviews__list'>
        <Carousel data-bs-theme="dark">
         {reviews.map(r => {
          console.log(r, 'this is review');
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
