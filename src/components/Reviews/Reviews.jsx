import Carousel from 'react-bootstrap/Carousel';
import './Reviews.scss';

import { reviews } from '../../data/reviews';
import { ReviewItem } from '../ReviewItem/';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const Reviews = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='section page__section reviews'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Reviews': 'Відгуки'}
        </h2>

        <Carousel
          variant='dark'
          className='reviews__carousel reviews__carousel--mobile'
        >
          {reviews.map((r) => {
            return (
              <Carousel.Item interval={3000} key={r.id}>
                <ReviewItem {...r} key={r.id} />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <Carousel
          className='reviews__carousel reviews__carousel--tablet-s'
          variant='dark'
        >
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(0, 2).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(2, 4).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(4, 6).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(6, 8).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(8, 9).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
        </Carousel>

        <Carousel
          className='reviews__carousel reviews__carousel--desktop'
          variant='dark'
        >
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(0, 3).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(3, 6).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='reviews__slide-container'>
              {reviews.slice(6, 9).map((r) => (
                <ReviewItem {...r} key={`${r.id}-${r.imgSrc}`} />
              ))}
            </div>
          </Carousel.Item>
        </Carousel>

        <Carousel
          className='reviews__carousel reviews__carousel--mobile video-reviews'
          variant='dark'
        >
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

        <Row className='video-reviews video-reviews--desktop'>
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
