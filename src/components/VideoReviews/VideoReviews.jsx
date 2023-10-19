import './VideoReviews.scss';
import Carousel from 'react-bootstrap/Carousel';

export const VideoReviews = () => {
  return (
    <section className='page__section section video-reviews'>
      <div className='container'>
        <h2 className='section__title'>Video Reviews</h2>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className='video-reviews__item'>
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
            <div className='video-reviews__item'>
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
            <div className='video-reviews__item'>
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
