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
        <Carousel variant='dark'>
         {reviews.map(r => {
          return (
          <Carousel.Item interval={3000} key={r.id}>
            <ReviewItem {...r} key={r.id} />
          </Carousel.Item>
          )})}
          </Carousel>
        </div>

        <Carousel variant="dark">
          <Carousel.Item>
            <div className='reviews__item'>
              <iframe
                src='https://www.youtube.com/embed/fEuExMpBU_o?si=x6k3GVOaYExfrJSb'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__item'>
              <iframe
                src='https://www.youtube.com/embed/Go9A6_EpRn8?si=Lux-SfoVLVAoq_Np'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__item'>
              <iframe
                src='https://www.youtube.com/embed/RgGZInvpBLg?si=r6KLC6uHptT9CDPr'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
