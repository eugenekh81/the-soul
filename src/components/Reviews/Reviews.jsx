import Carousel from 'react-bootstrap/Carousel';
import './Reviews.scss';

import { reviews } from '../../data/reviews';
import { ReviewItem } from '../ReviewItem/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Reviews = () => {
  return (
    <section className='section page__section reviews'>
      <div className='container'>
        <h2 className='section__title'>Reviews</h2>

        <div className='reviews__list reviews__list--mobile'>
          <Carousel variant='dark' className="reviews__carousel--reviews">
            {reviews.map((r) => {
              return (
                <Carousel.Item interval={3000} key={r.id}>
                  <ReviewItem {...r} key={r.id} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        <Carousel variant='dark'>
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

        <Row className='reviews__list reviews__list--desktop'>
          {reviews.map((r) => (
            <Col key={r.id} sm={6} lg={4}>
              <ReviewItem {...r} />
            </Col>
          ))}
        </Row>

        <Row className='reviews__list reviews__list--desktop video-reviews'>
          <div className='reviews__item'>
            <iframe
              src='https://www.youtube.com/embed/fEuExMpBU_o?si=x6k3GVOaYExfrJSb'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='reviews__item'>
            <iframe
              src='https://www.youtube.com/embed/Go9A6_EpRn8?si=Lux-SfoVLVAoq_Np'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='reviews__item'>
            <iframe
              src='https://www.youtube.com/embed/RgGZInvpBLg?si=r6KLC6uHptT9CDPr'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </Row>
      </div>
    </section>
  );
};
